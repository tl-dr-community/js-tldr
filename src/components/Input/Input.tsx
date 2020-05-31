import cn from 'classnames';
import React, { forwardRef, HTMLAttributes } from 'react';
import classes from './Input.module.scss';

type Props = {
  size: 'sm' | 'md' | 'lg' | 'xl';
};

export const Input = forwardRef<
  HTMLInputElement,
  Props & HTMLAttributes<HTMLInputElement>
>(({ className, size, ...inputProps }, ref) => (
  <input
    ref={ref}
    className={cn(className, classes.input, {
      [classes[`size-${size}`]]: size,
    })}
    {...inputProps}
  />
));
