// ANCHOR React library
import * as React from 'react';

// ANCHOR Models
import { MobileView } from '../../../models/scoped-models/MobileView';

// ANCHOR Styles
import { useStyles, MOBILE_COLUMN, DESKTOP_COLUMN } from './styles';

interface IElectionBaseProps {
  children?: React.ReactNode;
}

/**
 * Base component of all pages
 *
 * Used for layout definition
 */
export const ElectionLayout = ({ children }: IElectionBaseProps) => {
  const classes = useStyles();
  const isMobile = MobileView.useProperty<boolean>('isMobile');

  // Memoize column layout
  const columns = React.useMemo(() => (
    isMobile ? MOBILE_COLUMN : DESKTOP_COLUMN
  ), [isMobile]);

  return (
    <div style={{ gridTemplateColumns: columns }} className={classes.root}>
      {children}
    </div>
  );
};
