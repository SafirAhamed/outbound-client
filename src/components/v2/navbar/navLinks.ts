import type { LinkItem } from "@/types/navbar.types";

export const navLinks: LinkItem[] = [
  {
    label: "Packages",
    href: "/packages",
    submenu: [
      { label: "International Packages", href: "/packages/international" },
      { label: "Domestic Packages", href: "/packages/domestic" },
      { label: "Honeymoon Packages", href: "/packages/honeymoon" },
    ],
  },
  {
    label: "Destinations",
    href: "/destinations",
    submenu: [
      { label: "International", href: "/destinations?type=international" },
      { label: "Domestic", href: "/destinations?type=domestic" },
    ],
  },
  { label: "About us", href: "/about" },
  { label: "Contact", href: "/contact" },
];
