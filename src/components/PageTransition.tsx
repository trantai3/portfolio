import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useLocation } from 'react-router-dom';
import { useRef, useEffect } from 'react';

gsap.registerPlugin(useGSAP);

interface Props {
  children: React.ReactNode;
}

export default function PageTransition({ children }: Props) {
  const location = useLocation();
  const isFirstRender = useRef(true);

  useGSAP(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const tl = gsap.timeline();

    tl.set('.page-transition', { display: 'block', yPercent: 0, pointerEvents: 'all' })
      .set('.page-transition--inner', { yPercent: 100 })
      .to('.page-transition--inner', {
        yPercent: 0,
        duration: 0.4,
        ease: 'power2.inOut',
      })
      .to('.page-transition--inner', {
        yPercent: -100,
        duration: 0.4,
        ease: 'power2.inOut',
      })
      .set('.page-transition', { yPercent: -100, pointerEvents: 'none', display: 'none' });
  }, [location.pathname]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="relative">
      <div
        className="page-transition w-screen h-screen fixed top-0 left-0 bg-background-light z-[50] pointer-events-none"
        style={{ display: 'none', transform: 'translateY(-100%)' }}
      >
        <div
          className="page-transition--inner w-screen h-screen fixed top-0 left-0 bg-primary z-[50] pointer-events-none"
          style={{ transform: 'translateY(100%)' }}
        ></div>
      </div>

      {children}
    </div>
  );
}
