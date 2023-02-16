import { DESKTOP_MIN_WIDTH } from "../const";
import { useWindow } from "./window";

export function useDevice() {
    const { width } = useWindow();

    return width >= DESKTOP_MIN_WIDTH ? "desktop" : "mobile";
}
