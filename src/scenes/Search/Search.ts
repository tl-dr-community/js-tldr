import React, { memo, useRef, useState } from 'react';
import { Manager, Reference, Popper } from 'react-popper';
import { useKey } from 'react-use';
import { useDocsData, useKeyUp, useSearchEngine } from 'hooks';
import { SearchChips } from './SearchChips';
import { SearchInput } from './SearchInput';
import classes from './Search.module.scss';
import { SearchResults } from './SearchResults';

export const Search = memo(() => {
  const [options, setOptions] = useState(null);
  const [highlight, setState] = useState();

  const [searchQuery, setSearchQuery] = useState('');
  const inputRef = useRef();
  const focusInput = () => {
    inputRef.current?.focus();
  };

  const data = useDocsData();
  const searchEngine = useSearchEngine(data);
  useKeyUp('/', focusInput);

  const doSearch = (query: string) => {
    setSearchQuery(query);
    const options = query
      ? searchEngine
          .search(query)
          .map(({ item, score }) => ({ score, ...item }))
          .filter(option => option.score < 0.2)
      : [];
    setOptions(options);
  };

  const handleChange = event => doSearch(event.target.value);
  const handleChipsChange = value => {
    doSearch(value);
    focusInput();
  };

  return (
    <div className={classes.container}>
      <Manager>
        <div className={classes.row}>
          <Reference>
            {({ ref }) => (
              <SearchInput
                ref={inputRef}
                wrapperRef={ref}
                disabled={!data || !data.length}
                value={searchQuery}
                onChange={handleChange}
                onKeyPress={event => {
                  if (keycodes(event.keyCode !== 'ArrowDown') || highlight) return;
                  setHighlight(0);
                }
              />
            )}
          </Reference>
          <Popper placement="bottom-start" eventsEnabled={false}>
            {({ ref, style, placement }) => (
              <SearchResults
                ref={ref}
                style={style}
                placement={placement}
                options={options}
              />
            )}
          </Popper>
        </div>
        <div className={classes.row}>
          <SearchChips onChange={handleChipsChange} />
        </div>
      </Manager>
    </div>
  );
});
