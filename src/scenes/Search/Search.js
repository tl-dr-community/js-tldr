import React, { memo, useRef, useState, useEffect, useMemo } from 'react';
import Fuse from 'fuse.js';

import { loadDocsData } from 'data/loadDocsData';

import { SearchChips } from './SearchChips';
import { SearchInput } from './SearchInput';
import classes from './Search.module.scss';

export const Search = memo(() => {
  const [options, setOptions] = useState(null);
  const [data, setData] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const inputRef = useRef();
  const focusInput = () => {
    inputRef.current && inputRef.current.focus();
  };

  /* Load data */
  useEffect(() => {
    const fetchData = async () => {
      const data = await loadDocsData();
      setData(data);
    };

    fetchData();
  }, []);

  /* Set "/" key press handler */
  useEffect(() => {
    const top = window;
    if (!top) return;
    const handleKeyPress = event => {
      if (event.keyCode === keycodes('/')) {
        focusInput();
      }
    };
    top.addEventListener('keyup', handleKeyPress);
    return () => {
      top.removeEventListener('keyup', handleKeyPress);
    };
  });

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
        { name: 'name', weight: 0.3 }
      ]
    });
  }, [data]);

  const doSearch = query => {
    setSearchQuery(query);
    const options = query
      ? searchEngine
          .search(query)
          .map(({ item, score }) => ({ score, ...item }))
      : [];
    setOptions(options);
  };

  const handleChange = event => doSearch(event.target.value);
  const handleChipsChange = value => {
    doSearch(`${value}.`);
    focusInput();
  };

  return (
    <div className={classes.container}>
      <div>
        <SearchInput
          ref={inputRef}
          disabled={!data || !data.length}
          value={searchQuery}
          onChange={handleChange}
        />
        {options &&
          options.map((option, index) => {
            const opacity = index
              ? Math.max(1 - option.score.toFixed(2) * 2, 0.5)
              : 1;
            return (
              <div key={option.searchString} style={{ opacity }}>
                {option.searchString}
              </div>
            );
          })}
      </div>
      {(!options || !options.length) && (
        <div className={classes.row}>
          <SearchChips onChange={handleChipsChange} />
        </div>
      )}
    </div>
  );
});
