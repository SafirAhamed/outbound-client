"use client";

import CollageGrid from "@/src/components/common/grid/CollageGrid";
import Section from "@/src/components/common/layout/Section";
import { useAppData } from "@/src/context/AppDataContext";
import type { CollageItem } from "@/types/homePage.types";
import type { DestinationCardItem } from "@/types/destinations.types";

const InternationalDestinations = () => {
  const { state } = useAppData();

  const data: DestinationCardItem[] =
    state.homePage?.internationalDestinations ?? [];

  const items: CollageItem[] = data.map((d) => ({
    title: d.title ?? "Destination",
    price: typeof d.priceFrom === "number" ? `₹${d.priceFrom}/-` : d.priceFrom ?? "₹NA/-",
    img: d.imageSrc ?? "",
    size: d.sizeDesktop ?? 3,
    destination: d.destination,
  }));

  return (
    <Section
      title="INTERNATIONAL DESTINATIONS"
      viewAllUrl="/destinations?type=international"
    >
      <div className="">
        <CollageGrid items={items} />
      </div>
    </Section>
  );
};

export default InternationalDestinations;
