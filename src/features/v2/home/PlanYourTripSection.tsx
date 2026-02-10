"use client";

import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Headset,
  LucideIcon,
  MapPinned,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import Section from "@/src/components/common/layout/Section";
import { useAppData } from "@/src/context/AppDataContext";
import { PlanYourTrip } from "@/types/homePage.types";

/* -------------------------------- ICON MAP -------------------------------- */

const ICON_MAP: Record<LucideIconName, LucideIcon> = {
  ArrowRight,
  CalendarDays,
  Headset,
  MapPinned,
  ShieldCheck,
  Sparkles,
};

export type LucideIconName =
  | "ArrowRight"
  | "CalendarDays"
  | "Headset"
  | "MapPinned"
  | "ShieldCheck"
  | "Sparkles";

/* ----------------------------- BACKGROUND SVG ------------------------------ */

const TRAVEL_DOODLE_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="240" height="240" viewBox="0 0 240 240">
  <g fill="none" stroke="white" stroke-opacity="0.12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M66 58c14-14 36-14 50 0s14 36 0 50-36 14-50 0-14-36 0-50z" />
    <path d="M74 66c10-10 24-10 34 0s10 24 0 34-24 10-34 0-10-24 0-34z" />

    <path d="M18 168c28-18 48-4 70-20 22-16 40-44 78-34 40 10 38 52 72 44" stroke-dasharray="2 10" />
    <path d="M166 150l18-6-10 16-3-7-5-3z" />

    <path d="M188 52l4 10 10 4-10 4-4 10-4-10-10-4 10-4 4-10z" />
    <path d="M188 44v8" />
    <path d="M188 80v8" />
    <path d="M180 64h8" />
    <path d="M196 64h8" />

    <path d="M32 100h44c4 0 6 3 6 6s-2 6-6 6H32c-4 0-6-3-6-6s2-6 6-6z" />
    <path d="M40 100v12" />
    <path d="M50 100v12" />
    <path d="M60 100v12" />

    <path d="M110 196l3 7 7 3-7 3-3 7-3-7-7-3 7-3 3-7z" />
  </g>
</svg>`;

const TRAVEL_DOODLE_BG = `url("data:image/svg+xml,${encodeURIComponent(
  TRAVEL_DOODLE_SVG
)}")`;

/* --------------------------- COMPONENT START ------------------------------- */
export default function PlanYourTripSection() {

  const { state } = useAppData();
const planYourTrip = state.homePage?.planYourTrip;
if (!planYourTrip) return null;

  type TrustPoint = {
    icon: keyof typeof ICON_MAP;
    label: string;
  };
  type Step = {
    icon: keyof typeof ICON_MAP;
    title: string;
    description: string;
  };

  return (
    <Section className="relative overflow-hidden bg-primary px-4 py-12 sm:px-6 lg:px-8">
      {/* Decorative background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `${TRAVEL_DOODLE_BG},
            radial-gradient(circle at 22% 30%, rgba(255,255,255,0.12), transparent 55%),
            radial-gradient(circle at 78% 70%, rgba(255,255,255,0.10), transparent 60%)`,
          backgroundSize: "240px 240px, cover, cover",
          backgroundRepeat: "repeat, no-repeat, no-repeat",
          backgroundPosition: "0 0, center, center",
          opacity: 0.75,
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.18) 0.7px, transparent 0.75px)",
          backgroundSize: "14px 14px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 grid gap-10 lg:grid-cols-12 lg:items-center">
        {/* Left content */}
        <div className="lg:col-span-5">
          {planYourTrip.badgeText && (
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/15">
              {planYourTrip.badgeText}
            </span>
          )}

          <h2 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">
            {planYourTrip.title}
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-white/80 sm:text-base">
            {planYourTrip.description}
          </p>

          {/* Trust points */}
          <div className="mt-6 flex flex-wrap gap-2">
            {planYourTrip.trustPoints?.map(({ icon, label }: TrustPoint) => {
              const Icon = ICON_MAP[icon];
              return (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/15"
                >
                  {Icon && <Icon size={14} />}
                  {label}
                </span>
              );
            })}
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            {planYourTrip.primaryCta && (
              <Link
                href={planYourTrip.primaryCta.href}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#052210] ring-1 ring-white/20 transition-transform hover:scale-[1.03]"
              >
                {planYourTrip.primaryCta.label}
                {planYourTrip.primaryCta.icon && ICON_MAP[planYourTrip.primaryCta.icon] && (
                  (() => {
                    const Icon = ICON_MAP[planYourTrip.primaryCta.icon];
                    return Icon ? <Icon size={16} /> : null;
                  })()
                )}
              </Link>
            )}
            {planYourTrip.secondaryCta && (
              <Link
                href={planYourTrip.secondaryCta.href}
                className="inline-flex items-center justify-center rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-white ring-1 ring-white/20 transition-transform hover:scale-[1.03]"
              >
                {planYourTrip.secondaryCta.label}
              </Link>
            )}
          </div>
        </div>

        {/* Steps */}
        <div className="lg:col-span-7">
          <div className="grid gap-4 sm:grid-cols-3">
            {planYourTrip.steps?.map((step: Step, i: number) => {
              const Icon = ICON_MAP[step.icon];
              return (
                <div
                  key={step.title}
                  className="rounded-2xl bg-white p-5 ring-1 ring-black/10 transition-transform hover:scale-[1.02]"
                >
                  <div className="flex items-center gap-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      {Icon && <Icon size={18} />}
                    </div>
                    <p className="text-xs font-semibold text-black/60">
                      Step {i + 1}
                    </p>
                  </div>

                  <h3 className="mt-3 text-sm font-bold text-[#052210]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-black/65">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}
