import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import './index.css';
import App from './App';
import { ThemeProvider } from './utils/theme/themeContext';
import Background from './utils/theme/background';
import Toggle from './utils/theme/themeToggle';
import LocomotiveScroll from './utils/locomotiveScroll';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <StrictMode>
    <LocomotiveScroll>
      <ThemeProvider>
        <Background>
          <main>
            <div className="absolute right-0 top-0 mr-4 mt-4 md:mr-6 md:mt-6 z-40">
              <Toggle />
            </div>
            <App />
          </main>
        </Background>
      </ThemeProvider>
    </LocomotiveScroll>
  </StrictMode>
);
