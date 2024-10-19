import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_JUoDhWgB.mjs';
import 'kleur/colors';
import { $ as $$LandingLayout2 } from '../chunks/LandingLayout2_Dq_C7QjK.mjs';
import sendGrid from '@sendgrid/mail';
import Img1 from '../chunks/SobremesaEspiral_BgOQ8_Ke.mjs';
import Img2 from '../chunks/SobremesaEspiral1_BNQRH_aV.mjs';
import Img3 from '../chunks/SobremesaEspiral2_DJz2fsjO.mjs';
import Img4 from '../chunks/SobremesaEspiral3_fbgIhLyI.mjs';
/* empty css                                                   */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://astrowind.vercel.app");
const $$CalendarioMesaEspiral = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CalendarioMesaEspiral;
  [
    { src: Img1.src, alt: "Calendario de mesa personalizado con espiral para empresas en Barcelona, perfecto para regalos corporativos." },
    { src: Img2.src, alt: "Calendario publicitario de sobremesa personalizado con espiral, ideal para promoción de marca en oficinas." },
    { src: Img3.src, alt: "Calendarios personalizados de mesa con espiral, ideales para empresas, formato A4 con logotipo." },
    { src: Img4.src, alt: "Calendarios de sobremesa personalizados con espiral, diseño elegante para oficinas y empresas en Cataluña." }
  ];
  const metadata = {
    title: "Calendarios de Mesa Personalizados con Espiral | Regalos Corporativos Únicos",
    description: "Descubre nuestros calendarios de mesa personalizados, ideales para empresas y oficinas. Personaliza tu calendario sobremesa con espiral y destaca tu marca con un diseño atractivo y funcional. Impresión de alta calidad en Barcelona.",
    keywords: [
      "calendario mesa personalizado",
      "calendario sobremesa personalizado",
      "calendarios de mesa personalizados",
      "calendarios de sobremesa",
      "calendarios sobremesa",
      "calendarios de mesa",
      "calendario personalizado",
      "calendarios económicos",
      "calendario publicitario",
      "calendarios corporativos",
      "imprimir calendarios sobremesa Barcelona"
    ],
    canonical: "https://calendarios.reprodisseny.com/calendario-mesa-espiral-personalizado",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Calendarios de Mesa con Espiral Personalizados ",
      "description": "Personaliza calendarios de mesa personalizados para empresas y oficinas. Perfectos para promocionar tu marca durante todo el año.",
      "image": `${Img1.src}`,
      "brand": {
        "@type": "Brand",
        "name": "Repro Disseny"
      },
      "offers": {
        "@type": "Offer",
        "url": "https://calendarios.reprodisseny.com/landing/calendario-mesa-espiral",
        "priceCurrency": "EUR",
        "price": "5.99",
        "availability": "https://schema.org/InStock"
      },
      "keywords": "calendario mesa personalizado, calendario sobremesa personalizado, calendarios de mesa personalizados, calendarios de sobremesa, alendarios sobremesa, calendarios de mesa, calendario personalizado, calendarios económicos, calendario publicitario,calendarios corporativos,imprimir calendarios sobremesa Barcelona"
    }
  };
  sendGrid.setApiKey("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");
  if (Astro2.request.method === "POST") {
    try {
      const formData = await Astro2.request.formData();
      const nombre = formData.get("nombre") || "Usuario anónimo";
      const email = formData.get("email");
      const telefono = formData.get("telefono") || "No proporcionado";
      const tamaño = formData.get("tamaño");
      const message = `
      Nombre: ${nombre}
      Email: ${email}
      Teléfono: ${telefono}
      Tamaño: ${tamaño}
    `;
      if (!email || typeof email !== "string") {
        throw new Error("El correo es obligatorio y debe ser una cadena de texto válida.");
      }
      if (!tamaño || typeof tamaño !== "string") {
        throw new Error("El tamaño es obligatorio y debe ser una cadena de texto válida.");
      }
      if (!message || typeof message !== "string" || !message.trim()) {
        throw new Error("El contenido del mensaje no puede estar vacío o inválido.");
      }
      const msg = {
        to: email,
        // Change to your recipient
        from: "noreply@reprodisseny.com",
        // Change to your verified sender
        subject: `Contact form submission from ${nombre}`,
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
  return renderTemplate`${renderComponent($$result, "Layout", $$LandingLayout2, { "metadata": metadata, "data-astro-cid-n2g62zsc": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section id="form-section" class="p-6 bg-white shadow-lg rounded-lg w-full mx-auto md:w-2/3 lg:w-2/3" data-astro-cid-n2g62zsc> <h2 class="text-2xl font-bold mb-4 text-center" data-astro-cid-n2g62zsc>Solicita la mejor oferta para calendarios de mesa</h2> <form id="calendar-form" method="POST" data-astro-cid-n2g62zsc> <fieldset class="col-span-2 text-left" data-astro-cid-n2g62zsc> <!-- Nombre --> <div class="input-icon-container relative w-full mb-4" data-astro-cid-n2g62zsc> <label for="nombre" class="block text-sm font-medium text-gray-700" data-astro-cid-n2g62zsc>Nombre *</label> <input id="nombre" name="nombre" required placeholder="Introduce tu nombre" class="form-btn pl-10 py-2" data-astro-cid-n2g62zsc> </div> <!-- Empresa con icono en el placeholder --> <div class="input-icon-container relative w-full mb-4" data-astro-cid-n2g62zsc> <label for="empresa" class="block text-sm font-medium text-gray-700" data-astro-cid-n2g62zsc>Empresa</label> <div class="relative" data-astro-cid-n2g62zsc> <input id="empresa" name="empresa" placeholder="Introduce tu empresa" class="form-btn pl-10 py-2" data-astro-cid-n2g62zsc> <svg xmlns="http://www.w3.org/2000/svg" class="icon absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor" data-astro-cid-n2g62zsc> <!-- Icono para la empresa --> <path d="M3 3.75a.75.75 0 0 1 .75-.75h1.5v2.25a.75.75 0 0 1-1.5 0V4.5H3.75a.75.75 0 0 1-.75-.75zM3.75 6h1.5v2.25a.75.75 0 0 1-1.5 0V6zm0 3h1.5v1.5a.75.75 0 0 1-1.5 0v-1.5z" data-astro-cid-n2g62zsc></path> </svg> </div> </div> <!-- Email --> <div class="input-icon-container relative w-full mb-4" data-astro-cid-n2g62zsc> <label for="email" class="block text-sm font-medium text-gray-700" data-astro-cid-n2g62zsc>Email *</label> <input id="email" name="email" type="email" required placeholder="Introduce tu email" class="form-btn pl-10" data-astro-cid-n2g62zsc> </div> <!-- Teléfono --> <div class="input-icon-container relative w-full mb-4" data-astro-cid-n2g62zsc> <label for="telefono" class="block text-sm font-medium text-gray-700" data-astro-cid-n2g62zsc>Teléfono</label> <input id="telefono" name="telefono" type="tel" required placeholder="Introduce tu teléfono" class="form-btn pl-10" data-astro-cid-n2g62zsc> </div> </fieldset> <!-- Tamaño del calendario --> <div class="col-span-2 text-center" data-astro-cid-n2g62zsc> <label for="tamaño" class="block text-sm font-bold text-gray-700 mb-2" data-astro-cid-n2g62zsc>Tamaño del calendario*</label> <div id="tamaño" class="size-container flex justify-center gap-4 flex-wrap" data-astro-cid-n2g62zsc> <button type="button" class="size-btn py-2 px-4 rounded-full border border-gray-300" data-value="21x10cm" data-astro-cid-n2g62zsc>21x10cm</button> <button type="button" class="size-btn py-2 px-4 rounded-full border border-gray-300" data-value="15x15cm" data-astro-cid-n2g62zsc>15x15cm</button> <button type="button" class="size-btn py-2 px-4 rounded-full border border-gray-300" data-value="21x15cm" data-astro-cid-n2g62zsc>21x15cm</button> </div> <input type="hidden" name="tamaño" id="tamaño-input" required data-astro-cid-n2g62zsc> <span class="error-message hidden" id="tamaño-error" data-astro-cid-n2g62zsc>Selecciona un tamaño.</span> </div> <!-- Cantidad con selección destacada --> <div class="col-span-2 text-center" data-astro-cid-n2g62zsc> <label for="cantidad" class="block text-sm font-bold text-gray-700 mb-2" data-astro-cid-n2g62zsc>Cantidad *</label> <div id="cantidad" class="flex justify-center gap-2 flex-wrap" data-astro-cid-n2g62zsc> <button type="button" class="quantity-btn py-2 px-4 rounded-full border border-gray-300" data-value="50" data-astro-cid-n2g62zsc>50</button> <button type="button" class="quantity-btn py-2 px-4 rounded-full border border-gray-300" data-value="100" data-astro-cid-n2g62zsc>100</button> <button type="button" class="quantity-btn py-2 px-4 rounded-full border border-gray-300" data-value="200" data-astro-cid-n2g62zsc>200</button> <button type="button" class="quantity-btn py-2 px-4 rounded-full border border-gray-300" data-value="500" data-astro-cid-n2g62zsc>500</button> <button type="button" class="quantity-btn py-2 px-4 rounded-full border border-gray-300" data-value="1000" data-astro-cid-n2g62zsc>1000</button> </div> <input type="hidden" name="cantidad" id="cantidad-input" required data-astro-cid-n2g62zsc> <span class="error-message hidden" id="cantidad-error" data-astro-cid-n2g62zsc>Selecciona una cantidad.</span> </div> <!-- Aceptación de política de privacidad --> <div class="col-span-2" data-astro-cid-n2g62zsc> <label class="flex items-center" data-astro-cid-n2g62zsc> <input type="checkbox" name="politicaPrivacidad" id="politicaPrivacidad" required class="mr-2" data-astro-cid-n2g62zsc>
Acepto la política de privacidad *
</label> <span class="error-message hidden" id="politicaPrivacidad-error" data-astro-cid-n2g62zsc>Debes aceptar la política de privacidad.</span> </div> <!-- Botón de Envío --> <div class="col-span-2 text-center mt-4" data-astro-cid-n2g62zsc> <button type="submit" class="btn btn-primary" data-astro-cid-n2g62zsc>Enviar</button> </div> <!-- Mensaje de feedback --> <div id="response-message" class="hidden mt-4 text-center text-green-600" data-astro-cid-n2g62zsc>Tu formulario ha sido enviado con éxito.</div> </form> </section> ` })}  `;
}, "C:/Users/Jordi/Documents/web/calendaris/src/pages/calendario-mesa-espiral.astro", void 0);
const $$file = "C:/Users/Jordi/Documents/web/calendaris/src/pages/calendario-mesa-espiral.astro";
const $$url = "/calendario-mesa-espiral";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$CalendarioMesaEspiral,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
