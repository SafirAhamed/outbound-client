export type DestinationCategory = "INTERNATIONAL" | "DOMESTIC";

export type DestinationItem = {
  id: string;
  place: string;
  type: DestinationCategory;
  images: string[];
  country: string;
  amount: number;
  highlights: string[];
  isActive: boolean;
};

export interface DestinationGrid {
  id: string;
  title: string;
  subtitle?: string;
  imageSrc: string;
  href?: string;
  showOverlay?: boolean;
  priceFrom?: string | number;
  sizeMobile?:number;
  sizeDesktop?: number;
}


export interface Destination {
  id: string;
  title: string;
  subtitle?: string;
  imageSrc: string;
  href?: string;
  showOverlay?: boolean;
  priceFrom?: string | number;
  sizeMobile?:number;
  sizeDesktop?: number;
}

export interface DestinationCardProps {
  item: Destination;
  mobileHeight: number;
  desktopHeight: number;
  className?: string;
}
