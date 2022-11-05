import { atom } from "recoil";

export type INavigationState = "light" | "dark" | "red";

export const bgColorState = atom<INavigationState>({
	key: "navigation",
	default: "dark",
});
