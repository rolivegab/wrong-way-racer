import * as PIXI from "pixi.js";

export interface Actor {
  sprite: PIXI.Sprite | PIXI.Graphics;
  load: () => void;
  onTick?: (delta: number, elapsedMS: number) => void;
}
