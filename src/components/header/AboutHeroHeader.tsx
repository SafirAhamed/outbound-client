import React from "react";

type AboutHeroHeaderProps = {
  backgroundImage: string;
  title?: string;
  subtitle?: string;
  minHeightClassName?: string;
  className?: string;
};

export default function AboutHeroHeader({
  backgroundImage,
  title = "About Us",
  subtitle = "We craft trips that feel effortless—thoughtful itineraries, trusted partners, and support from planning to landing.",
  minHeightClassName = "min-h-[70vh]",
  className,
}: AboutHeroHeaderProps) {
  return (
    <section
      aria-label="About Hero"
      className={`relative w-full ${minHeightClassName} overflow-hidden flex items-center justify-center ${className ?? ""}`}
    >
      {/* Image */}
      <div
        className="absolute inset-0 bg-cover bg-bottom bg-no-repeat"
        style={backgroundImage ? { backgroundImage: `url('${backgroundImage}')` } : undefined}
        aria-hidden="true"
      />

      {/* Readability overlay */}
      <div
        className="absolute inset-0 bg-linear-to-b from-black/70 via-black/35 to-black/80"
        aria-hidden="true"
      />

      {/* Decorative soft highlights */}
      <div
        className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-white/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-28 -right-24 h-96 w-96 rounded-full bg-white/10 blur-3xl"
        aria-hidden="true"
      />

      {/* Curved crop overlay (bottom waves) */}
      <div className="absolute inset-x-0 bottom-0 pointer-events-none" aria-hidden="true">
        {/* Emojis along curve edge */}
        
        <svg
          className="block w-full h-[140px] md:h-[180px] text-white"
          viewBox="0 0 1440 220"
          preserveAspectRatio="none"
        >
          <path
            className="fill-current"
            d="M0,120 C160,200 320,40 480,110 C640,180 800,70 960,120 C1120,170 1280,110 1440,150 L1440,220 L0,220 Z"
            opacity="0.95"
          />
          <path
            className="fill-current"
            d="M0,150 C180,90 360,210 540,140 C720,70 900,190 1080,130 C1260,70 1350,140 1440,160 L1440,220 L0,220 Z"
            opacity="0.65"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 text-center w-full">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white drop-shadow-sm tracking-tight leading-[1.05]">
          {title}
        </h1>
        <div className="mt-4 h-1 w-16 md:w-24 rounded-full bg-white/80" />
        <p className="mt-5 max-w-3xl text-base md:text-xl text-white/90 leading-relaxed mx-auto text-center">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
