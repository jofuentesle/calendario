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
    // Extraer los parámetros de la URL
    const url = new URL(request.url);
    const params = new URLSearchParams(url.search);

    // Obtener todos los parámetros del formulario
    const nombre = params.get('nombre');
    const email = params.get('email');
    const telefono = params.get('telefono');
    const cantidad = params.get('cantidad');
    const tipoCalendario = params.get('tipo_calendario');
    const privacidadAceptada = params.get('disclaimer');

   // Verificar que la política de privacidad ha sido aceptada (único campo obligatorio)
   if (!privacidadAceptada) {
    
    return new Response(null, {
      status: 302,
      headers: {
        'Location': '/nogracias'
      }
    });
  }

    // Construir el contenido del mensaje del correo
    const messageContent = `
      **Solicitud de presupuesto**

      Detalles del cliente:
      - **Nombre**: ${nombre}
      - **Correo electrónico**: ${email}
      - **Teléfono**: ${telefono}

      Detalles del calendario:
      - **Cantidad solicitada**: ${cantidad}
      - **Tipo de calendario**: ${tipoCalendario}

      Este mensaje ha sido enviado automáticamente desde el formulario de contacto en ReproDisseny.
    `;

    // Configurar el mensaje a enviar
    const msg = {
      to: 'jordi@reprodisseny.com',
      from: 'noreply@reprodisseny.com',
      subject: `Nueva solicitud de presupuesto de ${nombre}`,
      text: messageContent.replace(/<\/?[^>]+(>|$)/g, ""),
      html: messageContent.replace(/\n/g, '<br/>'),
    };

    // Enviar el correo mediante SendGrid
    await sendGrid.send(msg);

    // Redirigir al usuario a la página de agradecimiento
    return new Response(null, {
      status: 302,
      headers: {
        'Location': '/gracias'
      }
    });

  } catch (error) {
    console.error('Error al enviar el correo:', error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 }
    );
  }
};
