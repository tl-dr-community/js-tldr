import React from 'react';

import Chip from 'components/Chip';
import { Property, ObjectExpression } from 'components/Typography';

const CHIP_VALUES = ['Array', 'String' /* "Function", "RegExp" */];
export const SearchChips = ({ onChange }) => {
  return (
    <div>
      {CHIP_VALUES.map(value => (
        <Chip
          key={value}
          size="sm"
          style={{ margin: '0.5rem' }}
          onClick={() => onChange(`${value}.prototype.`)}
        >
          <ObjectExpression>{value}</ObjectExpression>.
          <Property>prototype</Property>
        </Chip>
      ))}
    </div>
  );
};
