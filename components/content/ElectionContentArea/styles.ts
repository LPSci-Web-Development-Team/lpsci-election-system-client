import { makeStyles } from '@material-ui/core/styles';

// ANCHOR Max width for mobile (or when the sidebar is opened)
export const MOBILE_MAX_WIDTH = '90%';

// ANCHOR Max width for desktop
export const DESKTOP_MAX_WIDTH = '85%';

export const useStyles = makeStyles({
  inner: {
    padding: '0px 0px 8px 0px',
  },
  outer: {
    display: 'grid',
    alignItems: 'center',
    justifyItems: 'center',
  },
});
