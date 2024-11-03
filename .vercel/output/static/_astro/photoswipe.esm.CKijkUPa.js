function f(t, i, e) {
  const s = document.createElement(i);
  return t && (s.className = t), e && e.appendChild(s), s;
}
function p(t, i) {
  return (t.x = i.x), (t.y = i.y), void 0 !== i.id && (t.id = i.id), t;
}
function M(t) {
  (t.x = Math.round(t.x)), (t.y = Math.round(t.y));
}
function A(t, i) {
  const e = Math.abs(t.x - i.x),
    s = Math.abs(t.y - i.y);
  return Math.sqrt(e * e + s * s);
}
function x(t, i) {
  return t.x === i.x && t.y === i.y;
}
function I(t, i, e) {
  return Math.min(Math.max(t, i), e);
}
function b(t, i, e) {
  let s = `translate3d(${t}px,${i || 0}px,0)`;
  return void 0 !== e && (s += ` scale3d(${e},${e},1)`), s;
}
function y(t, i, e, s) {
  t.style.transform = b(i, e, s);
}
const $ = 'cubic-bezier(.4,0,.22,1)';
function R(t, i, e, s) {
  t.style.transition = i ? `${i} ${e}ms ${s || $}` : 'none';
}
function L(t, i, e) {
  (t.style.width = 'number' == typeof i ? `${i}px` : i), (t.style.height = 'number' == typeof e ? `${e}px` : e);
}
function U(t) {
  R(t);
}
function q(t) {
  return 'decode' in t
    ? t.decode().catch(() => {})
    : t.complete
      ? Promise.resolve(t)
      : new Promise((i, e) => {
          (t.onload = () => i(t)), (t.onerror = e);
        });
}
const _ = { IDLE: 'idle', LOADING: 'loading', LOADED: 'loaded', ERROR: 'error' };
function G(t) {
  return ('button' in t && 1 === t.button) || t.ctrlKey || t.metaKey || t.altKey || t.shiftKey;
}
function K(t, i, e = document) {
  let s = [];
  if (t instanceof Element) s = [t];
  else if (t instanceof NodeList || Array.isArray(t)) s = Array.from(t);
  else {
    const n = 'string' == typeof t ? t : i;
    n && (s = Array.from(e.querySelectorAll(n)));
  }
  return s;
}
function C() {
  return !(!navigator.vendor || !navigator.vendor.match(/apple/i));
}
let F = !1;
try {
  window.addEventListener(
    'test',
    null,
    Object.defineProperty({}, 'passive', {
      get: () => {
        F = !0;
      },
    })
  );
} catch {}
class X {
  constructor() {
    this._pool = [];
  }
  add(t, i, e, s) {
    this._toggleListener(t, i, e, s);
  }
  remove(t, i, e, s) {
    this._toggleListener(t, i, e, s, !0);
  }
  removeAll() {
    this._pool.forEach((t) => {
      this._toggleListener(t.target, t.type, t.listener, t.passive, !0, !0);
    }),
      (this._pool = []);
  }
  _toggleListener(t, i, e, s, n, o) {
    if (!t) return;
    const a = n ? 'removeEventListener' : 'addEventListener';
    i.split(' ').forEach((i) => {
      if (i) {
        o ||
          (n
            ? (this._pool = this._pool.filter((s) => s.type !== i || s.listener !== e || s.target !== t))
            : this._pool.push({ target: t, type: i, listener: e, passive: s }));
        const h = !!F && { passive: s || !1 };
        t[a](i, e, h);
      }
    });
  }
}
function B(t, i) {
  if (t.getViewportSizeFn) {
    const e = t.getViewportSizeFn(t, i);
    if (e) return e;
  }
  return { x: document.documentElement.clientWidth, y: window.innerHeight };
}
function S(t, i, e, s, n) {
  let o = 0;
  if (i.paddingFn) o = i.paddingFn(e, s, n)[t];
  else if (i.padding) o = i.padding[t];
  else {
    const e = 'padding' + t[0].toUpperCase() + t.slice(1);
    i[e] && (o = i[e]);
  }
  return Number(o) || 0;
}
function N(t, i, e, s) {
  return {
    x: i.x - S('left', t, i, e, s) - S('right', t, i, e, s),
    y: i.y - S('top', t, i, e, s) - S('bottom', t, i, e, s),
  };
}
class Y {
  constructor(t) {
    (this.slide = t),
      (this.currZoomLevel = 1),
      (this.center = { x: 0, y: 0 }),
      (this.max = { x: 0, y: 0 }),
      (this.min = { x: 0, y: 0 });
  }
  update(t) {
    (this.currZoomLevel = t),
      this.slide.width
        ? (this._updateAxis('x'), this._updateAxis('y'), this.slide.pswp.dispatch('calcBounds', { slide: this.slide }))
        : this.reset();
  }
  _updateAxis(t) {
    const { pswp: i } = this.slide,
      e = this.slide['x' === t ? 'width' : 'height'] * this.currZoomLevel,
      s = S('x' === t ? 'left' : 'top', i.options, i.viewportSize, this.slide.data, this.slide.index),
      n = this.slide.panAreaSize[t];
    (this.center[t] = Math.round((n - e) / 2) + s),
      (this.max[t] = e > n ? Math.round(n - e) + s : this.center[t]),
      (this.min[t] = e > n ? s : this.center[t]);
  }
  reset() {
    (this.center.x = 0), (this.center.y = 0), (this.max.x = 0), (this.max.y = 0), (this.min.x = 0), (this.min.y = 0);
  }
  correctPan(t, i) {
    return I(i, this.max[t], this.min[t]);
  }
}
const T = 4e3;
class H {
  constructor(t, i, e, s) {
    (this.pswp = s),
      (this.options = t),
      (this.itemData = i),
      (this.index = e),
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
  update(t, i, e) {
    const s = { x: t, y: i };
    (this.elementSize = s), (this.panAreaSize = e);
    const n = e.x / s.x,
      o = e.y / s.y;
    (this.fit = Math.min(1, n < o ? n : o)),
      (this.fill = Math.min(1, n > o ? n : o)),
      (this.vFill = Math.min(1, o)),
      (this.initial = this._getInitial()),
      (this.secondary = this._getSecondary()),
      (this.max = Math.max(this.initial, this.secondary, this._getMax())),
      (this.min = Math.min(this.fit, this.initial, this.secondary)),
      this.pswp && this.pswp.dispatch('zoomLevelsUpdate', { zoomLevels: this, slideData: this.itemData });
  }
  _parseZoomLevelOption(t) {
    const i = t + 'ZoomLevel',
      e = this.options[i];
    if (e) return 'function' == typeof e ? e(this) : 'fill' === e ? this.fill : 'fit' === e ? this.fit : Number(e);
  }
  _getSecondary() {
    let t = this._parseZoomLevelOption('secondary');
    return (
      t ||
      ((t = Math.min(1, 3 * this.fit)),
      this.elementSize && t * this.elementSize.x > T && (t = T / this.elementSize.x),
      t)
    );
  }
  _getInitial() {
    return this._parseZoomLevelOption('initial') || this.fit;
  }
  _getMax() {
    return this._parseZoomLevelOption('max') || Math.max(1, 4 * this.fit);
  }
}
class j {
  constructor(t, i, e) {
    (this.data = t),
      (this.index = i),
      (this.pswp = e),
      (this.isActive = i === e.currIndex),
      (this.currentResolution = 0),
      (this.panAreaSize = { x: 0, y: 0 }),
      (this.pan = { x: 0, y: 0 }),
      (this.isFirstSlide = this.isActive && !e.opener.isOpen),
      (this.zoomLevels = new H(e.options, t, i, e)),
      this.pswp.dispatch('gettingData', { slide: this, data: this.data, index: i }),
      (this.content = this.pswp.contentLoader.getContentBySlide(this)),
      (this.container = f('pswp__zoom-wrap', 'div')),
      (this.holderElement = null),
      (this.currZoomLevel = 1),
      (this.width = this.content.width),
      (this.height = this.content.height),
      (this.heavyAppended = !1),
      (this.bounds = new Y(this)),
      (this.prevDisplayedWidth = -1),
      (this.prevDisplayedHeight = -1),
      this.pswp.dispatch('slideInit', { slide: this });
  }
  setIsActive(t) {
    t && !this.isActive ? this.activate() : !t && this.isActive && this.deactivate();
  }
  append(t) {
    (this.holderElement = t),
      (this.container.style.transformOrigin = '0 0'),
      this.data &&
        (this.calculateSize(),
        this.load(),
        this.updateContentSize(),
        this.appendHeavy(),
        this.holderElement.appendChild(this.container),
        this.zoomAndPanToInitial(),
        this.pswp.dispatch('firstZoomPan', { slide: this }),
        this.applyCurrentZoomPan(),
        this.pswp.dispatch('afterSetContent', { slide: this }),
        this.isActive && this.activate());
  }
  load() {
    this.content.load(!1), this.pswp.dispatch('slideLoad', { slide: this });
  }
  appendHeavy() {
    const { pswp: t } = this;
    this.heavyAppended ||
      !t.opener.isOpen ||
      t.mainScroll.isShifted() ||
      (this.isActive, 0) ||
      this.pswp.dispatch('appendHeavy', { slide: this }).defaultPrevented ||
      ((this.heavyAppended = !0), this.content.append(), this.pswp.dispatch('appendHeavyContent', { slide: this }));
  }
  activate() {
    (this.isActive = !0),
      this.appendHeavy(),
      this.content.activate(),
      this.pswp.dispatch('slideActivate', { slide: this });
  }
  deactivate() {
    (this.isActive = !1),
      this.content.deactivate(),
      this.currZoomLevel !== this.zoomLevels.initial && this.calculateSize(),
      (this.currentResolution = 0),
      this.zoomAndPanToInitial(),
      this.applyCurrentZoomPan(),
      this.updateContentSize(),
      this.pswp.dispatch('slideDeactivate', { slide: this });
  }
  destroy() {
    (this.content.hasSlide = !1),
      this.content.remove(),
      this.container.remove(),
      this.pswp.dispatch('slideDestroy', { slide: this });
  }
  resize() {
    this.currZoomLevel !== this.zoomLevels.initial && this.isActive
      ? (this.calculateSize(), this.bounds.update(this.currZoomLevel), this.panTo(this.pan.x, this.pan.y))
      : (this.calculateSize(),
        (this.currentResolution = 0),
        this.zoomAndPanToInitial(),
        this.applyCurrentZoomPan(),
        this.updateContentSize());
  }
  updateContentSize(t) {
    const i = this.currentResolution || this.zoomLevels.initial;
    if (!i) return;
    const e = Math.round(this.width * i) || this.pswp.viewportSize.x,
      s = Math.round(this.height * i) || this.pswp.viewportSize.y;
    (!this.sizeChanged(e, s) && !t) || this.content.setDisplayedSize(e, s);
  }
  sizeChanged(t, i) {
    return (
      (t !== this.prevDisplayedWidth || i !== this.prevDisplayedHeight) &&
      ((this.prevDisplayedWidth = t), (this.prevDisplayedHeight = i), !0)
    );
  }
  getPlaceholderElement() {
    var t;
    return null === (t = this.content.placeholder) || void 0 === t ? void 0 : t.element;
  }
  zoomTo(t, i, e, s) {
    const { pswp: n } = this;
    if (!this.isZoomable() || n.mainScroll.isShifted()) return;
    n.dispatch('beforeZoomTo', { destZoomLevel: t, centerPoint: i, transitionDuration: e }), n.animations.stopAllPan();
    const o = this.currZoomLevel;
    s || (t = I(t, this.zoomLevels.min, this.zoomLevels.max)),
      this.setZoomLevel(t),
      (this.pan.x = this.calculateZoomToPanOffset('x', i, o)),
      (this.pan.y = this.calculateZoomToPanOffset('y', i, o)),
      M(this.pan);
    const a = () => {
      this._setResolution(t), this.applyCurrentZoomPan();
    };
    e
      ? n.animations.startTransition({
          isPan: !0,
          name: 'zoomTo',
          target: this.container,
          transform: this.getCurrentTransform(),
          onComplete: a,
          duration: e,
          easing: n.options.easing,
        })
      : a();
  }
  toggleZoom(t) {
    this.zoomTo(
      this.currZoomLevel === this.zoomLevels.initial ? this.zoomLevels.secondary : this.zoomLevels.initial,
      t,
      this.pswp.options.zoomAnimationDuration
    );
  }
  setZoomLevel(t) {
    (this.currZoomLevel = t), this.bounds.update(this.currZoomLevel);
  }
  calculateZoomToPanOffset(t, i, e) {
    if (this.bounds.max[t] - this.bounds.min[t] == 0) return this.bounds.center[t];
    i || (i = this.pswp.getViewportCenterPoint()), e || (e = this.zoomLevels.initial);
    const s = this.currZoomLevel / e;
    return this.bounds.correctPan(t, (this.pan[t] - i[t]) * s + i[t]);
  }
  panTo(t, i) {
    (this.pan.x = this.bounds.correctPan('x', t)),
      (this.pan.y = this.bounds.correctPan('y', i)),
      this.applyCurrentZoomPan();
  }
  isPannable() {
    return !!this.width && this.currZoomLevel > this.zoomLevels.fit;
  }
  isZoomable() {
    return !!this.width && this.content.isZoomable();
  }
  applyCurrentZoomPan() {
    this._applyZoomTransform(this.pan.x, this.pan.y, this.currZoomLevel),
      this === this.pswp.currSlide && this.pswp.dispatch('zoomPanUpdate', { slide: this });
  }
  zoomAndPanToInitial() {
    (this.currZoomLevel = this.zoomLevels.initial),
      this.bounds.update(this.currZoomLevel),
      p(this.pan, this.bounds.center),
      this.pswp.dispatch('initialZoomPan', { slide: this });
  }
  _applyZoomTransform(t, i, e) {
    (e /= this.currentResolution || this.zoomLevels.initial), y(this.container, t, i, e);
  }
  calculateSize() {
    const { pswp: t } = this;
    p(this.panAreaSize, N(t.options, t.viewportSize, this.data, this.index)),
      this.zoomLevels.update(this.width, this.height, this.panAreaSize),
      t.dispatch('calcSlideSize', { slide: this });
  }
  getCurrentTransform() {
    const t = this.currZoomLevel / (this.currentResolution || this.zoomLevels.initial);
    return b(this.pan.x, this.pan.y, t);
  }
  _setResolution(t) {
    t !== this.currentResolution &&
      ((this.currentResolution = t), this.updateContentSize(), this.pswp.dispatch('resolutionChanged'));
  }
}
const Q = 0.35,
  J = 0.6,
  z = 0.4,
  E = 0.5;
function tt(t, i) {
  return (t * i) / (1 - i);
}
class it {
  constructor(t) {
    (this.gestures = t), (this.pswp = t.pswp), (this.startPan = { x: 0, y: 0 });
  }
  start() {
    this.pswp.currSlide && p(this.startPan, this.pswp.currSlide.pan), this.pswp.animations.stopAll();
  }
  change() {
    const { p1: t, prevP1: i, dragAxis: e } = this.gestures,
      { currSlide: s } = this.pswp;
    if (
      'y' === e &&
      this.pswp.options.closeOnVerticalDrag &&
      s &&
      s.currZoomLevel <= s.zoomLevels.fit &&
      !this.gestures.isMultitouch
    ) {
      const e = s.pan.y + (t.y - i.y);
      if (!this.pswp.dispatch('verticalDrag', { panY: e }).defaultPrevented) {
        this._setPanWithFriction('y', e, J);
        const t = 1 - Math.abs(this._getVerticalDragRatio(s.pan.y));
        this.pswp.applyBgOpacity(t), s.applyCurrentZoomPan();
      }
    } else this._panOrMoveMainScroll('x') || (this._panOrMoveMainScroll('y'), s && (M(s.pan), s.applyCurrentZoomPan()));
  }
  end() {
    const { velocity: t } = this.gestures,
      { mainScroll: i, currSlide: e } = this.pswp;
    let s = 0;
    if ((this.pswp.animations.stopAll(), i.isShifted())) {
      const e = (i.x - i.getCurrSlideX()) / this.pswp.viewportSize.x;
      (t.x < -E && e < 0) || (t.x < 0.1 && e < -0.5)
        ? ((s = 1), (t.x = Math.min(t.x, 0)))
        : ((t.x > E && e > 0) || (t.x > -0.1 && e > 0.5)) && ((s = -1), (t.x = Math.max(t.x, 0))),
        i.moveIndexBy(s, !0, t.x);
    }
    (e && e.currZoomLevel > e.zoomLevels.max) || this.gestures.isMultitouch
      ? this.gestures.zoomLevels.correctZoomPan(!0)
      : (this._finishPanGestureForAxis('x'), this._finishPanGestureForAxis('y'));
  }
  _finishPanGestureForAxis(t) {
    const { velocity: i } = this.gestures,
      { currSlide: e } = this.pswp;
    if (!e) return;
    const { pan: s, bounds: n } = e,
      o = s[t],
      a = this.pswp.bgOpacity < 1 && 'y' === t,
      h = o + tt(i[t], 0.995);
    if (a) {
      const t = this._getVerticalDragRatio(o),
        i = this._getVerticalDragRatio(h);
      if ((t < 0 && i < -z) || (t > 0 && i > z)) return void this.pswp.close();
    }
    const r = n.correctPan(t, h);
    if (o === r) return;
    const l = r === h ? 1 : 0.82,
      p = this.pswp.bgOpacity,
      d = r - o;
    this.pswp.animations.startSpring({
      name: 'panGesture' + t,
      isPan: !0,
      start: o,
      end: r,
      velocity: i[t],
      dampingRatio: l,
      onUpdate: (i) => {
        if (a && this.pswp.bgOpacity < 1) {
          const t = 1 - (r - i) / d;
          this.pswp.applyBgOpacity(I(p + (1 - p) * t, 0, 1));
        }
        (s[t] = Math.floor(i)), e.applyCurrentZoomPan();
      },
    });
  }
  _panOrMoveMainScroll(t) {
    const { p1: i, dragAxis: e, prevP1: s, isMultitouch: n } = this.gestures,
      { currSlide: o, mainScroll: a } = this.pswp,
      h = i[t] - s[t],
      r = a.x + h;
    if (!h || !o) return !1;
    if ('x' === t && !o.isPannable() && !n) return a.moveTo(r, !0), !0;
    const { bounds: l } = o,
      p = o.pan[t] + h;
    if (this.pswp.options.allowPanToNext && 'x' === e && 'x' === t && !n) {
      const i = a.getCurrSlideX(),
        e = a.x - i,
        s = h > 0,
        n = !s;
      if (p > l.min[t] && s) {
        if (l.min[t] <= this.startPan[t]) return a.moveTo(r, !0), !0;
        this._setPanWithFriction(t, p);
      } else if (p < l.max[t] && n) {
        if (this.startPan[t] <= l.max[t]) return a.moveTo(r, !0), !0;
        this._setPanWithFriction(t, p);
      } else if (0 !== e) {
        if (e > 0) return a.moveTo(Math.max(r, i), !0), !0;
        if (e < 0) return a.moveTo(Math.min(r, i), !0), !0;
      } else this._setPanWithFriction(t, p);
    } else
      'y' === t
        ? !a.isShifted() && l.min.y !== l.max.y && this._setPanWithFriction(t, p)
        : this._setPanWithFriction(t, p);
    return !1;
  }
  _getVerticalDragRatio(t) {
    var i, e;
    return (
      (t -
        (null !== (i = null === (e = this.pswp.currSlide) || void 0 === e ? void 0 : e.bounds.center.y) && void 0 !== i
          ? i
          : 0)) /
      (this.pswp.viewportSize.y / 3)
    );
  }
  _setPanWithFriction(t, i, e) {
    const { currSlide: s } = this.pswp;
    if (!s) return;
    const { pan: n, bounds: o } = s;
    if (o.correctPan(t, i) !== i || e) {
      const s = Math.round(i - n[t]);
      n[t] += s * (e || Q);
    } else n[t] = i;
  }
}
const et = 0.05,
  st = 0.15;
function O(t, i, e) {
  return (t.x = (i.x + e.x) / 2), (t.y = (i.y + e.y) / 2), t;
}
class nt {
  constructor(t) {
    (this.gestures = t),
      (this._startPan = { x: 0, y: 0 }),
      (this._startZoomPoint = { x: 0, y: 0 }),
      (this._zoomPoint = { x: 0, y: 0 }),
      (this._wasOverFitZoomLevel = !1),
      (this._startZoomLevel = 1);
  }
  start() {
    const { currSlide: t } = this.gestures.pswp;
    t && ((this._startZoomLevel = t.currZoomLevel), p(this._startPan, t.pan)),
      this.gestures.pswp.animations.stopAllPan(),
      (this._wasOverFitZoomLevel = !1);
  }
  change() {
    const { p1: t, startP1: i, p2: e, startP2: s, pswp: n } = this.gestures,
      { currSlide: o } = n;
    if (!o) return;
    const a = o.zoomLevels.min,
      h = o.zoomLevels.max;
    if (!o.isZoomable() || n.mainScroll.isShifted()) return;
    O(this._startZoomPoint, i, s), O(this._zoomPoint, t, e);
    let r = (1 / A(i, s)) * A(t, e) * this._startZoomLevel;
    if ((r > o.zoomLevels.initial + o.zoomLevels.initial / 15 && (this._wasOverFitZoomLevel = !0), r < a))
      if (n.options.pinchToClose && !this._wasOverFitZoomLevel && this._startZoomLevel <= o.zoomLevels.initial) {
        const t = 1 - (a - r) / (a / 1.2);
        n.dispatch('pinchClose', { bgOpacity: t }).defaultPrevented || n.applyBgOpacity(t);
      } else r = a - (a - r) * st;
    else r > h && (r = h + (r - h) * et);
    (o.pan.x = this._calculatePanForZoomLevel('x', r)),
      (o.pan.y = this._calculatePanForZoomLevel('y', r)),
      o.setZoomLevel(r),
      o.applyCurrentZoomPan();
  }
  end() {
    const { pswp: t } = this.gestures,
      { currSlide: i } = t;
    (!i || i.currZoomLevel < i.zoomLevels.initial) && !this._wasOverFitZoomLevel && t.options.pinchToClose
      ? t.close()
      : this.correctZoomPan();
  }
  _calculatePanForZoomLevel(t, i) {
    const e = i / this._startZoomLevel;
    return this._zoomPoint[t] - (this._startZoomPoint[t] - this._startPan[t]) * e;
  }
  correctZoomPan(t) {
    const { pswp: i } = this.gestures,
      { currSlide: e } = i;
    if (null == e || !e.isZoomable()) return;
    0 === this._zoomPoint.x && (t = !0);
    const s = e.currZoomLevel;
    let n,
      o = !0;
    s < e.zoomLevels.initial
      ? (n = e.zoomLevels.initial)
      : s > e.zoomLevels.max
        ? (n = e.zoomLevels.max)
        : ((o = !1), (n = s));
    const a = i.bgOpacity,
      h = i.bgOpacity < 1,
      r = p({ x: 0, y: 0 }, e.pan);
    let l = p({ x: 0, y: 0 }, r);
    t &&
      ((this._zoomPoint.x = 0),
      (this._zoomPoint.y = 0),
      (this._startZoomPoint.x = 0),
      (this._startZoomPoint.y = 0),
      (this._startZoomLevel = s),
      p(this._startPan, r)),
      o && (l = { x: this._calculatePanForZoomLevel('x', n), y: this._calculatePanForZoomLevel('y', n) }),
      e.setZoomLevel(n),
      (l = { x: e.bounds.correctPan('x', l.x), y: e.bounds.correctPan('y', l.y) }),
      e.setZoomLevel(s);
    const d = !x(l, r);
    if (!d && !o && !h) return e._setResolution(n), void e.applyCurrentZoomPan();
    i.animations.stopAllPan(),
      i.animations.startSpring({
        isPan: !0,
        start: 0,
        end: 1e3,
        velocity: 0,
        dampingRatio: 1,
        naturalFrequency: 40,
        onUpdate: (t) => {
          if (((t /= 1e3), d || o)) {
            if ((d && ((e.pan.x = r.x + (l.x - r.x) * t), (e.pan.y = r.y + (l.y - r.y) * t)), o)) {
              const i = s + (n - s) * t;
              e.setZoomLevel(i);
            }
            e.applyCurrentZoomPan();
          }
          h && i.bgOpacity < 1 && i.applyBgOpacity(I(a + (1 - a) * t, 0, 1));
        },
        onComplete: () => {
          e._setResolution(n), e.applyCurrentZoomPan();
        },
      });
  }
}
function Z(t) {
  return !!t.target.closest('.pswp__container');
}
class ot {
  constructor(t) {
    this.gestures = t;
  }
  click(t, i) {
    const e = i.target.classList,
      s = e.contains('pswp__img'),
      n = e.contains('pswp__item') || e.contains('pswp__zoom-wrap');
    s ? this._doClickOrTapAction('imageClick', t, i) : n && this._doClickOrTapAction('bgClick', t, i);
  }
  tap(t, i) {
    Z(i) && this._doClickOrTapAction('tap', t, i);
  }
  doubleTap(t, i) {
    Z(i) && this._doClickOrTapAction('doubleTap', t, i);
  }
  _doClickOrTapAction(t, i, e) {
    var s;
    const { pswp: n } = this.gestures,
      { currSlide: o } = n,
      a = t + 'Action',
      h = n.options[a];
    if (!n.dispatch(a, { point: i, originalEvent: e }).defaultPrevented) {
      if ('function' == typeof h) return void h.call(n, i, e);
      switch (h) {
        case 'close':
        case 'next':
          n[h]();
          break;
        case 'zoom':
          o?.toggleZoom(i);
          break;
        case 'zoom-or-close':
          null != o && o.isZoomable() && o.zoomLevels.secondary !== o.zoomLevels.initial
            ? o.toggleZoom(i)
            : n.options.clickToCloseNonZoomable && n.close();
          break;
        case 'toggle-controls':
          null === (s = this.gestures.pswp.element) || void 0 === s || s.classList.toggle('pswp--ui-visible');
      }
    }
  }
}
const rt = 10,
  at = 300,
  ht = 25;
class lt {
  constructor(t) {
    (this.pswp = t),
      (this.dragAxis = null),
      (this.p1 = { x: 0, y: 0 }),
      (this.p2 = { x: 0, y: 0 }),
      (this.prevP1 = { x: 0, y: 0 }),
      (this.prevP2 = { x: 0, y: 0 }),
      (this.startP1 = { x: 0, y: 0 }),
      (this.startP2 = { x: 0, y: 0 }),
      (this.velocity = { x: 0, y: 0 }),
      (this._lastStartP1 = { x: 0, y: 0 }),
      (this._intervalP1 = { x: 0, y: 0 }),
      (this._numActivePoints = 0),
      (this._ongoingPointers = []),
      (this._touchEventEnabled = 'ontouchstart' in window),
      (this._pointerEventEnabled = !!window.PointerEvent),
      (this.supportsTouch = this._touchEventEnabled || (this._pointerEventEnabled && navigator.maxTouchPoints > 1)),
      (this._numActivePoints = 0),
      (this._intervalTime = 0),
      (this._velocityCalculated = !1),
      (this.isMultitouch = !1),
      (this.isDragging = !1),
      (this.isZooming = !1),
      (this.raf = null),
      (this._tapTimer = null),
      this.supportsTouch || (t.options.allowPanToNext = !1),
      (this.drag = new it(this)),
      (this.zoomLevels = new nt(this)),
      (this.tapHandler = new ot(this)),
      t.on('bindEvents', () => {
        t.events.add(t.scrollWrap, 'click', this._onClick.bind(this)),
          this._pointerEventEnabled
            ? this._bindEvents('pointer', 'down', 'up', 'cancel')
            : this._touchEventEnabled
              ? (this._bindEvents('touch', 'start', 'end', 'cancel'),
                t.scrollWrap && ((t.scrollWrap.ontouchmove = () => {}), (t.scrollWrap.ontouchend = () => {})))
              : this._bindEvents('mouse', 'down', 'up');
      });
  }
  _bindEvents(t, i, e, s) {
    const { pswp: n } = this,
      { events: o } = n,
      a = s ? t + s : '';
    o.add(n.scrollWrap, t + i, this.onPointerDown.bind(this)),
      o.add(window, t + 'move', this.onPointerMove.bind(this)),
      o.add(window, t + e, this.onPointerUp.bind(this)),
      a && o.add(n.scrollWrap, a, this.onPointerUp.bind(this));
  }
  onPointerDown(t) {
    const i = 'mousedown' === t.type || 'mouse' === t.pointerType;
    if (i && t.button > 0) return;
    const { pswp: e } = this;
    e.opener.isOpen
      ? e.dispatch('pointerDown', { originalEvent: t }).defaultPrevented ||
        (i && (e.mouseDetected(), this._preventPointerEventBehaviour(t, 'down')),
        e.animations.stopAll(),
        this._updatePoints(t, 'down'),
        1 === this._numActivePoints && ((this.dragAxis = null), p(this.startP1, this.p1)),
        this._numActivePoints > 1 ? (this._clearTapTimer(), (this.isMultitouch = !0)) : (this.isMultitouch = !1))
      : t.preventDefault();
  }
  onPointerMove(t) {
    this._preventPointerEventBehaviour(t, 'move'),
      this._numActivePoints &&
        (this._updatePoints(t, 'move'),
        !this.pswp.dispatch('pointerMove', { originalEvent: t }).defaultPrevented &&
          (1 !== this._numActivePoints || this.isDragging
            ? this._numActivePoints > 1 &&
              !this.isZooming &&
              (this._finishDrag(),
              (this.isZooming = !0),
              this._updateStartPoints(),
              this.zoomLevels.start(),
              this._rafStopLoop(),
              this._rafRenderLoop())
            : (this.dragAxis || this._calculateDragDirection(),
              this.dragAxis &&
                !this.isDragging &&
                (this.isZooming && ((this.isZooming = !1), this.zoomLevels.end()),
                (this.isDragging = !0),
                this._clearTapTimer(),
                this._updateStartPoints(),
                (this._intervalTime = Date.now()),
                (this._velocityCalculated = !1),
                p(this._intervalP1, this.p1),
                (this.velocity.x = 0),
                (this.velocity.y = 0),
                this.drag.start(),
                this._rafStopLoop(),
                this._rafRenderLoop()))));
  }
  _finishDrag() {
    this.isDragging &&
      ((this.isDragging = !1),
      this._velocityCalculated || this._updateVelocity(!0),
      this.drag.end(),
      (this.dragAxis = null));
  }
  onPointerUp(t) {
    this._numActivePoints &&
      (this._updatePoints(t, 'up'),
      !this.pswp.dispatch('pointerUp', { originalEvent: t }).defaultPrevented &&
        (0 === this._numActivePoints &&
          (this._rafStopLoop(),
          this.isDragging ? this._finishDrag() : !this.isZooming && !this.isMultitouch && this._finishTap(t)),
        this._numActivePoints < 2 &&
          this.isZooming &&
          ((this.isZooming = !1),
          this.zoomLevels.end(),
          1 === this._numActivePoints && ((this.dragAxis = null), this._updateStartPoints()))));
  }
  _rafRenderLoop() {
    (this.isDragging || this.isZooming) &&
      (this._updateVelocity(),
      this.isDragging
        ? x(this.p1, this.prevP1) || this.drag.change()
        : (!x(this.p1, this.prevP1) || !x(this.p2, this.prevP2)) && this.zoomLevels.change(),
      this._updatePrevPoints(),
      (this.raf = requestAnimationFrame(this._rafRenderLoop.bind(this))));
  }
  _updateVelocity(t) {
    const i = Date.now(),
      e = i - this._intervalTime;
    (e < 50 && !t) ||
      ((this.velocity.x = this._getVelocity('x', e)),
      (this.velocity.y = this._getVelocity('y', e)),
      (this._intervalTime = i),
      p(this._intervalP1, this.p1),
      (this._velocityCalculated = !0));
  }
  _finishTap(t) {
    const { mainScroll: i } = this.pswp;
    if (i.isShifted()) return void i.moveIndexBy(0, !0);
    if (t.type.indexOf('cancel') > 0) return;
    if ('mouseup' === t.type || 'mouse' === t.pointerType) return void this.tapHandler.click(this.startP1, t);
    const e = this.pswp.options.doubleTapAction ? at : 0;
    this._tapTimer
      ? (this._clearTapTimer(), A(this._lastStartP1, this.startP1) < 25 && this.tapHandler.doubleTap(this.startP1, t))
      : (p(this._lastStartP1, this.startP1),
        (this._tapTimer = setTimeout(() => {
          this.tapHandler.tap(this.startP1, t), this._clearTapTimer();
        }, e)));
  }
  _clearTapTimer() {
    this._tapTimer && (clearTimeout(this._tapTimer), (this._tapTimer = null));
  }
  _getVelocity(t, i) {
    const e = this.p1[t] - this._intervalP1[t];
    return Math.abs(e) > 1 && i > 5 ? e / i : 0;
  }
  _rafStopLoop() {
    this.raf && (cancelAnimationFrame(this.raf), (this.raf = null));
  }
  _preventPointerEventBehaviour(t, i) {
    this.pswp.applyFilters('preventPointerEvent', !0, t, i) && t.preventDefault();
  }
  _updatePoints(t, i) {
    if (this._pointerEventEnabled) {
      const e = t,
        s = this._ongoingPointers.findIndex((t) => t.id === e.pointerId);
      'up' === i && s > -1
        ? this._ongoingPointers.splice(s, 1)
        : 'down' === i && -1 === s
          ? this._ongoingPointers.push(this._convertEventPosToPoint(e, { x: 0, y: 0 }))
          : s > -1 && this._convertEventPosToPoint(e, this._ongoingPointers[s]),
        (this._numActivePoints = this._ongoingPointers.length),
        this._numActivePoints > 0 && p(this.p1, this._ongoingPointers[0]),
        this._numActivePoints > 1 && p(this.p2, this._ongoingPointers[1]);
    } else {
      const e = t;
      (this._numActivePoints = 0),
        e.type.indexOf('touch') > -1
          ? e.touches &&
            e.touches.length > 0 &&
            (this._convertEventPosToPoint(e.touches[0], this.p1),
            this._numActivePoints++,
            e.touches.length > 1 && (this._convertEventPosToPoint(e.touches[1], this.p2), this._numActivePoints++))
          : (this._convertEventPosToPoint(t, this.p1),
            'up' === i ? (this._numActivePoints = 0) : this._numActivePoints++);
    }
  }
  _updatePrevPoints() {
    p(this.prevP1, this.p1), p(this.prevP2, this.p2);
  }
  _updateStartPoints() {
    p(this.startP1, this.p1), p(this.startP2, this.p2), this._updatePrevPoints();
  }
  _calculateDragDirection() {
    if (this.pswp.mainScroll.isShifted()) this.dragAxis = 'x';
    else {
      const t = Math.abs(this.p1.x - this.startP1.x) - Math.abs(this.p1.y - this.startP1.y);
      if (0 !== t) {
        const i = t > 0 ? 'x' : 'y';
        Math.abs(this.p1[i] - this.startP1[i]) >= 10 && (this.dragAxis = i);
      }
    }
  }
  _convertEventPosToPoint(t, i) {
    return (
      (i.x = t.pageX - this.pswp.offset.x),
      (i.y = t.pageY - this.pswp.offset.y),
      'pointerId' in t ? (i.id = t.pointerId) : void 0 !== t.identifier && (i.id = t.identifier),
      i
    );
  }
  _onClick(t) {
    this.pswp.mainScroll.isShifted() && (t.preventDefault(), t.stopPropagation());
  }
}
const ct = 0.35;
class dt {
  constructor(t) {
    (this.pswp = t),
      (this.x = 0),
      (this.slideWidth = 0),
      (this._currPositionIndex = 0),
      (this._prevPositionIndex = 0),
      (this._containerShiftIndex = -1),
      (this.itemHolders = []);
  }
  resize(t) {
    const { pswp: i } = this,
      e = Math.round(i.viewportSize.x + i.viewportSize.x * i.options.spacing),
      s = e !== this.slideWidth;
    s && ((this.slideWidth = e), this.moveTo(this.getCurrSlideX())),
      this.itemHolders.forEach((i, e) => {
        s && y(i.el, (e + this._containerShiftIndex) * this.slideWidth), t && i.slide && i.slide.resize();
      });
  }
  resetPosition() {
    (this._currPositionIndex = 0),
      (this._prevPositionIndex = 0),
      (this.slideWidth = 0),
      (this._containerShiftIndex = -1);
  }
  appendHolders() {
    this.itemHolders = [];
    for (let t = 0; t < 3; t++) {
      const i = f('pswp__item', 'div', this.pswp.container);
      i.setAttribute('role', 'group'),
        i.setAttribute('aria-roledescription', 'slide'),
        i.setAttribute('aria-hidden', 'true'),
        (i.style.display = 1 === t ? 'block' : 'none'),
        this.itemHolders.push({ el: i });
    }
  }
  canBeSwiped() {
    return this.pswp.getNumItems() > 1;
  }
  moveIndexBy(t, i, e) {
    const { pswp: s } = this;
    let n = s.potentialIndex + t;
    const o = s.getNumItems();
    if (s.canLoop()) {
      n = s.getLoopedIndex(n);
      const i = (t + o) % o;
      t = i <= o / 2 ? i : i - o;
    } else n < 0 ? (n = 0) : n >= o && (n = o - 1), (t = n - s.potentialIndex);
    (s.potentialIndex = n), (this._currPositionIndex -= t), s.animations.stopMainScroll();
    const a = this.getCurrSlideX();
    if (i) {
      s.animations.startSpring({
        isMainScroll: !0,
        start: this.x,
        end: a,
        velocity: e || 0,
        naturalFrequency: 30,
        dampingRatio: 1,
        onUpdate: (t) => {
          this.moveTo(t);
        },
        onComplete: () => {
          this.updateCurrItem(), s.appendHeavy();
        },
      });
      let t = s.potentialIndex - s.currIndex;
      if (s.canLoop()) {
        const i = (t + o) % o;
        t = i <= o / 2 ? i : i - o;
      }
      Math.abs(t) > 1 && this.updateCurrItem();
    } else this.moveTo(a), this.updateCurrItem();
    return !!t;
  }
  getCurrSlideX() {
    return this.slideWidth * this._currPositionIndex;
  }
  isShifted() {
    return this.x !== this.getCurrSlideX();
  }
  updateCurrItem() {
    var t;
    const { pswp: i } = this,
      e = this._prevPositionIndex - this._currPositionIndex;
    if (!e) return;
    (this._prevPositionIndex = this._currPositionIndex), (i.currIndex = i.potentialIndex);
    let s,
      n = Math.abs(e);
    n >= 3 &&
      ((this._containerShiftIndex += e + (e > 0 ? -3 : 3)),
      (n = 3),
      this.itemHolders.forEach((t) => {
        var i;
        null === (i = t.slide) || void 0 === i || i.destroy(), (t.slide = void 0);
      }));
    for (let t = 0; t < n; t++)
      e > 0
        ? ((s = this.itemHolders.shift()),
          s &&
            ((this.itemHolders[2] = s),
            this._containerShiftIndex++,
            y(s.el, (this._containerShiftIndex + 2) * this.slideWidth),
            i.setContent(s, i.currIndex - n + t + 2)))
        : ((s = this.itemHolders.pop()),
          s &&
            (this.itemHolders.unshift(s),
            this._containerShiftIndex--,
            y(s.el, this._containerShiftIndex * this.slideWidth),
            i.setContent(s, i.currIndex + n - t - 2)));
    Math.abs(this._containerShiftIndex) > 50 && !this.isShifted() && (this.resetPosition(), this.resize()),
      i.animations.stopAllPan(),
      this.itemHolders.forEach((t, i) => {
        t.slide && t.slide.setIsActive(1 === i);
      }),
      (i.currSlide = null === (t = this.itemHolders[1]) || void 0 === t ? void 0 : t.slide),
      i.contentLoader.updateLazy(e),
      i.currSlide && i.currSlide.applyCurrentZoomPan(),
      i.dispatch('change');
  }
  moveTo(t, i) {
    if (!this.pswp.canLoop() && i) {
      let i = (this.slideWidth * this._currPositionIndex - t) / this.slideWidth;
      i += this.pswp.currIndex;
      const e = Math.round(t - this.x);
      ((i < 0 && e > 0) || (i >= this.pswp.getNumItems() - 1 && e < 0)) && (t = this.x + e * ct);
    }
    (this.x = t),
      this.pswp.container && y(this.pswp.container, t),
      this.pswp.dispatch('moveMainScroll', { x: t, dragging: i ?? !1 });
  }
}
const pt = { Escape: 27, z: 90, ArrowLeft: 37, ArrowUp: 38, ArrowRight: 39, ArrowDown: 40, Tab: 9 },
  g = (t, i) => (i ? t : pt[t]);
class ut {
  constructor(t) {
    (this.pswp = t),
      (this._wasFocused = !1),
      t.on('bindEvents', () => {
        t.options.trapFocus &&
          (t.options.initialPointerPos || this._focusRoot(),
          t.events.add(document, 'focusin', this._onFocusIn.bind(this))),
          t.events.add(document, 'keydown', this._onKeyDown.bind(this));
      });
    const i = document.activeElement;
    t.on('destroy', () => {
      t.options.returnFocus && i && this._wasFocused && i.focus();
    });
  }
  _focusRoot() {
    !this._wasFocused && this.pswp.element && (this.pswp.element.focus(), (this._wasFocused = !0));
  }
  _onKeyDown(t) {
    const { pswp: i } = this;
    if (i.dispatch('keydown', { originalEvent: t }).defaultPrevented || G(t)) return;
    let e,
      s,
      n = !1;
    const o = 'key' in t;
    switch (o ? t.key : t.keyCode) {
      case g('Escape', o):
        i.options.escKey && (e = 'close');
        break;
      case g('z', o):
        e = 'toggleZoom';
        break;
      case g('ArrowLeft', o):
        s = 'x';
        break;
      case g('ArrowUp', o):
        s = 'y';
        break;
      case g('ArrowRight', o):
        (s = 'x'), (n = !0);
        break;
      case g('ArrowDown', o):
        (n = !0), (s = 'y');
        break;
      case g('Tab', o):
        this._focusRoot();
    }
    if (s) {
      t.preventDefault();
      const { currSlide: o } = i;
      i.options.arrowKeys && 'x' === s && i.getNumItems() > 1
        ? (e = n ? 'next' : 'prev')
        : o && o.currZoomLevel > o.zoomLevels.fit && ((o.pan[s] += n ? -80 : 80), o.panTo(o.pan.x, o.pan.y));
    }
    e && (t.preventDefault(), i[e]());
  }
  _onFocusIn(t) {
    const { template: i } = this.pswp;
    i && document !== t.target && i !== t.target && !i.contains(t.target) && i.focus();
  }
}
const mt = 'cubic-bezier(.4,0,.22,1)';
class ft {
  constructor(t) {
    var i;
    this.props = t;
    const { target: e, onComplete: s, transform: n, onFinish: o = () => {}, duration: a = 333, easing: h = mt } = t;
    this.onFinish = o;
    const r = n ? 'transform' : 'opacity',
      l = null !== (i = t[r]) && void 0 !== i ? i : '';
    (this._target = e),
      (this._onComplete = s),
      (this._finished = !1),
      (this._onTransitionEnd = this._onTransitionEnd.bind(this)),
      (this._helperTimeout = setTimeout(() => {
        R(e, r, a, h),
          (this._helperTimeout = setTimeout(() => {
            e.addEventListener('transitionend', this._onTransitionEnd, !1),
              e.addEventListener('transitioncancel', this._onTransitionEnd, !1),
              (this._helperTimeout = setTimeout(() => {
                this._finalizeAnimation();
              }, a + 500)),
              (e.style[r] = l);
          }, 30));
      }, 0));
  }
  _onTransitionEnd(t) {
    t.target === this._target && this._finalizeAnimation();
  }
  _finalizeAnimation() {
    this._finished || ((this._finished = !0), this.onFinish(), this._onComplete && this._onComplete());
  }
  destroy() {
    this._helperTimeout && clearTimeout(this._helperTimeout),
      U(this._target),
      this._target.removeEventListener('transitionend', this._onTransitionEnd, !1),
      this._target.removeEventListener('transitioncancel', this._onTransitionEnd, !1),
      this._finished || this._finalizeAnimation();
  }
}
const _t = 12,
  vt = 0.75;
class gt {
  constructor(t, i, e) {
    (this.velocity = 1e3 * t),
      (this._dampingRatio = i || vt),
      (this._naturalFrequency = e || 12),
      (this._dampedFrequency = this._naturalFrequency),
      this._dampingRatio < 1 && (this._dampedFrequency *= Math.sqrt(1 - this._dampingRatio * this._dampingRatio));
  }
  easeFrame(t, i) {
    let e,
      s = 0;
    i /= 1e3;
    const n = Math.E ** (-this._dampingRatio * this._naturalFrequency * i);
    if (1 === this._dampingRatio)
      (e = this.velocity + this._naturalFrequency * t),
        (s = (t + e * i) * n),
        (this.velocity = s * -this._naturalFrequency + e * n);
    else if (this._dampingRatio < 1) {
      e = (1 / this._dampedFrequency) * (this._dampingRatio * this._naturalFrequency * t + this.velocity);
      const o = Math.cos(this._dampedFrequency * i),
        a = Math.sin(this._dampedFrequency * i);
      (s = n * (t * o + e * a)),
        (this.velocity =
          s * -this._naturalFrequency * this._dampingRatio +
          n * (-this._dampedFrequency * t * a + this._dampedFrequency * e * o));
    }
    return s;
  }
}
class yt {
  constructor(t) {
    (this.props = t), (this._raf = 0);
    const {
      start: i,
      end: e,
      velocity: s,
      onUpdate: n,
      onComplete: o,
      onFinish: a = () => {},
      dampingRatio: h,
      naturalFrequency: r,
    } = t;
    this.onFinish = a;
    const l = new gt(s, h, r);
    let p = Date.now(),
      d = i - e;
    const c = () => {
      this._raf &&
        ((d = l.easeFrame(d, Date.now() - p)),
        Math.abs(d) < 1 && Math.abs(l.velocity) < 50
          ? (n(e), o && o(), this.onFinish())
          : ((p = Date.now()), n(d + e), (this._raf = requestAnimationFrame(c))));
    };
    this._raf = requestAnimationFrame(c);
  }
  destroy() {
    this._raf >= 0 && cancelAnimationFrame(this._raf), (this._raf = 0);
  }
}
class wt {
  constructor() {
    this.activeAnimations = [];
  }
  startSpring(t) {
    this._start(t, !0);
  }
  startTransition(t) {
    this._start(t);
  }
  _start(t, i) {
    const e = i ? new yt(t) : new ft(t);
    return this.activeAnimations.push(e), (e.onFinish = () => this.stop(e)), e;
  }
  stop(t) {
    t.destroy();
    const i = this.activeAnimations.indexOf(t);
    i > -1 && this.activeAnimations.splice(i, 1);
  }
  stopAll() {
    this.activeAnimations.forEach((t) => {
      t.destroy();
    }),
      (this.activeAnimations = []);
  }
  stopAllPan() {
    this.activeAnimations = this.activeAnimations.filter((t) => !t.props.isPan || (t.destroy(), !1));
  }
  stopMainScroll() {
    this.activeAnimations = this.activeAnimations.filter((t) => !t.props.isMainScroll || (t.destroy(), !1));
  }
  isPanRunning() {
    return this.activeAnimations.some((t) => t.props.isPan);
  }
}
class Pt {
  constructor(t) {
    (this.pswp = t), t.events.add(t.element, 'wheel', this._onWheel.bind(this));
  }
  _onWheel(t) {
    t.preventDefault();
    const { currSlide: i } = this.pswp;
    let { deltaX: e, deltaY: s } = t;
    if (i && !this.pswp.dispatch('wheel', { originalEvent: t }).defaultPrevented)
      if (t.ctrlKey || this.pswp.options.wheelToZoom) {
        if (i.isZoomable()) {
          let e = -s;
          1 === t.deltaMode ? (e *= 0.05) : (e *= t.deltaMode ? 1 : 0.002), (e = 2 ** e);
          const n = i.currZoomLevel * e;
          i.zoomTo(n, { x: t.clientX, y: t.clientY });
        }
      } else i.isPannable() && (1 === t.deltaMode && ((e *= 18), (s *= 18)), i.panTo(i.pan.x - e, i.pan.y - s));
  }
}
function St(t) {
  if ('string' == typeof t) return t;
  if (!t || !t.isCustomSVG) return '';
  const i = t;
  let e = '<svg aria-hidden="true" class="pswp__icn" viewBox="0 0 %d %d" width="%d" height="%d">';
  return (
    (e = e.split('%d').join(i.size || 32)),
    i.outlineID && (e += '<use class="pswp__icn-shadow" xlink:href="#' + i.outlineID + '"/>'),
    (e += i.inner),
    (e += '</svg>'),
    e
  );
}
class xt {
  constructor(t, i) {
    var e;
    const s = i.name || i.className;
    let n = i.html;
    if (!1 === t.options[s]) return;
    'string' == typeof t.options[s + 'SVG'] && (n = t.options[s + 'SVG']), t.dispatch('uiElementCreate', { data: i });
    let o = '';
    i.isButton
      ? ((o += 'pswp__button '), (o += i.className || `pswp__button--${i.name}`))
      : (o += i.className || `pswp__${i.name}`);
    let a = i.isButton ? i.tagName || 'button' : i.tagName || 'div';
    a = a.toLowerCase();
    const h = f(o, a);
    if (i.isButton) {
      'button' === a && (h.type = 'button');
      let { title: e } = i;
      const { ariaLabel: n } = i;
      'string' == typeof t.options[s + 'Title'] && (e = t.options[s + 'Title']), e && (h.title = e);
      const o = n || e;
      o && h.setAttribute('aria-label', o);
    }
    (h.innerHTML = St(n)),
      i.onInit && i.onInit(h, t),
      i.onClick &&
        (h.onclick = (e) => {
          'string' == typeof i.onClick ? t[i.onClick]() : 'function' == typeof i.onClick && i.onClick(e, h, t);
        });
    const r = i.appendTo || 'bar';
    let l = t.element;
    'bar' === r
      ? (t.topBar || (t.topBar = f('pswp__top-bar pswp__hide-on-close', 'div', t.scrollWrap)), (l = t.topBar))
      : (h.classList.add('pswp__hide-on-close'), 'wrapper' === r && (l = t.scrollWrap)),
      null === (e = l) || void 0 === e || e.appendChild(t.applyFilters('uiElement', h, i));
  }
}
function k(t, i, e) {
  t.classList.add('pswp__button--arrow'),
    t.setAttribute('aria-controls', 'pswp__items'),
    i.on('change', () => {
      i.options.loop || (t.disabled = e ? !(i.currIndex < i.getNumItems() - 1) : !(i.currIndex > 0));
    });
}
const bt = {
    name: 'arrowPrev',
    className: 'pswp__button--arrow--prev',
    title: 'Previous',
    order: 10,
    isButton: !0,
    appendTo: 'wrapper',
    html: {
      isCustomSVG: !0,
      size: 60,
      inner: '<path d="M29 43l-3 3-16-16 16-16 3 3-13 13 13 13z" id="pswp__icn-arrow"/>',
      outlineID: 'pswp__icn-arrow',
    },
    onClick: 'prev',
    onInit: k,
  },
  It = {
    name: 'arrowNext',
    className: 'pswp__button--arrow--next',
    title: 'Next',
    order: 11,
    isButton: !0,
    appendTo: 'wrapper',
    html: { isCustomSVG: !0, size: 60, inner: '<use xlink:href="#pswp__icn-arrow"/>', outlineID: 'pswp__icn-arrow' },
    onClick: 'next',
    onInit: (t, i) => {
      k(t, i, !0);
    },
  },
  At = {
    name: 'close',
    title: 'Close',
    order: 20,
    isButton: !0,
    html: {
      isCustomSVG: !0,
      inner: '<path d="M24 10l-2-2-6 6-6-6-2 2 6 6-6 6 2 2 6-6 6 6 2-2-6-6z" id="pswp__icn-close"/>',
      outlineID: 'pswp__icn-close',
    },
    onClick: 'close',
  },
  Lt = {
    name: 'zoom',
    title: 'Zoom',
    order: 10,
    isButton: !0,
    html: {
      isCustomSVG: !0,
      inner:
        '<path d="M17.426 19.926a6 6 0 1 1 1.5-1.5L23 22.5 21.5 24l-4.074-4.074z" id="pswp__icn-zoom"/><path fill="currentColor" class="pswp__zoom-icn-bar-h" d="M11 16v-2h6v2z"/><path fill="currentColor" class="pswp__zoom-icn-bar-v" d="M13 12h2v6h-2z"/>',
      outlineID: 'pswp__icn-zoom',
    },
    onClick: 'toggleZoom',
  },
  Ct = {
    name: 'preloader',
    appendTo: 'bar',
    order: 7,
    html: {
      isCustomSVG: !0,
      inner:
        '<path fill-rule="evenodd" clip-rule="evenodd" d="M21.2 16a5.2 5.2 0 1 1-5.2-5.2V8a8 8 0 1 0 8 8h-2.8Z" id="pswp__icn-loading"/>',
      outlineID: 'pswp__icn-loading',
    },
    onInit: (t, i) => {
      let e,
        s = null;
      const n = (i) => {
          e !== i &&
            ((e = i),
            ((i, e) => {
              t.classList.toggle('pswp__preloader--' + i, e);
            })('active', i));
        },
        o = () => {
          var t;
          if (null === (t = i.currSlide) || void 0 === t || !t.content.isLoading())
            return n(!1), void (s && (clearTimeout(s), (s = null)));
          s ||
            (s = setTimeout(() => {
              var t;
              n(!(null === (t = i.currSlide) || void 0 === t || !t.content.isLoading())), (s = null);
            }, i.options.preloaderDelay));
        };
      i.on('change', o),
        i.on('loadComplete', (t) => {
          i.currSlide === t.slide && o();
        }),
        i.ui && (i.ui.updatePreloaderVisibility = o);
    },
  },
  Tt = {
    name: 'counter',
    order: 5,
    onInit: (t, i) => {
      i.on('change', () => {
        t.innerText = i.currIndex + 1 + i.options.indexIndicatorSep + i.getNumItems();
      });
    },
  };
function D(t, i) {
  t.classList.toggle('pswp--zoomed-in', i);
}
class zt {
  constructor(t) {
    (this.pswp = t),
      (this.isRegistered = !1),
      (this.uiElementsData = []),
      (this.items = []),
      (this.updatePreloaderVisibility = () => {}),
      (this._lastUpdatedZoomLevel = void 0);
  }
  init() {
    const { pswp: t } = this;
    (this.isRegistered = !1),
      (this.uiElementsData = [At, bt, It, Lt, Ct, Tt]),
      t.dispatch('uiRegister'),
      this.uiElementsData.sort((t, i) => (t.order || 0) - (i.order || 0)),
      (this.items = []),
      (this.isRegistered = !0),
      this.uiElementsData.forEach((t) => {
        this.registerElement(t);
      }),
      t.on('change', () => {
        var i;
        null === (i = t.element) || void 0 === i || i.classList.toggle('pswp--one-slide', 1 === t.getNumItems());
      }),
      t.on('zoomPanUpdate', () => this._onZoomPanUpdate());
  }
  registerElement(t) {
    this.isRegistered ? this.items.push(new xt(this.pswp, t)) : this.uiElementsData.push(t);
  }
  _onZoomPanUpdate() {
    const { template: t, currSlide: i, options: e } = this.pswp;
    if (this.pswp.opener.isClosing || !t || !i) return;
    let { currZoomLevel: s } = i;
    if ((this.pswp.opener.isOpen || (s = i.zoomLevels.initial), s === this._lastUpdatedZoomLevel)) return;
    this._lastUpdatedZoomLevel = s;
    const n = i.zoomLevels.initial - i.zoomLevels.secondary;
    if (Math.abs(n) < 0.01 || !i.isZoomable()) return D(t, !1), void t.classList.remove('pswp--zoom-allowed');
    t.classList.add('pswp--zoom-allowed');
    D(t, (s === i.zoomLevels.initial ? i.zoomLevels.secondary : i.zoomLevels.initial) <= s),
      ('zoom' === e.imageClickAction || 'zoom-or-close' === e.imageClickAction) &&
        t.classList.add('pswp--click-to-zoom');
  }
}
function Et(t) {
  const i = t.getBoundingClientRect();
  return { x: i.left, y: i.top, w: i.width };
}
function Ot(t, i, e) {
  const s = t.getBoundingClientRect(),
    n = s.width / i,
    o = s.height / e,
    a = n > o ? n : o,
    h = (s.width - i * a) / 2,
    r = (s.height - e * a) / 2,
    l = { x: s.left + h, y: s.top + r, w: i * a };
  return (l.innerRect = { w: s.width, h: s.height, x: h, y: r }), l;
}
function Zt(t, i, e) {
  const s = e.dispatch('thumbBounds', { index: t, itemData: i, instance: e });
  if (s.thumbBounds) return s.thumbBounds;
  const { element: n } = i;
  let o, a;
  if (n && !1 !== e.options.thumbSelector) {
    const t = e.options.thumbSelector || 'img';
    a = n.matches(t) ? n : n.querySelector(t);
  }
  return (
    (a = e.applyFilters('thumbEl', a, i, t)),
    a && (o = i.thumbCropped ? Ot(a, i.width || i.w || 0, i.height || i.h || 0) : Et(a)),
    e.applyFilters('thumbBounds', o, i, t)
  );
}
class Dt {
  constructor(t, i) {
    (this.type = t), (this.defaultPrevented = !1), i && Object.assign(this, i);
  }
  preventDefault() {
    this.defaultPrevented = !0;
  }
}
class Mt {
  constructor() {
    (this._listeners = {}), (this._filters = {}), (this.pswp = void 0), (this.options = void 0);
  }
  addFilter(t, i, e = 100) {
    var s, n, o;
    this._filters[t] || (this._filters[t] = []),
      null === (s = this._filters[t]) || void 0 === s || s.push({ fn: i, priority: e }),
      null === (n = this._filters[t]) || void 0 === n || n.sort((t, i) => t.priority - i.priority),
      null === (o = this.pswp) || void 0 === o || o.addFilter(t, i, e);
  }
  removeFilter(t, i) {
    this._filters[t] && (this._filters[t] = this._filters[t].filter((t) => t.fn !== i)),
      this.pswp && this.pswp.removeFilter(t, i);
  }
  applyFilters(t, ...i) {
    var e;
    return (
      null === (e = this._filters[t]) ||
        void 0 === e ||
        e.forEach((t) => {
          i[0] = t.fn.apply(this, i);
        }),
      i[0]
    );
  }
  on(t, i) {
    var e, s;
    this._listeners[t] || (this._listeners[t] = []),
      null === (e = this._listeners[t]) || void 0 === e || e.push(i),
      null === (s = this.pswp) || void 0 === s || s.on(t, i);
  }
  off(t, i) {
    var e;
    this._listeners[t] && (this._listeners[t] = this._listeners[t].filter((t) => i !== t)),
      null === (e = this.pswp) || void 0 === e || e.off(t, i);
  }
  dispatch(t, i) {
    var e;
    if (this.pswp) return this.pswp.dispatch(t, i);
    const s = new Dt(t, i);
    return (
      null === (e = this._listeners[t]) ||
        void 0 === e ||
        e.forEach((t) => {
          t.call(this, s);
        }),
      s
    );
  }
}
class Rt {
  constructor(t, i) {
    if (((this.element = f('pswp__img pswp__img--placeholder', t ? 'img' : 'div', i)), t)) {
      const i = this.element;
      (i.decoding = 'async'), (i.alt = ''), (i.src = t), i.setAttribute('role', 'presentation');
    }
    this.element.setAttribute('aria-hidden', 'true');
  }
  setDisplayedSize(t, i) {
    this.element &&
      ('IMG' === this.element.tagName
        ? (L(this.element, 250, 'auto'),
          (this.element.style.transformOrigin = '0 0'),
          (this.element.style.transform = b(0, 0, t / 250)))
        : L(this.element, t, i));
  }
  destroy() {
    var t;
    null !== (t = this.element) && void 0 !== t && t.parentNode && this.element.remove(), (this.element = null);
  }
}
class Ft {
  constructor(t, i, e) {
    (this.instance = i),
      (this.data = t),
      (this.index = e),
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
      (this.state = _.IDLE),
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
  load(t, i) {
    if (this.slide && this.usePlaceholder())
      if (this.placeholder) {
        const t = this.placeholder.element;
        t && !t.parentElement && this.slide.container.prepend(t);
      } else {
        const t = this.instance.applyFilters(
          'placeholderSrc',
          !(!this.data.msrc || !this.slide.isFirstSlide) && this.data.msrc,
          this
        );
        this.placeholder = new Rt(t, this.slide.container);
      }
    (this.element && !i) ||
      this.instance.dispatch('contentLoad', { content: this, isLazy: t }).defaultPrevented ||
      (this.isImageContent()
        ? ((this.element = f('pswp__img', 'img')), this.displayedImageWidth && this.loadImage(t))
        : ((this.element = f('pswp__content', 'div')), (this.element.innerHTML = this.data.html || '')),
      i && this.slide && this.slide.updateContentSize(!0));
  }
  loadImage(t) {
    var i, e;
    if (
      !this.isImageContent() ||
      !this.element ||
      this.instance.dispatch('contentLoadImage', { content: this, isLazy: t }).defaultPrevented
    )
      return;
    const s = this.element;
    this.updateSrcsetSizes(),
      this.data.srcset && (s.srcset = this.data.srcset),
      (s.src = null !== (i = this.data.src) && void 0 !== i ? i : ''),
      (s.alt = null !== (e = this.data.alt) && void 0 !== e ? e : ''),
      (this.state = _.LOADING),
      s.complete
        ? this.onLoaded()
        : ((s.onload = () => {
            this.onLoaded();
          }),
          (s.onerror = () => {
            this.onError();
          }));
  }
  setSlide(t) {
    (this.slide = t), (this.hasSlide = !0), (this.instance = t.pswp);
  }
  onLoaded() {
    (this.state = _.LOADED),
      this.slide &&
        this.element &&
        (this.instance.dispatch('loadComplete', { slide: this.slide, content: this }),
        this.slide.isActive &&
          this.slide.heavyAppended &&
          !this.element.parentNode &&
          (this.append(), this.slide.updateContentSize(!0)),
        (this.state === _.LOADED || this.state === _.ERROR) && this.removePlaceholder());
  }
  onError() {
    (this.state = _.ERROR),
      this.slide &&
        (this.displayError(),
        this.instance.dispatch('loadComplete', { slide: this.slide, isError: !0, content: this }),
        this.instance.dispatch('loadError', { slide: this.slide, content: this }));
  }
  isLoading() {
    return this.instance.applyFilters('isContentLoading', this.state === _.LOADING, this);
  }
  isError() {
    return this.state === _.ERROR;
  }
  isImageContent() {
    return 'image' === this.type;
  }
  setDisplayedSize(t, i) {
    if (
      this.element &&
      (this.placeholder && this.placeholder.setDisplayedSize(t, i),
      !this.instance.dispatch('contentResize', { content: this, width: t, height: i }).defaultPrevented &&
        (L(this.element, t, i), this.isImageContent() && !this.isError()))
    ) {
      const e = !this.displayedImageWidth && t;
      (this.displayedImageWidth = t),
        (this.displayedImageHeight = i),
        e ? this.loadImage(!1) : this.updateSrcsetSizes(),
        this.slide &&
          this.instance.dispatch('imageSizeChange', { slide: this.slide, width: t, height: i, content: this });
    }
  }
  isZoomable() {
    return this.instance.applyFilters('isContentZoomable', this.isImageContent() && this.state !== _.ERROR, this);
  }
  updateSrcsetSizes() {
    if (!this.isImageContent() || !this.element || !this.data.srcset) return;
    const t = this.element,
      i = this.instance.applyFilters('srcsetSizesWidth', this.displayedImageWidth, this);
    (!t.dataset.largestUsedSize || i > parseInt(t.dataset.largestUsedSize, 10)) &&
      ((t.sizes = i + 'px'), (t.dataset.largestUsedSize = String(i)));
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
      var t, i;
      let e = f('pswp__error-msg', 'div');
      (e.innerText =
        null !== (t = null === (i = this.instance.options) || void 0 === i ? void 0 : i.errorMsg) && void 0 !== t
          ? t
          : ''),
        (e = this.instance.applyFilters('contentErrorElement', e, this)),
        (this.element = f('pswp__content pswp__error-msg-container', 'div')),
        this.element.appendChild(e),
        (this.slide.container.innerText = ''),
        this.slide.container.appendChild(this.element),
        this.slide.updateContentSize(!0),
        this.removePlaceholder();
    }
  }
  append() {
    if (this.isAttached || !this.element) return;
    if (((this.isAttached = !0), this.state === _.ERROR)) return void this.displayError();
    if (this.instance.dispatch('contentAppend', { content: this }).defaultPrevented) return;
    const t = 'decode' in this.element;
    this.isImageContent()
      ? t && this.slide && (!this.slide.isActive || C())
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
      (this.isImageContent() && this.isDecoding && !C() ? this.appendImage() : this.isError() && this.load(!1, !0),
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
        (this.state === _.LOADED || this.state === _.ERROR) && this.removePlaceholder()));
  }
}
const Bt = 5;
function W(t, i, e) {
  const s = i.createContentFromData(t, e);
  let n;
  const { options: o } = i;
  if (o) {
    let a;
    (n = new H(o, t, -1)), (a = i.pswp ? i.pswp.viewportSize : B(o, i));
    const h = N(o, a, t, e);
    n.update(s.width, s.height, h);
  }
  return s.lazyLoad(), n && s.setDisplayedSize(Math.ceil(s.width * n.initial), Math.ceil(s.height * n.initial)), s;
}
function Nt(t, i) {
  const e = i.getItemData(t);
  if (!i.dispatch('lazyLoadSlide', { index: t, itemData: e }).defaultPrevented) return W(e, i, t);
}
class Ht {
  constructor(t) {
    (this.pswp = t),
      (this.limit = Math.max(t.options.preload[0] + t.options.preload[1] + 1, 5)),
      (this._cachedItems = []);
  }
  updateLazy(t) {
    const { pswp: i } = this;
    if (i.dispatch('lazyLoad').defaultPrevented) return;
    const { preload: e } = i.options,
      s = void 0 === t || t >= 0;
    let n;
    for (n = 0; n <= e[1]; n++) this.loadSlideByIndex(i.currIndex + (s ? n : -n));
    for (n = 1; n <= e[0]; n++) this.loadSlideByIndex(i.currIndex + (s ? -n : n));
  }
  loadSlideByIndex(t) {
    const i = this.pswp.getLoopedIndex(t);
    let e = this.getContentByIndex(i);
    e || ((e = Nt(i, this.pswp)), e && this.addToCache(e));
  }
  getContentBySlide(t) {
    let i = this.getContentByIndex(t.index);
    return i || ((i = this.pswp.createContentFromData(t.data, t.index)), this.addToCache(i)), i.setSlide(t), i;
  }
  addToCache(t) {
    if ((this.removeByIndex(t.index), this._cachedItems.push(t), this._cachedItems.length > this.limit)) {
      const t = this._cachedItems.findIndex((t) => !t.isAttached && !t.hasSlide);
      -1 !== t && this._cachedItems.splice(t, 1)[0].destroy();
    }
  }
  removeByIndex(t) {
    const i = this._cachedItems.findIndex((i) => i.index === t);
    -1 !== i && this._cachedItems.splice(i, 1);
  }
  getContentByIndex(t) {
    return this._cachedItems.find((i) => i.index === t);
  }
  destroy() {
    this._cachedItems.forEach((t) => t.destroy()), (this._cachedItems = []);
  }
}
class kt extends Mt {
  getNumItems() {
    var t;
    let i = 0;
    const e = null === (t = this.options) || void 0 === t ? void 0 : t.dataSource;
    e && 'length' in e
      ? (i = e.length)
      : e &&
        'gallery' in e &&
        (e.items || (e.items = this._getGalleryDOMElements(e.gallery)), e.items && (i = e.items.length));
    const s = this.dispatch('numItems', { dataSource: e, numItems: i });
    return this.applyFilters('numItems', s.numItems, e);
  }
  createContentFromData(t, i) {
    return new Ft(t, this, i);
  }
  getItemData(t) {
    var i;
    const e = null === (i = this.options) || void 0 === i ? void 0 : i.dataSource;
    let s = {};
    Array.isArray(e)
      ? (s = e[t])
      : e && 'gallery' in e && (e.items || (e.items = this._getGalleryDOMElements(e.gallery)), (s = e.items[t]));
    let n = s;
    n instanceof Element && (n = this._domElementToItemData(n));
    const o = this.dispatch('itemData', { itemData: n || {}, index: t });
    return this.applyFilters('itemData', o.itemData, t);
  }
  _getGalleryDOMElements(t) {
    var i, e;
    return (null !== (i = this.options) && void 0 !== i && i.children) ||
      (null !== (e = this.options) && void 0 !== e && e.childSelector)
      ? K(this.options.children, this.options.childSelector, t) || []
      : [t];
  }
  _domElementToItemData(t) {
    const i = { element: t },
      e = 'A' === t.tagName ? t : t.querySelector('a');
    if (e) {
      (i.src = e.dataset.pswpSrc || e.href),
        e.dataset.pswpSrcset && (i.srcset = e.dataset.pswpSrcset),
        (i.width = e.dataset.pswpWidth ? parseInt(e.dataset.pswpWidth, 10) : 0),
        (i.height = e.dataset.pswpHeight ? parseInt(e.dataset.pswpHeight, 10) : 0),
        (i.w = i.width),
        (i.h = i.height),
        e.dataset.pswpType && (i.type = e.dataset.pswpType);
      const n = t.querySelector('img');
      var s;
      if (n) (i.msrc = n.currentSrc || n.src), (i.alt = null !== (s = n.getAttribute('alt')) && void 0 !== s ? s : '');
      (e.dataset.pswpCropped || e.dataset.cropped) && (i.thumbCropped = !0);
    }
    return this.applyFilters('domItemData', i, t, e);
  }
  lazyLoadData(t, i) {
    return W(t, this, i);
  }
}
const P = 0.003;
class Wt {
  constructor(t) {
    (this.pswp = t),
      (this.isClosed = !0),
      (this.isOpen = !1),
      (this.isClosing = !1),
      (this.isOpening = !1),
      (this._duration = void 0),
      (this._useAnimation = !1),
      (this._croppedZoom = !1),
      (this._animateRootOpacity = !1),
      (this._animateBgOpacity = !1),
      (this._placeholder = void 0),
      (this._opacityElement = void 0),
      (this._cropContainer1 = void 0),
      (this._cropContainer2 = void 0),
      (this._thumbBounds = void 0),
      (this._prepareOpen = this._prepareOpen.bind(this)),
      t.on('firstZoomPan', this._prepareOpen);
  }
  open() {
    this._prepareOpen(), this._start();
  }
  close() {
    if (this.isClosed || this.isClosing || this.isOpening) return;
    const t = this.pswp.currSlide;
    (this.isOpen = !1),
      (this.isOpening = !1),
      (this.isClosing = !0),
      (this._duration = this.pswp.options.hideAnimationDuration),
      t && t.currZoomLevel * t.width >= this.pswp.options.maxWidthToAnimate && (this._duration = 0),
      this._applyStartProps(),
      setTimeout(
        () => {
          this._start();
        },
        this._croppedZoom ? 30 : 0
      );
  }
  _prepareOpen() {
    if ((this.pswp.off('firstZoomPan', this._prepareOpen), !this.isOpening)) {
      const t = this.pswp.currSlide;
      (this.isOpening = !0),
        (this.isClosing = !1),
        (this._duration = this.pswp.options.showAnimationDuration),
        t && t.zoomLevels.initial * t.width >= this.pswp.options.maxWidthToAnimate && (this._duration = 0),
        this._applyStartProps();
    }
  }
  _applyStartProps() {
    const { pswp: t } = this,
      i = this.pswp.currSlide,
      { options: e } = t;
    var s, n;
    ('fade' === e.showHideAnimationType
      ? ((e.showHideOpacity = !0), (this._thumbBounds = void 0))
      : 'none' === e.showHideAnimationType
        ? ((e.showHideOpacity = !1), (this._duration = 0), (this._thumbBounds = void 0))
        : this.isOpening && t._initialThumbBounds
          ? (this._thumbBounds = t._initialThumbBounds)
          : (this._thumbBounds = this.pswp.getThumbBounds()),
    (this._placeholder = i?.getPlaceholderElement()),
    t.animations.stopAll(),
    (this._useAnimation = !!(this._duration && this._duration > 50)),
    (this._animateZoom =
      !!this._thumbBounds && i?.content.usePlaceholder() && (!this.isClosing || !t.mainScroll.isShifted())),
    this._animateZoom)
      ? (this._animateRootOpacity = null !== (s = e.showHideOpacity) && void 0 !== s && s)
      : ((this._animateRootOpacity = !0), this.isOpening && i && (i.zoomAndPanToInitial(), i.applyCurrentZoomPan()));
    if (
      ((this._animateBgOpacity = !this._animateRootOpacity && this.pswp.options.bgOpacity > P),
      (this._opacityElement = this._animateRootOpacity ? t.element : t.bg),
      !this._useAnimation)
    )
      return (
        (this._duration = 0),
        (this._animateZoom = !1),
        (this._animateBgOpacity = !1),
        (this._animateRootOpacity = !0),
        void (this.isOpening && (t.element && (t.element.style.opacity = String(P)), t.applyBgOpacity(1)))
      );
    this._animateZoom && this._thumbBounds && this._thumbBounds.innerRect
      ? ((this._croppedZoom = !0),
        (this._cropContainer1 = this.pswp.container),
        (this._cropContainer2 = null === (n = this.pswp.currSlide) || void 0 === n ? void 0 : n.holderElement),
        t.container && ((t.container.style.overflow = 'hidden'), (t.container.style.width = t.viewportSize.x + 'px')))
      : (this._croppedZoom = !1);
    this.isOpening
      ? (this._animateRootOpacity
          ? (t.element && (t.element.style.opacity = String(P)), t.applyBgOpacity(1))
          : (this._animateBgOpacity && t.bg && (t.bg.style.opacity = String(P)),
            t.element && (t.element.style.opacity = '1')),
        this._animateZoom &&
          (this._setClosedStateZoomPan(),
          this._placeholder &&
            ((this._placeholder.style.willChange = 'transform'), (this._placeholder.style.opacity = String(P)))))
      : this.isClosing &&
        (t.mainScroll.itemHolders[0] && (t.mainScroll.itemHolders[0].el.style.display = 'none'),
        t.mainScroll.itemHolders[2] && (t.mainScroll.itemHolders[2].el.style.display = 'none'),
        this._croppedZoom && 0 !== t.mainScroll.x && (t.mainScroll.resetPosition(), t.mainScroll.resize()));
  }
  _start() {
    this.isOpening && this._useAnimation && this._placeholder && 'IMG' === this._placeholder.tagName
      ? new Promise((t) => {
          let i = !1,
            e = !0;
          q(this._placeholder).finally(() => {
            (i = !0), e || t(!0);
          }),
            setTimeout(() => {
              (e = !1), i && t(!0);
            }, 50),
            setTimeout(t, 250);
        }).finally(() => this._initiate())
      : this._initiate();
  }
  _initiate() {
    var t, i;
    null === (t = this.pswp.element) ||
      void 0 === t ||
      t.style.setProperty('--pswp-transition-duration', this._duration + 'ms'),
      this.pswp.dispatch(this.isOpening ? 'openingAnimationStart' : 'closingAnimationStart'),
      this.pswp.dispatch('initialZoom' + (this.isOpening ? 'In' : 'Out')),
      null === (i = this.pswp.element) || void 0 === i || i.classList.toggle('pswp--ui-visible', this.isOpening),
      this.isOpening
        ? (this._placeholder && (this._placeholder.style.opacity = '1'), this._animateToOpenState())
        : this.isClosing && this._animateToClosedState(),
      this._useAnimation || this._onAnimationComplete();
  }
  _onAnimationComplete() {
    const { pswp: t } = this;
    if (
      ((this.isOpen = this.isOpening),
      (this.isClosed = this.isClosing),
      (this.isOpening = !1),
      (this.isClosing = !1),
      t.dispatch(this.isOpen ? 'openingAnimationEnd' : 'closingAnimationEnd'),
      t.dispatch('initialZoom' + (this.isOpen ? 'InEnd' : 'OutEnd')),
      this.isClosed)
    )
      t.destroy();
    else if (this.isOpen) {
      var i;
      this._animateZoom &&
        t.container &&
        ((t.container.style.overflow = 'visible'), (t.container.style.width = '100%')),
        null === (i = t.currSlide) || void 0 === i || i.applyCurrentZoomPan();
    }
  }
  _animateToOpenState() {
    const { pswp: t } = this;
    this._animateZoom &&
      (this._croppedZoom &&
        this._cropContainer1 &&
        this._cropContainer2 &&
        (this._animateTo(this._cropContainer1, 'transform', 'translate3d(0,0,0)'),
        this._animateTo(this._cropContainer2, 'transform', 'none')),
      t.currSlide &&
        (t.currSlide.zoomAndPanToInitial(),
        this._animateTo(t.currSlide.container, 'transform', t.currSlide.getCurrentTransform()))),
      this._animateBgOpacity && t.bg && this._animateTo(t.bg, 'opacity', String(t.options.bgOpacity)),
      this._animateRootOpacity && t.element && this._animateTo(t.element, 'opacity', '1');
  }
  _animateToClosedState() {
    const { pswp: t } = this;
    this._animateZoom && this._setClosedStateZoomPan(!0),
      this._animateBgOpacity && t.bgOpacity > 0.01 && t.bg && this._animateTo(t.bg, 'opacity', '0'),
      this._animateRootOpacity && t.element && this._animateTo(t.element, 'opacity', '0');
  }
  _setClosedStateZoomPan(t) {
    if (!this._thumbBounds) return;
    const { pswp: i } = this,
      { innerRect: e } = this._thumbBounds,
      { currSlide: s, viewportSize: n } = i;
    if (this._croppedZoom && e && this._cropContainer1 && this._cropContainer2) {
      const i = -n.x + (this._thumbBounds.x - e.x) + e.w,
        s = -n.y + (this._thumbBounds.y - e.y) + e.h,
        o = n.x - e.w,
        a = n.y - e.h;
      t
        ? (this._animateTo(this._cropContainer1, 'transform', b(i, s)),
          this._animateTo(this._cropContainer2, 'transform', b(o, a)))
        : (y(this._cropContainer1, i, s), y(this._cropContainer2, o, a));
    }
    s &&
      (p(s.pan, e || this._thumbBounds),
      (s.currZoomLevel = this._thumbBounds.w / s.width),
      t ? this._animateTo(s.container, 'transform', s.getCurrentTransform()) : s.applyCurrentZoomPan());
  }
  _animateTo(t, i, e) {
    if (!this._duration) return void (t.style[i] = e);
    const { animations: s } = this.pswp,
      n = {
        duration: this._duration,
        easing: this.pswp.options.easing,
        onComplete: () => {
          s.activeAnimations.length || this._onAnimationComplete();
        },
        target: t,
      };
    (n[i] = e), s.startTransition(n);
  }
}
const Vt = {
  allowPanToNext: !0,
  spacing: 0.1,
  loop: !0,
  pinchToClose: !0,
  closeOnVerticalDrag: !0,
  hideAnimationDuration: 333,
  showAnimationDuration: 333,
  zoomAnimationDuration: 333,
  escKey: !0,
  arrowKeys: !0,
  trapFocus: !0,
  returnFocus: !0,
  maxWidthToAnimate: 4e3,
  clickToCloseNonZoomable: !0,
  imageClickAction: 'zoom-or-close',
  bgClickAction: 'close',
  tapAction: 'toggle-controls',
  doubleTapAction: 'zoom',
  indexIndicatorSep: ' / ',
  preloaderDelay: 2e3,
  bgOpacity: 0.8,
  index: 0,
  errorMsg: 'The image cannot be loaded',
  preload: [1, 2],
  easing: 'cubic-bezier(.4,0,.22,1)',
};
class $t extends kt {
  constructor(t) {
    super(),
      (this.options = this._prepareOptions(t || {})),
      (this.offset = { x: 0, y: 0 }),
      (this._prevViewportSize = { x: 0, y: 0 }),
      (this.viewportSize = { x: 0, y: 0 }),
      (this.bgOpacity = 1),
      (this.currIndex = 0),
      (this.potentialIndex = 0),
      (this.isOpen = !1),
      (this.isDestroying = !1),
      (this.hasMouse = !1),
      (this._initialItemData = {}),
      (this._initialThumbBounds = void 0),
      (this.topBar = void 0),
      (this.element = void 0),
      (this.template = void 0),
      (this.container = void 0),
      (this.scrollWrap = void 0),
      (this.currSlide = void 0),
      (this.events = new X()),
      (this.animations = new wt()),
      (this.mainScroll = new dt(this)),
      (this.gestures = new lt(this)),
      (this.opener = new Wt(this)),
      (this.keyboard = new ut(this)),
      (this.contentLoader = new Ht(this));
  }
  init() {
    if (this.isOpen || this.isDestroying) return !1;
    (this.isOpen = !0), this.dispatch('init'), this.dispatch('beforeOpen'), this._createMainStructure();
    let t = 'pswp--open';
    return (
      this.gestures.supportsTouch && (t += ' pswp--touch'),
      this.options.mainClass && (t += ' ' + this.options.mainClass),
      this.element && (this.element.className += ' ' + t),
      (this.currIndex = this.options.index || 0),
      (this.potentialIndex = this.currIndex),
      this.dispatch('firstUpdate'),
      (this.scrollWheel = new Pt(this)),
      (Number.isNaN(this.currIndex) || this.currIndex < 0 || this.currIndex >= this.getNumItems()) &&
        (this.currIndex = 0),
      this.gestures.supportsTouch || this.mouseDetected(),
      this.updateSize(),
      (this.offset.y = window.pageYOffset),
      (this._initialItemData = this.getItemData(this.currIndex)),
      this.dispatch('gettingData', { index: this.currIndex, data: this._initialItemData, slide: void 0 }),
      (this._initialThumbBounds = this.getThumbBounds()),
      this.dispatch('initialLayout'),
      this.on('openingAnimationEnd', () => {
        const { itemHolders: t } = this.mainScroll;
        t[0] && ((t[0].el.style.display = 'block'), this.setContent(t[0], this.currIndex - 1)),
          t[2] && ((t[2].el.style.display = 'block'), this.setContent(t[2], this.currIndex + 1)),
          this.appendHeavy(),
          this.contentLoader.updateLazy(),
          this.events.add(window, 'resize', this._handlePageResize.bind(this)),
          this.events.add(window, 'scroll', this._updatePageScrollOffset.bind(this)),
          this.dispatch('bindEvents');
      }),
      this.mainScroll.itemHolders[1] && this.setContent(this.mainScroll.itemHolders[1], this.currIndex),
      this.dispatch('change'),
      this.opener.open(),
      this.dispatch('afterInit'),
      !0
    );
  }
  getLoopedIndex(t) {
    const i = this.getNumItems();
    return this.options.loop && (t > i - 1 && (t -= i), t < 0 && (t += i)), I(t, 0, i - 1);
  }
  appendHeavy() {
    this.mainScroll.itemHolders.forEach((t) => {
      var i;
      null === (i = t.slide) || void 0 === i || i.appendHeavy();
    });
  }
  goTo(t) {
    this.mainScroll.moveIndexBy(this.getLoopedIndex(t) - this.potentialIndex);
  }
  next() {
    this.goTo(this.potentialIndex + 1);
  }
  prev() {
    this.goTo(this.potentialIndex - 1);
  }
  zoomTo(...t) {
    var i;
    null === (i = this.currSlide) || void 0 === i || i.zoomTo(...t);
  }
  toggleZoom() {
    var t;
    null === (t = this.currSlide) || void 0 === t || t.toggleZoom();
  }
  close() {
    !this.opener.isOpen ||
      this.isDestroying ||
      ((this.isDestroying = !0), this.dispatch('close'), this.events.removeAll(), this.opener.close());
  }
  destroy() {
    var t;
    if (!this.isDestroying) return (this.options.showHideAnimationType = 'none'), void this.close();
    this.dispatch('destroy'),
      (this._listeners = {}),
      this.scrollWrap && ((this.scrollWrap.ontouchmove = null), (this.scrollWrap.ontouchend = null)),
      null === (t = this.element) || void 0 === t || t.remove(),
      this.mainScroll.itemHolders.forEach((t) => {
        var i;
        null === (i = t.slide) || void 0 === i || i.destroy();
      }),
      this.contentLoader.destroy(),
      this.events.removeAll();
  }
  refreshSlideContent(t) {
    this.contentLoader.removeByIndex(t),
      this.mainScroll.itemHolders.forEach((i, e) => {
        var s, n;
        let o =
          (null !== (s = null === (n = this.currSlide) || void 0 === n ? void 0 : n.index) && void 0 !== s ? s : 0) -
          1 +
          e;
        var a;
        (this.canLoop() && (o = this.getLoopedIndex(o)), o === t && (this.setContent(i, t, !0), 1 === e)) &&
          ((this.currSlide = i.slide), null === (a = i.slide) || void 0 === a || a.setIsActive(!0));
      }),
      this.dispatch('change');
  }
  setContent(t, i, e) {
    if ((this.canLoop() && (i = this.getLoopedIndex(i)), t.slide)) {
      if (t.slide.index === i && !e) return;
      t.slide.destroy(), (t.slide = void 0);
    }
    if (!this.canLoop() && (i < 0 || i >= this.getNumItems())) return;
    const s = this.getItemData(i);
    (t.slide = new j(s, i, this)), i === this.currIndex && (this.currSlide = t.slide), t.slide.append(t.el);
  }
  getViewportCenterPoint() {
    return { x: this.viewportSize.x / 2, y: this.viewportSize.y / 2 };
  }
  updateSize(t) {
    if (this.isDestroying) return;
    const i = B(this.options, this);
    (!t && x(i, this._prevViewportSize)) ||
      (p(this._prevViewportSize, i),
      this.dispatch('beforeResize'),
      p(this.viewportSize, this._prevViewportSize),
      this._updatePageScrollOffset(),
      this.dispatch('viewportSize'),
      this.mainScroll.resize(this.opener.isOpen),
      !this.hasMouse && window.matchMedia('(any-hover: hover)').matches && this.mouseDetected(),
      this.dispatch('resize'));
  }
  applyBgOpacity(t) {
    (this.bgOpacity = Math.max(t, 0)),
      this.bg && (this.bg.style.opacity = String(this.bgOpacity * this.options.bgOpacity));
  }
  mouseDetected() {
    var t;
    this.hasMouse ||
      ((this.hasMouse = !0), null === (t = this.element) || void 0 === t || t.classList.add('pswp--has_mouse'));
  }
  _handlePageResize() {
    this.updateSize(),
      /iPhone|iPad|iPod/i.test(window.navigator.userAgent) &&
        setTimeout(() => {
          this.updateSize();
        }, 500);
  }
  _updatePageScrollOffset() {
    this.setScrollOffset(0, window.pageYOffset);
  }
  setScrollOffset(t, i) {
    (this.offset.x = t), (this.offset.y = i), this.dispatch('updateScrollOffset');
  }
  _createMainStructure() {
    (this.element = f('pswp', 'div')),
      this.element.setAttribute('tabindex', '-1'),
      this.element.setAttribute('role', 'dialog'),
      (this.template = this.element),
      (this.bg = f('pswp__bg', 'div', this.element)),
      (this.scrollWrap = f('pswp__scroll-wrap', 'section', this.element)),
      (this.container = f('pswp__container', 'div', this.scrollWrap)),
      this.scrollWrap.setAttribute('aria-roledescription', 'carousel'),
      this.container.setAttribute('aria-live', 'off'),
      this.container.setAttribute('id', 'pswp__items'),
      this.mainScroll.appendHolders(),
      (this.ui = new zt(this)),
      this.ui.init(),
      (this.options.appendToEl || document.body).appendChild(this.element);
  }
  getThumbBounds() {
    return Zt(this.currIndex, this.currSlide ? this.currSlide.data : this._initialItemData, this);
  }
  canLoop() {
    return this.options.loop && this.getNumItems() > 2;
  }
  _prepareOptions(t) {
    return (
      window.matchMedia('(prefers-reduced-motion), (update: slow)').matches &&
        ((t.showHideAnimationType = 'none'), (t.zoomAnimationDuration = 0)),
      { ...Vt, ...t }
    );
  }
}
export { $t as default };
