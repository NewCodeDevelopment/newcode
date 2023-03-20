import { atom } from "recoil";

export type ITransitionState = boolean;

export const transitionState = atom<ITransitionState>({
  key: "transition",
  default: false,
});
