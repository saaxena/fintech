// components/CardStackDemo.tsx

import React from 'react';
import { CardStack } from './ui/card-stack';
import { AnimatedTooltip } from "./ui/animated-tooltip";

const CARDS = [
  {
    id: 0,
    name: "Aditya Mohan",
    designation: "Operations Manager",
    content: (
      <p>
        These cards are amazing, <span className="font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5">I want to use them</span> in my
        project. Framer motion is a godsend ngl tbh fam 🙏
      </p>
    ),
  },
  {
    id: 1,
    name: "Rohit Kumar",
    designation: "CEO",
    content: (
      <p>
        I dont like this Twitter thing,{" "}
        <span className="font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5">deleting it right away</span> because yolo. Instead, I
        would like to call it <span className="font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5">X.com</span> so that it can easily
        be confused with adult sites.
      </p>
    ),
  },
  {
    id: 2,
    name: "Abhishek Raza",
    designation: "Director",
    content: (
      <p>
        The first rule of
        <span className="font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5">Fight Club</span> is that you do not talk about fight
        club. The second rule of
        <span className="font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5">Fight club</span> is that you DO NOT TALK about fight
        club.
      </p>
    ),
  },
];

const image = [
  {
    id: 1,
    name: "Aditya Mohan",
    designation: "Operations Manager",
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
  },
  {
    name: "Rohit Kumar",
    designation: "CEO",
    
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80',
  },
  {
    id: 3,
    name: "Abhishek Raza",
    designation: "Director",
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 4,
    name: 'Andre Gomez',
    designation: 'Drumming Expert',
    image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
  },
];

const CardStackDemo: React.FC = () => {
  return (
    <div className="absolute bottom-0 right-4 mr-2 mb-2 z-10">
      <CardStack items={CARDS.map((card, index) => ({
        ...card,
        content: (
          <>
            {card.content}
            <AnimatedTooltip items={[image[index]]} />
          </>
        ),
      }))} />
    </div>
  );
};

export default CardStackDemo;
