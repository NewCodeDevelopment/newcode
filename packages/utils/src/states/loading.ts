import { atom } from "recoil";

export type ILoadingState = boolean;

export const loadingState = atom<ILoadingState>({
	key: "loading",
	default: true,
});
