import DestinationCollage from "@/src/components/common/grid/DestinationsCollage";
import GlobalLoaderWrapper from "@/src/components/common/layout/GlobalLoaderWrapper";
import VideoCard from "@/src/components/VideoCard";
import {
  CUSTOMER_GALLERY_ROW1,
  CUSTOMER_GALLERY_ROW2,
} from "@/src/data/customerGallery";
import {
  DOMESTIC_DESTINATIONS,
  INTERNATIONAL_DESTINATIONS,
} from "@/src/data/internationalDestinations";
import { VIDEO_CARD_FEATURE } from "@/src/data/videoCard";
import FloatingAction from "@/src/features/Home/components/FloatingAction";
import TrendingDestination from "@/src/features/Home/TrendingDestination";
import CompanyStats from "@/src/features/v2/home/CompanyStats";
import CustomerGallerySection from "@/src/features/v2/home/customerGallery/CustomerGallerySection";
import CustomerStoriesMosaic from "@/src/features/v2/home/customerStoriesMosaic/CustomerStoriesMosaic";
import Exclusive from "@/src/features/v2/home/exclusiveOffers/Exclusive";
import FAQSection from "@/src/features/v2/home/faqs/FAQSection";
import HeroBanner from "@/src/features/v2/home/HeroBanner";
import PlanYourTripSection from "@/src/features/v2/home/PlanYourTripSection";
import VisualTrustSection from "@/src/features/v2/home/VisualTrustSection";
import TripStylesSection from "@/src/features/v2/home/TripStylesSection";
import EbookPromoBanner from "@/src/features/v2/home/promotionBanner/EbookPromoBanner";
import QuoteOne from "@/src/features/v2/home/quoteBanners/QuoteOne";
import ReviewBadges from "@/src/features/v2/home/reviews/ReviewBadges";
import TestimonialSection from "@/src/features/v2/home/reviews/TestimonialSection";
import TrendingPackages from "@/src/features/v2/home/trending/TrendingPackages";
// import AdditionalVideoBannerOne from "@/src/features/Home/AdditionalVideoBannerOne";
// import BookYourTickets from "@/src/features/Home/BookYourTickets";
// import CompanyStats from "@/src/features/Home/CompanyStats";
// import DomesticDestinations from "@/src/features/Home/DomesticDestinations";
// import FloatingAction from "@/src/features/Home/components/FloatingAction";
// import HeroBanner from "@/src/features/Home/HeroBanner";
// import InternationalDestinations from "@/src/features/Home/InternationalDestinations";
// import JoinCommunityBanner from "@/src/features/Home/JoinCommunityBanner";
// import OurClients from "@/src/features/Home/OurClients";
// import Testimonials from "@/src/features/Home/Testimonials";
// import TopCelebs from "@/src/features/Home/TopCelebs";
// import TrendingDestination from "@/src/features/Home/TrendingDestination";

export default function Home() {
  return (
    <main className="bg-white">
      <GlobalLoaderWrapper>
        {/* <HeroBanner />
        <TrendingDestination />
        <TopCelebs />
        <InternationalDestinations />
        <DomesticDestinations />
        <AdditionalVideoBannerOne />
        <BookYourTickets />
        <OurClients />
        <CompanyStats />
        <Testimonials />
        <JoinCommunityBanner />
        <FloatingAction /> */}

        {/* V2 */}

        <HeroBanner />
        <TrendingDestination />
        <CompanyStats />
        <VideoCard />
        <Exclusive />
        <div className="px-4 md:px-6 my-6 max-w-screen-2xl mx-auto">
          <QuoteOne value={1} />
        </div>
        <PlanYourTripSection />
        <CustomerGallerySection
          className="p-10 bg-[#FBF9F6] max-w-screen-2xl mx-auto overflow-hidden"
        />
        {/* <VisualTrustSection />
        <TripStylesSection /> */}
        <DestinationCollage
          type="international"
          heading="International Destinations"
          className="my-6"
          viewAllUrl="/destinations?type=international"
        />

        <div className="px-4 md:px-6 my-6  max-w-screen-2xl mx-auto">
          <QuoteOne value={2} />
        </div>
        <TrendingPackages viewAllUrl="/packages"/>
        <DestinationCollage
          type="domestic"
          heading="Domestic Destinations"
          className="my-6"
          viewAllUrl="/destinations?type=domestic"
        />
        <EbookPromoBanner className="max-w-screen-2xl mx-auto px-4 lg:px-6" />
        <CustomerStoriesMosaic />
        <FAQSection />
        <TestimonialSection />
        <ReviewBadges />
        <FloatingAction />
      </GlobalLoaderWrapper>
    </main>
  );
}
