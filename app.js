// app.js

import { createServer } from 'astro/server/node';
import { handler as astroHandler } from './dist/server/entry.mjs'; // Apunta al archivo de entrada generado por Astro
import * as path from 'path';

const port = process.env.PORT || 3000;
const server = createServer(astroHandler);

// Iniciar el servidor
server.listen(port, () => {
  console.log(`Server running on port ${port} at calendarios.reprodisseny.com`);
});
