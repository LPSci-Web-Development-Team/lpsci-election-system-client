import { BlockOverrides } from 'baseui/block';

export const INNER: BlockOverrides = {
  Block: {
    style: {
      padding: '10px 0px',
      width: '100%',
    },
  },
};

// ANCHOR Min width for mobile (or when the sidebar is opened)
export const MOBILE_MIN_WIDTH = '100%';

export const OUTER: BlockOverrides = {
  Block: {
    style: {
      margin: '0px 35px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
    },
  },
};
