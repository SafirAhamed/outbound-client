"use client";

import React from "react";

export type TagVariant = "bestSeller" | "trending" | "lowestPriceEver" | "default";

export type TagPill = {
  label: string;
  variant?: TagVariant;
};

type Props = {
  tags: TagPill[];
  className?: string;
};

const VARIANT_STYLES: Record<TagVariant, string> = {
  bestSeller:
    "border-amber-300/60 ring-1 ring-amber-200/70 bg-amber-50 text-amber-900",
  trending:
    "border-fuchsia-300/60 ring-1 ring-fuchsia-200/70 bg-fuchsia-50 text-fuchsia-900",
  lowestPriceEver:
    "border-emerald-300/60 ring-1 ring-emerald-200/70 bg-emerald-50 text-emerald-900",
  default: "border-slate-200 ring-1 ring-slate-100 bg-slate-50 text-slate-800",
};

export default function TagPills({ tags, className = "" }: Props) {
  if (!tags?.length) return null;

  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      {tags.map((tag, idx) => {
        const variant: TagVariant = tag.variant ?? "default";
        const style = VARIANT_STYLES[variant] ?? VARIANT_STYLES.default;

        return (
          <span
            key={`${tag.label}-${idx}`}
            className={`inline-flex items-center rounded-full border px-2 py-0.2 text-[9px] font-semibold ${style}`}
          >
            {tag.label}
          </span>
        );
      })}
    </div>
  );
}
