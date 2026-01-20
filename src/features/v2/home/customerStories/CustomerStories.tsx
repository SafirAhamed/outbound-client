"use client";
import { CUSTOMER_STORIES } from "@/src/data/customerGallery";
import { CustomerStory } from "@/types/customer.types";
import React, { useState } from "react";
import CustomerStoryCard from "./CustomerStoryCard";
import CustomerStoryPortal from "./CustomerStoryPortal";
import Section from "@/src/components/common/layout/Section";

// --- Main Component ---
export default function CustomerStories({
  stories = CUSTOMER_STORIES,
  heading = "Customers happy Stories",
}: {
  stories?: CustomerStory[];
  heading?: string;
}) {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <Section title={heading} centerTitle titleSize="large" noSpace>
      <div className="flex gap-2 overflow-x-auto py-3 ">
        {stories.map((story, idx) => (
          <CustomerStoryCard
            key={story.id}
            story={story}
            onClick={() => setActiveIdx(idx)}
          />
        ))}
      </div>
      {activeIdx !== null && (
        <CustomerStoryPortal
          stories={stories}
          activeIdx={activeIdx}
          onClose={() => setActiveIdx(null)}
          onPrev={() => setActiveIdx((i) => (i! > 0 ? i! - 1 : i))}
          onNext={() => setActiveIdx((i) => (i! < stories.length - 1 ? i! + 1 : i))}
        />
      )}
    </Section>
  );
}