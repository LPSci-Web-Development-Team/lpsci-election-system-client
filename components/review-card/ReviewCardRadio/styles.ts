import { BlockOverrides } from 'baseui/block';
import { RadioOverrides } from 'baseui/radio';

export const ABSTAIN: BlockOverrides = {
  Block: {
    style: {
      marginLeft: '20px',
      fontWeight: 700,
      fontSize: '16px',
    },
  },
};

export const SELECTED: RadioOverrides = {
  Root: {
    style: {
      opacity: '1',
    },
  },
};

export const OPAQUE: RadioOverrides = {
  Root: {
    style: {
      opacity: '0.6',
    },
  },
};
