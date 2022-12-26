import { extendObservable, observable } from "mobx";
import { BLEND_MODES, filters, Graphics, Sprite } from "pixi.js";
import { ACTOR_KEYS } from "../types/actor-keys.type";
import { Actor } from "../types/actor.type";
import { applicationService } from "./application.service";
import { gameService } from "./game.service";
import { ROAD_HEIGHT } from "./road.service";

const state = observable({
  sprite: new Graphics(),
});

const load = () => {
  const height = applicationService.screen.height;
  const width = applicationService.screen.width;
  state.sprite.beginFill(0xffffff);
  state.sprite.drawPolygon(
    width * 0.2,
    height * (1 - ROAD_HEIGHT) + 5,

    width / 2,
    height * (1 - ROAD_HEIGHT) + 15,

    width - width * 0.2,
    height * (1 - ROAD_HEIGHT) + 5,

    width - width * 0.2,
    height * (1 - ROAD_HEIGHT) - 5,

    width / 2,
    height * (1 - ROAD_HEIGHT) - 15,

    width * 0.2,
    height * (1 - ROAD_HEIGHT) - 5
  );
  const filter = new filters.BlurFilter(15);
  filter.padding = applicationService.screen.width;
  state.sprite.filters = [filter];
  state.sprite.blendMode = BLEND_MODES.SCREEN;
  gameService.addActor(ACTOR_KEYS.BLUR, blurService);
};

export const blurService = extendObservable(state, { load }) satisfies Actor;
