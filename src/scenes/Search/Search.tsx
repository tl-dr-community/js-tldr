import { Result } from 'common-types/options';
import { useDocsData, useKeyUp, useSearchEngine } from 'hooks';
import keycodes from 'keycodes';
import React, {
  ComponentType,
  FormEvent,
  KeyboardEvent,
  memo,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Manager, Popper, Reference } from 'react-popper';
import classes from './Search.module.scss';
import { SearchChips } from './SearchChips';
import { SearchInput } from './SearchInput';
import { SearchResults } from './SearchResults';

export const Search: ComponentType<{}> = memo(() => {
  const [results, setResults] = useState<any>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);
  const [highlighted, setHighlighted] = useState<number | null>(null);
  const { data } = useDocsData();
  const searchEngine = useSearchEngine(data);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  useKeyUp('/', focusInput);

  useEffect(() => {
    focusInput();
  }, []);

  const resetSearch = () => {
    setSearchQuery('');
    setResults([]);
  };

  const doSearch = (query: string): void => {
    setHighlighted(null);
    setSearchQuery(query);
    if (!query || !searchEngine) {
      setResults([]);
      return;
    }
    const options: Result[] = searchEngine.search(query) || [];
    const SCORE_THRESHOLD = 0.65;
    const results: Result[] = options.filter(
      ({ score }) => score && score < SCORE_THRESHOLD,
    );
    setResults(results);
  };

  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    const value = (event?.target as HTMLInputElement)?.value;
    doSearch(value);
  };

  const handleChipsChange = (value: string): void => {
    doSearch(value);
    focusInput();
  };

  const handleInputKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.keyCode === keycodes('down')) {
      if (!results?.length) return;
      setHighlighted(0);
    }

    if (event.keyCode === keycodes('esc')) {
      resetSearch();
    }
  };

  const handleOptionKeyUp = (event: KeyboardEvent<HTMLDivElement>) => {
    if (highlighted === null || !results?.length) return;

    if (event.keyCode === keycodes('down')) {
      const newHightlighted = highlighted + 1;
      if (newHightlighted > results.length - 1) return;
      setHighlighted(newHightlighted);
    }

    if (event.keyCode === keycodes('up')) {
      if (highlighted === 0) {
        focusInput();
        setHighlighted(null);
      } else {
        setHighlighted(highlighted - 1);
      }
    }
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
                value={searchQuery}
                onChange={handleChange}
                onKeyUp={handleInputKeyUp}
              />
            )}
          </Reference>
          <Popper placement="bottom-start" eventsEnabled={false}>
            {({ ref, style, placement }) => (
              <SearchResults
                ref={ref}
                style={style}
                placement={placement}
                results={results}
                highlighted={highlighted}
                onKeyUp={handleOptionKeyUp}
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
