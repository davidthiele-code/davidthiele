import { defineConfig } from 'astro/config';
import { writeFileSync } from 'fs';

const customSitemap = {
  name: 'custom-sitemap',
  hooks: {
    'astro:build:done': ({ pages, dir }) => {
      const siteUrl = 'https://davidthiele.com';
      const exclude = ['404'];

      const urls = pages
        .filter(p => !exclude.some(ex => p.pathname.includes(ex)))
        .map(p => {
          const clean = p.pathname.replace(/^\/|\/$/g, '');
          const loc = clean === '' ? siteUrl : `${siteUrl}/${clean}`;
          const priority =
            clean === '' ? '1.0' :
            clean === 'hire-production-mixing-mastering' ? '0.9' :
            clean === 'recordings' ? '0.9' :
            '0.8';
          return `  <url>\n    <loc>${loc}</loc>\n    <changefreq>monthly</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
        })
        .join('\n');

      const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
      writeFileSync(new URL('sitemap.xml', dir), xml);
      console.log('✓ sitemap.xml generated');
    }
  }
};

export default defineConfig({
  site: 'https://davidthiele.com',
  output: 'static',
  trailingSlash: 'never',
  integrations: [customSitemap],
});
