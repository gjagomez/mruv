!(function (e) {
  if ("object" == typeof exports && "undefined" != typeof module)
    module.exports = e();
  else if ("function" == typeof define && define.amd) define([], e);
  else {
    ("undefined" != typeof window
      ? window
      : "undefined" != typeof global
      ? global
      : "undefined" != typeof self
      ? self
      : this
    ).PouchDB = e();
  }
})(function () {
  return (function e(t, n, r) {
    function i(s, a) {
      if (!n[s]) {
        if (!t[s]) {
          var c = "function" == typeof require && require;
          if (!a && c) return c(s, !0);
          if (o) return o(s, !0);
          var u = new Error("Cannot find module '" + s + "'");
          throw ((u.code = "MODULE_NOT_FOUND"), u);
        }
        var f = (n[s] = { exports: {} });
        t[s][0].call(
          f.exports,
          function (e) {
            return i(t[s][1][e] || e);
          },
          f,
          f.exports,
          e,
          t,
          n,
          r
        );
      }
      return n[s].exports;
    }
    for (
      var o = "function" == typeof require && require, s = 0;
      s < r.length;
      s++
    )
      i(r[s]);
    return i;
  })(
    {
      1: [function (e, t, n) {}, {}],
      2: [
        function (e, t, n) {
          var r =
              Object.create ||
              function (e) {
                var t = function () {};
                return (t.prototype = e), new t();
              },
            i =
              Object.keys ||
              function (e) {
                var t = [];
                for (var n in e)
                  Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
                return n;
              },
            o =
              Function.prototype.bind ||
              function (e) {
                var t = this;
                return function () {
                  return t.apply(e, arguments);
                };
              };
          function s() {
            (this._events &&
              Object.prototype.hasOwnProperty.call(this, "_events")) ||
              ((this._events = r(null)), (this._eventsCount = 0)),
              (this._maxListeners = this._maxListeners || void 0);
          }
          (t.exports = s),
            (s.EventEmitter = s),
            (s.prototype._events = void 0),
            (s.prototype._maxListeners = void 0);
          var a,
            c = 10;
          try {
            var u = {};
            Object.defineProperty &&
              Object.defineProperty(u, "x", { value: 0 }),
              (a = 0 === u.x);
          } catch (e) {
            a = !1;
          }
          function f(e) {
            return void 0 === e._maxListeners
              ? s.defaultMaxListeners
              : e._maxListeners;
          }
          function l(e, t, n) {
            if (t) e.call(n);
            else
              for (var r = e.length, i = w(e, r), o = 0; o < r; ++o)
                i[o].call(n);
          }
          function d(e, t, n, r) {
            if (t) e.call(n, r);
            else
              for (var i = e.length, o = w(e, i), s = 0; s < i; ++s)
                o[s].call(n, r);
          }
          function h(e, t, n, r, i) {
            if (t) e.call(n, r, i);
            else
              for (var o = e.length, s = w(e, o), a = 0; a < o; ++a)
                s[a].call(n, r, i);
          }
          function p(e, t, n, r, i, o) {
            if (t) e.call(n, r, i, o);
            else
              for (var s = e.length, a = w(e, s), c = 0; c < s; ++c)
                a[c].call(n, r, i, o);
          }
          function v(e, t, n, r) {
            if (t) e.apply(n, r);
            else
              for (var i = e.length, o = w(e, i), s = 0; s < i; ++s)
                o[s].apply(n, r);
          }
          function y(e, t, n, i) {
            var o, s, a;
            if ("function" != typeof n)
              throw new TypeError('"listener" argument must be a function');
            if (
              ((s = e._events)
                ? (s.newListener &&
                    (e.emit("newListener", t, n.listener ? n.listener : n),
                    (s = e._events)),
                  (a = s[t]))
                : ((s = e._events = r(null)), (e._eventsCount = 0)),
              a)
            ) {
              if (
                ("function" == typeof a
                  ? (a = s[t] = i ? [n, a] : [a, n])
                  : i
                  ? a.unshift(n)
                  : a.push(n),
                !a.warned && (o = f(e)) && o > 0 && a.length > o)
              ) {
                a.warned = !0;
                var c = new Error(
                  "Possible EventEmitter memory leak detected. " +
                    a.length +
                    ' "' +
                    String(t) +
                    '" listeners added. Use emitter.setMaxListeners() to increase limit.'
                );
                (c.name = "MaxListenersExceededWarning"),
                  (c.emitter = e),
                  (c.type = t),
                  (c.count = a.length),
                  "object" == typeof console &&
                    console.warn &&
                    console.warn("%s: %s", c.name, c.message);
              }
            } else (a = s[t] = n), ++e._eventsCount;
            return e;
          }
          function _() {
            if (!this.fired)
              switch (
                (this.target.removeListener(this.type, this.wrapFn),
                (this.fired = !0),
                arguments.length)
              ) {
                case 0:
                  return this.listener.call(this.target);
                case 1:
                  return this.listener.call(this.target, arguments[0]);
                case 2:
                  return this.listener.call(
                    this.target,
                    arguments[0],
                    arguments[1]
                  );
                case 3:
                  return this.listener.call(
                    this.target,
                    arguments[0],
                    arguments[1],
                    arguments[2]
                  );
                default:
                  for (
                    var e = new Array(arguments.length), t = 0;
                    t < e.length;
                    ++t
                  )
                    e[t] = arguments[t];
                  this.listener.apply(this.target, e);
              }
          }
          function g(e, t, n) {
            var r = {
                fired: !1,
                wrapFn: void 0,
                target: e,
                type: t,
                listener: n,
              },
              i = o.call(_, r);
            return (i.listener = n), (r.wrapFn = i), i;
          }
          function m(e, t, n) {
            var r = e._events;
            if (!r) return [];
            var i = r[t];
            return i
              ? "function" == typeof i
                ? n
                  ? [i.listener || i]
                  : [i]
                : n
                ? (function (e) {
                    for (var t = new Array(e.length), n = 0; n < t.length; ++n)
                      t[n] = e[n].listener || e[n];
                    return t;
                  })(i)
                : w(i, i.length)
              : [];
          }
          function b(e) {
            var t = this._events;
            if (t) {
              var n = t[e];
              if ("function" == typeof n) return 1;
              if (n) return n.length;
            }
            return 0;
          }
          function w(e, t) {
            for (var n = new Array(t), r = 0; r < t; ++r) n[r] = e[r];
            return n;
          }
          a
            ? Object.defineProperty(s, "defaultMaxListeners", {
                enumerable: !0,
                get: function () {
                  return c;
                },
                set: function (e) {
                  if ("number" != typeof e || e < 0 || e != e)
                    throw new TypeError(
                      '"defaultMaxListeners" must be a positive number'
                    );
                  c = e;
                },
              })
            : (s.defaultMaxListeners = c),
            (s.prototype.setMaxListeners = function (e) {
              if ("number" != typeof e || e < 0 || isNaN(e))
                throw new TypeError('"n" argument must be a positive number');
              return (this._maxListeners = e), this;
            }),
            (s.prototype.getMaxListeners = function () {
              return f(this);
            }),
            (s.prototype.emit = function (e) {
              var t,
                n,
                r,
                i,
                o,
                s,
                a = "error" === e;
              if ((s = this._events)) a = a && null == s.error;
              else if (!a) return !1;
              if (a) {
                if (
                  (arguments.length > 1 && (t = arguments[1]),
                  t instanceof Error)
                )
                  throw t;
                var c = new Error('Unhandled "error" event. (' + t + ")");
                throw ((c.context = t), c);
              }
              if (!(n = s[e])) return !1;
              var u = "function" == typeof n;
              switch ((r = arguments.length)) {
                case 1:
                  l(n, u, this);
                  break;
                case 2:
                  d(n, u, this, arguments[1]);
                  break;
                case 3:
                  h(n, u, this, arguments[1], arguments[2]);
                  break;
                case 4:
                  p(n, u, this, arguments[1], arguments[2], arguments[3]);
                  break;
                default:
                  for (i = new Array(r - 1), o = 1; o < r; o++)
                    i[o - 1] = arguments[o];
                  v(n, u, this, i);
              }
              return !0;
            }),
            (s.prototype.addListener = function (e, t) {
              return y(this, e, t, !1);
            }),
            (s.prototype.on = s.prototype.addListener),
            (s.prototype.prependListener = function (e, t) {
              return y(this, e, t, !0);
            }),
            (s.prototype.once = function (e, t) {
              if ("function" != typeof t)
                throw new TypeError('"listener" argument must be a function');
              return this.on(e, g(this, e, t)), this;
            }),
            (s.prototype.prependOnceListener = function (e, t) {
              if ("function" != typeof t)
                throw new TypeError('"listener" argument must be a function');
              return this.prependListener(e, g(this, e, t)), this;
            }),
            (s.prototype.removeListener = function (e, t) {
              var n, i, o, s, a;
              if ("function" != typeof t)
                throw new TypeError('"listener" argument must be a function');
              if (!(i = this._events)) return this;
              if (!(n = i[e])) return this;
              if (n === t || n.listener === t)
                0 == --this._eventsCount
                  ? (this._events = r(null))
                  : (delete i[e],
                    i.removeListener &&
                      this.emit("removeListener", e, n.listener || t));
              else if ("function" != typeof n) {
                for (o = -1, s = n.length - 1; s >= 0; s--)
                  if (n[s] === t || n[s].listener === t) {
                    (a = n[s].listener), (o = s);
                    break;
                  }
                if (o < 0) return this;
                0 === o
                  ? n.shift()
                  : (function (e, t) {
                      for (
                        var n = t, r = n + 1, i = e.length;
                        r < i;
                        n += 1, r += 1
                      )
                        e[n] = e[r];
                      e.pop();
                    })(n, o),
                  1 === n.length && (i[e] = n[0]),
                  i.removeListener && this.emit("removeListener", e, a || t);
              }
              return this;
            }),
            (s.prototype.removeAllListeners = function (e) {
              var t, n, o;
              if (!(n = this._events)) return this;
              if (!n.removeListener)
                return (
                  0 === arguments.length
                    ? ((this._events = r(null)), (this._eventsCount = 0))
                    : n[e] &&
                      (0 == --this._eventsCount
                        ? (this._events = r(null))
                        : delete n[e]),
                  this
                );
              if (0 === arguments.length) {
                var s,
                  a = i(n);
                for (o = 0; o < a.length; ++o)
                  "removeListener" !== (s = a[o]) && this.removeAllListeners(s);
                return (
                  this.removeAllListeners("removeListener"),
                  (this._events = r(null)),
                  (this._eventsCount = 0),
                  this
                );
              }
              if ("function" == typeof (t = n[e])) this.removeListener(e, t);
              else if (t)
                for (o = t.length - 1; o >= 0; o--)
                  this.removeListener(e, t[o]);
              return this;
            }),
            (s.prototype.listeners = function (e) {
              return m(this, e, !0);
            }),
            (s.prototype.rawListeners = function (e) {
              return m(this, e, !1);
            }),
            (s.listenerCount = function (e, t) {
              return "function" == typeof e.listenerCount
                ? e.listenerCount(t)
                : b.call(e, t);
            }),
            (s.prototype.listenerCount = b),
            (s.prototype.eventNames = function () {
              return this._eventsCount > 0 ? Reflect.ownKeys(this._events) : [];
            });
        },
        {},
      ],
      3: [
        function (e, t, n) {
          "use strict";
          var r,
            i,
            o,
            s = [e(1), e(6), e(5), e(4), e(7), e(8)],
            a = -1,
            c = [],
            u = !1;
          function f() {
            r &&
              i &&
              ((r = !1),
              i.length ? (c = i.concat(c)) : (a = -1),
              c.length && l());
          }
          function l() {
            if (!r) {
              (u = !1), (r = !0);
              for (var e = c.length, t = setTimeout(f); e; ) {
                for (i = c, c = []; i && ++a < e; ) i[a].run();
                (a = -1), (e = c.length);
              }
              (i = null), (a = -1), (r = !1), clearTimeout(t);
            }
          }
          for (var d = -1, h = s.length; ++d < h; )
            if (s[d] && s[d].test && s[d].test()) {
              o = s[d].install(l);
              break;
            }
          function p(e, t) {
            (this.fun = e), (this.array = t);
          }
          (p.prototype.run = function () {
            var e = this.fun,
              t = this.array;
            switch (t.length) {
              case 0:
                return e();
              case 1:
                return e(t[0]);
              case 2:
                return e(t[0], t[1]);
              case 3:
                return e(t[0], t[1], t[2]);
              default:
                return e.apply(null, t);
            }
          }),
            (t.exports = function (e) {
              var t = new Array(arguments.length - 1);
              if (arguments.length > 1)
                for (var n = 1; n < arguments.length; n++)
                  t[n - 1] = arguments[n];
              c.push(new p(e, t)), u || r || ((u = !0), o());
            });
        },
        { 1: 1, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8 },
      ],
      4: [
        function (e, t, n) {
          (function (e) {
            (function () {
              "use strict";
              (n.test = function () {
                return !e.setImmediate && void 0 !== e.MessageChannel;
              }),
                (n.install = function (t) {
                  var n = new e.MessageChannel();
                  return (
                    (n.port1.onmessage = t),
                    function () {
                      n.port2.postMessage(0);
                    }
                  );
                });
            }.call(this));
          }.call(
            this,
            "undefined" != typeof global
              ? global
              : "undefined" != typeof self
              ? self
              : "undefined" != typeof window
              ? window
              : {}
          ));
        },
        {},
      ],
      5: [
        function (e, t, n) {
          (function (e) {
            (function () {
              "use strict";
              var t = e.MutationObserver || e.WebKitMutationObserver;
              (n.test = function () {
                return t;
              }),
                (n.install = function (n) {
                  var r = 0,
                    i = new t(n),
                    o = e.document.createTextNode("");
                  return (
                    i.observe(o, { characterData: !0 }),
                    function () {
                      o.data = r = ++r % 2;
                    }
                  );
                });
            }.call(this));
          }.call(
            this,
            "undefined" != typeof global
              ? global
              : "undefined" != typeof self
              ? self
              : "undefined" != typeof window
              ? window
              : {}
          ));
        },
        {},
      ],
      6: [
        function (e, t, n) {
          (function (e) {
            (function () {
              "use strict";
              (n.test = function () {
                return "function" == typeof e.queueMicrotask;
              }),
                (n.install = function (t) {
                  return function () {
                    e.queueMicrotask(t);
                  };
                });
            }.call(this));
          }.call(
            this,
            "undefined" != typeof global
              ? global
              : "undefined" != typeof self
              ? self
              : "undefined" != typeof window
              ? window
              : {}
          ));
        },
        {},
      ],
      7: [
        function (e, t, n) {
          (function (e) {
            (function () {
              "use strict";
              (n.test = function () {
                return (
                  "document" in e &&
                  "onreadystatechange" in e.document.createElement("script")
                );
              }),
                (n.install = function (t) {
                  return function () {
                    var n = e.document.createElement("script");
                    return (
                      (n.onreadystatechange = function () {
                        t(),
                          (n.onreadystatechange = null),
                          n.parentNode.removeChild(n),
                          (n = null);
                      }),
                      e.document.documentElement.appendChild(n),
                      t
                    );
                  };
                });
            }.call(this));
          }.call(
            this,
            "undefined" != typeof global
              ? global
              : "undefined" != typeof self
              ? self
              : "undefined" != typeof window
              ? window
              : {}
          ));
        },
        {},
      ],
      8: [
        function (e, t, n) {
          "use strict";
          (n.test = function () {
            return !0;
          }),
            (n.install = function (e) {
              return function () {
                setTimeout(e, 0);
              };
            });
        },
        {},
      ],
      9: [
        function (e, t, n) {
          var r,
            i,
            o = (t.exports = {});
          function s() {
            throw new Error("setTimeout has not been defined");
          }
          function a() {
            throw new Error("clearTimeout has not been defined");
          }
          function c(e) {
            if (r === setTimeout) return setTimeout(e, 0);
            if ((r === s || !r) && setTimeout)
              return (r = setTimeout), setTimeout(e, 0);
            try {
              return r(e, 0);
            } catch (t) {
              try {
                return r.call(null, e, 0);
              } catch (t) {
                return r.call(this, e, 0);
              }
            }
          }
          !(function () {
            try {
              r = "function" == typeof setTimeout ? setTimeout : s;
            } catch (e) {
              r = s;
            }
            try {
              i = "function" == typeof clearTimeout ? clearTimeout : a;
            } catch (e) {
              i = a;
            }
          })();
          var u,
            f = [],
            l = !1,
            d = -1;
          function h() {
            l &&
              u &&
              ((l = !1),
              u.length ? (f = u.concat(f)) : (d = -1),
              f.length && p());
          }
          function p() {
            if (!l) {
              var e = c(h);
              l = !0;
              for (var t = f.length; t; ) {
                for (u = f, f = []; ++d < t; ) u && u[d].run();
                (d = -1), (t = f.length);
              }
              (u = null),
                (l = !1),
                (function (e) {
                  if (i === clearTimeout) return clearTimeout(e);
                  if ((i === a || !i) && clearTimeout)
                    return (i = clearTimeout), clearTimeout(e);
                  try {
                    i(e);
                  } catch (t) {
                    try {
                      return i.call(null, e);
                    } catch (t) {
                      return i.call(this, e);
                    }
                  }
                })(e);
            }
          }
          function v(e, t) {
            (this.fun = e), (this.array = t);
          }
          function y() {}
          (o.nextTick = function (e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1)
              for (var n = 1; n < arguments.length; n++)
                t[n - 1] = arguments[n];
            f.push(new v(e, t)), 1 !== f.length || l || c(p);
          }),
            (v.prototype.run = function () {
              this.fun.apply(null, this.array);
            }),
            (o.title = "browser"),
            (o.browser = !0),
            (o.env = {}),
            (o.argv = []),
            (o.version = ""),
            (o.versions = {}),
            (o.on = y),
            (o.addListener = y),
            (o.once = y),
            (o.off = y),
            (o.removeListener = y),
            (o.removeAllListeners = y),
            (o.emit = y),
            (o.prependListener = y),
            (o.prependOnceListener = y),
            (o.listeners = function (e) {
              return [];
            }),
            (o.binding = function (e) {
              throw new Error("process.binding is not supported");
            }),
            (o.cwd = function () {
              return "/";
            }),
            (o.chdir = function (e) {
              throw new Error("process.chdir is not supported");
            }),
            (o.umask = function () {
              return 0;
            });
        },
        {},
      ],
      10: [
        function (e, t, n) {
          !(function (e) {
            if ("object" == typeof n) t.exports = e();
            else {
              var r;
              try {
                r = window;
              } catch (e) {
                r = self;
              }
              r.SparkMD5 = e();
            }
          })(function (e) {
            "use strict";
            var t = [
              "0",
              "1",
              "2",
              "3",
              "4",
              "5",
              "6",
              "7",
              "8",
              "9",
              "a",
              "b",
              "c",
              "d",
              "e",
              "f",
            ];
            function n(e, t) {
              var n = e[0],
                r = e[1],
                i = e[2],
                o = e[3];
              (r =
                ((((r +=
                  ((((i =
                    ((((i +=
                      ((((o =
                        ((((o +=
                          ((((n =
                            ((((n +=
                              (((r & i) | (~r & o)) + t[0] - 680876936) | 0) <<
                              7) |
                              (n >>> 25)) +
                              r) |
                            0) &
                            r) |
                            (~n & i)) +
                            t[1] -
                            389564586) |
                          0) <<
                          12) |
                          (o >>> 20)) +
                          n) |
                        0) &
                        n) |
                        (~o & r)) +
                        t[2] +
                        606105819) |
                      0) <<
                      17) |
                      (i >>> 15)) +
                      o) |
                    0) &
                    o) |
                    (~i & n)) +
                    t[3] -
                    1044525330) |
                  0) <<
                  22) |
                  (r >>> 10)) +
                  i) |
                0),
                (r =
                  ((((r +=
                    ((((i =
                      ((((i +=
                        ((((o =
                          ((((o +=
                            ((((n =
                              ((((n +=
                                (((r & i) | (~r & o)) + t[4] - 176418897) |
                                0) <<
                                7) |
                                (n >>> 25)) +
                                r) |
                              0) &
                              r) |
                              (~n & i)) +
                              t[5] +
                              1200080426) |
                            0) <<
                            12) |
                            (o >>> 20)) +
                            n) |
                          0) &
                          n) |
                          (~o & r)) +
                          t[6] -
                          1473231341) |
                        0) <<
                        17) |
                        (i >>> 15)) +
                        o) |
                      0) &
                      o) |
                      (~i & n)) +
                      t[7] -
                      45705983) |
                    0) <<
                    22) |
                    (r >>> 10)) +
                    i) |
                  0),
                (r =
                  ((((r +=
                    ((((i =
                      ((((i +=
                        ((((o =
                          ((((o +=
                            ((((n =
                              ((((n +=
                                (((r & i) | (~r & o)) + t[8] + 1770035416) |
                                0) <<
                                7) |
                                (n >>> 25)) +
                                r) |
                              0) &
                              r) |
                              (~n & i)) +
                              t[9] -
                              1958414417) |
                            0) <<
                            12) |
                            (o >>> 20)) +
                            n) |
                          0) &
                          n) |
                          (~o & r)) +
                          t[10] -
                          42063) |
                        0) <<
                        17) |
                        (i >>> 15)) +
                        o) |
                      0) &
                      o) |
                      (~i & n)) +
                      t[11] -
                      1990404162) |
                    0) <<
                    22) |
                    (r >>> 10)) +
                    i) |
                  0),
                (r =
                  ((((r +=
                    ((((i =
                      ((((i +=
                        ((((o =
                          ((((o +=
                            ((((n =
                              ((((n +=
                                (((r & i) | (~r & o)) + t[12] + 1804603682) |
                                0) <<
                                7) |
                                (n >>> 25)) +
                                r) |
                              0) &
                              r) |
                              (~n & i)) +
                              t[13] -
                              40341101) |
                            0) <<
                            12) |
                            (o >>> 20)) +
                            n) |
                          0) &
                          n) |
                          (~o & r)) +
                          t[14] -
                          1502002290) |
                        0) <<
                        17) |
                        (i >>> 15)) +
                        o) |
                      0) &
                      o) |
                      (~i & n)) +
                      t[15] +
                      1236535329) |
                    0) <<
                    22) |
                    (r >>> 10)) +
                    i) |
                  0),
                (r =
                  ((((r +=
                    ((((i =
                      ((((i +=
                        ((((o =
                          ((((o +=
                            ((((n =
                              ((((n +=
                                (((r & o) | (i & ~o)) + t[1] - 165796510) |
                                0) <<
                                5) |
                                (n >>> 27)) +
                                r) |
                              0) &
                              i) |
                              (r & ~i)) +
                              t[6] -
                              1069501632) |
                            0) <<
                            9) |
                            (o >>> 23)) +
                            n) |
                          0) &
                          r) |
                          (n & ~r)) +
                          t[11] +
                          643717713) |
                        0) <<
                        14) |
                        (i >>> 18)) +
                        o) |
                      0) &
                      n) |
                      (o & ~n)) +
                      t[0] -
                      373897302) |
                    0) <<
                    20) |
                    (r >>> 12)) +
                    i) |
                  0),
                (r =
                  ((((r +=
                    ((((i =
                      ((((i +=
                        ((((o =
                          ((((o +=
                            ((((n =
                              ((((n +=
                                (((r & o) | (i & ~o)) + t[5] - 701558691) |
                                0) <<
                                5) |
                                (n >>> 27)) +
                                r) |
                              0) &
                              i) |
                              (r & ~i)) +
                              t[10] +
                              38016083) |
                            0) <<
                            9) |
                            (o >>> 23)) +
                            n) |
                          0) &
                          r) |
                          (n & ~r)) +
                          t[15] -
                          660478335) |
                        0) <<
                        14) |
                        (i >>> 18)) +
                        o) |
                      0) &
                      n) |
                      (o & ~n)) +
                      t[4] -
                      405537848) |
                    0) <<
                    20) |
                    (r >>> 12)) +
                    i) |
                  0),
                (r =
                  ((((r +=
                    ((((i =
                      ((((i +=
                        ((((o =
                          ((((o +=
                            ((((n =
                              ((((n +=
                                (((r & o) | (i & ~o)) + t[9] + 568446438) |
                                0) <<
                                5) |
                                (n >>> 27)) +
                                r) |
                              0) &
                              i) |
                              (r & ~i)) +
                              t[14] -
                              1019803690) |
                            0) <<
                            9) |
                            (o >>> 23)) +
                            n) |
                          0) &
                          r) |
                          (n & ~r)) +
                          t[3] -
                          187363961) |
                        0) <<
                        14) |
                        (i >>> 18)) +
                        o) |
                      0) &
                      n) |
                      (o & ~n)) +
                      t[8] +
                      1163531501) |
                    0) <<
                    20) |
                    (r >>> 12)) +
                    i) |
                  0),
                (r =
                  ((((r +=
                    ((((i =
                      ((((i +=
                        ((((o =
                          ((((o +=
                            ((((n =
                              ((((n +=
                                (((r & o) | (i & ~o)) + t[13] - 1444681467) |
                                0) <<
                                5) |
                                (n >>> 27)) +
                                r) |
                              0) &
                              i) |
                              (r & ~i)) +
                              t[2] -
                              51403784) |
                            0) <<
                            9) |
                            (o >>> 23)) +
                            n) |
                          0) &
                          r) |
                          (n & ~r)) +
                          t[7] +
                          1735328473) |
                        0) <<
                        14) |
                        (i >>> 18)) +
                        o) |
                      0) &
                      n) |
                      (o & ~n)) +
                      t[12] -
                      1926607734) |
                    0) <<
                    20) |
                    (r >>> 12)) +
                    i) |
                  0),
                (r =
                  ((((r +=
                    (((i =
                      ((((i +=
                        (((o =
                          ((((o +=
                            (((n =
                              ((((n += ((r ^ i ^ o) + t[5] - 378558) | 0) <<
                                4) |
                                (n >>> 28)) +
                                r) |
                              0) ^
                              r ^
                              i) +
                              t[8] -
                              2022574463) |
                            0) <<
                            11) |
                            (o >>> 21)) +
                            n) |
                          0) ^
                          n ^
                          r) +
                          t[11] +
                          1839030562) |
                        0) <<
                        16) |
                        (i >>> 16)) +
                        o) |
                      0) ^
                      o ^
                      n) +
                      t[14] -
                      35309556) |
                    0) <<
                    23) |
                    (r >>> 9)) +
                    i) |
                  0),
                (r =
                  ((((r +=
                    (((i =
                      ((((i +=
                        (((o =
                          ((((o +=
                            (((n =
                              ((((n += ((r ^ i ^ o) + t[1] - 1530992060) | 0) <<
                                4) |
                                (n >>> 28)) +
                                r) |
                              0) ^
                              r ^
                              i) +
                              t[4] +
                              1272893353) |
                            0) <<
                            11) |
                            (o >>> 21)) +
                            n) |
                          0) ^
                          n ^
                          r) +
                          t[7] -
                          155497632) |
                        0) <<
                        16) |
                        (i >>> 16)) +
                        o) |
                      0) ^
                      o ^
                      n) +
                      t[10] -
                      1094730640) |
                    0) <<
                    23) |
                    (r >>> 9)) +
                    i) |
                  0),
                (r =
                  ((((r +=
                    (((i =
                      ((((i +=
                        (((o =
                          ((((o +=
                            (((n =
                              ((((n += ((r ^ i ^ o) + t[13] + 681279174) | 0) <<
                                4) |
                                (n >>> 28)) +
                                r) |
                              0) ^
                              r ^
                              i) +
                              t[0] -
                              358537222) |
                            0) <<
                            11) |
                            (o >>> 21)) +
                            n) |
                          0) ^
                          n ^
                          r) +
                          t[3] -
                          722521979) |
                        0) <<
                        16) |
                        (i >>> 16)) +
                        o) |
                      0) ^
                      o ^
                      n) +
                      t[6] +
                      76029189) |
                    0) <<
                    23) |
                    (r >>> 9)) +
                    i) |
                  0),
                (r =
                  ((((r +=
                    (((i =
                      ((((i +=
                        (((o =
                          ((((o +=
                            (((n =
                              ((((n += ((r ^ i ^ o) + t[9] - 640364487) | 0) <<
                                4) |
                                (n >>> 28)) +
                                r) |
                              0) ^
                              r ^
                              i) +
                              t[12] -
                              421815835) |
                            0) <<
                            11) |
                            (o >>> 21)) +
                            n) |
                          0) ^
                          n ^
                          r) +
                          t[15] +
                          530742520) |
                        0) <<
                        16) |
                        (i >>> 16)) +
                        o) |
                      0) ^
                      o ^
                      n) +
                      t[2] -
                      995338651) |
                    0) <<
                    23) |
                    (r >>> 9)) +
                    i) |
                  0),
                (r =
                  ((((r +=
                    (((o =
                      ((((o +=
                        ((r ^
                          ((n =
                            ((((n += ((i ^ (r | ~o)) + t[0] - 198630844) | 0) <<
                              6) |
                              (n >>> 26)) +
                              r) |
                            0) |
                            ~i)) +
                          t[7] +
                          1126891415) |
                        0) <<
                        10) |
                        (o >>> 22)) +
                        n) |
                      0) ^
                      ((i =
                        ((((i += ((n ^ (o | ~r)) + t[14] - 1416354905) | 0) <<
                          15) |
                          (i >>> 17)) +
                          o) |
                        0) |
                        ~n)) +
                      t[5] -
                      57434055) |
                    0) <<
                    21) |
                    (r >>> 11)) +
                    i) |
                  0),
                (r =
                  ((((r +=
                    (((o =
                      ((((o +=
                        ((r ^
                          ((n =
                            ((((n +=
                              ((i ^ (r | ~o)) + t[12] + 1700485571) | 0) <<
                              6) |
                              (n >>> 26)) +
                              r) |
                            0) |
                            ~i)) +
                          t[3] -
                          1894986606) |
                        0) <<
                        10) |
                        (o >>> 22)) +
                        n) |
                      0) ^
                      ((i =
                        ((((i += ((n ^ (o | ~r)) + t[10] - 1051523) | 0) <<
                          15) |
                          (i >>> 17)) +
                          o) |
                        0) |
                        ~n)) +
                      t[1] -
                      2054922799) |
                    0) <<
                    21) |
                    (r >>> 11)) +
                    i) |
                  0),
                (r =
                  ((((r +=
                    (((o =
                      ((((o +=
                        ((r ^
                          ((n =
                            ((((n +=
                              ((i ^ (r | ~o)) + t[8] + 1873313359) | 0) <<
                              6) |
                              (n >>> 26)) +
                              r) |
                            0) |
                            ~i)) +
                          t[15] -
                          30611744) |
                        0) <<
                        10) |
                        (o >>> 22)) +
                        n) |
                      0) ^
                      ((i =
                        ((((i += ((n ^ (o | ~r)) + t[6] - 1560198380) | 0) <<
                          15) |
                          (i >>> 17)) +
                          o) |
                        0) |
                        ~n)) +
                      t[13] +
                      1309151649) |
                    0) <<
                    21) |
                    (r >>> 11)) +
                    i) |
                  0),
                (r =
                  ((((r +=
                    (((o =
                      ((((o +=
                        ((r ^
                          ((n =
                            ((((n += ((i ^ (r | ~o)) + t[4] - 145523070) | 0) <<
                              6) |
                              (n >>> 26)) +
                              r) |
                            0) |
                            ~i)) +
                          t[11] -
                          1120210379) |
                        0) <<
                        10) |
                        (o >>> 22)) +
                        n) |
                      0) ^
                      ((i =
                        ((((i += ((n ^ (o | ~r)) + t[2] + 718787259) | 0) <<
                          15) |
                          (i >>> 17)) +
                          o) |
                        0) |
                        ~n)) +
                      t[9] -
                      343485551) |
                    0) <<
                    21) |
                    (r >>> 11)) +
                    i) |
                  0),
                (e[0] = (n + e[0]) | 0),
                (e[1] = (r + e[1]) | 0),
                (e[2] = (i + e[2]) | 0),
                (e[3] = (o + e[3]) | 0);
            }
            function r(e) {
              var t,
                n = [];
              for (t = 0; t < 64; t += 4)
                n[t >> 2] =
                  e.charCodeAt(t) +
                  (e.charCodeAt(t + 1) << 8) +
                  (e.charCodeAt(t + 2) << 16) +
                  (e.charCodeAt(t + 3) << 24);
              return n;
            }
            function i(e) {
              var t,
                n = [];
              for (t = 0; t < 64; t += 4)
                n[t >> 2] =
                  e[t] + (e[t + 1] << 8) + (e[t + 2] << 16) + (e[t + 3] << 24);
              return n;
            }
            function o(e) {
              var t,
                i,
                o,
                s,
                a,
                c,
                u = e.length,
                f = [1732584193, -271733879, -1732584194, 271733878];
              for (t = 64; t <= u; t += 64) n(f, r(e.substring(t - 64, t)));
              for (
                i = (e = e.substring(t - 64)).length,
                  o = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                  t = 0;
                t < i;
                t += 1
              )
                o[t >> 2] |= e.charCodeAt(t) << (t % 4 << 3);
              if (((o[t >> 2] |= 128 << (t % 4 << 3)), t > 55))
                for (n(f, o), t = 0; t < 16; t += 1) o[t] = 0;
              return (
                (s = (s = 8 * u).toString(16).match(/(.*?)(.{0,8})$/)),
                (a = parseInt(s[2], 16)),
                (c = parseInt(s[1], 16) || 0),
                (o[14] = a),
                (o[15] = c),
                n(f, o),
                f
              );
            }
            function s(e) {
              var n,
                r = "";
              for (n = 0; n < 4; n += 1)
                r += t[(e >> (8 * n + 4)) & 15] + t[(e >> (8 * n)) & 15];
              return r;
            }
            function a(e) {
              var t;
              for (t = 0; t < e.length; t += 1) e[t] = s(e[t]);
              return e.join("");
            }
            function c(e) {
              return (
                /[\u0080-\uFFFF]/.test(e) &&
                  (e = unescape(encodeURIComponent(e))),
                e
              );
            }
            function u(e) {
              var t,
                n = [],
                r = e.length;
              for (t = 0; t < r - 1; t += 2)
                n.push(parseInt(e.substr(t, 2), 16));
              return String.fromCharCode.apply(String, n);
            }
            function f() {
              this.reset();
            }
            return (
              "5d41402abc4b2a76b9719d911017c592" !== a(o("hello")) &&
                function (e, t) {
                  var n = (65535 & e) + (65535 & t);
                  return (
                    (((e >> 16) + (t >> 16) + (n >> 16)) << 16) | (65535 & n)
                  );
                },
              "undefined" == typeof ArrayBuffer ||
                ArrayBuffer.prototype.slice ||
                (function () {
                  function t(e, t) {
                    return (e = 0 | e || 0) < 0
                      ? Math.max(e + t, 0)
                      : Math.min(e, t);
                  }
                  ArrayBuffer.prototype.slice = function (n, r) {
                    var i,
                      o,
                      s,
                      a,
                      c = this.byteLength,
                      u = t(n, c),
                      f = c;
                    return (
                      r !== e && (f = t(r, c)),
                      u > f
                        ? new ArrayBuffer(0)
                        : ((i = f - u),
                          (o = new ArrayBuffer(i)),
                          (s = new Uint8Array(o)),
                          (a = new Uint8Array(this, u, i)),
                          s.set(a),
                          o)
                    );
                  };
                })(),
              (f.prototype.append = function (e) {
                return this.appendBinary(c(e)), this;
              }),
              (f.prototype.appendBinary = function (e) {
                (this._buff += e), (this._length += e.length);
                var t,
                  i = this._buff.length;
                for (t = 64; t <= i; t += 64)
                  n(this._hash, r(this._buff.substring(t - 64, t)));
                return (this._buff = this._buff.substring(t - 64)), this;
              }),
              (f.prototype.end = function (e) {
                var t,
                  n,
                  r = this._buff,
                  i = r.length,
                  o = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                for (t = 0; t < i; t += 1)
                  o[t >> 2] |= r.charCodeAt(t) << (t % 4 << 3);
                return (
                  this._finish(o, i),
                  (n = a(this._hash)),
                  e && (n = u(n)),
                  this.reset(),
                  n
                );
              }),
              (f.prototype.reset = function () {
                return (
                  (this._buff = ""),
                  (this._length = 0),
                  (this._hash = [
                    1732584193, -271733879, -1732584194, 271733878,
                  ]),
                  this
                );
              }),
              (f.prototype.getState = function () {
                return {
                  buff: this._buff,
                  length: this._length,
                  hash: this._hash.slice(),
                };
              }),
              (f.prototype.setState = function (e) {
                return (
                  (this._buff = e.buff),
                  (this._length = e.length),
                  (this._hash = e.hash),
                  this
                );
              }),
              (f.prototype.destroy = function () {
                delete this._hash, delete this._buff, delete this._length;
              }),
              (f.prototype._finish = function (e, t) {
                var r,
                  i,
                  o,
                  s = t;
                if (((e[s >> 2] |= 128 << (s % 4 << 3)), s > 55))
                  for (n(this._hash, e), s = 0; s < 16; s += 1) e[s] = 0;
                (r = (r = 8 * this._length)
                  .toString(16)
                  .match(/(.*?)(.{0,8})$/)),
                  (i = parseInt(r[2], 16)),
                  (o = parseInt(r[1], 16) || 0),
                  (e[14] = i),
                  (e[15] = o),
                  n(this._hash, e);
              }),
              (f.hash = function (e, t) {
                return f.hashBinary(c(e), t);
              }),
              (f.hashBinary = function (e, t) {
                var n = a(o(e));
                return t ? u(n) : n;
              }),
              (f.ArrayBuffer = function () {
                this.reset();
              }),
              (f.ArrayBuffer.prototype.append = function (e) {
                var t,
                  r,
                  o,
                  s,
                  a,
                  c =
                    ((r = this._buff.buffer),
                    (o = e),
                    (s = !0),
                    (a = new Uint8Array(r.byteLength + o.byteLength)).set(
                      new Uint8Array(r)
                    ),
                    a.set(new Uint8Array(o), r.byteLength),
                    s ? a : a.buffer),
                  u = c.length;
                for (this._length += e.byteLength, t = 64; t <= u; t += 64)
                  n(this._hash, i(c.subarray(t - 64, t)));
                return (
                  (this._buff =
                    t - 64 < u
                      ? new Uint8Array(c.buffer.slice(t - 64))
                      : new Uint8Array(0)),
                  this
                );
              }),
              (f.ArrayBuffer.prototype.end = function (e) {
                var t,
                  n,
                  r = this._buff,
                  i = r.length,
                  o = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                for (t = 0; t < i; t += 1) o[t >> 2] |= r[t] << (t % 4 << 3);
                return (
                  this._finish(o, i),
                  (n = a(this._hash)),
                  e && (n = u(n)),
                  this.reset(),
                  n
                );
              }),
              (f.ArrayBuffer.prototype.reset = function () {
                return (
                  (this._buff = new Uint8Array(0)),
                  (this._length = 0),
                  (this._hash = [
                    1732584193, -271733879, -1732584194, 271733878,
                  ]),
                  this
                );
              }),
              (f.ArrayBuffer.prototype.getState = function () {
                var e,
                  t = f.prototype.getState.call(this);
                return (
                  (t.buff =
                    ((e = t.buff),
                    String.fromCharCode.apply(null, new Uint8Array(e)))),
                  t
                );
              }),
              (f.ArrayBuffer.prototype.setState = function (e) {
                return (
                  (e.buff = (function (e, t) {
                    var n,
                      r = e.length,
                      i = new ArrayBuffer(r),
                      o = new Uint8Array(i);
                    for (n = 0; n < r; n += 1) o[n] = e.charCodeAt(n);
                    return t ? o : i;
                  })(e.buff, !0)),
                  f.prototype.setState.call(this, e)
                );
              }),
              (f.ArrayBuffer.prototype.destroy = f.prototype.destroy),
              (f.ArrayBuffer.prototype._finish = f.prototype._finish),
              (f.ArrayBuffer.hash = function (e, t) {
                var r = a(
                  (function (e) {
                    var t,
                      r,
                      o,
                      s,
                      a,
                      c,
                      u = e.length,
                      f = [1732584193, -271733879, -1732584194, 271733878];
                    for (t = 64; t <= u; t += 64)
                      n(f, i(e.subarray(t - 64, t)));
                    for (
                      r = (e =
                        t - 64 < u ? e.subarray(t - 64) : new Uint8Array(0))
                        .length,
                        o = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        t = 0;
                      t < r;
                      t += 1
                    )
                      o[t >> 2] |= e[t] << (t % 4 << 3);
                    if (((o[t >> 2] |= 128 << (t % 4 << 3)), t > 55))
                      for (n(f, o), t = 0; t < 16; t += 1) o[t] = 0;
                    return (
                      (s = (s = 8 * u).toString(16).match(/(.*?)(.{0,8})$/)),
                      (a = parseInt(s[2], 16)),
                      (c = parseInt(s[1], 16) || 0),
                      (o[14] = a),
                      (o[15] = c),
                      n(f, o),
                      f
                    );
                  })(new Uint8Array(e))
                );
                return t ? u(r) : r;
              }),
              f
            );
          });
        },
        {},
      ],
      11: [
        function (e, t, n) {
          "use strict";
          Object.defineProperty(n, "__esModule", { value: !0 }),
            Object.defineProperty(n, "v1", {
              enumerable: !0,
              get: function () {
                return r.default;
              },
            }),
            Object.defineProperty(n, "v3", {
              enumerable: !0,
              get: function () {
                return i.default;
              },
            }),
            Object.defineProperty(n, "v4", {
              enumerable: !0,
              get: function () {
                return o.default;
              },
            }),
            Object.defineProperty(n, "v5", {
              enumerable: !0,
              get: function () {
                return s.default;
              },
            }),
            Object.defineProperty(n, "NIL", {
              enumerable: !0,
              get: function () {
                return a.default;
              },
            }),
            Object.defineProperty(n, "version", {
              enumerable: !0,
              get: function () {
                return c.default;
              },
            }),
            Object.defineProperty(n, "validate", {
              enumerable: !0,
              get: function () {
                return u.default;
              },
            }),
            Object.defineProperty(n, "stringify", {
              enumerable: !0,
              get: function () {
                return f.default;
              },
            }),
            Object.defineProperty(n, "parse", {
              enumerable: !0,
              get: function () {
                return l.default;
              },
            });
          var r = d(e(19)),
            i = d(e(20)),
            o = d(e(22)),
            s = d(e(23)),
            a = d(e(13)),
            c = d(e(25)),
            u = d(e(24)),
            f = d(e(18)),
            l = d(e(14));
          function d(e) {
            return e && e.__esModule ? e : { default: e };
          }
        },
        {
          13: 13,
          14: 14,
          18: 18,
          19: 19,
          20: 20,
          22: 22,
          23: 23,
          24: 24,
          25: 25,
        },
      ],
      12: [
        function (e, t, n) {
          "use strict";
          function r(e) {
            return 14 + (((e + 64) >>> 9) << 4) + 1;
          }
          function i(e, t) {
            const n = (65535 & e) + (65535 & t);
            return (((e >> 16) + (t >> 16) + (n >> 16)) << 16) | (65535 & n);
          }
          function o(e, t, n, r, o, s) {
            return i(
              ((a = i(i(t, e), i(r, s))) << (c = o)) | (a >>> (32 - c)),
              n
            );
            var a, c;
          }
          function s(e, t, n, r, i, s, a) {
            return o((t & n) | (~t & r), e, t, i, s, a);
          }
          function a(e, t, n, r, i, s, a) {
            return o((t & r) | (n & ~r), e, t, i, s, a);
          }
          function c(e, t, n, r, i, s, a) {
            return o(t ^ n ^ r, e, t, i, s, a);
          }
          function u(e, t, n, r, i, s, a) {
            return o(n ^ (t | ~r), e, t, i, s, a);
          }
          Object.defineProperty(n, "__esModule", { value: !0 }),
            (n.default = void 0);
          var f = function (e) {
            if ("string" == typeof e) {
              const t = unescape(encodeURIComponent(e));
              e = new Uint8Array(t.length);
              for (let n = 0; n < t.length; ++n) e[n] = t.charCodeAt(n);
            }
            return (function (e) {
              const t = [],
                n = 32 * e.length;
              for (let r = 0; r < n; r += 8) {
                const n = (e[r >> 5] >>> r % 32) & 255,
                  i = parseInt(
                    "0123456789abcdef".charAt((n >>> 4) & 15) +
                      "0123456789abcdef".charAt(15 & n),
                    16
                  );
                t.push(i);
              }
              return t;
            })(
              (function (e, t) {
                (e[t >> 5] |= 128 << t % 32), (e[r(t) - 1] = t);
                let n = 1732584193,
                  o = -271733879,
                  f = -1732584194,
                  l = 271733878;
                for (let t = 0; t < e.length; t += 16) {
                  const r = n,
                    d = o,
                    h = f,
                    p = l;
                  (n = s(n, o, f, l, e[t], 7, -680876936)),
                    (l = s(l, n, o, f, e[t + 1], 12, -389564586)),
                    (f = s(f, l, n, o, e[t + 2], 17, 606105819)),
                    (o = s(o, f, l, n, e[t + 3], 22, -1044525330)),
                    (n = s(n, o, f, l, e[t + 4], 7, -176418897)),
                    (l = s(l, n, o, f, e[t + 5], 12, 1200080426)),
                    (f = s(f, l, n, o, e[t + 6], 17, -1473231341)),
                    (o = s(o, f, l, n, e[t + 7], 22, -45705983)),
                    (n = s(n, o, f, l, e[t + 8], 7, 1770035416)),
                    (l = s(l, n, o, f, e[t + 9], 12, -1958414417)),
                    (f = s(f, l, n, o, e[t + 10], 17, -42063)),
                    (o = s(o, f, l, n, e[t + 11], 22, -1990404162)),
                    (n = s(n, o, f, l, e[t + 12], 7, 1804603682)),
                    (l = s(l, n, o, f, e[t + 13], 12, -40341101)),
                    (f = s(f, l, n, o, e[t + 14], 17, -1502002290)),
                    (o = s(o, f, l, n, e[t + 15], 22, 1236535329)),
                    (n = a(n, o, f, l, e[t + 1], 5, -165796510)),
                    (l = a(l, n, o, f, e[t + 6], 9, -1069501632)),
                    (f = a(f, l, n, o, e[t + 11], 14, 643717713)),
                    (o = a(o, f, l, n, e[t], 20, -373897302)),
                    (n = a(n, o, f, l, e[t + 5], 5, -701558691)),
                    (l = a(l, n, o, f, e[t + 10], 9, 38016083)),
                    (f = a(f, l, n, o, e[t + 15], 14, -660478335)),
                    (o = a(o, f, l, n, e[t + 4], 20, -405537848)),
                    (n = a(n, o, f, l, e[t + 9], 5, 568446438)),
                    (l = a(l, n, o, f, e[t + 14], 9, -1019803690)),
                    (f = a(f, l, n, o, e[t + 3], 14, -187363961)),
                    (o = a(o, f, l, n, e[t + 8], 20, 1163531501)),
                    (n = a(n, o, f, l, e[t + 13], 5, -1444681467)),
                    (l = a(l, n, o, f, e[t + 2], 9, -51403784)),
                    (f = a(f, l, n, o, e[t + 7], 14, 1735328473)),
                    (o = a(o, f, l, n, e[t + 12], 20, -1926607734)),
                    (n = c(n, o, f, l, e[t + 5], 4, -378558)),
                    (l = c(l, n, o, f, e[t + 8], 11, -2022574463)),
                    (f = c(f, l, n, o, e[t + 11], 16, 1839030562)),
                    (o = c(o, f, l, n, e[t + 14], 23, -35309556)),
                    (n = c(n, o, f, l, e[t + 1], 4, -1530992060)),
                    (l = c(l, n, o, f, e[t + 4], 11, 1272893353)),
                    (f = c(f, l, n, o, e[t + 7], 16, -155497632)),
                    (o = c(o, f, l, n, e[t + 10], 23, -1094730640)),
                    (n = c(n, o, f, l, e[t + 13], 4, 681279174)),
                    (l = c(l, n, o, f, e[t], 11, -358537222)),
                    (f = c(f, l, n, o, e[t + 3], 16, -722521979)),
                    (o = c(o, f, l, n, e[t + 6], 23, 76029189)),
                    (n = c(n, o, f, l, e[t + 9], 4, -640364487)),
                    (l = c(l, n, o, f, e[t + 12], 11, -421815835)),
                    (f = c(f, l, n, o, e[t + 15], 16, 530742520)),
                    (o = c(o, f, l, n, e[t + 2], 23, -995338651)),
                    (n = u(n, o, f, l, e[t], 6, -198630844)),
                    (l = u(l, n, o, f, e[t + 7], 10, 1126891415)),
                    (f = u(f, l, n, o, e[t + 14], 15, -1416354905)),
                    (o = u(o, f, l, n, e[t + 5], 21, -57434055)),
                    (n = u(n, o, f, l, e[t + 12], 6, 1700485571)),
                    (l = u(l, n, o, f, e[t + 3], 10, -1894986606)),
                    (f = u(f, l, n, o, e[t + 10], 15, -1051523)),
                    (o = u(o, f, l, n, e[t + 1], 21, -2054922799)),
                    (n = u(n, o, f, l, e[t + 8], 6, 1873313359)),
                    (l = u(l, n, o, f, e[t + 15], 10, -30611744)),
                    (f = u(f, l, n, o, e[t + 6], 15, -1560198380)),
                    (o = u(o, f, l, n, e[t + 13], 21, 1309151649)),
                    (n = u(n, o, f, l, e[t + 4], 6, -145523070)),
                    (l = u(l, n, o, f, e[t + 11], 10, -1120210379)),
                    (f = u(f, l, n, o, e[t + 2], 15, 718787259)),
                    (o = u(o, f, l, n, e[t + 9], 21, -343485551)),
                    (n = i(n, r)),
                    (o = i(o, d)),
                    (f = i(f, h)),
                    (l = i(l, p));
                }
                return [n, o, f, l];
              })(
                (function (e) {
                  if (0 === e.length) return [];
                  const t = 8 * e.length,
                    n = new Uint32Array(r(t));
                  for (let r = 0; r < t; r += 8)
                    n[r >> 5] |= (255 & e[r / 8]) << r % 32;
                  return n;
                })(e),
                8 * e.length
              )
            );
          };
          n.default = f;
        },
        {},
      ],
      13: [
        function (e, t, n) {
          "use strict";
          Object.defineProperty(n, "__esModule", { value: !0 }),
            (n.default = void 0);
          n.default = "00000000-0000-0000-0000-000000000000";
        },
        {},
      ],
      14: [
        function (e, t, n) {
          "use strict";
          Object.defineProperty(n, "__esModule", { value: !0 }),
            (n.default = void 0);
          var r,
            i = (r = e(24)) && r.__esModule ? r : { default: r };
          var o = function (e) {
            if (!(0, i.default)(e)) throw TypeError("Invalid UUID");
            let t;
            const n = new Uint8Array(16);
            return (
              (n[0] = (t = parseInt(e.slice(0, 8), 16)) >>> 24),
              (n[1] = (t >>> 16) & 255),
              (n[2] = (t >>> 8) & 255),
              (n[3] = 255 & t),
              (n[4] = (t = parseInt(e.slice(9, 13), 16)) >>> 8),
              (n[5] = 255 & t),
              (n[6] = (t = parseInt(e.slice(14, 18), 16)) >>> 8),
              (n[7] = 255 & t),
              (n[8] = (t = parseInt(e.slice(19, 23), 16)) >>> 8),
              (n[9] = 255 & t),
              (n[10] =
                ((t = parseInt(e.slice(24, 36), 16)) / 1099511627776) & 255),
              (n[11] = (t / 4294967296) & 255),
              (n[12] = (t >>> 24) & 255),
              (n[13] = (t >>> 16) & 255),
              (n[14] = (t >>> 8) & 255),
              (n[15] = 255 & t),
              n
            );
          };
          n.default = o;
        },
        { 24: 24 },
      ],
      15: [
        function (e, t, n) {
          "use strict";
          Object.defineProperty(n, "__esModule", { value: !0 }),
            (n.default = void 0);
          n.default =
            /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
        },
        {},
      ],
      16: [
        function (e, t, n) {
          "use strict";
          let r;
          Object.defineProperty(n, "__esModule", { value: !0 }),
            (n.default = function () {
              if (
                !r &&
                ((r =
                  ("undefined" != typeof crypto &&
                    crypto.getRandomValues &&
                    crypto.getRandomValues.bind(crypto)) ||
                  ("undefined" != typeof msCrypto &&
                    "function" == typeof msCrypto.getRandomValues &&
                    msCrypto.getRandomValues.bind(msCrypto))),
                !r)
              )
                throw new Error(
                  "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
                );
              return r(i);
            });
          const i = new Uint8Array(16);
        },
        {},
      ],
      17: [
        function (e, t, n) {
          "use strict";
          function r(e, t, n, r) {
            switch (e) {
              case 0:
                return (t & n) ^ (~t & r);
              case 1:
                return t ^ n ^ r;
              case 2:
                return (t & n) ^ (t & r) ^ (n & r);
              case 3:
                return t ^ n ^ r;
            }
          }
          function i(e, t) {
            return (e << t) | (e >>> (32 - t));
          }
          Object.defineProperty(n, "__esModule", { value: !0 }),
            (n.default = void 0);
          var o = function (e) {
            const t = [1518500249, 1859775393, 2400959708, 3395469782],
              n = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
            if ("string" == typeof e) {
              const t = unescape(encodeURIComponent(e));
              e = [];
              for (let n = 0; n < t.length; ++n) e.push(t.charCodeAt(n));
            } else Array.isArray(e) || (e = Array.prototype.slice.call(e));
            e.push(128);
            const o = e.length / 4 + 2,
              s = Math.ceil(o / 16),
              a = new Array(s);
            for (let t = 0; t < s; ++t) {
              const n = new Uint32Array(16);
              for (let r = 0; r < 16; ++r)
                n[r] =
                  (e[64 * t + 4 * r] << 24) |
                  (e[64 * t + 4 * r + 1] << 16) |
                  (e[64 * t + 4 * r + 2] << 8) |
                  e[64 * t + 4 * r + 3];
              a[t] = n;
            }
            (a[s - 1][14] = (8 * (e.length - 1)) / Math.pow(2, 32)),
              (a[s - 1][14] = Math.floor(a[s - 1][14])),
              (a[s - 1][15] = (8 * (e.length - 1)) & 4294967295);
            for (let e = 0; e < s; ++e) {
              const o = new Uint32Array(80);
              for (let t = 0; t < 16; ++t) o[t] = a[e][t];
              for (let e = 16; e < 80; ++e)
                o[e] = i(o[e - 3] ^ o[e - 8] ^ o[e - 14] ^ o[e - 16], 1);
              let s = n[0],
                c = n[1],
                u = n[2],
                f = n[3],
                l = n[4];
              for (let e = 0; e < 80; ++e) {
                const n = Math.floor(e / 20),
                  a = (i(s, 5) + r(n, c, u, f) + l + t[n] + o[e]) >>> 0;
                (l = f), (f = u), (u = i(c, 30) >>> 0), (c = s), (s = a);
              }
              (n[0] = (n[0] + s) >>> 0),
                (n[1] = (n[1] + c) >>> 0),
                (n[2] = (n[2] + u) >>> 0),
                (n[3] = (n[3] + f) >>> 0),
                (n[4] = (n[4] + l) >>> 0);
            }
            return [
              (n[0] >> 24) & 255,
              (n[0] >> 16) & 255,
              (n[0] >> 8) & 255,
              255 & n[0],
              (n[1] >> 24) & 255,
              (n[1] >> 16) & 255,
              (n[1] >> 8) & 255,
              255 & n[1],
              (n[2] >> 24) & 255,
              (n[2] >> 16) & 255,
              (n[2] >> 8) & 255,
              255 & n[2],
              (n[3] >> 24) & 255,
              (n[3] >> 16) & 255,
              (n[3] >> 8) & 255,
              255 & n[3],
              (n[4] >> 24) & 255,
              (n[4] >> 16) & 255,
              (n[4] >> 8) & 255,
              255 & n[4],
            ];
          };
          n.default = o;
        },
        {},
      ],
      18: [
        function (e, t, n) {
          "use strict";
          Object.defineProperty(n, "__esModule", { value: !0 }),
            (n.default = void 0);
          var r,
            i = (r = e(24)) && r.__esModule ? r : { default: r };
          const o = [];
          for (let e = 0; e < 256; ++e)
            o.push((e + 256).toString(16).substr(1));
          var s = function (e, t = 0) {
            const n = (
              o[e[t + 0]] +
              o[e[t + 1]] +
              o[e[t + 2]] +
              o[e[t + 3]] +
              "-" +
              o[e[t + 4]] +
              o[e[t + 5]] +
              "-" +
              o[e[t + 6]] +
              o[e[t + 7]] +
              "-" +
              o[e[t + 8]] +
              o[e[t + 9]] +
              "-" +
              o[e[t + 10]] +
              o[e[t + 11]] +
              o[e[t + 12]] +
              o[e[t + 13]] +
              o[e[t + 14]] +
              o[e[t + 15]]
            ).toLowerCase();
            if (!(0, i.default)(n))
              throw TypeError("Stringified UUID is invalid");
            return n;
          };
          n.default = s;
        },
        { 24: 24 },
      ],
      19: [
        function (e, t, n) {
          "use strict";
          Object.defineProperty(n, "__esModule", { value: !0 }),
            (n.default = void 0);
          var r = o(e(16)),
            i = o(e(18));
          function o(e) {
            return e && e.__esModule ? e : { default: e };
          }
          let s,
            a,
            c = 0,
            u = 0;
          var f = function (e, t, n) {
            let o = (t && n) || 0;
            const f = t || new Array(16);
            let l = (e = e || {}).node || s,
              d = void 0 !== e.clockseq ? e.clockseq : a;
            if (null == l || null == d) {
              const t = e.random || (e.rng || r.default)();
              null == l && (l = s = [1 | t[0], t[1], t[2], t[3], t[4], t[5]]),
                null == d && (d = a = 16383 & ((t[6] << 8) | t[7]));
            }
            let h = void 0 !== e.msecs ? e.msecs : Date.now(),
              p = void 0 !== e.nsecs ? e.nsecs : u + 1;
            const v = h - c + (p - u) / 1e4;
            if (
              (v < 0 && void 0 === e.clockseq && (d = (d + 1) & 16383),
              (v < 0 || h > c) && void 0 === e.nsecs && (p = 0),
              p >= 1e4)
            )
              throw new Error(
                "uuid.v1(): Can't create more than 10M uuids/sec"
              );
            (c = h), (u = p), (a = d), (h += 122192928e5);
            const y = (1e4 * (268435455 & h) + p) % 4294967296;
            (f[o++] = (y >>> 24) & 255),
              (f[o++] = (y >>> 16) & 255),
              (f[o++] = (y >>> 8) & 255),
              (f[o++] = 255 & y);
            const _ = ((h / 4294967296) * 1e4) & 268435455;
            (f[o++] = (_ >>> 8) & 255),
              (f[o++] = 255 & _),
              (f[o++] = ((_ >>> 24) & 15) | 16),
              (f[o++] = (_ >>> 16) & 255),
              (f[o++] = (d >>> 8) | 128),
              (f[o++] = 255 & d);
            for (let e = 0; e < 6; ++e) f[o + e] = l[e];
            return t || (0, i.default)(f);
          };
          n.default = f;
        },
        { 16: 16, 18: 18 },
      ],
      20: [
        function (e, t, n) {
          "use strict";
          Object.defineProperty(n, "__esModule", { value: !0 }),
            (n.default = void 0);
          var r = o(e(21)),
            i = o(e(12));
          function o(e) {
            return e && e.__esModule ? e : { default: e };
          }
          var s = (0, r.default)("v3", 48, i.default);
          n.default = s;
        },
        { 12: 12, 21: 21 },
      ],
      21: [
        function (e, t, n) {
          "use strict";
          Object.defineProperty(n, "__esModule", { value: !0 }),
            (n.default = function (e, t, n) {
              function o(e, o, s, a) {
                if (
                  ("string" == typeof e &&
                    (e = (function (e) {
                      e = unescape(encodeURIComponent(e));
                      const t = [];
                      for (let n = 0; n < e.length; ++n)
                        t.push(e.charCodeAt(n));
                      return t;
                    })(e)),
                  "string" == typeof o && (o = (0, i.default)(o)),
                  16 !== o.length)
                )
                  throw TypeError(
                    "Namespace must be array-like (16 iterable integer values, 0-255)"
                  );
                let c = new Uint8Array(16 + e.length);
                if (
                  (c.set(o),
                  c.set(e, o.length),
                  (c = n(c)),
                  (c[6] = (15 & c[6]) | t),
                  (c[8] = (63 & c[8]) | 128),
                  s)
                ) {
                  a = a || 0;
                  for (let e = 0; e < 16; ++e) s[a + e] = c[e];
                  return s;
                }
                return (0, r.default)(c);
              }
              try {
                o.name = e;
              } catch (e) {}
              return (o.DNS = s), (o.URL = a), o;
            }),
            (n.URL = n.DNS = void 0);
          var r = o(e(18)),
            i = o(e(14));
          function o(e) {
            return e && e.__esModule ? e : { default: e };
          }
          const s = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
          n.DNS = s;
          const a = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
          n.URL = a;
        },
        { 14: 14, 18: 18 },
      ],
      22: [
        function (e, t, n) {
          "use strict";
          Object.defineProperty(n, "__esModule", { value: !0 }),
            (n.default = void 0);
          var r = o(e(16)),
            i = o(e(18));
          function o(e) {
            return e && e.__esModule ? e : { default: e };
          }
          var s = function (e, t, n) {
            const o = (e = e || {}).random || (e.rng || r.default)();
            if (((o[6] = (15 & o[6]) | 64), (o[8] = (63 & o[8]) | 128), t)) {
              n = n || 0;
              for (let e = 0; e < 16; ++e) t[n + e] = o[e];
              return t;
            }
            return (0, i.default)(o);
          };
          n.default = s;
        },
        { 16: 16, 18: 18 },
      ],
      23: [
        function (e, t, n) {
          "use strict";
          Object.defineProperty(n, "__esModule", { value: !0 }),
            (n.default = void 0);
          var r = o(e(21)),
            i = o(e(17));
          function o(e) {
            return e && e.__esModule ? e : { default: e };
          }
          var s = (0, r.default)("v5", 80, i.default);
          n.default = s;
        },
        { 17: 17, 21: 21 },
      ],
      24: [
        function (e, t, n) {
          "use strict";
          Object.defineProperty(n, "__esModule", { value: !0 }),
            (n.default = void 0);
          var r,
            i = (r = e(15)) && r.__esModule ? r : { default: r };
          var o = function (e) {
            return "string" == typeof e && i.default.test(e);
          };
          n.default = o;
        },
        { 15: 15 },
      ],
      25: [
        function (e, t, n) {
          "use strict";
          Object.defineProperty(n, "__esModule", { value: !0 }),
            (n.default = void 0);
          var r,
            i = (r = e(24)) && r.__esModule ? r : { default: r };
          var o = function (e) {
            if (!(0, i.default)(e)) throw TypeError("Invalid UUID");
            return parseInt(e.substr(14, 1), 16);
          };
          n.default = o;
        },
        { 24: 24 },
      ],
      26: [
        function (e, t, n) {
          "use strict";
          function r(e, t, n) {
            var r = n[n.length - 1];
            e === r.element && (n.pop(), (r = n[n.length - 1]));
            var i = r.element,
              o = r.index;
            if (Array.isArray(i)) i.push(e);
            else if (o === t.length - 2) {
              i[t.pop()] = e;
            } else t.push(e);
          }
          (n.stringify = function (e) {
            var t = [];
            t.push({ obj: e });
            for (var n, r, i, o, s, a, c, u, f, l, d = ""; (n = t.pop()); )
              if (((r = n.obj), (d += n.prefix || ""), (i = n.val || "")))
                d += i;
              else if ("object" != typeof r)
                d += void 0 === r ? null : JSON.stringify(r);
              else if (null === r) d += "null";
              else if (Array.isArray(r)) {
                for (t.push({ val: "]" }), o = r.length - 1; o >= 0; o--)
                  (s = 0 === o ? "" : ","), t.push({ obj: r[o], prefix: s });
                t.push({ val: "[" });
              } else {
                for (c in ((a = []), r)) r.hasOwnProperty(c) && a.push(c);
                for (t.push({ val: "}" }), o = a.length - 1; o >= 0; o--)
                  (f = r[(u = a[o])]),
                    (l = o > 0 ? "," : ""),
                    (l += JSON.stringify(u) + ":"),
                    t.push({ obj: f, prefix: l });
                t.push({ val: "{" });
              }
            return d;
          }),
            (n.parse = function (e) {
              for (var t, n, i, o, s, a, c, u, f, l = [], d = [], h = 0; ; )
                if ("}" !== (t = e[h++]) && "]" !== t && void 0 !== t)
                  switch (t) {
                    case " ":
                    case "\t":
                    case "\n":
                    case ":":
                    case ",":
                      break;
                    case "n":
                      (h += 3), r(null, l, d);
                      break;
                    case "t":
                      (h += 3), r(!0, l, d);
                      break;
                    case "f":
                      (h += 4), r(!1, l, d);
                      break;
                    case "0":
                    case "1":
                    case "2":
                    case "3":
                    case "4":
                    case "5":
                    case "6":
                    case "7":
                    case "8":
                    case "9":
                    case "-":
                      for (n = "", h--; ; ) {
                        if (((i = e[h++]), !/[\d\.\-e\+]/.test(i))) {
                          h--;
                          break;
                        }
                        n += i;
                      }
                      r(parseFloat(n), l, d);
                      break;
                    case '"':
                      for (
                        o = "", s = void 0, a = 0;
                        '"' !== (c = e[h++]) || ("\\" === s && a % 2 == 1);

                      )
                        (o += c), "\\" === (s = c) ? a++ : (a = 0);
                      r(JSON.parse('"' + o + '"'), l, d);
                      break;
                    case "[":
                      (u = { element: [], index: l.length }),
                        l.push(u.element),
                        d.push(u);
                      break;
                    case "{":
                      (f = { element: {}, index: l.length }),
                        l.push(f.element),
                        d.push(f);
                      break;
                    default:
                      throw new Error(
                        "unexpectedly reached end of input: " + t
                      );
                  }
                else {
                  if (1 === l.length) return l.pop();
                  r(l.pop(), l, d);
                }
            });
        },
        {},
      ],
      27: [
        function (e, t, n) {
          (function (n) {
            (function () {
              "use strict";
              function r(e) {
                return e && "object" == typeof e && "default" in e
                  ? e.default
                  : e;
              }
              var i,
                o,
                s = r(e(3)),
                a = r(e(10)),
                c = e(11),
                u = r(e(26)),
                f = r(e(2));
              function l(e) {
                return "$" + e;
              }
              function d(e) {
                return e.substring(1);
              }
              function h() {
                this._store = {};
              }
              function p(e) {
                if (((this._store = new h()), e && Array.isArray(e)))
                  for (var t = 0, n = e.length; t < n; t++) this.add(e[t]);
              }
              function v(e) {
                if (e instanceof ArrayBuffer)
                  return (function (e) {
                    if ("function" == typeof e.slice) return e.slice(0);
                    var t = new ArrayBuffer(e.byteLength),
                      n = new Uint8Array(t),
                      r = new Uint8Array(e);
                    return n.set(r), t;
                  })(e);
                var t = e.size,
                  n = e.type;
                return "function" == typeof e.slice
                  ? e.slice(0, t, n)
                  : e.webkitSlice(0, t, n);
              }
              (h.prototype.get = function (e) {
                var t = l(e);
                return this._store[t];
              }),
                (h.prototype.set = function (e, t) {
                  var n = l(e);
                  return (this._store[n] = t), !0;
                }),
                (h.prototype.has = function (e) {
                  return l(e) in this._store;
                }),
                (h.prototype.keys = function () {
                  return Object.keys(this._store).map((e) => d(e));
                }),
                (h.prototype.delete = function (e) {
                  var t = l(e),
                    n = t in this._store;
                  return delete this._store[t], n;
                }),
                (h.prototype.forEach = function (e) {
                  for (
                    var t = Object.keys(this._store), n = 0, r = t.length;
                    n < r;
                    n++
                  ) {
                    var i = t[n];
                    e(this._store[i], (i = d(i)));
                  }
                }),
                Object.defineProperty(h.prototype, "size", {
                  get: function () {
                    return Object.keys(this._store).length;
                  },
                }),
                (p.prototype.add = function (e) {
                  return this._store.set(e, !0);
                }),
                (p.prototype.has = function (e) {
                  return this._store.has(e);
                }),
                (p.prototype.forEach = function (e) {
                  this._store.forEach(function (t, n) {
                    e(n);
                  });
                }),
                Object.defineProperty(p.prototype, "size", {
                  get: function () {
                    return this._store.size;
                  },
                }),
                !(function () {
                  if (
                    "undefined" == typeof Symbol ||
                    "undefined" == typeof Map ||
                    "undefined" == typeof Set
                  )
                    return !1;
                  var e = Object.getOwnPropertyDescriptor(Map, Symbol.species);
                  return e && "get" in e && Map[Symbol.species] === Map;
                })()
                  ? ((i = p), (o = h))
                  : ((i = Set), (o = Map));
              var y = Function.prototype.toString,
                _ = y.call(Object);
              function g(e) {
                var t, n, r;
                if (!e || "object" != typeof e) return e;
                if (Array.isArray(e)) {
                  for (t = [], n = 0, r = e.length; n < r; n++) t[n] = g(e[n]);
                  return t;
                }
                if (e instanceof Date && isFinite(e)) return e.toISOString();
                if (
                  (function (e) {
                    return (
                      ("undefined" != typeof ArrayBuffer &&
                        e instanceof ArrayBuffer) ||
                      ("undefined" != typeof Blob && e instanceof Blob)
                    );
                  })(e)
                )
                  return v(e);
                if (
                  !(function (e) {
                    var t = Object.getPrototypeOf(e);
                    if (null === t) return !0;
                    var n = t.constructor;
                    return (
                      "function" == typeof n && n instanceof n && y.call(n) == _
                    );
                  })(e)
                )
                  return e;
                for (n in ((t = {}), e))
                  if (Object.prototype.hasOwnProperty.call(e, n)) {
                    var i = g(e[n]);
                    void 0 !== i && (t[n] = i);
                  }
                return t;
              }
              function m(e) {
                var t = !1;
                return function (...n) {
                  if (t) throw new Error("once called more than once");
                  (t = !0), e.apply(this, n);
                };
              }
              function b(e) {
                return function (...t) {
                  t = g(t);
                  var n = this,
                    r = "function" == typeof t[t.length - 1] && t.pop(),
                    i = new Promise(function (r, i) {
                      var o;
                      try {
                        var s = m(function (e, t) {
                          e ? i(e) : r(t);
                        });
                        t.push(s),
                          (o = e.apply(n, t)) &&
                            "function" == typeof o.then &&
                            r(o);
                      } catch (e) {
                        i(e);
                      }
                    });
                  return (
                    r &&
                      i.then(function (e) {
                        r(null, e);
                      }, r),
                    i
                  );
                };
              }
              function w(e, t) {
                return b(function (...n) {
                  if (this._closed)
                    return Promise.reject(new Error("database is closed"));
                  if (this._destroyed)
                    return Promise.reject(new Error("database is destroyed"));
                  var r = this;
                  return (
                    (function (e, t, n) {
                      if (e.constructor.listeners("debug").length) {
                        for (
                          var r = ["api", e.name, t], i = 0;
                          i < n.length - 1;
                          i++
                        )
                          r.push(n[i]);
                        e.constructor.emit("debug", r);
                        var o = n[n.length - 1];
                        n[n.length - 1] = function (n, r) {
                          var i = ["api", e.name, t];
                          (i = i.concat(n ? ["error", n] : ["success", r])),
                            e.constructor.emit("debug", i),
                            o(n, r);
                        };
                      }
                    })(r, e, n),
                    this.taskqueue.isReady
                      ? t.apply(this, n)
                      : new Promise(function (t, i) {
                          r.taskqueue.addTask(function (o) {
                            o ? i(o) : t(r[e].apply(r, n));
                          });
                        })
                  );
                });
              }
              function k(e, t) {
                for (var n = {}, r = 0, i = t.length; r < i; r++) {
                  var o = t[r];
                  o in e && (n[o] = e[o]);
                }
                return n;
              }
              var j;
              function q(e) {
                return e;
              }
              function O(e) {
                return [{ ok: e }];
              }
              function A(e, t, n) {
                var r = t.docs,
                  i = new o();
                r.forEach(function (e) {
                  i.has(e.id) ? i.get(e.id).push(e) : i.set(e.id, [e]);
                });
                var s = i.size,
                  a = 0,
                  c = new Array(s);
                function u() {
                  var e;
                  ++a === s &&
                    ((e = []),
                    c.forEach(function (t) {
                      t.docs.forEach(function (n) {
                        e.push({ id: t.id, docs: [n] });
                      });
                    }),
                    n(null, { results: e }));
                }
                var f = [];
                i.forEach(function (e, t) {
                  f.push(t);
                });
                var l = 0;
                function d() {
                  if (!(l >= f.length)) {
                    var n = Math.min(l + 6, f.length),
                      r = f.slice(l, n);
                    !(function (n, r) {
                      n.forEach(function (n, o) {
                        var s = r + o,
                          a = i.get(n),
                          f = k(a[0], ["atts_since", "attachments"]);
                        (f.open_revs = a.map(function (e) {
                          return e.rev;
                        })),
                          (f.open_revs = f.open_revs.filter(q));
                        var l = q;
                        0 === f.open_revs.length &&
                          (delete f.open_revs, (l = O)),
                          [
                            "revs",
                            "attachments",
                            "binary",
                            "ajax",
                            "latest",
                          ].forEach(function (e) {
                            e in t && (f[e] = t[e]);
                          }),
                          e.get(n, f, function (e, t) {
                            var r, i, o;
                            (r = e ? [{ error: e }] : l(t)),
                              (i = n),
                              (o = r),
                              (c[s] = { id: i, docs: o }),
                              u(),
                              d();
                          });
                      });
                    })(r, l),
                      (l += r.length);
                  }
                }
                d();
              }
              try {
                localStorage.setItem("_pouch_check_localstorage", 1),
                  (j = !!localStorage.getItem("_pouch_check_localstorage"));
              } catch (e) {
                j = !1;
              }
              function S() {
                return j;
              }
              function x(e) {
                if (
                  "undefined" != typeof console &&
                  "function" == typeof console[e]
                ) {
                  var t = Array.prototype.slice.call(arguments, 1);
                  console[e].apply(console, t);
                }
              }
              function E(e) {
                var t = 0;
                return (
                  e || (t = 2e3),
                  (function (e, t) {
                    return (
                      (e = parseInt(e, 10) || 0),
                      (t = parseInt(t, 10)) != t || t <= e
                        ? (t = (e || 1) << 1)
                        : (t += 1),
                      t > 6e5 && ((e = 3e5), (t = 6e5)),
                      ~~((t - e) * Math.random() + e)
                    );
                  })(e, t)
                );
              }
              function P(e, t) {
                x("info", "The above " + e + " is totally normal. " + t);
              }
              var C =
                "function" == typeof Object.assign
                  ? Object.assign
                  : function (e) {
                      for (
                        var t = Object(e), n = 1;
                        n < arguments.length;
                        n++
                      ) {
                        var r = arguments[n];
                        if (null != r)
                          for (var i in r)
                            Object.prototype.hasOwnProperty.call(r, i) &&
                              (t[i] = r[i]);
                      }
                      return t;
                    };
              class $ extends Error {
                constructor(e, t, n) {
                  super(),
                    (this.status = e),
                    (this.name = t),
                    (this.message = n),
                    (this.error = !0);
                }
                toString() {
                  return JSON.stringify({
                    status: this.status,
                    name: this.name,
                    message: this.message,
                    reason: this.reason,
                  });
                }
              }
              new $(401, "unauthorized", "Name or password is incorrect.");
              var L = new $(400, "bad_request", "Missing JSON list of 'docs'"),
                D = new $(404, "not_found", "missing"),
                I = new $(409, "conflict", "Document update conflict"),
                T = new $(
                  400,
                  "bad_request",
                  "_id field must contain a string"
                ),
                B = new $(412, "missing_id", "_id is required for puts"),
                M = new $(
                  400,
                  "bad_request",
                  "Only reserved document ids may start with underscore."
                ),
                R =
                  (new $(412, "precondition_failed", "Database not open"),
                  new $(
                    500,
                    "unknown_error",
                    "Database encountered an unknown error"
                  )),
                N = new $(500, "badarg", "Some query argument is invalid"),
                U =
                  (new $(400, "invalid_request", "Request was invalid"),
                  new $(
                    400,
                    "query_parse_error",
                    "Some query parameter is invalid"
                  )),
                F = new $(500, "doc_validation", "Bad special document member"),
                K = new $(
                  400,
                  "bad_request",
                  "Something wrong with the request"
                ),
                J = new $(400, "bad_request", "Document must be a JSON object"),
                z =
                  (new $(404, "not_found", "Database not found"),
                  new $(500, "indexed_db_went_bad", "unknown")),
                V =
                  (new $(500, "web_sql_went_bad", "unknown"),
                  new $(500, "levelDB_went_went_bad", "unknown"),
                  new $(
                    403,
                    "forbidden",
                    "Forbidden by design doc validate_doc_update function"
                  ),
                  new $(400, "bad_request", "Invalid rev format")),
                G =
                  (new $(
                    412,
                    "file_exists",
                    "The database could not be created, the file already exists."
                  ),
                  new $(
                    412,
                    "missing_stub",
                    "A pre-existing attachment stub wasn't found"
                  ));
              new $(413, "invalid_url", "Provided URL is invalid");
              function Q(e, t) {
                function n(t) {
                  for (
                    var n = Object.getOwnPropertyNames(e), r = 0, i = n.length;
                    r < i;
                    r++
                  )
                    "function" != typeof e[n[r]] && (this[n[r]] = e[n[r]]);
                  void 0 === this.stack && (this.stack = new Error().stack),
                    void 0 !== t && (this.reason = t);
                }
                return (n.prototype = $.prototype), new n(t);
              }
              function W(e) {
                if ("object" != typeof e) {
                  var t = e;
                  (e = R).data = t;
                }
                return (
                  "error" in e &&
                    "conflict" === e.error &&
                    ((e.name = "conflict"), (e.status = 409)),
                  "name" in e || (e.name = e.error || "unknown"),
                  "status" in e || (e.status = 500),
                  "message" in e || (e.message = e.message || e.reason),
                  "stack" in e || (e.stack = new Error().stack),
                  e
                );
              }
              function Y(e) {
                var t = {},
                  n = e.filter && "function" == typeof e.filter;
                return (
                  (t.query = e.query_params),
                  function (r) {
                    r.doc || (r.doc = {});
                    var i =
                      n &&
                      (function (e, t, n) {
                        try {
                          return !e(t, n);
                        } catch (e) {
                          var r = "Filter function threw: " + e.toString();
                          return Q(K, r);
                        }
                      })(e.filter, r.doc, t);
                    if ("object" == typeof i) return i;
                    if (i) return !1;
                    if (e.include_docs) {
                      if (!e.attachments)
                        for (var o in r.doc._attachments)
                          Object.prototype.hasOwnProperty.call(
                            r.doc._attachments,
                            o
                          ) && (r.doc._attachments[o].stub = !0);
                    } else delete r.doc;
                    return !0;
                  }
                );
              }
              function H(e) {
                for (var t = [], n = 0, r = e.length; n < r; n++)
                  t = t.concat(e[n]);
                return t;
              }
              function X(e) {
                var t;
                if (
                  (e
                    ? "string" != typeof e
                      ? (t = Q(T))
                      : /^_/.test(e) &&
                        !/^_(design|local)/.test(e) &&
                        (t = Q(M))
                    : (t = Q(B)),
                  t)
                )
                  throw t;
              }
              function Z(e) {
                return "boolean" == typeof e._remote
                  ? e._remote
                  : "function" == typeof e.type &&
                      (x(
                        "warn",
                        "db.type() is deprecated and will be removed in a future version of PouchDB"
                      ),
                      "http" === e.type());
              }
              function ee(e) {
                if (!e) return null;
                var t = e.split("/");
                return 2 === t.length ? t : 1 === t.length ? [e, e] : null;
              }
              function te(e) {
                var t = ee(e);
                return t ? t.join("/") : null;
              }
              var ne = [
                  "source",
                  "protocol",
                  "authority",
                  "userInfo",
                  "user",
                  "password",
                  "host",
                  "port",
                  "relative",
                  "path",
                  "directory",
                  "file",
                  "query",
                  "anchor",
                ],
                re = /(?:^|&)([^&=]*)=?([^&]*)/g,
                ie =
                  /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
              function oe(e) {
                for (var t = ie.exec(e), n = {}, r = 14; r--; ) {
                  var i = ne[r],
                    o = t[r] || "",
                    s = -1 !== ["user", "password"].indexOf(i);
                  n[i] = s ? decodeURIComponent(o) : o;
                }
                return (
                  (n.queryKey = {}),
                  n[ne[12]].replace(re, function (e, t, r) {
                    t && (n.queryKey[t] = r);
                  }),
                  n
                );
              }
              function se(e, t) {
                var n = [],
                  r = [];
                for (var i in t)
                  Object.prototype.hasOwnProperty.call(t, i) &&
                    (n.push(i), r.push(t[i]));
                return n.push(e), Function.apply(null, n).apply(null, r);
              }
              function ae(e, t, n) {
                return e
                  .get(t)
                  .catch(function (e) {
                    if (404 !== e.status) throw e;
                    return {};
                  })
                  .then(function (r) {
                    var i = r._rev,
                      o = n(r);
                    return o
                      ? ((o._id = t),
                        (o._rev = i),
                        (function (e, t, n) {
                          return e.put(t).then(
                            function (e) {
                              return { updated: !0, rev: e.rev };
                            },
                            function (r) {
                              if (409 !== r.status) throw r;
                              return ae(e, t._id, n);
                            }
                          );
                        })(e, o, n))
                      : { updated: !1, rev: i };
                  });
              }
              var ce = function (e) {
                  return atob(e);
                },
                ue = function (e) {
                  return btoa(e);
                };
              function fe(e, t) {
                (e = e || []), (t = t || {});
                try {
                  return new Blob(e, t);
                } catch (i) {
                  if ("TypeError" !== i.name) throw i;
                  for (
                    var n = new (
                        "undefined" != typeof BlobBuilder
                          ? BlobBuilder
                          : "undefined" != typeof MSBlobBuilder
                          ? MSBlobBuilder
                          : "undefined" != typeof MozBlobBuilder
                          ? MozBlobBuilder
                          : WebKitBlobBuilder
                      )(),
                      r = 0;
                    r < e.length;
                    r += 1
                  )
                    n.append(e[r]);
                  return n.getBlob(t.type);
                }
              }
              function le(e) {
                for (
                  var t = e.length,
                    n = new ArrayBuffer(t),
                    r = new Uint8Array(n),
                    i = 0;
                  i < t;
                  i++
                )
                  r[i] = e.charCodeAt(i);
                return n;
              }
              function de(e, t) {
                return fe([le(e)], { type: t });
              }
              function he(e, t) {
                return de(ce(e), t);
              }
              function pe(e, t) {
                var n = new FileReader(),
                  r = "function" == typeof n.readAsBinaryString;
                (n.onloadend = function (e) {
                  var n = e.target.result || "";
                  if (r) return t(n);
                  t(
                    (function (e) {
                      for (
                        var t = "",
                          n = new Uint8Array(e),
                          r = n.byteLength,
                          i = 0;
                        i < r;
                        i++
                      )
                        t += String.fromCharCode(n[i]);
                      return t;
                    })(n)
                  );
                }),
                  r ? n.readAsBinaryString(e) : n.readAsArrayBuffer(e);
              }
              function ve(e, t) {
                pe(e, function (e) {
                  t(e);
                });
              }
              function ye(e, t) {
                ve(e, function (e) {
                  t(ue(e));
                });
              }
              var _e = self.setImmediate || self.setTimeout;
              function ge(e, t, n, r, i) {
                (n > 0 || r < t.size) &&
                  (t = (function (e, t, n) {
                    return e.webkitSlice ? e.webkitSlice(t, n) : e.slice(t, n);
                  })(t, n, r)),
                  (function (e, t) {
                    var n = new FileReader();
                    (n.onloadend = function (e) {
                      var n = e.target.result || new ArrayBuffer(0);
                      t(n);
                    }),
                      n.readAsArrayBuffer(e);
                  })(t, function (t) {
                    e.append(t), i();
                  });
              }
              function me(e, t, n, r, i) {
                (n > 0 || r < t.length) && (t = t.substring(n, r)),
                  e.appendBinary(t),
                  i();
              }
              function be(e, t) {
                var n = "string" == typeof e,
                  r = n ? e.length : e.size,
                  i = Math.min(32768, r),
                  o = Math.ceil(r / i),
                  s = 0,
                  c = n ? new a() : new a.ArrayBuffer(),
                  u = n ? me : ge;
                function f() {
                  _e(d);
                }
                function l() {
                  var e = (function (e) {
                    return ue(e);
                  })(c.end(!0));
                  t(e), c.destroy();
                }
                function d() {
                  var t = s * i,
                    n = t + i;
                  s++, u(c, e, t, n, s < o ? f : l);
                }
                d();
              }
              function we(e) {
                return a.hash(e);
              }
              function ke(e, t) {
                if (!t) return c.v4().replace(/-/g, "").toLowerCase();
                var n = C({}, e);
                return delete n._rev_tree, we(JSON.stringify(n));
              }
              var je = c.v4;
              function qe(e) {
                for (var t, n, r, i, o = e.rev_tree.slice(); (i = o.pop()); ) {
                  var s = i.ids,
                    a = s[2],
                    c = i.pos;
                  if (a.length)
                    for (var u = 0, f = a.length; u < f; u++)
                      o.push({ pos: c + 1, ids: a[u] });
                  else {
                    var l = !!s[1].deleted,
                      d = s[0];
                    (t && !(r !== l ? r : n !== c ? n < c : t < d)) ||
                      ((t = d), (n = c), (r = l));
                  }
                }
                return n + "-" + t;
              }
              function Oe(e, t) {
                for (var n, r = e.slice(); (n = r.pop()); )
                  for (
                    var i = n.pos,
                      o = n.ids,
                      s = o[2],
                      a = t(0 === s.length, i, o[0], n.ctx, o[1]),
                      c = 0,
                      u = s.length;
                    c < u;
                    c++
                  )
                    r.push({ pos: i + 1, ids: s[c], ctx: a });
              }
              function Ae(e, t) {
                return e.pos - t.pos;
              }
              function Se(e) {
                var t = [];
                Oe(e, function (e, n, r, i, o) {
                  e && t.push({ rev: n + "-" + r, pos: n, opts: o });
                }),
                  t.sort(Ae).reverse();
                for (var n = 0, r = t.length; n < r; n++) delete t[n].pos;
                return t;
              }
              function xe(e) {
                for (
                  var t = qe(e),
                    n = Se(e.rev_tree),
                    r = [],
                    i = 0,
                    o = n.length;
                  i < o;
                  i++
                ) {
                  var s = n[i];
                  s.rev === t || s.opts.deleted || r.push(s.rev);
                }
                return r;
              }
              function Ee(e) {
                for (var t, n = [], r = e.slice(); (t = r.pop()); ) {
                  var i = t.pos,
                    o = t.ids,
                    s = o[0],
                    a = o[1],
                    c = o[2],
                    u = 0 === c.length,
                    f = t.history ? t.history.slice() : [];
                  f.push({ id: s, opts: a }),
                    u && n.push({ pos: i + 1 - f.length, ids: f });
                  for (var l = 0, d = c.length; l < d; l++)
                    r.push({ pos: i + 1, ids: c[l], history: f });
                }
                return n.reverse();
              }
              function Pe(e, t) {
                return e.pos - t.pos;
              }
              function Ce(e, t, n) {
                var r = (function (e, t, n) {
                  for (var r, i = 0, o = e.length; i < o; )
                    n(e[(r = (i + o) >>> 1)], t) < 0 ? (i = r + 1) : (o = r);
                  return i;
                })(e, t, n);
                e.splice(r, 0, t);
              }
              function $e(e, t) {
                for (var n, r, i = t, o = e.length; i < o; i++) {
                  var s = e[i],
                    a = [s.id, s.opts, []];
                  r ? (r[2].push(a), (r = a)) : (n = r = a);
                }
                return n;
              }
              function Le(e, t) {
                return e[0] < t[0] ? -1 : 1;
              }
              function De(e, t) {
                for (var n = [{ tree1: e, tree2: t }], r = !1; n.length > 0; ) {
                  var i = n.pop(),
                    o = i.tree1,
                    s = i.tree2;
                  (o[1].status || s[1].status) &&
                    (o[1].status =
                      "available" === o[1].status || "available" === s[1].status
                        ? "available"
                        : "missing");
                  for (var a = 0; a < s[2].length; a++)
                    if (o[2][0]) {
                      for (var c = !1, u = 0; u < o[2].length; u++)
                        o[2][u][0] === s[2][a][0] &&
                          (n.push({ tree1: o[2][u], tree2: s[2][a] }),
                          (c = !0));
                      c || ((r = "new_branch"), Ce(o[2], s[2][a], Le));
                    } else (r = "new_leaf"), (o[2][0] = s[2][a]);
                }
                return { conflicts: r, tree: e };
              }
              function Ie(e, t, n) {
                var r,
                  i = [],
                  o = !1,
                  s = !1;
                if (!e.length) return { tree: [t], conflicts: "new_leaf" };
                for (var a = 0, c = e.length; a < c; a++) {
                  var u = e[a];
                  if (u.pos === t.pos && u.ids[0] === t.ids[0])
                    (r = De(u.ids, t.ids)),
                      i.push({ pos: u.pos, ids: r.tree }),
                      (o = o || r.conflicts),
                      (s = !0);
                  else if (!0 !== n) {
                    var f = u.pos < t.pos ? u : t,
                      l = u.pos < t.pos ? t : u,
                      d = l.pos - f.pos,
                      h = [],
                      p = [];
                    for (
                      p.push({
                        ids: f.ids,
                        diff: d,
                        parent: null,
                        parentIdx: null,
                      });
                      p.length > 0;

                    ) {
                      var v = p.pop();
                      if (0 !== v.diff)
                        for (var y = v.ids[2], _ = 0, g = y.length; _ < g; _++)
                          p.push({
                            ids: y[_],
                            diff: v.diff - 1,
                            parent: v.ids,
                            parentIdx: _,
                          });
                      else v.ids[0] === l.ids[0] && h.push(v);
                    }
                    var m = h[0];
                    m
                      ? ((r = De(m.ids, l.ids)),
                        (m.parent[2][m.parentIdx] = r.tree),
                        i.push({ pos: f.pos, ids: f.ids }),
                        (o = o || r.conflicts),
                        (s = !0))
                      : i.push(u);
                  } else i.push(u);
                }
                return (
                  s || i.push(t),
                  i.sort(Pe),
                  { tree: i, conflicts: o || "internal_node" }
                );
              }
              function Te(e, t, n) {
                var r = Ie(e, t),
                  i = (function (e, t) {
                    for (var n, r, i = Ee(e), o = 0, s = i.length; o < s; o++) {
                      var a,
                        c = i[o],
                        u = c.ids;
                      if (u.length > t) {
                        n || (n = {});
                        var f = u.length - t;
                        a = { pos: c.pos + f, ids: $e(u, f) };
                        for (var l = 0; l < f; l++) {
                          var d = c.pos + l + "-" + u[l].id;
                          n[d] = !0;
                        }
                      } else a = { pos: c.pos, ids: $e(u, 0) };
                      r = r ? Ie(r, a, !0).tree : [a];
                    }
                    return (
                      n &&
                        Oe(r, function (e, t, r) {
                          delete n[t + "-" + r];
                        }),
                      { tree: r, revs: n ? Object.keys(n) : [] }
                    );
                  })(r.tree, n);
                return {
                  tree: i.tree,
                  stemmedRevs: i.revs,
                  conflicts: r.conflicts,
                };
              }
              function Be(e) {
                return e.ids;
              }
              function Me(e, t) {
                t || (t = qe(e));
                for (
                  var n,
                    r = t.substring(t.indexOf("-") + 1),
                    i = e.rev_tree.map(Be);
                  (n = i.pop());

                ) {
                  if (n[0] === r) return !!n[1].deleted;
                  i = i.concat(n[2]);
                }
              }
              function Re(e) {
                return /^_local/.test(e);
              }
              function Ne(e, t, n) {
                var r = [{ rev: e._rev }];
                "all_docs" === n.style &&
                  (r = Se(t.rev_tree).map(function (e) {
                    return { rev: e.rev };
                  }));
                var i = { id: t.id, changes: r, doc: e };
                return (
                  Me(t, e._rev) && (i.deleted = !0),
                  n.conflicts &&
                    ((i.doc._conflicts = xe(t)),
                    i.doc._conflicts.length || delete i.doc._conflicts),
                  i
                );
              }
              class Ue extends f {
                constructor(e, t, n) {
                  super(), (this.db = e);
                  var r = ((t = t ? g(t) : {}).complete = m((t, n) => {
                    var r, o;
                    t
                      ? ((o = "error"),
                        ("listenerCount" in (r = this)
                          ? r.listenerCount(o)
                          : f.listenerCount(r, o)) > 0 && this.emit("error", t))
                      : this.emit("complete", n),
                      this.removeAllListeners(),
                      e.removeListener("destroyed", i);
                  }));
                  n &&
                    (this.on("complete", function (e) {
                      n(null, e);
                    }),
                    this.on("error", n));
                  const i = () => {
                    this.cancel();
                  };
                  e.once("destroyed", i),
                    (t.onChange = (e, t, n) => {
                      this.isCancelled ||
                        (function (e, t, n, r) {
                          try {
                            e.emit("change", t, n, r);
                          } catch (e) {
                            x("error", 'Error in .on("change", function):', e);
                          }
                        })(this, e, t, n);
                    });
                  var o = new Promise(function (e, n) {
                    t.complete = function (t, r) {
                      t ? n(t) : e(r);
                    };
                  });
                  this.once("cancel", function () {
                    e.removeListener("destroyed", i),
                      t.complete(null, { status: "cancelled" });
                  }),
                    (this.then = o.then.bind(o)),
                    (this.catch = o.catch.bind(o)),
                    this.then(function (e) {
                      r(null, e);
                    }, r),
                    e.taskqueue.isReady
                      ? this.validateChanges(t)
                      : e.taskqueue.addTask((e) => {
                          e
                            ? t.complete(e)
                            : this.isCancelled
                            ? this.emit("cancel")
                            : this.validateChanges(t);
                        });
                }
                cancel() {
                  (this.isCancelled = !0),
                    this.db.taskqueue.isReady && this.emit("cancel");
                }
                validateChanges(e) {
                  var t = e.complete;
                  Ye._changesFilterPlugin
                    ? Ye._changesFilterPlugin.validate(e, (n) => {
                        if (n) return t(n);
                        this.doChanges(e);
                      })
                    : this.doChanges(e);
                }
                doChanges(e) {
                  var t = e.complete;
                  if (
                    ("live" in (e = g(e)) &&
                      !("continuous" in e) &&
                      (e.continuous = e.live),
                    (e.processChange = Ne),
                    "latest" === e.since && (e.since = "now"),
                    e.since || (e.since = 0),
                    "now" !== e.since)
                  ) {
                    if (Ye._changesFilterPlugin) {
                      if (
                        (Ye._changesFilterPlugin.normalize(e),
                        Ye._changesFilterPlugin.shouldFilter(this, e))
                      )
                        return Ye._changesFilterPlugin.filter(this, e);
                    } else
                      ["doc_ids", "filter", "selector", "view"].forEach(
                        function (t) {
                          t in e &&
                            x(
                              "warn",
                              'The "' +
                                t +
                                '" option was passed in to changes/replicate, but pouchdb-changes-filter plugin is not installed, so it was ignored. Please install the plugin to enable filtering.'
                            );
                        }
                      );
                    "descending" in e || (e.descending = !1),
                      (e.limit = 0 === e.limit ? 1 : e.limit),
                      (e.complete = t);
                    var n = this.db._changes(e);
                    if (n && "function" == typeof n.cancel) {
                      const e = this.cancel;
                      this.cancel = (...t) => {
                        n.cancel(), e.apply(this, t);
                      };
                    }
                  } else
                    this.db.info().then((n) => {
                      this.isCancelled
                        ? t(null, { status: "cancelled" })
                        : ((e.since = n.update_seq), this.doChanges(e));
                    }, t);
                }
              }
              function Fe(e, t) {
                return e < t ? -1 : e > t ? 1 : 0;
              }
              function Ke(e, t) {
                return function (n, r) {
                  n || (r[0] && r[0].error)
                    ? (((n = n || r[0]).docId = t), e(n))
                    : e(null, r.length ? r[0] : r);
                };
              }
              function Je(e, t) {
                var n = Fe(e._id, t._id);
                return 0 !== n
                  ? n
                  : Fe(
                      e._revisions ? e._revisions.start : 0,
                      t._revisions ? t._revisions.start : 0
                    );
              }
              function ze(e, t, n) {
                return e
                  .get("_local/purges")
                  .then(function (e) {
                    const r = e.purgeSeq + 1;
                    return (
                      e.purges.push({ docId: t, rev: n, purgeSeq: r }),
                      e.purges.length > self.purged_infos_limit &&
                        e.purges.splice(
                          0,
                          e.purges.length - self.purged_infos_limit
                        ),
                      (e.purgeSeq = r),
                      e
                    );
                  })
                  .catch(function (e) {
                    if (404 !== e.status) throw e;
                    return {
                      _id: "_local/purges",
                      purges: [{ docId: t, rev: n, purgeSeq: 0 }],
                      purgeSeq: 0,
                    };
                  })
                  .then(function (t) {
                    return e.put(t);
                  });
              }
              class Ve extends f {
                _setup() {
                  (this.post = w("post", function (e, t, n) {
                    if (
                      ("function" == typeof t && ((n = t), (t = {})),
                      "object" != typeof e || Array.isArray(e))
                    )
                      return n(Q(J));
                    this.bulkDocs({ docs: [e] }, t, Ke(n, e._id));
                  }).bind(this)),
                    (this.put = w("put", function (e, t, n) {
                      if (
                        ("function" == typeof t && ((n = t), (t = {})),
                        "object" != typeof e || Array.isArray(e))
                      )
                        return n(Q(J));
                      if (
                        (X(e._id),
                        Re(e._id) && "function" == typeof this._putLocal)
                      )
                        return e._deleted
                          ? this._removeLocal(e, n)
                          : this._putLocal(e, n);
                      const r = (n) => {
                        "function" == typeof this._put && !1 !== t.new_edits
                          ? this._put(e, t, n)
                          : this.bulkDocs({ docs: [e] }, t, Ke(n, e._id));
                      };
                      var i, o, s, a;
                      t.force && e._rev
                        ? ((i = e._rev.split("-")),
                          (o = i[1]),
                          (s = parseInt(i[0], 10) + 1),
                          (a = ke()),
                          (e._revisions = { start: s, ids: [a, o] }),
                          (e._rev = s + "-" + a),
                          (t.new_edits = !1),
                          r(function (t) {
                            var r = t
                              ? null
                              : { ok: !0, id: e._id, rev: e._rev };
                            n(t, r);
                          }))
                        : r(n);
                    }).bind(this)),
                    (this.putAttachment = w(
                      "putAttachment",
                      function (e, t, n, r, i) {
                        var o = this;
                        function s(e) {
                          var n = "_rev" in e ? parseInt(e._rev, 10) : 0;
                          return (
                            (e._attachments = e._attachments || {}),
                            (e._attachments[t] = {
                              content_type: i,
                              data: r,
                              revpos: ++n,
                            }),
                            o.put(e)
                          );
                        }
                        return (
                          "function" == typeof i &&
                            ((i = r), (r = n), (n = null)),
                          void 0 === i && ((i = r), (r = n), (n = null)),
                          i ||
                            x(
                              "warn",
                              "Attachment",
                              t,
                              "on document",
                              e,
                              "is missing content_type"
                            ),
                          o.get(e).then(
                            function (e) {
                              if (e._rev !== n) throw Q(I);
                              return s(e);
                            },
                            function (t) {
                              if (t.reason === D.message) return s({ _id: e });
                              throw t;
                            }
                          )
                        );
                      }
                    ).bind(this)),
                    (this.removeAttachment = w(
                      "removeAttachment",
                      function (e, t, n, r) {
                        this.get(e, (e, i) => {
                          if (e) r(e);
                          else if (i._rev === n) {
                            if (!i._attachments) return r();
                            delete i._attachments[t],
                              0 === Object.keys(i._attachments).length &&
                                delete i._attachments,
                              this.put(i, r);
                          } else r(Q(I));
                        });
                      }
                    ).bind(this)),
                    (this.remove = w("remove", function (e, t, n, r) {
                      var i;
                      "string" == typeof t
                        ? ((i = { _id: e, _rev: t }),
                          "function" == typeof n && ((r = n), (n = {})))
                        : ((i = e),
                          "function" == typeof t
                            ? ((r = t), (n = {}))
                            : ((r = n), (n = t))),
                        ((n = n || {}).was_delete = !0);
                      var o = {
                        _id: i._id,
                        _rev: i._rev || n.rev,
                        _deleted: !0,
                      };
                      if (Re(o._id) && "function" == typeof this._removeLocal)
                        return this._removeLocal(i, r);
                      this.bulkDocs({ docs: [o] }, n, Ke(r, o._id));
                    }).bind(this)),
                    (this.revsDiff = w("revsDiff", function (e, t, n) {
                      "function" == typeof t && ((n = t), (t = {}));
                      var r = Object.keys(e);
                      if (!r.length) return n(null, {});
                      var i = 0,
                        s = new o();
                      function a(e, t) {
                        s.has(e) || s.set(e, { missing: [] }),
                          s.get(e).missing.push(t);
                      }
                      r.map(function (t) {
                        this._getRevisionTree(t, function (o, c) {
                          if (o && 404 === o.status && "missing" === o.message)
                            s.set(t, { missing: e[t] });
                          else {
                            if (o) return n(o);
                            !(function (t, n) {
                              var r = e[t].slice(0);
                              Oe(n, function (e, n, i, o, s) {
                                var c = n + "-" + i,
                                  u = r.indexOf(c);
                                -1 !== u &&
                                  (r.splice(u, 1),
                                  "available" !== s.status && a(t, c));
                              }),
                                r.forEach(function (e) {
                                  a(t, e);
                                });
                            })(t, c);
                          }
                          if (++i === r.length) {
                            var u = {};
                            return (
                              s.forEach(function (e, t) {
                                u[t] = e;
                              }),
                              n(null, u)
                            );
                          }
                        });
                      }, this);
                    }).bind(this)),
                    (this.bulkGet = w("bulkGet", function (e, t) {
                      A(this, e, t);
                    }).bind(this)),
                    (this.compactDocument = w(
                      "compactDocument",
                      function (e, t, n) {
                        this._getRevisionTree(e, (r, i) => {
                          if (r) return n(r);
                          var o = (function (e) {
                              var t = {},
                                n = [];
                              return (
                                Oe(e, function (e, r, i, o) {
                                  var s = r + "-" + i;
                                  return (
                                    e && (t[s] = 0),
                                    void 0 !== o && n.push({ from: o, to: s }),
                                    s
                                  );
                                }),
                                n.reverse(),
                                n.forEach(function (e) {
                                  void 0 === t[e.from]
                                    ? (t[e.from] = 1 + t[e.to])
                                    : (t[e.from] = Math.min(
                                        t[e.from],
                                        1 + t[e.to]
                                      ));
                                }),
                                t
                              );
                            })(i),
                            s = [],
                            a = [];
                          Object.keys(o).forEach(function (e) {
                            o[e] > t && s.push(e);
                          }),
                            Oe(i, function (e, t, n, r, i) {
                              var o = t + "-" + n;
                              "available" === i.status &&
                                -1 !== s.indexOf(o) &&
                                a.push(o);
                            }),
                            this._doCompaction(e, a, n);
                        });
                      }
                    ).bind(this)),
                    (this.compact = w("compact", function (e, t) {
                      "function" == typeof e && ((t = e), (e = {})),
                        (e = e || {}),
                        (this._compactionQueue = this._compactionQueue || []),
                        this._compactionQueue.push({ opts: e, callback: t }),
                        1 === this._compactionQueue.length &&
                          (function e(t) {
                            var n = t._compactionQueue[0],
                              r = n.opts,
                              i = n.callback;
                            t.get("_local/compaction")
                              .catch(function () {
                                return !1;
                              })
                              .then(function (n) {
                                n && n.last_seq && (r.last_seq = n.last_seq),
                                  t._compact(r, function (n, r) {
                                    n ? i(n) : i(null, r),
                                      s(function () {
                                        t._compactionQueue.shift(),
                                          t._compactionQueue.length && e(t);
                                      });
                                  });
                              });
                          })(this);
                    }).bind(this)),
                    (this.get = w("get", function (e, t, n) {
                      if (
                        ("function" == typeof t && ((n = t), (t = {})),
                        "string" != typeof e)
                      )
                        return n(Q(T));
                      if (Re(e) && "function" == typeof this._getLocal)
                        return this._getLocal(e, n);
                      var r = [];
                      const i = () => {
                        var i = [],
                          o = r.length;
                        if (!o) return n(null, i);
                        r.forEach((r) => {
                          this.get(
                            e,
                            {
                              rev: r,
                              revs: t.revs,
                              latest: t.latest,
                              attachments: t.attachments,
                              binary: t.binary,
                            },
                            function (e, t) {
                              if (e) i.push({ missing: r });
                              else {
                                for (var s, a = 0, c = i.length; a < c; a++)
                                  if (i[a].ok && i[a].ok._rev === t._rev) {
                                    s = !0;
                                    break;
                                  }
                                s || i.push({ ok: t });
                              }
                              --o || n(null, i);
                            }
                          );
                        });
                      };
                      if (!t.open_revs)
                        return this._get(e, t, (r, i) => {
                          if (r) return (r.docId = e), n(r);
                          var o = i.doc,
                            s = i.metadata,
                            a = i.ctx;
                          if (t.conflicts) {
                            var c = xe(s);
                            c.length && (o._conflicts = c);
                          }
                          if (
                            (Me(s, o._rev) && (o._deleted = !0),
                            t.revs || t.revs_info)
                          ) {
                            for (
                              var u = o._rev.split("-"),
                                f = parseInt(u[0], 10),
                                l = u[1],
                                d = Ee(s.rev_tree),
                                h = null,
                                p = 0;
                              p < d.length;
                              p++
                            ) {
                              var v = d[p],
                                y = v.ids
                                  .map(function (e) {
                                    return e.id;
                                  })
                                  .indexOf(l);
                              (y === f - 1 || (!h && -1 !== y)) && (h = v);
                            }
                            if (!h)
                              return (
                                ((r = new Error("invalid rev tree")).docId = e),
                                n(r)
                              );
                            var _ =
                                h.ids
                                  .map(function (e) {
                                    return e.id;
                                  })
                                  .indexOf(o._rev.split("-")[1]) + 1,
                              g = h.ids.length - _;
                            if (
                              (h.ids.splice(_, g),
                              h.ids.reverse(),
                              t.revs &&
                                (o._revisions = {
                                  start: h.pos + h.ids.length - 1,
                                  ids: h.ids.map(function (e) {
                                    return e.id;
                                  }),
                                }),
                              t.revs_info)
                            ) {
                              var m = h.pos + h.ids.length;
                              o._revs_info = h.ids.map(function (e) {
                                return {
                                  rev: --m + "-" + e.id,
                                  status: e.opts.status,
                                };
                              });
                            }
                          }
                          if (t.attachments && o._attachments) {
                            var b = o._attachments,
                              w = Object.keys(b).length;
                            if (0 === w) return n(null, o);
                            Object.keys(b).forEach((e) => {
                              this._getAttachment(
                                o._id,
                                e,
                                b[e],
                                { rev: o._rev, binary: t.binary, ctx: a },
                                function (t, r) {
                                  var i = o._attachments[e];
                                  (i.data = r),
                                    delete i.stub,
                                    delete i.length,
                                    --w || n(null, o);
                                }
                              );
                            });
                          } else {
                            if (o._attachments)
                              for (var k in o._attachments)
                                Object.prototype.hasOwnProperty.call(
                                  o._attachments,
                                  k
                                ) && (o._attachments[k].stub = !0);
                            n(null, o);
                          }
                        });
                      if ("all" === t.open_revs)
                        this._getRevisionTree(e, function (e, t) {
                          if (e) return n(e);
                          (r = Se(t).map(function (e) {
                            return e.rev;
                          })),
                            i();
                        });
                      else {
                        if (!Array.isArray(t.open_revs))
                          return n(Q(R, "function_clause"));
                        r = t.open_revs;
                        for (var o = 0; o < r.length; o++) {
                          var s = r[o];
                          if ("string" != typeof s || !/^\d+-/.test(s))
                            return n(Q(V));
                        }
                        i();
                      }
                    }).bind(this)),
                    (this.getAttachment = w(
                      "getAttachment",
                      function (e, t, n, r) {
                        n instanceof Function && ((r = n), (n = {})),
                          this._get(e, n, (i, o) =>
                            i
                              ? r(i)
                              : o.doc._attachments && o.doc._attachments[t]
                              ? ((n.ctx = o.ctx),
                                (n.binary = !0),
                                void this._getAttachment(
                                  e,
                                  t,
                                  o.doc._attachments[t],
                                  n,
                                  r
                                ))
                              : r(Q(D))
                          );
                      }
                    ).bind(this)),
                    (this.allDocs = w("allDocs", function (e, t) {
                      if (
                        ("function" == typeof e && ((t = e), (e = {})),
                        (e.skip = void 0 !== e.skip ? e.skip : 0),
                        e.start_key && (e.startkey = e.start_key),
                        e.end_key && (e.endkey = e.end_key),
                        "keys" in e)
                      ) {
                        if (!Array.isArray(e.keys))
                          return t(
                            new TypeError("options.keys must be an array")
                          );
                        var n = ["startkey", "endkey", "key"].filter(function (
                          t
                        ) {
                          return t in e;
                        })[0];
                        if (n)
                          return void t(
                            Q(
                              U,
                              "Query parameter `" +
                                n +
                                "` is not compatible with multi-get"
                            )
                          );
                        if (
                          !Z(this) &&
                          ((function (e) {
                            var t =
                              "limit" in e
                                ? e.keys.slice(e.skip, e.limit + e.skip)
                                : e.skip > 0
                                ? e.keys.slice(e.skip)
                                : e.keys;
                            (e.keys = t),
                              (e.skip = 0),
                              delete e.limit,
                              e.descending &&
                                (t.reverse(), (e.descending = !1));
                          })(e),
                          0 === e.keys.length)
                        )
                          return this._allDocs({ limit: 0 }, t);
                      }
                      return this._allDocs(e, t);
                    }).bind(this)),
                    (this.close = w("close", function (e) {
                      return (
                        (this._closed = !0), this.emit("closed"), this._close(e)
                      );
                    }).bind(this)),
                    (this.info = w("info", function (e) {
                      this._info((t, n) => {
                        if (t) return e(t);
                        (n.db_name = n.db_name || this.name),
                          (n.auto_compaction = !(
                            !this.auto_compaction || Z(this)
                          )),
                          (n.adapter = this.adapter),
                          e(null, n);
                      });
                    }).bind(this)),
                    (this.id = w("id", function (e) {
                      return this._id(e);
                    }).bind(this)),
                    (this.bulkDocs = w("bulkDocs", function (e, t, n) {
                      if (
                        ("function" == typeof t && ((n = t), (t = {})),
                        (t = t || {}),
                        Array.isArray(e) && (e = { docs: e }),
                        !e || !e.docs || !Array.isArray(e.docs))
                      )
                        return n(Q(L));
                      for (var r = 0; r < e.docs.length; ++r)
                        if (
                          "object" != typeof e.docs[r] ||
                          Array.isArray(e.docs[r])
                        )
                          return n(Q(J));
                      var i;
                      if (
                        (e.docs.forEach(function (e) {
                          e._attachments &&
                            Object.keys(e._attachments).forEach(function (t) {
                              (i =
                                i ||
                                (function (e) {
                                  return (
                                    "_" === e.charAt(0) &&
                                    e +
                                      " is not a valid attachment name, attachment names cannot start with '_'"
                                  );
                                })(t)),
                                e._attachments[t].content_type ||
                                  x(
                                    "warn",
                                    "Attachment",
                                    t,
                                    "on document",
                                    e._id,
                                    "is missing content_type"
                                  );
                            });
                        }),
                        i)
                      )
                        return n(Q(K, i));
                      "new_edits" in t ||
                        (t.new_edits = !("new_edits" in e) || e.new_edits);
                      var o = this;
                      t.new_edits || Z(o) || e.docs.sort(Je),
                        (function (e) {
                          for (var t = 0; t < e.length; t++) {
                            var n = e[t];
                            if (n._deleted) delete n._attachments;
                            else if (n._attachments)
                              for (
                                var r = Object.keys(n._attachments), i = 0;
                                i < r.length;
                                i++
                              ) {
                                var o = r[i];
                                n._attachments[o] = k(n._attachments[o], [
                                  "data",
                                  "digest",
                                  "content_type",
                                  "length",
                                  "revpos",
                                  "stub",
                                ]);
                              }
                          }
                        })(e.docs);
                      var s = e.docs.map(function (e) {
                        return e._id;
                      });
                      this._bulkDocs(e, t, function (e, r) {
                        if (e) return n(e);
                        if (
                          (t.new_edits ||
                            (r = r.filter(function (e) {
                              return e.error;
                            })),
                          !Z(o))
                        )
                          for (var i = 0, a = r.length; i < a; i++)
                            r[i].id = r[i].id || s[i];
                        n(null, r);
                      });
                    }).bind(this)),
                    (this.registerDependentDatabase = w(
                      "registerDependentDatabase",
                      function (e, t) {
                        var n = g(this.__opts);
                        this.__opts.view_adapter &&
                          (n.adapter = this.__opts.view_adapter);
                        var r = new this.constructor(e, n);
                        ae(this, "_local/_pouch_dependentDbs", function (t) {
                          return (
                            (t.dependentDbs = t.dependentDbs || {}),
                            !t.dependentDbs[e] && ((t.dependentDbs[e] = !0), t)
                          );
                        })
                          .then(function () {
                            t(null, { db: r });
                          })
                          .catch(t);
                      }
                    ).bind(this)),
                    (this.destroy = w("destroy", function (e, t) {
                      "function" == typeof e && ((t = e), (e = {}));
                      var n = !("use_prefix" in this) || this.use_prefix;
                      const r = () => {
                        this._destroy(e, (e, n) => {
                          if (e) return t(e);
                          (this._destroyed = !0),
                            this.emit("destroyed"),
                            t(null, n || { ok: !0 });
                        });
                      };
                      if (Z(this)) return r();
                      this.get("_local/_pouch_dependentDbs", (e, i) => {
                        if (e) return 404 !== e.status ? t(e) : r();
                        var o = i.dependentDbs,
                          s = this.constructor,
                          a = Object.keys(o).map((e) => {
                            var t = n
                              ? e.replace(new RegExp("^" + s.prefix), "")
                              : e;
                            return new s(t, this.__opts).destroy();
                          });
                        Promise.all(a).then(r, t);
                      });
                    }).bind(this));
                }
                _compact(e, t) {
                  var n,
                    r = { return_docs: !1, last_seq: e.last_seq || 0 },
                    i = [],
                    o = 0;
                  const s = (e) => {
                      this.activeTasks.update(n, { completed_items: ++o }),
                        i.push(this.compactDocument(e.id, 0));
                    },
                    a = (e) => {
                      this.activeTasks.remove(n, e), t(e);
                    },
                    c = (e) => {
                      var r = e.last_seq;
                      Promise.all(i)
                        .then(() =>
                          ae(
                            this,
                            "_local/compaction",
                            (e) =>
                              (!e.last_seq || e.last_seq < r) &&
                              ((e.last_seq = r), e)
                          )
                        )
                        .then(() => {
                          this.activeTasks.remove(n), t(null, { ok: !0 });
                        })
                        .catch(a);
                    };
                  this.info().then((e) => {
                    (n = this.activeTasks.add({
                      name: "database_compaction",
                      total_items: e.update_seq - r.last_seq,
                    })),
                      this.changes(r)
                        .on("change", s)
                        .on("complete", c)
                        .on("error", a);
                  });
                }
                changes(e, t) {
                  return (
                    "function" == typeof e && ((t = e), (e = {})),
                    ((e = e || {}).return_docs =
                      "return_docs" in e ? e.return_docs : !e.live),
                    new Ue(this, e, t)
                  );
                }
                type() {
                  return "function" == typeof this._type
                    ? this._type()
                    : this.adapter;
                }
              }
              Ve.prototype.purge = w("_purge", function (e, t, n) {
                if (void 0 === this._purge)
                  return n(
                    Q(
                      R,
                      "Purge is not implemented in the " +
                        this.adapter +
                        " adapter."
                    )
                  );
                var r = this;
                r._getRevisionTree(e, (i, o) => {
                  if (i) return n(i);
                  if (!o) return n(Q(D));
                  let s;
                  try {
                    s = (function (e, t) {
                      let n = [];
                      const r = e.slice();
                      let i;
                      for (; (i = r.pop()); ) {
                        const { pos: e, ids: o } = i,
                          s = `${e}-${o[0]}`,
                          a = o[2];
                        if ((n.push(s), s === t)) {
                          if (0 !== a.length)
                            throw new Error(
                              "The requested revision is not a leaf"
                            );
                          return n.reverse();
                        }
                        (0 === a.length || a.length > 1) && (n = []);
                        for (let t = 0, n = a.length; t < n; t++)
                          r.push({ pos: e + 1, ids: a[t] });
                      }
                      if (0 === n.length)
                        throw new Error(
                          "The requested revision does not exist"
                        );
                      return n.reverse();
                    })(o, t);
                  } catch (i) {
                    return n(i.message || i);
                  }
                  r._purge(e, s, (i, o) => {
                    if (i) return n(i);
                    ze(r, e, t).then(function () {
                      return n(null, o);
                    });
                  });
                });
              });
              class Ge {
                constructor() {
                  (this.isReady = !1), (this.failed = !1), (this.queue = []);
                }
                execute() {
                  var e;
                  if (this.failed)
                    for (; (e = this.queue.shift()); ) e(this.failed);
                  else for (; (e = this.queue.shift()); ) e();
                }
                fail(e) {
                  (this.failed = e), this.execute();
                }
                ready(e) {
                  (this.isReady = !0), (this.db = e), this.execute();
                }
                addTask(e) {
                  this.queue.push(e), this.failed && this.execute();
                }
              }
              function Qe(e, t) {
                let n = function (...e) {
                  if (!(this instanceof n)) return new n(...e);
                  t.apply(this, e);
                };
                var r, i;
                return (
                  (i = e),
                  ((r = n).prototype = Object.create(i.prototype, {
                    constructor: { value: r },
                  })),
                  n
                );
              }
              class We extends Ve {
                constructor(e, t) {
                  super(), this._setup(e, t);
                }
                _setup(e, t) {
                  if (
                    (super._setup(),
                    (t = t || {}),
                    e &&
                      "object" == typeof e &&
                      ((e = (t = e).name), delete t.name),
                    void 0 === t.deterministic_revs &&
                      (t.deterministic_revs = !0),
                    (this.__opts = t = g(t)),
                    (this.auto_compaction = t.auto_compaction),
                    (this.purged_infos_limit = t.purged_infos_limit || 1e3),
                    (this.prefix = Ye.prefix),
                    "string" != typeof e)
                  )
                    throw new Error("Missing/invalid DB name");
                  var n = (function (e, t) {
                    var n = e.match(/([a-z-]*):\/\/(.*)/);
                    if (n)
                      return {
                        name: /https?/.test(n[1]) ? n[1] + "://" + n[2] : n[2],
                        adapter: n[1],
                      };
                    var r = Ye.adapters,
                      i = Ye.preferredAdapters,
                      o = Ye.prefix,
                      s = t.adapter;
                    if (!s)
                      for (
                        var a = 0;
                        a < i.length &&
                        "idb" === (s = i[a]) &&
                        "websql" in r &&
                        S() &&
                        localStorage["_pouch__websqldb_" + o + e];
                        ++a
                      )
                        x(
                          "log",
                          'PouchDB is downgrading "' +
                            e +
                            '" to WebSQL to avoid data loss, because it was already opened with WebSQL.'
                        );
                    var c = r[s];
                    return {
                      name:
                        !c || !("use_prefix" in c) || c.use_prefix ? o + e : e,
                      adapter: s,
                    };
                  })((t.prefix || "") + e, t);
                  if (
                    ((t.name = n.name),
                    (t.adapter = t.adapter || n.adapter),
                    (this.name = e),
                    (this._adapter = t.adapter),
                    Ye.emit("debug", [
                      "adapter",
                      "Picked adapter: ",
                      t.adapter,
                    ]),
                    !Ye.adapters[t.adapter] || !Ye.adapters[t.adapter].valid())
                  )
                    throw new Error("Invalid Adapter: " + t.adapter);
                  if (
                    t.view_adapter &&
                    (!Ye.adapters[t.view_adapter] ||
                      !Ye.adapters[t.view_adapter].valid())
                  )
                    throw new Error("Invalid View Adapter: " + t.view_adapter);
                  (this.taskqueue = new Ge()),
                    (this.adapter = t.adapter),
                    Ye.adapters[t.adapter].call(this, t, (e) => {
                      if (e) return this.taskqueue.fail(e);
                      !(function (e) {
                        function t(t) {
                          e.removeListener("closed", n),
                            t || e.constructor.emit("destroyed", e.name);
                        }
                        function n() {
                          e.removeListener("destroyed", t),
                            e.constructor.emit("unref", e);
                        }
                        e.once("destroyed", t),
                          e.once("closed", n),
                          e.constructor.emit("ref", e);
                      })(this),
                        this.emit("created", this),
                        Ye.emit("created", this.name),
                        this.taskqueue.ready(this);
                    });
                }
              }
              const Ye = Qe(We, function (e, t) {
                We.prototype._setup.call(this, e, t);
              });
              var He =
                  "undefined" != typeof AbortController
                    ? AbortController
                    : function () {
                        return { abort: function () {} };
                      },
                Xe = fetch,
                Ze = Headers;
              (Ye.adapters = {}),
                (Ye.preferredAdapters = []),
                (Ye.prefix = "_pouch_");
              var et = new f();
              !(function (e) {
                Object.keys(f.prototype).forEach(function (t) {
                  "function" == typeof f.prototype[t] &&
                    (e[t] = et[t].bind(et));
                });
                var t = (e._destructionListeners = new o());
                e.on("ref", function (e) {
                  t.has(e.name) || t.set(e.name, []), t.get(e.name).push(e);
                }),
                  e.on("unref", function (e) {
                    if (t.has(e.name)) {
                      var n = t.get(e.name),
                        r = n.indexOf(e);
                      r < 0 ||
                        (n.splice(r, 1),
                        n.length > 1 ? t.set(e.name, n) : t.delete(e.name));
                    }
                  }),
                  e.on("destroyed", function (e) {
                    if (t.has(e)) {
                      var n = t.get(e);
                      t.delete(e),
                        n.forEach(function (e) {
                          e.emit("destroyed", !0);
                        });
                    }
                  });
              })(Ye),
                (Ye.adapter = function (e, t, n) {
                  t.valid() &&
                    ((Ye.adapters[e] = t), n && Ye.preferredAdapters.push(e));
                }),
                (Ye.plugin = function (e) {
                  if ("function" == typeof e) e(Ye);
                  else {
                    if ("object" != typeof e || 0 === Object.keys(e).length)
                      throw new Error(
                        'Invalid plugin: got "' +
                          e +
                          '", expected an object or a function'
                      );
                    Object.keys(e).forEach(function (t) {
                      Ye.prototype[t] = e[t];
                    });
                  }
                  return (
                    this.__defaults && (Ye.__defaults = C({}, this.__defaults)),
                    Ye
                  );
                }),
                (Ye.defaults = function (e) {
                  let t = Qe(Ye, function (e, n) {
                    (n = n || {}),
                      e &&
                        "object" == typeof e &&
                        ((e = (n = e).name), delete n.name),
                      (n = C({}, t.__defaults, n)),
                      Ye.call(this, e, n);
                  });
                  return (
                    (t.preferredAdapters = Ye.preferredAdapters.slice()),
                    Object.keys(Ye).forEach(function (e) {
                      e in t || (t[e] = Ye[e]);
                    }),
                    (t.__defaults = C({}, this.__defaults, e)),
                    t
                  );
                }),
                (Ye.fetch = function (e, t) {
                  return Xe(e, t);
                }),
                (Ye.prototype.activeTasks = Ye.activeTasks =
                  new (class {
                    constructor() {
                      this.tasks = {};
                    }
                    list() {
                      return Object.values(this.tasks);
                    }
                    add(e) {
                      const t = c.v4();
                      return (
                        (this.tasks[t] = {
                          id: t,
                          name: e.name,
                          total_items: e.total_items,
                          created_at: new Date().toJSON(),
                        }),
                        t
                      );
                    }
                    get(e) {
                      return this.tasks[e];
                    }
                    remove(e, t) {
                      return delete this.tasks[e], this.tasks;
                    }
                    update(e, t) {
                      const n = this.tasks[e];
                      if (void 0 !== n) {
                        const r = {
                          id: n.id,
                          name: n.name,
                          created_at: n.created_at,
                          total_items: t.total_items || n.total_items,
                          completed_items:
                            t.completed_items || n.completed_items,
                          updated_at: new Date().toJSON(),
                        };
                        this.tasks[e] = r;
                      }
                      return this.tasks;
                    }
                  })());
              function tt(e, t) {
                for (var n = e, r = 0, i = t.length; r < i; r++) {
                  if (!(n = n[t[r]])) break;
                }
                return n;
              }
              function nt(e) {
                for (var t = [], n = "", r = 0, i = e.length; r < i; r++) {
                  var o = e[r];
                  r > 0 && "\\" === e[r - 1] && ("$" === o || "." === o)
                    ? (n = n.substring(0, n.length - 1) + o)
                    : "." === o
                    ? (t.push(n), (n = ""))
                    : (n += o);
                }
                return t.push(n), t;
              }
              var rt = ["$or", "$nor", "$not"];
              function it(e) {
                return rt.indexOf(e) > -1;
              }
              function ot(e) {
                return Object.keys(e)[0];
              }
              function st(e) {
                var t = {},
                  n = { $or: !0, $nor: !0 };
                return (
                  e.forEach(function (e) {
                    Object.keys(e).forEach(function (r) {
                      var i = e[r];
                      if (("object" != typeof i && (i = { $eq: i }), it(r)))
                        if (i instanceof Array) {
                          if (n[r]) return (n[r] = !1), void (t[r] = i);
                          var o = [];
                          t[r].forEach(function (e) {
                            Object.keys(i).forEach(function (t) {
                              var n = i[t],
                                r = Math.max(
                                  Object.keys(e).length,
                                  Object.keys(n).length
                                ),
                                s = st([e, n]);
                              Object.keys(s).length <= r || o.push(s);
                            });
                          }),
                            (t[r] = o);
                        } else t[r] = st([i]);
                      else {
                        var s = (t[r] = t[r] || {});
                        Object.keys(i).forEach(function (e) {
                          var t = i[e];
                          return "$gt" === e || "$gte" === e
                            ? (function (e, t, n) {
                                if (void 0 !== n.$eq) return;
                                void 0 !== n.$gte
                                  ? "$gte" === e
                                    ? t > n.$gte && (n.$gte = t)
                                    : t >= n.$gte &&
                                      (delete n.$gte, (n.$gt = t))
                                  : void 0 !== n.$gt
                                  ? "$gte" === e
                                    ? t > n.$gt && (delete n.$gt, (n.$gte = t))
                                    : t > n.$gt && (n.$gt = t)
                                  : (n[e] = t);
                              })(e, t, s)
                            : "$lt" === e || "$lte" === e
                            ? (function (e, t, n) {
                                if (void 0 !== n.$eq) return;
                                void 0 !== n.$lte
                                  ? "$lte" === e
                                    ? t < n.$lte && (n.$lte = t)
                                    : t <= n.$lte &&
                                      (delete n.$lte, (n.$lt = t))
                                  : void 0 !== n.$lt
                                  ? "$lte" === e
                                    ? t < n.$lt && (delete n.$lt, (n.$lte = t))
                                    : t < n.$lt && (n.$lt = t)
                                  : (n[e] = t);
                              })(e, t, s)
                            : "$ne" === e
                            ? (function (e, t) {
                                "$ne" in t ? t.$ne.push(e) : (t.$ne = [e]);
                              })(t, s)
                            : "$eq" === e
                            ? (function (e, t) {
                                delete t.$gt,
                                  delete t.$gte,
                                  delete t.$lt,
                                  delete t.$lte,
                                  delete t.$ne,
                                  (t.$eq = e);
                              })(t, s)
                            : "$regex" === e
                            ? (function (e, t) {
                                "$regex" in t
                                  ? t.$regex.push(e)
                                  : (t.$regex = [e]);
                              })(t, s)
                            : void (s[e] = t);
                        });
                      }
                    });
                  }),
                  t
                );
              }
              function at(e) {
                var t = g(e);
                (function e(t, n) {
                  for (var r in t) {
                    "$and" === r && (n = !0);
                    var i = t[r];
                    "object" == typeof i && (n = e(i, n));
                  }
                  return n;
                })(t, !1) &&
                  "$and" in
                    (t = (function e(t) {
                      for (var n in t) {
                        if (Array.isArray(t))
                          for (var r in t) t[r].$and && (t[r] = st(t[r].$and));
                        var i = t[n];
                        "object" == typeof i && e(i);
                      }
                      return t;
                    })(t)) &&
                  (t = st(t.$and)),
                  ["$or", "$nor"].forEach(function (e) {
                    e in t &&
                      t[e].forEach(function (e) {
                        for (var t = Object.keys(e), n = 0; n < t.length; n++) {
                          var r = t[n],
                            i = e[r];
                          ("object" == typeof i && null !== i) ||
                            (e[r] = { $eq: i });
                        }
                      });
                  }),
                  "$not" in t && (t.$not = st([t.$not]));
                for (var n = Object.keys(t), r = 0; r < n.length; r++) {
                  var i = n[r],
                    o = t[i];
                  ("object" == typeof o && null !== o) || (o = { $eq: o }),
                    (t[i] = o);
                }
                return (
                  (function e(t) {
                    Object.keys(t).forEach(function (n) {
                      var r = t[n];
                      Array.isArray(r)
                        ? r.forEach(function (t) {
                            t && "object" == typeof t && e(t);
                          })
                        : "$ne" === n
                        ? (t.$ne = [r])
                        : "$regex" === n
                        ? (t.$regex = [r])
                        : r && "object" == typeof r && e(r);
                    });
                  })(t),
                  t
                );
              }
              function ct(e, t) {
                if (e === t) return 0;
                (e = ut(e)), (t = ut(t));
                var n = pt(e),
                  r = pt(t);
                if (n - r != 0) return n - r;
                switch (typeof e) {
                  case "number":
                    return e - t;
                  case "boolean":
                    return e < t ? -1 : 1;
                  case "string":
                    return (function (e, t) {
                      return e === t ? 0 : e > t ? 1 : -1;
                    })(e, t);
                }
                return Array.isArray(e)
                  ? (function (e, t) {
                      for (
                        var n = Math.min(e.length, t.length), r = 0;
                        r < n;
                        r++
                      ) {
                        var i = ct(e[r], t[r]);
                        if (0 !== i) return i;
                      }
                      return e.length === t.length
                        ? 0
                        : e.length > t.length
                        ? 1
                        : -1;
                    })(e, t)
                  : (function (e, t) {
                      for (
                        var n = Object.keys(e),
                          r = Object.keys(t),
                          i = Math.min(n.length, r.length),
                          o = 0;
                        o < i;
                        o++
                      ) {
                        var s = ct(n[o], r[o]);
                        if (0 !== s) return s;
                        if (0 !== (s = ct(e[n[o]], t[r[o]]))) return s;
                      }
                      return n.length === r.length
                        ? 0
                        : n.length > r.length
                        ? 1
                        : -1;
                    })(e, t);
              }
              function ut(e) {
                switch (typeof e) {
                  case "undefined":
                    return null;
                  case "number":
                    return e === 1 / 0 || e === -1 / 0 || isNaN(e) ? null : e;
                  case "object":
                    var t = e;
                    if (Array.isArray(e)) {
                      var n = e.length;
                      e = new Array(n);
                      for (var r = 0; r < n; r++) e[r] = ut(t[r]);
                    } else {
                      if (e instanceof Date) return e.toJSON();
                      if (null !== e)
                        for (var i in ((e = {}), t))
                          if (Object.prototype.hasOwnProperty.call(t, i)) {
                            var o = t[i];
                            void 0 !== o && (e[i] = ut(o));
                          }
                    }
                }
                return e;
              }
              function ft(e) {
                if (null !== e)
                  switch (typeof e) {
                    case "boolean":
                      return e ? 1 : 0;
                    case "number":
                      return (function (e) {
                        if (0 === e) return "1";
                        var t = e.toExponential().split(/e\+?/),
                          n = parseInt(t[1], 10),
                          r = e < 0,
                          i = r ? "0" : "2",
                          o =
                            ((s = ((r ? -n : n) - -324).toString()),
                            (a = "0"),
                            (c = 3),
                            (function (e, t, n) {
                              for (var r = "", i = n - e.length; r.length < i; )
                                r += t;
                              return r;
                            })(s, a, c) + s);
                        var s, a, c;
                        i += "" + o;
                        var u = Math.abs(parseFloat(t[0]));
                        r && (u = 10 - u);
                        var f = u.toFixed(20);
                        return (f = f.replace(/\.?0+$/, "")), (i += "" + f);
                      })(e);
                    case "string":
                      return e
                        .replace(/\u0002/g, "")
                        .replace(/\u0001/g, "")
                        .replace(/\u0000/g, "");
                    case "object":
                      var t = Array.isArray(e),
                        n = t ? e : Object.keys(e),
                        r = -1,
                        i = n.length,
                        o = "";
                      if (t) for (; ++r < i; ) o += lt(n[r]);
                      else
                        for (; ++r < i; ) {
                          var s = n[r];
                          o += lt(s) + lt(e[s]);
                        }
                      return o;
                  }
                return "";
              }
              function lt(e) {
                return pt((e = ut(e))) + "" + ft(e) + "\0";
              }
              function dt(e, t) {
                var n,
                  r = t;
                if ("1" === e[t]) (n = 0), t++;
                else {
                  var i = "0" === e[t];
                  t++;
                  var o = "",
                    s = e.substring(t, t + 3),
                    a = parseInt(s, 10) + -324;
                  for (i && (a = -a), t += 3; ; ) {
                    var c = e[t];
                    if ("\0" === c) break;
                    (o += c), t++;
                  }
                  (n =
                    1 === (o = o.split(".")).length
                      ? parseInt(o, 10)
                      : parseFloat(o[0] + "." + o[1])),
                    i && (n -= 10),
                    0 !== a && (n = parseFloat(n + "e" + a));
                }
                return { num: n, length: t - r };
              }
              function ht(e, t) {
                var n = e.pop();
                if (t.length) {
                  var r = t[t.length - 1];
                  n === r.element && (t.pop(), (r = t[t.length - 1]));
                  var i = r.element,
                    o = r.index;
                  if (Array.isArray(i)) i.push(n);
                  else if (o === e.length - 2) {
                    i[e.pop()] = n;
                  } else e.push(n);
                }
              }
              function pt(e) {
                var t = ["boolean", "number", "string", "object"].indexOf(
                  typeof e
                );
                return ~t
                  ? null === e
                    ? 1
                    : Array.isArray(e)
                    ? 5
                    : t < 3
                    ? t + 2
                    : t + 3
                  : Array.isArray(e)
                  ? 5
                  : void 0;
              }
              function vt(e, t, n) {
                if (
                  ((e = e.filter(function (e) {
                    return yt(e.doc, t.selector, n);
                  })),
                  t.sort)
                ) {
                  var r = (function (e) {
                    function t(t) {
                      return e.map(function (e) {
                        var n = nt(ot(e));
                        return tt(t, n);
                      });
                    }
                    return function (e, n) {
                      var r,
                        i,
                        o = ct(t(e.doc), t(n.doc));
                      return 0 !== o
                        ? o
                        : ((r = e.doc._id),
                          (i = n.doc._id),
                          r < i ? -1 : r > i ? 1 : 0);
                    };
                  })(t.sort);
                  (e = e.sort(r)),
                    "string" != typeof t.sort[0] &&
                      "desc" === (i = t.sort[0])[ot(i)] &&
                      (e = e.reverse());
                }
                var i;
                if ("limit" in t || "skip" in t) {
                  var o = t.skip || 0,
                    s = ("limit" in t ? t.limit : e.length) + o;
                  e = e.slice(o, s);
                }
                return e;
              }
              function yt(e, t, n) {
                return n.every(function (n) {
                  var r = t[n],
                    i = nt(n),
                    o = tt(e, i);
                  return it(n)
                    ? (function (e, t, n) {
                        if ("$or" === e)
                          return t.some(function (e) {
                            return yt(n, e, Object.keys(e));
                          });
                        if ("$not" === e) return !yt(n, t, Object.keys(t));
                        return !t.find(function (e) {
                          return yt(n, e, Object.keys(e));
                        });
                      })(n, r, e)
                    : _t(r, e, i, o);
                });
              }
              function _t(e, t, n, r) {
                return (
                  !e ||
                  ("object" == typeof e
                    ? Object.keys(e).every(function (i) {
                        var o = e[i];
                        if (0 === i.indexOf("$")) return gt(i, t, o, n, r);
                        var s = nt(i);
                        if (
                          void 0 === r &&
                          "object" != typeof o &&
                          s.length > 0
                        )
                          return !1;
                        var a = tt(r, s);
                        return "object" == typeof o
                          ? _t(o, t, n, a)
                          : gt("$eq", t, o, s, a);
                      })
                    : e === r)
                );
              }
              function gt(e, t, n, r, i) {
                if (!kt[e])
                  throw new Error(
                    'unknown operator "' +
                      e +
                      '" - should be one of $eq, $lte, $lt, $gt, $gte, $exists, $ne, $in, $nin, $size, $mod, $regex, $elemMatch, $type, $allMatch or $all'
                  );
                return kt[e](t, n, r, i);
              }
              function mt(e) {
                return null != e;
              }
              function bt(e) {
                return void 0 !== e;
              }
              function wt(e, t) {
                return t.some(function (t) {
                  return e instanceof Array
                    ? e.some(function (e) {
                        return 0 === ct(t, e);
                      })
                    : 0 === ct(t, e);
                });
              }
              var kt = {
                $elemMatch: function (e, t, n, r) {
                  return (
                    !!Array.isArray(r) &&
                    0 !== r.length &&
                    ("object" == typeof r[0] && null !== r[0]
                      ? r.some(function (e) {
                          return yt(e, t, Object.keys(t));
                        })
                      : r.some(function (r) {
                          return _t(t, e, n, r);
                        }))
                  );
                },
                $allMatch: function (e, t, n, r) {
                  return (
                    !!Array.isArray(r) &&
                    0 !== r.length &&
                    ("object" == typeof r[0] && null !== r[0]
                      ? r.every(function (e) {
                          return yt(e, t, Object.keys(t));
                        })
                      : r.every(function (r) {
                          return _t(t, e, n, r);
                        }))
                  );
                },
                $eq: function (e, t, n, r) {
                  return bt(r) && 0 === ct(r, t);
                },
                $gte: function (e, t, n, r) {
                  return bt(r) && ct(r, t) >= 0;
                },
                $gt: function (e, t, n, r) {
                  return bt(r) && ct(r, t) > 0;
                },
                $lte: function (e, t, n, r) {
                  return bt(r) && ct(r, t) <= 0;
                },
                $lt: function (e, t, n, r) {
                  return bt(r) && ct(r, t) < 0;
                },
                $exists: function (e, t, n, r) {
                  return t ? bt(r) : !bt(r);
                },
                $mod: function (e, t, n, r) {
                  return (
                    mt(r) &&
                    (function (e, t) {
                      return (
                        "number" == typeof e &&
                        parseInt(e, 10) === e &&
                        e % t[0] === t[1]
                      );
                    })(r, t)
                  );
                },
                $ne: function (e, t, n, r) {
                  return t.every(function (e) {
                    return 0 !== ct(r, e);
                  });
                },
                $in: function (e, t, n, r) {
                  return mt(r) && wt(r, t);
                },
                $nin: function (e, t, n, r) {
                  return mt(r) && !wt(r, t);
                },
                $size: function (e, t, n, r) {
                  return (
                    mt(r) &&
                    Array.isArray(r) &&
                    (function (e, t) {
                      return e.length === t;
                    })(r, t)
                  );
                },
                $all: function (e, t, n, r) {
                  return (
                    Array.isArray(r) &&
                    (function (e, t) {
                      return t.every(function (t) {
                        return e.some(function (e) {
                          return 0 === ct(t, e);
                        });
                      });
                    })(r, t)
                  );
                },
                $regex: function (e, t, n, r) {
                  return (
                    mt(r) &&
                    "string" == typeof r &&
                    t.every(function (e) {
                      return (function (e, t) {
                        return new RegExp(t).test(e);
                      })(r, e);
                    })
                  );
                },
                $type: function (e, t, n, r) {
                  return (function (e, t) {
                    switch (t) {
                      case "null":
                        return null === e;
                      case "boolean":
                        return "boolean" == typeof e;
                      case "number":
                        return "number" == typeof e;
                      case "string":
                        return "string" == typeof e;
                      case "array":
                        return e instanceof Array;
                      case "object":
                        return "[object Object]" === {}.toString.call(e);
                    }
                  })(r, t);
                },
              };
              function jt(e, t) {
                if (e.selector && e.filter && "_selector" !== e.filter) {
                  var n = "string" == typeof e.filter ? e.filter : "function";
                  return t(
                    new Error('selector invalid for filter "' + n + '"')
                  );
                }
                t();
              }
              function qt(e) {
                e.view && !e.filter && (e.filter = "_view"),
                  e.selector && !e.filter && (e.filter = "_selector"),
                  e.filter &&
                    "string" == typeof e.filter &&
                    ("_view" === e.filter
                      ? (e.view = te(e.view))
                      : (e.filter = te(e.filter)));
              }
              function Ot(e, t) {
                return (
                  t.filter &&
                  "string" == typeof t.filter &&
                  !t.doc_ids &&
                  !Z(e.db)
                );
              }
              function At(e, t) {
                var n = t.complete;
                if ("_view" === t.filter) {
                  if (!t.view || "string" != typeof t.view) {
                    var r = Q(
                      K,
                      "`view` filter parameter not found or invalid."
                    );
                    return n(r);
                  }
                  var i = ee(t.view);
                  e.db.get("_design/" + i[0], function (r, o) {
                    if (e.isCancelled) return n(null, { status: "cancelled" });
                    if (r) return n(W(r));
                    var s = o && o.views && o.views[i[1]] && o.views[i[1]].map;
                    if (!s)
                      return n(
                        Q(
                          D,
                          o.views
                            ? "missing json key: " + i[1]
                            : "missing json key: views"
                        )
                      );
                    (t.filter = se(
                      [
                        "return function(doc) {",
                        '  "use strict";',
                        "  var emitted = false;",
                        "  var emit = function (a, b) {",
                        "    emitted = true;",
                        "  };",
                        "  var view = " + s + ";",
                        "  view(doc);",
                        "  if (emitted) {",
                        "    return true;",
                        "  }",
                        "};",
                      ].join("\n"),
                      {}
                    )),
                      e.doChanges(t);
                  });
                } else if (t.selector)
                  (t.filter = function (e) {
                    return (function (e, t) {
                      if ("object" != typeof t)
                        throw new Error(
                          "Selector error: expected a JSON object"
                        );
                      var n = vt(
                        [{ doc: e }],
                        { selector: (t = at(t)) },
                        Object.keys(t)
                      );
                      return n && 1 === n.length;
                    })(e, t.selector);
                  }),
                    e.doChanges(t);
                else {
                  var o = ee(t.filter);
                  e.db.get("_design/" + o[0], function (r, i) {
                    if (e.isCancelled) return n(null, { status: "cancelled" });
                    if (r) return n(W(r));
                    var s = i && i.filters && i.filters[o[1]];
                    if (!s)
                      return n(
                        Q(
                          D,
                          i && i.filters
                            ? "missing json key: " + o[1]
                            : "missing json key: filters"
                        )
                      );
                    (t.filter = se('"use strict";\nreturn ' + s + ";", {})),
                      e.doChanges(t);
                  });
                }
              }
              function St(e) {
                return e.reduce(function (e, t) {
                  return (e[t] = !0), e;
                }, {});
              }
              Ye.plugin(function (e) {
                e._changesFilterPlugin = {
                  validate: jt,
                  normalize: qt,
                  shouldFilter: Ot,
                  filter: At,
                };
              }),
                (Ye.version = "8.0.1");
              var xt = St([
                  "_id",
                  "_rev",
                  "_access",
                  "_attachments",
                  "_deleted",
                  "_revisions",
                  "_revs_info",
                  "_conflicts",
                  "_deleted_conflicts",
                  "_local_seq",
                  "_rev_tree",
                  "_replication_id",
                  "_replication_state",
                  "_replication_state_time",
                  "_replication_state_reason",
                  "_replication_stats",
                  "_removed",
                ]),
                Et = St([
                  "_access",
                  "_attachments",
                  "_replication_id",
                  "_replication_state",
                  "_replication_state_time",
                  "_replication_state_reason",
                  "_replication_stats",
                ]);
              function Pt(e) {
                if (!/^\d+-/.test(e)) return Q(V);
                var t = e.indexOf("-"),
                  n = e.substring(0, t),
                  r = e.substring(t + 1);
                return { prefix: parseInt(n, 10), id: r };
              }
              function Ct(e, t, n) {
                var r, i, o;
                n || (n = { deterministic_revs: !0 });
                var s = { status: "available" };
                if ((e._deleted && (s.deleted = !0), t))
                  if (
                    (e._id || (e._id = je()),
                    (i = ke(e, n.deterministic_revs)),
                    e._rev)
                  ) {
                    if ((o = Pt(e._rev)).error) return o;
                    (e._rev_tree = [
                      {
                        pos: o.prefix,
                        ids: [o.id, { status: "missing" }, [[i, s, []]]],
                      },
                    ]),
                      (r = o.prefix + 1);
                  } else (e._rev_tree = [{ pos: 1, ids: [i, s, []] }]), (r = 1);
                else if (
                  (e._revisions &&
                    ((e._rev_tree = (function (e, t) {
                      for (
                        var n = e.start - e.ids.length + 1,
                          r = e.ids,
                          i = [r[0], t, []],
                          o = 1,
                          s = r.length;
                        o < s;
                        o++
                      )
                        i = [r[o], { status: "missing" }, [i]];
                      return [{ pos: n, ids: i }];
                    })(e._revisions, s)),
                    (r = e._revisions.start),
                    (i = e._revisions.ids[0])),
                  !e._rev_tree)
                ) {
                  if ((o = Pt(e._rev)).error) return o;
                  (r = o.prefix),
                    (i = o.id),
                    (e._rev_tree = [{ pos: r, ids: [i, s, []] }]);
                }
                X(e._id), (e._rev = r + "-" + i);
                var a = { metadata: {}, data: {} };
                for (var c in e)
                  if (Object.prototype.hasOwnProperty.call(e, c)) {
                    var u = "_" === c[0];
                    if (u && !xt[c]) {
                      var f = Q(F, c);
                      throw ((f.message = F.message + ": " + c), f);
                    }
                    u && !Et[c]
                      ? (a.metadata[c.slice(1)] = e[c])
                      : (a.data[c] = e[c]);
                  }
                return a;
              }
              function $t(e, t, n) {
                var r = (function (e) {
                  try {
                    return ce(e);
                  } catch (e) {
                    return {
                      error: Q(N, "Attachment is not a valid base64 string"),
                    };
                  }
                })(e.data);
                if (r.error) return n(r.error);
                (e.length = r.length),
                  (e.data =
                    "blob" === t
                      ? de(r, e.content_type)
                      : "base64" === t
                      ? ue(r)
                      : r),
                  be(r, function (t) {
                    (e.digest = "md5-" + t), n();
                  });
              }
              function Lt(e, t, n) {
                if (e.stub) return n();
                "string" == typeof e.data
                  ? $t(e, t, n)
                  : (function (e, t, n) {
                      be(e.data, function (r) {
                        (e.digest = "md5-" + r),
                          (e.length = e.data.size || e.data.length || 0),
                          "binary" === t
                            ? ve(e.data, function (t) {
                                (e.data = t), n();
                              })
                            : "base64" === t
                            ? ye(e.data, function (t) {
                                (e.data = t), n();
                              })
                            : n();
                      });
                    })(e, t, n);
              }
              function Dt(e, t, n, r, i, o, s, a) {
                if (
                  (function (e, t) {
                    for (
                      var n,
                        r = e.slice(),
                        i = t.split("-"),
                        o = parseInt(i[0], 10),
                        s = i[1];
                      (n = r.pop());

                    ) {
                      if (n.pos === o && n.ids[0] === s) return !0;
                      for (var a = n.ids[2], c = 0, u = a.length; c < u; c++)
                        r.push({ pos: n.pos + 1, ids: a[c] });
                    }
                    return !1;
                  })(t.rev_tree, n.metadata.rev) &&
                  !a
                )
                  return (r[i] = n), o();
                var c = t.winningRev || qe(t),
                  u = "deleted" in t ? t.deleted : Me(t, c),
                  f =
                    "deleted" in n.metadata
                      ? n.metadata.deleted
                      : Me(n.metadata),
                  l = /^1-/.test(n.metadata.rev);
                if (u && !f && a && l) {
                  var d = n.data;
                  (d._rev = c), (d._id = n.metadata.id), (n = Ct(d, a));
                }
                var h = Te(t.rev_tree, n.metadata.rev_tree[0], e);
                if (
                  a &&
                  ((u && f && "new_leaf" !== h.conflicts) ||
                    (!u && "new_leaf" !== h.conflicts) ||
                    (u && !f && "new_branch" === h.conflicts))
                ) {
                  var p = Q(I);
                  return (r[i] = p), o();
                }
                var v = n.metadata.rev;
                (n.metadata.rev_tree = h.tree),
                  (n.stemmedRevs = h.stemmedRevs || []),
                  t.rev_map && (n.metadata.rev_map = t.rev_map);
                var y = qe(n.metadata),
                  _ = Me(n.metadata, y),
                  g = u === _ ? 0 : u < _ ? -1 : 1;
                s(n, y, _, v === y ? _ : Me(n.metadata, v), !0, g, i, o);
              }
              function It(e, t, n, r, i, s, a, c, u) {
                e = e || 1e3;
                var f = c.new_edits,
                  l = new o(),
                  d = 0,
                  h = t.length;
                function p() {
                  ++d === h && u && u();
                }
                t.forEach(function (e, t) {
                  if (e._id && Re(e._id)) {
                    var r = e._deleted ? "_removeLocal" : "_putLocal";
                    n[r](e, { ctx: i }, function (e, n) {
                      (s[t] = e || n), p();
                    });
                  } else {
                    var o = e.metadata.id;
                    l.has(o)
                      ? (h--, l.get(o).push([e, t]))
                      : l.set(o, [[e, t]]);
                  }
                }),
                  l.forEach(function (t, n) {
                    var i = 0;
                    function o() {
                      ++i < t.length ? u() : p();
                    }
                    function u() {
                      var u = t[i],
                        l = u[0],
                        d = u[1];
                      if (r.has(n)) Dt(e, r.get(n), l, s, d, o, a, f);
                      else {
                        var h = Te([], l.metadata.rev_tree[0], e);
                        (l.metadata.rev_tree = h.tree),
                          (l.stemmedRevs = h.stemmedRevs || []),
                          (function (e, t, n) {
                            var r = qe(e.metadata),
                              i = Me(e.metadata, r);
                            if ("was_delete" in c && i)
                              return (s[t] = Q(D, "deleted")), n();
                            if (
                              f &&
                              (function (e) {
                                return (
                                  "missing" ===
                                  e.metadata.rev_tree[0].ids[1].status
                                );
                              })(e)
                            ) {
                              var o = Q(I);
                              return (s[t] = o), n();
                            }
                            a(e, r, i, i, !1, i ? 0 : 1, t, n);
                          })(l, d, o);
                      }
                    }
                    u();
                  });
              }
              var Tt = "document-store",
                Bt = "meta-store";
              function Mt(e) {
                try {
                  return JSON.stringify(e);
                } catch (t) {
                  return u.stringify(e);
                }
              }
              function Rt(e) {
                return function (t) {
                  var n = "unknown_error";
                  t.target &&
                    t.target.error &&
                    (n = t.target.error.name || t.target.error.message),
                    e(Q(z, n, t.type));
                };
              }
              function Nt(e, t, n) {
                return {
                  data: Mt(e),
                  winningRev: t,
                  deletedOrLocal: n ? "1" : "0",
                  seq: e.seq,
                  id: e.id,
                };
              }
              function Ut(e) {
                if (!e) return null;
                var t = (function (e) {
                  try {
                    return JSON.parse(e);
                  } catch (t) {
                    return u.parse(e);
                  }
                })(e.data);
                return (
                  (t.winningRev = e.winningRev),
                  (t.deleted = "1" === e.deletedOrLocal),
                  (t.seq = e.seq),
                  t
                );
              }
              function Ft(e) {
                if (!e) return e;
                var t = e._doc_id_rev.lastIndexOf(":");
                return (
                  (e._id = e._doc_id_rev.substring(0, t - 1)),
                  (e._rev = e._doc_id_rev.substring(t + 1)),
                  delete e._doc_id_rev,
                  e
                );
              }
              function Kt(e, t, n, r) {
                n
                  ? r(
                      e
                        ? "string" != typeof e
                          ? e
                          : he(e, t)
                        : fe([""], { type: t })
                    )
                  : e
                  ? "string" != typeof e
                    ? pe(e, function (e) {
                        r(ue(e));
                      })
                    : r(e)
                  : r("");
              }
              function Jt(e, t, n, r) {
                var i = Object.keys(e._attachments || {});
                if (!i.length) return r && r();
                var o = 0;
                function s() {
                  ++o === i.length && r && r();
                }
                i.forEach(function (r) {
                  t.attachments && t.include_docs
                    ? (function (e, t) {
                        var r = e._attachments[t],
                          i = r.digest;
                        n.objectStore("attach-store").get(i).onsuccess =
                          function (e) {
                            (r.body = e.target.result.body), s();
                          };
                      })(e, r)
                    : ((e._attachments[r].stub = !0), s());
                });
              }
              function zt(e, t) {
                return Promise.all(
                  e.map(function (e) {
                    if (e.doc && e.doc._attachments) {
                      var n = Object.keys(e.doc._attachments);
                      return Promise.all(
                        n.map(function (n) {
                          var r = e.doc._attachments[n];
                          if ("body" in r) {
                            var i = r.body,
                              o = r.content_type;
                            return new Promise(function (s) {
                              Kt(i, o, t, function (t) {
                                (e.doc._attachments[n] = C(
                                  k(r, ["digest", "content_type"]),
                                  { data: t }
                                )),
                                  s();
                              });
                            });
                          }
                        })
                      );
                    }
                  })
                );
              }
              function Vt(e, t, n) {
                var r = [],
                  i = n.objectStore("by-sequence"),
                  o = n.objectStore("attach-store"),
                  s = n.objectStore("attach-seq-store"),
                  a = e.length;
                function c() {
                  --a ||
                    (function () {
                      if (!r.length) return;
                      r.forEach(function (e) {
                        s
                          .index("digestSeq")
                          .count(
                            IDBKeyRange.bound(e + "::", e + "::￿", !1, !1)
                          ).onsuccess = function (t) {
                          t.target.result || o.delete(e);
                        };
                      });
                    })();
                }
                e.forEach(function (e) {
                  var n = i.index("_doc_id_rev"),
                    o = t + "::" + e;
                  n.getKey(o).onsuccess = function (e) {
                    var t = e.target.result;
                    if ("number" != typeof t) return c();
                    i.delete(t),
                      (s
                        .index("seq")
                        .openCursor(IDBKeyRange.only(t)).onsuccess = function (
                        e
                      ) {
                        var t = e.target.result;
                        if (t) {
                          var n = t.value.digestSeq.split("::")[0];
                          r.push(n), s.delete(t.primaryKey), t.continue();
                        } else c();
                      });
                  };
                });
              }
              function Gt(e, t, n) {
                try {
                  return { txn: e.transaction(t, n) };
                } catch (e) {
                  return { error: e };
                }
              }
              var Qt = new (class extends f {
                constructor() {
                  super(),
                    (this._listeners = {}),
                    S() &&
                      addEventListener("storage", (e) => {
                        this.emit(e.key);
                      });
                }
                addListener(e, t, n, r) {
                  if (!this._listeners[t]) {
                    var i = !1,
                      o = this;
                    (this._listeners[t] = a), this.on(e, a);
                  }
                  function a() {
                    if (o._listeners[t])
                      if (i) i = "waiting";
                      else {
                        i = !0;
                        var e = k(r, [
                          "style",
                          "include_docs",
                          "attachments",
                          "conflicts",
                          "filter",
                          "doc_ids",
                          "view",
                          "since",
                          "query_params",
                          "binary",
                          "return_docs",
                        ]);
                        n.changes(e)
                          .on("change", function (e) {
                            e.seq > r.since &&
                              !r.cancelled &&
                              ((r.since = e.seq), r.onChange(e));
                          })
                          .on("complete", function () {
                            "waiting" === i && s(a), (i = !1);
                          })
                          .on("error", function () {
                            i = !1;
                          });
                      }
                  }
                }
                removeListener(e, t) {
                  t in this._listeners &&
                    (super.removeListener(e, this._listeners[t]),
                    delete this._listeners[t]);
                }
                notifyLocalWindows(e) {
                  S() &&
                    (localStorage[e] = "a" === localStorage[e] ? "b" : "a");
                }
                notify(e) {
                  this.emit(e), this.notifyLocalWindows(e);
                }
              })();
              function Wt(e, t, n, r, i, s) {
                for (
                  var a, c, u, f, l, d, h, p, v = t.docs, y = 0, _ = v.length;
                  y < _;
                  y++
                ) {
                  var g = v[y];
                  (g._id && Re(g._id)) ||
                    ((g = v[y] = Ct(g, n.new_edits, e)).error && !h && (h = g));
                }
                if (h) return s(h);
                var m = !1,
                  b = 0,
                  w = new Array(v.length),
                  k = new o(),
                  j = !1,
                  q = r._meta.blobSupport ? "blob" : "base64";
                function O() {
                  (m = !0), A();
                }
                function A() {
                  p && m && ((p.docCount += b), d.put(p));
                }
                function S() {
                  j || (Qt.notify(r._meta.name), s(null, w));
                }
                function x(e, t, n, r, i, o, s, a) {
                  (e.metadata.winningRev = t), (e.metadata.deleted = n);
                  var c = e.data;
                  if (
                    ((c._id = e.metadata.id),
                    (c._rev = e.metadata.rev),
                    r && (c._deleted = !0),
                    c._attachments && Object.keys(c._attachments).length)
                  )
                    return (function (e, t, n, r, i, o) {
                      var s = e.data,
                        a = 0,
                        c = Object.keys(s._attachments);
                      function u() {
                        a === c.length && E(e, t, n, r, i, o);
                      }
                      function l() {
                        a++, u();
                      }
                      c.forEach(function (n) {
                        var r = e.data._attachments[n];
                        if (r.stub) a++, u();
                        else {
                          var i = r.data;
                          delete r.data,
                            (r.revpos = parseInt(t, 10)),
                            (function (e, t, n) {
                              f.count(e).onsuccess = function (r) {
                                if (r.target.result) return n();
                                var i = { digest: e, body: t };
                                f.put(i).onsuccess = n;
                              };
                            })(r.digest, i, l);
                        }
                      });
                    })(e, t, n, i, s, a);
                  (b += o), A(), E(e, t, n, i, s, a);
                }
                function E(e, t, n, i, o, s) {
                  var f = e.data,
                    d = e.metadata;
                  function h(o) {
                    var s = e.stemmedRevs || [];
                    i &&
                      r.auto_compaction &&
                      (s = s.concat(
                        (function (e) {
                          var t = [];
                          return (
                            Oe(e.rev_tree, function (e, n, r, i, o) {
                              "available" !== o.status ||
                                e ||
                                (t.push(n + "-" + r), (o.status = "missing"));
                            }),
                            t
                          );
                        })(e.metadata)
                      )),
                      s && s.length && Vt(s, e.metadata.id, a),
                      (d.seq = o.target.result);
                    var u = Nt(d, t, n);
                    c.put(u).onsuccess = p;
                  }
                  function p() {
                    (w[o] = { ok: !0, id: d.id, rev: d.rev }),
                      k.set(e.metadata.id, e.metadata),
                      (function (e, t, n) {
                        var r = 0,
                          i = Object.keys(e.data._attachments || {});
                        if (!i.length) return n();
                        function o() {
                          ++r === i.length && n();
                        }
                        function s(n) {
                          var r = e.data._attachments[n].digest,
                            i = l.put({ seq: t, digestSeq: r + "::" + t });
                          (i.onsuccess = o),
                            (i.onerror = function (e) {
                              e.preventDefault(), e.stopPropagation(), o();
                            });
                        }
                        for (var a = 0; a < i.length; a++) s(i[a]);
                      })(e, d.seq, s);
                  }
                  (f._doc_id_rev = d.id + "::" + d.rev),
                    delete f._id,
                    delete f._rev;
                  var v = u.put(f);
                  (v.onsuccess = h),
                    (v.onerror = function (e) {
                      e.preventDefault(),
                        e.stopPropagation(),
                        (u
                          .index("_doc_id_rev")
                          .getKey(f._doc_id_rev).onsuccess = function (e) {
                          u.put(f, e.target.result).onsuccess = h;
                        });
                    });
                }
                !(function (e, t, n) {
                  if (!e.length) return n();
                  var r,
                    i = 0;
                  function o() {
                    i++, e.length === i && (r ? n(r) : n());
                  }
                  e.forEach(function (e) {
                    var n =
                        e.data && e.data._attachments
                          ? Object.keys(e.data._attachments)
                          : [],
                      i = 0;
                    if (!n.length) return o();
                    function s(e) {
                      (r = e), ++i === n.length && o();
                    }
                    for (var a in e.data._attachments)
                      Object.prototype.hasOwnProperty.call(
                        e.data._attachments,
                        a
                      ) && Lt(e.data._attachments[a], t, s);
                  });
                })(v, q, function (t) {
                  if (t) return s(t);
                  !(function () {
                    var t = Gt(
                      i,
                      [
                        Tt,
                        "by-sequence",
                        "attach-store",
                        "local-store",
                        "attach-seq-store",
                        Bt,
                      ],
                      "readwrite"
                    );
                    if (t.error) return s(t.error);
                    ((a = t.txn).onabort = Rt(s)),
                      (a.ontimeout = Rt(s)),
                      (a.oncomplete = S),
                      (c = a.objectStore(Tt)),
                      (u = a.objectStore("by-sequence")),
                      (f = a.objectStore("attach-store")),
                      (l = a.objectStore("attach-seq-store")),
                      ((d = a.objectStore(Bt)).get(Bt).onsuccess = function (
                        e
                      ) {
                        (p = e.target.result), A();
                      }),
                      (function (e) {
                        var t = [];
                        if (
                          (v.forEach(function (e) {
                            e.data &&
                              e.data._attachments &&
                              Object.keys(e.data._attachments).forEach(
                                function (n) {
                                  var r = e.data._attachments[n];
                                  r.stub && t.push(r.digest);
                                }
                              );
                          }),
                          !t.length)
                        )
                          return e();
                        var n,
                          r = 0;
                        t.forEach(function (i) {
                          !(function (e, t) {
                            f.get(e).onsuccess = function (n) {
                              if (n.target.result) t();
                              else {
                                var r = Q(
                                  G,
                                  "unknown stub attachment with digest " + e
                                );
                                (r.status = 412), t(r);
                              }
                            };
                          })(i, function (i) {
                            i && !n && (n = i), ++r === t.length && e(n);
                          });
                        });
                      })(function (t) {
                        if (t) return (j = !0), s(t);
                        !(function () {
                          if (!v.length) return;
                          var t = 0;
                          function i() {
                            ++t === v.length &&
                              It(e.revs_limit, v, r, k, a, w, x, n, O);
                          }
                          function o(e) {
                            var t = Ut(e.target.result);
                            t && k.set(t.id, t), i();
                          }
                          for (var s = 0, u = v.length; s < u; s++) {
                            var f = v[s];
                            if (f._id && Re(f._id)) i();
                            else c.get(f.metadata.id).onsuccess = o;
                          }
                        })();
                      });
                  })();
                });
              }
              function Yt(e, t, n, r, i) {
                var o, s, a;
                function c(e) {
                  (s = e.target.result), o && i(o, s, a);
                }
                function u(e) {
                  (o = e.target.result), s && i(o, s, a);
                }
                function f(e) {
                  var t = e.target.result;
                  if (!t) return i();
                  i([t.key], [t.value], t);
                }
                -1 === r && (r = 1e3),
                  "function" == typeof e.getAll &&
                  "function" == typeof e.getAllKeys &&
                  r > 1 &&
                  !n
                    ? ((a = {
                        continue: function () {
                          if (!o.length) return i();
                          var n,
                            a = o[o.length - 1];
                          if (t && t.upper)
                            try {
                              n = IDBKeyRange.bound(
                                a,
                                t.upper,
                                !0,
                                t.upperOpen
                              );
                            } catch (e) {
                              if ("DataError" === e.name && 0 === e.code)
                                return i();
                            }
                          else n = IDBKeyRange.lowerBound(a, !0);
                          (t = n),
                            (o = null),
                            (s = null),
                            (e.getAll(t, r).onsuccess = c),
                            (e.getAllKeys(t, r).onsuccess = u);
                        },
                      }),
                      (e.getAll(t, r).onsuccess = c),
                      (e.getAllKeys(t, r).onsuccess = u))
                    : n
                    ? (e.openCursor(t, "prev").onsuccess = f)
                    : (e.openCursor(t).onsuccess = f);
              }
              function Ht(e, t, n) {
                var r,
                  i,
                  o = "startkey" in e && e.startkey,
                  s = "endkey" in e && e.endkey,
                  a = "key" in e && e.key,
                  c = "keys" in e && e.keys,
                  u = e.skip || 0,
                  f = "number" == typeof e.limit ? e.limit : -1,
                  l = !1 !== e.inclusive_end;
                if (
                  !c &&
                  (i =
                    (r = (function (e, t, n, r, i) {
                      try {
                        if (e && t)
                          return i
                            ? IDBKeyRange.bound(t, e, !n, !1)
                            : IDBKeyRange.bound(e, t, !1, !n);
                        if (e)
                          return i
                            ? IDBKeyRange.upperBound(e)
                            : IDBKeyRange.lowerBound(e);
                        if (t)
                          return i
                            ? IDBKeyRange.lowerBound(t, !n)
                            : IDBKeyRange.upperBound(t, !n);
                        if (r) return IDBKeyRange.only(r);
                      } catch (e) {
                        return { error: e };
                      }
                      return null;
                    })(o, s, l, a, e.descending)) && r.error) &&
                  ("DataError" !== i.name || 0 !== i.code)
                )
                  return n(Q(z, i.name, i.message));
                var d = [Tt, "by-sequence", Bt];
                e.attachments && d.push("attach-store");
                var h = Gt(t, d, "readonly");
                if (h.error) return n(h.error);
                var p = h.txn;
                (p.oncomplete = function () {
                  e.attachments ? zt(k, e.binary).then(A) : A();
                }),
                  (p.onabort = Rt(n));
                var v,
                  y,
                  _,
                  g = p.objectStore(Tt),
                  m = p.objectStore("by-sequence"),
                  b = p.objectStore(Bt),
                  w = m.index("_doc_id_rev"),
                  k = [];
                function j(t, n) {
                  var r = { id: n.id, key: n.id, value: { rev: t } };
                  n.deleted
                    ? c && (k.push(r), (r.value.deleted = !0), (r.doc = null))
                    : u-- <= 0 &&
                      (k.push(r),
                      e.include_docs &&
                        (function (t, n, r) {
                          var i = t.id + "::" + r;
                          w.get(i).onsuccess = function (r) {
                            if (
                              ((n.doc = Ft(r.target.result) || {}), e.conflicts)
                            ) {
                              var i = xe(t);
                              i.length && (n.doc._conflicts = i);
                            }
                            Jt(n.doc, e, p);
                          };
                        })(n, r, t));
                }
                function q(e) {
                  for (var t = 0, n = e.length; t < n && k.length !== f; t++) {
                    var r = e[t];
                    if (r.error && c) k.push(r);
                    else {
                      var i = Ut(r);
                      j(i.winningRev, i);
                    }
                  }
                }
                function O(e, t, n) {
                  n && (q(t), k.length < f && n.continue());
                }
                function A() {
                  var t = { total_rows: v, offset: e.skip, rows: k };
                  e.update_seq && void 0 !== y && (t.update_seq = y),
                    n(null, t);
                }
                return (
                  (b.get(Bt).onsuccess = function (e) {
                    v = e.target.result.docCount;
                  }),
                  e.update_seq &&
                    ((_ = function (e) {
                      e.target.result &&
                        e.target.result.length > 0 &&
                        (y = e.target.result[0]);
                    }),
                    (m.openCursor(null, "prev").onsuccess = function (e) {
                      var t = e.target.result,
                        n = void 0;
                      return (
                        t && t.key && (n = t.key),
                        _({ target: { result: [n] } })
                      );
                    })),
                  i || 0 === f
                    ? void 0
                    : c
                    ? (function (e, t, n) {
                        var r = new Array(e.length),
                          i = 0;
                        e.forEach(function (o, s) {
                          t.get(o).onsuccess = function (t) {
                            t.target.result
                              ? (r[s] = t.target.result)
                              : (r[s] = { key: o, error: "not_found" }),
                              ++i === e.length && n(e, r, {});
                          };
                        });
                      })(e.keys, g, O)
                    : -1 === f
                    ? (function (e, t, n) {
                        if ("function" != typeof e.getAll) {
                          var r = [];
                          e.openCursor(t).onsuccess = function (e) {
                            var t = e.target.result;
                            t
                              ? (r.push(t.value), t.continue())
                              : n({ target: { result: r } });
                          };
                        } else e.getAll(t).onsuccess = n;
                      })(g, r, function (t) {
                        var n = t.target.result;
                        e.descending && (n = n.reverse()), q(n);
                      })
                    : void Yt(g, r, e.descending, f + u, O)
                );
              }
              var Xt = !1,
                Zt = [];
              function en() {
                !Xt && Zt.length && ((Xt = !0), Zt.shift()());
              }
              function tn(e, t, n, r) {
                if ((e = g(e)).continuous) {
                  var s = n + ":" + je();
                  return (
                    Qt.addListener(n, s, t, e),
                    Qt.notify(n),
                    {
                      cancel: function () {
                        Qt.removeListener(n, s);
                      },
                    }
                  );
                }
                var a = e.doc_ids && new i(e.doc_ids);
                e.since = e.since || 0;
                var c = e.since,
                  u = "limit" in e ? e.limit : -1;
                0 === u && (u = 1);
                var f,
                  l,
                  d,
                  h,
                  p = [],
                  v = 0,
                  y = Y(e),
                  _ = new o();
                function m(e, t, n, r) {
                  if (n.seq !== t) return r();
                  if (n.winningRev === e._rev) return r(n, e);
                  var i = e._id + "::" + n.winningRev;
                  h.get(i).onsuccess = function (e) {
                    r(n, Ft(e.target.result));
                  };
                }
                function b() {
                  e.complete(null, { results: p, last_seq: c });
                }
                var w = [Tt, "by-sequence"];
                e.attachments && w.push("attach-store");
                var k = Gt(r, w, "readonly");
                if (k.error) return e.complete(k.error);
                ((f = k.txn).onabort = Rt(e.complete)),
                  (f.oncomplete = function () {
                    !e.continuous && e.attachments ? zt(p).then(b) : b();
                  }),
                  (l = f.objectStore("by-sequence")),
                  (d = f.objectStore(Tt)),
                  (h = l.index("_doc_id_rev")),
                  Yt(
                    l,
                    e.since && !e.descending
                      ? IDBKeyRange.lowerBound(e.since, !0)
                      : null,
                    e.descending,
                    u,
                    function (t, n, r) {
                      if (r && t.length) {
                        var i = new Array(t.length),
                          o = new Array(t.length),
                          s = 0;
                        n.forEach(function (n, c) {
                          !(function (e, t, n) {
                            if (a && !a.has(e._id)) return n();
                            var r = _.get(e._id);
                            if (r) return m(e, t, r, n);
                            d.get(e._id).onsuccess = function (i) {
                              (r = Ut(i.target.result)),
                                _.set(e._id, r),
                                m(e, t, r, n);
                            };
                          })(Ft(n), t[c], function (n, a) {
                            (o[c] = n),
                              (i[c] = a),
                              ++s === t.length &&
                                (function () {
                                  for (
                                    var t = [], n = 0, s = i.length;
                                    n < s && v !== u;
                                    n++
                                  ) {
                                    var a = i[n];
                                    if (a) {
                                      var c = o[n];
                                      t.push(l(c, a));
                                    }
                                  }
                                  Promise.all(t)
                                    .then(function (t) {
                                      for (var n = 0, r = t.length; n < r; n++)
                                        t[n] && e.onChange(t[n]);
                                    })
                                    .catch(e.complete),
                                    v !== u && r.continue();
                                })();
                          });
                        });
                      }
                      function l(t, n) {
                        var r = e.processChange(n, t, e);
                        c = r.seq = t.seq;
                        var i = y(r);
                        return "object" == typeof i
                          ? Promise.reject(i)
                          : i
                          ? (v++,
                            e.return_docs && p.push(r),
                            e.attachments && e.include_docs
                              ? new Promise(function (t) {
                                  Jt(n, e, f, function () {
                                    zt([r], e.binary).then(function () {
                                      t(r);
                                    });
                                  });
                                })
                              : Promise.resolve(r))
                          : Promise.resolve();
                      }
                    }
                  );
              }
              var nn,
                rn = new o(),
                on = new o();
              function sn(e, t) {
                var n = this;
                !(function (e, t, n) {
                  Zt.push(function () {
                    e(function (e, r) {
                      !(function (e, t, n, r) {
                        try {
                          e(t, n);
                        } catch (t) {
                          r.emit("error", t);
                        }
                      })(t, e, r, n),
                        (Xt = !1),
                        s(function () {
                          en();
                        });
                    });
                  }),
                    en();
                })(
                  function (t) {
                    !(function (e, t, n) {
                      var r = t.name,
                        i = null,
                        o = null;
                      function a(e) {
                        return function (t, n) {
                          t &&
                            t instanceof Error &&
                            !t.reason &&
                            o &&
                            (t.reason = o),
                            e(t, n);
                        };
                      }
                      function c(e, t) {
                        var n = e.objectStore(Tt);
                        n.createIndex("deletedOrLocal", "deletedOrLocal", {
                          unique: !1,
                        }),
                          (n.openCursor().onsuccess = function (e) {
                            var r = e.target.result;
                            if (r) {
                              var i = r.value,
                                o = Me(i);
                              (i.deletedOrLocal = o ? "1" : "0"),
                                n.put(i),
                                r.continue();
                            } else t();
                          });
                      }
                      function u(e, t) {
                        var n = e.objectStore("local-store"),
                          r = e.objectStore(Tt),
                          i = e.objectStore("by-sequence");
                        r.openCursor().onsuccess = function (e) {
                          var o = e.target.result;
                          if (o) {
                            var s = o.value,
                              a = s.id,
                              c = Re(a),
                              u = qe(s);
                            if (c) {
                              var f = a + "::" + u,
                                l = a + "::",
                                d = a + "::~",
                                h = i.index("_doc_id_rev"),
                                p = IDBKeyRange.bound(l, d, !1, !1),
                                v = h.openCursor(p);
                              v.onsuccess = function (e) {
                                if ((v = e.target.result)) {
                                  var t = v.value;
                                  t._doc_id_rev === f && n.put(t),
                                    i.delete(v.primaryKey),
                                    v.continue();
                                } else r.delete(o.primaryKey), o.continue();
                              };
                            } else o.continue();
                          } else t && t();
                        };
                      }
                      function f(e, t) {
                        var n = e.objectStore("by-sequence"),
                          r = e.objectStore("attach-store"),
                          i = e.objectStore("attach-seq-store");
                        r.count().onsuccess = function (e) {
                          if (!e.target.result) return t();
                          n.openCursor().onsuccess = function (e) {
                            var n = e.target.result;
                            if (!n) return t();
                            for (
                              var r = n.value,
                                o = n.primaryKey,
                                s = Object.keys(r._attachments || {}),
                                a = {},
                                c = 0;
                              c < s.length;
                              c++
                            ) {
                              a[r._attachments[s[c]].digest] = !0;
                            }
                            var u = Object.keys(a);
                            for (c = 0; c < u.length; c++) {
                              var f = u[c];
                              i.put({ seq: o, digestSeq: f + "::" + o });
                            }
                            n.continue();
                          };
                        };
                      }
                      function l(e) {
                        var t = e.objectStore("by-sequence"),
                          n = e.objectStore(Tt);
                        n.openCursor().onsuccess = function (e) {
                          var r = e.target.result;
                          if (r) {
                            var i,
                              o = (i = r.value).data
                                ? Ut(i)
                                : ((i.deleted = "1" === i.deletedOrLocal), i);
                            if (((o.winningRev = o.winningRev || qe(o)), o.seq))
                              return s();
                            !(function () {
                              var e = o.id + "::",
                                n = o.id + "::￿",
                                r = t
                                  .index("_doc_id_rev")
                                  .openCursor(IDBKeyRange.bound(e, n)),
                                i = 0;
                              r.onsuccess = function (e) {
                                var t = e.target.result;
                                if (!t) return (o.seq = i), s();
                                var n = t.primaryKey;
                                n > i && (i = n), t.continue();
                              };
                            })();
                          }
                          function s() {
                            var e = Nt(o, o.winningRev, o.deleted);
                            n.put(e).onsuccess = function () {
                              r.continue();
                            };
                          }
                        };
                      }
                      (e._meta = null),
                        (e._remote = !1),
                        (e.type = function () {
                          return "idb";
                        }),
                        (e._id = b(function (t) {
                          t(null, e._meta.instanceId);
                        })),
                        (e._bulkDocs = function (n, r, o) {
                          Wt(t, n, r, e, i, a(o));
                        }),
                        (e._get = function (e, t, n) {
                          var r,
                            o,
                            s,
                            a = t.ctx;
                          if (!a) {
                            var c = Gt(
                              i,
                              [Tt, "by-sequence", "attach-store"],
                              "readonly"
                            );
                            if (c.error) return n(c.error);
                            a = c.txn;
                          }
                          function u() {
                            n(s, { doc: r, metadata: o, ctx: a });
                          }
                          a.objectStore(Tt).get(e).onsuccess = function (e) {
                            if (!(o = Ut(e.target.result)))
                              return (s = Q(D, "missing")), u();
                            var n;
                            if (t.rev)
                              n = t.latest
                                ? (function (e, t) {
                                    for (
                                      var n, r = t.rev_tree.slice();
                                      (n = r.pop());

                                    ) {
                                      var i = n.pos,
                                        o = n.ids,
                                        s = o[0],
                                        a = o[1],
                                        c = o[2],
                                        u = 0 === c.length,
                                        f = n.history ? n.history.slice() : [];
                                      if (
                                        (f.push({ id: s, pos: i, opts: a }), u)
                                      )
                                        for (
                                          var l = 0, d = f.length;
                                          l < d;
                                          l++
                                        ) {
                                          var h = f[l];
                                          if (h.pos + "-" + h.id === e)
                                            return i + "-" + s;
                                        }
                                      for (var p = 0, v = c.length; p < v; p++)
                                        r.push({
                                          pos: i + 1,
                                          ids: c[p],
                                          history: f,
                                        });
                                    }
                                    throw new Error(
                                      "Unable to resolve latest revision for id " +
                                        t.id +
                                        ", rev " +
                                        e
                                    );
                                  })(t.rev, o)
                                : t.rev;
                            else if (((n = o.winningRev), Me(o)))
                              return (s = Q(D, "deleted")), u();
                            var i = a.objectStore("by-sequence"),
                              c = o.id + "::" + n;
                            i.index("_doc_id_rev").get(c).onsuccess = function (
                              e
                            ) {
                              if (((r = e.target.result) && (r = Ft(r)), !r))
                                return (s = Q(D, "missing")), u();
                              u();
                            };
                          };
                        }),
                        (e._getAttachment = function (e, t, n, r, o) {
                          var s;
                          if (r.ctx) s = r.ctx;
                          else {
                            var a = Gt(
                              i,
                              [Tt, "by-sequence", "attach-store"],
                              "readonly"
                            );
                            if (a.error) return o(a.error);
                            s = a.txn;
                          }
                          var c = n.digest,
                            u = n.content_type;
                          s.objectStore("attach-store").get(c).onsuccess =
                            function (e) {
                              Kt(
                                e.target.result.body,
                                u,
                                r.binary,
                                function (e) {
                                  o(null, e);
                                }
                              );
                            };
                        }),
                        (e._info = function (t) {
                          var n,
                            r,
                            o = Gt(i, [Bt, "by-sequence"], "readonly");
                          if (o.error) return t(o.error);
                          var s = o.txn;
                          (s.objectStore(Bt).get(Bt).onsuccess = function (e) {
                            r = e.target.result.docCount;
                          }),
                            (s
                              .objectStore("by-sequence")
                              .openCursor(null, "prev").onsuccess = function (
                              e
                            ) {
                              var t = e.target.result;
                              n = t ? t.key : 0;
                            }),
                            (s.oncomplete = function () {
                              t(null, {
                                doc_count: r,
                                update_seq: n,
                                idb_attachment_format: e._meta.blobSupport
                                  ? "binary"
                                  : "base64",
                              });
                            });
                        }),
                        (e._allDocs = function (e, t) {
                          Ht(e, i, a(t));
                        }),
                        (e._changes = function (t) {
                          return tn(t, e, r, i);
                        }),
                        (e._close = function (e) {
                          i.close(), rn.delete(r), e();
                        }),
                        (e._getRevisionTree = function (e, t) {
                          var n = Gt(i, [Tt], "readonly");
                          if (n.error) return t(n.error);
                          n.txn.objectStore(Tt).get(e).onsuccess = function (
                            e
                          ) {
                            var n = Ut(e.target.result);
                            n ? t(null, n.rev_tree) : t(Q(D));
                          };
                        }),
                        (e._doCompaction = function (e, t, n) {
                          var r = Gt(
                            i,
                            [
                              Tt,
                              "by-sequence",
                              "attach-store",
                              "attach-seq-store",
                            ],
                            "readwrite"
                          );
                          if (r.error) return n(r.error);
                          var o = r.txn;
                          (o.objectStore(Tt).get(e).onsuccess = function (n) {
                            var r = Ut(n.target.result);
                            Oe(r.rev_tree, function (e, n, r, i, o) {
                              var s = n + "-" + r;
                              -1 !== t.indexOf(s) && (o.status = "missing");
                            }),
                              Vt(t, e, o);
                            var i = r.winningRev,
                              s = r.deleted;
                            o.objectStore(Tt).put(Nt(r, i, s));
                          }),
                            (o.onabort = Rt(n)),
                            (o.oncomplete = function () {
                              n();
                            });
                        }),
                        (e._getLocal = function (e, t) {
                          var n = Gt(i, ["local-store"], "readonly");
                          if (n.error) return t(n.error);
                          var r = n.txn.objectStore("local-store").get(e);
                          (r.onerror = Rt(t)),
                            (r.onsuccess = function (e) {
                              var n = e.target.result;
                              n ? (delete n._doc_id_rev, t(null, n)) : t(Q(D));
                            });
                        }),
                        (e._putLocal = function (e, t, n) {
                          "function" == typeof t && ((n = t), (t = {})),
                            delete e._revisions;
                          var r = e._rev,
                            o = e._id;
                          e._rev = r
                            ? "0-" + (parseInt(r.split("-")[1], 10) + 1)
                            : "0-1";
                          var s,
                            a = t.ctx;
                          if (!a) {
                            var c = Gt(i, ["local-store"], "readwrite");
                            if (c.error) return n(c.error);
                            ((a = c.txn).onerror = Rt(n)),
                              (a.oncomplete = function () {
                                s && n(null, s);
                              });
                          }
                          var u,
                            f = a.objectStore("local-store");
                          r
                            ? ((u = f.get(o)).onsuccess = function (i) {
                                var o = i.target.result;
                                o && o._rev === r
                                  ? (f.put(e).onsuccess = function () {
                                      (s = { ok: !0, id: e._id, rev: e._rev }),
                                        t.ctx && n(null, s);
                                    })
                                  : n(Q(I));
                              })
                            : (((u = f.add(e)).onerror = function (e) {
                                n(Q(I)),
                                  e.preventDefault(),
                                  e.stopPropagation();
                              }),
                              (u.onsuccess = function () {
                                (s = { ok: !0, id: e._id, rev: e._rev }),
                                  t.ctx && n(null, s);
                              }));
                        }),
                        (e._removeLocal = function (e, t, n) {
                          "function" == typeof t && ((n = t), (t = {}));
                          var r,
                            o = t.ctx;
                          if (!o) {
                            var s = Gt(i, ["local-store"], "readwrite");
                            if (s.error) return n(s.error);
                            (o = s.txn).oncomplete = function () {
                              r && n(null, r);
                            };
                          }
                          var a = e._id,
                            c = o.objectStore("local-store"),
                            u = c.get(a);
                          (u.onerror = Rt(n)),
                            (u.onsuccess = function (i) {
                              var o = i.target.result;
                              o && o._rev === e._rev
                                ? (c.delete(a),
                                  (r = { ok: !0, id: a, rev: "0-0" }),
                                  t.ctx && n(null, r))
                                : n(Q(D));
                            });
                        }),
                        (e._destroy = function (e, t) {
                          Qt.removeAllListeners(r);
                          var n = on.get(r);
                          n && n.result && (n.result.close(), rn.delete(r));
                          var i = indexedDB.deleteDatabase(r);
                          (i.onsuccess = function () {
                            on.delete(r),
                              S() &&
                                r in localStorage &&
                                delete localStorage[r],
                              t(null, { ok: !0 });
                          }),
                            (i.onerror = Rt(t));
                        });
                      var d = rn.get(r);
                      if (d)
                        return (
                          (i = d.idb),
                          (e._meta = d.global),
                          s(function () {
                            n(null, e);
                          })
                        );
                      var h = indexedDB.open(r, 5);
                      on.set(r, h),
                        (h.onupgradeneeded = function (e) {
                          var t = e.target.result;
                          if (e.oldVersion < 1)
                            return (function (e) {
                              var t = e.createObjectStore(Tt, {
                                keyPath: "id",
                              });
                              e
                                .createObjectStore("by-sequence", {
                                  autoIncrement: !0,
                                })
                                .createIndex("_doc_id_rev", "_doc_id_rev", {
                                  unique: !0,
                                }),
                                e.createObjectStore("attach-store", {
                                  keyPath: "digest",
                                }),
                                e.createObjectStore(Bt, {
                                  keyPath: "id",
                                  autoIncrement: !1,
                                }),
                                e.createObjectStore("detect-blob-support"),
                                t.createIndex(
                                  "deletedOrLocal",
                                  "deletedOrLocal",
                                  { unique: !1 }
                                ),
                                e.createObjectStore("local-store", {
                                  keyPath: "_id",
                                });
                              var n = e.createObjectStore("attach-seq-store", {
                                autoIncrement: !0,
                              });
                              n.createIndex("seq", "seq"),
                                n.createIndex("digestSeq", "digestSeq", {
                                  unique: !0,
                                });
                            })(t);
                          var n = e.currentTarget.transaction;
                          e.oldVersion < 3 &&
                            (function (e) {
                              e.createObjectStore("local-store", {
                                keyPath: "_id",
                              }).createIndex("_doc_id_rev", "_doc_id_rev", {
                                unique: !0,
                              });
                            })(t),
                            e.oldVersion < 4 &&
                              (function (e) {
                                var t = e.createObjectStore(
                                  "attach-seq-store",
                                  { autoIncrement: !0 }
                                );
                                t.createIndex("seq", "seq"),
                                  t.createIndex("digestSeq", "digestSeq", {
                                    unique: !0,
                                  });
                              })(t);
                          var r = [c, u, f, l],
                            i = e.oldVersion;
                          !(function e() {
                            var t = r[i - 1];
                            i++, t && t(n, e);
                          })();
                        }),
                        (h.onsuccess = function (t) {
                          ((i = t.target.result).onversionchange = function () {
                            i.close(), rn.delete(r);
                          }),
                            (i.onabort = function (e) {
                              x(
                                "error",
                                "Database has a global failure",
                                e.target.error
                              ),
                                (o = e.target.error),
                                i.close(),
                                rn.delete(r);
                            });
                          var s,
                            a,
                            c,
                            u,
                            f = i.transaction(
                              [Bt, "detect-blob-support", Tt],
                              "readwrite"
                            ),
                            l = !1;
                          function d() {
                            void 0 !== c &&
                              l &&
                              ((e._meta = {
                                name: r,
                                instanceId: u,
                                blobSupport: c,
                              }),
                              rn.set(r, { idb: i, global: e._meta }),
                              n(null, e));
                          }
                          function h() {
                            if (void 0 !== a && void 0 !== s) {
                              var e = r + "_id";
                              e in s ? (u = s[e]) : (s[e] = u = je()),
                                (s.docCount = a),
                                f.objectStore(Bt).put(s);
                            }
                          }
                          (f.objectStore(Bt).get(Bt).onsuccess = function (e) {
                            (s = e.target.result || { id: Bt }), h();
                          }),
                            (function (e, t) {
                              e
                                .objectStore(Tt)
                                .index("deletedOrLocal")
                                .count(IDBKeyRange.only("0")).onsuccess =
                                function (e) {
                                  t(e.target.result);
                                };
                            })(f, function (e) {
                              (a = e), h();
                            }),
                            nn ||
                              (nn = (function (e) {
                                return new Promise(function (t) {
                                  var n = fe([""]),
                                    r = e
                                      .objectStore("detect-blob-support")
                                      .put(n, "key");
                                  (r.onsuccess = function () {
                                    var e =
                                        navigator.userAgent.match(
                                          /Chrome\/(\d+)/
                                        ),
                                      n = navigator.userAgent.match(/Edge\//);
                                    t(n || !e || parseInt(e[1], 10) >= 43);
                                  }),
                                    (r.onerror = e.onabort =
                                      function (e) {
                                        e.preventDefault(),
                                          e.stopPropagation(),
                                          t(!1);
                                      });
                                }).catch(function () {
                                  return !1;
                                });
                              })(f)),
                            nn.then(function (e) {
                              (c = e), d();
                            }),
                            (f.oncomplete = function () {
                              (l = !0), d();
                            }),
                            (f.onabort = Rt(n));
                        }),
                        (h.onerror = function (e) {
                          var t = e.target.error && e.target.error.message;
                          t
                            ? -1 !==
                                t.indexOf(
                                  "stored database is a higher version"
                                ) &&
                              (t = new Error(
                                'This DB was created with the newer "indexeddb" adapter, but you are trying to open it with the older "idb" adapter'
                              ))
                            : (t =
                                "Failed to open indexedDB, are you in private browsing mode?"),
                            x("error", t),
                            n(Q(z, t));
                        });
                    })(n, e, t);
                  },
                  t,
                  n.constructor
                );
              }
              sn.valid = function () {
                try {
                  return (
                    "undefined" != typeof indexedDB &&
                    "undefined" != typeof IDBKeyRange
                  );
                } catch (e) {
                  return !1;
                }
              };
              let an = {};
              function cn(e) {
                let t = e.doc || e.ok,
                  n = t && t._attachments;
                n &&
                  Object.keys(n).forEach(function (e) {
                    let t = n[e];
                    t.data = he(t.data, t.content_type);
                  });
              }
              function un(e) {
                return /^_design/.test(e)
                  ? "_design/" + encodeURIComponent(e.slice(8))
                  : /^_local/.test(e)
                  ? "_local/" + encodeURIComponent(e.slice(7))
                  : encodeURIComponent(e);
              }
              function fn(e) {
                return e._attachments && Object.keys(e._attachments)
                  ? Promise.all(
                      Object.keys(e._attachments).map(function (t) {
                        let n = e._attachments[t];
                        if (n.data && "string" != typeof n.data)
                          return new Promise(function (e) {
                            ye(n.data, e);
                          }).then(function (e) {
                            n.data = e;
                          });
                      })
                    )
                  : Promise.resolve();
              }
              function ln(e, t) {
                if (
                  (function (e) {
                    if (!e.prefix) return !1;
                    let t = oe(e.prefix).protocol;
                    return "http" === t || "https" === t;
                  })(t)
                ) {
                  let n = t.name.substr(t.prefix.length);
                  e = t.prefix.replace(/\/?$/, "/") + encodeURIComponent(n);
                }
                let n = oe(e);
                (n.user || n.password) &&
                  (n.auth = { username: n.user, password: n.password });
                let r = n.path.replace(/(^\/|\/$)/g, "").split("/");
                return (
                  (n.db = r.pop()),
                  -1 === n.db.indexOf("%") && (n.db = encodeURIComponent(n.db)),
                  (n.path = r.join("/")),
                  n
                );
              }
              function dn(e, t) {
                return hn(e, e.db + "/" + t);
              }
              function hn(e, t) {
                let n = e.path ? "/" : "";
                return (
                  e.protocol +
                  "://" +
                  e.host +
                  (e.port ? ":" + e.port : "") +
                  "/" +
                  e.path +
                  n +
                  t
                );
              }
              function pn(e) {
                return (
                  "?" +
                  Object.keys(e)
                    .map(function (t) {
                      return t + "=" + encodeURIComponent(e[t]);
                    })
                    .join("&")
                );
              }
              function vn(e, t) {
                let r = this,
                  i = ln(e.name, e),
                  o = dn(i, "");
                e = g(e);
                const a = async function (t, n) {
                  if (
                    (((n = n || {}).headers = n.headers || new Ze()),
                    (n.credentials = "include"),
                    e.auth || i.auth)
                  ) {
                    let t = e.auth || i.auth,
                      r = t.username + ":" + t.password,
                      o = ue(unescape(encodeURIComponent(r)));
                    n.headers.set("Authorization", "Basic " + o);
                  }
                  let r = e.headers || {};
                  Object.keys(r).forEach(function (e) {
                    n.headers.append(e, r[e]);
                  }),
                    (function (e) {
                      let t =
                          "undefined" != typeof navigator && navigator.userAgent
                            ? navigator.userAgent.toLowerCase()
                            : "",
                        n = -1 !== t.indexOf("msie"),
                        r = -1 !== t.indexOf("trident"),
                        i = -1 !== t.indexOf("edge"),
                        o = !("method" in e) || "GET" === e.method;
                      return (n || r || i) && o;
                    })(n) &&
                      (t +=
                        (-1 === t.indexOf("?") ? "?" : "&") +
                        "_nonce=" +
                        Date.now());
                  let o = e.fetch || Xe;
                  return await o(t, n);
                };
                function c(e, t) {
                  return w(e, function (...e) {
                    l()
                      .then(function () {
                        return t.apply(this, e);
                      })
                      .catch(function (t) {
                        e.pop()(t);
                      });
                  }).bind(r);
                }
                async function u(e, t) {
                  let n = {};
                  ((t = t || {}).headers = t.headers || new Ze()),
                    t.headers.get("Content-Type") ||
                      t.headers.set("Content-Type", "application/json"),
                    t.headers.get("Accept") ||
                      t.headers.set("Accept", "application/json");
                  const r = await a(e, t);
                  (n.ok = r.ok), (n.status = r.status);
                  const i = await r.json();
                  if (((n.data = i), !n.ok)) {
                    throw ((n.data.status = n.status), W(n.data));
                  }
                  return (
                    Array.isArray(n.data) &&
                      (n.data = n.data.map(function (e) {
                        return e.error || e.missing ? W(e) : e;
                      })),
                    n
                  );
                }
                let f;
                async function l() {
                  return e.skip_setup
                    ? Promise.resolve()
                    : f ||
                        ((f = u(o)
                          .catch(function (e) {
                            return e && e.status && 404 === e.status
                              ? (P(
                                  404,
                                  "PouchDB is just detecting if the remote exists."
                                ),
                                u(o, { method: "PUT" }))
                              : Promise.reject(e);
                          })
                          .catch(function (e) {
                            return (
                              !(!e || !e.status || 412 !== e.status) ||
                              Promise.reject(e)
                            );
                          })),
                        f.catch(function () {
                          f = null;
                        }),
                        f);
                }
                function d(e) {
                  return e.split("/").map(encodeURIComponent).join("/");
                }
                s(function () {
                  t(null, r);
                }),
                  (r._remote = !0),
                  (r.type = function () {
                    return "http";
                  }),
                  (r.id = c("id", async function (e) {
                    let t;
                    try {
                      const e = await a(hn(i, ""));
                      t = await e.json();
                    } catch (e) {
                      t = {};
                    }
                    e(null, t && t.uuid ? t.uuid + i.db : dn(i, ""));
                  })),
                  (r.compact = c("compact", async function (e, t) {
                    "function" == typeof e && ((t = e), (e = {})),
                      (e = g(e)),
                      await u(dn(i, "_compact"), { method: "POST" }),
                      (function n() {
                        r.info(function (r, i) {
                          i && !i.compact_running
                            ? t(null, { ok: !0 })
                            : setTimeout(n, e.interval || 200);
                        });
                      })();
                  })),
                  (r.bulkGet = w("bulkGet", function (e, t) {
                    let n = this;
                    async function r(t) {
                      let n = {};
                      e.revs && (n.revs = !0),
                        e.attachments && (n.attachments = !0),
                        e.latest && (n.latest = !0);
                      try {
                        const r = await u(dn(i, "_bulk_get" + pn(n)), {
                          method: "POST",
                          body: JSON.stringify({ docs: e.docs }),
                        });
                        e.attachments &&
                          e.binary &&
                          r.data.results.forEach(function (e) {
                            e.docs.forEach(cn);
                          }),
                          t(null, r.data);
                      } catch (e) {
                        t(e);
                      }
                    }
                    function o() {
                      let r = Math.ceil(e.docs.length / 50),
                        i = 0,
                        o = new Array(r);
                      function s(e) {
                        return function (n, s) {
                          (o[e] = s.results),
                            ++i === r && t(null, { results: H(o) });
                        };
                      }
                      for (let t = 0; t < r; t++) {
                        let r = k(e, [
                          "revs",
                          "attachments",
                          "binary",
                          "latest",
                        ]);
                        (r.docs = e.docs.slice(
                          50 * t,
                          Math.min(e.docs.length, 50 * (t + 1))
                        )),
                          A(n, r, s(t));
                      }
                    }
                    let s = hn(i, ""),
                      a = an[s];
                    "boolean" != typeof a
                      ? r(function (e, n) {
                          e
                            ? ((an[s] = !1),
                              P(
                                e.status,
                                "PouchDB is just detecting if the remote supports the _bulk_get API."
                              ),
                              o())
                            : ((an[s] = !0), t(null, n));
                        })
                      : a
                      ? r(t)
                      : o();
                  })),
                  (r._info = async function (e) {
                    try {
                      await l();
                      const t = await a(dn(i, "")),
                        n = await t.json();
                      (n.host = dn(i, "")), e(null, n);
                    } catch (t) {
                      e(t);
                    }
                  }),
                  (r.fetch = async function (e, t) {
                    await l();
                    const n =
                      "/" === e.substring(0, 1)
                        ? hn(i, e.substring(1))
                        : dn(i, e);
                    return a(n, t);
                  }),
                  (r.get = c("get", async function (e, t, n) {
                    "function" == typeof t && ((n = t), (t = {}));
                    let r = {};
                    function o(e) {
                      let n = e._attachments,
                        r = n && Object.keys(n);
                      if (n && r.length)
                        return (function (e, t) {
                          return new Promise(function (n, r) {
                            var i,
                              o = 0,
                              s = 0,
                              a = 0,
                              c = e.length;
                            function u() {
                              ++a === c ? (i ? r(i) : n()) : d();
                            }
                            function f() {
                              o--, u();
                            }
                            function l(e) {
                              o--, (i = i || e), u();
                            }
                            function d() {
                              for (; o < t && s < c; ) o++, e[s++]().then(f, l);
                            }
                            d();
                          });
                        })(
                          r.map(function (r) {
                            return function () {
                              return (async function (r) {
                                const o = n[r],
                                  s = un(e._id) + "/" + d(r) + "?rev=" + e._rev,
                                  c = await a(dn(i, s));
                                let u, f;
                                if (
                                  ((u =
                                    "buffer" in c
                                      ? await c.buffer()
                                      : await c.blob()),
                                  t.binary)
                                ) {
                                  let e = Object.getOwnPropertyDescriptor(
                                    u.__proto__,
                                    "type"
                                  );
                                  (e && !e.set) || (u.type = o.content_type),
                                    (f = u);
                                } else
                                  f = await new Promise(function (e) {
                                    ye(u, e);
                                  });
                                delete o.stub, delete o.length, (o.data = f);
                              })(r);
                            };
                          }),
                          5
                        );
                    }
                    (t = g(t)).revs && (r.revs = !0),
                      t.revs_info && (r.revs_info = !0),
                      t.latest && (r.latest = !0),
                      t.open_revs &&
                        ("all" !== t.open_revs &&
                          (t.open_revs = JSON.stringify(t.open_revs)),
                        (r.open_revs = t.open_revs)),
                      t.rev && (r.rev = t.rev),
                      t.conflicts && (r.conflicts = t.conflicts),
                      t.update_seq && (r.update_seq = t.update_seq),
                      (e = un(e));
                    const s = dn(i, e + pn(r));
                    try {
                      const e = await u(s);
                      t.attachments &&
                        (await ((c = e.data),
                        Array.isArray(c)
                          ? Promise.all(
                              c.map(function (e) {
                                if (e.ok) return o(e.ok);
                              })
                            )
                          : o(c))),
                        n(null, e.data);
                    } catch (t) {
                      (t.docId = e), n(t);
                    }
                    var c;
                  })),
                  (r.remove = c("remove", async function (e, t, n, r) {
                    let o;
                    "string" == typeof t
                      ? ((o = { _id: e, _rev: t }),
                        "function" == typeof n && ((r = n), (n = {})))
                      : ((o = e),
                        "function" == typeof t
                          ? ((r = t), (n = {}))
                          : ((r = n), (n = t)));
                    const s = o._rev || n.rev,
                      a = dn(i, un(o._id)) + "?rev=" + s;
                    try {
                      r(null, (await u(a, { method: "DELETE" })).data);
                    } catch (e) {
                      r(e);
                    }
                  })),
                  (r.getAttachment = c(
                    "getAttachment",
                    async function (e, t, r, o) {
                      "function" == typeof r && ((o = r), (r = {}));
                      const s = r.rev ? "?rev=" + r.rev : "",
                        c = dn(i, un(e)) + "/" + d(t) + s;
                      let u;
                      try {
                        const e = await a(c, { method: "GET" });
                        if (!e.ok) throw e;
                        let t;
                        if (
                          ((u = e.headers.get("content-type")),
                          (t =
                            void 0 === n ||
                            n.browser ||
                            "function" != typeof e.buffer
                              ? await e.blob()
                              : await e.buffer()),
                          void 0 !== n && !n.browser)
                        ) {
                          var f = Object.getOwnPropertyDescriptor(
                            t.__proto__,
                            "type"
                          );
                          (f && !f.set) || (t.type = u);
                        }
                        o(null, t);
                      } catch (e) {
                        o(e);
                      }
                    }
                  )),
                  (r.removeAttachment = c(
                    "removeAttachment",
                    async function (e, t, n, r) {
                      const o = dn(i, un(e) + "/" + d(t)) + "?rev=" + n;
                      try {
                        r(null, (await u(o, { method: "DELETE" })).data);
                      } catch (e) {
                        r(e);
                      }
                    }
                  )),
                  (r.putAttachment = c(
                    "putAttachment",
                    async function (e, t, n, r, o, s) {
                      "function" == typeof o &&
                        ((s = o), (o = r), (r = n), (n = null));
                      const a = un(e) + "/" + d(t);
                      let c = dn(i, a);
                      if ((n && (c += "?rev=" + n), "string" == typeof r)) {
                        let e;
                        try {
                          e = ce(r);
                        } catch (e) {
                          return s(
                            Q(N, "Attachment is not a valid base64 string")
                          );
                        }
                        r = e ? de(e, o) : "";
                      }
                      try {
                        s(
                          null,
                          (
                            await u(c, {
                              headers: new Ze({ "Content-Type": o }),
                              method: "PUT",
                              body: r,
                            })
                          ).data
                        );
                      } catch (e) {
                        s(e);
                      }
                    }
                  )),
                  (r._bulkDocs = async function (e, t, n) {
                    e.new_edits = t.new_edits;
                    try {
                      await l(), await Promise.all(e.docs.map(fn));
                      n(
                        null,
                        (
                          await u(dn(i, "_bulk_docs"), {
                            method: "POST",
                            body: JSON.stringify(e),
                          })
                        ).data
                      );
                    } catch (e) {
                      n(e);
                    }
                  }),
                  (r._put = async function (e, t, n) {
                    try {
                      await l(), await fn(e);
                      n(
                        null,
                        (
                          await u(dn(i, un(e._id)), {
                            method: "PUT",
                            body: JSON.stringify(e),
                          })
                        ).data
                      );
                    } catch (t) {
                      (t.docId = e && e._id), n(t);
                    }
                  }),
                  (r.allDocs = c("allDocs", async function (e, t) {
                    "function" == typeof e && ((t = e), (e = {}));
                    let n,
                      r = {},
                      o = "GET";
                    (e = g(e)).conflicts && (r.conflicts = !0),
                      e.update_seq && (r.update_seq = !0),
                      e.descending && (r.descending = !0),
                      e.include_docs && (r.include_docs = !0),
                      e.attachments && (r.attachments = !0),
                      e.key && (r.key = JSON.stringify(e.key)),
                      e.start_key && (e.startkey = e.start_key),
                      e.startkey && (r.startkey = JSON.stringify(e.startkey)),
                      e.end_key && (e.endkey = e.end_key),
                      e.endkey && (r.endkey = JSON.stringify(e.endkey)),
                      void 0 !== e.inclusive_end &&
                        (r.inclusive_end = !!e.inclusive_end),
                      void 0 !== e.limit && (r.limit = e.limit),
                      void 0 !== e.skip && (r.skip = e.skip);
                    let s = pn(r);
                    void 0 !== e.keys && ((o = "POST"), (n = { keys: e.keys }));
                    try {
                      const r = await u(dn(i, "_all_docs" + s), {
                        method: o,
                        body: JSON.stringify(n),
                      });
                      e.include_docs &&
                        e.attachments &&
                        e.binary &&
                        r.data.rows.forEach(cn),
                        t(null, r.data);
                    } catch (e) {
                      t(e);
                    }
                  })),
                  (r._changes = function (e) {
                    let t = "batch_size" in e ? e.batch_size : 25;
                    (e = g(e)).continuous &&
                      !("heartbeat" in e) &&
                      (e.heartbeat = 1e4);
                    let n = "timeout" in e ? e.timeout : 3e4;
                    "timeout" in e &&
                      e.timeout &&
                      n - e.timeout < 5e3 &&
                      (n = e.timeout + 5e3),
                      "heartbeat" in e &&
                        e.heartbeat &&
                        n - e.heartbeat < 5e3 &&
                        (n = e.heartbeat + 5e3);
                    let r = {};
                    "timeout" in e && e.timeout && (r.timeout = e.timeout);
                    let o = void 0 !== e.limit && e.limit,
                      a = o;
                    if (
                      (e.style && (r.style = e.style),
                      (e.include_docs ||
                        (e.filter && "function" == typeof e.filter)) &&
                        (r.include_docs = !0),
                      e.attachments && (r.attachments = !0),
                      e.continuous && (r.feed = "longpoll"),
                      e.seq_interval && (r.seq_interval = e.seq_interval),
                      e.conflicts && (r.conflicts = !0),
                      e.descending && (r.descending = !0),
                      e.update_seq && (r.update_seq = !0),
                      "heartbeat" in e &&
                        e.heartbeat &&
                        (r.heartbeat = e.heartbeat),
                      e.filter &&
                        "string" == typeof e.filter &&
                        (r.filter = e.filter),
                      e.view &&
                        "string" == typeof e.view &&
                        ((r.filter = "_view"), (r.view = e.view)),
                      e.query_params && "object" == typeof e.query_params)
                    )
                      for (let t in e.query_params)
                        Object.prototype.hasOwnProperty.call(
                          e.query_params,
                          t
                        ) && (r[t] = e.query_params[t]);
                    let c,
                      f = "GET";
                    e.doc_ids
                      ? ((r.filter = "_doc_ids"),
                        (f = "POST"),
                        (c = { doc_ids: e.doc_ids }))
                      : e.selector &&
                        ((r.filter = "_selector"),
                        (f = "POST"),
                        (c = { selector: e.selector }));
                    let d,
                      h = new He();
                    const p = async function (n, s) {
                      if (e.aborted) return;
                      (r.since = n),
                        "object" == typeof r.since &&
                          (r.since = JSON.stringify(r.since)),
                        e.descending
                          ? o && (r.limit = a)
                          : (r.limit = !o || a > t ? t : a);
                      let p = dn(i, "_changes" + pn(r)),
                        v = {
                          signal: h.signal,
                          method: f,
                          body: JSON.stringify(c),
                        };
                      if (((d = n), !e.aborted))
                        try {
                          await l();
                          s(null, (await u(p, v)).data);
                        } catch (e) {
                          s(e);
                        }
                    };
                    let v = { results: [] };
                    const y = function (n, r) {
                      if (e.aborted) return;
                      let i = 0;
                      if (r && r.results) {
                        (i = r.results.length), (v.last_seq = r.last_seq);
                        let t = null,
                          n = null;
                        "number" == typeof r.pending && (t = r.pending),
                          ("string" != typeof v.last_seq &&
                            "number" != typeof v.last_seq) ||
                            (n = v.last_seq),
                          ({}.query = e.query_params),
                          (r.results = r.results.filter(function (r) {
                            a--;
                            let i = Y(e)(r);
                            return (
                              i &&
                                (e.include_docs &&
                                  e.attachments &&
                                  e.binary &&
                                  cn(r),
                                e.return_docs && v.results.push(r),
                                e.onChange(r, t, n)),
                              i
                            );
                          }));
                      } else if (n) return (e.aborted = !0), void e.complete(n);
                      r && r.last_seq && (d = r.last_seq);
                      let c = (o && a <= 0) || (r && i < t) || e.descending;
                      (!e.continuous || (o && a <= 0)) && c
                        ? e.complete(null, v)
                        : s(function () {
                            p(d, y);
                          });
                    };
                    return (
                      p(e.since || 0, y),
                      {
                        cancel: function () {
                          (e.aborted = !0), h.abort();
                        },
                      }
                    );
                  }),
                  (r.revsDiff = c("revsDiff", async function (e, t, n) {
                    "function" == typeof t && ((n = t), (t = {}));
                    try {
                      n(
                        null,
                        (
                          await u(dn(i, "_revs_diff"), {
                            method: "POST",
                            body: JSON.stringify(e),
                          })
                        ).data
                      );
                    } catch (e) {
                      n(e);
                    }
                  })),
                  (r._close = function (e) {
                    e();
                  }),
                  (r._destroy = async function (e, t) {
                    try {
                      t(null, await u(dn(i, ""), { method: "DELETE" }));
                    } catch (e) {
                      404 === e.status ? t(null, { ok: !0 }) : t(e);
                    }
                  });
              }
              vn.valid = function () {
                return !0;
              };
              class yn extends Error {
                constructor(e) {
                  super(),
                    (this.status = 400),
                    (this.name = "query_parse_error"),
                    (this.message = e),
                    (this.error = !0);
                  try {
                    Error.captureStackTrace(this, yn);
                  } catch (e) {}
                }
              }
              class _n extends Error {
                constructor(e) {
                  super(),
                    (this.status = 404),
                    (this.name = "not_found"),
                    (this.message = e),
                    (this.error = !0);
                  try {
                    Error.captureStackTrace(this, _n);
                  } catch (e) {}
                }
              }
              class gn extends Error {
                constructor(e) {
                  super(),
                    (this.status = 500),
                    (this.name = "invalid_value"),
                    (this.message = e),
                    (this.error = !0);
                  try {
                    Error.captureStackTrace(this, gn);
                  } catch (e) {}
                }
              }
              function mn(e, t) {
                return (
                  t &&
                    e.then(
                      function (e) {
                        s(function () {
                          t(null, e);
                        });
                      },
                      function (e) {
                        s(function () {
                          t(e);
                        });
                      }
                    ),
                  e
                );
              }
              function bn(e, t) {
                return function () {
                  var n = arguments,
                    r = this;
                  return e.add(function () {
                    return t.apply(r, n);
                  });
                };
              }
              function wn(e) {
                var t = new i(e),
                  n = new Array(t.size),
                  r = -1;
                return (
                  t.forEach(function (e) {
                    n[++r] = e;
                  }),
                  n
                );
              }
              function kn(e) {
                var t = new Array(e.size),
                  n = -1;
                return (
                  e.forEach(function (e, r) {
                    t[++n] = r;
                  }),
                  t
                );
              }
              function jn(e) {
                return new gn(
                  "builtin " +
                    e +
                    " function requires map values to be numbers or number arrays"
                );
              }
              function qn(e) {
                for (var t = 0, n = 0, r = e.length; n < r; n++) {
                  var i = e[n];
                  if ("number" != typeof i) {
                    if (!Array.isArray(i)) throw jn("_sum");
                    t = "number" == typeof t ? [t] : t;
                    for (var o = 0, s = i.length; o < s; o++) {
                      var a = i[o];
                      if ("number" != typeof a) throw jn("_sum");
                      void 0 === t[o] ? t.push(a) : (t[o] += a);
                    }
                  } else "number" == typeof t ? (t += i) : (t[0] += i);
                }
                return t;
              }
              var On = x.bind(null, "log"),
                An = Array.isArray,
                Sn = JSON.parse;
              function xn(e, t) {
                return se("return (" + e.replace(/;\s*$/, "") + ");", {
                  emit: t,
                  sum: qn,
                  log: On,
                  isArray: An,
                  toJSON: Sn,
                });
              }
              class En {
                constructor() {
                  this.promise = new Promise(function (e) {
                    e();
                  });
                }
                add(e) {
                  return (
                    (this.promise = this.promise
                      .catch(function () {})
                      .then(function () {
                        return e();
                      })),
                    this.promise
                  );
                }
                finish() {
                  return this.promise;
                }
              }
              function Pn(e) {
                if (!e) return "undefined";
                switch (typeof e) {
                  case "function":
                  case "string":
                    return e.toString();
                  default:
                    return JSON.stringify(e);
                }
              }
              async function Cn(e, t, n, r, i, o) {
                const s = (function (e, t) {
                  return Pn(e) + Pn(t) + "undefined";
                })(n, r);
                let a;
                if (!i && ((a = e._cachedViews = e._cachedViews || {}), a[s]))
                  return a[s];
                const c = e.info().then(async function (c) {
                  const u = c.db_name + "-mrview-" + (i ? "temp" : we(s));
                  await ae(e, "_local/" + o, function (e) {
                    e.views = e.views || {};
                    let n = t;
                    -1 === n.indexOf("/") && (n = t + "/" + t);
                    const r = (e.views[n] = e.views[n] || {});
                    if (!r[u]) return (r[u] = !0), e;
                  });
                  const f = (await e.registerDependentDatabase(u)).db;
                  f.auto_compaction = !0;
                  const l = {
                    name: u,
                    db: f,
                    sourceDB: e,
                    adapter: e.adapter,
                    mapFun: n,
                    reduceFun: r,
                  };
                  let d;
                  try {
                    d = await l.db.get("_local/lastSeq");
                  } catch (e) {
                    if (404 !== e.status) throw e;
                  }
                  return (
                    (l.seq = d ? d.seq : 0),
                    a &&
                      l.db.once("destroyed", function () {
                        delete a[s];
                      }),
                    l
                  );
                });
                return a && (a[s] = c), c;
              }
              var $n = {},
                Ln = new En();
              function Dn(e) {
                return -1 === e.indexOf("/") ? [e, e] : e.split("/");
              }
              function In(e, t, n) {
                try {
                  e.emit("error", t);
                } catch (e) {
                  x(
                    "error",
                    "The user's map/reduce function threw an uncaught error.\nYou can debug this error by doing:\nmyDatabase.on('error', function (err) { debugger; });\nPlease double-check your map/reduce function."
                  ),
                    x("error", t, n);
                }
              }
              var Tn = function (e, t) {
                  return qn(t);
                },
                Bn = function (e, t) {
                  return t.length;
                },
                Mn = function (e, t) {
                  return {
                    sum: qn(t),
                    min: Math.min.apply(null, t),
                    max: Math.max.apply(null, t),
                    count: t.length,
                    sumsqr: (function (e) {
                      for (var t = 0, n = 0, r = e.length; n < r; n++) {
                        var i = e[n];
                        t += i * i;
                      }
                      return t;
                    })(t),
                  };
                };
              var Rn = (function (e, t, n, r) {
                function a(e, t, n) {
                  try {
                    t(n);
                  } catch (r) {
                    In(e, r, { fun: t, doc: n });
                  }
                }
                function c(e, t, n, r, i) {
                  try {
                    return { output: t(n, r, i) };
                  } catch (o) {
                    return (
                      In(e, o, { fun: t, keys: n, values: r, rereduce: i }),
                      { error: o }
                    );
                  }
                }
                function u(e, t) {
                  const n = ct(e.key, t.key);
                  return 0 !== n ? n : ct(e.value, t.value);
                }
                function f(e, t, n) {
                  return (
                    (n = n || 0),
                    "number" == typeof t
                      ? e.slice(n, t + n)
                      : n > 0
                      ? e.slice(n)
                      : e
                  );
                }
                function l(e) {
                  const t = e.value;
                  return (t && "object" == typeof t && t._id) || e.id;
                }
                function d(e) {
                  return function (t) {
                    return (
                      e.include_docs &&
                        e.attachments &&
                        e.binary &&
                        (function (e) {
                          e.rows.forEach(function (e) {
                            const t = e.doc && e.doc._attachments;
                            t &&
                              Object.keys(t).forEach(function (e) {
                                const n = t[e];
                                t[e].data = he(n.data, n.content_type);
                              });
                          });
                        })(t),
                      t
                    );
                  };
                }
                function h(e, t, n, r) {
                  let i = t[e];
                  void 0 !== i &&
                    (r && (i = encodeURIComponent(JSON.stringify(i))),
                    n.push(e + "=" + i));
                }
                function p(e) {
                  if (void 0 !== e) {
                    const t = Number(e);
                    return isNaN(t) || t !== parseInt(e, 10) ? e : t;
                  }
                }
                function v(e, t) {
                  const n = e.descending ? "endkey" : "startkey",
                    r = e.descending ? "startkey" : "endkey";
                  if (void 0 !== e[n] && void 0 !== e[r] && ct(e[n], e[r]) > 0)
                    throw new yn(
                      "No rows can match your key range, reverse your start_key and end_key or set {descending : true}"
                    );
                  if (t.reduce && !1 !== e.reduce) {
                    if (e.include_docs)
                      throw new yn("{include_docs:true} is invalid for reduce");
                    if (
                      e.keys &&
                      e.keys.length > 1 &&
                      !e.group &&
                      !e.group_level
                    )
                      throw new yn(
                        "Multi-key fetches for reduce views must use {group: true}"
                      );
                  }
                  ["group_level", "limit", "skip"].forEach(function (t) {
                    const n = (function (e) {
                      if (e) {
                        if ("number" != typeof e)
                          return new yn(`Invalid value for integer: "${e}"`);
                        if (e < 0)
                          return new yn(
                            `Invalid value for positive integer: "${e}"`
                          );
                      }
                    })(e[t]);
                    if (n) throw n;
                  });
                }
                function y(e) {
                  return function (t) {
                    if (404 === t.status) return e;
                    throw t;
                  };
                }
                function _(e, t, n) {
                  return e.db
                    .get("_local/lastSeq")
                    .catch(y({ _id: "_local/lastSeq", seq: 0 }))
                    .then(function (r) {
                      var o = kn(t);
                      return Promise.all(
                        o.map(function (n) {
                          return (async function (e, t, n) {
                            const r = "_local/doc_" + e,
                              o = { _id: r, keys: [] },
                              s = n.get(e),
                              a = s[0],
                              c = s[1],
                              u = await ((function (e) {
                                return 1 === e.length && /^1-/.test(e[0].rev);
                              })(c)
                                ? Promise.resolve(o)
                                : t.db.get(r).catch(y(o)));
                            return (function (e, t) {
                              const n = [],
                                r = new i();
                              for (let e = 0, i = t.rows.length; e < i; e++) {
                                const i = t.rows[e].doc;
                                if (
                                  i &&
                                  (n.push(i),
                                  r.add(i._id),
                                  (i._deleted = !a.has(i._id)),
                                  !i._deleted)
                                ) {
                                  const e = a.get(i._id);
                                  "value" in e && (i.value = e.value);
                                }
                              }
                              const o = kn(a);
                              return (
                                o.forEach(function (e) {
                                  if (!r.has(e)) {
                                    const t = { _id: e },
                                      r = a.get(e);
                                    "value" in r && (t.value = r.value),
                                      n.push(t);
                                  }
                                }),
                                (e.keys = wn(o.concat(e.keys))),
                                n.push(e),
                                n
                              );
                            })(
                              u,
                              await (function (e) {
                                return e.keys.length
                                  ? t.db.allDocs({
                                      keys: e.keys,
                                      include_docs: !0,
                                    })
                                  : Promise.resolve({ rows: [] });
                              })(u)
                            );
                          })(n, e, t);
                        })
                      )
                        .then(function (t) {
                          var i = H(t);
                          return (
                            (r.seq = n), i.push(r), e.db.bulkDocs({ docs: i })
                          );
                        })
                        .then(() =>
                          (function (e) {
                            return e.sourceDB
                              .get("_local/purges")
                              .then(function (t) {
                                const n = t.purgeSeq;
                                return e.db
                                  .get("_local/purgeSeq")
                                  .then(function (e) {
                                    return e._rev;
                                  })
                                  .catch(function (e) {
                                    if (404 !== e.status) throw e;
                                  })
                                  .then(function (t) {
                                    return e.db.put({
                                      _id: "_local/purgeSeq",
                                      _rev: t,
                                      purgeSeq: n,
                                    });
                                  });
                              })
                              .catch(function (e) {
                                if (404 !== e.status) throw e;
                              });
                          })(e)
                        );
                    });
                }
                function g(e) {
                  const t = "string" == typeof e ? e : e.name;
                  let n = $n[t];
                  return n || (n = $n[t] = new En()), n;
                }
                async function m(e, n) {
                  return bn(g(e), function () {
                    return (async function (e, n) {
                      let r, i, s;
                      const c = t(e.mapFun, function (e, t) {
                        const n = { id: i._id, key: ut(e) };
                        null != t && (n.value = ut(t)), r.push(n);
                      });
                      let f = e.seq || 0;
                      let l = 0;
                      const d = { view: e.name, indexed_docs: l };
                      e.sourceDB.emit("indexing", d);
                      const h = new En();
                      async function p() {
                        return (function (t, d) {
                          var y = t.results;
                          if (!y.length && !d.length) return;
                          for (let e of d) {
                            if (
                              y.findIndex(function (t) {
                                return t.id === e.docId;
                              }) < 0
                            ) {
                              const t = {
                                _id: e.docId,
                                doc: { _id: e.docId, _deleted: 1 },
                                changes: [],
                              };
                              e.doc &&
                                ((t.doc = e.doc),
                                t.changes.push({ rev: e.doc._rev })),
                                y.push(t);
                            }
                          }
                          var g = (function (t) {
                            const n = new o();
                            for (let o = 0, s = t.length; o < s; o++) {
                              const s = t[o];
                              if ("_" !== s.doc._id[0]) {
                                (r = []),
                                  (i = s.doc),
                                  i._deleted || a(e.sourceDB, c, i),
                                  r.sort(u);
                                const t = v(r);
                                n.set(s.doc._id, [t, s.changes]);
                              }
                              f = s.seq;
                            }
                            return n;
                          })(y);
                          h.add(
                            (function (t, n) {
                              return function () {
                                return _(e, t, n);
                              };
                            })(g, f)
                          ),
                            (l += y.length);
                          const m = {
                            view: e.name,
                            last_seq: t.last_seq,
                            results_count: y.length,
                            indexed_docs: l,
                          };
                          if (
                            (e.sourceDB.emit("indexing", m),
                            e.sourceDB.activeTasks.update(s, {
                              completed_items: l,
                            }),
                            y.length < n.changes_batch_size)
                          )
                            return;
                          return p();
                        })(
                          await e.sourceDB.changes({
                            return_docs: !0,
                            conflicts: !0,
                            include_docs: !0,
                            style: "all_docs",
                            since: f,
                            limit: n.changes_batch_size,
                          }),
                          await e.db
                            .get("_local/purgeSeq")
                            .then(function (e) {
                              return e.purgeSeq;
                            })
                            .catch(function (e) {
                              if (e && 404 !== e.status) throw e;
                              return -1;
                            })
                            .then(function (t) {
                              return e.sourceDB
                                .get("_local/purges")
                                .then(function (n) {
                                  const r = n.purges
                                      .filter(function (e, n) {
                                        return n > t;
                                      })
                                      .map((e) => e.docId),
                                    i = r.filter(function (e, t) {
                                      return r.indexOf(e) === t;
                                    });
                                  return Promise.all(
                                    i.map(function (t) {
                                      return e.sourceDB
                                        .get(t)
                                        .then(function (e) {
                                          return { docId: t, doc: e };
                                        })
                                        .catch(function (e) {
                                          if (404 !== e.status) throw e;
                                          return { docId: t };
                                        });
                                    })
                                  );
                                })
                                .catch(function (e) {
                                  if (e && 404 !== e.status) throw e;
                                  return [];
                                });
                            })
                        );
                      }
                      function v(e) {
                        const t = new o();
                        let n;
                        for (let r = 0, i = e.length; r < i; r++) {
                          const i = e[r],
                            o = [i.key, i.id];
                          r > 0 && 0 === ct(i.key, n) && o.push(r),
                            t.set(lt(o), i),
                            (n = i.key);
                        }
                        return t;
                      }
                      try {
                        await e.sourceDB.info().then(function (t) {
                          s = e.sourceDB.activeTasks.add({
                            name: "view_indexing",
                            total_items: t.update_seq - f,
                          });
                        }),
                          await p(),
                          await h.finish(),
                          (e.seq = f),
                          e.sourceDB.activeTasks.remove(s);
                      } catch (t) {
                        e.sourceDB.activeTasks.remove(s, t);
                      }
                    })(e, n);
                  })();
                }
                function b(e, t) {
                  return bn(g(e), function () {
                    return (async function (e, t) {
                      let r;
                      const i = e.reduceFun && !1 !== t.reduce,
                        s = t.skip || 0;
                      void 0 === t.keys ||
                        t.keys.length ||
                        ((t.limit = 0), delete t.keys);
                      async function a(t) {
                        t.include_docs = !0;
                        const n = await e.db.allDocs(t);
                        return (
                          (r = n.total_rows),
                          n.rows.map(function (e) {
                            if (
                              "value" in e.doc &&
                              "object" == typeof e.doc.value &&
                              null !== e.doc.value
                            ) {
                              const t = Object.keys(e.doc.value).sort(),
                                n = ["id", "key", "value"];
                              if (!(t < n || t > n)) return e.doc.value;
                            }
                            const t = (function (e) {
                              for (var t = [], n = [], r = 0; ; ) {
                                var i = e[r++];
                                if ("\0" !== i)
                                  switch (i) {
                                    case "1":
                                      t.push(null);
                                      break;
                                    case "2":
                                      t.push("1" === e[r]), r++;
                                      break;
                                    case "3":
                                      var o = dt(e, r);
                                      t.push(o.num), (r += o.length);
                                      break;
                                    case "4":
                                      for (var s = ""; ; ) {
                                        var a = e[r];
                                        if ("\0" === a) break;
                                        (s += a), r++;
                                      }
                                      (s = s
                                        .replace(/\u0001\u0001/g, "\0")
                                        .replace(/\u0001\u0002/g, "")
                                        .replace(/\u0002\u0002/g, "")),
                                        t.push(s);
                                      break;
                                    case "5":
                                      var c = { element: [], index: t.length };
                                      t.push(c.element), n.push(c);
                                      break;
                                    case "6":
                                      var u = { element: {}, index: t.length };
                                      t.push(u.element), n.push(u);
                                      break;
                                    default:
                                      throw new Error(
                                        "bad collationIndex or unexpectedly reached end of input: " +
                                          i
                                      );
                                  }
                                else {
                                  if (1 === t.length) return t.pop();
                                  ht(t, n);
                                }
                              }
                            })(e.doc._id);
                            return {
                              key: t[0],
                              id: t[1],
                              value: "value" in e.doc ? e.doc.value : null,
                            };
                          })
                        );
                      }
                      async function u(a) {
                        let u;
                        if (
                          ((u = i
                            ? (function (e, t, r) {
                                0 === r.group_level && delete r.group_level;
                                const i = r.group || r.group_level,
                                  o = n(e.reduceFun),
                                  s = [],
                                  a = isNaN(r.group_level)
                                    ? Number.POSITIVE_INFINITY
                                    : r.group_level;
                                t.forEach(function (e) {
                                  const t = s[s.length - 1];
                                  let n = i ? e.key : null;
                                  if (
                                    (i &&
                                      Array.isArray(n) &&
                                      (n = n.slice(0, a)),
                                    t && 0 === ct(t.groupKey, n))
                                  )
                                    return (
                                      t.keys.push([e.key, e.id]),
                                      void t.values.push(e.value)
                                    );
                                  s.push({
                                    keys: [[e.key, e.id]],
                                    values: [e.value],
                                    groupKey: n,
                                  });
                                }),
                                  (t = []);
                                for (let n = 0, r = s.length; n < r; n++) {
                                  const r = s[n],
                                    i = c(e.sourceDB, o, r.keys, r.values, !1);
                                  if (i.error && i.error instanceof gn)
                                    throw i.error;
                                  t.push({
                                    value: i.error ? null : i.output,
                                    key: r.groupKey,
                                  });
                                }
                                return { rows: f(t, r.limit, r.skip) };
                              })(e, a, t)
                            : void 0 === t.keys
                            ? { total_rows: r, offset: s, rows: a }
                            : {
                                total_rows: r,
                                offset: s,
                                rows: f(a, t.limit, t.skip),
                              }),
                          t.update_seq && (u.update_seq = e.seq),
                          t.include_docs)
                        ) {
                          const n = wn(a.map(l)),
                            r = await e.sourceDB.allDocs({
                              keys: n,
                              include_docs: !0,
                              conflicts: t.conflicts,
                              attachments: t.attachments,
                              binary: t.binary,
                            });
                          var d = new o();
                          return (
                            r.rows.forEach(function (e) {
                              d.set(e.id, e.doc);
                            }),
                            a.forEach(function (e) {
                              var t = l(e),
                                n = d.get(t);
                              n && (e.doc = n);
                            }),
                            u
                          );
                        }
                        return u;
                      }
                      if (void 0 !== t.keys) {
                        const e = t.keys.map(function (e) {
                            const n = {
                              startkey: lt([e]),
                              endkey: lt([e, {}]),
                            };
                            return t.update_seq && (n.update_seq = !0), a(n);
                          }),
                          n = await Promise.all(e);
                        return u(H(n));
                      }
                      {
                        const e = { descending: t.descending };
                        let n, r;
                        if (
                          (t.update_seq && (e.update_seq = !0),
                          "start_key" in t && (n = t.start_key),
                          "startkey" in t && (n = t.startkey),
                          "end_key" in t && (r = t.end_key),
                          "endkey" in t && (r = t.endkey),
                          void 0 !== n &&
                            (e.startkey = t.descending ? lt([n, {}]) : lt([n])),
                          void 0 !== r)
                        ) {
                          let n = !1 !== t.inclusive_end;
                          t.descending && (n = !n),
                            (e.endkey = lt(n ? [r, {}] : [r]));
                        }
                        if (void 0 !== t.key) {
                          const n = lt([t.key]),
                            r = lt([t.key, {}]);
                          e.descending
                            ? ((e.endkey = n), (e.startkey = r))
                            : ((e.startkey = n), (e.endkey = r));
                        }
                        i ||
                          ("number" == typeof t.limit && (e.limit = t.limit),
                          (e.skip = s));
                        return u(await a(e));
                      }
                    })(e, t);
                  })();
                }
                async function w(t, n, i) {
                  if ("function" == typeof t._query)
                    return (function (e, t, n) {
                      return new Promise(function (r, i) {
                        e._query(t, n, function (e, t) {
                          if (e) return i(e);
                          r(t);
                        });
                      });
                    })(t, n, i);
                  if (Z(t))
                    return (async function (e, t, n) {
                      let r,
                        i,
                        o = [],
                        s = "GET";
                      if (
                        (h("reduce", n, o),
                        h("include_docs", n, o),
                        h("attachments", n, o),
                        h("limit", n, o),
                        h("descending", n, o),
                        h("group", n, o),
                        h("group_level", n, o),
                        h("skip", n, o),
                        h("stale", n, o),
                        h("conflicts", n, o),
                        h("startkey", n, o, !0),
                        h("start_key", n, o, !0),
                        h("endkey", n, o, !0),
                        h("end_key", n, o, !0),
                        h("inclusive_end", n, o),
                        h("key", n, o, !0),
                        h("update_seq", n, o),
                        (o = o.join("&")),
                        (o = "" === o ? "" : "?" + o),
                        void 0 !== n.keys)
                      ) {
                        const e = 2e3,
                          i =
                            "keys=" +
                            encodeURIComponent(JSON.stringify(n.keys));
                        i.length + o.length + 1 <= e
                          ? (o += ("?" === o[0] ? "&" : "?") + i)
                          : ((s = "POST"),
                            "string" == typeof t
                              ? (r = { keys: n.keys })
                              : (t.keys = n.keys));
                      }
                      if ("string" == typeof t) {
                        const a = Dn(t),
                          c = await e.fetch(
                            "_design/" + a[0] + "/_view/" + a[1] + o,
                            {
                              headers: new Ze({
                                "Content-Type": "application/json",
                              }),
                              method: s,
                              body: JSON.stringify(r),
                            }
                          );
                        i = c.ok;
                        const u = await c.json();
                        if (!i) throw ((u.status = c.status), W(u));
                        return (
                          u.rows.forEach(function (e) {
                            if (
                              e.value &&
                              e.value.error &&
                              "builtin_reduce_error" === e.value.error
                            )
                              throw new Error(e.reason);
                          }),
                          new Promise(function (e) {
                            e(u);
                          }).then(d(n))
                        );
                      }
                      (r = r || {}),
                        Object.keys(t).forEach(function (e) {
                          Array.isArray(t[e])
                            ? (r[e] = t[e])
                            : (r[e] = t[e].toString());
                        });
                      const a = await e.fetch("_temp_view" + o, {
                        headers: new Ze({ "Content-Type": "application/json" }),
                        method: "POST",
                        body: JSON.stringify(r),
                      });
                      i = a.ok;
                      const c = await a.json();
                      if (!i) throw ((c.status = a.status), W(c));
                      return new Promise(function (e) {
                        e(c);
                      }).then(d(n));
                    })(t, n, i);
                  const o = {
                    changes_batch_size:
                      t.__opts.view_update_changes_batch_size || 50,
                  };
                  if ("string" != typeof n)
                    return (
                      v(i, n),
                      Ln.add(async function () {
                        const r = await Cn(
                          t,
                          "temp_view/temp_view",
                          n.map,
                          n.reduce,
                          !0,
                          e
                        );
                        return (
                          (s = m(r, o).then(function () {
                            return b(r, i);
                          })),
                          (a = function () {
                            return r.db.destroy();
                          }),
                          s.then(
                            function (e) {
                              return a().then(function () {
                                return e;
                              });
                            },
                            function (e) {
                              return a().then(function () {
                                throw e;
                              });
                            }
                          )
                        );
                        var s, a;
                      }),
                      Ln.finish()
                    );
                  {
                    const a = n,
                      c = Dn(a),
                      u = c[0],
                      f = c[1],
                      l = await t.get("_design/" + u);
                    if (!(n = l.views && l.views[f]))
                      throw new _n(`ddoc ${l._id} has no view named ${f}`);
                    r(l, f), v(i, n);
                    const d = await Cn(t, a, n.map, n.reduce, !1, e);
                    return "ok" === i.stale || "update_after" === i.stale
                      ? ("update_after" === i.stale &&
                          s(function () {
                            m(d, o);
                          }),
                        b(d, i))
                      : (await m(d, o), b(d, i));
                  }
                }
                var k;
                return {
                  query: function (e, t, n) {
                    const r = this;
                    "function" == typeof t && ((n = t), (t = {})),
                      (t = t
                        ? (function (e) {
                            return (
                              (e.group_level = p(e.group_level)),
                              (e.limit = p(e.limit)),
                              (e.skip = p(e.skip)),
                              e
                            );
                          })(t)
                        : {}),
                      "function" == typeof e && (e = { map: e });
                    const i = Promise.resolve().then(function () {
                      return w(r, e, t);
                    });
                    return mn(i, n), i;
                  },
                  viewCleanup:
                    ((k = function () {
                      const t = this;
                      return "function" == typeof t._viewCleanup
                        ? (function (e) {
                            return new Promise(function (t, n) {
                              e._viewCleanup(function (e, r) {
                                if (e) return n(e);
                                t(r);
                              });
                            });
                          })(t)
                        : Z(t)
                        ? (async function (e) {
                            return (
                              await e.fetch("_view_cleanup", {
                                headers: new Ze({
                                  "Content-Type": "application/json",
                                }),
                                method: "POST",
                              })
                            ).json();
                          })(t)
                        : (async function (t) {
                            try {
                              const n = await t.get("_local/" + e),
                                r = new o();
                              Object.keys(n.views).forEach(function (e) {
                                const t = Dn(e),
                                  n = "_design/" + t[0],
                                  o = t[1];
                                let s = r.get(n);
                                s || ((s = new i()), r.set(n, s)), s.add(o);
                              });
                              const s = { keys: kn(r), include_docs: !0 },
                                a = await t.allDocs(s),
                                c = {};
                              a.rows.forEach(function (e) {
                                const t = e.key.substring(8);
                                r.get(e.key).forEach(function (r) {
                                  let i = t + "/" + r;
                                  n.views[i] || (i = r);
                                  const o = Object.keys(n.views[i]),
                                    s = e.doc && e.doc.views && e.doc.views[r];
                                  o.forEach(function (e) {
                                    c[e] = c[e] || s;
                                  });
                                });
                              });
                              const u = Object.keys(c)
                                .filter(function (e) {
                                  return !c[e];
                                })
                                .map(function (e) {
                                  return bn(g(e), function () {
                                    return new t.constructor(
                                      e,
                                      t.__opts
                                    ).destroy();
                                  })();
                                });
                              return Promise.all(u).then(function () {
                                return { ok: !0 };
                              });
                            } catch (e) {
                              if (404 === e.status) return { ok: !0 };
                              throw e;
                            }
                          })(t);
                    }),
                    function (...e) {
                      var t = e.pop(),
                        n = k.apply(this, e);
                      return "function" == typeof t && mn(n, t), n;
                    }),
                };
              })(
                "mrviews",
                function (e, t) {
                  if ("function" == typeof e && 2 === e.length) {
                    var n = e;
                    return function (e) {
                      return n(e, t);
                    };
                  }
                  return xn(e.toString(), t);
                },
                function (e) {
                  var t = e.toString(),
                    n = (function (e) {
                      if (/^_sum/.test(e)) return Tn;
                      if (/^_count/.test(e)) return Bn;
                      if (/^_stats/.test(e)) return Mn;
                      if (/^_/.test(e))
                        throw new Error(
                          e + " is not a supported reduce function."
                        );
                    })(t);
                  return n || xn(t);
                },
                function (e, t) {
                  var n = e.views && e.views[t];
                  if ("string" != typeof n.map)
                    throw new _n(
                      "ddoc " +
                        e._id +
                        " has no string view named " +
                        t +
                        ", instead found object of type: " +
                        typeof n.map
                    );
                }
              );
              var Nn = {
                query: function (e, t, n) {
                  return Rn.query.call(this, e, t, n);
                },
                viewCleanup: function (e) {
                  return Rn.viewCleanup.call(this, e);
                },
              };
              function Un(e, t) {
                var n = Object.keys(t._attachments);
                return Promise.all(
                  n.map(function (n) {
                    return e.getAttachment(t._id, n, { rev: t._rev });
                  })
                );
              }
              function Fn(e, t, n, r) {
                n = g(n);
                var i = [],
                  o = !0;
                return Promise.resolve()
                  .then(function () {
                    var s = (function (e) {
                      var t = [];
                      return (
                        Object.keys(e).forEach(function (n) {
                          e[n].missing.forEach(function (e) {
                            t.push({ id: n, rev: e });
                          });
                        }),
                        { docs: t, revs: !0, latest: !0 }
                      );
                    })(n);
                    if (s.docs.length)
                      return e.bulkGet(s).then(function (n) {
                        if (r.cancelled) throw new Error("cancelled");
                        return Promise.all(
                          n.results.map(function (n) {
                            return Promise.all(
                              n.docs.map(function (n) {
                                var r = n.ok;
                                return (
                                  n.error && (o = !1),
                                  r && r._attachments
                                    ? (function (e, t, n) {
                                        var r = Z(t) && !Z(e),
                                          i = Object.keys(n._attachments);
                                        return r
                                          ? e
                                              .get(n._id)
                                              .then(function (r) {
                                                return Promise.all(
                                                  i.map(function (i) {
                                                    return (function (e, t, n) {
                                                      return (
                                                        !e._attachments ||
                                                        !e._attachments[n] ||
                                                        e._attachments[n]
                                                          .digest !==
                                                          t._attachments[n]
                                                            .digest
                                                      );
                                                    })(r, n, i)
                                                      ? t.getAttachment(
                                                          n._id,
                                                          i
                                                        )
                                                      : e.getAttachment(
                                                          r._id,
                                                          i
                                                        );
                                                  })
                                                );
                                              })
                                              .catch(function (e) {
                                                if (404 !== e.status) throw e;
                                                return Un(t, n);
                                              })
                                          : Un(t, n);
                                      })(t, e, r).then(function (e) {
                                        var t = Object.keys(r._attachments);
                                        return (
                                          e.forEach(function (e, n) {
                                            var i = r._attachments[t[n]];
                                            delete i.stub,
                                              delete i.length,
                                              (i.data = e);
                                          }),
                                          r
                                        );
                                      })
                                    : r
                                );
                              })
                            );
                          })
                        ).then(function (e) {
                          i = i.concat(H(e).filter(Boolean));
                        });
                      });
                  })
                  .then(function () {
                    return { ok: o, docs: i };
                  });
              }
              function Kn(e, t, n, r, i) {
                return e
                  .get(t)
                  .catch(function (n) {
                    if (404 === n.status)
                      return (
                        ("http" !== e.adapter && "https" !== e.adapter) ||
                          P(
                            404,
                            "PouchDB is just checking if a remote checkpoint exists."
                          ),
                        {
                          session_id: r,
                          _id: t,
                          history: [],
                          replicator: "pouchdb",
                          version: 1,
                        }
                      );
                    throw n;
                  })
                  .then(function (o) {
                    if (!i.cancelled && o.last_seq !== n)
                      return (
                        (o.history = (o.history || []).filter(function (e) {
                          return e.session_id !== r;
                        })),
                        o.history.unshift({ last_seq: n, session_id: r }),
                        (o.history = o.history.slice(0, 5)),
                        (o.version = 1),
                        (o.replicator = "pouchdb"),
                        (o.session_id = r),
                        (o.last_seq = n),
                        e.put(o).catch(function (o) {
                          if (409 === o.status) return Kn(e, t, n, r, i);
                          throw o;
                        })
                      );
                  });
              }
              class Jn {
                constructor(e, t, n, r, i) {
                  (this.src = e),
                    (this.target = t),
                    (this.id = n),
                    (this.returnValue = r),
                    (this.opts = i || {});
                }
                writeCheckpoint(e, t) {
                  var n = this;
                  return this.updateTarget(e, t).then(function () {
                    return n.updateSource(e, t);
                  });
                }
                updateTarget(e, t) {
                  return this.opts.writeTargetCheckpoint
                    ? Kn(this.target, this.id, e, t, this.returnValue)
                    : Promise.resolve(!0);
                }
                updateSource(e, t) {
                  if (this.opts.writeSourceCheckpoint) {
                    var n = this;
                    return Kn(this.src, this.id, e, t, this.returnValue).catch(
                      function (e) {
                        if (Gn(e))
                          return (n.opts.writeSourceCheckpoint = !1), !0;
                        throw e;
                      }
                    );
                  }
                  return Promise.resolve(!0);
                }
                getCheckpoint() {
                  var e = this;
                  return e.opts &&
                    e.opts.writeSourceCheckpoint &&
                    !e.opts.writeTargetCheckpoint
                    ? e.src
                        .get(e.id)
                        .then(function (e) {
                          return e.last_seq || 0;
                        })
                        .catch(function (e) {
                          if (404 !== e.status) throw e;
                          return 0;
                        })
                    : e.target
                        .get(e.id)
                        .then(function (t) {
                          return e.opts &&
                            e.opts.writeTargetCheckpoint &&
                            !e.opts.writeSourceCheckpoint
                            ? t.last_seq || 0
                            : e.src.get(e.id).then(
                                function (e) {
                                  return t.version !== e.version
                                    ? 0
                                    : (n = t.version
                                        ? t.version.toString()
                                        : "undefined") in zn
                                    ? zn[n](t, e)
                                    : 0;
                                  var n;
                                },
                                function (n) {
                                  if (404 === n.status && t.last_seq)
                                    return e.src
                                      .put({ _id: e.id, last_seq: 0 })
                                      .then(
                                        function () {
                                          return 0;
                                        },
                                        function (n) {
                                          return Gn(n)
                                            ? ((e.opts.writeSourceCheckpoint =
                                                !1),
                                              t.last_seq)
                                            : 0;
                                        }
                                      );
                                  throw n;
                                }
                              );
                        })
                        .catch(function (e) {
                          if (404 !== e.status) throw e;
                          return 0;
                        });
                }
              }
              var zn = {
                undefined: function (e, t) {
                  return 0 === ct(e.last_seq, t.last_seq) ? t.last_seq : 0;
                },
                1: function (e, t) {
                  return (function (e, t) {
                    if (e.session_id === t.session_id)
                      return { last_seq: e.last_seq, history: e.history };
                    return (function e(t, n) {
                      var r = t[0],
                        i = t.slice(1),
                        o = n[0],
                        s = n.slice(1);
                      if (!r || 0 === n.length)
                        return { last_seq: 0, history: [] };
                      if (Vn(r.session_id, n))
                        return { last_seq: r.last_seq, history: t };
                      if (Vn(o.session_id, i))
                        return { last_seq: o.last_seq, history: s };
                      return e(i, s);
                    })(e.history, t.history);
                  })(t, e).last_seq;
                },
              };
              function Vn(e, t) {
                var n = t[0],
                  r = t.slice(1);
                return (
                  !(!e || 0 === t.length) && (e === n.session_id || Vn(e, r))
                );
              }
              function Gn(e) {
                return (
                  "number" == typeof e.status &&
                  4 === Math.floor(e.status / 100)
                );
              }
              function Qn(e, t, n, r, i) {
                return this instanceof Jn ? Qn : new Jn(e, t, n, r, i);
              }
              function Wn(e, t, n) {
                var r = n.doc_ids ? n.doc_ids.sort(ct) : "",
                  i = n.filter ? n.filter.toString() : "",
                  o = "",
                  s = "",
                  a = "";
                return (
                  n.selector && (a = JSON.stringify(n.selector)),
                  n.filter &&
                    n.query_params &&
                    (o = JSON.stringify(
                      (function (e) {
                        return Object.keys(e)
                          .sort(ct)
                          .reduce(function (t, n) {
                            return (t[n] = e[n]), t;
                          }, {});
                      })(n.query_params)
                    )),
                  n.filter && "_view" === n.filter && (s = n.view.toString()),
                  Promise.all([e.id(), t.id()])
                    .then(function (e) {
                      var t = e[0] + e[1] + i + s + o + r + a;
                      return new Promise(function (e) {
                        be(t, e);
                      });
                    })
                    .then(function (e) {
                      return (
                        "_local/" +
                        (e = e.replace(/\//g, ".").replace(/\+/g, "_"))
                      );
                    })
                );
              }
              function Yn(e, t, n, r, i) {
                var o,
                  a,
                  c,
                  u,
                  f = [],
                  l = { seq: 0, changes: [], docs: [] },
                  d = !1,
                  h = !1,
                  p = !1,
                  v = 0,
                  y = 0,
                  _ = n.continuous || n.live || !1,
                  m = n.batch_size || 100,
                  b = n.batches_limit || 10,
                  w = n.style || "all_docs",
                  k = !1,
                  j = n.doc_ids,
                  q = n.selector,
                  O = [],
                  A = je();
                i = i || {
                  ok: !0,
                  start_time: new Date().toISOString(),
                  docs_read: 0,
                  docs_written: 0,
                  doc_write_failures: 0,
                  errors: [],
                };
                var S = {};
                function x() {
                  return c
                    ? Promise.resolve()
                    : Wn(e, t, n).then(function (i) {
                        a = i;
                        var o = {};
                        (o =
                          !1 === n.checkpoint
                            ? {
                                writeSourceCheckpoint: !1,
                                writeTargetCheckpoint: !1,
                              }
                            : "source" === n.checkpoint
                            ? {
                                writeSourceCheckpoint: !0,
                                writeTargetCheckpoint: !1,
                              }
                            : "target" === n.checkpoint
                            ? {
                                writeSourceCheckpoint: !1,
                                writeTargetCheckpoint: !0,
                              }
                            : {
                                writeSourceCheckpoint: !0,
                                writeTargetCheckpoint: !0,
                              }),
                          (c = new Qn(e, t, a, r, o));
                      });
                }
                function P() {
                  if (((O = []), 0 !== o.docs.length)) {
                    var e = o.docs,
                      s = { timeout: n.timeout };
                    return t.bulkDocs({ docs: e, new_edits: !1 }, s).then(
                      function (t) {
                        if (r.cancelled) throw (T(), new Error("cancelled"));
                        var n = Object.create(null);
                        t.forEach(function (e) {
                          e.error && (n[e.id] = e);
                        });
                        var o = Object.keys(n).length;
                        (i.doc_write_failures += o),
                          (i.docs_written += e.length - o),
                          e.forEach(function (e) {
                            var t = n[e._id];
                            if (t) {
                              i.errors.push(t);
                              var o = (t.name || "").toLowerCase();
                              if ("unauthorized" !== o && "forbidden" !== o)
                                throw t;
                              r.emit("denied", g(t));
                            } else O.push(e);
                          });
                      },
                      function (t) {
                        throw ((i.doc_write_failures += e.length), t);
                      }
                    );
                  }
                }
                function C() {
                  if (o.error)
                    throw new Error("There was a problem getting docs.");
                  i.last_seq = y = o.seq;
                  var t = g(i);
                  return (
                    O.length &&
                      ((t.docs = O),
                      "number" == typeof o.pending &&
                        ((t.pending = o.pending), delete o.pending),
                      r.emit("change", t)),
                    (d = !0),
                    e.info().then(function (t) {
                      var n = e.activeTasks.get(u);
                      if (o && n) {
                        var r = n.completed_items || 0,
                          i = parseInt(t.update_seq, 10) - parseInt(v, 10);
                        e.activeTasks.update(u, {
                          completed_items: r + o.changes.length,
                          total_items: i,
                        });
                      }
                    }),
                    c
                      .writeCheckpoint(o.seq, A)
                      .then(function () {
                        if (
                          (r.emit("checkpoint", { checkpoint: o.seq }),
                          (d = !1),
                          r.cancelled)
                        )
                          throw (T(), new Error("cancelled"));
                        (o = void 0), N();
                      })
                      .catch(function (e) {
                        throw (K(e), e);
                      })
                  );
                }
                function $() {
                  return Fn(e, t, o.diffs, r).then(function (e) {
                    (o.error = !e.ok),
                      e.docs.forEach(function (e) {
                        delete o.diffs[e._id], i.docs_read++, o.docs.push(e);
                      });
                  });
                }
                function L() {
                  var e;
                  r.cancelled ||
                    o ||
                    (0 !== f.length
                      ? ((o = f.shift()),
                        r.emit("checkpoint", { start_next_batch: o.seq }),
                        ((e = {}),
                        o.changes.forEach(function (t) {
                          r.emit("checkpoint", { revs_diff: t }),
                            "_user/" !== t.id &&
                              (e[t.id] = t.changes.map(function (e) {
                                return e.rev;
                              }));
                        }),
                        t.revsDiff(e).then(function (e) {
                          if (r.cancelled) throw (T(), new Error("cancelled"));
                          o.diffs = e;
                        }))
                          .then($)
                          .then(P)
                          .then(C)
                          .then(L)
                          .catch(function (e) {
                            I("batch processing terminated with error", e);
                          }))
                      : D(!0));
                }
                function D(e) {
                  0 !== l.changes.length
                    ? (e || h || l.changes.length >= m) &&
                      (f.push(l),
                      (l = { seq: 0, changes: [], docs: [] }),
                      ("pending" !== r.state && "stopped" !== r.state) ||
                        ((r.state = "active"), r.emit("active")),
                      L())
                    : 0 !== f.length ||
                      o ||
                      (((_ && S.live) || h) &&
                        ((r.state = "pending"), r.emit("paused")),
                      h && T());
                }
                function I(e, t) {
                  p ||
                    (t.message || (t.message = e),
                    (i.ok = !1),
                    (i.status = "aborting"),
                    (f = []),
                    (l = { seq: 0, changes: [], docs: [] }),
                    T(t));
                }
                function T(o) {
                  if (!(p || (r.cancelled && ((i.status = "cancelled"), d))))
                    if (
                      ((i.status = i.status || "complete"),
                      (i.end_time = new Date().toISOString()),
                      (i.last_seq = y),
                      (p = !0),
                      e.activeTasks.remove(u, o),
                      o)
                    ) {
                      (o = Q(o)).result = i;
                      var s = (o.name || "").toLowerCase();
                      "unauthorized" === s || "forbidden" === s
                        ? (r.emit("error", o), r.removeAllListeners())
                        : (function (e, t, n, r) {
                            if (!1 === e.retry)
                              return (
                                t.emit("error", n), void t.removeAllListeners()
                              );
                            if (
                              ("function" != typeof e.back_off_function &&
                                (e.back_off_function = E),
                              t.emit("requestError", n),
                              "active" === t.state || "pending" === t.state)
                            ) {
                              t.emit("paused", n), (t.state = "stopped");
                              var i = function () {
                                e.current_back_off = 0;
                              };
                              t.once("paused", function () {
                                t.removeListener("active", i);
                              }),
                                t.once("active", i);
                            }
                            (e.current_back_off = e.current_back_off || 0),
                              (e.current_back_off = e.back_off_function(
                                e.current_back_off
                              )),
                              setTimeout(r, e.current_back_off);
                          })(n, r, o, function () {
                            Yn(e, t, n, r);
                          });
                    } else r.emit("complete", i), r.removeAllListeners();
                }
                function B(t, i, o) {
                  if (r.cancelled) return T();
                  if (("number" == typeof i && (l.pending = i), Y(n)(t)))
                    (l.seq = t.seq || o),
                      l.changes.push(t),
                      r.emit("checkpoint", { pending_batch: l.seq }),
                      s(function () {
                        D(0 === f.length && S.live);
                      });
                  else {
                    var a = e.activeTasks.get(u);
                    if (a) {
                      var c = a.completed_items || 0;
                      e.activeTasks.update(u, { completed_items: ++c });
                    }
                  }
                }
                function M(e) {
                  if (((k = !1), r.cancelled)) return T();
                  if (e.results.length > 0)
                    (S.since = e.results[e.results.length - 1].seq), N(), D(!0);
                  else {
                    var t = function () {
                      _ ? ((S.live = !0), N()) : (h = !0), D(!0);
                    };
                    o || 0 !== e.results.length
                      ? t()
                      : ((d = !0),
                        c
                          .writeCheckpoint(e.last_seq, A)
                          .then(function () {
                            if (
                              ((d = !1),
                              (i.last_seq = y = e.last_seq),
                              r.cancelled)
                            )
                              throw (T(), new Error("cancelled"));
                            t();
                          })
                          .catch(K));
                  }
                }
                function R(e) {
                  if (((k = !1), r.cancelled)) return T();
                  I("changes rejected", e);
                }
                function N() {
                  if (!k && !h && f.length < b) {
                    (k = !0),
                      r._changes &&
                        (r.removeListener("cancel", r._abortChanges),
                        r._changes.cancel()),
                      r.once("cancel", i);
                    var t = e.changes(S).on("change", B);
                    t.then(o, o),
                      t.then(M).catch(R),
                      n.retry && ((r._changes = t), (r._abortChanges = i));
                  }
                  function i() {
                    t.cancel();
                  }
                  function o() {
                    r.removeListener("cancel", i);
                  }
                }
                function U(t) {
                  return e.info().then(function (r) {
                    var i =
                      void 0 === n.since
                        ? parseInt(r.update_seq, 10) - parseInt(t, 10)
                        : parseInt(r.update_seq, 10);
                    return (
                      (u = e.activeTasks.add({
                        name: `${_ ? "continuous " : ""}replication from ${
                          r.db_name
                        }`,
                        total_items: i,
                      })),
                      t
                    );
                  });
                }
                function F() {
                  x()
                    .then(function () {
                      if (!r.cancelled)
                        return c
                          .getCheckpoint()
                          .then(U)
                          .then(function (e) {
                            (v = e),
                              (S = {
                                since: (y = e),
                                limit: m,
                                batch_size: m,
                                style: w,
                                doc_ids: j,
                                selector: q,
                                return_docs: !0,
                              }),
                              n.filter &&
                                ("string" != typeof n.filter
                                  ? (S.include_docs = !0)
                                  : (S.filter = n.filter)),
                              "heartbeat" in n && (S.heartbeat = n.heartbeat),
                              "timeout" in n && (S.timeout = n.timeout),
                              n.query_params &&
                                (S.query_params = n.query_params),
                              n.view && (S.view = n.view),
                              N();
                          });
                      T();
                    })
                    .catch(function (e) {
                      I("getCheckpoint rejected with ", e);
                    });
                }
                function K(e) {
                  (d = !1), I("writeCheckpoint completed with error", e);
                }
                r.ready(e, t),
                  r.cancelled
                    ? T()
                    : (r._addedListeners ||
                        (r.once("cancel", T),
                        "function" == typeof n.complete &&
                          (r.once("error", n.complete),
                          r.once("complete", function (e) {
                            n.complete(null, e);
                          })),
                        (r._addedListeners = !0)),
                      void 0 === n.since
                        ? F()
                        : x()
                            .then(function () {
                              return (d = !0), c.writeCheckpoint(n.since, A);
                            })
                            .then(function () {
                              (d = !1),
                                r.cancelled ? T() : ((y = n.since), F());
                            })
                            .catch(K));
              }
              class Hn extends f {
                constructor() {
                  super(), (this.cancelled = !1), (this.state = "pending");
                  const e = new Promise((e, t) => {
                    this.once("complete", e), this.once("error", t);
                  });
                  (this.then = function (t, n) {
                    return e.then(t, n);
                  }),
                    (this.catch = function (t) {
                      return e.catch(t);
                    }),
                    this.catch(function () {});
                }
                cancel() {
                  (this.cancelled = !0),
                    (this.state = "cancelled"),
                    this.emit("cancel");
                }
                ready(e, t) {
                  if (this._readyCalled) return;
                  this._readyCalled = !0;
                  const n = () => {
                    this.cancel();
                  };
                  function r() {
                    e.removeListener("destroyed", n),
                      t.removeListener("destroyed", n);
                  }
                  e.once("destroyed", n),
                    t.once("destroyed", n),
                    this.once("complete", r),
                    this.once("error", r);
                }
              }
              function Xn(e, t) {
                var n = t.PouchConstructor;
                return "string" == typeof e ? new n(e, t) : e;
              }
              function Zn(e, t, n, r) {
                if (
                  ("function" == typeof n && ((r = n), (n = {})),
                  void 0 === n && (n = {}),
                  n.doc_ids && !Array.isArray(n.doc_ids))
                )
                  throw Q(K, "`doc_ids` filter parameter is not a list.");
                (n.complete = r),
                  ((n = g(n)).continuous = n.continuous || n.live),
                  (n.retry = "retry" in n && n.retry),
                  (n.PouchConstructor = n.PouchConstructor || this);
                var i = new Hn(n);
                return Yn(Xn(e, n), Xn(t, n), n, i), i;
              }
              function er(e, t, n, r) {
                return (
                  "function" == typeof n && ((r = n), (n = {})),
                  void 0 === n && (n = {}),
                  ((n = g(n)).PouchConstructor = n.PouchConstructor || this),
                  (e = Xn(e, n)),
                  (t = Xn(t, n)),
                  new tr(e, t, n, r)
                );
              }
              class tr extends f {
                constructor(e, t, n, r) {
                  super(), (this.canceled = !1);
                  const i = n.push ? C({}, n, n.push) : n,
                    o = n.pull ? C({}, n, n.pull) : n;
                  (this.push = Zn(e, t, i)),
                    (this.pull = Zn(t, e, o)),
                    (this.pushPaused = !0),
                    (this.pullPaused = !0);
                  const s = (e) => {
                      this.emit("change", { direction: "pull", change: e });
                    },
                    a = (e) => {
                      this.emit("change", { direction: "push", change: e });
                    },
                    c = (e) => {
                      this.emit("denied", { direction: "push", doc: e });
                    },
                    u = (e) => {
                      this.emit("denied", { direction: "pull", doc: e });
                    },
                    f = () => {
                      (this.pushPaused = !0),
                        this.pullPaused && this.emit("paused");
                    },
                    l = () => {
                      (this.pullPaused = !0),
                        this.pushPaused && this.emit("paused");
                    },
                    d = () => {
                      (this.pushPaused = !1),
                        this.pullPaused &&
                          this.emit("active", { direction: "push" });
                    },
                    h = () => {
                      (this.pullPaused = !1),
                        this.pushPaused &&
                          this.emit("active", { direction: "pull" });
                    };
                  let p = {};
                  const v = (e) => (t, n) => {
                    (("change" === t && (n === s || n === a)) ||
                      ("denied" === t && (n === u || n === c)) ||
                      ("paused" === t && (n === l || n === f)) ||
                      ("active" === t && (n === h || n === d))) &&
                      (t in p || (p[t] = {}),
                      (p[t][e] = !0),
                      2 === Object.keys(p[t]).length &&
                        this.removeAllListeners(t));
                  };
                  function y(e, t, n) {
                    -1 == e.listeners(t).indexOf(n) && e.on(t, n);
                  }
                  n.live &&
                    (this.push.on("complete", this.pull.cancel.bind(this.pull)),
                    this.pull.on("complete", this.push.cancel.bind(this.push))),
                    this.on("newListener", function (e) {
                      "change" === e
                        ? (y(this.pull, "change", s), y(this.push, "change", a))
                        : "denied" === e
                        ? (y(this.pull, "denied", u), y(this.push, "denied", c))
                        : "active" === e
                        ? (y(this.pull, "active", h), y(this.push, "active", d))
                        : "paused" === e &&
                          (y(this.pull, "paused", l),
                          y(this.push, "paused", f));
                    }),
                    this.on("removeListener", function (e) {
                      "change" === e
                        ? (this.pull.removeListener("change", s),
                          this.push.removeListener("change", a))
                        : "denied" === e
                        ? (this.pull.removeListener("denied", u),
                          this.push.removeListener("denied", c))
                        : "active" === e
                        ? (this.pull.removeListener("active", h),
                          this.push.removeListener("active", d))
                        : "paused" === e &&
                          (this.pull.removeListener("paused", l),
                          this.push.removeListener("paused", f));
                    }),
                    this.pull.on("removeListener", v("pull")),
                    this.push.on("removeListener", v("push"));
                  const _ = Promise.all([this.push, this.pull]).then(
                    (e) => {
                      const t = { push: e[0], pull: e[1] };
                      return (
                        this.emit("complete", t),
                        r && r(null, t),
                        this.removeAllListeners(),
                        t
                      );
                    },
                    (e) => {
                      if (
                        (this.cancel(),
                        r ? r(e) : this.emit("error", e),
                        this.removeAllListeners(),
                        r)
                      )
                        throw e;
                    }
                  );
                  (this.then = function (e, t) {
                    return _.then(e, t);
                  }),
                    (this.catch = function (e) {
                      return _.catch(e);
                    });
                }
                cancel() {
                  this.canceled ||
                    ((this.canceled = !0),
                    this.push.cancel(),
                    this.pull.cancel());
                }
              }
              Ye.plugin(function (e) {
                e.adapter("idb", sn, !0);
              })
                .plugin(function (e) {
                  e.adapter("http", vn, !1), e.adapter("https", vn, !1);
                })
                .plugin(Nn)
                .plugin(function (e) {
                  (e.replicate = Zn),
                    (e.sync = er),
                    Object.defineProperty(e.prototype, "replicate", {
                      get: function () {
                        var e = this;
                        return (
                          void 0 === this.replicateMethods &&
                            (this.replicateMethods = {
                              from: function (t, n, r) {
                                return e.constructor.replicate(t, e, n, r);
                              },
                              to: function (t, n, r) {
                                return e.constructor.replicate(e, t, n, r);
                              },
                            }),
                          this.replicateMethods
                        );
                      },
                    }),
                    (e.prototype.sync = function (e, t, n) {
                      return this.constructor.sync(this, e, t, n);
                    });
                }),
                (t.exports = Ye);
            }.call(this));
          }.call(this, e(9)));
        },
        { 10: 10, 11: 11, 2: 2, 26: 26, 3: 3, 9: 9 },
      ],
    },
    {},
    [27]
  )(27);
});
