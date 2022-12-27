import { extendObservable, observable } from "mobx";
import { Assets, Sprite } from "pixi.js";
import { ACTOR_KEYS } from "../types/actor-keys.type";
import { Actor } from "../types/actor.type";
import { Axis2d } from "../types/axis2d.type";
import { TEXTURE_KEYS } from "../types/sprite-keys.type";
import { calculateTween } from "../utils/calculate-tween";
import { setScaleTo } from "../utils/set-scale-to";
import { easeInExpo } from "../utils/tweens";
import { applicationService } from "./application.service";
import { explosionService } from "./explosion.service";
import { gameService } from "./game.service";
import { playerCarService } from "./player-car.service";

const DURATION = 3000;

export type EnemyTypes =
  | TEXTURE_KEYS.ENEMY_LEFT
  | TEXTURE_KEYS.ENEMY_CENTER
  | TEXTURE_KEYS.ENEMY_RIGHT;

const initialStates: Record<EnemyTypes, State> = {
  [TEXTURE_KEYS.ENEMY_LEFT]: {
    position: {
      x: applicationService.screen.width * 0.456,
      y: applicationService.screen.height * 0.701,
    },
    scale: 1,
  },
  [TEXTURE_KEYS.ENEMY_CENTER]: {
    position: {
      x: applicationService.screen.width * 0.472,
      y: applicationService.screen.height * 0.701,
    },
    scale: 1,
  },
  [TEXTURE_KEYS.ENEMY_RIGHT]: {
    position: {
      x: applicationService.screen.width * 0.485,
      y: applicationService.screen.height * 0.701,
    },
    scale: 1,
  },
};

const finalStates: Record<EnemyTypes, State> = {
  [TEXTURE_KEYS.ENEMY_LEFT]: {
    position: {
      x: applicationService.screen.width * -0.2,
      y: applicationService.screen.height * 1.4,
    },
    scale: 400,
  },
  [TEXTURE_KEYS.ENEMY_CENTER]: {
    position: {
      x: applicationService.screen.width * 0.52,
      y: applicationService.screen.height * 1.4,
    },
    scale: 400,
  },
  [TEXTURE_KEYS.ENEMY_RIGHT]: {
    position: {
      x: applicationService.screen.width * 1.2,
      y: applicationService.screen.height * 1.4,
    },
    scale: 400,
  },
};

interface State {
  position: Axis2d;
  scale: number;
}

interface Enemy {
  type: EnemyTypes;
  sprite: Sprite;
  initialState: State;
  finalState: State;
  elapsed: number;
}

interface Colision {
  fromX: number;
  toX: number;
}

const state = observable<{
  enemies: Enemy[];
  colisions: Colision[];
  exploded: boolean;
  paused: boolean;
}>({
  enemies: [],
  colisions: [],
  exploded: false,
  paused: false,
});

const createEnemy = (type: EnemyTypes) => {
  const texture = Assets.get(type);
  const sprite = new Sprite(texture);

  const initialState = initialStates[type];

  sprite.position.set(initialState.position.x, initialState.position.y);
  sprite.anchor.x = 0.5;
  sprite.anchor.y = 1;
  setScaleTo(sprite, initialState.scale, "width");

  state.enemies.push({
    type,
    sprite,
    initialState: initialStates[type],
    finalState: finalStates[type],
    elapsed: 0,
  });

  applicationService.app.stage.addChild(sprite);
  applicationService.app.stage.sortChildren();

  return sprite;
};

const explode = (position: Axis2d) => {
  if (!state.exploded) {
    state.exploded = true;
    explosionService.explodeAt(position);
  }
};

const calculateColision = ({
  progress,
  playerCarSprite,
  type,
}: {
  progress: number;
  type: EnemyTypes;
  playerCarSprite: Sprite;
}) => {
  if (progress >= 0.77 && progress <= 0.95) {
    if (type === TEXTURE_KEYS.ENEMY_LEFT) {
      if (playerCarSprite.x < applicationService.screen.width * 0.33) {
        explode(playerCarSprite.position);
      }
    } else if (type == TEXTURE_KEYS.ENEMY_CENTER) {
      if (
        playerCarSprite.x > applicationService.screen.width * 0.33 &&
        playerCarSprite.x < applicationService.screen.width * 0.66
      ) {
        explode(playerCarSprite.position);
      }
    } else {
      if (playerCarSprite.x > applicationService.screen.width * 0.66) {
        explode(playerCarSprite.position);
      }
    }
  }
};

const onTick = () => {
  if (state.paused) return;
  state.enemies = state.enemies.filter((enemy) => {
    enemy.elapsed += applicationService.app.ticker.elapsedMS;

    const progress = enemy.elapsed / DURATION;

    const calculatedScale = calculateTween({
      from: enemy.initialState.scale,
      to: enemy.finalState.scale,
      progress,
      calculation: easeInExpo,
    });

    const calculatedPositionX = calculateTween({
      from: enemy.initialState.position.x,
      to: enemy.finalState.position.x,
      progress,
      calculation: easeInExpo,
    });

    const calculatedPositionY = calculateTween({
      from: enemy.initialState.position.y,
      to: enemy.finalState.position.y,
      progress,
      calculation: easeInExpo,
    });

    setScaleTo(enemy.sprite, calculatedScale, "width");
    enemy.sprite.position.set(calculatedPositionX, calculatedPositionY);

    calculateColision({
      progress,
      playerCarSprite: playerCarService.sprite,
      type: enemy.type,
    });

    if (enemy.elapsed > DURATION) {
      enemy.sprite.destroy();
      return false;
    }

    return true;
  });
};

const load = () => {
  gameService.addActor(ACTOR_KEYS.ENEMY, enemyService);
};

export const enemyService = extendObservable(state, {
  createEnemy,
  load,
  onTick,
}) satisfies Actor;
