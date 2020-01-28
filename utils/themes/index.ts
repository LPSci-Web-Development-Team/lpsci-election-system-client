// ANCHOR Base
import { LightTheme } from 'baseui';

// ANCHOR Theme
import { BREAKPOINTS } from './breakpoints';
import { TYPOGRAPHY } from './typography';

export const THEME = {
  colors: {
    ...LightTheme.colors,
  },
  lighting: {
    ...LightTheme.lighting,
  },
  media: BREAKPOINTS,
  typography: TYPOGRAPHY,
  name: 'election-theme',
};
