import { DESKTOP_MIN_WIDTH } from "../const";
import { useWindow } from "./window";

export function useDevice() {
  const { width } = useWindow();

  return parseInt(width.toString()) >= DESKTOP_MIN_WIDTH ? "desktop" : "mobile";
}
