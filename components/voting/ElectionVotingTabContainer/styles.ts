import { TabsOverrides } from 'baseui/tabs';

export const ELECTION_TAB: TabsOverrides<any> = {
  TabBar: {
    style: () => ({
      display: 'none',
    }),
  },
  TabContent: {
    style: () => ({
      paddingBottom: '0px',
      paddingTop: '0px',
      paddingLeft: '0px',
      paddingRight: '0px',
    }),
  },
};
