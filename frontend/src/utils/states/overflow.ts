import { atom } from "recoil";

export const overflowHiddenState = atom<boolean>({
  key: "scroll",
  default: process.env.NODE_ENV === "development" ? false : true,
});
