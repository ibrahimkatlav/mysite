import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import AutoImport from "astro-auto-import";
import { defineConfig } from "astro/config";
import remarkCollapse from "remark-collapse";
import remarkToc from "remark-toc";
import config from "./src/config/config.json";
import keystatic from '@keystatic/astro';
import netlify from '@astrojs/netlify';














// build alırken 
// trailing > always
// keystatic sil
// output sil


// https://astro.build/config
export default defineConfig({
  compressHTML: false,
  site: config.site.base_url ? config.site.base_url : "https://ibrahimkatlav.com",
  base: config.site.base_path ? config.site.base_path : "/",
  trailingSlash: "never",
  output: "server",


  integrations: [react(), sitemap(), keystatic(), mdx(),  tailwind({
    config: {
      applyBaseStyles: false
    }
  }), AutoImport({
    imports: ["@/shortcodes/Button", "@/shortcodes/Accordion", "@/shortcodes/Notice", "@/shortcodes/Sariarkaplan", "@/shortcodes/Video", "@/shortcodes/Youtube", "@/shortcodes/Tabs", "@/shortcodes/Tab"]
  }), ],

  markdown: {
    remarkPlugins: [remarkToc, [remarkCollapse, {
      test: "Table of contents"
    }]],
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true
    },
    extendDefaultPlugins: true
  },

  adapter: netlify(),
});