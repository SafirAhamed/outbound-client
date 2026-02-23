// Data is sourced from public/data/videos.json — managed by the Admin app.
import videosJson from "../../public/data/videos.json";

export interface VideoSource {
  src: string;
  type: string;
}

export interface VideoCardConfig {
  id: string;
  videoSrc?: string;
  videoSources?: VideoSource[];
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

export const VIDEO_CARD_FEATURE: VideoCardConfig = videosJson.videoCardFeature as VideoCardConfig;
export const VIDEO_CARD_FEATURE_TWO: VideoCardConfig = videosJson.videoCardFeatureTwo as VideoCardConfig;
