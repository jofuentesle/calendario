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

    const nombre = params.get('nombre');
    const email = params.get('email');
    const telefono = params.get('telefono');

    // Verificar que los campos requeridos están presentes
    if (!nombre || !email || !telefono) {
      return new Response(
        JSON.stringify({ success: false, error: 'Faltan campos obligatorios' }),
        { status: 400 }
      );
    }

    // Construir el contenido del mensaje del correo
    const messageContent = `
      Nombre: ${nombre}
      Correo electrónico: ${email}
      Teléfono: ${telefono}
    `;

    // Configurar el mensaje a enviar
    const msg = {
      to: email, // Cambia este correo al destinatario correcto
      from: 'noreply@reprodisseny.com',
      subject: `Solicitud de presupuesto de ${nombre}`,
      text: messageContent,
    };

    // Enviar el correo mediante SendGrid
    await sendGrid.send(msg);

    // Responder con éxito si el correo se envió correctamente
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 }
    );
  }
};
