"use client";

import { useEffect, useRef, useState } from "react";
import type { CustomerStory } from "@/types/customer.types";
import { Heart, MessageCircle, Repeat2, Send, MoreHorizontal, Volume2, VolumeX } from "lucide-react";
import Image from "next/image";

export default function CustomerStoryMosaicTile({
  story,
  index,
  onClick,
  className = "",
}: {
  story: CustomerStory;
  index: number;
  onClick: () => void;
  className?: string;
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isVideoReady, setIsVideoReady] = useState(false);

  useEffect(() => {
    if (story.storyType !== "video") return;
    const video = videoRef.current;
    if (!video) return;

    // Autoplay policies: must be muted + playsInline (especially iOS).
    video.muted = true;
    video.playsInline = true;

    const attempt = video.play();
    if (attempt && typeof attempt.catch === "function") {
      attempt.catch(() => {
        // Ignore autoplay rejections; the tile can still open fullscreen on tap.
      });
    }
  }, [story.storyType, story.storyMedia]);

  const hashStringToInt = (value: string) => {
    let hash = 0;
    for (let i = 0; i < value.length; i += 1) {
      hash = (hash << 5) - hash + value.charCodeAt(i);
      hash |= 0;
    }
    return Math.abs(hash);
  };

  const formatCount = (value: number) => {
    if (value >= 1_000_000) {
      const scaled = value / 1_000_000;
      return `${scaled >= 10 ? scaled.toFixed(0) : scaled.toFixed(1)} M`;
    }
    if (value >= 1_000) {
      const scaled = value / 1_000;
      return `${scaled >= 10 ? scaled.toFixed(0) : scaled.toFixed(1)} K`;
    }
    return `${value}`;
  };

  const seed = hashStringToInt(story.id || `${story.customerName}-${index}`);
  const likeCount = 1_200 + (seed % 98_000);
  const commentCount = 12 + (seed % 4_200);
  const repostCount = 3 + (seed % 2_100);
  const shareCount = 8 + (seed % 3_500);

  const handleOverlayButtonClick = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleOverlayButtonKeyDown = (event: React.KeyboardEvent) => {
    event.stopPropagation();
  };

  const handleOverlayButtonPointerDown = (event: React.PointerEvent) => {
    event.stopPropagation();
  };

  const handleOverlayButtonMouseDown = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  const cornerClass =
    index === 0
      ? "rounded-[28px]"
      : index === 1
      ? "rounded-[26px]"
      : index === 2
      ? "rounded-[30px]"
      : "rounded-[24px]";

  const ringClass =
    index === 0
      ? "ring-white/25"
      : index === 1
      ? "ring-white/20"
      : index === 2
      ? "ring-white/30"
      : "ring-white/20";

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onClick();
        }
      }}
      className={`group relative w-full h-[380px] sm:h-80 lg:h-[400px] xl:h-[440px] overflow-hidden ${cornerClass} ring-1 ${ringClass} bg-black/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 mb-1 transition-transform duration-300 ease-out will-change-transform hover:-translate-y-1 ${className}`}
      aria-label={`Open story by ${story.customerName}`}
    >
      {/* Media */}
      {story.storyType === "video" && story.storyMedia ? (
        <>
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover pointer-events-none transition-transform duration-700 ease-out group-hover:scale-[1.06]"
            src={story.storyMedia}
            poster={story.storyThumbnail}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            onCanPlay={() => setIsVideoReady(true)}
            aria-hidden="true"
          />
          {/* Keep thumbnail as a fallback layer for slow loads */}
          <Image
            src={story.storyThumbnail}
            alt={story.caption || "Customer story"}
            fill
            priority={index === 0}
            sizes="(min-width: 1024px) 25vw, 50vw"
            className={`object-cover pointer-events-none transition-opacity duration-300 ${
              isVideoReady ? "opacity-0" : "opacity-100"
            }`}
          />
        </>
      ) : (
        <Image
          src={story.storyThumbnail}
          alt={story.caption || "Customer story"}
          fill
          priority={index === 0}
          sizes="(min-width: 1024px) 25vw, 50vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        />
      )}

      {/* Texture overlays */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 15%, rgba(255,255,255,0.22), transparent 55%), radial-gradient(circle at 85% 70%, rgba(255,255,255,0.14), transparent 55%), repeating-linear-gradient(135deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 1px, transparent 1px, transparent 7px)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-linear-to-t from-black/70 via-black/15 to-black/10"
      />

      {/* Reels top chrome */}
      <div className="absolute inset-x-0 top-0 z-20 p-2 sm:p-2.5 lg:p-3">
        <div className="flex items-center justify-between">
          {/* <div className="inline-flex items-center gap-1.5 rounded-full bg-black/15 px-2 py-0.5 backdrop-blur-sm ring-1 ring-white/10 sm:gap-2 sm:px-2.5 sm:py-1"> */}
          <div>
            {/* <span className="text-[10px] font-semibold tracking-wide text-white/90 sm:text-[11px]">
              {story.storyType === "video" ? "REEL" : "STORY"}
            </span>
            <span className={`text-[10px] font-semibold text-white/80 sm:text-[11px] ${badgeClass}`}>
              •
            </span>
            <span className="text-[10px] font-semibold text-white/80 max-w-[150px] truncate sm:text-[11px] sm:max-w-none">
              {story.customerName}
            </span> */}
          </div>

          <div className="hidden sm:inline-flex items-center gap-2 rounded-full bg-black/15 px-2.5 py-1 backdrop-blur-sm ring-1 ring-white/10">
            <VolumeX size={13} className="text-white/90" aria-hidden="true" />
            <span className="text-[10px] font-semibold tracking-wide text-white/85">Audio</span>
          </div>
        </div>
      </div>

      {/* Top badges */}
      {/* <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
        <div
          className={`inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 backdrop-blur-sm ring-1 ring-white/15 ${badgeClass}`}
        >
          <span className="text-[11px] font-semibold tracking-wide text-white/90">
            CUSTOMER STORY
          </span>
          {story.storyType === "video" && (
            <span className="text-[11px] font-semibold text-white/90">• VIDEO</span>
          )}
        </div>
      </div> */}

      {/* Reels right action rail (non-functional) */}
      <div className="absolute right-2 bottom-2.5 z-30 flex flex-col items-center justify-end gap-2.5 sm:right-2.5 sm:bottom-3 sm:gap-3 lg:right-2 lg:bottom-5">
        <div className="flex flex-col items-center gap-2.5 sm:gap-3">
          <button
            type="button"
            onClick={handleOverlayButtonClick}
            onKeyDown={handleOverlayButtonKeyDown}
            onPointerDown={handleOverlayButtonPointerDown}
            onMouseDown={handleOverlayButtonMouseDown}
            aria-label="Like"
            className="flex flex-col items-center gap-0.5 text-white/90"
          >
            <Heart size={18} className="text-white drop-shadow-sm" aria-hidden="true" />
            <span className="text-[9px] font-semibold tracking-wide text-white/85 sm:text-[10px]">
              {formatCount(likeCount)}
            </span>
          </button>

          <button
            type="button"
            onClick={handleOverlayButtonClick}
            onKeyDown={handleOverlayButtonKeyDown}
            onPointerDown={handleOverlayButtonPointerDown}
            onMouseDown={handleOverlayButtonMouseDown}
            aria-label="Comment"
            className="flex flex-col items-center gap-0.5 text-white/90"
          >
            <MessageCircle
              size={18}
              className="text-white drop-shadow-sm"
              aria-hidden="true"
            />
            <span className="text-[9px] font-semibold tracking-wide text-white/85 sm:text-[10px]">
              {formatCount(commentCount)}
            </span>
          </button>

          <button
            type="button"
            onClick={handleOverlayButtonClick}
            onKeyDown={handleOverlayButtonKeyDown}
            onPointerDown={handleOverlayButtonPointerDown}
            onMouseDown={handleOverlayButtonMouseDown}
            aria-label="Repost"
            className="flex flex-col items-center gap-0.5 text-white/90"
          >
            <Repeat2 size={18} className="text-white drop-shadow-sm" aria-hidden="true" />
            <span className="text-[9px] font-semibold tracking-wide text-white/85 sm:text-[10px]">
              {formatCount(repostCount)}
            </span>
          </button>

          <button
            type="button"
            onClick={handleOverlayButtonClick}
            onKeyDown={handleOverlayButtonKeyDown}
            onPointerDown={handleOverlayButtonPointerDown}
            onMouseDown={handleOverlayButtonMouseDown}
            aria-label="Share"
            className="flex flex-col items-center gap-0.5 text-white/90"
          >
            <Send size={18} className="text-white drop-shadow-sm" aria-hidden="true" />
            <span className="text-[9px] font-semibold tracking-wide text-white/85 sm:text-[10px]">
              {formatCount(shareCount)}
            </span>
          </button>

          <button
            type="button"
            onClick={handleOverlayButtonClick}
            onKeyDown={handleOverlayButtonKeyDown}
            onPointerDown={handleOverlayButtonPointerDown}
            onMouseDown={handleOverlayButtonMouseDown}
            aria-label="More"
            className="flex flex-col items-center gap-0.5 text-white/90"
          >
            <MoreHorizontal
              size={18}
              className="text-white drop-shadow-sm"
              aria-hidden="true"
            />
          </button>
        </div>

        {/* Profile / disc */}
        <div className="h-6 w-6 rounded-sm p-0.5 sm:h-6 sm:w-10 lg:h-6 lg:w-6">
          <div className="relative h-full w-full rounded-sm overflow-hidden ring-2 ring-white/20 drop-shadow-sm">
            <Image
              src={story.customerImage}
              alt={story.customerName}
              fill
              sizes="(min-width: 1024px) 48px, 44px"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Reels bottom-left creator + caption */}
      <div className="absolute left-0 right-12 bottom-0 z-20 p-2 sm:right-14 sm:p-2.5 lg:right-16 lg:p-3">
        <div className="py-1">
          <div className="flex items-center gap-2">
            <div className="relative h-7 w-7 shrink-0 rounded-full overflow-hidden ring-2 ring-white/20 drop-shadow-sm sm:h-8 sm:w-8">
              <Image
                src={story.customerImage}
                alt={story.customerName}
                fill
                sizes="(min-width: 640px) 40px, 36px"
                className="object-cover"
              />
            </div>
            <div className="min-w-0 text-left">
              <p className="truncate text-[11px] font-semibold text-white drop-shadow-sm sm:text-[12px]">
                {story.customerName}
              </p>
              <p className="line-clamp-1 text-[10px] text-white/85 drop-shadow-sm sm:text-[11px]">
                {story.caption || "Tap to view"}
              </p>
              {/* <p className="mt-0.5 truncate text-[9px] text-white/70 drop-shadow-sm sm:text-[10px]">
                Original audio • Outbound Travelers
              </p> */}
            </div>
          </div>
        </div>
      </div>

      {/* Hover hint */}
      <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-black/60 to-transparent" />
      </div>
    </div>
  );
}
