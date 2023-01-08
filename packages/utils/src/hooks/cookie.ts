import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { cookieState, COOKIE_ACCEPTED, useLocalStorage } from "../..";

export function useCookieStatus() {
    const [cookie, setCookie] = useRecoilState(cookieState);
    const [_, setLocalStorageCookie] = useLocalStorage<boolean | null>(
        COOKIE_ACCEPTED,
        null,
        (value) => setCookie(value),
    );

    const setCookieCallback = useCallback(
        (value: boolean | null) => {
            setCookie(value);
            setLocalStorageCookie(value);
        },
        [setCookie, setLocalStorageCookie],
    );

    return [cookie, setCookieCallback] as const;
}
