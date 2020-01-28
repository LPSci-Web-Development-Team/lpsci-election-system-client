import { BlockOverrides } from 'baseui/block';

export const INNER: BlockOverrides = {
  Block: {
    style: {
      padding: '0px 0px 8px 0px',
      width: '100%',
    },
  },
};

// ANCHOR Max width for mobile (or when the sidebar is opened)
export const MOBILE_MAX_WIDTH = '100%';

export const OUTER: BlockOverrides = {
  Block: {
    style: {
      display: 'grid',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
    },
  },
};
