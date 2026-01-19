"use client";

import Section from "@/src/components/common/layout/Section";
import ExclusiveOffersCarousel from "./ExclusiveOffersCarousel";
import ExclusiveOfferSlide, { type ExclusiveSlide } from "./ExclusiveOfferSlide";

export default function Exclusive() {
  const slides: ExclusiveSlide[] = [
    {
      _id: 1,
      img_src: "https://afar.brightspotcdn.com/dims4/default/0c01054/2147483647/strip/true/crop/3000x1592+0+323/resize/2880x1528!/format/webp/quality/90/?url=https%3A%2F%2Fk3-prod-afar-media.s3.us-west-2.amazonaws.com%2Fbrightspot%2Fb2%2Ff4%2F9a1ebe3f427f8e5eb937f8df8998%2Ftravelguides-maldives-videomediastudioeurope-shutterstock.jpg",
      title: "Maldives Islands Getaway",
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
      img_src: "https://dynamic-media.tacdn.com/media/photo-o/2e/f9/36/f4/caption.jpg?w=1400&h=1000&s=1",
      title: "The Gate of Heaven and East Bali Trip",
      subtitle: "Handpicked experiences for your next Bali trip.",
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
      img_src: "https://d3hne3c382ip58.cloudfront.net/files/uploads/bookmundi/resized/cmsfeatured/malaysia-tour-highlights-1502178114-785X440.jpg?width=1536&quality=75",
      title: "Kek Lok Si in Penang of Malaysia",
      subtitle: "Exclusive cash value offers on select packages.",
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
      img_src: "https://content.r9cdn.net/rimg/dimg/a9/dd/d6b29241-city-44818-166a7453734.jpg?width=1366&height=768&xhint=1600&yhint=1049&crop=true",
      title: "Munnar Hill Station Retreat",
      subtitle: "Exclusive deals on scenic hill stations.",
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
