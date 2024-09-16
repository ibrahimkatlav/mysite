import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'es-module-lexer';
import 'devalue';
import { h as decodeKey } from './chunks/astro/server_C89fityf.mjs';
import 'clsx';
import 'html-escaper';

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => {
      return "/" + segment.map((part) => {
        if (part.spread) {
          return `${sanitizedParams[part.content.slice(3)] || ""}`;
        } else if (part.dynamic) {
          return `${sanitizedParams[part.content] || ""}`;
        } else {
          return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
        }
      }).join("");
    }).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/KATLAV/Documents/GitHub/mysite/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/api/keystatic/[...params]","pattern":"^\\/api\\/keystatic(?:\\/(.*?))?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"keystatic","dynamic":false,"spread":false}],[{"content":"...params","dynamic":true,"spread":true}]],"params":["...params"],"component":"node_modules/@keystatic/astro/internal/keystatic-api.js","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/keystatic-astro-page.BTCgP8AA.css"}],"routeData":{"type":"page","isIndex":false,"route":"/keystatic/[...params]","pattern":"^\\/keystatic(?:\\/(.*?))?$","segments":[[{"content":"keystatic","dynamic":false,"spread":false}],[{"content":"...params","dynamic":true,"spread":true}]],"params":["...params"],"component":"node_modules/@keystatic/astro/internal/keystatic-astro-page.astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/keystatic-astro-page.BTCgP8AA.css"}],"routeData":{"route":"/blog/[slug]","isIndex":false,"type":"page","pattern":"^\\/blog\\/([^/]+?)$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/blog/[slug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DNbsj13K.js"}],"styles":[{"type":"external","src":"/_astro/keystatic-astro-page.BTCgP8AA.css"},{"type":"external","src":"/_astro/main.D9l3Q-Cu.css"},{"type":"inline","content":".prose[data-astro-cid-yu3cdcui] img[data-astro-cid-yu3cdcui]{border-radius:20px}\n"}],"routeData":{"route":"/blog","isIndex":false,"type":"page","pattern":"^\\/blog$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog.astro","pathname":"/blog","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DNbsj13K.js"}],"styles":[{"type":"external","src":"/_astro/keystatic-astro-page.BTCgP8AA.css"},{"type":"external","src":"/_astro/main.D9l3Q-Cu.css"},{"type":"inline","content":".prose[data-astro-cid-yu3cdcui] img[data-astro-cid-yu3cdcui]{border-radius:20px}\n"}],"routeData":{"route":"/hakkimda","isIndex":false,"type":"page","pattern":"^\\/hakkimda$","segments":[[{"content":"hakkimda","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/hakkimda.astro","pathname":"/hakkimda","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DNbsj13K.js"}],"styles":[{"type":"external","src":"/_astro/keystatic-astro-page.BTCgP8AA.css"},{"type":"external","src":"/_astro/main.D9l3Q-Cu.css"},{"type":"inline","content":".prose[data-astro-cid-yu3cdcui] img[data-astro-cid-yu3cdcui]{border-radius:20px}\n"}],"routeData":{"route":"/projelerim","isIndex":false,"type":"page","pattern":"^\\/projelerim$","segments":[[{"content":"projelerim","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projelerim.astro","pathname":"/projelerim","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DNbsj13K.js"}],"styles":[{"type":"external","src":"/_astro/keystatic-astro-page.BTCgP8AA.css"},{"type":"external","src":"/_astro/main.D9l3Q-Cu.css"},{"type":"inline","content":".prose[data-astro-cid-yu3cdcui] img[data-astro-cid-yu3cdcui]{border-radius:20px}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}}],"site":"https://ibrahimkatlav.com","base":"/","trailingSlash":"never","compressHTML":false,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["C:/Users/KATLAV/Documents/GitHub/mysite/src/components/posts-loop.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/KATLAV/Documents/GitHub/mysite/src/components/home/writings.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/KATLAV/Documents/GitHub/mysite/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["C:/Users/KATLAV/Documents/GitHub/mysite/src/pages/blog.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/KATLAV/Documents/GitHub/mysite/src/pages/blog/[slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/KATLAV/Documents/GitHub/mysite/src/pages/hakkimda.astro",{"propagation":"none","containsHead":true}],["C:/Users/KATLAV/Documents/GitHub/mysite/src/pages/projelerim.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:node_modules/@keystatic/astro/internal/keystatic-api@_@js":"pages/api/keystatic/_---params_.astro.mjs","\u0000@astro-page:node_modules/@keystatic/astro/internal/keystatic-astro-page@_@astro":"pages/keystatic/_---params_.astro.mjs","\u0000@astro-page:src/pages/blog/[slug]@_@astro":"pages/blog/_slug_.astro.mjs","\u0000@astro-page:src/pages/blog@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:src/pages/hakkimda@_@astro":"pages/hakkimda.astro.mjs","\u0000@astro-page:src/pages/projelerim@_@astro":"pages/projelerim.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_CAbz0UlK.mjs","C:/Users/KATLAV/Documents/GitHub/mysite/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","C:/Users/KATLAV/Documents/GitHub/mysite/src/content/blog/ai-remove-image-background.mdx?astroContentCollectionEntry=true":"chunks/ai-remove-image-background_DjxllEgH.mjs","C:/Users/KATLAV/Documents/GitHub/mysite/src/content/blog/dwqdqw.mdx?astroContentCollectionEntry=true":"chunks/dwqdqw_z9M2icx0.mjs","C:/Users/KATLAV/Documents/GitHub/mysite/src/content/blog/ai-remove-image-background.mdx?astroPropagatedAssets":"chunks/ai-remove-image-background_DmQUYyVx.mjs","C:/Users/KATLAV/Documents/GitHub/mysite/src/content/blog/dwqdqw.mdx?astroPropagatedAssets":"chunks/dwqdqw_BghwXBME.mjs","\u0000astro:asset-imports":"chunks/_astro_asset-imports_D9aVaOQr.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_BcEe_9wP.mjs","C:/Users/KATLAV/Documents/GitHub/mysite/src/content/blog/ai-remove-image-background.mdx":"chunks/ai-remove-image-background_DJE8nYZY.mjs","C:/Users/KATLAV/Documents/GitHub/mysite/src/content/blog/dwqdqw.mdx":"chunks/dwqdqw_RTB_0xGf.mjs","C:/Users/KATLAV/Documents/GitHub/mysite/src/layouts/post.astro":"chunks/post_B90JQxe7.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.DNbsj13K.js","C:/Users/KATLAV/Documents/GitHub/mysite/src/layouts/main.astro?astro&type=script&index=0&lang.ts":"_astro/main.astro_astro_type_script_index_0_lang.DF2keTmI.js","C:/Users/KATLAV/Documents/GitHub/mysite/src/layouts/main.astro?astro&type=script&index=1&lang.ts":"_astro/main.astro_astro_type_script_index_1_lang.As3cppGa.js","@astrojs/react/client.js":"_astro/client.DUWA5SVY.js","C:/Users/KATLAV/Documents/GitHub/mysite/node_modules/@keystatic/astro/internal/keystatic-page.js":"_astro/keystatic-page.BBarjd2U.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/photo.CJqKi_fg.png","/_astro/keystatic-astro-page.BTCgP8AA.css","/favicon.ico","/robots.txt","/_astro/client.DUWA5SVY.js","/_astro/hoisted.DNbsj13K.js","/_astro/index.CVjuckLu.js","/_astro/keystatic-page.BBarjd2U.js","/_astro/main.astro_astro_type_script_index_0_lang.DF2keTmI.js","/_astro/main.astro_astro_type_script_index_1_lang.As3cppGa.js","/_astro/main.D9l3Q-Cu.css","/assets/images/about.jpg","/assets/images/cover.png","/assets/images/favicon.png","/assets/images/photo.png","/assets/images/experiences/fta.ico","/assets/images/experiences/wulian.ico","/assets/images/experiences/yoho.ico","/assets/images/posts/code-canvas.jpg","/assets/images/posts/coffee.jpg","/assets/images/posts/flowchart.jpg","/assets/images/posts/perfect-coffee.jpg","/assets/images/posts/pour-over.jpg","/assets/images/posts/vintage-tech-01.jpg","/assets/images/posts/vintage-tech-02.jpg","/assets/images/posts/workspace.jpg","/assets/images/projects/dns.surf.png","/assets/images/projects/email.ml.png","/assets/images/projects/html.zone.png","/images/blog/dwqdqw/image.png"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"TakPCqIdKd9GsnAcZlLj5TWy2x1Puevk2mEE/a92FV4=","experimentalEnvGetSecretEnabled":false});

export { manifest };
