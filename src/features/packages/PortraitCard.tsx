"use client";

import React from "react";
import Image from "next/image";
import Popover from "@/src/components/Popover";
import StarRating from "@/src/components/common/StarRating";
import ViewAllLink from "@/src/components/common/layout/ViewAllLink";
import PriceBlock from "./PriceBlock";
import { PackagesCardItem } from "@/types/packages.types";
import { Heart, Phone, User, Users } from "lucide-react";

const PortraitCard: React.FC<PackagesCardItem> = ({
  image,
  title,
  subtitle,
  rating,
  days,
  nights,
  bestFor,
  price,
  link,
  detailed,
  original_price,
  discounted_price,
}) => {
  const WHATSAPP_NUMBER_RAW = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "918300306136";
  const TEL_NUMBER = process.env.NEXT_PUBLIC_TEL_NUMBER || "+918300306136"; // Keep "+" for tel:

  const whatsappNumber = WHATSAPP_NUMBER_RAW.replace(/\D/g, "");

  const url =
    typeof window !== "undefined"
      ? new URL(link, window.location.origin).toString()
      : link;

  const message = `Hello, I am interested in the following travel package:

Package Name: ${title || "N/A"}
Duration: ${days || "?"} Days / ${nights || "?"} Nights
Price: ₹${typeof price !== "undefined" && price !== null && `${price}`.trim().length > 0 ? price : "?"}
Package Link: ${url}

Please provide more details.`;

  const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(
    message
  )}`;

  const styleLabel = bestFor || `${days}D / ${nights}N`;
  const StyleIcon =
    bestFor === "Solo" ? User : bestFor === "Couple" ? Heart : Users;

  return (
    <article className="group/card rounded-xl shadow-md overflow-hidden flex flex-col">
      <div className="relative w-full h-56 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover/card:scale-110"
        />
        <div className="absolute top-2 left-2 bg-secondary text-white px-3 py-1 text-xs rounded-full">
          {days}D / {nights}N
        </div>
      </div>

      <div className="p-5 flex flex-col justify-between h-[220px]">
        <div>
          <h3 className="text-lg font-bold text-secondary line-clamp-1 mb-1">
            {title}
          </h3>

          <StarRating rating={rating} showNumber />

          <p className="text-sm text-gray-600 mt-2 mb-3 line-clamp-2">
            {subtitle}
          </p>
        </div>

        <div className="flex justify-between items-end">
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center w-fit py-1 gap-1 text-secondary text-[11px] font-semibold ">
              <span className="inline-flex items-center justify-center">
                <StyleIcon className="h-3 w-3" aria-hidden="true" />
              </span>
              <span className="leading-none">{styleLabel}</span>
            </div>

            <Popover
              side="top"
              align="start"
              className="p-2"
              trigger={({ ref, onClick, "aria-expanded": ariaExpanded }) => (
                <button
                  ref={ref}
                  type="button"
                  onClick={onClick}
                  aria-expanded={ariaExpanded}
                  className="bg-secondary hover:bg-secondary text-white text-sm px-4 py-1.5 rounded-full font-semibold shadow cursor-pointer"
                >
                  Enquiry
                </button>
              )}
            >
              {(close) => (
                <div className="flex items-center gap-2">
                  <a
                    href={`tel:${TEL_NUMBER}`}
                    onClick={close}
                    className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-2 text-xs font-semibold text-white hover:bg-secondary"
                    aria-label="Call"
                  >
                    <Phone className="h-4 w-4" />
                    Call
                  </a>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={close}
                    className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-2 text-xs font-semibold text-white hover:bg-secondary"
                    aria-label="WhatsApp"
                  >
                    <Image src="/images/whatsappLogo.png" alt="" width={16} height={16} />
                    WhatsApp
                  </a>
                </div>
              )}
            </Popover>
          </div>

          <div className="flex flex-col items-end gap-2">
            <PriceBlock
              detailed={detailed}
              original_price={original_price}
              discounted_price={discounted_price}
              price={price}
            />

            <ViewAllLink viewAll={link} label="View Details" />
          </div>
        </div>
      </div>
    </article>
  );
};

export default PortraitCard;
