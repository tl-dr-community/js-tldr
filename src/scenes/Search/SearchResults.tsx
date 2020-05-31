import React, { forwardRef, HTMLAttributes } from 'react';
import cn from 'classnames';

import { SearchOption } from './SearchOption';
import classes from './SearchResults.module.scss';
import { Option } from 'common-types/options';

type Props = {
  placement: string;
  options: Option[] | null;
};

export const SearchResults = forwardRef<
  HTMLDivElement,
  Props & HTMLAttributes<HTMLDivElement>
>(({ options, className, ...props }, ref) => {
  console.log(options);

  return (
    <div
      className={cn(className, classes.dropdown, {
        [classes.hidden]: !options || !options.length,
      })}
      ref={ref}
      {...props}
    >
      {options?.map(({ item: option, score }, index) => (
        <SearchOption
          key={option.path}
          index={index}
          path={option.path}
          score={score}
          searchString={option.searchString}
        />
      ))}
    </div>
  );
});

SearchResults.displayName = 'SearchResults';
