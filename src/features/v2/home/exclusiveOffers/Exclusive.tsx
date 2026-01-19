"use client";

import Section from "@/src/components/common/layout/Section";
import ExclusiveOffersCarousel from "./ExclusiveOffersCarousel";
import ExclusiveOfferSlide, { type ExclusiveSlide } from "./ExclusiveOfferSlide";

export default function Exclusive() {
  const slides: ExclusiveSlide[] = [
    {
      _id: 1,
      img_src: "/images/joinwhatsappbanner.jpg",
      title: "Exclusive Offer 1",
      subtitle: "Limited-time savings on curated trips.",
      buttonText: "View Offer",
      link: "/packages",
      titleColor: "#FFFFFF",
      subtitleColor: "rgba(255,255,255,0.9)",
      buttonColor: "#06a15c",
      buttonTextColor: "#ffffff",
      contentPosition: "bottom-left",
      overlay: "40",
      alt: "Exclusive offer banner",
    },
    {
      _id: 2,
      img_src: "/images/statsbgimg.png",
      title: "Exclusive Offer 2",
      subtitle: "Handpicked experiences for your next getaway.",
      buttonText: "Explore",
      link: "/packages",
      titleColor: "#FFFFFF",
      subtitleColor: "rgba(255,255,255,0.9)",
      buttonColor: "#052210",
      buttonTextColor: "#ffffff",
      contentPosition: "middle-center",
      overlay: "60",
      alt: "Travel background",
    },
    {
      _id: 3,
      img_src: "/images/about/cashValue.jpg",
      title: "Exclusive Offer 3",
      subtitle: "Best value packages with flexible options.",
      buttonText: "See Deals",
      link: "/packages",
      titleColor: "#052210",
      subtitleColor: "#052210",
      buttonColor: "#06a15c",
      buttonTextColor: "#ffffff",
      contentPosition: "top-left",
      overlay: "20",
      alt: "Exclusive cash value",
    },
    {
      _id: 4,
      img_src: "/images/about/partnerHand.jpg",
      title: "Exclusive Offer 4",
      subtitle: "Trusted partners, seamless journeys.",
      buttonText: "Book Now",
      link: "/packages",
      titleColor: "#FFFFFF",
      subtitleColor: "rgba(255,255,255,0.9)",
      buttonColor: "#06a15c",
      buttonTextColor: "#ffffff",
      contentPosition: "bottom-right",
      overlay: "40",
      alt: "Travel partners",
    },
  ];

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
