import { useState, useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import GameCard from '../GameCard';

const TopNav = () => {
  const [activeSection, setActiveSection] = useState('Games');
  const contentRef = useRef<HTMLDivElement | null>(null);
  const gsapCtx = useRef<ReturnType<typeof gsap.context> | null>(null);

  useLayoutEffect(() => {
    gsapCtx.current = gsap.context(() => {}, contentRef);
    return () => {
      gsapCtx.current?.revert(); // Clean up animations on unmount
    };
  }, []);

  const handleSectionClick = (section: string) => {
    if (contentRef.current) {
      const tl = gsap.timeline();

      tl.to(contentRef.current, {
        x: '-100%',
        opacity: 0,
        duration: 0.4,
        ease: 'power2.out',
        onComplete: () => {
          setActiveSection(section);
        },
      })
        .set(contentRef.current, { x: '100%', opacity: 0 }) // Reset to start position
        .to(contentRef.current, {
          x: '0%',
          opacity: 1,
          duration: 0.4,
          ease: 'power2.inOut',
        });
    }
  };

  return (
    <>
      <div className="h-16 w-full p-2 flex bg-slate-800 rounded-xl gap-2">
        {['Games', 'Mini Game', 'XYZ'].map((section) => (
          <div
            key={section}
            className={`h-full w-1/3 text-white font-semibold flex justify-center items-center cursor-pointer ${
              activeSection === section ? 'bg-slate-700 rounded-lg' : ''
            }`}
            onClick={() => handleSectionClick(section)}
          >
            {section}
          </div>
        ))}
      </div>
      <div
        ref={contentRef}
        className="h-20 w-full transition-all duration-300"
      >
        {activeSection === 'Games' && (
          <div className="w-full h-dvh p-2 mt-4 overflow-y-scroll">
            <div className="w-full h-fit flex flex-wrap">
              <GameCard />
              <GameCard />
            </div>
          </div>
        )}
        {activeSection === 'Mini Game' && <div>H2I</div>}
        {activeSection === 'XYZ' && <div>H3I</div>}
      </div>
    </>
  );
};

export default TopNav;
