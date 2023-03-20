import { useCallback, useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T, callback?: (value: T) => void) {
  const [storedValue, setStoredValue] = useState<T>(initialValue);

  useEffect(() => {
    try {
      const item = window.localStorage.getItem(key);

      if (!item || item == null) {
        window.localStorage.setItem(key, JSON.stringify(initialValue));
        setStoredValue(initialValue);
        return;
      }

      setStoredValue(JSON.parse(item));
    } catch (error) {
      window.localStorage.setItem(key, JSON.stringify(initialValue));
      setStoredValue(initialValue);
    }
  }, [key, storedValue, initialValue]);

  useEffect(() => {
    callback && callback(storedValue);
  }, [storedValue, callback]);

  /**
   *
   *
   * @param value
   *
   */
  const setValue = useCallback(
    (value: T | ((val: T) => T)) => {
      try {
        const valueToStore = value instanceof Function ? value(storedValue) : value;

        setStoredValue(valueToStore);

        if (typeof window !== "undefined")
          window.localStorage.setItem(key, JSON.stringify(valueToStore));
      } catch (error) {
        console.error(error);
      }
    },
    [key, storedValue],
  );

  return [storedValue, setValue] as const;
}
