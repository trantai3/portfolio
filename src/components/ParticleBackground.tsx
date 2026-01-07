import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP);

const ParticleBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const particles = gsap.utils.toArray<HTMLElement>('.particle', containerRef.current);

    particles.forEach((particle) => {
      gsap.set(particle, {
        width: Math.random() * 3 + 1,
        height: Math.random() * 3 + 1,
        opacity: Math.random(),
        left: Math.random() * window.innerWidth,
        top: Math.random() * (window.innerHeight + 1),
      });

      gsap.to(particle, {
        y: window.innerHeight,
        duration: Math.random() * 10 + 10,
        opacity: 0,
        repeat: -1,
        ease: 'none',
      });
    });
  }, { scope: containerRef });

  return (
    <div className="fixed inset-0 z-0 pointer-events-none" ref={containerRef}>
      {[...Array(100)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white particle"
        />
      ))}
    </div>
  );
};

export default ParticleBackground;
