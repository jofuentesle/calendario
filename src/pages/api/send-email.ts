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
    // Obtener los datos del formulario enviados desde la solicitud
    const { nombre, email, telefono,  } = await request.json();

    console.log('Datos recibidos:', { nombre, email, telefono });

    // Verificar si los campos requeridos están presentes
    if (!nombre || !email || !telefono ) {
      return new Response(JSON.stringify({ success: false, error: 'Faltan campos obligatorios' }), { status: 400 });
    }

    // Construir el contenido del correo
    const messageContent = `
      Nombre: ${nombre}
      Correo electrónico: ${email}
      Teléfono: ${telefono}
     
    `;

    // Crear el mensaje a enviar
    const msg = {
      to: 'jfuentesleiva@gmail.com',  // Cambiar al destinatario correcto
      from: 'noreply@reprodisseny.com',
      subject: `Solicitud de presupuesto de ${nombre}`,
      text: messageContent, // Enviar el mensaje de texto con todos los datos
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
