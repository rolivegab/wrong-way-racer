import { extendObservable, observable } from "mobx";
import { Assets, Sprite } from "pixi.js";
import { Actor } from "../types/actor.type";
import { Axis2d } from "../types/axis2d.type";
import { TEXTURE_KEYS } from "../types/sprite-keys.type";
import { applicationService } from "./application.service";
import { gameService } from "./game.service";

const SKY_HEIGHT = 0.8;

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
  state.sprite.width = applicationService.screen.width;
  state.sprite.height = applicationService.screen.height * SKY_HEIGHT;
  state.sprite.x = initialPosition.x;
  state.sprite.y = initialPosition.y;
};

const load = () => {
  gameService.addActor(skyService);
  initializeTexture();
  initializePosition();
};

export const skyService = extendObservable(state, {
  load,
}) satisfies Actor;
