import { a as createComponent, r as renderTemplate, b as renderComponent } from '../chunks/astro/server_JUoDhWgB.mjs';
import 'kleur/colors';
import { $ as $$LandingLayout2 } from '../chunks/LandingLayout2_Dq_C7QjK.mjs';
import { $ as $$Hero2 } from '../chunks/Hero2_DFQa1yxb.mjs';
import { $ as $$Features } from '../chunks/Features_BV-KXf3K.mjs';
import { $ as $$CallToAction } from '../chunks/CallToAction_BVlu6Pfv.mjs';
import Img1 from '../chunks/ParedRevista_Dwds71xJ.mjs';
import Img2 from '../chunks/ParedRevista1_D8JQFH15.mjs';
import Img3 from '../chunks/ParedRevista2_BMgbi71k.mjs';
import Img4 from '../chunks/ParedRevista3_D_N0eDUh.mjs';
export { renderers } from '../renderers.mjs';

const $$CalendarioParedRevista = createComponent(($$result, $$props, $$slots) => {
  const galleryImages = [
    { src: Img1.src, alt: "Calendario de pared tipo revista 2025" },
    { src: Img2.src, alt: "Calendario de pared 2025 con espiral, dise\xF1o personalizado" },
    { src: Img3.src, alt: "Calendario tipo revista personalizado para empresas 2025" },
    { src: Img4.src, alt: "Calendario promocional de pared con espiral 2025" }
  ];
  const metadata = {
    title: "Calendarios Personalizados para Pared | Reprodisseny en Barcelona",
    description: "Compra calendarios tipo revista para pared 2025 personalizados y de alta calidad en Barcelona.",
    keywords: [
      "Calendarios personalizados Barcelona",
      "Calendarios tipo revista para pared 2025",
      "Impresi\xF3n de calendarios en Barcelona",
      "Calendarios de pared publicitarios",
      "Compra calendarios tipo revista online",
      "Calendarios de empresa 2025",
      "Calendarios de pared personalizados",
      "Calendarios de dise\xF1o para empresas",
      "Calendarios de pared de calidad en Barcelona"
    ],
    canonical: "https://calendarios.reprodisseny.com/calendarios-pared-revista",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Calendarios de Mesa con Espiral Personalizados ",
      "description": "Personaliza calendarios de mesa personalizados para empresas y oficinas. Perfectos para promocionar tu marca durante todo el a\xF1o.",
      "image": `${Img1.src}`,
      "brand": {
        "@type": "Brand",
        "name": "Repro Disseny"
      },
      "offers": {
        "@type": "Offer",
        "url": "https://calendarios.reprodisseny.com/landing/calendario-pared-revista",
        "priceCurrency": "EUR",
        "price": "5.99",
        "availability": "https://schema.org/InStock"
      },
      "keywords": "Calendarios personalizados Barcelona, Calendarios tipo revista para pared 2025, Impresi\xF3n de calendarios en Barcelona, Calendarios de pared publicitarios, Compra calendarios tipo revista online, Calendarios de empresa 2025, Calendarios de pared personalizados, Calendarios de dise\xF1o para empresas, Calendarios de pared de calidad en Barcelona"
    }
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$LandingLayout2, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero2", $$Hero2, { "tagline": "Calendario tipo revista", "title": "Calendarios de pared 2025 personalizados", "subtitle": "Impresi\xF3n de alta calidad y dise\xF1o atractivo para promocionar tu marca en Barcelona.", "actions": [
    { variant: "primary", text: "Pide tu oferta!", href: "#form-section", icon: "tabler:square-rounded-arrow-right" },
    { text: "Saber m\xE1s", href: "#features" }
  ], "galleryImages": galleryImages })} ${renderComponent($$result2, "Features", $$Features, { "id": "features", "tagline": "Caracter\xEDsticas Clave", "title": "\xBFPor qu\xE9 elegir nuestros calendarios de pared", "subtitle": "Impresi\xF3n de alta calidad y dise\xF1o atractivo para promocionar tu marca en Barcelona.", "items": [
    {
      title: "Impresi\xF3n Personalizada",
      description: "Personaliza calendarios tipo revista para pared con tu logotipo y dise\xF1o \xFAnico. Ideales para promociones efectivas en Barcelona.",
      icon: "tabler:calendar"
    },
    {
      title: "Alta Calidad de Impresi\xF3n",
      description: "Usamos tecnolog\xEDa de impresi\xF3n avanzada para asegurar que cada calendario sea visualmente atractivo y duradero.",
      icon: "tabler:printer"
    },
    {
      title: "Dise\xF1o Promocional",
      description: "Destaca tu marca todo el a\xF1o con nuestros calendarios de pared que combinan funcionalidad y est\xE9tica.",
      icon: "tabler:printer"
    },
    {
      title: "Entrega r\xE1pida en toda la pen\xEDnsula",
      description: "Ofrecemos tiempos de entrega r\xE1pidos para que recibas tus calendarios cuando los necesites.",
      icon: "tabler:truck"
    },
    {
      title: "Ideal para Empresas",
      description: "Perfectos para empresas que buscan soluciones publicitarias duraderas y efectivas.",
      icon: "tabler:building"
    },
    {
      title: "F\xE1cil Instalaci\xF3n",
      description: "Nuestros calendarios con espiral son f\xE1ciles de colgar, adapt\xE1ndose a cualquier espacio de trabajo.",
      icon: "tabler:wall"
    }
  ] })}  ${renderComponent($$result2, "CallToAction", $$CallToAction, { "title": "Solicita tu Presupuesto para Calendarios Personalizados", "subtitle": "Compra calendarios tipo revista para pared y recibe la mejor oferta. Impresi\xF3n r\xE1pida y entrega en toda Barcelona.", "actions": [
    {
      variant: "primary",
      text: "\xA1Solicita oferta hoy",
      href: "/formularios/calendarios-pared-revista",
      icon: "tabler:mail"
    }
  ] })} ` })}`;
}, "C:/Users/Jordi/Documents/web/calendaris/src/pages/calendario-pared-revista.astro", void 0);

const $$file = "C:/Users/Jordi/Documents/web/calendaris/src/pages/calendario-pared-revista.astro";
const $$url = "/calendario-pared-revista";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$CalendarioParedRevista,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
