"use client";
import React from "react";

type HeaderProps = {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  searchValue?: string;
  showSearch?: boolean;
  onSearchChange?: (value: string) => void;
  height?: "half" | "full";
  fixedBackground?: boolean;
  overlayStrength?: "normal" | "strong";
};

const Header = ({
  title,
  subtitle,
  backgroundImage,
  searchValue,
  showSearch,
  onSearchChange,
  height = "half",
  fixedBackground = false,
  overlayStrength = "normal",
}: HeaderProps) => {
  const [localSearch, setLocalSearch] = React.useState(searchValue ?? "");

  React.useEffect(() => {
    setLocalSearch(searchValue ?? "");
  }, [searchValue]);

  const submitSearch = () => {
    onSearchChange?.(localSearch.trim());
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      submitSearch();
    }
  };

  // If user clears input (empty string), trigger search immediately without button/enter
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const next = e.target.value;
    setLocalSearch(next);
    if (next.trim() === "") {
      onSearchChange?.("");
    }
  };

  return (
    <section
      className={`relative w-full ${
        height === "full" ? "h-screen" : "h-[50vh] min-h-[420px]"
      } bg-[#0c4423] overflow-hidden bg-cover bg-bottom bg-no-repeat ${
        fixedBackground ? "bg-fixed" : ""
      }`}
      style={backgroundImage ? { backgroundImage: `url('${backgroundImage}')` } : undefined}
    >
      {/* Contrast overlays */}
      <div
        className={`absolute inset-0 bg-gradient-to-b ${
          overlayStrength === "strong"
            ? "from-black/75 via-black/45 to-black/80"
            : "from-black/60 via-black/35 to-black/65"
        }`}
      />

      {/* Subtle decorative blobs (works with or without image) */}
      <div
        className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-28 -right-24 h-80 w-80 rounded-full bg-white/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative h-full flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white capitalize drop-shadow-sm tracking-tight leading-[1.05]">
          {title}
        </h1>

        <div className="mt-4 h-1 w-16 md:w-24 rounded-full bg-white/80" />

        {subtitle && (
          <p className="mt-5 text-base md:text-xl text-white/90 max-w-3xl leading-relaxed">
            {subtitle}
          </p>
        )}
        {showSearch && (
          <div className="mt-7 w-11/12 max-w-xl">
            <label htmlFor="destination-search" className="sr-only">
              Search destinations or packages
            </label>
            <div
              className="flex items-center rounded-full px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/25 ring-1 ring-white/15 shadow-[0_10px_22px_rgba(0,0,0,0.30)]"
            >
              <input
                id="destination-search"
                type="text"
                className="flex-1 bg-transparent text-sm md:text-base text-white placeholder:text-white/75 placeholder:font-light focus:outline-none"
                placeholder={`Search ${title.toLowerCase()}...`}
                value={localSearch}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
              />
              <button
                type="button"
                onClick={submitSearch}
                aria-label="Search"
                className="ml-2 flex items-center justify-center w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-4.3-4.3m0 0A7.5 7.5 0 1010.5 18.5a7.5 7.5 0 006.2-1.8z"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Header;
