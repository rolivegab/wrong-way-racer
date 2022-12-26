import { extendObservable, observable } from "mobx";
import { Actor } from "src/game/types/actor.type";
import { ACTOR_KEYS } from "../types/actor-keys.type";
import { applicationService } from "./application.service";
import { blurService } from "./blur.service";
import { loadService } from "./load.service";
import { mountainFadeService } from "./mountain-fade.service";
import { mountainLeftService } from "./mountain-left.service";
import { mountainRightService } from "./mountain-right.service";
import { playerCarService } from "./player-car.service";
import { roadService } from "./road.service";
import { sideRoadLeftService } from "./sideroad-left";
import { sideRoadRightService } from "./sideroad-right";
import { skyService } from "./sky.service";

const state = observable({
  loaded: false,
  actors: new Map<string | ACTOR_KEYS, Actor>(),
});

const loadAssets = async () => {
  await loadService.loadSprites();
};

const loadActors = () => {
  skyService.load();
  mountainFadeService.load();
  roadService.load();
  mountainLeftService.load();
  mountainRightService.load();
  sideRoadLeftService.load();
  sideRoadRightService.load();
  playerCarService.load();
  blurService.load();
};

const load = async () => {
  if (!state.loaded) {
    state.loaded = true;
    await loadAssets();
    loadActors();

    const ticker = applicationService.app.ticker.add((delta) => {
      state.actors.forEach((actor) => {
        const elapsedMS = applicationService.app.ticker.elapsedMS;
        actor.onTick?.(delta, elapsedMS);
      });
    });

    ticker.start();
  }
};

const attachToDiv = (div: HTMLDivElement) => {
  applicationService.app.view.style.width = "100%";
  div.appendChild(applicationService.view);
};

const removeFromDiv = (div: HTMLDivElement) => {
  div.removeChild(applicationService.view);
};

const addActor = (key: ACTOR_KEYS, actor: Actor) => {
  state.actors.set(key, actor);
  applicationService.app.stage.addChild(actor.sprite);
};

export const gameService = extendObservable(state, {
  load,
  attachToDiv,
  removeFromDiv,
  addActor,
});
