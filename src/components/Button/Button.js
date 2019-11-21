import React from 'react';
import cn from 'classnames';

import classes from './Button.module.scss';

export const Button = ({
  component = 'button',
  className,
  size,
  ...buttonProps
}) => {
  const ButtonComponent = component;
  return (
    <ButtonComponent
      className={cn(className, classes.button, {
        [classes[`size-${size}`]]: size,
      })}
      {...buttonProps}
    />
  );
};
