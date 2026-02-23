// Data is sourced from public/data/destinations.json — managed by the Admin app.
import destinationsJson from "../../public/data/destinations.json";
import { Destination } from "@/types/destinations.types";

export const INTERNATIONAL_DESTINATIONS: Destination[] = destinationsJson.international as Destination[];
export const DOMESTIC_DESTINATIONS: Destination[] = destinationsJson.domestic as Destination[];
