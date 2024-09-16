import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, a as renderComponent, F as Fragment } from './astro/server_C89fityf.mjs';
import 'kleur/colors';
import { g as getCollection } from './_astro_content_bX5pPYKb.mjs';

const $$Astro = createAstro("https://ibrahimkatlav.com");
const $$PostsLoop = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PostsLoop;
  const allPosts = await getCollection("blog");
  const { count } = Astro2.props;
  const postsLoop = allPosts.slice(0, count).map((post) => {
    return {
      ...post.data || {},
      link: `/blog/${post.slug}`
    };
  });
  return renderTemplate`${postsLoop.map((post) => {
    return renderTemplate`${maybeRenderHead()}<div class="relative border border-transparent border-dashed cursor-pointer p-7 group rounded-2xl"${addAttribute(`location.href = '${post.link}'`, "onclick")}>
        <div class="absolute inset-0 z-20 w-full h-full duration-300 ease-out bg-white border border-dashed dark:bg-neutral-950 rounded-2xl border-neutral-300 dark:border-neutral-600 group-hover:-translate-x-1 group-hover:-translate-y-1"></div>
        <div class="absolute inset-0 z-10 w-full h-full duration-300 ease-out border border-dashed rounded-2xl border-neutral-300 dark:border-neutral-600 group-hover:translate-x-1 group-hover:translate-y-1"></div>
        <div class="relative z-30 duration-300 ease-out group-hover:-translate-x-1 group-hover:-translate-y-1">
          <h2 class="flex items-center mb-3">
            <a${addAttribute(post.link, "href")} class="text-xl font-bold leading-tight tracking-tight sm:text-2xl dark:text-neutral-100">
              ${post.title}
            </a>
            <svg class="group-hover:translate-x-0 flex-shrink-0 translate-y-0.5 -translate-x-1 w-2.5 h-2.5 stroke-current ml-1 transition-all ease-in-out duration-200  transform" viewBox="0 0 13 15" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
                <g id="svg" transform="translate(0.666667, 2.333333)" stroke="currentColor" stroke-width="2.4">
                  <g>
                    ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`
                      <polyline class="transition-all duration-200 ease-out opacity-0 delay-0 group-hover:opacity-100" points="5.33333333 0 10.8333333 5.5 5.33333333 11"></polyline>
                      <line class="transition-all duration-200 ease-out transform -translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 group-hover:ml-0" x1="10.8333333" y1="5.5" x2="0.833333333" y2="5.16666667"></line>
                    ` })}
                  </g>
                </g>
              </g>
            </svg>
          </h2>
          <p class="text-sm text-neutral-600 dark:text-neutral-400">
            <span>${post.description}</span>
          </p>
          <div class="mt-2.5 text-xs font-medium text-neutral-800 dark:text-neutral-300">
            ${post.tarih} tarihinde yayınlandı
          </div>
        </div>
      </div>`;
  })}`;
}, "C:/Users/KATLAV/Documents/GitHub/mysite/src/components/posts-loop.astro", void 0);

export { $$PostsLoop as $ };
