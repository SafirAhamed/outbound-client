// Data is sourced from public/data/stats.json — managed by the Admin app.
import statsJson from "../../public/data/stats.json";

export interface StatItem {
  id: string;
  label: string;
  value: number;
  suffix?: string;
  icon: "Globe2" | "Users" | "Handshake" | "Heart";
}

export const COMPANY_STATS: StatItem[] = statsJson.stats as StatItem[];
export const COMPANY_STATS_SECTION = statsJson.section;

export interface EbookPromo {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  cta: string;
  href: string;
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

export const EBOOK_PROMO: EbookPromo = statsJson.ebookPromo as EbookPromo;
