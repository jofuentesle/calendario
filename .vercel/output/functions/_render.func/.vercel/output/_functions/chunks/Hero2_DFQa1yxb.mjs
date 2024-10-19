import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, s as spreadAttributes, d as renderSlot, b as renderComponent, u as unescapeHTML, F as Fragment } from './astro/server_JUoDhWgB.mjs';
import { b as $$Button } from './PageLayout_DlnSt-g1.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                              */

const $$Astro$1 = createAstro("https://astrowind.vercel.app");
const $$Gallery = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Gallery;
  const { images = [] } = Astro2.props;
  return renderTemplate` <!-- Contenedor principal de Swiper -->${maybeRenderHead()}<main data-astro-cid-rs6gz7a4> <div class="swiper-container" data-astro-cid-rs6gz7a4> <div class="swiper main" data-astro-cid-rs6gz7a4> <div class="swiper-wrapper" id="my-slider" data-astro-cid-rs6gz7a4> ${images.map((image) => renderTemplate`<a class="swiper-slide"${addAttribute(image.src, "href")} data-pswp-width="600" data-pswp-height="600" data-cropped="true" data-astro-cid-rs6gz7a4> <img${addAttribute(image.src, "src")}${addAttribute(image.alt, "alt")} data-astro-cid-rs6gz7a4> </a>`)} </div> <div class="swiper-button-prev" data-astro-cid-rs6gz7a4></div> <div class="swiper-button-next" data-astro-cid-rs6gz7a4></div> </div> <div class="swiper thumbs" data-astro-cid-rs6gz7a4> <div class="swiper-wrapper" data-astro-cid-rs6gz7a4> ${images.map((image) => renderTemplate`<div class="swiper-slide" data-astro-cid-rs6gz7a4> <img${addAttribute(image.src, "src")}${addAttribute(image.alt, "alt")} data-astro-cid-rs6gz7a4> </div>`)} </div> </div> </div> </main> `;
}, "C:/Users/Jordi/Documents/web/calendaris/src/components/widgets/Gallery.astro", void 0);

const $$Astro = createAstro("https://astrowind.vercel.app");
const $$Hero2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Hero2;
  const {
    title = await Astro2.slots.render("title"),
    subtitle = await Astro2.slots.render("subtitle"),
    tagline,
    content = await Astro2.slots.render("content"),
    actions = await Astro2.slots.render("actions"),
    galleryImages = await Astro2.slots.render("galleryImage"),
    id,
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="relative md:-mt-[76px] not-prose"${spreadAttributes(id ? { id } : {})} data-astro-cid-3w6r54vr> <div class="absolute inset-0 pointer-events-none" aria-hidden="true" data-astro-cid-3w6r54vr> ${renderSlot($$result, $$slots["bg"], renderTemplate` ${bg ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(bg)}` })}` : null} `)} </div> <div class="relative max-w-7xl mx-auto px-4 sm:px-6" data-astro-cid-3w6r54vr> <div class="pt-0 md:pt-[76px] pointer-events-none" data-astro-cid-3w6r54vr></div> <div class="py-12 md:py-20 lg:py-0 lg:flex lg:items-center lg:h-screen lg:gap-8" data-astro-cid-3w6r54vr> <div class="container flex flex-col lg:flex-row" data-astro-cid-3w6r54vr> <!-- Sección de texto --> <div class="basis-full lg:basis-1/2 text-center lg:text-left pb-10 md:pb-16 mx-auto" data-astro-cid-3w6r54vr> ${tagline && renderTemplate`<p class="text-base text-secondary dark:text-blue-200 font-bold tracking-wide uppercase" data-astro-cid-3w6r54vr>${unescapeHTML(tagline)}</p>`} ${title && renderTemplate`<h1 class="text-5xl md:text-6xl font-bold leading-tighter tracking-tighter mb-4 font-heading dark:text-gray-200" data-astro-cid-3w6r54vr>${unescapeHTML(title)}</h1>`} <div class="max-w-3xl mx-auto lg:max-w-none" data-astro-cid-3w6r54vr> ${subtitle && renderTemplate`<p class="text-xl text-muted mb-6 dark:text-slate-300" data-astro-cid-3w6r54vr>${unescapeHTML(subtitle)}</p>`} ${actions && renderTemplate`<div class="max-w-xs sm:max-w-md m-auto flex flex-nowrap flex-col sm:flex-row sm:justify-center gap-4 lg:justify-start lg:m-0 lg:max-w-7xl" data-astro-cid-3w6r54vr> ${Array.isArray(actions) ? actions.map((action) => renderTemplate`<div class="flex w-full sm:w-auto" data-astro-cid-3w6r54vr> ${renderComponent($$result, "Button", $$Button, { ...action || {}, "class": "w-full sm:mb-0", "data-astro-cid-3w6r54vr": true })} </div>`) : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(actions)}` })}`} </div>`} </div> ${content && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(content)}` })}`} </div> <!-- Sección de galería --> <div class="gallery-container basis-full lg:basis-1/2" data-astro-cid-3w6r54vr> ${renderTemplate`${renderComponent($$result, "Gallery", $$Gallery, { "images": galleryImages, "data-astro-cid-3w6r54vr": true })}`} </div> </div> </div> </div> </section> `;
}, "C:/Users/Jordi/Documents/web/calendaris/src/components/widgets/Hero2.astro", void 0);

export { $$Hero2 as $ };
