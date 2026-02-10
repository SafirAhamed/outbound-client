"use client";

import Image from "next/image";
import type { SlideItem } from "@/types/carousel.types";
import { ExclusiveSlide } from "@/types/homePage.types";

export type ContentPosition =
  | "top-left"
  | "top-center"
  | "top-right"
  | "middle-left"
  | "middle-center"
  | "middle-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right";


const POSITION_WRAPPER_CLASSES: Record<
  ContentPosition,
  { align: string; text: string }
> = {
  "top-left": { align: "items-start justify-start", text: "text-left" },
  "top-center": { align: "items-start justify-center", text: "text-center" },
  "top-right": { align: "items-start justify-end", text: "text-right" },
  "middle-left": { align: "items-center justify-start", text: "text-left" },
  "middle-center": { align: "items-center justify-center", text: "text-center" },
  "middle-right": { align: "items-center justify-end", text: "text-right" },
  "bottom-left": { align: "items-end justify-start", text: "text-left" },
  "bottom-center": { align: "items-end justify-center", text: "text-center" },
  "bottom-right": { align: "items-end justify-end", text: "text-right" },
};

const OVERLAY_CLASSES: Record<
  NonNullable<ExclusiveSlide["overlay"]>,
  string
> = {
  none: "",
  "20": "bg-black/20",
  "30": "bg-black/30",
  "40": "bg-black/40",
  "60": "bg-black/60",
  light: "bg-black/20",
  medium: "bg-black/40",
  dark: "bg-black/60",
};

export default function ExclusiveOfferSlide({
  slide,
  priority = false,
}: {
  slide: ExclusiveSlide;
  priority?: boolean;
}) {
  const position: ContentPosition = slide.contentPosition ?? "bottom-left";
  const positionConfig = POSITION_WRAPPER_CLASSES[position];

  const titleColor = slide.titleColor;
  const subtitleColor = slide.subtitleColor;
  const buttonBg = slide.buttonColor;
  const buttonText = slide.buttonTextColor;

  const overlayClass = slide.overlay ? OVERLAY_CLASSES[slide.overlay] : "bg-black/30";

  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0">
        <Image
          src={slide.img_src}
          alt={slide.alt || slide.title || slide.subtitle || "slide"}
          fill
          sizes="(max-width: 640px) 100vw, 800px"
          className="object-cover"
          priority={priority}
        />
      </div>

      {overlayClass && <div className={`absolute inset-0 ${overlayClass}`} />}

      {(slide.title || slide.subtitle || slide.buttonText) && (
        <div className={`absolute inset-0 flex p-6 sm:p-10 lg:p-14 ${positionConfig.align}`}>
          <div className={`w-full max-w-xl ${positionConfig.text}`}>
              {slide.title && (
                <h3
                  className="text-white text-xl sm:text-2xl font-bold tracking-tight"
                  style={titleColor ? { color: titleColor } : undefined}
                >
                  {slide.title}
                </h3>
              )}
              {slide.subtitle && (
                <p
                  className="mt-1 text-white/90 text-sm sm:text-base"
                  style={subtitleColor ? { color: subtitleColor } : undefined}
                >
                  {slide.subtitle}
                </p>
              )}

              {slide.buttonText && slide.link && (
                <div className="mt-3">
                  <a
                    href={slide.link}
                    className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium border-0 shadow-sm hover:shadow-md transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                    style={
                      buttonBg || buttonText
                        ? {
                            backgroundColor: buttonBg,
                            color: buttonText,
                          }
                        : undefined
                    }
                  >
                    {slide.buttonText}
                  </a>
                </div>
              )}
          </div>
        </div>
      )}
    </div>
  );
}
