import React from 'react';

import Button from 'components/Button';
import { ObjectExpression } from 'components/Typography';

const CHIP_VALUES = ['Array', 'Function', 'Math', 'Number', 'RegExp', 'String'];
export const SearchChips = ({ onChange }) => {
  return (
    <>
      {CHIP_VALUES.map(value => (
        <Button
          key={value}
          size="xs"
          style={{ margin: '0.5rem' }}
          onClick={() => onChange(`${value}.`)}
          data-cy={`SearchChips_${value}Button`}
        >
          <ObjectExpression>{value}</ObjectExpression>
        </Button>
      ))}
    </>
  );
};
