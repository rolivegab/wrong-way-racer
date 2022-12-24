import { Sprite } from "pixi.js";
import { AnchorOrigin } from "../types/anchor-origin";
import { Axis2d } from "../types/axis2d.type";

export const calculatePosition = (
  sprite: Sprite,
  position: Axis2d,
  anchorOrigin: AnchorOrigin
) => {
  let x = position.x;
  let y = position.y;

  if (anchorOrigin.horizontal === "center") {
    x -= sprite.width / 2;
  }

  if (anchorOrigin.vertical === "bottom") {
    y -= sprite.height;
  }

  return { x, y };
};
