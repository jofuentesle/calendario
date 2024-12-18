class t extends HTMLElement {
  constructor() {
    super(...arguments), (this.videoId = encodeURIComponent(this.dataset.id));
  }
  static {
    this.preconnected = !1;
  }
  connectedCallback() {
    this.addEventListener('pointerover', t.warmConnections, { once: !0 }),
      this.addEventListener('click', (e) => this.addIframe(e));
    const c = this.querySelector('a');
    if (c) {
      const e = document.createElement('button');
      e.classList.add(...c.classList.values()),
        e.setAttribute('aria-label', c.getAttribute('aria-label')),
        c.replaceWith(e);
    }
  }
  static addPrefetch(c, e) {
    const a = document.createElement('link');
    (a.rel = c), (a.href = e), document.head.append(a);
  }
  static warmConnections() {
    t.preconnected ||
      (t.addPrefetch('preconnect', 'https://player.vimeo.com'),
      t.addPrefetch('preconnect', 'https://i.vimeocdn.com'),
      t.addPrefetch('preconnect', 'https://f.vimeocdn.com'),
      t.addPrefetch('preconnect', 'https://fresnel.vimeocdn.com'),
      (t.preconnected = !0));
  }
  addIframe(c) {
    if (this.classList.contains('ltv-activated')) return;
    c.preventDefault(), this.classList.add('ltv-activated');
    const e = encodeURIComponent(this.dataset.t || '0m'),
      a = new URLSearchParams(this.dataset.params || []),
      n = document.createElement('iframe');
    (n.width = '640'),
      (n.height = '360'),
      (n.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'),
      (n.allowFullscreen = !0),
      (n.src = `https://player.vimeo.com/video/${this.videoId}?${a.toString()}#t=${e}`),
      this.append(n);
  }
}
customElements.get('lite-vimeo') || customElements.define('lite-vimeo', t);
