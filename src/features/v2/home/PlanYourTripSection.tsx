import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Headset,
  MapPinned,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Section from "@/src/components/common/layout/Section";

const TRAVEL_DOODLE_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="240" height="240" viewBox="0 0 240 240">
  <g fill="none" stroke="white" stroke-opacity="0.12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <!-- passport stamp rings -->
    <path d="M66 58c14-14 36-14 50 0s14 36 0 50-36 14-50 0-14-36 0-50z" />
    <path d="M74 66c10-10 24-10 34 0s10 24 0 34-24 10-34 0-10-24 0-34z" />

    <!-- small airplane + route -->
    <path d="M18 168c28-18 48-4 70-20 22-16 40-44 78-34 40 10 38 52 72 44" stroke-dasharray="2 10" />
    <path d="M166 150l18-6-10 16-3-7-5-3z" />

    <!-- compass star -->
    <path d="M188 52l4 10 10 4-10 4-4 10-4-10-10-4 10-4 4-10z" />
    <path d="M188 44v8" />
    <path d="M188 80v8" />
    <path d="M180 64h8" />
    <path d="M196 64h8" />

    <!-- ticket stub -->
    <path d="M32 100h44c4 0 6 3 6 6s-2 6-6 6H32c-4 0-6-3-6-6s2-6 6-6z" />
    <path d="M40 100v12" />
    <path d="M50 100v12" />
    <path d="M60 100v12" />

    <!-- little sparkle -->
    <path d="M110 196l3 7 7 3-7 3-3 7-3-7-7-3 7-3 3-7z" />
  </g>
</svg>`;

const TRAVEL_DOODLE_BG = `url("data:image/svg+xml,${encodeURIComponent(TRAVEL_DOODLE_SVG)}")`;

const TRUST_POINTS = [
  { icon: ShieldCheck, label: "Transparent guidance" },
  { icon: Sparkles, label: "Curated experiences" },
  { icon: CalendarDays, label: "Flexible planning" },
  { icon: Headset, label: "Support when you need" },
];

const STEPS = [
  {
    icon: MapPinned,
    title: "Tell us your vibe",
    description:
      "Destination, dates, budget, and the kind of trip you want — we’ll tailor it.",
  },
  {
    icon: Sparkles,
    title: "We curate your plan",
    description:
      "We shortlist stays, experiences, and routes that match your style and pace.",
  },
  {
    icon: Headset,
    title: "Travel with confidence",
    description:
      "Get help before you fly and while you’re away — so the trip stays smooth.",
  },
];

export default function PlanYourTripSection() {
  return (
    <Section className="relative overflow-hidden bg-primary px-4 sm:px-6 lg:px-8 py-12">
    {/* <Section className="relative max-w-screen-2xl mx-auto mt-6  overflow-hidden"> */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `${TRAVEL_DOODLE_BG}, radial-gradient(circle at 22% 30%, rgba(255,255,255,0.12), transparent 55%), radial-gradient(circle at 78% 70%, rgba(255,255,255,0.10), transparent 60%)`,
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
          backgroundPosition: "0 0",
        }}
      />

      <div className="relative z-10 grid gap-10 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-5">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/15">
            Plan better, travel happier
          </div>

          <h2 className="mt-4 text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Your trip — planned like a concierge
          </h2>

          <p className="mt-3 text-sm sm:text-base text-white/80 leading-relaxed">
            People don’t just want destinations — they want clarity. This is how we
            turn “I want to travel” into an itinerary that feels effortless.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {TRUST_POINTS.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/15"
              >
                <Icon size={14} aria-hidden="true" />
                {label}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/packages"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#052210] ring-1 ring-white/20 transition-transform duration-200 ease-out will-change-transform hover:scale-[1.03] active:scale-[0.99]"
            >
              Explore packages
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-white ring-1 ring-white/20 transition-transform duration-200 ease-out will-change-transform hover:scale-[1.03] active:scale-[0.99]"
            >
              Talk to us
            </Link>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="grid gap-4 sm:grid-cols-3">
            {STEPS.map(({ icon: Icon, title, description }, i) => (
              <div
                key={title}
                className="rounded-2xl bg-white p-5 ring-1 ring-black/10 transition-transform duration-200 ease-out will-change-transform hover:scale-[1.02]"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon size={18} aria-hidden="true" />
                    </div>
                    <p className="text-xs font-semibold text-black/60">Step {i + 1}</p>
                  </div>
                </div>

                <h3 className="mt-3 text-sm font-bold text-[#052210]">{title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-black/65">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
