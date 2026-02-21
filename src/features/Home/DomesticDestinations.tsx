"use client";

import CollageGrid from "@/src/components/common/grid/CollageGrid";
import Section from "@/src/components/common/layout/Section";
import { useAppData } from "@/src/context/AppDataContext";
import type { CollageItem } from "@/types/homePage.types";
import type { DestinationCardItem } from "@/types/destinations.types";

const DomesticDestinations = () => {
  const { state } = useAppData();

  const data: DestinationCardItem[] = state.homePage?.domesticDestinations ?? [];
  const items: CollageItem[] = data.map((d) => ({
    title: d.title ?? "Destination",
    price: typeof d.priceFrom === "number" ? `₹${d.priceFrom}/-` : d.priceFrom ?? "₹NA/-",
    img: d.imageSrc ?? "",
    size: d.sizeDesktop ?? 3,
    destination: d.destination,
  }));

  return (
    <Section
      title="DOMESTIC DESTINATIONS"
      viewAllUrl="/destinations?type=domestic"
    >
      <div className="">
        <CollageGrid items={items} />
      </div>
    </Section>
  );
};

export default DomesticDestinations;
