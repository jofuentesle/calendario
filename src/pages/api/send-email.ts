import sendGrid from '@sendgrid/mail';
import dotenv from 'dotenv';

// Cargar variables de entorno
dotenv.config();

const apiKey = process.env.SENDGRID_API_KEY;

if (!apiKey) {
  throw new Error('La API Key de SendGrid no está definida en las variables de entorno');
}

sendGrid.setApiKey(apiKey);

export const GET = async ({ request }) => {
  try {
    const url = new URL(request.url);
    const params = new URLSearchParams(url.search);

    // Capturar todos los datos del formulario
    const nombre = params.get('nombre') || 'Usuario';
    const email = params.get('email');
    const telefono = params.get('telefono') || 'No proporcionado';
    const empresa = params.get('empresa') || 'No proporcionado';
    const cantidad = params.get('cantidad') || 'No especificado';
    const tipoCalendario = params.get('tipoCalendario') || 'Consulta general';

    if (!email) {
      console.log('No se ha proporcionado un correo electrónico');
      return new Response(JSON.stringify({ success: false, message: 'Correo electrónico es obligatorio' }), { status: 400 });
    }

    // Ajuste en messageContent (SendGrid)
    const messageContent = `
<h2>Solicitud de Presupuesto</h2>
<p><strong>Detalles del Cliente:</strong></p>
<ul>
  <li><strong>Nombre:</strong> ${nombre}</li>
  <li><strong>Correo Electrónico:</strong> ${email}</li>
  <li><strong>Teléfono:</strong> ${telefono}</li>
  <li><strong>Empresa:</strong> ${empresa}</li>
</ul>
<p><strong>Detalles del Pedido:</strong></p>
<ul>
  <li><strong>Tipo de Calendario:</strong> ${tipoCalendario}</li>
  <li><strong>Cantidad:</strong> ${cantidad}</li>
</ul>
<p style="font-style: italic; color: gray;">Este mensaje ha sido enviado automáticamente desde el formulario de contacto en ReproDisseny.</p>
`;

    const msg = {
      to: 'jordi@reprodisseny.com',
      from: 'noreply@reprodisseny.com',
      subject: `Nueva solicitud de presupuesto de ${nombre}`,
      text: messageContent.replace(/<\/?[^>]+(>|$)/g, ''),// Versión de texto sin formato
      html: messageContent, // Versión HTML
    };

    await sendGrid.send(msg);

    return new Response(null, {
      status: 302,
      headers: {
        Location: '/gracias',
      },
    });
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
};
