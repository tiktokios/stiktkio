import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { autolinkConfig } from "./plugins/rehype-autolink-config";
import rehypeSlug from "rehype-slug";
import astroI18next from "astro-i18next";
import alpinejs from "@astrojs/alpinejs";
import AstroPWA from "@vite-pwa/astro";
import icon from "astro-icon";
import solidJs from "@astrojs/solid-js";

import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
});




// https://astro.build/config
export default defineConfig({
  site: "https://tiktokio.cam",
  vite: {
    define: {
      __DATE__: `'${new Date().toISOString()}'`
    }
  },
  output: "hybrid",
  integrations: [tailwind(), sitemap(), astroI18next(), alpinejs(), sitemap({
      filter: (page) =>
page !== 'https://tiktokio.cam/animated/' &&   
page !== 'https://tiktokio.cam/animated/' &&
page !== 'https://tiktokio.cam/blog/category/ai%20and%20ml/' &&
page !== 'https://tiktokio.cam/blog/category/frameworks/' &&
page !== 'https://tiktokio.cam/blog/category/marketing/' &&
page !== 'https://tiktokio.cam/blog/category/tech/' &&
page !== 'https://tiktokio.cam/blog/category/tutorials/' &&
page !== 'https://tiktokio.cam/blog/category/frameworks/' &&
page !== 'https://tiktokio.cam/blog/tag/advertising/' &&
page !== 'https://tiktokio.cam/blog/tag/ai/' &&
page !== 'https://tiktokio.cam/blog/tag/alpinejs/' &&
page !== 'https://tiktokio.cam/blog/tag/astro/' &&
page !== 'https://tiktokio.cam/blog/tag/chatbots/' &&
page !== 'https://tiktokio.cam/blog/tag/decapcms/' &&
page !== 'https://tiktokio.cam/blog/tag/frontend/' &&
page !== 'https://tiktokio.cam/blog/tag/machinelearning/' &&
page !== 'https://tiktokio.cam/blog/tag/socialmedia/' &&
page !== 'https://tiktokio.cam/blog/tag/tailwindcss/' &&
page !== 'https://tiktokio.cam/blog/tag/tiktok/' &&
page !== 'https://tiktokio.cam/blog/tag/tiktok%20video%20downloader%20without%20watermark/' &&
page !== 'https://tiktokio.cam/blog/tag/tiktokio/' &&
page !== 'https://tiktokio.cam/blog/tag/webdev/' &&
page !== 'https://tiktokio.cam/blog/tag/tiktok/' &&
page !== 'https://tiktokio.cam/de/animated/' &&
page !== 'https://tiktokio.cam/de/login/' &&
page !== 'https://tiktokio.cam/es/animated/' &&
page !== 'https://tiktokio.cam/es/login/' &&
page !== 'https://tiktokio.cam/es/pricing/' &&
page !== 'https://tiktokio.cam/fr/animated/' &&
page !== 'https://tiktokio.cam/fr/login/' &&
page !== 'https://tiktokio.cam/fr/pricing/' &&
page !== 'https://tiktokio.cam/hi/animated/' &&
page !== 'https://tiktokio.cam/hi/login/' &&
page !== 'https://tiktokio.cam/hi/pricing/' &&
page !== 'https://tiktokio.cam/id/animated/' &&
page !== 'https://tiktokio.cam/id/login/' &&
page !== 'https://tiktokio.cam/id/pricing/' &&
page !== 'https://tiktokio.cam/it/animated/' &&
page !== 'https://tiktokio.cam/it/blog/category/frameworks/' &&
page !== 'https://tiktokio.cam/it/blog/category/ia%20e%20ml/' &&
page !== 'https://tiktokio.cam/it/blog/category/marketing/' &&
page !== 'https://tiktokio.cam/it/blog/category/tutorials/' &&
page !== 'https://tiktokio.cam/it/blog/harnessing-the-power-of-tiktok/' &&
page !== 'https://tiktokio.cam/it/blog/introducing-decap-cms-your-go-to-solution-for-content-management/' &&
page !== 'https://tiktokio.cam/it/blog/introduction-to-astro-a-new-front-end-framework/' &&
page !== 'https://tiktokio.cam/it/blog/simplifying-front-end-interactivity-with-alpine-js/' &&
page !== 'https://tiktokio.cam/it/blog/tag/advertising/' &&
page !== 'https://tiktokio.cam/it/blog/tag/alpinejs/' &&
page !== 'https://tiktokio.cam/it/blog/tag/apprendimentoautomatico/' &&
page !== 'https://tiktokio.cam/it/blog/tag/astro/' &&
page !== 'https://tiktokio.cam/it/blog/tag/chatbot/' &&
page !== 'https://tiktokio.cam/it/blog/tag/decapcms/' &&
page !== 'https://tiktokio.cam/it/blog/tag/frontend/' &&
page !== 'https://tiktokio.cam/it/blog/tag/ia/' &&
page !== 'https://tiktokio.cam/it/blog/tag/socialmedia/' &&
page !== 'https://tiktokio.cam/it/blog/tag/tailwindcss/' &&
page !== 'https://tiktokio.cam/it/blog/tag/tiktok/' &&
page !== 'https://tiktokio.cam/it/blog/tag/webdev/' &&
page !== 'https://tiktokio.cam/it/blog/tag/alpinejs/' &&
page !== 'https://tiktokio.cam/it/blog/the-power-and-potential-of-chatgpt/' &&
page !== 'https://tiktokio.cam/it/blog/unleashing-the-power-of-tailwind-css/' &&
page !== 'https://tiktokio.cam/it/login/' &&
page !== 'https://tiktokio.cam/it/pricing/' &&
page !== 'https://tiktokio.cam/ko/animated/' &&
page !== 'https://tiktokio.cam/ko/login/' &&
page !== 'https://tiktokio.cam/ko/pricing/' &&
page !== 'https://tiktokio.cam/login/' &&
page !== 'https://tiktokio.cam/ms/animated/' &&
page !== 'https://tiktokio.cam/ms/login/' &&
page !== 'https://tiktokio.cam/ms/pricing/' &&
page !== 'https://tiktokio.cam/nl/animated/' &&
page !== 'https://tiktokio.cam/nl/login/' &&
page !== 'https://tiktokio.cam/nl/pricing/' &&
page !== 'https://tiktokio.cam/pricing/' &&
page !== 'https://tiktokio.cam/pt/animated/' &&
page !== 'https://tiktokio.cam/pt/login/' &&
page !== 'https://tiktokio.cam/pt/pricing/' &&
page !== 'https://tiktokio.cam/ru/animated/' &&
page !== 'https://tiktokio.cam/ru/login/' &&
page !== 'https://tiktokio.cam/ru/pricing/' &&
page !== 'https://tiktokio.cam/tl/animated/' &&
page !== 'https://tiktokio.cam/tl/login/' &&
page !== 'https://tiktokio.cam/tl/pricing/' &&
page !== 'https://tiktokio.cam/tr/animated/' &&
page !== 'https://tiktokio.cam/ar/animated/' &&
page !== 'https://tiktokio.cam/tr/login/' &&
page !== 'https://tiktokio.cam/ar/login/' &&
page !== 'https://tiktokio.cam/tr/pricing/' &&
page !== 'https://tiktokio.cam/de/pricing/' &&
page !== 'https://tiktokio.cam/ar/pricing/',
    }),



                 
    AstroPWA({
    mode: "production",
    base: "/",
    scope: "/",
    includeAssets: ["favicon.ico"],
    registerType: "autoUpdate",
    manifest: {
      name: "Tiktokio - TikTok Downloader - Download TikTok Videos Without Watermark",
      short_name: "Tikokio",
      theme_color: "#ffffff",
      icons: [{
        src: "pwa-192x192.webp",
        sizes: "192x192",
        type: "image/webp"
      }, {
        src: "pwa-512x512.webp",
        sizes: "512x512",
        type: "image/webp"
      }, {
        src: "pwa-512x512.webp",
        sizes: "512x512",
        type: "image/webp",
        purpose: "any maskable"
      }]
    },
    workbox: {
      navigateFallback: "/404",
      globPatterns: ["*.js"]
    },

    redirects: {
    '/404': {
      status: 404,
      destination: '/'
    }
  },

    devOptions: {
      enabled: false,
      navigateFallbackAllowlist: [/^\/404$/],
      suppressWarnings: true
    }
  }), icon(), solidJs()],
  markdown: {
    rehypePlugins: [rehypeSlug,
    // This adds links to headings
    [rehypeAutolinkHeadings, autolinkConfig]]
  },
  experimental: {
    contentCollectionCache: true
  },
  
  adapter: vercel()
});
