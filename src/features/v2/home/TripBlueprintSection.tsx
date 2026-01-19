import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  Headset,
  MapPinned,
  ShieldCheck,
  Ticket,
} from "lucide-react";
import Section from "@/src/components/common/layout/Section";

const BLUEPRINT_DOODLE_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="240" height="240" viewBox="0 0 240 240">
  <g fill="none" stroke="white" stroke-opacity="0.12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <!-- dashed route -->
    <path d="M18 168c28-18 48-4 70-20 22-16 40-44 78-34 40 10 38 52 72 44" stroke-dasharray="2 10" />
    <circle cx="88" cy="152" r="4" />
    <circle cx="168" cy="132" r="4" />

    <!-- stamp rings -->
    <path d="M150 36c14-14 36-14 50 0s14 36 0 50-36 14-50 0-14-36 0-50z" />
    <path d="M158 44c10-10 24-10 34 0s10 24 0 34-24 10-34 0-10-24 0-34z" />

    <!-- little ticket stub -->
    <path d="M28 92h54c4 0 6 3 6 6s-2 6-6 6H28c-4 0-6-3-6-6s2-6 6-6z" />
    <path d="M40 92v12" />
    <path d="M52 92v12" />
    <path d="M64 92v12" />

    <!-- spark -->
    <path d="M88 40l4 10 10 4-10 4-4 10-4-10-10-4 10-4 4-10z" />
  </g>
</svg>`;

const BLUEPRINT_DOODLE_BG = `url("data:image/svg+xml,${encodeURIComponent(
  BLUEPRINT_DOODLE_SVG
)}")`;

const SAMPLE_DAYS = [
  {
    day: "Day 1",
    title: "Arrive + settle in",
    note: "Airport pickup • check-in • easy evening plan",
  },
  {
    day: "Day 2",
    title: "Your ‘wow’ day",
    note: "Signature experience • photo spots • flexible pace",
  },
  {
    day: "Day 3",
    title: "Culture + comfort",
    note: "Local food • markets • sunset viewpoint",
  },
] as const;

export default function TripBlueprintSection() {
  return (
    <Section fullWidth className="my-6">
      <section className="relative overflow-hidden bg-primary text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-90"
          style={{
            backgroundImage: `${BLUEPRINT_DOODLE_BG}, radial-gradient(circle at 20% 20%, rgba(255,255,255,0.12), transparent 55%), radial-gradient(circle at 80% 75%, rgba(255,255,255,0.10), transparent 60%)`,
            backgroundSize: "240px 240px, cover, cover",
            backgroundRepeat: "repeat, no-repeat, no-repeat",
            backgroundPosition: "0 0, center, center",
          }}
        />

        <div className="relative max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <p className="text-xs font-semibold tracking-wide text-white/70">
                A plan you can picture
              </p>
              <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight">
                We build your trip like a blueprint
              </h2>
              <p className="mt-3 text-sm sm:text-base text-white/80 leading-relaxed">
                Not a random list of places. A day-by-day flow that balances the
                “must-do” moments with breathing room — and stays realistic on
                time.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="flex items-start gap-3 rounded-2xl bg-white/10 px-4 py-3 ring-1 ring-white/15">
                  <MapPinned size={18} aria-hidden="true" className="mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold">Routes that make sense</p>
                    <p className="mt-1 text-xs text-white/75">
                      Less backtracking, better timing.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-2xl bg-white/10 px-4 py-3 ring-1 ring-white/15">
                  <CalendarDays size={18} aria-hidden="true" className="mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold">Right pace</p>
                    <p className="mt-1 text-xs text-white/75">
                      Packed where it matters, light where it helps.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-2xl bg-white/10 px-4 py-3 ring-1 ring-white/15">
                  <ShieldCheck size={18} aria-hidden="true" className="mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold">Clear inclusions</p>
                    <p className="mt-1 text-xs text-white/75">
                      You know what’s covered.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-2xl bg-white/10 px-4 py-3 ring-1 ring-white/15">
                  <Headset size={18} aria-hidden="true" className="mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold">Human support</p>
                    <p className="mt-1 text-xs text-white/75">
                      Real help if plans change.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Link
                  href="/packages"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-primary ring-1 ring-black/10 transition-transform duration-200 ease-out will-change-transform hover:scale-[1.03] active:scale-[0.99]"
                >
                  See ready-made packages
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-white ring-1 ring-white/20 transition-transform duration-200 ease-out will-change-transform hover:scale-[1.03] active:scale-[0.99]"
                >
                  Build a custom plan
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="relative">
                <div className="rounded-3xl bg-white text-black ring-1 ring-black/10 shadow-[0_18px_50px_rgba(0,0,0,0.25)] overflow-hidden">
                  <div className="flex items-center justify-between gap-3 px-5 py-4 border-b border-black/10">
                    <div className="flex items-center gap-2">
                      <Ticket size={18} aria-hidden="true" className="text-primary" />
                      <p className="text-sm font-bold text-[#052210]">
                        Your Itinerary Snapshot
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-black/60">
                      <BadgeCheck size={16} aria-hidden="true" className="text-primary" />
                      Curated by Outbound
                    </div>
                  </div>

                  <div className="px-5 py-5">
                    <div className="grid gap-3">
                      {SAMPLE_DAYS.map((d, idx) => (
                        <div
                          key={d.day}
                          className="rounded-2xl border border-black/10 p-4"
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <p className="text-xs font-semibold text-black/50">
                                {d.day}
                              </p>
                              <p className="mt-1 text-sm font-bold text-[#052210]">
                                {d.title}
                              </p>
                              <p className="mt-1 text-xs text-black/60">
                                {d.note}
                              </p>
                            </div>
                            <div className="shrink-0 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                              Stop {idx + 1}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-5 grid gap-3 sm:grid-cols-3">
                      <div className="rounded-2xl bg-[#FBF9F6] p-3 ring-1 ring-black/10">
                        <p className="text-[11px] font-semibold text-black/50">
                          Includes
                        </p>
                        <p className="mt-1 text-xs font-semibold text-[#052210]">
                          Stays + experiences
                        </p>
                      </div>
                      <div className="rounded-2xl bg-[#FBF9F6] p-3 ring-1 ring-black/10">
                        <p className="text-[11px] font-semibold text-black/50">
                          Built for
                        </p>
                        <p className="mt-1 text-xs font-semibold text-[#052210]">
                          Real travel time
                        </p>
                      </div>
                      <div className="rounded-2xl bg-[#FBF9F6] p-3 ring-1 ring-black/10">
                        <p className="text-[11px] font-semibold text-black/50">
                          Support
                        </p>
                        <p className="mt-1 text-xs font-semibold text-[#052210]">
                          Before + during trip
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pointer-events-none absolute -top-4 -right-4 hidden sm:block rounded-3xl bg-white/10 ring-1 ring-white/15 px-4 py-3">
                  <p className="text-xs font-semibold">Preview style</p>
                  <p className="mt-1 text-xs text-white/75">
                    Your actual itinerary is tailored.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Section>
  );
}
