import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead } from './astro/server_C89fityf.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://ibrahimkatlav.com");
const $$PageHeading = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PageHeading;
  const { title, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative z-20 w-full mx-auto lg:mx-0">
  <h2 class="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-3xl lg:text-4xl">
    ${title}
  </h2>
  <p class="mt-3 text-sm leading-6 text-neutral-600 dark:text-neutral-400 sm:mt-4 lg:mt-6 sm:leading-7 lg:leading-8 sm:text-base lg:text-lg">
    ${description}
  </p>
</div>`;
}, "C:/Users/KATLAV/Documents/GitHub/mysite/src/components/page-heading.astro", void 0);

export { $$PageHeading as $ };
