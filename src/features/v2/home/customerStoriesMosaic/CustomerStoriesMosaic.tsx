"use client";

import React, { useMemo, useState } from "react";
import type { CustomerStory } from "@/types/customer.types";
import { CUSTOMER_STORIES } from "@/src/data/customerGallery";
import CustomerStoryPortal from "@/src/features/v2/home/customerStories/CustomerStoryPortal";
import CustomerStoriesMosaicBackground from "./components/CustomerStoriesMosaicBackground";
import CustomerStoriesMosaicHeader from "./components/CustomerStoriesMosaicHeader";
import CustomerStoriesMosaicCarousel from "./components/CustomerStoriesMosaicCarousel";
import useResponsivePageSize from "@/src/hooks/useResponsivePageSize";

export default function CustomerStoriesMosaic({
  stories = CUSTOMER_STORIES,
  heading = "Customer Happy Stories",
  subheading = "A few real moments from real travelers",
}: {
  stories?: CustomerStory[];
  heading?: string;
  subheading?: string;
}) {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [page, setPage] = useState(0);
  const pageSize = useResponsivePageSize({
    xsMaxWidthPx: 640,
    xs: 1,
    md: 2,
    lg: 3,
    xl: 4,
    lgMaxWidthPx: 1024,
  });

  const storiesForPortal = useMemo(() => stories ?? [], [stories]);

  const pageCount = useMemo(() => {
    const total = storiesForPortal.length;
    return Math.max(1, Math.ceil(total / pageSize));
  }, [storiesForPortal.length, pageSize]);

  React.useEffect(() => {
    // Clamp page when stories change
    setPage((p) => Math.min(p, pageCount - 1));
  }, [pageCount]);

  const pages = useMemo(() => {
    const arr: CustomerStory[][] = [];
    for (let p = 0; p < pageCount; p++) {
      const start = p * pageSize;
      arr.push(storiesForPortal.slice(start, start + pageSize));
    }
    return arr;
  }, [storiesForPortal, pageCount, pageSize]);

  const avatarStories = useMemo(() => {
    return storiesForPortal.slice(0, 4);
  }, [storiesForPortal]);

  return (
    <section className="relative max-w-screen-2xl mx-auto w-full overflow-hidden bg-primary mt-6">
      <CustomerStoriesMosaicBackground />

      <div className="relative max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-16">
        <CustomerStoriesMosaicHeader
          heading={heading}
          subheading={subheading}
          avatarStories={avatarStories}
          totalStories={storiesForPortal.length}
          onOpenStories={() =>
            setActiveIdx(storiesForPortal.length ? page * pageSize : null)
          }
        />

        <CustomerStoriesMosaicCarousel
          pages={pages}
          page={page}
          setPage={setPage}
          pageCount={pageCount}
          pageSize={pageSize}
          onOpenStory={(absoluteIndex) => setActiveIdx(absoluteIndex)}
        />
      </div>

      {activeIdx !== null && (
        <CustomerStoryPortal
          stories={storiesForPortal}
          activeIdx={activeIdx}
          onClose={() => setActiveIdx(null)}
          onPrev={() => setActiveIdx((i) => (i! > 0 ? i! - 1 : i))}
          onNext={() =>
            setActiveIdx((i) =>
              i! < storiesForPortal.length - 1 ? i! + 1 : i
            )
          }
        />
      )}
    </section>
  );
}
