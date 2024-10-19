import dotenv from 'dotenv'; 
dotenv.config();
import sendGrid from '@sendgrid/mail';

if (!process.env.SENDGRID_API_KEY) {
  throw new Error('Falta la clave API de SendGrid en las variables de entorno');
}

sendGrid.setApiKey(process.env.SENDGRID_API_KEY);

export async function handler(event:any) {
    if (event.httpMethod === 'POST') {
      try {
        const { name, email, message } = JSON.parse(event.body);
  
        // Validación de los datos
        if (!name || !email || !message) {
          return {
            statusCode: 400,
            body: JSON.stringify({ error: 'Todos los campos son obligatorios' }),
          };
        }
  
        // Configuración del correo
        const msg = {
          to: 'jordi@reprodisseny.com',
          from: 'noreply@reprodisseny.com',
          subject: `Nuevo mensaje de contacto de ${name}`,
          text: message,
          replyTo: email,
        };
  
        // Enviar el correo
        await sendGrid.send(msg);
  
        return {
          statusCode: 200,
          body: JSON.stringify({ success: 'Correo enviado con éxito' }),
        };
      } catch (error) {
        console.error('Error al enviar el correo:', error);
        return {
          statusCode: 500,
          body: JSON.stringify({ error: 'Error al enviar el correo' }),
        };
      }
    }
  
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Método no permitido' }),
    };
  }