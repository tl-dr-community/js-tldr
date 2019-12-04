import React from 'react';
import cn from 'classnames';
import { useKey } from 'react-use';
import { useHistory } from 'react-router-dom';

import { CloseButton } from '../CloseButton';
import classes from './BoxOverlay.module.scss';

export const BoxOverlay = ({
  component = 'div',
  className,
  children,
  ...props
}) => {
  const history = useHistory();
  const BoxOverlayComponent = component;
  const close = () => history.push('/');
  useKey('Escape', close);

  return (
    <BoxOverlayComponent className={cn(className, classes.box, {})} {...props}>
      <CloseButton className={classes.close} onClick={close} />
      {children}
    </BoxOverlayComponent>
  );
};
