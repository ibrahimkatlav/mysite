/* empty css                                                   */
import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent } from '../../chunks/astro/server_C89fityf.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../chunks/_astro_content_bX5pPYKb.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://ibrahimkatlav.com");
async function getStaticPaths() {
  const postEntries = await getCollection("blog");
  return postEntries.map((entry) => ({
    params: { slug: entry.slug },
    props: { entry }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { entry } = Astro2.props;
  const { Content } = await entry.render();
  return renderTemplate`${renderComponent($$result, "Content", Content, {})}`;
}, "C:/Users/KATLAV/Documents/GitHub/mysite/src/pages/blog/[slug].astro", void 0);

const $$file = "C:/Users/KATLAV/Documents/GitHub/mysite/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$slug,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
