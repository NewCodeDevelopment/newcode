import { atom } from "recoil";

export type ICookieState = boolean | null;

export const cookieState = atom<ICookieState>({
    key: "cookie",
    default: null,
});
