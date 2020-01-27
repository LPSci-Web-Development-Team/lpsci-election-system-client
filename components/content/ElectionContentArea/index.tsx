import * as React from 'react';

import { useStyles, MOBILE_MAX_WIDTH, DESKTOP_MAX_WIDTH } from './styles';

import { MobileView } from '../../../models/scoped-models/MobileView';

interface IProps {
  children: React.ReactNode;
}

export function AdminContentArea({ children }: IProps) {
  const classes = useStyles();

  const isMobile = MobileView.useSelector((state) => state.isMobile);

  const width = React.useMemo(() => {
    if (isMobile) {
      return MOBILE_MAX_WIDTH;
    }

    return DESKTOP_MAX_WIDTH;
  }, [isMobile]);

  return (
    <div className={classes.outer}>
      <div className={classes.inner} style={{ maxWidth: width }}>
        {children}
      </div>
    </div>
  );
}
