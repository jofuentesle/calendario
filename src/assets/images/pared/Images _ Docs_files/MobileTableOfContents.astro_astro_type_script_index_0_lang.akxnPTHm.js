import { S as r } from './TableOfContents.astro_astro_type_script_index_0_lang.DCp6qTdA.js';
class c extends r {
  set current(e) {
    super.current = e;
    const t = this.querySelector('.display-current');
    t && (t.textContent = e.textContent);
  }
  constructor() {
    super();
    const e = this.querySelector('details');
    if (!e) return;
    const t = () => {
      e.open = !1;
    };
    e.querySelectorAll('a:not([class*=tab-link])').forEach((s) => {
      s.addEventListener('click', t);
    }),
      window.addEventListener('click', (s) => {
        e.contains(s.target) || t();
      }),
      window.addEventListener('keydown', (s) => {
        if (s.key === 'Escape' && e.open) {
          const o = e.contains(document.activeElement);
          if ((t(), o)) {
            const n = e.querySelector('summary');
            n && n.focus();
          }
        }
      });
  }
}
customElements.define('mobile-starlight-toc', c);
