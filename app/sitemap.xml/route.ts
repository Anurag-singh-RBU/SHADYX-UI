// app/sitemap.xml/route.ts

import { type NextRequest } from "next/server";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(request: NextRequest) {
  const baseUrl = "https://shadyxui.in";

  const pages = [
    "/", 
    "/component", 
    "/colors", 
    "/docs", 
    "/about"
    // 👉 yahan tu apne sare important static pages add kar
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map(
          (path) => `
        <url>
          <loc>${baseUrl}${path}</loc>
          <changefreq>monthly</changefreq>
          <priority>0.8</priority>
        </url>`
        )
        .join("")}
    </urlset>
  `;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
