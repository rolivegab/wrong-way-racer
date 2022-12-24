import { observable } from "mobx";

export const configStore = observable({
  aspectRatio: 4 / 3,
  width: 800,
});
