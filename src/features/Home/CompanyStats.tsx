"use client";

import BackgroundSection from "@/src/components/BackgroundSection";
import Section from "@/src/components/common/layout/Section";
import { useAppData } from "@/src/context/AppDataContext";
import React, { useEffect, useRef, useState } from "react";
import { useCounter } from "@/src/hooks/useCounter";
import type { CompanyStats } from "@/types/homePage.types";

const fallbackBgImg = "/images/statsbgimg.png";

const CompanyStats = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [startCounting, setStartCounting] = useState(false);

  const { state } = useAppData();

  const data = state.homePage?.companyStats as CompanyStats | undefined;

  // Assuming cards 0 and 1 represent the left and right stats respectively
  const leftCard = data?.companyStatsCards?.[0];
  const rightCard = data?.companyStatsCards?.[1];

  const yearsTarget = Number(leftCard?.value ?? 3);
  const clientsTarget = Number(rightCard?.value ?? 10000);

  const years = useCounter(0, startCounting ? yearsTarget : 0, 1500);
  const clients = useCounter(0, startCounting ? clientsTarget : 0, 1200);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStartCounting(true);
      },
      { threshold: 0.3 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Section fullWidth>
      <BackgroundSection bgImg={data?.bgImg || fallbackBgImg}>
        <div
          ref={containerRef}
          className="relative z-20 w-full h-full flex flex-row items-center justify-between max-w-4xl mx-auto px-6 py-20"
        >
          {/* LEFT STAT */}
          <div className="flex flex-col gap-2">
            <span className="text-lg md:text-3xl font-semibold tracking-widest text-white">
              {leftCard?.label || "YEARS OF EXPERIENCE"}
            </span>
            <span className="text-3xl md:text-6xl font-bold text-yellow-400">
              {years}{leftCard?.suffix || "+"}
            </span>
          </div>

          {/* RIGHT STAT */}
          <div className="flex flex-col gap-2">
            <span className="text-lg md:text-xl font-semibold tracking-widest text-white">
              {rightCard?.label || "SATISFIED CLIENTS"}
            </span>
            <span className="text-3xl md:text-6xl font-bold text-yellow-400">
              {clients.toLocaleString()}{rightCard?.suffix || "+"}
            </span>
          </div>
        </div>
      </BackgroundSection>
    </Section>
  );
};

export default CompanyStats;
