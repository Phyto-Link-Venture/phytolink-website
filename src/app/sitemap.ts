import type { MetadataRoute } from "next";
import { SITE_URL, TOOLS } from "@/lib/site";
import { getUpdates } from "@/data/chatbranch-updates";

export default function sitemap(): MetadataRoute.Sitemap {
  const latestUpdate = getUpdates()[0]?.date;
  const updated = latestUpdate ? new Date(latestUpdate) : new Date();
  const page = (path: string, priority: number, lastModified: Date = updated) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    priority,
  });
  return [
    page("/", 1),
    page("/chatbranch", 0.9),
    page("/chatbranch/updates", 0.7),
    page("/iot-system", 0.5),
    page("/tools", 0.6),
    ...Object.keys(TOOLS).map((slug) => page(`/tools/${slug}`, 0.5)),
    page("/contact", 0.6),
    page("/terms", 0.2),
    page("/privacy", 0.2),
  ];
}
