"use client";

import { useAppData } from "@/src/context/AppDataContext";
import React from "react";

interface QuoteOneProps {
  bgColor?: string;
  textColor?: string;
  font?: string;
  value: number;
}

const QuoteOne: React.FC<QuoteOneProps> = ({
  bgColor = "#E8E8E8",
  textColor = "var(--color-primary)",
  font = "var(--font-amaranth)",
  value,
}) => {
  const { state } = useAppData();
  const textArr: string[] = state.homePage?.quotes || [
    "Travel far, travel wide, and let the journey change you.",
    "The world is a book, and those who do not travel read only one page.",
    "Adventure awaits beyond the horizon; go find it.",
    "Collect moments, not things, and let your soul wander.",
  ];
  return (
    <div
      className="w-full py-6 px-4 flex items-center justify-center relative overflow-hidden rounded-lg tracking-[0.60]"
      style={{ backgroundColor: bgColor }}
    >
      {/* Left decorative flourish */}
      <span
        aria-hidden="true"
        className="hidden lg:block absolute left-6 opacity-30 text-3xl md:text-4xl"
        style={{ color: textColor }}
      >
        ❦
      </span>

      <p
        className="text-sm md:text-sm text-center max-w-3xl"
        style={{
          color: textColor,
          fontFamily: font,
          opacity: 0.8,
        }}
      >
        {textArr[value - 1]}
      </p>

      <span
        aria-hidden="true"
        className="hidden lg:block absolute right-6 opacity-30 text-3xl md:text-4xl"
        style={{ color: textColor }}
      >
        ❦
      </span>
    </div>
  );
};

export default QuoteOne;
