import { store } from "src/store/store";

export const useAppScreen = () => {
  const { width, height } = store.application.app.screen;

  return {
    width,
    height,
  };
};
