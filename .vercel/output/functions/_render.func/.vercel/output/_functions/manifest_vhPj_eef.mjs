import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_CGnGUX5Y.mjs';
import 'es-module-lexer';
import { i as decodeKey } from './chunks/astro/server_JUoDhWgB.mjs';
import 'clsx';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === 'string') {
        return [key, value.normalize().replace(/#/g, '%23').replace(/\?/g, '%3F')];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || '';
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, '%3F').replace(/#/g, '%23').replace(/%5B/g, '[').replace(/%5D/g, ']');
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join('');
  return segmentPath ? '/' + segmentPath : '';
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = '';
    if (addTrailingSlash === 'always' && segments.length) {
      trailing = '/';
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join('') + trailing;
    return path || '/';
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
    isIndex: rawRouteData.isIndex,
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData),
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
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key,
  };
}

const manifest = deserializeManifest({
  hrefRoot: 'file:///C:/Users/Jordi/Documents/web/calendaris/',
  adapterName: '@astrojs/vercel/serverless',
  routes: [
    {
      file: '',
      links: [],
      scripts: [],
      styles: [],
      routeData: {
        type: 'endpoint',
        isIndex: false,
        route: '/_image',
        pattern: '^\\/_image$',
        segments: [[{ content: '_image', dynamic: false, spread: false }]],
        params: [],
        component: 'node_modules/astro/dist/assets/endpoint/generic.js',
        pathname: '/_image',
        prerender: false,
        fallbackRoutes: [],
        _meta: { trailingSlash: 'never' },
      },
    },
    {
      file: '',
      links: [],
      scripts: [{ type: 'external', value: '/_astro/hoisted.2daoxv0f.js' }],
      styles: [{ type: 'external', src: '/_astro/calendario-mesa-espiral.D9ZlLmLU.css' }],
      routeData: {
        route: '/404',
        isIndex: false,
        type: 'page',
        pattern: '^\\/404$',
        segments: [[{ content: '404', dynamic: false, spread: false }]],
        params: [],
        component: 'src/pages/404.astro',
        pathname: '/404',
        prerender: false,
        fallbackRoutes: [],
        _meta: { trailingSlash: 'never' },
      },
    },
    {
      file: '',
      links: [],
      scripts: [{ type: 'external', value: '/_astro/hoisted.BsIc2PM2.js' }],
      styles: [
        { type: 'external', src: '/_astro/navigation.X6JekhOX.css' },
        {
          type: 'inline',
          content:
            '.slider-container[data-astro-cid-ycqiuziw]{position:absolute;inset:0;z-index:-1;overflow:hidden;height:auto;opacity:.8;filter:grayscale(100%) blur(2px)}.swiper[data-astro-cid-ycqiuziw]{width:100%;height:100%}.swiper-wrapper[data-astro-cid-ycqiuziw]{display:flex;width:100%;height:100%}.swiper-slide[data-astro-cid-ycqiuziw]{width:100%;height:100%}.swiper-slide[data-astro-cid-ycqiuziw] img[data-astro-cid-ycqiuziw]{width:auto;height:100%;-o-object-fit:cover;object-fit:cover}.swiper-button-next[data-astro-cid-ycqiuziw],.swiper-button-prev[data-astro-cid-ycqiuziw]{color:#333}@media (max-width: 768px){.slider-container[data-astro-cid-ycqiuziw]{display:none}}.isTxtColor[data-astro-cid-iks44ci7],html.dark .isTxtColor[data-astro-cid-iks44ci7]{color:#030620}html.dark .isTxtSub[data-astro-cid-iks44ci7]{color:#6d29d9}slider-container[data-astro-cid-iks44ci7]{position:absolute;inset:0;z-index:-1}.swiper[data-astro-cid-iks44ci7]{width:100%;height:100%}.swiper-wrapper[data-astro-cid-iks44ci7]{display:flex;width:100%;height:100%}.swiper-slide[data-astro-cid-iks44ci7]{width:100%;height:100%}.swiper-slide[data-astro-cid-iks44ci7] img[data-astro-cid-iks44ci7]{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}\n',
        },
        { type: 'external', src: '/_astro/calendario-mesa-espiral.D9ZlLmLU.css' },
        {
          type: 'inline',
          content:
            '.isbgBlck[data-astro-cid-4wsjtibl]{background-color:#fff}html.dark .isbgBlck[data-astro-cid-4wsjtibl]{background-color:#0e112a}.btnbottom[data-astro-cid-rhv6ztfp]{padding-bottom:0!important}\n',
        },
        { type: 'external', src: '/_astro/hoisted.CrR6Pxta.css' },
        {
          type: 'inline',
          content:
            '.logo-responsive[data-astro-cid-tvrurpns]{width:100%;max-width:200px;height:auto}@media (max-width: 768px){.logo-responsive[data-astro-cid-tvrurpns]{max-width:180px}}\n',
        },
      ],
      routeData: {
        route: '/about',
        isIndex: false,
        type: 'page',
        pattern: '^\\/about$',
        segments: [[{ content: 'about', dynamic: false, spread: false }]],
        params: [],
        component: 'src/pages/about.astro',
        pathname: '/about',
        prerender: false,
        fallbackRoutes: [],
        _meta: { trailingSlash: 'never' },
      },
    },
    {
      file: '',
      links: [],
      scripts: [],
      styles: [],
      routeData: {
        route: '/api/contact',
        isIndex: false,
        type: 'endpoint',
        pattern: '^\\/api\\/contact$',
        segments: [
          [{ content: 'api', dynamic: false, spread: false }],
          [{ content: 'contact', dynamic: false, spread: false }],
        ],
        params: [],
        component: 'src/pages/api/contact.js',
        pathname: '/api/contact',
        prerender: false,
        fallbackRoutes: [],
        _meta: { trailingSlash: 'never' },
      },
    },
    {
      file: '',
      links: [],
      scripts: [],
      styles: [],
      routeData: {
        route: '/api/send-emails',
        isIndex: false,
        type: 'endpoint',
        pattern: '^\\/api\\/send-emails$',
        segments: [
          [{ content: 'api', dynamic: false, spread: false }],
          [{ content: 'send-emails', dynamic: false, spread: false }],
        ],
        params: [],
        component: 'src/pages/api/send-emails.ts',
        pathname: '/api/send-emails',
        prerender: false,
        fallbackRoutes: [],
        _meta: { trailingSlash: 'never' },
      },
    },
    {
      file: '',
      links: [],
      scripts: [],
      styles: [],
      routeData: {
        route: '/api/send-form',
        isIndex: false,
        type: 'endpoint',
        pattern: '^\\/api\\/send-form$',
        segments: [
          [{ content: 'api', dynamic: false, spread: false }],
          [{ content: 'send-form', dynamic: false, spread: false }],
        ],
        params: [],
        component: 'src/pages/api/send-form.js',
        pathname: '/api/send-form',
        prerender: false,
        fallbackRoutes: [],
        _meta: { trailingSlash: 'never' },
      },
    },
    {
      file: '',
      links: [],
      scripts: [],
      styles: [],
      routeData: {
        route: '/api/send-quotes',
        isIndex: false,
        type: 'endpoint',
        pattern: '^\\/api\\/send-quotes$',
        segments: [
          [{ content: 'api', dynamic: false, spread: false }],
          [{ content: 'send-quotes', dynamic: false, spread: false }],
        ],
        params: [],
        component: 'src/pages/api/send-quotes.ts',
        pathname: '/api/send-quotes',
        prerender: false,
        fallbackRoutes: [],
        _meta: { trailingSlash: 'never' },
      },
    },
    {
      file: '',
      links: [],
      scripts: [],
      styles: [],
      routeData: {
        route: '/api',
        isIndex: true,
        type: 'page',
        pattern: '^\\/api$',
        segments: [[{ content: 'api', dynamic: false, spread: false }]],
        params: [],
        component: 'src/pages/api/index.astro',
        pathname: '/api',
        prerender: false,
        fallbackRoutes: [],
        _meta: { trailingSlash: 'never' },
      },
    },
    {
      file: '',
      links: [],
      scripts: [{ type: 'external', value: '/_astro/hoisted.CSTRuyht.js' }],
      styles: [
        { type: 'external', src: '/_astro/calendario-mesa-espiral.D9ZlLmLU.css' },
        {
          type: 'inline',
          content:
            '.selected[data-astro-cid-n2g62zsc]{border:2px solid #007BFF;color:#007bff;background-color:transparent}.size-btn[data-astro-cid-n2g62zsc],.quantity-btn[data-astro-cid-n2g62zsc],.calendar-btn[data-astro-cid-n2g62zsc]{transition:border-color .3s ease,color .3s ease}.size-btn[data-astro-cid-n2g62zsc]:hover,.quantity-btn[data-astro-cid-n2g62zsc]:hover,.calendar-btn[data-astro-cid-n2g62zsc]:hover{border-color:#0056b3}.size-btn[data-astro-cid-n2g62zsc],.quantity-btn[data-astro-cid-n2g62zsc],.calendar-btn[data-astro-cid-n2g62zsc]{width:100%}.form-btn[data-astro-cid-n2g62zsc]{display:block;width:100%;padding:.75rem;border:1px solid #ccc;border-radius:9999px;text-align:left;background-color:#fff;transition:border-color .3s ease,color .3s ease}.form-btn[data-astro-cid-n2g62zsc]:hover{border-color:#007bff}.contact-info[data-astro-cid-n2g62zsc]{display:grid;grid-template-columns:1fr;gap:1.5rem;width:100%}@media (min-width: 640px){.size-btn[data-astro-cid-n2g62zsc],.quantity-btn[data-astro-cid-n2g62zsc],.calendar-btn[data-astro-cid-n2g62zsc]{width:auto}}@media (min-width: 768px){.contact-info[data-astro-cid-n2g62zsc]{grid-template-columns:repeat(2,1fr);gap:2rem}#form-section[data-astro-cid-n2g62zsc]{width:66%}}@media (max-width: 767px){#form-section[data-astro-cid-n2g62zsc]{width:100%;padding-left:16px;padding-right:16px}}.input-icon-container[data-astro-cid-n2g62zsc]{position:relative;width:100%}.input-icon-container[data-astro-cid-n2g62zsc] input[data-astro-cid-n2g62zsc]{width:100%;padding-left:2.5rem;padding-right:1rem}.input-icon-container[data-astro-cid-n2g62zsc] input[data-astro-cid-n2g62zsc]:not(:-moz-placeholder-shown)+.icon[data-astro-cid-n2g62zsc]{opacity:0}.input-icon-container[data-astro-cid-n2g62zsc] input[data-astro-cid-n2g62zsc]:not(:placeholder-shown)+.icon[data-astro-cid-n2g62zsc]{opacity:0}.input-icon-container[data-astro-cid-n2g62zsc] input[data-astro-cid-n2g62zsc]:focus+.icon[data-astro-cid-n2g62zsc]{color:#007bff}.input-icon-container[data-astro-cid-n2g62zsc] input[data-astro-cid-n2g62zsc]{width:100%;padding:.5rem 1rem .5rem 2.5rem;line-height:1.5rem}.input-icon-container[data-astro-cid-n2g62zsc] .icon[data-astro-cid-n2g62zsc]{position:absolute;left:.75rem;top:50%;transform:translateY(-50%);pointer-events:none;color:#aaa;transition:opacity .3s ease}.error-message[data-astro-cid-n2g62zsc]{color:red;font-size:.875rem;margin-top:.25rem}.hidden[data-astro-cid-n2g62zsc]{display:none}\n.isbgBlck[data-astro-cid-4wsjtibl]{background-color:#fff}html.dark .isbgBlck[data-astro-cid-4wsjtibl]{background-color:#0e112a}.btnbottom[data-astro-cid-rhv6ztfp]{padding-bottom:0!important}\n.logo-responsive[data-astro-cid-tvrurpns]{width:100%;max-width:200px;height:auto}@media (max-width: 768px){.logo-responsive[data-astro-cid-tvrurpns]{max-width:180px}}\n',
        },
      ],
      routeData: {
        route: '/calendario-mesa-espiral',
        isIndex: false,
        type: 'page',
        pattern: '^\\/calendario-mesa-espiral$',
        segments: [[{ content: 'calendario-mesa-espiral', dynamic: false, spread: false }]],
        params: [],
        component: 'src/pages/calendario-mesa-espiral.astro',
        pathname: '/calendario-mesa-espiral',
        prerender: false,
        fallbackRoutes: [],
        _meta: { trailingSlash: 'never' },
      },
    },
    {
      file: '',
      links: [],
      scripts: [{ type: 'external', value: '/_astro/hoisted.bFmygbQ5.js' }],
      styles: [
        { type: 'external', src: '/_astro/hoisted.CrR6Pxta.css' },
        { type: 'external', src: '/_astro/navigation.X6JekhOX.css' },
        { type: 'external', src: '/_astro/calendario-mesa-espiral.D9ZlLmLU.css' },
        {
          type: 'inline',
          content:
            '.swiper-container[data-astro-cid-rs6gz7a4]{position:relative;height:600px}.swiper[data-astro-cid-rs6gz7a4].main{width:100%;height:80%}.swiper[data-astro-cid-rs6gz7a4].thumbs{width:100%;height:20%;box-sizing:border-box;padding:10px 0}.swiper-slide[data-astro-cid-rs6gz7a4]{text-align:center;font-size:18px;background:#fff;display:flex;justify-content:center;align-items:center;background-size:cover;background-position:center}.thumbs[data-astro-cid-rs6gz7a4] .swiper-slide[data-astro-cid-rs6gz7a4]{width:25%;height:100%;opacity:.4}.thumbs[data-astro-cid-rs6gz7a4] .swiper-slide-thumb-active[data-astro-cid-rs6gz7a4]{opacity:1}.swiper-slide[data-astro-cid-rs6gz7a4] img[data-astro-cid-rs6gz7a4]{display:block;height:100%;width:100%;-o-object-fit:cover;object-fit:cover}.container[data-astro-cid-3w6r54vr]{display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%}.gallery-container[data-astro-cid-3w6r54vr]{padding:20px;width:100%}@media (min-width: 1024px){.container[data-astro-cid-3w6r54vr]{flex-direction:row}.text-container[data-astro-cid-3w6r54vr],.gallery-container[data-astro-cid-3w6r54vr]{width:50%}}@media (max-width: 1024px){.container[data-astro-cid-3w6r54vr]{flex-direction:column}.gallery-container[data-astro-cid-3w6r54vr]{padding-top:0}}\n.isbgBlck[data-astro-cid-4wsjtibl]{background-color:#fff}html.dark .isbgBlck[data-astro-cid-4wsjtibl]{background-color:#0e112a}.btnbottom[data-astro-cid-rhv6ztfp]{padding-bottom:0!important}\n.logo-responsive[data-astro-cid-tvrurpns]{width:100%;max-width:200px;height:auto}@media (max-width: 768px){.logo-responsive[data-astro-cid-tvrurpns]{max-width:180px}}\n.selected[data-astro-cid-u5m6gt6g]{border:2px solid #007BFF;color:#007bff;background-color:transparent}.size-btn[data-astro-cid-u5m6gt6g],.quantity-btn[data-astro-cid-u5m6gt6g],.calendar-btn[data-astro-cid-u5m6gt6g]{transition:border-color .3s ease,color .3s ease}.size-btn[data-astro-cid-u5m6gt6g]:hover,.quantity-btn[data-astro-cid-u5m6gt6g]:hover,.calendar-btn[data-astro-cid-u5m6gt6g]:hover{border-color:#0056b3}.size-btn[data-astro-cid-u5m6gt6g],.quantity-btn[data-astro-cid-u5m6gt6g],.calendar-btn[data-astro-cid-u5m6gt6g]{width:100%}@media (min-width: 640px){.size-btn[data-astro-cid-u5m6gt6g],.quantity-btn[data-astro-cid-u5m6gt6g],.calendar-btn[data-astro-cid-u5m6gt6g]{width:auto}}.form-btn[data-astro-cid-u5m6gt6g]{display:block;width:100%;padding:.75rem;border:1px solid #ccc;border-radius:9999px;text-align:left;background-color:#fff;transition:border-color .3s ease,color .3s ease}.form-btn[data-astro-cid-u5m6gt6g]:hover{border-color:#007bff}.contact-info[data-astro-cid-u5m6gt6g]{display:grid;grid-template-columns:1fr;gap:1.5rem;width:100%}@media (min-width: 768px){.contact-info[data-astro-cid-u5m6gt6g]{grid-template-columns:repeat(2,1fr);gap:2rem}}.size-container[data-astro-cid-u5m6gt6g]{display:none}.show[data-astro-cid-u5m6gt6g]{display:flex}.input-icon-container[data-astro-cid-u5m6gt6g]{position:relative;width:100%}.input-icon-container[data-astro-cid-u5m6gt6g] input[data-astro-cid-u5m6gt6g]{width:100%;padding-left:2.5rem;padding-right:1rem}.input-icon-container[data-astro-cid-u5m6gt6g] input[data-astro-cid-u5m6gt6g]:not(:-moz-placeholder-shown)+.icon[data-astro-cid-u5m6gt6g]{opacity:0}.input-icon-container[data-astro-cid-u5m6gt6g] input[data-astro-cid-u5m6gt6g]:not(:placeholder-shown)+.icon[data-astro-cid-u5m6gt6g]{opacity:0}.input-icon-container[data-astro-cid-u5m6gt6g] input[data-astro-cid-u5m6gt6g]:focus+.icon[data-astro-cid-u5m6gt6g]{color:#007bff}.input-icon-container[data-astro-cid-u5m6gt6g] input[data-astro-cid-u5m6gt6g]{width:100%;padding:.5rem 1rem .5rem 2.5rem;line-height:1.5rem}.input-icon-container[data-astro-cid-u5m6gt6g] .icon[data-astro-cid-u5m6gt6g]{position:absolute;left:.75rem;top:50%;transform:translateY(-50%);pointer-events:none;color:#aaa;transition:opacity .3s ease}.error-message[data-astro-cid-u5m6gt6g]{color:red;font-size:.875rem;margin-top:.25rem}.hidden[data-astro-cid-u5m6gt6g]{display:none}\n',
        },
      ],
      routeData: {
        route: '/calendario-mesa-triangular',
        isIndex: false,
        type: 'page',
        pattern: '^\\/calendario-mesa-triangular$',
        segments: [[{ content: 'calendario-mesa-triangular', dynamic: false, spread: false }]],
        params: [],
        component: 'src/pages/calendario-mesa-triangular.astro',
        pathname: '/calendario-mesa-triangular',
        prerender: false,
        fallbackRoutes: [],
        _meta: { trailingSlash: 'never' },
      },
    },
    {
      file: '',
      links: [],
      scripts: [{ type: 'external', value: '/_astro/hoisted.bFmygbQ5.js' }],
      styles: [
        { type: 'external', src: '/_astro/hoisted.CrR6Pxta.css' },
        { type: 'external', src: '/_astro/navigation.X6JekhOX.css' },
        { type: 'external', src: '/_astro/calendario-mesa-espiral.D9ZlLmLU.css' },
        {
          type: 'inline',
          content:
            '.swiper-container[data-astro-cid-rs6gz7a4]{position:relative;height:600px}.swiper[data-astro-cid-rs6gz7a4].main{width:100%;height:80%}.swiper[data-astro-cid-rs6gz7a4].thumbs{width:100%;height:20%;box-sizing:border-box;padding:10px 0}.swiper-slide[data-astro-cid-rs6gz7a4]{text-align:center;font-size:18px;background:#fff;display:flex;justify-content:center;align-items:center;background-size:cover;background-position:center}.thumbs[data-astro-cid-rs6gz7a4] .swiper-slide[data-astro-cid-rs6gz7a4]{width:25%;height:100%;opacity:.4}.thumbs[data-astro-cid-rs6gz7a4] .swiper-slide-thumb-active[data-astro-cid-rs6gz7a4]{opacity:1}.swiper-slide[data-astro-cid-rs6gz7a4] img[data-astro-cid-rs6gz7a4]{display:block;height:100%;width:100%;-o-object-fit:cover;object-fit:cover}.container[data-astro-cid-3w6r54vr]{display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%}.gallery-container[data-astro-cid-3w6r54vr]{padding:20px;width:100%}@media (min-width: 1024px){.container[data-astro-cid-3w6r54vr]{flex-direction:row}.text-container[data-astro-cid-3w6r54vr],.gallery-container[data-astro-cid-3w6r54vr]{width:50%}}@media (max-width: 1024px){.container[data-astro-cid-3w6r54vr]{flex-direction:column}.gallery-container[data-astro-cid-3w6r54vr]{padding-top:0}}\n.isbgBlck[data-astro-cid-4wsjtibl]{background-color:#fff}html.dark .isbgBlck[data-astro-cid-4wsjtibl]{background-color:#0e112a}.btnbottom[data-astro-cid-rhv6ztfp]{padding-bottom:0!important}\n.logo-responsive[data-astro-cid-tvrurpns]{width:100%;max-width:200px;height:auto}@media (max-width: 768px){.logo-responsive[data-astro-cid-tvrurpns]{max-width:180px}}\n.selected[data-astro-cid-u5m6gt6g]{border:2px solid #007BFF;color:#007bff;background-color:transparent}.size-btn[data-astro-cid-u5m6gt6g],.quantity-btn[data-astro-cid-u5m6gt6g],.calendar-btn[data-astro-cid-u5m6gt6g]{transition:border-color .3s ease,color .3s ease}.size-btn[data-astro-cid-u5m6gt6g]:hover,.quantity-btn[data-astro-cid-u5m6gt6g]:hover,.calendar-btn[data-astro-cid-u5m6gt6g]:hover{border-color:#0056b3}.size-btn[data-astro-cid-u5m6gt6g],.quantity-btn[data-astro-cid-u5m6gt6g],.calendar-btn[data-astro-cid-u5m6gt6g]{width:100%}@media (min-width: 640px){.size-btn[data-astro-cid-u5m6gt6g],.quantity-btn[data-astro-cid-u5m6gt6g],.calendar-btn[data-astro-cid-u5m6gt6g]{width:auto}}.form-btn[data-astro-cid-u5m6gt6g]{display:block;width:100%;padding:.75rem;border:1px solid #ccc;border-radius:9999px;text-align:left;background-color:#fff;transition:border-color .3s ease,color .3s ease}.form-btn[data-astro-cid-u5m6gt6g]:hover{border-color:#007bff}.contact-info[data-astro-cid-u5m6gt6g]{display:grid;grid-template-columns:1fr;gap:1.5rem;width:100%}@media (min-width: 768px){.contact-info[data-astro-cid-u5m6gt6g]{grid-template-columns:repeat(2,1fr);gap:2rem}}.size-container[data-astro-cid-u5m6gt6g]{display:none}.show[data-astro-cid-u5m6gt6g]{display:flex}.input-icon-container[data-astro-cid-u5m6gt6g]{position:relative;width:100%}.input-icon-container[data-astro-cid-u5m6gt6g] input[data-astro-cid-u5m6gt6g]{width:100%;padding-left:2.5rem;padding-right:1rem}.input-icon-container[data-astro-cid-u5m6gt6g] input[data-astro-cid-u5m6gt6g]:not(:-moz-placeholder-shown)+.icon[data-astro-cid-u5m6gt6g]{opacity:0}.input-icon-container[data-astro-cid-u5m6gt6g] input[data-astro-cid-u5m6gt6g]:not(:placeholder-shown)+.icon[data-astro-cid-u5m6gt6g]{opacity:0}.input-icon-container[data-astro-cid-u5m6gt6g] input[data-astro-cid-u5m6gt6g]:focus+.icon[data-astro-cid-u5m6gt6g]{color:#007bff}.input-icon-container[data-astro-cid-u5m6gt6g] input[data-astro-cid-u5m6gt6g]{width:100%;padding:.5rem 1rem .5rem 2.5rem;line-height:1.5rem}.input-icon-container[data-astro-cid-u5m6gt6g] .icon[data-astro-cid-u5m6gt6g]{position:absolute;left:.75rem;top:50%;transform:translateY(-50%);pointer-events:none;color:#aaa;transition:opacity .3s ease}.error-message[data-astro-cid-u5m6gt6g]{color:red;font-size:.875rem;margin-top:.25rem}.hidden[data-astro-cid-u5m6gt6g]{display:none}\n',
        },
      ],
      routeData: {
        route: '/calendario-pared-espiral',
        isIndex: false,
        type: 'page',
        pattern: '^\\/calendario-pared-espiral$',
        segments: [[{ content: 'calendario-pared-espiral', dynamic: false, spread: false }]],
        params: [],
        component: 'src/pages/calendario-pared-espiral.astro',
        pathname: '/calendario-pared-espiral',
        prerender: false,
        fallbackRoutes: [],
        _meta: { trailingSlash: 'never' },
      },
    },
    {
      file: '',
      links: [],
      scripts: [{ type: 'external', value: '/_astro/hoisted.bFmygbQ5.js' }],
      styles: [
        { type: 'external', src: '/_astro/hoisted.CrR6Pxta.css' },
        { type: 'external', src: '/_astro/navigation.X6JekhOX.css' },
        { type: 'external', src: '/_astro/calendario-mesa-espiral.D9ZlLmLU.css' },
        {
          type: 'inline',
          content:
            '.swiper-container[data-astro-cid-rs6gz7a4]{position:relative;height:600px}.swiper[data-astro-cid-rs6gz7a4].main{width:100%;height:80%}.swiper[data-astro-cid-rs6gz7a4].thumbs{width:100%;height:20%;box-sizing:border-box;padding:10px 0}.swiper-slide[data-astro-cid-rs6gz7a4]{text-align:center;font-size:18px;background:#fff;display:flex;justify-content:center;align-items:center;background-size:cover;background-position:center}.thumbs[data-astro-cid-rs6gz7a4] .swiper-slide[data-astro-cid-rs6gz7a4]{width:25%;height:100%;opacity:.4}.thumbs[data-astro-cid-rs6gz7a4] .swiper-slide-thumb-active[data-astro-cid-rs6gz7a4]{opacity:1}.swiper-slide[data-astro-cid-rs6gz7a4] img[data-astro-cid-rs6gz7a4]{display:block;height:100%;width:100%;-o-object-fit:cover;object-fit:cover}.container[data-astro-cid-3w6r54vr]{display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%}.gallery-container[data-astro-cid-3w6r54vr]{padding:20px;width:100%}@media (min-width: 1024px){.container[data-astro-cid-3w6r54vr]{flex-direction:row}.text-container[data-astro-cid-3w6r54vr],.gallery-container[data-astro-cid-3w6r54vr]{width:50%}}@media (max-width: 1024px){.container[data-astro-cid-3w6r54vr]{flex-direction:column}.gallery-container[data-astro-cid-3w6r54vr]{padding-top:0}}\n.isbgBlck[data-astro-cid-4wsjtibl]{background-color:#fff}html.dark .isbgBlck[data-astro-cid-4wsjtibl]{background-color:#0e112a}.btnbottom[data-astro-cid-rhv6ztfp]{padding-bottom:0!important}\n.logo-responsive[data-astro-cid-tvrurpns]{width:100%;max-width:200px;height:auto}@media (max-width: 768px){.logo-responsive[data-astro-cid-tvrurpns]{max-width:180px}}\n.selected[data-astro-cid-u5m6gt6g]{border:2px solid #007BFF;color:#007bff;background-color:transparent}.size-btn[data-astro-cid-u5m6gt6g],.quantity-btn[data-astro-cid-u5m6gt6g],.calendar-btn[data-astro-cid-u5m6gt6g]{transition:border-color .3s ease,color .3s ease}.size-btn[data-astro-cid-u5m6gt6g]:hover,.quantity-btn[data-astro-cid-u5m6gt6g]:hover,.calendar-btn[data-astro-cid-u5m6gt6g]:hover{border-color:#0056b3}.size-btn[data-astro-cid-u5m6gt6g],.quantity-btn[data-astro-cid-u5m6gt6g],.calendar-btn[data-astro-cid-u5m6gt6g]{width:100%}@media (min-width: 640px){.size-btn[data-astro-cid-u5m6gt6g],.quantity-btn[data-astro-cid-u5m6gt6g],.calendar-btn[data-astro-cid-u5m6gt6g]{width:auto}}.form-btn[data-astro-cid-u5m6gt6g]{display:block;width:100%;padding:.75rem;border:1px solid #ccc;border-radius:9999px;text-align:left;background-color:#fff;transition:border-color .3s ease,color .3s ease}.form-btn[data-astro-cid-u5m6gt6g]:hover{border-color:#007bff}.contact-info[data-astro-cid-u5m6gt6g]{display:grid;grid-template-columns:1fr;gap:1.5rem;width:100%}@media (min-width: 768px){.contact-info[data-astro-cid-u5m6gt6g]{grid-template-columns:repeat(2,1fr);gap:2rem}}.size-container[data-astro-cid-u5m6gt6g]{display:none}.show[data-astro-cid-u5m6gt6g]{display:flex}.input-icon-container[data-astro-cid-u5m6gt6g]{position:relative;width:100%}.input-icon-container[data-astro-cid-u5m6gt6g] input[data-astro-cid-u5m6gt6g]{width:100%;padding-left:2.5rem;padding-right:1rem}.input-icon-container[data-astro-cid-u5m6gt6g] input[data-astro-cid-u5m6gt6g]:not(:-moz-placeholder-shown)+.icon[data-astro-cid-u5m6gt6g]{opacity:0}.input-icon-container[data-astro-cid-u5m6gt6g] input[data-astro-cid-u5m6gt6g]:not(:placeholder-shown)+.icon[data-astro-cid-u5m6gt6g]{opacity:0}.input-icon-container[data-astro-cid-u5m6gt6g] input[data-astro-cid-u5m6gt6g]:focus+.icon[data-astro-cid-u5m6gt6g]{color:#007bff}.input-icon-container[data-astro-cid-u5m6gt6g] input[data-astro-cid-u5m6gt6g]{width:100%;padding:.5rem 1rem .5rem 2.5rem;line-height:1.5rem}.input-icon-container[data-astro-cid-u5m6gt6g] .icon[data-astro-cid-u5m6gt6g]{position:absolute;left:.75rem;top:50%;transform:translateY(-50%);pointer-events:none;color:#aaa;transition:opacity .3s ease}.error-message[data-astro-cid-u5m6gt6g]{color:red;font-size:.875rem;margin-top:.25rem}.hidden[data-astro-cid-u5m6gt6g]{display:none}\n',
        },
      ],
      routeData: {
        route: '/calendario-pared-revista',
        isIndex: false,
        type: 'page',
        pattern: '^\\/calendario-pared-revista$',
        segments: [[{ content: 'calendario-pared-revista', dynamic: false, spread: false }]],
        params: [],
        component: 'src/pages/calendario-pared-revista.astro',
        pathname: '/calendario-pared-revista',
        prerender: false,
        fallbackRoutes: [],
        _meta: { trailingSlash: 'never' },
      },
    },
    {
      file: '',
      links: [],
      scripts: [],
      styles: [],
      routeData: {
        route: '/contact',
        isIndex: false,
        type: 'page',
        pattern: '^\\/contact$',
        segments: [[{ content: 'contact', dynamic: false, spread: false }]],
        params: [],
        component: 'src/pages/contact.astro',
        pathname: '/contact',
        prerender: false,
        fallbackRoutes: [],
        _meta: { trailingSlash: 'never' },
      },
    },
    {
      file: '',
      links: [],
      scripts: [{ type: 'external', value: '/_astro/hoisted.2daoxv0f.js' }],
      styles: [
        { type: 'external', src: '/_astro/calendario-mesa-espiral.D9ZlLmLU.css' },
        {
          type: 'inline',
          content:
            '.isbgBlck[data-astro-cid-4wsjtibl]{background-color:#fff}html.dark .isbgBlck[data-astro-cid-4wsjtibl]{background-color:#0e112a}.btnbottom[data-astro-cid-rhv6ztfp]{padding-bottom:0!important}\n.logo-responsive[data-astro-cid-tvrurpns]{width:100%;max-width:200px;height:auto}@media (max-width: 768px){.logo-responsive[data-astro-cid-tvrurpns]{max-width:180px}}\n',
        },
      ],
      routeData: {
        route: '/contacto',
        isIndex: false,
        type: 'page',
        pattern: '^\\/contacto$',
        segments: [[{ content: 'contacto', dynamic: false, spread: false }]],
        params: [],
        component: 'src/pages/contacto.astro',
        pathname: '/contacto',
        prerender: false,
        fallbackRoutes: [],
        _meta: { trailingSlash: 'never' },
      },
    },
    {
      file: '',
      links: [],
      scripts: [{ type: 'external', value: '/_astro/hoisted.2daoxv0f.js' }],
      styles: [
        { type: 'external', src: '/_astro/calendario-mesa-espiral.D9ZlLmLU.css' },
        {
          type: 'inline',
          content:
            '.isbgBlck[data-astro-cid-4wsjtibl]{background-color:#fff}html.dark .isbgBlck[data-astro-cid-4wsjtibl]{background-color:#0e112a}.btnbottom[data-astro-cid-rhv6ztfp]{padding-bottom:0!important}\n.logo-responsive[data-astro-cid-tvrurpns]{width:100%;max-width:200px;height:auto}@media (max-width: 768px){.logo-responsive[data-astro-cid-tvrurpns]{max-width:180px}}\n',
        },
      ],
      routeData: {
        route: '/formulario',
        isIndex: false,
        type: 'page',
        pattern: '^\\/formulario$',
        segments: [[{ content: 'formulario', dynamic: false, spread: false }]],
        params: [],
        component: 'src/pages/formulario.astro',
        pathname: '/formulario',
        prerender: false,
        fallbackRoutes: [],
        _meta: { trailingSlash: 'never' },
      },
    },
    {
      file: '',
      links: [],
      scripts: [],
      styles: [],
      routeData: {
        route: '/formularios/calendarios-mesa-espiral',
        isIndex: false,
        type: 'page',
        pattern: '^\\/formularios\\/calendarios-mesa-espiral$',
        segments: [
          [{ content: 'formularios', dynamic: false, spread: false }],
          [{ content: 'calendarios-mesa-espiral', dynamic: false, spread: false }],
        ],
        params: [],
        component: 'src/pages/formularios/calendarios-mesa-espiral.astro',
        pathname: '/formularios/calendarios-mesa-espiral',
        prerender: false,
        fallbackRoutes: [],
        _meta: { trailingSlash: 'never' },
      },
    },
    {
      file: '',
      links: [],
      scripts: [{ type: 'external', value: '/_astro/hoisted.2daoxv0f.js' }],
      styles: [
        { type: 'external', src: '/_astro/calendario-mesa-espiral.D9ZlLmLU.css' },
        {
          type: 'inline',
          content:
            '.isbgBlck[data-astro-cid-4wsjtibl]{background-color:#fff}html.dark .isbgBlck[data-astro-cid-4wsjtibl]{background-color:#0e112a}.btnbottom[data-astro-cid-rhv6ztfp]{padding-bottom:0!important}\n.logo-responsive[data-astro-cid-tvrurpns]{width:100%;max-width:200px;height:auto}@media (max-width: 768px){.logo-responsive[data-astro-cid-tvrurpns]{max-width:180px}}\n',
        },
      ],
      routeData: {
        route: '/formularios/calendarios-mesa-triangular',
        isIndex: false,
        type: 'page',
        pattern: '^\\/formularios\\/calendarios-mesa-triangular$',
        segments: [
          [{ content: 'formularios', dynamic: false, spread: false }],
          [{ content: 'calendarios-mesa-triangular', dynamic: false, spread: false }],
        ],
        params: [],
        component: 'src/pages/formularios/calendarios-mesa-triangular.astro',
        pathname: '/formularios/calendarios-mesa-triangular',
        prerender: false,
        fallbackRoutes: [],
        _meta: { trailingSlash: 'never' },
      },
    },
    {
      file: '',
      links: [],
      scripts: [{ type: 'external', value: '/_astro/hoisted.2daoxv0f.js' }],
      styles: [
        { type: 'external', src: '/_astro/calendario-mesa-espiral.D9ZlLmLU.css' },
        {
          type: 'inline',
          content:
            '.isbgBlck[data-astro-cid-4wsjtibl]{background-color:#fff}html.dark .isbgBlck[data-astro-cid-4wsjtibl]{background-color:#0e112a}.btnbottom[data-astro-cid-rhv6ztfp]{padding-bottom:0!important}\n.logo-responsive[data-astro-cid-tvrurpns]{width:100%;max-width:200px;height:auto}@media (max-width: 768px){.logo-responsive[data-astro-cid-tvrurpns]{max-width:180px}}\n',
        },
      ],
      routeData: {
        route: '/formularios/calendarios-pared-espiral',
        isIndex: false,
        type: 'page',
        pattern: '^\\/formularios\\/calendarios-pared-espiral$',
        segments: [
          [{ content: 'formularios', dynamic: false, spread: false }],
          [{ content: 'calendarios-pared-espiral', dynamic: false, spread: false }],
        ],
        params: [],
        component: 'src/pages/formularios/calendarios-pared-espiral.astro',
        pathname: '/formularios/calendarios-pared-espiral',
        prerender: false,
        fallbackRoutes: [],
        _meta: { trailingSlash: 'never' },
      },
    },
    {
      file: '',
      links: [],
      scripts: [{ type: 'external', value: '/_astro/hoisted.2daoxv0f.js' }],
      styles: [
        { type: 'external', src: '/_astro/calendario-mesa-espiral.D9ZlLmLU.css' },
        {
          type: 'inline',
          content:
            '.isbgBlck[data-astro-cid-4wsjtibl]{background-color:#fff}html.dark .isbgBlck[data-astro-cid-4wsjtibl]{background-color:#0e112a}.btnbottom[data-astro-cid-rhv6ztfp]{padding-bottom:0!important}\n.logo-responsive[data-astro-cid-tvrurpns]{width:100%;max-width:200px;height:auto}@media (max-width: 768px){.logo-responsive[data-astro-cid-tvrurpns]{max-width:180px}}\n',
        },
      ],
      routeData: {
        route: '/formularios/calendarios-pared-revista',
        isIndex: false,
        type: 'page',
        pattern: '^\\/formularios\\/calendarios-pared-revista$',
        segments: [
          [{ content: 'formularios', dynamic: false, spread: false }],
          [{ content: 'calendarios-pared-revista', dynamic: false, spread: false }],
        ],
        params: [],
        component: 'src/pages/formularios/calendarios-pared-revista.astro',
        pathname: '/formularios/calendarios-pared-revista',
        prerender: false,
        fallbackRoutes: [],
        _meta: { trailingSlash: 'never' },
      },
    },
    {
      file: '',
      links: [],
      scripts: [],
      styles: [],
      routeData: {
        route: '/formularios',
        isIndex: true,
        type: 'page',
        pattern: '^\\/formularios$',
        segments: [[{ content: 'formularios', dynamic: false, spread: false }]],
        params: [],
        component: 'src/pages/formularios/index.astro',
        pathname: '/formularios',
        prerender: false,
        fallbackRoutes: [],
        _meta: { trailingSlash: 'never' },
      },
    },
    {
      file: '',
      links: [],
      scripts: [{ type: 'external', value: '/_astro/hoisted.bFmygbQ5.js' }],
      styles: [
        { type: 'external', src: '/_astro/hoisted.CrR6Pxta.css' },
        { type: 'external', src: '/_astro/navigation.X6JekhOX.css' },
        { type: 'external', src: '/_astro/calendario-mesa-espiral.D9ZlLmLU.css' },
        {
          type: 'inline',
          content:
            '.swiper-container[data-astro-cid-rs6gz7a4]{position:relative;height:600px}.swiper[data-astro-cid-rs6gz7a4].main{width:100%;height:80%}.swiper[data-astro-cid-rs6gz7a4].thumbs{width:100%;height:20%;box-sizing:border-box;padding:10px 0}.swiper-slide[data-astro-cid-rs6gz7a4]{text-align:center;font-size:18px;background:#fff;display:flex;justify-content:center;align-items:center;background-size:cover;background-position:center}.thumbs[data-astro-cid-rs6gz7a4] .swiper-slide[data-astro-cid-rs6gz7a4]{width:25%;height:100%;opacity:.4}.thumbs[data-astro-cid-rs6gz7a4] .swiper-slide-thumb-active[data-astro-cid-rs6gz7a4]{opacity:1}.swiper-slide[data-astro-cid-rs6gz7a4] img[data-astro-cid-rs6gz7a4]{display:block;height:100%;width:100%;-o-object-fit:cover;object-fit:cover}.container[data-astro-cid-3w6r54vr]{display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%}.gallery-container[data-astro-cid-3w6r54vr]{padding:20px;width:100%}@media (min-width: 1024px){.container[data-astro-cid-3w6r54vr]{flex-direction:row}.text-container[data-astro-cid-3w6r54vr],.gallery-container[data-astro-cid-3w6r54vr]{width:50%}}@media (max-width: 1024px){.container[data-astro-cid-3w6r54vr]{flex-direction:column}.gallery-container[data-astro-cid-3w6r54vr]{padding-top:0}}\n.isbgBlck[data-astro-cid-4wsjtibl]{background-color:#fff}html.dark .isbgBlck[data-astro-cid-4wsjtibl]{background-color:#0e112a}.btnbottom[data-astro-cid-rhv6ztfp]{padding-bottom:0!important}\n.logo-responsive[data-astro-cid-tvrurpns]{width:100%;max-width:200px;height:auto}@media (max-width: 768px){.logo-responsive[data-astro-cid-tvrurpns]{max-width:180px}}\n.selected[data-astro-cid-u5m6gt6g]{border:2px solid #007BFF;color:#007bff;background-color:transparent}.size-btn[data-astro-cid-u5m6gt6g],.quantity-btn[data-astro-cid-u5m6gt6g],.calendar-btn[data-astro-cid-u5m6gt6g]{transition:border-color .3s ease,color .3s ease}.size-btn[data-astro-cid-u5m6gt6g]:hover,.quantity-btn[data-astro-cid-u5m6gt6g]:hover,.calendar-btn[data-astro-cid-u5m6gt6g]:hover{border-color:#0056b3}.size-btn[data-astro-cid-u5m6gt6g],.quantity-btn[data-astro-cid-u5m6gt6g],.calendar-btn[data-astro-cid-u5m6gt6g]{width:100%}@media (min-width: 640px){.size-btn[data-astro-cid-u5m6gt6g],.quantity-btn[data-astro-cid-u5m6gt6g],.calendar-btn[data-astro-cid-u5m6gt6g]{width:auto}}.form-btn[data-astro-cid-u5m6gt6g]{display:block;width:100%;padding:.75rem;border:1px solid #ccc;border-radius:9999px;text-align:left;background-color:#fff;transition:border-color .3s ease,color .3s ease}.form-btn[data-astro-cid-u5m6gt6g]:hover{border-color:#007bff}.contact-info[data-astro-cid-u5m6gt6g]{display:grid;grid-template-columns:1fr;gap:1.5rem;width:100%}@media (min-width: 768px){.contact-info[data-astro-cid-u5m6gt6g]{grid-template-columns:repeat(2,1fr);gap:2rem}}.size-container[data-astro-cid-u5m6gt6g]{display:none}.show[data-astro-cid-u5m6gt6g]{display:flex}.input-icon-container[data-astro-cid-u5m6gt6g]{position:relative;width:100%}.input-icon-container[data-astro-cid-u5m6gt6g] input[data-astro-cid-u5m6gt6g]{width:100%;padding-left:2.5rem;padding-right:1rem}.input-icon-container[data-astro-cid-u5m6gt6g] input[data-astro-cid-u5m6gt6g]:not(:-moz-placeholder-shown)+.icon[data-astro-cid-u5m6gt6g]{opacity:0}.input-icon-container[data-astro-cid-u5m6gt6g] input[data-astro-cid-u5m6gt6g]:not(:placeholder-shown)+.icon[data-astro-cid-u5m6gt6g]{opacity:0}.input-icon-container[data-astro-cid-u5m6gt6g] input[data-astro-cid-u5m6gt6g]:focus+.icon[data-astro-cid-u5m6gt6g]{color:#007bff}.input-icon-container[data-astro-cid-u5m6gt6g] input[data-astro-cid-u5m6gt6g]{width:100%;padding:.5rem 1rem .5rem 2.5rem;line-height:1.5rem}.input-icon-container[data-astro-cid-u5m6gt6g] .icon[data-astro-cid-u5m6gt6g]{position:absolute;left:.75rem;top:50%;transform:translateY(-50%);pointer-events:none;color:#aaa;transition:opacity .3s ease}.error-message[data-astro-cid-u5m6gt6g]{color:red;font-size:.875rem;margin-top:.25rem}.hidden[data-astro-cid-u5m6gt6g]{display:none}\n',
        },
      ],
      routeData: {
        route: '/homes/mobile-app',
        isIndex: false,
        type: 'page',
        pattern: '^\\/homes\\/mobile-app$',
        segments: [
          [{ content: 'homes', dynamic: false, spread: false }],
          [{ content: 'mobile-app', dynamic: false, spread: false }],
        ],
        params: [],
        component: 'src/pages/homes/mobile-app.astro',
        pathname: '/homes/mobile-app',
        prerender: false,
        fallbackRoutes: [],
        _meta: { trailingSlash: 'never' },
      },
    },
    {
      file: '',
      links: [],
      scripts: [{ type: 'external', value: '/_astro/hoisted.BsIc2PM2.js' }],
      styles: [
        { type: 'external', src: '/_astro/navigation.X6JekhOX.css' },
        { type: 'external', src: '/_astro/calendario-mesa-espiral.D9ZlLmLU.css' },
        {
          type: 'inline',
          content:
            '.slider-container[data-astro-cid-ycqiuziw]{position:absolute;inset:0;z-index:-1;overflow:hidden;height:auto;opacity:.8;filter:grayscale(100%) blur(2px)}.swiper[data-astro-cid-ycqiuziw]{width:100%;height:100%}.swiper-wrapper[data-astro-cid-ycqiuziw]{display:flex;width:100%;height:100%}.swiper-slide[data-astro-cid-ycqiuziw]{width:100%;height:100%}.swiper-slide[data-astro-cid-ycqiuziw] img[data-astro-cid-ycqiuziw]{width:auto;height:100%;-o-object-fit:cover;object-fit:cover}.swiper-button-next[data-astro-cid-ycqiuziw],.swiper-button-prev[data-astro-cid-ycqiuziw]{color:#333}@media (max-width: 768px){.slider-container[data-astro-cid-ycqiuziw]{display:none}}.isTxtColor[data-astro-cid-iks44ci7],html.dark .isTxtColor[data-astro-cid-iks44ci7]{color:#030620}html.dark .isTxtSub[data-astro-cid-iks44ci7]{color:#6d29d9}slider-container[data-astro-cid-iks44ci7]{position:absolute;inset:0;z-index:-1}.swiper[data-astro-cid-iks44ci7]{width:100%;height:100%}.swiper-wrapper[data-astro-cid-iks44ci7]{display:flex;width:100%;height:100%}.swiper-slide[data-astro-cid-iks44ci7]{width:100%;height:100%}.swiper-slide[data-astro-cid-iks44ci7] img[data-astro-cid-iks44ci7]{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}\n.isbgBlck[data-astro-cid-4wsjtibl]{background-color:#fff}html.dark .isbgBlck[data-astro-cid-4wsjtibl]{background-color:#0e112a}.btnbottom[data-astro-cid-rhv6ztfp]{padding-bottom:0!important}\n.logo-responsive[data-astro-cid-tvrurpns]{width:100%;max-width:200px;height:auto}@media (max-width: 768px){.logo-responsive[data-astro-cid-tvrurpns]{max-width:180px}}\n.selected[data-astro-cid-u5m6gt6g]{border:2px solid #007BFF;color:#007bff;background-color:transparent}.size-btn[data-astro-cid-u5m6gt6g],.quantity-btn[data-astro-cid-u5m6gt6g],.calendar-btn[data-astro-cid-u5m6gt6g]{transition:border-color .3s ease,color .3s ease}.size-btn[data-astro-cid-u5m6gt6g]:hover,.quantity-btn[data-astro-cid-u5m6gt6g]:hover,.calendar-btn[data-astro-cid-u5m6gt6g]:hover{border-color:#0056b3}.size-btn[data-astro-cid-u5m6gt6g],.quantity-btn[data-astro-cid-u5m6gt6g],.calendar-btn[data-astro-cid-u5m6gt6g]{width:100%}@media (min-width: 640px){.size-btn[data-astro-cid-u5m6gt6g],.quantity-btn[data-astro-cid-u5m6gt6g],.calendar-btn[data-astro-cid-u5m6gt6g]{width:auto}}.form-btn[data-astro-cid-u5m6gt6g]{display:block;width:100%;padding:.75rem;border:1px solid #ccc;border-radius:9999px;text-align:left;background-color:#fff;transition:border-color .3s ease,color .3s ease}.form-btn[data-astro-cid-u5m6gt6g]:hover{border-color:#007bff}.contact-info[data-astro-cid-u5m6gt6g]{display:grid;grid-template-columns:1fr;gap:1.5rem;width:100%}@media (min-width: 768px){.contact-info[data-astro-cid-u5m6gt6g]{grid-template-columns:repeat(2,1fr);gap:2rem}}.size-container[data-astro-cid-u5m6gt6g]{display:none}.show[data-astro-cid-u5m6gt6g]{display:flex}.input-icon-container[data-astro-cid-u5m6gt6g]{position:relative;width:100%}.input-icon-container[data-astro-cid-u5m6gt6g] input[data-astro-cid-u5m6gt6g]{width:100%;padding-left:2.5rem;padding-right:1rem}.input-icon-container[data-astro-cid-u5m6gt6g] input[data-astro-cid-u5m6gt6g]:not(:-moz-placeholder-shown)+.icon[data-astro-cid-u5m6gt6g]{opacity:0}.input-icon-container[data-astro-cid-u5m6gt6g] input[data-astro-cid-u5m6gt6g]:not(:placeholder-shown)+.icon[data-astro-cid-u5m6gt6g]{opacity:0}.input-icon-container[data-astro-cid-u5m6gt6g] input[data-astro-cid-u5m6gt6g]:focus+.icon[data-astro-cid-u5m6gt6g]{color:#007bff}.input-icon-container[data-astro-cid-u5m6gt6g] input[data-astro-cid-u5m6gt6g]{width:100%;padding:.5rem 1rem .5rem 2.5rem;line-height:1.5rem}.input-icon-container[data-astro-cid-u5m6gt6g] .icon[data-astro-cid-u5m6gt6g]{position:absolute;left:.75rem;top:50%;transform:translateY(-50%);pointer-events:none;color:#aaa;transition:opacity .3s ease}.error-message[data-astro-cid-u5m6gt6g]{color:red;font-size:.875rem;margin-top:.25rem}.hidden[data-astro-cid-u5m6gt6g]{display:none}\n',
        },
        { type: 'external', src: '/_astro/hoisted.CrR6Pxta.css' },
      ],
      routeData: {
        route: '/homes/personal',
        isIndex: false,
        type: 'page',
        pattern: '^\\/homes\\/personal$',
        segments: [
          [{ content: 'homes', dynamic: false, spread: false }],
          [{ content: 'personal', dynamic: false, spread: false }],
        ],
        params: [],
        component: 'src/pages/homes/personal.astro',
        pathname: '/homes/personal',
        prerender: false,
        fallbackRoutes: [],
        _meta: { trailingSlash: 'never' },
      },
    },
    {
      file: '',
      links: [],
      scripts: [{ type: 'external', value: '/_astro/hoisted.bFmygbQ5.js' }],
      styles: [
        { type: 'external', src: '/_astro/hoisted.CrR6Pxta.css' },
        { type: 'external', src: '/_astro/navigation.X6JekhOX.css' },
        { type: 'external', src: '/_astro/calendario-mesa-espiral.D9ZlLmLU.css' },
        {
          type: 'inline',
          content:
            '.swiper-container[data-astro-cid-rs6gz7a4]{position:relative;height:600px}.swiper[data-astro-cid-rs6gz7a4].main{width:100%;height:80%}.swiper[data-astro-cid-rs6gz7a4].thumbs{width:100%;height:20%;box-sizing:border-box;padding:10px 0}.swiper-slide[data-astro-cid-rs6gz7a4]{text-align:center;font-size:18px;background:#fff;display:flex;justify-content:center;align-items:center;background-size:cover;background-position:center}.thumbs[data-astro-cid-rs6gz7a4] .swiper-slide[data-astro-cid-rs6gz7a4]{width:25%;height:100%;opacity:.4}.thumbs[data-astro-cid-rs6gz7a4] .swiper-slide-thumb-active[data-astro-cid-rs6gz7a4]{opacity:1}.swiper-slide[data-astro-cid-rs6gz7a4] img[data-astro-cid-rs6gz7a4]{display:block;height:100%;width:100%;-o-object-fit:cover;object-fit:cover}.container[data-astro-cid-3w6r54vr]{display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%}.gallery-container[data-astro-cid-3w6r54vr]{padding:20px;width:100%}@media (min-width: 1024px){.container[data-astro-cid-3w6r54vr]{flex-direction:row}.text-container[data-astro-cid-3w6r54vr],.gallery-container[data-astro-cid-3w6r54vr]{width:50%}}@media (max-width: 1024px){.container[data-astro-cid-3w6r54vr]{flex-direction:column}.gallery-container[data-astro-cid-3w6r54vr]{padding-top:0}}\n.isbgBlck[data-astro-cid-4wsjtibl]{background-color:#fff}html.dark .isbgBlck[data-astro-cid-4wsjtibl]{background-color:#0e112a}.btnbottom[data-astro-cid-rhv6ztfp]{padding-bottom:0!important}\n.logo-responsive[data-astro-cid-tvrurpns]{width:100%;max-width:200px;height:auto}@media (max-width: 768px){.logo-responsive[data-astro-cid-tvrurpns]{max-width:180px}}\n',
        },
      ],
      routeData: {
        route: '/homes/saas',
        isIndex: false,
        type: 'page',
        pattern: '^\\/homes\\/saas$',
        segments: [
          [{ content: 'homes', dynamic: false, spread: false }],
          [{ content: 'saas', dynamic: false, spread: false }],
        ],
        params: [],
        component: 'src/pages/homes/saas.astro',
        pathname: '/homes/saas',
        prerender: false,
        fallbackRoutes: [],
        _meta: { trailingSlash: 'never' },
      },
    },
    {
      file: '',
      links: [],
      scripts: [{ type: 'external', value: '/_astro/hoisted.D0dtKRhL.js' }],
      styles: [
        { type: 'external', src: '/_astro/navigation.X6JekhOX.css' },
        { type: 'external', src: '/_astro/calendario-mesa-espiral.D9ZlLmLU.css' },
        {
          type: 'inline',
          content:
            '.slider-container[data-astro-cid-ycqiuziw]{position:absolute;inset:0;z-index:-1;overflow:hidden;height:auto;opacity:.8;filter:grayscale(100%) blur(2px)}.swiper[data-astro-cid-ycqiuziw]{width:100%;height:100%}.swiper-wrapper[data-astro-cid-ycqiuziw]{display:flex;width:100%;height:100%}.swiper-slide[data-astro-cid-ycqiuziw]{width:100%;height:100%}.swiper-slide[data-astro-cid-ycqiuziw] img[data-astro-cid-ycqiuziw]{width:auto;height:100%;-o-object-fit:cover;object-fit:cover}.swiper-button-next[data-astro-cid-ycqiuziw],.swiper-button-prev[data-astro-cid-ycqiuziw]{color:#333}@media (max-width: 768px){.slider-container[data-astro-cid-ycqiuziw]{display:none}}.isTxtColor[data-astro-cid-iks44ci7],html.dark .isTxtColor[data-astro-cid-iks44ci7]{color:#030620}html.dark .isTxtSub[data-astro-cid-iks44ci7]{color:#6d29d9}slider-container[data-astro-cid-iks44ci7]{position:absolute;inset:0;z-index:-1}.swiper[data-astro-cid-iks44ci7]{width:100%;height:100%}.swiper-wrapper[data-astro-cid-iks44ci7]{display:flex;width:100%;height:100%}.swiper-slide[data-astro-cid-iks44ci7]{width:100%;height:100%}.swiper-slide[data-astro-cid-iks44ci7] img[data-astro-cid-iks44ci7]{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}\n.isbgBlck[data-astro-cid-4wsjtibl]{background-color:#fff}html.dark .isbgBlck[data-astro-cid-4wsjtibl]{background-color:#0e112a}.btnbottom[data-astro-cid-rhv6ztfp]{padding-bottom:0!important}\n.selected[data-astro-cid-u5m6gt6g]{border:2px solid #007BFF;color:#007bff;background-color:transparent}.size-btn[data-astro-cid-u5m6gt6g],.quantity-btn[data-astro-cid-u5m6gt6g],.calendar-btn[data-astro-cid-u5m6gt6g]{transition:border-color .3s ease,color .3s ease}.size-btn[data-astro-cid-u5m6gt6g]:hover,.quantity-btn[data-astro-cid-u5m6gt6g]:hover,.calendar-btn[data-astro-cid-u5m6gt6g]:hover{border-color:#0056b3}.size-btn[data-astro-cid-u5m6gt6g],.quantity-btn[data-astro-cid-u5m6gt6g],.calendar-btn[data-astro-cid-u5m6gt6g]{width:100%}@media (min-width: 640px){.size-btn[data-astro-cid-u5m6gt6g],.quantity-btn[data-astro-cid-u5m6gt6g],.calendar-btn[data-astro-cid-u5m6gt6g]{width:auto}}.form-btn[data-astro-cid-u5m6gt6g]{display:block;width:100%;padding:.75rem;border:1px solid #ccc;border-radius:9999px;text-align:left;background-color:#fff;transition:border-color .3s ease,color .3s ease}.form-btn[data-astro-cid-u5m6gt6g]:hover{border-color:#007bff}.contact-info[data-astro-cid-u5m6gt6g]{display:grid;grid-template-columns:1fr;gap:1.5rem;width:100%}@media (min-width: 768px){.contact-info[data-astro-cid-u5m6gt6g]{grid-template-columns:repeat(2,1fr);gap:2rem}}.size-container[data-astro-cid-u5m6gt6g]{display:none}.show[data-astro-cid-u5m6gt6g]{display:flex}.input-icon-container[data-astro-cid-u5m6gt6g]{position:relative;width:100%}.input-icon-container[data-astro-cid-u5m6gt6g] input[data-astro-cid-u5m6gt6g]{width:100%;padding-left:2.5rem;padding-right:1rem}.input-icon-container[data-astro-cid-u5m6gt6g] input[data-astro-cid-u5m6gt6g]:not(:-moz-placeholder-shown)+.icon[data-astro-cid-u5m6gt6g]{opacity:0}.input-icon-container[data-astro-cid-u5m6gt6g] input[data-astro-cid-u5m6gt6g]:not(:placeholder-shown)+.icon[data-astro-cid-u5m6gt6g]{opacity:0}.input-icon-container[data-astro-cid-u5m6gt6g] input[data-astro-cid-u5m6gt6g]:focus+.icon[data-astro-cid-u5m6gt6g]{color:#007bff}.input-icon-container[data-astro-cid-u5m6gt6g] input[data-astro-cid-u5m6gt6g]{width:100%;padding:.5rem 1rem .5rem 2.5rem;line-height:1.5rem}.input-icon-container[data-astro-cid-u5m6gt6g] .icon[data-astro-cid-u5m6gt6g]{position:absolute;left:.75rem;top:50%;transform:translateY(-50%);pointer-events:none;color:#aaa;transition:opacity .3s ease}.error-message[data-astro-cid-u5m6gt6g]{color:red;font-size:.875rem;margin-top:.25rem}.hidden[data-astro-cid-u5m6gt6g]{display:none}\n.logo-responsive[data-astro-cid-tvrurpns]{width:100%;max-width:200px;height:auto}@media (max-width: 768px){.logo-responsive[data-astro-cid-tvrurpns]{max-width:180px}}\n.twitter-tweet:not(.twitter-tweet-rendered){padding:var(--tc-padding, 1em);border:1px solid var(--tc-border-color, #cfd9de)}.twitter-tweet:not(.twitter-tweet-rendered)>:first-child{margin-top:0}.twitter-tweet:not(.twitter-tweet-rendered)>:last-child{margin-bottom:0}\nlite-youtube{background-color:#000;position:relative;display:block;contain:content;background-position:center center;background-size:cover;cursor:pointer;max-width:720px}lite-youtube:before{content:attr(data-title);display:block;position:absolute;top:0;background-image:linear-gradient(180deg,#000000ab,#0000008a 14%,#00000026 54%,#0000000d 72%,#0000 94%);height:99px;width:100%;font-family:YouTube Noto,Roboto,Arial,Helvetica,sans-serif;color:#eee;text-shadow:0 0 2px rgba(0,0,0,.5);font-size:18px;padding:25px 20px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;box-sizing:border-box}lite-youtube:hover:before{color:#fff}lite-youtube:after{content:"";display:block;padding-bottom:56.25%}lite-youtube>iframe{width:100%;height:100%;position:absolute;top:0;left:0;border:0}lite-youtube>.lty-playbtn{display:block;width:100%;height:100%;background:no-repeat center/68px 48px;background-image:url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 68 48"><path d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.63 3.26-5.42 6.19C.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z" fill="red"/><path d="M45 24 27 14v20" fill="white"/></svg>\');position:absolute;cursor:pointer;z-index:1;filter:grayscale(100%);transition:filter .1s cubic-bezier(0,0,.2,1);border:0}lite-youtube:hover>.lty-playbtn,lite-youtube .lty-playbtn:focus{filter:none}lite-youtube.lyt-activated{cursor:unset}lite-youtube.lyt-activated:before,lite-youtube.lyt-activated>.lty-playbtn{opacity:0;pointer-events:none}.lyt-visually-hidden{clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}\n',
        },
        { type: 'external', src: '/_astro/hoisted.CrR6Pxta.css' },
        {
          type: 'inline',
          content:
            'lite-youtube>iframe{all:unset!important;width:100%!important;height:100%!important;position:absolute!important;inset:0!important;border:0!important}\nlite-vimeo{font-size:10px;background-color:#000;position:relative;display:block;contain:content;background-position:center center;background-size:cover}lite-vimeo:after{content:"";display:block;padding-bottom:56.25%}lite-vimeo>iframe{all:unset!important;width:100%!important;height:100%!important;position:absolute!important;inset:0!important;border:0!important}lite-vimeo>.ltv-playbtn{content:"";position:absolute;inset:0;width:100%;background:transparent;outline:0;border:0;cursor:pointer}lite-vimeo>.ltv-playbtn:before{width:6.5em;height:4em;background:#172322bf;opacity:.8;border-radius:.25rem;transition:all .2s cubic-bezier(0,0,.2,1)}lite-vimeo>.ltv-playbtn:focus:before{outline:auto}lite-vimeo:hover>.ltv-playbtn:before{background-color:#00adef;background-color:var(--ltv-color, #00adef);opacity:1}lite-vimeo>.ltv-playbtn:after{border-style:solid;border-width:1em 0 1em 1.7em;border-color:transparent transparent transparent #fff}lite-vimeo>.ltv-playbtn:before,lite-vimeo>.ltv-playbtn:after{content:"";position:absolute;top:50%;left:50%;transform:translate3d(-50%,-50%,0)}lite-vimeo.ltv-activated:before,lite-vimeo.ltv-activated>.ltv-playbtn{cursor:unset;opacity:0;pointer-events:none}\n',
        },
      ],
      routeData: {
        route: '/homes/startup',
        isIndex: false,
        type: 'page',
        pattern: '^\\/homes\\/startup$',
        segments: [
          [{ content: 'homes', dynamic: false, spread: false }],
          [{ content: 'startup', dynamic: false, spread: false }],
        ],
        params: [],
        component: 'src/pages/homes/startup.astro',
        pathname: '/homes/startup',
        prerender: false,
        fallbackRoutes: [],
        _meta: { trailingSlash: 'never' },
      },
    },
    {
      file: '',
      links: [],
      scripts: [{ type: 'external', value: '/_astro/hoisted.2daoxv0f.js' }],
      styles: [
        { type: 'external', src: '/_astro/calendario-mesa-espiral.D9ZlLmLU.css' },
        {
          type: 'inline',
          content:
            '.isbgBlck[data-astro-cid-4wsjtibl]{background-color:#fff}html.dark .isbgBlck[data-astro-cid-4wsjtibl]{background-color:#0e112a}.btnbottom[data-astro-cid-rhv6ztfp]{padding-bottom:0!important}\n.logo-responsive[data-astro-cid-tvrurpns]{width:100%;max-width:200px;height:auto}@media (max-width: 768px){.logo-responsive[data-astro-cid-tvrurpns]{max-width:180px}}\n.selected[data-astro-cid-u5m6gt6g]{border:2px solid #007BFF;color:#007bff;background-color:transparent}.size-btn[data-astro-cid-u5m6gt6g],.quantity-btn[data-astro-cid-u5m6gt6g],.calendar-btn[data-astro-cid-u5m6gt6g]{transition:border-color .3s ease,color .3s ease}.size-btn[data-astro-cid-u5m6gt6g]:hover,.quantity-btn[data-astro-cid-u5m6gt6g]:hover,.calendar-btn[data-astro-cid-u5m6gt6g]:hover{border-color:#0056b3}.size-btn[data-astro-cid-u5m6gt6g],.quantity-btn[data-astro-cid-u5m6gt6g],.calendar-btn[data-astro-cid-u5m6gt6g]{width:100%}@media (min-width: 640px){.size-btn[data-astro-cid-u5m6gt6g],.quantity-btn[data-astro-cid-u5m6gt6g],.calendar-btn[data-astro-cid-u5m6gt6g]{width:auto}}.form-btn[data-astro-cid-u5m6gt6g]{display:block;width:100%;padding:.75rem;border:1px solid #ccc;border-radius:9999px;text-align:left;background-color:#fff;transition:border-color .3s ease,color .3s ease}.form-btn[data-astro-cid-u5m6gt6g]:hover{border-color:#007bff}.contact-info[data-astro-cid-u5m6gt6g]{display:grid;grid-template-columns:1fr;gap:1.5rem;width:100%}@media (min-width: 768px){.contact-info[data-astro-cid-u5m6gt6g]{grid-template-columns:repeat(2,1fr);gap:2rem}}.size-container[data-astro-cid-u5m6gt6g]{display:none}.show[data-astro-cid-u5m6gt6g]{display:flex}.input-icon-container[data-astro-cid-u5m6gt6g]{position:relative;width:100%}.input-icon-container[data-astro-cid-u5m6gt6g] input[data-astro-cid-u5m6gt6g]{width:100%;padding-left:2.5rem;padding-right:1rem}.input-icon-container[data-astro-cid-u5m6gt6g] input[data-astro-cid-u5m6gt6g]:not(:-moz-placeholder-shown)+.icon[data-astro-cid-u5m6gt6g]{opacity:0}.input-icon-container[data-astro-cid-u5m6gt6g] input[data-astro-cid-u5m6gt6g]:not(:placeholder-shown)+.icon[data-astro-cid-u5m6gt6g]{opacity:0}.input-icon-container[data-astro-cid-u5m6gt6g] input[data-astro-cid-u5m6gt6g]:focus+.icon[data-astro-cid-u5m6gt6g]{color:#007bff}.input-icon-container[data-astro-cid-u5m6gt6g] input[data-astro-cid-u5m6gt6g]{width:100%;padding:.5rem 1rem .5rem 2.5rem;line-height:1.5rem}.input-icon-container[data-astro-cid-u5m6gt6g] .icon[data-astro-cid-u5m6gt6g]{position:absolute;left:.75rem;top:50%;transform:translateY(-50%);pointer-events:none;color:#aaa;transition:opacity .3s ease}.error-message[data-astro-cid-u5m6gt6g]{color:red;font-size:.875rem;margin-top:.25rem}.hidden[data-astro-cid-u5m6gt6g]{display:none}\n',
        },
      ],
      routeData: {
        route: '/pricing',
        isIndex: false,
        type: 'page',
        pattern: '^\\/pricing$',
        segments: [[{ content: 'pricing', dynamic: false, spread: false }]],
        params: [],
        component: 'src/pages/pricing.astro',
        pathname: '/pricing',
        prerender: false,
        fallbackRoutes: [],
        _meta: { trailingSlash: 'never' },
      },
    },
    {
      file: '',
      links: [],
      scripts: [{ type: 'external', value: '/_astro/hoisted.2daoxv0f.js' }],
      styles: [
        { type: 'external', src: '/_astro/calendario-mesa-espiral.D9ZlLmLU.css' },
        {
          type: 'inline',
          content:
            '.isbgBlck[data-astro-cid-4wsjtibl]{background-color:#fff}html.dark .isbgBlck[data-astro-cid-4wsjtibl]{background-color:#0e112a}.btnbottom[data-astro-cid-rhv6ztfp]{padding-bottom:0!important}\n.logo-responsive[data-astro-cid-tvrurpns]{width:100%;max-width:200px;height:auto}@media (max-width: 768px){.logo-responsive[data-astro-cid-tvrurpns]{max-width:180px}}\n',
        },
      ],
      routeData: {
        route: '/privacy',
        isIndex: false,
        type: 'page',
        pattern: '^\\/privacy$',
        segments: [[{ content: 'privacy', dynamic: false, spread: false }]],
        params: [],
        component: 'src/pages/privacy.md',
        pathname: '/privacy',
        prerender: false,
        fallbackRoutes: [],
        _meta: { trailingSlash: 'never' },
      },
    },
    {
      file: '',
      links: [],
      scripts: [],
      styles: [],
      routeData: {
        route: '/rss.xml',
        isIndex: false,
        type: 'endpoint',
        pattern: '^\\/rss\\.xml$',
        segments: [[{ content: 'rss.xml', dynamic: false, spread: false }]],
        params: [],
        component: 'src/pages/rss.xml.ts',
        pathname: '/rss.xml',
        prerender: false,
        fallbackRoutes: [],
        _meta: { trailingSlash: 'never' },
      },
    },
    {
      file: '',
      links: [],
      scripts: [{ type: 'external', value: '/_astro/hoisted.BsIc2PM2.js' }],
      styles: [
        { type: 'external', src: '/_astro/navigation.X6JekhOX.css' },
        {
          type: 'inline',
          content:
            '.selected[data-astro-cid-u5m6gt6g]{border:2px solid #007BFF;color:#007bff;background-color:transparent}.size-btn[data-astro-cid-u5m6gt6g],.quantity-btn[data-astro-cid-u5m6gt6g],.calendar-btn[data-astro-cid-u5m6gt6g]{transition:border-color .3s ease,color .3s ease}.size-btn[data-astro-cid-u5m6gt6g]:hover,.quantity-btn[data-astro-cid-u5m6gt6g]:hover,.calendar-btn[data-astro-cid-u5m6gt6g]:hover{border-color:#0056b3}.size-btn[data-astro-cid-u5m6gt6g],.quantity-btn[data-astro-cid-u5m6gt6g],.calendar-btn[data-astro-cid-u5m6gt6g]{width:100%}@media (min-width: 640px){.size-btn[data-astro-cid-u5m6gt6g],.quantity-btn[data-astro-cid-u5m6gt6g],.calendar-btn[data-astro-cid-u5m6gt6g]{width:auto}}.form-btn[data-astro-cid-u5m6gt6g]{display:block;width:100%;padding:.75rem;border:1px solid #ccc;border-radius:9999px;text-align:left;background-color:#fff;transition:border-color .3s ease,color .3s ease}.form-btn[data-astro-cid-u5m6gt6g]:hover{border-color:#007bff}.contact-info[data-astro-cid-u5m6gt6g]{display:grid;grid-template-columns:1fr;gap:1.5rem;width:100%}@media (min-width: 768px){.contact-info[data-astro-cid-u5m6gt6g]{grid-template-columns:repeat(2,1fr);gap:2rem}}.size-container[data-astro-cid-u5m6gt6g]{display:none}.show[data-astro-cid-u5m6gt6g]{display:flex}.input-icon-container[data-astro-cid-u5m6gt6g]{position:relative;width:100%}.input-icon-container[data-astro-cid-u5m6gt6g] input[data-astro-cid-u5m6gt6g]{width:100%;padding-left:2.5rem;padding-right:1rem}.input-icon-container[data-astro-cid-u5m6gt6g] input[data-astro-cid-u5m6gt6g]:not(:-moz-placeholder-shown)+.icon[data-astro-cid-u5m6gt6g]{opacity:0}.input-icon-container[data-astro-cid-u5m6gt6g] input[data-astro-cid-u5m6gt6g]:not(:placeholder-shown)+.icon[data-astro-cid-u5m6gt6g]{opacity:0}.input-icon-container[data-astro-cid-u5m6gt6g] input[data-astro-cid-u5m6gt6g]:focus+.icon[data-astro-cid-u5m6gt6g]{color:#007bff}.input-icon-container[data-astro-cid-u5m6gt6g] input[data-astro-cid-u5m6gt6g]{width:100%;padding:.5rem 1rem .5rem 2.5rem;line-height:1.5rem}.input-icon-container[data-astro-cid-u5m6gt6g] .icon[data-astro-cid-u5m6gt6g]{position:absolute;left:.75rem;top:50%;transform:translateY(-50%);pointer-events:none;color:#aaa;transition:opacity .3s ease}.error-message[data-astro-cid-u5m6gt6g]{color:red;font-size:.875rem;margin-top:.25rem}.hidden[data-astro-cid-u5m6gt6g]{display:none}\n.slider-container[data-astro-cid-ycqiuziw]{position:absolute;inset:0;z-index:-1;overflow:hidden;height:auto;opacity:.8;filter:grayscale(100%) blur(2px)}.swiper[data-astro-cid-ycqiuziw]{width:100%;height:100%}.swiper-wrapper[data-astro-cid-ycqiuziw]{display:flex;width:100%;height:100%}.swiper-slide[data-astro-cid-ycqiuziw]{width:100%;height:100%}.swiper-slide[data-astro-cid-ycqiuziw] img[data-astro-cid-ycqiuziw]{width:auto;height:100%;-o-object-fit:cover;object-fit:cover}.swiper-button-next[data-astro-cid-ycqiuziw],.swiper-button-prev[data-astro-cid-ycqiuziw]{color:#333}@media (max-width: 768px){.slider-container[data-astro-cid-ycqiuziw]{display:none}}.isTxtColor[data-astro-cid-iks44ci7],html.dark .isTxtColor[data-astro-cid-iks44ci7]{color:#030620}html.dark .isTxtSub[data-astro-cid-iks44ci7]{color:#6d29d9}slider-container[data-astro-cid-iks44ci7]{position:absolute;inset:0;z-index:-1}.swiper[data-astro-cid-iks44ci7]{width:100%;height:100%}.swiper-wrapper[data-astro-cid-iks44ci7]{display:flex;width:100%;height:100%}.swiper-slide[data-astro-cid-iks44ci7]{width:100%;height:100%}.swiper-slide[data-astro-cid-iks44ci7] img[data-astro-cid-iks44ci7]{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}\n',
        },
        { type: 'external', src: '/_astro/calendario-mesa-espiral.D9ZlLmLU.css' },
        {
          type: 'inline',
          content:
            '.isbgBlck[data-astro-cid-4wsjtibl]{background-color:#fff}html.dark .isbgBlck[data-astro-cid-4wsjtibl]{background-color:#0e112a}.btnbottom[data-astro-cid-rhv6ztfp]{padding-bottom:0!important}\n',
        },
        { type: 'external', src: '/_astro/hoisted.CrR6Pxta.css' },
        {
          type: 'inline',
          content:
            '.logo-responsive[data-astro-cid-tvrurpns]{width:100%;max-width:200px;height:auto}@media (max-width: 768px){.logo-responsive[data-astro-cid-tvrurpns]{max-width:180px}}\n',
        },
      ],
      routeData: {
        route: '/services',
        isIndex: false,
        type: 'page',
        pattern: '^\\/services$',
        segments: [[{ content: 'services', dynamic: false, spread: false }]],
        params: [],
        component: 'src/pages/services.astro',
        pathname: '/services',
        prerender: false,
        fallbackRoutes: [],
        _meta: { trailingSlash: 'never' },
      },
    },
    {
      file: '',
      links: [],
      scripts: [{ type: 'external', value: '/_astro/hoisted.2daoxv0f.js' }],
      styles: [
        { type: 'external', src: '/_astro/calendario-mesa-espiral.D9ZlLmLU.css' },
        {
          type: 'inline',
          content:
            '.isbgBlck[data-astro-cid-4wsjtibl]{background-color:#fff}html.dark .isbgBlck[data-astro-cid-4wsjtibl]{background-color:#0e112a}.btnbottom[data-astro-cid-rhv6ztfp]{padding-bottom:0!important}\n.logo-responsive[data-astro-cid-tvrurpns]{width:100%;max-width:200px;height:auto}@media (max-width: 768px){.logo-responsive[data-astro-cid-tvrurpns]{max-width:180px}}\n',
        },
      ],
      routeData: {
        route: '/terms',
        isIndex: false,
        type: 'page',
        pattern: '^\\/terms$',
        segments: [[{ content: 'terms', dynamic: false, spread: false }]],
        params: [],
        component: 'src/pages/terms.md',
        pathname: '/terms',
        prerender: false,
        fallbackRoutes: [],
        _meta: { trailingSlash: 'never' },
      },
    },
    {
      file: '',
      links: [],
      scripts: [{ type: 'external', value: '/_astro/hoisted.BsIc2PM2.js' }],
      styles: [
        { type: 'external', src: '/_astro/navigation.X6JekhOX.css' },
        { type: 'external', src: '/_astro/calendario-mesa-espiral.D9ZlLmLU.css' },
        {
          type: 'inline',
          content:
            '.slider-container[data-astro-cid-ycqiuziw]{position:absolute;inset:0;z-index:-1;overflow:hidden;height:auto;opacity:.8;filter:grayscale(100%) blur(2px)}.swiper[data-astro-cid-ycqiuziw]{width:100%;height:100%}.swiper-wrapper[data-astro-cid-ycqiuziw]{display:flex;width:100%;height:100%}.swiper-slide[data-astro-cid-ycqiuziw]{width:100%;height:100%}.swiper-slide[data-astro-cid-ycqiuziw] img[data-astro-cid-ycqiuziw]{width:auto;height:100%;-o-object-fit:cover;object-fit:cover}.swiper-button-next[data-astro-cid-ycqiuziw],.swiper-button-prev[data-astro-cid-ycqiuziw]{color:#333}@media (max-width: 768px){.slider-container[data-astro-cid-ycqiuziw]{display:none}}.isTxtColor[data-astro-cid-iks44ci7],html.dark .isTxtColor[data-astro-cid-iks44ci7]{color:#030620}html.dark .isTxtSub[data-astro-cid-iks44ci7]{color:#6d29d9}slider-container[data-astro-cid-iks44ci7]{position:absolute;inset:0;z-index:-1}.swiper[data-astro-cid-iks44ci7]{width:100%;height:100%}.swiper-wrapper[data-astro-cid-iks44ci7]{display:flex;width:100%;height:100%}.swiper-slide[data-astro-cid-iks44ci7]{width:100%;height:100%}.swiper-slide[data-astro-cid-iks44ci7] img[data-astro-cid-iks44ci7]{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}\n.isbgBlck[data-astro-cid-4wsjtibl]{background-color:#fff}html.dark .isbgBlck[data-astro-cid-4wsjtibl]{background-color:#0e112a}.btnbottom[data-astro-cid-rhv6ztfp]{padding-bottom:0!important}\n.logo-responsive[data-astro-cid-tvrurpns]{width:100%;max-width:200px;height:auto}@media (max-width: 768px){.logo-responsive[data-astro-cid-tvrurpns]{max-width:180px}}\n',
        },
        { type: 'external', src: '/_astro/hoisted.CrR6Pxta.css' },
      ],
      routeData: {
        route: '/',
        isIndex: true,
        type: 'page',
        pattern: '^\\/$',
        segments: [],
        params: [],
        component: 'src/pages/index.astro',
        pathname: '/',
        prerender: false,
        fallbackRoutes: [],
        _meta: { trailingSlash: 'never' },
      },
    },
  ],
  site: 'https://astrowind.vercel.app',
  base: '/',
  trailingSlash: 'never',
  compressHTML: true,
  componentMetadata: [
    ['C:/Users/Jordi/Documents/web/calendaris/src/pages/contact.astro', { propagation: 'none', containsHead: true }],
    [
      'C:/Users/Jordi/Documents/web/calendaris/src/pages/formularios/calendarios-mesa-espiral.astro',
      { propagation: 'none', containsHead: true },
    ],
    [
      'C:/Users/Jordi/Documents/web/calendaris/src/pages/calendario-pared-espiral.astro',
      { propagation: 'in-tree', containsHead: true },
    ],
    [
      'C:/Users/Jordi/Documents/web/calendaris/src/pages/calendario-pared-revista.astro',
      { propagation: 'in-tree', containsHead: true },
    ],
    [
      'C:/Users/Jordi/Documents/web/calendaris/src/pages/homes/mobile-app.astro',
      { propagation: 'in-tree', containsHead: true },
    ],
    [
      'C:/Users/Jordi/Documents/web/calendaris/src/pages/homes/personal.astro',
      { propagation: 'in-tree', containsHead: true },
    ],
    [
      'C:/Users/Jordi/Documents/web/calendaris/src/pages/homes/startup.astro',
      { propagation: 'in-tree', containsHead: true },
    ],
    ['C:/Users/Jordi/Documents/web/calendaris/src/pages/pricing.astro', { propagation: 'in-tree', containsHead: true }],
    [
      'C:/Users/Jordi/Documents/web/calendaris/src/pages/services.astro',
      { propagation: 'in-tree', containsHead: true },
    ],
    [
      'C:/Users/Jordi/Documents/web/calendaris/src/pages/calendario-mesa-triangular.astro',
      { propagation: 'in-tree', containsHead: true },
    ],
    ['\u0000astro:content', { propagation: 'in-tree', containsHead: false }],
    ['C:/Users/Jordi/Documents/web/calendaris/src/utils/blog.ts', { propagation: 'in-tree', containsHead: false }],
    [
      'C:/Users/Jordi/Documents/web/calendaris/src/components/widgets/BlogLatestPosts.astro',
      { propagation: 'in-tree', containsHead: false },
    ],
    ['\u0000@astro-page:src/pages/homes/personal@_@astro', { propagation: 'in-tree', containsHead: false }],
    ['\u0000@astrojs-ssr-virtual-entry', { propagation: 'in-tree', containsHead: false }],
    [
      'C:/Users/Jordi/Documents/web/calendaris/src/pages/homes/saas.astro',
      { propagation: 'in-tree', containsHead: true },
    ],
    ['\u0000@astro-page:src/pages/homes/saas@_@astro', { propagation: 'in-tree', containsHead: false }],
    ['C:/Users/Jordi/Documents/web/calendaris/src/pages/rss.xml.ts', { propagation: 'in-tree', containsHead: false }],
    ['\u0000@astro-page:src/pages/rss.xml@_@ts', { propagation: 'in-tree', containsHead: false }],
    [
      'C:/Users/Jordi/Documents/web/calendaris/src/layouts/PageLayout.astro',
      { propagation: 'in-tree', containsHead: false },
    ],
    [
      'C:/Users/Jordi/Documents/web/calendaris/src/layouts/LandingLayout2.astro',
      { propagation: 'in-tree', containsHead: false },
    ],
    [
      'C:/Users/Jordi/Documents/web/calendaris/src/pages/calendario-mesa-espiral.astro',
      { propagation: 'in-tree', containsHead: true },
    ],
    ['\u0000@astro-page:src/pages/calendario-mesa-espiral@_@astro', { propagation: 'in-tree', containsHead: false }],
    ['\u0000@astro-page:src/pages/calendario-mesa-triangular@_@astro', { propagation: 'in-tree', containsHead: false }],
    ['\u0000@astro-page:src/pages/calendario-pared-espiral@_@astro', { propagation: 'in-tree', containsHead: false }],
    ['\u0000@astro-page:src/pages/calendario-pared-revista@_@astro', { propagation: 'in-tree', containsHead: false }],
    [
      'C:/Users/Jordi/Documents/web/calendaris/src/pages/formulario.astro',
      { propagation: 'in-tree', containsHead: true },
    ],
    ['\u0000@astro-page:src/pages/formulario@_@astro', { propagation: 'in-tree', containsHead: false }],
    [
      'C:/Users/Jordi/Documents/web/calendaris/src/layouts/MarkdownLayout.astro',
      { propagation: 'in-tree', containsHead: false },
    ],
    ['C:/Users/Jordi/Documents/web/calendaris/src/pages/privacy.md', { propagation: 'in-tree', containsHead: true }],
    ['\u0000@astro-page:src/pages/privacy@_@md', { propagation: 'in-tree', containsHead: false }],
    ['C:/Users/Jordi/Documents/web/calendaris/src/pages/terms.md', { propagation: 'in-tree', containsHead: true }],
    ['\u0000@astro-page:src/pages/terms@_@md', { propagation: 'in-tree', containsHead: false }],
    ['C:/Users/Jordi/Documents/web/calendaris/src/pages/about.astro', { propagation: 'in-tree', containsHead: true }],
    ['\u0000@astro-page:src/pages/about@_@astro', { propagation: 'in-tree', containsHead: false }],
    [
      'C:/Users/Jordi/Documents/web/calendaris/src/pages/contacto.astro',
      { propagation: 'in-tree', containsHead: true },
    ],
    ['\u0000@astro-page:src/pages/contacto@_@astro', { propagation: 'in-tree', containsHead: false }],
    [
      'C:/Users/Jordi/Documents/web/calendaris/src/pages/formularios/calendarios-mesa-triangular.astro',
      { propagation: 'in-tree', containsHead: true },
    ],
    [
      '\u0000@astro-page:src/pages/formularios/calendarios-mesa-triangular@_@astro',
      { propagation: 'in-tree', containsHead: false },
    ],
    [
      'C:/Users/Jordi/Documents/web/calendaris/src/pages/formularios/calendarios-pared-espiral.astro',
      { propagation: 'in-tree', containsHead: true },
    ],
    [
      '\u0000@astro-page:src/pages/formularios/calendarios-pared-espiral@_@astro',
      { propagation: 'in-tree', containsHead: false },
    ],
    [
      'C:/Users/Jordi/Documents/web/calendaris/src/pages/formularios/calendarios-pared-revista.astro',
      { propagation: 'in-tree', containsHead: true },
    ],
    [
      '\u0000@astro-page:src/pages/formularios/calendarios-pared-revista@_@astro',
      { propagation: 'in-tree', containsHead: false },
    ],
    ['\u0000@astro-page:src/pages/homes/mobile-app@_@astro', { propagation: 'in-tree', containsHead: false }],
    ['\u0000@astro-page:src/pages/homes/startup@_@astro', { propagation: 'in-tree', containsHead: false }],
    ['C:/Users/Jordi/Documents/web/calendaris/src/pages/index.astro', { propagation: 'in-tree', containsHead: true }],
    ['\u0000@astro-page:src/pages/index@_@astro', { propagation: 'in-tree', containsHead: false }],
    ['\u0000@astro-page:src/pages/pricing@_@astro', { propagation: 'in-tree', containsHead: false }],
    ['\u0000@astro-page:src/pages/services@_@astro', { propagation: 'in-tree', containsHead: false }],
    ['C:/Users/Jordi/Documents/web/calendaris/src/pages/404.astro', { propagation: 'in-tree', containsHead: true }],
    [
      'C:/Users/Jordi/Documents/web/calendaris/src/layouts/Layout.astro',
      { propagation: 'in-tree', containsHead: false },
    ],
    ['\u0000@astro-page:src/pages/404@_@astro', { propagation: 'in-tree', containsHead: false }],
  ],
  renderers: [],
  clientDirectives: [
    [
      'idle',
      '(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value=="object"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};"requestIdleCallback"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event("astro:idle"));})();',
    ],
    [
      'load',
      '(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event("astro:load"));})();',
    ],
    [
      'media',
      '(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener("change",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event("astro:media"));})();',
    ],
    [
      'only',
      '(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event("astro:only"));})();',
    ],
    [
      'visible',
      '(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value=="object"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event("astro:visible"));})();',
    ],
  ],
  entryModules: {
    '\u0000@astrojs-ssr-adapter': '_@astrojs-ssr-adapter.mjs',
    '\u0000noop-middleware': '_noop-middleware.mjs',
    '\u0000@astrojs-ssr-virtual-entry': 'entry.mjs',
    '\u0000@astro-page:src/pages/404@_@astro': 'pages/404.astro.mjs',
    '\u0000@astro-page:src/pages/about@_@astro': 'pages/about.astro.mjs',
    '\u0000@astro-page:src/pages/api/contact@_@js': 'pages/api/contact.astro.mjs',
    '\u0000@astro-page:src/pages/api/send-emails@_@ts': 'pages/api/send-emails.astro.mjs',
    '\u0000@astro-page:src/pages/api/send-form@_@js': 'pages/api/send-form.astro.mjs',
    '\u0000@astro-page:src/pages/api/send-quotes@_@ts': 'pages/api/send-quotes.astro.mjs',
    '\u0000@astro-page:src/pages/api/index@_@astro': 'pages/api.astro.mjs',
    '\u0000@astro-page:src/pages/calendario-mesa-espiral@_@astro': 'pages/calendario-mesa-espiral.astro.mjs',
    '\u0000@astro-page:src/pages/calendario-mesa-triangular@_@astro': 'pages/calendario-mesa-triangular.astro.mjs',
    '\u0000@astro-page:src/pages/calendario-pared-espiral@_@astro': 'pages/calendario-pared-espiral.astro.mjs',
    '\u0000@astro-page:src/pages/calendario-pared-revista@_@astro': 'pages/calendario-pared-revista.astro.mjs',
    '\u0000@astro-page:src/pages/contact@_@astro': 'pages/contact.astro.mjs',
    '\u0000@astro-page:src/pages/contacto@_@astro': 'pages/contacto.astro.mjs',
    '\u0000@astro-page:src/pages/formulario@_@astro': 'pages/formulario.astro.mjs',
    '\u0000@astro-page:src/pages/formularios/calendarios-mesa-espiral@_@astro':
      'pages/formularios/calendarios-mesa-espiral.astro.mjs',
    '\u0000@astro-page:src/pages/formularios/calendarios-mesa-triangular@_@astro':
      'pages/formularios/calendarios-mesa-triangular.astro.mjs',
    '\u0000@astro-page:src/pages/formularios/calendarios-pared-espiral@_@astro':
      'pages/formularios/calendarios-pared-espiral.astro.mjs',
    '\u0000@astro-page:src/pages/formularios/calendarios-pared-revista@_@astro':
      'pages/formularios/calendarios-pared-revista.astro.mjs',
    '\u0000@astro-page:src/pages/formularios/index@_@astro': 'pages/formularios.astro.mjs',
    '\u0000@astro-page:src/pages/homes/mobile-app@_@astro': 'pages/homes/mobile-app.astro.mjs',
    '\u0000@astro-page:src/pages/homes/personal@_@astro': 'pages/homes/personal.astro.mjs',
    '\u0000@astro-page:src/pages/homes/saas@_@astro': 'pages/homes/saas.astro.mjs',
    '\u0000@astro-page:src/pages/pricing@_@astro': 'pages/pricing.astro.mjs',
    '\u0000@astro-page:src/pages/privacy@_@md': 'pages/privacy.astro.mjs',
    '\u0000@astro-page:src/pages/rss.xml@_@ts': 'pages/rss.xml.astro.mjs',
    '\u0000@astro-page:src/pages/services@_@astro': 'pages/services.astro.mjs',
    '\u0000@astro-page:src/pages/terms@_@md': 'pages/terms.astro.mjs',
    '\u0000@astro-renderers': 'renderers.mjs',
    '\u0000@astro-page:src/pages/index@_@astro': 'pages/index.astro.mjs',
    '\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js': 'pages/_image.astro.mjs',
    '\u0000@astro-page:src/pages/homes/startup@_@astro': 'pages/homes/startup.astro.mjs',
    'C:/Users/Jordi/Documents/web/calendaris/node_modules/astro/dist/env/setup.js':
      'chunks/astro/env-setup_Cr6XTFvb.mjs',
    'C:/Users/Jordi/Documents/web/calendaris/src/assets/images/calendarios/slide1.jpg': 'chunks/slide1_Dy1lrvfd.mjs',
    'C:/Users/Jordi/Documents/web/calendaris/src/assets/images/calendarios/slide2.jpg': 'chunks/slide2_YhrVCGTt.mjs',
    'C:/Users/Jordi/Documents/web/calendaris/src/assets/images/calendarios/slide3.jpg': 'chunks/slide3_X8OqEGb_.mjs',
    'C:/Users/Jordi/Documents/web/calendaris/src/assets/images/mesa/SobremesaEspiral.jpg':
      'chunks/SobremesaEspiral_BgOQ8_Ke.mjs',
    'C:/Users/Jordi/Documents/web/calendaris/src/assets/images/mesa/SobremesaEspiral1.jpg':
      'chunks/SobremesaEspiral1_BNQRH_aV.mjs',
    'C:/Users/Jordi/Documents/web/calendaris/src/assets/images/mesa/SobremesaEspiral2.jpg':
      'chunks/SobremesaEspiral2_DJz2fsjO.mjs',
    'C:/Users/Jordi/Documents/web/calendaris/src/assets/images/mesa/SobremesaEspiral3.jpg':
      'chunks/SobremesaEspiral3_fbgIhLyI.mjs',
    'C:/Users/Jordi/Documents/web/calendaris/src/assets/images/mesa/SobremesaTriangular.jpg':
      'chunks/SobremesaTriangular_CkCNYvS_.mjs',
    'C:/Users/Jordi/Documents/web/calendaris/src/assets/images/mesa/SobremesaTriangular1.jpg':
      'chunks/SobremesaTriangular1_BNesPwGv.mjs',
    'C:/Users/Jordi/Documents/web/calendaris/src/assets/images/mesa/SobremesaTriangular2.jpg':
      'chunks/SobremesaTriangular2_Ceqw9F-D.mjs',
    'C:/Users/Jordi/Documents/web/calendaris/src/assets/images/mesa/SobremesaTriangular3.jpg':
      'chunks/SobremesaTriangular3_BD5qMvaV.mjs',
    'C:/Users/Jordi/Documents/web/calendaris/src/assets/images/pared/ParedEspiral.jpg':
      'chunks/ParedEspiral_DGUvHMiJ.mjs',
    'C:/Users/Jordi/Documents/web/calendaris/src/assets/images/pared/ParedEspiral1.jpg':
      'chunks/ParedEspiral1_CUTanU0x.mjs',
    'C:/Users/Jordi/Documents/web/calendaris/src/assets/images/pared/ParedEspiral2.jpg':
      'chunks/ParedEspiral2_se_jvnni.mjs',
    'C:/Users/Jordi/Documents/web/calendaris/src/assets/images/pared/ParedEspiral3.jpg':
      'chunks/ParedEspiral3_D2PLJM-i.mjs',
    'C:/Users/Jordi/Documents/web/calendaris/src/assets/images/pared/ParedRevista.jpg':
      'chunks/ParedRevista_Dwds71xJ.mjs',
    'C:/Users/Jordi/Documents/web/calendaris/src/assets/images/pared/ParedRevista1.jpg':
      'chunks/ParedRevista1_D8JQFH15.mjs',
    'C:/Users/Jordi/Documents/web/calendaris/src/assets/images/pared/ParedRevista2.jpg':
      'chunks/ParedRevista2_BMgbi71k.mjs',
    'C:/Users/Jordi/Documents/web/calendaris/src/assets/images/pared/ParedRevista3.jpg':
      'chunks/ParedRevista3_D_N0eDUh.mjs',
    'C:/Users/Jordi/Documents/web/calendaris/src/assets/images/mesa/SobremesaHome.jpg':
      'chunks/SobremesaHome_CHms3cs3.mjs',
    'C:/Users/Jordi/Documents/web/calendaris/src/assets/images/calendarios/calendarDesktop.png':
      'chunks/calendarDesktop_C8VETm_N.mjs',
    'C:/Users/Jordi/Documents/web/calendaris/src/assets/images/calendarImg.jpg': 'chunks/calendarImg_B0ZTh3uo.mjs',
    'C:/Users/Jordi/Documents/web/calendaris/src/assets/images/calendarImg2.jpg': 'chunks/calendarImg2_BPQ4-Tdk.mjs',
    'C:/Users/Jordi/Documents/web/calendaris/src/assets/images/calendarios/ParedEspiral_1.jpg':
      'chunks/ParedEspiral_1_CuUQH2Au.mjs',
    'C:/Users/Jordi/Documents/web/calendaris/src/assets/images/calendarios/ParedEspiral_2.jpg':
      'chunks/ParedEspiral_2_CJw7rKqh.mjs',
    'C:/Users/Jordi/Documents/web/calendaris/src/assets/images/calendarios/ParedEspiral_3.jpg':
      'chunks/ParedEspiral_3_C2VVgzQ1.mjs',
    'C:/Users/Jordi/Documents/web/calendaris/src/assets/images/calendarios/ParedEspiral_4.jpg':
      'chunks/ParedEspiral_4_DfNj8lqW.mjs',
    'C:/Users/Jordi/Documents/web/calendaris/src/assets/images/calendarios/ParedPoster_4.jpg':
      'chunks/ParedPoster_4_Wqg3yTxA.mjs',
    'C:/Users/Jordi/Documents/web/calendaris/src/assets/images/calendarios/ParedRevista_1.jpg':
      'chunks/ParedRevista_1_CDgJ5as1.mjs',
    'C:/Users/Jordi/Documents/web/calendaris/src/assets/images/calendarios/ParedRevista_2.jpg':
      'chunks/ParedRevista_2_Gr1I1X3t.mjs',
    'C:/Users/Jordi/Documents/web/calendaris/src/assets/images/calendarios/ParedRevista_3.jpg':
      'chunks/ParedRevista_3_CIajY0Ls.mjs',
    'C:/Users/Jordi/Documents/web/calendaris/src/assets/images/calendarios/ParedRevista_4.jpg':
      'chunks/ParedRevista_4_Cmswdms2.mjs',
    'C:/Users/Jordi/Documents/web/calendaris/src/assets/images/calendarios/SobremesaEspiral_1.jpg':
      'chunks/SobremesaEspiral_1_DZynGlOi.mjs',
    'C:/Users/Jordi/Documents/web/calendaris/src/assets/images/calendarios/SobremesaEspiral_2.jpg':
      'chunks/SobremesaEspiral_2_Ddp3N2XU.mjs',
    'C:/Users/Jordi/Documents/web/calendaris/src/assets/images/calendarios/SobremesaEspiral_3.jpg':
      'chunks/SobremesaEspiral_3_BCVr5JkQ.mjs',
    'C:/Users/Jordi/Documents/web/calendaris/src/assets/images/calendarios/SobremesaEspiral_4.jpg':
      'chunks/SobremesaEspiral_4_R-LiVn3c.mjs',
    'C:/Users/Jordi/Documents/web/calendaris/src/assets/images/calendarios/SobremesaHome.jpg':
      'chunks/SobremesaHome_pQPg94s6.mjs',
    'C:/Users/Jordi/Documents/web/calendaris/src/assets/images/calendarios/SobremesaTriangular_1.jpg':
      'chunks/SobremesaTriangular_1_DbFJd2Ic.mjs',
    'C:/Users/Jordi/Documents/web/calendaris/src/assets/images/calendarios/SobremesaTriangular_2.jpg':
      'chunks/SobremesaTriangular_2_BYnt7wzx.mjs',
    'C:/Users/Jordi/Documents/web/calendaris/src/assets/images/calendarios/SobremesaTriangular_3.jpg':
      'chunks/SobremesaTriangular_3_CVtpawr-.mjs',
    'C:/Users/Jordi/Documents/web/calendaris/src/assets/images/calendarios/SobremesaTriangular_4.jpg':
      'chunks/SobremesaTriangular_4_CNAG9gFd.mjs',
    'C:/Users/Jordi/Documents/web/calendaris/src/assets/images/calendarios/Triangular_1.jpg':
      'chunks/Triangular_1_5j4G1b6u.mjs',
    'C:/Users/Jordi/Documents/web/calendaris/src/assets/images/calendarios/Triangular_2.jpg':
      'chunks/Triangular_2_CC49wzxs.mjs',
    'C:/Users/Jordi/Documents/web/calendaris/src/assets/images/calendarios/Triangular_3.jpg':
      'chunks/Triangular_3_DQ4y2ap2.mjs',
    'C:/Users/Jordi/Documents/web/calendaris/src/assets/images/calendarios/calendariP.png':
      'chunks/calendariP_yLUxmkr6.mjs',
    'C:/Users/Jordi/Documents/web/calendaris/src/assets/images/calendarios/slide2_2.jpg':
      'chunks/slide2_2_DKrBmSc9.mjs',
    'C:/Users/Jordi/Documents/web/calendaris/src/assets/images/forms/a5.png': 'chunks/a5_OpgY-ZOM.mjs',
    'C:/Users/Jordi/Documents/web/calendaris/src/assets/images/forms/a6.png': 'chunks/a6_CVCQYOym.mjs',
    'C:/Users/Jordi/Documents/web/calendaris/src/assets/images/pared/Images _ Docs_files/houston-happy.fP8mBnGj.webp':
      'chunks/houston-happy.fP8mBnGj_CCCBUHHo.mjs',
    'C:/Users/Jordi/Documents/web/calendaris/src/assets/images/pared/Images _ Docs_files/houston_chef.webp':
      'chunks/houston_chef_Ct1hsU3R.mjs',
    'C:/Users/Jordi/Documents/web/calendaris/src/assets/images/pared/Images _ Docs_files/houston_omg.CKiB_MJZ_wdOqF.webp':
      'chunks/houston_omg.CKiB_MJZ_wdOqF_C0m94ML8.mjs',
    'C:/Users/Jordi/Documents/web/calendaris/src/assets/images/pared/ParedHome.jpg': 'chunks/ParedHome_BGHOfXOP.mjs',
    'C:/Users/Jordi/Documents/web/calendaris/src/content/post/astrowind-template-in-depth.mdx?astroContentCollectionEntry=true':
      'chunks/astrowind-template-in-depth_Gta3rcSe.mjs',
    'C:/Users/Jordi/Documents/web/calendaris/src/content/post/get-started-website-with-astro-tailwind-css.md?astroContentCollectionEntry=true':
      'chunks/get-started-website-with-astro-tailwind-css_DCCHvNaA.mjs',
    'C:/Users/Jordi/Documents/web/calendaris/src/content/post/how-to-customize-astrowind-to-your-brand.md?astroContentCollectionEntry=true':
      'chunks/how-to-customize-astrowind-to-your-brand_B6BNUGnW.mjs',
    'C:/Users/Jordi/Documents/web/calendaris/src/content/post/landing.md?astroContentCollectionEntry=true':
      'chunks/landing_N45D4k7I.mjs',
    'C:/Users/Jordi/Documents/web/calendaris/src/content/post/markdown-elements-demo-post.mdx?astroContentCollectionEntry=true':
      'chunks/markdown-elements-demo-post_AU_F3sTZ.mjs',
    'C:/Users/Jordi/Documents/web/calendaris/src/content/post/useful-resources-to-create-websites.md?astroContentCollectionEntry=true':
      'chunks/useful-resources-to-create-websites_6MEA6oCk.mjs',
    'C:/Users/Jordi/Documents/web/calendaris/src/content/post/astrowind-template-in-depth.mdx?astroPropagatedAssets':
      'chunks/astrowind-template-in-depth_rE6_K6ms.mjs',
    'C:/Users/Jordi/Documents/web/calendaris/src/content/post/get-started-website-with-astro-tailwind-css.md?astroPropagatedAssets':
      'chunks/get-started-website-with-astro-tailwind-css_CLubiIRo.mjs',
    'C:/Users/Jordi/Documents/web/calendaris/src/content/post/how-to-customize-astrowind-to-your-brand.md?astroPropagatedAssets':
      'chunks/how-to-customize-astrowind-to-your-brand_yqN6Q2Nh.mjs',
    'C:/Users/Jordi/Documents/web/calendaris/src/content/post/landing.md?astroPropagatedAssets':
      'chunks/landing_iWaggB8V.mjs',
    'C:/Users/Jordi/Documents/web/calendaris/src/content/post/markdown-elements-demo-post.mdx?astroPropagatedAssets':
      'chunks/markdown-elements-demo-post_CXok9Njy.mjs',
    'C:/Users/Jordi/Documents/web/calendaris/src/content/post/useful-resources-to-create-websites.md?astroPropagatedAssets':
      'chunks/useful-resources-to-create-websites_Bz171QLn.mjs',
    '\u0000astro:asset-imports': 'chunks/_astro_asset-imports_D9aVaOQr.mjs',
    '\u0000astro:data-layer-content': 'chunks/_astro_data-layer-content_BcEe_9wP.mjs',
    'C:/Users/Jordi/Documents/web/calendaris/src/content/post/get-started-website-with-astro-tailwind-css.md':
      'chunks/get-started-website-with-astro-tailwind-css_dcQci_ra.mjs',
    'C:/Users/Jordi/Documents/web/calendaris/src/content/post/how-to-customize-astrowind-to-your-brand.md':
      'chunks/how-to-customize-astrowind-to-your-brand_BDVlRwWX.mjs',
    'C:/Users/Jordi/Documents/web/calendaris/src/content/post/landing.md': 'chunks/landing_BCL0asQn.mjs',
    'C:/Users/Jordi/Documents/web/calendaris/src/content/post/markdown-elements-demo-post.mdx':
      'chunks/markdown-elements-demo-post_BqgrcGAV.mjs',
    'C:/Users/Jordi/Documents/web/calendaris/src/content/post/useful-resources-to-create-websites.md':
      'chunks/useful-resources-to-create-websites_BnKrCo51.mjs',
    'C:/Users/Jordi/Documents/web/calendaris/src/content/post/astrowind-template-in-depth.mdx':
      'chunks/astrowind-template-in-depth_Bpt59bTO.mjs',
    '\u0000@astrojs-manifest': 'manifest_vhPj_eef.mjs',
    '/astro/hoisted.js?q=3': '_astro/hoisted.D0dtKRhL.js',
    '/astro/hoisted.js?q=0': '_astro/hoisted.CSTRuyht.js',
    'C:/Users/Jordi/Documents/web/calendaris/node_modules/@astro-community/astro-embed-vimeo/Vimeo.astro?astro&type=script&index=0&lang.ts':
      '_astro/Vimeo.astro_astro_type_script_index_0_lang.CgRsrQuG.js',
    'C:/Users/Jordi/Documents/web/calendaris/node_modules/photoswipe/dist/photoswipe.esm.js':
      '_astro/photoswipe.esm.CKijkUPa.js',
    '/astro/hoisted.js?q=1': '_astro/hoisted.bFmygbQ5.js',
    'C:/Users/Jordi/Documents/web/calendaris/node_modules/@astro-community/astro-embed-youtube/YouTube.astro?astro&type=script&index=0&lang.ts':
      '_astro/YouTube.astro_astro_type_script_index_0_lang.Dkyb9mLy.js',
    '/astro/hoisted.js?q=2': '_astro/hoisted.BsIc2PM2.js',
    '/astro/hoisted.js?q=4': '_astro/hoisted.2daoxv0f.js',
    'astro:scripts/before-hydration.js': '',
  },
  inlinedScripts: [],
  assets: [
    '/_astro/ParedRevista.CriAzaeg.jpg',
    '/_astro/ParedRevista1.BqnG1HwO.jpg',
    '/_astro/ParedRevista2.BH3_XZxZ.jpg',
    '/_astro/SobremesaTriangular.DadkIpNu.jpg',
    '/_astro/ParedRevista3.C6mqDEyE.jpg',
    '/_astro/Triangular_2.C01Om-j9.jpg',
    '/_astro/Triangular_3.Bkvv7Tat.jpg',
    '/_astro/SobremesaTriangular3.BIAVvfER.jpg',
    '/_astro/ParedEspiral.DqweNiWj.jpg',
    '/_astro/ParedEspiral1.r9T3ElA-.jpg',
    '/_astro/ParedEspiral2.pDj40NSN.jpg',
    '/_astro/ParedEspiral3.C-mU8jnL.jpg',
    '/_astro/SobremesaHome.B7OHViOF.jpg',
    '/_astro/calendarDesktop.u1RlaVUK.png',
    '/_astro/SobremesaEspiral.CRDt8zAT.jpg',
    '/_astro/SobremesaEspiral1.5XSbPj2n.jpg',
    '/_astro/SobremesaEspiral2.CLdBAOQV.jpg',
    '/_astro/SobremesaEspiral3.CCRAHFuN.jpg',
    '/_astro/IconRepro.DQ6CSvNj.svg',
    '/_astro/slide1.N4VG5suN.jpg',
    '/_astro/slide2.BS-sGh6l.jpg',
    '/_astro/slide3.AwdkZWTR.jpg',
    '/_astro/inter-cyrillic-ext-wght-normal.B2xhLi22.woff2',
    '/_astro/inter-cyrillic-wght-normal.CMZtQduZ.woff2',
    '/_astro/inter-greek-ext-wght-normal.CGAr0uHJ.woff2',
    '/_astro/inter-greek-wght-normal.CaVNZxsx.woff2',
    '/_astro/inter-vietnamese-wght-normal.CBcvBZtf.woff2',
    '/_astro/inter-latin-ext-wght-normal.CFHvXkgd.woff2',
    '/_astro/inter-latin-wght-normal.C2S99t-D.woff2',
    '/_astro/favicon.CyhEaTot.svg',
    '/_astro/apple-touch-icon.DHIlG7dp.png',
    '/_astro/reprodisseny.DiMFbhQh.png',
    '/_astro/ReprodissenyLogoB.DN_ZsufY.png',
    '/_astro/ParedPoster_4.BWfhvV_W.jpg',
    '/_astro/calendarImg2.CC0jKy2-.jpg',
    '/_astro/Triangular_1.BvsyWE5y.jpg',
    '/_astro/slide2_2.DdaNSKRc.jpg',
    '/_astro/a5.J1jt1sqS.png',
    '/_astro/calendariP.BtYdxema.png',
    '/_astro/a6.CFgw2UGa.png',
    '/_astro/houston-happy.fP8mBnGj.fP8mBnGj.webp',
    '/_astro/houston_chef.BhDvCQBg.webp',
    '/_astro/houston_omg.CKiB_MJZ_wdOqF.CibnwSBR.webp',
    '/_astro/ParedHome.IeL8kpRA.jpg',
    '/_astro/calendarImg.p1a88GKM.jpg',
    '/_astro/calendario-mesa-espiral.D9ZlLmLU.css',
    '/robots.txt',
    '/decapcms/config.yml',
    '/decapcms/index.html',
    '/_astro/hoisted.2daoxv0f.js',
    '/_astro/hoisted.bFmygbQ5.js',
    '/_astro/hoisted.BsIc2PM2.js',
    '/_astro/hoisted.CrR6Pxta.css',
    '/_astro/hoisted.CSTRuyht.js',
    '/_astro/hoisted.D0dtKRhL.js',
    '/_astro/navigation.CYXULzQ6.js',
    '/_astro/navigation.X6JekhOX.css',
    '/_astro/photoswipe.esm.CKijkUPa.js',
    '/_astro/Vimeo.astro_astro_type_script_index_0_lang.CgRsrQuG.js',
    '/_astro/YouTube.astro_astro_type_script_index_0_lang.Dkyb9mLy.js',
  ],
  buildFormat: 'directory',
  checkOrigin: false,
  serverIslandNameMap: [],
  key: 'D4a2V5ZTh7A5SAF6OSP9hs2uoJQcjZQh6gxHmVR9N7M=',
  experimentalEnvGetSecretEnabled: false,
});

export { manifest };
