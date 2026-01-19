"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Globe2, Users, Handshake, Heart } from "lucide-react";
import { COMPANY_STATS, COMPANY_STATS_SECTION, StatItem } from "@/src/data/companyStats";

interface CompanyStatsProps {
  className?: string;
  titleClassName?: string;
  hideTitle?: boolean;
  titleText?: string;
  descriptionText?: string; // new
}

const iconMap = { Globe2, Users, Handshake, Heart };
type IconName = keyof typeof iconMap;

function useCountUp(target: number, durationMs = 1400) {
  const [value, setValue] = useState(0);
  const startedRef = useRef(false);
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !startedRef.current) {
          startedRef.current = true;
          const start = performance.now();
          const step = (ts: number) => {
            const p = Math.min(1, (ts - start) / durationMs);
            setValue(Math.round(target * p));
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.25 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [target, durationMs]);
  return { value, ref };
}

function StatCard({ stat }: { stat: StatItem }) {
  const { value, ref } = useCountUp(stat.value);
  const Icon = iconMap[stat.icon as IconName];
  const display =
    stat.value >= 1000
      ? Intl.NumberFormat("en", { notation: "compact" }).format(value)
      : value.toString();
  return (
    <div
      ref={ref}
      className="rounded-lg border border-neutral-200  p-4 sm:p-5 flex items-center gap-4 hover:shadow-md transition"
    >
      <div className="flex items-center justify-center w-11 h-11 rounded-md ">
        <Icon className="h-6 w-6 text-[#052210]" />
      </div>
      <div className="flex flex-col">
        <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#052210]">
          {display}
          {stat.suffix}
        </span>
        <span className="text-xs sm:text-sm uppercase font-medium text-neutral-500">
          {stat.label}
        </span>
      </div>
    </div>
  );
}

export default function CompanyStats({
  className = "",
  titleClassName = "",
  hideTitle = false,
  titleText,
  descriptionText,
}: CompanyStatsProps) {
  const resolvedTitle = titleText ?? COMPANY_STATS_SECTION.defaultTitle;
  const resolvedDescription =
    descriptionText ?? COMPANY_STATS_SECTION.defaultDescription;

  return (
    <section
      className={`relative max-w-screen-2xl mx-auto py-14 lg:py-20 bg-[#FBF9F6] overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <Image
          src="/images/dottedworldmap.png"
          alt=""
          width={600}
          height={400}
          priority
          className="opacity-50 max-w-full h-auto"
        />
      </div>

      <div className="relative z-10 px-6">
        {!hideTitle && (
          <>
            <h2
              className={`text-xl sm:text-2xl font-semibold text-center text-[#052210] ${titleClassName}`}
            >
              {resolvedTitle}
            </h2>
            <p className="mt-3 text-center max-w-2xl mx-auto text-sm sm:text-base text-neutral-600 leading-relaxed">
              {resolvedDescription}
            </p>
          </>
        )}
        <div className="flex justify-center">
          <div className="w-full lg:w-3/4 mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {COMPANY_STATS.map((s) => (
              <StatCard key={s.id} stat={s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
