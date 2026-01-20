"use client";

import * as React from "react";

export default function useResponsivePageSize({
  xsMaxWidthPx = 420,
  mdMaxWidthPx = 768,
  lgMaxWidthPx,
  xs = 1,
  md = 2,
  lg = 4,
  xl,
}: {
  xsMaxWidthPx?: number;
  mdMaxWidthPx?: number;
  lgMaxWidthPx?: number;
  xs?: number;
  md?: number;
  lg?: number;
  xl?: number;
} = {}) {
  const [pageSize, setPageSize] = React.useState(lg);

  React.useEffect(() => {
    const mqXs = window.matchMedia(`(max-width: ${xsMaxWidthPx}px)`);
    const mqMd = window.matchMedia(`(max-width: ${mdMaxWidthPx}px)`);
    const mqLg =
      typeof lgMaxWidthPx === "number"
        ? window.matchMedia(`(max-width: ${lgMaxWidthPx}px)`)
        : null;

    const apply = () => {
      if (mqXs.matches) setPageSize(xs);
      else if (mqMd.matches) setPageSize(md);
      else if (mqLg && typeof xl === "number" && mqLg.matches) setPageSize(lg);
      else if (typeof xl === "number") setPageSize(xl);
      else setPageSize(lg);
    };

    apply();
    mqXs.addEventListener("change", apply);
    mqMd.addEventListener("change", apply);
    mqLg?.addEventListener("change", apply);
    return () => {
      mqXs.removeEventListener("change", apply);
      mqMd.removeEventListener("change", apply);
      mqLg?.removeEventListener("change", apply);
    };
  }, [xsMaxWidthPx, mdMaxWidthPx, lgMaxWidthPx, xs, md, lg, xl]);

  return pageSize;
}
