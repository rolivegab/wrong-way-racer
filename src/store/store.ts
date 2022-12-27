import { observable } from "mobx";
import { appStore } from "./app.store";
import { configStore } from "./config.store";
import { gameStore } from "./game.store";

export const store = observable({
  application: appStore,
  config: configStore,
  game: gameStore,
});
