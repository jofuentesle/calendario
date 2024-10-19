import { c as createAstro, a as createComponent, r as renderTemplate, f as renderHead } from './astro/server_JUoDhWgB.mjs';
import 'kleur/colors';
import 'clsx';
import sendGrid from '@sendgrid/mail';
/* empty css                                            */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://astrowind.vercel.app");
const $$DynamicForm = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$DynamicForm;
  sendGrid.setApiKey("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");
  if (Astro2.request.method === "POST") {
    try {
      const data = await Astro2.request.formData();
      const name = data.get("name");
      const email = data.get("email");
      const msg = {
        to: "jordi@reprodisseny.com",
        // Change to your recipient
        from: "noreply@reprodisseny.com",
        // Change to your verified sender
        subject: `Contact form submission from ${name}`,
        text: "hola cocacola"
      };
      await sendGrid.send(msg).then(() => {
        console.log("Email sent");
      }).catch((error) => {
        console.error(error);
      });
    } catch (error) {
      console.error(error);
    }
  }
  return renderTemplate(_a || (_a = __template(["<head>", `</head> <body data-astro-cid-u5m6gt6g> <section id="form-section" class="p-6 bg-white shadow-lg rounded-lg w-full max-w-6xl mx-auto" data-astro-cid-u5m6gt6g> <h2 class="text-2xl font-bold mb-4 text-center" data-astro-cid-u5m6gt6g>Configura tu Calendario</h2> <div class="contact-info-container" data-astro-cid-u5m6gt6g> <form id="calendar-form" method="POST" data-astro-cid-u5m6gt6g> <fieldset class="col-span-2 text-left" data-astro-cid-u5m6gt6g> <!-- Nombre --> <div class="input-icon-container relative w-full mb-4" data-astro-cid-u5m6gt6g> <label for="nombre" class="block text-sm font-medium text-gray-700" data-astro-cid-u5m6gt6g>Nombre *</label> <div class="relative" data-astro-cid-u5m6gt6g> <input id="nombre" name="nombre" required placeholder="Introduce tu nombre" class="form-btn pl-10 py-2" data-astro-cid-u5m6gt6g> <svg xmlns="http://www.w3.org/2000/svg" class="icon absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-u5m6gt6g> <!-- SVG para 'Nombre' --> <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" data-astro-cid-u5m6gt6g></path> </svg> </div> <span class="error-message hidden" id="nombre-error" data-astro-cid-u5m6gt6g>Este campo es obligatorio.</span> </div> <!-- Email --> <div class="input-icon-container relative w-full mb-4" data-astro-cid-u5m6gt6g> <label for="email" class="block text-sm font-medium text-gray-700" data-astro-cid-u5m6gt6g>Email *</label> <div class="relative" data-astro-cid-u5m6gt6g> <input id="email" name="email" type="email" required placeholder="Introduce tu email" class="form-btn pl-10" data-astro-cid-u5m6gt6g> <svg xmlns="http://www.w3.org/2000/svg" class="icon absolute left-3 top-11 w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-u5m6gt6g> <!-- SVG para 'Email' --> <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" data-astro-cid-u5m6gt6g></path> </svg> </div> <span class="error-message hidden" id="email-error" data-astro-cid-u5m6gt6g>Por favor, introduce un email válido.</span> </div> <!-- Teléfono --> <div class="input-icon-container relative w-full mb-4" data-astro-cid-u5m6gt6g> <label for="telefono" class="block text-sm font-medium text-gray-700" data-astro-cid-u5m6gt6g>Teléfono</label> <div class="relative" data-astro-cid-u5m6gt6g> <input id="telefono" name="telefono" type="tel" placeholder="Introduce tu teléfono" class="form-btn pl-10" data-astro-cid-u5m6gt6g> <svg xmlns="http://www.w3.org/2000/svg" class="icon absolute left-3 top-11 w-5 h-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor" data-astro-cid-u5m6gt6g> <!-- SVG para 'Teléfono' --> <path fill-rule="evenodd" d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z" clip-rule="evenodd" data-astro-cid-u5m6gt6g></path> </svg> </div> <span class="error-message hidden" id="telefono-error" data-astro-cid-u5m6gt6g>Por favor, introduce un número válido.</span> </div> <!-- Empresa --> <div class="input-icon-container relative w-full mb-4" data-astro-cid-u5m6gt6g> <label for="empresa" class="block text-sm font-medium text-gray-700" data-astro-cid-u5m6gt6g>Empresa</label> <div class="relative" data-astro-cid-u5m6gt6g> <input id="empresa" name="empresa" placeholder="Introduce tu empresa" class="form-btn pl-10" data-astro-cid-u5m6gt6g> <svg xmlns="http://www.w3.org/2000/svg" class="icon absolute left-3 top-11 w-6 h-6 text-gray-500" viewBox="0 0 24 24" fill="currentColor" data-astro-cid-u5m6gt6g> <!-- SVG para 'Empresa' --> <path fill-rule="evenodd" d="M3 2.25a.75.75 0 0 0 0 1.5v16.5h-.75a.75.75 0 0 0 0 1.5H15v-18a.75.75 0 0 0 0-1.5H3ZM6.75 19.5v-2.25a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75ZM6 6.75A.75.75 0 0 1 6.75 6h.75a.75.75 0 0 1 0 1.5h-.75A.75.75 0 0 1 6 6.75ZM6.75 9a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75ZM6 12.75a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 0 1.5h-.75a.75.75 0 0 1-.75-.75ZM10.5 6a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75Zm-.75 3.75A.75.75 0 0 1 10.5 9h.75a.75.75 0 0 1 0 1.5h-.75a.75.75 0 0 1-.75-.75ZM10.5 12a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75ZM16.5 6.75v15h5.25a.75.75 0 0 0 0-1.5H21v-12a.75.75 0 0 0 0-1.5h-4.5Zm1.5 4.5a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Zm.75 2.25a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75v-.008a.75.75 0 0 0-.75-.75h-.008ZM18 17.25a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z" clip-rule="evenodd" data-astro-cid-u5m6gt6g></path> </svg> </div> <span class="error-message text-red-500 text-sm" data-astro-cid-u5m6gt6g></span> </div> </fieldset> <!-- Tipo de Calendario con botones seleccionables --> <div class="col-span-2 text-center" data-astro-cid-u5m6gt6g> <label for="tipoCalendario" class="block text-sm font-bold text-gray-700 mb-2" data-astro-cid-u5m6gt6g>Tipo de Calendario*</label> <div id="tipoCalendario" class="flex justify-center gap-4 flex-wrap" data-astro-cid-u5m6gt6g> <button type="button" class="calendar-btn py-2 px-4 rounded-full border border-gray-300" data-value="mesa-espiral" data-astro-cid-u5m6gt6g>Mesa Espiral</button> <button type="button" class="calendar-btn py-2 px-4 rounded-full border border-gray-300" data-value="mesa-triangular" data-astro-cid-u5m6gt6g>Mesa Triangular</button> <button type="button" class="calendar-btn py-2 px-4 rounded-full border border-gray-300" data-value="pared-revista" data-astro-cid-u5m6gt6g>Pared Revista</button> <button type="button" class="calendar-btn py-2 px-4 rounded-full border border-gray-300" data-value="pared-espiral" data-astro-cid-u5m6gt6g>Pared Espiral</button> </div> <input type="hidden" name="tipoCalendario" id="tipoCalendario-input" required data-astro-cid-u5m6gt6g> <span class="error-message hidden" id="tipoCalendario-error" data-astro-cid-u5m6gt6g>Selecciona un tipo de calendario.</span> </div> <!-- Tamaño dinámico con valor por defecto, todos creados en el DOM --> <div class="col-span-2 text-center" data-astro-cid-u5m6gt6g> <label for="tamaño" class="block text-sm font-bold text-gray-700 mb-2" data-astro-cid-u5m6gt6g>Tamaño*</label> <!-- Contenedor de medidas por cada tipo de calendario --> <div id="tamaño" class="size-container mesa-espiral flex justify-center gap-4 flex-wrap" data-astro-cid-u5m6gt6g> <button type="button" class="size-btn py-2 px-4 rounded-full border border-gray-300" data-astro-cid-u5m6gt6g>21x10cm</button> <button type="button" class="size-btn py-2 px-4 rounded-full border border-gray-300" data-astro-cid-u5m6gt6g>15x15cm</button> <button type="button" class="size-btn py-2 px-4 rounded-full border border-gray-300" data-astro-cid-u5m6gt6g>21x15cm</button> </div> <div class="size-container mesa-triangular flex justify-center gap-4 flex-wrap" data-astro-cid-u5m6gt6g> <button type="button" class="size-btn py-2 px-4 rounded-full border border-gray-300" data-astro-cid-u5m6gt6g>21x10cm</button> <button type="button" class="size-btn py-2 px-4 rounded-full border border-gray-300" data-astro-cid-u5m6gt6g>15x15cm</button> <button type="button" class="size-btn py-2 px-4 rounded-full border border-gray-300" data-astro-cid-u5m6gt6g>21x15cm</button> </div> <div class="size-container pared-espiral flex justify-center gap-4 flex-wrap" data-astro-cid-u5m6gt6g> <button type="button" class="size-btn py-2 px-4 rounded-full border border-gray-300" data-astro-cid-u5m6gt6g>33x23 cm cerrado</button> </div> <div class="size-container pared-revista flex justify-center gap-4 flex-wrap" data-astro-cid-u5m6gt6g> <button type="button" class="size-btn py-2 px-4 rounded-full border border-gray-300" data-astro-cid-u5m6gt6g>34x48cm</button> </div> <input type="hidden" name="tamaño" id="tamaño-input" required data-astro-cid-u5m6gt6g> <span class="error-message hidden" id="tamaño-error" data-astro-cid-u5m6gt6g>Selecciona un tamaño.</span> </div> <!-- Cantidad con selección destacada --> <div class="col-span-2 text-center" data-astro-cid-u5m6gt6g> <label for="cantidad" class="block text-sm font-bold text-gray-700 mb-2" data-astro-cid-u5m6gt6g>Cantidad *</label> <div id="cantidad" class="flex justify-center gap-2 flex-wrap" data-astro-cid-u5m6gt6g> <button type="button" class="quantity-btn py-2 px-4 rounded-full border border-gray-300" data-value="50" data-astro-cid-u5m6gt6g>50</button> <button type="button" class="quantity-btn py-2 px-4 rounded-full border border-gray-300" data-value="100" data-astro-cid-u5m6gt6g>100</button> <button type="button" class="quantity-btn py-2 px-4 rounded-full border border-gray-300" data-value="200" data-astro-cid-u5m6gt6g>200</button> <button type="button" class="quantity-btn py-2 px-4 rounded-full border border-gray-300" data-value="500" data-astro-cid-u5m6gt6g>500</button> <button type="button" class="quantity-btn py-2 px-4 rounded-full border border-gray-300" data-value="1000" data-astro-cid-u5m6gt6g>1000</button> </div> <input type="hidden" name="cantidad" id="cantidad-input" required data-astro-cid-u5m6gt6g> <span class="error-message hidden" id="cantidad-error" data-astro-cid-u5m6gt6g>Selecciona una cantidad.</span> </div> <!-- Aceptación de política de privacidad --> <div class="col-span-2" data-astro-cid-u5m6gt6g> <label class="flex items-center" data-astro-cid-u5m6gt6g> <input type="checkbox" name="politicaPrivacidad" id="politicaPrivacidad" required class="mr-2" data-astro-cid-u5m6gt6g>
Acepto la política de privacidad *
</label> <span class="error-message hidden" id="politicaPrivacidad-error" data-astro-cid-u5m6gt6g>Debes aceptar la política de privacidad.</span> </div> <!-- Botón de Envío --> <div class="col-span-2 text-center mt-4" data-astro-cid-u5m6gt6g> <!-- <button type="submit" class="py-2 px-4 bg-blue-600 text-white rounded-full">Solicita oferta hoy</button>--> <button type="submit" data-astro-cid-u5m6gt6g>Send</button> <div id="response-message" class="text-center mt-4" data-astro-cid-u5m6gt6g></div> </div> </form> </div> </section> <script type="module">

      document.addEventListener('DOMContentLoaded', () => {
        const form = document.getElementById('calendar-form');
        const tipoCalendarioInput = document.getElementById('tipoCalendario-input');
        const tamañoInput = document.getElementById('tamaño-input');
        const cantidadInput = document.getElementById('cantidad-input');
        const calendarBtns = document.querySelectorAll('.calendar-btn');
        const sizeContainers = document.querySelectorAll('.size-container');
        const quantityBtns = document.querySelectorAll('.quantity-btn');

        // Mostrar/Ocultar errores
        const showError = (elementId, message) => {
          const errorElement = document.getElementById(elementId);
          errorElement.textContent = message;
          errorElement.classList.remove('hidden');
        };

        const hideError = (elementId) => {
          const errorElement = document.getElementById(elementId);
          errorElement.classList.add('hidden');
        };

        const validateForm = () => {
          let isValid = true;
          const nombre = document.getElementById('nombre');
          const email = document.getElementById('email');
          const politicaPrivacidad = document.getElementById('politicaPrivacidad');

          // Validar nombre
          if (!nombre.value) {
            showError('nombre-error', 'Este campo es obligatorio.');
            isValid = false;
          } else hideError('nombre-error');

          // Validar email
          if (!email.value || !email.value.includes('@')) {
            showError('email-error', 'Por favor, introduce un email válido.');
            isValid = false;
          } else hideError('email-error');

          // Validar tipo de calendario
          if (!tipoCalendarioInput.value) {
            showError('tipoCalendario-error', 'Selecciona un tipo de calendario.');
            isValid = false;
          } else hideError('tipoCalendario-error');

          // Validar tamaño
          if (!tamañoInput.value) {
            showError('tamaño-error', 'Selecciona un tamaño.');
            isValid = false;
          } else hideError('tamaño-error');

          // Validar cantidad
          if (!cantidadInput.value) {
            showError('cantidad-error', 'Selecciona una cantidad.');
            isValid = false;
          } else hideError('cantidad-error');

          // Validar política de privacidad
          if (!politicaPrivacidad.checked) {
            showError('politicaPrivacidad-error', 'Debes aceptar la política de privacidad.');
            isValid = false;
          } else hideError('politicaPrivacidad-error');

          return isValid;
        };

        // Función para manejar la selección de tipo de calendario
        const handleCalendarSelection = (button) => {
          calendarBtns.forEach(btn => btn.classList.remove('selected'));
          button.classList.add('selected');
          tipoCalendarioInput.value = button.getAttribute('data-value');

          sizeContainers.forEach(container => container.classList.remove('show'));
          const selectedSizeContainer = document.querySelector(\`.size-container.\${button.getAttribute('data-value')}\`);
          if (selectedSizeContainer) selectedSizeContainer.classList.add('show');

          tamañoInput.value = '';
          document.querySelectorAll('.size-btn').forEach(btn => btn.classList.remove('selected'));
        };

        calendarBtns.forEach(button => button.addEventListener('click', () => handleCalendarSelection(button)));

        // Manejar la selección de tamaño
        document.querySelectorAll('.size-btn').forEach(button => {
          button.addEventListener('click', () => {
            button.parentElement.querySelectorAll('.size-btn').forEach(btn => btn.classList.remove('selected'));
            button.classList.add('selected');
            tamañoInput.value = button.textContent.trim();
          });
        });

        // Manejar la selección de cantidad
        quantityBtns.forEach(button => {
          button.addEventListener('click', () => {
            quantityBtns.forEach(btn => btn.classList.remove('selected'));
            button.classList.add('selected');
            cantidadInput.value = button.getAttribute('data-value');
          });
        });

      });
    </script> </body>`], ["<head>", `</head> <body data-astro-cid-u5m6gt6g> <section id="form-section" class="p-6 bg-white shadow-lg rounded-lg w-full max-w-6xl mx-auto" data-astro-cid-u5m6gt6g> <h2 class="text-2xl font-bold mb-4 text-center" data-astro-cid-u5m6gt6g>Configura tu Calendario</h2> <div class="contact-info-container" data-astro-cid-u5m6gt6g> <form id="calendar-form" method="POST" data-astro-cid-u5m6gt6g> <fieldset class="col-span-2 text-left" data-astro-cid-u5m6gt6g> <!-- Nombre --> <div class="input-icon-container relative w-full mb-4" data-astro-cid-u5m6gt6g> <label for="nombre" class="block text-sm font-medium text-gray-700" data-astro-cid-u5m6gt6g>Nombre *</label> <div class="relative" data-astro-cid-u5m6gt6g> <input id="nombre" name="nombre" required placeholder="Introduce tu nombre" class="form-btn pl-10 py-2" data-astro-cid-u5m6gt6g> <svg xmlns="http://www.w3.org/2000/svg" class="icon absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-u5m6gt6g> <!-- SVG para 'Nombre' --> <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" data-astro-cid-u5m6gt6g></path> </svg> </div> <span class="error-message hidden" id="nombre-error" data-astro-cid-u5m6gt6g>Este campo es obligatorio.</span> </div> <!-- Email --> <div class="input-icon-container relative w-full mb-4" data-astro-cid-u5m6gt6g> <label for="email" class="block text-sm font-medium text-gray-700" data-astro-cid-u5m6gt6g>Email *</label> <div class="relative" data-astro-cid-u5m6gt6g> <input id="email" name="email" type="email" required placeholder="Introduce tu email" class="form-btn pl-10" data-astro-cid-u5m6gt6g> <svg xmlns="http://www.w3.org/2000/svg" class="icon absolute left-3 top-11 w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-u5m6gt6g> <!-- SVG para 'Email' --> <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" data-astro-cid-u5m6gt6g></path> </svg> </div> <span class="error-message hidden" id="email-error" data-astro-cid-u5m6gt6g>Por favor, introduce un email válido.</span> </div> <!-- Teléfono --> <div class="input-icon-container relative w-full mb-4" data-astro-cid-u5m6gt6g> <label for="telefono" class="block text-sm font-medium text-gray-700" data-astro-cid-u5m6gt6g>Teléfono</label> <div class="relative" data-astro-cid-u5m6gt6g> <input id="telefono" name="telefono" type="tel" placeholder="Introduce tu teléfono" class="form-btn pl-10" data-astro-cid-u5m6gt6g> <svg xmlns="http://www.w3.org/2000/svg" class="icon absolute left-3 top-11 w-5 h-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor" data-astro-cid-u5m6gt6g> <!-- SVG para 'Teléfono' --> <path fill-rule="evenodd" d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z" clip-rule="evenodd" data-astro-cid-u5m6gt6g></path> </svg> </div> <span class="error-message hidden" id="telefono-error" data-astro-cid-u5m6gt6g>Por favor, introduce un número válido.</span> </div> <!-- Empresa --> <div class="input-icon-container relative w-full mb-4" data-astro-cid-u5m6gt6g> <label for="empresa" class="block text-sm font-medium text-gray-700" data-astro-cid-u5m6gt6g>Empresa</label> <div class="relative" data-astro-cid-u5m6gt6g> <input id="empresa" name="empresa" placeholder="Introduce tu empresa" class="form-btn pl-10" data-astro-cid-u5m6gt6g> <svg xmlns="http://www.w3.org/2000/svg" class="icon absolute left-3 top-11 w-6 h-6 text-gray-500" viewBox="0 0 24 24" fill="currentColor" data-astro-cid-u5m6gt6g> <!-- SVG para 'Empresa' --> <path fill-rule="evenodd" d="M3 2.25a.75.75 0 0 0 0 1.5v16.5h-.75a.75.75 0 0 0 0 1.5H15v-18a.75.75 0 0 0 0-1.5H3ZM6.75 19.5v-2.25a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75ZM6 6.75A.75.75 0 0 1 6.75 6h.75a.75.75 0 0 1 0 1.5h-.75A.75.75 0 0 1 6 6.75ZM6.75 9a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75ZM6 12.75a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 0 1.5h-.75a.75.75 0 0 1-.75-.75ZM10.5 6a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75Zm-.75 3.75A.75.75 0 0 1 10.5 9h.75a.75.75 0 0 1 0 1.5h-.75a.75.75 0 0 1-.75-.75ZM10.5 12a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75ZM16.5 6.75v15h5.25a.75.75 0 0 0 0-1.5H21v-12a.75.75 0 0 0 0-1.5h-4.5Zm1.5 4.5a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Zm.75 2.25a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75v-.008a.75.75 0 0 0-.75-.75h-.008ZM18 17.25a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z" clip-rule="evenodd" data-astro-cid-u5m6gt6g></path> </svg> </div> <span class="error-message text-red-500 text-sm" data-astro-cid-u5m6gt6g></span> </div> </fieldset> <!-- Tipo de Calendario con botones seleccionables --> <div class="col-span-2 text-center" data-astro-cid-u5m6gt6g> <label for="tipoCalendario" class="block text-sm font-bold text-gray-700 mb-2" data-astro-cid-u5m6gt6g>Tipo de Calendario*</label> <div id="tipoCalendario" class="flex justify-center gap-4 flex-wrap" data-astro-cid-u5m6gt6g> <button type="button" class="calendar-btn py-2 px-4 rounded-full border border-gray-300" data-value="mesa-espiral" data-astro-cid-u5m6gt6g>Mesa Espiral</button> <button type="button" class="calendar-btn py-2 px-4 rounded-full border border-gray-300" data-value="mesa-triangular" data-astro-cid-u5m6gt6g>Mesa Triangular</button> <button type="button" class="calendar-btn py-2 px-4 rounded-full border border-gray-300" data-value="pared-revista" data-astro-cid-u5m6gt6g>Pared Revista</button> <button type="button" class="calendar-btn py-2 px-4 rounded-full border border-gray-300" data-value="pared-espiral" data-astro-cid-u5m6gt6g>Pared Espiral</button> </div> <input type="hidden" name="tipoCalendario" id="tipoCalendario-input" required data-astro-cid-u5m6gt6g> <span class="error-message hidden" id="tipoCalendario-error" data-astro-cid-u5m6gt6g>Selecciona un tipo de calendario.</span> </div> <!-- Tamaño dinámico con valor por defecto, todos creados en el DOM --> <div class="col-span-2 text-center" data-astro-cid-u5m6gt6g> <label for="tamaño" class="block text-sm font-bold text-gray-700 mb-2" data-astro-cid-u5m6gt6g>Tamaño*</label> <!-- Contenedor de medidas por cada tipo de calendario --> <div id="tamaño" class="size-container mesa-espiral flex justify-center gap-4 flex-wrap" data-astro-cid-u5m6gt6g> <button type="button" class="size-btn py-2 px-4 rounded-full border border-gray-300" data-astro-cid-u5m6gt6g>21x10cm</button> <button type="button" class="size-btn py-2 px-4 rounded-full border border-gray-300" data-astro-cid-u5m6gt6g>15x15cm</button> <button type="button" class="size-btn py-2 px-4 rounded-full border border-gray-300" data-astro-cid-u5m6gt6g>21x15cm</button> </div> <div class="size-container mesa-triangular flex justify-center gap-4 flex-wrap" data-astro-cid-u5m6gt6g> <button type="button" class="size-btn py-2 px-4 rounded-full border border-gray-300" data-astro-cid-u5m6gt6g>21x10cm</button> <button type="button" class="size-btn py-2 px-4 rounded-full border border-gray-300" data-astro-cid-u5m6gt6g>15x15cm</button> <button type="button" class="size-btn py-2 px-4 rounded-full border border-gray-300" data-astro-cid-u5m6gt6g>21x15cm</button> </div> <div class="size-container pared-espiral flex justify-center gap-4 flex-wrap" data-astro-cid-u5m6gt6g> <button type="button" class="size-btn py-2 px-4 rounded-full border border-gray-300" data-astro-cid-u5m6gt6g>33x23 cm cerrado</button> </div> <div class="size-container pared-revista flex justify-center gap-4 flex-wrap" data-astro-cid-u5m6gt6g> <button type="button" class="size-btn py-2 px-4 rounded-full border border-gray-300" data-astro-cid-u5m6gt6g>34x48cm</button> </div> <input type="hidden" name="tamaño" id="tamaño-input" required data-astro-cid-u5m6gt6g> <span class="error-message hidden" id="tamaño-error" data-astro-cid-u5m6gt6g>Selecciona un tamaño.</span> </div> <!-- Cantidad con selección destacada --> <div class="col-span-2 text-center" data-astro-cid-u5m6gt6g> <label for="cantidad" class="block text-sm font-bold text-gray-700 mb-2" data-astro-cid-u5m6gt6g>Cantidad *</label> <div id="cantidad" class="flex justify-center gap-2 flex-wrap" data-astro-cid-u5m6gt6g> <button type="button" class="quantity-btn py-2 px-4 rounded-full border border-gray-300" data-value="50" data-astro-cid-u5m6gt6g>50</button> <button type="button" class="quantity-btn py-2 px-4 rounded-full border border-gray-300" data-value="100" data-astro-cid-u5m6gt6g>100</button> <button type="button" class="quantity-btn py-2 px-4 rounded-full border border-gray-300" data-value="200" data-astro-cid-u5m6gt6g>200</button> <button type="button" class="quantity-btn py-2 px-4 rounded-full border border-gray-300" data-value="500" data-astro-cid-u5m6gt6g>500</button> <button type="button" class="quantity-btn py-2 px-4 rounded-full border border-gray-300" data-value="1000" data-astro-cid-u5m6gt6g>1000</button> </div> <input type="hidden" name="cantidad" id="cantidad-input" required data-astro-cid-u5m6gt6g> <span class="error-message hidden" id="cantidad-error" data-astro-cid-u5m6gt6g>Selecciona una cantidad.</span> </div> <!-- Aceptación de política de privacidad --> <div class="col-span-2" data-astro-cid-u5m6gt6g> <label class="flex items-center" data-astro-cid-u5m6gt6g> <input type="checkbox" name="politicaPrivacidad" id="politicaPrivacidad" required class="mr-2" data-astro-cid-u5m6gt6g>
Acepto la política de privacidad *
</label> <span class="error-message hidden" id="politicaPrivacidad-error" data-astro-cid-u5m6gt6g>Debes aceptar la política de privacidad.</span> </div> <!-- Botón de Envío --> <div class="col-span-2 text-center mt-4" data-astro-cid-u5m6gt6g> <!-- <button type="submit" class="py-2 px-4 bg-blue-600 text-white rounded-full">Solicita oferta hoy</button>--> <button type="submit" data-astro-cid-u5m6gt6g>Send</button> <div id="response-message" class="text-center mt-4" data-astro-cid-u5m6gt6g></div> </div> </form> </div> </section> <script type="module">

      document.addEventListener('DOMContentLoaded', () => {
        const form = document.getElementById('calendar-form');
        const tipoCalendarioInput = document.getElementById('tipoCalendario-input');
        const tamañoInput = document.getElementById('tamaño-input');
        const cantidadInput = document.getElementById('cantidad-input');
        const calendarBtns = document.querySelectorAll('.calendar-btn');
        const sizeContainers = document.querySelectorAll('.size-container');
        const quantityBtns = document.querySelectorAll('.quantity-btn');

        // Mostrar/Ocultar errores
        const showError = (elementId, message) => {
          const errorElement = document.getElementById(elementId);
          errorElement.textContent = message;
          errorElement.classList.remove('hidden');
        };

        const hideError = (elementId) => {
          const errorElement = document.getElementById(elementId);
          errorElement.classList.add('hidden');
        };

        const validateForm = () => {
          let isValid = true;
          const nombre = document.getElementById('nombre');
          const email = document.getElementById('email');
          const politicaPrivacidad = document.getElementById('politicaPrivacidad');

          // Validar nombre
          if (!nombre.value) {
            showError('nombre-error', 'Este campo es obligatorio.');
            isValid = false;
          } else hideError('nombre-error');

          // Validar email
          if (!email.value || !email.value.includes('@')) {
            showError('email-error', 'Por favor, introduce un email válido.');
            isValid = false;
          } else hideError('email-error');

          // Validar tipo de calendario
          if (!tipoCalendarioInput.value) {
            showError('tipoCalendario-error', 'Selecciona un tipo de calendario.');
            isValid = false;
          } else hideError('tipoCalendario-error');

          // Validar tamaño
          if (!tamañoInput.value) {
            showError('tamaño-error', 'Selecciona un tamaño.');
            isValid = false;
          } else hideError('tamaño-error');

          // Validar cantidad
          if (!cantidadInput.value) {
            showError('cantidad-error', 'Selecciona una cantidad.');
            isValid = false;
          } else hideError('cantidad-error');

          // Validar política de privacidad
          if (!politicaPrivacidad.checked) {
            showError('politicaPrivacidad-error', 'Debes aceptar la política de privacidad.');
            isValid = false;
          } else hideError('politicaPrivacidad-error');

          return isValid;
        };

        // Función para manejar la selección de tipo de calendario
        const handleCalendarSelection = (button) => {
          calendarBtns.forEach(btn => btn.classList.remove('selected'));
          button.classList.add('selected');
          tipoCalendarioInput.value = button.getAttribute('data-value');

          sizeContainers.forEach(container => container.classList.remove('show'));
          const selectedSizeContainer = document.querySelector(\\\`.size-container.\\\${button.getAttribute('data-value')}\\\`);
          if (selectedSizeContainer) selectedSizeContainer.classList.add('show');

          tamañoInput.value = '';
          document.querySelectorAll('.size-btn').forEach(btn => btn.classList.remove('selected'));
        };

        calendarBtns.forEach(button => button.addEventListener('click', () => handleCalendarSelection(button)));

        // Manejar la selección de tamaño
        document.querySelectorAll('.size-btn').forEach(button => {
          button.addEventListener('click', () => {
            button.parentElement.querySelectorAll('.size-btn').forEach(btn => btn.classList.remove('selected'));
            button.classList.add('selected');
            tamañoInput.value = button.textContent.trim();
          });
        });

        // Manejar la selección de cantidad
        quantityBtns.forEach(button => {
          button.addEventListener('click', () => {
            quantityBtns.forEach(btn => btn.classList.remove('selected'));
            button.classList.add('selected');
            cantidadInput.value = button.getAttribute('data-value');
          });
        });

      });
    </script> </body>`])), renderHead());
}, "C:/Users/Jordi/Documents/web/calendaris/src/components/widgets/DynamicForm.astro", void 0);

export { $$DynamicForm as $ };
