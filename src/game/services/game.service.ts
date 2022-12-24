import { extendObservable, observable } from "mobx";
import { Actor } from "src/game/types/actor.type";
import { ACTOR_KEYS } from "../types/actor-keys.type";
import { applicationService } from "./application.service";
import { loadService } from "./load.service";
import { playerCarService } from "./player-car.service";
import { roadService } from "./road.service";
import { skyService } from "./sky.service";

const state = observable({
  loaded: false,
  actors: new Map<string | ACTOR_KEYS, Actor>(),
});

// const renderScenario = () => {
//   state.actors.forEach((actor) => {
//     applicationService.addActor(actor);
//   });
// };

const loadAssets = async () => {
  await loadService.loadSprites();
};

const loadActors = () => {
  skyService.load();
  roadService.load();
  playerCarService.load();
};

const load = async () => {
  if (!state.loaded) {
    state.loaded = true;
    await loadAssets();
    loadActors();

    const ticker = applicationService.app.ticker.add((delta) => {
      state.actors.forEach((actor) => {
        actor.onTick?.(delta);
      });
    });

    ticker.start();
  }
};

const attachToDiv = (div: HTMLDivElement) => {
  div.appendChild(applicationService.view);
};

const removeFromDiv = (div: HTMLDivElement) => {
  div.removeChild(applicationService.view);
};

const addActor = (actor: Actor) => {
  state.actors.set(ACTOR_KEYS.PLAYER_CAR, actor);
  applicationService.app.stage.addChild(actor.sprite);
};

export const gameService = extendObservable(state, {
  // renderScenario,
  load,
  attachToDiv,
  removeFromDiv,
  addActor,
});
