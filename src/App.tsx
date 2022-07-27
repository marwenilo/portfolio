import { useRef } from 'react';
import { LazyMotion, domAnimation, motion, useScroll } from 'framer-motion';
import Intro from './components/Intro';
const App = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  return (
    <div data-scroll-container ref={containerRef}>
      <LazyMotion features={domAnimation}>
        <Intro />
            <Intro />
      </LazyMotion>
    </div>
  );
};
export default App;
