import { Input } from 'components/Input';
import React, { forwardRef, HTMLAttributes, Ref } from 'react';
import { SearchIcon } from './SearchIcon';
import classes from './SearchInput.module.scss';

type Props = {
  disabled?: boolean;
  value?: string;
  wrapperRef: Ref<HTMLDivElement>;
};

export const SearchInput = forwardRef<
  HTMLInputElement,
  HTMLAttributes<HTMLInputElement> & Props
>(({ wrapperRef, ...props }, ref) => (
  <div ref={wrapperRef} className={classes.container}>
    <span className={classes.icon}>
      <SearchIcon />
    </span>
    <Input
      ref={ref}
      className={classes.input}
      placeholder="Look for some tl;dr"
      size="xl"
      aria-label="Search"
      {...props}
      data-cy="SearchInput_input"
    />
    <span className={classes.shortKey}>/</span>
  </div>
));
