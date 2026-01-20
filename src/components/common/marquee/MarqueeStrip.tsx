"use client";
import { MarqueeItem } from "@/types/marquee";
import Image from "next/image";
import React, { useMemo } from "react";

interface MarqueeStripProps {
  items: MarqueeItem[];
  speed?: "slow" | "normal" | "fast";
  direction?: "left" | "right";
  pauseOnHover?: boolean;
  className?: string;
  itemGapClassName?: string;
  itemHeight?: string | number;
  imageAspect?: number;
}

const speedMap: Record<NonNullable<MarqueeStripProps["speed"]>, string> = {
  slow: "40s",
  normal: "26s",
  fast: "18s",
};

export default function MarqueeStrip({
  items,
  speed = "normal",
  direction = "left",
  pauseOnHover = true,
  className = "",
  itemGapClassName = "gap-6",
  itemHeight = 56,
  imageAspect = 1.7,
}: MarqueeStripProps) {
  // Memoize to avoid linter warning about potential new reference each render
  const safeItems = useMemo<MarqueeItem[]>(() => (items && items.length ? items : []), [items]);

  const doubled = useMemo<MarqueeItem[]>(() => [...safeItems, ...safeItems], [safeItems]);

  if (safeItems.length === 0) return null;

  const heightValue = typeof itemHeight === "number" ? `${itemHeight}px` : itemHeight;

  return (
    <div
      className={`relative overflow-hidden max-w-none w-screen left-1/2 -translate-x-1/2 ${className}`}
      style={{
        "--speed": speedMap[speed],
        "--item-h": heightValue,
        "--img-r": String(imageAspect),
      } as React.CSSProperties}
      data-pause={pauseOnHover ? "true" : "false"}
    >
      {/* LEFT fade */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-white/50 to-transparent z-10" />
      {/* RIGHT fade */}
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-white/50 to-transparent z-10" />

      <div
        className={`
          ${direction === "right" ? "animate-marquee-reverse" : "animate-marquee"}
          inline-flex ${itemGapClassName} whitespace-nowrap will-change-transform
          ${pauseOnHover ? "hover:[animation-play-state:paused]" : ""}
        `}
      >
        {doubled.map((item, index) => {
          const key = `${item.id}-${index}`;
          const label = item.label || "";

            if (item.type === "image") {
              return (
                <div
                  key={key}
                  className="marquee-image-card shrink-0 relative rounded-xl overflow-hidden border border-white/20 bg-black"
                  style={{
                    height: "200px",
                  }}
                >
                  <Image
                    src={item.imageSrc}
                    alt={label || "image"}
                    fill
                    sizes="20vw"
                    className="object-cover"
                  />
                  {label && (
                    <div className="absolute bottom-2 left-2 px-3 py-1 rounded-full bg-black/50 backdrop-blur text-white text-sm border border-white/20">
                      {label}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <span
                key={key}
                className="shrink-0 px-4 py-2 rounded-full text-white bg-white/10 backdrop-blur border border-white/20 flex items-center"
                style={{ height: "var(--item-h)" }}
              >
                {label}
              </span>
            );
        })}
      </div>

      <style jsx>{`
        .marquee-image-card {
          width: 220px;
        }
        @media (min-width: 640px) {
          .marquee-image-card {
            width: 260px;
          }
        }
        @media (min-width: 768px) {
          .marquee-image-card {
            width: 300px;
          }
        }
        @media (min-width: 1024px) {
          .marquee-image-card {
            width: 340px;
          }
        }
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(0); }
          100% { transform: translateX(50%); }
        }
        .animate-marquee {
          animation: marquee-left var(--speed) linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-right var(--speed) linear infinite;
        }
        [data-pause="true"]:hover .animate-marquee,
        [data-pause="true"]:hover .animate-marquee-reverse {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee,
          .animate-marquee-reverse {
            animation: none !important;
            transform: none !important;
          }
        }
      `}</style>
    </div>
  );
}
