import { ReactLenis } from 'lenis/react';
import { Routes, Route } from 'react-router-dom';

import Footer from '@/components/Footer';
import ScrollProgressIndicator from '@/components/ScrollProgressIndicator';
import ParticleBackground from '@/components/ParticleBackground';
import Navbar from '@/components/Navbar';
import CustomCursor from '@/components/CustomCursor';
import Preloader from '@/components/Preloader';
import StickyEmail from '@/components/sections/StickyEmail';
import PageTransition from '@/components/PageTransition';

import HomePage from '@/pages/HomePage';
import ProjectPage from '@/pages/ProjectPage';
import NotFoundPage from '@/pages/NotFoundPage';

function App() {
  return (
    <div className="font-roboto-flex antialiased">
      <ReactLenis
        root
        options={{
          lerp: 0.1,
          duration: 1.4,
        }}
      >
        <Navbar />
        <main>
          <PageTransition>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route
                path="/projects/:slug"
                element={<ProjectPage />}
              />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </PageTransition>
        </main>
        <Footer />

        <CustomCursor />
        <Preloader />
        <ScrollProgressIndicator />
        <ParticleBackground />
        <StickyEmail />
      </ReactLenis>
    </div>
  );
}

export default App;
