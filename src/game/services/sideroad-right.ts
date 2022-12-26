import { extendObservable } from "mobx";
import { Assets, Sprite } from "pixi.js";
import { ACTOR_KEYS } from "../types/actor-keys.type";
import { Actor } from "../types/actor.type";
import { Axis2d } from "../types/axis2d.type";
import { TEXTURE_KEYS } from "../types/sprite-keys.type";
import { calculateTween } from "../utils/calculate-tween";
import { setScaleTo } from "../utils/set-scale-to";
import { easeInExpo } from "../utils/tweens";
import { applicationService } from "./application.service";
import { gameService } from "./game.service";

const initialPosition = {
  position: {
    x: applicationService.screen.width * 0.52,
    y: applicationService.screen.height * 0.7,
  } satisfies Axis2d,
  width: 1,
};

const finalPosition = {
  position: {
    x: applicationService.screen.width * 1,
    y: applicationService.screen.height * 1.9,
  },
  width: 2000,
};

const state = {
  sprite: new Sprite(),
  animation: {
    elapsed: 10000,
    duration: 10000, // 10 seconds
  },
};

const initialize = () => {
  state.sprite.position.set(0, 0);
  state.sprite.anchor.set(0, 1);

  setScaleTo(state.sprite, finalPosition.width, "width");
  state.sprite.position.set(finalPosition.position.x, finalPosition.position.y);
};

const load = () => {
  const texture = Assets.get(TEXTURE_KEYS.SIDEROAD_RIGHT);
  state.sprite.texture = texture;
  gameService.addActor(ACTOR_KEYS.SIDEROAD_RIGHT, sideRoadRightService);
  initialize();
};

const onTick: Actor["onTick"] = (_, elapsedMS) => {
  state.animation.elapsed += elapsedMS;

  const progress = state.animation.elapsed / state.animation.duration;

  setScaleTo(
    state.sprite,
    calculateTween({
      from: initialPosition.width,
      to: finalPosition.width,
      progress,
      calculation: easeInExpo,
    }),
    "width"
  );

  state.sprite.x = calculateTween({
    from: initialPosition.position.x,
    to: finalPosition.position.x,
    progress,
    calculation: easeInExpo,
  });

  state.sprite.y = calculateTween({
    from: initialPosition.position.y,
    to: finalPosition.position.y,
    progress,
    calculation: easeInExpo,
  });

  repeatLogic();
};

const repeatLogic = () => {
  if (state.animation.elapsed > state.animation.duration) {
    state.animation.elapsed = Math.random() * 3000;
  }
};

export const sideRoadRightService = extendObservable(state, {
  load,
  onTick,
}) satisfies Actor;
