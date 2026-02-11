"use client";
import { DestinationCardProps } from "@/types/destinations.types";
import Image from "next/image";

type Props = DestinationCardProps & {
  categoryLabel?: string;
  packageCount?: number;
  packageCountLabel?: string;
};

const formatPackageCount = (
  packageCount?: number,
  packageCountLabel?: string,
): string => {
  if (packageCountLabel) return packageCountLabel;
  if (typeof packageCount !== "number" || Number.isNaN(packageCount)) {
    return "5+ packages";
  }
  if (packageCount >= 10) return "10+ packages";
  if (packageCount >= 5) return "5+ packages";
  if (packageCount === 1) return "1 package";
  return `${packageCount} packages`;
};

export default function DestinationPageListCard({
  item,
  desktopHeight,
  className = "",
  categoryLabel,
  packageCount,
  packageCountLabel,
}: Props) {
  const packagesText = formatPackageCount(packageCount, packageCountLabel);
  const categoryText = categoryLabel || "International";
  const isDomestic = categoryText.toLowerCase().includes("domestic");
  const categoryBadgeClass = isDomestic
    ? "bg-emerald-400/20 border-emerald-200/30"
    : "bg-sky-400/20 border-sky-200/30";

  return (
    <a
      href={item.destination ? `/packages/${item.destination}` : "#"}
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

        <div className="absolute top-2 left-2 right-2 flex items-start justify-end gap-2">
          <span className="inline-flex items-center rounded-full border border-white/15 bg-black/30 px-2 py-1 text-[10px] md:text-xs font-semibold text-white backdrop-blur">
            {packagesText}
          </span>
        </div>

        <div className="absolute bottom-2 left-2 right-2 flex flex-col gap-1">
          <div className="flex items-center gap-2 min-w-0">
            <h3 className="text-xs md:text-sm font-semibold text-white drop-shadow truncate min-w-0">
              {item.title}
            </h3>
            <span
              className={`shrink-0 hidden lg:inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] md:text-xs font-semibold text-white backdrop-blur ${categoryBadgeClass}`}
            >
              {categoryText}
            </span>
          </div>
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