
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import { ScrollProviderProps } from '../@types/themeTypes';

const LocomotiveScroll = ({ children }: ScrollProviderProps) => {
  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        tablet: {
          smooth: true,
          breakpoint: 768,
        },
      }}
      watch={[]}
    >
      {children}
    </LocomotiveScrollProvider>
  );
};
export default LocomotiveScroll;
