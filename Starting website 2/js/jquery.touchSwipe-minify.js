var e;
(e = function (e) {
  function t(t, D) {
    function P(t) {
      if (
        !(
          !0 === me.data(M + "_intouch") ||
          0 < e(t.target).closest(D.excludedElements, me).length
        )
      ) {
        var o = t.originalEvent || t;
        if (
          !o.pointerType ||
          "mouse" != o.pointerType ||
          0 != D.fallbackToMouseEvents
        ) {
          var a,
            u = o.touches,
            s = u ? u[0] : o;
          return (
            (xe = b),
            u
              ? (Se = u.length)
              : !1 !== D.preventDefaultEvents && t.preventDefault(),
            (ye = fe = de = null),
            (ve = 1),
            (be = Te = we = ge = he = 0),
            ((t = {})[n] = te(n)),
            (t[r] = te(r)),
            (t[i] = te(i)),
            (t[l] = te(l)),
            (Ee = t),
            Z(),
            K(0, s),
            !u || Se === D.fingers || D.fingers === T || C()
              ? ((Me = le()),
                2 == Se &&
                  (K(1, u[1]), (we = Te = re(Oe[0].start, Oe[1].start))),
                (D.swipeStatus || D.pinchStatus) && (a = j(o, xe)))
              : (a = !1),
            !1 === a
              ? (j(o, (xe = m)), a)
              : (D.hold &&
                  (Ae = setTimeout(
                    e.proxy(function () {
                      me.trigger("hold", [o.target]),
                        D.hold && (a = D.hold.call(me, o, o.target));
                    }, this),
                    D.longTapThreshold
                  )),
                J(!0),
                null)
          );
        }
      }
    }
    function L(t) {
      var c,
        p,
        h,
        d,
        f = t.originalEvent || t;
      xe === E ||
        xe === m ||
        B() ||
        ((c = $((p = f.touches) ? p[0] : f)),
        (De = le()),
        p && (Se = p.length),
        D.hold && clearTimeout(Ae),
        (xe = y),
        2 == Se &&
          (0 == we
            ? (K(1, p[1]), (we = Te = re(Oe[0].start, Oe[1].start)))
            : ($(p[1]),
              (Te = re(Oe[0].end, Oe[1].end)),
              Oe[0].end,
              Oe[1].end,
              (ye = ve < 1 ? a : o)),
          (ve = ((Te / we) * 1).toFixed(2)),
          (be = Math.abs(we - Te))),
        Se === D.fingers || D.fingers === T || !p || C()
          ? ((de = ie(c.start, c.end)),
            (function (e, t) {
              if (!1 !== D.preventDefaultEvents)
                if (D.allowPageScroll === u) e.preventDefault();
                else {
                  var o = D.allowPageScroll === s;
                  switch (t) {
                    case n:
                      ((D.swipeLeft && o) || (!o && D.allowPageScroll != g)) &&
                        e.preventDefault();
                      break;
                    case r:
                      ((D.swipeRight && o) || (!o && D.allowPageScroll != g)) &&
                        e.preventDefault();
                      break;
                    case i:
                      ((D.swipeUp && o) || (!o && D.allowPageScroll != w)) &&
                        e.preventDefault();
                      break;
                    case l:
                      ((D.swipeDown && o) || (!o && D.allowPageScroll != w)) &&
                        e.preventDefault();
                  }
                }
            })(t, (fe = ie(c.last, c.end))),
            (h = c.start),
            (d = c.end),
            (he = Math.round(
              Math.sqrt(Math.pow(d.x - h.x, 2) + Math.pow(d.y - h.y, 2))
            )),
            (ge = ne()),
            (p = he),
            (t = de) != u && ((p = Math.max(p, ee(t))), (Ee[t].distance = p)),
            (d = j(f, xe)),
            (D.triggerOnTouchEnd && !D.triggerOnTouchLeave) ||
              ((h = !0),
              D.triggerOnTouchLeave &&
                ((t = {
                  left: (p = (t = e((t = this))).offset()).left,
                  right: p.left + t.outerWidth(),
                  top: p.top,
                  bottom: p.top + t.outerHeight(),
                }),
                (h =
                  (c = c.end).x > t.left &&
                  c.x < t.right &&
                  c.y > t.top &&
                  c.y < t.bottom)),
              !D.triggerOnTouchEnd && h
                ? (xe = U(y))
                : D.triggerOnTouchLeave && !h && (xe = U(E)),
              (xe != m && xe != E) || j(f, xe)))
          : j(f, (xe = m)),
        !1 === d && j(f, (xe = m)));
    }
    function R(e) {
      var t,
        n = e.originalEvent || e,
        r = n.touches;
      if (r) {
        if (r.length && !B())
          return (t = n), (Pe = le()), (Le = t.touches.length + 1), !0;
        if (r.length && B()) return !0;
      }
      return (
        B() && (Se = Le),
        (De = le()),
        (ge = ne()),
        _() || !H()
          ? j(n, (xe = m))
          : D.triggerOnTouchEnd || (!1 === D.triggerOnTouchEnd && xe === y)
          ? (!1 !== D.preventDefaultEvents &&
              !1 !== e.cancelable &&
              e.preventDefault(),
            j(n, (xe = E)))
          : !D.triggerOnTouchEnd && W()
          ? N(n, (xe = E), h)
          : xe === y && j(n, (xe = m)),
        J(!1),
        null
      );
    }
    function k() {
      (Te = we = Me = De = Se = 0), Z(), J(!(ve = 1));
    }
    function A(e) {
      (e = e.originalEvent || e), D.triggerOnTouchLeave && j(e, (xe = U(E)));
    }
    function I() {
      me.unbind(ae, P),
        me.unbind(pe, k),
        me.unbind(ue, L),
        me.unbind(se, R),
        ce && me.unbind(ce, A),
        J(!1);
    }
    function U(e) {
      var t = e,
        n = q(),
        r = H(),
        i = _();
      return (
        !n || i
          ? (t = m)
          : !r || e != y || (D.triggerOnTouchEnd && !D.triggerOnTouchLeave)
          ? !r && e == E && D.triggerOnTouchLeave && (t = m)
          : (t = E),
        t
      );
    }
    function j(e, t) {
      var n,
        r = e.touches;
      return (
        ((F() && X()) || X()) && (n = N(e, t, c)),
        ((Q() && C()) || C()) && !1 !== n && (n = N(e, t, p)),
        G() && z() && !1 !== n
          ? (n = N(e, t, d))
          : ge > D.longTapThreshold && he < v && D.longTap && !1 !== n
          ? (n = N(e, t, f))
          : (1 !== Se && x) ||
            !(isNaN(he) || he < D.threshold) ||
            !W() ||
            !1 === n ||
            (n = N(e, t, h)),
        t === m && k(),
        t === E && ((r && r.length) || k()),
        n
      );
    }
    function N(t, u, s) {
      var g;
      if (s == c) {
        if (
          (me.trigger("swipeStatus", [
            u,
            de || null,
            he || 0,
            ge || 0,
            Se,
            Oe,
            fe,
          ]),
          D.swipeStatus &&
            !1 ===
              (g = D.swipeStatus.call(
                me,
                t,
                u,
                de || null,
                he || 0,
                ge || 0,
                Se,
                Oe,
                fe
              )))
        )
          return !1;
        if (u == E && F()) {
          if (
            (clearTimeout(ke),
            clearTimeout(Ae),
            me.trigger("swipe", [de, he, ge, Se, Oe, fe]),
            D.swipe && !1 === (g = D.swipe.call(me, t, de, he, ge, Se, Oe, fe)))
          )
            return !1;
          switch (de) {
            case n:
              me.trigger("swipeLeft", [de, he, ge, Se, Oe, fe]),
                D.swipeLeft &&
                  (g = D.swipeLeft.call(me, t, de, he, ge, Se, Oe, fe));
              break;
            case r:
              me.trigger("swipeRight", [de, he, ge, Se, Oe, fe]),
                D.swipeRight &&
                  (g = D.swipeRight.call(me, t, de, he, ge, Se, Oe, fe));
              break;
            case i:
              me.trigger("swipeUp", [de, he, ge, Se, Oe, fe]),
                D.swipeUp &&
                  (g = D.swipeUp.call(me, t, de, he, ge, Se, Oe, fe));
              break;
            case l:
              me.trigger("swipeDown", [de, he, ge, Se, Oe, fe]),
                D.swipeDown &&
                  (g = D.swipeDown.call(me, t, de, he, ge, Se, Oe, fe));
          }
        }
      }
      if (s == p) {
        if (
          (me.trigger("pinchStatus", [
            u,
            ye || null,
            be || 0,
            ge || 0,
            Se,
            ve,
            Oe,
          ]),
          D.pinchStatus &&
            !1 ===
              (g = D.pinchStatus.call(
                me,
                t,
                u,
                ye || null,
                be || 0,
                ge || 0,
                Se,
                ve,
                Oe
              )))
        )
          return !1;
        if (u == E && Q())
          switch (ye) {
            case o:
              me.trigger("pinchIn", [ye || null, be || 0, ge || 0, Se, ve, Oe]),
                D.pinchIn &&
                  (g = D.pinchIn.call(
                    me,
                    t,
                    ye || null,
                    be || 0,
                    ge || 0,
                    Se,
                    ve,
                    Oe
                  ));
              break;
            case a:
              me.trigger("pinchOut", [
                ye || null,
                be || 0,
                ge || 0,
                Se,
                ve,
                Oe,
              ]),
                D.pinchOut &&
                  (g = D.pinchOut.call(
                    me,
                    t,
                    ye || null,
                    be || 0,
                    ge || 0,
                    Se,
                    ve,
                    Oe
                  ));
          }
      }
      return (
        s == h
          ? (u !== m && u !== E) ||
            (clearTimeout(ke),
            clearTimeout(Ae),
            z() && !G()
              ? ((Re = le()),
                (ke = setTimeout(
                  e.proxy(function () {
                    (Re = null),
                      me.trigger("tap", [t.target]),
                      D.tap && (g = D.tap.call(me, t, t.target));
                  }, this),
                  D.doubleTapThreshold
                )))
              : ((Re = null),
                me.trigger("tap", [t.target]),
                D.tap && (g = D.tap.call(me, t, t.target))))
          : s == d
          ? (u !== m && u !== E) ||
            (clearTimeout(ke),
            clearTimeout(Ae),
            (Re = null),
            me.trigger("doubletap", [t.target]),
            D.doubleTap && (g = D.doubleTap.call(me, t, t.target)))
          : s == f &&
            ((u !== m && u !== E) ||
              (clearTimeout(ke),
              (Re = null),
              me.trigger("longtap", [t.target]),
              D.longTap && (g = D.longTap.call(me, t, t.target)))),
        g
      );
    }
    function H() {
      var e = !0;
      return null !== D.threshold && (e = he >= D.threshold), e;
    }
    function _() {
      var e = !1;
      return (
        null !== D.cancelThreshold &&
          null !== de &&
          (e = ee(de) - he >= D.cancelThreshold),
        e
      );
    }
    function q() {
      return !(D.maxTimeThreshold && ge >= D.maxTimeThreshold);
    }
    function Q() {
      var e = Y(),
        t = V(),
        n = null === D.pinchThreshold || be >= D.pinchThreshold;
      return e && t && n;
    }
    function C() {
      return D.pinchStatus || D.pinchIn || D.pinchOut;
    }
    function F() {
      var e = q(),
        t = H(),
        n = Y(),
        r = V();
      return !_() && r && n && t && e;
    }
    function X() {
      return (
        D.swipe ||
        D.swipeStatus ||
        D.swipeLeft ||
        D.swipeRight ||
        D.swipeUp ||
        D.swipeDown
      );
    }
    function Y() {
      return Se === D.fingers || D.fingers === T || !x;
    }
    function V() {
      return 0 !== Oe[0].end.x;
    }
    function W() {
      return D.tap;
    }
    function z() {
      return !!D.doubleTap;
    }
    function G() {
      if (null == Re) return !1;
      var e = le();
      return z() && e - Re <= D.doubleTapThreshold;
    }
    function Z() {
      Le = Pe = 0;
    }
    function B() {
      var e = !1;
      return Pe && le() - Pe <= D.fingerReleaseThreshold && (e = !0), e;
    }
    function J(e) {
      me &&
        (!0 === e
          ? (me.bind(ue, L), me.bind(se, R), ce && me.bind(ce, A))
          : (me.unbind(ue, L, !1),
            me.unbind(se, R, !1),
            ce && me.unbind(ce, A, !1)),
        me.data(M + "_intouch", !0 === e));
    }
    function K(e, t) {
      var n = {
        start: { x: 0, y: 0 },
        last: { x: 0, y: 0 },
        end: { x: 0, y: 0 },
      };
      return (
        (n.start.x = n.last.x = n.end.x = t.pageX || t.clientX),
        (n.start.y = n.last.y = n.end.y = t.pageY || t.clientY),
        (Oe[e] = n)
      );
    }
    function $(e) {
      var t = void 0 !== e.identifier ? e.identifier : 0,
        n = Oe[t] || null;
      return (
        null === n && (n = K(t, e)),
        (n.last.x = n.end.x),
        (n.last.y = n.end.y),
        (n.end.x = e.pageX || e.clientX),
        (n.end.y = e.pageY || e.clientY),
        n
      );
    }
    function ee(e) {
      if (Ee[e]) return Ee[e].distance;
    }
    function te(e) {
      return { direction: e, distance: 0 };
    }
    function ne() {
      return De - Me;
    }
    function re(e, t) {
      var n = Math.abs(e.x - t.x);
      return (t = Math.abs(e.y - t.y)), Math.round(Math.sqrt(n * n + t * t));
    }
    function ie(e, t) {
      return (
        (a = t),
        (o = e).x == a.x && o.y == a.y
          ? u
          : ((a = t),
            (e = (t = e).x - a.x),
            (t = a.y - t.y),
            (e = Math.atan2(t, e)),
            (e = Math.round((180 * e) / Math.PI)) < 0 &&
              (e = 360 - Math.abs(e)),
            (e <= 45 && 0 <= e) || (e <= 360 && 315 <= e)
              ? n
              : 135 <= e && e <= 225
              ? r
              : 45 < e && e < 135
              ? l
              : i)
      );
      var o, a;
    }
    function le() {
      return new Date().getTime();
    }
    D = e.extend({}, D);
    var oe = x || O || !D.fallbackToMouseEvents,
      ae = oe
        ? O
          ? S
            ? "MSPointerDown"
            : "pointerdown"
          : "touchstart"
        : "mousedown",
      ue = oe
        ? O
          ? S
            ? "MSPointerMove"
            : "pointermove"
          : "touchmove"
        : "mousemove",
      se = oe
        ? O
          ? S
            ? "MSPointerUp"
            : "pointerup"
          : "touchend"
        : "mouseup",
      ce = !oe || O ? "mouseleave" : null,
      pe = O ? (S ? "MSPointerCancel" : "pointercancel") : "touchcancel",
      he = 0,
      de = null,
      fe = null,
      ge = 0,
      we = 0,
      Te = 0,
      ve = 1,
      be = 0,
      ye = 0,
      Ee = null,
      me = e(t),
      xe = "start",
      Se = 0,
      Oe = {},
      Me = 0,
      De = 0,
      Pe = 0,
      Le = 0,
      Re = 0,
      ke = null,
      Ae = null;
    try {
      me.bind(ae, P), me.bind(pe, k);
    } catch (t) {
      e.error("events not supported " + ae + "," + pe + " on jQuery.swipe");
    }
    (this.enable = function () {
      return this.disable(), me.bind(ae, P), me.bind(pe, k), me;
    }),
      (this.disable = function () {
        return I(), me;
      }),
      (this.destroy = function () {
        I(), me.data(M, null), (me = null);
      }),
      (this.option = function (t, n) {
        if ("object" == typeof t) D = e.extend(D, t);
        else if (void 0 !== D[t]) {
          if (void 0 === n) return D[t];
          D[t] = n;
        } else {
          if (!t) return D;
          e.error("Option " + t + " does not exist on jQuery.swipe.options");
        }
        return null;
      });
  }
  var n = "left",
    r = "right",
    i = "up",
    l = "down",
    o = "in",
    a = "out",
    u = "none",
    s = "auto",
    c = "swipe",
    p = "pinch",
    h = "tap",
    d = "doubletap",
    f = "longtap",
    g = "horizontal",
    w = "vertical",
    T = "all",
    v = 10,
    b = "start",
    y = "move",
    E = "end",
    m = "cancel",
    x = "ontouchstart" in window,
    S =
      window.navigator.msPointerEnabled &&
      !window.navigator.pointerEnabled &&
      !x,
    O =
      (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) &&
      !x,
    M = "TouchSwipe";
  (e.fn.swipe = function (n) {
    var r = e(this),
      i = r.data(M);
    if (i && "string" == typeof n) {
      if (i[n]) return i[n].apply(i, Array.prototype.slice.call(arguments, 1));
      e.error("Method " + n + " does not exist on jQuery.swipe");
    } else if (i && "object" == typeof n) i.option.apply(i, arguments);
    else if (!(i || ("object" != typeof n && n)))
      return function (n) {
        return (
          !n ||
            void 0 !== n.allowPageScroll ||
            (void 0 === n.swipe && void 0 === n.swipeStatus) ||
            (n.allowPageScroll = u),
          void 0 !== n.click && void 0 === n.tap && (n.tap = n.click),
          (n = n || {}),
          (n = e.extend({}, e.fn.swipe.defaults, n)),
          this.each(function () {
            var r = e(this),
              i = r.data(M);
            i || ((i = new t(this, n)), r.data(M, i));
          })
        );
      }.apply(this, arguments);
    return r;
  }),
    (e.fn.swipe.version = "1.6.18"),
    (e.fn.swipe.defaults = {
      fingers: 1,
      threshold: 75,
      cancelThreshold: null,
      pinchThreshold: 20,
      maxTimeThreshold: null,
      fingerReleaseThreshold: 250,
      longTapThreshold: 500,
      doubleTapThreshold: 200,
      swipe: null,
      swipeLeft: null,
      swipeRight: null,
      swipeUp: null,
      swipeDown: null,
      swipeStatus: null,
      pinchIn: null,
      pinchOut: null,
      pinchStatus: null,
      click: null,
      tap: null,
      doubleTap: null,
      longTap: null,
      hold: null,
      triggerOnTouchEnd: !0,
      triggerOnTouchLeave: !1,
      allowPageScroll: "auto",
      fallbackToMouseEvents: !0,
      excludedElements: ".noSwipe",
      preventDefaultEvents: !0,
    }),
    (e.fn.swipe.phases = {
      PHASE_START: b,
      PHASE_MOVE: y,
      PHASE_END: E,
      PHASE_CANCEL: m,
    }),
    (e.fn.swipe.directions = {
      LEFT: n,
      RIGHT: r,
      UP: i,
      DOWN: l,
      IN: o,
      OUT: a,
    }),
    (e.fn.swipe.pageScroll = { NONE: u, HORIZONTAL: g, VERTICAL: w, AUTO: s }),
    (e.fn.swipe.fingers = {
      ONE: 1,
      TWO: 2,
      THREE: 3,
      FOUR: 4,
      FIVE: 5,
      ALL: T,
    });
}),
  "function" == typeof define && define.amd && define.amd.jQuery
    ? define(["jquery"], e)
    : e(
        "undefined" != typeof module && module.exports
          ? require("jquery")
          : jQuery
      );
