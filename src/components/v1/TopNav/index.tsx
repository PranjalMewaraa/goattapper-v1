import { useState, useRef,  } from 'react';
import { gsap } from 'gsap';
import GameCard from '../GameCard';

const TopNav = () => {
  const [activeSection, setActiveSection] = useState('Games');
  const contentRef = useRef<HTMLDivElement | null>(null);

  const handleSectionClick = (section: string) => {
    // Animate out the current section
    if (contentRef.current) {
      gsap.to(contentRef.current, {
        x: '-100%', // Swipe out to the left
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          setActiveSection(section); // Update the active section
          gsap.fromTo(
            contentRef.current,
            { x: '100%', opacity: 0 }, // Start position for the new section
            {
              x: '0%', // Slide in from the right
              opacity: 1,
              duration: 0.5,
            }
          );
        },
      });
    }
  };

  return (
    <>
      <div className='h-16 w-full p-2 flex bg-slate-800 rounded-xl gap-2'>
        <div
          className={`h-full w-1/3 text-white font-semibold flex justify-center items-center cursor-pointer ${
            activeSection === 'Games' ? 'bg-slate-700 rounded-lg' : ''
          }`}
          onClick={() => handleSectionClick('Games')}
        >
          Games
        </div>
        <div
          className={`h-full w-1/3 text-white font-semibold flex justify-center items-center cursor-pointer ${
            activeSection === 'Mini Game' ? 'bg-slate-700 rounded-lg' : ''
          }`}
          onClick={() => handleSectionClick('Mini Game')}
        >
          Mini Game
        </div>
        <div
          className={`h-full w-1/3 text-white font-semibold flex justify-center items-center cursor-pointer ${
            activeSection === 'XYZ' ? 'bg-slate-700 rounded-lg' : ''
          }`}
          onClick={() => handleSectionClick('XYZ')}
        >
          XYZ
        </div>
      </div>
      <div
        ref={contentRef}
        className='h-20 w-full transition-all duration-300' // Added transition classes
      >
        {activeSection === 'Games' && <div className='w-full h-dvh p-2 mt-4 overflow-y-scroll'>
            <div className='w-full h-fit flex flex-wrap'><GameCard/><GameCard/></div>
        </div>}
        {activeSection === 'Mini Game' && <div>H2I</div>}
        {activeSection === 'XYZ' && <div>H3I</div>}
      </div>
    </>
  );
};

export default TopNav;
