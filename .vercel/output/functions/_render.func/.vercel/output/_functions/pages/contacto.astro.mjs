import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent } from '../chunks/astro/server_JUoDhWgB.mjs';
import 'kleur/colors';
import { a as $$PageLayout } from '../chunks/PageLayout_DlnSt-g1.mjs';
import { $ as $$HeroText } from '../chunks/HeroText_K1SP0jc6.mjs';
import { $ as $$Contact } from '../chunks/Contact_CZ_6H-sx.mjs';
import { $ as $$Features2 } from '../chunks/Features2_BQHh0zdE.mjs';
import sendGrid from '@sendgrid/mail';
import 'dotenv/config';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://astrowind.vercel.app");
const $$Contacto = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contacto;
  sendGrid.setApiKey("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");
  if (Astro2.request.method === "POST") {
    try {
      const data = await Astro2.request.formData();
      const name = data.get("name");
      const email = data.get("email");
      const message = data.get("message");
      console.log(message);
      const msg = {
        to: email,
        // Change to your recipient
        from: "noreply@reprodisseny.com",
        // Change to your verified sender
        replyTo: { email, name },
        subject: `Contact form submission from ${name}`,
        text: message
      };
      await sendGrid.send(msg).then(() => {
        console.log("Email sent");
      }).catch((error) => {
        console.error(error);
      });
    } catch (error) {
      console.error(error);
    }
  }
  const metadata = {
    title: "Contacta con nosotros"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "HeroText", $$HeroText, { "tagline": "contacto", "title": "Hola! ¿Necesitas ayuda?" })} ${renderComponent($$result2, "ContactUs", $$Contact, { "id": "form", "title": "Envíanos tus consultas sobre calendarios", "subtitle": "Estamos aquí para ayudarte a crear el calendario perfecto, desde el diseño hasta la impresión, con opciones personalizadas y soporte en cada paso.", "inputs": [
    {
      type: "text",
      name: "name",
      label: "Nombre"
    },
    {
      type: "email",
      name: "email",
      label: "Correo electrónicssss"
    }
  ], "textarea": {
    label: "Mensaje",
    name: "msg"
  }, "disclaimer": {
    label: "He leído y acepto la Política de Privacidad."
  }, "description": "Nuestro equipo contactará lo antes posible." })}  ${renderComponent($$result2, "Features2", $$Features2, { "title": "Estamos aquí para ayuderte!", "items": [
    {
      title: "Consultas generales",
      description: `Ofrecemos un servicio de consultas generales ágil y personalizado para resolver todas tus dudas sobre nuestros calendarios impresos, ya sea en formato digital o offset, asegurando la mejor calidad y opciones adaptadas a tus necesidades.`
    },
    {
      title: "Dpto. Comercial",
      description: "Nuestro departamento comercial está a tu disposición para asesorarte de manera personalizada en la compra de calendarios impresos, brindando soluciones a medida tanto en impresión digital como offset, para garantizar que encuentres la opción perfecta para tu negocio o proyecto."
    },
    {
      title: "Dpto. Diseño",
      description: "Nuestro departamento de diseño te ofrece asesoramiento experto para crear calendarios únicos y personalizados, garantizando que cada detalle en la impresión digital u offset refleje tu estilo y necesidades con la máxima calidad."
    },
    {
      title: "Teléfono",
      description: "+93 274 98 90",
      icon: "tabler:headset"
    },
    {
      title: "Email",
      description: "comercial@reprodisseny.com",
      icon: "tabler:mail"
    },
    {
      title: "Ubicación",
      description: "Calle Juan de Mena, 19 - 08035 Barcelona",
      icon: "tabler:map-pin"
    }
  ] })} ` })}`;
}, "C:/Users/Jordi/Documents/web/calendaris/src/pages/contacto.astro", void 0);
const $$file = "C:/Users/Jordi/Documents/web/calendaris/src/pages/contacto.astro";
const $$url = "/contacto";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contacto,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
