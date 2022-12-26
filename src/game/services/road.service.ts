import { extendObservable, observable } from "mobx";
import { Assets, Sprite } from "pixi.js";
import { ACTOR_KEYS } from "../types/actor-keys.type";
import { Actor } from "../types/actor.type";
import { Axis2d } from "../types/axis2d.type";
import { TEXTURE_KEYS } from "../types/sprite-keys.type";
import { applicationService } from "./application.service";
import { gameService } from "./game.service";

export const ROAD_HEIGHT = 0.3;

const initialPosition: Axis2d = {
  x: applicationService.screen.width / 2,
  y: applicationService.screen.height,
};

const state = observable({
  sprite: new Sprite(),
});

const initializeTexture = () => {
  const texture = Assets.get(TEXTURE_KEYS.ROAD);
  state.sprite.texture = texture;
};

const initializePosition = () => {
  state.sprite.anchor.x = 0.5;
  state.sprite.anchor.y = 1;
  state.sprite.width = applicationService.screen.width * 1.2;
  state.sprite.height = applicationService.screen.height * ROAD_HEIGHT;
  state.sprite.x = initialPosition.x;
  state.sprite.y = initialPosition.y;
};

const load = () => {
  gameService.addActor(ACTOR_KEYS.ROAD, roadService);
  initializeTexture();
  initializePosition();
};

export const roadService = extendObservable(state, {
  load,
}) satisfies Actor;
