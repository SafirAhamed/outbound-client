import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  Headset,
  ShieldCheck,
  Sparkles,
  Ticket,
} from "lucide-react";
import Section from "@/src/components/common/layout/Section";

const STAMPS = [
  { label: "Verified stays", icon: BadgeCheck },
  { label: "Transparent inclusions", icon: ShieldCheck },
  { label: "24/7 support", icon: Headset },
  { label: "Wow moments", icon: Sparkles },
] as const;

export default function VisualTrustSection() {
  return (
    <Section fullWidth className="my-6">
      <section className="relative w-full overflow-hidden bg-primary">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 opacity-90 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.14),transparent_55%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.10),transparent_60%)]" />
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/6 blur-2xl" />
          <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-white/6 blur-2xl" />
        </div>

        <div className="relative max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <p className="text-xs font-semibold tracking-wide text-white/75">
                Your travel plan, made tangible
              </p>
              <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Outbound Passport
              </h2>
              <p className="mt-3 text-sm sm:text-base text-white/80 leading-relaxed">
                A premium trip isn’t just pretty photos. It’s a plan that
                holds up in real life — timings, transfers, inclusions, and
                support.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {STAMPS.map(({ label, icon: Icon }) => (
                  <div
                    key={label}
                    className="flex items-start gap-3 rounded-2xl bg-white/10 px-4 py-3 ring-1 ring-white/15"
                  >
                    <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-white ring-1 ring-white/10">
                      <Icon size={18} aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">{label}</p>
                      <p className="mt-1 text-xs text-white/70">
                        Included by default.
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Link
                  href="/packages"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-primary ring-1 ring-black/10 transition-transform duration-200 ease-out will-change-transform hover:scale-[1.03] active:scale-[0.99]"
                >
                  Browse packages
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-white ring-1 ring-white/20 transition-transform duration-200 ease-out will-change-transform hover:scale-[1.03] active:scale-[0.99]"
                >
                  Build a custom trip
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="relative">
                <div className="grid gap-4 lg:grid-cols-12 lg:gap-5">
                  <div className="lg:col-span-7 rounded-3xl bg-white text-black ring-1 ring-black/10 shadow-[0_18px_50px_rgba(0,0,0,0.25)] overflow-hidden">
                    <div className="flex items-center justify-between gap-3 px-5 py-4 border-b border-black/10">
                      <div className="flex items-center gap-2">
                        <Ticket size={18} aria-hidden="true" className="text-primary" />
                        <p className="text-sm font-bold text-[#052210]">
                          Outbound Passport
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-xs font-semibold text-black/60">
                        <CalendarDays size={16} aria-hidden="true" className="text-primary" />
                        Built for real timing
                      </div>
                    </div>

                    <div className="px-5 py-5">
                      <div className="grid gap-3">
                        <div className="rounded-2xl bg-[#FBF9F6] p-4 ring-1 ring-black/10">
                          <p className="text-[11px] font-semibold text-black/50">
                            What you get
                          </p>
                          <p className="mt-1 text-sm font-bold text-[#052210]">
                            A day-by-day flow + clear inclusions
                          </p>
                          <p className="mt-1 text-xs text-black/60">
                            Less chaos, more confidence.
                          </p>
                        </div>

                        <div className="grid gap-3 sm:grid-cols-3">
                          <div className="rounded-2xl border border-black/10 p-4">
                            <p className="text-[11px] font-semibold text-black/50">
                              Stays
                            </p>
                            <p className="mt-1 text-xs font-semibold text-[#052210]">
                              Curated hotels
                            </p>
                          </div>
                          <div className="rounded-2xl border border-black/10 p-4">
                            <p className="text-[11px] font-semibold text-black/50">
                              Movement
                            </p>
                            <p className="mt-1 text-xs font-semibold text-[#052210]">
                              Transfers aligned
                            </p>
                          </div>
                          <div className="rounded-2xl border border-black/10 p-4">
                            <p className="text-[11px] font-semibold text-black/50">
                              Support
                            </p>
                            <p className="mt-1 text-xs font-semibold text-[#052210]">
                              Before + during
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-5">
                    <div className="relative h-[420px] sm:h-[460px]">
                      <div className="absolute left-0 top-0 w-[78%] rounded-3xl bg-white p-3 ring-1 ring-black/10 shadow-[0_18px_50px_rgba(0,0,0,0.25)] -rotate-3">
                        <div className="relative h-44 sm:h-48 rounded-2xl overflow-hidden">
                          <Image
                            src="/images/about/partnerHand.jpg"
                            alt="Partners"
                            fill
                            sizes="(max-width: 1024px) 100vw, 40vw"
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-linear-to-t from-black/45 via-black/10 to-transparent" />
                          <p className="absolute left-4 bottom-4 text-sm font-bold text-white">
                            Partners that deliver
                          </p>
                        </div>
                      </div>

                      <div className="absolute right-0 top-24 w-[80%] rounded-3xl bg-white p-3 ring-1 ring-black/10 shadow-[0_18px_50px_rgba(0,0,0,0.25)] rotate-2">
                        <div className="relative h-44 sm:h-48 rounded-2xl overflow-hidden">
                          <Image
                            src="/images/about/cashValue.jpg"
                            alt="Value"
                            fill
                            sizes="(max-width: 1024px) 100vw, 40vw"
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-linear-to-t from-black/45 via-black/10 to-transparent" />
                          <p className="absolute left-4 bottom-4 text-sm font-bold text-white">
                            Value you can see
                          </p>
                        </div>
                      </div>

                      <div className="absolute left-6 bottom-0 w-[74%] rounded-3xl bg-white p-3 ring-1 ring-black/10 shadow-[0_18px_50px_rgba(0,0,0,0.25)] -rotate-1">
                        <div className="relative h-36 sm:h-40 rounded-2xl overflow-hidden">
                          <Image
                            src="/images/about/travelpalmtree.png"
                            alt="Travel"
                            fill
                            sizes="(max-width: 1024px) 100vw, 40vw"
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-linear-to-t from-black/40 via-black/10 to-transparent" />
                          <p className="absolute left-4 bottom-4 text-sm font-bold text-white">
                            A trip that flows
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pointer-events-none absolute -top-5 -right-5 hidden sm:block rounded-3xl bg-white/10 ring-1 ring-white/15 px-4 py-3">
                  <p className="text-xs font-semibold text-white">Looks premium</p>
                  <p className="mt-1 text-xs text-white/75">Plans even better.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Section>
  );
}
