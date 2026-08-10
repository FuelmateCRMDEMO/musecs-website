import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/authority', '/authority/'],
      },
      {
        userAgent: ['GPTBot', 'ChatGPT-User', 'Google-Extended', 'Anthropic-ai', 'PerplexityBot'],
        allow: '/',
        disallow: ['/authority', '/authority/'],
      }
    ],
    sitemap: 'https://www.musecs.com/sitemap.xml',
  };
}
