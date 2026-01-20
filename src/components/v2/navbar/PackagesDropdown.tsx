"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { LinkItem } from "@/types/navbar.types";

export default function PackagesDropdown({
  link,
  isWhiteBg,
}: {
  link: LinkItem;
  isWhiteBg: boolean;
}) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLLIElement | null>(null);
  const pathname = usePathname();

  const normalizeHrefPath = (href: string) => href.split("?")[0];
  const isRouteActive = (href: string) => {
    const base = normalizeHrefPath(href);
    if (base === "/") return pathname === "/";
    return pathname === base || pathname.startsWith(`${base}/`);
  };

  const active = isRouteActive(link.href) || (link.submenu?.some((s) => isRouteActive(s.href)) ?? false);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <li ref={wrapperRef} className="relative">
      <button
        type="button"
        className={`no-underline hover:no-underline font-semibold rounded-md px-2 py-1 ${
          active
            ? `text-secondary font-bold ${isWhiteBg ? "hover:bg-base-200" : "hover:bg-white/10"}`
            : isWhiteBg
              ? "hover:bg-base-200"
              : "hover:bg-white/10"
        }`}
        onClick={() => setOpen((prev) => !prev)}
      >
        {link.label}
      </button>

      <ul
        className={`absolute left-0 top-full mt-2 w-56 rounded-box bg-base-100 p-2 shadow-md border border-base-300 text-primary transition-all duration-150 z-50
          ${open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-1 pointer-events-none"}`}
      >
        <li>
          <Link
            href={link.href}
            onClick={() => setOpen(false)}
            className="font-medium rounded-md px-2 py-1 hover:bg-base-200"
          >
            All {link.label}
          </Link>
        </li>
        {link.submenu?.map((s) => (
          <li key={s.href}>
            <Link
              href={s.href}
              onClick={() => setOpen(false)}
              className="font-medium rounded-md px-2 py-1 hover:bg-base-200"
            >
              {s.label}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}
