export interface VideoSource {
  src: string;
  type: string;
}
export interface VideoCardConfig {
  id: string;
  videoSrc?: string;        // legacy single source
  videoSources?: VideoSource[]; // preferred multiple sources
  poster?: string;
  heading?: string;
  subheading?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  colors?: {
    heading?: string;
    subheading?: string;
    description?: string;
    ctaBg?: string;
    ctaText?: string;
    overlayFrom?: string;
    overlayTo?: string;
  };
  size?: {
    height?: string;
    minHeight?: string;
  };
  align?: "left" | "center" | "right";
}

export const VIDEO_CARD_FEATURE: VideoCardConfig = {
  id: "discover-more",
  poster: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop",
  videoSources: [
    { src: "/videos/Himalaya.webm", type: "video/webm" },
    { src: "/videos/Himalaya.mp4", type: "video/mp4" },
  ],
  heading: "Elevate Every Journey",
  subheading: "Deep Insights. Smarter Planning.",
  description:
    "Unlock destination intelligence, seasonal timing guides, local immersion strategies, and partner perks curated for modern explorers.",
  ctaText: "Learn More",
  ctaHref: "/discover",
  colors: {
    heading: "#FFFFFF",
    subheading: "#F3F4F6",
    description: "#E5E7EB",
    ctaBg: "#06a15c",
    ctaText: "#FFFFFF",
    overlayFrom: "rgba(0,0,0,0.65)",
    overlayTo: "rgba(0,0,0,0.25)",
  },
  size: {
    height: "420px",
    minHeight: "360px",
  },
  align: "left",
};

export const VIDEO_CARD_FEATURE_TWO: VideoCardConfig = {
  id: "discover-more",
  poster: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop",
  videoSources: [
    { src: "/videos/emptyBanneVideo.webm", type: "video/webm" },
    { src: "/videos/emptyBanneVideo.mp4", type: "video/mp4" },
  ],
  
  size: {
    height: "360px",
    minHeight: "360px",
  },
};