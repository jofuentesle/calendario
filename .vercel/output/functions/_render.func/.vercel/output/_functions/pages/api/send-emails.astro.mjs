import dotenv from 'dotenv';
import sendGrid from '@sendgrid/mail';
export { renderers } from '../../renderers.mjs';

dotenv.config();
if (!process.env.SENDGRID_API_KEY) {
  throw new Error("Falta la clave API de SendGrid en las variables de entorno");
}
sendGrid.setApiKey(process.env.SENDGRID_API_KEY);
async function post(context) {
  const { request } = context;
  const l = "hola";
  if (request.method === "POST") {
    try {
      const formData = await request.formData();
      const name = formData.get("name");
      const email = formData.get("email");
      if (!name || !email) {
        return new Response(JSON.stringify({ error: "Todos los campos son obligatorios" }), { status: 400 });
      }
      const msg = {
        to: "jordi@reprodisseny.com",
        from: "jfuentesleiva@gmail.com",
        replyTo: { email: String(email), name: String(name) },
        subject: `Nuevo mensaje de contacto de ${String(name)}`,
        text: String(l)
      };
      await sendGrid.send(msg);
      return new Response(JSON.stringify({ success: "Correo enviado con éxito" }), { status: 200 });
    } catch (error) {
      console.error("Error al enviar el correo:", error);
      return new Response(JSON.stringify({ error: "Error al enviar el correo" }), { status: 500 });
    }
  } else {
    return new Response(JSON.stringify({ error: "Método no permitido" }), { status: 405 });
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  post
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
