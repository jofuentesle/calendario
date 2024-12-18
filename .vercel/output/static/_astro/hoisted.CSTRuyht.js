import './hoisted.2daoxv0f.js';
document.addEventListener('DOMContentLoaded', function () {
  const o = document.querySelectorAll('.size-btn'),
    s = document.getElementById('tamaño-input'),
    a = document.querySelectorAll('.quantity-btn'),
    r = document.getElementById('cantidad-input'),
    n = document.getElementById('calendar-form'),
    c = document.getElementById('response-message');
  o.forEach((e) => {
    e.addEventListener('click', function () {
      o.forEach((t) => t.classList.remove('selected')),
        e.classList.add('selected'),
        (s.value = e.getAttribute('data-value'));
    });
  }),
    a.forEach((e) => {
      e.addEventListener('click', function () {
        a.forEach((t) => t.classList.remove('selected')),
          e.classList.add('selected'),
          (r.value = e.getAttribute('data-value'));
      });
    }),
    n.addEventListener('submit', async (e) => {
      e.preventDefault();
      try {
        const t = new FormData(n);
        (await fetch(n.action, { method: 'POST', body: t })).ok
          ? (c.classList.remove('hidden'),
            setTimeout(() => {
              window.location.href = '/';
            }, 3e3))
          : alert('Hubo un error al enviar el formulario.');
      } catch (t) {
        console.error('Error al enviar el formulario:', t);
      }
    });
});
