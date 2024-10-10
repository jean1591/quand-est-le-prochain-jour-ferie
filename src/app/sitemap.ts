import { MetadataRoute } from "next";

const baseUrl = "https://quand-est-le-prochain-jour-ferie.jeanrobertou.com";
const changeFrequency = "monthly";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency,
      priority: 1,
    },
  ];
}
