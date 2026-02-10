import React from "react";
import CounterButton from "./CounterButton";
export default function GuestCounter({
  label,
  value,
  setValue,
  min = 0,
  max = 99,
}: {
  label: React.ReactNode;
  value: number;
  setValue: (v: number) => void;
  min?: number;
  max?: number;
}) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-xs font-medium text-slate-600 flex items-center gap-2">
        {label}
      </span>
      <div className="flex items-center gap-2">
        <CounterButton
          kind="minus"
          onClick={() => setValue(Math.max(min, value - 1))}
          disabled={value <= min}
          ariaLabel="Decrease"
        />
        <span className="w-6 text-center text-sm">{value}</span>
        <CounterButton
          kind="plus"
          onClick={() => setValue(Math.min(max, value + 1))}
          disabled={value >= max}
          ariaLabel="Increase"
        />
      </div>
    </div>
  );
}