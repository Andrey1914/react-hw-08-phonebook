import { useState, useEffect } from "react";

export default function useLocalStorage(storageKey, fallbackState) {
  const [state, setState] = useState(
    localStorage.getItem(storageKey) ?? fallbackState
  );

  useEffect(() => {
    localStorage.setItem(storageKey, state);
  }, [state, storageKey]);

  return [state, setState];
}
