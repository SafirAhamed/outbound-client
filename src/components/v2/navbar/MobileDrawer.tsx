"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { StaticImageData } from "next/image";
import type { LinkItem } from "@/types/navbar.types";

export default function MobileDrawer({
  navLinks,
  logo,
  drawerId,
}: {
  navLinks: LinkItem[];
  logo: StaticImageData;
  drawerId: string;
}) {
  const pathname = usePathname();

  const normalizeHrefPath = (href: string) => href.split("?")[0];
  const isActive = (href: string) => {
    const base = normalizeHrefPath(href);
    if (base === "/") return pathname === "/";
    return pathname === base || pathname.startsWith(`${base}/`);
  };

  const isGroupActive = (link: LinkItem) =>
    isActive(link.href) || (link.submenu?.some((s) => isActive(s.href)) ?? false);

  return (
    <div className="drawer-side z-60">
      <label htmlFor={drawerId} aria-label="close sidebar" className="drawer-overlay" />
      <ul className="menu bg-base-100 min-h-full w-56 p-4 text-base-content">
        <li className="mb-4 flex items-center justify-center">
          <div
            className="h-12 w-[180px] bg-primary"
            style={{
              WebkitMaskImage: `url(${logo.src})`,
              maskImage: `url(${logo.src})`,
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskSize: "contain",
              maskSize: "contain",
              WebkitMaskPosition: "center",
              maskPosition: "center",
            }}
            aria-label="Outbound Travelers"
          />
        </li>

        {navLinks.map((link) =>
          link.submenu ? (
            <li key={link.label}>
              <details>
                <summary
                  className={`no-underline hover:no-underline font-semibold rounded-md px-2 py-2 hover:bg-base-200 ${
                    isGroupActive(link) ? "text-secondary font-bold" : ""
                  }`}
                >
                  {link.label}
                </summary>
                <ul className="mt-1 ml-0 pl-0 list-none flex flex-col gap-1">
                  <li>
                    <Link
                      href={link.href}
                      className={`no-underline hover:no-underline font-medium rounded-md px-2 py-1 ${
                        isActive(link.href)
                          ? "text-secondary font-bold hover:bg-base-200"
                          : "hover:bg-base-200"
                      } block w-full`}
                    >
                      {`All ${link.label}`}
                    </Link>
                  </li>
                  {link.submenu.map((s) => (
                    <li key={s.href}>
                      <Link
                        href={s.href}
                        className="no-underline hover:no-underline font-medium rounded-md px-2 py-1 hover:bg-base-200 block w-full"
                      >
                        {s.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
          ) : (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`no-underline hover:no-underline font-semibold rounded-md px-2 py-1 ${
                  isActive(link.href)
                    ? "text-secondary font-bold hover:bg-base-200"
                    : "hover:bg-base-200"
                }`}
              >
                {link.label}
              </Link>
            </li>
          )
        )}
      </ul>
    </div>
  );
}
