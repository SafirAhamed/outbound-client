"use client";
import React from "react";
import DestinationCardSkeleton from "./DestinationCardSkeleton";

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

const DEFAULT_MOBILE_SPAN = 6;
const DEFAULT_DESKTOP_SPAN = 4;

const COLLAGE_LAYOUT: Array<{ sizeMobile: number; sizeDesktop: number }> = [
  { sizeMobile: 6, sizeDesktop: 3 },
  { sizeMobile: 6, sizeDesktop: 6 },
  { sizeMobile: 6, sizeDesktop: 3 },
  { sizeMobile: 6, sizeDesktop: 4 },
  { sizeMobile: 6, sizeDesktop: 4 },
  { sizeMobile: 6, sizeDesktop: 4 },
];

const DestinationGridSkeleton: React.FC = () => {
  return (
    <div className="mt-8 lg:mt-8 grid grid-cols-12 gap-3 md:gap-4">
      {COLLAGE_LAYOUT.map((layout, i) => {
        const mobileCls = spanMobile[layout.sizeMobile] ?? spanMobile[DEFAULT_MOBILE_SPAN];
        const desktopCls =
          spanDesktop[Math.round(layout.sizeDesktop)] ?? spanDesktop[DEFAULT_DESKTOP_SPAN];

        return (
          <div key={i} className={`${mobileCls} ${desktopCls}`}>
            <DestinationCardSkeleton />
          </div>
        );
      })}
    </div>
  );
};

export default DestinationGridSkeleton;