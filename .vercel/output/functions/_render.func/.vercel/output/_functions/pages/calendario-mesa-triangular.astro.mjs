import { a as createComponent, r as renderTemplate, b as renderComponent } from '../chunks/astro/server_JUoDhWgB.mjs';
import 'kleur/colors';
import { $ as $$LandingLayout2 } from '../chunks/LandingLayout2_Dq_C7QjK.mjs';
import { $ as $$Hero2 } from '../chunks/Hero2_DFQa1yxb.mjs';
import { $ as $$Features } from '../chunks/Features_BV-KXf3K.mjs';
import Img1 from '../chunks/SobremesaTriangular_CkCNYvS_.mjs';
import Img2 from '../chunks/SobremesaTriangular1_BNesPwGv.mjs';
import Img3 from '../chunks/SobremesaTriangular2_Ceqw9F-D.mjs';
import Img4 from '../chunks/SobremesaTriangular3_BD5qMvaV.mjs';
import { $ as $$DynamicForm } from '../chunks/DynamicForm_ClYG14jN.mjs';
export { renderers } from '../renderers.mjs';

const $$CalendarioMesaTriangular = createComponent(($$result, $$props, $$slots) => {
  const galleryImages = [
    { src: Img1.src, alt: "Imprimir calendarios de mesa personalizados plegados en Barcelona" },
    { src: Img2.src, alt: "Calendarios de mesa triangulares personalizados con fotos y logotipos en Barcelona" },
    { src: Img3.src, alt: "Calendarios de mesa plegados y personalizados en Barcelona por Repro Disseny" },
    { src: Img4.src, alt: "Comprar calendarios de mesa triangulares y personalizados en Barcelona" }
  ];
  const metadata = {
    title: "Calendarios de Mesa Personalizados  en Barcelona | Imprenta Repro Disseny",
    description: "Imprime calendarios de mesa personalizados y plegados en Barcelona. Calendarios con fotos personalizados para empresas. Perfectos para promocionar tu negocio.",
    keywords: [
      "Calendarios de mesa personalizados",
      "Calendario triangular de sobremesa",
      "Calendario publicitario",
      "Calendario de mesa econ\xF3mico",
      "Calendarios de empresa personalizados",
      "Impresi\xF3n de calendarios triangulares",
      "Calendario de sobremesa triangular personalizado",
      "imprimir calendarios Barcelona plegados",
      "calendarios de mesa triangular",
      "imprenta de calendarios en Barcelona",
      "calendario con fotos personalizado",
      "comprar calendarios en Barcelona"
    ],
    canonical: "https://calendarios.reprodisseny.com/calendarios-mesa-triangular",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Calendarios de Mesa Personalizados para Empresas en Barcelona",
      "description": "Solicita calendarios de mesa personalizados plegados con fotos y logotipos. Ideal para promocionar tu marca en Barcelona y Catalu\xF1a todo el a\xF1o.",
      "image": "../../assets/images/mesa/SobremesaTriangular.jpg",
      "brand": {
        "@type": "Brand",
        "name": "Repro Disseny"
      },
      "offers": {
        "@type": "Offer",
        "url": "https://https://calendarios.reprodisseny.com/calendarios-mesa-triangular",
        "priceCurrency": "EUR",
        "price": "5.99",
        "availability": "https://schema.org/InStock"
      },
      "keywords": "calendarios personalizados empresas, calendarios plegados Barcelona, calendarios de mesa triangular, imprenta en Barcelona, calendarios con fotos personalizados"
    }
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$LandingLayout2, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero2", $$Hero2, { "tagline": "Calendarios de Mesa Personalizados", "title": "Impresi\xF3n de Calendarios de Mesa en Barcelona | Dise\xF1o Triangular y Plegado", "subtitle": "Imprime calendarios de mesa personalizados y plegados en Barcelona. Perfectos para la promoci\xF3n de tu empresa durante todo el a\xF1o.", "actions": [
    { variant: "primary", text: "Solicita tu oferta", href: "#form-section", icon: "tabler:square-rounded-arrow-right" },
    { text: "Ver caracter\xEDsticas", href: "#features" }
  ], "galleryImages": galleryImages })} ${renderComponent($$result2, "Features", $$Features, { "id": "features", "tagline": "Beneficios de los Calendarios Personalizados", "title": "6 Ventajas de Imprimir Calendarios de Mesa Triangulares y Plegados en Barcelona", "subtitle": "Conoce las ventajas de nuestros calendarios personalizados con fotos y logotipos para la promoci\xF3n empresarial en Barcelona.", "items": [
    {
      title: "Promoci\xF3n continua",
      description: "Los calendarios de mesa personalizados aseguran visibilidad diaria de tu marca durante todo el a\xF1o. Ideales para promocionar empresas en Barcelona.",
      icon: "tabler:calendar-check"
    },
    {
      title: "Dise\xF1o plegado y compacto\u200B",
      description: "Calendarios de mesa plegados y triangulares, f\xE1ciles de colocar en cualquier escritorio, perfectos para ahorrar espacio.",
      icon: "tabler:desk"
    },
    {
      title: "Personalizaci\xF3n con fotos y logotipos",
      description: "Nuestros calendarios permiten personalizar con tus fotos y logotipos, asegurando que tu marca destaque.",
      icon: "tabler:calendar-heart"
    },
    {
      title: "Impresi\xF3n econ\xF3mica en Barcelona",
      description: "Imprime calendarios plegados y triangulares a precios competitivos en nuestra imprenta en Barcelona.",
      icon: "tabler:calendar-dollar"
    },
    {
      title: "Funcionalidad y estilo",
      description: "Calendarios de mesa que combinan estilo y funcionalidad, permitiendo un f\xE1cil acceso a las fechas importantes durante el a\xF1o.",
      icon: "tabler:calendar-smile"
    },
    {
      title: "Materiales duraderos",
      description: "Fabricados con materiales de alta calidad, nuestros calendarios plegados aseguran durabilidad durante todo el a\xF1o.",
      icon: "tabler:hammer"
    }
  ] })}  ${renderComponent($$result2, "DynamicForm", $$DynamicForm, {})} ` })}`;
}, "C:/Users/Jordi/Documents/web/calendaris/src/pages/calendario-mesa-triangular.astro", void 0);

const $$file = "C:/Users/Jordi/Documents/web/calendaris/src/pages/calendario-mesa-triangular.astro";
const $$url = "/calendario-mesa-triangular";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$CalendarioMesaTriangular,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
