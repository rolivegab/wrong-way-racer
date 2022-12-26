import { Sprite } from "pixi.js";

export const setScaleTo = (
  sprite: Sprite,
  value: number,
  type: "width" | "height"
) => {
  let factor = 0;
  factor = sprite.width / sprite.height;
  if (type === "width") {
    sprite.width = value;
    sprite.height = value / factor;
  } else {
    sprite.width = value / factor;
    sprite.height = value;
  }
};
