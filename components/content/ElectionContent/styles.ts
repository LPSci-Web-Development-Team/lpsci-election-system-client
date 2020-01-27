import { makeStyles } from '@material-ui/core/styles';

// ANCHOR Grid column definition when on desktops
export const DESKTOP_COLUMN = '2 / 3';

// ANCHOR Grid column definition when on mobile
export const MOBILE_COLUMN = '1 / 3';

export const useStyles = makeStyles({
  root: {
    gridRow: '2/3',
  },
});
