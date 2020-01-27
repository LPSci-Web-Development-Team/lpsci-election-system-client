import { makeStyles } from '@material-ui/core/styles';

// ANCHOR Layout width
export const WIDTH = '100vw';

// ANCHOR Layout height
export const HEIGHT = '100vh';

// ANCHOR Height of the navbar
export const NAVBAR_HEIGHT = '48px';

// ANCHOR Width of the sidebar
export const SIDEBAR_WIDTH = '240px';

// ANCHOR Grid column definition when on mobile
export const MOBILE_COLUMN = '100vw';

// ANCHOR Grid column definition when on desktops
export const DESKTOP_COLUMN = `${SIDEBAR_WIDTH} calc(${WIDTH} - ${SIDEBAR_WIDTH})`;

export const useStyles = makeStyles(() => ({
  root: {
    display: 'grid',
    gridTemplateRows: `${NAVBAR_HEIGHT} calc(${HEIGHT} - ${NAVBAR_HEIGHT})`,
    width: WIDTH,
    height: HEIGHT,
    overflow: 'hidden',
  },
}));
