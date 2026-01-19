export interface PackagesCardItem {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  rating: number;
  days: number;
  nights: number;
  price: string;
  link: string;
  portrait?: boolean;
  landscape?: boolean;
  detailed?: boolean;
  original_price?: string;
  discounted_price?: string;
  advance_style?: boolean;
  style_variant?: "default" | "ticket" | "glass" | "classic";
}

export interface Package {
  image: string;
  title: string;
  description: string;
  rating: number;
  days: number;
  nights: number;
  price: string;
  link: string;
  originalPrice?: string;
  discountedPrice?: string;
}