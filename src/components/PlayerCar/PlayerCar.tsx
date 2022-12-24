import { useEffect, useRef } from "react";
import * as PIXI from "pixi.js";

interface Props {
  x: number;
}

export const PlayerCar = ({ x }: Props) => {
  useEffect(() => {
    const sprite = getSpriteBasedOnActualPosition();
  }, []);

  return null;
};
