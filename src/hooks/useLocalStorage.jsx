import { useState, useEffect } from 'react';

export default function useLocalStorage(storageKey, fallbackState) {
  const [state, setState] = useState(
    JSON.parse(localStorage.getItem(storageKey)) ?? fallbackState
  );

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(state));
  }, [state, storageKey]);

  return [state, setState];
}
