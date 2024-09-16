/* empty css                                                */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_C89fityf.mjs';
import 'kleur/colors';
import { p as projects, $ as $$Project } from '../chunks/project_CUSSKoP0.mjs';
import { $ as $$PageHeading } from '../chunks/page-heading_DVvB6vXW.mjs';
import { $ as $$Main } from '../chunks/main_nji-187x.mjs';
export { renderers } from '../renderers.mjs';

const $$Projelerim = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Main, { "title": "My Projects" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<section class="relative z-20 max-w-2xl mx-auto my-12 px-7 lg:px-0">
    ${renderComponent($$result2, "PageHeading", $$PageHeading, { "title": "My Projects", "description": "Here are some of the current projects I've been working on. I really enjoy creating new projects and coming up with new ideas. I'm always working on something new, so check back often!" })}

    <div class="z-50 grid items-stretch w-full grid-cols-1 my-8 gap-7 sm:gap-5 sm:grid-cols-2">
      ${projects.map((project) => {
    return renderTemplate`${renderComponent($$result2, "Project", $$Project, { "name": project.name, "description": project.description, "image": project.image, "url": project.url })}`;
  })}
    </div>
  </section>
` })}`;
}, "C:/Users/KATLAV/Documents/GitHub/mysite/src/pages/projelerim.astro", void 0);

const $$file = "C:/Users/KATLAV/Documents/GitHub/mysite/src/pages/projelerim.astro";
const $$url = "/projelerim";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Projelerim,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
