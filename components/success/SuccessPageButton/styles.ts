import { ButtonOverrides } from 'baseui/button';
import { BlockOverrides } from 'baseui/block';

export const BUTTON_CONTAINER: BlockOverrides = {
  Block: {
    style: {
      position: 'fixed',
      bottom: 0,
      paddingTop: '50px',
      paddingBottom: '45px',
      backgroundColor: 'white',
      display: 'flex',
      justifyContent: 'flex-end',
      width: '80%',
    },
  },
};

export const BUTTON: ButtonOverrides = {
  BaseButton: {
    style: {
      width: '100%',
    },
  },
};
