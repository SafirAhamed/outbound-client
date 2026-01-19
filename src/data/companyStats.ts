export interface StatItem {
  id: string;
  label: string;
  value: number;
  suffix?: string;
  icon: "Globe2" | "Users" | "Handshake" | "Heart";
}

export const COMPANY_STATS: StatItem[] = [
  { id: "destinations", label: "Destinations", value: 120, suffix: "+", icon: "Globe2" },
  { id: "explorers", label: "Happy Explorers", value: 20000, suffix: "+", icon: "Users" },
  { id: "partners", label: "Tour Partners", value: 16, suffix: "+", icon: "Handshake" },
  { id: "followers", label: "Followers", value: 300000, suffix: "+", icon: "Heart" },
];

export const COMPANY_STATS_SECTION = {
  defaultTitle: "Why choose outbound travelers?",
  defaultDescription:
    "Why We're Your Perfect Travel Partner. Lorem ipsum dolor sit amet consectetur. Vitae blandit eu etiam urna odio risus maecenas mauris.",
};

export interface EbookPromo {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  cta: string;
  href: string;
  // Optional theming
  colors?: {
    title?: string;
    subtitle?: string;
    description?: string;
    buttonBg?: string;
    buttonText?: string;
    overlayFrom?: string;
    overlayTo?: string;
    border?: string;
    accentBg?: string;
  };
}

export const EBOOK_PROMO: EbookPromo = {
  id: "launch-ebook",
  title: "Ultimate Travel Playbook 2025",
  subtitle: "Exclusive Early Access",
  description:
    "Strategic destination insights, seasonal timing frameworks, experience blueprints, and budgeting matrices distilled for modern explorers.",
  image: "https://img.freepik.com/free-photo/international-day-education-cartoon-style-with-open-book-fantasy-world_23-2151007433.jpg?semt=ais_hybrid&w=740&q=80",
  cta: "Coming Soon",
  href: "#",
  colors: {
    title: "#FFFFFF",          // neutral-900
    subtitle: "#FFFFFF",       // brand accent
    description: "#FFFFFF",    // neutral-700
    buttonBg: "#052210",
    buttonText: "#FFFFFF",
    overlayFrom: "rgba(0,0,0,0.05)",
    overlayTo: "rgba(0,0,0,0.05)",
    border: "#E5E7EB",         // neutral-200
    accentBg: "#F3F4F6",       // neutral-100
  },
};