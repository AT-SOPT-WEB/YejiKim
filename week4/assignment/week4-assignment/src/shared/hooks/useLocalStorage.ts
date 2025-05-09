import { useState, useEffect } from 'react';

function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const storedValue = localStorage.getItem(key);
      return storedValue != null ? JSON.parse(storedValue) : initialValue;
    } catch (e) {
      console.error('로컬스토리지 에러:', e);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (e) {
      console.error('로컬스토리지 저장 실패:', e);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}

export default useLocalStorage;
