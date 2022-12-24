import { observable } from "mobx";

enum PLAYER_CAR_POSITION {
  LEFT,
  CENTER,
  RIGHT,
}

export const playerCarStore = observable({
  movingTo: PLAYER_CAR_POSITION,
});
