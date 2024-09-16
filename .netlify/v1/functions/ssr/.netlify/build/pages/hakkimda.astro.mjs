/* empty css                                                */
import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, a as renderComponent, F as Fragment } from '../chunks/astro/server_C89fityf.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$PageHeading } from '../chunks/page-heading_DVvB6vXW.mjs';
import { $ as $$Main } from '../chunks/main_nji-187x.mjs';
export { renderers } from '../renderers.mjs';

const experiences = [
	{
		dates: "June 2018 · Present",
		role: "Front-end Engineer",
		company: "Full Truck Alliance",
		description: "Responsible for customer service and CRM system front-end development.",
		logo: "/assets/images/experiences/fta.ico"
	},
	{
		dates: "July 2015 · June 2018",
		role: "Front-end Engineer",
		company: "YOHO!",
		description: "Responsible for mobile front-end development of e-commerce platform.",
		logo: "/assets/images/experiences/yoho.ico"
	},
	{
		dates: "September 2014 · July 2015 ",
		role: "Node.JS Developer",
		company: "WuLian",
		description: "Intern, involved in the development of Internet of Things cloud systems.",
		logo: "/assets/images/experiences/wulian.ico"
	}
];

const $$Astro = createAstro("https://ibrahimkatlav.com");
const $$AboutExperience = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AboutExperience;
  const { logo, dates, role, company, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative flex flex-col justify-start pl-12">
  <div class="absolute top-0 left-0 z-40 flex items-center justify-center -translate-x-1/2 bg-white border rounded-full dark:bg-neutral-950 w-14 h-14 border-neutral-300 dark:border-neutral-700">
    <img${addAttribute(logo, "src")}${addAttribute(company, "alt")} class="w-8 h-8">
  </div>

  <p class="text-xs uppercase text-neutral-400 dark:text-neutral-500 trackign-widest">
    ${dates}
  </p>
  <h3 class="my-1 text-lg font-bold dark:text-neutral-100">${role}</h3>
  <p class="mb-1 text-sm font-medium dark:text-neutral-300">${company}</p>
  <p class="text-sm font-light text-neutral-600 dark:text-neutral-400">
    ${description}
  </p>
</div>`;
}, "C:/Users/KATLAV/Documents/GitHub/mysite/src/components/about-experience.astro", void 0);

const $$Hakkimda = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Main, { "title": "About Me" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<section class="relative z-20 max-w-2xl mx-auto my-12 px-7 lg:px-0">
    ${renderComponent($$result2, "PageHeading", $$PageHeading, { "title": "About Me", "description": "Hello \u{1F44B} I'm a frontend engineer from Nanjing, China. I'm passionate about building new products and learning new technology." })}

    <img src="/assets/images/about.jpg" class="relative z-30 w-full my-10 rounded-xl">

    <h2 class="mb-2 text-2xl font-bold dark:text-neutral-200">Short Bio</h2>
    <p class="text-sm leading-6 text-gray-600 dark:text-neutral-400 sm:leading-7 lg:leading-8 sm:text-base lg:text-lg">
      Front-end cutter 🧑🏻‍💻, back-end amateur 🤷🏻‍♂️, operations digging holes person 🤦🏻‍♂️.
    </p>

    <h2 class="mt-5 mb-2 text-2xl font-bold lg:mt-10 sm:mt-6 dark:text-neutral-200">
      Experience
    </h2>
    <div class="px-5 py-10">
      ${experiences.map((experience, loop) => {
    return renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${loop == 0 || loop == 1 ? renderTemplate`<div class="pb-10 border-l border-gray-200 dark:border-neutral-700">
                  ${renderComponent($$result3, "AboutExperience", $$AboutExperience, { "dates": experience.dates, "role": experience.role, "company": experience.company, "description": experience.description, "logo": experience.logo })}
                </div>` : renderTemplate`${renderComponent($$result3, "AboutExperience", $$AboutExperience, { "dates": experience.dates, "role": experience.role, "company": experience.company, "description": experience.description, "logo": experience.logo })}`}` })}`;
  })}
    </div>

    <h2 class="mt-5 mb-2 text-2xl font-bold lg:mt-10 sm:mt-6 dark:text-neutral-200">Let's Connect</h2>
    <p class="text-sm leading-6 text-gray-600 dark:text-neutral-400 sm:leading-7 lg:leading-8 sm:text-base lg:text-lg">
      If you want to stay up to date with my work be sure to <a href="https://twitter.com/ccikai" target="_blank" class="text-indigo-600 underline">follow me on twitter</a>, or you can send me an <a href="mailto:astro-aria#miantiao.me" class="text-indigo-600 underline">email</a> and I'll be sure to get back to you.
    </p>
  </section>
` })}`;
}, "C:/Users/KATLAV/Documents/GitHub/mysite/src/pages/hakkimda.astro", void 0);

const $$file = "C:/Users/KATLAV/Documents/GitHub/mysite/src/pages/hakkimda.astro";
const $$url = "/hakkimda";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Hakkimda,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
