export type DestinationCategory = "INTERNATIONAL" | "DOMESTIC";

export interface DestinationCardItem {
  _id: string;
  title: string;
  subtitle?: string;
  imageSrc: string;
  destination?: string;
  showOverlay?: boolean;
  priceFrom?: string | number;
  sizeMobile?: number;
  sizeDesktop?: number;
}

export interface DestinationGrid {
  _id: string;
  title: string;
  subtitle?: string;
  imageSrc: string;
  destination?: string;
  showOverlay?: boolean;
  priceFrom?: string | number;
  sizeMobile?:number;
  sizeDesktop?: number;
}


export interface Destination {
  _id: string;
  title: string;
  subtitle?: string;
  imageSrc: string;
  destination?: string;
  showOverlay?: boolean;
  priceFrom?: string | number;
  sizeMobile?:number;
  sizeDesktop?: number;
}

export interface DestinationCardProps {
  item: DestinationCardItem;
  mobileHeight: number;
  desktopHeight: number;
  className?: string;
}