import * as React from 'react';

import { useStyles, MOBILE_COLUMN, DESKTOP_COLUMN } from './styles';

import { MobileView } from '../../../models/scoped-models/MobileView';

interface IProps {
  children: React.ReactNode;
}

export const ElectionContent = ({ children }: IProps) => {
  const classes = useStyles();

  const isDesktop = MobileView.useSelector((state) => state.isDesktop);

  // Memoize column definition
  const columns = React.useMemo(() => (isDesktop ? DESKTOP_COLUMN : MOBILE_COLUMN), [
    isDesktop,
  ]);

  return (
    <div className={classes.root} style={{ gridColumn: columns }}>
      {children}
    </div>
  );
};
