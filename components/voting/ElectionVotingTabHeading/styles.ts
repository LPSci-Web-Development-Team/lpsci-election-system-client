import { BlockOverrides } from 'baseui/block';

export const HEADING_CONTAINER: BlockOverrides = {
  Block: {
    style: {
      paddingTop: '20px',
      position: 'fixed',
      backgroundColor: 'white',
      top: 0,
      width: '80%',
    },
  },
};

export const HEADING: BlockOverrides = {
  Block: {
    style: {
      fontWeight: 700,
      letterSpacing: '-1px',
      marginTop: '0px',
      marginBottom: '20px',
      wordWrap: 'break-word',
    },
  },
};
