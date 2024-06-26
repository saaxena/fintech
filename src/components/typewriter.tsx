// components/TypewriterEffectSmoothDemo.tsx
import React from "react";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

export function TypewriterEffectSmoothDemo() {
  const words = [
    { text: "Finance" },
    { text: "Your" },
    { text: "Needs" },
    { text: "with" },
    { text: "Fincorp india", className: "text-blue-500 dark:text-blue-500" },
  ];

  return (
    <div className="flex flex-col items-left justify-left mt-[-2rem]">
      <TypewriterEffectSmooth words={words} />
      {/* Additional content or components can be added here */}
      
    </div>
  );
}

export default TypewriterEffectSmoothDemo;
