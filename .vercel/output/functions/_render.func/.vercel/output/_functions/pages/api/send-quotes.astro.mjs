import sendGrid from '@sendgrid/mail';
export { renderers } from '../../renderers.mjs';

sendGrid.setApiKey("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");
const post = async ({ request }) => {
  try {
    const formData = await request.formData();
    const nombre = formData.get("nombre");
    const email = formData.get("email");
    const telefono = formData.get("telefono");
    const empresa = formData.get("empresa");
    const tipoCalendario = formData.get("tipoCalendario");
    const tamaño = formData.get("tamaño");
    const cantidad = formData.get("cantidad");
    if (!nombre || !email || !tipoCalendario || !tamaño || !cantidad) {
      return new Response(JSON.stringify({ success: false, message: "Faltan campos requeridos" }), { status: 400 });
    }
    const message = `
      Nombre: ${nombre}
      Email: ${email}
      Teléfono: ${telefono}
      Empresa: ${empresa}
      Tipo de Calendario: ${tipoCalendario}
      Tamaño: ${tamaño}
      Cantidad: ${cantidad}
    `;
    const msg = {
      to: "jordi@reprodisseny.com",
      from: "noreply@reprodisseny.com",
      subject: `Solicitud de oferta de calendario - ${tipoCalendario}`,
      text: message
    };
    await sendGrid.send(msg);
    return new Response(JSON.stringify({ success: true, message: "Correo enviado correctamente" }), { status: 200 });
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    return new Response(JSON.stringify({ success: false, message: "Error al enviar el correo", error: error.message }), { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  post
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
