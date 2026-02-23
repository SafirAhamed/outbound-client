// Data is sourced from public/data/packages.json — managed by the Admin app.
// The admin pushes changes to git; re-deploy picks up the updated JSON.
import packagesJson from "../../public/data/packages.json";
import { Package } from "@/types/packages.types";

export const packages: Package[] = packagesJson as unknown as Package[];
