import { extendObservable, observable } from "mobx";
import * as PIXI from "pixi.js";
import { configStore } from "./config.store";

const state = observable<{ app: PIXI.Application<HTMLCanvasElement> }>({
  app: new PIXI.Application<HTMLCanvasElement>({
    width: configStore.width,
  }),
});

export const appStore = extendObservable(state, {});
