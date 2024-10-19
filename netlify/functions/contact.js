import dotenv from 'dotenv'; 
dotenv.config();
import sendGrid from '@sendgrid/mail';


const handler = async function (event) {

   // Envío del correo con SendGrid
   const { fname, lname, email, message } = JSON.parse(event.body);

      // set API key
      if (!process.env.SENDGRID_API_KEY) {
        throw new Error('Falta la clave API de SendGrid en las variables de entorno');
      }
      
      sendGrid.setApiKey(process.env.SENDGRID_API_KEY);
   
      const data = {
        to: "jordi@reprodisseny.com", // Change to your recipient (your email in this case)
        from: "noreply@reprodisseny.com", // Change to your verified sender
        subject: `New message from ${fname} ${lname} (${email})`,
        html: `<p>${message}</p>`,
    };


  try {
    await sendGrid.send(data);
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        msg: "Message sent successfully",
      }),
    };
  } catch (err) {
    return {
      statusCode: err.code,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ msg: err.message }),
    };
  }
  
  };

export { handler };