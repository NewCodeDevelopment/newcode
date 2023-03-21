import { atom } from "recoil";

export type IBgColorState = "light" | "dark" | "red";

export const bgColorState = atom<IBgColorState>({
  key: "navigation",
  default: "dark",
});
