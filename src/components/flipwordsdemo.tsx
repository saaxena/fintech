// components/FlipWordsDemo.tsx
import React from "react";
import { FlipWords } from "./ui/flip-words";

export function FlipWordsDemo() {
  const words = ["Personal", "Business", "Mortgage", "Loans"];

  return (
    <div className="absolute top-[-2rem] left-4 md:left-4 z-4">
      <div className="text-4xl md:text-5xl font-normal text-neutral-600 dark:text-neutral-400">
        <span className="inline-block font-bold">Get</span>{" "}
        <FlipWords words={words} className="inline-block font-bold" /> <br />
        
        <span className="inline-block font-bold">Disbursed in Minutes</span>{" "}
        
      </div>
    </div>
  );
}

export default FlipWordsDemo;
