"use client";
import { DestinationCardProps } from "@/types/destinations.types";
import Image from "next/image";



export default function DestinationCard({
  item,
  desktopHeight,
  className = "",
}: DestinationCardProps) {
  return (
    <a
      href={item.href || "#"}
      className={`group relative rounded-lg overflow-hidden border border-white/15 bg-black/30 flex ${className}`}
      aria-label={item.title}
    >
      <div
        className="relative w-full h-[140px] md:h-(--desk-h)"
        style={{ "--desk-h": `${desktopHeight}px` } as React.CSSProperties & { "--desk-h": string }}
      >
        <Image
          src={item.imageSrc}
          alt={item.title}
          fill
          sizes="(max-width:768px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
          loading="lazy"
        />
        {item.showOverlay !== false && (
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent pointer-events-none" />
        )}
        {/* {item.priceFrom && (
          <PriceTag
            value={item.priceFrom}
            className="absolute top-2 right-2 w-[70px] lg:w-[90px]"
          />
        )} */}
        <div className="absolute bottom-2 left-2 right-2 flex flex-col gap-1">
          <h3 className="text-xs md:text-sm font-semibold text-white drop-shadow">
            {item.title}
          </h3>
          {/* {item.subtitle && (
            <p className="text-[10px] md:text-xs text-white/75 line-clamp-2">
              {item.subtitle}
            </p>
          )} */}
          {item.priceFrom && (
            <p className="text-[10px] md:text-xs font-bold text-white/75 line-clamp-2">
              From {item.priceFrom}/-
            </p>
          )}
        </div>
      </div>
    </a>
  );
}