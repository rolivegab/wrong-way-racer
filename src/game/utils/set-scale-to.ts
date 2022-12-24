import { Sprite } from "pixi.js";

export const setScaleTo = (
  sprite: Sprite,
  value: number,
  type: "width" | "height"
) => {
  let factor = 0;
  if (type === "width") {
    factor = sprite.width / value;
    sprite.width = value;
    sprite.height = sprite.height / factor;
  } else {
    factor = sprite.height / value;
    sprite.width = sprite.width / factor;
    sprite.height = value;
  }
};
