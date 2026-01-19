"use client";
import MarqueeStrip from "@/src/components/common/marquee/MarqueeStrip";
import { MarqueeItem } from "@/types/marquee";
import Image from "next/image";

interface CustomerGallerySectionProps {
  row1: MarqueeItem[];
  row2: MarqueeItem[];
  className?: string;
}

export default function CustomerGallerySection({
  row1,
  row2,
  className = "",
}: CustomerGallerySectionProps) {
  if (!row1?.length && !row2?.length) return null;

  const bottomH = "22vh";

  return (
    <section className={`w-full ${className}`}>
      <div className="max-w-screen-2xl mx-auto ">
        <div className="relative flex flex-col items-center mb-4">
          <div className="absolute inset-0 -z-10 opacity-40 mask-[radial-gradient(circle_at_center,white,transparent)] " />
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#052210]">
            {/* drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)] */}
            Happy Customers
          </h2>
          <div className="mt-2 flex justify-center">
            <Image
              src="/images/smilevector.png"
              alt="Smiley underline"
              className="h-10 w-auto select-none pointer-events-none"
              loading="lazy"
              width={150}
              height={40}
            />
          </div>
          <p className="mt-3 text-sm md:text-base text-black/70 max-w-xl text-center">
            Moments shared from recent journeys. Real places. Real smiles.
          </p>
        </div>

        <MarqueeStrip
          items={row2}
          speed="slow"
          direction="left"
          pauseOnHover
          className="mt-2"
          itemGapClassName="gap-6"
          itemHeight={bottomH}
          imageAspect={2.0}
        />
      </div>
    </section>
  );
}
