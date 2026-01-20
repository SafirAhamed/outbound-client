"use client";

import React from "react";

type GlassSurfaceOwnProps = {
  className?: string;
  children: React.ReactNode;
};

type PolymorphicProps<T extends React.ElementType> = GlassSurfaceOwnProps &
  Omit<React.ComponentPropsWithoutRef<T>, keyof GlassSurfaceOwnProps | "as"> & {
    as?: T;
  };

const BASE_GLASS_CLASSNAME =
  "relative text-white transition " +
  "bg-white/6 hover:bg-white/9 " +
  "ring-1 ring-white/18 " +
  "backdrop-blur-2xl backdrop-saturate-150 " +
  "shadow-[0_12px_30px_rgba(0,0,0,0.28)] " +
  "before:content-[''] before:absolute before:inset-0 before:rounded-[inherit] before:pointer-events-none " +
  "before:bg-linear-to-br before:from-white/18 before:via-white/6 before:to-white/0 " +
  "after:content-[''] after:absolute after:inset-0 after:rounded-[inherit] after:pointer-events-none " +
  "after:mix-blend-overlay after:opacity-0 hover:after:opacity-100 focus-visible:after:opacity-100 after:transition-opacity after:duration-200 " +
  "after:bg-[radial-gradient(120%_70%_at_var(--glass-x)_var(--glass-y),rgba(255,255,255,0.34)_0%,rgba(255,255,255,0.12)_38%,rgba(255,255,255,0.00)_70%)]";

const DEFAULT_GLASS_X = "22%";
const DEFAULT_GLASS_Y = "14%";

export default function GlassSurface<T extends React.ElementType = "button">(
  props: PolymorphicProps<T>
) {
  const {
    as,
    className = "",
    children,
    style,
    onPointerMove,
    onPointerLeave,
    ...rest
  } = props as PolymorphicProps<React.ElementType>;
  const Component = (as ?? "button") as React.ElementType;

  const mergedStyle = {
    ...(style as React.CSSProperties | undefined),
    // Default highlight location; updated on hover/pointer move.
    ["--glass-x" as never]:
      (style as Record<string, unknown> | undefined)?.["--glass-x"] ??
      DEFAULT_GLASS_X,
    ["--glass-y" as never]:
      (style as Record<string, unknown> | undefined)?.["--glass-y"] ??
      DEFAULT_GLASS_Y,
  };

  const handlePointerMove: React.PointerEventHandler<HTMLElement> = (e) => {
    onPointerMove?.(e as never);
    if (e.currentTarget && e.currentTarget instanceof HTMLElement) {
      const rect = e.currentTarget.getBoundingClientRect();
      const px = ((e.clientX - rect.left) / rect.width) * 100;
      const py = ((e.clientY - rect.top) / rect.height) * 100;
      const x = Math.max(0, Math.min(100, px));
      const y = Math.max(0, Math.min(100, py));
      e.currentTarget.style.setProperty("--glass-x", `${x.toFixed(1)}%`);
      e.currentTarget.style.setProperty("--glass-y", `${y.toFixed(1)}%`);
    }
  };

  const handlePointerLeave: React.PointerEventHandler<HTMLElement> = (e) => {
    onPointerLeave?.(e as never);
    if (e.currentTarget && e.currentTarget instanceof HTMLElement) {
      e.currentTarget.style.setProperty("--glass-x", DEFAULT_GLASS_X);
      e.currentTarget.style.setProperty("--glass-y", DEFAULT_GLASS_Y);
    }
  };

  return (
    <Component
      className={`${BASE_GLASS_CLASSNAME} ${className}`}
      style={mergedStyle}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      {...rest}
    >
      {children}
    </Component>
  );
}
