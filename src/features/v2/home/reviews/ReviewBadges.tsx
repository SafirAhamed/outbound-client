"use client";

import Image from 'next/image'

const ReviewBadges = () => {
  return (
    <div className="bg-white text-primary h-auto py-3 w-full flex justify-center items-center gap-8 px-4 font-semibold">
        {/* Google Rating */}
        <div className="flex items-center gap-2 text-sm sm:text-base ">
          <Image
            src="/images/google.png"
            alt="Google"
            className="w-5 h-5 sm:w-6 sm:h-6"
            width={24}
            height={24}
          />
          <span className="">4.8</span>
          <span className="text-yellow-400">★</span>
          <span className="hidden xs:inline">rated</span>
        </div>

        {/* Customized Trips */}
        <div className="text-sm sm:text-base whitespace-nowrap">
          100% Customized Trips
        </div>

        {/* Visa Success Rate (hidden on small screens) */}
        <div className="hidden sm:flex text-sm sm:text-base whitespace-nowrap">
          99% Visa Success Rate
        </div>

        {/* Concierge (hidden on small screens) */}
        <div className="hidden sm:flex text-sm sm:text-base whitespace-nowrap">
          24×7 Concierge
        </div>
      </div>
  )
}

export default ReviewBadges