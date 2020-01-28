import { BlockOverrides } from 'baseui/block';

// ANCHOR Grid column definition when on mobile
export const MOBILE_COLUMN = '1 / 3';

export const BLOCK: BlockOverrides = {
  Block: {
    style: {
      gridRow: '2/3',
    },
  },
};
