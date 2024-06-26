// components/HeroSection.tsx
import React from 'react';
import Link from 'next/link';
import { Spotlight } from './ui/Spotlight';
import { Button } from './ui/moving-border';
import { TypewriterEffectSmooth } from './ui/typewriter-effect';
import FlipWordsDemo from './flipwordsdemo';
import CardStackDemo from './stack';

const HeroSection: React.FC = () => {
  const words = [
    { text: "Finance" },
    { text: "Your" },
    { text: "Needs" },
    { text: "with" },
    { text: "Fincorp india", className: "text-blue-500 dark:text-blue-500" },
  ];

  return (
    <div className="relative h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center overflow-hidden mx-auto py-10 md:py-0">
      {/* Position Spotlight */}
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
      
      {/* Top right corner button */}
      <div className="absolute top-4 right-4">
      <Link href= "/signup">
      <Button borderRadius="1.75rem" className="  bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800">
              Log in
            </Button>
</Link>
      </div>
      
      {/* Content */}
      <div className="p-4 relative z-10 w-full text-left">
        <div className="flex flex-col items-left justify-left mt-12"> {/* Added mt-8 for top margin */}
          <TypewriterEffectSmooth words={words} /> {/* Typewriter text */}
          {/* Join now button */}
        <div className="mt-4 text-left">
          <Link href="/courses">
            <Button borderRadius="1.75rem" className="  bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800">
              Apply now
            </Button>
          </Link>
        </div>
          
          <FlipWordsDemo /> {/* Flip flop text below */}
        </div>
       </div>
        
      
      {/* Absolute positioning for CardStackDemo */}
      <CardStackDemo />
      

      
    </div>
  );
};

export default HeroSection;
