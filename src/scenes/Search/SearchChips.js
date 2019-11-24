import React from 'react';

import Button from 'components/Button';
import { ObjectExpression } from 'components/Typography';

const CHIP_VALUES = ['Array', 'Function', 'Number', 'RegExp', 'String'];
export const SearchChips = ({ onChange }) => {
  return (
    <div>
      {CHIP_VALUES.map(value => (
        <Button
          key={value}
          size="xs"
          style={{ margin: '0.5rem' }}
          onClick={() => onChange(`${value}.`)}
        >
          <ObjectExpression>{value}</ObjectExpression>
        </Button>
      ))}
    </div>
  );
};
