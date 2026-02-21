"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import type { CustomerStory } from "@/types/customer.types";
import GlassSurface from "@/src/components/common/GlassSurface";
import CustomerStoriesMosaicSlide from "./CustomerStoriesMosaicSlide";

export default function CustomerStoriesMosaicCarousel({
  pages,
  page,
  setPage,
  pageCount,
  pageSize,
  onOpenStory,
  autoSlide = false,
}: {
  pages: CustomerStory[][];
  page: number;
  setPage: (updater: (p: number) => number) => void;
  pageCount: number;
  pageSize: number;
  onOpenStory: (absoluteIndex: number) => void;
  autoSlide?: boolean;
}) {
  const [visualPage, setVisualPage] = useState(page);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [isWrapping, setIsWrapping] = useState(false);

  const slides = useMemo(() => {
    if (pageCount <= 1) return pages;
    return [...pages, pages[0]];
  }, [pageCount, pages]);

  const startWrapToFirst = useCallback(() => {
    if (pageCount <= 1) return;
    setIsWrapping(true);
    setTransitionEnabled(true);
    setVisualPage(pageCount); // animate forward to the cloned first slide
  }, [pageCount]);

  const goNext = useCallback(() => {
    if (pageCount <= 1) return;
    if (isWrapping) return;
    if (page >= pageCount - 1) {
      startWrapToFirst();
      return;
    }
    setPage((p) => Math.min(pageCount - 1, p + 1));
  }, [isWrapping, page, pageCount, setPage, startWrapToFirst]);

  const goPrev = useCallback(() => {
    setPage((p) => Math.max(0, p - 1));
  }, [setPage]);

  useEffect(() => {
    if (!autoSlide) return;
    if (pageCount <= 1) return;

    const id = window.setInterval(() => {
      goNext();
    }, 3000);

    return () => {
      window.clearInterval(id);
    };
  }, [autoSlide, goNext, pageCount]);

  return (
    <div className="mt-7 sm:mt-9">
      <div className="relative flex items-center gap-3 sm:gap-4">
        <GlassSurface
          as="button"
          type="button"
          onClick={goPrev}
          disabled={page === 0}
          aria-label="Previous stories"
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 inline-flex items-center justify-center h-10 w-10 rounded-full shadow-black/30 disabled:opacity-30 disabled:hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 sm:static sm:translate-y-0 sm:h-11 sm:w-11"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M15 6l-6 6 6 6"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </GlassSurface>

        <div className="relative w-full flex-1 px-0 sm:px-2 lg:px-3 py-4 sm:py-6">
          <div className="rounded-2xl overflow-x-hidden overflow-y-visible">
            <div
              className={`flex ${transitionEnabled
                  ? "transition-transform duration-700 ease-out"
                  : "transition-none"
                }`}
              style={{
                transform: `translateX(-${(isWrapping ? visualPage : page) * 100
                  }%)`,
              }}
              onTransitionEnd={() => {
                if (!isWrapping) return;
                if (visualPage !== pageCount) return;

                // Snap back to the real first slide without showing a reverse animation.
                setTransitionEnabled(false);
                setVisualPage(0);
                setPage(() => 0);

                // Re-enable transitions for subsequent moves.
                requestAnimationFrame(() => {
                  requestAnimationFrame(() => {
                    setTransitionEnabled(true);
                    setIsWrapping(false);
                  });
                });
              }}
            >
              {slides.map((pageStories, p) => {
                const isClone = pageCount > 1 && p === pageCount;
                return (
                  <CustomerStoriesMosaicSlide
                    key={isClone ? "clone" : p}
                    stories={pageStories}
                    page={isClone ? 0 : p}
                    pageSize={pageSize}
                    onOpenStory={onOpenStory}
                    isActive={p === visualPage}
                  />
                );
              })}
            </div>
          </div>
        </div>

        <GlassSurface
          as="button"
          type="button"
          onClick={goNext}
          disabled={page >= pageCount - 1}
          aria-label="Next stories"
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 inline-flex items-center justify-center h-10 w-10 rounded-full shadow-black/30 disabled:opacity-30 disabled:hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 sm:static sm:translate-y-0 sm:h-11 sm:w-11"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M9 6l6 6-6 6"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </GlassSurface>
      </div>

      <div className="mt-4 flex items-center justify-center">
        <GlassSurface
          as="span"
          className="inline-flex items-center rounded-full px-3.5 py-1.5 text-xs sm:text-sm text-white/85"
        >
          {page + 1} / {pageCount}
        </GlassSurface>
      </div>

      <div className="mt-5 flex items-center justify-center">
        <p className="text-xs sm:text-sm text-white/70">
          Tap any story to open full screen.
        </p>
      </div>
    </div>
  );
}
