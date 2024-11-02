/*! @docsearch/js 3.5.2 | MIT License | © Algolia, Inc. and contributors | https://docsearch.algolia.com */ function cr(
  t,
  e
) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(t, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function I(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? cr(Object(r), !0).forEach(function (n) {
          fo(t, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : cr(Object(r)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return t;
}
function Ve(t) {
  return (
    (Ve =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e && typeof Symbol == 'function' && e.constructor === Symbol && e !== Symbol.prototype
              ? 'symbol'
              : typeof e;
          }),
    Ve(t)
  );
}
function fo(t, e, r) {
  return (
    e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = r), t
  );
}
function Lt() {
  return (
    (Lt =
      Object.assign ||
      function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = arguments[e];
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
        }
        return t;
      }),
    Lt.apply(this, arguments)
  );
}
function mo(t, e) {
  if (t == null) return {};
  var r,
    n,
    o = (function (a, c) {
      if (a == null) return {};
      var u,
        s,
        l = {},
        m = Object.keys(a);
      for (s = 0; s < m.length; s++) (u = m[s]), c.indexOf(u) >= 0 || (l[u] = a[u]);
      return l;
    })(t, e);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    for (n = 0; n < i.length; n++)
      (r = i[n]), e.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r]));
  }
  return o;
}
function se(t, e) {
  return (
    (function (r) {
      if (Array.isArray(r)) return r;
    })(t) ||
    (function (r, n) {
      var o = r == null ? null : (typeof Symbol < 'u' && r[Symbol.iterator]) || r['@@iterator'];
      if (o != null) {
        var i,
          a,
          c = [],
          u = !0,
          s = !1;
        try {
          for (o = o.call(r); !(u = (i = o.next()).done) && (c.push(i.value), !n || c.length !== n); u = !0);
        } catch (l) {
          (s = !0), (a = l);
        } finally {
          try {
            u || o.return == null || o.return();
          } finally {
            if (s) throw a;
          }
        }
        return c;
      }
    })(t, e) ||
    gn(t, e) ||
    (function () {
      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    })()
  );
}
function mt(t) {
  return (
    (function (e) {
      if (Array.isArray(e)) return Mt(e);
    })(t) ||
    (function (e) {
      if ((typeof Symbol < 'u' && e[Symbol.iterator] != null) || e['@@iterator'] != null) return Array.from(e);
    })(t) ||
    gn(t) ||
    (function () {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    })()
  );
}
function gn(t, e) {
  if (t) {
    if (typeof t == 'string') return Mt(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    return (
      r === 'Object' && t.constructor && (r = t.constructor.name),
      r === 'Map' || r === 'Set'
        ? Array.from(t)
        : r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? Mt(t, e)
          : void 0
    );
  }
}
function Mt(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
  return n;
}
var w,
  Pe,
  bn,
  lr,
  _n,
  pt = {},
  Yt = [],
  po = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function J(t, e) {
  for (var r in e) t[r] = e[r];
  return t;
}
function On(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function W(t, e, r) {
  var n,
    o,
    i,
    a = arguments,
    c = {};
  for (i in e) i == 'key' ? (n = e[i]) : i == 'ref' ? (o = e[i]) : (c[i] = e[i]);
  if (arguments.length > 3) for (r = [r], i = 3; i < arguments.length; i++) r.push(a[i]);
  if ((r != null && (c.children = r), typeof t == 'function' && t.defaultProps != null))
    for (i in t.defaultProps) c[i] === void 0 && (c[i] = t.defaultProps[i]);
  return Ie(t, c, n, o, null);
}
function Ie(t, e, r, n, o) {
  var i = {
    type: t,
    props: e,
    key: r,
    ref: n,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __d: void 0,
    __c: null,
    __h: null,
    constructor: void 0,
    __v: o ?? ++w.__v,
  };
  return w.vnode != null && w.vnode(i), i;
}
function X(t) {
  return t.children;
}
function K(t, e) {
  (this.props = t), (this.context = e);
}
function We(t, e) {
  if (e == null) return t.__ ? We(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var r; e < t.__k.length; e++) if ((r = t.__k[e]) != null && r.__e != null) return r.__e;
  return typeof t.type == 'function' ? We(t) : null;
}
function Sn(t) {
  var e, r;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((r = t.__k[e]) != null && r.__e != null) {
        t.__e = t.__c.base = r.__e;
        break;
      }
    return Sn(t);
  }
}
function Ht(t) {
  ((!t.__d && (t.__d = !0) && Pe.push(t) && !vt.__r++) || lr !== w.debounceRendering) &&
    ((lr = w.debounceRendering) || bn)(vt);
}
function vt() {
  for (var t; (vt.__r = Pe.length); )
    (t = Pe.sort(function (e, r) {
      return e.__v.__b - r.__v.__b;
    })),
      (Pe = []),
      t.some(function (e) {
        var r, n, o, i, a, c;
        e.__d &&
          ((a = (i = (r = e).__v).__e),
          (c = r.__P) &&
            ((n = []),
            ((o = J({}, i)).__v = i.__v + 1),
            Gt(c, i, o, r.__n, c.ownerSVGElement !== void 0, i.__h != null ? [a] : null, n, a ?? We(i), i.__h),
            Pn(n, i),
            i.__e != a && Sn(i)));
      });
}
function wn(t, e, r, n, o, i, a, c, u, s) {
  var l,
    m,
    p,
    v,
    d,
    h,
    y,
    b = (n && n.__k) || Yt,
    _ = b.length;
  for (r.__k = [], l = 0; l < e.length; l++)
    if (
      (v = r.__k[l] =
        (v = e[l]) == null || typeof v == 'boolean'
          ? null
          : typeof v == 'string' || typeof v == 'number'
            ? Ie(null, v, null, null, v)
            : Array.isArray(v)
              ? Ie(X, { children: v }, null, null, null)
              : v.__b > 0
                ? Ie(v.type, v.props, v.key, null, v.__v)
                : v) != null
    ) {
      if (((v.__ = r), (v.__b = r.__b + 1), (p = b[l]) === null || (p && v.key == p.key && v.type === p.type)))
        b[l] = void 0;
      else
        for (m = 0; m < _; m++) {
          if ((p = b[m]) && v.key == p.key && v.type === p.type) {
            b[m] = void 0;
            break;
          }
          p = null;
        }
      Gt(t, v, (p = p || pt), o, i, a, c, u, s),
        (d = v.__e),
        (m = v.ref) && p.ref != m && (y || (y = []), p.ref && y.push(p.ref, null, v), y.push(m, v.__c || d, v)),
        d != null
          ? (h == null && (h = d),
            typeof v.type == 'function' && v.__k != null && v.__k === p.__k
              ? (v.__d = u = jn(v, u, t))
              : (u = En(t, v, p, b, d, u)),
            s || r.type !== 'option' ? typeof r.type == 'function' && (r.__d = u) : (t.value = ''))
          : u && p.__e == u && u.parentNode != t && (u = We(p));
    }
  for (r.__e = h, l = _; l--; )
    b[l] != null &&
      (typeof r.type == 'function' && b[l].__e != null && b[l].__e == r.__d && (r.__d = We(n, l + 1)), Dn(b[l], b[l]));
  if (y) for (l = 0; l < y.length; l++) In(y[l], y[++l], y[++l]);
}
function jn(t, e, r) {
  var n, o;
  for (n = 0; n < t.__k.length; n++)
    (o = t.__k[n]) && ((o.__ = t), (e = typeof o.type == 'function' ? jn(o, e, r) : En(r, o, o, t.__k, o.__e, e)));
  return e;
}
function $(t, e) {
  return (
    (e = e || []),
    t == null ||
      typeof t == 'boolean' ||
      (Array.isArray(t)
        ? t.some(function (r) {
            $(r, e);
          })
        : e.push(t)),
    e
  );
}
function En(t, e, r, n, o, i) {
  var a, c, u;
  if (e.__d !== void 0) (a = e.__d), (e.__d = void 0);
  else if (r == null || o != i || o.parentNode == null)
    e: if (i == null || i.parentNode !== t) t.appendChild(o), (a = null);
    else {
      for (c = i, u = 0; (c = c.nextSibling) && u < n.length; u += 2) if (c == o) break e;
      t.insertBefore(o, i), (a = i);
    }
  return a !== void 0 ? a : o.nextSibling;
}
function sr(t, e, r) {
  e[0] === '-' ? t.setProperty(e, r) : (t[e] = r == null ? '' : typeof r != 'number' || po.test(e) ? r : r + 'px');
}
function Ye(t, e, r, n, o) {
  var i;
  e: if (e === 'style')
    if (typeof r == 'string') t.style.cssText = r;
    else {
      if ((typeof n == 'string' && (t.style.cssText = n = ''), n)) for (e in n) (r && e in r) || sr(t.style, e, '');
      if (r) for (e in r) (n && r[e] === n[e]) || sr(t.style, e, r[e]);
    }
  else if (e[0] === 'o' && e[1] === 'n')
    (i = e !== (e = e.replace(/Capture$/, ''))),
      (e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2)),
      t.l || (t.l = {}),
      (t.l[e + i] = r),
      r ? n || t.addEventListener(e, i ? mr : fr, i) : t.removeEventListener(e, i ? mr : fr, i);
  else if (e !== 'dangerouslySetInnerHTML') {
    if (o) e = e.replace(/xlink[H:h]/, 'h').replace(/sName$/, 's');
    else if (e !== 'href' && e !== 'list' && e !== 'form' && e !== 'download' && e in t)
      try {
        t[e] = r ?? '';
        break e;
      } catch {}
    typeof r == 'function' ||
      (r != null && (r !== !1 || (e[0] === 'a' && e[1] === 'r')) ? t.setAttribute(e, r) : t.removeAttribute(e));
  }
}
function fr(t) {
  this.l[t.type + !1](w.event ? w.event(t) : t);
}
function mr(t) {
  this.l[t.type + !0](w.event ? w.event(t) : t);
}
function Gt(t, e, r, n, o, i, a, c, u) {
  var s,
    l,
    m,
    p,
    v,
    d,
    h,
    y,
    b,
    _,
    S,
    O = e.type;
  if (e.constructor !== void 0) return null;
  r.__h != null && ((u = r.__h), (c = e.__e = r.__e), (e.__h = null), (i = [c])), (s = w.__b) && s(e);
  try {
    e: if (typeof O == 'function') {
      if (
        ((y = e.props),
        (b = (s = O.contextType) && n[s.__c]),
        (_ = s ? (b ? b.props.value : s.__) : n),
        r.__c
          ? (h = (l = e.__c = r.__c).__ = l.__E)
          : ('prototype' in O && O.prototype.render
              ? (e.__c = l = new O(y, _))
              : ((e.__c = l = new K(y, _)), (l.constructor = O), (l.render = ho)),
            b && b.sub(l),
            (l.props = y),
            l.state || (l.state = {}),
            (l.context = _),
            (l.__n = n),
            (m = l.__d = !0),
            (l.__h = [])),
        l.__s == null && (l.__s = l.state),
        O.getDerivedStateFromProps != null &&
          (l.__s == l.state && (l.__s = J({}, l.__s)), J(l.__s, O.getDerivedStateFromProps(y, l.__s))),
        (p = l.props),
        (v = l.state),
        m)
      )
        O.getDerivedStateFromProps == null && l.componentWillMount != null && l.componentWillMount(),
          l.componentDidMount != null && l.__h.push(l.componentDidMount);
      else {
        if (
          (O.getDerivedStateFromProps == null &&
            y !== p &&
            l.componentWillReceiveProps != null &&
            l.componentWillReceiveProps(y, _),
          (!l.__e && l.shouldComponentUpdate != null && l.shouldComponentUpdate(y, l.__s, _) === !1) || e.__v === r.__v)
        ) {
          (l.props = y),
            (l.state = l.__s),
            e.__v !== r.__v && (l.__d = !1),
            (l.__v = e),
            (e.__e = r.__e),
            (e.__k = r.__k),
            l.__h.length && a.push(l);
          break e;
        }
        l.componentWillUpdate != null && l.componentWillUpdate(y, l.__s, _),
          l.componentDidUpdate != null &&
            l.__h.push(function () {
              l.componentDidUpdate(p, v, d);
            });
      }
      (l.context = _),
        (l.props = y),
        (l.state = l.__s),
        (s = w.__r) && s(e),
        (l.__d = !1),
        (l.__v = e),
        (l.__P = t),
        (s = l.render(l.props, l.state, l.context)),
        (l.state = l.__s),
        l.getChildContext != null && (n = J(J({}, n), l.getChildContext())),
        m || l.getSnapshotBeforeUpdate == null || (d = l.getSnapshotBeforeUpdate(p, v)),
        (S = s != null && s.type === X && s.key == null ? s.props.children : s),
        wn(t, Array.isArray(S) ? S : [S], e, r, n, o, i, a, c, u),
        (l.base = e.__e),
        (e.__h = null),
        l.__h.length && a.push(l),
        h && (l.__E = l.__ = null),
        (l.__e = !1);
    } else i == null && e.__v === r.__v ? ((e.__k = r.__k), (e.__e = r.__e)) : (e.__e = vo(r.__e, e, r, n, o, i, a, u));
    (s = w.diffed) && s(e);
  } catch (g) {
    (e.__v = null), (u || i != null) && ((e.__e = c), (e.__h = !!u), (i[i.indexOf(c)] = null)), w.__e(g, e, r);
  }
}
function Pn(t, e) {
  w.__c && w.__c(e, t),
    t.some(function (r) {
      try {
        (t = r.__h),
          (r.__h = []),
          t.some(function (n) {
            n.call(r);
          });
      } catch (n) {
        w.__e(n, r.__v);
      }
    });
}
function vo(t, e, r, n, o, i, a, c) {
  var u,
    s,
    l,
    m,
    p = r.props,
    v = e.props,
    d = e.type,
    h = 0;
  if ((d === 'svg' && (o = !0), i != null)) {
    for (; h < i.length; h++)
      if ((u = i[h]) && (u === t || (d ? u.localName == d : u.nodeType == 3))) {
        (t = u), (i[h] = null);
        break;
      }
  }
  if (t == null) {
    if (d === null) return document.createTextNode(v);
    (t = o ? document.createElementNS('http://www.w3.org/2000/svg', d) : document.createElement(d, v.is && v)),
      (i = null),
      (c = !1);
  }
  if (d === null) p === v || (c && t.data === v) || (t.data = v);
  else {
    if (
      ((i = i && Yt.slice.call(t.childNodes)),
      (s = (p = r.props || pt).dangerouslySetInnerHTML),
      (l = v.dangerouslySetInnerHTML),
      !c)
    ) {
      if (i != null) for (p = {}, m = 0; m < t.attributes.length; m++) p[t.attributes[m].name] = t.attributes[m].value;
      (l || s) &&
        ((l && ((s && l.__html == s.__html) || l.__html === t.innerHTML)) || (t.innerHTML = (l && l.__html) || ''));
    }
    if (
      ((function (y, b, _, S, O) {
        var g;
        for (g in _) g === 'children' || g === 'key' || g in b || Ye(y, g, null, _[g], S);
        for (g in b)
          (O && typeof b[g] != 'function') ||
            g === 'children' ||
            g === 'key' ||
            g === 'value' ||
            g === 'checked' ||
            _[g] === b[g] ||
            Ye(y, g, b[g], _[g], S);
      })(t, v, p, o, c),
      l)
    )
      e.__k = [];
    else if (
      ((h = e.props.children),
      wn(t, Array.isArray(h) ? h : [h], e, r, n, o && d !== 'foreignObject', i, a, t.firstChild, c),
      i != null)
    )
      for (h = i.length; h--; ) i[h] != null && On(i[h]);
    c ||
      ('value' in v &&
        (h = v.value) !== void 0 &&
        (h !== t.value || (d === 'progress' && !h)) &&
        Ye(t, 'value', h, p.value, !1),
      'checked' in v && (h = v.checked) !== void 0 && h !== t.checked && Ye(t, 'checked', h, p.checked, !1));
  }
  return t;
}
function In(t, e, r) {
  try {
    typeof t == 'function' ? t(e) : (t.current = e);
  } catch (n) {
    w.__e(n, r);
  }
}
function Dn(t, e, r) {
  var n, o, i;
  if (
    (w.unmount && w.unmount(t),
    (n = t.ref) && ((n.current && n.current !== t.__e) || In(n, null, e)),
    r || typeof t.type == 'function' || (r = (o = t.__e) != null),
    (t.__e = t.__d = void 0),
    (n = t.__c) != null)
  ) {
    if (n.componentWillUnmount)
      try {
        n.componentWillUnmount();
      } catch (a) {
        w.__e(a, e);
      }
    n.base = n.__P = null;
  }
  if ((n = t.__k)) for (i = 0; i < n.length; i++) n[i] && Dn(n[i], e, r);
  o != null && On(o);
}
function ho(t, e, r) {
  return this.constructor(t, r);
}
function Ke(t, e, r) {
  var n, o, i;
  w.__ && w.__(t, e),
    (o = (n = typeof r == 'function') ? null : (r && r.__k) || e.__k),
    (i = []),
    Gt(
      e,
      (t = ((!n && r) || e).__k = W(X, null, [t])),
      o || pt,
      pt,
      e.ownerSVGElement !== void 0,
      !n && r ? [r] : o ? null : e.firstChild ? Yt.slice.call(e.childNodes) : null,
      i,
      !n && r ? r : o ? o.__e : e.firstChild,
      n
    ),
    Pn(i, t);
}
function kn(t, e) {
  Ke(t, e, kn);
}
function yo(t, e, r) {
  var n,
    o,
    i,
    a = arguments,
    c = J({}, t.props);
  for (i in e) i == 'key' ? (n = e[i]) : i == 'ref' ? (o = e[i]) : (c[i] = e[i]);
  if (arguments.length > 3) for (r = [r], i = 3; i < arguments.length; i++) r.push(a[i]);
  return r != null && (c.children = r), Ie(t.type, c, n || t.key, o || t.ref, null);
}
(w = {
  __e: function (t, e) {
    for (var r, n, o; (e = e.__); )
      if ((r = e.__c) && !r.__)
        try {
          if (
            ((n = r.constructor) &&
              n.getDerivedStateFromError != null &&
              (r.setState(n.getDerivedStateFromError(t)), (o = r.__d)),
            r.componentDidCatch != null && (r.componentDidCatch(t), (o = r.__d)),
            o)
          )
            return (r.__E = r);
        } catch (i) {
          t = i;
        }
    throw t;
  },
  __v: 0,
}),
  (K.prototype.setState = function (t, e) {
    var r;
    (r = this.__s != null && this.__s !== this.state ? this.__s : (this.__s = J({}, this.state))),
      typeof t == 'function' && (t = t(J({}, r), this.props)),
      t && J(r, t),
      t != null && this.__v && (e && this.__h.push(e), Ht(this));
  }),
  (K.prototype.forceUpdate = function (t) {
    this.__v && ((this.__e = !0), t && this.__h.push(t), Ht(this));
  }),
  (K.prototype.render = X),
  (Pe = []),
  (bn = typeof Promise == 'function' ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout),
  (vt.__r = 0),
  (_n = 0);
var de,
  q,
  pr,
  pe = 0,
  Ut = [],
  vr = w.__b,
  dr = w.__r,
  hr = w.diffed,
  yr = w.__c,
  gr = w.unmount;
function Je(t, e) {
  w.__h && w.__h(q, t, pe || e), (pe = 0);
  var r = q.__H || (q.__H = { __: [], __h: [] });
  return t >= r.__.length && r.__.push({}), r.__[t];
}
function An(t) {
  return (pe = 1), Cn(Nn, t);
}
function Cn(t, e, r) {
  var n = Je(de++, 2);
  return (
    (n.t = t),
    n.__c ||
      ((n.__ = [
        r ? r(e) : Nn(void 0, e),
        function (o) {
          var i = n.t(n.__[0], o);
          n.__[0] !== i && ((n.__ = [i, n.__[1]]), n.__c.setState({}));
        },
      ]),
      (n.__c = q)),
    n.__
  );
}
function xn(t, e) {
  var r = Je(de++, 3);
  !w.__s && Xt(r.__H, e) && ((r.__ = t), (r.__H = e), q.__H.__h.push(r));
}
function br(t, e) {
  var r = Je(de++, 4);
  !w.__s && Xt(r.__H, e) && ((r.__ = t), (r.__H = e), q.__h.push(r));
}
function It(t, e) {
  var r = Je(de++, 7);
  return Xt(r.__H, e) && ((r.__ = t()), (r.__H = e), (r.__h = t)), r.__;
}
function go() {
  Ut.forEach(function (t) {
    if (t.__P)
      try {
        t.__H.__h.forEach(ct), t.__H.__h.forEach(Ft), (t.__H.__h = []);
      } catch (e) {
        (t.__H.__h = []), w.__e(e, t.__v);
      }
  }),
    (Ut = []);
}
(w.__b = function (t) {
  (q = null), vr && vr(t);
}),
  (w.__r = function (t) {
    dr && dr(t), (de = 0);
    var e = (q = t.__c).__H;
    e && (e.__h.forEach(ct), e.__h.forEach(Ft), (e.__h = []));
  }),
  (w.diffed = function (t) {
    hr && hr(t);
    var e = t.__c;
    e &&
      e.__H &&
      e.__H.__h.length &&
      ((Ut.push(e) !== 1 && pr === w.requestAnimationFrame) ||
        (
          (pr = w.requestAnimationFrame) ||
          function (r) {
            var n,
              o = function () {
                clearTimeout(i), _r && cancelAnimationFrame(n), setTimeout(r);
              },
              i = setTimeout(o, 100);
            _r && (n = requestAnimationFrame(o));
          }
        )(go)),
      (q = void 0);
  }),
  (w.__c = function (t, e) {
    e.some(function (r) {
      try {
        r.__h.forEach(ct),
          (r.__h = r.__h.filter(function (n) {
            return !n.__ || Ft(n);
          }));
      } catch (n) {
        e.some(function (o) {
          o.__h && (o.__h = []);
        }),
          (e = []),
          w.__e(n, r.__v);
      }
    }),
      yr && yr(t, e);
  }),
  (w.unmount = function (t) {
    gr && gr(t);
    var e = t.__c;
    if (e && e.__H)
      try {
        e.__H.__.forEach(ct);
      } catch (r) {
        w.__e(r, e.__v);
      }
  });
var _r = typeof requestAnimationFrame == 'function';
function ct(t) {
  var e = q;
  typeof t.__c == 'function' && t.__c(), (q = e);
}
function Ft(t) {
  var e = q;
  (t.__c = t.__()), (q = e);
}
function Xt(t, e) {
  return (
    !t ||
    t.length !== e.length ||
    e.some(function (r, n) {
      return r !== t[n];
    })
  );
}
function Nn(t, e) {
  return typeof e == 'function' ? e(t) : e;
}
function Tn(t, e) {
  for (var r in e) t[r] = e[r];
  return t;
}
function Bt(t, e) {
  for (var r in t) if (r !== '__source' && !(r in e)) return !0;
  for (var n in e) if (n !== '__source' && t[n] !== e[n]) return !0;
  return !1;
}
function Vt(t) {
  this.props = t;
}
((Vt.prototype = new K()).isPureReactComponent = !0),
  (Vt.prototype.shouldComponentUpdate = function (t, e) {
    return Bt(this.props, t) || Bt(this.state, e);
  });
var Or = w.__b;
w.__b = function (t) {
  t.type && t.type.__f && t.ref && ((t.props.ref = t.ref), (t.ref = null)), Or && Or(t);
};
var bo = (typeof Symbol < 'u' && Symbol.for && Symbol.for('react.forward_ref')) || 3911,
  Sr = function (t, e) {
    return t == null ? null : $($(t).map(e));
  },
  _o = {
    map: Sr,
    forEach: Sr,
    count: function (t) {
      return t ? $(t).length : 0;
    },
    only: function (t) {
      var e = $(t);
      if (e.length !== 1) throw 'Children.only';
      return e[0];
    },
    toArray: $,
  },
  Oo = w.__e;
function lt() {
  (this.__u = 0), (this.t = null), (this.__b = null);
}
function Rn(t) {
  var e = t.__.__c;
  return e && e.__e && e.__e(t);
}
function je() {
  (this.u = null), (this.o = null);
}
(w.__e = function (t, e, r) {
  if (t.then) {
    for (var n, o = e; (o = o.__); )
      if ((n = o.__c) && n.__c) return e.__e == null && ((e.__e = r.__e), (e.__k = r.__k)), n.__c(t, e);
  }
  Oo(t, e, r);
}),
  ((lt.prototype = new K()).__c = function (t, e) {
    var r = e.__c,
      n = this;
    n.t == null && (n.t = []), n.t.push(r);
    var o = Rn(n.__v),
      i = !1,
      a = function () {
        i || ((i = !0), (r.componentWillUnmount = r.__c), o ? o(c) : c());
      };
    (r.__c = r.componentWillUnmount),
      (r.componentWillUnmount = function () {
        a(), r.__c && r.__c();
      });
    var c = function () {
        if (!--n.__u) {
          if (n.state.__e) {
            var s = n.state.__e;
            n.__v.__k[0] = (function m(p, v, d) {
              return (
                p &&
                  ((p.__v = null),
                  (p.__k =
                    p.__k &&
                    p.__k.map(function (h) {
                      return m(h, v, d);
                    })),
                  p.__c &&
                    p.__c.__P === v &&
                    (p.__e && d.insertBefore(p.__e, p.__d), (p.__c.__e = !0), (p.__c.__P = d))),
                p
              );
            })(s, s.__c.__P, s.__c.__O);
          }
          var l;
          for (n.setState({ __e: (n.__b = null) }); (l = n.t.pop()); ) l.forceUpdate();
        }
      },
      u = e.__h === !0;
    n.__u++ || u || n.setState({ __e: (n.__b = n.__v.__k[0]) }), t.then(a, a);
  }),
  (lt.prototype.componentWillUnmount = function () {
    this.t = [];
  }),
  (lt.prototype.render = function (t, e) {
    if (this.__b) {
      if (this.__v.__k) {
        var r = document.createElement('div'),
          n = this.__v.__k[0].__c;
        this.__v.__k[0] = (function i(a, c, u) {
          return (
            a &&
              (a.__c &&
                a.__c.__H &&
                (a.__c.__H.__.forEach(function (s) {
                  typeof s.__c == 'function' && s.__c();
                }),
                (a.__c.__H = null)),
              (a = Tn({}, a)).__c != null && (a.__c.__P === u && (a.__c.__P = c), (a.__c = null)),
              (a.__k =
                a.__k &&
                a.__k.map(function (s) {
                  return i(s, c, u);
                }))),
            a
          );
        })(this.__b, r, (n.__O = n.__P));
      }
      this.__b = null;
    }
    var o = e.__e && W(X, null, t.fallback);
    return o && (o.__h = null), [W(X, null, e.__e ? null : t.children), o];
  });
var wr = function (t, e, r) {
  if ((++r[1] === r[0] && t.o.delete(e), t.props.revealOrder && (t.props.revealOrder[0] !== 't' || !t.o.size)))
    for (r = t.u; r; ) {
      for (; r.length > 3; ) r.pop()();
      if (r[1] < r[0]) break;
      t.u = r = r[2];
    }
};
function So(t) {
  return (
    (this.getChildContext = function () {
      return t.context;
    }),
    t.children
  );
}
function wo(t) {
  var e = this,
    r = t.i;
  (e.componentWillUnmount = function () {
    Ke(null, e.l), (e.l = null), (e.i = null);
  }),
    e.i && e.i !== r && e.componentWillUnmount(),
    t.__v
      ? (e.l ||
          ((e.i = r),
          (e.l = {
            nodeType: 1,
            parentNode: r,
            childNodes: [],
            appendChild: function (n) {
              this.childNodes.push(n), e.i.appendChild(n);
            },
            insertBefore: function (n, o) {
              this.childNodes.push(n), e.i.appendChild(n);
            },
            removeChild: function (n) {
              this.childNodes.splice(this.childNodes.indexOf(n) >>> 1, 1), e.i.removeChild(n);
            },
          })),
        Ke(W(So, { context: e.context }, t.__v), e.l))
      : e.l && e.componentWillUnmount();
}
function qn(t, e) {
  return W(wo, { __v: t, i: e });
}
((je.prototype = new K()).__e = function (t) {
  var e = this,
    r = Rn(e.__v),
    n = e.o.get(t);
  return (
    n[0]++,
    function (o) {
      var i = function () {
        e.props.revealOrder ? (n.push(o), wr(e, t, n)) : o();
      };
      r ? r(i) : i();
    }
  );
}),
  (je.prototype.render = function (t) {
    (this.u = null), (this.o = new Map());
    var e = $(t.children);
    t.revealOrder && t.revealOrder[0] === 'b' && e.reverse();
    for (var r = e.length; r--; ) this.o.set(e[r], (this.u = [1, 0, this.u]));
    return t.children;
  }),
  (je.prototype.componentDidUpdate = je.prototype.componentDidMount =
    function () {
      var t = this;
      this.o.forEach(function (e, r) {
        wr(t, r, e);
      });
    });
var Ln = (typeof Symbol < 'u' && Symbol.for && Symbol.for('react.element')) || 60103,
  jo =
    /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
  Eo = function (t) {
    return (typeof Symbol < 'u' && Ve(Symbol()) == 'symbol' ? /fil|che|rad/i : /fil|che|ra/i).test(t);
  };
function Mn(t, e, r) {
  return e.__k == null && (e.textContent = ''), Ke(t, e), typeof r == 'function' && r(), t ? t.__c : null;
}
(K.prototype.isReactComponent = {}),
  ['componentWillMount', 'componentWillReceiveProps', 'componentWillUpdate'].forEach(function (t) {
    Object.defineProperty(K.prototype, t, {
      configurable: !0,
      get: function () {
        return this['UNSAFE_' + t];
      },
      set: function (e) {
        Object.defineProperty(this, t, { configurable: !0, writable: !0, value: e });
      },
    });
  });
var jr = w.event;
function Po() {}
function Io() {
  return this.cancelBubble;
}
function Do() {
  return this.defaultPrevented;
}
w.event = function (t) {
  return (
    jr && (t = jr(t)), (t.persist = Po), (t.isPropagationStopped = Io), (t.isDefaultPrevented = Do), (t.nativeEvent = t)
  );
};
var Hn,
  Er = {
    configurable: !0,
    get: function () {
      return this.class;
    },
  },
  Pr = w.vnode;
w.vnode = function (t) {
  var e = t.type,
    r = t.props,
    n = r;
  if (typeof e == 'string') {
    for (var o in ((n = {}), r)) {
      var i = r[o];
      (o === 'value' && 'defaultValue' in r && i == null) ||
        (o === 'defaultValue' && 'value' in r && r.value == null
          ? (o = 'value')
          : o === 'download' && i === !0
            ? (i = '')
            : /ondoubleclick/i.test(o)
              ? (o = 'ondblclick')
              : /^onchange(textarea|input)/i.test(o + e) && !Eo(r.type)
                ? (o = 'oninput')
                : /^on(Ani|Tra|Tou|BeforeInp)/.test(o)
                  ? (o = o.toLowerCase())
                  : jo.test(o)
                    ? (o = o.replace(/[A-Z0-9]/, '-$&').toLowerCase())
                    : i === null && (i = void 0),
        (n[o] = i));
    }
    e == 'select' &&
      n.multiple &&
      Array.isArray(n.value) &&
      (n.value = $(r.children).forEach(function (a) {
        a.props.selected = n.value.indexOf(a.props.value) != -1;
      })),
      e == 'select' &&
        n.defaultValue != null &&
        (n.value = $(r.children).forEach(function (a) {
          a.props.selected = n.multiple ? n.defaultValue.indexOf(a.props.value) != -1 : n.defaultValue == a.props.value;
        })),
      (t.props = n);
  }
  e &&
    r.class != r.className &&
    ((Er.enumerable = 'className' in r),
    r.className != null && (n.class = r.className),
    Object.defineProperty(n, 'className', Er)),
    (t.$$typeof = Ln),
    Pr && Pr(t);
};
var Ir = w.__r;
w.__r = function (t) {
  Ir && Ir(t), (Hn = t.__c);
};
var ko = {
  ReactCurrentDispatcher: {
    current: {
      readContext: function (t) {
        return Hn.__n[t.__c].props.value;
      },
    },
  },
};
(typeof performance > 'u' ? 'undefined' : Ve(performance)) == 'object' &&
  typeof performance.now == 'function' &&
  performance.now.bind(performance);
function Dr(t) {
  return !!t && t.$$typeof === Ln;
}
var f = {
  useState: An,
  useReducer: Cn,
  useEffect: xn,
  useLayoutEffect: br,
  useRef: function (t) {
    return (
      (pe = 5),
      It(function () {
        return { current: t };
      }, [])
    );
  },
  useImperativeHandle: function (t, e, r) {
    (pe = 6),
      br(
        function () {
          typeof t == 'function' ? t(e()) : t && (t.current = e());
        },
        r == null ? r : r.concat(t)
      );
  },
  useMemo: It,
  useCallback: function (t, e) {
    return (
      (pe = 8),
      It(function () {
        return t;
      }, e)
    );
  },
  useContext: function (t) {
    var e = q.context[t.__c],
      r = Je(de++, 9);
    return (r.__c = t), e ? (r.__ == null && ((r.__ = !0), e.sub(q)), e.props.value) : t.__;
  },
  useDebugValue: function (t, e) {
    w.useDebugValue && w.useDebugValue(e ? e(t) : t);
  },
  version: '16.8.0',
  Children: _o,
  render: Mn,
  hydrate: function (t, e, r) {
    return kn(t, e), typeof r == 'function' && r(), t ? t.__c : null;
  },
  unmountComponentAtNode: function (t) {
    return !!t.__k && (Ke(null, t), !0);
  },
  createPortal: qn,
  createElement: W,
  createContext: function (t, e) {
    var r = {
      __c: (e = '__cC' + _n++),
      __: t,
      Consumer: function (n, o) {
        return n.children(o);
      },
      Provider: function (n) {
        var o, i;
        return (
          this.getChildContext ||
            ((o = []),
            ((i = {})[e] = this),
            (this.getChildContext = function () {
              return i;
            }),
            (this.shouldComponentUpdate = function (a) {
              this.props.value !== a.value && o.some(Ht);
            }),
            (this.sub = function (a) {
              o.push(a);
              var c = a.componentWillUnmount;
              a.componentWillUnmount = function () {
                o.splice(o.indexOf(a), 1), c && c.call(a);
              };
            })),
          n.children
        );
      },
    };
    return (r.Provider.__ = r.Consumer.contextType = r);
  },
  createFactory: function (t) {
    return W.bind(null, t);
  },
  cloneElement: function (t) {
    return Dr(t) ? yo.apply(null, arguments) : t;
  },
  createRef: function () {
    return { current: null };
  },
  Fragment: X,
  isValidElement: Dr,
  findDOMNode: function (t) {
    return (t && (t.base || (t.nodeType === 1 && t))) || null;
  },
  Component: K,
  PureComponent: Vt,
  memo: function (t, e) {
    function r(o) {
      var i = this.props.ref,
        a = i == o.ref;
      return !a && i && (i.call ? i(null) : (i.current = null)), e ? !e(this.props, o) || !a : Bt(this.props, o);
    }
    function n(o) {
      return (this.shouldComponentUpdate = r), W(t, o);
    }
    return (
      (n.displayName = 'Memo(' + (t.displayName || t.name) + ')'), (n.prototype.isReactComponent = !0), (n.__f = !0), n
    );
  },
  forwardRef: function (t) {
    function e(r, n) {
      var o = Tn({}, r);
      return delete o.ref, t(o, (n = r.ref || n) && (Ve(n) != 'object' || 'current' in n) ? n : null);
    }
    return (
      (e.$$typeof = bo),
      (e.render = e),
      (e.prototype.isReactComponent = e.__f = !0),
      (e.displayName = 'ForwardRef(' + (t.displayName || t.name) + ')'),
      e
    );
  },
  unstable_batchedUpdates: function (t, e) {
    return t(e);
  },
  StrictMode: X,
  Suspense: lt,
  SuspenseList: je,
  lazy: function (t) {
    var e, r, n;
    function o(i) {
      if (
        (e ||
          (e = t()).then(
            function (a) {
              r = a.default || a;
            },
            function (a) {
              n = a;
            }
          ),
        n)
      )
        throw n;
      if (!r) throw e;
      return W(r, i);
    }
    return (o.displayName = 'Lazy'), (o.__f = !0), o;
  },
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ko,
};
function Ao() {
  return f.createElement(
    'svg',
    { width: '15', height: '15', className: 'DocSearch-Control-Key-Icon' },
    f.createElement('path', {
      d: 'M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953',
      strokeWidth: '1.2',
      stroke: 'currentColor',
      fill: 'none',
      strokeLinecap: 'square',
    })
  );
}
function Un() {
  return f.createElement(
    'svg',
    { width: '20', height: '20', className: 'DocSearch-Search-Icon', viewBox: '0 0 20 20' },
    f.createElement('path', {
      d: 'M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z',
      stroke: 'currentColor',
      fill: 'none',
      fillRule: 'evenodd',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
    })
  );
}
var Co = ['translations'];
function Wt() {
  return (
    (Wt =
      Object.assign ||
      function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = arguments[e];
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
        }
        return t;
      }),
    Wt.apply(this, arguments)
  );
}
function xo(t, e) {
  return (
    (function (r) {
      if (Array.isArray(r)) return r;
    })(t) ||
    (function (r, n) {
      var o = r == null ? null : (typeof Symbol < 'u' && r[Symbol.iterator]) || r['@@iterator'];
      if (o != null) {
        var i,
          a,
          c = [],
          u = !0,
          s = !1;
        try {
          for (o = o.call(r); !(u = (i = o.next()).done) && (c.push(i.value), !n || c.length !== n); u = !0);
        } catch (l) {
          (s = !0), (a = l);
        } finally {
          try {
            u || o.return == null || o.return();
          } finally {
            if (s) throw a;
          }
        }
        return c;
      }
    })(t, e) ||
    (function (r, n) {
      if (r) {
        if (typeof r == 'string') return kr(r, n);
        var o = Object.prototype.toString.call(r).slice(8, -1);
        if ((o === 'Object' && r.constructor && (o = r.constructor.name), o === 'Map' || o === 'Set'))
          return Array.from(r);
        if (o === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)) return kr(r, n);
      }
    })(t, e) ||
    (function () {
      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    })()
  );
}
function kr(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
  return n;
}
function No(t, e) {
  if (t == null) return {};
  var r,
    n,
    o = (function (a, c) {
      if (a == null) return {};
      var u,
        s,
        l = {},
        m = Object.keys(a);
      for (s = 0; s < m.length; s++) (u = m[s]), c.indexOf(u) >= 0 || (l[u] = a[u]);
      return l;
    })(t, e);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    for (n = 0; n < i.length; n++)
      (r = i[n]), e.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r]));
  }
  return o;
}
var To = f.forwardRef(function (t, e) {
  var r = t.translations,
    n = r === void 0 ? {} : r,
    o = No(t, Co),
    i = n.buttonText,
    a = i === void 0 ? 'Search' : i,
    c = n.buttonAriaLabel,
    u = c === void 0 ? 'Search' : c,
    s = xo(An(null), 2),
    l = s[0],
    m = s[1];
  return (
    xn(function () {
      typeof navigator < 'u' && (/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform) ? m('⌘') : m('Ctrl'));
    }, []),
    f.createElement(
      'button',
      Wt({ type: 'button', className: 'DocSearch DocSearch-Button', 'aria-label': u }, o, { ref: e }),
      f.createElement(
        'span',
        { className: 'DocSearch-Button-Container' },
        f.createElement(Un, null),
        f.createElement('span', { className: 'DocSearch-Button-Placeholder' }, a)
      ),
      f.createElement(
        'span',
        { className: 'DocSearch-Button-Keys' },
        l !== null &&
          f.createElement(
            f.Fragment,
            null,
            f.createElement('kbd', { className: 'DocSearch-Button-Key' }, l === 'Ctrl' ? f.createElement(Ao, null) : l),
            f.createElement('kbd', { className: 'DocSearch-Button-Key' }, 'K')
          )
      )
    )
  );
});
function Fn(t, e) {
  var r = void 0;
  return function () {
    for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++) o[i] = arguments[i];
    r && clearTimeout(r),
      (r = setTimeout(function () {
        return t.apply(void 0, o);
      }, e));
  };
}
function ze(t) {
  return t.reduce(function (e, r) {
    return e.concat(r);
  }, []);
}
var Ro = 0;
function Kt(t) {
  return t.collections.length === 0
    ? 0
    : t.collections.reduce(function (e, r) {
        return e + r.items.length;
      }, 0);
}
function Ar(t) {
  return t !== Object(t);
}
function Bn(t, e) {
  if (t === e) return !0;
  if (Ar(t) || Ar(e) || typeof t == 'function' || typeof e == 'function') return t === e;
  if (Object.keys(t).length !== Object.keys(e).length) return !1;
  for (var r = 0, n = Object.keys(t); r < n.length; r++) {
    var o = n[r];
    if (!(o in e) || !Bn(t[o], e[o])) return !1;
  }
  return !0;
}
var dt = function () {},
  qo = [{ segment: 'autocomplete-core', version: '1.9.3' }];
function Cr(t) {
  var e = t.item,
    r = t.items;
  return {
    index: e.__autocomplete_indexName,
    items: [e],
    positions: [
      1 +
        r.findIndex(function (n) {
          return n.objectID === e.objectID;
        }),
    ],
    queryID: e.__autocomplete_queryID,
    algoliaSource: ['autocomplete'],
  };
}
function Lo(t, e) {
  return (
    (function (r) {
      if (Array.isArray(r)) return r;
    })(t) ||
    (function (r, n) {
      var o = r == null ? null : (typeof Symbol < 'u' && r[Symbol.iterator]) || r['@@iterator'];
      if (o != null) {
        var i,
          a,
          c,
          u,
          s = [],
          l = !0,
          m = !1;
        try {
          if (((c = (o = o.call(r)).next), n !== 0))
            for (; !(l = (i = c.call(o)).done) && (s.push(i.value), s.length !== n); l = !0);
        } catch (p) {
          (m = !0), (a = p);
        } finally {
          try {
            if (!l && o.return != null && ((u = o.return()), Object(u) !== u)) return;
          } finally {
            if (m) throw a;
          }
        }
        return s;
      }
    })(t, e) ||
    (function (r, n) {
      if (r) {
        if (typeof r == 'string') return xr(r, n);
        var o = Object.prototype.toString.call(r).slice(8, -1);
        if ((o === 'Object' && r.constructor && (o = r.constructor.name), o === 'Map' || o === 'Set'))
          return Array.from(r);
        if (o === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)) return xr(r, n);
      }
    })(t, e) ||
    (function () {
      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    })()
  );
}
function xr(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
  return n;
}
var Mo = ['items'],
  Ho = ['items'];
function De(t) {
  return (
    (De =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e && typeof Symbol == 'function' && e.constructor === Symbol && e !== Symbol.prototype
              ? 'symbol'
              : typeof e;
          }),
    De(t)
  );
}
function Ge(t) {
  return (
    (function (e) {
      if (Array.isArray(e)) return Dt(e);
    })(t) ||
    (function (e) {
      if ((typeof Symbol < 'u' && e[Symbol.iterator] != null) || e['@@iterator'] != null) return Array.from(e);
    })(t) ||
    (function (e, r) {
      if (e) {
        if (typeof e == 'string') return Dt(e, r);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        if ((n === 'Object' && e.constructor && (n = e.constructor.name), n === 'Map' || n === 'Set'))
          return Array.from(e);
        if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Dt(e, r);
      }
    })(t) ||
    (function () {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    })()
  );
}
function Dt(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
  return n;
}
function Vn(t, e) {
  if (t == null) return {};
  var r,
    n,
    o = (function (a, c) {
      if (a == null) return {};
      var u,
        s,
        l = {},
        m = Object.keys(a);
      for (s = 0; s < m.length; s++) (u = m[s]), c.indexOf(u) >= 0 || (l[u] = a[u]);
      return l;
    })(t, e);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    for (n = 0; n < i.length; n++)
      (r = i[n]), e.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r]));
  }
  return o;
}
function Nr(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(t, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function ve(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? Nr(Object(r), !0).forEach(function (n) {
          Uo(t, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : Nr(Object(r)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return t;
}
function Uo(t, e, r) {
  return (
    (e = (function (n) {
      var o = (function (i, a) {
        if (De(i) !== 'object' || i === null) return i;
        var c = i[Symbol.toPrimitive];
        if (c !== void 0) {
          var u = c.call(i, a || 'default');
          if (De(u) !== 'object') return u;
          throw new TypeError('@@toPrimitive must return a primitive value.');
        }
        return (a === 'string' ? String : Number)(i);
      })(n, 'string');
      return De(o) === 'symbol' ? o : String(o);
    })(e)) in t
      ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (t[e] = r),
    t
  );
}
function Fo(t) {
  for (
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 20, r = [], n = 0;
    n < t.objectIDs.length;
    n += e
  )
    r.push(ve(ve({}, t), {}, { objectIDs: t.objectIDs.slice(n, n + e) }));
  return r;
}
function Xe(t) {
  return t.map(function (e) {
    var r = e.items,
      n = Vn(e, Mo);
    return ve(
      ve({}, n),
      {},
      {
        objectIDs:
          r?.map(function (o) {
            return o.objectID;
          }) || n.objectIDs,
      }
    );
  });
}
function Bo(t) {
  var e,
    r,
    n,
    o =
      ((e = Lo((t.version || '').split('.').map(Number), 2)),
      (r = e[0]),
      (n = e[1]),
      r >= 3 || (r === 2 && n >= 4) || (r === 1 && n >= 10));
  function i(a, c, u) {
    if (o && u !== void 0) {
      var s = u[0].__autocomplete_algoliaCredentials,
        l = { 'X-Algolia-Application-Id': s.appId, 'X-Algolia-API-Key': s.apiKey };
      t.apply(void 0, [a].concat(Ge(c), [{ headers: l }]));
    } else t.apply(void 0, [a].concat(Ge(c)));
  }
  return {
    init: function (a, c) {
      t('init', { appId: a, apiKey: c });
    },
    setUserToken: function (a) {
      t('setUserToken', a);
    },
    clickedObjectIDsAfterSearch: function () {
      for (var a = arguments.length, c = new Array(a), u = 0; u < a; u++) c[u] = arguments[u];
      c.length > 0 && i('clickedObjectIDsAfterSearch', Xe(c), c[0].items);
    },
    clickedObjectIDs: function () {
      for (var a = arguments.length, c = new Array(a), u = 0; u < a; u++) c[u] = arguments[u];
      c.length > 0 && i('clickedObjectIDs', Xe(c), c[0].items);
    },
    clickedFilters: function () {
      for (var a = arguments.length, c = new Array(a), u = 0; u < a; u++) c[u] = arguments[u];
      c.length > 0 && t.apply(void 0, ['clickedFilters'].concat(c));
    },
    convertedObjectIDsAfterSearch: function () {
      for (var a = arguments.length, c = new Array(a), u = 0; u < a; u++) c[u] = arguments[u];
      c.length > 0 && i('convertedObjectIDsAfterSearch', Xe(c), c[0].items);
    },
    convertedObjectIDs: function () {
      for (var a = arguments.length, c = new Array(a), u = 0; u < a; u++) c[u] = arguments[u];
      c.length > 0 && i('convertedObjectIDs', Xe(c), c[0].items);
    },
    convertedFilters: function () {
      for (var a = arguments.length, c = new Array(a), u = 0; u < a; u++) c[u] = arguments[u];
      c.length > 0 && t.apply(void 0, ['convertedFilters'].concat(c));
    },
    viewedObjectIDs: function () {
      for (var a = arguments.length, c = new Array(a), u = 0; u < a; u++) c[u] = arguments[u];
      c.length > 0 &&
        c
          .reduce(function (s, l) {
            var m = l.items,
              p = Vn(l, Ho);
            return [].concat(
              Ge(s),
              Ge(
                Fo(
                  ve(
                    ve({}, p),
                    {},
                    {
                      objectIDs:
                        m?.map(function (v) {
                          return v.objectID;
                        }) || p.objectIDs,
                    }
                  )
                ).map(function (v) {
                  return { items: m, payload: v };
                })
              )
            );
          }, [])
          .forEach(function (s) {
            var l = s.items;
            return i('viewedObjectIDs', [s.payload], l);
          });
    },
    viewedFilters: function () {
      for (var a = arguments.length, c = new Array(a), u = 0; u < a; u++) c[u] = arguments[u];
      c.length > 0 && t.apply(void 0, ['viewedFilters'].concat(c));
    },
  };
}
function Vo(t) {
  var e = t.items.reduce(function (r, n) {
    var o;
    return (
      (r[n.__autocomplete_indexName] = ((o = r[n.__autocomplete_indexName]) !== null && o !== void 0 ? o : []).concat(
        n
      )),
      r
    );
  }, {});
  return Object.keys(e).map(function (r) {
    return { index: r, items: e[r], algoliaSource: ['autocomplete'] };
  });
}
function kt(t) {
  return t.objectID && t.__autocomplete_indexName && t.__autocomplete_queryID;
}
function ke(t) {
  return (
    (ke =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e && typeof Symbol == 'function' && e.constructor === Symbol && e !== Symbol.prototype
              ? 'symbol'
              : typeof e;
          }),
    ke(t)
  );
}
function ie(t) {
  return (
    (function (e) {
      if (Array.isArray(e)) return At(e);
    })(t) ||
    (function (e) {
      if ((typeof Symbol < 'u' && e[Symbol.iterator] != null) || e['@@iterator'] != null) return Array.from(e);
    })(t) ||
    (function (e, r) {
      if (e) {
        if (typeof e == 'string') return At(e, r);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        if ((n === 'Object' && e.constructor && (n = e.constructor.name), n === 'Map' || n === 'Set'))
          return Array.from(e);
        if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return At(e, r);
      }
    })(t) ||
    (function () {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    })()
  );
}
function At(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
  return n;
}
function Tr(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(t, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function G(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? Tr(Object(r), !0).forEach(function (n) {
          Wo(t, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : Tr(Object(r)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return t;
}
function Wo(t, e, r) {
  return (
    (e = (function (n) {
      var o = (function (i, a) {
        if (ke(i) !== 'object' || i === null) return i;
        var c = i[Symbol.toPrimitive];
        if (c !== void 0) {
          var u = c.call(i, a || 'default');
          if (ke(u) !== 'object') return u;
          throw new TypeError('@@toPrimitive must return a primitive value.');
        }
        return (a === 'string' ? String : Number)(i);
      })(n, 'string');
      return ke(o) === 'symbol' ? o : String(o);
    })(e)) in t
      ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (t[e] = r),
    t
  );
}
var Ko = 'https://cdn.jsdelivr.net/npm/search-insights@'.concat('2.6.0', '/dist/search-insights.min.js'),
  zo = Fn(function (t) {
    var e = t.onItemsChange,
      r = t.items,
      n = t.insights,
      o = t.state;
    e({
      insights: n,
      insightsEvents: Vo({ items: r }).map(function (i) {
        return G({ eventName: 'Items Viewed' }, i);
      }),
      state: o,
    });
  }, 400);
function Jo(t) {
  var e = (function (l) {
      return G(
        {
          onItemsChange: function (m) {
            var p = m.insights,
              v = m.insightsEvents;
            p.viewedObjectIDs.apply(
              p,
              ie(
                v.map(function (d) {
                  return G(
                    G({}, d),
                    {},
                    { algoliaSource: [].concat(ie(d.algoliaSource || []), ['autocomplete-internal']) }
                  );
                })
              )
            );
          },
          onSelect: function (m) {
            var p = m.insights,
              v = m.insightsEvents;
            p.clickedObjectIDsAfterSearch.apply(
              p,
              ie(
                v.map(function (d) {
                  return G(
                    G({}, d),
                    {},
                    { algoliaSource: [].concat(ie(d.algoliaSource || []), ['autocomplete-internal']) }
                  );
                })
              )
            );
          },
          onActive: dt,
        },
        l
      );
    })(t),
    r = e.insightsClient,
    n = e.onItemsChange,
    o = e.onSelect,
    i = e.onActive,
    a = r;
  r ||
    (function (l) {
      typeof window < 'u' && l({ window });
    })(function (l) {
      var m = l.window,
        p = m.AlgoliaAnalyticsObject || 'aa';
      typeof p == 'string' && (a = m[p]),
        a ||
          ((m.AlgoliaAnalyticsObject = p),
          m[p] ||
            (m[p] = function () {
              m[p].queue || (m[p].queue = []);
              for (var v = arguments.length, d = new Array(v), h = 0; h < v; h++) d[h] = arguments[h];
              m[p].queue.push(d);
            }),
          (m[p].version = '2.6.0'),
          (a = m[p]),
          (function (v) {
            var d =
              '[Autocomplete]: Could not load search-insights.js. Please load it manually following https://alg.li/insights-autocomplete';
            try {
              var h = v.document.createElement('script');
              (h.async = !0),
                (h.src = Ko),
                (h.onerror = function () {
                  console.error(d);
                }),
                document.body.appendChild(h);
            } catch {
              console.error(d);
            }
          })(m));
    });
  var c = Bo(a),
    u = { current: [] },
    s = Fn(function (l) {
      var m = l.state;
      if (m.isOpen) {
        var p = m.collections
          .reduce(function (v, d) {
            return [].concat(ie(v), ie(d.items));
          }, [])
          .filter(kt);
        Bn(
          u.current.map(function (v) {
            return v.objectID;
          }),
          p.map(function (v) {
            return v.objectID;
          })
        ) || ((u.current = p), p.length > 0 && zo({ onItemsChange: n, items: p, insights: c, state: m }));
      }
    }, 0);
  return {
    name: 'aa.algoliaInsightsPlugin',
    subscribe: function (l) {
      var m = l.setContext,
        p = l.onSelect,
        v = l.onActive;
      a('addAlgoliaAgent', 'insights-plugin'),
        m({ algoliaInsightsPlugin: { __algoliaSearchParameters: { clickAnalytics: !0 }, insights: c } }),
        p(function (d) {
          var h = d.item,
            y = d.state,
            b = d.event;
          kt(h) &&
            o({
              state: y,
              event: b,
              insights: c,
              item: h,
              insightsEvents: [G({ eventName: 'Item Selected' }, Cr({ item: h, items: u.current }))],
            });
        }),
        v(function (d) {
          var h = d.item,
            y = d.state,
            b = d.event;
          kt(h) &&
            i({
              state: y,
              event: b,
              insights: c,
              item: h,
              insightsEvents: [G({ eventName: 'Item Active' }, Cr({ item: h, items: u.current }))],
            });
        });
    },
    onStateChange: function (l) {
      var m = l.state;
      s({ state: m });
    },
    __autocomplete_pluginOptions: t,
  };
}
function st(t, e) {
  var r = e;
  return {
    then: function (n, o) {
      return st(t.then(et(n, r, t), et(o, r, t)), r);
    },
    catch: function (n) {
      return st(t.catch(et(n, r, t)), r);
    },
    finally: function (n) {
      return (
        n && r.onCancelList.push(n),
        st(
          t.finally(
            et(
              n &&
                function () {
                  return (r.onCancelList = []), n();
                },
              r,
              t
            )
          ),
          r
        )
      );
    },
    cancel: function () {
      r.isCanceled = !0;
      var n = r.onCancelList;
      (r.onCancelList = []),
        n.forEach(function (o) {
          o();
        });
    },
    isCanceled: function () {
      return r.isCanceled === !0;
    },
  };
}
function Rr(t) {
  return st(t, { isCanceled: !1, onCancelList: [] });
}
function et(t, e, r) {
  return t
    ? function (n) {
        return e.isCanceled ? n : t(n);
      }
    : r;
}
function qr(t, e, r, n) {
  if (!r) return null;
  if (t < 0 && (e === null || (n !== null && e === 0))) return r + t;
  var o = (e === null ? -1 : e) + t;
  return o <= -1 || o >= r ? (n === null ? null : 0) : o;
}
function Lr(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(t, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Mr(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? Lr(Object(r), !0).forEach(function (n) {
          $o(t, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : Lr(Object(r)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return t;
}
function $o(t, e, r) {
  return (
    (e = (function (n) {
      var o = (function (i, a) {
        if (Ae(i) !== 'object' || i === null) return i;
        var c = i[Symbol.toPrimitive];
        if (c !== void 0) {
          var u = c.call(i, a || 'default');
          if (Ae(u) !== 'object') return u;
          throw new TypeError('@@toPrimitive must return a primitive value.');
        }
        return (a === 'string' ? String : Number)(i);
      })(n, 'string');
      return Ae(o) === 'symbol' ? o : String(o);
    })(e)) in t
      ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (t[e] = r),
    t
  );
}
function Ae(t) {
  return (
    (Ae =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e && typeof Symbol == 'function' && e.constructor === Symbol && e !== Symbol.prototype
              ? 'symbol'
              : typeof e;
          }),
    Ae(t)
  );
}
function fe(t) {
  var e = (function (o) {
    var i = o.collections
      .map(function (a) {
        return a.items.length;
      })
      .reduce(function (a, c, u) {
        var s = (a[u - 1] || 0) + c;
        return a.push(s), a;
      }, [])
      .reduce(function (a, c) {
        return c <= o.activeItemId ? a + 1 : a;
      }, 0);
    return o.collections[i];
  })(t);
  if (!e) return null;
  var r =
      e.items[
        (function (o) {
          for (var i = o.state, a = o.collection, c = !1, u = 0, s = 0; c === !1; ) {
            var l = i.collections[u];
            if (l === a) {
              c = !0;
              break;
            }
            (s += l.items.length), u++;
          }
          return i.activeItemId - s;
        })({ state: t, collection: e })
      ],
    n = e.source;
  return {
    item: r,
    itemInputValue: n.getItemInputValue({ item: r, state: t }),
    itemUrl: n.getItemUrl({ item: r, state: t }),
    source: n,
  };
}
var Qo = /((gt|sm)-|galaxy nexus)|samsung[- ]|samsungbrowser/i;
function Ce(t) {
  return (
    (Ce =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e && typeof Symbol == 'function' && e.constructor === Symbol && e !== Symbol.prototype
              ? 'symbol'
              : typeof e;
          }),
    Ce(t)
  );
}
function Hr(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(t, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Zo(t, e, r) {
  return (
    (e = (function (n) {
      var o = (function (i, a) {
        if (Ce(i) !== 'object' || i === null) return i;
        var c = i[Symbol.toPrimitive];
        if (c !== void 0) {
          var u = c.call(i, a || 'default');
          if (Ce(u) !== 'object') return u;
          throw new TypeError('@@toPrimitive must return a primitive value.');
        }
        return (a === 'string' ? String : Number)(i);
      })(n, 'string');
      return Ce(o) === 'symbol' ? o : String(o);
    })(e)) in t
      ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (t[e] = r),
    t
  );
}
function Yo(t, e, r) {
  var n,
    o = e.initialState;
  return {
    getState: function () {
      return o;
    },
    dispatch: function (i, a) {
      var c = (function (u) {
        for (var s = 1; s < arguments.length; s++) {
          var l = arguments[s] != null ? arguments[s] : {};
          s % 2
            ? Hr(Object(l), !0).forEach(function (m) {
                Zo(u, m, l[m]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(l))
              : Hr(Object(l)).forEach(function (m) {
                  Object.defineProperty(u, m, Object.getOwnPropertyDescriptor(l, m));
                });
        }
        return u;
      })({}, o);
      (o = t(o, { type: i, props: e, payload: a })), r({ state: o, prevState: c });
    },
    pendingRequests:
      ((n = []),
      {
        add: function (i) {
          return (
            n.push(i),
            i.finally(function () {
              n = n.filter(function (a) {
                return a !== i;
              });
            })
          );
        },
        cancelAll: function () {
          n.forEach(function (i) {
            return i.cancel();
          });
        },
        isEmpty: function () {
          return n.length === 0;
        },
      }),
  };
}
function xe(t) {
  return (
    (xe =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e && typeof Symbol == 'function' && e.constructor === Symbol && e !== Symbol.prototype
              ? 'symbol'
              : typeof e;
          }),
    xe(t)
  );
}
function Ur(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(t, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function tt(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? Ur(Object(r), !0).forEach(function (n) {
          Go(t, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : Ur(Object(r)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return t;
}
function Go(t, e, r) {
  return (
    (e = (function (n) {
      var o = (function (i, a) {
        if (xe(i) !== 'object' || i === null) return i;
        var c = i[Symbol.toPrimitive];
        if (c !== void 0) {
          var u = c.call(i, a || 'default');
          if (xe(u) !== 'object') return u;
          throw new TypeError('@@toPrimitive must return a primitive value.');
        }
        return (a === 'string' ? String : Number)(i);
      })(n, 'string');
      return xe(o) === 'symbol' ? o : String(o);
    })(e)) in t
      ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (t[e] = r),
    t
  );
}
function Ne(t) {
  return (
    (Ne =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e && typeof Symbol == 'function' && e.constructor === Symbol && e !== Symbol.prototype
              ? 'symbol'
              : typeof e;
          }),
    Ne(t)
  );
}
function Xo(t) {
  return (
    (function (e) {
      if (Array.isArray(e)) return Ct(e);
    })(t) ||
    (function (e) {
      if ((typeof Symbol < 'u' && e[Symbol.iterator] != null) || e['@@iterator'] != null) return Array.from(e);
    })(t) ||
    (function (e, r) {
      if (e) {
        if (typeof e == 'string') return Ct(e, r);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        if ((n === 'Object' && e.constructor && (n = e.constructor.name), n === 'Map' || n === 'Set'))
          return Array.from(e);
        if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Ct(e, r);
      }
    })(t) ||
    (function () {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    })()
  );
}
function Ct(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
  return n;
}
function Fr(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(t, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function ae(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? Fr(Object(r), !0).forEach(function (n) {
          ei(t, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : Fr(Object(r)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return t;
}
function ei(t, e, r) {
  return (
    (e = (function (n) {
      var o = (function (i, a) {
        if (Ne(i) !== 'object' || i === null) return i;
        var c = i[Symbol.toPrimitive];
        if (c !== void 0) {
          var u = c.call(i, a || 'default');
          if (Ne(u) !== 'object') return u;
          throw new TypeError('@@toPrimitive must return a primitive value.');
        }
        return (a === 'string' ? String : Number)(i);
      })(n, 'string');
      return Ne(o) === 'symbol' ? o : String(o);
    })(e)) in t
      ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (t[e] = r),
    t
  );
}
function ti(t, e) {
  var r,
    n = typeof window < 'u' ? window : {},
    o = t.plugins || [];
  return ae(
    ae(
      {
        debug: !1,
        openOnFocus: !1,
        placeholder: '',
        autoFocus: !1,
        defaultActiveItemId: null,
        stallThreshold: 300,
        insights: !1,
        environment: n,
        shouldPanelOpen: function (i) {
          return Kt(i.state) > 0;
        },
        reshape: function (i) {
          return i.sources;
        },
      },
      t
    ),
    {},
    {
      id: (r = t.id) !== null && r !== void 0 ? r : 'autocomplete-'.concat(Ro++),
      plugins: o,
      initialState: ae(
        { activeItemId: null, query: '', completion: null, collections: [], isOpen: !1, status: 'idle', context: {} },
        t.initialState
      ),
      onStateChange: function (i) {
        var a;
        (a = t.onStateChange) === null || a === void 0 || a.call(t, i),
          o.forEach(function (c) {
            var u;
            return (u = c.onStateChange) === null || u === void 0 ? void 0 : u.call(c, i);
          });
      },
      onSubmit: function (i) {
        var a;
        (a = t.onSubmit) === null || a === void 0 || a.call(t, i),
          o.forEach(function (c) {
            var u;
            return (u = c.onSubmit) === null || u === void 0 ? void 0 : u.call(c, i);
          });
      },
      onReset: function (i) {
        var a;
        (a = t.onReset) === null || a === void 0 || a.call(t, i),
          o.forEach(function (c) {
            var u;
            return (u = c.onReset) === null || u === void 0 ? void 0 : u.call(c, i);
          });
      },
      getSources: function (i) {
        return Promise.all(
          []
            .concat(
              Xo(
                o.map(function (a) {
                  return a.getSources;
                })
              ),
              [t.getSources]
            )
            .filter(Boolean)
            .map(function (a) {
              return (function (c, u) {
                var s = [];
                return Promise.resolve(c(u)).then(function (l) {
                  return Promise.all(
                    l
                      .filter(function (m) {
                        return !!m;
                      })
                      .map(function (m) {
                        if ((m.sourceId, s.includes(m.sourceId)))
                          throw new Error(
                            '[Autocomplete] The `sourceId` '.concat(JSON.stringify(m.sourceId), ' is not unique.')
                          );
                        s.push(m.sourceId);
                        var p = {
                          getItemInputValue: function (d) {
                            return d.state.query;
                          },
                          getItemUrl: function () {},
                          onSelect: function (d) {
                            (0, d.setIsOpen)(!1);
                          },
                          onActive: dt,
                          onResolve: dt,
                        };
                        Object.keys(p).forEach(function (d) {
                          p[d].__default = !0;
                        });
                        var v = Mr(Mr({}, p), m);
                        return Promise.resolve(v);
                      })
                  );
                });
              })(a, i);
            })
        )
          .then(function (a) {
            return ze(a);
          })
          .then(function (a) {
            return a.map(function (c) {
              return ae(
                ae({}, c),
                {},
                {
                  onSelect: function (u) {
                    c.onSelect(u),
                      e.forEach(function (s) {
                        var l;
                        return (l = s.onSelect) === null || l === void 0 ? void 0 : l.call(s, u);
                      });
                  },
                  onActive: function (u) {
                    c.onActive(u),
                      e.forEach(function (s) {
                        var l;
                        return (l = s.onActive) === null || l === void 0 ? void 0 : l.call(s, u);
                      });
                  },
                  onResolve: function (u) {
                    c.onResolve(u),
                      e.forEach(function (s) {
                        var l;
                        return (l = s.onResolve) === null || l === void 0 ? void 0 : l.call(s, u);
                      });
                  },
                }
              );
            });
          });
      },
      navigator: ae(
        {
          navigate: function (i) {
            var a = i.itemUrl;
            n.location.assign(a);
          },
          navigateNewTab: function (i) {
            var a = i.itemUrl,
              c = n.open(a, '_blank', 'noopener');
            c?.focus();
          },
          navigateNewWindow: function (i) {
            var a = i.itemUrl;
            n.open(a, '_blank', 'noopener');
          },
        },
        t.navigator
      ),
    }
  );
}
function Te(t) {
  return (
    (Te =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e && typeof Symbol == 'function' && e.constructor === Symbol && e !== Symbol.prototype
              ? 'symbol'
              : typeof e;
          }),
    Te(t)
  );
}
function Br(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(t, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function rt(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? Br(Object(r), !0).forEach(function (n) {
          Wn(t, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : Br(Object(r)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return t;
}
function Wn(t, e, r) {
  return (
    (e = (function (n) {
      var o = (function (i, a) {
        if (Te(i) !== 'object' || i === null) return i;
        var c = i[Symbol.toPrimitive];
        if (c !== void 0) {
          var u = c.call(i, a || 'default');
          if (Te(u) !== 'object') return u;
          throw new TypeError('@@toPrimitive must return a primitive value.');
        }
        return (a === 'string' ? String : Number)(i);
      })(n, 'string');
      return Te(o) === 'symbol' ? o : String(o);
    })(e)) in t
      ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (t[e] = r),
    t
  );
}
function Re(t) {
  return (
    (Re =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e && typeof Symbol == 'function' && e.constructor === Symbol && e !== Symbol.prototype
              ? 'symbol'
              : typeof e;
          }),
    Re(t)
  );
}
function Vr(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(t, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function ue(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? Vr(Object(r), !0).forEach(function (n) {
          ri(t, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : Vr(Object(r)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return t;
}
function ri(t, e, r) {
  return (
    (e = (function (n) {
      var o = (function (i, a) {
        if (Re(i) !== 'object' || i === null) return i;
        var c = i[Symbol.toPrimitive];
        if (c !== void 0) {
          var u = c.call(i, a || 'default');
          if (Re(u) !== 'object') return u;
          throw new TypeError('@@toPrimitive must return a primitive value.');
        }
        return (a === 'string' ? String : Number)(i);
      })(n, 'string');
      return Re(o) === 'symbol' ? o : String(o);
    })(e)) in t
      ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (t[e] = r),
    t
  );
}
function Kn(t) {
  return (
    (function (e) {
      if (Array.isArray(e)) return xt(e);
    })(t) ||
    (function (e) {
      if ((typeof Symbol < 'u' && e[Symbol.iterator] != null) || e['@@iterator'] != null) return Array.from(e);
    })(t) ||
    (function (e, r) {
      if (e) {
        if (typeof e == 'string') return xt(e, r);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        if ((n === 'Object' && e.constructor && (n = e.constructor.name), n === 'Map' || n === 'Set'))
          return Array.from(e);
        if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return xt(e, r);
      }
    })(t) ||
    (function () {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    })()
  );
}
function xt(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
  return n;
}
function nt(t) {
  return !!t.execute;
}
function ni(t, e, r) {
  if (((o = t), !!o?.execute)) {
    var n =
      t.requesterId === 'algolia'
        ? Object.assign.apply(
            Object,
            [{}].concat(
              Kn(
                Object.keys(r.context).map(function (i) {
                  var a;
                  return (a = r.context[i]) === null || a === void 0 ? void 0 : a.__algoliaSearchParameters;
                })
              )
            )
          )
        : {};
    return ue(
      ue({}, t),
      {},
      {
        requests: t.queries.map(function (i) {
          return {
            query: t.requesterId === 'algolia' ? ue(ue({}, i), {}, { params: ue(ue({}, n), i.params) }) : i,
            sourceId: e,
            transformResponse: t.transformResponse,
          };
        }),
      }
    );
  }
  var o;
  return { items: t, sourceId: e };
}
function oi(t) {
  var e = t
    .reduce(function (r, n) {
      if (!nt(n)) return r.push(n), r;
      var o = n.searchClient,
        i = n.execute,
        a = n.requesterId,
        c = n.requests,
        u = r.find(function (m) {
          return nt(n) && nt(m) && m.searchClient === o && !!a && m.requesterId === a;
        });
      if (u) {
        var s;
        (s = u.items).push.apply(s, Kn(c));
      } else {
        var l = { execute: i, requesterId: a, items: c, searchClient: o };
        r.push(l);
      }
      return r;
    }, [])
    .map(function (r) {
      if (!nt(r)) return Promise.resolve(r);
      var n = r,
        o = n.execute,
        i = n.items;
      return o({ searchClient: n.searchClient, requests: i });
    });
  return Promise.all(e).then(function (r) {
    return ze(r);
  });
}
function ii(t, e, r) {
  return e.map(function (n) {
    var o,
      i = t.filter(function (s) {
        return s.sourceId === n.sourceId;
      }),
      a = i.map(function (s) {
        return s.items;
      }),
      c = i[0].transformResponse,
      u = c
        ? c({
            results: (o = a),
            hits: o
              .map(function (s) {
                return s.hits;
              })
              .filter(Boolean),
            facetHits: o
              .map(function (s) {
                var l;
                return (l = s.facetHits) === null || l === void 0
                  ? void 0
                  : l.map(function (m) {
                      return { label: m.value, count: m.count, _highlightResult: { label: { value: m.highlighted } } };
                    });
              })
              .filter(Boolean),
          })
        : a;
    return (
      n.onResolve({ source: n, results: a, items: u, state: r.getState() }),
      u.every(Boolean),
      'The `getItems` function from source "'
        .concat(n.sourceId, '" must return an array of items but returned ')
        .concat(
          JSON.stringify(void 0),
          `.

Did you forget to return items?

See: https://www.algolia.com/doc/ui-libraries/autocomplete/core-concepts/sources/#param-getitems`
        ),
      { source: n, items: u }
    );
  });
}
function qe(t) {
  return (
    (qe =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e && typeof Symbol == 'function' && e.constructor === Symbol && e !== Symbol.prototype
              ? 'symbol'
              : typeof e;
          }),
    qe(t)
  );
}
var ai = ['event', 'nextState', 'props', 'query', 'refresh', 'store'];
function Wr(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(t, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Se(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? Wr(Object(r), !0).forEach(function (n) {
          ui(t, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : Wr(Object(r)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return t;
}
function ui(t, e, r) {
  return (
    (e = (function (n) {
      var o = (function (i, a) {
        if (qe(i) !== 'object' || i === null) return i;
        var c = i[Symbol.toPrimitive];
        if (c !== void 0) {
          var u = c.call(i, a || 'default');
          if (qe(u) !== 'object') return u;
          throw new TypeError('@@toPrimitive must return a primitive value.');
        }
        return (a === 'string' ? String : Number)(i);
      })(n, 'string');
      return qe(o) === 'symbol' ? o : String(o);
    })(e)) in t
      ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (t[e] = r),
    t
  );
}
function ci(t, e) {
  if (t == null) return {};
  var r,
    n,
    o = (function (a, c) {
      if (a == null) return {};
      var u,
        s,
        l = {},
        m = Object.keys(a);
      for (s = 0; s < m.length; s++) (u = m[s]), c.indexOf(u) >= 0 || (l[u] = a[u]);
      return l;
    })(t, e);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    for (n = 0; n < i.length; n++)
      (r = i[n]), e.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r]));
  }
  return o;
}
var Kr,
  Nt,
  ot,
  we = null,
  zr =
    ((Kr = -1),
    (Nt = -1),
    (ot = void 0),
    function (t) {
      var e = ++Kr;
      return Promise.resolve(t).then(function (r) {
        return ot && e < Nt ? ot : ((Nt = e), (ot = r), r);
      });
    });
function le(t) {
  var e = t.event,
    r = t.nextState,
    n = r === void 0 ? {} : r,
    o = t.props,
    i = t.query,
    a = t.refresh,
    c = t.store,
    u = ci(t, ai);
  we && o.environment.clearTimeout(we);
  var s = u.setCollections,
    l = u.setIsOpen,
    m = u.setQuery,
    p = u.setActiveItemId,
    v = u.setStatus;
  if ((m(i), p(o.defaultActiveItemId), !i && o.openOnFocus === !1)) {
    var d,
      h = c.getState().collections.map(function (_) {
        return Se(Se({}, _), {}, { items: [] });
      });
    v('idle'), s(h), l((d = n.isOpen) !== null && d !== void 0 ? d : o.shouldPanelOpen({ state: c.getState() }));
    var y = Rr(
      zr(h).then(function () {
        return Promise.resolve();
      })
    );
    return c.pendingRequests.add(y);
  }
  v('loading'),
    (we = o.environment.setTimeout(function () {
      v('stalled');
    }, o.stallThreshold));
  var b = Rr(
    zr(
      o.getSources(Se({ query: i, refresh: a, state: c.getState() }, u)).then(function (_) {
        return Promise.all(
          _.map(function (S) {
            return Promise.resolve(S.getItems(Se({ query: i, refresh: a, state: c.getState() }, u))).then(function (O) {
              return ni(O, S.sourceId, c.getState());
            });
          })
        )
          .then(oi)
          .then(function (S) {
            return ii(S, _, c);
          })
          .then(function (S) {
            return (function (O) {
              var g = O.collections,
                P = O.props,
                C = O.state,
                L = g.reduce(function (k, N) {
                  return rt(
                    rt({}, k),
                    {},
                    Wn(
                      {},
                      N.source.sourceId,
                      rt(
                        rt({}, N.source),
                        {},
                        {
                          getItems: function () {
                            return ze(N.items);
                          },
                        }
                      )
                    )
                  );
                }, {}),
                x = P.plugins.reduce(
                  function (k, N) {
                    return N.reshape ? N.reshape(k) : k;
                  },
                  { sourcesBySourceId: L, state: C }
                ).sourcesBySourceId;
              return ze(P.reshape({ sourcesBySourceId: x, sources: Object.values(x), state: C }))
                .filter(Boolean)
                .map(function (k) {
                  return { source: k, items: k.getItems() };
                });
            })({ collections: S, props: o, state: c.getState() });
          });
      })
    )
  )
    .then(function (_) {
      var S;
      v('idle'), s(_);
      var O = o.shouldPanelOpen({ state: c.getState() });
      l((S = n.isOpen) !== null && S !== void 0 ? S : (o.openOnFocus && !i && O) || O);
      var g = fe(c.getState());
      if (c.getState().activeItemId !== null && g) {
        var P = g.item,
          C = g.itemInputValue,
          L = g.itemUrl,
          x = g.source;
        x.onActive(
          Se({ event: e, item: P, itemInputValue: C, itemUrl: L, refresh: a, source: x, state: c.getState() }, u)
        );
      }
    })
    .finally(function () {
      v('idle'), we && o.environment.clearTimeout(we);
    });
  return c.pendingRequests.add(b);
}
function Le(t) {
  return (
    (Le =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e && typeof Symbol == 'function' && e.constructor === Symbol && e !== Symbol.prototype
              ? 'symbol'
              : typeof e;
          }),
    Le(t)
  );
}
var li = ['event', 'props', 'refresh', 'store'];
function Jr(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(t, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function te(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? Jr(Object(r), !0).forEach(function (n) {
          si(t, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : Jr(Object(r)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return t;
}
function si(t, e, r) {
  return (
    (e = (function (n) {
      var o = (function (i, a) {
        if (Le(i) !== 'object' || i === null) return i;
        var c = i[Symbol.toPrimitive];
        if (c !== void 0) {
          var u = c.call(i, a || 'default');
          if (Le(u) !== 'object') return u;
          throw new TypeError('@@toPrimitive must return a primitive value.');
        }
        return (a === 'string' ? String : Number)(i);
      })(n, 'string');
      return Le(o) === 'symbol' ? o : String(o);
    })(e)) in t
      ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (t[e] = r),
    t
  );
}
function fi(t, e) {
  if (t == null) return {};
  var r,
    n,
    o = (function (a, c) {
      if (a == null) return {};
      var u,
        s,
        l = {},
        m = Object.keys(a);
      for (s = 0; s < m.length; s++) (u = m[s]), c.indexOf(u) >= 0 || (l[u] = a[u]);
      return l;
    })(t, e);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    for (n = 0; n < i.length; n++)
      (r = i[n]), e.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r]));
  }
  return o;
}
function Me(t) {
  return (
    (Me =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e && typeof Symbol == 'function' && e.constructor === Symbol && e !== Symbol.prototype
              ? 'symbol'
              : typeof e;
          }),
    Me(t)
  );
}
var mi = ['props', 'refresh', 'store'],
  pi = ['inputElement', 'formElement', 'panelElement'],
  vi = ['inputElement'],
  di = ['inputElement', 'maxLength'],
  hi = ['sourceIndex'],
  yi = ['sourceIndex'],
  gi = ['item', 'source', 'sourceIndex'];
function $r(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(t, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function R(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? $r(Object(r), !0).forEach(function (n) {
          bi(t, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : $r(Object(r)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return t;
}
function bi(t, e, r) {
  return (
    (e = (function (n) {
      var o = (function (i, a) {
        if (Me(i) !== 'object' || i === null) return i;
        var c = i[Symbol.toPrimitive];
        if (c !== void 0) {
          var u = c.call(i, a || 'default');
          if (Me(u) !== 'object') return u;
          throw new TypeError('@@toPrimitive must return a primitive value.');
        }
        return (a === 'string' ? String : Number)(i);
      })(n, 'string');
      return Me(o) === 'symbol' ? o : String(o);
    })(e)) in t
      ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (t[e] = r),
    t
  );
}
function re(t, e) {
  if (t == null) return {};
  var r,
    n,
    o = (function (a, c) {
      if (a == null) return {};
      var u,
        s,
        l = {},
        m = Object.keys(a);
      for (s = 0; s < m.length; s++) (u = m[s]), c.indexOf(u) >= 0 || (l[u] = a[u]);
      return l;
    })(t, e);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    for (n = 0; n < i.length; n++)
      (r = i[n]), e.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r]));
  }
  return o;
}
function _i(t) {
  var e = t.props,
    r = t.refresh,
    n = t.store,
    o = re(t, mi),
    i = function (a, c) {
      return c !== void 0 ? ''.concat(a, '-').concat(c) : a;
    };
  return {
    getEnvironmentProps: function (a) {
      var c = a.inputElement,
        u = a.formElement,
        s = a.panelElement;
      function l(m) {
        (!n.getState().isOpen && n.pendingRequests.isEmpty()) ||
          m.target === c ||
          ([u, s].some(function (p) {
            return (v = p), (d = m.target), v === d || v.contains(d);
            var v, d;
          }) === !1 &&
            (n.dispatch('blur', null), e.debug || n.pendingRequests.cancelAll()));
      }
      return R(
        {
          onTouchStart: l,
          onMouseDown: l,
          onTouchMove: function (m) {
            n.getState().isOpen !== !1 && c === e.environment.document.activeElement && m.target !== c && c.blur();
          },
        },
        re(a, pi)
      );
    },
    getRootProps: function (a) {
      return R(
        {
          role: 'combobox',
          'aria-expanded': n.getState().isOpen,
          'aria-haspopup': 'listbox',
          'aria-owns': n.getState().isOpen ? ''.concat(e.id, '-list') : void 0,
          'aria-labelledby': ''.concat(e.id, '-label'),
        },
        a
      );
    },
    getFormProps: function (a) {
      return (
        a.inputElement,
        R(
          {
            action: '',
            noValidate: !0,
            role: 'search',
            onSubmit: function (c) {
              var u;
              c.preventDefault(),
                e.onSubmit(R({ event: c, refresh: r, state: n.getState() }, o)),
                n.dispatch('submit', null),
                (u = a.inputElement) === null || u === void 0 || u.blur();
            },
            onReset: function (c) {
              var u;
              c.preventDefault(),
                e.onReset(R({ event: c, refresh: r, state: n.getState() }, o)),
                n.dispatch('reset', null),
                (u = a.inputElement) === null || u === void 0 || u.focus();
            },
          },
          re(a, vi)
        )
      );
    },
    getLabelProps: function (a) {
      var c = a || {},
        u = c.sourceIndex,
        s = re(c, hi);
      return R({ htmlFor: ''.concat(i(e.id, u), '-input'), id: ''.concat(i(e.id, u), '-label') }, s);
    },
    getInputProps: function (a) {
      var c;
      function u(y) {
        (e.openOnFocus || n.getState().query) &&
          le(R({ event: y, props: e, query: n.getState().completion || n.getState().query, refresh: r, store: n }, o)),
          n.dispatch('focus', null);
      }
      var s = a || {},
        l = (s.inputElement, s.maxLength),
        m = l === void 0 ? 512 : l,
        p = re(s, di),
        v = fe(n.getState()),
        d = (function (y) {
          return !!(y && y.match(Qo));
        })(((c = e.environment.navigator) === null || c === void 0 ? void 0 : c.userAgent) || ''),
        h = v != null && v.itemUrl && !d ? 'go' : 'search';
      return R(
        {
          'aria-autocomplete': 'both',
          'aria-activedescendant':
            n.getState().isOpen && n.getState().activeItemId !== null
              ? ''.concat(e.id, '-item-').concat(n.getState().activeItemId)
              : void 0,
          'aria-controls': n.getState().isOpen ? ''.concat(e.id, '-list') : void 0,
          'aria-labelledby': ''.concat(e.id, '-label'),
          value: n.getState().completion || n.getState().query,
          id: ''.concat(e.id, '-input'),
          autoComplete: 'off',
          autoCorrect: 'off',
          autoCapitalize: 'off',
          enterKeyHint: h,
          spellCheck: 'false',
          autoFocus: e.autoFocus,
          placeholder: e.placeholder,
          maxLength: m,
          type: 'search',
          onChange: function (y) {
            le(R({ event: y, props: e, query: y.currentTarget.value.slice(0, m), refresh: r, store: n }, o));
          },
          onKeyDown: function (y) {
            (function (b) {
              var _ = b.event,
                S = b.props,
                O = b.refresh,
                g = b.store,
                P = fi(b, li);
              if (_.key === 'ArrowUp' || _.key === 'ArrowDown') {
                var C = function () {
                    var M = S.environment.document.getElementById(
                      ''.concat(S.id, '-item-').concat(g.getState().activeItemId)
                    );
                    M && (M.scrollIntoViewIfNeeded ? M.scrollIntoViewIfNeeded(!1) : M.scrollIntoView(!1));
                  },
                  L = function () {
                    var M = fe(g.getState());
                    if (g.getState().activeItemId !== null && M) {
                      var St = M.item,
                        wt = M.itemInputValue,
                        $e = M.itemUrl,
                        B = M.source;
                      B.onActive(
                        te(
                          {
                            event: _,
                            item: St,
                            itemInputValue: wt,
                            itemUrl: $e,
                            refresh: O,
                            source: B,
                            state: g.getState(),
                          },
                          P
                        )
                      );
                    }
                  };
                _.preventDefault(),
                  g.getState().isOpen === !1 && (S.openOnFocus || g.getState().query)
                    ? le(te({ event: _, props: S, query: g.getState().query, refresh: O, store: g }, P)).then(
                        function () {
                          g.dispatch(_.key, { nextActiveItemId: S.defaultActiveItemId }), L(), setTimeout(C, 0);
                        }
                      )
                    : (g.dispatch(_.key, {}), L(), C());
              } else if (_.key === 'Escape') _.preventDefault(), g.dispatch(_.key, null), g.pendingRequests.cancelAll();
              else if (_.key === 'Tab') g.dispatch('blur', null), g.pendingRequests.cancelAll();
              else if (_.key === 'Enter') {
                if (
                  g.getState().activeItemId === null ||
                  g.getState().collections.every(function (M) {
                    return M.items.length === 0;
                  })
                )
                  return void (S.debug || g.pendingRequests.cancelAll());
                _.preventDefault();
                var x = fe(g.getState()),
                  k = x.item,
                  N = x.itemInputValue,
                  U = x.itemUrl,
                  F = x.source;
                if (_.metaKey || _.ctrlKey)
                  U !== void 0 &&
                    (F.onSelect(
                      te(
                        {
                          event: _,
                          item: k,
                          itemInputValue: N,
                          itemUrl: U,
                          refresh: O,
                          source: F,
                          state: g.getState(),
                        },
                        P
                      )
                    ),
                    S.navigator.navigateNewTab({ itemUrl: U, item: k, state: g.getState() }));
                else if (_.shiftKey)
                  U !== void 0 &&
                    (F.onSelect(
                      te(
                        {
                          event: _,
                          item: k,
                          itemInputValue: N,
                          itemUrl: U,
                          refresh: O,
                          source: F,
                          state: g.getState(),
                        },
                        P
                      )
                    ),
                    S.navigator.navigateNewWindow({ itemUrl: U, item: k, state: g.getState() }));
                else if (!_.altKey) {
                  if (U !== void 0)
                    return (
                      F.onSelect(
                        te(
                          {
                            event: _,
                            item: k,
                            itemInputValue: N,
                            itemUrl: U,
                            refresh: O,
                            source: F,
                            state: g.getState(),
                          },
                          P
                        )
                      ),
                      void S.navigator.navigate({ itemUrl: U, item: k, state: g.getState() })
                    );
                  le(te({ event: _, nextState: { isOpen: !1 }, props: S, query: N, refresh: O, store: g }, P)).then(
                    function () {
                      F.onSelect(
                        te(
                          {
                            event: _,
                            item: k,
                            itemInputValue: N,
                            itemUrl: U,
                            refresh: O,
                            source: F,
                            state: g.getState(),
                          },
                          P
                        )
                      );
                    }
                  );
                }
              }
            })(R({ event: y, props: e, refresh: r, store: n }, o));
          },
          onFocus: u,
          onBlur: dt,
          onClick: function (y) {
            a.inputElement !== e.environment.document.activeElement || n.getState().isOpen || u(y);
          },
        },
        p
      );
    },
    getPanelProps: function (a) {
      return R(
        {
          onMouseDown: function (c) {
            c.preventDefault();
          },
          onMouseLeave: function () {
            n.dispatch('mouseleave', null);
          },
        },
        a
      );
    },
    getListProps: function (a) {
      var c = a || {},
        u = c.sourceIndex,
        s = re(c, yi);
      return R(
        { role: 'listbox', 'aria-labelledby': ''.concat(i(e.id, u), '-label'), id: ''.concat(i(e.id, u), '-list') },
        s
      );
    },
    getItemProps: function (a) {
      var c = a.item,
        u = a.source,
        s = a.sourceIndex,
        l = re(a, gi);
      return R(
        {
          id: ''.concat(i(e.id, s), '-item-').concat(c.__autocomplete_id),
          role: 'option',
          'aria-selected': n.getState().activeItemId === c.__autocomplete_id,
          onMouseMove: function (m) {
            if (c.__autocomplete_id !== n.getState().activeItemId) {
              n.dispatch('mousemove', c.__autocomplete_id);
              var p = fe(n.getState());
              if (n.getState().activeItemId !== null && p) {
                var v = p.item,
                  d = p.itemInputValue,
                  h = p.itemUrl,
                  y = p.source;
                y.onActive(
                  R({ event: m, item: v, itemInputValue: d, itemUrl: h, refresh: r, source: y, state: n.getState() }, o)
                );
              }
            }
          },
          onMouseDown: function (m) {
            m.preventDefault();
          },
          onClick: function (m) {
            var p = u.getItemInputValue({ item: c, state: n.getState() }),
              v = u.getItemUrl({ item: c, state: n.getState() });
            (v
              ? Promise.resolve()
              : le(R({ event: m, nextState: { isOpen: !1 }, props: e, query: p, refresh: r, store: n }, o))
            ).then(function () {
              u.onSelect(
                R({ event: m, item: c, itemInputValue: p, itemUrl: v, refresh: r, source: u, state: n.getState() }, o)
              );
            });
          },
        },
        l
      );
    },
  };
}
function He(t) {
  return (
    (He =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e && typeof Symbol == 'function' && e.constructor === Symbol && e !== Symbol.prototype
              ? 'symbol'
              : typeof e;
          }),
    He(t)
  );
}
function Qr(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(t, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Oi(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? Qr(Object(r), !0).forEach(function (n) {
          zn(t, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : Qr(Object(r)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return t;
}
function zn(t, e, r) {
  return (
    (e = (function (n) {
      var o = (function (i, a) {
        if (He(i) !== 'object' || i === null) return i;
        var c = i[Symbol.toPrimitive];
        if (c !== void 0) {
          var u = c.call(i, a || 'default');
          if (He(u) !== 'object') return u;
          throw new TypeError('@@toPrimitive must return a primitive value.');
        }
        return (a === 'string' ? String : Number)(i);
      })(n, 'string');
      return He(o) === 'symbol' ? o : String(o);
    })(e)) in t
      ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (t[e] = r),
    t
  );
}
function Si(t) {
  var e,
    r,
    n,
    o,
    i = t.plugins,
    a = t.options,
    c =
      (e = (((r = a.__autocomplete_metadata) === null || r === void 0 ? void 0 : r.userAgents) || [])[0]) === null ||
      e === void 0
        ? void 0
        : e.segment,
    u = c
      ? zn({}, c, Object.keys(((n = a.__autocomplete_metadata) === null || n === void 0 ? void 0 : n.options) || {}))
      : {};
  return {
    plugins: i.map(function (s) {
      return { name: s.name, options: Object.keys(s.__autocomplete_pluginOptions || []) };
    }),
    options: Oi({ 'autocomplete-core': Object.keys(a) }, u),
    ua: qo.concat(((o = a.__autocomplete_metadata) === null || o === void 0 ? void 0 : o.userAgents) || []),
  };
}
function Zr(t) {
  var e,
    r = t.state;
  return r.isOpen === !1 || r.activeItemId === null
    ? null
    : ((e = fe(r)) === null || e === void 0 ? void 0 : e.itemInputValue) || null;
}
function Ue(t) {
  return (
    (Ue =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e && typeof Symbol == 'function' && e.constructor === Symbol && e !== Symbol.prototype
              ? 'symbol'
              : typeof e;
          }),
    Ue(t)
  );
}
function Yr(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(t, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function E(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? Yr(Object(r), !0).forEach(function (n) {
          wi(t, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : Yr(Object(r)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return t;
}
function wi(t, e, r) {
  return (
    (e = (function (n) {
      var o = (function (i, a) {
        if (Ue(i) !== 'object' || i === null) return i;
        var c = i[Symbol.toPrimitive];
        if (c !== void 0) {
          var u = c.call(i, a || 'default');
          if (Ue(u) !== 'object') return u;
          throw new TypeError('@@toPrimitive must return a primitive value.');
        }
        return (a === 'string' ? String : Number)(i);
      })(n, 'string');
      return Ue(o) === 'symbol' ? o : String(o);
    })(e)) in t
      ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (t[e] = r),
    t
  );
}
var ji = function (t, e) {
  switch (e.type) {
    case 'setActiveItemId':
    case 'mousemove':
      return E(E({}, t), {}, { activeItemId: e.payload });
    case 'setQuery':
      return E(E({}, t), {}, { query: e.payload, completion: null });
    case 'setCollections':
      return E(E({}, t), {}, { collections: e.payload });
    case 'setIsOpen':
      return E(E({}, t), {}, { isOpen: e.payload });
    case 'setStatus':
      return E(E({}, t), {}, { status: e.payload });
    case 'setContext':
      return E(E({}, t), {}, { context: E(E({}, t.context), e.payload) });
    case 'ArrowDown':
      var r = E(
        E({}, t),
        {},
        {
          activeItemId: e.payload.hasOwnProperty('nextActiveItemId')
            ? e.payload.nextActiveItemId
            : qr(1, t.activeItemId, Kt(t), e.props.defaultActiveItemId),
        }
      );
      return E(E({}, r), {}, { completion: Zr({ state: r }) });
    case 'ArrowUp':
      var n = E(E({}, t), {}, { activeItemId: qr(-1, t.activeItemId, Kt(t), e.props.defaultActiveItemId) });
      return E(E({}, n), {}, { completion: Zr({ state: n }) });
    case 'Escape':
      return t.isOpen
        ? E(E({}, t), {}, { activeItemId: null, isOpen: !1, completion: null })
        : E(E({}, t), {}, { activeItemId: null, query: '', status: 'idle', collections: [] });
    case 'submit':
      return E(E({}, t), {}, { activeItemId: null, isOpen: !1, status: 'idle' });
    case 'reset':
      return E(
        E({}, t),
        {},
        { activeItemId: e.props.openOnFocus === !0 ? e.props.defaultActiveItemId : null, status: 'idle', query: '' }
      );
    case 'focus':
      return E(
        E({}, t),
        {},
        {
          activeItemId: e.props.defaultActiveItemId,
          isOpen: (e.props.openOnFocus || !!t.query) && e.props.shouldPanelOpen({ state: t }),
        }
      );
    case 'blur':
      return e.props.debug ? t : E(E({}, t), {}, { isOpen: !1, activeItemId: null });
    case 'mouseleave':
      return E(E({}, t), {}, { activeItemId: e.props.defaultActiveItemId });
    default:
      return 'The reducer action '.concat(JSON.stringify(e.type), ' is not supported.'), t;
  }
};
function Fe(t) {
  return (
    (Fe =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e && typeof Symbol == 'function' && e.constructor === Symbol && e !== Symbol.prototype
              ? 'symbol'
              : typeof e;
          }),
    Fe(t)
  );
}
function Gr(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(t, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function ne(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? Gr(Object(r), !0).forEach(function (n) {
          Ei(t, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : Gr(Object(r)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return t;
}
function Ei(t, e, r) {
  return (
    (e = (function (n) {
      var o = (function (i, a) {
        if (Fe(i) !== 'object' || i === null) return i;
        var c = i[Symbol.toPrimitive];
        if (c !== void 0) {
          var u = c.call(i, a || 'default');
          if (Fe(u) !== 'object') return u;
          throw new TypeError('@@toPrimitive must return a primitive value.');
        }
        return (a === 'string' ? String : Number)(i);
      })(n, 'string');
      return Fe(o) === 'symbol' ? o : String(o);
    })(e)) in t
      ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (t[e] = r),
    t
  );
}
function Pi(t) {
  var e = [],
    r = ti(t, e),
    n = Yo(ji, r, function (u) {
      var s = u.prevState,
        l = u.state;
      r.onStateChange(ne({ prevState: s, state: l, refresh: a, navigator: r.navigator }, o));
    }),
    o = (function (u) {
      var s = u.store;
      return {
        setActiveItemId: function (l) {
          s.dispatch('setActiveItemId', l);
        },
        setQuery: function (l) {
          s.dispatch('setQuery', l);
        },
        setCollections: function (l) {
          var m = 0,
            p = l.map(function (v) {
              return tt(
                tt({}, v),
                {},
                {
                  items: ze(v.items).map(function (d) {
                    return tt(tt({}, d), {}, { __autocomplete_id: m++ });
                  }),
                }
              );
            });
          s.dispatch('setCollections', p);
        },
        setIsOpen: function (l) {
          s.dispatch('setIsOpen', l);
        },
        setStatus: function (l) {
          s.dispatch('setStatus', l);
        },
        setContext: function (l) {
          s.dispatch('setContext', l);
        },
      };
    })({ store: n }),
    i = _i(ne({ props: r, refresh: a, store: n, navigator: r.navigator }, o));
  function a() {
    return le(
      ne(
        {
          event: new Event('input'),
          nextState: { isOpen: n.getState().isOpen },
          props: r,
          navigator: r.navigator,
          query: n.getState().query,
          refresh: a,
          store: n,
        },
        o
      )
    );
  }
  if (
    t.insights &&
    !r.plugins.some(function (u) {
      return u.name === 'aa.algoliaInsightsPlugin';
    })
  ) {
    var c = typeof t.insights == 'boolean' ? {} : t.insights;
    r.plugins.push(Jo(c));
  }
  return (
    r.plugins.forEach(function (u) {
      var s;
      return (s = u.subscribe) === null || s === void 0
        ? void 0
        : s.call(
            u,
            ne(
              ne({}, o),
              {},
              {
                navigator: r.navigator,
                refresh: a,
                onSelect: function (l) {
                  e.push({ onSelect: l });
                },
                onActive: function (l) {
                  e.push({ onActive: l });
                },
                onResolve: function (l) {
                  e.push({ onResolve: l });
                },
              }
            )
          );
    }),
    (function (u) {
      var s,
        l,
        m = u.metadata,
        p = u.environment;
      if (
        !((s = p.navigator) === null || s === void 0 || (l = s.userAgent) === null || l === void 0) &&
        l.includes('Algolia Crawler')
      ) {
        var v = p.document.createElement('meta'),
          d = p.document.querySelector('head');
        (v.name = 'algolia:metadata'),
          setTimeout(function () {
            (v.content = JSON.stringify(m)), d.appendChild(v);
          }, 0);
      }
    })({ metadata: Si({ plugins: r.plugins, options: t }), environment: r.environment }),
    ne(ne({ refresh: a, navigator: r.navigator }, i), o)
  );
}
function Ii(t) {
  var e = t.translations,
    r = (e === void 0 ? {} : e).searchByText,
    n = r === void 0 ? 'Search by' : r;
  return f.createElement(
    'a',
    {
      href: 'https://www.algolia.com/ref/docsearch/?utm_source='.concat(
        window.location.hostname,
        '&utm_medium=referral&utm_content=powered_by&utm_campaign=docsearch'
      ),
      target: '_blank',
      rel: 'noopener noreferrer',
    },
    f.createElement('span', { className: 'DocSearch-Label' }, n),
    f.createElement(
      'svg',
      {
        width: '77',
        height: '19',
        'aria-label': 'Algolia',
        role: 'img',
        id: 'Layer_1',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 2196.2 500',
      },
      f.createElement(
        'defs',
        null,
        f.createElement('style', null, '.cls-1,.cls-2{fill:#003dff;}.cls-2{fill-rule:evenodd;}')
      ),
      f.createElement('path', {
        className: 'cls-2',
        d: 'M1070.38,275.3V5.91c0-3.63-3.24-6.39-6.82-5.83l-50.46,7.94c-2.87,.45-4.99,2.93-4.99,5.84l.17,273.22c0,12.92,0,92.7,95.97,95.49,3.33,.1,6.09-2.58,6.09-5.91v-40.78c0-2.96-2.19-5.51-5.12-5.84-34.85-4.01-34.85-47.57-34.85-54.72Z',
      }),
      f.createElement('rect', {
        className: 'cls-1',
        x: '1845.88',
        y: '104.73',
        width: '62.58',
        height: '277.9',
        rx: '5.9',
        ry: '5.9',
      }),
      f.createElement('path', {
        className: 'cls-2',
        d: 'M1851.78,71.38h50.77c3.26,0,5.9-2.64,5.9-5.9V5.9c0-3.62-3.24-6.39-6.82-5.83l-50.77,7.95c-2.87,.45-4.99,2.92-4.99,5.83v51.62c0,3.26,2.64,5.9,5.9,5.9Z',
      }),
      f.createElement('path', {
        className: 'cls-2',
        d: 'M1764.03,275.3V5.91c0-3.63-3.24-6.39-6.82-5.83l-50.46,7.94c-2.87,.45-4.99,2.93-4.99,5.84l.17,273.22c0,12.92,0,92.7,95.97,95.49,3.33,.1,6.09-2.58,6.09-5.91v-40.78c0-2.96-2.19-5.51-5.12-5.84-34.85-4.01-34.85-47.57-34.85-54.72Z',
      }),
      f.createElement('path', {
        className: 'cls-2',
        d: 'M1631.95,142.72c-11.14-12.25-24.83-21.65-40.78-28.31-15.92-6.53-33.26-9.85-52.07-9.85-18.78,0-36.15,3.17-51.92,9.85-15.59,6.66-29.29,16.05-40.76,28.31-11.47,12.23-20.38,26.87-26.76,44.03-6.38,17.17-9.24,37.37-9.24,58.36,0,20.99,3.19,36.87,9.55,54.21,6.38,17.32,15.14,32.11,26.45,44.36,11.29,12.23,24.83,21.62,40.6,28.46,15.77,6.83,40.12,10.33,52.4,10.48,12.25,0,36.78-3.82,52.7-10.48,15.92-6.68,29.46-16.23,40.78-28.46,11.29-12.25,20.05-27.04,26.25-44.36,6.22-17.34,9.24-33.22,9.24-54.21,0-20.99-3.34-41.19-10.03-58.36-6.38-17.17-15.14-31.8-26.43-44.03Zm-44.43,163.75c-11.47,15.75-27.56,23.7-48.09,23.7-20.55,0-36.63-7.8-48.1-23.7-11.47-15.75-17.21-34.01-17.21-61.2,0-26.89,5.59-49.14,17.06-64.87,11.45-15.75,27.54-23.52,48.07-23.52,20.55,0,36.63,7.78,48.09,23.52,11.47,15.57,17.36,37.98,17.36,64.87,0,27.19-5.72,45.3-17.19,61.2Z',
      }),
      f.createElement('path', {
        className: 'cls-2',
        d: 'M894.42,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-14.52,22.58-22.99,49.63-22.99,78.73,0,44.89,20.13,84.92,51.59,111.1,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47,1.23,0,2.46-.03,3.68-.09,.36-.02,.71-.05,1.07-.07,.87-.05,1.75-.11,2.62-.2,.34-.03,.68-.08,1.02-.12,.91-.1,1.82-.21,2.73-.34,.21-.03,.42-.07,.63-.1,32.89-5.07,61.56-30.82,70.9-62.81v57.83c0,3.26,2.64,5.9,5.9,5.9h50.42c3.26,0,5.9-2.64,5.9-5.9V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,206.92c-12.2,10.16-27.97,13.98-44.84,15.12-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-42.24,0-77.12-35.89-77.12-79.37,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33v142.83Z',
      }),
      f.createElement('path', {
        className: 'cls-2',
        d: 'M2133.97,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-14.52,22.58-22.99,49.63-22.99,78.73,0,44.89,20.13,84.92,51.59,111.1,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47,1.23,0,2.46-.03,3.68-.09,.36-.02,.71-.05,1.07-.07,.87-.05,1.75-.11,2.62-.2,.34-.03,.68-.08,1.02-.12,.91-.1,1.82-.21,2.73-.34,.21-.03,.42-.07,.63-.1,32.89-5.07,61.56-30.82,70.9-62.81v57.83c0,3.26,2.64,5.9,5.9,5.9h50.42c3.26,0,5.9-2.64,5.9-5.9V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,206.92c-12.2,10.16-27.97,13.98-44.84,15.12-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-42.24,0-77.12-35.89-77.12-79.37,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33v142.83Z',
      }),
      f.createElement('path', {
        className: 'cls-2',
        d: 'M1314.05,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-11.79,18.34-19.6,39.64-22.11,62.59-.58,5.3-.88,10.68-.88,16.14s.31,11.15,.93,16.59c4.28,38.09,23.14,71.61,50.66,94.52,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47h0c17.99,0,34.61-5.93,48.16-15.97,16.29-11.58,28.88-28.54,34.48-47.75v50.26h-.11v11.08c0,21.84-5.71,38.27-17.34,49.36-11.61,11.08-31.04,16.63-58.25,16.63-11.12,0-28.79-.59-46.6-2.41-2.83-.29-5.46,1.5-6.27,4.22l-12.78,43.11c-1.02,3.46,1.27,7.02,4.83,7.53,21.52,3.08,42.52,4.68,54.65,4.68,48.91,0,85.16-10.75,108.89-32.21,21.48-19.41,33.15-48.89,35.2-88.52V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,64.1s.65,139.13,0,143.36c-12.08,9.77-27.11,13.59-43.49,14.7-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-1.32,0-2.63-.03-3.94-.1-40.41-2.11-74.52-37.26-74.52-79.38,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33Z',
      }),
      f.createElement('path', {
        className: 'cls-1',
        d: 'M249.83,0C113.3,0,2,110.09,.03,246.16c-2,138.19,110.12,252.7,248.33,253.5,42.68,.25,83.79-10.19,120.3-30.03,3.56-1.93,4.11-6.83,1.08-9.51l-23.38-20.72c-4.75-4.21-11.51-5.4-17.36-2.92-25.48,10.84-53.17,16.38-81.71,16.03-111.68-1.37-201.91-94.29-200.13-205.96,1.76-110.26,92-199.41,202.67-199.41h202.69V407.41l-115-102.18c-3.72-3.31-9.42-2.66-12.42,1.31-18.46,24.44-48.53,39.64-81.93,37.34-46.33-3.2-83.87-40.5-87.34-86.81-4.15-55.24,39.63-101.52,94-101.52,49.18,0,89.68,37.85,93.91,85.95,.38,4.28,2.31,8.27,5.52,11.12l29.95,26.55c3.4,3.01,8.79,1.17,9.63-3.3,2.16-11.55,2.92-23.58,2.07-35.92-4.82-70.34-61.8-126.93-132.17-131.26-80.68-4.97-148.13,58.14-150.27,137.25-2.09,77.1,61.08,143.56,138.19,145.26,32.19,.71,62.03-9.41,86.14-26.95l150.26,133.2c6.44,5.71,16.61,1.14,16.61-7.47V9.48C499.66,4.25,495.42,0,490.18,0H249.83Z',
      })
    )
  );
}
function it(t) {
  return f.createElement(
    'svg',
    { width: '15', height: '15', 'aria-label': t.ariaLabel, role: 'img' },
    f.createElement(
      'g',
      { fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '1.2' },
      t.children
    )
  );
}
function Di(t) {
  var e = t.translations,
    r = e === void 0 ? {} : e,
    n = r.selectText,
    o = n === void 0 ? 'to select' : n,
    i = r.selectKeyAriaLabel,
    a = i === void 0 ? 'Enter key' : i,
    c = r.navigateText,
    u = c === void 0 ? 'to navigate' : c,
    s = r.navigateUpKeyAriaLabel,
    l = s === void 0 ? 'Arrow up' : s,
    m = r.navigateDownKeyAriaLabel,
    p = m === void 0 ? 'Arrow down' : m,
    v = r.closeText,
    d = v === void 0 ? 'to close' : v,
    h = r.closeKeyAriaLabel,
    y = h === void 0 ? 'Escape key' : h,
    b = r.searchByText,
    _ = b === void 0 ? 'Search by' : b;
  return f.createElement(
    f.Fragment,
    null,
    f.createElement('div', { className: 'DocSearch-Logo' }, f.createElement(Ii, { translations: { searchByText: _ } })),
    f.createElement(
      'ul',
      { className: 'DocSearch-Commands' },
      f.createElement(
        'li',
        null,
        f.createElement(
          'kbd',
          { className: 'DocSearch-Commands-Key' },
          f.createElement(
            it,
            { ariaLabel: a },
            f.createElement('path', { d: 'M12 3.53088v3c0 1-1 2-2 2H4M7 11.53088l-3-3 3-3' })
          )
        ),
        f.createElement('span', { className: 'DocSearch-Label' }, o)
      ),
      f.createElement(
        'li',
        null,
        f.createElement(
          'kbd',
          { className: 'DocSearch-Commands-Key' },
          f.createElement(it, { ariaLabel: p }, f.createElement('path', { d: 'M7.5 3.5v8M10.5 8.5l-3 3-3-3' }))
        ),
        f.createElement(
          'kbd',
          { className: 'DocSearch-Commands-Key' },
          f.createElement(it, { ariaLabel: l }, f.createElement('path', { d: 'M7.5 11.5v-8M10.5 6.5l-3-3-3 3' }))
        ),
        f.createElement('span', { className: 'DocSearch-Label' }, u)
      ),
      f.createElement(
        'li',
        null,
        f.createElement(
          'kbd',
          { className: 'DocSearch-Commands-Key' },
          f.createElement(
            it,
            { ariaLabel: y },
            f.createElement('path', {
              d: 'M13.6167 8.936c-.1065.3583-.6883.962-1.4875.962-.7993 0-1.653-.9165-1.653-2.1258v-.5678c0-1.2548.7896-2.1016 1.653-2.1016.8634 0 1.3601.4778 1.4875 1.0724M9 6c-.1352-.4735-.7506-.9219-1.46-.8972-.7092.0246-1.344.57-1.344 1.2166s.4198.8812 1.3445.9805C8.465 7.3992 8.968 7.9337 9 8.5c.032.5663-.454 1.398-1.4595 1.398C6.6593 9.898 6 9 5.963 8.4851m-1.4748.5368c-.2635.5941-.8099.876-1.5443.876s-1.7073-.6248-1.7073-2.204v-.4603c0-1.0416.721-2.131 1.7073-2.131.9864 0 1.6425 1.031 1.5443 2.2492h-2.956',
            })
          )
        ),
        f.createElement('span', { className: 'DocSearch-Label' }, d)
      )
    )
  );
}
function ki(t) {
  var e = t.hit,
    r = t.children;
  return f.createElement('a', { href: e.url }, r);
}
function Ai() {
  return f.createElement(
    'svg',
    { viewBox: '0 0 38 38', stroke: 'currentColor', strokeOpacity: '.5' },
    f.createElement(
      'g',
      { fill: 'none', fillRule: 'evenodd' },
      f.createElement(
        'g',
        { transform: 'translate(1 1)', strokeWidth: '2' },
        f.createElement('circle', { strokeOpacity: '.3', cx: '18', cy: '18', r: '18' }),
        f.createElement(
          'path',
          { d: 'M36 18c0-9.94-8.06-18-18-18' },
          f.createElement('animateTransform', {
            attributeName: 'transform',
            type: 'rotate',
            from: '0 18 18',
            to: '360 18 18',
            dur: '1s',
            repeatCount: 'indefinite',
          })
        )
      )
    )
  );
}
function Ci() {
  return f.createElement(
    'svg',
    { width: '20', height: '20', viewBox: '0 0 20 20' },
    f.createElement(
      'g',
      { stroke: 'currentColor', fill: 'none', fillRule: 'evenodd', strokeLinecap: 'round', strokeLinejoin: 'round' },
      f.createElement('path', { d: 'M3.18 6.6a8.23 8.23 0 1112.93 9.94h0a8.23 8.23 0 01-11.63 0' }),
      f.createElement('path', { d: 'M6.44 7.25H2.55V3.36M10.45 6v5.6M10.45 11.6L13 13' })
    )
  );
}
function zt() {
  return f.createElement(
    'svg',
    { width: '20', height: '20', viewBox: '0 0 20 20' },
    f.createElement('path', {
      d: 'M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z',
      stroke: 'currentColor',
      fill: 'none',
      fillRule: 'evenodd',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
    })
  );
}
function xi() {
  return f.createElement(
    'svg',
    { className: 'DocSearch-Hit-Select-Icon', width: '20', height: '20', viewBox: '0 0 20 20' },
    f.createElement(
      'g',
      { stroke: 'currentColor', fill: 'none', fillRule: 'evenodd', strokeLinecap: 'round', strokeLinejoin: 'round' },
      f.createElement('path', { d: 'M18 3v4c0 2-2 4-4 4H2' }),
      f.createElement('path', { d: 'M8 17l-6-6 6-6' })
    )
  );
}
var Ni = function () {
  return f.createElement(
    'svg',
    { width: '20', height: '20', viewBox: '0 0 20 20' },
    f.createElement('path', {
      d: 'M17 6v12c0 .52-.2 1-1 1H4c-.7 0-1-.33-1-1V2c0-.55.42-1 1-1h8l5 5zM14 8h-3.13c-.51 0-.87-.34-.87-.87V4',
      stroke: 'currentColor',
      fill: 'none',
      fillRule: 'evenodd',
      strokeLinejoin: 'round',
    })
  );
};
function Ti(t) {
  switch (t.type) {
    case 'lvl1':
      return f.createElement(Ni, null);
    case 'content':
      return f.createElement(qi, null);
    default:
      return f.createElement(Ri, null);
  }
}
function Ri() {
  return f.createElement(
    'svg',
    { width: '20', height: '20', viewBox: '0 0 20 20' },
    f.createElement('path', {
      d: 'M13 13h4-4V8H7v5h6v4-4H7V8H3h4V3v5h6V3v5h4-4v5zm-6 0v4-4H3h4z',
      stroke: 'currentColor',
      fill: 'none',
      fillRule: 'evenodd',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
    })
  );
}
function qi() {
  return f.createElement(
    'svg',
    { width: '20', height: '20', viewBox: '0 0 20 20' },
    f.createElement('path', {
      d: 'M17 5H3h14zm0 5H3h14zm0 5H3h14z',
      stroke: 'currentColor',
      fill: 'none',
      fillRule: 'evenodd',
      strokeLinejoin: 'round',
    })
  );
}
function Xr() {
  return f.createElement(
    'svg',
    { width: '20', height: '20', viewBox: '0 0 20 20' },
    f.createElement('path', {
      d: 'M10 14.2L5 17l1-5.6-4-4 5.5-.7 2.5-5 2.5 5 5.6.8-4 4 .9 5.5z',
      stroke: 'currentColor',
      fill: 'none',
      fillRule: 'evenodd',
      strokeLinejoin: 'round',
    })
  );
}
function Li() {
  return f.createElement(
    'svg',
    {
      width: '40',
      height: '40',
      viewBox: '0 0 20 20',
      fill: 'none',
      fillRule: 'evenodd',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
    },
    f.createElement('path', {
      d: 'M19 4.8a16 16 0 00-2-1.2m-3.3-1.2A16 16 0 001.1 4.7M16.7 8a12 12 0 00-2.8-1.4M10 6a12 12 0 00-6.7 2M12.3 14.7a4 4 0 00-4.5 0M14.5 11.4A8 8 0 0010 10M3 16L18 2M10 18h0',
    })
  );
}
function Mi() {
  return f.createElement(
    'svg',
    {
      width: '40',
      height: '40',
      viewBox: '0 0 20 20',
      fill: 'none',
      fillRule: 'evenodd',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
    },
    f.createElement('path', {
      d: 'M15.5 4.8c2 3 1.7 7-1 9.7h0l4.3 4.3-4.3-4.3a7.8 7.8 0 01-9.8 1m-2.2-2.2A7.8 7.8 0 0113.2 2.4M2 18L18 2',
    })
  );
}
function Hi(t) {
  var e = t.translations,
    r = e === void 0 ? {} : e,
    n = r.titleText,
    o = n === void 0 ? 'Unable to fetch results' : n,
    i = r.helpText,
    a = i === void 0 ? 'You might want to check your network connection.' : i;
  return f.createElement(
    'div',
    { className: 'DocSearch-ErrorScreen' },
    f.createElement('div', { className: 'DocSearch-Screen-Icon' }, f.createElement(Li, null)),
    f.createElement('p', { className: 'DocSearch-Title' }, o),
    f.createElement('p', { className: 'DocSearch-Help' }, a)
  );
}
var Ui = ['translations'];
function Fi(t) {
  return (
    (function (e) {
      if (Array.isArray(e)) return Tt(e);
    })(t) ||
    (function (e) {
      if ((typeof Symbol < 'u' && e[Symbol.iterator] != null) || e['@@iterator'] != null) return Array.from(e);
    })(t) ||
    (function (e, r) {
      if (e) {
        if (typeof e == 'string') return Tt(e, r);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        if ((n === 'Object' && e.constructor && (n = e.constructor.name), n === 'Map' || n === 'Set'))
          return Array.from(e);
        if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Tt(e, r);
      }
    })(t) ||
    (function () {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    })()
  );
}
function Tt(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
  return n;
}
function Bi(t, e) {
  if (t == null) return {};
  var r,
    n,
    o = (function (a, c) {
      if (a == null) return {};
      var u,
        s,
        l = {},
        m = Object.keys(a);
      for (s = 0; s < m.length; s++) (u = m[s]), c.indexOf(u) >= 0 || (l[u] = a[u]);
      return l;
    })(t, e);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    for (n = 0; n < i.length; n++)
      (r = i[n]), e.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r]));
  }
  return o;
}
function Vi(t) {
  var e = t.translations,
    r = e === void 0 ? {} : e,
    n = Bi(t, Ui),
    o = r.noResultsText,
    i = o === void 0 ? 'No results for' : o,
    a = r.suggestedQueryText,
    c = a === void 0 ? 'Try searching for' : a,
    u = r.reportMissingResultsText,
    s = u === void 0 ? 'Believe this query should return results?' : u,
    l = r.reportMissingResultsLinkText,
    m = l === void 0 ? 'Let us know.' : l,
    p = n.state.context.searchSuggestions;
  return f.createElement(
    'div',
    { className: 'DocSearch-NoResults' },
    f.createElement('div', { className: 'DocSearch-Screen-Icon' }, f.createElement(Mi, null)),
    f.createElement(
      'p',
      { className: 'DocSearch-Title' },
      i,
      ' "',
      f.createElement('strong', null, n.state.query),
      '"'
    ),
    p &&
      p.length > 0 &&
      f.createElement(
        'div',
        { className: 'DocSearch-NoResults-Prefill-List' },
        f.createElement('p', { className: 'DocSearch-Help' }, c, ':'),
        f.createElement(
          'ul',
          null,
          p.slice(0, 3).reduce(function (v, d) {
            return [].concat(Fi(v), [
              f.createElement(
                'li',
                { key: d },
                f.createElement(
                  'button',
                  {
                    className: 'DocSearch-Prefill',
                    key: d,
                    type: 'button',
                    onClick: function () {
                      n.setQuery(d.toLowerCase() + ' '), n.refresh(), n.inputRef.current.focus();
                    },
                  },
                  d
                )
              ),
            ]);
          }, [])
        )
      ),
    n.getMissingResultsUrl &&
      f.createElement(
        'p',
        { className: 'DocSearch-Help' },
        ''.concat(s, ' '),
        f.createElement(
          'a',
          { href: n.getMissingResultsUrl({ query: n.state.query }), target: '_blank', rel: 'noopener noreferrer' },
          m
        )
      )
  );
}
var Wi = ['hit', 'attribute', 'tagName'];
function en(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(t, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function tn(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? en(Object(r), !0).forEach(function (n) {
          Ki(t, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : en(Object(r)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return t;
}
function Ki(t, e, r) {
  return (
    e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = r), t
  );
}
function zi(t, e) {
  if (t == null) return {};
  var r,
    n,
    o = (function (a, c) {
      if (a == null) return {};
      var u,
        s,
        l = {},
        m = Object.keys(a);
      for (s = 0; s < m.length; s++) (u = m[s]), c.indexOf(u) >= 0 || (l[u] = a[u]);
      return l;
    })(t, e);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    for (n = 0; n < i.length; n++)
      (r = i[n]), e.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r]));
  }
  return o;
}
function rn(t, e) {
  return e.split('.').reduce(function (r, n) {
    return r != null && r[n] ? r[n] : null;
  }, t);
}
function ce(t) {
  var e = t.hit,
    r = t.attribute,
    n = t.tagName;
  return W(
    n === void 0 ? 'span' : n,
    tn(
      tn({}, zi(t, Wi)),
      {},
      { dangerouslySetInnerHTML: { __html: rn(e, '_snippetResult.'.concat(r, '.value')) || rn(e, r) } }
    )
  );
}
function nn(t, e) {
  return (
    (function (r) {
      if (Array.isArray(r)) return r;
    })(t) ||
    (function (r, n) {
      var o = r == null ? null : (typeof Symbol < 'u' && r[Symbol.iterator]) || r['@@iterator'];
      if (o != null) {
        var i,
          a,
          c = [],
          u = !0,
          s = !1;
        try {
          for (o = o.call(r); !(u = (i = o.next()).done) && (c.push(i.value), !n || c.length !== n); u = !0);
        } catch (l) {
          (s = !0), (a = l);
        } finally {
          try {
            u || o.return == null || o.return();
          } finally {
            if (s) throw a;
          }
        }
        return c;
      }
    })(t, e) ||
    (function (r, n) {
      if (r) {
        if (typeof r == 'string') return on(r, n);
        var o = Object.prototype.toString.call(r).slice(8, -1);
        if ((o === 'Object' && r.constructor && (o = r.constructor.name), o === 'Map' || o === 'Set'))
          return Array.from(r);
        if (o === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)) return on(r, n);
      }
    })(t, e) ||
    (function () {
      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    })()
  );
}
function on(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
  return n;
}
function ht() {
  return (
    (ht =
      Object.assign ||
      function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = arguments[e];
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
        }
        return t;
      }),
    ht.apply(this, arguments)
  );
}
function Jt(t) {
  return t.collection && t.collection.items.length !== 0
    ? f.createElement(
        'section',
        { className: 'DocSearch-Hits' },
        f.createElement('div', { className: 'DocSearch-Hit-source' }, t.title),
        f.createElement(
          'ul',
          t.getListProps(),
          t.collection.items.map(function (e, r) {
            return f.createElement(Ji, ht({ key: [t.title, e.objectID].join(':'), item: e, index: r }, t));
          })
        )
      )
    : null;
}
function Ji(t) {
  var e = t.item,
    r = t.index,
    n = t.renderIcon,
    o = t.renderAction,
    i = t.getItemProps,
    a = t.onItemClick,
    c = t.collection,
    u = t.hitComponent,
    s = nn(f.useState(!1), 2),
    l = s[0],
    m = s[1],
    p = nn(f.useState(!1), 2),
    v = p[0],
    d = p[1],
    h = f.useRef(null),
    y = u;
  return f.createElement(
    'li',
    ht(
      {
        className: [
          'DocSearch-Hit',
          e.__docsearch_parent && 'DocSearch-Hit--Child',
          l && 'DocSearch-Hit--deleting',
          v && 'DocSearch-Hit--favoriting',
        ]
          .filter(Boolean)
          .join(' '),
        onTransitionEnd: function () {
          h.current && h.current();
        },
      },
      i({
        item: e,
        source: c.source,
        onClick: function (b) {
          a(e, b);
        },
      })
    ),
    f.createElement(
      y,
      { hit: e },
      f.createElement(
        'div',
        { className: 'DocSearch-Hit-Container' },
        n({ item: e, index: r }),
        e.hierarchy[e.type] &&
          e.type === 'lvl1' &&
          f.createElement(
            'div',
            { className: 'DocSearch-Hit-content-wrapper' },
            f.createElement(ce, { className: 'DocSearch-Hit-title', hit: e, attribute: 'hierarchy.lvl1' }),
            e.content && f.createElement(ce, { className: 'DocSearch-Hit-path', hit: e, attribute: 'content' })
          ),
        e.hierarchy[e.type] &&
          (e.type === 'lvl2' || e.type === 'lvl3' || e.type === 'lvl4' || e.type === 'lvl5' || e.type === 'lvl6') &&
          f.createElement(
            'div',
            { className: 'DocSearch-Hit-content-wrapper' },
            f.createElement(ce, { className: 'DocSearch-Hit-title', hit: e, attribute: 'hierarchy.'.concat(e.type) }),
            f.createElement(ce, { className: 'DocSearch-Hit-path', hit: e, attribute: 'hierarchy.lvl1' })
          ),
        e.type === 'content' &&
          f.createElement(
            'div',
            { className: 'DocSearch-Hit-content-wrapper' },
            f.createElement(ce, { className: 'DocSearch-Hit-title', hit: e, attribute: 'content' }),
            f.createElement(ce, { className: 'DocSearch-Hit-path', hit: e, attribute: 'hierarchy.lvl1' })
          ),
        o({
          item: e,
          runDeleteTransition: function (b) {
            m(!0), (h.current = b);
          },
          runFavoriteTransition: function (b) {
            d(!0), (h.current = b);
          },
        })
      )
    )
  );
}
function an(t, e, r) {
  return t.reduce(function (n, o) {
    var i = e(o);
    return n.hasOwnProperty(i) || (n[i] = []), n[i].length < (r || 5) && n[i].push(o), n;
  }, {});
}
function un(t) {
  return t;
}
function at(t) {
  return t.button === 1 || t.altKey || t.ctrlKey || t.metaKey || t.shiftKey;
}
function $i() {}
var Jn = /(<mark>|<\/mark>)/g,
  Qi = RegExp(Jn.source);
function $n(t) {
  var e,
    r,
    n = t;
  if (!n.__docsearch_parent && !t._highlightResult) return t.hierarchy.lvl0;
  var o = (
    (n.__docsearch_parent
      ? (e = n.__docsearch_parent) === null ||
        e === void 0 ||
        (e = e._highlightResult) === null ||
        e === void 0 ||
        (e = e.hierarchy) === null ||
        e === void 0
        ? void 0
        : e.lvl0
      : (r = t._highlightResult) === null || r === void 0 || (r = r.hierarchy) === null || r === void 0
        ? void 0
        : r.lvl0) || {}
  ).value;
  return o && Qi.test(o) ? o.replace(Jn, '') : o;
}
function $t() {
  return (
    ($t =
      Object.assign ||
      function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = arguments[e];
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
        }
        return t;
      }),
    $t.apply(this, arguments)
  );
}
function Zi(t) {
  return f.createElement(
    'div',
    { className: 'DocSearch-Dropdown-Container' },
    t.state.collections.map(function (e) {
      if (e.items.length === 0) return null;
      var r = $n(e.items[0]);
      return f.createElement(
        Jt,
        $t({}, t, {
          key: e.source.sourceId,
          title: r,
          collection: e,
          renderIcon: function (n) {
            var o,
              i = n.item,
              a = n.index;
            return f.createElement(
              f.Fragment,
              null,
              i.__docsearch_parent &&
                f.createElement(
                  'svg',
                  { className: 'DocSearch-Hit-Tree', viewBox: '0 0 24 54' },
                  f.createElement(
                    'g',
                    {
                      stroke: 'currentColor',
                      fill: 'none',
                      fillRule: 'evenodd',
                      strokeLinecap: 'round',
                      strokeLinejoin: 'round',
                    },
                    i.__docsearch_parent !==
                      ((o = e.items[a + 1]) === null || o === void 0 ? void 0 : o.__docsearch_parent)
                      ? f.createElement('path', { d: 'M8 6v21M20 27H8.3' })
                      : f.createElement('path', { d: 'M8 6v42M20 27H8.3' })
                  )
                ),
              f.createElement('div', { className: 'DocSearch-Hit-icon' }, f.createElement(Ti, { type: i.type }))
            );
          },
          renderAction: function () {
            return f.createElement('div', { className: 'DocSearch-Hit-action' }, f.createElement(xi, null));
          },
        })
      );
    }),
    t.resultsFooterComponent &&
      f.createElement(
        'section',
        { className: 'DocSearch-HitsFooter' },
        f.createElement(t.resultsFooterComponent, { state: t.state })
      )
  );
}
var Yi = ['translations'];
function yt() {
  return (
    (yt =
      Object.assign ||
      function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = arguments[e];
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
        }
        return t;
      }),
    yt.apply(this, arguments)
  );
}
function Gi(t, e) {
  if (t == null) return {};
  var r,
    n,
    o = (function (a, c) {
      if (a == null) return {};
      var u,
        s,
        l = {},
        m = Object.keys(a);
      for (s = 0; s < m.length; s++) (u = m[s]), c.indexOf(u) >= 0 || (l[u] = a[u]);
      return l;
    })(t, e);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    for (n = 0; n < i.length; n++)
      (r = i[n]), e.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r]));
  }
  return o;
}
function Xi(t) {
  var e = t.translations,
    r = e === void 0 ? {} : e,
    n = Gi(t, Yi),
    o = r.recentSearchesTitle,
    i = o === void 0 ? 'Recent' : o,
    a = r.noRecentSearchesText,
    c = a === void 0 ? 'No recent searches' : a,
    u = r.saveRecentSearchButtonTitle,
    s = u === void 0 ? 'Save this search' : u,
    l = r.removeRecentSearchButtonTitle,
    m = l === void 0 ? 'Remove this search from history' : l,
    p = r.favoriteSearchesTitle,
    v = p === void 0 ? 'Favorite' : p,
    d = r.removeFavoriteSearchButtonTitle,
    h = d === void 0 ? 'Remove this search from favorites' : d;
  return n.state.status === 'idle' && n.hasCollections === !1
    ? n.disableUserPersonalization
      ? null
      : f.createElement(
          'div',
          { className: 'DocSearch-StartScreen' },
          f.createElement('p', { className: 'DocSearch-Help' }, c)
        )
    : n.hasCollections === !1
      ? null
      : f.createElement(
          'div',
          { className: 'DocSearch-Dropdown-Container' },
          f.createElement(
            Jt,
            yt({}, n, {
              title: i,
              collection: n.state.collections[0],
              renderIcon: function () {
                return f.createElement('div', { className: 'DocSearch-Hit-icon' }, f.createElement(Ci, null));
              },
              renderAction: function (y) {
                var b = y.item,
                  _ = y.runFavoriteTransition,
                  S = y.runDeleteTransition;
                return f.createElement(
                  f.Fragment,
                  null,
                  f.createElement(
                    'div',
                    { className: 'DocSearch-Hit-action' },
                    f.createElement(
                      'button',
                      {
                        className: 'DocSearch-Hit-action-button',
                        title: s,
                        type: 'submit',
                        onClick: function (O) {
                          O.preventDefault(),
                            O.stopPropagation(),
                            _(function () {
                              n.favoriteSearches.add(b), n.recentSearches.remove(b), n.refresh();
                            });
                        },
                      },
                      f.createElement(Xr, null)
                    )
                  ),
                  f.createElement(
                    'div',
                    { className: 'DocSearch-Hit-action' },
                    f.createElement(
                      'button',
                      {
                        className: 'DocSearch-Hit-action-button',
                        title: m,
                        type: 'submit',
                        onClick: function (O) {
                          O.preventDefault(),
                            O.stopPropagation(),
                            S(function () {
                              n.recentSearches.remove(b), n.refresh();
                            });
                        },
                      },
                      f.createElement(zt, null)
                    )
                  )
                );
              },
            })
          ),
          f.createElement(
            Jt,
            yt({}, n, {
              title: v,
              collection: n.state.collections[1],
              renderIcon: function () {
                return f.createElement('div', { className: 'DocSearch-Hit-icon' }, f.createElement(Xr, null));
              },
              renderAction: function (y) {
                var b = y.item,
                  _ = y.runDeleteTransition;
                return f.createElement(
                  'div',
                  { className: 'DocSearch-Hit-action' },
                  f.createElement(
                    'button',
                    {
                      className: 'DocSearch-Hit-action-button',
                      title: h,
                      type: 'submit',
                      onClick: function (S) {
                        S.preventDefault(),
                          S.stopPropagation(),
                          _(function () {
                            n.favoriteSearches.remove(b), n.refresh();
                          });
                      },
                    },
                    f.createElement(zt, null)
                  )
                );
              },
            })
          )
        );
}
var ea = ['translations'];
function gt() {
  return (
    (gt =
      Object.assign ||
      function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = arguments[e];
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
        }
        return t;
      }),
    gt.apply(this, arguments)
  );
}
function ta(t, e) {
  if (t == null) return {};
  var r,
    n,
    o = (function (a, c) {
      if (a == null) return {};
      var u,
        s,
        l = {},
        m = Object.keys(a);
      for (s = 0; s < m.length; s++) (u = m[s]), c.indexOf(u) >= 0 || (l[u] = a[u]);
      return l;
    })(t, e);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    for (n = 0; n < i.length; n++)
      (r = i[n]), e.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r]));
  }
  return o;
}
var ra = f.memo(
    function (t) {
      var e = t.translations,
        r = e === void 0 ? {} : e,
        n = ta(t, ea);
      if (n.state.status === 'error') return f.createElement(Hi, { translations: r?.errorScreen });
      var o = n.state.collections.some(function (i) {
        return i.items.length > 0;
      });
      return n.state.query
        ? o === !1
          ? f.createElement(Vi, gt({}, n, { translations: r?.noResultsScreen }))
          : f.createElement(Zi, n)
        : f.createElement(Xi, gt({}, n, { hasCollections: o, translations: r?.startScreen }));
    },
    function (t, e) {
      return e.state.status === 'loading' || e.state.status === 'stalled';
    }
  ),
  na = ['translations'];
function bt() {
  return (
    (bt =
      Object.assign ||
      function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = arguments[e];
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
        }
        return t;
      }),
    bt.apply(this, arguments)
  );
}
function oa(t, e) {
  if (t == null) return {};
  var r,
    n,
    o = (function (a, c) {
      if (a == null) return {};
      var u,
        s,
        l = {},
        m = Object.keys(a);
      for (s = 0; s < m.length; s++) (u = m[s]), c.indexOf(u) >= 0 || (l[u] = a[u]);
      return l;
    })(t, e);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    for (n = 0; n < i.length; n++)
      (r = i[n]), e.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r]));
  }
  return o;
}
function ia(t) {
  var e = t.translations,
    r = e === void 0 ? {} : e,
    n = oa(t, na),
    o = r.resetButtonTitle,
    i = o === void 0 ? 'Clear the query' : o,
    a = r.resetButtonAriaLabel,
    c = a === void 0 ? 'Clear the query' : a,
    u = r.cancelButtonText,
    s = u === void 0 ? 'Cancel' : u,
    l = r.cancelButtonAriaLabel,
    m = l === void 0 ? 'Cancel' : l,
    p = n.getFormProps({ inputElement: n.inputRef.current }).onReset;
  return (
    f.useEffect(
      function () {
        n.autoFocus && n.inputRef.current && n.inputRef.current.focus();
      },
      [n.autoFocus, n.inputRef]
    ),
    f.useEffect(
      function () {
        n.isFromSelection && n.inputRef.current && n.inputRef.current.select();
      },
      [n.isFromSelection, n.inputRef]
    ),
    f.createElement(
      f.Fragment,
      null,
      f.createElement(
        'form',
        {
          className: 'DocSearch-Form',
          onSubmit: function (v) {
            v.preventDefault();
          },
          onReset: p,
        },
        f.createElement(
          'label',
          bt({ className: 'DocSearch-MagnifierLabel' }, n.getLabelProps()),
          f.createElement(Un, null)
        ),
        f.createElement('div', { className: 'DocSearch-LoadingIndicator' }, f.createElement(Ai, null)),
        f.createElement(
          'input',
          bt(
            { className: 'DocSearch-Input', ref: n.inputRef },
            n.getInputProps({ inputElement: n.inputRef.current, autoFocus: n.autoFocus, maxLength: 64 })
          )
        ),
        f.createElement(
          'button',
          { type: 'reset', title: i, className: 'DocSearch-Reset', 'aria-label': c, hidden: !n.state.query },
          f.createElement(zt, null)
        )
      ),
      f.createElement(
        'button',
        { className: 'DocSearch-Cancel', type: 'reset', 'aria-label': m, onClick: n.onClose },
        s
      )
    )
  );
}
var aa = ['_highlightResult', '_snippetResult'];
function ua(t, e) {
  if (t == null) return {};
  var r,
    n,
    o = (function (a, c) {
      if (a == null) return {};
      var u,
        s,
        l = {},
        m = Object.keys(a);
      for (s = 0; s < m.length; s++) (u = m[s]), c.indexOf(u) >= 0 || (l[u] = a[u]);
      return l;
    })(t, e);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    for (n = 0; n < i.length; n++)
      (r = i[n]), e.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r]));
  }
  return o;
}
function ca(t) {
  return (function () {
    var e = '__TEST_KEY__';
    try {
      return localStorage.setItem(e, ''), localStorage.removeItem(e), !0;
    } catch {
      return !1;
    }
  })() === !1
    ? {
        setItem: function () {},
        getItem: function () {
          return [];
        },
      }
    : {
        setItem: function (e) {
          return window.localStorage.setItem(t, JSON.stringify(e));
        },
        getItem: function () {
          var e = window.localStorage.getItem(t);
          return e ? JSON.parse(e) : [];
        },
      };
}
function cn(t) {
  var e = t.key,
    r = t.limit,
    n = r === void 0 ? 5 : r,
    o = ca(e),
    i = o.getItem().slice(0, n);
  return {
    add: function (a) {
      var c = a,
        u = (c._highlightResult, c._snippetResult, ua(c, aa)),
        s = i.findIndex(function (l) {
          return l.objectID === u.objectID;
        });
      s > -1 && i.splice(s, 1), i.unshift(u), (i = i.slice(0, n)), o.setItem(i);
    },
    remove: function (a) {
      (i = i.filter(function (c) {
        return c.objectID !== a.objectID;
      })),
        o.setItem(i);
    },
    getAll: function () {
      return i;
    },
  };
}
var la = ['facetName', 'facetQuery'];
function sa(t) {
  var e,
    r = 'algoliasearch-client-js-'.concat(t.key),
    n = function () {
      return e === void 0 && (e = t.localStorage || window.localStorage), e;
    },
    o = function () {
      return JSON.parse(n().getItem(r) || '{}');
    },
    i = function (c) {
      n().setItem(r, JSON.stringify(c));
    },
    a = function () {
      var c = t.timeToLive ? 1e3 * t.timeToLive : null,
        u = o(),
        s = Object.fromEntries(
          Object.entries(u).filter(function (m) {
            return se(m, 2)[1].timestamp !== void 0;
          })
        );
      if ((i(s), c)) {
        var l = Object.fromEntries(
          Object.entries(s).filter(function (m) {
            var p = se(m, 2)[1],
              v = new Date().getTime();
            return !(p.timestamp + c < v);
          })
        );
        i(l);
      }
    };
  return {
    get: function (c, u) {
      var s =
        arguments.length > 2 && arguments[2] !== void 0
          ? arguments[2]
          : {
              miss: function () {
                return Promise.resolve();
              },
            };
      return Promise.resolve()
        .then(function () {
          a();
          var l = JSON.stringify(c);
          return o()[l];
        })
        .then(function (l) {
          return Promise.all([l ? l.value : u(), l !== void 0]);
        })
        .then(function (l) {
          var m = se(l, 2),
            p = m[0],
            v = m[1];
          return Promise.all([p, v || s.miss(p)]);
        })
        .then(function (l) {
          return se(l, 1)[0];
        });
    },
    set: function (c, u) {
      return Promise.resolve().then(function () {
        var s = o();
        return (
          (s[JSON.stringify(c)] = { timestamp: new Date().getTime(), value: u }), n().setItem(r, JSON.stringify(s)), u
        );
      });
    },
    delete: function (c) {
      return Promise.resolve().then(function () {
        var u = o();
        delete u[JSON.stringify(c)], n().setItem(r, JSON.stringify(u));
      });
    },
    clear: function () {
      return Promise.resolve().then(function () {
        n().removeItem(r);
      });
    },
  };
}
function Ee(t) {
  var e = mt(t.caches),
    r = e.shift();
  return r === void 0
    ? {
        get: function (n, o) {
          var i =
            arguments.length > 2 && arguments[2] !== void 0
              ? arguments[2]
              : {
                  miss: function () {
                    return Promise.resolve();
                  },
                };
          return o()
            .then(function (a) {
              return Promise.all([a, i.miss(a)]);
            })
            .then(function (a) {
              return se(a, 1)[0];
            });
        },
        set: function (n, o) {
          return Promise.resolve(o);
        },
        delete: function (n) {
          return Promise.resolve();
        },
        clear: function () {
          return Promise.resolve();
        },
      }
    : {
        get: function (n, o) {
          var i =
            arguments.length > 2 && arguments[2] !== void 0
              ? arguments[2]
              : {
                  miss: function () {
                    return Promise.resolve();
                  },
                };
          return r.get(n, o, i).catch(function () {
            return Ee({ caches: e }).get(n, o, i);
          });
        },
        set: function (n, o) {
          return r.set(n, o).catch(function () {
            return Ee({ caches: e }).set(n, o);
          });
        },
        delete: function (n) {
          return r.delete(n).catch(function () {
            return Ee({ caches: e }).delete(n);
          });
        },
        clear: function () {
          return r.clear().catch(function () {
            return Ee({ caches: e }).clear();
          });
        },
      };
}
function Rt() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { serializable: !0 },
    e = {};
  return {
    get: function (r, n) {
      var o =
          arguments.length > 2 && arguments[2] !== void 0
            ? arguments[2]
            : {
                miss: function () {
                  return Promise.resolve();
                },
              },
        i = JSON.stringify(r);
      if (i in e) return Promise.resolve(t.serializable ? JSON.parse(e[i]) : e[i]);
      var a = n(),
        c =
          (o && o.miss) ||
          function () {
            return Promise.resolve();
          };
      return a
        .then(function (u) {
          return c(u);
        })
        .then(function () {
          return a;
        });
    },
    set: function (r, n) {
      return (e[JSON.stringify(r)] = t.serializable ? JSON.stringify(n) : n), Promise.resolve(n);
    },
    delete: function (r) {
      return delete e[JSON.stringify(r)], Promise.resolve();
    },
    clear: function () {
      return (e = {}), Promise.resolve();
    },
  };
}
function fa(t) {
  for (var e = t.length - 1; e > 0; e--) {
    var r = Math.floor(Math.random() * (e + 1)),
      n = t[e];
    (t[e] = t[r]), (t[r] = n);
  }
  return t;
}
function Qn(t, e) {
  return (
    e &&
      Object.keys(e).forEach(function (r) {
        t[r] = e[r](t);
      }),
    t
  );
}
function _t(t) {
  for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) r[n - 1] = arguments[n];
  var o = 0;
  return t.replace(/%s/g, function () {
    return encodeURIComponent(r[o++]);
  });
}
var ft = { WithinQueryParameters: 0, WithinHeaders: 1 };
function ln(t, e) {
  var r = t || {},
    n = r.data || {};
  return (
    Object.keys(r).forEach(function (o) {
      ['timeout', 'headers', 'queryParameters', 'data', 'cacheable'].indexOf(o) === -1 && (n[o] = r[o]);
    }),
    {
      data: Object.entries(n).length > 0 ? n : void 0,
      timeout: r.timeout || e,
      headers: r.headers || {},
      queryParameters: r.queryParameters || {},
      cacheable: r.cacheable,
    }
  );
}
var me = { Read: 1, Write: 2, Any: 3 },
  Zn = 1,
  ma = 2,
  Yn = 3;
function Gn(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Zn;
  return I(I({}, t), {}, { status: e, lastUpdate: Date.now() });
}
function Xn(t) {
  return typeof t == 'string'
    ? { protocol: 'https', url: t, accept: me.Any }
    : { protocol: t.protocol || 'https', url: t.url, accept: t.accept || me.Any };
}
var Qt = 'GET',
  Ot = 'POST';
function pa(t, e) {
  return Promise.all(
    e.map(function (r) {
      return t.get(r, function () {
        return Promise.resolve(Gn(r));
      });
    })
  ).then(function (r) {
    var n = r.filter(function (a) {
        return (function (c) {
          return c.status === Zn || Date.now() - c.lastUpdate > 12e4;
        })(a);
      }),
      o = r.filter(function (a) {
        return (function (c) {
          return c.status === Yn && Date.now() - c.lastUpdate <= 12e4;
        })(a);
      }),
      i = [].concat(mt(n), mt(o));
    return {
      getTimeout: function (a, c) {
        return (o.length === 0 && a === 0 ? 1 : o.length + 3 + a) * c;
      },
      statelessHosts:
        i.length > 0
          ? i.map(function (a) {
              return Xn(a);
            })
          : e,
    };
  });
}
function sn(t, e, r, n) {
  var o = [],
    i = (function (p, v) {
      if (!(p.method === Qt || (p.data === void 0 && v.data === void 0))) {
        var d = Array.isArray(p.data) ? p.data : I(I({}, p.data), v.data);
        return JSON.stringify(d);
      }
    })(r, n),
    a = (function (p, v) {
      var d = I(I({}, p.headers), v.headers),
        h = {};
      return (
        Object.keys(d).forEach(function (y) {
          var b = d[y];
          h[y.toLowerCase()] = b;
        }),
        h
      );
    })(t, n),
    c = r.method,
    u = r.method !== Qt ? {} : I(I({}, r.data), n.data),
    s = I(I(I({ 'x-algolia-agent': t.userAgent.value }, t.queryParameters), u), n.queryParameters),
    l = 0,
    m = function p(v, d) {
      var h = v.pop();
      if (h === void 0)
        throw {
          name: 'RetryError',
          message:
            'Unreachable hosts - your application id may be incorrect. If the error persists, contact support@algolia.com.',
          transporterStackTrace: fn(o),
        };
      var y = {
          data: i,
          headers: a,
          method: c,
          url: da(h, r.path, s),
          connectTimeout: d(l, t.timeouts.connect),
          responseTimeout: d(l, n.timeout),
        },
        b = function (S) {
          var O = { request: y, response: S, host: h, triesLeft: v.length };
          return o.push(O), O;
        },
        _ = {
          onSuccess: function (S) {
            return (function (O) {
              try {
                return JSON.parse(O.content);
              } catch (g) {
                throw (function (P, C) {
                  return { name: 'DeserializationError', message: P, response: C };
                })(g.message, O);
              }
            })(S);
          },
          onRetry: function (S) {
            var O = b(S);
            return (
              S.isTimedOut && l++,
              Promise.all([
                t.logger.info('Retryable failure', to(O)),
                t.hostsCache.set(h, Gn(h, S.isTimedOut ? Yn : ma)),
              ]).then(function () {
                return p(v, d);
              })
            );
          },
          onFail: function (S) {
            throw (
              (b(S),
              (function (O, g) {
                var P = O.content,
                  C = O.status,
                  L = P;
                try {
                  L = JSON.parse(P).message;
                } catch {}
                return (function (x, k, N) {
                  return { name: 'ApiError', message: x, status: k, transporterStackTrace: N };
                })(L, C, g);
              })(S, fn(o)))
            );
          },
        };
      return t.requester.send(y).then(function (S) {
        return (function (O, g) {
          return (function (P) {
            var C = P.status;
            return (
              P.isTimedOut ||
              (function (L) {
                var x = L.isTimedOut,
                  k = L.status;
                return !x && ~~k == 0;
              })(P) ||
              (~~(C / 100) != 2 && ~~(C / 100) != 4)
            );
          })(O)
            ? g.onRetry(O)
            : ~~(O.status / 100) == 2
              ? g.onSuccess(O)
              : g.onFail(O);
        })(S, _);
      });
    };
  return pa(t.hostsCache, e).then(function (p) {
    return m(mt(p.statelessHosts).reverse(), p.getTimeout);
  });
}
function va(t) {
  var e = {
    value: 'Algolia for JavaScript ('.concat(t, ')'),
    add: function (r) {
      var n = '; '.concat(r.segment).concat(r.version !== void 0 ? ' ('.concat(r.version, ')') : '');
      return e.value.indexOf(n) === -1 && (e.value = ''.concat(e.value).concat(n)), e;
    },
  };
  return e;
}
function da(t, e, r) {
  var n = eo(r),
    o = ''
      .concat(t.protocol, '://')
      .concat(t.url, '/')
      .concat(e.charAt(0) === '/' ? e.substr(1) : e);
  return n.length && (o += '?'.concat(n)), o;
}
function eo(t) {
  return Object.keys(t)
    .map(function (e) {
      return _t(
        '%s=%s',
        e,
        ((r = t[e]),
        Object.prototype.toString.call(r) === '[object Object]' ||
        Object.prototype.toString.call(r) === '[object Array]'
          ? JSON.stringify(t[e])
          : t[e])
      );
      var r;
    })
    .join('&');
}
function fn(t) {
  return t.map(function (e) {
    return to(e);
  });
}
function to(t) {
  var e = t.request.headers['x-algolia-api-key'] ? { 'x-algolia-api-key': '*****' } : {};
  return I(I({}, t), {}, { request: I(I({}, t.request), {}, { headers: I(I({}, t.request.headers), e) }) });
}
var ha = function (t) {
    var e = t.appId,
      r = (function (i, a, c) {
        var u = { 'x-algolia-api-key': c, 'x-algolia-application-id': a };
        return {
          headers: function () {
            return i === ft.WithinHeaders ? u : {};
          },
          queryParameters: function () {
            return i === ft.WithinQueryParameters ? u : {};
          },
        };
      })(t.authMode !== void 0 ? t.authMode : ft.WithinHeaders, e, t.apiKey),
      n = (function (i) {
        var a = i.hostsCache,
          c = i.logger,
          u = i.requester,
          s = i.requestsCache,
          l = i.responsesCache,
          m = i.timeouts,
          p = i.userAgent,
          v = i.hosts,
          d = i.queryParameters,
          h = {
            hostsCache: a,
            logger: c,
            requester: u,
            requestsCache: s,
            responsesCache: l,
            timeouts: m,
            userAgent: p,
            headers: i.headers,
            queryParameters: d,
            hosts: v.map(function (y) {
              return Xn(y);
            }),
            read: function (y, b) {
              var _ = ln(b, h.timeouts.read),
                S = function () {
                  return sn(
                    h,
                    h.hosts.filter(function (g) {
                      return (g.accept & me.Read) != 0;
                    }),
                    y,
                    _
                  );
                };
              if ((_.cacheable !== void 0 ? _.cacheable : y.cacheable) !== !0) return S();
              var O = {
                request: y,
                mappedRequestOptions: _,
                transporter: { queryParameters: h.queryParameters, headers: h.headers },
              };
              return h.responsesCache.get(
                O,
                function () {
                  return h.requestsCache.get(O, function () {
                    return h.requestsCache
                      .set(O, S())
                      .then(
                        function (g) {
                          return Promise.all([h.requestsCache.delete(O), g]);
                        },
                        function (g) {
                          return Promise.all([h.requestsCache.delete(O), Promise.reject(g)]);
                        }
                      )
                      .then(function (g) {
                        var P = se(g, 2);
                        return P[0], P[1];
                      });
                  });
                },
                {
                  miss: function (g) {
                    return h.responsesCache.set(O, g);
                  },
                }
              );
            },
            write: function (y, b) {
              return sn(
                h,
                h.hosts.filter(function (_) {
                  return (_.accept & me.Write) != 0;
                }),
                y,
                ln(b, h.timeouts.write)
              );
            },
          };
        return h;
      })(
        I(
          I(
            {
              hosts: [
                { url: ''.concat(e, '-dsn.algolia.net'), accept: me.Read },
                { url: ''.concat(e, '.algolia.net'), accept: me.Write },
              ].concat(
                fa([
                  { url: ''.concat(e, '-1.algolianet.com') },
                  { url: ''.concat(e, '-2.algolianet.com') },
                  { url: ''.concat(e, '-3.algolianet.com') },
                ])
              ),
            },
            t
          ),
          {},
          {
            headers: I(I(I({}, r.headers()), { 'content-type': 'application/x-www-form-urlencoded' }), t.headers),
            queryParameters: I(I({}, r.queryParameters()), t.queryParameters),
          }
        )
      ),
      o = {
        transporter: n,
        appId: e,
        addAlgoliaAgent: function (i, a) {
          n.userAgent.add({ segment: i, version: a });
        },
        clearCache: function () {
          return Promise.all([n.requestsCache.clear(), n.responsesCache.clear()]).then(function () {});
        },
      };
    return Qn(o, t.methods);
  },
  ya = function (t) {
    return function (e, r) {
      return e.method === Qt ? t.transporter.read(e, r) : t.transporter.write(e, r);
    };
  },
  ro = function (t) {
    return function (e) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
        n = { transporter: t.transporter, appId: t.appId, indexName: e };
      return Qn(n, r.methods);
    };
  },
  mn = function (t) {
    return function (e, r) {
      var n = e.map(function (o) {
        return I(I({}, o), {}, { params: eo(o.params || {}) });
      });
      return t.transporter.read({ method: Ot, path: '1/indexes/*/queries', data: { requests: n }, cacheable: !0 }, r);
    };
  },
  pn = function (t) {
    return function (e, r) {
      return Promise.all(
        e.map(function (n) {
          var o = n.params,
            i = o.facetName,
            a = o.facetQuery,
            c = mo(o, la);
          return ro(t)(n.indexName, { methods: { searchForFacetValues: no } }).searchForFacetValues(
            i,
            a,
            I(I({}, r), c)
          );
        })
      );
    };
  },
  ga = function (t) {
    return function (e, r, n) {
      return t.transporter.read(
        {
          method: Ot,
          path: _t('1/answers/%s/prediction', t.indexName),
          data: { query: e, queryLanguages: r },
          cacheable: !0,
        },
        n
      );
    };
  },
  ba = function (t) {
    return function (e, r) {
      return t.transporter.read(
        { method: Ot, path: _t('1/indexes/%s/query', t.indexName), data: { query: e }, cacheable: !0 },
        r
      );
    };
  },
  no = function (t) {
    return function (e, r, n) {
      return t.transporter.read(
        {
          method: Ot,
          path: _t('1/indexes/%s/facets/%s/query', t.indexName, e),
          data: { facetQuery: r },
          cacheable: !0,
        },
        n
      );
    };
  },
  _a = 1,
  Oa = 2,
  Sa = 3;
function oo(t, e, r) {
  var n,
    o = {
      appId: t,
      apiKey: e,
      timeouts: { connect: 1, read: 2, write: 30 },
      requester: {
        send: function (i) {
          return new Promise(function (a) {
            var c = new XMLHttpRequest();
            c.open(i.method, i.url, !0),
              Object.keys(i.headers).forEach(function (m) {
                return c.setRequestHeader(m, i.headers[m]);
              });
            var u,
              s = function (m, p) {
                return setTimeout(function () {
                  c.abort(), a({ status: 0, content: p, isTimedOut: !0 });
                }, 1e3 * m);
              },
              l = s(i.connectTimeout, 'Connection timeout');
            (c.onreadystatechange = function () {
              c.readyState > c.OPENED &&
                u === void 0 &&
                (clearTimeout(l), (u = s(i.responseTimeout, 'Socket timeout')));
            }),
              (c.onerror = function () {
                c.status === 0 &&
                  (clearTimeout(l),
                  clearTimeout(u),
                  a({ content: c.responseText || 'Network request failed', status: c.status, isTimedOut: !1 }));
              }),
              (c.onload = function () {
                clearTimeout(l), clearTimeout(u), a({ content: c.responseText, status: c.status, isTimedOut: !1 });
              }),
              c.send(i.data);
          });
        },
      },
      logger:
        ((n = Sa),
        {
          debug: function (i, a) {
            return _a >= n && console.debug(i, a), Promise.resolve();
          },
          info: function (i, a) {
            return Oa >= n && console.info(i, a), Promise.resolve();
          },
          error: function (i, a) {
            return console.error(i, a), Promise.resolve();
          },
        }),
      responsesCache: Rt(),
      requestsCache: Rt({ serializable: !1 }),
      hostsCache: Ee({ caches: [sa({ key: ''.concat('4.19.1', '-').concat(t) }), Rt()] }),
      userAgent: va('4.19.1').add({ segment: 'Browser', version: 'lite' }),
      authMode: ft.WithinQueryParameters,
    };
  return ha(
    I(
      I(I({}, o), r),
      {},
      {
        methods: {
          search: mn,
          searchForFacetValues: pn,
          multipleQueries: mn,
          multipleSearchForFacetValues: pn,
          customRequest: ya,
          initIndex: function (i) {
            return function (a) {
              return ro(i)(a, { methods: { search: ba, searchForFacetValues: no, findAnswers: ga } });
            };
          },
        },
      }
    )
  );
}
oo.version = '4.19.1';
var wa = ['footer', 'searchBox'];
function Be() {
  return (
    (Be =
      Object.assign ||
      function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = arguments[e];
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
        }
        return t;
      }),
    Be.apply(this, arguments)
  );
}
function vn(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(t, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function qt(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? vn(Object(r), !0).forEach(function (n) {
          ja(t, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : vn(Object(r)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return t;
}
function ja(t, e, r) {
  return (
    e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = r), t
  );
}
function Ea(t, e) {
  return (
    (function (r) {
      if (Array.isArray(r)) return r;
    })(t) ||
    (function (r, n) {
      var o = r == null ? null : (typeof Symbol < 'u' && r[Symbol.iterator]) || r['@@iterator'];
      if (o != null) {
        var i,
          a,
          c = [],
          u = !0,
          s = !1;
        try {
          for (o = o.call(r); !(u = (i = o.next()).done) && (c.push(i.value), !n || c.length !== n); u = !0);
        } catch (l) {
          (s = !0), (a = l);
        } finally {
          try {
            u || o.return == null || o.return();
          } finally {
            if (s) throw a;
          }
        }
        return c;
      }
    })(t, e) ||
    (function (r, n) {
      if (r) {
        if (typeof r == 'string') return dn(r, n);
        var o = Object.prototype.toString.call(r).slice(8, -1);
        if ((o === 'Object' && r.constructor && (o = r.constructor.name), o === 'Map' || o === 'Set'))
          return Array.from(r);
        if (o === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)) return dn(r, n);
      }
    })(t, e) ||
    (function () {
      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    })()
  );
}
function dn(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
  return n;
}
function Pa(t, e) {
  if (t == null) return {};
  var r,
    n,
    o = (function (a, c) {
      if (a == null) return {};
      var u,
        s,
        l = {},
        m = Object.keys(a);
      for (s = 0; s < m.length; s++) (u = m[s]), c.indexOf(u) >= 0 || (l[u] = a[u]);
      return l;
    })(t, e);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    for (n = 0; n < i.length; n++)
      (r = i[n]), e.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r]));
  }
  return o;
}
function Ia(t) {
  var e = t.appId,
    r = t.apiKey,
    n = t.indexName,
    o = t.placeholder,
    i = o === void 0 ? 'Search docs' : o,
    a = t.searchParameters,
    c = t.maxResultsPerGroup,
    u = t.onClose,
    s = u === void 0 ? $i : u,
    l = t.transformItems,
    m = l === void 0 ? un : l,
    p = t.hitComponent,
    v = p === void 0 ? ki : p,
    d = t.resultsFooterComponent,
    h =
      d === void 0
        ? function () {
            return null;
          }
        : d,
    y = t.navigator,
    b = t.initialScrollY,
    _ = b === void 0 ? 0 : b,
    S = t.transformSearchClient,
    O = S === void 0 ? un : S,
    g = t.disableUserPersonalization,
    P = g !== void 0 && g,
    C = t.initialQuery,
    L = C === void 0 ? '' : C,
    x = t.translations,
    k = x === void 0 ? {} : x,
    N = t.getMissingResultsUrl,
    U = t.insights,
    F = U !== void 0 && U,
    M = k.footer,
    St = k.searchBox,
    wt = Pa(k, wa),
    $e = Ea(
      f.useState({
        query: '',
        collections: [],
        completion: null,
        context: {},
        isOpen: !1,
        activeItemId: null,
        status: 'idle',
      }),
      2
    ),
    B = $e[0],
    io = $e[1],
    er = f.useRef(null),
    jt = f.useRef(null),
    tr = f.useRef(null),
    Qe = f.useRef(null),
    he = f.useRef(null),
    Q = f.useRef(10),
    rr = f.useRef(typeof window < 'u' ? window.getSelection().toString().slice(0, 64) : '').current,
    ee = f.useRef(L || rr).current,
    nr = (function (j, D, T) {
      return f.useMemo(
        function () {
          var H = oo(j, D);
          return (
            H.addAlgoliaAgent('docsearch', '3.5.2'),
            /docsearch.js \(.*\)/.test(H.transporter.userAgent.value) === !1 &&
              H.addAlgoliaAgent('docsearch-react', '3.5.2'),
            T(H)
          );
        },
        [j, D, T]
      );
    })(e, r, O),
    oe = f.useRef(cn({ key: '__DOCSEARCH_FAVORITE_SEARCHES__'.concat(n), limit: 10 })).current,
    ye = f.useRef(
      cn({ key: '__DOCSEARCH_RECENT_SEARCHES__'.concat(n), limit: oe.getAll().length === 0 ? 7 : 4 })
    ).current,
    ge = f.useCallback(
      function (j) {
        if (!P) {
          var D = j.type === 'content' ? j.__docsearch_parent : j;
          D &&
            oe.getAll().findIndex(function (T) {
              return T.objectID === D.objectID;
            }) === -1 &&
            ye.add(D);
        }
      },
      [oe, ye, P]
    ),
    ao = f.useCallback(
      function (j) {
        if (B.context.algoliaInsightsPlugin && j.__autocomplete_id) {
          var D = j,
            T = {
              eventName: 'Item Selected',
              index: D.__autocomplete_indexName,
              items: [D],
              positions: [j.__autocomplete_id],
              queryID: D.__autocomplete_queryID,
            };
          B.context.algoliaInsightsPlugin.insights.clickedObjectIDsAfterSearch(T);
        }
      },
      [B.context.algoliaInsightsPlugin]
    ),
    be = f.useMemo(
      function () {
        return Pi({
          id: 'docsearch',
          defaultActiveItemId: 0,
          placeholder: i,
          openOnFocus: !0,
          initialState: { query: ee, context: { searchSuggestions: [] } },
          insights: F,
          navigator: y,
          onStateChange: function (j) {
            io(j.state);
          },
          getSources: function (j) {
            var D = j.query,
              T = j.state,
              H = j.setContext,
              Z = j.setStatus;
            if (!D)
              return P
                ? []
                : [
                    {
                      sourceId: 'recentSearches',
                      onSelect: function (A) {
                        var V = A.item,
                          _e = A.event;
                        ge(V), at(_e) || s();
                      },
                      getItemUrl: function (A) {
                        return A.item.url;
                      },
                      getItems: function () {
                        return ye.getAll();
                      },
                    },
                    {
                      sourceId: 'favoriteSearches',
                      onSelect: function (A) {
                        var V = A.item,
                          _e = A.event;
                        ge(V), at(_e) || s();
                      },
                      getItemUrl: function (A) {
                        return A.item.url;
                      },
                      getItems: function () {
                        return oe.getAll();
                      },
                    },
                  ];
            var Y = !!F;
            return nr
              .search([
                {
                  query: D,
                  indexName: n,
                  params: qt(
                    {
                      attributesToRetrieve: [
                        'hierarchy.lvl0',
                        'hierarchy.lvl1',
                        'hierarchy.lvl2',
                        'hierarchy.lvl3',
                        'hierarchy.lvl4',
                        'hierarchy.lvl5',
                        'hierarchy.lvl6',
                        'content',
                        'type',
                        'url',
                      ],
                      attributesToSnippet: [
                        'hierarchy.lvl1:'.concat(Q.current),
                        'hierarchy.lvl2:'.concat(Q.current),
                        'hierarchy.lvl3:'.concat(Q.current),
                        'hierarchy.lvl4:'.concat(Q.current),
                        'hierarchy.lvl5:'.concat(Q.current),
                        'hierarchy.lvl6:'.concat(Q.current),
                        'content:'.concat(Q.current),
                      ],
                      snippetEllipsisText: '…',
                      highlightPreTag: '<mark>',
                      highlightPostTag: '</mark>',
                      hitsPerPage: 20,
                      clickAnalytics: Y,
                    },
                    a
                  ),
                },
              ])
              .catch(function (A) {
                throw (A.name === 'RetryError' && Z('error'), A);
              })
              .then(function (A) {
                var V = A.results[0],
                  _e = V.hits,
                  lo = V.nbHits,
                  Et = an(
                    _e,
                    function (Pt) {
                      return $n(Pt);
                    },
                    c
                  );
                T.context.searchSuggestions.length < Object.keys(Et).length &&
                  H({ searchSuggestions: Object.keys(Et) }),
                  H({ nbHits: lo });
                var ir = {};
                return (
                  Y &&
                    (ir = {
                      __autocomplete_indexName: n,
                      __autocomplete_queryID: V.queryID,
                      __autocomplete_algoliaCredentials: { appId: e, apiKey: r },
                    }),
                  Object.values(Et).map(function (Pt, so) {
                    return {
                      sourceId: 'hits'.concat(so),
                      onSelect: function (z) {
                        var Oe = z.item,
                          Ze = z.event;
                        ge(Oe), at(Ze) || s();
                      },
                      getItemUrl: function (z) {
                        return z.item.url;
                      },
                      getItems: function () {
                        return Object.values(
                          an(
                            Pt,
                            function (z) {
                              return z.hierarchy.lvl1;
                            },
                            c
                          )
                        )
                          .map(m)
                          .map(function (z) {
                            return z.map(function (Oe) {
                              var Ze = null,
                                ar = z.find(function (ur) {
                                  return ur.type === 'lvl1' && ur.hierarchy.lvl1 === Oe.hierarchy.lvl1;
                                });
                              return (
                                Oe.type !== 'lvl1' && ar && (Ze = ar),
                                qt(qt({}, Oe), {}, { __docsearch_parent: Ze }, ir)
                              );
                            });
                          })
                          .flat();
                      },
                    };
                  })
                );
              });
          },
        });
      },
      [n, a, c, nr, s, ye, oe, ge, ee, i, y, m, P, F, e, r]
    ),
    uo = be.getEnvironmentProps,
    co = be.getRootProps,
    or = be.refresh;
  return (
    (function (j) {
      var D = j.getEnvironmentProps,
        T = j.panelElement,
        H = j.formElement,
        Z = j.inputElement;
      f.useEffect(
        function () {
          if (T && H && Z) {
            var Y = D({ panelElement: T, formElement: H, inputElement: Z }),
              A = Y.onTouchStart,
              V = Y.onTouchMove;
            return (
              window.addEventListener('touchstart', A),
              window.addEventListener('touchmove', V),
              function () {
                window.removeEventListener('touchstart', A), window.removeEventListener('touchmove', V);
              }
            );
          }
        },
        [D, T, H, Z]
      );
    })({ getEnvironmentProps: uo, panelElement: Qe.current, formElement: tr.current, inputElement: he.current }),
    (function (j) {
      var D = j.container;
      f.useEffect(
        function () {
          if (D) {
            var T = D.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), input:not([disabled])'),
              H = T[0],
              Z = T[T.length - 1];
            return (
              D.addEventListener('keydown', Y),
              function () {
                D.removeEventListener('keydown', Y);
              }
            );
          }
          function Y(A) {
            A.key === 'Tab' &&
              (A.shiftKey
                ? document.activeElement === H && (A.preventDefault(), Z.focus())
                : document.activeElement === Z && (A.preventDefault(), H.focus()));
          }
        },
        [D]
      );
    })({ container: er.current }),
    f.useEffect(function () {
      return (
        document.body.classList.add('DocSearch--active'),
        function () {
          var j, D;
          document.body.classList.remove('DocSearch--active'),
            (j = (D = window).scrollTo) === null || j === void 0 || j.call(D, 0, _);
        }
      );
    }, []),
    f.useEffect(function () {
      window.matchMedia('(max-width: 768px)').matches && (Q.current = 5);
    }, []),
    f.useEffect(
      function () {
        Qe.current && (Qe.current.scrollTop = 0);
      },
      [B.query]
    ),
    f.useEffect(
      function () {
        ee.length > 0 && (or(), he.current && he.current.focus());
      },
      [ee, or]
    ),
    f.useEffect(function () {
      function j() {
        if (jt.current) {
          var D = 0.01 * window.innerHeight;
          jt.current.style.setProperty('--docsearch-vh', ''.concat(D, 'px'));
        }
      }
      return (
        j(),
        window.addEventListener('resize', j),
        function () {
          window.removeEventListener('resize', j);
        }
      );
    }, []),
    f.createElement(
      'div',
      Be({ ref: er }, co({ 'aria-expanded': !0 }), {
        className: [
          'DocSearch',
          'DocSearch-Container',
          B.status === 'stalled' && 'DocSearch-Container--Stalled',
          B.status === 'error' && 'DocSearch-Container--Errored',
        ]
          .filter(Boolean)
          .join(' '),
        role: 'button',
        tabIndex: 0,
        onMouseDown: function (j) {
          j.target === j.currentTarget && s();
        },
      }),
      f.createElement(
        'div',
        { className: 'DocSearch-Modal', ref: jt },
        f.createElement(
          'header',
          { className: 'DocSearch-SearchBar', ref: tr },
          f.createElement(
            ia,
            Be({}, be, {
              state: B,
              autoFocus: ee.length === 0,
              inputRef: he,
              isFromSelection: !!ee && ee === rr,
              translations: St,
              onClose: s,
            })
          )
        ),
        f.createElement(
          'div',
          { className: 'DocSearch-Dropdown', ref: Qe },
          f.createElement(
            ra,
            Be({}, be, {
              indexName: n,
              state: B,
              hitComponent: v,
              resultsFooterComponent: h,
              disableUserPersonalization: P,
              recentSearches: ye,
              favoriteSearches: oe,
              inputRef: he,
              translations: wt,
              getMissingResultsUrl: N,
              onItemClick: function (j, D) {
                ao(j), ge(j), at(D) || s();
              },
            })
          )
        ),
        f.createElement('footer', { className: 'DocSearch-Footer' }, f.createElement(Di, { translations: M }))
      )
    )
  );
}
function Zt() {
  return (
    (Zt =
      Object.assign ||
      function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = arguments[e];
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
        }
        return t;
      }),
    Zt.apply(this, arguments)
  );
}
function hn(t, e) {
  return (
    (function (r) {
      if (Array.isArray(r)) return r;
    })(t) ||
    (function (r, n) {
      var o = r == null ? null : (typeof Symbol < 'u' && r[Symbol.iterator]) || r['@@iterator'];
      if (o != null) {
        var i,
          a,
          c = [],
          u = !0,
          s = !1;
        try {
          for (o = o.call(r); !(u = (i = o.next()).done) && (c.push(i.value), !n || c.length !== n); u = !0);
        } catch (l) {
          (s = !0), (a = l);
        } finally {
          try {
            u || o.return == null || o.return();
          } finally {
            if (s) throw a;
          }
        }
        return c;
      }
    })(t, e) ||
    (function (r, n) {
      if (r) {
        if (typeof r == 'string') return yn(r, n);
        var o = Object.prototype.toString.call(r).slice(8, -1);
        if ((o === 'Object' && r.constructor && (o = r.constructor.name), o === 'Map' || o === 'Set'))
          return Array.from(r);
        if (o === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)) return yn(r, n);
      }
    })(t, e) ||
    (function () {
      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    })()
  );
}
function yn(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
  return n;
}
function Da(t) {
  var e,
    r,
    n = f.useRef(null),
    o = hn(f.useState(!1), 2),
    i = o[0],
    a = o[1],
    c = hn(f.useState(t?.initialQuery || void 0), 2),
    u = c[0],
    s = c[1],
    l = f.useCallback(
      function () {
        a(!0);
      },
      [a]
    ),
    m = f.useCallback(
      function () {
        a(!1);
      },
      [a]
    );
  return (
    (function (p) {
      var v = p.isOpen,
        d = p.onOpen,
        h = p.onClose,
        y = p.onInput,
        b = p.searchButtonRef;
      f.useEffect(
        function () {
          function _(S) {
            var O;
            ((S.keyCode === 27 && v) ||
              (((O = S.key) === null || O === void 0 ? void 0 : O.toLowerCase()) === 'k' && (S.metaKey || S.ctrlKey)) ||
              (!(function (g) {
                var P = g.target,
                  C = P.tagName;
                return P.isContentEditable || C === 'INPUT' || C === 'SELECT' || C === 'TEXTAREA';
              })(S) &&
                S.key === '/' &&
                !v)) &&
              (S.preventDefault(),
              v
                ? h()
                : document.body.classList.contains('DocSearch--active') ||
                  document.body.classList.contains('DocSearch--active') ||
                  d()),
              b &&
                b.current === document.activeElement &&
                y &&
                /[a-zA-Z0-9]/.test(String.fromCharCode(S.keyCode)) &&
                y(S);
          }
          return (
            window.addEventListener('keydown', _),
            function () {
              window.removeEventListener('keydown', _);
            }
          );
        },
        [v, d, h, y, b]
      );
    })({
      isOpen: i,
      onOpen: l,
      onClose: m,
      onInput: f.useCallback(
        function (p) {
          a(!0), s(p.key);
        },
        [a, s]
      ),
      searchButtonRef: n,
    }),
    f.createElement(
      f.Fragment,
      null,
      f.createElement(To, {
        ref: n,
        translations: t == null || (e = t.translations) === null || e === void 0 ? void 0 : e.button,
        onClick: l,
      }),
      i &&
        qn(
          f.createElement(
            Ia,
            Zt({}, t, {
              initialScrollY: window.scrollY,
              initialQuery: u,
              translations: t == null || (r = t.translations) === null || r === void 0 ? void 0 : r.modal,
              onClose: m,
            })
          ),
          document.body
        )
    )
  );
}
function ka(t) {
  Mn(
    f.createElement(
      Da,
      Lt({}, t, {
        transformSearchClient: function (e) {
          return e.addAlgoliaAgent('docsearch.js', '3.5.2'), t.transformSearchClient ? t.transformSearchClient(e) : e;
        },
      })
    ),
    (function (e) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : window;
      return typeof e == 'string' ? r.document.querySelector(e) : e;
    })(t.container, t.environment)
  );
}
const ut = JSON.parse(document.querySelector('sl-doc-search').dataset.translations);
ka({
  container: 'sl-doc-search',
  appId: '7AFBU8EPJU',
  indexName: 'astro',
  apiKey: '4440670147c44d744fd8da35ff652518',
  searchParameters: {
    facetFilters: [[`lang:${location.pathname.split('/')[1]}`]],
    attributesToHighlight: ['hierarchy.lvl0'],
  },
  insights: !0,
  getMissingResultsUrl: ({ query: t }) =>
    `https://github.com/withastro/docs/issues/new?title=Missing+results+for+query+%22${encodeURIComponent(t)}%22`,
  transformItems: (t) =>
    t.map((e) => {
      const r = new URL(e.url);
      return r.hash === '#_top' && (r.hash = ''), { ...e, url: r.href.replace(r.origin, '') };
    }),
  placeholder: ut.placeholder,
  translations: { ...ut, button: { buttonText: ut.button, buttonAriaLabel: ut.button } },
});
