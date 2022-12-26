import { extendObservable, observable } from "mobx";
import { Assets, BLEND_MODES, Sprite } from "pixi.js";
import { ACTOR_KEYS } from "../types/actor-keys.type";
import { Actor } from "../types/actor.type";
import { TEXTURE_KEYS } from "../types/sprite-keys.type";
import { applicationService } from "./application.service";
import { gameService } from "./game.service";
import { ROAD_HEIGHT } from "./road.service";

const state = observable({
  sprite: new Sprite(),
});

const load = () => {
  const texture = Assets.get(TEXTURE_KEYS.MOUNTAIN_FADE);
  state.sprite.texture = texture;
  state.sprite.position.set(
    0,
    applicationService.screen.height * (1 - ROAD_HEIGHT) - 20
  );
  state.sprite.width = applicationService.screen.width;
  state.sprite.height = 100;
  state.sprite.anchor.set(0, 0.5);
  state.sprite.blendMode = BLEND_MODES.NORMAL;
  // state.sprite.tint = 0x000000;
  // state.sprite.height = applicationService.screen.height;
  gameService.addActor(ACTOR_KEYS.MOUNTAIN_FADE, mountainFadeService);
};

export const mountainFadeService = extendObservable(state, {
  load,
}) satisfies Actor;
