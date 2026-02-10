"use client";
import React from "react";
import { Baby, User, Users } from "lucide-react";
import GuestCounter from "./GuestCounter";
import Popover from "@/src/components/Popover";

export default function GuestsField({
  adults,
  child,
  infants,
  setAdults,
  setChildren,
  setInfants,
  label = "Guests",
}: {
  adults: number;
  child: number;
  infants: number;
  setAdults: (v: number) => void;
  setChildren: (v: number) => void;
  setInfants: (v: number) => void;
  label?: string;
}) {
  const summaryParts = [
    `${adults} Adult${adults === 1 ? "" : "s"}`,
    `${child} Child${child === 1 ? "" : "ren"}`,
    `${infants} Infant${infants === 1 ? "" : "s"}`,
  ];

  return (
    <div className="space-y-1 md:max-w-xs">
      <label className="text-[11px] font-medium uppercase tracking-wide text-slate-600 flex items-center gap-1">
        <Users className="h-4 w-4 text-indigo-600" />
        {label}
      </label>

      <Popover
        side="bottom"
        align="start"
        matchTriggerWidth
        className="p-3"
        trigger={(t) => (
          <button
            ref={t.ref}
            type="button"
            onClick={t.onClick}
            aria-expanded={t["aria-expanded"]}
            className="btn btn-sm btn-outline w-full justify-between"
          >
            <span className="text-xs">
              {summaryParts.join(", ")}
            </span>
            <span className="text-[10px] text-slate-500">
              {t["aria-expanded"] ? "Close" : "Edit"}
            </span>
          </button>
        )}
      >
        {(close) => (
          <div className="">
            <div className="space-y-3">
              <GuestCounter
                label={
                  <span className="inline-flex items-center gap-2">
                    <User className="h-4 w-4 text-slate-500" />
                    Adults
                  </span>
                }
                value={adults}
                setValue={setAdults}
                min={1}
              />
              <GuestCounter
                label={
                  <span className="inline-flex items-center gap-2">
                    <Users className="h-4 w-4 text-slate-500" />
                    Children
                  </span>
                }
                value={child}
                setValue={setChildren}
                min={0}
              />
              <GuestCounter
                label={
                  <span className="inline-flex items-center gap-2">
                    <Baby className="h-4 w-4 text-slate-500" />
                    Infants
                  </span>
                }
                value={infants}
                setValue={setInfants}
                min={0}
              />
            </div>
            <div className="mt-3 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => {
                  setAdults(2);
                  setChildren(0);
                  setInfants(0);
                }}
                className="btn btn-ghost btn-xs"
              >
                Reset
              </button>
              <button type="button" onClick={close} className="btn btn-primary btn-xs">
                Done
              </button>
            </div>
          </div>
        )}
      </Popover>
    </div>
  );
}