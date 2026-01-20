import Header from "@/src/components/header/Header";
import PackagesListSuspense from "@/src/features/packages/PackagesListSuspense";

const Page = () => {
  return (
    <main className="w-full bg-white">
      <section
        id="section-1-header"
        aria-label="Header Section"
        className="bg-[#0c4423]"
      >
        <Header
          title="Packages"
          subtitle=""
          backgroundImage=""
          showSearch
          searchValue=""
          // onSearchChange={() => {}}
        />
      </section>

      <section
        id="section-2-content"
        aria-label="Destinations and Filters"
        className="max-w-7xl mx-auto"
      >
        <PackagesListSuspense />
      </section>
    </main>
  );
};

export default Page;
