// Data is sourced from public/data/gallery.json — managed by the Admin app.
import galleryJson from "../../public/data/gallery.json";
import { MarqueeItem } from "@/types/marquee";

export const CUSTOMER_GALLERY_ROW1: MarqueeItem[] = galleryJson.row1 as MarqueeItem[];
export const CUSTOMER_GALLERY_ROW2: MarqueeItem[] = galleryJson.row2 as MarqueeItem[];
