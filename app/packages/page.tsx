import Header from "@/src/components/header/Header";
import PackagesListSuspense from "@/src/features/packages/PackagesListSuspense";

const Page = () => {
  return (
    <main className="w-full min-h-screen">
      <section
        id="section-1-header"
        aria-label="Header Section"
        className="relative"
      >
        {/* Fixed background layer (low opacity, does not affect content opacity) */}
        <div
          aria-hidden="true"
          className="fixed inset-0 z-0 bg-[url('/images/packagesBgImageBlue.png')] bg-cover bg-center bg-no-repeat opacity-[0.2] pointer-events-none"
        />

        <div className="relative z-10">
          <Header
            title="Packages"
            subtitle="Find the perfect travel package for your next adventure."
            backgroundImage="/images/packagesBgImageBlue.png"
            showSearch
            searchValue=""
            fixedBackground
            overlayStrength="strong"
            // onSearchChange={() => {}}
          />
        </div>
      </section>

      <section
        id="section-2-content"
        aria-label="Destinations and Filters"
        className="relative z-10 max-w-7xl mx-auto"
        
      >
        <PackagesListSuspense />
      </section>
    </main>
  );
};

export default Page;
