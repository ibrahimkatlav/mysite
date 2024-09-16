import { _ as __astro_tag_component__, F as Fragment, j as createVNode } from './astro/server_C89fityf.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_ZWLPPe5O.mjs';
import 'clsx';

const __0__assets_images_blog_dwqdqw_photo_png__ = new Proxy({"src":"/_astro/photo.CJqKi_fg.png","width":832,"height":1256,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/KATLAV/Documents/GitHub/mysite/src/assets/images/blog/dwqdqw/photo.png";
							}
							
							return target[name];
						}
					});

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
  "title": "Mamazon'da",
  "layout": "../../layouts/post.astro",
  "description": "dwqdwqdwqdwq",
  "date": "2024-09-16T11:42:00.000Z",
  "updateDate": "2024-09-17T11:42:00.000Z",
  "tarih": "16 Eyl\xFCl 2024",
  "image": "/images/blog/dwqdqw/image.png"
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
      "astro-image": "astro-image",
      p: "p",
      ...props.components
    },
    _component0 = _components["astro-image"];
  return createVNode(_components.p, {
    children: [createVNode(_component0, {
      src: __0__assets_images_blog_dwqdqw_photo_png__,
      alt: ""
    }), "dwqdwq"]
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
const url = "src/content/blog/dwqdqw.mdx";
const file = "C:/Users/KATLAV/Documents/GitHub/mysite/src/content/blog/dwqdqw.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/KATLAV/Documents/GitHub/mysite/src/content/blog/dwqdqw.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
