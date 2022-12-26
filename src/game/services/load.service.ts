import * as PIXI from "pixi.js";
import { Sprite, Texture } from "pixi.js";
import { spriteStore } from "src/store/sprite.store";
import { TEXTURE_KEYS } from "../types/sprite-keys.type";

const assetUrls = new Map<TEXTURE_KEYS, string>([
  [TEXTURE_KEYS.PLAYER_CAR_LEFT, "src/assets/cars/car_left.png"],
  [TEXTURE_KEYS.PLAYER_CAR_CENTER, "src/assets/cars/car_center.png"],
  [TEXTURE_KEYS.PLAYER_CAR_RIGHT, "src/assets/cars/car_right.png"],
  [TEXTURE_KEYS.ROAD, "src/assets/road.png"],
  [TEXTURE_KEYS.SKY, "src/assets/sky.png"],
  [TEXTURE_KEYS.MOUNTAIN_FADE, "src/assets/mountain_fade.png"],
  [TEXTURE_KEYS.MOUNTAIN_LEFT, "src/assets/mountain_left.png"],
  [TEXTURE_KEYS.MOUNTAIN_RIGHT, "src/assets/mountain_right.png"],
  [TEXTURE_KEYS.SIDEROAD_LEFT, "src/assets/sideroad_left.png"],
  [TEXTURE_KEYS.SIDEROAD_RIGHT, "src/assets/sideroad_right.png"],
]);

const loadSprites = async () => {
  await Promise.all(
    Array.from(assetUrls.entries()).map(async ([key, path]) => {
      PIXI.Assets.add(key, path);
      const texture = await PIXI.Assets.load<Texture>(key);
      if (texture instanceof PIXI.Texture) {
        spriteStore.set(key, new Sprite(texture));
      }
    })
  );
};

export const loadService = {
  loadSprites,
};
