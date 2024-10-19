import sendGrid from '@sendgrid/mail';
export { renderers } from '../../renderers.mjs';

sendGrid.setApiKey("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");
async function post({ request }) {
  if (request.method === "POST") {
    try {
      const data = await request.formData();
      const name = data.get("nombre");
      const email = data.get("email");
      const tipoCalendario = data.get("tipoCalendario");
      const tamaño = data.get("tamaño");
      const cantidad = data.get("cantidad");
      const msg = {
        to: "jordi@reprodisseny.com",
        // Cambia al destinatario real
        from: "noreply@reprodisseny.com",
        // Cambia a un remitente verificado
        subject: `Solicitud de presupuesto de ${name}`,
        text: `Nombre: ${name}
Email: ${email}
Tipo de Calendario: ${tipoCalendario}
Tamaño: ${tamaño}
Cantidad: ${cantidad}`
      };
      await sendGrid.send(msg);
      return new Response(JSON.stringify({ message: "Formulario enviado con éxito" }), { status: 200 });
    } catch (error) {
      console.error("Error al enviar el correo:", error);
      return new Response(JSON.stringify({ message: "Error al enviar el correo" }), { status: 500 });
    }
  }
  return new Response(JSON.stringify({ message: "Método no permitido" }), { status: 405 });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  post
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
