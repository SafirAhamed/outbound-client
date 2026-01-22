"use client";
import React from "react";

const DestinationCardSkeleton: React.FC = () => {
  return (
    <div className="relative rounded-lg overflow-hidden bg-base-200">
      <div className="w-full h-[140px] md:h-[260px] skeleton" />

      <div className="absolute bottom-3 left-3 flex flex-col gap-2">
        <div className="h-3 w-28 md:w-36 skeleton rounded" />
        <div className="h-2 w-20 md:w-28 skeleton rounded" />
      </div>
    </div>
  );
};

export default DestinationCardSkeleton;