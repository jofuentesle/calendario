import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_JUoDhWgB.mjs';
import 'kleur/colors';
import { $ as $$LandingLayout2 } from '../chunks/LandingLayout2_Dq_C7QjK.mjs';
import sendGrid from '@sendgrid/mail';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://astrowind.vercel.app");
const $$Formulario = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Formulario;
  sendGrid.setApiKey("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");
  if (Astro2.request.method === "POST") {
    try {
      const data = await Astro2.request.formData();
      const name = data.get("name");
      const email = data.get("email");
      const message = data.get("message");
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
  return renderTemplate`${renderComponent($$result, "Layout", $$LandingLayout2, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section> <form method="POST"> <div> <input type="text" name="name" placeholder="Name"> </div> <div> <input type="email" name="email" placeholder="Email"> </div> <div> <textarea name="message" placeholder="Message"></textarea> </div> <div> <button type="submit">Send</button> </div> </form> </section> ` })}`;
}, "C:/Users/Jordi/Documents/web/calendaris/src/pages/formulario.astro", void 0);
const $$file = "C:/Users/Jordi/Documents/web/calendaris/src/pages/formulario.astro";
const $$url = "/formulario";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Formulario,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
