const fs = require("fs");
const path = require("path");

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.pietrofranchitti.com";

const routes = [
  { path: "/", changefreq: "monthly", priority: "1.0" },
  { path: "/chi_sono", changefreq: "yearly", priority: "0.7" },
  { path: "/portfolio", changefreq: "monthly", priority: "0.9" },
  { path: "/cookie-policy", changefreq: "yearly", priority: "0.3" },
];

const lastmod = new Date().toISOString();

const xmlBody = routes
  .map(
    (route) => `  <url>
    <loc>${siteUrl}${route.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  )
  .join("\n");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlBody}
</urlset>
`;

const sitemapPath = path.join(process.cwd(), "public", "sitemap.xml");

fs.writeFileSync(sitemapPath, sitemap.trimEnd() + "\n", "utf8");

const robotsTxt = `User-agent: *
Allow: /
Sitemap: ${siteUrl}/sitemap.xml
`;

fs.writeFileSync(
  path.join(process.cwd(), "public", "robots.txt"),
  robotsTxt,
  "utf8"
);

console.log(`Sitemap generated at ${sitemapPath}`);
