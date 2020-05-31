import React from 'react';

import Button from 'components/Button';
import { ObjectExpression } from 'components/Typography';

const CHIP_VALUES = [
  'Array',
  'Function',
  'Map',
  'Math',
  'Number',
  'RegExp',
  'Set',
  'String',
];

export const SearchChips = ({ onChange }) => (
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
