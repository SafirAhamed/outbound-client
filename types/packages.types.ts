export interface PackagesCardItem {
  thumbnail: string;
  title: string;
  subtitle: string;
  rating: number;
  days: number;
  nights: number;
  bestFor?: "Couple" | "Friends" | "Solo" | "Family" | "Group";
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
  _id: string;
  thumbnail: string;
  title: string;
  description: string;
  rating: number;
  days: number;
  nights: number;
  bestFor?: "Couple" | "Friends" | "Solo" | "Family" | "Group";
  price: string;
  link: string;
  original_price?: string;
  discounted_price?: string;
}