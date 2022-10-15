import { atom } from "recoil";

export type INavigationState = "light" | "dark";

export const bgColorState = atom<INavigationState>({
	key: "navigation",
	default: "light",
});
