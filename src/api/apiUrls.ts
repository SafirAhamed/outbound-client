// Centralized API endpoints. Replace with real URLs as needed.
export const API_URLS = {
  homePage: "/homepage",
  destinations: "/destinations",
  packages: "/packages",
  packageByDestination: (slug: string) => `/packages/${slug}`,
  search: "/search",
  packageDetail: (id: string) => `/packages/${id}`,
  relatedPackages: (id: string) => `/packages/${id}/related`,
};
