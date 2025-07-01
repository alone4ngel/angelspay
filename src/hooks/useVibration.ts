import { useCallback } from 'react';

export const useVibration = () => {
  const vibrate = useCallback(() => {
    if ('vibrate' in navigator) {
      navigator.vibrate(50); // Vibrate for 50ms
    }
  }, []);

  return vibrate;
};
