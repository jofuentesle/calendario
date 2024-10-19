import { c as createAstro, a as createComponent, r as renderTemplate, f as renderHead } from '../chunks/astro/server_JUoDhWgB.mjs';
import 'kleur/colors';
import 'clsx';
import sendGrid from '@sendgrid/mail';
import 'dotenv/config';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://astrowind.vercel.app");
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  sendGrid.setApiKey("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");
  console.log(process.env.SENDGRID_API_KEY);
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
  return renderTemplate`<html lang="en"> <head><title>Contact Me</title>${renderHead()}</head> <body> <h1>Say Hi to me!</h1> <form method="POST"> <div> <input type="text" name="name" placeholder="Name"> </div> <div> <input type="email" name="email" placeholder="Email"> </div> <div> <textarea name="message" placeholder="Message"></textarea> </div> <div> <button type="submit">Send</button> </div> </form> </body></html>`;
}, "C:/Users/Jordi/Documents/web/calendaris/src/pages/contact.astro", void 0);
const $$file = "C:/Users/Jordi/Documents/web/calendaris/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
