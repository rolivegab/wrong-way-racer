import { extendObservable } from "mobx";
import { AnimatedSprite, BaseTexture, Spritesheet } from "pixi.js";
import { ACTOR_KEYS } from "../types/actor-keys.type";
import { Actor } from "../types/actor.type";
import { Axis2d } from "../types/axis2d.type";
import { setScaleTo } from "../utils/set-scale-to";
import { applicationService } from "./application.service";
import { enemyService } from "./enemy.service";
import { gameService } from "./game.service";
import { playerCarService } from "./player-car.service";

const frames: {
  [s: `exp${number}`]: {
    frame: { x: number; y: number; w: number; h: number };
  };
} = {};
const exp: string[] = [];
let counter = 1;
const w = 6720;
const h = 3245;

for (let y = 0; y < h; y += h / 5) {
  for (let x = 0; x < w; x += w / 6) {
    frames[`exp${counter}`] = {
      frame: { x, y, w: w / 6, h: h / 5 },
    };
    exp.push(`exp${counter}`);
    counter += 1;
  }
}

const atlasData = {
  frames,
  meta: {
    image: "src/assets/explosion_spritesheet.avif",
    format: "RGBA8888",
    size: { w: 6720, h: 3245 },
    scale: "1",
  },
  animations: {
    exp, //array of frames by name
  },
};

const state: { animation?: AnimatedSprite } = {
  animation: undefined,
};

const load = async () => {
  const spritesheet = new Spritesheet(
    BaseTexture.from(atlasData.meta.image),
    atlasData
  );
  gameService.addActor(ACTOR_KEYS.EXPLOSION, explosionService);
  await spritesheet.parse();
  state.animation = new AnimatedSprite(spritesheet.animations.exp);
  state.animation.animationSpeed = (1 / 6) * 3;
  state.animation.anchor.set(0.3, 1);
  state.animation.visible = true;
  setScaleTo(state.animation, 1000, "width");
  applicationService.app.stage.addChild(state.animation);
};

const explodeAt = (position: Axis2d) => {
  playerCarService.paused = true;
  enemyService.paused = true;
  setTimeout(() => {
    playerCarService.sprite.visible = false;
    enemyService.enemies.forEach((enemy) => (enemy.sprite.visible = false));
  }, 150);
  const animation = state.animation;
  if (animation) {
    animation.position.set(position.x, position.y);
    animation.visible = true;
    animation.play();
    animation.onLoop = () => {
      animation.visible = false;
      animation?.gotoAndStop(0);
      applicationService.app.stage.removeChild(animation);
    };
  }
};

export const explosionService = extendObservable(state, {
  load,
  explodeAt,
}) satisfies Actor;
