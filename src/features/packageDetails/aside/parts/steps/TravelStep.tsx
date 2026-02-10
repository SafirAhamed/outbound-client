"use client";

import React from "react";
import type { Range } from "react-date-range";
import { Baby, CalendarRange, ClipboardList, User, Users } from "lucide-react";
import DateRangeField from "@/src/components/DateRangeField";
import Button from "@/src/components/common/Button";
import CounterButton from "../fields/CounterButton";

export default function TravelStep({
  range,
  setRange,
  adults,
  setAdults,
  childCount,
  setChildCount,
  infants,
  setInfants,
}: {
  range: Range[];
  setRange: (next: Range[]) => void;
  adults: number;
  setAdults: React.Dispatch<React.SetStateAction<number>>;
  childCount: number;
  setChildCount: React.Dispatch<React.SetStateAction<number>>;
  infants: number;
  setInfants: React.Dispatch<React.SetStateAction<number>>;
}) {
  const totalTravellers = adults + childCount + infants;

  return (
    <div>
      <div className="rounded-2xl bg-blue-50 ring-1 ring-blue-100 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CalendarRange className="h-4 w-4 text-blue-700" />
            <h4 className="text-sm font-semibold text-slate-900">Choose your dates</h4>
          </div>
          <span className="badge badge-ghost badge-sm">Step 1/3</span>
        </div>
        <div className="mt-3">
          <DateRangeField value={range} onChange={setRange} label="Travel Dates" />
        </div>
      </div>

      <div className="rounded-2xl bg-violet-50 ring-1 ring-violet-100 p-4 mt-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-violet-700" />
            <h4 className="text-sm font-semibold text-slate-900">Travellers</h4>
          </div>
          <span className="badge badge-primary badge-sm">{totalTravellers} total</span>
        </div>

        <div className="mt-3 grid gap-3 sm:grid-cols-3">
          <div className="rounded-2xl bg-white ring-1 ring-indigo-100 p-4">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-xl bg-indigo-100 flex items-center justify-center">
                <User className="h-5 w-5 text-indigo-700" />
              </div>
              <div>
                <div className="text-sm font-semibold text-slate-900">Adults</div>
                <div className="text-[11px] text-slate-500">Ages 12+</div>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <CounterButton
                kind="minus"
                onClick={() => setAdults((v) => Math.max(1, v - 1))}
                disabled={adults <= 1}
                ariaLabel="Decrease adults"
              />
              <div className="text-2xl font-bold text-slate-900 tabular-nums">{adults}</div>
              <CounterButton
                kind="plus"
                onClick={() => setAdults((v) => Math.min(99, v + 1))}
                disabled={adults >= 99}
                ariaLabel="Increase adults"
              />
            </div>
          </div>

          <div className="rounded-2xl bg-white ring-1 ring-amber-100 p-4">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-xl bg-amber-100 flex items-center justify-center">
                <Users className="h-5 w-5 text-amber-700" />
              </div>
              <div>
                <div className="text-sm font-semibold text-slate-900">Children</div>
                <div className="text-[11px] text-slate-500">Ages 2–11</div>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <CounterButton
                kind="minus"
                onClick={() => setChildCount((v) => Math.max(0, v - 1))}
                disabled={childCount <= 0}
                ariaLabel="Decrease children"
              />
              <div className="text-2xl font-bold text-slate-900 tabular-nums">{childCount}</div>
              <CounterButton
                kind="plus"
                onClick={() => setChildCount((v) => Math.min(99, v + 1))}
                disabled={childCount >= 99}
                ariaLabel="Increase children"
              />
            </div>
          </div>

          <div className="rounded-2xl bg-white ring-1 ring-emerald-100 p-4">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-xl bg-emerald-100 flex items-center justify-center">
                <Baby className="h-5 w-5 text-emerald-700" />
              </div>
              <div>
                <div className="text-sm font-semibold text-slate-900">Infants</div>
                <div className="text-[11px] text-slate-500">Under 2 years</div>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <CounterButton
                kind="minus"
                onClick={() => setInfants((v) => Math.max(0, v - 1))}
                disabled={infants <= 0}
                ariaLabel="Decrease infants"
              />
              <div className="text-2xl font-bold text-slate-900 tabular-nums">{infants}</div>
              <CounterButton
                kind="plus"
                onClick={() => setInfants((v) => Math.min(99, v + 1))}
                disabled={infants >= 99}
                ariaLabel="Increase infants"
              />
            </div>
          </div>
        </div>

        <div className="mt-4 flex items-start gap-2 rounded-xl bg-white/70 ring-1 ring-violet-100 p-3">
          <ClipboardList className="h-4 w-4 text-violet-700" />
          <p className="text-xs text-slate-700">
            Infant age limits can vary by airline/hotel. Add infants here so we can quote correctly.
          </p>
        </div>

        <div className="mt-3 flex justify-end">
          <Button
            className="btn btn-ghost btn-xs"
            onClick={() => {
              setAdults(2);
              setChildCount(0);
              setInfants(0);
            }}
          >
            Reset travellers
          </Button>
        </div>
      </div>
    </div>
  );
}
