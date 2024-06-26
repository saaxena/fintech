"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "./ui/text-reveal-card";

export function TextRevealCardPreview() {
  return (
    <div className=" bottom- 0 left-6 mr-8 mb-8 z-10 bg-[#0E0E10] h-[0rem] rounded-2xl w-full">
      <TextRevealCard
        text="Check your offer"
        revealText="Hurray, 10% off  "
      >
        <TextRevealCardTitle>
        <div className="text-4xl md:text-3xl font-normal text-neutral-600 dark:text-neutral-400">
        <span className="inline-block font-bold">Mgic card for early applicants</span>{" "}
</div>
        </TextRevealCardTitle>
        <TextRevealCardDescription>
          Hover over text to try your luck
          
        </TextRevealCardDescription>
      </TextRevealCard>
    </div>
    
  );
}
export default TextRevealCardPreview;
