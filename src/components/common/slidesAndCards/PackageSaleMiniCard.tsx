"use client";

import React from "react";
import Image from "next/image";
import withPackageStyle from "./withPackageStyle";
import StarRating from "../StarRating";
import ViewAllLink from "../layout/ViewAllLink";

interface PackagesSaleCardProps {
  image: string;
  title: string;
  description: string;
  rating: number;
  days: number;
  nights: number;
  price: string;
  link: string;
  portrait?: boolean;
  landscape?: boolean;
  detailed?: boolean;
  originalPrice?: string;
  discountedPrice?: string;
  advanceStyle?: boolean;
  styleVariant?: "default" | "ticket" | "glass" | "classic";
}

function getDiscountPercent(original?: string, discounted?: string) {
  if (!original || !discounted) return null;
  const orig = Number(original.replace(/,/g, ""));
  const disc = Number(discounted.replace(/,/g, ""));
  if (!orig || !disc || disc >= orig) return null;
  return Math.round(((orig - disc) / orig) * 100);
}

const PriceBlock: React.FC<{
  detailed?: boolean;
  originalPrice?: string;
  discountedPrice?: string;
  price: string;
}> = ({ detailed, originalPrice, discountedPrice, price }) => {
  const percent = getDiscountPercent(originalPrice, discountedPrice);

  if (detailed && originalPrice && discountedPrice && percent) {
    return (
      <div className="flex flex-col items-end">
        <div className="flex items-center gap-2">
          <span className="text-gray-400 line-through text-sm">
            ₹{originalPrice}
          </span>
          <span className="bg-rose-100 text-rose-600 text-xs font-bold px-2 py-0.5 rounded-full border border-rose-200">
            {percent}% OFF
          </span>
        </div>
        <span className="text-[#052210] font-extrabold text-xl">
          ₹{discountedPrice}
        </span>
      </div>
    );
  }

  return (
    <span className="text-[#052210] font-extrabold text-xl" itemProp="price">
      ₹{price}
    </span>
  );
};

const PackagesSaleMiniCard: React.FC<PackagesSaleCardProps> = ({
  image,
  title,
  description,
  rating,
  days,
  nights,
  price,
  link,
  portrait = false,
  landscape = false,
  detailed = false,
  originalPrice,
  discountedPrice,
}) => {
  // ---------------- LANDSCAPE CARD ----------------
  if (landscape) {
    return (
      <article className="group/card flex h-56 overflow-hidden rounded-xl">

        {/* Image */}
        <div className="relative h-full w-1/3 overflow-hidden">
          <Image
            src={image || "/images/mountainImage.jpg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover/card:scale-110"
          />
          <div className="absolute top-2 left-2 bg-emerald-600 text-white text-xs px-3 py-1 rounded-full shadow font-semibold">
            {days}D / {nights}N
          </div>
        </div>

        {/* Content */}
        <div className="w-2/3 p-4 flex flex-col justify-between bg-linear-to-br from-white via-white to-emerald-50">
          {/* Top */}
          <div>
            <h3 className="text-lg font-bold text-emerald-900 mb-1 line-clamp-1">
              {title}
            </h3>

            <StarRating rating={rating} showNumber />

            <p className="text-sm text-gray-600 mt-2 line-clamp-2">
              {description}
            </p>
          </div>

          {/* Bottom */}
          <div className="flex justify-between items-end mt-2">
            {/* Left */}
            <div className="flex flex-col gap-5.5">
              <div className="flex items-center gap-1 text-emerald-700 text-md font-semibold">
                <svg width={18} height={18} fill="none" viewBox="0 0 24 24">
                  <path
                    d="M8 7V3m8 4V3M3 11h18M5 19h14a2 2 0 002-2v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7a2 2 0 002 2z"
                    stroke="#059669"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {days}D / {nights}N
              </div>

              <button className="bg-emerald-600 hover:bg-emerald-700 text-white text-sm px-4 py-1.5 rounded-full font-semibold shadow cursor-pointer">
                Enquiry
              </button>
            </div>

            {/* Right */}
            <div className="flex flex-col items-end gap-2">
              <PriceBlock
                detailed={detailed}
                originalPrice={originalPrice}
                discountedPrice={discountedPrice}
                price={price}
              />
              <ViewAllLink viewAll={link} label="View Details" />
            </div>
          </div>
        </div>
      </article>
    );
  }

  // ---------------- PORTRAIT CARD ----------------
  const layoutClass = portrait ? "flex flex-col" : "flex flex-col md:flex-row";
  const imgClass = portrait
    ? "relative w-full h-56"
    : "relative w-full h-48 md:w-3xs md:h-auto";

  return (
    <article
      className={`group/card rounded-xl shadow-md overflow-hidden ${layoutClass}`}
    >
      {/* Image */}
      <div className={`${imgClass} overflow-hidden`}>
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover/card:scale-110"
        />
        <div className="absolute top-2 left-2 bg-emerald-600 text-white text-xs px-3 py-1 rounded-full shadow font-semibold">
          {days}D / {nights}N
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col justify-between h-[220px]">
        {/* Top Area */}
        <div>
          <h3 className="text-lg font-bold text-emerald-900 line-clamp-1 mb-1">
            {title}
          </h3>

          <StarRating rating={rating} showNumber />

          <p className="text-sm text-gray-600 mt-2 mb-3 line-clamp-2">
            {description}
          </p>
        </div>

        {/* Bottom Area */}
        <div className="flex justify-between items-end">
          {/* LEFT SIDE */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center text-emerald-700 text-sm font-semibold">
              <svg width={18} height={18} fill="none" viewBox="0 0 24 24">
                <path
                  d="M8 7V3m8 4V3M3 11h18M5 19h14a2 2 0 002-2v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7a2 2 0 002 2z"
                  stroke="#059669"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {days}D / {nights}N
            </div>

            <button className="bg-emerald-600 hover:bg-emerald-700 text-white text-sm px-4 py-1.5 rounded-full font-semibold shadow cursor-pointer">
              Enquiry
            </button>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col items-end gap-2">
            <PriceBlock
              detailed={detailed}
              originalPrice={originalPrice}
              discountedPrice={discountedPrice}
              price={price}
            />

            <ViewAllLink viewAll={link} label="View Details" />
          </div>
        </div>
      </div>
    </article>
  );
};

export default withPackageStyle(PackagesSaleMiniCard);
