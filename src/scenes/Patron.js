import React from 'react';
import { OutboundLink } from 'react-ga';

import Text from 'components/Typography';
import classes from './Patron.module.scss';

export const Patron = ({ name, picture, link }) => {
  return (
    <OutboundLink
      className={classes.container}
      to={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className={classes.pictureContainer}>
        <img className={classes.picture} src={picture} alt={name} />
      </span>
      <Text className={classes.name}>{name}</Text>
    </OutboundLink>
  );
};
