"use client";

import ShowcaseCarousel from "@/src/components/common/carousel/ShowcaseCarousel";
import Section from "@/src/components/common/layout/Section";
import { useAppData } from "@/src/context/AppDataContext";
import type { TrendingDestinationItem } from "@/types/homePage.types";
import Image from "next/image";

export default function TrendingDestination() {
  const { state } = useAppData();

  const items: TrendingDestinationItem[] =
    (state.homePage?.trendingDestinations ?? []).map((d) => ({
      ...d,
      tagLine: d.tagLine ?? "Trending now",
      locale: d.locale ?? "en",
    }));

  return (
    <Section
      fullWidth
      className="mt-10"
    >
      <div className="relative overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 pointer-events-none">
            <Image
              src="/images/paperplaneVector.jpg"
              alt=""
              // fill
              width={800}
              height={600}
              priority
              sizes="100vw"
              className="object-cover rotate-0 absolute left-0 lg:left-70 top-10"
            />
            {/* <div className="absolute inset-0 bg-gradient-to-t from-[#052210]/80 via-[#052210]/40 to-transparent" /> */}
          </div>

        <div className="relative px-6 lg:mt-4 mb-6 sm:mb-0">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-[#052210] text-center">
            POPULAR&nbsp;DESTINATIONS
          </h2>
          <ShowcaseCarousel items={items} className="py-8" />
        </div>
      </div>
    </Section>
  );
}
