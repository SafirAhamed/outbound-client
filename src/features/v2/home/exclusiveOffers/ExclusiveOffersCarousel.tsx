"use client";

import { useState } from "react";

import AutoCarousel from "@/src/components/common/carousel/AutoCarousel";
import ThumbnailsGrid from "@/src/features/packageDetails/header/ThumbnailsGrid";
import StepIndicator from "@/src/components/common/StepIndicator";
import type { RenderSlideFn, SlideItem } from "@/types/carousel.types";

interface ExclusiveOffersCarouselProps {
  slides: SlideItem[];
  className?: string;
  renderSlide?: RenderSlideFn;
}

export default function ExclusiveOffersCarousel({
  slides,
  className = "",
  renderSlide,
}: ExclusiveOffersCarouselProps) {
  const [current, setCurrent] = useState(0);

  return (
    <div
      className={`w-full mx-auto lg:grid lg:grid-cols-3 lg:gap-6 lg:h-[450px] ${className}`}
    >
      <article className="lg:col-span-2" aria-label="Exclusive offers">
        <div className="lg:hidden">
          <AutoCarousel
            heightPx={260}
            slides={slides}
            current={current}
            setCurrent={setCurrent}
            intervalMs={5000}
            pauseOnHover
            renderSlide={renderSlide}
          />
        </div>
        <div className="hidden lg:block">
          <AutoCarousel
            heightPx={450}
            slides={slides}
            current={current}
            setCurrent={setCurrent}
            intervalMs={5000}
            pauseOnHover
            renderSlide={renderSlide}
          />
        </div>
      </article>

      <div className="hidden lg:block">
        <ThumbnailsGrid slides={slides} />
      </div>
    </div>
  );
}
