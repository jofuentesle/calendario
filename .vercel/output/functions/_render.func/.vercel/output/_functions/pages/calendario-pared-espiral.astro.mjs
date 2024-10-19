import { a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_JUoDhWgB.mjs';
import 'kleur/colors';
import { $ as $$LandingLayout2 } from '../chunks/LandingLayout2_Dq_C7QjK.mjs';
import { $ as $$Hero2 } from '../chunks/Hero2_DFQa1yxb.mjs';
import { $ as $$Features } from '../chunks/Features_BV-KXf3K.mjs';
import { $ as $$CallToAction } from '../chunks/CallToAction_BVlu6Pfv.mjs';
import { $ as $$DynamicForm } from '../chunks/DynamicForm_ClYG14jN.mjs';
import ImgTbl0 from '../chunks/ParedEspiral_DGUvHMiJ.mjs';
import Img2 from '../chunks/ParedEspiral1_CUTanU0x.mjs';
import Img3 from '../chunks/ParedEspiral2_se_jvnni.mjs';
import Img4 from '../chunks/ParedEspiral3_D2PLJM-i.mjs';
export { renderers } from '../renderers.mjs';

const $$CalendarioParedEspiral = createComponent(($$result, $$props, $$slots) => {
  const galleryImages = [
    { src: ImgTbl0.src, alt: "Calendarios de pared con espiral personalizados en Barcelona" },
    { src: Img2.src, alt: "Impresi\xF3n de calendarios de pared con espiral para empresas en Catalu\xF1a" },
    { src: Img3.src, alt: "Dise\xF1o de calendarios publicitarios de pared con espiral" },
    { src: Img4.src, alt: "Comprar calendarios de pared con espiral online" }
  ];
  const metadata = {
    title: "Calendarios de Pared con Espiral Personalizados | Impresi\xF3n en Barcelona",
    description: "Impresi\xF3n de calendarios de pared con espiral personalizados para empresas en Barcelona. Promociona tu marca todo el a\xF1o con nuestros calendarios publicitarios de alta calidad.",
    keywords: [
      "Calendarios de pared con espiral personalizados",
      "Impresi\xF3n de calendarios con espiral para pared",
      "Calendarios publicitarios de pared",
      "Calendarios de pared promocionales",
      "Dise\xF1o de calendarios de pared con espiral",
      "Calendarios anuales para pared",
      "Calendarios de pared para empresas",
      "Calendarios de pared con espiral Barcelona",
      "Imprimir calendarios de pared en Catalu\xF1a",
      "Comprar calendarios de pared con espiral online"
    ],
    canonical: "https://calendarios.reprodisseny.com/calendario-pared-espiral",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Calendarios de Pared con Espiral Personalizados",
      "description": "Imprime calendarios de pared con espiral para empresas en Barcelona. Personalizaci\xF3n completa y entrega r\xE1pida. Ideal para promociones empresariales.",
      "image": `${ImgTbl0.src}`,
      "brand": {
        "@type": "Brand",
        "name": "Repro Disseny"
      },
      "offers": {
        "@type": "Offer",
        "url": "https://calendarios.reprodisseny.com/calendario-pared-espiral",
        "priceCurrency": "EUR",
        "price": "5.99",
        "availability": "https://schema.org/InStock"
      },
      "keywords": "calendarios de pared con espiral, calendarios promocionales, impresi\xF3n de calendarios, comprar calendarios pared online, imprenta de calendarios en Barcelona"
    }
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$LandingLayout2, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero2", $$Hero2, { "tagline": "Calendarios de Pared con Espiral Personalizados", "title": "Calendarios de Pared con Espiral: Promoci\xF3n Empresarial Continua", "subtitle": "Imprime calendarios publicitarios de pared con espiral personalizados para promocionar tu marca todo el a\xF1o. Ofrecemos impresi\xF3n de alta calidad en Barcelona.", "actions": [
    { variant: "primary", text: "Pide tu oferta!", href: "#form-section", icon: "tabler:square-rounded-arrow-right" },
    { text: "Saber m\xE1s", href: "#features" }
  ], "galleryImages": galleryImages })} ${renderComponent($$result2, "DynamicForm", $$DynamicForm, {})} ${renderComponent($$result2, "Features", $$Features, { "id": "features", "tagline": "Caracteristicas Clave", "title": "Calendarios de Pared con Espiral Personalizados para Empresas", "subtitle": "Nuestros calendarios de pared con espiral est\xE1n dise\xF1ados para promocionar tu empresa de manera efectiva y visual durante todo el a\xF1o. Ofrecemos impresi\xF3n de alta calidad en Barcelona y Catalu\xF1a.", "items": [
    {
      title: "Impresi\xF3n Personalizada",
      description: "Personaliza tus calendarios de pared con espiral con el logotipo y dise\xF1o de tu empresa. Ideal para promociones durante todo el a\xF1o en Barcelona.",
      icon: "tabler:calendar"
    },
    {
      title: "Alta Calidad de Impresi\xF3n",
      description: "Utilizamos tecnolog\xEDa de impresi\xF3n en cuatricrom\xEDa para asegurar que tus calendarios se vean profesionales y duraderos.",
      icon: "tabler:printer"
    },
    {
      title: "Dise\xF1o Promocional",
      description: "Crea un calendario promocional que destaque tu marca todo el a\xF1o con nuestros calendarios anuales de pared personalizados.",
      icon: "tabler:file-signal"
    },
    {
      title: "Entrega en Barcelona",
      description: "Ofrecemos tiempos de entrega r\xE1pidos y eficientes para pedidos de calendarios de pared promocionales en Barcelona y Catalu\xF1a.",
      icon: "tabler:truck"
    },
    {
      title: "Ideal para Empresas",
      description: "Nuestros calendarios son perfectos para empresas que buscan una soluci\xF3n publicitaria efectiva y duradera.",
      icon: "tabler:building"
    },
    {
      title: "F\xE1cil de Colgar",
      description: "El formato con espiral hace que los calendarios de pared sean f\xE1ciles de colgar y utilizar en cualquier entorno corporativo o de oficina.",
      icon: "tabler:wall"
    }
  ] })}  ${maybeRenderHead()}<div id="form-section"> <form id="calendar-form" method="POST" action="/api/send-form"> <!-- Formulario generado arriba --> </form> </div> ${renderComponent($$result2, "CallToAction", $$CallToAction, { "title": "Solicita tu Presupuesto", "subtitle": "Compra calendarios tipo revista para pared y recibe la mejor oferta.", "actions": [
    { variant: "primary", text: "\xA1Solicita oferta hoy!", href: "#form-section", icon: "tabler:mail" }
  ] })} ` })}`;
}, "C:/Users/Jordi/Documents/web/calendaris/src/pages/calendario-pared-espiral.astro", void 0);

const $$file = "C:/Users/Jordi/Documents/web/calendaris/src/pages/calendario-pared-espiral.astro";
const $$url = "/calendario-pared-espiral";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$CalendarioParedEspiral,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
