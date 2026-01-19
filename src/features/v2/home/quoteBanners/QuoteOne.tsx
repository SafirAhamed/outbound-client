"use client";

import React from "react";

interface QuoteOneProps {
  text: string;
  bgColor?: string;
  textColor?: string;
  font?: string;
}

const QuoteOne: React.FC<QuoteOneProps> = ({
  text,
  bgColor = "#E8E8E8",
  textColor = "var(--color-primary)",
  font = "var(--font-amaranth)"
}) => {
  return (
    <div
      className="w-full py-6 px-4 flex items-center justify-center relative overflow-hidden rounded-lg tracking-[0.60]"
      style={{ backgroundColor: bgColor }}
    >
      {/* Left decorative flourish */}
      <span
        aria-hidden="true"
        className="absolute left-6 opacity-30 text-3xl md:text-4xl"
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
        {text}
      </p>

      <span
        aria-hidden="true"
        className="absolute right-6 opacity-30 text-3xl md:text-4xl"
        style={{ color: textColor }}
      >
        ❦
      </span>
    </div>
  );
};

export default QuoteOne;
