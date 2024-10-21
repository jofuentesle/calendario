import sendGrid from '@sendgrid/mail';
import dotenv from 'dotenv';

// Cargar variables de entorno
dotenv.config();

const apiKey = process.env.SENDGRID_API_KEY;

if (!apiKey) {
  throw new Error('La API Key de SendGrid no está definida en las variables de entorno');
}

sendGrid.setApiKey(apiKey);

export const POST = async ({ request }) => {
  try {
    const data = await request.json();

    // Validar que todos los campos requeridos existan
    const { name, email, telefono, empresa, tipo, medida, cantidad } = data;
    if (!name || !email) {
      return new Response(JSON.stringify({ success: false, error: 'Faltan campos obligatorios' }), { status: 400 });
    }

    const messageContent = `
      Nombre: ${name}
      Email: ${email}
      Teléfono: ${telefono}
      Empresa: ${empresa || 'No proporcionado'}
      Tipo de Calendario: ${tipo}
      Medida: ${medida}
      Cantidad: ${cantidad}
    `;

    const msg = {
      to: 'jfuentesleiva@gmail.com',  // Cambia esto al destinatario correcto
      from: 'noreply@reprodisseny.com',
      replyTo: { email, name },
      subject: `Solicitud de presupuesto de ${name}`,
      text: messageContent,
    };

    // Enviar el correo
    await sendGrid.send(msg);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
};
