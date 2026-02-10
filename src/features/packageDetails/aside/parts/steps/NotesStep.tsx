"use client";

import React from "react";
import { Baby, ClipboardList, MessageSquare } from "lucide-react";

export default function NotesStep({
  adults,
  childCount,
  infants,
  start,
  end,
  currency,
  comments,
  setComments,
}: {
  adults: number;
  childCount: number;
  infants: number;
  start?: Date;
  end?: Date;
  currency: string;
  comments: string;
  setComments: (v: string) => void;
}) {
  return (
    <div>
      <div className="rounded-2xl bg-amber-50 ring-1 ring-amber-100 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4 text-amber-700" />
            <h4 className="text-sm font-semibold text-slate-900">Trip Notes</h4>
          </div>
          <span className="badge badge-ghost badge-sm">Step 3/3</span>
        </div>

        <div className="mt-3 grid gap-2 sm:grid-cols-3">
          <div className="rounded-xl bg-white ring-1 ring-amber-100 p-3">
            <div className="text-[11px] uppercase tracking-wide text-slate-500">Guests</div>
            <div className="mt-1 text-sm font-semibold text-slate-900 flex items-center gap-2">
              <Baby className="h-4 w-4 text-slate-500" />
              {adults}A · {childCount}C · {infants}I
            </div>
            <div className="text-[11px] text-slate-500 mt-1">Adults · Children · Infants</div>
          </div>

          <div className="rounded-xl bg-white ring-1 ring-amber-100 p-3 sm:col-span-2">
            <div className="text-[11px] uppercase tracking-wide text-slate-500">Dates</div>
            <div className="mt-1 text-sm font-semibold text-slate-900">
              {start ? new Date(start).toLocaleDateString() : "—"} → {end ? new Date(end).toLocaleDateString() : "—"}
            </div>
            <div className="text-[11px] text-slate-500 mt-1">Preferred currency: {currency}</div>
          </div>
        </div>

        <div className="mt-3 flex items-start gap-2 rounded-xl bg-white/70 ring-1 ring-amber-100 p-3">
          <ClipboardList className="h-4 w-4 text-amber-700" />
          <p className="text-xs text-slate-700">
            Add anything important (budget range, hotel category, meals, pickup city, infant requirements).
          </p>
        </div>
      </div>

      <div className="space-y-1 mt-4">
        <label className="text-[11px] font-medium uppercase tracking-wide text-slate-600 flex items-center gap-1">
          <MessageSquare className="h-4 w-4 text-blue-600" />
          Comments
        </label>
        <textarea
          name="comments"
          className="textarea textarea-bordered w-full text-sm"
          rows={5}
          placeholder="Tell us what you want (hotel category, sightseeing, meals, room type, infant needs, etc.)"
          value={comments}
          onChange={(e) => setComments(e.currentTarget.value)}
        />
      </div>
    </div>
  );
}
