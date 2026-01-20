"use client";
import { CustomerStory } from "@/types/customer.types";
import Image from "next/image";;

export default function CustomerStoryCard({
  story,
  onClick,
}: {
  story: CustomerStory;
  onClick: () => void;
}) {
  return (
    <button
      className="group relative flex flex-col items-center min-w-[120px] max-w-[140px] focus:outline-none"
      onClick={onClick}
      aria-label={`View story by ${story.customerName}`}
    >
      {/* Rectangle thumbnail */}
      <div className="w-[110px] h-[170px] rounded-xl overflow-hidden shadow-lg relative flex flex-col items-center">
        <Image
          src={story.storyThumbnail}
          alt={story.caption || "Customer story"}
          fill
          className="object-cover"
          sizes="120px"
          loading="lazy"
        />
        {/* Play icon for video */}
        {story.storyType === "video" && (
          <span className="absolute inset-0 flex items-center justify-center">
            <svg width={40} height={40} viewBox="0 0 40 40">
              <circle cx="20" cy="20" r="18" fill="#0008" />
              <polygon points="16,13 29,20 16,27" fill="#fff" />
            </svg>
          </span>
        )}
        {/* Circle with dashed border and customer image INSIDE the rectangle, bottom center */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-2 z-10">
          <div className="w-12 h-12 rounded-full border-2 border-dashed border-[#052210] bg-green-100 flex items-center justify-center shadow-md">
            <Image
              src={story.customerImage}
              alt={story.customerName}
              width={40}
              height={40}
              className="rounded-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </button>
  );
}