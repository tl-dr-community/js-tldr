import { useMemo } from 'react';
import Fuse, { FuseOptions } from 'fuse.js';

export type SearchIndexEntry = {
  body: String;
  category: String;
  name: String;
  path: String;
  searchString: String;
};

export type SearchEngine = Fuse<Array<SearchIndexEntry>, FuseOptions<any>>;
export const useSearchEngine = (
  data?: Array<SearchIndexEntry>,
): SearchEngine => {
  const searchEngine: SearchEngine = useMemo(() => {
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
