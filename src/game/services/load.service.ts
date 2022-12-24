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
