import { useEffect, useRef } from "react";
import skyPng from "src/assets/sky.png";
import * as PIXI from "pixi.js";
import { store } from "src/store/store";
import { useAppScreen } from "src/hooks/useAppScreen";

const SKY_SIZE = 0.85;

export const Sky = () => {
  const { app } = store.application;
  const { width, height } = useAppScreen();
  const spriteRef = useRef(PIXI.Sprite.from(skyPng));

  useEffect(() => {
    const { current: sprite } = spriteRef;
    sprite.width = width;
    sprite.y = 0;
    sprite.height = height * SKY_SIZE;
  }, [height, width]);

  useEffect(() => {
    const { current: sprite } = spriteRef;
    app.stage.addChild(sprite);

    return () => {
      app.stage.removeChild(sprite);
    };
  }, [app.stage]);

  return null;
};
