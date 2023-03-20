import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { COOKIE_ACCEPTED } from "../const";
import { cookieState, ICookieState } from "../states/cookie";
import { useLocalStorage } from "./localStorage";

export function useCookieStatus() {
  const [cookie, setCookie] = useRecoilState(cookieState);

  const [_, setLocalStorageCookie] = useLocalStorage<boolean | null>(
    COOKIE_ACCEPTED,
    null,
    useCallback((value: ICookieState) => setCookie(value), [setCookie]),
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
