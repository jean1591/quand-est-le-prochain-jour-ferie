import { MetadataRoute } from 'next'

const baseUrl = 'https://quand-est-le-prochain-jour-ferie.jeanrobertou.com'
const changeFrequency = 'monthly'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency,
      priority: 1,
    },
    {
      url: `${baseUrl}/jours-feries-2025`,
      lastModified: new Date(),
      changeFrequency,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/jours-feries-2026`,
      lastModified: new Date(),
      changeFrequency,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/jours-feries-2027`,
      lastModified: new Date(),
      changeFrequency,
      priority: 0.7,
    },
  ]
}
