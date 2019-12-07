import { useEffect } from 'react';
import keycodes from 'keycodes';

export const useKeyUp = (key, handler) => {
  useEffect(() => {
    const top = window;
    if (!top) return;
    const handleKeyPress = event => {
      if (event.keyCode === keycodes(key)) {
        handler(event);
      }
    };
    top.addEventListener('keyup', handleKeyPress);
    return () => {
      top.removeEventListener('keyup', handleKeyPress);
    };
  });
};
