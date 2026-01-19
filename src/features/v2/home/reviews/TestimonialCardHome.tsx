"use client";
import Image from "next/image";

export interface Review {
  id: string;
  name: string;
  avatar: string;
  text: string;
}

export default function TestimonialCardHome({ review }: { review: Review }) {
  return (
    <div className="relative bg-white rounded-2xl shadow-md p-6 my-3 flex flex-col items-center text-center max-w-sm w-full min-h-[300px] transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      
      {/* Quote Icon */}
      <div>
        <Image
          src="/images/leftQuote2.png"
          alt="Left Quote"
          width={50}
          height={50}
          className="opacity-20 absolute top-10 left-10"
          loading="lazy"
        />
        <Image
          src="/images/rightQuote2.png"
          alt="Right Quote"
          width={50}
          height={50}
          className="opacity-20 absolute bottom-10 right-10"
          loading="lazy"
        />
      </div>

      {/* Avatar */}
      <Image
        src={review.avatar}
        alt={review.name}
        width={70}
        height={70}
        className="rounded-full border-4 border-white shadow-md mb-3 h-16 w-16"
        loading="lazy"
      />

      {/* Name */}
      <h3 className="font-semibold text-[#052210] text-lg mb-3">
        {review.name}
      </h3>

      {/* Comment */}
      <p className="text-gray-700 text-sm leading-relaxed line-clamp-5">
         {review.text}
      </p>
    </div>
  );
}
