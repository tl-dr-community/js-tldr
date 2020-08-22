import React from 'react';
import cn from 'classnames';
import { useKey } from 'react-use';
import { useNavigate } from 'react-router-dom';

import { CloseButton } from 'components/CloseButton';
import classes from './BoxOverlay.module.scss';

export const BoxOverlay = ({
  component = 'div',
  className,
  children,
  ...props
}) => {
  const navigate = useNavigate();
  const BoxOverlayComponent = component;
  const close = () => navigate('/');
  useKey('Escape', close);

  return (
    <BoxOverlayComponent className={cn(className, classes.box, {})} {...props}>
      <CloseButton className={classes.close} onClick={close} />
      {children}
    </BoxOverlayComponent>
  );
};
