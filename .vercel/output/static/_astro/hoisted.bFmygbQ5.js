import { g as G, i as H, e as U, n as L, a as O, S as F, N as Z } from './navigation.CYXULzQ6.js';
import './hoisted.2daoxv0f.js';
const q = 'modulepreload',
  K = function (e) {
    return '/' + e;
  },
  $ = {},
  X = function (e, t, i) {
    let s = Promise.resolve();
    if (t && t.length > 0) {
      document.getElementsByTagName('link');
      const e = document.querySelector('meta[property=csp-nonce]'),
        i = e?.nonce || e?.getAttribute('nonce');
      s = Promise.allSettled(
        t.map((e) => {
          if ((e = K(e)) in $) return;
          $[e] = !0;
          const t = e.endsWith('.css'),
            s = t ? '[rel="stylesheet"]' : '';
          if (document.querySelector(`link[href="${e}"]${s}`)) return;
          const n = document.createElement('link');
          return (
            (n.rel = t ? 'stylesheet' : q),
            t || (n.as = 'script'),
            (n.crossOrigin = ''),
            (n.href = e),
            i && n.setAttribute('nonce', i),
            document.head.appendChild(n),
            t
              ? new Promise((t, i) => {
                  n.addEventListener('load', t),
                    n.addEventListener('error', () => i(new Error(`Unable to preload CSS for ${e}`)));
                })
              : void 0
          );
        })
      );
    }
    function n(e) {
      const t = new Event('vite:preloadError', { cancelable: !0 });
      if (((t.payload = e), window.dispatchEvent(t), !t.defaultPrevented)) throw e;
    }
    return s.then((t) => {
      for (const e of t || []) 'rejected' === e.status && n(e.reason);
      return e().catch(n);
    });
  };
function Y(e) {
  let { swiper: t, extendParams: i, on: s } = e;
  i({
    thumbs: {
      swiper: null,
      multipleActiveThumbs: !0,
      autoScrollOffset: 0,
      slideThumbActiveClass: 'swiper-slide-thumb-active',
      thumbsContainerClass: 'swiper-thumbs',
    },
  });
  let n = !1,
    o = !1;
  function a() {
    const e = t.thumbs.swiper;
    if (!e || e.destroyed) return;
    const i = e.clickedIndex,
      s = e.clickedSlide;
    if ((s && s.classList.contains(t.params.thumbs.slideThumbActiveClass)) || typeof i > 'u' || null === i) return;
    let n;
    (n = e.params.loop ? parseInt(e.clickedSlide.getAttribute('data-swiper-slide-index'), 10) : i),
      t.params.loop ? t.slideToLoop(n) : t.slideTo(n);
  }
  function r() {
    const { thumbs: e } = t.params;
    if (n) return !1;
    n = !0;
    const i = t.constructor;
    if (e.swiper instanceof i)
      (t.thumbs.swiper = e.swiper),
        Object.assign(t.thumbs.swiper.originalParams, { watchSlidesProgress: !0, slideToClickedSlide: !1 }),
        Object.assign(t.thumbs.swiper.params, { watchSlidesProgress: !0, slideToClickedSlide: !1 }),
        t.thumbs.swiper.update();
    else if (H(e.swiper)) {
      const s = Object.assign({}, e.swiper);
      Object.assign(s, { watchSlidesProgress: !0, slideToClickedSlide: !1 }), (t.thumbs.swiper = new i(s)), (o = !0);
    }
    return t.thumbs.swiper.el.classList.add(t.params.thumbs.thumbsContainerClass), t.thumbs.swiper.on('tap', a), !0;
  }
  function l(e) {
    const i = t.thumbs.swiper;
    if (!i || i.destroyed) return;
    const s = 'auto' === i.params.slidesPerView ? i.slidesPerViewDynamic() : i.params.slidesPerView;
    let n = 1;
    const o = t.params.thumbs.slideThumbActiveClass;
    if (
      (t.params.slidesPerView > 1 && !t.params.centeredSlides && (n = t.params.slidesPerView),
      t.params.thumbs.multipleActiveThumbs || (n = 1),
      (n = Math.floor(n)),
      i.slides.forEach((e) => e.classList.remove(o)),
      i.params.loop || (i.params.virtual && i.params.virtual.enabled))
    )
      for (let e = 0; e < n; e += 1)
        U(i.slidesEl, `[data-swiper-slide-index="${t.realIndex + e}"]`).forEach((e) => {
          e.classList.add(o);
        });
    else for (let e = 0; e < n; e += 1) i.slides[t.realIndex + e] && i.slides[t.realIndex + e].classList.add(o);
    const a = t.params.thumbs.autoScrollOffset,
      r = a && !i.params.loop;
    if (t.realIndex !== i.realIndex || r) {
      const n = i.activeIndex;
      let o, l;
      if (i.params.loop) {
        const e = i.slides.filter((e) => e.getAttribute('data-swiper-slide-index') === `${t.realIndex}`)[0];
        (o = i.slides.indexOf(e)), (l = t.activeIndex > t.previousIndex ? 'next' : 'prev');
      } else (o = t.realIndex), (l = o > t.previousIndex ? 'next' : 'prev');
      r && (o += 'next' === l ? a : -1 * a),
        i.visibleSlidesIndexes &&
          i.visibleSlidesIndexes.indexOf(o) < 0 &&
          (i.params.centeredSlides
            ? (o = o > n ? o - Math.floor(s / 2) + 1 : o + Math.floor(s / 2) - 1)
            : o > n && i.params.slidesPerGroup,
          i.slideTo(o, e ? 0 : void 0));
    }
  }
  (t.thumbs = { swiper: null }),
    s('beforeInit', () => {
      const { thumbs: e } = t.params;
      if (e && e.swiper)
        if ('string' == typeof e.swiper || e.swiper instanceof HTMLElement) {
          const i = G(),
            s = () => {
              const s = 'string' == typeof e.swiper ? i.querySelector(e.swiper) : e.swiper;
              if (s && s.swiper) (e.swiper = s.swiper), r(), l(!0);
              else if (s) {
                const i = `${t.params.eventsPrefix}init`,
                  n = (o) => {
                    (e.swiper = o.detail[0]), s.removeEventListener(i, n), r(), l(!0), e.swiper.update(), t.update();
                  };
                s.addEventListener(i, n);
              }
              return s;
            },
            n = () => {
              t.destroyed || s() || requestAnimationFrame(n);
            };
          requestAnimationFrame(n);
        } else r(), l(!0);
    }),
    s('slideChange update resize observerUpdate', () => {
      l();
    }),
    s('setTransition', (e, i) => {
      const s = t.thumbs.swiper;
      !s || s.destroyed || s.setTransition(i);
    }),
    s('beforeDestroy', () => {
      const e = t.thumbs.swiper;
      !e || e.destroyed || (o && e.destroy());
    }),
    Object.assign(t.thumbs, { init: r, update: l });
}
function J(e) {
  let { swiper: t, extendParams: i, emit: s, once: n } = e;
  i({
    freeMode: {
      enabled: !1,
      momentum: !0,
      momentumRatio: 1,
      momentumBounce: !0,
      momentumBounceRatio: 1,
      momentumVelocityRatio: 1,
      sticky: !1,
      minimumVelocity: 0.02,
    },
  }),
    Object.assign(t, {
      freeMode: {
        onTouchStart: function () {
          if (t.params.cssMode) return;
          const e = t.getTranslate();
          t.setTranslate(e),
            t.setTransition(0),
            (t.touchEventsData.velocities.length = 0),
            t.freeMode.onTouchEnd({ currentPos: t.rtl ? t.translate : -t.translate });
        },
        onTouchMove: function () {
          if (t.params.cssMode) return;
          const { touchEventsData: e, touches: i } = t;
          0 === e.velocities.length &&
            e.velocities.push({ position: i[t.isHorizontal() ? 'startX' : 'startY'], time: e.touchStartTime }),
            e.velocities.push({ position: i[t.isHorizontal() ? 'currentX' : 'currentY'], time: L() });
        },
        onTouchEnd: function (e) {
          let { currentPos: i } = e;
          if (t.params.cssMode) return;
          const { params: o, wrapperEl: a, rtlTranslate: r, snapGrid: l, touchEventsData: d } = t,
            h = L() - d.touchStartTime;
          if (i < -t.minTranslate()) t.slideTo(t.activeIndex);
          else if (i > -t.maxTranslate())
            t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1);
          else {
            if (o.freeMode.momentum) {
              if (d.velocities.length > 1) {
                const e = d.velocities.pop(),
                  i = d.velocities.pop(),
                  s = e.position - i.position,
                  n = e.time - i.time;
                (t.velocity = s / n),
                  (t.velocity /= 2),
                  Math.abs(t.velocity) < o.freeMode.minimumVelocity && (t.velocity = 0),
                  (n > 150 || L() - e.time > 300) && (t.velocity = 0);
              } else t.velocity = 0;
              (t.velocity *= o.freeMode.momentumVelocityRatio), (d.velocities.length = 0);
              let e = 1e3 * o.freeMode.momentumRatio;
              const i = t.velocity * e;
              let h = t.translate + i;
              r && (h = -h);
              let c,
                p = !1;
              const m = 20 * Math.abs(t.velocity) * o.freeMode.momentumBounceRatio;
              let u;
              if (h < t.maxTranslate())
                o.freeMode.momentumBounce
                  ? (h + t.maxTranslate() < -m && (h = t.maxTranslate() - m),
                    (c = t.maxTranslate()),
                    (p = !0),
                    (d.allowMomentumBounce = !0))
                  : (h = t.maxTranslate()),
                  o.loop && o.centeredSlides && (u = !0);
              else if (h > t.minTranslate())
                o.freeMode.momentumBounce
                  ? (h - t.minTranslate() > m && (h = t.minTranslate() + m),
                    (c = t.minTranslate()),
                    (p = !0),
                    (d.allowMomentumBounce = !0))
                  : (h = t.minTranslate()),
                  o.loop && o.centeredSlides && (u = !0);
              else if (o.freeMode.sticky) {
                let e;
                for (let t = 0; t < l.length; t += 1)
                  if (l[t] > -h) {
                    e = t;
                    break;
                  }
                (h = Math.abs(l[e] - h) < Math.abs(l[e - 1] - h) || 'next' === t.swipeDirection ? l[e] : l[e - 1]),
                  (h = -h);
              }
              if (
                (u &&
                  n('transitionEnd', () => {
                    t.loopFix();
                  }),
                0 !== t.velocity)
              ) {
                if (
                  ((e = r ? Math.abs((-h - t.translate) / t.velocity) : Math.abs((h - t.translate) / t.velocity)),
                  o.freeMode.sticky)
                ) {
                  const i = Math.abs((r ? -h : h) - t.translate),
                    s = t.slidesSizesGrid[t.activeIndex];
                  e = i < s ? o.speed : i < 2 * s ? 1.5 * o.speed : 2.5 * o.speed;
                }
              } else if (o.freeMode.sticky) return void t.slideToClosest();
              o.freeMode.momentumBounce && p
                ? (t.updateProgress(c),
                  t.setTransition(e),
                  t.setTranslate(h),
                  t.transitionStart(!0, t.swipeDirection),
                  (t.animating = !0),
                  O(a, () => {
                    !t ||
                      t.destroyed ||
                      !d.allowMomentumBounce ||
                      (s('momentumBounce'),
                      t.setTransition(o.speed),
                      setTimeout(() => {
                        t.setTranslate(c),
                          O(a, () => {
                            !t || t.destroyed || t.transitionEnd();
                          });
                      }, 0));
                  }))
                : t.velocity
                  ? (s('_freeModeNoMomentumRelease'),
                    t.updateProgress(h),
                    t.setTransition(e),
                    t.setTranslate(h),
                    t.transitionStart(!0, t.swipeDirection),
                    t.animating ||
                      ((t.animating = !0),
                      O(a, () => {
                        !t || t.destroyed || t.transitionEnd();
                      })))
                  : t.updateProgress(h),
                t.updateActiveIndex(),
                t.updateSlidesClasses();
            } else {
              if (o.freeMode.sticky) return void t.slideToClosest();
              o.freeMode && s('_freeModeNoMomentumRelease');
            }
            (!o.freeMode.momentum || h >= o.longSwipesMs) &&
              (s('_freeModeStaticRelease'), t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses());
          }
        },
      },
    });
}
function I(e, t, i) {
  const s = document.createElement(t);
  return e && (s.className = e), i && i.appendChild(s), s;
}
function Q(e, t, i) {
  let s = `translate3d(${e}px,0px,0)`;
  return void 0 !== i && (s += ` scale3d(${i},${i},1)`), s;
}
function z(e, t, i) {
  (e.style.width = 'number' == typeof t ? `${t}px` : t), (e.style.height = 'number' == typeof i ? `${i}px` : i);
}
const g = { IDLE: 'idle', LOADING: 'loading', LOADED: 'loaded', ERROR: 'error' };
function ee(e) {
  return ('button' in e && 1 === e.button) || e.ctrlKey || e.metaKey || e.altKey || e.shiftKey;
}
function P(e, t, i = document) {
  let s = [];
  if (e instanceof Element) s = [e];
  else if (e instanceof NodeList || Array.isArray(e)) s = Array.from(e);
  else {
    const n = 'string' == typeof e ? e : t;
    n && (s = Array.from(i.querySelectorAll(n)));
  }
  return s;
}
function te(e) {
  return 'function' == typeof e && e.prototype && e.prototype.goTo;
}
function N() {
  return !(!navigator.vendor || !navigator.vendor.match(/apple/i));
}
class ie {
  constructor(e, t) {
    (this.type = e), (this.defaultPrevented = !1), t && Object.assign(this, t);
  }
  preventDefault() {
    this.defaultPrevented = !0;
  }
}
class se {
  constructor() {
    (this._listeners = {}), (this._filters = {}), (this.pswp = void 0), (this.options = void 0);
  }
  addFilter(e, t, i = 100) {
    var s, n, o;
    this._filters[e] || (this._filters[e] = []),
      null === (s = this._filters[e]) || void 0 === s || s.push({ fn: t, priority: i }),
      null === (n = this._filters[e]) || void 0 === n || n.sort((e, t) => e.priority - t.priority),
      null === (o = this.pswp) || void 0 === o || o.addFilter(e, t, i);
  }
  removeFilter(e, t) {
    this._filters[e] && (this._filters[e] = this._filters[e].filter((e) => e.fn !== t)),
      this.pswp && this.pswp.removeFilter(e, t);
  }
  applyFilters(e, ...t) {
    var i;
    return (
      null === (i = this._filters[e]) ||
        void 0 === i ||
        i.forEach((e) => {
          t[0] = e.fn.apply(this, t);
        }),
      t[0]
    );
  }
  on(e, t) {
    var i, s;
    this._listeners[e] || (this._listeners[e] = []),
      null === (i = this._listeners[e]) || void 0 === i || i.push(t),
      null === (s = this.pswp) || void 0 === s || s.on(e, t);
  }
  off(e, t) {
    var i;
    this._listeners[e] && (this._listeners[e] = this._listeners[e].filter((e) => t !== e)),
      null === (i = this.pswp) || void 0 === i || i.off(e, t);
  }
  dispatch(e, t) {
    var i;
    if (this.pswp) return this.pswp.dispatch(e, t);
    const s = new ie(e, t);
    return (
      null === (i = this._listeners[e]) ||
        void 0 === i ||
        i.forEach((e) => {
          e.call(this, s);
        }),
      s
    );
  }
}
class ne {
  constructor(e, t) {
    if (((this.element = I('pswp__img pswp__img--placeholder', e ? 'img' : 'div', t)), e)) {
      const t = this.element;
      (t.decoding = 'async'), (t.alt = ''), (t.src = e), t.setAttribute('role', 'presentation');
    }
    this.element.setAttribute('aria-hidden', 'true');
  }
  setDisplayedSize(e, t) {
    this.element &&
      ('IMG' === this.element.tagName
        ? (z(this.element, 250, 'auto'),
          (this.element.style.transformOrigin = '0 0'),
          (this.element.style.transform = Q(0, 0, e / 250)))
        : z(this.element, e, t));
  }
  destroy() {
    var e;
    null !== (e = this.element) && void 0 !== e && e.parentNode && this.element.remove(), (this.element = null);
  }
}
class re {
  constructor(e, t, i) {
    (this.instance = t),
      (this.data = e),
      (this.index = i),
      (this.element = void 0),
      (this.placeholder = void 0),
      (this.slide = void 0),
      (this.displayedImageWidth = 0),
      (this.displayedImageHeight = 0),
      (this.width = Number(this.data.w) || Number(this.data.width) || 0),
      (this.height = Number(this.data.h) || Number(this.data.height) || 0),
      (this.isAttached = !1),
      (this.hasSlide = !1),
      (this.isDecoding = !1),
      (this.state = g.IDLE),
      this.data.type ? (this.type = this.data.type) : this.data.src ? (this.type = 'image') : (this.type = 'html'),
      this.instance.dispatch('contentInit', { content: this });
  }
  removePlaceholder() {
    this.placeholder &&
      !this.keepPlaceholder() &&
      setTimeout(() => {
        this.placeholder && (this.placeholder.destroy(), (this.placeholder = void 0));
      }, 1e3);
  }
  load(e, t) {
    if (this.slide && this.usePlaceholder())
      if (this.placeholder) {
        const e = this.placeholder.element;
        e && !e.parentElement && this.slide.container.prepend(e);
      } else {
        const e = this.instance.applyFilters(
          'placeholderSrc',
          !(!this.data.msrc || !this.slide.isFirstSlide) && this.data.msrc,
          this
        );
        this.placeholder = new ne(e, this.slide.container);
      }
    (this.element && !t) ||
      this.instance.dispatch('contentLoad', { content: this, isLazy: e }).defaultPrevented ||
      (this.isImageContent()
        ? ((this.element = I('pswp__img', 'img')), this.displayedImageWidth && this.loadImage(e))
        : ((this.element = I('pswp__content', 'div')), (this.element.innerHTML = this.data.html || '')),
      t && this.slide && this.slide.updateContentSize(!0));
  }
  loadImage(e) {
    var t, i;
    if (
      !this.isImageContent() ||
      !this.element ||
      this.instance.dispatch('contentLoadImage', { content: this, isLazy: e }).defaultPrevented
    )
      return;
    const s = this.element;
    this.updateSrcsetSizes(),
      this.data.srcset && (s.srcset = this.data.srcset),
      (s.src = null !== (t = this.data.src) && void 0 !== t ? t : ''),
      (s.alt = null !== (i = this.data.alt) && void 0 !== i ? i : ''),
      (this.state = g.LOADING),
      s.complete
        ? this.onLoaded()
        : ((s.onload = () => {
            this.onLoaded();
          }),
          (s.onerror = () => {
            this.onError();
          }));
  }
  setSlide(e) {
    (this.slide = e), (this.hasSlide = !0), (this.instance = e.pswp);
  }
  onLoaded() {
    (this.state = g.LOADED),
      this.slide &&
        this.element &&
        (this.instance.dispatch('loadComplete', { slide: this.slide, content: this }),
        this.slide.isActive &&
          this.slide.heavyAppended &&
          !this.element.parentNode &&
          (this.append(), this.slide.updateContentSize(!0)),
        (this.state === g.LOADED || this.state === g.ERROR) && this.removePlaceholder());
  }
  onError() {
    (this.state = g.ERROR),
      this.slide &&
        (this.displayError(),
        this.instance.dispatch('loadComplete', { slide: this.slide, isError: !0, content: this }),
        this.instance.dispatch('loadError', { slide: this.slide, content: this }));
  }
  isLoading() {
    return this.instance.applyFilters('isContentLoading', this.state === g.LOADING, this);
  }
  isError() {
    return this.state === g.ERROR;
  }
  isImageContent() {
    return 'image' === this.type;
  }
  setDisplayedSize(e, t) {
    if (
      this.element &&
      (this.placeholder && this.placeholder.setDisplayedSize(e, t),
      !this.instance.dispatch('contentResize', { content: this, width: e, height: t }).defaultPrevented &&
        (z(this.element, e, t), this.isImageContent() && !this.isError()))
    ) {
      const i = !this.displayedImageWidth && e;
      (this.displayedImageWidth = e),
        (this.displayedImageHeight = t),
        i ? this.loadImage(!1) : this.updateSrcsetSizes(),
        this.slide &&
          this.instance.dispatch('imageSizeChange', { slide: this.slide, width: e, height: t, content: this });
    }
  }
  isZoomable() {
    return this.instance.applyFilters('isContentZoomable', this.isImageContent() && this.state !== g.ERROR, this);
  }
  updateSrcsetSizes() {
    if (!this.isImageContent() || !this.element || !this.data.srcset) return;
    const e = this.element,
      t = this.instance.applyFilters('srcsetSizesWidth', this.displayedImageWidth, this);
    (!e.dataset.largestUsedSize || t > parseInt(e.dataset.largestUsedSize, 10)) &&
      ((e.sizes = t + 'px'), (e.dataset.largestUsedSize = String(t)));
  }
  usePlaceholder() {
    return this.instance.applyFilters('useContentPlaceholder', this.isImageContent(), this);
  }
  lazyLoad() {
    this.instance.dispatch('contentLazyLoad', { content: this }).defaultPrevented || this.load(!0);
  }
  keepPlaceholder() {
    return this.instance.applyFilters('isKeepingPlaceholder', this.isLoading(), this);
  }
  destroy() {
    (this.hasSlide = !1),
      (this.slide = void 0),
      !this.instance.dispatch('contentDestroy', { content: this }).defaultPrevented &&
        (this.remove(),
        this.placeholder && (this.placeholder.destroy(), (this.placeholder = void 0)),
        this.isImageContent() &&
          this.element &&
          ((this.element.onload = null), (this.element.onerror = null), (this.element = void 0)));
  }
  displayError() {
    if (this.slide) {
      var e, t;
      let i = I('pswp__error-msg', 'div');
      (i.innerText =
        null !== (e = null === (t = this.instance.options) || void 0 === t ? void 0 : t.errorMsg) && void 0 !== e
          ? e
          : ''),
        (i = this.instance.applyFilters('contentErrorElement', i, this)),
        (this.element = I('pswp__content pswp__error-msg-container', 'div')),
        this.element.appendChild(i),
        (this.slide.container.innerText = ''),
        this.slide.container.appendChild(this.element),
        this.slide.updateContentSize(!0),
        this.removePlaceholder();
    }
  }
  append() {
    if (this.isAttached || !this.element) return;
    if (((this.isAttached = !0), this.state === g.ERROR)) return void this.displayError();
    if (this.instance.dispatch('contentAppend', { content: this }).defaultPrevented) return;
    const e = 'decode' in this.element;
    this.isImageContent()
      ? e && this.slide && (!this.slide.isActive || N())
        ? ((this.isDecoding = !0),
          this.element
            .decode()
            .catch(() => {})
            .finally(() => {
              (this.isDecoding = !1), this.appendImage();
            }))
        : this.appendImage()
      : this.slide && !this.element.parentNode && this.slide.container.appendChild(this.element);
  }
  activate() {
    this.instance.dispatch('contentActivate', { content: this }).defaultPrevented ||
      !this.slide ||
      (this.isImageContent() && this.isDecoding && !N() ? this.appendImage() : this.isError() && this.load(!1, !0),
      this.slide.holderElement && this.slide.holderElement.setAttribute('aria-hidden', 'false'));
  }
  deactivate() {
    this.instance.dispatch('contentDeactivate', { content: this }),
      this.slide && this.slide.holderElement && this.slide.holderElement.setAttribute('aria-hidden', 'true');
  }
  remove() {
    (this.isAttached = !1),
      !this.instance.dispatch('contentRemove', { content: this }).defaultPrevented &&
        (this.element && this.element.parentNode && this.element.remove(),
        this.placeholder && this.placeholder.element && this.placeholder.element.remove());
  }
  appendImage() {
    this.isAttached &&
      (this.instance.dispatch('contentAppendImage', { content: this }).defaultPrevented ||
        (this.slide && this.element && !this.element.parentNode && this.slide.container.appendChild(this.element),
        (this.state === g.LOADED || this.state === g.ERROR) && this.removePlaceholder()));
  }
}
function le(e, t) {
  if (e.getViewportSizeFn) {
    const i = e.getViewportSizeFn(e, t);
    if (i) return i;
  }
  return { x: document.documentElement.clientWidth, y: window.innerHeight };
}
function C(e, t, i, s, n) {
  let o = 0;
  if (t.paddingFn) o = t.paddingFn(i, s, n)[e];
  else if (t.padding) o = t.padding[e];
  else {
    const i = 'padding' + e[0].toUpperCase() + e.slice(1);
    t[i] && (o = t[i]);
  }
  return Number(o) || 0;
}
function oe(e, t, i, s) {
  return {
    x: t.x - C('left', e, t, i, s) - C('right', e, t, i, s),
    y: t.y - C('top', e, t, i, s) - C('bottom', e, t, i, s),
  };
}
const V = 4e3;
class ae {
  constructor(e, t, i, s) {
    (this.pswp = s),
      (this.options = e),
      (this.itemData = t),
      (this.index = i),
      (this.panAreaSize = null),
      (this.elementSize = null),
      (this.fit = 1),
      (this.fill = 1),
      (this.vFill = 1),
      (this.initial = 1),
      (this.secondary = 1),
      (this.max = 1),
      (this.min = 1);
  }
  update(e, t, i) {
    const s = { x: e, y: t };
    (this.elementSize = s), (this.panAreaSize = i);
    const n = i.x / s.x,
      o = i.y / s.y;
    (this.fit = Math.min(1, n < o ? n : o)),
      (this.fill = Math.min(1, n > o ? n : o)),
      (this.vFill = Math.min(1, o)),
      (this.initial = this._getInitial()),
      (this.secondary = this._getSecondary()),
      (this.max = Math.max(this.initial, this.secondary, this._getMax())),
      (this.min = Math.min(this.fit, this.initial, this.secondary)),
      this.pswp && this.pswp.dispatch('zoomLevelsUpdate', { zoomLevels: this, slideData: this.itemData });
  }
  _parseZoomLevelOption(e) {
    const t = e + 'ZoomLevel',
      i = this.options[t];
    if (i) return 'function' == typeof i ? i(this) : 'fill' === i ? this.fill : 'fit' === i ? this.fit : Number(i);
  }
  _getSecondary() {
    let e = this._parseZoomLevelOption('secondary');
    return (
      e ||
      ((e = Math.min(1, 3 * this.fit)),
      this.elementSize && e * this.elementSize.x > V && (e = V / this.elementSize.x),
      e)
    );
  }
  _getInitial() {
    return this._parseZoomLevelOption('initial') || this.fit;
  }
  _getMax() {
    return this._parseZoomLevelOption('max') || Math.max(1, 4 * this.fit);
  }
}
function B(e, t, i) {
  const s = t.createContentFromData(e, i);
  let n;
  const { options: o } = t;
  if (o) {
    let a;
    (n = new ae(o, e, -1)), (a = t.pswp ? t.pswp.viewportSize : le(o, t));
    const r = oe(o, a, e, i);
    n.update(s.width, s.height, r);
  }
  return s.lazyLoad(), n && s.setDisplayedSize(Math.ceil(s.width * n.initial), Math.ceil(s.height * n.initial)), s;
}
function de(e, t) {
  const i = t.getItemData(e);
  if (!t.dispatch('lazyLoadSlide', { index: e, itemData: i }).defaultPrevented) return B(i, t, e);
}
class he extends se {
  getNumItems() {
    var e;
    let t = 0;
    const i = null === (e = this.options) || void 0 === e ? void 0 : e.dataSource;
    i && 'length' in i
      ? (t = i.length)
      : i &&
        'gallery' in i &&
        (i.items || (i.items = this._getGalleryDOMElements(i.gallery)), i.items && (t = i.items.length));
    const s = this.dispatch('numItems', { dataSource: i, numItems: t });
    return this.applyFilters('numItems', s.numItems, i);
  }
  createContentFromData(e, t) {
    return new re(e, this, t);
  }
  getItemData(e) {
    var t;
    const i = null === (t = this.options) || void 0 === t ? void 0 : t.dataSource;
    let s = {};
    Array.isArray(i)
      ? (s = i[e])
      : i && 'gallery' in i && (i.items || (i.items = this._getGalleryDOMElements(i.gallery)), (s = i.items[e]));
    let n = s;
    n instanceof Element && (n = this._domElementToItemData(n));
    const o = this.dispatch('itemData', { itemData: n || {}, index: e });
    return this.applyFilters('itemData', o.itemData, e);
  }
  _getGalleryDOMElements(e) {
    var t, i;
    return (null !== (t = this.options) && void 0 !== t && t.children) ||
      (null !== (i = this.options) && void 0 !== i && i.childSelector)
      ? P(this.options.children, this.options.childSelector, e) || []
      : [e];
  }
  _domElementToItemData(e) {
    const t = { element: e },
      i = 'A' === e.tagName ? e : e.querySelector('a');
    if (i) {
      (t.src = i.dataset.pswpSrc || i.href),
        i.dataset.pswpSrcset && (t.srcset = i.dataset.pswpSrcset),
        (t.width = i.dataset.pswpWidth ? parseInt(i.dataset.pswpWidth, 10) : 0),
        (t.height = i.dataset.pswpHeight ? parseInt(i.dataset.pswpHeight, 10) : 0),
        (t.w = t.width),
        (t.h = t.height),
        i.dataset.pswpType && (t.type = i.dataset.pswpType);
      const n = e.querySelector('img');
      var s;
      if (n) (t.msrc = n.currentSrc || n.src), (t.alt = null !== (s = n.getAttribute('alt')) && void 0 !== s ? s : '');
      (i.dataset.pswpCropped || i.dataset.cropped) && (t.thumbCropped = !0);
    }
    return this.applyFilters('domItemData', t, e, i);
  }
  lazyLoadData(e, t) {
    return B(e, this, t);
  }
}
class ce extends he {
  constructor(e) {
    super(),
      (this.options = e || {}),
      (this._uid = 0),
      (this.shouldOpen = !1),
      (this._preloadedContent = void 0),
      (this.onThumbnailsClick = this.onThumbnailsClick.bind(this));
  }
  init() {
    P(this.options.gallery, this.options.gallerySelector).forEach((e) => {
      e.addEventListener('click', this.onThumbnailsClick, !1);
    });
  }
  onThumbnailsClick(e) {
    if (ee(e) || window.pswp) return;
    let t = { x: e.clientX, y: e.clientY };
    !t.x && !t.y && (t = null);
    let i = this.getClickedIndex(e);
    i = this.applyFilters('clickedIndex', i, e, this);
    const s = { gallery: e.currentTarget };
    i >= 0 && (e.preventDefault(), this.loadAndOpen(i, s, t));
  }
  getClickedIndex(e) {
    if (this.options.getClickedIndexFn) return this.options.getClickedIndexFn.call(this, e);
    const t = e.target,
      i = P(this.options.children, this.options.childSelector, e.currentTarget).findIndex(
        (e) => e === t || e.contains(t)
      );
    return -1 !== i ? i : this.options.children || this.options.childSelector ? -1 : 0;
  }
  loadAndOpen(e, t, i) {
    if (window.pswp || !this.options) return !1;
    if (!t && this.options.gallery && this.options.children) {
      const e = P(this.options.gallery);
      e[0] && (t = { gallery: e[0] });
    }
    return (
      (this.options.index = e), (this.options.initialPointerPos = i), (this.shouldOpen = !0), this.preload(e, t), !0
    );
  }
  preload(e, t) {
    const { options: i } = this;
    t && (i.dataSource = t);
    const s = [],
      n = typeof i.pswpModule;
    if (te(i.pswpModule)) s.push(Promise.resolve(i.pswpModule));
    else {
      if ('string' === n) throw new Error('pswpModule as string is no longer supported');
      if ('function' !== n) throw new Error('pswpModule is not valid');
      s.push(i.pswpModule());
    }
    'function' == typeof i.openPromise && s.push(i.openPromise()),
      !1 !== i.preloadFirstSlide && e >= 0 && (this._preloadedContent = de(e, this));
    const o = ++this._uid;
    Promise.all(s).then((e) => {
      if (this.shouldOpen) {
        const t = e[0];
        this._openPhotoswipe(t, o);
      }
    });
  }
  _openPhotoswipe(e, t) {
    if ((t !== this._uid && this.shouldOpen) || ((this.shouldOpen = !1), window.pswp)) return;
    const i = 'object' == typeof e ? new e.default(this.options) : new e(this.options);
    (this.pswp = i),
      (window.pswp = i),
      Object.keys(this._listeners).forEach((e) => {
        var t;
        null === (t = this._listeners[e]) ||
          void 0 === t ||
          t.forEach((t) => {
            i.on(e, t);
          });
      }),
      Object.keys(this._filters).forEach((e) => {
        var t;
        null === (t = this._filters[e]) ||
          void 0 === t ||
          t.forEach((t) => {
            i.addFilter(e, t.fn, t.priority);
          });
      }),
      this._preloadedContent && (i.contentLoader.addToCache(this._preloadedContent), (this._preloadedContent = void 0)),
      i.on('destroy', () => {
        (this.pswp = void 0), delete window.pswp;
      }),
      i.init();
  }
  destroy() {
    var e;
    null === (e = this.pswp) || void 0 === e || e.destroy(),
      (this.shouldOpen = !1),
      (this._listeners = {}),
      P(this.options.gallery, this.options.gallerySelector).forEach((e) => {
        e.removeEventListener('click', this.onThumbnailsClick, !1);
      });
  }
}
let D = null,
  T = null;
function j() {
  D && (D.destroy(), (D = null), k.destroy()),
    T && (T.destroy(), (T = null)),
    (T = new F('.thumbs', { spaceBetween: 10, slidesPerView: 4, freeMode: !0, watchSlidesProgress: !0, modules: [J] })),
    (D = new F('.main', {
      modules: [Z, Y],
      loop: !0,
      slidesPerView: 'auto',
      breakpoints: { 768: { slidesPerView: 1, spaceBetween: 30 }, 1024: { slidesPerView: 1, spaceBetween: 40 } },
      spaceBetween: 40,
      navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
      thumbs: { swiper: T },
    }));
}
const k = new ce({
  gallery: '#my-slider',
  children: 'a',
  pswpModule: () => X(() => import('./photoswipe.esm.CKijkUPa.js'), []),
});
k.init(),
  document.addEventListener('astro:after-swap', () => {
    j(), k.init();
  }),
  setTimeout(() => {
    j();
  });
