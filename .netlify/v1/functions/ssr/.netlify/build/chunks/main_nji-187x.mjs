import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent, d as addAttribute, b as createAstro, k as renderSlot, l as renderHead, u as unescapeHTML, F as Fragment } from './astro/server_C89fityf.mjs';
import 'kleur/colors';
import 'clsx';
import 'github-slugger';
import { marked } from 'marked';
/* empty css                                                            */

const $$Logo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<a href="/" class="h-5 text-base group relative z-30 flex items-center space-x-1.5 text-black dark:text-white font-semibold">
  <span class="text-xl -translate-y-0.5 group-hover:-rotate-12 group-hover:scale-[1.2] ease-in-out duration-300">✦</span>
  <!-- Logo Text -->
  <span class="-translate-y-0.5"> aria</span>
</a>`;
}, "C:/Users/KATLAV/Documents/GitHub/mysite/src/components/logo.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="text-gray-700 bg-white border-t sm:mt-20 dark:bg-neutral-950 border-neutral-200 dark:border-neutral-800">
  <div class="container flex flex-col items-center py-8 mx-auto px-7 max-w-7xl sm:flex-row">
    ${renderComponent($$result, "Logo", $$Logo, {})}
    <p class="mt-4 text-sm text-neutral-700 dark:text-neutral-100 sm:ml-4 sm:pl-4 sm:border-l sm:border-neutral-300 dark:sm:border-neutral-700 sm:mt-0">
      © ${(/* @__PURE__ */ new Date()).getFullYear()} Aria
    </p>
    <span class="inline-flex justify-center mt-4 space-x-5 sm:ml-auto sm:mt-0 sm:justify-start">

      <a href="https://instagram.com/ccbikai" target="_blank" class="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white">
        <span class="sr-only">Instagram</span>
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"></path></svg>
      </a>

      <a href="https://twitter.com/0xKaiBi" target="_blank" class="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white">
        <span class="sr-only">𝕏</span>
        <svg class="w-6 h-6 dark:stroke-black stroke-white" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M95 50c0 24.853-20.147 45-45 45S5 74.853 5 50 25.147 5 50 5s45 20.147 45 45Zm-51.21 2.688-21.51-28.76h16.578l14.1 18.855 17.453-18.855h4.872L55.135 45.694l22.72 30.377H61.279L45.967 55.598l-18.95 20.473h-4.873L43.79 52.688Zm-6.73-25.172h-7.616l33.63 44.967h7.616L37.06 27.516Z" fill="currentColor"></path><path d="M22.28 23.928v-.5h-.998l.597.8.4-.3Zm21.51 28.76.366.34.283-.306-.25-.334-.4.3Zm-4.932-28.76.4-.3-.15-.2h-.25v.5Zm14.1 18.855-.4.3.36.48.408-.44-.367-.34Zm17.453-18.855v-.5h-.219l-.148.16.367.34Zm4.872 0 .367.34.777-.84h-1.144v.5ZM55.135 45.694l-.367-.34-.282.306.249.333.4-.3Zm22.72 30.377v.5h.999l-.598-.8-.4.3Zm-16.577 0-.4.3.15.2h.25v-.5ZM45.967 55.598l.4-.3-.36-.48-.407.44.367.34Zm-18.95 20.473v.5h.218l.148-.16-.367-.34Zm-4.873 0-.367-.34-.777.84h1.144v-.5Zm7.3-48.554v-.5h-.998l.598.799.4-.3Zm7.616 0 .4-.3-.15-.2h-.25v.5Zm26.015 44.966-.4.3.15.2h.25v-.5Zm7.615 0v.5h.999l-.598-.8-.4.3ZM50 95.5c25.129 0 45.5-20.371 45.5-45.5h-1c0 24.577-19.923 44.5-44.5 44.5v1ZM4.5 50c0 25.129 20.371 45.5 45.5 45.5v-1C25.423 94.5 5.5 74.577 5.5 50h-1ZM50 4.5C24.871 4.5 4.5 24.871 4.5 50h1C5.5 25.423 25.423 5.5 50 5.5v-1ZM95.5 50C95.5 24.871 75.129 4.5 50 4.5v1c24.577 0 44.5 19.923 44.5 44.5h1ZM21.88 24.228l21.509 28.76.8-.6-21.509-28.76-.8.6Zm16.978-.8H22.28v1h16.578v-1Zm14.501 19.055L39.258 23.63l-.8.599 14.1 18.854.801-.599ZM70.044 23.59 52.592 42.443l.734.68 17.452-18.855-.734-.68Zm5.239-.16H70.41v1h4.872v-1Zm-19.78 22.605L75.65 24.268l-.734-.68-20.148 21.766.734.68Zm22.753 29.738-22.72-30.378-.801.6 22.72 30.377.8-.6Zm-16.978.799h16.578v-1H61.278v1ZM45.566 55.898 60.877 76.37l.801-.599L46.368 55.3l-.802.599ZM27.383 76.41l18.95-20.473-.733-.68-18.95 20.473.733.68Zm-5.239.16h4.872v-1h-4.872v1Zm21.278-24.223L21.777 75.731l.734.68 21.645-23.383-.734-.68ZM29.444 28.017h7.616v-1h-7.616v1Zm34.031 44.166-33.63-44.966-.801.599 33.63 44.966.801-.599Zm7.215-.2h-7.615v1h7.615v-1ZM36.66 27.816l33.63 44.966.8-.599-33.63-44.966-.8.599Z" fill="currentStroke"></path></svg>
      </a>

      <a href="https://github.com/ccbikai" target="_blank" class="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white">
        <span class="sr-only">GitHub</span>
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path></svg>
      </a>

    </span>
  </div>
</section>`;
}, "C:/Users/KATLAV/Documents/GitHub/mysite/src/components/footer.astro", void 0);

const menus = [
	{
		name: "Ana Sayfa",
		url: "/"
	},
	{
		name: "Blog",
		url: "/blog"
	},
	{
		name: "Projelerim",
		url: "/projelerim"
	},
	{
		name: "Hakkımda",
		url: "/hakkimda"
	}
];

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- This is an invisible div with relative position so that it takes up the height of the menu (because menu is absolute/fixed) -->${maybeRenderHead()}<div class="relative w-full h-20 opacity-0 pointer-events-none"></div>
<header id="header" class="absolute top-0 z-50 w-full h-20">
  <div class="flex items-center justify-between h-full max-w-5xl pl-6 pr-4 mx-auto border-b border-l-0 border-r-0 border-transparent select-none lg:border-r lg:border-l lg:rounded-b-xl">
    ${renderComponent($$result, "Logo", $$Logo, {})}
    <div id="mobileMenuBackground" onclick="closeMobileMenu()" class="fixed inset-0 z-20 hidden w-screen h-screen duration-300 ease-out bg-white/90 dark:bg-neutral-950/90">
    </div>
    <nav class="relative z-30 flex flex-row-reverse justify-start w-full text-sm sm:justify-end text-neutral-500 dark:text-neutral-400 sm:flex-row">
      <div id="openMenu" class="flex flex-col items-end justify-center w-6 h-6 ml-4 cursor-pointer sm:hidden">
        <svg class="w-8 h-8 dark:text-neutral-200" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M4 8h16M4 16h16"></path></svg>
      </div>
      <div id="closeMenu" class="flex flex-col items-end justify-center hidden w-6 h-6 ml-4 -translate-x-1 cursor-pointer sm:hidden">
        <svg class="w-6 h-6 text-neutral-600 dark:text-neutral-200" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M6 18L18 6M6 6l12 12"></path></svg>
      </div>
      <div id="menu" class="fixed top-[75px] ease-out duration-300 sm:top-0 w-full left-0 sm:py-0 pt-7 pb-4 dm:mx-0 left-0 z-40 flex-col items-end justify-start hidden w-full h-auto text-sm sm:text-base sm:h-auto sm:relative sm:flex-row sm:flex sm:text-sm sm:w-auto sm:pr-0 sm:pt-0">
        <div class="absolute inset-0 top-0 right-0 block w-full h-full px-3 sm:hidden">
          <div class="relative w-full h-full bg-white border border-dashed border-neutral-300 dark:border-neutral-700 backdrop-blur-sm rounded-xl dark:bg-neutral-950">
          </div>
        </div>
        ${menus.map((menu) => {
    return renderTemplate`<a${addAttribute(menu.url, "href")} class="relative flex items-center justify-center w-full px-3 py-2 font-medium tracking-wide text-center duration-200 ease-out sm:py-0 sm:mb-0 md:w-auto hover:text-neutral-900 dark:hover:text-white">
                ${menu.name}
              </a>`;
  })}
      </div>
      <div id="darkToggle" class="relative flex items-center pl-6 ml-4 font-medium tracking-wide cursor-pointer text-neutral-800 group dark:text-white">
        <div class="absolute left-0 flex items-center justify-center w-6 h-6 overflow-hidden border-b border-transparent horizon group-hover:border-neutral-600">
          <svg class="absolute w-6 h-6 transition duration-700 transform ease" id="sun" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
          <svg class="absolute hidden w-6 h-6 transition duration-700 transform ease" id="moon" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
        </div>
        <span class="hidden sm:inline-block">
          <span id="dayText" class="ml-2">Gündüz Modu</span>
          <span id="nightText" class="hidden ml-2">Gece Modu</span>
        </span>
      </div>
    </nav>
  </div>
</header>`;
}, "C:/Users/KATLAV/Documents/GitHub/mysite/src/components/header.astro", void 0);

const $$Square = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="w-full h-auto bg-white dark:bg-neutral-950 aspect-square {classes}">
</div>`;
}, "C:/Users/KATLAV/Documents/GitHub/mysite/src/components/square.astro", void 0);

const $$SquareLine = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="relative flex w-full divide-x h-[30px] sm:h-[45px] md:h-[60px] xl:h-[88px] divide-neutral-300 dark:divide-neutral-700 divide-dashed">
  ${renderComponent($$result, "Square", $$Square, {})}
  ${renderComponent($$result, "Square", $$Square, {})}
  ${renderComponent($$result, "Square", $$Square, {})}
  ${renderComponent($$result, "Square", $$Square, {})}
  ${renderComponent($$result, "Square", $$Square, {})}
  ${renderComponent($$result, "Square", $$Square, {})}
  ${renderComponent($$result, "Square", $$Square, {})}
  ${renderComponent($$result, "Square", $$Square, {})}
  ${renderComponent($$result, "Square", $$Square, {})}
</div>`;
}, "C:/Users/KATLAV/Documents/GitHub/mysite/src/components/square-line.astro", void 0);

const $$SquareLines = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="absolute w-full h-auto" style="z-index:-1">
  <div class="absolute top-0 left-0 w-1/2 h-auto bg-neutral-100 dark:bg-neutral-800">
    <div class="absolute inset-0 z-30 w-full h-full pointer-events-none bg-gradient-to-tl from-white dark:from-neutral-950 from-50% via-90% to-100% via-transparent to-transparent">
    </div>
    <div class="flex flex-col w-full h-full border-t border-l divide-y divide-dashed divide-neutral-300 dark:divide-neutral-700 border-neutral-300 dark:border-neutral-900">
      ${renderComponent($$result, "SquareLine", $$SquareLine, {})}
      ${renderComponent($$result, "SquareLine", $$SquareLine, {})}
      ${renderComponent($$result, "SquareLine", $$SquareLine, {})}
      ${renderComponent($$result, "SquareLine", $$SquareLine, {})}
      ${renderComponent($$result, "SquareLine", $$SquareLine, {})}
      ${renderComponent($$result, "SquareLine", $$SquareLine, {})}
    </div>
  </div>

  <div class="absolute top-0 right-0 w-1/2 h-auto bg-neutral-100 dark:bg-neutral-800">
    <div class="absolute inset-0 z-30 w-full h-full pointer-events-none bg-gradient-to-tr from-white dark:from-neutral-950 from-50% via-90% to-100% via-transparent to-transparent">
    </div>
    <div class="flex flex-col w-full h-full border-t border-l divide-y divide-dashed divide-neutral-300 dark:divide-neutral-700 border-neutral-300 dark:border-neutral-900">
      ${renderComponent($$result, "SquareLine", $$SquareLine, {})}
      ${renderComponent($$result, "SquareLine", $$SquareLine, {})}
      ${renderComponent($$result, "SquareLine", $$SquareLine, {})}
      ${renderComponent($$result, "SquareLine", $$SquareLine, {})}
      ${renderComponent($$result, "SquareLine", $$SquareLine, {})}
      ${renderComponent($$result, "SquareLine", $$SquareLine, {})}
    </div>
  </div>
</div>`;
}, "C:/Users/KATLAV/Documents/GitHub/mysite/src/components/square-lines.astro", void 0);

const site = {
	title: "İbrahim Katlav",
	base_url: "https://ibrahimkatlav.com",
	base_path: "/",
	trailing_slash: true,
	favicon: "/images/favicon.png",
	logo: "/images/logo.png",
	logo_width: "250",
	logo_height: "50",
	logo_text: "İbrahim Katlav"
};
const settings = {
	sticky_header: true,
	pagination: 6,
	summary_length: 120,
	blog_folder: "blog"
};
const params = {
	contact_form_action: "#",
	copyright: "Bu websitesi <b>İbrahim Katlav</b> tarafından Astro.build kullanılarak hazırlanmıştır ❤️"
};
const metadata = {
	meta_author: "İbrahim Katlav",
	meta_image: "/images/og-image.png",
	meta_description: "İbrahim Katlav"
};
const config = {
	site: site,
	settings: settings,
	params: params,
	metadata: metadata
};

const plainify = (content) => {
  const parseMarkdown = marked.parse(content);
  const filterBrackets = parseMarkdown.replace(/<\/?[^>]+(>|$)/gm, "");
  const filterSpaces = filterBrackets.replace(/[\r\n]\s*[\r\n]/gm, "");
  const stripHTML = htmlEntityDecoder(filterSpaces);
  const bosluklarikaldir = filterSpaces.trim(stripHTML);
  return bosluklarikaldir;
};
const htmlEntityDecoder = (htmlWithEntities) => {
  let entityList = {
    "&nbsp;": " ",
    "&lt;": "<",
    "&gt;": ">",
    "&amp;": "&",
    "&quot;": '"',
    "&#39;": "'"
  };
  let htmlWithoutEntities = htmlWithEntities.replace(
    /(&amp;|&lt;|&gt;|&quot;|&#39;)/g,
    (entity) => {
      return entityList[entity];
    }
  );
  return htmlWithoutEntities;
};

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://ibrahimkatlav.com");
const $$Main = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Main;
  const { title, description, image, noindex, canonical } = Astro2.props;
  const pageUrl = new URL(Astro2.url.pathname, Astro2.site);
  const img = "https://ibrahimkatlav.com" + image;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "İbrahim Katlav",
    "url": "https://ibraihmkatlav.com",
    "logo": "https://ibrahimkatlav.com/images/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+905312852677",
      "contactType": "Customer Service"
    },
    "sameAs": [
      "https://www.facebook.com/ibrahimkatlav/",
      "https://www.instagram.com/ibrahimkatlav/"
    ]
  };
  const schema2 = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "İbrahim Katlav",
    "url": "https://ibrahimkatlav.com"
  };
  const schema3 = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": title,
    "url": pageUrl,
    "isPartOf": {
      "@type": "WebSite",
      "@id": "https://ibrahimkatlav.com"
    },
    ...image && {
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": img
      }
    },
    "author": {
      "@type": "Person",
      "name": "İbrahim Katlav",
      "url": "https://ibrahimkatlav.com"
    }
  };
  return renderTemplate(_a || (_a = __template(['<html lang="tr" data-astro-cid-yu3cdcui>\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5">\n    <meta name="generator" content="İbrahim Katlav">\n    <!-- Custom Font kullanırsak yorum satırından kaldıralım \n    <link rel="preconnect" href="https://fonts.googleapis.com"/>\n    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>\n    -->\n\n\n    <!-- SEO Uzmanı <3 İbrahim Katlav -->\n\n    <title>', '</title>\n    <meta name="description"', ">\n    ", '\n    <link rel="sitemap" href="https://ibrahimkatlav.com/sitemap-index.xml">\n    <meta name="author" content="İbrahim Katlav">\n    ', "\n    ", '\n    <meta property="og:locale" content="tr_TR">\n    <meta property="og:type" content="website">\n    <meta property="og:title"', '>\n    <meta property="og:description"', '>\n    <meta property="og:url"', '>\n    <meta property="og:site_name" content="İbrahim Katlav">\n    <meta property="og:updated_time" content="2024-07-26T10:04:38+00:00">\n    <meta property="og:image"', '>\n    <meta property="og:image:secure_url"', '>\n    <meta property="og:image:width" content="1600">\n    <meta property="og:image:height" content="1080">\n    <meta property="og:image:alt" content="İbrahim Katlav">\n    <meta property="og:image:type" content="image/jpg">\n    <meta name="twitter:card" content="summary_large_image">\n    <meta name="twitter:title"', '>\n    <meta name="twitter:description"', '>\n    <meta name="twitter:site" content="@willbecoming">\n    <meta name="twitter:creator" content="@willbecoming">\n    <meta name="twitter:image"', '>\n    <script type="application/ld+json">', '</script>\n    <script type="application/ld+json">', '</script>\n    <script type="application/ld+json">', "</script>\n    ", `



    

    

    
    <script>
      if (typeof Storage !== 'undefined') {
        if (
          localStorage.getItem('dark_mode') &&
          localStorage.getItem('dark_mode') == 'true'
        ) {
          document.documentElement.classList.add('dark')
        }
      }
    </script>

    
    <link rel="icon" type="image/x-icon" href="../assets/images/favicon.png">
    
    `, "\n  ", '</head>\n  <body class="antialiased bg-white dark:bg-neutral-950" data-astro-cid-yu3cdcui>\n    ', "\n    ", "\n    ", "\n    ", "\n    \n    ", "\n  </body></html>"])), title, addAttribute(description, "content"), noindex ? renderTemplate`<meta name="robots" content="noindex, follow">` : renderTemplate`<meta name="robots" content="index, follow"  >`, Astro2.url.pathname.includes("/blog/page/") ? renderTemplate`<link rel="canonical" href="https://ibrahimkatlav.com/blog/" item-prop="url">` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-yu3cdcui": true }, { "default": ($$result2) => renderTemplate`${canonical && renderTemplate`<link rel="canonical"${addAttribute(canonical, "href")} item-prop="url">`}${!canonical && renderTemplate`<link rel="canonical"${addAttribute(`${config.site.base_url}/${Astro2.url.pathname.replace("/", "")}`, "href")} item-prop="url">`}` })}`, Astro2.url.pathname.includes("/blog/page/") ? renderTemplate`<meta name="x-canonical-url" content="https://ibrahimkatlav.com/blog/">` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-yu3cdcui": true }, { "default": ($$result2) => renderTemplate`${canonical && renderTemplate`<meta name="x-canonical-url"${addAttribute(canonical, "content")}>`}${!canonical && renderTemplate`<meta name="x-canonical-url"${addAttribute(`${config.site.base_url}/${Astro2.url.pathname.replace("/", "")}`, "content")}>`}` })}`, addAttribute(plainify(title ? title : config.site.title), "content"), addAttribute(plainify(description ? description : config.metadata.meta_description), "content"), addAttribute(`${config.site.base_url}/${Astro2.url.pathname.replace("/", "")}`, "content"), addAttribute(`${config.site.base_url}${image ? image : config.metadata.meta_image}`, "content"), addAttribute(`${config.site.base_url}${image ? image : config.metadata.meta_image}`, "content"), addAttribute(plainify(title ? title : config.site.title), "content"), addAttribute(plainify(description ? description : config.metadata.meta_description), "content"), addAttribute(`${config.site.base_url}${image ? image : config.metadata.meta_image}`, "content"), unescapeHTML(JSON.stringify(schema)), unescapeHTML(JSON.stringify(schema2)), unescapeHTML(JSON.stringify(schema3)), renderSlot($$result, $$slots["blogjson"]), renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(undefined                             )}` }), renderHead(), renderComponent($$result, "SquareLines", $$SquareLines, { "data-astro-cid-yu3cdcui": true }), renderComponent($$result, "Header", $$Header, { "data-astro-cid-yu3cdcui": true }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-yu3cdcui": true }), renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(undefined                             )}` }));
}, "C:/Users/KATLAV/Documents/GitHub/mysite/src/layouts/main.astro", void 0);

export { $$Main as $ };
