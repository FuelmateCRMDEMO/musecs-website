import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: ['GPTBot', 'ChatGPT-User', 'Google-Extended', 'Anthropic-ai', 'PerplexityBot'],
        allow: '/',
      }
    ],
    sitemap: 'https://www.musecs.com/sitemap.xml',
  };
}
