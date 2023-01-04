import { atom } from "recoil";

export interface IScrollState {
    currentIndex: number;
    length: number;
    caller: "event" | "user";
    enabled: boolean;
}

export const scrollState = atom<IScrollState>({
    key: "scroll",
    default: {
        currentIndex: 0,
        length: 0,
        caller: "event",
        enabled: false,
    },
});
