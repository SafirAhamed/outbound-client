"use client";
import React from "react";
import Image from "next/image";
import { createPortal } from "react-dom";
import { CustomerStory } from "@/types/customer.types";

export default function CustomerStoryPortal({
  stories,
  activeIdx,
  onClose,
  onPrev,
  onNext,
}: {
  stories: CustomerStory[];
  activeIdx: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {

  const story = stories[activeIdx];

  // Loader state
  const [mediaLoaded, setMediaLoaded] = React.useState(false);

  // Reset loader when activeIdx changes
  React.useEffect(() => {
    setMediaLoaded(false);
  }, [activeIdx]);

  // Touch swipe down to close
  const touchStartY = React.useRef<number | null>(null);
  const touchDeltaY = React.useRef<number>(0);

  function handleTouchStart(e: React.TouchEvent) {
    touchStartY.current = e.touches[0].clientY;
    touchDeltaY.current = 0;
  }

  function handleTouchMove(e: React.TouchEvent) {
    if (touchStartY.current !== null) {
      touchDeltaY.current = e.touches[0].clientY - touchStartY.current;
    }
  }

  function handleTouchEnd() {
    if (touchDeltaY.current > 60) {
      onClose();
    }
    touchStartY.current = null;
    touchDeltaY.current = 0;
  }

  React.useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
      <button
        className="absolute top-4 right-4 text-white text-3xl font-bold z-50"
        onClick={onClose}
        aria-label="Close story"
      >
        &times;
      </button>
      {/* Desktop chevrons (outside) */}
      <button
        onClick={onPrev}
        disabled={activeIdx === 0}
        className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 z-40 items-center justify-center p-2 rounded-full bg-black/30 hover:bg-black/60 transition disabled:opacity-30"
        aria-label="Previous story"
        style={{ fontSize: 44, lineHeight: 1 }}
      >
        <svg width={44} height={44} viewBox="0 0 44 44" fill="none">
          <circle cx="22" cy="22" r="22" fill="black" fillOpacity="0.18" />
          <polyline
            points="27,12 17,22 27,32"
            stroke="#fff"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      </button>
      <button
        onClick={onNext}
        disabled={activeIdx === stories.length - 1}
        className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 z-40 items-center justify-center p-2 rounded-full bg-black/30 hover:bg-black/60 transition disabled:opacity-30"
        aria-label="Next story"
        style={{ fontSize: 44, lineHeight: 1 }}
      >
        <svg width={44} height={44} viewBox="0 0 44 44" fill="none">
          <circle cx="22" cy="22" r="22" fill="black" fillOpacity="0.18" />
          <polyline
            points="17,12 27,22 17,32"
            stroke="#fff"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      </button>
      <div className="relative w-full max-w-md h-[90vh] flex flex-col items-center justify-center">
        {/* Full-size media with swipe handlers */}
        <div
          className="absolute inset-0 bg-black touch-none"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Loader overlay */}
          {!mediaLoaded && (
            <div className="absolute inset-0 flex items-center justify-center z-50 bg-black/60">
              <div className="w-14 h-14 border-4 border-white border-t-transparent rounded-full animate-spin" />
            </div>
          )}
          {story.storyType === "image" ? (
            <Image
              src={story.storyMedia}
              alt={story.caption || ""}
              fill
              className={`object-contain md:object-cover transition-opacity duration-200 ${mediaLoaded ? 'opacity-100' : 'opacity-0'}`}
              sizes="100vw"
              priority
              onLoadingComplete={() => setMediaLoaded(true)}
              onLoad={() => setMediaLoaded(true)}
              onError={() => setMediaLoaded(true)}
            />
          ) : (
            <video
              src={story.storyMedia}
              controls
              autoPlay
              className={`w-full h-full object-contain md:object-cover bg-black transition-opacity duration-200 ${mediaLoaded ? 'opacity-100' : 'opacity-0'}`}
              onLoadedData={() => setMediaLoaded(true)}
              onError={() => setMediaLoaded(true)}
            />
          )}
          {/* Mobile chevrons (inside) */}
          <button
            onClick={onPrev}
            disabled={activeIdx === 0}
            className="md:hidden absolute left-2 top-1/2 -translate-y-1/2 z-40 flex items-center justify-center p-2 rounded-full bg-black/40 hover:bg-black/70 transition disabled:opacity-30"
            aria-label="Previous story"
            style={{ fontSize: 38, lineHeight: 1 }}
          >
            <svg width={38} height={38} viewBox="0 0 44 44" fill="none">
              <circle cx="22" cy="22" r="22" fill="black" fillOpacity="0.18" />
              <polyline
                points="27,12 17,22 27,32"
                stroke="#fff"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </button>
          <button
            onClick={onNext}
            disabled={activeIdx === stories.length - 1}
            className="md:hidden absolute right-2 top-1/2 -translate-y-1/2 z-40 flex items-center justify-center p-2 rounded-full bg-black/40 hover:bg-black/70 transition disabled:opacity-30"
            aria-label="Next story"
            style={{ fontSize: 38, lineHeight: 1 }}
          >
            <svg width={38} height={38} viewBox="0 0 44 44" fill="none">
              <circle cx="22" cy="22" r="22" fill="black" fillOpacity="0.18" />
              <polyline
                points="17,12 27,22 17,32"
                stroke="#fff"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </button>
        </div>
        {/* Top overlay: profile + name + caption */}
        <div className="absolute top-0 left-0 w-full flex items-center gap-3 px-4 py-3 bg-gradient-to-b from-black/80 via-black/40 to-transparent z-20">
          <div className="w-12 h-12 rounded-full border-2 border-dashed border-[#052210] bg-green-100 flex items-center justify-center shadow">
            <Image
              src={story.customerImage}
              alt={story.customerName}
              width={40}
              height={40}
              className="rounded-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-white text-sm">
              {story.customerName}
            </span>
            {story.caption && (
              <span className="text-xs text-white/90">{story.caption}</span>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}