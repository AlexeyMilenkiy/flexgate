!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? t(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], t)
    : t(
        ((e =
          "undefined" != typeof globalThis ? globalThis : e || self).seamless =
          {})
      );
})(this, function (e) {
  "use strict";
  /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */ var t =
    function () {
      return (
        (t =
          Object.assign ||
          function (e) {
            for (var t, n = 1, o = arguments.length; n < o; n++)
              for (var r in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e;
          }),
        t.apply(this, arguments)
      );
    };
  function n(e, t) {
    var n = "function" == typeof Symbol && e[Symbol.iterator];
    if (!n) return e;
    var o,
      r,
      l = n.call(e),
      i = [];
    try {
      for (; (void 0 === t || t-- > 0) && !(o = l.next()).done; )
        i.push(o.value);
    } catch (e) {
      r = { error: e };
    } finally {
      try {
        o && !o.done && (n = l.return) && n.call(l);
      } finally {
        if (r) throw r.error;
      }
    }
    return i;
  }
  var o = function (e) {
    return void 0 === e || "auto" === e || "instant" === e || "smooth" === e;
  };
  function r(e, t) {
    (this.scrollLeft = e), (this.scrollTop = t);
  }
  var l = function (e, t, n) {
      return (
        void 0 === n && (n = "cannot convert to dictionary."),
        "Failed to execute '" + e + "' on '" + t + "': " + n
      );
    },
    i = function (e, t, n) {
      return l(
        e,
        t,
        "The provided value '" +
          n +
          "' is not a valid enum value of type ScrollBehavior."
      );
    },
    c = function (e, t, n) {
      var o,
        r = "__SEAMLESS.BACKUP$" + t;
      return (
        e[t] &&
          !(null === (o = e[t]) || void 0 === o ? void 0 : o.__isPolyfill) &&
          (e[r] || (e[r] = e[t])),
        e[r] || n
      );
    },
    u = function (e) {
      var t = typeof e;
      return null !== e && ("object" === t || "function" === t);
    },
    a = function () {
      return "scrollBehavior" in window.document.documentElement.style;
    },
    f = function (e) {
      Object.defineProperty(e, "__isPolyfill", { value: !0 });
    },
    s = function (e, t) {
      f(t),
        [
          HTMLElement.prototype,
          SVGElement.prototype,
          Element.prototype,
        ].forEach(function (n) {
          c(n, e), (n[e] = t);
        });
    },
    d = function (e) {
      return (
        e.ownerDocument.scrollingElement || e.ownerDocument.documentElement
      );
    },
    v = function (e) {
      return 0.5 * (1 - Math.cos(Math.PI * e));
    },
    w = function () {
      var e, t, n;
      return null !==
        (n =
          null ===
            (t =
              null === (e = window.performance) || void 0 === e
                ? void 0
                : e.now) || void 0 === t
            ? void 0
            : t.call(e)) && void 0 !== n
        ? n
        : window.Date.now();
    },
    m = function (e) {
      var t = (w() - e.timeStamp) / (e.duration || 500);
      if (t > 1) return e.method(e.targetX, e.targetY), void e.callback();
      var n = (e.timingFunc || v)(t),
        o = e.startX + (e.targetX - e.startX) * n,
        r = e.startY + (e.targetY - e.startY) * n;
      e.method(o, r),
        (e.rafId = window.requestAnimationFrame(function () {
          m(e);
        }));
    },
    h = function (e) {
      return isFinite(e) ? Number(e) : 0;
    },
    p = function (e) {
      return function (a, f, s) {
        var v,
          p = n(
            (v = a).window === v
              ? [d(a.document.documentElement), "Window"]
              : [a, "Element"],
            2
          ),
          y = p[0],
          g = p[1],
          b = null != f ? f : {};
        if (!u(b)) throw new TypeError(l(e, g));
        if (!o(b.behavior)) throw new TypeError(i(e, g, b.behavior));
        "scrollBy" === e &&
          ((b.left = h(b.left) + y.scrollLeft),
          (b.top = h(b.top) + y.scrollTop)),
          (function (e, n, o) {
            var l, i;
            if (
              (function (e) {
                var t;
                return null !== (t = e.isConnected) && void 0 !== t
                  ? t
                  : !(
                      e.ownerDocument &&
                      1 & e.ownerDocument.compareDocumentPosition(e)
                    );
              })(e)
            ) {
              var u = e.scrollLeft,
                a = e.scrollTop,
                f = h(null !== (l = n.left) && void 0 !== l ? l : u),
                s = h(null !== (i = n.top) && void 0 !== i ? i : a);
              if (f !== u || s !== a) {
                var d = c(HTMLElement.prototype, "scroll", r),
                  v = c(Object.getPrototypeOf(e), "scroll", d).bind(e);
                if ("smooth" === n.behavior) {
                  var p = function () {
                      window.removeEventListener("wheel", g),
                        window.removeEventListener("touchmove", g);
                    },
                    y = t(t({}, o), {
                      timeStamp: w(),
                      startX: u,
                      startY: a,
                      targetX: f,
                      targetY: s,
                      rafId: 0,
                      method: v,
                      callback: p,
                    }),
                    g = function () {
                      window.cancelAnimationFrame(y.rafId), p();
                    };
                  window.addEventListener("wheel", g, {
                    passive: !0,
                    once: !0,
                  }),
                    window.addEventListener("touchmove", g, {
                      passive: !0,
                      once: !0,
                    }),
                    m(y);
                } else v(f, s);
              }
            }
          })(y, b, s);
      };
    },
    y = p("scroll"),
    g = p("scrollTo"),
    b = p("scrollBy"),
    T = y,
    E = g,
    S = b,
    P = y,
    L = g,
    B = b,
    V = function (e) {
      switch (e) {
        case "horizontal-tb":
        case "lr":
        case "lr-tb":
        case "rl":
        case "rl-tb":
          return 0;
        case "vertical-rl":
        case "tb":
        case "tb-rl":
          return 1;
        case "vertical-lr":
        case "tb-lr":
          return 2;
        case "sideways-rl":
          return 3;
        case "sideways-lr":
          return 4;
      }
      return 0;
    },
    M = function (e, t, o, r) {
      var l,
        i = 0;
      switch ((t || (i ^= 2), e)) {
        case 0:
          (i = (i >> 1) | ((1 & i) << 1)),
            (o = (l = n([r, o], 2))[0]),
            (r = l[1]);
          break;
        case 1:
        case 3:
          i ^= 1;
          break;
        case 4:
          i ^= 2;
      }
      return [i, o, r];
    },
    D = function (e) {
      return (
        1 == (1 & M(V(e.writingMode), "rtl" !== e.direction, void 0, void 0)[0])
      );
    },
    I = function (e, t, n, o, r, l, i) {
      return 0 !== e
        ? e
        : (r < t && l > n) || (r > t && l < n)
        ? null
        : (r <= t && i <= o) || (l >= n && i >= o)
        ? 2
        : (l > n && i < o) || (r < t && i > o)
        ? 3
        : null;
    },
    W = function (e) {
      return "visible" !== e && "clip" !== e;
    },
    H = function (e, t) {
      return (
        (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) &&
        (W(t.overflowY) || W(t.overflowX) || e === d(e))
      );
    },
    k = function (e) {
      var t = e.parentNode,
        n = e.parentElement;
      if (null === n && null !== t) {
        if (11 === t.nodeType) return t.host;
        if (9 === t.nodeType)
          return (function (e) {
            var t;
            try {
              return (
                (null === (t = e.ownerDocument.defaultView) || void 0 === t
                  ? void 0
                  : t.frameElement) || null
              );
            } catch (e) {
              return null;
            }
          })(e);
      }
      return n;
    },
    x = function (e, t, n) {
      return e < t ? t : e > n ? n : e;
    },
    _ = function (e, t, n) {
      switch (e) {
        case 1:
          return (t + n) / 2;
        case 3:
          return n;
        case 2:
        case 0:
          return t;
      }
    },
    j = function (e, t) {
      var o,
        r,
        l,
        i =
          null === (o = e.ownerDocument.defaultView) || void 0 === o
            ? void 0
            : o.visualViewport,
        c = n(
          e === d(e)
            ? [
                0,
                0,
                null !== (r = null == i ? void 0 : i.width) && void 0 !== r
                  ? r
                  : e.clientWidth,
                null !== (l = null == i ? void 0 : i.height) && void 0 !== l
                  ? l
                  : e.clientHeight,
              ]
            : [t.left, t.top, e.clientWidth, e.clientHeight],
          4
        ),
        u = c[0],
        a = c[1],
        f = c[2],
        s = c[3],
        v = u + e.clientLeft,
        w = a + e.clientTop;
      return [w, v + f, w + s, v];
    },
    C = function (e, t) {
      var o = [],
        r = e.ownerDocument,
        l = r.defaultView;
      if (!l) return o;
      for (
        var i = window.getComputedStyle(e),
          c = "rtl" !== i.direction,
          u = n(
            (function (e, t, o) {
              var r = n(M(t, o, e.block || "start", e.inline || "nearest"), 3),
                l = r[0];
              return [r[1], r[2]].map(function (e, t) {
                switch (e) {
                  case "center":
                    return 1;
                  case "nearest":
                    return 0;
                  default:
                    return ("start" === e) == !((l >> t) & 1) ? 2 : 3;
                }
              });
            })(
              t,
              V(
                i.writingMode ||
                  i.getPropertyValue("-webkit-writing-mode") ||
                  i.getPropertyValue("-ms-writing-mode")
              ),
              c
            ),
            2
          ),
          a = u[0],
          f = u[1],
          s = n(
            (function (e, t, n) {
              var o,
                r = t.top,
                l = t.right,
                i = t.bottom,
                c = t.left,
                u =
                  ((o = e.ownerDocument),
                  ["scroll-margin", "scroll-snap-margin"].filter(function (e) {
                    return (e in o.documentElement.style);
                  })[0]);
              if (!u) return [r, l, i, c];
              var a = function (e) {
                var t = n.getPropertyValue(u + "-" + e);
                return parseInt(t, 10) || 0;
              };
              return [
                r - a("top"),
                l + a("right"),
                i + a("bottom"),
                c - a("left"),
              ];
            })(e, e.getBoundingClientRect(), i),
            4
          ),
          d = s[0],
          v = s[1],
          w = s[2],
          m = s[3],
          h = k(e);
        null !== h;
        h = k(h)
      ) {
        if (r !== h.ownerDocument) {
          if (!(l = (r = h.ownerDocument).defaultView)) break;
          var p = h.getBoundingClientRect(),
            y = p.left,
            g = p.top;
          (d += g), (v += y), (w += g), (m += y);
        }
        var b = l.getComputedStyle(h);
        if ("fixed" === b.position) break;
        if (H(h, b)) {
          var T = h.getBoundingClientRect(),
            E = n(j(h, T), 4),
            S = E[0],
            P = E[1],
            L = E[2],
            B = E[3],
            W = I(a, B, P, h.clientWidth, m, v, v - m),
            C = I(f, S, L, h.clientHeight, d, w, w - d),
            O = null === W ? 0 : _(W, m, v) - _(W, B, P),
            X = null === C ? 0 : _(C, d, w) - _(C, S, L),
            Y = D(b)
              ? x(
                  O,
                  -h.scrollWidth + h.clientWidth - h.scrollLeft,
                  -h.scrollLeft
                )
              : x(
                  O,
                  -h.scrollLeft,
                  h.scrollWidth - h.clientWidth - h.scrollLeft
                ),
            F = x(
              X,
              -h.scrollTop,
              h.scrollHeight - h.clientHeight - h.scrollTop
            );
          o.push([
            h,
            {
              left: h.scrollLeft + Y,
              top: h.scrollTop + F,
              behavior: t.behavior,
            },
          ]),
            (d = Math.max(d - F, S)),
            (v = Math.min(v - Y, P)),
            (w = Math.min(w - F, L)),
            (m = Math.max(m - Y, B));
        }
      }
      return o;
    },
    O = function (e, t, r) {
      var l = t || {};
      if (!o(l.behavior))
        throw new TypeError(i("scrollIntoView", "Element", l.behavior));
      C(e, l).forEach(function (e) {
        var t = n(e, 2),
          o = t[0],
          l = t[1];
        T(o, l, r);
      });
    },
    X = O,
    Y = function (e, t) {
      return function (n) {
        if (!a()) {
          var o = { scroll: y, scrollTo: g, scrollBy: b }[e];
          t(e, function () {
            var e = arguments;
            if (1 !== arguments.length) {
              var t = e[0],
                r = e[1];
              o(this, { left: t, top: r });
            } else o(this, e[0], n);
          });
        }
      };
    },
    F = Y("scroll", s),
    A = Y("scrollTo", s),
    R = Y("scrollBy", s),
    N = function (e, t) {
      f(t), c(window, e), (window[e] = t);
    },
    q = Y("scroll", N),
    z = Y("scrollTo", N),
    G = Y("scrollBy", N);
  function K(e) {
    X(this, { block: null == e || e ? "start" : "end", inline: "nearest" });
  }
  var U = function (e) {
    if (!a()) {
      var t = c(window.HTMLElement.prototype, "scrollIntoView", K);
      s("scrollIntoView", function () {
        var n = arguments,
          o = n[0];
        1 === n.length && u(o) ? X(this, o, e) : t.apply(this, n);
      });
    }
  };
  (e.elementScroll = T),
    (e.elementScrollBy = S),
    (e.elementScrollByPolyfill = R),
    (e.elementScrollIntoView = X),
    (e.elementScrollIntoViewPolyfill = U),
    (e.elementScrollPolyfill = F),
    (e.elementScrollTo = E),
    (e.elementScrollToPolyfill = A),
    (e.modifyWindow = N),
    (e.polyfill = function (e) {
      a() || (F(e), A(e), R(e), U(e), q(e), z(e), G(e));
    }),
    (e.scroll = y),
    (e.scrollBy = b),
    (e.scrollIntoView = O),
    (e.scrollTo = g),
    (e.windowScroll = P),
    (e.windowScrollBy = B),
    (e.windowScrollByPolyfill = G),
    (e.windowScrollPolyfill = q),
    (e.windowScrollTo = L),
    (e.windowScrollToPolyfill = z),
    Object.defineProperty(e, "__esModule", { value: !0 });
});
//# sourceMappingURL=bundle.min.js.map