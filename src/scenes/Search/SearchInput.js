import React, { forwardRef } from 'react';
import Input from 'components/Input';

import classes from './SearchInput.module.scss';
import { SearchIcon } from './SearchIcon';

export const SearchInput = forwardRef(({ wrapperRef, ...props }, ref) => {
  return (
    <div ref={wrapperRef} className={classes.container}>
      <span className={classes.icon}>
        <SearchIcon />
      </span>
      <Input
        ref={ref}
        autoFocus
        className={classes.input}
        placeholder="Look for some tl;dr"
        size="xl"
        aria-label="Search"
        {...props}
        data-cy="SearchInput_input"
      />
      <span
        className={classes.shortKey}
        title="Press '/' button to focus the input"
      >
        /
      </span>
    </div>
  );
});
