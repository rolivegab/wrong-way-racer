import { appStore } from "src/store/app.store";

const app = appStore.app;

const view = appStore.app.view;

const screen = appStore.app.screen;

export const applicationService = {
  app,
  view,
  screen,
};
