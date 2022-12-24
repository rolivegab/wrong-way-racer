import * as PIXI from "pixi.js";

export interface Actor {
  sprite: PIXI.Sprite;
  load: () => void;
  onTick?: (delta: number) => void;
}
