"use client";

import type { CustomerStory } from "@/types/customer.types";
import Image from "next/image";
import GlassSurface from "@/src/components/common/GlassSurface";

export default function CustomerStoriesMosaicHeader({
  heading,
  subheading,
  avatarStories,
  totalStories,
  onOpenStories,
}: {
  heading: string;
  subheading: string;
  avatarStories: CustomerStory[];
  totalStories: number;
  onOpenStories: () => void;
}) {
  return (
    <div className="flex flex-col items-center text-center gap-2">
      {/* <p className="text-xs sm:text-sm font-semibold tracking-[0.28em] text-white/80">
        STORIES
      </p> */}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-[0.20em] text-white">
        {heading?.toUpperCase()}
      </h2>
      <div className="h-1 w-34 bg-white mx-auto mb-2 rounded"></div>
      <p className="text-sm sm:text-base text-white/80 max-w-2xl">{subheading}</p>

      <div className="mt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
        <div className="flex items-center">
          <div className="flex -space-x-2">
            {avatarStories.map((story, idx) => (
              <span
                key={story.id}
                className="relative h-9 w-9 rounded-full overflow-hidden ring-2 ring-white/20"
                style={{ zIndex: 10 - idx }}
                aria-hidden
              >
                <Image
                  src={story.customerImage}
                  alt=""
                  fill
                  sizes="36px"
                  className="object-cover"
                />
              </span>
            ))}
          </div>
          <span className="ml-3 text-xs sm:text-sm text-white/75">
            {totalStories}+ stories from our community
          </span>
        </div>

        <GlassSurface
          as="button"
          type="button"
          onClick={onOpenStories}
          className="inline-flex items-center justify-center rounded-full px-4 py-2 text-xs sm:text-sm font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
        >
          Open stories
        </GlassSurface>
      </div>
    </div>
  );
}
