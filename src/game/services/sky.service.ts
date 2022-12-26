import { extendObservable, observable } from "mobx";
import { Assets, Sprite } from "pixi.js";
import { ACTOR_KEYS } from "../types/actor-keys.type";
import { Actor } from "../types/actor.type";
import { Axis2d } from "../types/axis2d.type";
import { TEXTURE_KEYS } from "../types/sprite-keys.type";
import { setScaleTo } from "../utils/set-scale-to";
import { applicationService } from "./application.service";
import { gameService } from "./game.service";

const initialPosition: Axis2d = {
  x: 0,
  y: 0,
};

const state = observable({
  sprite: new Sprite(),
});

const initializeTexture = () => {
  const texture = Assets.get(TEXTURE_KEYS.SKY);
  state.sprite.texture = texture;
};

const initializePosition = () => {
  setScaleTo(state.sprite, applicationService.screen.width, "width");
  state.sprite.x = initialPosition.x;
  state.sprite.y = initialPosition.y;
};

const load = () => {
  gameService.addActor(ACTOR_KEYS.SKY, skyService);
  initializeTexture();
  initializePosition();
};

export const skyService = extendObservable(state, {
  load,
}) satisfies Actor;
