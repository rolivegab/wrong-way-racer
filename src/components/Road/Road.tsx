import { useEffect, useRef } from "react";
import roadPng from "src/assets/road.png";
import * as PIXI from "pixi.js";
import { store } from "src/store/store";
import { useAppScreen } from "src/hooks/useAppScreen";

const ROAD_SIZE = 0.45;

export const Road = () => {
  const { app } = store.application;
  const { width, height } = useAppScreen();
  const spriteRef = useRef(PIXI.Sprite.from(roadPng));

  useEffect(() => {
    const { current: sprite } = spriteRef;
    sprite.width = width;
    sprite.y = height * (1 - ROAD_SIZE);
    sprite.height = height * ROAD_SIZE;
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
