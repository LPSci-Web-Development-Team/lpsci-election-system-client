import { TabsOverrides } from 'baseui/tabs';
import { BlockOverrides } from 'baseui/block';

export const HEADING_CONTAINER: BlockOverrides = {
  Block: {
    style: {
      marginTop: '20px',
    },
  },
};

export const HEADING: BlockOverrides = {
  Block: {
    style: {
      fontWeight: 700,
      marginTop: '0px',
      marginBottom: '20px',
    },
  },
};

export const ELECTION_TAB: TabsOverrides<any> = {
  TabBar: {
    style: () => ({
      position: 'absolute',
      bottom: '30px',
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
