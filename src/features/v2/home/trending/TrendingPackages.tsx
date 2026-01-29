"use client";
import Carousel from "@/src/components/common/carousel/Carousel";
import { packages } from "@/src/data/packages";
import PackagesSaleMiniCard from "@/src/features/packages/PackageCard";
import { Package } from "@/types/packages.types";

interface TrendingPackagesProps {
  viewAllUrl?: string;
}

const TrendingPackages = ({viewAllUrl = "#"}: TrendingPackagesProps) => {
  return (
    <Carousel
      title="Trending Packages"
      items={packages}
      className="px-4 md:px-6  max-w-screen-2xl mx-auto"
      viewAll={viewAllUrl}
      renderCard={(item: Package, index: number) => (
        <div key={index} className="min-w-[300px] max-w-[300px] shrink-0">
          <PackagesSaleMiniCard
            id={item.link}
            image={item.image}
            title={item.title}
            rating={item.rating}
            subtitle={item.description}
            days={item.days}
            nights={item.nights}
            bestFor={item.bestFor}
            price={item.price}
            link={item.link}
            portrait
            detailed
            original_price={item.originalPrice}
            discounted_price={item.discountedPrice}
          />
        </div>
      )}
    />
  );
};

export default TrendingPackages;
