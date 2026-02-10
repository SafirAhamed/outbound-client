"use client";

import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import StepIndicator from "@/src/components/common/StepIndicator";
import TestimonialCardHome from "./TestimonialCardHome";
import { useAppData } from "@/src/context/AppDataContext";

const DOODLE_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="220" height="220" viewBox="0 0 220 220">
  <g fill="none" stroke="white" stroke-opacity="0.14" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M18 44c22-18 45-14 64 6" />
    <path d="M24 62c18-10 35-8 50 4" />
    <path d="M164 30c10 10 10 26 0 36s-26 10-36 0-10-26 0-36 26-10 36 0z" />
    <path d="M152 66c10 6 22 6 32 0" />

    <path d="M40 168c18-18 46-18 64 0" />
    <path d="M44 182c16-12 40-12 56 0" />

    <path d="M170 150l26-10-14 24-5-11-7-3z" />
    <path d="M168 152l18 8" />

    <path d="M112 116c0 10-8 18-18 18s-18-8-18-18 8-18 18-18 18 8 18 18z" />
    <path d="M94 134l-2 10" />
    <path d="M104 132l6 8" />

    <path d="M20 118c10-6 20-6 30 0" />
    <path d="M24 126c8-4 14-4 22 0" />

    <path d="M136 108l8-6 8 6-6 8-10 0-6-8z" />
    <path d="M144 94v8" />

    <path d="M190 92l4 10 10 4-10 4-4 10-4-10-10-4 10-4 4-10z" />
  </g>
</svg>`;

const DOODLE_BG = `url("data:image/svg+xml,${encodeURIComponent(DOODLE_SVG)}")`;

export default function TestimonialSection() {
  const { state } = useAppData();
  const testimonials = state.homePage?.testimonials || [];
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center", // required for perfect centering
    },
    [Autoplay({ delay: 3000 })]
  );

  const [current, setCurrent] = React.useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const handleSelect = () => {
      setCurrent(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", handleSelect);
    handleSelect();

    return () => {
      emblaApi.off("select", handleSelect);
    };
  }, [emblaApi]);

  return (
    // <section className="max-w-screen-2xl mx-auto py-12 px-2 bg-linear-to-br from-[#EAFDF3] via-white to-[#EAFDF3]">
    <section className="relative overflow-hidden max-w-screen-2xl mx-auto py-12 px-2 bg-primary">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage: `${DOODLE_BG}, radial-gradient(circle at 18% 28%, rgba(255,255,255,0.12), transparent 55%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.10), transparent 58%)`,
          backgroundSize: "220px 220px, cover, cover",
          backgroundRepeat: "repeat, no-repeat, no-repeat",
          backgroundPosition: "0 0, center, center",
        }}
      />
      {/* Header */}
      <div className="max-w-3xl mx-auto mb-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
          TESTIMONIALS
        </h2>
        <div className="h-1 w-24 bg-white mx-auto mb-2 rounded"></div>
        <p className="text-gray-300 text-xs">
          See what our travelers say about us!
        </p>
      </div>

      {/* Carousel + Buttons */}
      <div className="relative">
        {/* Left Button */}
        <button
          onClick={() => emblaApi?.scrollPrev()}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white rounded-full shadow p-2 text-[#052210]"
        >
          <ChevronLeft size={30} />
        </button>

        {/* Embla Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex touch-pan-y -ml-3">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="pl-3 shrink-0 basis-full md:basis-1/2 lg:basis-1/3 flex justify-center"
              >
                <TestimonialCardHome review={t} />
              </div>
            ))}
          </div>
        </div>

        {/* Right Button */}
        <button
          onClick={() => emblaApi?.scrollNext()}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white rounded-full shadow p-2 text-[#052210]"
        >
          <ChevronRight size={30} />
        </button>
      </div>

      {/* Indicators */}
      <div className="mt-6 flex justify-center">
        <StepIndicator currentStep={current} totalSteps={testimonials.length} darkBg={true}/>
      </div>
    </section>
  );
}
