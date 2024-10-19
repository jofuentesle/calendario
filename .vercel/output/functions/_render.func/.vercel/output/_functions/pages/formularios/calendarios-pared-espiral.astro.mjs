import { a as createComponent, r as renderTemplate, b as renderComponent } from '../../chunks/astro/server_JUoDhWgB.mjs';
import 'kleur/colors';
import { a as $$PageLayout } from '../../chunks/PageLayout_DlnSt-g1.mjs';
import { $ as $$HeroText } from '../../chunks/HeroText_K1SP0jc6.mjs';
import { $ as $$Features2 } from '../../chunks/Features2_BQHh0zdE.mjs';
import { $ as $$Contact } from '../../chunks/Contact_CZ_6H-sx.mjs';
export { renderers } from '../../renderers.mjs';

const $$CalendariosParedEspiral = createComponent(($$result, $$props, $$slots) => {
  const metadata = {
    title: "Contacta con nosotros para calendarios de mesa"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "HeroText", $$HeroText, { "tagline": "calendarios de pared", "title": "Solicita informaci\xF3n sobre los calendarios de pared con espiral" })} ${renderComponent($$result2, "ContactUs", $$Contact, { "id": "form", "title": "Env\xEDanos tus consultas sobre calendarios", "subtitle": "Estamos aqu\xED para ayudarte a crear el calendario perfecto, desde el dise\xF1o hasta la impresi\xF3n, con opciones personalizadas y soporte en cada paso.", "inputs": [
    {
      type: "text",
      name: "name",
      label: "Nombre"
    },
    {
      type: "text",
      name: "empresa",
      label: "Empresa"
    },
    {
      type: "text",
      name: "telefono",
      label: "N\xFAmero de tel\xE9fono"
    },
    {
      type: "email",
      name: "email",
      label: "Correo electr\xF3nico"
    },
    {
      type: "select",
      name: "medida",
      label: "Medida calendario",
      options: [
        { value: "21x10", label: "Rectangular 21 x 10 cm" },
        { value: "15x15", label: "Cuadrado 15 x 15 cm" },
        { value: "A5", label: "Din A5 21 x 15 cm" }
      ]
    },
    {
      type: "select",
      name: "acabdo",
      label: "Acabado calendario",
      options: [
        { value: "brillo", label: "Acabado brillante" },
        { value: "mate", label: "Acabado mate" }
      ]
    },
    {
      type: "select",
      name: "quantity",
      label: "Selectiona la medida",
      options: [
        { value: "50", label: "50" },
        { value: "100", label: "100" },
        { value: "250", label: "250" },
        { value: "500", label: "500" },
        { value: "1000", label: "1000" },
        { value: "2000", label: "2000" },
        { value: "3000", label: "3000" }
      ]
    }
  ], "disclaimer": {
    label: "He le\xEDdo y acepto la Pol\xEDtica de Privacidad."
  }, "description": "Nuestro equipo contactar\xE1 lo antes posible." })}  ${renderComponent($$result2, "Features2", $$Features2, { "title": "Estamos aqu\xED para ayuderte!", "items": [
    {
      title: "Consultas generales",
      description: `Ofrecemos un servicio de consultas generales \xE1gil y personalizado para resolver todas tus dudas sobre nuestros calendarios impresos, ya sea en formato digital o offset, asegurando la mejor calidad y opciones adaptadas a tus necesidades.`
    },
    {
      title: "Dpto. Comercial",
      description: "Nuestro departamento comercial est\xE1 a tu disposici\xF3n para asesorarte de manera personalizada en la compra de calendarios impresos, brindando soluciones a medida tanto en impresi\xF3n digital como offset, para garantizar que encuentres la opci\xF3n perfecta para tu negocio o proyecto."
    },
    {
      title: "Dpto. Dise\xF1o",
      description: "Nuestro departamento de dise\xF1o te ofrece asesoramiento experto para crear calendarios \xFAnicos y personalizados, garantizando que cada detalle en la impresi\xF3n digital u offset refleje tu estilo y necesidades con la m\xE1xima calidad."
    },
    {
      title: "Tel\xE9fono",
      description: "+93 274 98 90",
      icon: "tabler:headset"
    },
    {
      title: "Email",
      description: "comercial@reprodisseny.com",
      icon: "tabler:mail"
    },
    {
      title: "Ubicaci\xF3n",
      description: "Calle Juan de Mena, 19 - 08035 Barcelona",
      icon: "tabler:map-pin"
    }
  ] })} ` })}`;
}, "C:/Users/Jordi/Documents/web/calendaris/src/pages/formularios/calendarios-pared-espiral.astro", void 0);

const $$file = "C:/Users/Jordi/Documents/web/calendaris/src/pages/formularios/calendarios-pared-espiral.astro";
const $$url = "/formularios/calendarios-pared-espiral";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$CalendariosParedEspiral,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
