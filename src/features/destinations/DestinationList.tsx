"use client";

import Section from "@/src/components/common/layout/Section";
import DestinationGridSkeleton from "@/src/skeleton/DestinationGridSkeleton";
import { API_URLS } from "@/src/api/apiUrls";
import { useToast } from "@/src/context/ToastContext";
import { DOMESTIC_DESTINATIONS, INTERNATIONAL_DESTINATIONS } from "@/src/data/internationalDestinations";
import { fetchWithRetry } from "@/src/lib/fetchWithRetry";
import { Destination, DestinationItem } from "@/types/destinations.types";
import React, { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import DestinationPageListCard from "@/src/components/common/slidesAndCards/DestinationListPageCard";

const spanDesktop: Record<number, string> = {
  3: "md:col-span-3",
  4: "md:col-span-4",
  5: "md:col-span-5",
  6: "md:col-span-6",
  12: "md:col-span-12",
};

const spanMobile: Record<number, string> = {
  6: "col-span-6",
  12: "col-span-12",
};

const DEFAULT_DESKTOP_HEIGHT = 260;
const DEFAULT_MOBILE_HEIGHT = 140;
const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1400&auto=format&fit=crop";

const COLLAGE_LAYOUT: Array<{ sizeMobile: number; sizeDesktop: number }> = [
  { sizeMobile: 6, sizeDesktop: 3 },
  { sizeMobile: 6, sizeDesktop: 6 },
  { sizeMobile: 6, sizeDesktop: 3 },
  { sizeMobile: 6, sizeDesktop: 4 },
  { sizeMobile: 6, sizeDesktop: 4 },
  { sizeMobile: 6, sizeDesktop: 4 },
];

const DestinationList: React.FC = () => {
  const searchParams = useSearchParams();

  const { showToast } = useToast();

  const typeParam = searchParams.get("type");

  const normalizedType = (typeParam ?? "").toLowerCase();
  const isDomestic = normalizedType === "domestic";
  const isInternational = normalizedType === "international";

  const categoryLabel = isDomestic ? "Domestic" : "International";
  const packageCountLabel = "5+ packages";

  const defaultTitle = isDomestic
    ? "Domestic Destinations"
    : isInternational
      ? "International Destinations"
      : "Destinations";

  const defaultItems = useMemo<Destination[]>(
    () => (isDomestic ? DOMESTIC_DESTINATIONS : INTERNATIONAL_DESTINATIONS),
    [isDomestic],
  );

  const [title, setTitle] = useState(defaultTitle);
  const [items, setItems] = useState<Destination[]>(defaultItems);
  const [loading, setLoading] = useState(true);
  const [hasLoadedOnce, setHasLoadedOnce] = useState(false);

  useEffect(() => {
    const loadDestinations = async () => {
      try {
        setLoading(true);
        setTitle(defaultTitle);

        const apiQuery = new URLSearchParams();
        if (typeParam) {
          apiQuery.set("type", typeParam.toUpperCase());
        }

        const apiUrl = `${API_URLS.destinations}?${apiQuery.toString()}`;
        const data = await fetchWithRetry<{ data: DestinationItem[] }>(apiUrl, 3);

        const rawItems = Array.isArray(data.data) ? data.data : [];

        const mapped: Destination[] = rawItems.map((raw, index) => {
          const layout = COLLAGE_LAYOUT[index % COLLAGE_LAYOUT.length];

          return {
            id: raw.id || raw.place || String(index),
            title: raw.place ?? "Unknown Place",
            subtitle: raw.country ?? "",
            imageSrc:
              Array.isArray(raw.images) && raw.images.length > 0
                ? raw.images[0]
                : FALLBACK_IMAGE,
            href: raw.place ? `/packages/${encodeURIComponent(raw.place)}` : "#",
            priceFrom: typeof raw.amount === "number" ? raw.amount : undefined,
            showOverlay: true,
            sizeMobile: layout.sizeMobile,
            sizeDesktop: layout.sizeDesktop,
          };
        });

        setItems(defaultItems);
        // setItems(mapped.length > 0 ? mapped : defaultItems);
        setHasLoadedOnce(true);
      } catch (err: unknown) {
        showToast(
          err instanceof Error ? err.message : "Failed to load destinations",
          "error",
        );
      } finally {
        setLoading(false);
      }
    };

    loadDestinations();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typeParam, defaultItems, defaultTitle]);

  return (
    <Section className="w-full mb-10" title={title}>
      {loading && !hasLoadedOnce && items.length === 0 ? (
        <DestinationGridSkeleton />
      ) : items.length === 0 ? (
        <div className="text-center text-gray-600 py-16">
          No destinations found.
        </div>
      ) : (
        <div className="mt-0 lg:mt-8 grid grid-cols-12 gap-3 md:gap-4">
          {items.map((item) => {
            const mobileCls = spanMobile[item.sizeMobile || 6];
            const desktopCls = spanDesktop[Math.round(item.sizeDesktop || 4)];

            return (
              <div key={item.id} className={`${mobileCls} ${desktopCls}`}>
                <DestinationPageListCard
                  item={item}
                  mobileHeight={DEFAULT_MOBILE_HEIGHT}
                  desktopHeight={DEFAULT_DESKTOP_HEIGHT}
                  categoryLabel={categoryLabel}
                  packageCountLabel={packageCountLabel}
                />
              </div>
            );
          })}
        </div>
      )}
    </Section>
  );
};

export default DestinationList;
