class i extends HTMLElement {
  connectedCallback() {
    this.videoId = this.getAttribute('videoid');
    let e = this.querySelector('.lty-playbtn');
    if (
      ((this.playLabel = (e && e.textContent.trim()) || this.getAttribute('playlabel') || 'Play'),
      (this.dataset.title = this.getAttribute('title') || ''),
      this.style.backgroundImage ||
        ((this.style.backgroundImage = `url("https://i.ytimg.com/vi/${this.videoId}/hqdefault.jpg")`),
        this.upgradePosterImage()),
      e ||
        ((e = document.createElement('button')), (e.type = 'button'), e.classList.add('lty-playbtn'), this.append(e)),
      !e.textContent)
    ) {
      const t = document.createElement('span');
      (t.className = 'lyt-visually-hidden'), (t.textContent = this.playLabel), e.append(t);
    }
    this.addNoscriptIframe(),
      e.nodeName === 'A' &&
        (e.removeAttribute('href'),
        e.setAttribute('tabindex', '0'),
        e.setAttribute('role', 'button'),
        e.addEventListener('keydown', (t) => {
          (t.key === 'Enter' || t.key === ' ') && (t.preventDefault(), this.activate());
        })),
      this.addEventListener('pointerover', i.warmConnections, { once: !0 }),
      this.addEventListener('focusin', i.warmConnections, { once: !0 }),
      this.addEventListener('click', this.activate),
      (this.needsYTApi =
        this.hasAttribute('js-api') || navigator.vendor.includes('Apple') || navigator.userAgent.includes('Mobi'));
  }
  static addPrefetch(e, t, a) {
    const r = document.createElement('link');
    (r.rel = e), (r.href = t), a && (r.as = a), document.head.append(r);
  }
  static warmConnections() {
    i.preconnected ||
      (i.addPrefetch('preconnect', 'https://www.youtube-nocookie.com'),
      i.addPrefetch('preconnect', 'https://www.google.com'),
      i.addPrefetch('preconnect', 'https://googleads.g.doubleclick.net'),
      i.addPrefetch('preconnect', 'https://static.doubleclick.net'),
      (i.preconnected = !0));
  }
  fetchYTPlayerApi() {
    window.YT ||
      (window.YT && window.YT.Player) ||
      (this.ytApiPromise = new Promise((e, t) => {
        var a = document.createElement('script');
        (a.src = 'https://www.youtube.com/iframe_api'),
          (a.async = !0),
          (a.onload = (r) => {
            YT.ready(e);
          }),
          (a.onerror = t),
          this.append(a);
      }));
  }
  async getYTPlayer() {
    return this.playerPromise || (await this.activate()), this.playerPromise;
  }
  async addYTPlayerIframe() {
    this.fetchYTPlayerApi(), await this.ytApiPromise;
    const e = document.createElement('div');
    this.append(e);
    const t = Object.fromEntries(this.getParams().entries());
    this.playerPromise = new Promise((a) => {
      let r = new YT.Player(e, {
        width: '100%',
        videoId: this.videoId,
        playerVars: t,
        events: {
          onReady: (n) => {
            n.target.playVideo(), a(r);
          },
        },
      });
    });
  }
  addNoscriptIframe() {
    const e = this.createBasicIframe(),
      t = document.createElement('noscript');
    (t.innerHTML = e.outerHTML), this.append(t);
  }
  getParams() {
    const e = new URLSearchParams(this.getAttribute('params') || []);
    return e.append('autoplay', '1'), e.append('playsinline', '1'), e;
  }
  async activate() {
    if (this.classList.contains('lyt-activated')) return;
    if ((this.classList.add('lyt-activated'), this.needsYTApi)) return this.addYTPlayerIframe(this.getParams());
    const e = this.createBasicIframe();
    this.append(e), e.focus();
  }
  createBasicIframe() {
    const e = document.createElement('iframe');
    return (
      (e.width = 560),
      (e.height = 315),
      (e.title = this.playLabel),
      (e.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'),
      (e.allowFullscreen = !0),
      (e.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(this.videoId)}?${this.getParams().toString()}`),
      e
    );
  }
  upgradePosterImage() {
    setTimeout(() => {
      const e = `https://i.ytimg.com/vi_webp/${this.videoId}/sddefault.webp`,
        t = new Image();
      (t.fetchPriority = 'low'),
        (t.referrerpolicy = 'origin'),
        (t.src = e),
        (t.onload = (a) => {
          (a.target.naturalHeight == 90 && a.target.naturalWidth == 120) ||
            (this.style.backgroundImage = `url("${e}")`);
        });
    }, 100);
  }
}
customElements.define('lite-youtube', i);
