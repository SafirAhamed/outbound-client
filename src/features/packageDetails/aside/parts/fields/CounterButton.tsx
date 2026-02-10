"use client";

import React from "react";
import { Minus, Plus } from "lucide-react";

export default function CounterButton({
  kind,
  onClick,
  disabled,
  ariaLabel,
}: {
  kind: "plus" | "minus";
  onClick: () => void;
  disabled?: boolean;
  ariaLabel: string;
}) {
  const Icon = kind === "plus" ? Plus : Minus;

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="btn btn-xs btn-outline btn-square"
      aria-label={ariaLabel}
    >
      <Icon className="h-4 w-4" />
    </button>
  );
}
