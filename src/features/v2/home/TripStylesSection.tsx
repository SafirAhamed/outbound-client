import Link from "next/link";
import {
  ArrowRight,
  Backpack,
  Crown,
  HeartHandshake,
  Mountain,
  Sparkles,
  Users,
} from "lucide-react";

const STYLES = [
  {
    title: "Honeymoon",
    description: "Romantic stays, slow mornings, beautiful sunsets.",
    icon: HeartHandshake,
    href: "/packages",
  },
  {
    title: "Family",
    description: "Comfort-first plans with kid-friendly pacing.",
    icon: Users,
    href: "/packages",
  },
  {
    title: "Adventure",
    description: "Hikes, islands, and days packed with stories.",
    icon: Mountain,
    href: "/packages",
  },
  {
    title: "Budget",
    description: "Smart picks that maximize value and experience.",
    icon: Backpack,
    href: "/packages",
  },
  {
    title: "Luxury",
    description: "Premium stays and curated, seamless details.",
    icon: Crown,
    href: "/packages",
  },
  {
    title: "Surprise Me",
    description: "Tell us your dates — we’ll pitch the vibe.",
    icon: Sparkles,
    href: "/contact",
  },
] as const;

const DOODLE_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="260" height="260" viewBox="0 0 260 260">
  <g fill="none" stroke="rgba(0,0,0,0.10)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <!-- route -->
    <path d="M18 170c34-26 66-10 96-30 30-20 50-56 104-38 56 18 44 86 22 96" stroke-dasharray="2 10" />
    <circle cx="114" cy="134" r="4" />
    <circle cx="212" cy="164" r="4" />

    <!-- stamp rings -->
    <path d="M176 46c14-14 36-14 50 0s14 36 0 50-36 14-50 0-14-36 0-50z" />
    <path d="M184 54c10-10 24-10 34 0s10 24 0 34-24 10-34 0-10-24 0-34z" />

    <!-- little sparkle -->
    <path d="M70 48l4 10 10 4-10 4-4 10-4-10-10-4 10-4 4-10z" />

    <!-- tiny ticket -->
    <path d="M30 96h58c5 0 8 3 8 7s-3 7-8 7H30c-5 0-8-3-8-7s3-7 8-7z" />
    <path d="M44 96v14" />
    <path d="M58 96v14" />
    <path d="M72 96v14" />
  </g>
</svg>`;

const DOODLE_BG = `url("data:image/svg+xml,${encodeURIComponent(DOODLE_SVG)}")`;

export default function TripStylesSection() {
  return (
    <section className="relative w-full bg-[#FBF9F6] overflow-hidden my-6">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage: `${DOODLE_BG}, radial-gradient(circle at 18% 25%, rgba(0,0,0,0.05), transparent 55%), radial-gradient(circle at 80% 70%, rgba(0,0,0,0.04), transparent 60%)`,
          backgroundSize: "260px 260px, cover, cover",
          backgroundRepeat: "repeat, no-repeat, no-repeat",
          backgroundPosition: "0 0, center, center",
        }}
      />

      <div className="relative max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold tracking-wide text-black/60">
              Start with a vibe
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-[#052210]">
              Pick your trip style
            </h2>
            <p className="mt-3 text-sm sm:text-base text-black/70 leading-relaxed">
              People decide faster when the choices feel human. Choose a style and
              jump into packages that match the way you actually want to travel.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href="/packages"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white ring-1 ring-black/10 transition-transform duration-200 ease-out will-change-transform hover:scale-[1.03] active:scale-[0.99]"
              >
                Browse packages
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link
                href="/destinations"
                className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#052210] ring-1 ring-black/10 transition-transform duration-200 ease-out will-change-transform hover:scale-[1.03] active:scale-[0.99]"
              >
                View destinations
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              {STYLES.map(({ title, description, icon: Icon, href }) => (
                <Link
                  key={title}
                  href={href}
                  className="group rounded-2xl bg-white p-5 ring-1 ring-black/10 transition-transform duration-200 ease-out will-change-transform hover:scale-[1.02]"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Icon size={18} aria-hidden="true" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-bold text-[#052210]">
                          {title}
                        </p>
                        <p className="mt-1 text-xs text-black/65 line-clamp-2">
                          {description}
                        </p>
                      </div>
                    </div>

                    <ArrowRight
                      size={16}
                      aria-hidden="true"
                      className="mt-1 text-black/35 transition-transform duration-200 group-hover:translate-x-0.5"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
