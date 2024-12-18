function ne(e) {
  return null !== e && 'object' == typeof e && 'constructor' in e && e.constructor === Object;
}
function te(e, t) {
  void 0 === e && (e = {}),
    void 0 === t && (t = {}),
    Object.keys(t).forEach((s) => {
      typeof e[s] > 'u' ? (e[s] = t[s]) : ne(t[s]) && ne(e[s]) && Object.keys(t[s]).length > 0 && te(e[s], t[s]);
    });
}
const pe = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: { blur() {}, nodeName: '' },
  querySelector: () => null,
  querySelectorAll: () => [],
  getElementById: () => null,
  createEvent: () => ({ initEvent() {} }),
  createElement: () => ({ children: [], childNodes: [], style: {}, setAttribute() {}, getElementsByTagName: () => [] }),
  createElementNS: () => ({}),
  importNode: () => null,
  location: { hash: '', host: '', hostname: '', href: '', origin: '', pathname: '', protocol: '', search: '' },
};
function N() {
  const e = typeof document < 'u' ? document : {};
  return te(e, pe), e;
}
const be = {
  document: pe,
  navigator: { userAgent: '' },
  location: { hash: '', host: '', hostname: '', href: '', origin: '', pathname: '', protocol: '', search: '' },
  history: { replaceState() {}, pushState() {}, go() {}, back() {} },
  CustomEvent: function () {
    return this;
  },
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle: () => ({ getPropertyValue: () => '' }),
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia: () => ({}),
  requestAnimationFrame: (e) => (typeof setTimeout > 'u' ? (e(), null) : setTimeout(e, 0)),
  cancelAnimationFrame(e) {
    typeof setTimeout > 'u' || clearTimeout(e);
  },
};
function z() {
  const e = typeof window < 'u' ? window : {};
  return te(e, be), e;
}
function ye(e) {
  return (
    void 0 === e && (e = ''),
    e
      .trim()
      .split(' ')
      .filter((e) => !!e.trim())
  );
}
function Ee(e) {
  const t = e;
  Object.keys(t).forEach((e) => {
    try {
      t[e] = null;
    } catch {}
    try {
      delete t[e];
    } catch {}
  });
}
function Z(e, t) {
  return void 0 === t && (t = 0), setTimeout(e, t);
}
function R() {
  return Date.now();
}
function Pe(e) {
  const t = z();
  let s;
  return (
    t.getComputedStyle && (s = t.getComputedStyle(e, null)),
    !s && e.currentStyle && (s = e.currentStyle),
    s || (s = e.style),
    s
  );
}
function Me(e, t) {
  void 0 === t && (t = 'x');
  const s = z();
  let i, r, n;
  const a = Pe(e);
  return (
    s.WebKitCSSMatrix
      ? ((r = a.transform || a.webkitTransform),
        r.split(',').length > 6 &&
          (r = r
            .split(', ')
            .map((e) => e.replace(',', '.'))
            .join(', ')),
        (n = new s.WebKitCSSMatrix('none' === r ? '' : r)))
      : ((n =
          a.MozTransform ||
          a.OTransform ||
          a.MsTransform ||
          a.msTransform ||
          a.transform ||
          a.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,')),
        (i = n.toString().split(','))),
    'x' === t && (r = s.WebKitCSSMatrix ? n.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])),
    'y' === t && (r = s.WebKitCSSMatrix ? n.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])),
    r || 0
  );
}
function _(e) {
  return (
    'object' == typeof e && null !== e && e.constructor && 'Object' === Object.prototype.toString.call(e).slice(8, -1)
  );
}
function Ce(e) {
  return typeof window < 'u' && typeof window.HTMLElement < 'u'
    ? e instanceof HTMLElement
    : e && (1 === e.nodeType || 11 === e.nodeType);
}
function O() {
  const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
    t = ['__proto__', 'constructor', 'prototype'];
  for (let s = 1; s < arguments.length; s += 1) {
    const i = s < 0 || arguments.length <= s ? void 0 : arguments[s];
    if (null != i && !Ce(i)) {
      const s = Object.keys(Object(i)).filter((e) => t.indexOf(e) < 0);
      for (let t = 0, r = s.length; t < r; t += 1) {
        const r = s[t],
          n = Object.getOwnPropertyDescriptor(i, r);
        void 0 !== n &&
          n.enumerable &&
          (_(e[r]) && _(i[r])
            ? i[r].__swiper__
              ? (e[r] = i[r])
              : O(e[r], i[r])
            : !_(e[r]) && _(i[r])
              ? ((e[r] = {}), i[r].__swiper__ ? (e[r] = i[r]) : O(e[r], i[r]))
              : (e[r] = i[r]));
      }
    }
  }
  return e;
}
function $(e, t, s) {
  e.style.setProperty(t, s);
}
function me(e) {
  let { swiper: t, targetPosition: s, side: i } = e;
  const r = z(),
    n = -t.translate;
  let a,
    o = null;
  const l = t.params.speed;
  (t.wrapperEl.style.scrollSnapType = 'none'), r.cancelAnimationFrame(t.cssModeFrameID);
  const d = s > n ? 'next' : 'prev',
    c = (e, t) => ('next' === d && e >= t) || ('prev' === d && e <= t),
    p = () => {
      (a = new Date().getTime()), null === o && (o = a);
      const e = Math.max(Math.min((a - o) / l, 1), 0),
        d = 0.5 - Math.cos(e * Math.PI) / 2;
      let u = n + d * (s - n);
      if ((c(u, s) && (u = s), t.wrapperEl.scrollTo({ [i]: u }), c(u, s)))
        return (
          (t.wrapperEl.style.overflow = 'hidden'),
          (t.wrapperEl.style.scrollSnapType = ''),
          setTimeout(() => {
            (t.wrapperEl.style.overflow = ''), t.wrapperEl.scrollTo({ [i]: u });
          }),
          void r.cancelAnimationFrame(t.cssModeFrameID)
        );
      t.cssModeFrameID = r.requestAnimationFrame(p);
    };
  p();
}
function k(e, t) {
  void 0 === t && (t = '');
  const s = [...e.children];
  return e instanceof HTMLSlotElement && s.push(...e.assignedElements()), t ? s.filter((e) => e.matches(t)) : s;
}
function Ie(e, t) {
  const s = t.contains(e);
  return !s && t instanceof HTMLSlotElement ? [...t.assignedElements()].includes(e) : s;
}
function W(e) {
  try {
    return void console.warn(e);
  } catch {}
}
function j(e, t) {
  void 0 === t && (t = []);
  const s = document.createElement(e);
  return s.classList.add(...(Array.isArray(t) ? t : ye(t))), s;
}
function Le(e, t) {
  const s = [];
  for (; e.previousElementSibling; ) {
    const i = e.previousElementSibling;
    t ? i.matches(t) && s.push(i) : s.push(i), (e = i);
  }
  return s;
}
function Oe(e, t) {
  const s = [];
  for (; e.nextElementSibling; ) {
    const i = e.nextElementSibling;
    t ? i.matches(t) && s.push(i) : s.push(i), (e = i);
  }
  return s;
}
function B(e, t) {
  return z().getComputedStyle(e, null).getPropertyValue(t);
}
function ae(e) {
  let t,
    s = e;
  if (s) {
    for (t = 0; null !== (s = s.previousSibling); ) 1 === s.nodeType && (t += 1);
    return t;
  }
}
function ze(e, t) {
  const s = [];
  let i = e.parentElement;
  for (; i; ) s.push(i), (i = i.parentElement);
  return s;
}
function Rt(e, t) {
  t &&
    e.addEventListener('transitionend', function s(i) {
      i.target === e && (t.call(e, i), e.removeEventListener('transitionend', s));
    });
}
function oe(e, t, s) {
  const i = z();
  return (
    e['width' === t ? 'offsetWidth' : 'offsetHeight'] +
    parseFloat(i.getComputedStyle(e, null).getPropertyValue('width' === t ? 'margin-right' : 'margin-top')) +
    parseFloat(i.getComputedStyle(e, null).getPropertyValue('width' === t ? 'margin-left' : 'margin-bottom'))
  );
}
function D(e) {
  return (Array.isArray(e) ? e : [e]).filter((e) => !!e);
}
let q, Y, X;
function Ae() {
  const e = z(),
    t = N();
  return {
    smoothScroll: t.documentElement && t.documentElement.style && 'scrollBehavior' in t.documentElement.style,
    touch: !!('ontouchstart' in e || (e.DocumentTouch && t instanceof e.DocumentTouch)),
  };
}
function he() {
  return q || (q = Ae()), q;
}
function Ge(e) {
  let { userAgent: t } = void 0 === e ? {} : e;
  const s = he(),
    i = z(),
    r = i.navigator.platform,
    n = t || i.navigator.userAgent,
    a = { ios: !1, android: !1 },
    o = i.screen.width,
    l = i.screen.height,
    d = n.match(/(Android);?[\s\/]+([\d.]+)?/);
  let c = n.match(/(iPad).*OS\s([\d_]+)/);
  const p = n.match(/(iPod)(.*OS\s([\d_]+))?/),
    u = !c && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    f = 'Win32' === r;
  let m = 'MacIntel' === r;
  return (
    !c &&
      m &&
      s.touch &&
      [
        '1024x1366',
        '1366x1024',
        '834x1194',
        '1194x834',
        '834x1112',
        '1112x834',
        '768x1024',
        '1024x768',
        '820x1180',
        '1180x820',
        '810x1080',
        '1080x810',
      ].indexOf(`${o}x${l}`) >= 0 &&
      ((c = n.match(/(Version)\/([\d.]+)/)), c || (c = [0, 1, '13_0_0']), (m = !1)),
    d && !f && ((a.os = 'android'), (a.android = !0)),
    (c || u || p) && ((a.os = 'ios'), (a.ios = !0)),
    a
  );
}
function ge(e) {
  return void 0 === e && (e = {}), Y || (Y = Ge(e)), Y;
}
function ke() {
  const e = z(),
    t = ge();
  let s = !1;
  function i() {
    const t = e.navigator.userAgent.toLowerCase();
    return t.indexOf('safari') >= 0 && t.indexOf('chrome') < 0 && t.indexOf('android') < 0;
  }
  if (i()) {
    const t = String(e.navigator.userAgent);
    if (t.includes('Version/')) {
      const [e, i] = t
        .split('Version/')[1]
        .split(' ')[0]
        .split('.')
        .map((e) => Number(e));
      s = e < 16 || (16 === e && i < 2);
    }
  }
  const r = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),
    n = i();
  return { isSafari: s || n, needPerspectiveFix: s, need3dFix: n || (r && t.ios), isWebView: r };
}
function De() {
  return X || (X = ke()), X;
}
function Ve(e) {
  let { swiper: t, on: s, emit: i } = e;
  const r = z();
  let n = null,
    a = null;
  const o = () => {
      !t || t.destroyed || !t.initialized || (i('beforeResize'), i('resize'));
    },
    l = () => {
      !t || t.destroyed || !t.initialized || i('orientationchange');
    };
  s('init', () => {
    t.params.resizeObserver && typeof r.ResizeObserver < 'u'
      ? !t ||
        t.destroyed ||
        !t.initialized ||
        ((n = new ResizeObserver((e) => {
          a = r.requestAnimationFrame(() => {
            const { width: s, height: i } = t;
            let r = s,
              n = i;
            e.forEach((e) => {
              let { contentBoxSize: s, contentRect: i, target: a } = e;
              (a && a !== t.el) ||
                ((r = i ? i.width : (s[0] || s).inlineSize), (n = i ? i.height : (s[0] || s).blockSize));
            }),
              (r !== s || n !== i) && o();
          });
        })),
        n.observe(t.el))
      : (r.addEventListener('resize', o), r.addEventListener('orientationchange', l));
  }),
    s('destroy', () => {
      a && r.cancelAnimationFrame(a),
        n && n.unobserve && t.el && (n.unobserve(t.el), (n = null)),
        r.removeEventListener('resize', o),
        r.removeEventListener('orientationchange', l);
    });
}
function Be(e) {
  let { swiper: t, extendParams: s, on: i, emit: r } = e;
  const n = [],
    a = z(),
    o = function (e, s) {
      void 0 === s && (s = {});
      const i = new (a.MutationObserver || a.WebkitMutationObserver)((e) => {
        if (t.__preventObserver__) return;
        if (1 === e.length) return void r('observerUpdate', e[0]);
        const s = function () {
          r('observerUpdate', e[0]);
        };
        a.requestAnimationFrame ? a.requestAnimationFrame(s) : a.setTimeout(s, 0);
      });
      i.observe(e, {
        attributes: typeof s.attributes > 'u' || s.attributes,
        childList: t.isElement || (typeof s.childList > 'u' || s).childList,
        characterData: typeof s.characterData > 'u' || s.characterData,
      }),
        n.push(i);
    };
  s({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
    i('init', () => {
      if (t.params.observer) {
        if (t.params.observeParents) {
          const e = ze(t.hostEl);
          for (let t = 0; t < e.length; t += 1) o(e[t]);
        }
        o(t.hostEl, { childList: t.params.observeSlideChildren }), o(t.wrapperEl, { attributes: !1 });
      }
    }),
    i('destroy', () => {
      n.forEach((e) => {
        e.disconnect();
      }),
        n.splice(0, n.length);
    });
}
var Fe = {
  on(e, t, s) {
    const i = this;
    if (!i.eventsListeners || i.destroyed || 'function' != typeof t) return i;
    const r = s ? 'unshift' : 'push';
    return (
      e.split(' ').forEach((e) => {
        i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e][r](t);
      }),
      i
    );
  },
  once(e, t, s) {
    const i = this;
    if (!i.eventsListeners || i.destroyed || 'function' != typeof t) return i;
    function r() {
      i.off(e, r), r.__emitterProxy && delete r.__emitterProxy;
      for (var s = arguments.length, n = new Array(s), a = 0; a < s; a++) n[a] = arguments[a];
      t.apply(i, n);
    }
    return (r.__emitterProxy = t), i.on(e, r, s);
  },
  onAny(e, t) {
    const s = this;
    if (!s.eventsListeners || s.destroyed || 'function' != typeof e) return s;
    const i = t ? 'unshift' : 'push';
    return s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[i](e), s;
  },
  offAny(e) {
    const t = this;
    if (!t.eventsListeners || t.destroyed || !t.eventsAnyListeners) return t;
    const s = t.eventsAnyListeners.indexOf(e);
    return s >= 0 && t.eventsAnyListeners.splice(s, 1), t;
  },
  off(e, t) {
    const s = this;
    return (
      !s.eventsListeners ||
        s.destroyed ||
        !s.eventsListeners ||
        e.split(' ').forEach((e) => {
          typeof t > 'u'
            ? (s.eventsListeners[e] = [])
            : s.eventsListeners[e] &&
              s.eventsListeners[e].forEach((i, r) => {
                (i === t || (i.__emitterProxy && i.__emitterProxy === t)) && s.eventsListeners[e].splice(r, 1);
              });
        }),
      s
    );
  },
  emit() {
    const e = this;
    if (!e.eventsListeners || e.destroyed || !e.eventsListeners) return e;
    let t, s, i;
    for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++) n[a] = arguments[a];
    return (
      'string' == typeof n[0] || Array.isArray(n[0])
        ? ((t = n[0]), (s = n.slice(1, n.length)), (i = e))
        : ((t = n[0].events), (s = n[0].data), (i = n[0].context || e)),
      s.unshift(i),
      (Array.isArray(t) ? t : t.split(' ')).forEach((t) => {
        e.eventsAnyListeners &&
          e.eventsAnyListeners.length &&
          e.eventsAnyListeners.forEach((e) => {
            e.apply(i, [t, ...s]);
          }),
          e.eventsListeners &&
            e.eventsListeners[t] &&
            e.eventsListeners[t].forEach((e) => {
              e.apply(i, s);
            });
      }),
      e
    );
  },
};
function Ne() {
  const e = this;
  let t, s;
  const i = e.el;
  (t = typeof e.params.width < 'u' && null !== e.params.width ? e.params.width : i.clientWidth),
    (s = typeof e.params.height < 'u' && null !== e.params.height ? e.params.height : i.clientHeight),
    !((0 === t && e.isHorizontal()) || (0 === s && e.isVertical())) &&
      ((t = t - parseInt(B(i, 'padding-left') || 0, 10) - parseInt(B(i, 'padding-right') || 0, 10)),
      (s = s - parseInt(B(i, 'padding-top') || 0, 10) - parseInt(B(i, 'padding-bottom') || 0, 10)),
      Number.isNaN(t) && (t = 0),
      Number.isNaN(s) && (s = 0),
      Object.assign(e, { width: t, height: s, size: e.isHorizontal() ? t : s }));
}
function _e() {
  const e = this;
  function t(t, s) {
    return parseFloat(t.getPropertyValue(e.getDirectionLabel(s)) || 0);
  }
  const s = e.params,
    { wrapperEl: i, slidesEl: r, size: n, rtlTranslate: a, wrongRTL: o } = e,
    l = e.virtual && s.virtual.enabled,
    d = l ? e.virtual.slides.length : e.slides.length,
    c = k(r, `.${e.params.slideClass}, swiper-slide`),
    p = l ? e.virtual.slides.length : c.length;
  let u = [];
  const f = [],
    m = [];
  let h = s.slidesOffsetBefore;
  'function' == typeof h && (h = s.slidesOffsetBefore.call(e));
  let v = s.slidesOffsetAfter;
  'function' == typeof v && (v = s.slidesOffsetAfter.call(e));
  const g = e.snapGrid.length,
    w = e.slidesGrid.length;
  let S = s.spaceBetween,
    T = -h,
    b = 0,
    y = 0;
  if (typeof n > 'u') return;
  'string' == typeof S && S.indexOf('%') >= 0
    ? (S = (parseFloat(S.replace('%', '')) / 100) * n)
    : 'string' == typeof S && (S = parseFloat(S)),
    (e.virtualSize = -S),
    c.forEach((e) => {
      a ? (e.style.marginLeft = '') : (e.style.marginRight = ''), (e.style.marginBottom = ''), (e.style.marginTop = '');
    }),
    s.centeredSlides &&
      s.cssMode &&
      ($(i, '--swiper-centered-offset-before', ''), $(i, '--swiper-centered-offset-after', ''));
  const x = s.grid && s.grid.rows > 1 && e.grid;
  let E;
  x ? e.grid.initSlides(c) : e.grid && e.grid.unsetSlides();
  const M =
    'auto' === s.slidesPerView &&
    s.breakpoints &&
    Object.keys(s.breakpoints).filter((e) => typeof s.breakpoints[e].slidesPerView < 'u').length > 0;
  for (let i = 0; i < p; i += 1) {
    let r;
    if (((E = 0), c[i] && (r = c[i]), x && e.grid.updateSlide(i, r, c), !c[i] || 'none' !== B(r, 'display'))) {
      if ('auto' === s.slidesPerView) {
        M && (c[i].style[e.getDirectionLabel('width')] = '');
        const n = getComputedStyle(r),
          a = r.style.transform,
          o = r.style.webkitTransform;
        if ((a && (r.style.transform = 'none'), o && (r.style.webkitTransform = 'none'), s.roundLengths))
          E = e.isHorizontal() ? oe(r, 'width') : oe(r, 'height');
        else {
          const e = t(n, 'width'),
            s = t(n, 'padding-left'),
            i = t(n, 'padding-right'),
            a = t(n, 'margin-left'),
            o = t(n, 'margin-right'),
            l = n.getPropertyValue('box-sizing');
          if (l && 'border-box' === l) E = e + a + o;
          else {
            const { clientWidth: t, offsetWidth: n } = r;
            E = e + s + i + a + o + (n - t);
          }
        }
        a && (r.style.transform = a), o && (r.style.webkitTransform = o), s.roundLengths && (E = Math.floor(E));
      } else
        (E = (n - (s.slidesPerView - 1) * S) / s.slidesPerView),
          s.roundLengths && (E = Math.floor(E)),
          c[i] && (c[i].style[e.getDirectionLabel('width')] = `${E}px`);
      c[i] && (c[i].swiperSlideSize = E),
        m.push(E),
        s.centeredSlides
          ? ((T = T + E / 2 + b / 2 + S),
            0 === b && 0 !== i && (T = T - n / 2 - S),
            0 === i && (T = T - n / 2 - S),
            Math.abs(T) < 0.001 && (T = 0),
            s.roundLengths && (T = Math.floor(T)),
            y % s.slidesPerGroup == 0 && u.push(T),
            f.push(T))
          : (s.roundLengths && (T = Math.floor(T)),
            (y - Math.min(e.params.slidesPerGroupSkip, y)) % e.params.slidesPerGroup == 0 && u.push(T),
            f.push(T),
            (T = T + E + S)),
        (e.virtualSize += E + S),
        (b = E),
        (y += 1);
    }
  }
  if (
    ((e.virtualSize = Math.max(e.virtualSize, n) + v),
    a && o && ('slide' === s.effect || 'coverflow' === s.effect) && (i.style.width = `${e.virtualSize + S}px`),
    s.setWrapperSize && (i.style[e.getDirectionLabel('width')] = `${e.virtualSize + S}px`),
    x && e.grid.updateWrapperSize(E, u),
    !s.centeredSlides)
  ) {
    const t = [];
    for (let i = 0; i < u.length; i += 1) {
      let r = u[i];
      s.roundLengths && (r = Math.floor(r)), u[i] <= e.virtualSize - n && t.push(r);
    }
    (u = t), Math.floor(e.virtualSize - n) - Math.floor(u[u.length - 1]) > 1 && u.push(e.virtualSize - n);
  }
  if (l && s.loop) {
    const t = m[0] + S;
    if (s.slidesPerGroup > 1) {
      const i = Math.ceil((e.virtual.slidesBefore + e.virtual.slidesAfter) / s.slidesPerGroup),
        r = t * s.slidesPerGroup;
      for (let e = 0; e < i; e += 1) u.push(u[u.length - 1] + r);
    }
    for (let i = 0; i < e.virtual.slidesBefore + e.virtual.slidesAfter; i += 1)
      1 === s.slidesPerGroup && u.push(u[u.length - 1] + t), f.push(f[f.length - 1] + t), (e.virtualSize += t);
  }
  if ((0 === u.length && (u = [0]), 0 !== S)) {
    const t = e.isHorizontal() && a ? 'marginLeft' : e.getDirectionLabel('marginRight');
    c.filter((e, t) => !(s.cssMode && !s.loop) || t !== c.length - 1).forEach((e) => {
      e.style[t] = `${S}px`;
    });
  }
  if (s.centeredSlides && s.centeredSlidesBounds) {
    let e = 0;
    m.forEach((t) => {
      e += t + (S || 0);
    }),
      (e -= S);
    const t = e > n ? e - n : 0;
    u = u.map((e) => (e <= 0 ? -h : e > t ? t + v : e));
  }
  if (s.centerInsufficientSlides) {
    let e = 0;
    m.forEach((t) => {
      e += t + (S || 0);
    }),
      (e -= S);
    const t = (s.slidesOffsetBefore || 0) + (s.slidesOffsetAfter || 0);
    if (e + t < n) {
      const s = (n - e - t) / 2;
      u.forEach((e, t) => {
        u[t] = e - s;
      }),
        f.forEach((e, t) => {
          f[t] = e + s;
        });
    }
  }
  if (
    (Object.assign(e, { slides: c, snapGrid: u, slidesGrid: f, slidesSizesGrid: m }),
    s.centeredSlides && s.cssMode && !s.centeredSlidesBounds)
  ) {
    $(i, '--swiper-centered-offset-before', -u[0] + 'px'),
      $(i, '--swiper-centered-offset-after', e.size / 2 - m[m.length - 1] / 2 + 'px');
    const t = -e.snapGrid[0],
      s = -e.slidesGrid[0];
    (e.snapGrid = e.snapGrid.map((e) => e + t)), (e.slidesGrid = e.slidesGrid.map((e) => e + s));
  }
  if (
    (p !== d && e.emit('slidesLengthChange'),
    u.length !== g && (e.params.watchOverflow && e.checkOverflow(), e.emit('snapGridLengthChange')),
    f.length !== w && e.emit('slidesGridLengthChange'),
    s.watchSlidesProgress && e.updateSlidesOffset(),
    e.emit('slidesUpdated'),
    !(l || s.cssMode || ('slide' !== s.effect && 'fade' !== s.effect)))
  ) {
    const t = `${s.containerModifierClass}backface-hidden`,
      i = e.el.classList.contains(t);
    p <= s.maxBackfaceHiddenSlides ? i || e.el.classList.add(t) : i && e.el.classList.remove(t);
  }
}
function $e(e) {
  const t = this,
    s = [],
    i = t.virtual && t.params.virtual.enabled;
  let r,
    n = 0;
  'number' == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
  const a = (e) => (i ? t.slides[t.getSlideIndexByData(e)] : t.slides[e]);
  if ('auto' !== t.params.slidesPerView && t.params.slidesPerView > 1)
    if (t.params.centeredSlides)
      (t.visibleSlides || []).forEach((e) => {
        s.push(e);
      });
    else
      for (r = 0; r < Math.ceil(t.params.slidesPerView); r += 1) {
        const e = t.activeIndex + r;
        if (e > t.slides.length && !i) break;
        s.push(a(e));
      }
  else s.push(a(t.activeIndex));
  for (r = 0; r < s.length; r += 1)
    if (typeof s[r] < 'u') {
      const e = s[r].offsetHeight;
      n = e > n ? e : n;
    }
  (n || 0 === n) && (t.wrapperEl.style.height = `${n}px`);
}
function He() {
  const e = this,
    t = e.slides,
    s = e.isElement ? (e.isHorizontal() ? e.wrapperEl.offsetLeft : e.wrapperEl.offsetTop) : 0;
  for (let i = 0; i < t.length; i += 1)
    t[i].swiperSlideOffset = (e.isHorizontal() ? t[i].offsetLeft : t[i].offsetTop) - s - e.cssOverflowAdjustment();
}
const le = (e, t, s) => {
  t && !e.classList.contains(s) ? e.classList.add(s) : !t && e.classList.contains(s) && e.classList.remove(s);
};
function Re(e) {
  void 0 === e && (e = (this && this.translate) || 0);
  const t = this,
    s = t.params,
    { slides: i, rtlTranslate: r, snapGrid: n } = t;
  if (0 === i.length) return;
  typeof i[0].swiperSlideOffset > 'u' && t.updateSlidesOffset();
  let a = -e;
  r && (a = e), (t.visibleSlidesIndexes = []), (t.visibleSlides = []);
  let o = s.spaceBetween;
  'string' == typeof o && o.indexOf('%') >= 0
    ? (o = (parseFloat(o.replace('%', '')) / 100) * t.size)
    : 'string' == typeof o && (o = parseFloat(o));
  for (let e = 0; e < i.length; e += 1) {
    const l = i[e];
    let d = l.swiperSlideOffset;
    s.cssMode && s.centeredSlides && (d -= i[0].swiperSlideOffset);
    const c = (a + (s.centeredSlides ? t.minTranslate() : 0) - d) / (l.swiperSlideSize + o),
      p = (a - n[0] + (s.centeredSlides ? t.minTranslate() : 0) - d) / (l.swiperSlideSize + o),
      u = -(a - d),
      f = u + t.slidesSizesGrid[e],
      m = u >= 0 && u <= t.size - t.slidesSizesGrid[e],
      h = (u >= 0 && u < t.size - 1) || (f > 1 && f <= t.size) || (u <= 0 && f >= t.size);
    h && (t.visibleSlides.push(l), t.visibleSlidesIndexes.push(e)),
      le(l, h, s.slideVisibleClass),
      le(l, m, s.slideFullyVisibleClass),
      (l.progress = r ? -c : c),
      (l.originalProgress = r ? -p : p);
  }
}
function We(e) {
  const t = this;
  if (typeof e > 'u') {
    const s = t.rtlTranslate ? -1 : 1;
    e = (t && t.translate && t.translate * s) || 0;
  }
  const s = t.params,
    i = t.maxTranslate() - t.minTranslate();
  let { progress: r, isBeginning: n, isEnd: a, progressLoop: o } = t;
  const l = n,
    d = a;
  if (0 === i) (r = 0), (n = !0), (a = !0);
  else {
    r = (e - t.minTranslate()) / i;
    const s = Math.abs(e - t.minTranslate()) < 1,
      o = Math.abs(e - t.maxTranslate()) < 1;
    (n = s || r <= 0), (a = o || r >= 1), s && (r = 0), o && (r = 1);
  }
  if (s.loop) {
    const s = t.getSlideIndexByData(0),
      i = t.getSlideIndexByData(t.slides.length - 1),
      r = t.slidesGrid[s],
      n = t.slidesGrid[i],
      a = t.slidesGrid[t.slidesGrid.length - 1],
      l = Math.abs(e);
    (o = l >= r ? (l - r) / a : (l + a - n) / a), o > 1 && (o -= 1);
  }
  Object.assign(t, { progress: r, progressLoop: o, isBeginning: n, isEnd: a }),
    (s.watchSlidesProgress || (s.centeredSlides && s.autoHeight)) && t.updateSlidesProgress(e),
    n && !l && t.emit('reachBeginning toEdge'),
    a && !d && t.emit('reachEnd toEdge'),
    ((l && !n) || (d && !a)) && t.emit('fromEdge'),
    t.emit('progress', r);
}
const U = (e, t, s) => {
  t && !e.classList.contains(s) ? e.classList.add(s) : !t && e.classList.contains(s) && e.classList.remove(s);
};
function je() {
  const e = this,
    { slides: t, params: s, slidesEl: i, activeIndex: r } = e,
    n = e.virtual && s.virtual.enabled,
    a = e.grid && s.grid && s.grid.rows > 1,
    o = (e) => k(i, `.${s.slideClass}${e}, swiper-slide${e}`)[0];
  let l, d, c;
  if (n)
    if (s.loop) {
      let t = r - e.virtual.slidesBefore;
      t < 0 && (t = e.virtual.slides.length + t),
        t >= e.virtual.slides.length && (t -= e.virtual.slides.length),
        (l = o(`[data-swiper-slide-index="${t}"]`));
    } else l = o(`[data-swiper-slide-index="${r}"]`);
  else
    a
      ? ((l = t.filter((e) => e.column === r)[0]),
        (c = t.filter((e) => e.column === r + 1)[0]),
        (d = t.filter((e) => e.column === r - 1)[0]))
      : (l = t[r]);
  l &&
    (a ||
      ((c = Oe(l, `.${s.slideClass}, swiper-slide`)[0]),
      s.loop && !c && (c = t[0]),
      (d = Le(l, `.${s.slideClass}, swiper-slide`)[0]),
      s.loop && 0 === !d && (d = t[t.length - 1]))),
    t.forEach((e) => {
      U(e, e === l, s.slideActiveClass), U(e, e === c, s.slideNextClass), U(e, e === d, s.slidePrevClass);
    }),
    e.emitSlidesClasses();
}
const H = (e, t) => {
    if (!e || e.destroyed || !e.params) return;
    const s = t.closest(e.isElement ? 'swiper-slide' : `.${e.params.slideClass}`);
    if (s) {
      let t = s.querySelector(`.${e.params.lazyPreloaderClass}`);
      !t &&
        e.isElement &&
        (s.shadowRoot
          ? (t = s.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`))
          : requestAnimationFrame(() => {
              s.shadowRoot && ((t = s.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`)), t && t.remove());
            })),
        t && t.remove();
    }
  },
  K = (e, t) => {
    if (!e.slides[t]) return;
    const s = e.slides[t].querySelector('[loading="lazy"]');
    s && s.removeAttribute('loading');
  },
  ee = (e) => {
    if (!e || e.destroyed || !e.params) return;
    let t = e.params.lazyPreloadPrevNext;
    const s = e.slides.length;
    if (!s || !t || t < 0) return;
    t = Math.min(t, s);
    const i = 'auto' === e.params.slidesPerView ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView),
      r = e.activeIndex;
    if (e.params.grid && e.params.grid.rows > 1) {
      const s = r,
        n = [s - t];
      return (
        n.push(...Array.from({ length: t }).map((e, t) => s + i + t)),
        void e.slides.forEach((t, s) => {
          n.includes(t.column) && K(e, s);
        })
      );
    }
    const n = r + i - 1;
    if (e.params.rewind || e.params.loop)
      for (let i = r - t; i <= n + t; i += 1) {
        const t = ((i % s) + s) % s;
        (t < r || t > n) && K(e, t);
      }
    else for (let i = Math.max(r - t, 0); i <= Math.min(n + t, s - 1); i += 1) i !== r && (i > n || i < r) && K(e, i);
  };
function qe(e) {
  const { slidesGrid: t, params: s } = e,
    i = e.rtlTranslate ? e.translate : -e.translate;
  let r;
  for (let e = 0; e < t.length; e += 1)
    typeof t[e + 1] < 'u'
      ? i >= t[e] && i < t[e + 1] - (t[e + 1] - t[e]) / 2
        ? (r = e)
        : i >= t[e] && i < t[e + 1] && (r = e + 1)
      : i >= t[e] && (r = e);
  return s.normalizeSlideIndex && (r < 0 || typeof r > 'u') && (r = 0), r;
}
function Ye(e) {
  const t = this,
    s = t.rtlTranslate ? t.translate : -t.translate,
    { snapGrid: i, params: r, activeIndex: n, realIndex: a, snapIndex: o } = t;
  let l,
    d = e;
  const c = (e) => {
    let s = e - t.virtual.slidesBefore;
    return (
      s < 0 && (s = t.virtual.slides.length + s), s >= t.virtual.slides.length && (s -= t.virtual.slides.length), s
    );
  };
  if ((typeof d > 'u' && (d = qe(t)), i.indexOf(s) >= 0)) l = i.indexOf(s);
  else {
    const e = Math.min(r.slidesPerGroupSkip, d);
    l = e + Math.floor((d - e) / r.slidesPerGroup);
  }
  if ((l >= i.length && (l = i.length - 1), d === n && !t.params.loop))
    return void (l !== o && ((t.snapIndex = l), t.emit('snapIndexChange')));
  if (d === n && t.params.loop && t.virtual && t.params.virtual.enabled) return void (t.realIndex = c(d));
  const p = t.grid && r.grid && r.grid.rows > 1;
  let u;
  if (t.virtual && r.virtual.enabled && r.loop) u = c(d);
  else if (p) {
    const e = t.slides.filter((e) => e.column === d)[0];
    let s = parseInt(e.getAttribute('data-swiper-slide-index'), 10);
    Number.isNaN(s) && (s = Math.max(t.slides.indexOf(e), 0)), (u = Math.floor(s / r.grid.rows));
  } else if (t.slides[d]) {
    const e = t.slides[d].getAttribute('data-swiper-slide-index');
    u = e ? parseInt(e, 10) : d;
  } else u = d;
  Object.assign(t, {
    previousSnapIndex: o,
    snapIndex: l,
    previousRealIndex: a,
    realIndex: u,
    previousIndex: n,
    activeIndex: d,
  }),
    t.initialized && ee(t),
    t.emit('activeIndexChange'),
    t.emit('snapIndexChange'),
    (t.initialized || t.params.runCallbacksOnInit) && (a !== u && t.emit('realIndexChange'), t.emit('slideChange'));
}
function Xe(e, t) {
  const s = this,
    i = s.params;
  let r = e.closest(`.${i.slideClass}, swiper-slide`);
  !r &&
    s.isElement &&
    t &&
    t.length > 1 &&
    t.includes(e) &&
    [...t.slice(t.indexOf(e) + 1, t.length)].forEach((e) => {
      !r && e.matches && e.matches(`.${i.slideClass}, swiper-slide`) && (r = e);
    });
  let n,
    a = !1;
  if (r)
    for (let e = 0; e < s.slides.length; e += 1)
      if (s.slides[e] === r) {
        (a = !0), (n = e);
        break;
      }
  if (!r || !a) return (s.clickedSlide = void 0), void (s.clickedIndex = void 0);
  (s.clickedSlide = r),
    s.virtual && s.params.virtual.enabled
      ? (s.clickedIndex = parseInt(r.getAttribute('data-swiper-slide-index'), 10))
      : (s.clickedIndex = n),
    i.slideToClickedSlide && void 0 !== s.clickedIndex && s.clickedIndex !== s.activeIndex && s.slideToClickedSlide();
}
var Ue = {
  updateSize: Ne,
  updateSlides: _e,
  updateAutoHeight: $e,
  updateSlidesOffset: He,
  updateSlidesProgress: Re,
  updateProgress: We,
  updateSlidesClasses: je,
  updateActiveIndex: Ye,
  updateClickedSlide: Xe,
};
function Ke(e) {
  void 0 === e && (e = this.isHorizontal() ? 'x' : 'y');
  const { params: t, rtlTranslate: s, translate: i, wrapperEl: r } = this;
  if (t.virtualTranslate) return s ? -i : i;
  if (t.cssMode) return i;
  let n = Me(r, e);
  return (n += this.cssOverflowAdjustment()), s && (n = -n), n || 0;
}
function Je(e, t) {
  const s = this,
    { rtlTranslate: i, params: r, wrapperEl: n, progress: a } = s;
  let o = 0,
    l = 0;
  let d;
  s.isHorizontal() ? (o = i ? -e : e) : (l = e),
    r.roundLengths && ((o = Math.floor(o)), (l = Math.floor(l))),
    (s.previousTranslate = s.translate),
    (s.translate = s.isHorizontal() ? o : l),
    r.cssMode
      ? (n[s.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = s.isHorizontal() ? -o : -l)
      : r.virtualTranslate ||
        (s.isHorizontal() ? (o -= s.cssOverflowAdjustment()) : (l -= s.cssOverflowAdjustment()),
        (n.style.transform = `translate3d(${o}px, ${l}px, 0px)`));
  const c = s.maxTranslate() - s.minTranslate();
  (d = 0 === c ? 0 : (e - s.minTranslate()) / c),
    d !== a && s.updateProgress(e),
    s.emit('setTranslate', s.translate, t);
}
function Qe() {
  return -this.snapGrid[0];
}
function Ze() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function et(e, t, s, i, r) {
  void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), void 0 === i && (i = !0);
  const n = this,
    { params: a, wrapperEl: o } = n;
  if (n.animating && a.preventInteractionOnTransition) return !1;
  const l = n.minTranslate(),
    d = n.maxTranslate();
  let c;
  if (((c = i && e > l ? l : i && e < d ? d : e), n.updateProgress(c), a.cssMode)) {
    const e = n.isHorizontal();
    if (0 === t) o[e ? 'scrollLeft' : 'scrollTop'] = -c;
    else {
      if (!n.support.smoothScroll) return me({ swiper: n, targetPosition: -c, side: e ? 'left' : 'top' }), !0;
      o.scrollTo({ [e ? 'left' : 'top']: -c, behavior: 'smooth' });
    }
    return !0;
  }
  return (
    0 === t
      ? (n.setTransition(0), n.setTranslate(c), s && (n.emit('beforeTransitionStart', t, r), n.emit('transitionEnd')))
      : (n.setTransition(t),
        n.setTranslate(c),
        s && (n.emit('beforeTransitionStart', t, r), n.emit('transitionStart')),
        n.animating ||
          ((n.animating = !0),
          n.onTranslateToWrapperTransitionEnd ||
            (n.onTranslateToWrapperTransitionEnd = function (e) {
              !n ||
                n.destroyed ||
                (e.target === this &&
                  (n.wrapperEl.removeEventListener('transitionend', n.onTranslateToWrapperTransitionEnd),
                  (n.onTranslateToWrapperTransitionEnd = null),
                  delete n.onTranslateToWrapperTransitionEnd,
                  (n.animating = !1),
                  s && n.emit('transitionEnd')));
            }),
          n.wrapperEl.addEventListener('transitionend', n.onTranslateToWrapperTransitionEnd))),
    !0
  );
}
var tt = { getTranslate: Ke, setTranslate: Je, minTranslate: Qe, maxTranslate: Ze, translateTo: et };
function it(e, t) {
  const s = this;
  s.params.cssMode ||
    ((s.wrapperEl.style.transitionDuration = `${e}ms`), (s.wrapperEl.style.transitionDelay = 0 === e ? '0ms' : '')),
    s.emit('setTransition', e, t);
}
function ve(e) {
  let { swiper: t, runCallbacks: s, direction: i, step: r } = e;
  const { activeIndex: n, previousIndex: a } = t;
  let o = i;
  if ((o || (o = n > a ? 'next' : n < a ? 'prev' : 'reset'), t.emit(`transition${r}`), s && n !== a)) {
    if ('reset' === o) return void t.emit(`slideResetTransition${r}`);
    t.emit(`slideChangeTransition${r}`),
      'next' === o ? t.emit(`slideNextTransition${r}`) : t.emit(`slidePrevTransition${r}`);
  }
}
function st(e, t) {
  void 0 === e && (e = !0);
  const s = this,
    { params: i } = s;
  i.cssMode || (i.autoHeight && s.updateAutoHeight(), ve({ swiper: s, runCallbacks: e, direction: t, step: 'Start' }));
}
function rt(e, t) {
  void 0 === e && (e = !0);
  const s = this,
    { params: i } = s;
  (s.animating = !1), !i.cssMode && (s.setTransition(0), ve({ swiper: s, runCallbacks: e, direction: t, step: 'End' }));
}
var nt = { setTransition: it, transitionStart: st, transitionEnd: rt };
function at(e, t, s, i, r) {
  void 0 === e && (e = 0), void 0 === s && (s = !0), 'string' == typeof e && (e = parseInt(e, 10));
  const n = this;
  let a = e;
  a < 0 && (a = 0);
  const {
    params: o,
    snapGrid: l,
    slidesGrid: d,
    previousIndex: c,
    activeIndex: p,
    rtlTranslate: u,
    wrapperEl: f,
    enabled: m,
  } = n;
  if ((!m && !i && !r) || n.destroyed || (n.animating && o.preventInteractionOnTransition)) return !1;
  typeof t > 'u' && (t = n.params.speed);
  const h = Math.min(n.params.slidesPerGroupSkip, a);
  let v = h + Math.floor((a - h) / n.params.slidesPerGroup);
  v >= l.length && (v = l.length - 1);
  const g = -l[v];
  if (o.normalizeSlideIndex)
    for (let e = 0; e < d.length; e += 1) {
      const t = -Math.floor(100 * g),
        s = Math.floor(100 * d[e]),
        i = Math.floor(100 * d[e + 1]);
      typeof d[e + 1] < 'u'
        ? t >= s && t < i - (i - s) / 2
          ? (a = e)
          : t >= s && t < i && (a = e + 1)
        : t >= s && (a = e);
    }
  if (
    n.initialized &&
    a !== p &&
    ((!n.allowSlideNext && (u ? g > n.translate && g > n.minTranslate() : g < n.translate && g < n.minTranslate())) ||
      (!n.allowSlidePrev && g > n.translate && g > n.maxTranslate() && (p || 0) !== a))
  )
    return !1;
  let w;
  a !== (c || 0) && s && n.emit('beforeSlideChangeStart'),
    n.updateProgress(g),
    (w = a > p ? 'next' : a < p ? 'prev' : 'reset');
  const S = n.virtual && n.params.virtual.enabled;
  if ((!S || !r) && ((u && -g === n.translate) || (!u && g === n.translate)))
    return (
      n.updateActiveIndex(a),
      o.autoHeight && n.updateAutoHeight(),
      n.updateSlidesClasses(),
      'slide' !== o.effect && n.setTranslate(g),
      'reset' !== w && (n.transitionStart(s, w), n.transitionEnd(s, w)),
      !1
    );
  if (o.cssMode) {
    const e = n.isHorizontal(),
      s = u ? g : -g;
    if (0 === t)
      S && ((n.wrapperEl.style.scrollSnapType = 'none'), (n._immediateVirtual = !0)),
        S && !n._cssModeVirtualInitialSet && n.params.initialSlide > 0
          ? ((n._cssModeVirtualInitialSet = !0),
            requestAnimationFrame(() => {
              f[e ? 'scrollLeft' : 'scrollTop'] = s;
            }))
          : (f[e ? 'scrollLeft' : 'scrollTop'] = s),
        S &&
          requestAnimationFrame(() => {
            (n.wrapperEl.style.scrollSnapType = ''), (n._immediateVirtual = !1);
          });
    else {
      if (!n.support.smoothScroll) return me({ swiper: n, targetPosition: s, side: e ? 'left' : 'top' }), !0;
      f.scrollTo({ [e ? 'left' : 'top']: s, behavior: 'smooth' });
    }
    return !0;
  }
  return (
    n.setTransition(t),
    n.setTranslate(g),
    n.updateActiveIndex(a),
    n.updateSlidesClasses(),
    n.emit('beforeTransitionStart', t, i),
    n.transitionStart(s, w),
    0 === t
      ? n.transitionEnd(s, w)
      : n.animating ||
        ((n.animating = !0),
        n.onSlideToWrapperTransitionEnd ||
          (n.onSlideToWrapperTransitionEnd = function (e) {
            !n ||
              n.destroyed ||
              (e.target === this &&
                (n.wrapperEl.removeEventListener('transitionend', n.onSlideToWrapperTransitionEnd),
                (n.onSlideToWrapperTransitionEnd = null),
                delete n.onSlideToWrapperTransitionEnd,
                n.transitionEnd(s, w)));
          }),
        n.wrapperEl.addEventListener('transitionend', n.onSlideToWrapperTransitionEnd)),
    !0
  );
}
function ot(e, t, s, i) {
  void 0 === e && (e = 0), void 0 === s && (s = !0), 'string' == typeof e && (e = parseInt(e, 10));
  const r = this;
  if (r.destroyed) return;
  typeof t > 'u' && (t = r.params.speed);
  const n = r.grid && r.params.grid && r.params.grid.rows > 1;
  let a = e;
  if (r.params.loop)
    if (r.virtual && r.params.virtual.enabled) a += r.virtual.slidesBefore;
    else {
      let e;
      if (n) {
        const t = a * r.params.grid.rows;
        e = r.slides.filter((e) => 1 * e.getAttribute('data-swiper-slide-index') === t)[0].column;
      } else e = r.getSlideIndexByData(a);
      const t = n ? Math.ceil(r.slides.length / r.params.grid.rows) : r.slides.length,
        { centeredSlides: s } = r.params;
      let o = r.params.slidesPerView;
      'auto' === o
        ? (o = r.slidesPerViewDynamic())
        : ((o = Math.ceil(parseFloat(r.params.slidesPerView, 10))), s && o % 2 == 0 && (o += 1));
      let l = t - e < o;
      if ((s && (l = l || e < Math.ceil(o / 2)), i && s && 'auto' !== r.params.slidesPerView && !n && (l = !1), l)) {
        const i = s
          ? e < r.activeIndex
            ? 'prev'
            : 'next'
          : e - r.activeIndex - 1 < r.params.slidesPerView
            ? 'next'
            : 'prev';
        r.loopFix({
          direction: i,
          slideTo: !0,
          activeSlideIndex: 'next' === i ? e + 1 : e - t + 1,
          slideRealIndex: 'next' === i ? r.realIndex : void 0,
        });
      }
      if (n) {
        const e = a * r.params.grid.rows;
        a = r.slides.filter((t) => 1 * t.getAttribute('data-swiper-slide-index') === e)[0].column;
      } else a = r.getSlideIndexByData(a);
    }
  return (
    requestAnimationFrame(() => {
      r.slideTo(a, t, s, i);
    }),
    r
  );
}
function lt(e, t, s) {
  void 0 === t && (t = !0);
  const i = this,
    { enabled: r, params: n, animating: a } = i;
  if (!r || i.destroyed) return i;
  typeof e > 'u' && (e = i.params.speed);
  let o = n.slidesPerGroup;
  'auto' === n.slidesPerView &&
    1 === n.slidesPerGroup &&
    n.slidesPerGroupAuto &&
    (o = Math.max(i.slidesPerViewDynamic('current', !0), 1));
  const l = i.activeIndex < n.slidesPerGroupSkip ? 1 : o,
    d = i.virtual && n.virtual.enabled;
  if (n.loop) {
    if (a && !d && n.loopPreventsSliding) return !1;
    if (
      (i.loopFix({ direction: 'next' }),
      (i._clientLeft = i.wrapperEl.clientLeft),
      i.activeIndex === i.slides.length - 1 && n.cssMode)
    )
      return (
        requestAnimationFrame(() => {
          i.slideTo(i.activeIndex + l, e, t, s);
        }),
        !0
      );
  }
  return n.rewind && i.isEnd ? i.slideTo(0, e, t, s) : i.slideTo(i.activeIndex + l, e, t, s);
}
function dt(e, t, s) {
  void 0 === t && (t = !0);
  const i = this,
    { params: r, snapGrid: n, slidesGrid: a, rtlTranslate: o, enabled: l, animating: d } = i;
  if (!l || i.destroyed) return i;
  typeof e > 'u' && (e = i.params.speed);
  const c = i.virtual && r.virtual.enabled;
  if (r.loop) {
    if (d && !c && r.loopPreventsSliding) return !1;
    i.loopFix({ direction: 'prev' }), (i._clientLeft = i.wrapperEl.clientLeft);
  }
  function p(e) {
    return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
  }
  const u = p(o ? i.translate : -i.translate),
    f = n.map((e) => p(e));
  let m = n[f.indexOf(u) - 1];
  if (typeof m > 'u' && r.cssMode) {
    let e;
    n.forEach((t, s) => {
      u >= t && (e = s);
    }),
      typeof e < 'u' && (m = n[e > 0 ? e - 1 : e]);
  }
  let h = 0;
  if (
    (typeof m < 'u' &&
      ((h = a.indexOf(m)),
      h < 0 && (h = i.activeIndex - 1),
      'auto' === r.slidesPerView &&
        1 === r.slidesPerGroup &&
        r.slidesPerGroupAuto &&
        ((h = h - i.slidesPerViewDynamic('previous', !0) + 1), (h = Math.max(h, 0)))),
    r.rewind && i.isBeginning)
  ) {
    const r =
      i.params.virtual && i.params.virtual.enabled && i.virtual ? i.virtual.slides.length - 1 : i.slides.length - 1;
    return i.slideTo(r, e, t, s);
  }
  return r.loop && 0 === i.activeIndex && r.cssMode
    ? (requestAnimationFrame(() => {
        i.slideTo(h, e, t, s);
      }),
      !0)
    : i.slideTo(h, e, t, s);
}
function ct(e, t, s) {
  void 0 === t && (t = !0);
  const i = this;
  if (!i.destroyed) return typeof e > 'u' && (e = i.params.speed), i.slideTo(i.activeIndex, e, t, s);
}
function ft(e, t, s, i) {
  void 0 === t && (t = !0), void 0 === i && (i = 0.5);
  const r = this;
  if (r.destroyed) return;
  typeof e > 'u' && (e = r.params.speed);
  let n = r.activeIndex;
  const a = Math.min(r.params.slidesPerGroupSkip, n),
    o = a + Math.floor((n - a) / r.params.slidesPerGroup),
    l = r.rtlTranslate ? r.translate : -r.translate;
  if (l >= r.snapGrid[o]) {
    const e = r.snapGrid[o];
    l - e > (r.snapGrid[o + 1] - e) * i && (n += r.params.slidesPerGroup);
  } else {
    const e = r.snapGrid[o - 1];
    l - e <= (r.snapGrid[o] - e) * i && (n -= r.params.slidesPerGroup);
  }
  return (n = Math.max(n, 0)), (n = Math.min(n, r.slidesGrid.length - 1)), r.slideTo(n, e, t, s);
}
function ut() {
  const e = this;
  if (e.destroyed) return;
  const { params: t, slidesEl: s } = e,
    i = 'auto' === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
  let r,
    n = e.clickedIndex;
  const a = e.isElement ? 'swiper-slide' : `.${t.slideClass}`;
  if (t.loop) {
    if (e.animating) return;
    (r = parseInt(e.clickedSlide.getAttribute('data-swiper-slide-index'), 10)),
      t.centeredSlides
        ? n < e.loopedSlides - i / 2 || n > e.slides.length - e.loopedSlides + i / 2
          ? (e.loopFix(),
            (n = e.getSlideIndex(k(s, `${a}[data-swiper-slide-index="${r}"]`)[0])),
            Z(() => {
              e.slideTo(n);
            }))
          : e.slideTo(n)
        : n > e.slides.length - i
          ? (e.loopFix(),
            (n = e.getSlideIndex(k(s, `${a}[data-swiper-slide-index="${r}"]`)[0])),
            Z(() => {
              e.slideTo(n);
            }))
          : e.slideTo(n);
  } else e.slideTo(n);
}
var pt = {
  slideTo: at,
  slideToLoop: ot,
  slideNext: lt,
  slidePrev: dt,
  slideReset: ct,
  slideToClosest: ft,
  slideToClickedSlide: ut,
};
function mt(e) {
  const t = this,
    { params: s, slidesEl: i } = t;
  if (!s.loop || (t.virtual && t.params.virtual.enabled)) return;
  const r = () => {
      k(i, `.${s.slideClass}, swiper-slide`).forEach((e, t) => {
        e.setAttribute('data-swiper-slide-index', t);
      });
    },
    n = t.grid && s.grid && s.grid.rows > 1,
    a = s.slidesPerGroup * (n ? s.grid.rows : 1),
    o = t.slides.length % a != 0,
    l = n && t.slides.length % s.grid.rows != 0,
    d = (e) => {
      for (let i = 0; i < e; i += 1) {
        const e = t.isElement ? j('swiper-slide', [s.slideBlankClass]) : j('div', [s.slideClass, s.slideBlankClass]);
        t.slidesEl.append(e);
      }
    };
  if (o) {
    if (s.loopAddBlankSlides) {
      d(a - (t.slides.length % a)), t.recalcSlides(), t.updateSlides();
    } else
      W(
        'Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)'
      );
    r();
  } else if (l) {
    if (s.loopAddBlankSlides) {
      d(s.grid.rows - (t.slides.length % s.grid.rows)), t.recalcSlides(), t.updateSlides();
    } else
      W(
        'Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)'
      );
    r();
  } else r();
  t.loopFix({ slideRealIndex: e, direction: s.centeredSlides ? void 0 : 'next' });
}
function ht(e) {
  let {
    slideRealIndex: t,
    slideTo: s = !0,
    direction: i,
    setTranslate: r,
    activeSlideIndex: n,
    byController: a,
    byMousewheel: o,
  } = void 0 === e ? {} : e;
  const l = this;
  if (!l.params.loop) return;
  l.emit('beforeLoopFix');
  const { slides: d, allowSlidePrev: c, allowSlideNext: p, slidesEl: u, params: f } = l,
    { centeredSlides: m } = f;
  if (((l.allowSlidePrev = !0), (l.allowSlideNext = !0), l.virtual && f.virtual.enabled))
    return (
      s &&
        (f.centeredSlides || 0 !== l.snapIndex
          ? f.centeredSlides && l.snapIndex < f.slidesPerView
            ? l.slideTo(l.virtual.slides.length + l.snapIndex, 0, !1, !0)
            : l.snapIndex === l.snapGrid.length - 1 && l.slideTo(l.virtual.slidesBefore, 0, !1, !0)
          : l.slideTo(l.virtual.slides.length, 0, !1, !0)),
      (l.allowSlidePrev = c),
      (l.allowSlideNext = p),
      void l.emit('loopFix')
    );
  let h = f.slidesPerView;
  'auto' === h
    ? (h = l.slidesPerViewDynamic())
    : ((h = Math.ceil(parseFloat(f.slidesPerView, 10))), m && h % 2 == 0 && (h += 1));
  const v = f.slidesPerGroupAuto ? h : f.slidesPerGroup;
  let g = v;
  g % v != 0 && (g += v - (g % v)), (g += f.loopAdditionalSlides), (l.loopedSlides = g);
  const w = l.grid && f.grid && f.grid.rows > 1;
  d.length < h + g
    ? W(
        'Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters'
      )
    : w && 'row' === f.grid.fill && W('Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`');
  const S = [],
    T = [];
  let b = l.activeIndex;
  typeof n > 'u' ? (n = l.getSlideIndex(d.filter((e) => e.classList.contains(f.slideActiveClass))[0])) : (b = n);
  const y = 'next' === i || !i,
    x = 'prev' === i || !i;
  let E = 0,
    M = 0;
  const C = w ? Math.ceil(d.length / f.grid.rows) : d.length,
    P = (w ? d[n].column : n) + (m && typeof r > 'u' ? -h / 2 + 0.5 : 0);
  if (P < g) {
    E = Math.max(g - P, v);
    for (let e = 0; e < g - P; e += 1) {
      const t = e - Math.floor(e / C) * C;
      if (w) {
        const e = C - t - 1;
        for (let t = d.length - 1; t >= 0; t -= 1) d[t].column === e && S.push(t);
      } else S.push(C - t - 1);
    }
  } else if (P + h > C - g) {
    M = Math.max(P - (C - 2 * g), v);
    for (let e = 0; e < M; e += 1) {
      const t = e - Math.floor(e / C) * C;
      w
        ? d.forEach((e, s) => {
            e.column === t && T.push(s);
          })
        : T.push(t);
    }
  }
  if (
    ((l.__preventObserver__ = !0),
    requestAnimationFrame(() => {
      l.__preventObserver__ = !1;
    }),
    x &&
      S.forEach((e) => {
        (d[e].swiperLoopMoveDOM = !0), u.prepend(d[e]), (d[e].swiperLoopMoveDOM = !1);
      }),
    y &&
      T.forEach((e) => {
        (d[e].swiperLoopMoveDOM = !0), u.append(d[e]), (d[e].swiperLoopMoveDOM = !1);
      }),
    l.recalcSlides(),
    'auto' === f.slidesPerView
      ? l.updateSlides()
      : w &&
        ((S.length > 0 && x) || (T.length > 0 && y)) &&
        l.slides.forEach((e, t) => {
          l.grid.updateSlide(t, e, l.slides);
        }),
    f.watchSlidesProgress && l.updateSlidesOffset(),
    s)
  )
    if (S.length > 0 && x) {
      if (typeof t > 'u') {
        const e = l.slidesGrid[b],
          t = l.slidesGrid[b + E] - e;
        o
          ? l.setTranslate(l.translate - t)
          : (l.slideTo(b + Math.ceil(E), 0, !1, !0),
            r &&
              ((l.touchEventsData.startTranslate = l.touchEventsData.startTranslate - t),
              (l.touchEventsData.currentTranslate = l.touchEventsData.currentTranslate - t)));
      } else if (r) {
        const e = w ? S.length / f.grid.rows : S.length;
        l.slideTo(l.activeIndex + e, 0, !1, !0), (l.touchEventsData.currentTranslate = l.translate);
      }
    } else if (T.length > 0 && y)
      if (typeof t > 'u') {
        const e = l.slidesGrid[b],
          t = l.slidesGrid[b - M] - e;
        o
          ? l.setTranslate(l.translate - t)
          : (l.slideTo(b - M, 0, !1, !0),
            r &&
              ((l.touchEventsData.startTranslate = l.touchEventsData.startTranslate - t),
              (l.touchEventsData.currentTranslate = l.touchEventsData.currentTranslate - t)));
      } else {
        const e = w ? T.length / f.grid.rows : T.length;
        l.slideTo(l.activeIndex - e, 0, !1, !0);
      }
  if (((l.allowSlidePrev = c), (l.allowSlideNext = p), l.controller && l.controller.control && !a)) {
    const e = { slideRealIndex: t, direction: i, setTranslate: r, activeSlideIndex: n, byController: !0 };
    Array.isArray(l.controller.control)
      ? l.controller.control.forEach((t) => {
          !t.destroyed &&
            t.params.loop &&
            t.loopFix({ ...e, slideTo: t.params.slidesPerView === f.slidesPerView && s });
        })
      : l.controller.control instanceof l.constructor &&
        l.controller.control.params.loop &&
        l.controller.control.loopFix({
          ...e,
          slideTo: l.controller.control.params.slidesPerView === f.slidesPerView && s,
        });
  }
  l.emit('loopFix');
}
function gt() {
  const e = this,
    { params: t, slidesEl: s } = e;
  if (!t.loop || (e.virtual && e.params.virtual.enabled)) return;
  e.recalcSlides();
  const i = [];
  e.slides.forEach((e) => {
    const t = typeof e.swiperSlideIndex > 'u' ? 1 * e.getAttribute('data-swiper-slide-index') : e.swiperSlideIndex;
    i[t] = e;
  }),
    e.slides.forEach((e) => {
      e.removeAttribute('data-swiper-slide-index');
    }),
    i.forEach((e) => {
      s.append(e);
    }),
    e.recalcSlides(),
    e.slideTo(e.realIndex, 0);
}
var vt = { loopCreate: mt, loopFix: ht, loopDestroy: gt };
function wt(e) {
  const t = this;
  if (!t.params.simulateTouch || (t.params.watchOverflow && t.isLocked) || t.params.cssMode) return;
  const s = 'container' === t.params.touchEventsTarget ? t.el : t.wrapperEl;
  t.isElement && (t.__preventObserver__ = !0),
    (s.style.cursor = 'move'),
    (s.style.cursor = e ? 'grabbing' : 'grab'),
    t.isElement &&
      requestAnimationFrame(() => {
        t.__preventObserver__ = !1;
      });
}
function St() {
  const e = this;
  (e.params.watchOverflow && e.isLocked) ||
    e.params.cssMode ||
    (e.isElement && (e.__preventObserver__ = !0),
    (e['container' === e.params.touchEventsTarget ? 'el' : 'wrapperEl'].style.cursor = ''),
    e.isElement &&
      requestAnimationFrame(() => {
        e.__preventObserver__ = !1;
      }));
}
var Tt = { setGrabCursor: wt, unsetGrabCursor: St };
function xt(e, t) {
  return (
    void 0 === t && (t = this),
    (function t(s) {
      if (!s || s === N() || s === z()) return null;
      s.assignedSlot && (s = s.assignedSlot);
      const i = s.closest(e);
      return i || s.getRootNode ? i || t(s.getRootNode().host) : null;
    })(t)
  );
}
function de(e, t, s) {
  const i = z(),
    { params: r } = e,
    n = r.edgeSwipeDetection,
    a = r.edgeSwipeThreshold;
  return !n || !(s <= a || s >= i.innerWidth - a) || ('prevent' === n && (t.preventDefault(), !0));
}
function bt(e) {
  const t = this,
    s = N();
  let i = e;
  i.originalEvent && (i = i.originalEvent);
  const r = t.touchEventsData;
  if ('pointerdown' === i.type) {
    if (null !== r.pointerId && r.pointerId !== i.pointerId) return;
    r.pointerId = i.pointerId;
  } else 'touchstart' === i.type && 1 === i.targetTouches.length && (r.touchId = i.targetTouches[0].identifier);
  if ('touchstart' === i.type) return void de(t, i, i.targetTouches[0].pageX);
  const { params: n, touches: a, enabled: o } = t;
  if (!o || (!n.simulateTouch && 'mouse' === i.pointerType) || (t.animating && n.preventInteractionOnTransition))
    return;
  !t.animating && n.cssMode && n.loop && t.loopFix();
  let l = i.target;
  if (
    ('wrapper' === n.touchEventsTarget && !Ie(l, t.wrapperEl)) ||
    ('which' in i && 3 === i.which) ||
    ('button' in i && i.button > 0) ||
    (r.isTouched && r.isMoved)
  )
    return;
  const d = !!n.noSwipingClass && '' !== n.noSwipingClass,
    c = i.composedPath ? i.composedPath() : i.path;
  d && i.target && i.target.shadowRoot && c && (l = c[0]);
  const p = n.noSwipingSelector ? n.noSwipingSelector : `.${n.noSwipingClass}`,
    u = !(!i.target || !i.target.shadowRoot);
  if (n.noSwiping && (u ? xt(p, l) : l.closest(p))) return void (t.allowClick = !0);
  if (n.swipeHandler && !l.closest(n.swipeHandler)) return;
  (a.currentX = i.pageX), (a.currentY = i.pageY);
  const f = a.currentX,
    m = a.currentY;
  if (!de(t, i, f)) return;
  Object.assign(r, { isTouched: !0, isMoved: !1, allowTouchCallbacks: !0, isScrolling: void 0, startMoving: void 0 }),
    (a.startX = f),
    (a.startY = m),
    (r.touchStartTime = R()),
    (t.allowClick = !0),
    t.updateSize(),
    (t.swipeDirection = void 0),
    n.threshold > 0 && (r.allowThresholdMove = !1);
  let h = !0;
  l.matches(r.focusableElements) && ((h = !1), 'SELECT' === l.nodeName && (r.isTouched = !1)),
    s.activeElement &&
      s.activeElement.matches(r.focusableElements) &&
      s.activeElement !== l &&
      ('mouse' === i.pointerType || ('mouse' !== i.pointerType && !l.matches(r.focusableElements))) &&
      s.activeElement.blur();
  const v = h && t.allowTouchMove && n.touchStartPreventDefault;
  (n.touchStartForcePreventDefault || v) && !l.isContentEditable && i.preventDefault(),
    n.freeMode && n.freeMode.enabled && t.freeMode && t.animating && !n.cssMode && t.freeMode.onTouchStart(),
    t.emit('touchStart', i);
}
function yt(e) {
  const t = N(),
    s = this,
    i = s.touchEventsData,
    { params: r, touches: n, rtlTranslate: a, enabled: o } = s;
  if (!o || (!r.simulateTouch && 'mouse' === e.pointerType)) return;
  let l,
    d = e;
  if (
    (d.originalEvent && (d = d.originalEvent),
    'pointermove' === d.type && (null !== i.touchId || d.pointerId !== i.pointerId))
  )
    return;
  if ('touchmove' === d.type) {
    if (((l = [...d.changedTouches].filter((e) => e.identifier === i.touchId)[0]), !l || l.identifier !== i.touchId))
      return;
  } else l = d;
  if (!i.isTouched) return void (i.startMoving && i.isScrolling && s.emit('touchMoveOpposite', d));
  const c = l.pageX,
    p = l.pageY;
  if (d.preventedByNestedSwiper) return (n.startX = c), void (n.startY = p);
  if (!s.allowTouchMove)
    return (
      d.target.matches(i.focusableElements) || (s.allowClick = !1),
      void (
        i.isTouched && (Object.assign(n, { startX: c, startY: p, currentX: c, currentY: p }), (i.touchStartTime = R()))
      )
    );
  if (r.touchReleaseOnEdges && !r.loop)
    if (s.isVertical()) {
      if ((p < n.startY && s.translate <= s.maxTranslate()) || (p > n.startY && s.translate >= s.minTranslate()))
        return (i.isTouched = !1), void (i.isMoved = !1);
    } else if ((c < n.startX && s.translate <= s.maxTranslate()) || (c > n.startX && s.translate >= s.minTranslate()))
      return;
  if (
    (t.activeElement &&
      t.activeElement.matches(i.focusableElements) &&
      t.activeElement !== d.target &&
      'mouse' !== d.pointerType &&
      t.activeElement.blur(),
    t.activeElement && d.target === t.activeElement && d.target.matches(i.focusableElements))
  )
    return (i.isMoved = !0), void (s.allowClick = !1);
  i.allowTouchCallbacks && s.emit('touchMove', d),
    (n.previousX = n.currentX),
    (n.previousY = n.currentY),
    (n.currentX = c),
    (n.currentY = p);
  const u = n.currentX - n.startX,
    f = n.currentY - n.startY;
  if (s.params.threshold && Math.sqrt(u ** 2 + f ** 2) < s.params.threshold) return;
  if (typeof i.isScrolling > 'u') {
    let e;
    (s.isHorizontal() && n.currentY === n.startY) || (s.isVertical() && n.currentX === n.startX)
      ? (i.isScrolling = !1)
      : u * u + f * f >= 25 &&
        ((e = (180 * Math.atan2(Math.abs(f), Math.abs(u))) / Math.PI),
        (i.isScrolling = s.isHorizontal() ? e > r.touchAngle : 90 - e > r.touchAngle));
  }
  if (
    (i.isScrolling && s.emit('touchMoveOpposite', d),
    typeof i.startMoving > 'u' && (n.currentX !== n.startX || n.currentY !== n.startY) && (i.startMoving = !0),
    i.isScrolling || ('touchmove' === d.type && i.preventTouchMoveFromPointerMove))
  )
    return void (i.isTouched = !1);
  if (!i.startMoving) return;
  (s.allowClick = !1),
    !r.cssMode && d.cancelable && d.preventDefault(),
    r.touchMoveStopPropagation && !r.nested && d.stopPropagation();
  let m = s.isHorizontal() ? u : f,
    h = s.isHorizontal() ? n.currentX - n.previousX : n.currentY - n.previousY;
  r.oneWayMovement && ((m = Math.abs(m) * (a ? 1 : -1)), (h = Math.abs(h) * (a ? 1 : -1))),
    (n.diff = m),
    (m *= r.touchRatio),
    a && ((m = -m), (h = -h));
  const v = s.touchesDirection;
  (s.swipeDirection = m > 0 ? 'prev' : 'next'), (s.touchesDirection = h > 0 ? 'prev' : 'next');
  const g = s.params.loop && !r.cssMode,
    w = ('next' === s.touchesDirection && s.allowSlideNext) || ('prev' === s.touchesDirection && s.allowSlidePrev);
  if (!i.isMoved) {
    if (
      (g && w && s.loopFix({ direction: s.swipeDirection }),
      (i.startTranslate = s.getTranslate()),
      s.setTransition(0),
      s.animating)
    ) {
      const e = new window.CustomEvent('transitionend', {
        bubbles: !0,
        cancelable: !0,
        detail: { bySwiperTouchMove: !0 },
      });
      s.wrapperEl.dispatchEvent(e);
    }
    (i.allowMomentumBounce = !1),
      r.grabCursor && (!0 === s.allowSlideNext || !0 === s.allowSlidePrev) && s.setGrabCursor(!0),
      s.emit('sliderFirstMove', d);
  }
  if (
    (new Date().getTime(), i.isMoved && i.allowThresholdMove && v !== s.touchesDirection && g && w && Math.abs(m) >= 1)
  )
    return (
      Object.assign(n, { startX: c, startY: p, currentX: c, currentY: p, startTranslate: i.currentTranslate }),
      (i.loopSwapReset = !0),
      void (i.startTranslate = i.currentTranslate)
    );
  s.emit('sliderMove', d), (i.isMoved = !0), (i.currentTranslate = m + i.startTranslate);
  let S = !0,
    T = r.resistanceRatio;
  if (
    (r.touchReleaseOnEdges && (T = 0),
    m > 0
      ? (g &&
          w &&
          i.allowThresholdMove &&
          i.currentTranslate >
            (r.centeredSlides
              ? s.minTranslate() -
                s.slidesSizesGrid[s.activeIndex + 1] -
                ('auto' !== r.slidesPerView && s.slides.length - r.slidesPerView >= 2
                  ? s.slidesSizesGrid[s.activeIndex + 1] + s.params.spaceBetween
                  : 0) -
                s.params.spaceBetween
              : s.minTranslate()) &&
          s.loopFix({ direction: 'prev', setTranslate: !0, activeSlideIndex: 0 }),
        i.currentTranslate > s.minTranslate() &&
          ((S = !1),
          r.resistance &&
            (i.currentTranslate = s.minTranslate() - 1 + (-s.minTranslate() + i.startTranslate + m) ** T)))
      : m < 0 &&
        (g &&
          w &&
          i.allowThresholdMove &&
          i.currentTranslate <
            (r.centeredSlides
              ? s.maxTranslate() +
                s.slidesSizesGrid[s.slidesSizesGrid.length - 1] +
                s.params.spaceBetween +
                ('auto' !== r.slidesPerView && s.slides.length - r.slidesPerView >= 2
                  ? s.slidesSizesGrid[s.slidesSizesGrid.length - 1] + s.params.spaceBetween
                  : 0)
              : s.maxTranslate()) &&
          s.loopFix({
            direction: 'next',
            setTranslate: !0,
            activeSlideIndex:
              s.slides.length -
              ('auto' === r.slidesPerView ? s.slidesPerViewDynamic() : Math.ceil(parseFloat(r.slidesPerView, 10))),
          }),
        i.currentTranslate < s.maxTranslate() &&
          ((S = !1),
          r.resistance &&
            (i.currentTranslate = s.maxTranslate() + 1 - (s.maxTranslate() - i.startTranslate - m) ** T))),
    S && (d.preventedByNestedSwiper = !0),
    !s.allowSlideNext &&
      'next' === s.swipeDirection &&
      i.currentTranslate < i.startTranslate &&
      (i.currentTranslate = i.startTranslate),
    !s.allowSlidePrev &&
      'prev' === s.swipeDirection &&
      i.currentTranslate > i.startTranslate &&
      (i.currentTranslate = i.startTranslate),
    !s.allowSlidePrev && !s.allowSlideNext && (i.currentTranslate = i.startTranslate),
    r.threshold > 0)
  ) {
    if (!(Math.abs(m) > r.threshold || i.allowThresholdMove)) return void (i.currentTranslate = i.startTranslate);
    if (!i.allowThresholdMove)
      return (
        (i.allowThresholdMove = !0),
        (n.startX = n.currentX),
        (n.startY = n.currentY),
        (i.currentTranslate = i.startTranslate),
        void (n.diff = s.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY)
      );
  }
  !r.followFinger ||
    r.cssMode ||
    (((r.freeMode && r.freeMode.enabled && s.freeMode) || r.watchSlidesProgress) &&
      (s.updateActiveIndex(), s.updateSlidesClasses()),
    r.freeMode && r.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(),
    s.updateProgress(i.currentTranslate),
    s.setTranslate(i.currentTranslate));
}
function Et(e) {
  const t = this,
    s = t.touchEventsData;
  let i,
    r = e;
  if ((r.originalEvent && (r = r.originalEvent), 'touchend' === r.type || 'touchcancel' === r.type)) {
    if (((i = [...r.changedTouches].filter((e) => e.identifier === s.touchId)[0]), !i || i.identifier !== s.touchId))
      return;
  } else {
    if (null !== s.touchId || r.pointerId !== s.pointerId) return;
    i = r;
  }
  if (
    ['pointercancel', 'pointerout', 'pointerleave', 'contextmenu'].includes(r.type) &&
    (!['pointercancel', 'contextmenu'].includes(r.type) || (!t.browser.isSafari && !t.browser.isWebView))
  )
    return;
  (s.pointerId = null), (s.touchId = null);
  const { params: n, touches: a, rtlTranslate: o, slidesGrid: l, enabled: d } = t;
  if (!d || (!n.simulateTouch && 'mouse' === r.pointerType)) return;
  if ((s.allowTouchCallbacks && t.emit('touchEnd', r), (s.allowTouchCallbacks = !1), !s.isTouched))
    return s.isMoved && n.grabCursor && t.setGrabCursor(!1), (s.isMoved = !1), void (s.startMoving = !1);
  n.grabCursor &&
    s.isMoved &&
    s.isTouched &&
    (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
    t.setGrabCursor(!1);
  const c = R(),
    p = c - s.touchStartTime;
  if (t.allowClick) {
    const e = r.path || (r.composedPath && r.composedPath());
    t.updateClickedSlide((e && e[0]) || r.target, e),
      t.emit('tap click', r),
      p < 300 && c - s.lastClickTime < 300 && t.emit('doubleTap doubleClick', r);
  }
  if (
    ((s.lastClickTime = R()),
    Z(() => {
      t.destroyed || (t.allowClick = !0);
    }),
    !s.isTouched ||
      !s.isMoved ||
      !t.swipeDirection ||
      (0 === a.diff && !s.loopSwapReset) ||
      (s.currentTranslate === s.startTranslate && !s.loopSwapReset))
  )
    return (s.isTouched = !1), (s.isMoved = !1), void (s.startMoving = !1);
  let u;
  if (
    ((s.isTouched = !1),
    (s.isMoved = !1),
    (s.startMoving = !1),
    (u = n.followFinger ? (o ? t.translate : -t.translate) : -s.currentTranslate),
    n.cssMode)
  )
    return;
  if (n.freeMode && n.freeMode.enabled) return void t.freeMode.onTouchEnd({ currentPos: u });
  const f = u >= -t.maxTranslate() && !t.params.loop;
  let m = 0,
    h = t.slidesSizesGrid[0];
  for (let e = 0; e < l.length; e += e < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup) {
    const t = e < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
    typeof l[e + t] < 'u'
      ? (f || (u >= l[e] && u < l[e + t])) && ((m = e), (h = l[e + t] - l[e]))
      : (f || u >= l[e]) && ((m = e), (h = l[l.length - 1] - l[l.length - 2]));
  }
  let v = null,
    g = null;
  n.rewind &&
    (t.isBeginning
      ? (g = n.virtual && n.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1)
      : t.isEnd && (v = 0));
  const w = (u - l[m]) / h,
    S = m < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
  if (p > n.longSwipesMs) {
    if (!n.longSwipes) return void t.slideTo(t.activeIndex);
    'next' === t.swipeDirection && (w >= n.longSwipesRatio ? t.slideTo(n.rewind && t.isEnd ? v : m + S) : t.slideTo(m)),
      'prev' === t.swipeDirection &&
        (w > 1 - n.longSwipesRatio
          ? t.slideTo(m + S)
          : null !== g && w < 0 && Math.abs(w) > n.longSwipesRatio
            ? t.slideTo(g)
            : t.slideTo(m));
  } else {
    if (!n.shortSwipes) return void t.slideTo(t.activeIndex);
    !t.navigation || (r.target !== t.navigation.nextEl && r.target !== t.navigation.prevEl)
      ? ('next' === t.swipeDirection && t.slideTo(null !== v ? v : m + S),
        'prev' === t.swipeDirection && t.slideTo(null !== g ? g : m))
      : r.target === t.navigation.nextEl
        ? t.slideTo(m + S)
        : t.slideTo(m);
  }
}
function ce() {
  const e = this,
    { params: t, el: s } = e;
  if (s && 0 === s.offsetWidth) return;
  t.breakpoints && e.setBreakpoint();
  const { allowSlideNext: i, allowSlidePrev: r, snapGrid: n } = e,
    a = e.virtual && e.params.virtual.enabled;
  (e.allowSlideNext = !0), (e.allowSlidePrev = !0), e.updateSize(), e.updateSlides(), e.updateSlidesClasses();
  const o = a && t.loop;
  !('auto' === t.slidesPerView || t.slidesPerView > 1) || !e.isEnd || e.isBeginning || e.params.centeredSlides || o
    ? e.params.loop && !a
      ? e.slideToLoop(e.realIndex, 0, !1, !0)
      : e.slideTo(e.activeIndex, 0, !1, !0)
    : e.slideTo(e.slides.length - 1, 0, !1, !0),
    e.autoplay &&
      e.autoplay.running &&
      e.autoplay.paused &&
      (clearTimeout(e.autoplay.resizeTimeout),
      (e.autoplay.resizeTimeout = setTimeout(() => {
        e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume();
      }, 500))),
    (e.allowSlidePrev = r),
    (e.allowSlideNext = i),
    e.params.watchOverflow && n !== e.snapGrid && e.checkOverflow();
}
function Pt(e) {
  const t = this;
  t.enabled &&
    (t.allowClick ||
      (t.params.preventClicks && e.preventDefault(),
      t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())));
}
function Mt() {
  const e = this,
    { wrapperEl: t, rtlTranslate: s, enabled: i } = e;
  if (!i) return;
  let r;
  (e.previousTranslate = e.translate),
    e.isHorizontal() ? (e.translate = -t.scrollLeft) : (e.translate = -t.scrollTop),
    0 === e.translate && (e.translate = 0),
    e.updateActiveIndex(),
    e.updateSlidesClasses();
  const n = e.maxTranslate() - e.minTranslate();
  (r = 0 === n ? 0 : (e.translate - e.minTranslate()) / n),
    r !== e.progress && e.updateProgress(s ? -e.translate : e.translate),
    e.emit('setTranslate', e.translate, !1);
}
function Ct(e) {
  const t = this;
  H(t, e.target), !t.params.cssMode && ('auto' === t.params.slidesPerView || t.params.autoHeight) && t.update();
}
function It() {
  const e = this;
  e.documentTouchHandlerProceeded ||
    ((e.documentTouchHandlerProceeded = !0), e.params.touchReleaseOnEdges && (e.el.style.touchAction = 'auto'));
}
const we = (e, t) => {
  const s = N(),
    { params: i, el: r, wrapperEl: n, device: a } = e,
    o = !!i.nested,
    l = 'on' === t ? 'addEventListener' : 'removeEventListener',
    d = t;
  !r ||
    'string' == typeof r ||
    (s[l]('touchstart', e.onDocumentTouchStart, { passive: !1, capture: o }),
    r[l]('touchstart', e.onTouchStart, { passive: !1 }),
    r[l]('pointerdown', e.onTouchStart, { passive: !1 }),
    s[l]('touchmove', e.onTouchMove, { passive: !1, capture: o }),
    s[l]('pointermove', e.onTouchMove, { passive: !1, capture: o }),
    s[l]('touchend', e.onTouchEnd, { passive: !0 }),
    s[l]('pointerup', e.onTouchEnd, { passive: !0 }),
    s[l]('pointercancel', e.onTouchEnd, { passive: !0 }),
    s[l]('touchcancel', e.onTouchEnd, { passive: !0 }),
    s[l]('pointerout', e.onTouchEnd, { passive: !0 }),
    s[l]('pointerleave', e.onTouchEnd, { passive: !0 }),
    s[l]('contextmenu', e.onTouchEnd, { passive: !0 }),
    (i.preventClicks || i.preventClicksPropagation) && r[l]('click', e.onClick, !0),
    i.cssMode && n[l]('scroll', e.onScroll),
    i.updateOnWindowResize
      ? e[d](a.ios || a.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', ce, !0)
      : e[d]('observerUpdate', ce, !0),
    r[l]('load', e.onLoad, { capture: !0 }));
};
function Lt() {
  const e = this,
    { params: t } = e;
  (e.onTouchStart = bt.bind(e)),
    (e.onTouchMove = yt.bind(e)),
    (e.onTouchEnd = Et.bind(e)),
    (e.onDocumentTouchStart = It.bind(e)),
    t.cssMode && (e.onScroll = Mt.bind(e)),
    (e.onClick = Pt.bind(e)),
    (e.onLoad = Ct.bind(e)),
    we(e, 'on');
}
function Ot() {
  we(this, 'off');
}
var zt = { attachEvents: Lt, detachEvents: Ot };
const fe = (e, t) => e.grid && t.grid && t.grid.rows > 1;
function At() {
  const e = this,
    { realIndex: t, initialized: s, params: i, el: r } = e,
    n = i.breakpoints;
  if (!n || (n && 0 === Object.keys(n).length)) return;
  const a = e.getBreakpoint(n, e.params.breakpointsBase, e.el);
  if (!a || e.currentBreakpoint === a) return;
  const o = (a in n ? n[a] : void 0) || e.originalParams,
    l = fe(e, i),
    d = fe(e, o),
    c = e.params.grabCursor,
    p = o.grabCursor,
    u = i.enabled;
  l && !d
    ? (r.classList.remove(`${i.containerModifierClass}grid`, `${i.containerModifierClass}grid-column`),
      e.emitContainerClasses())
    : !l &&
      d &&
      (r.classList.add(`${i.containerModifierClass}grid`),
      ((o.grid.fill && 'column' === o.grid.fill) || (!o.grid.fill && 'column' === i.grid.fill)) &&
        r.classList.add(`${i.containerModifierClass}grid-column`),
      e.emitContainerClasses()),
    c && !p ? e.unsetGrabCursor() : !c && p && e.setGrabCursor(),
    ['navigation', 'pagination', 'scrollbar'].forEach((t) => {
      if (typeof o[t] > 'u') return;
      const s = i[t] && i[t].enabled,
        r = o[t] && o[t].enabled;
      s && !r && e[t].disable(), !s && r && e[t].enable();
    });
  const f = o.direction && o.direction !== i.direction,
    m = i.loop && (o.slidesPerView !== i.slidesPerView || f),
    h = i.loop;
  f && s && e.changeDirection(), O(e.params, o);
  const v = e.params.enabled,
    g = e.params.loop;
  Object.assign(e, {
    allowTouchMove: e.params.allowTouchMove,
    allowSlideNext: e.params.allowSlideNext,
    allowSlidePrev: e.params.allowSlidePrev,
  }),
    u && !v ? e.disable() : !u && v && e.enable(),
    (e.currentBreakpoint = a),
    e.emit('_beforeBreakpoint', o),
    s &&
      (m
        ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides())
        : !h && g
          ? (e.loopCreate(t), e.updateSlides())
          : h && !g && e.loopDestroy()),
    e.emit('breakpoint', o);
}
function Gt(e, t, s) {
  if ((void 0 === t && (t = 'window'), !e || ('container' === t && !s))) return;
  let i = !1;
  const r = z(),
    n = 'window' === t ? r.innerHeight : s.clientHeight,
    a = Object.keys(e).map((e) => {
      if ('string' == typeof e && 0 === e.indexOf('@')) {
        const t = parseFloat(e.substr(1));
        return { value: n * t, point: e };
      }
      return { value: e, point: e };
    });
  a.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
  for (let e = 0; e < a.length; e += 1) {
    const { point: n, value: o } = a[e];
    'window' === t ? r.matchMedia(`(min-width: ${o}px)`).matches && (i = n) : o <= s.clientWidth && (i = n);
  }
  return i || 'max';
}
var kt = { setBreakpoint: At, getBreakpoint: Gt };
function Dt(e, t) {
  const s = [];
  return (
    e.forEach((e) => {
      'object' == typeof e
        ? Object.keys(e).forEach((i) => {
            e[i] && s.push(t + i);
          })
        : 'string' == typeof e && s.push(t + e);
    }),
    s
  );
}
function Vt() {
  const e = this,
    { classNames: t, params: s, rtl: i, el: r, device: n } = e,
    a = Dt(
      [
        'initialized',
        s.direction,
        { 'free-mode': e.params.freeMode && s.freeMode.enabled },
        { autoheight: s.autoHeight },
        { rtl: i },
        { grid: s.grid && s.grid.rows > 1 },
        { 'grid-column': s.grid && s.grid.rows > 1 && 'column' === s.grid.fill },
        { android: n.android },
        { ios: n.ios },
        { 'css-mode': s.cssMode },
        { centered: s.cssMode && s.centeredSlides },
        { 'watch-progress': s.watchSlidesProgress },
      ],
      s.containerModifierClass
    );
  t.push(...a), r.classList.add(...t), e.emitContainerClasses();
}
function Bt() {
  const { el: e, classNames: t } = this;
  !e || 'string' == typeof e || (e.classList.remove(...t), this.emitContainerClasses());
}
var Ft = { addClasses: Vt, removeClasses: Bt };
function Nt() {
  const e = this,
    { isLocked: t, params: s } = e,
    { slidesOffsetBefore: i } = s;
  if (i) {
    const t = e.slides.length - 1,
      s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * i;
    e.isLocked = e.size > s;
  } else e.isLocked = 1 === e.snapGrid.length;
  !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked),
    !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
    t && t !== e.isLocked && (e.isEnd = !1),
    t !== e.isLocked && e.emit(e.isLocked ? 'lock' : 'unlock');
}
var _t = { checkOverflow: Nt },
  ue = {
    init: !0,
    direction: 'horizontal',
    oneWayMovement: !1,
    swiperElementNodeName: 'SWIPER-CONTAINER',
    touchEventsTarget: 'wrapper',
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    eventsPrefix: 'swiper',
    enabled: !0,
    focusableElements: 'input, select, option, textarea, button, video, label',
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: 'slide',
    breakpoints: void 0,
    breakpointsBase: 'window',
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    loop: !1,
    loopAddBlankSlides: !0,
    loopAdditionalSlides: 0,
    loopPreventsSliding: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: 'swiper-no-swiping',
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: 'swiper-',
    slideClass: 'swiper-slide',
    slideBlankClass: 'swiper-slide-blank',
    slideActiveClass: 'swiper-slide-active',
    slideVisibleClass: 'swiper-slide-visible',
    slideFullyVisibleClass: 'swiper-slide-fully-visible',
    slideNextClass: 'swiper-slide-next',
    slidePrevClass: 'swiper-slide-prev',
    wrapperClass: 'swiper-wrapper',
    lazyPreloaderClass: 'swiper-lazy-preloader',
    lazyPreloadPrevNext: 0,
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  };
function $t(e, t) {
  return function (s) {
    void 0 === s && (s = {});
    const i = Object.keys(s)[0],
      r = s[i];
    'object' == typeof r && null !== r
      ? (!0 === e[i] && (e[i] = { enabled: !0 }),
        'navigation' === i && e[i] && e[i].enabled && !e[i].prevEl && !e[i].nextEl && (e[i].auto = !0),
        ['pagination', 'scrollbar'].indexOf(i) >= 0 && e[i] && e[i].enabled && !e[i].el && (e[i].auto = !0),
        i in e && 'enabled' in r
          ? ('object' == typeof e[i] && !('enabled' in e[i]) && (e[i].enabled = !0),
            e[i] || (e[i] = { enabled: !1 }),
            O(t, s))
          : O(t, s))
      : O(t, s);
  };
}
const J = {
    eventsEmitter: Fe,
    update: Ue,
    translate: tt,
    transition: nt,
    slide: pt,
    loop: vt,
    grabCursor: Tt,
    events: zt,
    breakpoints: kt,
    checkOverflow: _t,
    classes: Ft,
  },
  Q = {};
class G {
  constructor() {
    let e, t;
    for (var s = arguments.length, i = new Array(s), r = 0; r < s; r++) i[r] = arguments[r];
    1 === i.length && i[0].constructor && 'Object' === Object.prototype.toString.call(i[0]).slice(8, -1)
      ? (t = i[0])
      : ([e, t] = i),
      t || (t = {}),
      (t = O({}, t)),
      e && !t.el && (t.el = e);
    const n = N();
    if (t.el && 'string' == typeof t.el && n.querySelectorAll(t.el).length > 1) {
      const e = [];
      return (
        n.querySelectorAll(t.el).forEach((s) => {
          const i = O({}, t, { el: s });
          e.push(new G(i));
        }),
        e
      );
    }
    const a = this;
    (a.__swiper__ = !0),
      (a.support = he()),
      (a.device = ge({ userAgent: t.userAgent })),
      (a.browser = De()),
      (a.eventsListeners = {}),
      (a.eventsAnyListeners = []),
      (a.modules = [...a.__modules__]),
      t.modules && Array.isArray(t.modules) && a.modules.push(...t.modules);
    const o = {};
    a.modules.forEach((e) => {
      e({
        params: t,
        swiper: a,
        extendParams: $t(t, o),
        on: a.on.bind(a),
        once: a.once.bind(a),
        off: a.off.bind(a),
        emit: a.emit.bind(a),
      });
    });
    const l = O({}, ue, o);
    return (
      (a.params = O({}, l, Q, t)),
      (a.originalParams = O({}, a.params)),
      (a.passedParams = O({}, t)),
      a.params &&
        a.params.on &&
        Object.keys(a.params.on).forEach((e) => {
          a.on(e, a.params.on[e]);
        }),
      a.params && a.params.onAny && a.onAny(a.params.onAny),
      Object.assign(a, {
        enabled: a.params.enabled,
        el: e,
        classNames: [],
        slides: [],
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal: () => 'horizontal' === a.params.direction,
        isVertical: () => 'vertical' === a.params.direction,
        activeIndex: 0,
        realIndex: 0,
        isBeginning: !0,
        isEnd: !1,
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: !1,
        cssOverflowAdjustment() {
          return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
        },
        allowSlideNext: a.params.allowSlideNext,
        allowSlidePrev: a.params.allowSlidePrev,
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          focusableElements: a.params.focusableElements,
          lastClickTime: 0,
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          startMoving: void 0,
          pointerId: null,
          touchId: null,
        },
        allowClick: !0,
        allowTouchMove: a.params.allowTouchMove,
        touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
        imagesToLoad: [],
        imagesLoaded: 0,
      }),
      a.emit('_swiper'),
      a.params.init && a.init(),
      a
    );
  }
  getDirectionLabel(e) {
    return this.isHorizontal()
      ? e
      : {
          width: 'height',
          'margin-top': 'margin-left',
          'margin-bottom ': 'margin-right',
          'margin-left': 'margin-top',
          'margin-right': 'margin-bottom',
          'padding-left': 'padding-top',
          'padding-right': 'padding-bottom',
          marginRight: 'marginBottom',
        }[e];
  }
  getSlideIndex(e) {
    const { slidesEl: t, params: s } = this,
      i = ae(k(t, `.${s.slideClass}, swiper-slide`)[0]);
    return ae(e) - i;
  }
  getSlideIndexByData(e) {
    return this.getSlideIndex(this.slides.filter((t) => 1 * t.getAttribute('data-swiper-slide-index') === e)[0]);
  }
  recalcSlides() {
    const { slidesEl: e, params: t } = this;
    this.slides = k(e, `.${t.slideClass}, swiper-slide`);
  }
  enable() {
    const e = this;
    e.enabled || ((e.enabled = !0), e.params.grabCursor && e.setGrabCursor(), e.emit('enable'));
  }
  disable() {
    const e = this;
    e.enabled && ((e.enabled = !1), e.params.grabCursor && e.unsetGrabCursor(), e.emit('disable'));
  }
  setProgress(e, t) {
    const s = this;
    e = Math.min(Math.max(e, 0), 1);
    const i = s.minTranslate(),
      r = (s.maxTranslate() - i) * e + i;
    s.translateTo(r, typeof t > 'u' ? 0 : t), s.updateActiveIndex(), s.updateSlidesClasses();
  }
  emitContainerClasses() {
    const e = this;
    if (!e.params._emitClasses || !e.el) return;
    const t = e.el.className
      .split(' ')
      .filter((t) => 0 === t.indexOf('swiper') || 0 === t.indexOf(e.params.containerModifierClass));
    e.emit('_containerClasses', t.join(' '));
  }
  getSlideClasses(e) {
    const t = this;
    return t.destroyed
      ? ''
      : e.className
          .split(' ')
          .filter((e) => 0 === e.indexOf('swiper-slide') || 0 === e.indexOf(t.params.slideClass))
          .join(' ');
  }
  emitSlidesClasses() {
    const e = this;
    if (!e.params._emitClasses || !e.el) return;
    const t = [];
    e.slides.forEach((s) => {
      const i = e.getSlideClasses(s);
      t.push({ slideEl: s, classNames: i }), e.emit('_slideClass', s, i);
    }),
      e.emit('_slideClasses', t);
  }
  slidesPerViewDynamic(e, t) {
    void 0 === e && (e = 'current'), void 0 === t && (t = !1);
    const { params: s, slides: i, slidesGrid: r, slidesSizesGrid: n, size: a, activeIndex: o } = this;
    let l = 1;
    if ('number' == typeof s.slidesPerView) return s.slidesPerView;
    if (s.centeredSlides) {
      let e,
        t = i[o] ? Math.ceil(i[o].swiperSlideSize) : 0;
      for (let s = o + 1; s < i.length; s += 1)
        i[s] && !e && ((t += Math.ceil(i[s].swiperSlideSize)), (l += 1), t > a && (e = !0));
      for (let s = o - 1; s >= 0; s -= 1) i[s] && !e && ((t += i[s].swiperSlideSize), (l += 1), t > a && (e = !0));
    } else if ('current' === e)
      for (let e = o + 1; e < i.length; e += 1) (t ? r[e] + n[e] - r[o] < a : r[e] - r[o] < a) && (l += 1);
    else for (let e = o - 1; e >= 0; e -= 1) r[o] - r[e] < a && (l += 1);
    return l;
  }
  update() {
    const e = this;
    if (!e || e.destroyed) return;
    const { snapGrid: t, params: s } = e;
    function i() {
      const t = e.rtlTranslate ? -1 * e.translate : e.translate,
        s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
      e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses();
    }
    let r;
    if (
      (s.breakpoints && e.setBreakpoint(),
      [...e.el.querySelectorAll('[loading="lazy"]')].forEach((t) => {
        t.complete && H(e, t);
      }),
      e.updateSize(),
      e.updateSlides(),
      e.updateProgress(),
      e.updateSlidesClasses(),
      s.freeMode && s.freeMode.enabled && !s.cssMode)
    )
      i(), s.autoHeight && e.updateAutoHeight();
    else {
      if (('auto' === s.slidesPerView || s.slidesPerView > 1) && e.isEnd && !s.centeredSlides) {
        const t = e.virtual && s.virtual.enabled ? e.virtual.slides : e.slides;
        r = e.slideTo(t.length - 1, 0, !1, !0);
      } else r = e.slideTo(e.activeIndex, 0, !1, !0);
      r || i();
    }
    s.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit('update');
  }
  changeDirection(e, t) {
    void 0 === t && (t = !0);
    const s = this,
      i = s.params.direction;
    return (
      e || (e = 'horizontal' === i ? 'vertical' : 'horizontal'),
      e === i ||
        ('horizontal' !== e && 'vertical' !== e) ||
        (s.el.classList.remove(`${s.params.containerModifierClass}${i}`),
        s.el.classList.add(`${s.params.containerModifierClass}${e}`),
        s.emitContainerClasses(),
        (s.params.direction = e),
        s.slides.forEach((t) => {
          'vertical' === e ? (t.style.width = '') : (t.style.height = '');
        }),
        s.emit('changeDirection'),
        t && s.update()),
      s
    );
  }
  changeLanguageDirection(e) {
    const t = this;
    (t.rtl && 'rtl' === e) ||
      (!t.rtl && 'ltr' === e) ||
      ((t.rtl = 'rtl' === e),
      (t.rtlTranslate = 'horizontal' === t.params.direction && t.rtl),
      t.rtl
        ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`), (t.el.dir = 'rtl'))
        : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`), (t.el.dir = 'ltr')),
      t.update());
  }
  mount(e) {
    const t = this;
    if (t.mounted) return !0;
    let s = e || t.params.el;
    if (('string' == typeof s && (s = document.querySelector(s)), !s)) return !1;
    (s.swiper = t),
      s.parentNode &&
        s.parentNode.host &&
        s.parentNode.host.nodeName === t.params.swiperElementNodeName.toUpperCase() &&
        (t.isElement = !0);
    const i = () => `.${(t.params.wrapperClass || '').trim().split(' ').join('.')}`;
    let r = s && s.shadowRoot && s.shadowRoot.querySelector ? s.shadowRoot.querySelector(i()) : k(s, i())[0];
    return (
      !r &&
        t.params.createElements &&
        ((r = j('div', t.params.wrapperClass)),
        s.append(r),
        k(s, `.${t.params.slideClass}`).forEach((e) => {
          r.append(e);
        })),
      Object.assign(t, {
        el: s,
        wrapperEl: r,
        slidesEl: t.isElement && !s.parentNode.host.slideSlots ? s.parentNode.host : r,
        hostEl: t.isElement ? s.parentNode.host : s,
        mounted: !0,
        rtl: 'rtl' === s.dir.toLowerCase() || 'rtl' === B(s, 'direction'),
        rtlTranslate:
          'horizontal' === t.params.direction && ('rtl' === s.dir.toLowerCase() || 'rtl' === B(s, 'direction')),
        wrongRTL: '-webkit-box' === B(r, 'display'),
      }),
      !0
    );
  }
  init(e) {
    const t = this;
    if (t.initialized || !1 === t.mount(e)) return t;
    t.emit('beforeInit'),
      t.params.breakpoints && t.setBreakpoint(),
      t.addClasses(),
      t.updateSize(),
      t.updateSlides(),
      t.params.watchOverflow && t.checkOverflow(),
      t.params.grabCursor && t.enabled && t.setGrabCursor(),
      t.params.loop && t.virtual && t.params.virtual.enabled
        ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0)
        : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0),
      t.params.loop && t.loopCreate(),
      t.attachEvents();
    const s = [...t.el.querySelectorAll('[loading="lazy"]')];
    return (
      t.isElement && s.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),
      s.forEach((e) => {
        e.complete
          ? H(t, e)
          : e.addEventListener('load', (e) => {
              H(t, e.target);
            });
      }),
      ee(t),
      (t.initialized = !0),
      ee(t),
      t.emit('init'),
      t.emit('afterInit'),
      t
    );
  }
  destroy(e, t) {
    void 0 === e && (e = !0), void 0 === t && (t = !0);
    const s = this,
      { params: i, el: r, wrapperEl: n, slides: a } = s;
    return (
      typeof s.params > 'u' ||
        s.destroyed ||
        (s.emit('beforeDestroy'),
        (s.initialized = !1),
        s.detachEvents(),
        i.loop && s.loopDestroy(),
        t &&
          (s.removeClasses(),
          r && 'string' != typeof r && r.removeAttribute('style'),
          n && n.removeAttribute('style'),
          a &&
            a.length &&
            a.forEach((e) => {
              e.classList.remove(
                i.slideVisibleClass,
                i.slideFullyVisibleClass,
                i.slideActiveClass,
                i.slideNextClass,
                i.slidePrevClass
              ),
                e.removeAttribute('style'),
                e.removeAttribute('data-swiper-slide-index');
            })),
        s.emit('destroy'),
        Object.keys(s.eventsListeners).forEach((e) => {
          s.off(e);
        }),
        !1 !== e && (s.el && 'string' != typeof s.el && (s.el.swiper = null), Ee(s)),
        (s.destroyed = !0)),
      null
    );
  }
  static extendDefaults(e) {
    O(Q, e);
  }
  static get extendedDefaults() {
    return Q;
  }
  static get defaults() {
    return ue;
  }
  static installModule(e) {
    G.prototype.__modules__ || (G.prototype.__modules__ = []);
    const t = G.prototype.__modules__;
    'function' == typeof e && t.indexOf(e) < 0 && t.push(e);
  }
  static use(e) {
    return Array.isArray(e) ? (e.forEach((e) => G.installModule(e)), G) : (G.installModule(e), G);
  }
}
function Ht(e, t, s, i) {
  return (
    e.params.createElements &&
      Object.keys(i).forEach((r) => {
        if (!s[r] && !0 === s.auto) {
          let n = k(e.el, `.${i[r]}`)[0];
          n || ((n = j('div', i[r])), (n.className = i[r]), e.el.append(n)), (s[r] = n), (t[r] = n);
        }
      }),
    s
  );
}
function Wt(e) {
  let { swiper: t, extendParams: s, on: i, emit: r } = e;
  function n(e) {
    let s;
    return e && 'string' == typeof e && t.isElement && ((s = t.el.querySelector(e) || t.hostEl.querySelector(e)), s)
      ? s
      : (e &&
          ('string' == typeof e && (s = [...document.querySelectorAll(e)]),
          t.params.uniqueNavElements &&
          'string' == typeof e &&
          s &&
          s.length > 1 &&
          1 === t.el.querySelectorAll(e).length
            ? (s = t.el.querySelector(e))
            : s && 1 === s.length && (s = s[0])),
        e && !s ? e : s);
  }
  function a(e, s) {
    const i = t.params.navigation;
    (e = D(e)).forEach((e) => {
      e &&
        (e.classList[s ? 'add' : 'remove'](...i.disabledClass.split(' ')),
        'BUTTON' === e.tagName && (e.disabled = s),
        t.params.watchOverflow && t.enabled && e.classList[t.isLocked ? 'add' : 'remove'](i.lockClass));
    });
  }
  function o() {
    const { nextEl: e, prevEl: s } = t.navigation;
    if (t.params.loop) return a(s, !1), void a(e, !1);
    a(s, t.isBeginning && !t.params.rewind), a(e, t.isEnd && !t.params.rewind);
  }
  function l(e) {
    e.preventDefault(), (!t.isBeginning || t.params.loop || t.params.rewind) && (t.slidePrev(), r('navigationPrev'));
  }
  function d(e) {
    e.preventDefault(), (!t.isEnd || t.params.loop || t.params.rewind) && (t.slideNext(), r('navigationNext'));
  }
  function c() {
    const e = t.params.navigation;
    if (
      ((t.params.navigation = Ht(t, t.originalParams.navigation, t.params.navigation, {
        nextEl: 'swiper-button-next',
        prevEl: 'swiper-button-prev',
      })),
      !e.nextEl && !e.prevEl)
    )
      return;
    let s = n(e.nextEl),
      i = n(e.prevEl);
    Object.assign(t.navigation, { nextEl: s, prevEl: i }), (s = D(s)), (i = D(i));
    const r = (s, i) => {
      s && s.addEventListener('click', 'next' === i ? d : l),
        !t.enabled && s && s.classList.add(...e.lockClass.split(' '));
    };
    s.forEach((e) => r(e, 'next')), i.forEach((e) => r(e, 'prev'));
  }
  function p() {
    let { nextEl: e, prevEl: s } = t.navigation;
    (e = D(e)), (s = D(s));
    const i = (e, s) => {
      e.removeEventListener('click', 'next' === s ? d : l),
        e.classList.remove(...t.params.navigation.disabledClass.split(' '));
    };
    e.forEach((e) => i(e, 'next')), s.forEach((e) => i(e, 'prev'));
  }
  s({
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: !1,
      disabledClass: 'swiper-button-disabled',
      hiddenClass: 'swiper-button-hidden',
      lockClass: 'swiper-button-lock',
      navigationDisabledClass: 'swiper-navigation-disabled',
    },
  }),
    (t.navigation = { nextEl: null, prevEl: null }),
    i('init', () => {
      !1 === t.params.navigation.enabled ? u() : (c(), o());
    }),
    i('toEdge fromEdge lock unlock', () => {
      o();
    }),
    i('destroy', () => {
      p();
    }),
    i('enable disable', () => {
      let { nextEl: e, prevEl: s } = t.navigation;
      (e = D(e)),
        (s = D(s)),
        t.enabled
          ? o()
          : [...e, ...s].filter((e) => !!e).forEach((e) => e.classList.add(t.params.navigation.lockClass));
    }),
    i('click', (e, s) => {
      let { nextEl: i, prevEl: n } = t.navigation;
      (i = D(i)), (n = D(n));
      const a = s.target;
      let o = n.includes(a) || i.includes(a);
      if (t.isElement && !o) {
        const e = s.path || (s.composedPath && s.composedPath());
        e && (o = e.find((e) => i.includes(e) || n.includes(e)));
      }
      if (t.params.navigation.hideOnClick && !o) {
        if (
          t.pagination &&
          t.params.pagination &&
          t.params.pagination.clickable &&
          (t.pagination.el === a || t.pagination.el.contains(a))
        )
          return;
        let e;
        i.length
          ? (e = i[0].classList.contains(t.params.navigation.hiddenClass))
          : n.length && (e = n[0].classList.contains(t.params.navigation.hiddenClass)),
          r(!0 === e ? 'navigationShow' : 'navigationHide'),
          [...i, ...n].filter((e) => !!e).forEach((e) => e.classList.toggle(t.params.navigation.hiddenClass));
      }
    });
  const u = () => {
    t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(' ')), p();
  };
  Object.assign(t.navigation, {
    enable: () => {
      t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(' ')), c(), o();
    },
    disable: u,
    update: o,
    init: c,
    destroy: p,
  });
}
Object.keys(J).forEach((e) => {
  Object.keys(J[e]).forEach((t) => {
    G.prototype[t] = J[e][t];
  });
}),
  G.use([Ve, Be]);
export { Wt as N, G as S, Rt as a, k as e, N as g, _ as i, R as n };
