import { ButtonOverrides } from 'baseui/button';
import { BlockOverrides } from 'baseui/block';

export const BUTTON_CONTAINER: BlockOverrides = {
  Block: {
    style: {
      position: 'fixed',
      bottom: 0,
      paddingTop: '25px',
      paddingBottom: '25px',
      backgroundColor: 'white',
      display: 'flex',
      width: '80%',
    },
  },
};

export const BUTTON_BACK: ButtonOverrides = {
  BaseButton: {
    style: () => ({
      width: '100%',
      marginRight: '5%',
    }),
  },
};

export const BUTTON_NEXT: ButtonOverrides = {
  BaseButton: {
    style: () => ({
      width: '100%',
    }),
  },
};
