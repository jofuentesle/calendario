const g = '_top';
class f extends HTMLElement {
  constructor() {
    super(),
      (this._current = this.querySelector('a[aria-current="true"]')),
      (this.minH = parseInt(this.dataset.minH || '2', 10)),
      (this.maxH = parseInt(this.dataset.maxH || '3', 10)),
      (this.onIdle = (e) => (window.requestIdleCallback || ((s) => setTimeout(s, 1)))(e)),
      (this.init = () => {
        const e = [...this.querySelectorAll('a')],
          s = (t) => {
            if (t instanceof HTMLHeadingElement) {
              if (t.id === g) return !0;
              const r = t.tagName[1];
              if (r) {
                const n = parseInt(r, 10);
                if (n >= this.minH && n <= this.maxH) return !0;
              }
            }
            return !1;
          },
          i = (t) => {
            if (!t) return null;
            const r = t;
            for (; t; ) {
              if (s(t)) return t;
              for (t = t.previousElementSibling; t?.lastElementChild; ) t = t.lastElementChild;
              const n = i(t);
              if (n) return n;
            }
            return i(r.parentElement);
          },
          c = (t) => {
            for (const { isIntersecting: r, target: n } of t) {
              if (!r) continue;
              const l = i(n);
              if (!l) continue;
              const m = e.find((d) => d.hash === '#' + encodeURIComponent(l.id));
              if (m) {
                this.current = m;
                break;
              }
            }
          },
          a = document.querySelectorAll('main [id], main [id] ~ *, main .content > *');
        let o;
        const u = () => {
          o ||
            ((o = new IntersectionObserver(c, { rootMargin: this.getRootMargin() })), a.forEach((t) => o.observe(t)));
        };
        u();
        let h;
        window.addEventListener('resize', () => {
          o && o.disconnect(), clearTimeout(h), (h = setTimeout(() => this.onIdle(u), 200));
        });
      }),
      this.onIdle(() => this.init());
  }
  set current(e) {
    e !== this._current &&
      (this._current && this._current.removeAttribute('aria-current'),
      e.setAttribute('aria-current', 'true'),
      (this._current = e));
  }
  getRootMargin() {
    const e = document.querySelector('header')?.getBoundingClientRect().height || 0,
      s = this.querySelector('summary')?.getBoundingClientRect().height || 0,
      i = e + s + 32,
      c = i + 53,
      a = document.documentElement.clientHeight;
    return `-${i}px 0% ${c - a}px`;
  }
}
customElements.define('starlight-toc', f);
export { f as S };
