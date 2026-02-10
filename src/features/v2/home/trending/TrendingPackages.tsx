"use client";
import Carousel from "@/src/components/common/carousel/Carousel";
import { useAppData } from "@/src/context/AppDataContext";
import { packages } from "@/src/data/packages";
import PackagesSaleMiniCard from "@/src/features/packages/PackageCard";
import { Package } from "@/types/packages.types";

interface TrendingPackagesProps {
  viewAllUrl?: string;
}

const TrendingPackages = ({viewAllUrl = "#"}: TrendingPackagesProps) => {
  const {state} = useAppData();
  
  const trendingPackages = state.homePage?.trendingPackages;
  return (
    <Carousel
      title="Trending Packages"
      items={trendingPackages || []}
      className="px-4 md:px-6  max-w-screen-2xl mx-auto"
      viewAll={viewAllUrl}
      renderCard={(item: Package) => (
        <div key={item._id} className="min-w-[300px] max-w-[300px] shrink-0">
          <PackagesSaleMiniCard
            thumbnail={item.thumbnail}
            title={item.title}
            rating={item.rating}
            subtitle={item.description}
            days={item.days}
            nights={item.nights}
            bestFor={item.bestFor}
            price={item.price}
            link={`/package/${item._id}`}
            portrait
            detailed
            original_price={item.original_price}
            discounted_price={item.discounted_price}
          />
        </div>
      )}
    />
  );
};

export default TrendingPackages;
