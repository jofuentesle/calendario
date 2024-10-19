import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_BKLFZfQH.mjs';
import { manifest } from './manifest_vhPj_eef.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/api/contact.astro.mjs');
const _page4 = () => import('./pages/api/send-emails.astro.mjs');
const _page5 = () => import('./pages/api/send-form.astro.mjs');
const _page6 = () => import('./pages/api/send-quotes.astro.mjs');
const _page7 = () => import('./pages/api.astro.mjs');
const _page8 = () => import('./pages/calendario-mesa-espiral.astro.mjs');
const _page9 = () => import('./pages/calendario-mesa-triangular.astro.mjs');
const _page10 = () => import('./pages/calendario-pared-espiral.astro.mjs');
const _page11 = () => import('./pages/calendario-pared-revista.astro.mjs');
const _page12 = () => import('./pages/contact.astro.mjs');
const _page13 = () => import('./pages/contacto.astro.mjs');
const _page14 = () => import('./pages/formulario.astro.mjs');
const _page15 = () => import('./pages/formularios/calendarios-mesa-espiral.astro.mjs');
const _page16 = () => import('./pages/formularios/calendarios-mesa-triangular.astro.mjs');
const _page17 = () => import('./pages/formularios/calendarios-pared-espiral.astro.mjs');
const _page18 = () => import('./pages/formularios/calendarios-pared-revista.astro.mjs');
const _page19 = () => import('./pages/formularios.astro.mjs');
const _page20 = () => import('./pages/homes/mobile-app.astro.mjs');
const _page21 = () => import('./pages/homes/personal.astro.mjs');
const _page22 = () => import('./pages/homes/saas.astro.mjs');
const _page23 = () => import('./pages/homes/startup.astro.mjs');
const _page24 = () => import('./pages/pricing.astro.mjs');
const _page25 = () => import('./pages/privacy.astro.mjs');
const _page26 = () => import('./pages/rss.xml.astro.mjs');
const _page27 = () => import('./pages/services.astro.mjs');
const _page28 = () => import('./pages/terms.astro.mjs');
const _page29 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/api/contact.js", _page3],
    ["src/pages/api/send-emails.ts", _page4],
    ["src/pages/api/send-form.js", _page5],
    ["src/pages/api/send-quotes.ts", _page6],
    ["src/pages/api/index.astro", _page7],
    ["src/pages/calendario-mesa-espiral.astro", _page8],
    ["src/pages/calendario-mesa-triangular.astro", _page9],
    ["src/pages/calendario-pared-espiral.astro", _page10],
    ["src/pages/calendario-pared-revista.astro", _page11],
    ["src/pages/contact.astro", _page12],
    ["src/pages/contacto.astro", _page13],
    ["src/pages/formulario.astro", _page14],
    ["src/pages/formularios/calendarios-mesa-espiral.astro", _page15],
    ["src/pages/formularios/calendarios-mesa-triangular.astro", _page16],
    ["src/pages/formularios/calendarios-pared-espiral.astro", _page17],
    ["src/pages/formularios/calendarios-pared-revista.astro", _page18],
    ["src/pages/formularios/index.astro", _page19],
    ["src/pages/homes/mobile-app.astro", _page20],
    ["src/pages/homes/personal.astro", _page21],
    ["src/pages/homes/saas.astro", _page22],
    ["src/pages/homes/startup.astro", _page23],
    ["src/pages/pricing.astro", _page24],
    ["src/pages/privacy.md", _page25],
    ["src/pages/rss.xml.ts", _page26],
    ["src/pages/services.astro", _page27],
    ["src/pages/terms.md", _page28],
    ["src/pages/index.astro", _page29]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "4d02d64e-8e09-4c40-aa39-21007b3b328e",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
