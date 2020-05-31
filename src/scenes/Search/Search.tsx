import { Option } from 'common-types/options';
import { useDocsData, useKeyUp, useSearchEngine } from 'hooks';
import React, {
  ComponentType,
  FormEvent,
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
  const [options, setOptions] = useState<Option[] | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  const { data } = useDocsData();
  const searchEngine = useSearchEngine(data);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  useEffect(() => {
    focusInput();
  }, []);

  useKeyUp('/', focusInput);

  const doSearch = (query: string): void => {
    setSearchQuery(query);
    if (!query || !searchEngine) {
      setOptions([]);
      return;
    }
    const options = searchEngine.search(query) || [];
    const threshold = 0.65;
    const results = (options as { item: any; score: number }[]).filter(
      ({ score }) => score < threshold,
    );
    setOptions(results);
  };

  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    const value = (event?.target as HTMLInputElement)?.value;
    doSearch(value);
  };

  const handleChipsChange = (value: string): void => {
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
                value={searchQuery}
                onChange={handleChange}
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
