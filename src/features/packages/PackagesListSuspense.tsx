"use client";

import React, { Suspense } from "react";
import PackagesGridSkeleton from "@/src/skeleton/PackagesGridSkeleton";
import PackagesList from "./PackagesList";

const PackagesListSuspense: React.FC = () => {
  return (
    <Suspense fallback={<PackagesGridSkeleton />}>
      <PackagesList />
    </Suspense>
  );
};

export default PackagesListSuspense;
