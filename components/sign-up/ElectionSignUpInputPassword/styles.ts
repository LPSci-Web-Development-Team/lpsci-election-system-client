import { InputOverrides } from 'baseui/input';

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
