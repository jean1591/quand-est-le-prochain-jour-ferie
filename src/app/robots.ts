import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap:
      "https://quand-est-le-prochain-jour-ferie.jeanrobertou.com/sitemap.xml",
  };
}
