/* empty css                                                */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_C89fityf.mjs';
import 'kleur/colors';
import { $ as $$PageHeading } from '../chunks/page-heading_DVvB6vXW.mjs';
import { $ as $$PostsLoop } from '../chunks/posts-loop__Tg8Ce0l.mjs';
import { $ as $$Main } from '../chunks/main_nji-187x.mjs';
export { renderers } from '../renderers.mjs';

const $$Blog = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Main, { "title": "Blog", "noindex": true }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<section class="relative z-20 max-w-2xl mx-auto my-12 px-7 lg:px-0">
    ${renderComponent($$result2, "PageHeading", $$PageHeading, { "title": "Blog", "description": "SEO hakk\u0131nda inan\u0131lmaz i\xE7erikler \xFCretiyorum, takipte kal\u0131n!" })}

    <div class="z-50 flex flex-col items-stretch w-full gap-5 my-8">
      ${renderComponent($$result2, "PostsLoop", $$PostsLoop, { "count": "999999999" })}
    </div>
  </section>
` })}`;
}, "C:/Users/KATLAV/Documents/GitHub/mysite/src/pages/blog.astro", void 0);

const $$file = "C:/Users/KATLAV/Documents/GitHub/mysite/src/pages/blog.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Blog,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
