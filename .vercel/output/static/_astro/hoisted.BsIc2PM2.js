import { g as h, S as V, N as k } from './navigation.CYXULzQ6.js';
import './hoisted.2daoxv0f.js';
function G(e) {
  let { swiper: a, extendParams: t, on: n, emit: i, params: r } = e;
  (a.autoplay = { running: !1, paused: !1, timeLeft: 0 }),
    t({
      autoplay: {
        enabled: !1,
        delay: 3e3,
        waitForTransition: !0,
        disableOnInteraction: !1,
        stopOnLastSlide: !1,
        reverseDirection: !1,
        pauseOnMouseEnter: !1,
      },
    });
  let o,
    s,
    l,
    p,
    u,
    d,
    y,
    m,
    c,
    v,
    g = r && r.autoplay ? r.autoplay.delay : 3e3,
    E = r && r.autoplay ? r.autoplay.delay : 3e3,
    f = new Date().getTime();
  function w(e) {
    !a ||
      a.destroyed ||
      !a.wrapperEl ||
      (e.target === a.wrapperEl &&
        (a.wrapperEl.removeEventListener('transitionend', w), !(v || (e.detail && e.detail.bySwiperTouchMove)) && M()));
  }
  const T = () => {
      if (a.destroyed || !a.autoplay.running) return;
      a.autoplay.paused ? (p = !0) : p && ((E = l), (p = !1));
      const e = a.autoplay.paused ? l : f + E - new Date().getTime();
      (a.autoplay.timeLeft = e),
        i('autoplayTimeLeft', e, e / g),
        (s = requestAnimationFrame(() => {
          T();
        }));
    },
    b = (e) => {
      if (a.destroyed || !a.autoplay.running) return;
      cancelAnimationFrame(s), T();
      let t = typeof e > 'u' ? a.params.autoplay.delay : e;
      (g = a.params.autoplay.delay), (E = a.params.autoplay.delay);
      const n = (() => {
        let e;
        return (
          (e =
            a.virtual && a.params.virtual.enabled
              ? a.slides.filter((e) => e.classList.contains('swiper-slide-active'))[0]
              : a.slides[a.activeIndex]),
          e ? parseInt(e.getAttribute('data-swiper-autoplay'), 10) : void 0
        );
      })();
      !Number.isNaN(n) && n > 0 && typeof e > 'u' && ((t = n), (g = n), (E = n)), (l = t);
      const r = a.params.speed,
        p = () => {
          !a ||
            a.destroyed ||
            (a.params.autoplay.reverseDirection
              ? !a.isBeginning || a.params.loop || a.params.rewind
                ? (a.slidePrev(r, !0, !0), i('autoplay'))
                : a.params.autoplay.stopOnLastSlide || (a.slideTo(a.slides.length - 1, r, !0, !0), i('autoplay'))
              : !a.isEnd || a.params.loop || a.params.rewind
                ? (a.slideNext(r, !0, !0), i('autoplay'))
                : a.params.autoplay.stopOnLastSlide || (a.slideTo(0, r, !0, !0), i('autoplay')),
            a.params.cssMode &&
              ((f = new Date().getTime()),
              requestAnimationFrame(() => {
                b();
              })));
        };
      return (
        t > 0
          ? (clearTimeout(o),
            (o = setTimeout(() => {
              p();
            }, t)))
          : requestAnimationFrame(() => {
              p();
            }),
        t
      );
    },
    L = () => {
      (f = new Date().getTime()), (a.autoplay.running = !0), b(), i('autoplayStart');
    },
    O = () => {
      (a.autoplay.running = !1), clearTimeout(o), cancelAnimationFrame(s), i('autoplayStop');
    },
    S = (e, t) => {
      if (a.destroyed || !a.autoplay.running) return;
      clearTimeout(o), e || (c = !0);
      const n = () => {
        i('autoplayPause'),
          a.params.autoplay.waitForTransition ? a.wrapperEl.addEventListener('transitionend', w) : M();
      };
      if (((a.autoplay.paused = !0), t)) return m && (l = a.params.autoplay.delay), (m = !1), void n();
      (l = (l || a.params.autoplay.delay) - (new Date().getTime() - f)),
        (!(a.isEnd && l < 0) || a.params.loop) && (l < 0 && (l = 0), n());
    },
    M = () => {
      (a.isEnd && l < 0 && !a.params.loop) ||
        a.destroyed ||
        !a.autoplay.running ||
        ((f = new Date().getTime()), c ? ((c = !1), b(l)) : b(), (a.autoplay.paused = !1), i('autoplayResume'));
    },
    D = () => {
      if (a.destroyed || !a.autoplay.running) return;
      const e = h();
      'hidden' === e.visibilityState && ((c = !0), S(!0)), 'visible' === e.visibilityState && M();
    },
    F = (e) => {
      'mouse' === e.pointerType && ((c = !0), (v = !0), !a.animating && !a.autoplay.paused && S(!0));
    },
    I = (e) => {
      'mouse' === e.pointerType && ((v = !1), a.autoplay.paused && M());
    };
  n('init', () => {
    a.params.autoplay.enabled &&
      (a.params.autoplay.pauseOnMouseEnter &&
        (a.el.addEventListener('pointerenter', F), a.el.addEventListener('pointerleave', I)),
      h().addEventListener('visibilitychange', D),
      L());
  }),
    n('destroy', () => {
      a.el &&
        'string' != typeof a.el &&
        (a.el.removeEventListener('pointerenter', F), a.el.removeEventListener('pointerleave', I)),
        h().removeEventListener('visibilitychange', D),
        a.autoplay.running && O();
    }),
    n('_freeModeStaticRelease', () => {
      (d || c) && M();
    }),
    n('_freeModeNoMomentumRelease', () => {
      a.params.autoplay.disableOnInteraction ? O() : S(!0, !0);
    }),
    n('beforeTransitionStart', (e, t, n) => {
      a.destroyed || !a.autoplay.running || (n || !a.params.autoplay.disableOnInteraction ? S(!0, !0) : O());
    }),
    n('sliderFirstMove', () => {
      if (!a.destroyed && a.autoplay.running) {
        if (a.params.autoplay.disableOnInteraction) return void O();
        (u = !0),
          (d = !1),
          (c = !1),
          (y = setTimeout(() => {
            (c = !0), (d = !0), S(!0);
          }, 200));
      }
    }),
    n('touchEnd', () => {
      if (!a.destroyed && a.autoplay.running && u) {
        if ((clearTimeout(y), clearTimeout(o), a.params.autoplay.disableOnInteraction)) return (d = !1), void (u = !1);
        d && a.params.cssMode && M(), (d = !1), (u = !1);
      }
    }),
    n('slideChange', () => {
      a.destroyed || !a.autoplay.running || (m = !0);
    }),
    Object.assign(a.autoplay, { start: L, stop: O, pause: S, resume: M });
}
let E = null;
function H() {
  E && (E.destroy(), (E = null)),
    (E = new V('.swiper', {
      modules: [k, G],
      spaceBetween: 40,
      centeredSlides: !0,
      autoplay: { delay: 2e3, disableOnInteraction: !1 },
      navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
    }));
}
document.addEventListener('DOMContentLoaded', () => {
  H();
});
