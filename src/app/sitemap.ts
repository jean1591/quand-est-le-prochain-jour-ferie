import { MetadataRoute } from 'next'

const baseUrl = 'https://quand-est-le-prochain-jour-ferie.fr'
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
      url: `${baseUrl}/jours-feries-2026`,
      lastModified: new Date(),
      changeFrequency,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/jours-feries-2027`,
      lastModified: new Date(),
      changeFrequency,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/pourquoi-le-1er-janvier-est-ferie`,
      lastModified: new Date(),
      changeFrequency,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/pourquoi-le-lundi-de-paques-est-ferie`,
      lastModified: new Date(),
      changeFrequency,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/pourquoi-le-1er-mai-est-ferie`,
      lastModified: new Date(),
      changeFrequency,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/pourquoi-le-8-mai-est-ferie`,
      lastModified: new Date(),
      changeFrequency,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/pourquoi-l-ascension-est-ferie`,
      lastModified: new Date(),
      changeFrequency,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/pourquoi-la-pentecote-est-ferie`,
      lastModified: new Date(),
      changeFrequency,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/pourquoi-le-14-juillet-est-ferie`,
      lastModified: new Date(),
      changeFrequency,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/pourquoi-le-15-aout-est-ferie`,
      lastModified: new Date(),
      changeFrequency,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/pourquoi-le-1er-novembre-est-ferie`,
      lastModified: new Date(),
      changeFrequency,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/pourquoi-le-11-novembre-est-ferie`,
      lastModified: new Date(),
      changeFrequency,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/pourquoi-le-25-decembre-est-ferie`,
      lastModified: new Date(),
      changeFrequency,
      priority: 0.7,
    },
  ]
}
