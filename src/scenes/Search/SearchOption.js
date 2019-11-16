import React from 'react';
import { Link } from 'react-router-dom';

import classes from './SearchResults.module.scss';

export const SearchOption = ({ index, path, score, searchString }) => {
  const opacity = index ? Math.max(1 - score.toFixed(2) * 2, 0.5) : 1;

  return (
    <Link to={path} className={classes.option} style={{ opacity }}>
      {searchString}
    </Link>
  );
};
