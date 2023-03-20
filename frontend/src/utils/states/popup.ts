import { atom } from "recoil";

export interface IPopupState {
  show: boolean;
  children: any;
}

export const popupState = atom<IPopupState>({
  key: "popup",
  default: {
    show: false,
    children: null,
  },
});
