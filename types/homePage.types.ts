import { ContentPosition } from "@/src/features/v2/home/exclusiveOffers/ExclusiveOfferSlide";
import { SlideItem } from "./carousel.types";
import { LucideIcon } from "lucide-react";
import { LucideIconName } from "@/src/features/v2/home/PlanYourTripSection";
import { MarqueeItem } from "./marquee";
import { DestinationCardItem } from "./destinations.types";
import { Package } from "./packages.types";
import { EbookPromo } from "@/src/data/companyStats";
import { CustomerStory } from "./customer.types";

export interface VideoSource {
  _id?: string;
  src: string;
  type: string;
}

export interface HeroBanner {
  id: string;
  contentTitle: string;
  contentText: string;
  design: {
    videoSources: VideoSource[];
    fallbackImage: string;
    // Admin/API keys (preferred)
    padding?: "none" | "small" | "medium" | "large";
    overlay?: "none" | "light" | "medium" | "strong";

    // Preferred: admin-driven token (mapped to Tailwind classes in UI)
    overlayStrength?: "none" | "light" | "medium" | "strong";
    // Backward-compatible escape hatch
    overlayClass?: string;
    titleClasses: string;
    subTitleClasses: string;
    fontFamily: string;
    heightClass: string;
    title: string;
    subTitle: string;
    rotatedText?: string[]

    // Optional: admin-driven layout controls
    fontUrl?: string;
    boxBgClass?: string;
    boxPaddingSize?: "none" | "small" | "medium" | "large";
    boxPaddingClass?: string;
    positionClasses?: string;
    titleColorHex?: string;
    subTitleColorHex?: string;
  };
}

export interface TrendingDestinationItem {
  id: string;
  name: string;
  tagLine: string;
  locale: string;
  image: string;
  meta?: string;
}

export interface DestinationCard {
  id: string;
  name: string;
  tagLine?: string;
  locale?: string;
  meta?: string;
  image: string;    // preferred
  title?: string;
  destination?: string;
  img?: string;     // legacy
  price?: string;
  size?: number;
}

export interface CollageItem {
  title: string;
  price: string; // e.g., "₹2000/-"
  img: string;
  size: number;
  destination?: string;
}

export interface CollageGridProps {
  items: CollageItem[];
}



export interface TopCelebrities {
  left: { videoUrl: string; title: string };
  right: { videoUrl: string };
}

export interface VideoCardData {
  id: string;
  poster: string;
  videoSrc?: string;
  videoSources: VideoSource[];
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
  align?: string;
}

export interface BookYourTicketsSection {
  title: string;
  description: string;
  image: string;
  tabs: string[];
  ctaButtonText: string;
}

export interface ClientImageCardProps {
  id: string;
  src: string;
  alt?: string;
}

export interface CompanyStatsSection {
  title: string;
  description: string;
}

export interface CompanyStatsCard {
  id: string;
  label: string;
  value: number;
  suffix: string;
  icon: "Globe2" | "Users" | "Handshake" | "Heart";
}

export interface CompanyStats {
  companyStatsSection: CompanyStatsSection;
  companyStatsCards: CompanyStatsCard[];
  bgImg?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  rating: 5;
  date: string;
  title: string;
  text: string;
}

export interface CommunityBanner {
  title: string;
  subTitle: string;
  ctaButtonText: string;
  bgImage: string;
  whatsappLink: string;
}

export type ExclusiveSlide = SlideItem & {
  contentPosition?: ContentPosition;
  overlay?: "none" | "20" | "30" | "40" | "60" | "light" | "medium" | "dark";
};

export interface PlanYourTripTrustPoint {
  icon: LucideIconName;
  label: string;
}

export interface PlanYourTripCta {
  label: string;
  href: string;
  icon?: LucideIconName;
}

export interface PlanYourTripStep {
  icon: LucideIconName;
  title: string;
  description: string;
}

export interface PlanYourTrip {
  badgeText: string;
  title: string;
  description: string;
  trustPoints: PlanYourTripTrustPoint[];
  primaryCta: PlanYourTripCta;
  secondaryCta: PlanYourTripCta;
  steps: PlanYourTripStep[];
}

export type customerGallery = {
  ctaText: {
    title: string;
    subtitle: string;
  };
  galleryItems: MarqueeItem[]
}


export interface HomePage {
  heroBanner: HeroBanner;
  trendingDestinations: DestinationCard[];
  companyStats: CompanyStats;
  topCelebrities: TopCelebrities;
  videoCardData: VideoCardData;
  exclusiveOffers: ExclusiveSlide[];
  quotes: string[];
  planYourTrip: PlanYourTrip;
  customerGallery: customerGallery;
  internationalDestinations: DestinationCardItem[];
  trendingPackages: Package[];
  domesticDestinations: DestinationCardItem[];
  ebookPromo: EbookPromo;
  bookYourTicketsSection: BookYourTicketsSection;
  faqs: { question: string; answer: string }[];
  customerStories: CustomerStory[];
  testimonials: Testimonial[];
  communityBanner: CommunityBanner;
}

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


// const { setHomePage } = useAppData();

// useEffect(() => {
//   async function loadData() {
//     const res = await fetch("/api/homepage");
//     const data: HomePage = await res.json();
//     setHomePage(data);
//   }
//   loadData();
// }, []);

// const { state } = useAppData();

// console.log(state.homePage?.heroBanner.title);
