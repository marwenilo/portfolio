import { useRef } from 'react';
import { LazyMotion, domAnimation } from 'framer-motion';
import Intro from './components/Intro';
const App = () => {
  const containerRef = useRef(null);
  return (
    <div data-scroll-container ref={containerRef}>
      <LazyMotion features={domAnimation}>
        <Intro />
      </LazyMotion>
    </div>
  );
};
export default App;
