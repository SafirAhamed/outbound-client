"use client";

import Section from "@/src/components/common/layout/Section";
import ExclusiveOffersCarousel from "./ExclusiveOffersCarousel";
import ExclusiveOfferSlide from "./ExclusiveOfferSlide";
import { useAppData } from "@/src/context/AppDataContext";
import { EXCLUSIVE_OFFERS } from "@/src/data/exclusiveOffers";
import { ExclusiveSlide } from "@/types/homePage.types";

export default function Exclusive() {
  const {state} = useAppData();
  const slides: ExclusiveSlide[] = state.homePage?.exclusiveOffers || EXCLUSIVE_OFFERS;

  return (
    <Section title="Exclusive Offers" titleSize="large" lessSpace centerTitle>
      <div className="my-6">
        <ExclusiveOffersCarousel
          slides={slides}
          renderSlide={(slide, idx) => (
            <ExclusiveOfferSlide slide={slide} priority={idx === 0} />
          )}
        />
      </div>
    </Section>
  );
}
