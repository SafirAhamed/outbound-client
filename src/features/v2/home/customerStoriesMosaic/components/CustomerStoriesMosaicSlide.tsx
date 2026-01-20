"use client";

import type { CustomerStory } from "@/types/customer.types";
import CustomerStoryMosaicTile from "../CustomerStoryMosaicTile";

export default function CustomerStoriesMosaicSlide({
  stories,
  page,
  pageSize,
  onOpenStory,
}: {
  stories: CustomerStory[];
  page: number;
  pageSize: number;
  onOpenStory: (absoluteIndex: number) => void;
}) {
  const isSingleCard = pageSize === 1;

  return (
    <div className="w-full flex-none">
      <div className="px-0 sm:px-3 lg:px-4 py-3 sm:py-4">
        <div
          className="grid items-start gap-4 sm:gap-6"
          style={{
            gridTemplateColumns: `repeat(${pageSize}, minmax(0, 1fr))`,
          }}
        >
          {stories.map((story, idx) => {
            const nudgeClass =
              idx === 1
                ? "md:translate-y-3 lg:translate-y-4"
                : idx === 2
                ? "md:-translate-y-2 lg:-translate-y-3"
                : idx === 3
                ? "md:translate-y-2 lg:translate-y-2"
                : "";

            const heightClass =
              idx === 0
                ? ""
                : idx === 1
                ? "lg:h-[440px] xl:h-[480px]"
                : idx === 2
                ? "lg:h-[390px] xl:h-[420px]"
                : "lg:h-[420px] xl:h-[460px]";

            const absoluteIndex = page * pageSize + idx;

            return (
              <div
                key={story.id}
                className={`min-w-0 ${nudgeClass} ${
                  isSingleCard ? "mx-auto w-[92%] max-w-sm" : ""
                }`}
              >
                <CustomerStoryMosaicTile
                  story={story}
                  index={idx}
                  className={heightClass}
                  onClick={() => onOpenStory(absoluteIndex)}
                />
              </div>
            );
          })}

          {/* Pad the last page so spacing stays consistent */}
          {stories.length < pageSize &&
            Array.from({ length: pageSize - stories.length }).map((_, i) => (
              <div key={`pad-${page}-${i}`} className="min-w-0" aria-hidden />
            ))}
        </div>
      </div>
    </div>
  );
}
