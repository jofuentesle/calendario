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
    const contentType = request.headers.get('Content-Type') || '';
    if (!contentType.includes('application/json')) {
      console.error('Error: Se esperaba JSON en la solicitud');
      return new Response(JSON.stringify({ success: false, error: 'Solicitud malformada, se esperaba JSON' }), { status: 400 });
    }

    const bodyText = await request.text();  // Leer el cuerpo de la solicitud como texto

    if (!bodyText) {
      console.error('Error: El cuerpo de la solicitud está vacío');
      return new Response(JSON.stringify({ success: false, error: 'El cuerpo de la solicitud está vacío' }), { status: 400 });
    }

    const { name, email, message } = JSON.parse(bodyText);

    // Verificación de campos obligatorios
    if (!email || !message) {
      console.error('Campos obligatorios faltantes: ', { email, message });
      return new Response(JSON.stringify({ success: false, error: 'Faltan campos obligatorios' }), { status: 400 });
    }

    // Construir el contenido del correo
    const messageContent = `
      Nombre: ${name || 'No proporcionado'}
      Email: ${email}
      Mensaje: ${message}
    `;

    // Crear el mensaje a enviar
    const msg = {
      to: 'jfuentesleiva@gmail.com',  // Cambiar al destinatario correcto
      from: 'noreply@reprodisseny.com',
      subject: `Solicitud de contacto de ${email}`,
      text: messageContent,
    };

    // Enviar el correo y verificar resultado
    await sendGrid.send(msg);
    console.log('Correo enviado con éxito a ' + email);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Error al enviar el correo:', error.message);
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
};
