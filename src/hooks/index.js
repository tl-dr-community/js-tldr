import { useState, useEffect, useMemo } from 'react';
import keycodes from 'keycodes';
import { loadDocsData } from 'data/loadDocsData';
import Fuse from 'fuse.js';

export const useSearchEngine = data => {
  const searchEngine = useMemo(() => {
    if (!data) return null;
    return new Fuse(data, {
      caseSensitive: false,
      distance: 1000,
      location: 5,
      maxPatternLength: 32,
      shouldSort: true,
      includeScore: true,
      threshold: 0.6,
      tokenize: true,
      tokenSeparator: /(\.|prototype)/g,
      keys: [
        { name: 'searchString', weight: 0.7 },
        { name: 'name', weight: 0.3 },
      ],
    });
  }, [data]);

  return searchEngine;
};

export const useDocsData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await loadDocsData();
      setData(data);
    };

    fetchData();
  }, []);

  return data;
};

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
