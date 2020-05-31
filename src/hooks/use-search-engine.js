import { useMemo } from 'react';
import Fuse from 'fuse.js';

const options = {
  caseSensitive: false,
  shouldSort: true,
  includeScore: true,
  keys: [
    { name: 'searchString', weight: 2 },
    { name: 'body', weight: 1 },
    { name: 'name', weight: 0.5 },
  ],
};

export const useSearchEngine = data => {
  const searchEngine = useMemo(() => {
    if (!data) return null;
    const index = Fuse.createIndex(['searchString'], data);
    return new Fuse(data, options, index);
  }, [data]);

  return searchEngine;
};
