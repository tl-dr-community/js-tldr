import keycodes from 'keycodes';
import React, { memo, useEffect, useRef, KeyboardEvent } from 'react';
import { Link } from 'react-router-dom';

import classes from './SearchResults.module.scss';

type Props = {
  focused?: boolean;
  index: number;
  onKeyUp?: (event: KeyboardEvent<any>) => void;
  path: string;
  score?: number;
  searchString: string;
};

const computeLinkOpacity = (index: number, score?: number): string | number => {
  if (index === 0) return 1;
  if (!score) return 0.75;

  return Math.max(1 - score * 2, 0.5).toFixed(2);
};

export const SearchOption = memo<Props>(
  ({ index, path, score, searchString, focused = false, onKeyUp }) => {
    const linkRef = useRef<HTMLAnchorElement>(null);
    const opacity = computeLinkOpacity(index, score);

    useEffect(() => {
      if (
        linkRef.current &&
        focused &&
        document.activeElement !== linkRef.current
      ) {
        linkRef.current.focus();
      }
    }, [linkRef, focused]);

    const handleKeyDown = (event: KeyboardEvent<HTMLAnchorElement>) => {
      if (
        event.keyCode === keycodes('up') ||
        event.keyCode === keycodes('down')
      )
        event.preventDefault();
    };

    return (
      <Link
        ref={linkRef}
        to={path}
        className={classes.option}
        style={{ opacity }}
        data-cy={`SearchOption_${path.split('/')[2]}${path.split('/')[3]}Link`}
        onKeyDown={handleKeyDown}
        onKeyUp={onKeyUp}
      >
        {searchString}
      </Link>
    );
  },
);
