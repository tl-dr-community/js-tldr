import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import classes from './SearchResults.module.scss';

type Props = {
  index: number;
  path: string;
  score: number;
  searchString: string;
};

export const SearchOption = memo<Props>(
  ({ index, path, score, searchString }) => {
    const opacity = index ? Math.max(1 - score * 2, 0.5).toFixed(2) : 1;

    return (
      <Link
        to={path}
        className={classes.option}
        style={{ opacity }}
        data-cy={`SearchOption_${path.split('/')[2]}${path.split('/')[3]}Link`}
      >
        {searchString}
      </Link>
    );
  },
);
