// ANCHOR Model
import createModel, { IModelState } from '@lxsmnsyc/react-scoped-model';

// ANCHOR Hooks
import { useWindowSize } from '../../../utils/hooks/useWindowSize';

interface IState extends IModelState {
  isMobile: boolean;
  isDesktop: boolean;
  width: number;
  height: number;
}

export const MobileView = createModel<IState>(
  () => {
    const { width, height } = useWindowSize();

    return {
      isMobile: width < height,
      isDesktop: width > height,
      width,
      height,
    };
  },
  {
    displayName: 'Models.MobileView',
  },
);
