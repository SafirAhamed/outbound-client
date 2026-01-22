"use client";
import { DestinationGrid } from "@/types/destinations.types";
import React from "react";
import DestinationCard from "../slidesAndCards/DestinationCard";
import Section from "../layout/Section";

interface CommonGridProps {
  items: DestinationGrid[];
  desktopRowHeight?: number;
  mobileHeight?: number;
  className?: string;
  heading?: string;
}

const spanDesktop: Record<number, string> = {
  3: "md:col-span-3",
  4: "md:col-span-4",
  5: "md:col-span-5",
  6: "md:col-span-6",
  12: "md:col-span-12",
};

const spanMobile: Record<number, string> = {
  6: "col-span-6",
  12: "col-span-12",
};

export default function DestinationCollage({
  items,
  heading,
  desktopRowHeight = 260,
  mobileHeight = 140,
  className = "",
}: CommonGridProps) {
  return (
    <Section title={heading} centerTitle titleSize="large" viewAllUrl="#">
      <div className="mx-auto w-full" style={{ maxWidth: 1180 }}>
        {/* {heading && (
          <div className="mb-4 flex flex-col items-center">
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-[#052210]">
              {heading}
            </h2>
          </div>
        )} */}
        <div className="mt-8 lg:mt-8 grid grid-cols-12 gap-3 md:gap-4">
          {items.map((item) => {
            const mobileCls = spanMobile[item.sizeMobile || 6];
            const desktopCls = spanDesktop[Math.round(item.sizeDesktop || 4)];
            return (
              <div key={item.id} className={`${mobileCls} ${desktopCls}`}>
                <DestinationCard
                  item={item}
                  mobileHeight={mobileHeight}
                  desktopHeight={desktopRowHeight}
                />
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
