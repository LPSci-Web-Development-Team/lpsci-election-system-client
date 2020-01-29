import { ButtonOverrides } from 'baseui/button';
import { BlockOverrides } from 'baseui/block';
import { InputOverrides } from 'baseui/input';

export const LOGO: BlockOverrides = {
  Block: {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '20px',
    },
  },
};

export const ELECTIONS_CONTAINER: BlockOverrides = {
  Block: {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
};

export const ELECTIONS: BlockOverrides = {
  Block: {
    style: {
      fontWeight: 800,
      fontSize: '16px',
      marginTop: '5px',
      marginBottom: '25px',
    },
  },
};

export const FORM_CONTROL: BlockOverrides = {
  Block: {
    style: {
      marginBottom: '10px',
    },
  },
};

export const SUBMIT_BUTTON: ButtonOverrides = {
  BaseButton: {
    style: () => ({
      marginTop: '15px',
      width: '100%',
    }),
  },
};

export const INPUT: InputOverrides = {
  InputContainer: {
    style: () => ({
      borderTopRightRadius: '50px',
      borderBottomRightRadius: '50px',
    }),
  },
  StartEnhancer: {
    style: () => ({
      borderTopLeftRadius: '50px',
      borderBottomLeftRadius: '50px',
    }),
  },
};
