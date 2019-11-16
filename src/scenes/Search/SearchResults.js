import React, { forwardRef } from 'react';
import cn from 'classnames';

import { SearchOption } from './SearchOption';
import classes from './SearchResults.module.scss';

export const SearchResults = forwardRef(
  ({ options, className, ...props }, ref) => (
    <div
      className={cn(className, classes.dropdown, {
        [classes.hidden]: !options || !options.length,
      })}
      ref={ref}
      {...props}
    >
      {options &&
        options.map((option, index) => {
          return (
            <SearchOption
              index={index}
              path={option.path}
              score={option.score}
              searchString={option.searchString}
            />
          );
        })}
    </div>
  ),
);

SearchResults.displayName = 'SearchResults';
