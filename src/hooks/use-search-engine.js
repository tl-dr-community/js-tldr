import { useMemo } from 'react';
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
        { name: 'body', weight: 0.7 },
        { name: 'name', weight: 0.3 },
      ],
    });
  }, [data]);

  return searchEngine;
};
