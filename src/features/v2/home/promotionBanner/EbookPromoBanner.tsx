"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Section from "@/src/components/common/layout/Section";
import { useAppData } from "@/src/context/AppDataContext";

interface EbookPromoBannerProps {
  className?: string;
}

export default function EbookPromoBanner({ className = "" }: EbookPromoBannerProps) {
  const router = useRouter();
  const {state} = useAppData();

  const EBOOK_PROMO = state.homePage?.ebookPromo;

  console.log("EBOOK_PROMO", EBOOK_PROMO);



  const c = EBOOK_PROMO?.colors || {};
  const {
    title,
    subtitle,
    description,
    buttonBg,
    buttonText,
    overlayFrom,
    overlayTo,
    border,
    accentBg,
  } = {
    title: "#111827",
    subtitle: "#0D3CA5",
    description: "#374151",
    buttonBg: "#082A7B",
    buttonText: "#FFFFFF",
    overlayFrom: "rgba(0,0,0,0.05)",
    overlayTo: "rgba(0,0,0,0.05)",
    border: "#E5E7EB",
    accentBg: "#F3F4F6",
    ...c,
  };

  return (
    <Section lessSpace className={className}>
      <div
        className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-sm border w-full h-[320px] sm:h-[380px]"
        style={{ borderColor: border, backgroundColor: accentBg }}
      >
        <Image
          src={EBOOK_PROMO?.image || "/images/ebookbannerplaceholder.jpg"}
          alt={EBOOK_PROMO?.title || ""}
          fill
          sizes="(max-width: 1024px) 100vw, 100vw"
          className="object-cover opacity-80"
          priority
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to top, ${overlayFrom}, ${overlayTo})`,
          }}
        />
        <div className="relative h-full flex flex-col justify-end p-6 sm:p-8">
          <h3 className="text-lg sm:text-2xl font-semibold" style={{ color: title }}>
            {EBOOK_PROMO?.title}
          </h3>
          <p
            className="mt-1 text-xs sm:text-sm font-medium uppercase tracking-wide"
            style={{ color: subtitle }}
          >
            {EBOOK_PROMO?.subtitle}
          </p>
            <p
            className="mt-3 text-xs sm:text-sm leading-relaxed line-clamp-5"
            style={{ color: description }}
          >
            {EBOOK_PROMO?.description}
          </p>
          <div className="mt-5">
            <button
              type="button"
              onClick={() => {
                const href = EBOOK_PROMO?.href || "";
                const isExternal = /^https?:\/\//i.test(href);
                if (isExternal) {
                  window.location.assign(href);
                  return;
                }
                router.push(href);
              }}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md font-medium text-sm shadow-sm hover:shadow-md transition active:scale-[0.97] focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer"
              style={{
                backgroundColor: buttonBg,
                color: buttonText,
                boxShadow: "0 1px 2px rgba(0,0,0,0.08)",
              }}
            >
              {EBOOK_PROMO?.cta}
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
}