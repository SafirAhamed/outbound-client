"use client";

import React, { Suspense } from "react";
import DestinationGridSkeleton from "@/src/skeleton/DestinationGridSkeleton";
import DestinationList from "./DestinationList";

const DestinationListSuspense: React.FC = () => {
  return (
    <Suspense fallback={<DestinationGridSkeleton />}>
      <DestinationList />
    </Suspense>
  );
};

export default DestinationListSuspense;
