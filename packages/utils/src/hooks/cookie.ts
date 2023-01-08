import { COOKIE_ACCEPTED, useLocalStorage } from "utils";

export function useCookieStatus() {
	return useLocalStorage<boolean | null>(COOKIE_ACCEPTED, null);
}
