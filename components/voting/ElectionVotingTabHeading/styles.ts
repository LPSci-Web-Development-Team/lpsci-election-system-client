import { BlockOverrides } from 'baseui/block';

export const HEADING_CONTAINER: BlockOverrides = {
  Block: {
    style: {
      paddingTop: '20px',
      position: 'fixed',
      backgroundColor: 'white',
      top: 0,
    },
  },
};

export const HEADING: BlockOverrides = {
  Block: {
    style: {
      fontWeight: 700,
      marginTop: '0px',
      marginBottom: '20px',
    },
  },
};
