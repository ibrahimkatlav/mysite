import { _ as __astro_tag_component__, F as Fragment, j as createVNode } from './astro/server_C89fityf.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_ZWLPPe5O.mjs';
import 'clsx';

const MDXLayout = async function ({
  children
}) {
  const Layout = (await import('./post_B90JQxe7.mjs')).default;
  const {
    layout,
    ...content
  } = frontmatter;
  content.file = file;
  content.url = url;
  return createVNode(Layout, {
    file,
    url,
    content,
    frontmatter: content,
    headings: getHeadings(),
    "server:root": true,
    children
  });
};
const frontmatter = {
  "layout": "../../layouts/post.astro",
  "title": "Amazon'da Sat\u0131\u015F Yapmak! (A'dan Z'ye)",
  "date": "2024-07-05T17:45:00.000Z",
  "updateDate": "2024-08-08T17:56:00.000Z",
  "tarih": "5 Temmuz 2024",
  "guncellemetarihi": "28 Temmuz 2024",
  "image": "/images/blog/amazonda-satis-yapmak/image.png"
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    hr: "hr",
    img: "img",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Yo, so I\u2019ve been digging into this whole AI thing for front-end development lately, and stumbled upon this cool Transformers.js example.  Turned it into a sweet little tool, check it out!"
    }), "\n", createVNode(_components.p, {
      children: "Basically, it uses Transformers.js in a WebWorker to tap into WebGPU and run this RMBG-1.4 model.  Long story short, you can now use AI to nuke image backgrounds right in your browser. And get this, it only takes half a second to process a 4K image on my M1 PRO!"
    }), "\n", createVNode(_components.p, {
      children: ["Here\u2019s the link to the tool: ", createVNode(_components.a, {
        href: "https://html.zone/background-remover",
        children: "https://html.zone/background-remover"
      })]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.a, {
        href: "https://html.zone/background-remover",
        children: createVNode(_components.img, {
          src: "https://og-image.html.zone/https://html.zone/background-remover",
          alt: "AI background remover"
        })
      })
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.p, {
      children: ["Wanna build it yourself?  Head over to ", createVNode(_components.a, {
        href: "https://github.com/xenova/transformers.js/tree/main/examples/remove-background-client",
        children: "https://github.com/xenova/transformers.js/tree/main/examples/remove-background-client"
      }), " for the source code.  Oh, and heads up, you gotta be on Transformers.js V3 to mess with WebGPU."]
    })]
  });
}
function MDXContent(props = {}) {
  return createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  });
}
__astro_tag_component__(getHeadings, "astro:jsx");
__astro_tag_component__(MDXContent, "astro:jsx");
const url = "src/content/blog/ai-remove-image-background.mdx";
const file = "C:/Users/KATLAV/Documents/GitHub/mysite/src/content/blog/ai-remove-image-background.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/KATLAV/Documents/GitHub/mysite/src/content/blog/ai-remove-image-background.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
