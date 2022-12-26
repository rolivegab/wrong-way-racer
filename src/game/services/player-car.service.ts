import { extendObservable, observable } from "mobx";
import { Assets, Sprite, Texture } from "pixi.js";
import { ACTOR_KEYS } from "../types/actor-keys.type";
import { Actor } from "../types/actor.type";
import { Axis2d } from "../types/axis2d.type";
import { TEXTURE_KEYS } from "../types/sprite-keys.type";
import { setScaleTo } from "../utils/set-scale-to";
import { calculateNextSpringPosition } from "../utils/calculate-next-spring-position";
import { applicationService } from "./application.service";
import { gameService } from "./game.service";

const DISTANCE_FROM_GROUND = applicationService.screen.height * 0.045;
const DISTANCE_FROM_BORDER = 0.25;
const CAR_WIDTH = 170;

const getCarPositionMap = () => ({
  left: 0 + applicationService.screen.width * DISTANCE_FROM_BORDER,
  center: applicationService.screen.width / 2,
  right:
    applicationService.screen.width -
    applicationService.screen.width * DISTANCE_FROM_BORDER,
});

const initialPosition: Axis2d = {
  x: applicationService.screen.width / 2,
  y: applicationService.screen.height - DISTANCE_FROM_GROUND,
};

export const state = observable({
  movingTo: "center" as "left" | "center" | "right",
  velocity: { x: 0, y: 0 },
  sprite: new Sprite(),
});

const CAR_SPRITE_RENDER_LOGIC = [
  1 / 3 + DISTANCE_FROM_BORDER / 4,
  2 / 3 - DISTANCE_FROM_BORDER / 4,
];

const playerCarSprites = [
  TEXTURE_KEYS.PLAYER_CAR_LEFT,
  TEXTURE_KEYS.PLAYER_CAR_CENTER,
  TEXTURE_KEYS.PLAYER_CAR_RIGHT,
];

const textureFromPosition = (horizontalRelativePosition: number): Texture => {
  let textureKey: TEXTURE_KEYS;

  if (horizontalRelativePosition < CAR_SPRITE_RENDER_LOGIC[0]) {
    textureKey = playerCarSprites[2];
  } else if (horizontalRelativePosition < CAR_SPRITE_RENDER_LOGIC[1]) {
    textureKey = playerCarSprites[1];
  } else {
    textureKey = playerCarSprites[0];
  }

  const texture = Assets.get(textureKey);

  if (texture instanceof Texture) {
    return texture;
  } else {
    throw new Error("must be a texture");
  }
};

const initializePosition = () => {
  const sprite = playerCarService.sprite;
  setScaleTo(sprite, CAR_WIDTH, "width");
  sprite.x = initialPosition.x;
  sprite.y = initialPosition.y;
  sprite.anchor.x = 0.5;
  sprite.anchor.y = 1;
};

const onKeyDown = (ev: KeyboardEvent) => {
  if (ev.key === "ArrowLeft") {
    setNextCarPosition("left");
  } else if (ev.key === "ArrowRight") {
    setNextCarPosition("right");
  }
};

const initializeKeyboardListen = () => {
  window.addEventListener("keydown", onKeyDown);
};

const initializeTexture = () => {
  const texture = textureFromPosition(0.5);

  if (texture instanceof Texture) {
    state.sprite.texture = texture;
  }
};

const load = async () => {
  gameService.addActor(ACTOR_KEYS.PLAYER_CAR, playerCarService);
  initializeTexture();
  initializePosition();
  initializeKeyboardListen();
};

const onTick: Actor["onTick"] = (delta) => {
  const sprite = playerCarService.sprite;
  const movingToPosition = getCarPositionMap()[state.movingTo];
  const { position, velocity } = calculateNextSpringPosition(
    {
      position: {
        x: sprite.x,
        y: sprite.y,
      },
      velocity: { x: state.velocity.x, y: state.velocity.y },
    },
    { stiffness: 200, damping: 20, mass: 1 },
    delta / 60,
    { x: movingToPosition, y: Math.random() * 30 + initialPosition.y }
  );
  sprite.x = position.x;
  sprite.y = position.y;
  state.velocity.x = velocity.x;
  state.velocity.y = velocity.y;
  sprite.texture = textureFromPosition(
    position.x / applicationService.screen.width
  );
};

const setNextCarPosition = (action: "left" | "right") => {
  let finalMoving: typeof state.movingTo;
  if (state.movingTo === "center") {
    finalMoving = action === "left" ? "left" : "right";
  } else if (state.movingTo === "left") {
    finalMoving = action === "left" ? "left" : "center";
  } else {
    finalMoving = action === "left" ? "center" : "right";
  }

  state.movingTo = finalMoving;

  return finalMoving;
};

export const playerCarService = extendObservable(state, {
  load,
  onTick,
}) satisfies Actor;
