"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

import { useAppData } from "@/src/context/AppDataContext";
import type { HeroBanner as HeroBannerType } from "@/types/homePage.types";
import SlideUpReveal from "@/src/components/common/animation/SlideUpReveal";

interface HeroBannerProps {
  data?: HeroBannerType;
  className?: string;
}

const SAMPLE_BANNER: HeroBannerType = {
  id: "",
  contentTitle: "Find Your Next Adventure",
  contentText:
    "Explore curated destinations, tailored packages, and unforgettable experiences.",
  design: {
    videoSources: [
      //   {
      //     src: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
      //     type: "video/mp4",
      //   },
      //   {
      //     src: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.webm",
      //     type: "video/webm",
      //   },
    ],
    fallbackImage:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1600&auto=format&fit=crop",
    overlay: "medium",
    titleClasses: "text-3xl md:text-5xl lg:text-5xl font-extrabold text-white",
    subTitleClasses: "text-base md:text-lg lg:text-lg font-medium text-white",
    // fontFamily: "Inter, system-ui, sans-serif",
    fontFamily: "",
    fontUrl: "",
    heightClass: "h-[60vh] md:h-[65vh] lg:h-[calc(100vh-72px)]",
    title: "Find Your Next ",
    rotatedText: [
      "Adventure",
      "Explore",
      "Discover",
      "Travel",
      "Wander",
      "Journey",
    ],
    subTitle:
      "Explore curated destinations, tailored packages, and unforgettable experiences.",
    boxBgClass: "bg-black/0",
    padding: "medium",
    positionClasses:
      "justify-start items-center text-left md:justify-center md:items-center md:text-center lg:justify-start lg:items-center lg:text-left",
    titleColorHex: "",
    subTitleColorHex: "",
  },
};

type PaddingToken = "none" | "small" | "medium" | "large";
type OverlayToken = "none" | "light" | "medium" | "strong";

const BOX_PADDING_CLASSES: Record<PaddingToken, string> = {
  none: "p-0",
  small: "p-8 md:p-16",
  medium: "p-10 md:p-20",
  large: "p-12 md:p-24",
};

const OVERLAY_CLASSES: Record<OverlayToken, string> = {
  none: "",
  light: "bg-black/20",
  medium: "bg-black/40",
  strong: "bg-black/80",
};

export default function HeroBanner({ data, className = "" }: HeroBannerProps) {
  const { state } = useAppData();

  const hero = SAMPLE_BANNER as HeroBannerType;
  const d = hero.design;

  const paddingToken: PaddingToken | undefined = d.padding ?? d.boxPaddingSize;
  const overlayToken: OverlayToken | undefined = d.overlay ?? d.overlayStrength;

  const boxPaddingClasses =
    (paddingToken && BOX_PADDING_CLASSES[paddingToken]) ||
    d.boxPaddingClass ||
    "";

  const positionClasses =
    d.positionClasses ??
    "flex flex-col justify-center items-center text-center";
  const hasDisplayMode = /(^|\s)(flex|inline-flex|grid|inline-grid)\b/.test(
    positionClasses,
  );

  const overlayClasses =
    (overlayToken && OVERLAY_CLASSES[overlayToken]) || d.overlayClass || "";

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [videoReady, setVideoReady] = useState(false);
  const [videoError, setVideoError] = useState(false);

  const title = d.title || hero.contentTitle;
  const subTitle = d.subTitle || hero.contentText;

  const fontStyle = useMemo(() => {
    if (!d.fontFamily) return undefined;
    return { fontFamily: d.fontFamily } as const;
  }, [d.fontFamily]);

  // Load external font stylesheet if provided (admin-driven)
  useEffect(() => {
    if (!d.fontUrl) return;

    const id = `hero-font-${encodeURIComponent(d.fontUrl)}`;
    if (document.getElementById(id)) return;

    const link = document.createElement("link");
    link.id = id;
    link.rel = "stylesheet";
    link.href = d.fontUrl;
    document.head.appendChild(link);
  }, [d.fontUrl]);

  // Try to autoplay (some browsers block; muting helps)
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const attempt = v.play();
    if (attempt && "catch" in attempt) {
      (attempt as Promise<void>).catch(() => {
        v.muted = true;
        v.play().catch(() => {});
      });
    }
  }, []);

  return (
    <section
      className={`relative overflow-hidden w-full ${
        d.heightClass ?? ""
      } ${className}`}
      style={fontStyle}
    >
      {/* Background media */}
      <div className="absolute inset-0">
        {/* Fallback image until video is ready (or if video errors) */}
        {d.fallbackImage && (!videoReady || videoError) && (
          <Image
            src={d.fallbackImage}
            alt=""
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
        )}

        {!videoError && d.videoSources?.length > 0 && (
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster={d.fallbackImage}
            onLoadedData={() => setVideoReady(true)}
            onPlaying={() => setVideoReady(true)}
            onError={() => setVideoError(true)}
          >
            {d.videoSources.map((s) => (
              <source key={s.src} src={s.src} type={s.type} />
            ))}
          </video>
        )}

        {overlayClasses && (
          <div className={`absolute inset-0 ${overlayClasses}`} />
        )}
      </div>

      {/* Content */}

      <div className="relative z-10 h-full w-full">
        <div
          className={`h-full w-full ${positionClasses}`}
          style={hasDisplayMode ? undefined : ({ display: "flex" } as const)}
        >
          <div className={`${d.boxBgClass ?? ""} ${boxPaddingClasses}`}>
            <SlideUpReveal delayMs={200}>
              {title && (
                <h1
                  className={d.titleClasses}
                  style={
                    d.titleColorHex ? { color: d.titleColorHex } : undefined
                  }
                >
                  {title}

                  <span className="text-rotate font-inherit text-inherit leading-inherit">
                    <span>
                      {d.rotatedText?.map((word, index) => (
                        <span key={word}>{word}</span>
                      ))}
                    </span>
                    {/* {d.rotatedText?.map((word, index) => (
            <span
              key={index}
              className="block font-inherit text-inherit leading-inherit"
              // style={{ animationDelay: `${index * 3}s` }}
            >
              {word}
            </span>
          ))} */}
                  </span>
                </h1>
              )}
            </SlideUpReveal>
            <SlideUpReveal delayMs={400}>
              {subTitle && (
                <div
                  className={d.subTitleClasses}
                  style={
                    d.subTitleColorHex
                      ? { color: d.subTitleColorHex }
                      : undefined
                  }
                >
                  {subTitle}
                </div>
              )}
            </SlideUpReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
