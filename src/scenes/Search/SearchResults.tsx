import cn from 'classnames';
import { Result } from 'common-types/options';
import React, { forwardRef, HTMLAttributes, KeyboardEvent } from 'react';
import { SearchOption } from './SearchOption';
import classes from './SearchResults.module.scss';

type Props = {
  highlighted?: number | null;
  onKeyUp?: (event: KeyboardEvent<HTMLDivElement>) => void;
  placement: string;
  results: Result[];
};

export const SearchResults = forwardRef<
  HTMLDivElement,
  Props & HTMLAttributes<HTMLDivElement>
>(({ results, className, highlighted, onKeyUp, ...props }, ref) => (
  <div
    className={cn(className, classes.dropdown, {
      [classes.hidden]: !results?.length,
    })}
    ref={ref}
    {...props}
  >
    {results?.map(({ item: option, score }, index) => (
      <SearchOption
        key={option.path}
        index={index}
        path={option.path}
        score={score}
        searchString={option.searchString}
        focused={highlighted === index}
        onKeyUp={onKeyUp}
      />
    ))}
  </div>
));

SearchResults.displayName = 'SearchResults';
