import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, s as spreadAttributes, b as renderComponent, u as unescapeHTML, F as Fragment } from './astro/server_JUoDhWgB.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */
import { $ as $$Image } from './Image_DYKDXq-I.mjs';
import { b as $$Button } from './PageLayout_DlnSt-g1.mjs';
import Img1 from './slide1_Dy1lrvfd.mjs';
import Img2 from './slide2_YhrVCGTt.mjs';
import Img3 from './slide3_X8OqEGb_.mjs';

const $$Astro$1 = createAstro("https://astrowind.vercel.app");
const $$Slider = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Slider;
  const { images = [] } = Astro2.props;
  return renderTemplate` <!-- Contenedor principal de Swiper -->${maybeRenderHead()}<div class="slider-container relative" data-astro-cid-ycqiuziw> <div class="swiper" data-astro-cid-ycqiuziw> <div class="swiper-wrapper" data-astro-cid-ycqiuziw> ${images.map((image) => renderTemplate`<div class="swiper-slide" data-astro-cid-ycqiuziw> <img${addAttribute(image.src, "src")}${addAttribute(image.alt, "alt")} class="w-full h-auto object-cover" data-astro-cid-ycqiuziw> </div>`)} </div> </div> </div> `;
}, "C:/Users/Jordi/Documents/web/calendaris/src/components/widgets/Slider.astro", void 0);

const $$Astro = createAstro("https://astrowind.vercel.app");
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Hero;
  const galleryImages = [
    { src: Img1.src, alt: "Descripci\xF3n de la imagen 1" },
    { src: Img2.src, alt: "Descripci\xF3n de la imagen 2" },
    { src: Img3.src, alt: "Descripci\xF3n de la imagen 3" }
  ];
  const {
    title = await Astro2.slots.render("title"),
    subtitle = await Astro2.slots.render("subtitle"),
    tagline,
    content = await Astro2.slots.render("content"),
    actions = await Astro2.slots.render("actions"),
    image = await Astro2.slots.render("image"),
    id
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="relative md:-mt-[76px] not-prose"${spreadAttributes(id ? { id } : {})} data-astro-cid-iks44ci7> <!-- Slider como fondo --> <div class="absolute inset-0 z-[0]" data-astro-cid-iks44ci7> ${renderComponent($$result, "Slider", $$Slider, { "images": galleryImages, "data-astro-cid-iks44ci7": true })} </div> <!-- Contenido del Hero --> <div class="absolute inset-0 pointer-events-none" aria-hidden="true" data-astro-cid-iks44ci7></div> <div class="relative max-w-7xl mx-auto px-4 sm:px-6" data-astro-cid-iks44ci7> <div class="pt-0 md:pt-[76px] pointer-events-none" data-astro-cid-iks44ci7></div> <div class="py-12 md:py-5" data-astro-cid-iks44ci7> <div class="text-center pb-10 md:pb-16 max-w-5xl mx-auto" data-astro-cid-iks44ci7> ${tagline && renderTemplate`<p class="text-base text-secondary dark:text-blue-900 font-bold tracking-wide uppercase" data-astro-cid-iks44ci7>${unescapeHTML(tagline)}</p>`} ${title && renderTemplate`<h1 class="text-5xl ismd:text-6xl font-bold leading-tighter tracking-tighter mb-4 font-heading dark:text-black" data-astro-cid-iks44ci7>${unescapeHTML(title)}</h1>`} <div class="max-w-3xl mx-auto" data-astro-cid-iks44ci7> ${subtitle && renderTemplate`<p class="text-xl text-black mb-6" data-astro-cid-iks44ci7>${unescapeHTML(subtitle)}</p>`} <div class="flex flex-col sm:flex-row justify-center gap-4" data-astro-cid-iks44ci7> <!-- Botón 1 --> ${renderComponent($$result, "Button", $$Button, { "href": "/calendario-mesa-espiral", "text": "Mesa espiral", "class": "w-full sm:mb-0 bg-primary text-white hover:text-black", "data-astro-cid-iks44ci7": true })} <!-- Botón 2 --> ${renderComponent($$result, "Button", $$Button, { "href": "/calendario-mesa-triangular", "text": "Mesa triangular", "class": "w-full sm:mb-0 bg-primary text-white hover:text-black", "data-astro-cid-iks44ci7": true })} <!-- Botón 3 --> ${renderComponent($$result, "Button", $$Button, { "href": "/calendario-pared-espiral", "text": "Pared espiral", "class": " w-full sm:mb-0 bg-primary text-white hover:text-black", "data-astro-cid-iks44ci7": true })} <!-- Botón 4 --> ${renderComponent($$result, "Button", $$Button, { "href": "/calendario-pared-espiral", "text": "Pared revista", "class": "w-full sm:mb-0 bg-primary text-white hover:text-black", "data-astro-cid-iks44ci7": true })} </div> ${actions && renderTemplate`<div class="max-w-xs sm:max-w-md m-auto flex flex-nowrap flex-col sm:flex-row sm:justify-center gap-4 MD" data-astro-cid-iks44ci7> ${Array.isArray(actions) ? actions.map((action) => renderTemplate`<div class="flex w-full sm:w-auto" data-astro-cid-iks44ci7> ${renderComponent($$result, "Button", $$Button, { ...action || {}, "class": "w-full sm:mb-0", "data-astro-cid-iks44ci7": true })} </div>`) : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(actions)}` })}`} </div>`} </div> ${content && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(content)}` })}`} </div> <div data-astro-cid-iks44ci7> ${image && renderTemplate`<div class="relative m-auto max-w-5xl" data-astro-cid-iks44ci7> ${typeof image === "string" ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(image)}` })}` : renderTemplate`${renderComponent($$result, "Image", $$Image, { "class": "mx-auto rounded-md w-full", "widths": [400, 768, 1024, 2040], "sizes": "(max-width: 767px) 400px, (max-width: 1023px) 768px, (max-width: 2039px) 1024px, 2040px", "loading": "eager", "width": 1024, "height": 576, ...image, "data-astro-cid-iks44ci7": true })}`} </div>`} </div> </div> </div> </section> `;
}, "C:/Users/Jordi/Documents/web/calendaris/src/components/widgets/Hero.astro", void 0);

export { $$Hero as $ };
