/* empty css                                                */
import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, a as renderComponent } from '../chunks/astro/server_C89fityf.mjs';
import 'kleur/colors';
import 'clsx';
import { p as projects, $ as $$Project } from '../chunks/project_CUSSKoP0.mjs';
import { $ as $$PostsLoop } from '../chunks/posts-loop_CFpV2uwT.mjs';
import { $ as $$Main } from '../chunks/main_nji-187x.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://ibrahimkatlav.com");
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Button;
  const { link, text } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(link, "href")} class="inline-flex w-auto px-4 py-2 mt-5 text-xs font-semibold duration-300 ease-out border rounded-full bg-neutral-900 dark:bg-white dark:text-neutral-900 text-neutral-100 hover:border-neutral-700 border-neutral-900 dark:hover:border-neutral-300 hover:bg-white dark:hover:bg-black dark:hover:text-white hover:text-neutral-900">
  ${text}
</a>`;
}, "C:/Users/KATLAV/Documents/GitHub/mysite/src/components/button.astro", void 0);

const $$Projects = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="max-w-4xl mx-auto px-7 lg:px-0">
  <h2 class="text-2xl font-bold leading-10 tracking-tight text-neutral-900 dark:text-neutral-100">
    My Projects
  </h2>
  <p class="mb-6 text-base text-neutral-600 dark:text-neutral-400">
    Here are some of my recent projects. I'm always working on something new, so
    check back often!
  </p>
  <div class="grid items-stretch w-full sm:grid-cols-2 md:grid-cols-3 gap-7 mt-7">
    ${projects.map((project) => {
    return renderTemplate`${renderComponent($$result, "Project", $$Project, { "name": project.name, "description": project.description, "image": project.image, "url": project.url })}`;
  })}
  </div>

  <div class="flex items-center justify-center w-full py-5">
    ${renderComponent($$result, "Button", $$Button, { "text": "View All My Projects", "link": "/projects" })}
  </div>
</section>`;
}, "C:/Users/KATLAV/Documents/GitHub/mysite/src/components/home/projects.astro", void 0);

const $$Astro = createAstro("https://ibrahimkatlav.com");
const $$Separator = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Separator;
  const { text } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative my-32">
  <div class="relative w-full pl-5 overflow-x-hidden md:pl-0">
    <div class="absolute w-full h-px bg-gradient-to-r from-transparent to-white md:from-white dark:from-transparent dark:to-neutral-950 md:dark:from-neutral-950 md:via-transparent md:dark:via-transparent md:to-white md:dark:to-neutral-950">
    </div>
    <div class="w-full h-px border-t border-dashed border-neutral-300 dark:border-neutral-600">
    </div>
  </div>
  <div class="absolute flex items-center justify-center w-auto h-auto px-3 py-1.5 uppercase tracking-widest space-x-1 text-[0.6rem] md:-translate-x-1/2 -translate-y-1/2 border rounded-full bg-white dark:bg-neutral-900 text-neutral-400 left-0 md:ml-0 ml-5 md:left-1/2 border-neutral-100 dark:border-neutral-800 shadow-sm">
    <p class="leading-none">${text}</p>
    <div class="flex items-center justify-center w-5 h-5 translate-x-1 border rounded-full border-neutral-100 dark:border-neutral-800">
      <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"></path></svg>
    </div>
  </div>
</div>`;
}, "C:/Users/KATLAV/Documents/GitHub/mysite/src/components/home/separator.astro", void 0);

const $$Writings = createComponent(($$result, $$props, $$slots) => {
  const feed = "https://feed.miantiao.me/";
  return renderTemplate`${maybeRenderHead()}<section class="max-w-4xl mx-auto px-7 lg:px-0">
  <h2 class="text-2xl font-bold leading-10 tracking-tight text-neutral-900 dark:text-neutral-100">
    My Writings
  </h2>
  <p class="mb-6 text-base text-neutral-600 dark:text-neutral-400">
    Along with coding I also like to write about life and technology. Here are
    some of my recent posts.
  </p>

  <div class="w-full max-w-4xl mx-auto my-7 xl:px-0">
    <div class="flex flex-col items-start justify-start md:flex-row md:space-x-7">
      <div class="w-full md:w-2/3 space-y-7">
        ${renderComponent($$result, "PostsLoop", $$PostsLoop, { "count": "3" })}

        <div class="flex items-center justify-center w-full py-5">
          ${renderComponent($$result, "Button", $$Button, { "text": "View All My Writing", "link": "/posts" })}
        </div>
      </div>
      <div class="w-full mt-10 md:w-1/3 md:mt-0">
        <form method="get"${addAttribute(feed, "action")} class="p-6 border border-dashed rounded-2xl border-neutral-300 dark:border-neutral-600">
          <div class="relative flex items-center space-x-2">
            <svg class="flex-none w-6 h-6 text-neutral-700 dark:text-neutral-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"></path></svg>
            <h2 class="flex text-sm font-semibold text-neutral-900 dark:text-neutral-100">
              Subscribe my blog
            </h2>
          </div>
          <p class="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
            Get my blog updates via <a class="font-bold"${addAttribute(`https://feedly.com/i/subscription/feed%2F${encodeURIComponent(feed)}`, "href")}>Feedly</a>, <a class="font-bold"${addAttribute(`https://www.inoreader.com/feed/${encodeURIComponent(feed)}`, "href")}>Inoreader</a> or <a class="font-bold"${addAttribute(feed, "href")}>RSS</a>.
          </p>
          <div class="flex flex-col items-center w-full mt-4 space-y-3">
            <input type="url" readonly placeholder="Email address" aria-label="Email address" required=""${addAttribute(feed, "value")} class="w-full h-10 px-3 text-sm border border-dashed rounded-md focus:ring-0 focus:outline-black border-neutral-400 dark:border-neutral-600 dark:bg-neutral-800 dark:placeholder-neutral-400 dark:text-white">
            <button type="submit" class="block w-full px-4 py-2 mt-5 text-xs font-semibold text-center duration-300 ease-out border rounded bg-neutral-900 dark:bg-neutral-100 dark:hover:border-neutral-300 dark:text-neutral-800 dark:hover:bg-neutral-950 dark:hover:text-neutral-100 text-neutral-100 border-neutral-900 hover:bg-white hover:text-neutral-900">Subscribe</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>`;
}, "C:/Users/KATLAV/Documents/GitHub/mysite/src/components/home/writings.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Main, { "title": "SEO Uzman\u0131 - \u0130brahim Katlav" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<div class="relative z-20 w-full max-w-4xl mx-auto mt-16 px-7 md:mt-24 lg:mt-32 xl:px-0">
    <div class="flex flex-col items-center md:flex-row">
      <div class="relative w-full md:w-1/2">
        <h1 class="mb-5 text-4xl font-bold leading-tight md:text-4xl lg:text-6xl dark:text-white">
          Hello, I'm Kai.
        </h1>
        <p class="mb-6 text-base text-neutral-600 dark:text-neutral-400">
          I'm a front-end programmer living in Nanjing. <br class="hidden lg:block">I focus on Web development.
        </p>
        <p class="mb-2 font-semibold text-neutral-800 dark:text-neutral-200">
          I can help you out with:
        </p>
        <ul class="py-2 space-y-[3px] text-sm list-disc list-inside text-neutral-500 dark:text-neutral-400">
          <li>Vue.js Development</li>
          <li>React.js Development</li>
          <li>Node.js Development</li>
          <li>Website Design</li>
          <li>and more...</li>
        </ul>
        ${renderComponent($$result2, "Button", $$Button, { "text": "Follow me on \u{1D54F}", "link": "https://twitter.com/0xKaiBi" })}
      </div>
      <div class="relative justify-end hidden w-full mt-10 md:flex md:pl-10 md:w-1/2 md:mt-0 md:translate-y-4 xl:translate-y-0">
        <div class="relative z-50 w-full">
          <div class="absolute bottom-0 z-40 w-16 h-16 -translate-x-6 -translate-y-1/2 lg:top-auto top-0 lg:-translate-y-[330px] rounded-full">
            <span class="relative z-20 flex items-center justify-center w-full h-full text-2xl border-8 border-white rounded-full dark:border-neutral-950 bg-neutral-100 dark:bg-neutral-900">
              <span class="flex items-center justify-center w-full h-full bg-white border border-dashed rounded-full dark:bg-neutral-950 border-neutral-300 dark:border-neutral-700">👋</span>
            </span>
          </div>
          <div class="relative z-30 px-10">
            <img src="/assets/images/photo.png" loading="eager" decoding="auto" class="relative z-30 w-full aspect-[790/1189] md:max-w-md mx-auto dark:-translate-y-0.5">
          </div>
          <div class="absolute bottom-0 right-0 z-20 w-full h-full lg:h-[420px] translate-x-0 -translate-y-px border border-dashed rounded-2xl bg-gradient-to-r dark:from-neutral-950 dark:via-black dark:to-neutral-950 from-white via-neutral-50 to-white border-neutral-300 dark:border-neutral-700">
          </div>
        </div>
      </div>
    </div>
  </div>

  ${renderComponent($$result2, "Separator", $$Separator, { "text": "Check out my projects" })}
  ${renderComponent($$result2, "Projects", $$Projects, {})}
  ${renderComponent($$result2, "Separator", $$Separator, { "text": "Some of my writing" })}
  ${renderComponent($$result2, "Writings", $$Writings, {})}
` })}`;
}, "C:/Users/KATLAV/Documents/GitHub/mysite/src/pages/index.astro", void 0);

const $$file = "C:/Users/KATLAV/Documents/GitHub/mysite/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
