"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import PackagesDropdown from "./PackagesDropdown";
import type { LinkItem } from "@/types/navbar.types";

export default function DesktopNav({
  navLinks,
  isWhiteBg,
}: {
  navLinks: LinkItem[];
  isWhiteBg: boolean;
}) {
  const pathname = usePathname();

  const isActive = (href: string) => {
    const base = href.split("?")[0];
    if (base === "/") return pathname === "/";
    return pathname === base || pathname.startsWith(`${base}/`);
  };

  return (
    <ul className="hidden lg:flex menu menu-horizontal px-1 gap-4">
      {navLinks.map((link) =>
        link.submenu ? (
          <PackagesDropdown key={link.label} link={link} isWhiteBg={isWhiteBg} />
        ) : (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`no-underline hover:no-underline font-semibold rounded-md px-2 py-1 ${
                isActive(link.href)
                  ? `text-secondary font-bold ${isWhiteBg ? "hover:bg-base-200" : "hover:bg-white/10"}`
                  : isWhiteBg
                    ? "hover:bg-base-200"
                    : "hover:bg-white/10"
              }`}
            >
              {link.label}
            </Link>
          </li>
        )
      )}
    </ul>
  );
}
