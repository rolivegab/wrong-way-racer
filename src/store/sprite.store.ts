import { observable } from "mobx";
import * as PIXI from "pixi.js";
import { TEXTURE_KEYS } from "src/game/types/sprite-keys.type";

export const spriteStore = observable(new Map<TEXTURE_KEYS, PIXI.Sprite>());
