// src/pages/api/contact.ts
import sendGrid from '@sendgrid/mail';
import 'dotenv/config';

// Configura tu API Key de SendGrid
sendGrid.setApiKey(import.meta.env.SENDGRID_API_KEY);

export async function post({ request }: { request: Request }) {
  try {
    // Obtener datos del formulario
    const formData = await request.formData();
    const name = formData.get('name') as string | null;
    const email = formData.get('email') as string | null;
    const cantidad = formData.get('cantidad') as string | null;
    const acabado = formData.get('Acabado') as string | null;
    const medida = formData.get('Medida') as string | null;
    

    // Validación para asegurar que name y email no sean nulos o vacíos
    if (!name || !email) {
    throw new Error('El nombre y el correo electrónico son obligatorios.');
    }

    const message = `Consulta de ${name} sobre: ${email}, Acabado: ${acabado}, Medida: ${medida}, Cantidad: ${cantidad}`;

    // Enviar correo electrónico
    const msg = {
      to: 'jordi@reprodisseny.com', // Cambia esto a tu destinatario
      from: 'noreply@reprodisseny.com', // Cambia esto a tu remitente verificado
      replyTo: { email, name },
      subject: `Consulta de ${name}`,
      text: message,
    };

    await sendGrid.send(msg);
    console.log('Correo enviado');

    return new Response(JSON.stringify({ success: true, message: 'Cotización enviada correctamente. Te contactaremos pronto.' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
