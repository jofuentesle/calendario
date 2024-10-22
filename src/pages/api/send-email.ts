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
    // Obtener los datos del formulario
    const { name, phone, email, company, quantity, privacy } = await request.json();

    // Verificar si los campos obligatorios están presentes
    if (!phone || !email || !privacy || !quantity) {
      return new Response(JSON.stringify({ success: false, error: 'Faltan campos obligatorios' }), { status: 400 });
    }

    // Construir el contenido del correo
    const messageContent = `
      Nombre: ${name || 'No proporcionado'}
      Teléfono: ${phone}
      Email: ${email}
      Empresa: ${company || 'No proporcionado'}
      Cantidad: ${quantity} unidades
      Aceptación de Políticas de Privacidad: ${privacy ? 'Aceptada' : 'No aceptada'}
    `;

    // Crear el mensaje a enviar
    const msg = {
      to: 'jfuentesleiva@gmail.com',  // Cambiar al destinatario correcto
      from: 'noreply@reprodisseny.com',
      subject: `Solicitud de contacto de ${email}`,
      text: messageContent,
    };

    // Enviar el correo
    await sendGrid.send(msg);

    // Responder con éxito
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
};
