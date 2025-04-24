
(() => {
  var CE = Object.create;
  var Sr = Object.defineProperty;
  var LE = Object.getOwnPropertyDescriptor;
  var PE = Object.getOwnPropertyNames;
  var NE = Object.getPrototypeOf,
      ME = Object.prototype.hasOwnProperty;
  var ce = (e, t) => () => (e && (t = e(e = 0)), t);
  var f = (e, t) => () => (t || e((t = {
          exports: {}
      }).exports, t), t.exports),
      Ae = (e, t) => {
          for (var r in t) Sr(e, r, {
              get: t[r],
              enumerable: !0
          })
      },
      na = (e, t, r, n) => {
          if (t && typeof t == "object" || typeof t == "function")
              for (let i of PE(t)) !ME.call(e, i) && i !== r && Sr(e, i, {
                  get: () => t[i],
                  enumerable: !(n = LE(t, i)) || n.enumerable
              });
          return e
      };
  var ie = (e, t, r) => (r = e != null ? CE(NE(e)) : {}, na(t || !e || !e.__esModule ? Sr(r, "default", {
          value: e,
          enumerable: !0
      }) : r, e)),
      Ve = e => na(Sr({}, "__esModule", {
          value: !0
      }), e);
  var Vn = f(() => {
      "use strict";
      window.tram = function(e) {
          function t(c, h) {
              var _ = new D.Bare;
              return _.init(c, h)
          }

          function r(c) {
              return c.replace(/[A-Z]/g, function(h) {
                  return "-" + h.toLowerCase()
              })
          }

          function n(c) {
              var h = parseInt(c.slice(1), 16),
                  _ = h >> 16 & 255,
                  b = h >> 8 & 255,
                  m = 255 & h;
              return [_, b, m]
          }

          function i(c, h, _) {
              return "#" + (1 << 24 | c << 16 | h << 8 | _).toString(16).slice(1)
          }

          function o() {}

          function a(c, h) {
              l("Type warning: Expected: [" + c + "] Got: [" + typeof h + "] " + h)
          }

          function s(c, h, _) {
              l("Units do not match [" + c + "]: " + h + ", " + _)
          }

          function u(c, h, _) {
              if (h !== void 0 && (_ = h), c === void 0) return _;
              var b = _;
              return Gn.test(c) || !br.test(c) ? b = parseInt(c, 10) : br.test(c) && (b = 1e3 * parseFloat(c)), 0 > b && (b = 0), b === b ? b : _
          }

          function l(c) {
              pe.debug && window && window.console.warn(c)
          }

          function g(c) {
              for (var h = -1, _ = c ? c.length : 0, b = []; ++h < _;) {
                  var m = c[h];
                  m && b.push(m)
              }
              return b
          }
          var p = function(c, h, _) {
                  function b($) {
                      return typeof $ == "object"
                  }

                  function m($) {
                      return typeof $ == "function"
                  }

                  function A() {}

                  function k($, se) {
                      function F() {
                          var ve = new J;
                          return m(ve.init) && ve.init.apply(ve, arguments), ve
                      }

                      function J() {}
                      se === _ && (se = $, $ = Object), F.Bare = J;
                      var te, ge = A[c] = $[c],
                          Ge = J[c] = F[c] = new A;
                      return Ge.constructor = F, F.mixin = function(ve) {
                          return J[c] = F[c] = k(F, ve)[c], F
                      }, F.open = function(ve) {
                          if (te = {}, m(ve) ? te = ve.call(F, Ge, ge, F, $) : b(ve) && (te = ve), b(te))
                              for (var jt in te) h.call(te, jt) && (Ge[jt] = te[jt]);
                          return m(Ge.init) || (Ge.init = $), F
                      }, F.open(se)
                  }
                  return k
              }("prototype", {}.hasOwnProperty),
              d = {
                  ease: ["ease", function(c, h, _, b) {
                      var m = (c /= b) * c,
                          A = m * c;
                      return h + _ * (-2.75 * A * m + 11 * m * m + -15.5 * A + 8 * m + .25 * c)
                  }],
                  "ease-in": ["ease-in", function(c, h, _, b) {
                      var m = (c /= b) * c,
                          A = m * c;
                      return h + _ * (-1 * A * m + 3 * m * m + -3 * A + 2 * m)
                  }],
                  "ease-out": ["ease-out", function(c, h, _, b) {
                      var m = (c /= b) * c,
                          A = m * c;
                      return h + _ * (.3 * A * m + -1.6 * m * m + 2.2 * A + -1.8 * m + 1.9 * c)
                  }],
                  "ease-in-out": ["ease-in-out", function(c, h, _, b) {
                      var m = (c /= b) * c,
                          A = m * c;
                      return h + _ * (2 * A * m + -5 * m * m + 2 * A + 2 * m)
                  }],
                  linear: ["linear", function(c, h, _, b) {
                      return _ * c / b + h
                  }],
                  "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function(c, h, _, b) {
                      return _ * (c /= b) * c + h
                  }],
                  "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function(c, h, _, b) {
                      return -_ * (c /= b) * (c - 2) + h
                  }],
                  "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function(c, h, _, b) {
                      return (c /= b / 2) < 1 ? _ / 2 * c * c + h : -_ / 2 * (--c * (c - 2) - 1) + h
                  }],
                  "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function(c, h, _, b) {
                      return _ * (c /= b) * c * c + h
                  }],
                  "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function(c, h, _, b) {
                      return _ * ((c = c / b - 1) * c * c + 1) + h
                  }],
                  "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function(c, h, _, b) {
                      return (c /= b / 2) < 1 ? _ / 2 * c * c * c + h : _ / 2 * ((c -= 2) * c * c + 2) + h
                  }],
                  "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function(c, h, _, b) {
                      return _ * (c /= b) * c * c * c + h
                  }],
                  "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function(c, h, _, b) {
                      return -_ * ((c = c / b - 1) * c * c * c - 1) + h
                  }],
                  "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function(c, h, _, b) {
                      return (c /= b / 2) < 1 ? _ / 2 * c * c * c * c + h : -_ / 2 * ((c -= 2) * c * c * c - 2) + h
                  }],
                  "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function(c, h, _, b) {
                      return _ * (c /= b) * c * c * c * c + h
                  }],
                  "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function(c, h, _, b) {
                      return _ * ((c = c / b - 1) * c * c * c * c + 1) + h
                  }],
                  "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function(c, h, _, b) {
                      return (c /= b / 2) < 1 ? _ / 2 * c * c * c * c * c + h : _ / 2 * ((c -= 2) * c * c * c * c + 2) + h
                  }],
                  "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function(c, h, _, b) {
                      return -_ * Math.cos(c / b * (Math.PI / 2)) + _ + h
                  }],
                  "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function(c, h, _, b) {
                      return _ * Math.sin(c / b * (Math.PI / 2)) + h
                  }],
                  "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function(c, h, _, b) {
                      return -_ / 2 * (Math.cos(Math.PI * c / b) - 1) + h
                  }],
                  "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function(c, h, _, b) {
                      return c === 0 ? h : _ * Math.pow(2, 10 * (c / b - 1)) + h
                  }],
                  "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function(c, h, _, b) {
                      return c === b ? h + _ : _ * (-Math.pow(2, -10 * c / b) + 1) + h
                  }],
                  "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function(c, h, _, b) {
                      return c === 0 ? h : c === b ? h + _ : (c /= b / 2) < 1 ? _ / 2 * Math.pow(2, 10 * (c - 1)) + h : _ / 2 * (-Math.pow(2, -10 * --c) + 2) + h
                  }],
                  "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function(c, h, _, b) {
                      return -_ * (Math.sqrt(1 - (c /= b) * c) - 1) + h
                  }],
                  "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function(c, h, _, b) {
                      return _ * Math.sqrt(1 - (c = c / b - 1) * c) + h
                  }],
                  "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function(c, h, _, b) {
                      return (c /= b / 2) < 1 ? -_ / 2 * (Math.sqrt(1 - c * c) - 1) + h : _ / 2 * (Math.sqrt(1 - (c -= 2) * c) + 1) + h
                  }],
                  "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function(c, h, _, b, m) {
                      return m === void 0 && (m = 1.70158), _ * (c /= b) * c * ((m + 1) * c - m) + h
                  }],
                  "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function(c, h, _, b, m) {
                      return m === void 0 && (m = 1.70158), _ * ((c = c / b - 1) * c * ((m + 1) * c + m) + 1) + h
                  }],
                  "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function(c, h, _, b, m) {
                      return m === void 0 && (m = 1.70158), (c /= b / 2) < 1 ? _ / 2 * c * c * (((m *= 1.525) + 1) * c - m) + h : _ / 2 * ((c -= 2) * c * (((m *= 1.525) + 1) * c + m) + 2) + h
                  }]
              },
              E = {
                  "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
                  "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
                  "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
              },
              I = document,
              v = window,
              S = "bkwld-tram",
              y = /[\-\.0-9]/g,
              w = /[A-Z]/,
              O = "number",
              C = /^(rgb|#)/,
              R = /(em|cm|mm|in|pt|pc|px)$/,
              x = /(em|cm|mm|in|pt|pc|px|%)$/,
              X = /(deg|rad|turn)$/,
              U = "unitless",
              B = /(all|none) 0s ease 0s/,
              W = /^(width|height)$/,
              Q = " ",
              N = I.createElement("a"),
              T = ["Webkit", "Moz", "O", "ms"],
              L = ["-webkit-", "-moz-", "-o-", "-ms-"],
              V = function(c) {
                  if (c in N.style) return {
                      dom: c,
                      css: c
                  };
                  var h, _, b = "",
                      m = c.split("-");
                  for (h = 0; h < m.length; h++) b += m[h].charAt(0).toUpperCase() + m[h].slice(1);
                  for (h = 0; h < T.length; h++)
                      if (_ = T[h] + b, _ in N.style) return {
                          dom: _,
                          css: L[h] + c
                      }
              },
              q = t.support = {
                  bind: Function.prototype.bind,
                  transform: V("transform"),
                  transition: V("transition"),
                  backface: V("backface-visibility"),
                  timing: V("transition-timing-function")
              };
          if (q.transition) {
              var Z = q.timing.dom;
              if (N.style[Z] = d["ease-in-back"][0], !N.style[Z])
                  for (var Y in E) d[Y][0] = E[Y]
          }
          var P = t.frame = function() {
                  var c = v.requestAnimationFrame || v.webkitRequestAnimationFrame || v.mozRequestAnimationFrame || v.oRequestAnimationFrame || v.msRequestAnimationFrame;
                  return c && q.bind ? c.bind(v) : function(h) {
                      v.setTimeout(h, 16)
                  }
              }(),
              G = t.now = function() {
                  var c = v.performance,
                      h = c && (c.now || c.webkitNow || c.msNow || c.mozNow);
                  return h && q.bind ? h.bind(c) : Date.now || function() {
                      return +new Date
                  }
              }(),
              H = p(function(c) {
                  function h(z, ne) {
                      var fe = g(("" + z).split(Q)),
                          oe = fe[0];
                      ne = ne || {};
                      var _e = Kt[oe];
                      if (!_e) return l("Unsupported property: " + oe);
                      if (!ne.weak || !this.props[oe]) {
                          var Le = _e[0],
                              be = this.props[oe];
                          return be || (be = this.props[oe] = new Le.Bare), be.init(this.$el, fe, _e, ne), be
                      }
                  }

                  function _(z, ne, fe) {
                      if (z) {
                          var oe = typeof z;
                          if (ne || (this.timer && this.timer.destroy(), this.queue = [], this.active = !1), oe == "number" && ne) return this.timer = new le({
                              duration: z,
                              context: this,
                              complete: A
                          }), void(this.active = !0);
                          if (oe == "string" && ne) {
                              switch (z) {
                                  case "hide":
                                      F.call(this);
                                      break;
                                  case "stop":
                                      k.call(this);
                                      break;
                                  case "redraw":
                                      J.call(this);
                                      break;
                                  default:
                                      h.call(this, z, fe && fe[1])
                              }
                              return A.call(this)
                          }
                          if (oe == "function") return void z.call(this, this);
                          if (oe == "object") {
                              var _e = 0;
                              Ge.call(this, z, function(he, RE) {
                                  he.span > _e && (_e = he.span), he.stop(), he.animate(RE)
                              }, function(he) {
                                  "wait" in he && (_e = u(he.wait, 0))
                              }), ge.call(this), _e > 0 && (this.timer = new le({
                                  duration: _e,
                                  context: this
                              }), this.active = !0, ne && (this.timer.complete = A));
                              var Le = this,
                                  be = !1,
                                  Ar = {};
                              P(function() {
                                  Ge.call(Le, z, function(he) {
                                      he.active && (be = !0, Ar[he.name] = he.nextStyle)
                                  }), be && Le.$el.css(Ar)
                              })
                          }
                      }
                  }

                  function b(z) {
                      z = u(z, 0), this.active ? this.queue.push({
                          options: z
                      }) : (this.timer = new le({
                          duration: z,
                          context: this,
                          complete: A
                      }), this.active = !0)
                  }

                  function m(z) {
                      return this.active ? (this.queue.push({
                          options: z,
                          args: arguments
                      }), void(this.timer.complete = A)) : l("No active transition timer. Use start() or wait() before then().")
                  }

                  function A() {
                      if (this.timer && this.timer.destroy(), this.active = !1, this.queue.length) {
                          var z = this.queue.shift();
                          _.call(this, z.options, !0, z.args)
                      }
                  }

                  function k(z) {
                      this.timer && this.timer.destroy(), this.queue = [], this.active = !1;
                      var ne;
                      typeof z == "string" ? (ne = {}, ne[z] = 1) : ne = typeof z == "object" && z != null ? z : this.props, Ge.call(this, ne, ve), ge.call(this)
                  }

                  function $(z) {
                      k.call(this, z), Ge.call(this, z, jt, wE)
                  }

                  function se(z) {
                      typeof z != "string" && (z = "block"), this.el.style.display = z
                  }

                  function F() {
                      k.call(this), this.el.style.display = "none"
                  }

                  function J() {
                      this.el.offsetHeight
                  }

                  function te() {
                      k.call(this), e.removeData(this.el, S), this.$el = this.el = null
                  }

                  function ge() {
                      var z, ne, fe = [];
                      this.upstream && fe.push(this.upstream);
                      for (z in this.props) ne = this.props[z], ne.active && fe.push(ne.string);
                      fe = fe.join(","), this.style !== fe && (this.style = fe, this.el.style[q.transition.dom] = fe)
                  }

                  function Ge(z, ne, fe) {
                      var oe, _e, Le, be, Ar = ne !== ve,
                          he = {};
                      for (oe in z) Le = z[oe], oe in Xe ? (he.transform || (he.transform = {}), he.transform[oe] = Le) : (w.test(oe) && (oe = r(oe)), oe in Kt ? he[oe] = Le : (be || (be = {}), be[oe] = Le));
                      for (oe in he) {
                          if (Le = he[oe], _e = this.props[oe], !_e) {
                              if (!Ar) continue;
                              _e = h.call(this, oe)
                          }
                          ne.call(this, _e, Le)
                      }
                      fe && be && fe.call(this, be)
                  }

                  function ve(z) {
                      z.stop()
                  }

                  function jt(z, ne) {
                      z.set(ne)
                  }

                  function wE(z) {
                      this.$el.css(z)
                  }

                  function Ce(z, ne) {
                      c[z] = function() {
                          return this.children ? xE.call(this, ne, arguments) : (this.el && ne.apply(this, arguments), this)
                      }
                  }

                  function xE(z, ne) {
                      var fe, oe = this.children.length;
                      for (fe = 0; oe > fe; fe++) z.apply(this.children[fe], ne);
                      return this
                  }
                  c.init = function(z) {
                      if (this.$el = e(z), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = !1, pe.keepInherited && !pe.fallback) {
                          var ne = Wt(this.el, "transition");
                          ne && !B.test(ne) && (this.upstream = ne)
                      }
                      q.backface && pe.hideBackface && et(this.el, q.backface.css, "hidden")
                  }, Ce("add", h), Ce("start", _), Ce("wait", b), Ce("then", m), Ce("next", A), Ce("stop", k), Ce("set", $), Ce("show", se), Ce("hide", F), Ce("redraw", J), Ce("destroy", te)
              }),
              D = p(H, function(c) {
                  function h(_, b) {
                      var m = e.data(_, S) || e.data(_, S, new H.Bare);
                      return m.el || m.init(_), b ? m.start(b) : m
                  }
                  c.init = function(_, b) {
                      var m = e(_);
                      if (!m.length) return this;
                      if (m.length === 1) return h(m[0], b);
                      var A = [];
                      return m.each(function(k, $) {
                          A.push(h($, b))
                      }), this.children = A, this
                  }
              }),
              M = p(function(c) {
                  function h() {
                      var A = this.get();
                      this.update("auto");
                      var k = this.get();
                      return this.update(A), k
                  }

                  function _(A, k, $) {
                      return k !== void 0 && ($ = k), A in d ? A : $
                  }

                  function b(A) {
                      var k = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(A);
                      return (k ? i(k[1], k[2], k[3]) : A).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
                  }
                  var m = {
                      duration: 500,
                      ease: "ease",
                      delay: 0
                  };
                  c.init = function(A, k, $, se) {
                      this.$el = A, this.el = A[0];
                      var F = k[0];
                      $[2] && (F = $[2]), zt[F] && (F = zt[F]), this.name = F, this.type = $[1], this.duration = u(k[1], this.duration, m.duration), this.ease = _(k[2], this.ease, m.ease), this.delay = u(k[3], this.delay, m.delay), this.span = this.duration + this.delay, this.active = !1, this.nextStyle = null, this.auto = W.test(this.name), this.unit = se.unit || this.unit || pe.defaultUnit, this.angle = se.angle || this.angle || pe.defaultAngle, pe.fallback || se.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + Q + this.duration + "ms" + (this.ease != "ease" ? Q + d[this.ease][0] : "") + (this.delay ? Q + this.delay + "ms" : ""))
                  }, c.set = function(A) {
                      A = this.convert(A, this.type), this.update(A), this.redraw()
                  }, c.transition = function(A) {
                      this.active = !0, A = this.convert(A, this.type), this.auto && (this.el.style[this.name] == "auto" && (this.update(this.get()), this.redraw()), A == "auto" && (A = h.call(this))), this.nextStyle = A
                  }, c.fallback = function(A) {
                      var k = this.el.style[this.name] || this.convert(this.get(), this.type);
                      A = this.convert(A, this.type), this.auto && (k == "auto" && (k = this.convert(this.get(), this.type)), A == "auto" && (A = h.call(this))), this.tween = new K({
                          from: k,
                          to: A,
                          duration: this.duration,
                          delay: this.delay,
                          ease: this.ease,
                          update: this.update,
                          context: this
                      })
                  }, c.get = function() {
                      return Wt(this.el, this.name)
                  }, c.update = function(A) {
                      et(this.el, this.name, A)
                  }, c.stop = function() {
                      (this.active || this.nextStyle) && (this.active = !1, this.nextStyle = null, et(this.el, this.name, this.get()));
                      var A = this.tween;
                      A && A.context && A.destroy()
                  }, c.convert = function(A, k) {
                      if (A == "auto" && this.auto) return A;
                      var $, se = typeof A == "number",
                          F = typeof A == "string";
                      switch (k) {
                          case O:
                              if (se) return A;
                              if (F && A.replace(y, "") === "") return +A;
                              $ = "number(unitless)";
                              break;
                          case C:
                              if (F) {
                                  if (A === "" && this.original) return this.original;
                                  if (k.test(A)) return A.charAt(0) == "#" && A.length == 7 ? A : b(A)
                              }
                              $ = "hex or rgb string";
                              break;
                          case R:
                              if (se) return A + this.unit;
                              if (F && k.test(A)) return A;
                              $ = "number(px) or string(unit)";
                              break;
                          case x:
                              if (se) return A + this.unit;
                              if (F && k.test(A)) return A;
                              $ = "number(px) or string(unit or %)";
                              break;
                          case X:
                              if (se) return A + this.angle;
                              if (F && k.test(A)) return A;
                              $ = "number(deg) or string(angle)";
                              break;
                          case U:
                              if (se || F && x.test(A)) return A;
                              $ = "number(unitless) or string(unit or %)"
                      }
                      return a($, A), A
                  }, c.redraw = function() {
                      this.el.offsetHeight
                  }
              }),
              j = p(M, function(c, h) {
                  c.init = function() {
                      h.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), C))
                  }
              }),
              re = p(M, function(c, h) {
                  c.init = function() {
                      h.init.apply(this, arguments), this.animate = this.fallback
                  }, c.get = function() {
                      return this.$el[this.name]()
                  }, c.update = function(_) {
                      this.$el[this.name](_)
                  }
              }),
              ee = p(M, function(c, h) {
                  function _(b, m) {
                      var A, k, $, se, F;
                      for (A in b) se = Xe[A], $ = se[0], k = se[1] || A, F = this.convert(b[A], $), m.call(this, k, F, $)
                  }
                  c.init = function() {
                      h.init.apply(this, arguments), this.current || (this.current = {}, Xe.perspective && pe.perspective && (this.current.perspective = pe.perspective, et(this.el, this.name, this.style(this.current)), this.redraw()))
                  }, c.set = function(b) {
                      _.call(this, b, function(m, A) {
                          this.current[m] = A
                      }), et(this.el, this.name, this.style(this.current)), this.redraw()
                  }, c.transition = function(b) {
                      var m = this.values(b);
                      this.tween = new ht({
                          current: this.current,
                          values: m,
                          duration: this.duration,
                          delay: this.delay,
                          ease: this.ease
                      });
                      var A, k = {};
                      for (A in this.current) k[A] = A in m ? m[A] : this.current[A];
                      this.active = !0, this.nextStyle = this.style(k)
                  }, c.fallback = function(b) {
                      var m = this.values(b);
                      this.tween = new ht({
                          current: this.current,
                          values: m,
                          duration: this.duration,
                          delay: this.delay,
                          ease: this.ease,
                          update: this.update,
                          context: this
                      })
                  }, c.update = function() {
                      et(this.el, this.name, this.style(this.current))
                  }, c.style = function(b) {
                      var m, A = "";
                      for (m in b) A += m + "(" + b[m] + ") ";
                      return A
                  }, c.values = function(b) {
                      var m, A = {};
                      return _.call(this, b, function(k, $, se) {
                          A[k] = $, this.current[k] === void 0 && (m = 0, ~k.indexOf("scale") && (m = 1), this.current[k] = this.convert(m, se))
                      }), A
                  }
              }),
              K = p(function(c) {
                  function h(F) {
                      $.push(F) === 1 && P(_)
                  }

                  function _() {
                      var F, J, te, ge = $.length;
                      if (ge)
                          for (P(_), J = G(), F = ge; F--;) te = $[F], te && te.render(J)
                  }

                  function b(F) {
                      var J, te = e.inArray(F, $);
                      te >= 0 && (J = $.slice(te + 1), $.length = te, J.length && ($ = $.concat(J)))
                  }

                  function m(F) {
                      return Math.round(F * se) / se
                  }

                  function A(F, J, te) {
                      return i(F[0] + te * (J[0] - F[0]), F[1] + te * (J[1] - F[1]), F[2] + te * (J[2] - F[2]))
                  }
                  var k = {
                      ease: d.ease[1],
                      from: 0,
                      to: 1
                  };
                  c.init = function(F) {
                      this.duration = F.duration || 0, this.delay = F.delay || 0;
                      var J = F.ease || k.ease;
                      d[J] && (J = d[J][1]), typeof J != "function" && (J = k.ease), this.ease = J, this.update = F.update || o, this.complete = F.complete || o, this.context = F.context || this, this.name = F.name;
                      var te = F.from,
                          ge = F.to;
                      te === void 0 && (te = k.from), ge === void 0 && (ge = k.to), this.unit = F.unit || "", typeof te == "number" && typeof ge == "number" ? (this.begin = te, this.change = ge - te) : this.format(ge, te), this.value = this.begin + this.unit, this.start = G(), F.autoplay !== !1 && this.play()
                  }, c.play = function() {
                      this.active || (this.start || (this.start = G()), this.active = !0, h(this))
                  }, c.stop = function() {
                      this.active && (this.active = !1, b(this))
                  }, c.render = function(F) {
                      var J, te = F - this.start;
                      if (this.delay) {
                          if (te <= this.delay) return;
                          te -= this.delay
                      }
                      if (te < this.duration) {
                          var ge = this.ease(te, 0, 1, this.duration);
                          return J = this.startRGB ? A(this.startRGB, this.endRGB, ge) : m(this.begin + ge * this.change), this.value = J + this.unit, void this.update.call(this.context, this.value)
                      }
                      J = this.endHex || this.begin + this.change, this.value = J + this.unit, this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy()
                  }, c.format = function(F, J) {
                      if (J += "", F += "", F.charAt(0) == "#") return this.startRGB = n(J), this.endRGB = n(F), this.endHex = F, this.begin = 0, void(this.change = 1);
                      if (!this.unit) {
                          var te = J.replace(y, ""),
                              ge = F.replace(y, "");
                          te !== ge && s("tween", J, F), this.unit = te
                      }
                      J = parseFloat(J), F = parseFloat(F), this.begin = this.value = J, this.change = F - J
                  }, c.destroy = function() {
                      this.stop(), this.context = null, this.ease = this.update = this.complete = o
                  };
                  var $ = [],
                      se = 1e3
              }),
              le = p(K, function(c) {
                  c.init = function(h) {
                      this.duration = h.duration || 0, this.complete = h.complete || o, this.context = h.context, this.play()
                  }, c.render = function(h) {
                      var _ = h - this.start;
                      _ < this.duration || (this.complete.call(this.context), this.destroy())
                  }
              }),
              ht = p(K, function(c, h) {
                  c.init = function(_) {
                      this.context = _.context, this.update = _.update, this.tweens = [], this.current = _.current;
                      var b, m;
                      for (b in _.values) m = _.values[b], this.current[b] !== m && this.tweens.push(new K({
                          name: b,
                          from: this.current[b],
                          to: m,
                          duration: _.duration,
                          delay: _.delay,
                          ease: _.ease,
                          autoplay: !1
                      }));
                      this.play()
                  }, c.render = function(_) {
                      var b, m, A = this.tweens.length,
                          k = !1;
                      for (b = A; b--;) m = this.tweens[b], m.context && (m.render(_), this.current[m.name] = m.value, k = !0);
                      return k ? void(this.update && this.update.call(this.context)) : this.destroy()
                  }, c.destroy = function() {
                      if (h.destroy.call(this), this.tweens) {
                          var _, b = this.tweens.length;
                          for (_ = b; _--;) this.tweens[_].destroy();
                          this.tweens = null, this.current = null
                      }
                  }
              }),
              pe = t.config = {
                  debug: !1,
                  defaultUnit: "px",
                  defaultAngle: "deg",
                  keepInherited: !1,
                  hideBackface: !1,
                  perspective: "",
                  fallback: !q.transition,
                  agentTests: []
              };
          t.fallback = function(c) {
              if (!q.transition) return pe.fallback = !0;
              pe.agentTests.push("(" + c + ")");
              var h = new RegExp(pe.agentTests.join("|"), "i");
              pe.fallback = h.test(navigator.userAgent)
          }, t.fallback("6.0.[2-5] Safari"), t.tween = function(c) {
              return new K(c)
          }, t.delay = function(c, h, _) {
              return new le({
                  complete: h,
                  duration: c,
                  context: _
              })
          }, e.fn.tram = function(c) {
              return t.call(null, this, c)
          };
          var et = e.style,
              Wt = e.css,
              zt = {
                  transform: q.transform && q.transform.css
              },
              Kt = {
                  color: [j, C],
                  background: [j, C, "background-color"],
                  "outline-color": [j, C],
                  "border-color": [j, C],
                  "border-top-color": [j, C],
                  "border-right-color": [j, C],
                  "border-bottom-color": [j, C],
                  "border-left-color": [j, C],
                  "border-width": [M, R],
                  "border-top-width": [M, R],
                  "border-right-width": [M, R],
                  "border-bottom-width": [M, R],
                  "border-left-width": [M, R],
                  "border-spacing": [M, R],
                  "letter-spacing": [M, R],
                  margin: [M, R],
                  "margin-top": [M, R],
                  "margin-right": [M, R],
                  "margin-bottom": [M, R],
                  "margin-left": [M, R],
                  padding: [M, R],
                  "padding-top": [M, R],
                  "padding-right": [M, R],
                  "padding-bottom": [M, R],
                  "padding-left": [M, R],
                  "outline-width": [M, R],
                  opacity: [M, O],
                  top: [M, x],
                  right: [M, x],
                  bottom: [M, x],
                  left: [M, x],
                  "font-size": [M, x],
                  "text-indent": [M, x],
                  "word-spacing": [M, x],
                  width: [M, x],
                  "min-width": [M, x],
                  "max-width": [M, x],
                  height: [M, x],
                  "min-height": [M, x],
                  "max-height": [M, x],
                  "line-height": [M, U],
                  "scroll-top": [re, O, "scrollTop"],
                  "scroll-left": [re, O, "scrollLeft"]
              },
              Xe = {};
          q.transform && (Kt.transform = [ee], Xe = {
              x: [x, "translateX"],
              y: [x, "translateY"],
              rotate: [X],
              rotateX: [X],
              rotateY: [X],
              scale: [O],
              scaleX: [O],
              scaleY: [O],
              skew: [X],
              skewX: [X],
              skewY: [X]
          }), q.transform && q.backface && (Xe.z = [x, "translateZ"], Xe.rotateZ = [X], Xe.scaleZ = [O], Xe.perspective = [R]);
          var Gn = /ms/,
              br = /s|\./;
          return e.tram = t
      }(window.jQuery)
  });
  var oa = f((tF, ia) => {
      "use strict";
      var DE = window.$,
          FE = Vn() && DE.tram;
      ia.exports = function() {
          var e = {};
          e.VERSION = "1.6.0-Webflow";
          var t = {},
              r = Array.prototype,
              n = Object.prototype,
              i = Function.prototype,
              o = r.push,
              a = r.slice,
              s = r.concat,
              u = n.toString,
              l = n.hasOwnProperty,
              g = r.forEach,
              p = r.map,
              d = r.reduce,
              E = r.reduceRight,
              I = r.filter,
              v = r.every,
              S = r.some,
              y = r.indexOf,
              w = r.lastIndexOf,
              O = Array.isArray,
              C = Object.keys,
              R = i.bind,
              x = e.each = e.forEach = function(T, L, V) {
                  if (T == null) return T;
                  if (g && T.forEach === g) T.forEach(L, V);
                  else if (T.length === +T.length) {
                      for (var q = 0, Z = T.length; q < Z; q++)
                          if (L.call(V, T[q], q, T) === t) return
                  } else
                      for (var Y = e.keys(T), q = 0, Z = Y.length; q < Z; q++)
                          if (L.call(V, T[Y[q]], Y[q], T) === t) return;
                  return T
              };
          e.map = e.collect = function(T, L, V) {
              var q = [];
              return T == null ? q : p && T.map === p ? T.map(L, V) : (x(T, function(Z, Y, P) {
                  q.push(L.call(V, Z, Y, P))
              }), q)
          }, e.find = e.detect = function(T, L, V) {
              var q;
              return X(T, function(Z, Y, P) {
                  if (L.call(V, Z, Y, P)) return q = Z, !0
              }), q
          }, e.filter = e.select = function(T, L, V) {
              var q = [];
              return T == null ? q : I && T.filter === I ? T.filter(L, V) : (x(T, function(Z, Y, P) {
                  L.call(V, Z, Y, P) && q.push(Z)
              }), q)
          };
          var X = e.some = e.any = function(T, L, V) {
              L || (L = e.identity);
              var q = !1;
              return T == null ? q : S && T.some === S ? T.some(L, V) : (x(T, function(Z, Y, P) {
                  if (q || (q = L.call(V, Z, Y, P))) return t
              }), !!q)
          };
          e.contains = e.include = function(T, L) {
              return T == null ? !1 : y && T.indexOf === y ? T.indexOf(L) != -1 : X(T, function(V) {
                  return V === L
              })
          }, e.delay = function(T, L) {
              var V = a.call(arguments, 2);
              return setTimeout(function() {
                  return T.apply(null, V)
              }, L)
          }, e.defer = function(T) {
              return e.delay.apply(e, [T, 1].concat(a.call(arguments, 1)))
          }, e.throttle = function(T) {
              var L, V, q;
              return function() {
                  L || (L = !0, V = arguments, q = this, FE.frame(function() {
                      L = !1, T.apply(q, V)
                  }))
              }
          }, e.debounce = function(T, L, V) {
              var q, Z, Y, P, G, H = function() {
                  var D = e.now() - P;
                  D < L ? q = setTimeout(H, L - D) : (q = null, V || (G = T.apply(Y, Z), Y = Z = null))
              };
              return function() {
                  Y = this, Z = arguments, P = e.now();
                  var D = V && !q;
                  return q || (q = setTimeout(H, L)), D && (G = T.apply(Y, Z), Y = Z = null), G
              }
          }, e.defaults = function(T) {
              if (!e.isObject(T)) return T;
              for (var L = 1, V = arguments.length; L < V; L++) {
                  var q = arguments[L];
                  for (var Z in q) T[Z] === void 0 && (T[Z] = q[Z])
              }
              return T
          }, e.keys = function(T) {
              if (!e.isObject(T)) return [];
              if (C) return C(T);
              var L = [];
              for (var V in T) e.has(T, V) && L.push(V);
              return L
          }, e.has = function(T, L) {
              return l.call(T, L)
          }, e.isObject = function(T) {
              return T === Object(T)
          }, e.now = Date.now || function() {
              return new Date().getTime()
          }, e.templateSettings = {
              evaluate: /<%([\s\S]+?)%>/g,
              interpolate: /<%=([\s\S]+?)%>/g,
              escape: /<%-([\s\S]+?)%>/g
          };
          var U = /(.)^/,
              B = {
                  "'": "'",
                  "\\": "\\",
                  "\r": "r",
                  "\n": "n",
                  "\u2028": "u2028",
                  "\u2029": "u2029"
              },
              W = /\\|'|\r|\n|\u2028|\u2029/g,
              Q = function(T) {
                  return "\\" + B[T]
              },
              N = /^\s*(\w|\$)+\s*$/;
          return e.template = function(T, L, V) {
              !L && V && (L = V), L = e.defaults({}, L, e.templateSettings);
              var q = RegExp([(L.escape || U).source, (L.interpolate || U).source, (L.evaluate || U).source].join("|") + "|$", "g"),
                  Z = 0,
                  Y = "__p+='";
              T.replace(q, function(D, M, j, re, ee) {
                  return Y += T.slice(Z, ee).replace(W, Q), Z = ee + D.length, M ? Y += `'+
((__t=(` + M + `))==null?'':_.escape(__t))+
'` : j ? Y += `'+
((__t=(` + j + `))==null?'':__t)+
'` : re && (Y += `';
` + re + `
__p+='`), D
              }), Y += `';
`;
              var P = L.variable;
              if (P) {
                  if (!N.test(P)) throw new Error("variable is not a bare identifier: " + P)
              } else Y = `with(obj||{}){
` + Y + `}
`, P = "obj";
              Y = `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` + Y + `return __p;
`;
              var G;
              try {
                  G = new Function(L.variable || "obj", "_", Y)
              } catch (D) {
                  throw D.source = Y, D
              }
              var H = function(D) {
                  return G.call(this, D, e)
              };
              return H.source = "function(" + P + `){
` + Y + "}", H
          }, e
      }()
  });
  var Be = f((rF, pa) => {
      "use strict";
      var ae = {},
          Et = {},
          yt = [],
          Bn = window.Webflow || [],
          tt = window.jQuery,
          Ne = tt(window),
          qE = tt(document),
          Ue = tt.isFunction,
          Pe = ae._ = oa(),
          sa = ae.tram = Vn() && tt.tram,
          wr = !1,
          kn = !1;
      sa.config.hideBackface = !1;
      sa.config.keepInherited = !0;
      ae.define = function(e, t, r) {
          Et[e] && ca(Et[e]);
          var n = Et[e] = t(tt, Pe, r) || {};
          return ua(n), n
      };
      ae.require = function(e) {
          return Et[e]
      };

      function ua(e) {
          ae.env() && (Ue(e.design) && Ne.on("__wf_design", e.design), Ue(e.preview) && Ne.on("__wf_preview", e.preview)), Ue(e.destroy) && Ne.on("__wf_destroy", e.destroy), e.ready && Ue(e.ready) && XE(e)
      }

      function XE(e) {
          if (wr) {
              e.ready();
              return
          }
          Pe.contains(yt, e.ready) || yt.push(e.ready)
      }

      function ca(e) {
          Ue(e.design) && Ne.off("__wf_design", e.design), Ue(e.preview) && Ne.off("__wf_preview", e.preview), Ue(e.destroy) && Ne.off("__wf_destroy", e.destroy), e.ready && Ue(e.ready) && GE(e)
      }

      function GE(e) {
          yt = Pe.filter(yt, function(t) {
              return t !== e.ready
          })
      }
      ae.push = function(e) {
          if (wr) {
              Ue(e) && e();
              return
          }
          Bn.push(e)
      };
      ae.env = function(e) {
          var t = window.__wf_design,
              r = typeof t < "u";
          if (!e) return r;
          if (e === "design") return r && t;
          if (e === "preview") return r && !t;
          if (e === "slug") return r && window.__wf_slug;
          if (e === "editor") return window.WebflowEditor;
          if (e === "test") return window.__wf_test;
          if (e === "frame") return window !== window.top
      };
      var Or = navigator.userAgent.toLowerCase(),
          la = ae.env.touch = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
          VE = ae.env.chrome = /chrome/.test(Or) && /Google/.test(navigator.vendor) && parseInt(Or.match(/chrome\/(\d+)\./)[1], 10),
          UE = ae.env.ios = /(ipod|iphone|ipad)/.test(Or);
      ae.env.safari = /safari/.test(Or) && !VE && !UE;
      var Un;
      la && qE.on("touchstart mousedown", function(e) {
          Un = e.target
      });
      ae.validClick = la ? function(e) {
          return e === Un || tt.contains(e, Un)
      } : function() {
          return !0
      };
      var fa = "resize.webflow orientationchange.webflow load.webflow",
          BE = "scroll.webflow " + fa;
      ae.resize = Hn(Ne, fa);
      ae.scroll = Hn(Ne, BE);
      ae.redraw = Hn();

      function Hn(e, t) {
          var r = [],
              n = {};
          return n.up = Pe.throttle(function(i) {
              Pe.each(r, function(o) {
                  o(i)
              })
          }), e && t && e.on(t, n.up), n.on = function(i) {
              typeof i == "function" && (Pe.contains(r, i) || r.push(i))
          }, n.off = function(i) {
              if (!arguments.length) {
                  r = [];
                  return
              }
              r = Pe.filter(r, function(o) {
                  return o !== i
              })
          }, n
      }
      ae.location = function(e) {
          window.location = e
      };
      ae.env() && (ae.location = function() {});
      ae.ready = function() {
          wr = !0, kn ? kE() : Pe.each(yt, aa), Pe.each(Bn, aa), ae.resize.up()
      };

      function aa(e) {
          Ue(e) && e()
      }

      function kE() {
          kn = !1, Pe.each(Et, ua)
      }
      var st;
      ae.load = function(e) {
          st.then(e)
      };

      function da() {
          st && (st.reject(), Ne.off("load", st.resolve)), st = new tt.Deferred, Ne.on("load", st.resolve)
      }
      ae.destroy = function(e) {
          e = e || {}, kn = !0, Ne.triggerHandler("__wf_destroy"), e.domready != null && (wr = e.domready), Pe.each(Et, ca), ae.resize.off(), ae.scroll.off(), ae.redraw.off(), yt = [], Bn = [], st.state() === "pending" && da()
      };
      tt(ae.ready);
      da();
      pa.exports = window.Webflow = ae
  });
  var Ea = f((nF, ha) => {
      "use strict";
      var ga = Be();
      ga.define("brand", ha.exports = function(e) {
          var t = {},
              r = document,
              n = e("html"),
              i = e("body"),
              o = ".w-webflow-badge",
              a = window.location,
              s = /PhantomJS/i.test(navigator.userAgent),
              u = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
              l;
          t.ready = function() {
              var E = n.attr("data-wf-status"),
                  I = n.attr("data-wf-domain") || "";
              /\.webflow\.io$/i.test(I) && a.hostname !== I && (E = !0), E && !s && (l = l || p(), d(), setTimeout(d, 500), e(r).off(u, g).on(u, g))
          };

          function g() {
              var E = r.fullScreen || r.mozFullScreen || r.webkitIsFullScreen || r.msFullscreenElement || !!r.webkitFullscreenElement;
              e(l).attr("style", E ? "display: none !important;" : "")
          }

          function p() {
              var E = e('<a class="w-webflow-badge"></a>').attr("href", "https://webflow.com?utm_campaign=brandjs"),
                  I = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg").attr("alt", "").css({
                      marginRight: "4px",
                      width: "26px"
                  }),
                  v = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg").attr("alt", "Made in Webflow");
              return E.append(I, v), E[0]
          }

          function d() {
              var E = i.children(o),
                  I = E.length && E.get(0) === l,
                  v = ga.env("editor");
              if (I) {
                  v && E.remove();
                  return
              }
              E.length && E.remove(), v || i.append(l)
          }
          return t
      })
  });
  var ma = f((iF, ya) => {
      "use strict";
      var Wn = Be();
      Wn.define("edit", ya.exports = function(e, t, r) {
          if (r = r || {}, (Wn.env("test") || Wn.env("frame")) && !r.fixture && !HE()) return {
              exit: 1
          };
          var n = {},
              i = e(window),
              o = e(document.documentElement),
              a = document.location,
              s = "hashchange",
              u, l = r.load || d,
              g = !1;
          try {
              g = localStorage && localStorage.getItem && localStorage.getItem("WebflowEditor")
          } catch {}
          g ? l() : a.search ? (/[?&](edit)(?:[=&?]|$)/.test(a.search) || /\?edit$/.test(a.href)) && l() : i.on(s, p).triggerHandler(s);

          function p() {
              u || /\?edit/.test(a.hash) && l()
          }

          function d() {
              u = !0, window.WebflowEditor = !0, i.off(s, p), w(function(C) {
                  e.ajax({
                      url: y("https://editor-api.webflow.com/api/editor/view"),
                      data: {
                          siteId: o.attr("data-wf-site")
                      },
                      xhrFields: {
                          withCredentials: !0
                      },
                      dataType: "json",
                      crossDomain: !0,
                      success: E(C)
                  })
              })
          }

          function E(C) {
              return function(R) {
                  if (!R) {
                      console.error("Could not load editor data");
                      return
                  }
                  R.thirdPartyCookiesSupported = C, I(S(R.scriptPath), function() {
                      window.WebflowEditor(R)
                  })
              }
          }

          function I(C, R) {
              e.ajax({
                  type: "GET",
                  url: C,
                  dataType: "script",
                  cache: !0
              }).then(R, v)
          }

          function v(C, R, x) {
              throw console.error("Could not load editor script: " + R), x
          }

          function S(C) {
              return C.indexOf("//") >= 0 ? C : y("https://editor-api.webflow.com" + C)
          }

          function y(C) {
              return C.replace(/([^:])\/\//g, "$1/")
          }

          function w(C) {
              var R = window.document.createElement("iframe");
              R.src = "https://webflow.com/site/third-party-cookie-check.html", R.style.display = "none", R.sandbox = "allow-scripts allow-same-origin";
              var x = function(X) {
                  X.data === "WF_third_party_cookies_unsupported" ? (O(R, x), C(!1)) : X.data === "WF_third_party_cookies_supported" && (O(R, x), C(!0))
              };
              R.onerror = function() {
                  O(R, x), C(!1)
              }, window.addEventListener("message", x, !1), window.document.body.appendChild(R)
          }

          function O(C, R) {
              window.removeEventListener("message", R, !1), C.remove()
          }
          return n
      });

      function HE() {
          try {
              return window.top.__Cypress__
          } catch {
              return !1
          }
      }
  });
  var _a = f((oF, va) => {
      "use strict";
      var WE = Be();
      WE.define("focus-visible", va.exports = function() {
          function e(r) {
              var n = !0,
                  i = !1,
                  o = null,
                  a = {
                      text: !0,
                      search: !0,
                      url: !0,
                      tel: !0,
                      email: !0,
                      password: !0,
                      number: !0,
                      date: !0,
                      month: !0,
                      week: !0,
                      time: !0,
                      datetime: !0,
                      "datetime-local": !0
                  };

              function s(O) {
                  return !!(O && O !== document && O.nodeName !== "HTML" && O.nodeName !== "BODY" && "classList" in O && "contains" in O.classList)
              }

              function u(O) {
                  var C = O.type,
                      R = O.tagName;
                  return !!(R === "INPUT" && a[C] && !O.readOnly || R === "TEXTAREA" && !O.readOnly || O.isContentEditable)
              }

              function l(O) {
                  O.getAttribute("data-wf-focus-visible") || O.setAttribute("data-wf-focus-visible", "true")
              }

              function g(O) {
                  O.getAttribute("data-wf-focus-visible") && O.removeAttribute("data-wf-focus-visible")
              }

              function p(O) {
                  O.metaKey || O.altKey || O.ctrlKey || (s(r.activeElement) && l(r.activeElement), n = !0)
              }

              function d() {
                  n = !1
              }

              function E(O) {
                  s(O.target) && (n || u(O.target)) && l(O.target)
              }

              function I(O) {
                  s(O.target) && O.target.hasAttribute("data-wf-focus-visible") && (i = !0, window.clearTimeout(o), o = window.setTimeout(function() {
                      i = !1
                  }, 100), g(O.target))
              }

              function v() {
                  document.visibilityState === "hidden" && (i && (n = !0), S())
              }

              function S() {
                  document.addEventListener("mousemove", w), document.addEventListener("mousedown", w), document.addEventListener("mouseup", w), document.addEventListener("pointermove", w), document.addEventListener("pointerdown", w), document.addEventListener("pointerup", w), document.addEventListener("touchmove", w), document.addEventListener("touchstart", w), document.addEventListener("touchend", w)
              }

              function y() {
                  document.removeEventListener("mousemove", w), document.removeEventListener("mousedown", w), document.removeEventListener("mouseup", w), document.removeEventListener("pointermove", w), document.removeEventListener("pointerdown", w), document.removeEventListener("pointerup", w), document.removeEventListener("touchmove", w), document.removeEventListener("touchstart", w), document.removeEventListener("touchend", w)
              }

              function w(O) {
                  O.target.nodeName && O.target.nodeName.toLowerCase() === "html" || (n = !1, y())
              }
              document.addEventListener("keydown", p, !0), document.addEventListener("mousedown", d, !0), document.addEventListener("pointerdown", d, !0), document.addEventListener("touchstart", d, !0), document.addEventListener("visibilitychange", v, !0), S(), r.addEventListener("focus", E, !0), r.addEventListener("blur", I, !0)
          }

          function t() {
              if (typeof document < "u") try {
                  document.querySelector(":focus-visible")
              } catch {
                  e(document)
              }
          }
          return {
              ready: t
          }
      })
  });
  var ba = f((aF, Ta) => {
      "use strict";
      var Ia = Be();
      Ia.define("focus", Ta.exports = function() {
          var e = [],
              t = !1;

          function r(a) {
              t && (a.preventDefault(), a.stopPropagation(), a.stopImmediatePropagation(), e.unshift(a))
          }

          function n(a) {
              var s = a.target,
                  u = s.tagName;
              return /^a$/i.test(u) && s.href != null || /^(button|textarea)$/i.test(u) && s.disabled !== !0 || /^input$/i.test(u) && /^(button|reset|submit|radio|checkbox)$/i.test(s.type) && !s.disabled || !/^(button|input|textarea|select|a)$/i.test(u) && !Number.isNaN(Number.parseFloat(s.tabIndex)) || /^audio$/i.test(u) || /^video$/i.test(u) && s.controls === !0
          }

          function i(a) {
              n(a) && (t = !0, setTimeout(() => {
                  for (t = !1, a.target.focus(); e.length > 0;) {
                      var s = e.pop();
                      s.target.dispatchEvent(new MouseEvent(s.type, s))
                  }
              }, 0))
          }

          function o() {
              typeof document < "u" && document.body.hasAttribute("data-wf-focus-within") && Ia.env.safari && (document.addEventListener("mousedown", i, !0), document.addEventListener("mouseup", r, !0), document.addEventListener("click", r, !0))
          }
          return {
              ready: o
          }
      })
  });
  var Oa = f((sF, Sa) => {
      "use strict";
      var zn = window.jQuery,
          ke = {},
          xr = [],
          Aa = ".w-ix",
          Rr = {
              reset: function(e, t) {
                  t.__wf_intro = null
              },
              intro: function(e, t) {
                  t.__wf_intro || (t.__wf_intro = !0, zn(t).triggerHandler(ke.types.INTRO))
              },
              outro: function(e, t) {
                  t.__wf_intro && (t.__wf_intro = null, zn(t).triggerHandler(ke.types.OUTRO))
              }
          };
      ke.triggers = {};
      ke.types = {
          INTRO: "w-ix-intro" + Aa,
          OUTRO: "w-ix-outro" + Aa
      };
      ke.init = function() {
          for (var e = xr.length, t = 0; t < e; t++) {
              var r = xr[t];
              r[0](0, r[1])
          }
          xr = [], zn.extend(ke.triggers, Rr)
      };
      ke.async = function() {
          for (var e in Rr) {
              var t = Rr[e];
              Rr.hasOwnProperty(e) && (ke.triggers[e] = function(r, n) {
                  xr.push([t, n])
              })
          }
      };
      ke.async();
      Sa.exports = ke
  });
  var Ca = f((uF, Ra) => {
      "use strict";
      var Kn = Oa();

      function wa(e, t) {
          var r = document.createEvent("CustomEvent");
          r.initCustomEvent(t, !0, !0, null), e.dispatchEvent(r)
      }
      var zE = window.jQuery,
          Cr = {},
          xa = ".w-ix",
          KE = {
              reset: function(e, t) {
                  Kn.triggers.reset(e, t)
              },
              intro: function(e, t) {
                  Kn.triggers.intro(e, t), wa(t, "COMPONENT_ACTIVE")
              },
              outro: function(e, t) {
                  Kn.triggers.outro(e, t), wa(t, "COMPONENT_INACTIVE")
              }
          };
      Cr.triggers = {};
      Cr.types = {
          INTRO: "w-ix-intro" + xa,
          OUTRO: "w-ix-outro" + xa
      };
      zE.extend(Cr.triggers, KE);
      Ra.exports = Cr
  });
  var jn = f((cF, La) => {
      var jE = typeof global == "object" && global && global.Object === Object && global;
      La.exports = jE
  });
  var Me = f((lF, Pa) => {
      var $E = jn(),
          YE = typeof self == "object" && self && self.Object === Object && self,
          QE = $E || YE || Function("return this")();
      Pa.exports = QE
  });
  var mt = f((fF, Na) => {
      var ZE = Me(),
          JE = ZE.Symbol;
      Na.exports = JE
  });
  var qa = f((dF, Fa) => {
      var Ma = mt(),
          Da = Object.prototype,
          ey = Da.hasOwnProperty,
          ty = Da.toString,
          $t = Ma ? Ma.toStringTag : void 0;

      function ry(e) {
          var t = ey.call(e, $t),
              r = e[$t];
          try {
              e[$t] = void 0;
              var n = !0
          } catch {}
          var i = ty.call(e);
          return n && (t ? e[$t] = r : delete e[$t]), i
      }
      Fa.exports = ry
  });
  var Ga = f((pF, Xa) => {
      var ny = Object.prototype,
          iy = ny.toString;

      function oy(e) {
          return iy.call(e)
      }
      Xa.exports = oy
  });
  var rt = f((gF, Ba) => {
      var Va = mt(),
          ay = qa(),
          sy = Ga(),
          uy = "[object Null]",
          cy = "[object Undefined]",
          Ua = Va ? Va.toStringTag : void 0;

      function ly(e) {
          return e == null ? e === void 0 ? cy : uy : Ua && Ua in Object(e) ? ay(e) : sy(e)
      }
      Ba.exports = ly
  });
  var $n = f((hF, ka) => {
      function fy(e, t) {
          return function(r) {
              return e(t(r))
          }
      }
      ka.exports = fy
  });
  var Yn = f((EF, Ha) => {
      var dy = $n(),
          py = dy(Object.getPrototypeOf, Object);
      Ha.exports = py
  });
  var $e = f((yF, Wa) => {
      function gy(e) {
          return e != null && typeof e == "object"
      }
      Wa.exports = gy
  });
  var Qn = f((mF, Ka) => {
      var hy = rt(),
          Ey = Yn(),
          yy = $e(),
          my = "[object Object]",
          vy = Function.prototype,
          _y = Object.prototype,
          za = vy.toString,
          Iy = _y.hasOwnProperty,
          Ty = za.call(Object);

      function by(e) {
          if (!yy(e) || hy(e) != my) return !1;
          var t = Ey(e);
          if (t === null) return !0;
          var r = Iy.call(t, "constructor") && t.constructor;
          return typeof r == "function" && r instanceof r && za.call(r) == Ty
      }
      Ka.exports = by
  });
  var ja = f(Zn => {
      "use strict";
      Object.defineProperty(Zn, "__esModule", {
          value: !0
      });
      Zn.default = Ay;

      function Ay(e) {
          var t, r = e.Symbol;
          return typeof r == "function" ? r.observable ? t = r.observable : (t = r("observable"), r.observable = t) : t = "@@observable", t
      }
  });
  var $a = f((ei, Jn) => {
      "use strict";
      Object.defineProperty(ei, "__esModule", {
          value: !0
      });
      var Sy = ja(),
          Oy = wy(Sy);

      function wy(e) {
          return e && e.__esModule ? e : {
              default: e
          }
      }
      var vt;
      typeof self < "u" ? vt = self : typeof window < "u" ? vt = window : typeof global < "u" ? vt = global : typeof Jn < "u" ? vt = Jn : vt = Function("return this")();
      var xy = (0, Oy.default)(vt);
      ei.default = xy
  });
  var ti = f(Yt => {
      "use strict";
      Yt.__esModule = !0;
      Yt.ActionTypes = void 0;
      Yt.default = Ja;
      var Ry = Qn(),
          Cy = Za(Ry),
          Ly = $a(),
          Ya = Za(Ly);

      function Za(e) {
          return e && e.__esModule ? e : {
              default: e
          }
      }
      var Qa = Yt.ActionTypes = {
          INIT: "@@redux/INIT"
      };

      function Ja(e, t, r) {
          var n;
          if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
              if (typeof r != "function") throw new Error("Expected the enhancer to be a function.");
              return r(Ja)(e, t)
          }
          if (typeof e != "function") throw new Error("Expected the reducer to be a function.");
          var i = e,
              o = t,
              a = [],
              s = a,
              u = !1;

          function l() {
              s === a && (s = a.slice())
          }

          function g() {
              return o
          }

          function p(v) {
              if (typeof v != "function") throw new Error("Expected listener to be a function.");
              var S = !0;
              return l(), s.push(v),
                  function() {
                      if (S) {
                          S = !1, l();
                          var w = s.indexOf(v);
                          s.splice(w, 1)
                      }
                  }
          }

          function d(v) {
              if (!(0, Cy.default)(v)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
              if (typeof v.type > "u") throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
              if (u) throw new Error("Reducers may not dispatch actions.");
              try {
                  u = !0, o = i(o, v)
              } finally {
                  u = !1
              }
              for (var S = a = s, y = 0; y < S.length; y++) S[y]();
              return v
          }

          function E(v) {
              if (typeof v != "function") throw new Error("Expected the nextReducer to be a function.");
              i = v, d({
                  type: Qa.INIT
              })
          }

          function I() {
              var v, S = p;
              return v = {
                  subscribe: function(w) {
                      if (typeof w != "object") throw new TypeError("Expected the observer to be an object.");

                      function O() {
                          w.next && w.next(g())
                      }
                      O();
                      var C = S(O);
                      return {
                          unsubscribe: C
                      }
                  }
              }, v[Ya.default] = function() {
                  return this
              }, v
          }
          return d({
              type: Qa.INIT
          }), n = {
              dispatch: d,
              subscribe: p,
              getState: g,
              replaceReducer: E
          }, n[Ya.default] = I, n
      }
  });
  var ni = f(ri => {
      "use strict";
      ri.__esModule = !0;
      ri.default = Py;

      function Py(e) {
          typeof console < "u" && typeof console.error == "function" && console.error(e);
          try {
              throw new Error(e)
          } catch {}
      }
  });
  var rs = f(ii => {
      "use strict";
      ii.__esModule = !0;
      ii.default = qy;
      var es = ti(),
          Ny = Qn(),
          TF = ts(Ny),
          My = ni(),
          bF = ts(My);

      function ts(e) {
          return e && e.__esModule ? e : {
              default: e
          }
      }

      function Dy(e, t) {
          var r = t && t.type,
              n = r && '"' + r.toString() + '"' || "an action";
          return "Given action " + n + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state.'
      }

      function Fy(e) {
          Object.keys(e).forEach(function(t) {
              var r = e[t],
                  n = r(void 0, {
                      type: es.ActionTypes.INIT
                  });
              if (typeof n > "u") throw new Error('Reducer "' + t + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
              var i = "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".");
              if (typeof r(void 0, {
                      type: i
                  }) > "u") throw new Error('Reducer "' + t + '" returned undefined when probed with a random type. ' + ("Don't try to handle " + es.ActionTypes.INIT + ' or other actions in "redux/*" ') + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.")
          })
      }

      function qy(e) {
          for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
              var i = t[n];
              typeof e[i] == "function" && (r[i] = e[i])
          }
          var o = Object.keys(r);
          if (!1) var a;
          var s;
          try {
              Fy(r)
          } catch (u) {
              s = u
          }
          return function() {
              var l = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0],
                  g = arguments[1];
              if (s) throw s;
              if (!1) var p;
              for (var d = !1, E = {}, I = 0; I < o.length; I++) {
                  var v = o[I],
                      S = r[v],
                      y = l[v],
                      w = S(y, g);
                  if (typeof w > "u") {
                      var O = Dy(v, g);
                      throw new Error(O)
                  }
                  E[v] = w, d = d || w !== y
              }
              return d ? E : l
          }
      }
  });
  var is = f(oi => {
      "use strict";
      oi.__esModule = !0;
      oi.default = Xy;

      function ns(e, t) {
          return function() {
              return t(e.apply(void 0, arguments))
          }
      }

      function Xy(e, t) {
          if (typeof e == "function") return ns(e, t);
          if (typeof e != "object" || e === null) throw new Error("bindActionCreators expected an object or a function, instead received " + (e === null ? "null" : typeof e) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
          for (var r = Object.keys(e), n = {}, i = 0; i < r.length; i++) {
              var o = r[i],
                  a = e[o];
              typeof a == "function" && (n[o] = ns(a, t))
          }
          return n
      }
  });
  var si = f(ai => {
      "use strict";
      ai.__esModule = !0;
      ai.default = Gy;

      function Gy() {
          for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
          if (t.length === 0) return function(o) {
              return o
          };
          if (t.length === 1) return t[0];
          var n = t[t.length - 1],
              i = t.slice(0, -1);
          return function() {
              return i.reduceRight(function(o, a) {
                  return a(o)
              }, n.apply(void 0, arguments))
          }
      }
  });
  var os = f(ui => {
      "use strict";
      ui.__esModule = !0;
      var Vy = Object.assign || function(e) {
          for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
      };
      ui.default = Hy;
      var Uy = si(),
          By = ky(Uy);

      function ky(e) {
          return e && e.__esModule ? e : {
              default: e
          }
      }

      function Hy() {
          for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
          return function(n) {
              return function(i, o, a) {
                  var s = n(i, o, a),
                      u = s.dispatch,
                      l = [],
                      g = {
                          getState: s.getState,
                          dispatch: function(d) {
                              return u(d)
                          }
                      };
                  return l = t.map(function(p) {
                      return p(g)
                  }), u = By.default.apply(void 0, l)(s.dispatch), Vy({}, s, {
                      dispatch: u
                  })
              }
          }
      }
  });
  var ci = f(Re => {
      "use strict";
      Re.__esModule = !0;
      Re.compose = Re.applyMiddleware = Re.bindActionCreators = Re.combineReducers = Re.createStore = void 0;
      var Wy = ti(),
          zy = _t(Wy),
          Ky = rs(),
          jy = _t(Ky),
          $y = is(),
          Yy = _t($y),
          Qy = os(),
          Zy = _t(Qy),
          Jy = si(),
          em = _t(Jy),
          tm = ni(),
          xF = _t(tm);

      function _t(e) {
          return e && e.__esModule ? e : {
              default: e
          }
      }
      Re.createStore = zy.default;
      Re.combineReducers = jy.default;
      Re.bindActionCreators = Yy.default;
      Re.applyMiddleware = Zy.default;
      Re.compose = em.default
  });
  var De, li, He, rm, nm, Lr, im, fi = ce(() => {
      "use strict";
      De = {
          NAVBAR_OPEN: "NAVBAR_OPEN",
          NAVBAR_CLOSE: "NAVBAR_CLOSE",
          TAB_ACTIVE: "TAB_ACTIVE",
          TAB_INACTIVE: "TAB_INACTIVE",
          SLIDER_ACTIVE: "SLIDER_ACTIVE",
          SLIDER_INACTIVE: "SLIDER_INACTIVE",
          DROPDOWN_OPEN: "DROPDOWN_OPEN",
          DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
          MOUSE_CLICK: "MOUSE_CLICK",
          MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
          MOUSE_DOWN: "MOUSE_DOWN",
          MOUSE_UP: "MOUSE_UP",
          MOUSE_OVER: "MOUSE_OVER",
          MOUSE_OUT: "MOUSE_OUT",
          MOUSE_MOVE: "MOUSE_MOVE",
          MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
          SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
          SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
          SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
          ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
          ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
          PAGE_START: "PAGE_START",
          PAGE_FINISH: "PAGE_FINISH",
          PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
          PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
          PAGE_SCROLL: "PAGE_SCROLL"
      }, li = {
          ELEMENT: "ELEMENT",
          CLASS: "CLASS",
          PAGE: "PAGE"
      }, He = {
          ELEMENT: "ELEMENT",
          VIEWPORT: "VIEWPORT"
      }, rm = {
          X_AXIS: "X_AXIS",
          Y_AXIS: "Y_AXIS"
      }, nm = {
          CHILDREN: "CHILDREN",
          SIBLINGS: "SIBLINGS",
          IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN"
      }, Lr = {
          FADE_EFFECT: "FADE_EFFECT",
          SLIDE_EFFECT: "SLIDE_EFFECT",
          GROW_EFFECT: "GROW_EFFECT",
          SHRINK_EFFECT: "SHRINK_EFFECT",
          SPIN_EFFECT: "SPIN_EFFECT",
          FLY_EFFECT: "FLY_EFFECT",
          POP_EFFECT: "POP_EFFECT",
          FLIP_EFFECT: "FLIP_EFFECT",
          JIGGLE_EFFECT: "JIGGLE_EFFECT",
          PULSE_EFFECT: "PULSE_EFFECT",
          DROP_EFFECT: "DROP_EFFECT",
          BLINK_EFFECT: "BLINK_EFFECT",
          BOUNCE_EFFECT: "BOUNCE_EFFECT",
          FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
          FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
          RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
          JELLO_EFFECT: "JELLO_EFFECT",
          GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
          SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
          PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT"
      }, im = {
          LEFT: "LEFT",
          RIGHT: "RIGHT",
          BOTTOM: "BOTTOM",
          TOP: "TOP",
          BOTTOM_LEFT: "BOTTOM_LEFT",
          BOTTOM_RIGHT: "BOTTOM_RIGHT",
          TOP_RIGHT: "TOP_RIGHT",
          TOP_LEFT: "TOP_LEFT",
          CLOCKWISE: "CLOCKWISE",
          COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE"
      }
  });
  var Se, om, Pr = ce(() => {
      "use strict";
      Se = {
          TRANSFORM_MOVE: "TRANSFORM_MOVE",
          TRANSFORM_SCALE: "TRANSFORM_SCALE",
          TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
          TRANSFORM_SKEW: "TRANSFORM_SKEW",
          STYLE_OPACITY: "STYLE_OPACITY",
          STYLE_SIZE: "STYLE_SIZE",
          STYLE_FILTER: "STYLE_FILTER",
          STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
          STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
          STYLE_BORDER: "STYLE_BORDER",
          STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
          OBJECT_VALUE: "OBJECT_VALUE",
          PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
          PLUGIN_SPLINE: "PLUGIN_SPLINE",
          PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
          GENERAL_DISPLAY: "GENERAL_DISPLAY",
          GENERAL_START_ACTION: "GENERAL_START_ACTION",
          GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
          GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
          GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
          GENERAL_LOOP: "GENERAL_LOOP",
          STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW"
      }, om = {
          ELEMENT: "ELEMENT",
          ELEMENT_CLASS: "ELEMENT_CLASS",
          TRIGGER_ELEMENT: "TRIGGER_ELEMENT"
      }
  });
  var am, as = ce(() => {
      "use strict";
      am = {
          MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
          MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
          MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
          SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
          SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
          MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
          PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
          PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
          PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
          NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
          DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
          ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
          TAB_INTERACTION: "TAB_INTERACTION",
          SLIDER_INTERACTION: "SLIDER_INTERACTION"
      }
  });
  var sm, um, cm, lm, fm, dm, pm, di, ss = ce(() => {
      "use strict";
      Pr();
      ({
          TRANSFORM_MOVE: sm,
          TRANSFORM_SCALE: um,
          TRANSFORM_ROTATE: cm,
          TRANSFORM_SKEW: lm,
          STYLE_SIZE: fm,
          STYLE_FILTER: dm,
          STYLE_FONT_VARIATION: pm
      } = Se), di = {
          [sm]: !0,
          [um]: !0,
          [cm]: !0,
          [lm]: !0,
          [fm]: !0,
          [dm]: !0,
          [pm]: !0
      }
  });
  var Ee = {};
  Ae(Ee, {
      IX2_ACTION_LIST_PLAYBACK_CHANGED: () => Cm,
      IX2_ANIMATION_FRAME_CHANGED: () => Am,
      IX2_CLEAR_REQUESTED: () => Im,
      IX2_ELEMENT_STATE_CHANGED: () => Rm,
      IX2_EVENT_LISTENER_ADDED: () => Tm,
      IX2_EVENT_STATE_CHANGED: () => bm,
      IX2_INSTANCE_ADDED: () => Om,
      IX2_INSTANCE_REMOVED: () => xm,
      IX2_INSTANCE_STARTED: () => wm,
      IX2_MEDIA_QUERIES_DEFINED: () => Pm,
      IX2_PARAMETER_CHANGED: () => Sm,
      IX2_PLAYBACK_REQUESTED: () => vm,
      IX2_PREVIEW_REQUESTED: () => mm,
      IX2_RAW_DATA_IMPORTED: () => gm,
      IX2_SESSION_INITIALIZED: () => hm,
      IX2_SESSION_STARTED: () => Em,
      IX2_SESSION_STOPPED: () => ym,
      IX2_STOP_REQUESTED: () => _m,
      IX2_TEST_FRAME_RENDERED: () => Nm,
      IX2_VIEWPORT_WIDTH_CHANGED: () => Lm
  });
  var gm, hm, Em, ym, mm, vm, _m, Im, Tm, bm, Am, Sm, Om, wm, xm, Rm, Cm, Lm, Pm, Nm, us = ce(() => {
      "use strict";
      gm = "IX2_RAW_DATA_IMPORTED", hm = "IX2_SESSION_INITIALIZED", Em = "IX2_SESSION_STARTED", ym = "IX2_SESSION_STOPPED", mm = "IX2_PREVIEW_REQUESTED", vm = "IX2_PLAYBACK_REQUESTED", _m = "IX2_STOP_REQUESTED", Im = "IX2_CLEAR_REQUESTED", Tm = "IX2_EVENT_LISTENER_ADDED", bm = "IX2_EVENT_STATE_CHANGED", Am = "IX2_ANIMATION_FRAME_CHANGED", Sm = "IX2_PARAMETER_CHANGED", Om = "IX2_INSTANCE_ADDED", wm = "IX2_INSTANCE_STARTED", xm = "IX2_INSTANCE_REMOVED", Rm = "IX2_ELEMENT_STATE_CHANGED", Cm = "IX2_ACTION_LIST_PLAYBACK_CHANGED", Lm = "IX2_VIEWPORT_WIDTH_CHANGED", Pm = "IX2_MEDIA_QUERIES_DEFINED", Nm = "IX2_TEST_FRAME_RENDERED"
  });
  var me = {};
  Ae(me, {
      ABSTRACT_NODE: () => Lv,
      AUTO: () => _v,
      BACKGROUND: () => gv,
      BACKGROUND_COLOR: () => pv,
      BAR_DELIMITER: () => bv,
      BORDER_COLOR: () => hv,
      BOUNDARY_SELECTOR: () => Xm,
      CHILDREN: () => Av,
      COLON_DELIMITER: () => Tv,
      COLOR: () => Ev,
      COMMA_DELIMITER: () => Iv,
      CONFIG_UNIT: () => zm,
      CONFIG_VALUE: () => Bm,
      CONFIG_X_UNIT: () => km,
      CONFIG_X_VALUE: () => Gm,
      CONFIG_Y_UNIT: () => Hm,
      CONFIG_Y_VALUE: () => Vm,
      CONFIG_Z_UNIT: () => Wm,
      CONFIG_Z_VALUE: () => Um,
      DISPLAY: () => yv,
      FILTER: () => cv,
      FLEX: () => mv,
      FONT_VARIATION_SETTINGS: () => lv,
      HEIGHT: () => dv,
      HTML_ELEMENT: () => Rv,
      IMMEDIATE_CHILDREN: () => Sv,
      IX2_ID_DELIMITER: () => Mm,
      OPACITY: () => uv,
      PARENT: () => wv,
      PLAIN_OBJECT: () => Cv,
      PRESERVE_3D: () => xv,
      RENDER_GENERAL: () => Nv,
      RENDER_PLUGIN: () => Dv,
      RENDER_STYLE: () => Mv,
      RENDER_TRANSFORM: () => Pv,
      ROTATE_X: () => rv,
      ROTATE_Y: () => nv,
      ROTATE_Z: () => iv,
      SCALE_3D: () => tv,
      SCALE_X: () => Zm,
      SCALE_Y: () => Jm,
      SCALE_Z: () => ev,
      SIBLINGS: () => Ov,
      SKEW: () => ov,
      SKEW_X: () => av,
      SKEW_Y: () => sv,
      TRANSFORM: () => Km,
      TRANSLATE_3D: () => Qm,
      TRANSLATE_X: () => jm,
      TRANSLATE_Y: () => $m,
      TRANSLATE_Z: () => Ym,
      WF_PAGE: () => Dm,
      WIDTH: () => fv,
      WILL_CHANGE: () => vv,
      W_MOD_IX: () => qm,
      W_MOD_JS: () => Fm
  });
  var Mm, Dm, Fm, qm, Xm, Gm, Vm, Um, Bm, km, Hm, Wm, zm, Km, jm, $m, Ym, Qm, Zm, Jm, ev, tv, rv, nv, iv, ov, av, sv, uv, cv, lv, fv, dv, pv, gv, hv, Ev, yv, mv, vv, _v, Iv, Tv, bv, Av, Sv, Ov, wv, xv, Rv, Cv, Lv, Pv, Nv, Mv, Dv, cs = ce(() => {
      "use strict";
      Mm = "|", Dm = "data-wf-page", Fm = "w-mod-js", qm = "w-mod-ix", Xm = ".w-dyn-item", Gm = "xValue", Vm = "yValue", Um = "zValue", Bm = "value", km = "xUnit", Hm = "yUnit", Wm = "zUnit", zm = "unit", Km = "transform", jm = "translateX", $m = "translateY", Ym = "translateZ", Qm = "translate3d", Zm = "scaleX", Jm = "scaleY", ev = "scaleZ", tv = "scale3d", rv = "rotateX", nv = "rotateY", iv = "rotateZ", ov = "skew", av = "skewX", sv = "skewY", uv = "opacity", cv = "filter", lv = "font-variation-settings", fv = "width", dv = "height", pv = "backgroundColor", gv = "background", hv = "borderColor", Ev = "color", yv = "display", mv = "flex", vv = "willChange", _v = "AUTO", Iv = ",", Tv = ":", bv = "|", Av = "CHILDREN", Sv = "IMMEDIATE_CHILDREN", Ov = "SIBLINGS", wv = "PARENT", xv = "preserve-3d", Rv = "HTML_ELEMENT", Cv = "PLAIN_OBJECT", Lv = "ABSTRACT_NODE", Pv = "RENDER_TRANSFORM", Nv = "RENDER_GENERAL", Mv = "RENDER_STYLE", Dv = "RENDER_PLUGIN"
  });
  var ls = {};
  Ae(ls, {
      ActionAppliesTo: () => om,
      ActionTypeConsts: () => Se,
      EventAppliesTo: () => li,
      EventBasedOn: () => He,
      EventContinuousMouseAxes: () => rm,
      EventLimitAffectedElements: () => nm,
      EventTypeConsts: () => De,
      IX2EngineActionTypes: () => Ee,
      IX2EngineConstants: () => me,
      InteractionTypeConsts: () => am,
      QuickEffectDirectionConsts: () => im,
      QuickEffectIds: () => Lr,
      ReducedMotionTypes: () => di
  });
  var Oe = ce(() => {
      "use strict";
      fi();
      Pr();
      as();
      ss();
      us();
      cs();
      Pr();
      fi()
  });
  var Fv, fs, ds = ce(() => {
      "use strict";
      Oe();
      ({
          IX2_RAW_DATA_IMPORTED: Fv
      } = Ee), fs = (e = Object.freeze({}), t) => {
          switch (t.type) {
              case Fv:
                  return t.payload.ixData || Object.freeze({});
              default:
                  return e
          }
      }
  });
  var It = f(de => {
      "use strict";
      Object.defineProperty(de, "__esModule", {
          value: !0
      });
      var qv = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
          return typeof e
      } : function(e) {
          return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      };
      de.clone = Mr;
      de.addLast = hs;
      de.addFirst = Es;
      de.removeLast = ys;
      de.removeFirst = ms;
      de.insert = vs;
      de.removeAt = _s;
      de.replaceAt = Is;
      de.getIn = Dr;
      de.set = Fr;
      de.setIn = qr;
      de.update = bs;
      de.updateIn = As;
      de.merge = Ss;
      de.mergeDeep = Os;
      de.mergeIn = ws;
      de.omit = xs;
      de.addDefaults = Rs;
      var ps = "INVALID_ARGS";

      function gs(e) {
          throw new Error(e)
      }

      function pi(e) {
          var t = Object.keys(e);
          return Object.getOwnPropertySymbols ? t.concat(Object.getOwnPropertySymbols(e)) : t
      }
      var Xv = {}.hasOwnProperty;

      function Mr(e) {
          if (Array.isArray(e)) return e.slice();
          for (var t = pi(e), r = {}, n = 0; n < t.length; n++) {
              var i = t[n];
              r[i] = e[i]
          }
          return r
      }

      function we(e, t, r) {
          var n = r;
          n == null && gs(ps);
          for (var i = !1, o = arguments.length, a = Array(o > 3 ? o - 3 : 0), s = 3; s < o; s++) a[s - 3] = arguments[s];
          for (var u = 0; u < a.length; u++) {
              var l = a[u];
              if (l != null) {
                  var g = pi(l);
                  if (g.length)
                      for (var p = 0; p <= g.length; p++) {
                          var d = g[p];
                          if (!(e && n[d] !== void 0)) {
                              var E = l[d];
                              t && Nr(n[d]) && Nr(E) && (E = we(e, t, n[d], E)), !(E === void 0 || E === n[d]) && (i || (i = !0, n = Mr(n)), n[d] = E)
                          }
                      }
              }
          }
          return n
      }

      function Nr(e) {
          var t = typeof e > "u" ? "undefined" : qv(e);
          return e != null && (t === "object" || t === "function")
      }

      function hs(e, t) {
          return Array.isArray(t) ? e.concat(t) : e.concat([t])
      }

      function Es(e, t) {
          return Array.isArray(t) ? t.concat(e) : [t].concat(e)
      }

      function ys(e) {
          return e.length ? e.slice(0, e.length - 1) : e
      }

      function ms(e) {
          return e.length ? e.slice(1) : e
      }

      function vs(e, t, r) {
          return e.slice(0, t).concat(Array.isArray(r) ? r : [r]).concat(e.slice(t))
      }

      function _s(e, t) {
          return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1))
      }

      function Is(e, t, r) {
          if (e[t] === r) return e;
          for (var n = e.length, i = Array(n), o = 0; o < n; o++) i[o] = e[o];
          return i[t] = r, i
      }

      function Dr(e, t) {
          if (!Array.isArray(t) && gs(ps), e != null) {
              for (var r = e, n = 0; n < t.length; n++) {
                  var i = t[n];
                  if (r = r?.[i], r === void 0) return r
              }
              return r
          }
      }

      function Fr(e, t, r) {
          var n = typeof t == "number" ? [] : {},
              i = e ?? n;
          if (i[t] === r) return i;
          var o = Mr(i);
          return o[t] = r, o
      }

      function Ts(e, t, r, n) {
          var i = void 0,
              o = t[n];
          if (n === t.length - 1) i = r;
          else {
              var a = Nr(e) && Nr(e[o]) ? e[o] : typeof t[n + 1] == "number" ? [] : {};
              i = Ts(a, t, r, n + 1)
          }
          return Fr(e, o, i)
      }

      function qr(e, t, r) {
          return t.length ? Ts(e, t, r, 0) : r
      }

      function bs(e, t, r) {
          var n = e?.[t],
              i = r(n);
          return Fr(e, t, i)
      }

      function As(e, t, r) {
          var n = Dr(e, t),
              i = r(n);
          return qr(e, t, i)
      }

      function Ss(e, t, r, n, i, o) {
          for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6; u < a; u++) s[u - 6] = arguments[u];
          return s.length ? we.call.apply(we, [null, !1, !1, e, t, r, n, i, o].concat(s)) : we(!1, !1, e, t, r, n, i, o)
      }

      function Os(e, t, r, n, i, o) {
          for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6; u < a; u++) s[u - 6] = arguments[u];
          return s.length ? we.call.apply(we, [null, !1, !0, e, t, r, n, i, o].concat(s)) : we(!1, !0, e, t, r, n, i, o)
      }

      function ws(e, t, r, n, i, o, a) {
          var s = Dr(e, t);
          s == null && (s = {});
          for (var u = void 0, l = arguments.length, g = Array(l > 7 ? l - 7 : 0), p = 7; p < l; p++) g[p - 7] = arguments[p];
          return g.length ? u = we.call.apply(we, [null, !1, !1, s, r, n, i, o, a].concat(g)) : u = we(!1, !1, s, r, n, i, o, a), qr(e, t, u)
      }

      function xs(e, t) {
          for (var r = Array.isArray(t) ? t : [t], n = !1, i = 0; i < r.length; i++)
              if (Xv.call(e, r[i])) {
                  n = !0;
                  break
              } if (!n) return e;
          for (var o = {}, a = pi(e), s = 0; s < a.length; s++) {
              var u = a[s];
              r.indexOf(u) >= 0 || (o[u] = e[u])
          }
          return o
      }

      function Rs(e, t, r, n, i, o) {
          for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6; u < a; u++) s[u - 6] = arguments[u];
          return s.length ? we.call.apply(we, [null, !0, !1, e, t, r, n, i, o].concat(s)) : we(!0, !1, e, t, r, n, i, o)
      }
      var Gv = {
          clone: Mr,
          addLast: hs,
          addFirst: Es,
          removeLast: ys,
          removeFirst: ms,
          insert: vs,
          removeAt: _s,
          replaceAt: Is,
          getIn: Dr,
          set: Fr,
          setIn: qr,
          update: bs,
          updateIn: As,
          merge: Ss,
          mergeDeep: Os,
          mergeIn: ws,
          omit: xs,
          addDefaults: Rs
      };
      de.default = Gv
  });
  var Ls, Vv, Uv, Bv, kv, Hv, Cs, Ps, Ns = ce(() => {
      "use strict";
      Oe();
      Ls = ie(It()), {
          IX2_PREVIEW_REQUESTED: Vv,
          IX2_PLAYBACK_REQUESTED: Uv,
          IX2_STOP_REQUESTED: Bv,
          IX2_CLEAR_REQUESTED: kv
      } = Ee, Hv = {
          preview: {},
          playback: {},
          stop: {},
          clear: {}
      }, Cs = Object.create(null, {
          [Vv]: {
              value: "preview"
          },
          [Uv]: {
              value: "playback"
          },
          [Bv]: {
              value: "stop"
          },
          [kv]: {
              value: "clear"
          }
      }), Ps = (e = Hv, t) => {
          if (t.type in Cs) {
              let r = [Cs[t.type]];
              return (0, Ls.setIn)(e, [r], {
                  ...t.payload
              })
          }
          return e
      }
  });
  var Ie, Wv, zv, Kv, jv, $v, Yv, Qv, Zv, Jv, e_, Ms, t_, Ds, Fs = ce(() => {
      "use strict";
      Oe();
      Ie = ie(It()), {
          IX2_SESSION_INITIALIZED: Wv,
          IX2_SESSION_STARTED: zv,
          IX2_TEST_FRAME_RENDERED: Kv,
          IX2_SESSION_STOPPED: jv,
          IX2_EVENT_LISTENER_ADDED: $v,
          IX2_EVENT_STATE_CHANGED: Yv,
          IX2_ANIMATION_FRAME_CHANGED: Qv,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: Zv,
          IX2_VIEWPORT_WIDTH_CHANGED: Jv,
          IX2_MEDIA_QUERIES_DEFINED: e_
      } = Ee, Ms = {
          active: !1,
          tick: 0,
          eventListeners: [],
          eventState: {},
          playbackState: {},
          viewportWidth: 0,
          mediaQueryKey: null,
          hasBoundaryNodes: !1,
          hasDefinedMediaQueries: !1,
          reducedMotion: !1
      }, t_ = 20, Ds = (e = Ms, t) => {
          switch (t.type) {
              case Wv: {
                  let {
                      hasBoundaryNodes: r,
                      reducedMotion: n
                  } = t.payload;
                  return (0, Ie.merge)(e, {
                      hasBoundaryNodes: r,
                      reducedMotion: n
                  })
              }
              case zv:
                  return (0, Ie.set)(e, "active", !0);
              case Kv: {
                  let {
                      payload: {
                          step: r = t_
                      }
                  } = t;
                  return (0, Ie.set)(e, "tick", e.tick + r)
              }
              case jv:
                  return Ms;
              case Qv: {
                  let {
                      payload: {
                          now: r
                      }
                  } = t;
                  return (0, Ie.set)(e, "tick", r)
              }
              case $v: {
                  let r = (0, Ie.addLast)(e.eventListeners, t.payload);
                  return (0, Ie.set)(e, "eventListeners", r)
              }
              case Yv: {
                  let {
                      stateKey: r,
                      newState: n
                  } = t.payload;
                  return (0, Ie.setIn)(e, ["eventState", r], n)
              }
              case Zv: {
                  let {
                      actionListId: r,
                      isPlaying: n
                  } = t.payload;
                  return (0, Ie.setIn)(e, ["playbackState", r], n)
              }
              case Jv: {
                  let {
                      width: r,
                      mediaQueries: n
                  } = t.payload, i = n.length, o = null;
                  for (let a = 0; a < i; a++) {
                      let {
                          key: s,
                          min: u,
                          max: l
                      } = n[a];
                      if (r >= u && r <= l) {
                          o = s;
                          break
                      }
                  }
                  return (0, Ie.merge)(e, {
                      viewportWidth: r,
                      mediaQueryKey: o
                  })
              }
              case e_:
                  return (0, Ie.set)(e, "hasDefinedMediaQueries", !0);
              default:
                  return e
          }
      }
  });
  var Xs = f((jF, qs) => {
      function r_() {
          this.__data__ = [], this.size = 0
      }
      qs.exports = r_
  });
  var Xr = f(($F, Gs) => {
      function n_(e, t) {
          return e === t || e !== e && t !== t
      }
      Gs.exports = n_
  });
  var Qt = f((YF, Vs) => {
      var i_ = Xr();

      function o_(e, t) {
          for (var r = e.length; r--;)
              if (i_(e[r][0], t)) return r;
          return -1
      }
      Vs.exports = o_
  });
  var Bs = f((QF, Us) => {
      var a_ = Qt(),
          s_ = Array.prototype,
          u_ = s_.splice;

      function c_(e) {
          var t = this.__data__,
              r = a_(t, e);
          if (r < 0) return !1;
          var n = t.length - 1;
          return r == n ? t.pop() : u_.call(t, r, 1), --this.size, !0
      }
      Us.exports = c_
  });
  var Hs = f((ZF, ks) => {
      var l_ = Qt();

      function f_(e) {
          var t = this.__data__,
              r = l_(t, e);
          return r < 0 ? void 0 : t[r][1]
      }
      ks.exports = f_
  });
  var zs = f((JF, Ws) => {
      var d_ = Qt();

      function p_(e) {
          return d_(this.__data__, e) > -1
      }
      Ws.exports = p_
  });
  var js = f((e2, Ks) => {
      var g_ = Qt();

      function h_(e, t) {
          var r = this.__data__,
              n = g_(r, e);
          return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this
      }
      Ks.exports = h_
  });
  var Zt = f((t2, $s) => {
      var E_ = Xs(),
          y_ = Bs(),
          m_ = Hs(),
          v_ = zs(),
          __ = js();

      function Tt(e) {
          var t = -1,
              r = e == null ? 0 : e.length;
          for (this.clear(); ++t < r;) {
              var n = e[t];
              this.set(n[0], n[1])
          }
      }
      Tt.prototype.clear = E_;
      Tt.prototype.delete = y_;
      Tt.prototype.get = m_;
      Tt.prototype.has = v_;
      Tt.prototype.set = __;
      $s.exports = Tt
  });
  var Qs = f((r2, Ys) => {
      var I_ = Zt();

      function T_() {
          this.__data__ = new I_, this.size = 0
      }
      Ys.exports = T_
  });
  var Js = f((n2, Zs) => {
      function b_(e) {
          var t = this.__data__,
              r = t.delete(e);
          return this.size = t.size, r
      }
      Zs.exports = b_
  });
  var tu = f((i2, eu) => {
      function A_(e) {
          return this.__data__.get(e)
      }
      eu.exports = A_
  });
  var nu = f((o2, ru) => {
      function S_(e) {
          return this.__data__.has(e)
      }
      ru.exports = S_
  });
  var We = f((a2, iu) => {
      function O_(e) {
          var t = typeof e;
          return e != null && (t == "object" || t == "function")
      }
      iu.exports = O_
  });
  var gi = f((s2, ou) => {
      var w_ = rt(),
          x_ = We(),
          R_ = "[object AsyncFunction]",
          C_ = "[object Function]",
          L_ = "[object GeneratorFunction]",
          P_ = "[object Proxy]";

      function N_(e) {
          if (!x_(e)) return !1;
          var t = w_(e);
          return t == C_ || t == L_ || t == R_ || t == P_
      }
      ou.exports = N_
  });
  var su = f((u2, au) => {
      var M_ = Me(),
          D_ = M_["__core-js_shared__"];
      au.exports = D_
  });
  var lu = f((c2, cu) => {
      var hi = su(),
          uu = function() {
              var e = /[^.]+$/.exec(hi && hi.keys && hi.keys.IE_PROTO || "");
              return e ? "Symbol(src)_1." + e : ""
          }();

      function F_(e) {
          return !!uu && uu in e
      }
      cu.exports = F_
  });
  var Ei = f((l2, fu) => {
      var q_ = Function.prototype,
          X_ = q_.toString;

      function G_(e) {
          if (e != null) {
              try {
                  return X_.call(e)
              } catch {}
              try {
                  return e + ""
              } catch {}
          }
          return ""
      }
      fu.exports = G_
  });
  var pu = f((f2, du) => {
      var V_ = gi(),
          U_ = lu(),
          B_ = We(),
          k_ = Ei(),
          H_ = /[\\^$.*+?()[\]{}|]/g,
          W_ = /^\[object .+?Constructor\]$/,
          z_ = Function.prototype,
          K_ = Object.prototype,
          j_ = z_.toString,
          $_ = K_.hasOwnProperty,
          Y_ = RegExp("^" + j_.call($_).replace(H_, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

      function Q_(e) {
          if (!B_(e) || U_(e)) return !1;
          var t = V_(e) ? Y_ : W_;
          return t.test(k_(e))
      }
      du.exports = Q_
  });
  var hu = f((d2, gu) => {
      function Z_(e, t) {
          return e?.[t]
      }
      gu.exports = Z_
  });
  var nt = f((p2, Eu) => {
      var J_ = pu(),
          eI = hu();

      function tI(e, t) {
          var r = eI(e, t);
          return J_(r) ? r : void 0
      }
      Eu.exports = tI
  });
  var Gr = f((g2, yu) => {
      var rI = nt(),
          nI = Me(),
          iI = rI(nI, "Map");
      yu.exports = iI
  });
  var Jt = f((h2, mu) => {
      var oI = nt(),
          aI = oI(Object, "create");
      mu.exports = aI
  });
  var Iu = f((E2, _u) => {
      var vu = Jt();

      function sI() {
          this.__data__ = vu ? vu(null) : {}, this.size = 0
      }
      _u.exports = sI
  });
  var bu = f((y2, Tu) => {
      function uI(e) {
          var t = this.has(e) && delete this.__data__[e];
          return this.size -= t ? 1 : 0, t
      }
      Tu.exports = uI
  });
  var Su = f((m2, Au) => {
      var cI = Jt(),
          lI = "__lodash_hash_undefined__",
          fI = Object.prototype,
          dI = fI.hasOwnProperty;

      function pI(e) {
          var t = this.__data__;
          if (cI) {
              var r = t[e];
              return r === lI ? void 0 : r
          }
          return dI.call(t, e) ? t[e] : void 0
      }
      Au.exports = pI
  });
  var wu = f((v2, Ou) => {
      var gI = Jt(),
          hI = Object.prototype,
          EI = hI.hasOwnProperty;

      function yI(e) {
          var t = this.__data__;
          return gI ? t[e] !== void 0 : EI.call(t, e)
      }
      Ou.exports = yI
  });
  var Ru = f((_2, xu) => {
      var mI = Jt(),
          vI = "__lodash_hash_undefined__";

      function _I(e, t) {
          var r = this.__data__;
          return this.size += this.has(e) ? 0 : 1, r[e] = mI && t === void 0 ? vI : t, this
      }
      xu.exports = _I
  });
  var Lu = f((I2, Cu) => {
      var II = Iu(),
          TI = bu(),
          bI = Su(),
          AI = wu(),
          SI = Ru();

      function bt(e) {
          var t = -1,
              r = e == null ? 0 : e.length;
          for (this.clear(); ++t < r;) {
              var n = e[t];
              this.set(n[0], n[1])
          }
      }
      bt.prototype.clear = II;
      bt.prototype.delete = TI;
      bt.prototype.get = bI;
      bt.prototype.has = AI;
      bt.prototype.set = SI;
      Cu.exports = bt
  });
  var Mu = f((T2, Nu) => {
      var Pu = Lu(),
          OI = Zt(),
          wI = Gr();

      function xI() {
          this.size = 0, this.__data__ = {
              hash: new Pu,
              map: new(wI || OI),
              string: new Pu
          }
      }
      Nu.exports = xI
  });
  var Fu = f((b2, Du) => {
      function RI(e) {
          var t = typeof e;
          return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null
      }
      Du.exports = RI
  });
  var er = f((A2, qu) => {
      var CI = Fu();

      function LI(e, t) {
          var r = e.__data__;
          return CI(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map
      }
      qu.exports = LI
  });
  var Gu = f((S2, Xu) => {
      var PI = er();

      function NI(e) {
          var t = PI(this, e).delete(e);
          return this.size -= t ? 1 : 0, t
      }
      Xu.exports = NI
  });
  var Uu = f((O2, Vu) => {
      var MI = er();

      function DI(e) {
          return MI(this, e).get(e)
      }
      Vu.exports = DI
  });
  var ku = f((w2, Bu) => {
      var FI = er();

      function qI(e) {
          return FI(this, e).has(e)
      }
      Bu.exports = qI
  });
  var Wu = f((x2, Hu) => {
      var XI = er();

      function GI(e, t) {
          var r = XI(this, e),
              n = r.size;
          return r.set(e, t), this.size += r.size == n ? 0 : 1, this
      }
      Hu.exports = GI
  });
  var Vr = f((R2, zu) => {
      var VI = Mu(),
          UI = Gu(),
          BI = Uu(),
          kI = ku(),
          HI = Wu();

      function At(e) {
          var t = -1,
              r = e == null ? 0 : e.length;
          for (this.clear(); ++t < r;) {
              var n = e[t];
              this.set(n[0], n[1])
          }
      }
      At.prototype.clear = VI;
      At.prototype.delete = UI;
      At.prototype.get = BI;
      At.prototype.has = kI;
      At.prototype.set = HI;
      zu.exports = At
  });
  var ju = f((C2, Ku) => {
      var WI = Zt(),
          zI = Gr(),
          KI = Vr(),
          jI = 200;

      function $I(e, t) {
          var r = this.__data__;
          if (r instanceof WI) {
              var n = r.__data__;
              if (!zI || n.length < jI - 1) return n.push([e, t]), this.size = ++r.size, this;
              r = this.__data__ = new KI(n)
          }
          return r.set(e, t), this.size = r.size, this
      }
      Ku.exports = $I
  });
  var yi = f((L2, $u) => {
      var YI = Zt(),
          QI = Qs(),
          ZI = Js(),
          JI = tu(),
          eT = nu(),
          tT = ju();

      function St(e) {
          var t = this.__data__ = new YI(e);
          this.size = t.size
      }
      St.prototype.clear = QI;
      St.prototype.delete = ZI;
      St.prototype.get = JI;
      St.prototype.has = eT;
      St.prototype.set = tT;
      $u.exports = St
  });
  var Qu = f((P2, Yu) => {
      var rT = "__lodash_hash_undefined__";

      function nT(e) {
          return this.__data__.set(e, rT), this
      }
      Yu.exports = nT
  });
  var Ju = f((N2, Zu) => {
      function iT(e) {
          return this.__data__.has(e)
      }
      Zu.exports = iT
  });
  var tc = f((M2, ec) => {
      var oT = Vr(),
          aT = Qu(),
          sT = Ju();

      function Ur(e) {
          var t = -1,
              r = e == null ? 0 : e.length;
          for (this.__data__ = new oT; ++t < r;) this.add(e[t])
      }
      Ur.prototype.add = Ur.prototype.push = aT;
      Ur.prototype.has = sT;
      ec.exports = Ur
  });
  var nc = f((D2, rc) => {
      function uT(e, t) {
          for (var r = -1, n = e == null ? 0 : e.length; ++r < n;)
              if (t(e[r], r, e)) return !0;
          return !1
      }
      rc.exports = uT
  });
  var oc = f((F2, ic) => {
      function cT(e, t) {
          return e.has(t)
      }
      ic.exports = cT
  });
  var mi = f((q2, ac) => {
      var lT = tc(),
          fT = nc(),
          dT = oc(),
          pT = 1,
          gT = 2;

      function hT(e, t, r, n, i, o) {
          var a = r & pT,
              s = e.length,
              u = t.length;
          if (s != u && !(a && u > s)) return !1;
          var l = o.get(e),
              g = o.get(t);
          if (l && g) return l == t && g == e;
          var p = -1,
              d = !0,
              E = r & gT ? new lT : void 0;
          for (o.set(e, t), o.set(t, e); ++p < s;) {
              var I = e[p],
                  v = t[p];
              if (n) var S = a ? n(v, I, p, t, e, o) : n(I, v, p, e, t, o);
              if (S !== void 0) {
                  if (S) continue;
                  d = !1;
                  break
              }
              if (E) {
                  if (!fT(t, function(y, w) {
                          if (!dT(E, w) && (I === y || i(I, y, r, n, o))) return E.push(w)
                      })) {
                      d = !1;
                      break
                  }
              } else if (!(I === v || i(I, v, r, n, o))) {
                  d = !1;
                  break
              }
          }
          return o.delete(e), o.delete(t), d
      }
      ac.exports = hT
  });
  var uc = f((X2, sc) => {
      var ET = Me(),
          yT = ET.Uint8Array;
      sc.exports = yT
  });
  var lc = f((G2, cc) => {
      function mT(e) {
          var t = -1,
              r = Array(e.size);
          return e.forEach(function(n, i) {
              r[++t] = [i, n]
          }), r
      }
      cc.exports = mT
  });
  var dc = f((V2, fc) => {
      function vT(e) {
          var t = -1,
              r = Array(e.size);
          return e.forEach(function(n) {
              r[++t] = n
          }), r
      }
      fc.exports = vT
  });
  var yc = f((U2, Ec) => {
      var pc = mt(),
          gc = uc(),
          _T = Xr(),
          IT = mi(),
          TT = lc(),
          bT = dc(),
          AT = 1,
          ST = 2,
          OT = "[object Boolean]",
          wT = "[object Date]",
          xT = "[object Error]",
          RT = "[object Map]",
          CT = "[object Number]",
          LT = "[object RegExp]",
          PT = "[object Set]",
          NT = "[object String]",
          MT = "[object Symbol]",
          DT = "[object ArrayBuffer]",
          FT = "[object DataView]",
          hc = pc ? pc.prototype : void 0,
          vi = hc ? hc.valueOf : void 0;

      function qT(e, t, r, n, i, o, a) {
          switch (r) {
              case FT:
                  if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                  e = e.buffer, t = t.buffer;
              case DT:
                  return !(e.byteLength != t.byteLength || !o(new gc(e), new gc(t)));
              case OT:
              case wT:
              case CT:
                  return _T(+e, +t);
              case xT:
                  return e.name == t.name && e.message == t.message;
              case LT:
              case NT:
                  return e == t + "";
              case RT:
                  var s = TT;
              case PT:
                  var u = n & AT;
                  if (s || (s = bT), e.size != t.size && !u) return !1;
                  var l = a.get(e);
                  if (l) return l == t;
                  n |= ST, a.set(e, t);
                  var g = IT(s(e), s(t), n, i, o, a);
                  return a.delete(e), g;
              case MT:
                  if (vi) return vi.call(e) == vi.call(t)
          }
          return !1
      }
      Ec.exports = qT
  });
  var Br = f((B2, mc) => {
      function XT(e, t) {
          for (var r = -1, n = t.length, i = e.length; ++r < n;) e[i + r] = t[r];
          return e
      }
      mc.exports = XT
  });
  var ye = f((k2, vc) => {
      var GT = Array.isArray;
      vc.exports = GT
  });
  var _i = f((H2, _c) => {
      var VT = Br(),
          UT = ye();

      function BT(e, t, r) {
          var n = t(e);
          return UT(e) ? n : VT(n, r(e))
      }
      _c.exports = BT
  });
  var Tc = f((W2, Ic) => {
      function kT(e, t) {
          for (var r = -1, n = e == null ? 0 : e.length, i = 0, o = []; ++r < n;) {
              var a = e[r];
              t(a, r, e) && (o[i++] = a)
          }
          return o
      }
      Ic.exports = kT
  });
  var Ii = f((z2, bc) => {
      function HT() {
          return []
      }
      bc.exports = HT
  });
  var Ti = f((K2, Sc) => {
      var WT = Tc(),
          zT = Ii(),
          KT = Object.prototype,
          jT = KT.propertyIsEnumerable,
          Ac = Object.getOwnPropertySymbols,
          $T = Ac ? function(e) {
              return e == null ? [] : (e = Object(e), WT(Ac(e), function(t) {
                  return jT.call(e, t)
              }))
          } : zT;
      Sc.exports = $T
  });
  var wc = f((j2, Oc) => {
      function YT(e, t) {
          for (var r = -1, n = Array(e); ++r < e;) n[r] = t(r);
          return n
      }
      Oc.exports = YT
  });
  var Rc = f(($2, xc) => {
      var QT = rt(),
          ZT = $e(),
          JT = "[object Arguments]";

      function eb(e) {
          return ZT(e) && QT(e) == JT
      }
      xc.exports = eb
  });
  var tr = f((Y2, Pc) => {
      var Cc = Rc(),
          tb = $e(),
          Lc = Object.prototype,
          rb = Lc.hasOwnProperty,
          nb = Lc.propertyIsEnumerable,
          ib = Cc(function() {
              return arguments
          }()) ? Cc : function(e) {
              return tb(e) && rb.call(e, "callee") && !nb.call(e, "callee")
          };
      Pc.exports = ib
  });
  var Mc = f((Q2, Nc) => {
      function ob() {
          return !1
      }
      Nc.exports = ob
  });
  var kr = f((rr, Ot) => {
      var ab = Me(),
          sb = Mc(),
          qc = typeof rr == "object" && rr && !rr.nodeType && rr,
          Dc = qc && typeof Ot == "object" && Ot && !Ot.nodeType && Ot,
          ub = Dc && Dc.exports === qc,
          Fc = ub ? ab.Buffer : void 0,
          cb = Fc ? Fc.isBuffer : void 0,
          lb = cb || sb;
      Ot.exports = lb
  });
  var Hr = f((Z2, Xc) => {
      var fb = 9007199254740991,
          db = /^(?:0|[1-9]\d*)$/;

      function pb(e, t) {
          var r = typeof e;
          return t = t ?? fb, !!t && (r == "number" || r != "symbol" && db.test(e)) && e > -1 && e % 1 == 0 && e < t
      }
      Xc.exports = pb
  });
  var Wr = f((J2, Gc) => {
      var gb = 9007199254740991;

      function hb(e) {
          return typeof e == "number" && e > -1 && e % 1 == 0 && e <= gb
      }
      Gc.exports = hb
  });
  var Uc = f((eq, Vc) => {
      var Eb = rt(),
          yb = Wr(),
          mb = $e(),
          vb = "[object Arguments]",
          _b = "[object Array]",
          Ib = "[object Boolean]",
          Tb = "[object Date]",
          bb = "[object Error]",
          Ab = "[object Function]",
          Sb = "[object Map]",
          Ob = "[object Number]",
          wb = "[object Object]",
          xb = "[object RegExp]",
          Rb = "[object Set]",
          Cb = "[object String]",
          Lb = "[object WeakMap]",
          Pb = "[object ArrayBuffer]",
          Nb = "[object DataView]",
          Mb = "[object Float32Array]",
          Db = "[object Float64Array]",
          Fb = "[object Int8Array]",
          qb = "[object Int16Array]",
          Xb = "[object Int32Array]",
          Gb = "[object Uint8Array]",
          Vb = "[object Uint8ClampedArray]",
          Ub = "[object Uint16Array]",
          Bb = "[object Uint32Array]",
          ue = {};
      ue[Mb] = ue[Db] = ue[Fb] = ue[qb] = ue[Xb] = ue[Gb] = ue[Vb] = ue[Ub] = ue[Bb] = !0;
      ue[vb] = ue[_b] = ue[Pb] = ue[Ib] = ue[Nb] = ue[Tb] = ue[bb] = ue[Ab] = ue[Sb] = ue[Ob] = ue[wb] = ue[xb] = ue[Rb] = ue[Cb] = ue[Lb] = !1;

      function kb(e) {
          return mb(e) && yb(e.length) && !!ue[Eb(e)]
      }
      Vc.exports = kb
  });
  var kc = f((tq, Bc) => {
      function Hb(e) {
          return function(t) {
              return e(t)
          }
      }
      Bc.exports = Hb
  });
  var Wc = f((nr, wt) => {
      var Wb = jn(),
          Hc = typeof nr == "object" && nr && !nr.nodeType && nr,
          ir = Hc && typeof wt == "object" && wt && !wt.nodeType && wt,
          zb = ir && ir.exports === Hc,
          bi = zb && Wb.process,
          Kb = function() {
              try {
                  var e = ir && ir.require && ir.require("util").types;
                  return e || bi && bi.binding && bi.binding("util")
              } catch {}
          }();
      wt.exports = Kb
  });
  var zr = f((rq, jc) => {
      var jb = Uc(),
          $b = kc(),
          zc = Wc(),
          Kc = zc && zc.isTypedArray,
          Yb = Kc ? $b(Kc) : jb;
      jc.exports = Yb
  });
  var Ai = f((nq, $c) => {
      var Qb = wc(),
          Zb = tr(),
          Jb = ye(),
          eA = kr(),
          tA = Hr(),
          rA = zr(),
          nA = Object.prototype,
          iA = nA.hasOwnProperty;

      function oA(e, t) {
          var r = Jb(e),
              n = !r && Zb(e),
              i = !r && !n && eA(e),
              o = !r && !n && !i && rA(e),
              a = r || n || i || o,
              s = a ? Qb(e.length, String) : [],
              u = s.length;
          for (var l in e)(t || iA.call(e, l)) && !(a && (l == "length" || i && (l == "offset" || l == "parent") || o && (l == "buffer" || l == "byteLength" || l == "byteOffset") || tA(l, u))) && s.push(l);
          return s
      }
      $c.exports = oA
  });
  var Kr = f((iq, Yc) => {
      var aA = Object.prototype;

      function sA(e) {
          var t = e && e.constructor,
              r = typeof t == "function" && t.prototype || aA;
          return e === r
      }
      Yc.exports = sA
  });
  var Zc = f((oq, Qc) => {
      var uA = $n(),
          cA = uA(Object.keys, Object);
      Qc.exports = cA
  });
  var jr = f((aq, Jc) => {
      var lA = Kr(),
          fA = Zc(),
          dA = Object.prototype,
          pA = dA.hasOwnProperty;

      function gA(e) {
          if (!lA(e)) return fA(e);
          var t = [];
          for (var r in Object(e)) pA.call(e, r) && r != "constructor" && t.push(r);
          return t
      }
      Jc.exports = gA
  });
  var ut = f((sq, el) => {
      var hA = gi(),
          EA = Wr();

      function yA(e) {
          return e != null && EA(e.length) && !hA(e)
      }
      el.exports = yA
  });
  var or = f((uq, tl) => {
      var mA = Ai(),
          vA = jr(),
          _A = ut();

      function IA(e) {
          return _A(e) ? mA(e) : vA(e)
      }
      tl.exports = IA
  });
  var nl = f((cq, rl) => {
      var TA = _i(),
          bA = Ti(),
          AA = or();

      function SA(e) {
          return TA(e, AA, bA)
      }
      rl.exports = SA
  });
  var al = f((lq, ol) => {
      var il = nl(),
          OA = 1,
          wA = Object.prototype,
          xA = wA.hasOwnProperty;

      function RA(e, t, r, n, i, o) {
          var a = r & OA,
              s = il(e),
              u = s.length,
              l = il(t),
              g = l.length;
          if (u != g && !a) return !1;
          for (var p = u; p--;) {
              var d = s[p];
              if (!(a ? d in t : xA.call(t, d))) return !1
          }
          var E = o.get(e),
              I = o.get(t);
          if (E && I) return E == t && I == e;
          var v = !0;
          o.set(e, t), o.set(t, e);
          for (var S = a; ++p < u;) {
              d = s[p];
              var y = e[d],
                  w = t[d];
              if (n) var O = a ? n(w, y, d, t, e, o) : n(y, w, d, e, t, o);
              if (!(O === void 0 ? y === w || i(y, w, r, n, o) : O)) {
                  v = !1;
                  break
              }
              S || (S = d == "constructor")
          }
          if (v && !S) {
              var C = e.constructor,
                  R = t.constructor;
              C != R && "constructor" in e && "constructor" in t && !(typeof C == "function" && C instanceof C && typeof R == "function" && R instanceof R) && (v = !1)
          }
          return o.delete(e), o.delete(t), v
      }
      ol.exports = RA
  });
  var ul = f((fq, sl) => {
      var CA = nt(),
          LA = Me(),
          PA = CA(LA, "DataView");
      sl.exports = PA
  });
  var ll = f((dq, cl) => {
      var NA = nt(),
          MA = Me(),
          DA = NA(MA, "Promise");
      cl.exports = DA
  });
  var dl = f((pq, fl) => {
      var FA = nt(),
          qA = Me(),
          XA = FA(qA, "Set");
      fl.exports = XA
  });
  var Si = f((gq, pl) => {
      var GA = nt(),
          VA = Me(),
          UA = GA(VA, "WeakMap");
      pl.exports = UA
  });
  var $r = f((hq, _l) => {
      var Oi = ul(),
          wi = Gr(),
          xi = ll(),
          Ri = dl(),
          Ci = Si(),
          vl = rt(),
          xt = Ei(),
          gl = "[object Map]",
          BA = "[object Object]",
          hl = "[object Promise]",
          El = "[object Set]",
          yl = "[object WeakMap]",
          ml = "[object DataView]",
          kA = xt(Oi),
          HA = xt(wi),
          WA = xt(xi),
          zA = xt(Ri),
          KA = xt(Ci),
          ct = vl;
      (Oi && ct(new Oi(new ArrayBuffer(1))) != ml || wi && ct(new wi) != gl || xi && ct(xi.resolve()) != hl || Ri && ct(new Ri) != El || Ci && ct(new Ci) != yl) && (ct = function(e) {
          var t = vl(e),
              r = t == BA ? e.constructor : void 0,
              n = r ? xt(r) : "";
          if (n) switch (n) {
              case kA:
                  return ml;
              case HA:
                  return gl;
              case WA:
                  return hl;
              case zA:
                  return El;
              case KA:
                  return yl
          }
          return t
      });
      _l.exports = ct
  });
  var xl = f((Eq, wl) => {
      var Li = yi(),
          jA = mi(),
          $A = yc(),
          YA = al(),
          Il = $r(),
          Tl = ye(),
          bl = kr(),
          QA = zr(),
          ZA = 1,
          Al = "[object Arguments]",
          Sl = "[object Array]",
          Yr = "[object Object]",
          JA = Object.prototype,
          Ol = JA.hasOwnProperty;

      function e0(e, t, r, n, i, o) {
          var a = Tl(e),
              s = Tl(t),
              u = a ? Sl : Il(e),
              l = s ? Sl : Il(t);
          u = u == Al ? Yr : u, l = l == Al ? Yr : l;
          var g = u == Yr,
              p = l == Yr,
              d = u == l;
          if (d && bl(e)) {
              if (!bl(t)) return !1;
              a = !0, g = !1
          }
          if (d && !g) return o || (o = new Li), a || QA(e) ? jA(e, t, r, n, i, o) : $A(e, t, u, r, n, i, o);
          if (!(r & ZA)) {
              var E = g && Ol.call(e, "__wrapped__"),
                  I = p && Ol.call(t, "__wrapped__");
              if (E || I) {
                  var v = E ? e.value() : e,
                      S = I ? t.value() : t;
                  return o || (o = new Li), i(v, S, r, n, o)
              }
          }
          return d ? (o || (o = new Li), YA(e, t, r, n, i, o)) : !1
      }
      wl.exports = e0
  });
  var Pi = f((yq, Ll) => {
      var t0 = xl(),
          Rl = $e();

      function Cl(e, t, r, n, i) {
          return e === t ? !0 : e == null || t == null || !Rl(e) && !Rl(t) ? e !== e && t !== t : t0(e, t, r, n, Cl, i)
      }
      Ll.exports = Cl
  });
  var Nl = f((mq, Pl) => {
      var r0 = yi(),
          n0 = Pi(),
          i0 = 1,
          o0 = 2;

      function a0(e, t, r, n) {
          var i = r.length,
              o = i,
              a = !n;
          if (e == null) return !o;
          for (e = Object(e); i--;) {
              var s = r[i];
              if (a && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1
          }
          for (; ++i < o;) {
              s = r[i];
              var u = s[0],
                  l = e[u],
                  g = s[1];
              if (a && s[2]) {
                  if (l === void 0 && !(u in e)) return !1
              } else {
                  var p = new r0;
                  if (n) var d = n(l, g, u, e, t, p);
                  if (!(d === void 0 ? n0(g, l, i0 | o0, n, p) : d)) return !1
              }
          }
          return !0
      }
      Pl.exports = a0
  });
  var Ni = f((vq, Ml) => {
      var s0 = We();

      function u0(e) {
          return e === e && !s0(e)
      }
      Ml.exports = u0
  });
  var Fl = f((_q, Dl) => {
      var c0 = Ni(),
          l0 = or();

      function f0(e) {
          for (var t = l0(e), r = t.length; r--;) {
              var n = t[r],
                  i = e[n];
              t[r] = [n, i, c0(i)]
          }
          return t
      }
      Dl.exports = f0
  });
  var Mi = f((Iq, ql) => {
      function d0(e, t) {
          return function(r) {
              return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r))
          }
      }
      ql.exports = d0
  });
  var Gl = f((Tq, Xl) => {
      var p0 = Nl(),
          g0 = Fl(),
          h0 = Mi();

      function E0(e) {
          var t = g0(e);
          return t.length == 1 && t[0][2] ? h0(t[0][0], t[0][1]) : function(r) {
              return r === e || p0(r, e, t)
          }
      }
      Xl.exports = E0
  });
  var ar = f((bq, Vl) => {
      var y0 = rt(),
          m0 = $e(),
          v0 = "[object Symbol]";

      function _0(e) {
          return typeof e == "symbol" || m0(e) && y0(e) == v0
      }
      Vl.exports = _0
  });
  var Qr = f((Aq, Ul) => {
      var I0 = ye(),
          T0 = ar(),
          b0 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
          A0 = /^\w*$/;

      function S0(e, t) {
          if (I0(e)) return !1;
          var r = typeof e;
          return r == "number" || r == "symbol" || r == "boolean" || e == null || T0(e) ? !0 : A0.test(e) || !b0.test(e) || t != null && e in Object(t)
      }
      Ul.exports = S0
  });
  var Hl = f((Sq, kl) => {
      var Bl = Vr(),
          O0 = "Expected a function";

      function Di(e, t) {
          if (typeof e != "function" || t != null && typeof t != "function") throw new TypeError(O0);
          var r = function() {
              var n = arguments,
                  i = t ? t.apply(this, n) : n[0],
                  o = r.cache;
              if (o.has(i)) return o.get(i);
              var a = e.apply(this, n);
              return r.cache = o.set(i, a) || o, a
          };
          return r.cache = new(Di.Cache || Bl), r
      }
      Di.Cache = Bl;
      kl.exports = Di
  });
  var zl = f((Oq, Wl) => {
      var w0 = Hl(),
          x0 = 500;

      function R0(e) {
          var t = w0(e, function(n) {
                  return r.size === x0 && r.clear(), n
              }),
              r = t.cache;
          return t
      }
      Wl.exports = R0
  });
  var jl = f((wq, Kl) => {
      var C0 = zl(),
          L0 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
          P0 = /\\(\\)?/g,
          N0 = C0(function(e) {
              var t = [];
              return e.charCodeAt(0) === 46 && t.push(""), e.replace(L0, function(r, n, i, o) {
                  t.push(i ? o.replace(P0, "$1") : n || r)
              }), t
          });
      Kl.exports = N0
  });
  var Fi = f((xq, $l) => {
      function M0(e, t) {
          for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n;) i[r] = t(e[r], r, e);
          return i
      }
      $l.exports = M0
  });
  var tf = f((Rq, ef) => {
      var Yl = mt(),
          D0 = Fi(),
          F0 = ye(),
          q0 = ar(),
          X0 = 1 / 0,
          Ql = Yl ? Yl.prototype : void 0,
          Zl = Ql ? Ql.toString : void 0;

      function Jl(e) {
          if (typeof e == "string") return e;
          if (F0(e)) return D0(e, Jl) + "";
          if (q0(e)) return Zl ? Zl.call(e) : "";
          var t = e + "";
          return t == "0" && 1 / e == -X0 ? "-0" : t
      }
      ef.exports = Jl
  });
  var nf = f((Cq, rf) => {
      var G0 = tf();

      function V0(e) {
          return e == null ? "" : G0(e)
      }
      rf.exports = V0
  });
  var sr = f((Lq, of) => {
      var U0 = ye(),
          B0 = Qr(),
          k0 = jl(),
          H0 = nf();

      function W0(e, t) {
          return U0(e) ? e : B0(e, t) ? [e] : k0(H0(e))
      }
      of.exports = W0
  });
  var Rt = f((Pq, af) => {
      var z0 = ar(),
          K0 = 1 / 0;

      function j0(e) {
          if (typeof e == "string" || z0(e)) return e;
          var t = e + "";
          return t == "0" && 1 / e == -K0 ? "-0" : t
      }
      af.exports = j0
  });
  var Zr = f((Nq, sf) => {
      var $0 = sr(),
          Y0 = Rt();

      function Q0(e, t) {
          t = $0(t, e);
          for (var r = 0, n = t.length; e != null && r < n;) e = e[Y0(t[r++])];
          return r && r == n ? e : void 0
      }
      sf.exports = Q0
  });
  var Jr = f((Mq, uf) => {
      var Z0 = Zr();

      function J0(e, t, r) {
          var n = e == null ? void 0 : Z0(e, t);
          return n === void 0 ? r : n
      }
      uf.exports = J0
  });
  var lf = f((Dq, cf) => {
      function eS(e, t) {
          return e != null && t in Object(e)
      }
      cf.exports = eS
  });
  var df = f((Fq, ff) => {
      var tS = sr(),
          rS = tr(),
          nS = ye(),
          iS = Hr(),
          oS = Wr(),
          aS = Rt();

      function sS(e, t, r) {
          t = tS(t, e);
          for (var n = -1, i = t.length, o = !1; ++n < i;) {
              var a = aS(t[n]);
              if (!(o = e != null && r(e, a))) break;
              e = e[a]
          }
          return o || ++n != i ? o : (i = e == null ? 0 : e.length, !!i && oS(i) && iS(a, i) && (nS(e) || rS(e)))
      }
      ff.exports = sS
  });
  var gf = f((qq, pf) => {
      var uS = lf(),
          cS = df();

      function lS(e, t) {
          return e != null && cS(e, t, uS)
      }
      pf.exports = lS
  });
  var Ef = f((Xq, hf) => {
      var fS = Pi(),
          dS = Jr(),
          pS = gf(),
          gS = Qr(),
          hS = Ni(),
          ES = Mi(),
          yS = Rt(),
          mS = 1,
          vS = 2;

      function _S(e, t) {
          return gS(e) && hS(t) ? ES(yS(e), t) : function(r) {
              var n = dS(r, e);
              return n === void 0 && n === t ? pS(r, e) : fS(t, n, mS | vS)
          }
      }
      hf.exports = _S
  });
  var en = f((Gq, yf) => {
      function IS(e) {
          return e
      }
      yf.exports = IS
  });
  var qi = f((Vq, mf) => {
      function TS(e) {
          return function(t) {
              return t?.[e]
          }
      }
      mf.exports = TS
  });
  var _f = f((Uq, vf) => {
      var bS = Zr();

      function AS(e) {
          return function(t) {
              return bS(t, e)
          }
      }
      vf.exports = AS
  });
  var Tf = f((Bq, If) => {
      var SS = qi(),
          OS = _f(),
          wS = Qr(),
          xS = Rt();

      function RS(e) {
          return wS(e) ? SS(xS(e)) : OS(e)
      }
      If.exports = RS
  });
  var it = f((kq, bf) => {
      var CS = Gl(),
          LS = Ef(),
          PS = en(),
          NS = ye(),
          MS = Tf();

      function DS(e) {
          return typeof e == "function" ? e : e == null ? PS : typeof e == "object" ? NS(e) ? LS(e[0], e[1]) : CS(e) : MS(e)
      }
      bf.exports = DS
  });
  var Xi = f((Hq, Af) => {
      var FS = it(),
          qS = ut(),
          XS = or();

      function GS(e) {
          return function(t, r, n) {
              var i = Object(t);
              if (!qS(t)) {
                  var o = FS(r, 3);
                  t = XS(t), r = function(s) {
                      return o(i[s], s, i)
                  }
              }
              var a = e(t, r, n);
              return a > -1 ? i[o ? t[a] : a] : void 0
          }
      }
      Af.exports = GS
  });
  var Gi = f((Wq, Sf) => {
      function VS(e, t, r, n) {
          for (var i = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < i;)
              if (t(e[o], o, e)) return o;
          return -1
      }
      Sf.exports = VS
  });
  var wf = f((zq, Of) => {
      var US = /\s/;

      function BS(e) {
          for (var t = e.length; t-- && US.test(e.charAt(t)););
          return t
      }
      Of.exports = BS
  });
  var Rf = f((Kq, xf) => {
      var kS = wf(),
          HS = /^\s+/;

      function WS(e) {
          return e && e.slice(0, kS(e) + 1).replace(HS, "")
      }
      xf.exports = WS
  });
  var tn = f((jq, Pf) => {
      var zS = Rf(),
          Cf = We(),
          KS = ar(),
          Lf = 0 / 0,
          jS = /^[-+]0x[0-9a-f]+$/i,
          $S = /^0b[01]+$/i,
          YS = /^0o[0-7]+$/i,
          QS = parseInt;

      function ZS(e) {
          if (typeof e == "number") return e;
          if (KS(e)) return Lf;
          if (Cf(e)) {
              var t = typeof e.valueOf == "function" ? e.valueOf() : e;
              e = Cf(t) ? t + "" : t
          }
          if (typeof e != "string") return e === 0 ? e : +e;
          e = zS(e);
          var r = $S.test(e);
          return r || YS.test(e) ? QS(e.slice(2), r ? 2 : 8) : jS.test(e) ? Lf : +e
      }
      Pf.exports = ZS
  });
  var Df = f(($q, Mf) => {
      var JS = tn(),
          Nf = 1 / 0,
          eO = 17976931348623157e292;

      function tO(e) {
          if (!e) return e === 0 ? e : 0;
          if (e = JS(e), e === Nf || e === -Nf) {
              var t = e < 0 ? -1 : 1;
              return t * eO
          }
          return e === e ? e : 0
      }
      Mf.exports = tO
  });
  var Vi = f((Yq, Ff) => {
      var rO = Df();

      function nO(e) {
          var t = rO(e),
              r = t % 1;
          return t === t ? r ? t - r : t : 0
      }
      Ff.exports = nO
  });
  var Xf = f((Qq, qf) => {
      var iO = Gi(),
          oO = it(),
          aO = Vi(),
          sO = Math.max;

      function uO(e, t, r) {
          var n = e == null ? 0 : e.length;
          if (!n) return -1;
          var i = r == null ? 0 : aO(r);
          return i < 0 && (i = sO(n + i, 0)), iO(e, oO(t, 3), i)
      }
      qf.exports = uO
  });
  var Ui = f((Zq, Gf) => {
      var cO = Xi(),
          lO = Xf(),
          fO = cO(lO);
      Gf.exports = fO
  });
  var Bf = {};
  Ae(Bf, {
      ELEMENT_MATCHES: () => dO,
      FLEX_PREFIXED: () => Bi,
      IS_BROWSER_ENV: () => Fe,
      TRANSFORM_PREFIXED: () => ot,
      TRANSFORM_STYLE_PREFIXED: () => nn,
      withBrowser: () => rn
  });
  var Uf, Fe, rn, dO, Bi, ot, Vf, nn, on = ce(() => {
      "use strict";
      Uf = ie(Ui()), Fe = typeof window < "u", rn = (e, t) => Fe ? e() : t, dO = rn(() => (0, Uf.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], e => e in Element.prototype)), Bi = rn(() => {
          let e = document.createElement("i"),
              t = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"],
              r = "";
          try {
              let {
                  length: n
              } = t;
              for (let i = 0; i < n; i++) {
                  let o = t[i];
                  if (e.style.display = o, e.style.display === o) return o
              }
              return r
          } catch {
              return r
          }
      }, "flex"), ot = rn(() => {
          let e = document.createElement("i");
          if (e.style.transform == null) {
              let t = ["Webkit", "Moz", "ms"],
                  r = "Transform",
                  {
                      length: n
                  } = t;
              for (let i = 0; i < n; i++) {
                  let o = t[i] + r;
                  if (e.style[o] !== void 0) return o
              }
          }
          return "transform"
      }, "transform"), Vf = ot.split("transform")[0], nn = Vf ? Vf + "TransformStyle" : "transformStyle"
  });
  var ki = f((Jq, Kf) => {
      var pO = 4,
          gO = .001,
          hO = 1e-7,
          EO = 10,
          ur = 11,
          an = 1 / (ur - 1),
          yO = typeof Float32Array == "function";

      function kf(e, t) {
          return 1 - 3 * t + 3 * e
      }

      function Hf(e, t) {
          return 3 * t - 6 * e
      }

      function Wf(e) {
          return 3 * e
      }

      function sn(e, t, r) {
          return ((kf(t, r) * e + Hf(t, r)) * e + Wf(t)) * e
      }

      function zf(e, t, r) {
          return 3 * kf(t, r) * e * e + 2 * Hf(t, r) * e + Wf(t)
      }

      function mO(e, t, r, n, i) {
          var o, a, s = 0;
          do a = t + (r - t) / 2, o = sn(a, n, i) - e, o > 0 ? r = a : t = a; while (Math.abs(o) > hO && ++s < EO);
          return a
      }

      function vO(e, t, r, n) {
          for (var i = 0; i < pO; ++i) {
              var o = zf(t, r, n);
              if (o === 0) return t;
              var a = sn(t, r, n) - e;
              t -= a / o
          }
          return t
      }
      Kf.exports = function(t, r, n, i) {
          if (!(0 <= t && t <= 1 && 0 <= n && n <= 1)) throw new Error("bezier x values must be in [0, 1] range");
          var o = yO ? new Float32Array(ur) : new Array(ur);
          if (t !== r || n !== i)
              for (var a = 0; a < ur; ++a) o[a] = sn(a * an, t, n);

          function s(u) {
              for (var l = 0, g = 1, p = ur - 1; g !== p && o[g] <= u; ++g) l += an;
              --g;
              var d = (u - o[g]) / (o[g + 1] - o[g]),
                  E = l + d * an,
                  I = zf(E, t, n);
              return I >= gO ? vO(u, E, t, n) : I === 0 ? E : mO(u, l, l + an, t, n)
          }
          return function(l) {
              return t === r && n === i ? l : l === 0 ? 0 : l === 1 ? 1 : sn(s(l), r, i)
          }
      }
  });
  var lr = {};
  Ae(lr, {
      bounce: () => tw,
      bouncePast: () => rw,
      ease: () => _O,
      easeIn: () => IO,
      easeInOut: () => bO,
      easeOut: () => TO,
      inBack: () => zO,
      inCirc: () => BO,
      inCubic: () => wO,
      inElastic: () => $O,
      inExpo: () => GO,
      inOutBack: () => jO,
      inOutCirc: () => HO,
      inOutCubic: () => RO,
      inOutElastic: () => QO,
      inOutExpo: () => UO,
      inOutQuad: () => OO,
      inOutQuart: () => PO,
      inOutQuint: () => DO,
      inOutSine: () => XO,
      inQuad: () => AO,
      inQuart: () => CO,
      inQuint: () => NO,
      inSine: () => FO,
      outBack: () => KO,
      outBounce: () => WO,
      outCirc: () => kO,
      outCubic: () => xO,
      outElastic: () => YO,
      outExpo: () => VO,
      outQuad: () => SO,
      outQuart: () => LO,
      outQuint: () => MO,
      outSine: () => qO,
      swingFrom: () => JO,
      swingFromTo: () => ZO,
      swingTo: () => ew
  });

  function AO(e) {
      return Math.pow(e, 2)
  }

  function SO(e) {
      return -(Math.pow(e - 1, 2) - 1)
  }

  function OO(e) {
      return (e /= .5) < 1 ? .5 * Math.pow(e, 2) : -.5 * ((e -= 2) * e - 2)
  }

  function wO(e) {
      return Math.pow(e, 3)
  }

  function xO(e) {
      return Math.pow(e - 1, 3) + 1
  }

  function RO(e) {
      return (e /= .5) < 1 ? .5 * Math.pow(e, 3) : .5 * (Math.pow(e - 2, 3) + 2)
  }

  function CO(e) {
      return Math.pow(e, 4)
  }

  function LO(e) {
      return -(Math.pow(e - 1, 4) - 1)
  }

  function PO(e) {
      return (e /= .5) < 1 ? .5 * Math.pow(e, 4) : -.5 * ((e -= 2) * Math.pow(e, 3) - 2)
  }

  function NO(e) {
      return Math.pow(e, 5)
  }

  function MO(e) {
      return Math.pow(e - 1, 5) + 1
  }

  function DO(e) {
      return (e /= .5) < 1 ? .5 * Math.pow(e, 5) : .5 * (Math.pow(e - 2, 5) + 2)
  }

  function FO(e) {
      return -Math.cos(e * (Math.PI / 2)) + 1
  }

  function qO(e) {
      return Math.sin(e * (Math.PI / 2))
  }

  function XO(e) {
      return -.5 * (Math.cos(Math.PI * e) - 1)
  }

  function GO(e) {
      return e === 0 ? 0 : Math.pow(2, 10 * (e - 1))
  }

  function VO(e) {
      return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1
  }

  function UO(e) {
      return e === 0 ? 0 : e === 1 ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (-Math.pow(2, -10 * --e) + 2)
  }

  function BO(e) {
      return -(Math.sqrt(1 - e * e) - 1)
  }

  function kO(e) {
      return Math.sqrt(1 - Math.pow(e - 1, 2))
  }

  function HO(e) {
      return (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
  }

  function WO(e) {
      return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
  }

  function zO(e) {
      let t = Ye;
      return e * e * ((t + 1) * e - t)
  }

  function KO(e) {
      let t = Ye;
      return (e -= 1) * e * ((t + 1) * e + t) + 1
  }

  function jO(e) {
      let t = Ye;
      return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
  }

  function $O(e) {
      let t = Ye,
          r = 0,
          n = 1;
      return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), -(n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)))
  }

  function YO(e) {
      let t = Ye,
          r = 0,
          n = 1;
      return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), n * Math.pow(2, -10 * e) * Math.sin((e - t) * (2 * Math.PI) / r) + 1)
  }

  function QO(e) {
      let t = Ye,
          r = 0,
          n = 1;
      return e === 0 ? 0 : (e /= 1 / 2) === 2 ? 1 : (r || (r = .3 * 1.5), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), e < 1 ? -.5 * (n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)) : n * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r) * .5 + 1)
  }

  function ZO(e) {
      let t = Ye;
      return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
  }

  function JO(e) {
      let t = Ye;
      return e * e * ((t + 1) * e - t)
  }

  function ew(e) {
      let t = Ye;
      return (e -= 1) * e * ((t + 1) * e + t) + 1
  }

  function tw(e) {
      return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
  }

  function rw(e) {
      return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : e < 2.5 / 2.75 ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
  }
  var cr, Ye, _O, IO, TO, bO, Hi = ce(() => {
      "use strict";
      cr = ie(ki()), Ye = 1.70158, _O = (0, cr.default)(.25, .1, .25, 1), IO = (0, cr.default)(.42, 0, 1, 1), TO = (0, cr.default)(0, 0, .58, 1), bO = (0, cr.default)(.42, 0, .58, 1)
  });
  var $f = {};
  Ae($f, {
      applyEasing: () => iw,
      createBezierEasing: () => nw,
      optimizeFloat: () => fr
  });

  function fr(e, t = 5, r = 10) {
      let n = Math.pow(r, t),
          i = Number(Math.round(e * n) / n);
      return Math.abs(i) > 1e-4 ? i : 0
  }

  function nw(e) {
      return (0, jf.default)(...e)
  }

  function iw(e, t, r) {
      return t === 0 ? 0 : t === 1 ? 1 : fr(r ? t > 0 ? r(t) : t : t > 0 && e && lr[e] ? lr[e](t) : t)
  }
  var jf, Wi = ce(() => {
      "use strict";
      Hi();
      jf = ie(ki())
  });
  var Zf = {};
  Ae(Zf, {
      createElementState: () => Qf,
      ixElements: () => mw,
      mergeActionState: () => zi
  });

  function Qf(e, t, r, n, i) {
      let o = r === ow ? (0, Ct.getIn)(i, ["config", "target", "objectId"]) : null;
      return (0, Ct.mergeIn)(e, [n], {
          id: n,
          ref: t,
          refId: o,
          refType: r
      })
  }

  function zi(e, t, r, n, i) {
      let o = _w(i);
      return (0, Ct.mergeIn)(e, [t, yw, r], n, o)
  }

  function _w(e) {
      let {
          config: t
      } = e;
      return vw.reduce((r, n) => {
          let i = n[0],
              o = n[1],
              a = t[i],
              s = t[o];
          return a != null && s != null && (r[o] = s), r
      }, {})
  }
  var Ct, t1, ow, r1, aw, sw, uw, cw, lw, fw, dw, pw, gw, hw, Ew, Yf, yw, mw, vw, Jf = ce(() => {
      "use strict";
      Ct = ie(It());
      Oe();
      ({
          HTML_ELEMENT: t1,
          PLAIN_OBJECT: ow,
          ABSTRACT_NODE: r1,
          CONFIG_X_VALUE: aw,
          CONFIG_Y_VALUE: sw,
          CONFIG_Z_VALUE: uw,
          CONFIG_VALUE: cw,
          CONFIG_X_UNIT: lw,
          CONFIG_Y_UNIT: fw,
          CONFIG_Z_UNIT: dw,
          CONFIG_UNIT: pw
      } = me), {
          IX2_SESSION_STOPPED: gw,
          IX2_INSTANCE_ADDED: hw,
          IX2_ELEMENT_STATE_CHANGED: Ew
      } = Ee, Yf = {}, yw = "refState", mw = (e = Yf, t = {}) => {
          switch (t.type) {
              case gw:
                  return Yf;
              case hw: {
                  let {
                      elementId: r,
                      element: n,
                      origin: i,
                      actionItem: o,
                      refType: a
                  } = t.payload, {
                      actionTypeId: s
                  } = o, u = e;
                  return (0, Ct.getIn)(u, [r, n]) !== n && (u = Qf(u, n, a, r, o)), zi(u, r, s, i, o)
              }
              case Ew: {
                  let {
                      elementId: r,
                      actionTypeId: n,
                      current: i,
                      actionItem: o
                  } = t.payload;
                  return zi(e, r, n, i, o)
              }
              default:
                  return e
          }
      };
      vw = [
          [aw, lw],
          [sw, fw],
          [uw, dw],
          [cw, pw]
      ]
  });
  var ed = f(Ki => {
      "use strict";
      Object.defineProperty(Ki, "__esModule", {
          value: !0
      });

      function Iw(e, t) {
          for (var r in t) Object.defineProperty(e, r, {
              enumerable: !0,
              get: t[r]
          })
      }
      Iw(Ki, {
          clearPlugin: function() {
              return xw
          },
          createPluginInstance: function() {
              return Ow
          },
          getPluginConfig: function() {
              return Tw
          },
          getPluginDestination: function() {
              return Sw
          },
          getPluginDuration: function() {
              return bw
          },
          getPluginOrigin: function() {
              return Aw
          },
          renderPlugin: function() {
              return ww
          }
      });
      var Tw = e => e.value,
          bw = (e, t) => {
              if (t.config.duration !== "auto") return null;
              let r = parseFloat(e.getAttribute("data-duration"));
              return r > 0 ? r * 1e3 : parseFloat(e.getAttribute("data-default-duration")) * 1e3
          },
          Aw = e => e || {
              value: 0
          },
          Sw = e => ({
              value: e.value
          }),
          Ow = e => {
              let t = window.Webflow.require("lottie").createInstance(e);
              return t.stop(), t.setSubframe(!0), t
          },
          ww = (e, t, r) => {
              if (!e) return;
              let n = t[r.actionTypeId].value / 100;
              e.goToFrame(e.frames * n)
          },
          xw = e => {
              window.Webflow.require("lottie").createInstance(e).stop()
          }
  });
  var rd = f(ji => {
      "use strict";
      Object.defineProperty(ji, "__esModule", {
          value: !0
      });

      function Rw(e, t) {
          for (var r in t) Object.defineProperty(e, r, {
              enumerable: !0,
              get: t[r]
          })
      }
      Rw(ji, {
          clearPlugin: function() {
              return Gw
          },
          createPluginInstance: function() {
              return qw
          },
          getPluginConfig: function() {
              return Nw
          },
          getPluginDestination: function() {
              return Fw
          },
          getPluginDuration: function() {
              return Mw
          },
          getPluginOrigin: function() {
              return Dw
          },
          renderPlugin: function() {
              return Xw
          }
      });
      var Cw = e => document.querySelector(`[data-w-id="${e}"]`),
          Lw = () => window.Webflow.require("spline"),
          Pw = (e, t) => e.filter(r => !t.includes(r)),
          Nw = (e, t) => e.value[t],
          Mw = () => null,
          td = Object.freeze({
              positionX: 0,
              positionY: 0,
              positionZ: 0,
              rotationX: 0,
              rotationY: 0,
              rotationZ: 0,
              scaleX: 1,
              scaleY: 1,
              scaleZ: 1
          }),
          Dw = (e, t) => {
              let r = t.config.value,
                  n = Object.keys(r);
              if (e) {
                  let o = Object.keys(e),
                      a = Pw(n, o);
                  return a.length ? a.reduce((u, l) => (u[l] = td[l], u), e) : e
              }
              return n.reduce((o, a) => (o[a] = td[a], o), {})
          },
          Fw = e => e.value,
          qw = (e, t) => {
              let r = t?.config?.target?.pluginElement;
              return r ? Cw(r) : null
          },
          Xw = (e, t, r) => {
              let n = Lw(),
                  i = n.getInstance(e),
                  o = r.config.target.objectId,
                  a = s => {
                      if (!s) throw new Error("Invalid spline app passed to renderSpline");
                      let u = o && s.findObjectById(o);
                      if (!u) return;
                      let {
                          PLUGIN_SPLINE: l
                      } = t;
                      l.positionX != null && (u.position.x = l.positionX), l.positionY != null && (u.position.y = l.positionY), l.positionZ != null && (u.position.z = l.positionZ), l.rotationX != null && (u.rotation.x = l.rotationX), l.rotationY != null && (u.rotation.y = l.rotationY), l.rotationZ != null && (u.rotation.z = l.rotationZ), l.scaleX != null && (u.scale.x = l.scaleX), l.scaleY != null && (u.scale.y = l.scaleY), l.scaleZ != null && (u.scale.z = l.scaleZ)
                  };
              i ? a(i.spline) : n.setLoadHandler(e, a)
          },
          Gw = () => null
  });
  var Yi = f($i => {
      "use strict";
      Object.defineProperty($i, "__esModule", {
          value: !0
      });
      Object.defineProperty($i, "normalizeColor", {
          enumerable: !0,
          get: function() {
              return Vw
          }
      });
      var nd = {
          aliceblue: "#F0F8FF",
          antiquewhite: "#FAEBD7",
          aqua: "#00FFFF",
          aquamarine: "#7FFFD4",
          azure: "#F0FFFF",
          beige: "#F5F5DC",
          bisque: "#FFE4C4",
          black: "#000000",
          blanchedalmond: "#FFEBCD",
          blue: "#0000FF",
          blueviolet: "#8A2BE2",
          brown: "#A52A2A",
          burlywood: "#DEB887",
          cadetblue: "#5F9EA0",
          chartreuse: "#7FFF00",
          chocolate: "#D2691E",
          coral: "#FF7F50",
          cornflowerblue: "#6495ED",
          cornsilk: "#FFF8DC",
          crimson: "#DC143C",
          cyan: "#00FFFF",
          darkblue: "#00008B",
          darkcyan: "#008B8B",
          darkgoldenrod: "#B8860B",
          darkgray: "#A9A9A9",
          darkgreen: "#006400",
          darkgrey: "#A9A9A9",
          darkkhaki: "#BDB76B",
          darkmagenta: "#8B008B",
          darkolivegreen: "#556B2F",
          darkorange: "#FF8C00",
          darkorchid: "#9932CC",
          darkred: "#8B0000",
          darksalmon: "#E9967A",
          darkseagreen: "#8FBC8F",
          darkslateblue: "#483D8B",
          darkslategray: "#2F4F4F",
          darkslategrey: "#2F4F4F",
          darkturquoise: "#00CED1",
          darkviolet: "#9400D3",
          deeppink: "#FF1493",
          deepskyblue: "#00BFFF",
          dimgray: "#696969",
          dimgrey: "#696969",
          dodgerblue: "#1E90FF",
          firebrick: "#B22222",
          floralwhite: "#FFFAF0",
          forestgreen: "#228B22",
          fuchsia: "#FF00FF",
          gainsboro: "#DCDCDC",
          ghostwhite: "#F8F8FF",
          gold: "#FFD700",
          goldenrod: "#DAA520",
          gray: "#808080",
          green: "#008000",
          greenyellow: "#ADFF2F",
          grey: "#808080",
          honeydew: "#F0FFF0",
          hotpink: "#FF69B4",
          indianred: "#CD5C5C",
          indigo: "#4B0082",
          ivory: "#FFFFF0",
          khaki: "#F0E68C",
          lavender: "#E6E6FA",
          lavenderblush: "#FFF0F5",
          lawngreen: "#7CFC00",
          lemonchiffon: "#FFFACD",
          lightblue: "#ADD8E6",
          lightcoral: "#F08080",
          lightcyan: "#E0FFFF",
          lightgoldenrodyellow: "#FAFAD2",
          lightgray: "#D3D3D3",
          lightgreen: "#90EE90",
          lightgrey: "#D3D3D3",
          lightpink: "#FFB6C1",
          lightsalmon: "#FFA07A",
          lightseagreen: "#20B2AA",
          lightskyblue: "#87CEFA",
          lightslategray: "#778899",
          lightslategrey: "#778899",
          lightsteelblue: "#B0C4DE",
          lightyellow: "#FFFFE0",
          lime: "#00FF00",
          limegreen: "#32CD32",
          linen: "#FAF0E6",
          magenta: "#FF00FF",
          maroon: "#800000",
          mediumaquamarine: "#66CDAA",
          mediumblue: "#0000CD",
          mediumorchid: "#BA55D3",
          mediumpurple: "#9370DB",
          mediumseagreen: "#3CB371",
          mediumslateblue: "#7B68EE",
          mediumspringgreen: "#00FA9A",
          mediumturquoise: "#48D1CC",
          mediumvioletred: "#C71585",
          midnightblue: "#191970",
          mintcream: "#F5FFFA",
          mistyrose: "#FFE4E1",
          moccasin: "#FFE4B5",
          navajowhite: "#FFDEAD",
          navy: "#000080",
          oldlace: "#FDF5E6",
          olive: "#808000",
          olivedrab: "#6B8E23",
          orange: "#FFA500",
          orangered: "#FF4500",
          orchid: "#DA70D6",
          palegoldenrod: "#EEE8AA",
          palegreen: "#98FB98",
          paleturquoise: "#AFEEEE",
          palevioletred: "#DB7093",
          papayawhip: "#FFEFD5",
          peachpuff: "#FFDAB9",
          peru: "#CD853F",
          pink: "#FFC0CB",
          plum: "#DDA0DD",
          powderblue: "#B0E0E6",
          purple: "#800080",
          rebeccapurple: "#663399",
          red: "#FF0000",
          rosybrown: "#BC8F8F",
          royalblue: "#4169E1",
          saddlebrown: "#8B4513",
          salmon: "#FA8072",
          sandybrown: "#F4A460",
          seagreen: "#2E8B57",
          seashell: "#FFF5EE",
          sienna: "#A0522D",
          silver: "#C0C0C0",
          skyblue: "#87CEEB",
          slateblue: "#6A5ACD",
          slategray: "#708090",
          slategrey: "#708090",
          snow: "#FFFAFA",
          springgreen: "#00FF7F",
          steelblue: "#4682B4",
          tan: "#D2B48C",
          teal: "#008080",
          thistle: "#D8BFD8",
          tomato: "#FF6347",
          turquoise: "#40E0D0",
          violet: "#EE82EE",
          wheat: "#F5DEB3",
          white: "#FFFFFF",
          whitesmoke: "#F5F5F5",
          yellow: "#FFFF00",
          yellowgreen: "#9ACD32"
      };

      function Vw(e) {
          let t, r, n, i = 1,
              o = e.replace(/\s/g, "").toLowerCase(),
              s = (typeof nd[o] == "string" ? nd[o].toLowerCase() : null) || o;
          if (s.startsWith("#")) {
              let u = s.substring(1);
              u.length === 3 || u.length === 4 ? (t = parseInt(u[0] + u[0], 16), r = parseInt(u[1] + u[1], 16), n = parseInt(u[2] + u[2], 16), u.length === 4 && (i = parseInt(u[3] + u[3], 16) / 255)) : (u.length === 6 || u.length === 8) && (t = parseInt(u.substring(0, 2), 16), r = parseInt(u.substring(2, 4), 16), n = parseInt(u.substring(4, 6), 16), u.length === 8 && (i = parseInt(u.substring(6, 8), 16) / 255))
          } else if (s.startsWith("rgba")) {
              let u = s.match(/rgba\(([^)]+)\)/)[1].split(",");
              t = parseInt(u[0], 10), r = parseInt(u[1], 10), n = parseInt(u[2], 10), i = parseFloat(u[3])
          } else if (s.startsWith("rgb")) {
              let u = s.match(/rgb\(([^)]+)\)/)[1].split(",");
              t = parseInt(u[0], 10), r = parseInt(u[1], 10), n = parseInt(u[2], 10)
          } else if (s.startsWith("hsla")) {
              let u = s.match(/hsla\(([^)]+)\)/)[1].split(","),
                  l = parseFloat(u[0]),
                  g = parseFloat(u[1].replace("%", "")) / 100,
                  p = parseFloat(u[2].replace("%", "")) / 100;
              i = parseFloat(u[3]);
              let d = (1 - Math.abs(2 * p - 1)) * g,
                  E = d * (1 - Math.abs(l / 60 % 2 - 1)),
                  I = p - d / 2,
                  v, S, y;
              l >= 0 && l < 60 ? (v = d, S = E, y = 0) : l >= 60 && l < 120 ? (v = E, S = d, y = 0) : l >= 120 && l < 180 ? (v = 0, S = d, y = E) : l >= 180 && l < 240 ? (v = 0, S = E, y = d) : l >= 240 && l < 300 ? (v = E, S = 0, y = d) : (v = d, S = 0, y = E), t = Math.round((v + I) * 255), r = Math.round((S + I) * 255), n = Math.round((y + I) * 255)
          } else if (s.startsWith("hsl")) {
              let u = s.match(/hsl\(([^)]+)\)/)[1].split(","),
                  l = parseFloat(u[0]),
                  g = parseFloat(u[1].replace("%", "")) / 100,
                  p = parseFloat(u[2].replace("%", "")) / 100,
                  d = (1 - Math.abs(2 * p - 1)) * g,
                  E = d * (1 - Math.abs(l / 60 % 2 - 1)),
                  I = p - d / 2,
                  v, S, y;
              l >= 0 && l < 60 ? (v = d, S = E, y = 0) : l >= 60 && l < 120 ? (v = E, S = d, y = 0) : l >= 120 && l < 180 ? (v = 0, S = d, y = E) : l >= 180 && l < 240 ? (v = 0, S = E, y = d) : l >= 240 && l < 300 ? (v = E, S = 0, y = d) : (v = d, S = 0, y = E), t = Math.round((v + I) * 255), r = Math.round((S + I) * 255), n = Math.round((y + I) * 255)
          }
          if (Number.isNaN(t) || Number.isNaN(r) || Number.isNaN(n)) throw new Error(`Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`);
          return {
              red: t,
              green: r,
              blue: n,
              alpha: i
          }
      }
  });
  var id = f(Qi => {
      "use strict";
      Object.defineProperty(Qi, "__esModule", {
          value: !0
      });

      function Uw(e, t) {
          for (var r in t) Object.defineProperty(e, r, {
              enumerable: !0,
              get: t[r]
          })
      }
      Uw(Qi, {
          clearPlugin: function() {
              return $w
          },
          createPluginInstance: function() {
              return Kw
          },
          getPluginConfig: function() {
              return kw
          },
          getPluginDestination: function() {
              return zw
          },
          getPluginDuration: function() {
              return Hw
          },
          getPluginOrigin: function() {
              return Ww
          },
          renderPlugin: function() {
              return jw
          }
      });
      var Bw = Yi(),
          kw = (e, t) => e.value[t],
          Hw = () => null,
          Ww = (e, t) => {
              if (e) return e;
              let r = t.config.value,
                  n = t.config.target.objectId,
                  i = getComputedStyle(document.documentElement).getPropertyValue(n);
              if (r.size != null) return {
                  size: parseInt(i, 10)
              };
              if (r.red != null && r.green != null && r.blue != null) return (0, Bw.normalizeColor)(i)
          },
          zw = e => e.value,
          Kw = () => null,
          jw = (e, t, r) => {
              let n = r.config.target.objectId,
                  i = r.config.value.unit,
                  {
                      PLUGIN_VARIABLE: o
                  } = t,
                  {
                      size: a,
                      red: s,
                      green: u,
                      blue: l,
                      alpha: g
                  } = o,
                  p;
              a != null && (p = a + i), s != null && l != null && u != null && g != null && (p = `rgba(${s}, ${u}, ${l}, ${g})`), p != null && document.documentElement.style.setProperty(n, p)
          },
          $w = (e, t) => {
              let r = t.config.target.objectId;
              document.documentElement.style.removeProperty(r)
          }
  });
  var ad = f(eo => {
      "use strict";
      Object.defineProperty(eo, "__esModule", {
          value: !0
      });
      Object.defineProperty(eo, "pluginMethodMap", {
          enumerable: !0,
          get: function() {
              return Jw
          }
      });
      var Zi = (Oe(), Ve(ls)),
          Yw = Ji(ed()),
          Qw = Ji(rd()),
          Zw = Ji(id());

      function od(e) {
          if (typeof WeakMap != "function") return null;
          var t = new WeakMap,
              r = new WeakMap;
          return (od = function(n) {
              return n ? r : t
          })(e)
      }

      function Ji(e, t) {
          if (!t && e && e.__esModule) return e;
          if (e === null || typeof e != "object" && typeof e != "function") return {
              default: e
          };
          var r = od(t);
          if (r && r.has(e)) return r.get(e);
          var n = {
                  __proto__: null
              },
              i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
              if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
                  var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                  a && (a.get || a.set) ? Object.defineProperty(n, o, a) : n[o] = e[o]
              } return n.default = e, r && r.set(e, n), n
      }
      var Jw = new Map([
          [Zi.ActionTypeConsts.PLUGIN_LOTTIE, {
              ...Yw
          }],
          [Zi.ActionTypeConsts.PLUGIN_SPLINE, {
              ...Qw
          }],
          [Zi.ActionTypeConsts.PLUGIN_VARIABLE, {
              ...Zw
          }]
      ])
  });
  var sd = {};
  Ae(sd, {
      clearPlugin: () => ao,
      createPluginInstance: () => tx,
      getPluginConfig: () => ro,
      getPluginDestination: () => io,
      getPluginDuration: () => ex,
      getPluginOrigin: () => no,
      isPluginType: () => lt,
      renderPlugin: () => oo
  });

  function lt(e) {
      return to.pluginMethodMap.has(e)
  }
  var to, ft, ro, no, ex, io, tx, oo, ao, so = ce(() => {
      "use strict";
      on();
      to = ie(ad());
      ft = e => t => {
          if (!Fe) return () => null;
          let r = to.pluginMethodMap.get(t);
          if (!r) throw new Error(`IX2 no plugin configured for: ${t}`);
          let n = r[e];
          if (!n) throw new Error(`IX2 invalid plugin method: ${e}`);
          return n
      }, ro = ft("getPluginConfig"), no = ft("getPluginOrigin"), ex = ft("getPluginDuration"), io = ft("getPluginDestination"), tx = ft("createPluginInstance"), oo = ft("renderPlugin"), ao = ft("clearPlugin")
  });
  var cd = f((c1, ud) => {
      function rx(e, t) {
          return e == null || e !== e ? t : e
      }
      ud.exports = rx
  });
  var fd = f((l1, ld) => {
      function nx(e, t, r, n) {
          var i = -1,
              o = e == null ? 0 : e.length;
          for (n && o && (r = e[++i]); ++i < o;) r = t(r, e[i], i, e);
          return r
      }
      ld.exports = nx
  });
  var pd = f((f1, dd) => {
      function ix(e) {
          return function(t, r, n) {
              for (var i = -1, o = Object(t), a = n(t), s = a.length; s--;) {
                  var u = a[e ? s : ++i];
                  if (r(o[u], u, o) === !1) break
              }
              return t
          }
      }
      dd.exports = ix
  });
  var hd = f((d1, gd) => {
      var ox = pd(),
          ax = ox();
      gd.exports = ax
  });
  var uo = f((p1, Ed) => {
      var sx = hd(),
          ux = or();

      function cx(e, t) {
          return e && sx(e, t, ux)
      }
      Ed.exports = cx
  });
  var md = f((g1, yd) => {
      var lx = ut();

      function fx(e, t) {
          return function(r, n) {
              if (r == null) return r;
              if (!lx(r)) return e(r, n);
              for (var i = r.length, o = t ? i : -1, a = Object(r);
                  (t ? o-- : ++o < i) && n(a[o], o, a) !== !1;);
              return r
          }
      }
      yd.exports = fx
  });
  var co = f((h1, vd) => {
      var dx = uo(),
          px = md(),
          gx = px(dx);
      vd.exports = gx
  });
  var Id = f((E1, _d) => {
      function hx(e, t, r, n, i) {
          return i(e, function(o, a, s) {
              r = n ? (n = !1, o) : t(r, o, a, s)
          }), r
      }
      _d.exports = hx
  });
  var bd = f((y1, Td) => {
      var Ex = fd(),
          yx = co(),
          mx = it(),
          vx = Id(),
          _x = ye();

      function Ix(e, t, r) {
          var n = _x(e) ? Ex : vx,
              i = arguments.length < 3;
          return n(e, mx(t, 4), r, i, yx)
      }
      Td.exports = Ix
  });
  var Sd = f((m1, Ad) => {
      var Tx = Gi(),
          bx = it(),
          Ax = Vi(),
          Sx = Math.max,
          Ox = Math.min;

      function wx(e, t, r) {
          var n = e == null ? 0 : e.length;
          if (!n) return -1;
          var i = n - 1;
          return r !== void 0 && (i = Ax(r), i = r < 0 ? Sx(n + i, 0) : Ox(i, n - 1)), Tx(e, bx(t, 3), i, !0)
      }
      Ad.exports = wx
  });
  var wd = f((v1, Od) => {
      var xx = Xi(),
          Rx = Sd(),
          Cx = xx(Rx);
      Od.exports = Cx
  });

  function xd(e, t) {
      return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t
  }

  function Lx(e, t) {
      if (xd(e, t)) return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
      let r = Object.keys(e),
          n = Object.keys(t);
      if (r.length !== n.length) return !1;
      for (let i = 0; i < r.length; i++)
          if (!Object.hasOwn(t, r[i]) || !xd(e[r[i]], t[r[i]])) return !1;
      return !0
  }
  var lo, Rd = ce(() => {
      "use strict";
      lo = Lx
  });
  var Kd = {};
  Ae(Kd, {
      cleanupHTMLElement: () => xR,
      clearAllStyles: () => wR,
      clearObjectCache: () => jx,
      getActionListProgress: () => CR,
      getAffectedElements: () => Eo,
      getComputedStyle: () => rR,
      getDestinationValues: () => cR,
      getElementId: () => Zx,
      getInstanceId: () => Yx,
      getInstanceOrigin: () => oR,
      getItemConfigByKey: () => uR,
      getMaxDurationItemIndex: () => zd,
      getNamespacedParameterId: () => NR,
      getRenderType: () => kd,
      getStyleProp: () => lR,
      mediaQueriesEqual: () => DR,
      observeStore: () => tR,
      reduceListToGroup: () => LR,
      reifyState: () => Jx,
      renderHTMLElement: () => fR,
      shallowEqual: () => lo,
      shouldAllowMediaQuery: () => MR,
      shouldNamespaceEventParameter: () => PR,
      stringifyTarget: () => FR
  });

  function jx() {
      un.clear()
  }

  function Yx() {
      return "i" + $x++
  }

  function Zx(e, t) {
      for (let r in e) {
          let n = e[r];
          if (n && n.ref === t) return n.id
      }
      return "e" + Qx++
  }

  function Jx({
      events: e,
      actionLists: t,
      site: r
  } = {}) {
      let n = (0, dn.default)(e, (a, s) => {
              let {
                  eventTypeId: u
              } = s;
              return a[u] || (a[u] = {}), a[u][s.id] = s, a
          }, {}),
          i = r && r.mediaQueries,
          o = [];
      return i ? o = i.map(a => a.key) : (i = [], console.warn("IX2 missing mediaQueries in site data")), {
          ixData: {
              events: e,
              actionLists: t,
              eventTypeMap: n,
              mediaQueries: i,
              mediaQueryKeys: o
          }
      }
  }

  function tR({
      store: e,
      select: t,
      onChange: r,
      comparator: n = eR
  }) {
      let {
          getState: i,
          subscribe: o
      } = e, a = o(u), s = t(i());

      function u() {
          let l = t(i());
          if (l == null) {
              a();
              return
          }
          n(l, s) || (s = l, r(s, e))
      }
      return a
  }

  function Pd(e) {
      let t = typeof e;
      if (t === "string") return {
          id: e
      };
      if (e != null && t === "object") {
          let {
              id: r,
              objectId: n,
              selector: i,
              selectorGuids: o,
              appliesTo: a,
              useEventTarget: s
          } = e;
          return {
              id: r,
              objectId: n,
              selector: i,
              selectorGuids: o,
              appliesTo: a,
              useEventTarget: s
          }
      }
      return {}
  }

  function Eo({
      config: e,
      event: t,
      eventTarget: r,
      elementRoot: n,
      elementApi: i
  }) {
      if (!i) throw new Error("IX2 missing elementApi");
      let {
          targets: o
      } = e;
      if (Array.isArray(o) && o.length > 0) return o.reduce((N, T) => N.concat(Eo({
          config: {
              target: T
          },
          event: t,
          eventTarget: r,
          elementRoot: n,
          elementApi: i
      })), []);
      let {
          getValidDocument: a,
          getQuerySelector: s,
          queryDocument: u,
          getChildElements: l,
          getSiblingElements: g,
          matchSelector: p,
          elementContains: d,
          isSiblingNode: E
      } = i, {
          target: I
      } = e;
      if (!I) return [];
      let {
          id: v,
          objectId: S,
          selector: y,
          selectorGuids: w,
          appliesTo: O,
          useEventTarget: C
      } = Pd(I);
      if (S) return [un.has(S) ? un.get(S) : un.set(S, {}).get(S)];
      if (O === li.PAGE) {
          let N = a(v);
          return N ? [N] : []
      }
      let x = (t?.action?.config?.affectedElements ?? {})[v || y] || {},
          X = !!(x.id || x.selector),
          U, B, W, Q = t && s(Pd(t.target));
      if (X ? (U = x.limitAffectedElements, B = Q, W = s(x)) : B = W = s({
              id: v,
              selector: y,
              selectorGuids: w
          }), t && C) {
          let N = r && (W || C === !0) ? [r] : u(Q);
          if (W) {
              if (C === Wx) return u(W).filter(T => N.some(L => d(T, L)));
              if (C === Cd) return u(W).filter(T => N.some(L => d(L, T)));
              if (C === Ld) return u(W).filter(T => N.some(L => E(L, T)))
          }
          return N
      }
      return B == null || W == null ? [] : Fe && n ? u(W).filter(N => n.contains(N)) : U === Cd ? u(B, W) : U === Hx ? l(u(B)).filter(p(W)) : U === Ld ? g(u(B)).filter(p(W)) : u(W)
  }

  function rR({
      element: e,
      actionItem: t
  }) {
      if (!Fe) return {};
      let {
          actionTypeId: r
      } = t;
      switch (r) {
          case Dt:
          case Ft:
          case qt:
          case Xt:
          case gn:
              return window.getComputedStyle(e);
          default:
              return {}
      }
  }

  function oR(e, t = {}, r = {}, n, i) {
      let {
          getStyle: o
      } = i, {
          actionTypeId: a
      } = n;
      if (lt(a)) return no(a)(t[a], n);
      switch (n.actionTypeId) {
          case Pt:
          case Nt:
          case Mt:
          case hr:
              return t[n.actionTypeId] || yo[n.actionTypeId];
          case Er:
              return nR(t[n.actionTypeId], n.config.filters);
          case yr:
              return iR(t[n.actionTypeId], n.config.fontVariations);
          case Vd:
              return {
                  value: (0, Qe.default)(parseFloat(o(e, ln)), 1)
              };
          case Dt: {
              let s = o(e, ze),
                  u = o(e, Ke),
                  l, g;
              return n.config.widthUnit === at ? l = Nd.test(s) ? parseFloat(s) : parseFloat(r.width) : l = (0, Qe.default)(parseFloat(s), parseFloat(r.width)), n.config.heightUnit === at ? g = Nd.test(u) ? parseFloat(u) : parseFloat(r.height) : g = (0, Qe.default)(parseFloat(u), parseFloat(r.height)), {
                  widthValue: l,
                  heightValue: g
              }
          }
          case Ft:
          case qt:
          case Xt:
              return AR({
                  element: e,
                  actionTypeId: n.actionTypeId,
                  computedStyle: r,
                  getStyle: o
              });
          case gn:
              return {
                  value: (0, Qe.default)(o(e, fn), r.display)
              };
          case Kx:
              return t[n.actionTypeId] || {
                  value: 0
              };
          default:
              return
      }
  }

  function cR({
      element: e,
      actionItem: t,
      elementApi: r
  }) {
      if (lt(t.actionTypeId)) return io(t.actionTypeId)(t.config);
      switch (t.actionTypeId) {
          case Pt:
          case Nt:
          case Mt:
          case hr: {
              let {
                  xValue: n,
                  yValue: i,
                  zValue: o
              } = t.config;
              return {
                  xValue: n,
                  yValue: i,
                  zValue: o
              }
          }
          case Dt: {
              let {
                  getStyle: n,
                  setStyle: i,
                  getProperty: o
              } = r, {
                  widthUnit: a,
                  heightUnit: s
              } = t.config, {
                  widthValue: u,
                  heightValue: l
              } = t.config;
              if (!Fe) return {
                  widthValue: u,
                  heightValue: l
              };
              if (a === at) {
                  let g = n(e, ze);
                  i(e, ze, ""), u = o(e, "offsetWidth"), i(e, ze, g)
              }
              if (s === at) {
                  let g = n(e, Ke);
                  i(e, Ke, ""), l = o(e, "offsetHeight"), i(e, Ke, g)
              }
              return {
                  widthValue: u,
                  heightValue: l
              }
          }
          case Ft:
          case qt:
          case Xt: {
              let {
                  rValue: n,
                  gValue: i,
                  bValue: o,
                  aValue: a,
                  globalSwatchId: s
              } = t.config;
              if (s && s.startsWith("--")) {
                  let {
                      getStyle: u
                  } = r, l = u(e, s), g = (0, Fd.normalizeColor)(l);
                  return {
                      rValue: g.red,
                      gValue: g.green,
                      bValue: g.blue,
                      aValue: g.alpha
                  }
              }
              return {
                  rValue: n,
                  gValue: i,
                  bValue: o,
                  aValue: a
              }
          }
          case Er:
              return t.config.filters.reduce(aR, {});
          case yr:
              return t.config.fontVariations.reduce(sR, {});
          default: {
              let {
                  value: n
              } = t.config;
              return {
                  value: n
              }
          }
      }
  }

  function kd(e) {
      if (/^TRANSFORM_/.test(e)) return Xd;
      if (/^STYLE_/.test(e)) return go;
      if (/^GENERAL_/.test(e)) return po;
      if (/^PLUGIN_/.test(e)) return Gd
  }

  function lR(e, t) {
      return e === go ? t.replace("STYLE_", "").toLowerCase() : null
  }

  function fR(e, t, r, n, i, o, a, s, u) {
      switch (s) {
          case Xd:
              return ER(e, t, r, i, a);
          case go:
              return SR(e, t, r, i, o, a);
          case po:
              return OR(e, i, a);
          case Gd: {
              let {
                  actionTypeId: l
              } = i;
              if (lt(l)) return oo(l)(u, t, i)
          }
      }
  }

  function ER(e, t, r, n, i) {
      let o = hR.map(s => {
              let u = yo[s],
                  {
                      xValue: l = u.xValue,
                      yValue: g = u.yValue,
                      zValue: p = u.zValue,
                      xUnit: d = "",
                      yUnit: E = "",
                      zUnit: I = ""
                  } = t[s] || {};
              switch (s) {
                  case Pt:
                      return `${Mx}(${l}${d}, ${g}${E}, ${p}${I})`;
                  case Nt:
                      return `${Dx}(${l}${d}, ${g}${E}, ${p}${I})`;
                  case Mt:
                      return `${Fx}(${l}${d}) ${qx}(${g}${E}) ${Xx}(${p}${I})`;
                  case hr:
                      return `${Gx}(${l}${d}, ${g}${E})`;
                  default:
                      return ""
              }
          }).join(" "),
          {
              setStyle: a
          } = i;
      dt(e, ot, i), a(e, ot, o), vR(n, r) && a(e, nn, Vx)
  }

  function yR(e, t, r, n) {
      let i = (0, dn.default)(t, (a, s, u) => `${a} ${u}(${s}${gR(u, r)})`, ""),
          {
              setStyle: o
          } = n;
      dt(e, dr, n), o(e, dr, i)
  }

  function mR(e, t, r, n) {
      let i = (0, dn.default)(t, (a, s, u) => (a.push(`"${u}" ${s}`), a), []).join(", "),
          {
              setStyle: o
          } = n;
      dt(e, pr, n), o(e, pr, i)
  }

  function vR({
      actionTypeId: e
  }, {
      xValue: t,
      yValue: r,
      zValue: n
  }) {
      return e === Pt && n !== void 0 || e === Nt && n !== void 0 || e === Mt && (t !== void 0 || r !== void 0)
  }

  function bR(e, t) {
      let r = e.exec(t);
      return r ? r[1] : ""
  }

  function AR({
      element: e,
      actionTypeId: t,
      computedStyle: r,
      getStyle: n
  }) {
      let i = ho[t],
          o = n(e, i),
          a = IR.test(o) ? o : r[i],
          s = bR(TR, a).split(gr);
      return {
          rValue: (0, Qe.default)(parseInt(s[0], 10), 255),
          gValue: (0, Qe.default)(parseInt(s[1], 10), 255),
          bValue: (0, Qe.default)(parseInt(s[2], 10), 255),
          aValue: (0, Qe.default)(parseFloat(s[3]), 1)
      }
  }

  function SR(e, t, r, n, i, o) {
      let {
          setStyle: a
      } = o;
      switch (n.actionTypeId) {
          case Dt: {
              let {
                  widthUnit: s = "",
                  heightUnit: u = ""
              } = n.config, {
                  widthValue: l,
                  heightValue: g
              } = r;
              l !== void 0 && (s === at && (s = "px"), dt(e, ze, o), a(e, ze, l + s)), g !== void 0 && (u === at && (u = "px"), dt(e, Ke, o), a(e, Ke, g + u));
              break
          }
          case Er: {
              yR(e, r, n.config, o);
              break
          }
          case yr: {
              mR(e, r, n.config, o);
              break
          }
          case Ft:
          case qt:
          case Xt: {
              let s = ho[n.actionTypeId],
                  u = Math.round(r.rValue),
                  l = Math.round(r.gValue),
                  g = Math.round(r.bValue),
                  p = r.aValue;
              dt(e, s, o), a(e, s, p >= 1 ? `rgb(${u},${l},${g})` : `rgba(${u},${l},${g},${p})`);
              break
          }
          default: {
              let {
                  unit: s = ""
              } = n.config;
              dt(e, i, o), a(e, i, r.value + s);
              break
          }
      }
  }

  function OR(e, t, r) {
      let {
          setStyle: n
      } = r;
      switch (t.actionTypeId) {
          case gn: {
              let {
                  value: i
              } = t.config;
              i === Ux && Fe ? n(e, fn, Bi) : n(e, fn, i);
              return
          }
      }
  }

  function dt(e, t, r) {
      if (!Fe) return;
      let n = Bd[t];
      if (!n) return;
      let {
          getStyle: i,
          setStyle: o
      } = r, a = i(e, Lt);
      if (!a) {
          o(e, Lt, n);
          return
      }
      let s = a.split(gr).map(Ud);
      s.indexOf(n) === -1 && o(e, Lt, s.concat(n).join(gr))
  }

  function Hd(e, t, r) {
      if (!Fe) return;
      let n = Bd[t];
      if (!n) return;
      let {
          getStyle: i,
          setStyle: o
      } = r, a = i(e, Lt);
      !a || a.indexOf(n) === -1 || o(e, Lt, a.split(gr).map(Ud).filter(s => s !== n).join(gr))
  }

  function wR({
      store: e,
      elementApi: t
  }) {
      let {
          ixData: r
      } = e.getState(), {
          events: n = {},
          actionLists: i = {}
      } = r;
      Object.keys(n).forEach(o => {
          let a = n[o],
              {
                  config: s
              } = a.action,
              {
                  actionListId: u
              } = s,
              l = i[u];
          l && Md({
              actionList: l,
              event: a,
              elementApi: t
          })
      }), Object.keys(i).forEach(o => {
          Md({
              actionList: i[o],
              elementApi: t
          })
      })
  }

  function Md({
      actionList: e = {},
      event: t,
      elementApi: r
  }) {
      let {
          actionItemGroups: n,
          continuousParameterGroups: i
      } = e;
      n && n.forEach(o => {
          Dd({
              actionGroup: o,
              event: t,
              elementApi: r
          })
      }), i && i.forEach(o => {
          let {
              continuousActionGroups: a
          } = o;
          a.forEach(s => {
              Dd({
                  actionGroup: s,
                  event: t,
                  elementApi: r
              })
          })
      })
  }

  function Dd({
      actionGroup: e,
      event: t,
      elementApi: r
  }) {
      let {
          actionItems: n
      } = e;
      n.forEach(i => {
          let {
              actionTypeId: o,
              config: a
          } = i, s;
          lt(o) ? s = u => ao(o)(u, i) : s = Wd({
              effect: RR,
              actionTypeId: o,
              elementApi: r
          }), Eo({
              config: a,
              event: t,
              elementApi: r
          }).forEach(s)
      })
  }

  function xR(e, t, r) {
      let {
          setStyle: n,
          getStyle: i
      } = r, {
          actionTypeId: o
      } = t;
      if (o === Dt) {
          let {
              config: a
          } = t;
          a.widthUnit === at && n(e, ze, ""), a.heightUnit === at && n(e, Ke, "")
      }
      i(e, Lt) && Wd({
          effect: Hd,
          actionTypeId: o,
          elementApi: r
      })(e)
  }

  function RR(e, t, r) {
      let {
          setStyle: n
      } = r;
      Hd(e, t, r), n(e, t, ""), t === ot && n(e, nn, "")
  }

  function zd(e) {
      let t = 0,
          r = 0;
      return e.forEach((n, i) => {
          let {
              config: o
          } = n, a = o.delay + o.duration;
          a >= t && (t = a, r = i)
      }), r
  }

  function CR(e, t) {
      let {
          actionItemGroups: r,
          useFirstGroupAsInitialState: n
      } = e, {
          actionItem: i,
          verboseTimeElapsed: o = 0
      } = t, a = 0, s = 0;
      return r.forEach((u, l) => {
          if (n && l === 0) return;
          let {
              actionItems: g
          } = u, p = g[zd(g)], {
              config: d,
              actionTypeId: E
          } = p;
          i.id === p.id && (s = a + o);
          let I = kd(E) === po ? 0 : d.duration;
          a += d.delay + I
      }), a > 0 ? fr(s / a) : 0
  }

  function LR({
      actionList: e,
      actionItemId: t,
      rawData: r
  }) {
      let {
          actionItemGroups: n,
          continuousParameterGroups: i
      } = e, o = [], a = s => (o.push((0, pn.mergeIn)(s, ["config"], {
          delay: 0,
          duration: 0
      })), s.id === t);
      return n && n.some(({
          actionItems: s
      }) => s.some(a)), i && i.some(s => {
          let {
              continuousActionGroups: u
          } = s;
          return u.some(({
              actionItems: l
          }) => l.some(a))
      }), (0, pn.setIn)(r, ["actionLists"], {
          [e.id]: {
              id: e.id,
              actionItemGroups: [{
                  actionItems: o
              }]
          }
      })
  }

  function PR(e, {
      basedOn: t
  }) {
      return e === De.SCROLLING_IN_VIEW && (t === He.ELEMENT || t == null) || e === De.MOUSE_MOVE && t === He.ELEMENT
  }

  function NR(e, t) {
      return e + zx + t
  }

  function MR(e, t) {
      return t == null ? !0 : e.indexOf(t) !== -1
  }

  function DR(e, t) {
      return lo(e && e.sort(), t && t.sort())
  }

  function FR(e) {
      if (typeof e == "string") return e;
      if (e.pluginElement && e.objectId) return e.pluginElement + fo + e.objectId;
      if (e.objectId) return e.objectId;
      let {
          id: t = "",
          selector: r = "",
          useEventTarget: n = ""
      } = e;
      return t + fo + r + fo + n
  }
  var Qe, dn, cn, pn, Fd, Px, Nx, Mx, Dx, Fx, qx, Xx, Gx, Vx, Ux, ln, dr, pr, ze, Ke, qd, Bx, kx, Cd, Hx, Ld, Wx, fn, Lt, at, gr, zx, fo, Xd, po, go, Gd, Pt, Nt, Mt, hr, Vd, Er, yr, Dt, Ft, qt, Xt, gn, Kx, Ud, ho, Bd, un, $x, Qx, eR, Nd, nR, iR, aR, sR, uR, yo, dR, pR, gR, hR, _R, IR, TR, Wd, jd = ce(() => {
      "use strict";
      Qe = ie(cd()), dn = ie(bd()), cn = ie(wd()), pn = ie(It());
      Oe();
      Rd();
      Wi();
      Fd = ie(Yi());
      so();
      on();
      ({
          BACKGROUND: Px,
          TRANSFORM: Nx,
          TRANSLATE_3D: Mx,
          SCALE_3D: Dx,
          ROTATE_X: Fx,
          ROTATE_Y: qx,
          ROTATE_Z: Xx,
          SKEW: Gx,
          PRESERVE_3D: Vx,
          FLEX: Ux,
          OPACITY: ln,
          FILTER: dr,
          FONT_VARIATION_SETTINGS: pr,
          WIDTH: ze,
          HEIGHT: Ke,
          BACKGROUND_COLOR: qd,
          BORDER_COLOR: Bx,
          COLOR: kx,
          CHILDREN: Cd,
          IMMEDIATE_CHILDREN: Hx,
          SIBLINGS: Ld,
          PARENT: Wx,
          DISPLAY: fn,
          WILL_CHANGE: Lt,
          AUTO: at,
          COMMA_DELIMITER: gr,
          COLON_DELIMITER: zx,
          BAR_DELIMITER: fo,
          RENDER_TRANSFORM: Xd,
          RENDER_GENERAL: po,
          RENDER_STYLE: go,
          RENDER_PLUGIN: Gd
      } = me), {
          TRANSFORM_MOVE: Pt,
          TRANSFORM_SCALE: Nt,
          TRANSFORM_ROTATE: Mt,
          TRANSFORM_SKEW: hr,
          STYLE_OPACITY: Vd,
          STYLE_FILTER: Er,
          STYLE_FONT_VARIATION: yr,
          STYLE_SIZE: Dt,
          STYLE_BACKGROUND_COLOR: Ft,
          STYLE_BORDER: qt,
          STYLE_TEXT_COLOR: Xt,
          GENERAL_DISPLAY: gn,
          OBJECT_VALUE: Kx
      } = Se, Ud = e => e.trim(), ho = Object.freeze({
          [Ft]: qd,
          [qt]: Bx,
          [Xt]: kx
      }), Bd = Object.freeze({
          [ot]: Nx,
          [qd]: Px,
          [ln]: ln,
          [dr]: dr,
          [ze]: ze,
          [Ke]: Ke,
          [pr]: pr
      }), un = new Map;
      $x = 1;
      Qx = 1;
      eR = (e, t) => e === t;
      Nd = /px/, nR = (e, t) => t.reduce((r, n) => (r[n.type] == null && (r[n.type] = dR[n.type]), r), e || {}), iR = (e, t) => t.reduce((r, n) => (r[n.type] == null && (r[n.type] = pR[n.type] || n.defaultValue || 0), r), e || {});
      aR = (e, t) => (t && (e[t.type] = t.value || 0), e), sR = (e, t) => (t && (e[t.type] = t.value || 0), e), uR = (e, t, r) => {
          if (lt(e)) return ro(e)(r, t);
          switch (e) {
              case Er: {
                  let n = (0, cn.default)(r.filters, ({
                      type: i
                  }) => i === t);
                  return n ? n.value : 0
              }
              case yr: {
                  let n = (0, cn.default)(r.fontVariations, ({
                      type: i
                  }) => i === t);
                  return n ? n.value : 0
              }
              default:
                  return r[t]
          }
      };
      yo = {
          [Pt]: Object.freeze({
              xValue: 0,
              yValue: 0,
              zValue: 0
          }),
          [Nt]: Object.freeze({
              xValue: 1,
              yValue: 1,
              zValue: 1
          }),
          [Mt]: Object.freeze({
              xValue: 0,
              yValue: 0,
              zValue: 0
          }),
          [hr]: Object.freeze({
              xValue: 0,
              yValue: 0
          })
      }, dR = Object.freeze({
          blur: 0,
          "hue-rotate": 0,
          invert: 0,
          grayscale: 0,
          saturate: 100,
          sepia: 0,
          contrast: 100,
          brightness: 100
      }), pR = Object.freeze({
          wght: 0,
          opsz: 0,
          wdth: 0,
          slnt: 0
      }), gR = (e, t) => {
          let r = (0, cn.default)(t.filters, ({
              type: n
          }) => n === e);
          if (r && r.unit) return r.unit;
          switch (e) {
              case "blur":
                  return "px";
              case "hue-rotate":
                  return "deg";
              default:
                  return "%"
          }
      }, hR = Object.keys(yo);
      _R = "\\(([^)]+)\\)", IR = /^rgb/, TR = RegExp(`rgba?${_R}`);
      Wd = ({
          effect: e,
          actionTypeId: t,
          elementApi: r
      }) => n => {
          switch (t) {
              case Pt:
              case Nt:
              case Mt:
              case hr:
                  e(n, ot, r);
                  break;
              case Er:
                  e(n, dr, r);
                  break;
              case yr:
                  e(n, pr, r);
                  break;
              case Vd:
                  e(n, ln, r);
                  break;
              case Dt:
                  e(n, ze, r), e(n, Ke, r);
                  break;
              case Ft:
              case qt:
              case Xt:
                  e(n, ho[t], r);
                  break;
              case gn:
                  e(n, fn, r);
                  break
          }
      }
  });
  var pt = f(mo => {
      "use strict";
      Object.defineProperty(mo, "__esModule", {
          value: !0
      });

      function qR(e, t) {
          for (var r in t) Object.defineProperty(e, r, {
              enumerable: !0,
              get: t[r]
          })
      }
      qR(mo, {
          IX2BrowserSupport: function() {
              return XR
          },
          IX2EasingUtils: function() {
              return VR
          },
          IX2Easings: function() {
              return GR
          },
          IX2ElementsReducer: function() {
              return UR
          },
          IX2VanillaPlugins: function() {
              return BR
          },
          IX2VanillaUtils: function() {
              return kR
          }
      });
      var XR = Gt((on(), Ve(Bf))),
          GR = Gt((Hi(), Ve(lr))),
          VR = Gt((Wi(), Ve($f))),
          UR = Gt((Jf(), Ve(Zf))),
          BR = Gt((so(), Ve(sd))),
          kR = Gt((jd(), Ve(Kd)));

      function $d(e) {
          if (typeof WeakMap != "function") return null;
          var t = new WeakMap,
              r = new WeakMap;
          return ($d = function(n) {
              return n ? r : t
          })(e)
      }

      function Gt(e, t) {
          if (!t && e && e.__esModule) return e;
          if (e === null || typeof e != "object" && typeof e != "function") return {
              default: e
          };
          var r = $d(t);
          if (r && r.has(e)) return r.get(e);
          var n = {
                  __proto__: null
              },
              i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
              if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
                  var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                  a && (a.get || a.set) ? Object.defineProperty(n, o, a) : n[o] = e[o]
              } return n.default = e, r && r.set(e, n), n
      }
  });
  var En, Ze, HR, WR, zR, KR, jR, $R, hn, Yd, YR, QR, vo, ZR, JR, eC, tC, Qd, Zd = ce(() => {
      "use strict";
      Oe();
      En = ie(pt()), Ze = ie(It()), {
          IX2_RAW_DATA_IMPORTED: HR,
          IX2_SESSION_STOPPED: WR,
          IX2_INSTANCE_ADDED: zR,
          IX2_INSTANCE_STARTED: KR,
          IX2_INSTANCE_REMOVED: jR,
          IX2_ANIMATION_FRAME_CHANGED: $R
      } = Ee, {
          optimizeFloat: hn,
          applyEasing: Yd,
          createBezierEasing: YR
      } = En.IX2EasingUtils, {
          RENDER_GENERAL: QR
      } = me, {
          getItemConfigByKey: vo,
          getRenderType: ZR,
          getStyleProp: JR
      } = En.IX2VanillaUtils, eC = (e, t) => {
          let {
              position: r,
              parameterId: n,
              actionGroups: i,
              destinationKeys: o,
              smoothing: a,
              restingValue: s,
              actionTypeId: u,
              customEasingFn: l,
              skipMotion: g,
              skipToValue: p
          } = e, {
              parameters: d
          } = t.payload, E = Math.max(1 - a, .01), I = d[n];
          I == null && (E = 1, I = s);
          let v = Math.max(I, 0) || 0,
              S = hn(v - r),
              y = g ? p : hn(r + S * E),
              w = y * 100;
          if (y === r && e.current) return e;
          let O, C, R, x;
          for (let U = 0, {
                  length: B
              } = i; U < B; U++) {
              let {
                  keyframe: W,
                  actionItems: Q
              } = i[U];
              if (U === 0 && (O = Q[0]), w >= W) {
                  O = Q[0];
                  let N = i[U + 1],
                      T = N && w !== W;
                  C = T ? N.actionItems[0] : null, T && (R = W / 100, x = (N.keyframe - W) / 100)
              }
          }
          let X = {};
          if (O && !C)
              for (let U = 0, {
                      length: B
                  } = o; U < B; U++) {
                  let W = o[U];
                  X[W] = vo(u, W, O.config)
              } else if (O && C && R !== void 0 && x !== void 0) {
                  let U = (y - R) / x,
                      B = O.config.easing,
                      W = Yd(B, U, l);
                  for (let Q = 0, {
                          length: N
                      } = o; Q < N; Q++) {
                      let T = o[Q],
                          L = vo(u, T, O.config),
                          Z = (vo(u, T, C.config) - L) * W + L;
                      X[T] = Z
                  }
              } return (0, Ze.merge)(e, {
              position: y,
              current: X
          })
      }, tC = (e, t) => {
          let {
              active: r,
              origin: n,
              start: i,
              immediate: o,
              renderType: a,
              verbose: s,
              actionItem: u,
              destination: l,
              destinationKeys: g,
              pluginDuration: p,
              instanceDelay: d,
              customEasingFn: E,
              skipMotion: I
          } = e, v = u.config.easing, {
              duration: S,
              delay: y
          } = u.config;
          p != null && (S = p), y = d ?? y, a === QR ? S = 0 : (o || I) && (S = y = 0);
          let {
              now: w
          } = t.payload;
          if (r && n) {
              let O = w - (i + y);
              if (s) {
                  let U = w - i,
                      B = S + y,
                      W = hn(Math.min(Math.max(0, U / B), 1));
                  e = (0, Ze.set)(e, "verboseTimeElapsed", B * W)
              }
              if (O < 0) return e;
              let C = hn(Math.min(Math.max(0, O / S), 1)),
                  R = Yd(v, C, E),
                  x = {},
                  X = null;
              return g.length && (X = g.reduce((U, B) => {
                  let W = l[B],
                      Q = parseFloat(n[B]) || 0,
                      T = (parseFloat(W) - Q) * R + Q;
                  return U[B] = T, U
              }, {})), x.current = X, x.position = C, C === 1 && (x.active = !1, x.complete = !0), (0, Ze.merge)(e, x)
          }
          return e
      }, Qd = (e = Object.freeze({}), t) => {
          switch (t.type) {
              case HR:
                  return t.payload.ixInstances || Object.freeze({});
              case WR:
                  return Object.freeze({});
              case zR: {
                  let {
                      instanceId: r,
                      elementId: n,
                      actionItem: i,
                      eventId: o,
                      eventTarget: a,
                      eventStateKey: s,
                      actionListId: u,
                      groupIndex: l,
                      isCarrier: g,
                      origin: p,
                      destination: d,
                      immediate: E,
                      verbose: I,
                      continuous: v,
                      parameterId: S,
                      actionGroups: y,
                      smoothing: w,
                      restingValue: O,
                      pluginInstance: C,
                      pluginDuration: R,
                      instanceDelay: x,
                      skipMotion: X,
                      skipToValue: U
                  } = t.payload, {
                      actionTypeId: B
                  } = i, W = ZR(B), Q = JR(W, B), N = Object.keys(d).filter(L => d[L] != null && typeof d[L] != "string"), {
                      easing: T
                  } = i.config;
                  return (0, Ze.set)(e, r, {
                      id: r,
                      elementId: n,
                      active: !1,
                      position: 0,
                      start: 0,
                      origin: p,
                      destination: d,
                      destinationKeys: N,
                      immediate: E,
                      verbose: I,
                      current: null,
                      actionItem: i,
                      actionTypeId: B,
                      eventId: o,
                      eventTarget: a,
                      eventStateKey: s,
                      actionListId: u,
                      groupIndex: l,
                      renderType: W,
                      isCarrier: g,
                      styleProp: Q,
                      continuous: v,
                      parameterId: S,
                      actionGroups: y,
                      smoothing: w,
                      restingValue: O,
                      pluginInstance: C,
                      pluginDuration: R,
                      instanceDelay: x,
                      skipMotion: X,
                      skipToValue: U,
                      customEasingFn: Array.isArray(T) && T.length === 4 ? YR(T) : void 0
                  })
              }
              case KR: {
                  let {
                      instanceId: r,
                      time: n
                  } = t.payload;
                  return (0, Ze.mergeIn)(e, [r], {
                      active: !0,
                      complete: !1,
                      start: n
                  })
              }
              case jR: {
                  let {
                      instanceId: r
                  } = t.payload;
                  if (!e[r]) return e;
                  let n = {},
                      i = Object.keys(e),
                      {
                          length: o
                      } = i;
                  for (let a = 0; a < o; a++) {
                      let s = i[a];
                      s !== r && (n[s] = e[s])
                  }
                  return n
              }
              case $R: {
                  let r = e,
                      n = Object.keys(e),
                      {
                          length: i
                      } = n;
                  for (let o = 0; o < i; o++) {
                      let a = n[o],
                          s = e[a],
                          u = s.continuous ? eC : tC;
                      r = (0, Ze.set)(r, a, u(s, t))
                  }
                  return r
              }
              default:
                  return e
          }
      }
  });
  var rC, nC, iC, Jd, ep = ce(() => {
      "use strict";
      Oe();
      ({
          IX2_RAW_DATA_IMPORTED: rC,
          IX2_SESSION_STOPPED: nC,
          IX2_PARAMETER_CHANGED: iC
      } = Ee), Jd = (e = {}, t) => {
          switch (t.type) {
              case rC:
                  return t.payload.ixParameters || {};
              case nC:
                  return {};
              case iC: {
                  let {
                      key: r,
                      value: n
                  } = t.payload;
                  return e[r] = n, e
              }
              default:
                  return e
          }
      }
  });
  var np = {};
  Ae(np, {
      default: () => aC
  });
  var tp, rp, oC, aC, ip = ce(() => {
      "use strict";
      tp = ie(ci());
      ds();
      Ns();
      Fs();
      rp = ie(pt());
      Zd();
      ep();
      ({
          ixElements: oC
      } = rp.IX2ElementsReducer), aC = (0, tp.combineReducers)({
          ixData: fs,
          ixRequest: Ps,
          ixSession: Ds,
          ixElements: oC,
          ixInstances: Qd,
          ixParameters: Jd
      })
  });
  var ap = f((q1, op) => {
      var sC = rt(),
          uC = ye(),
          cC = $e(),
          lC = "[object String]";

      function fC(e) {
          return typeof e == "string" || !uC(e) && cC(e) && sC(e) == lC
      }
      op.exports = fC
  });
  var up = f((X1, sp) => {
      var dC = qi(),
          pC = dC("length");
      sp.exports = pC
  });
  var lp = f((G1, cp) => {
      var gC = "\\ud800-\\udfff",
          hC = "\\u0300-\\u036f",
          EC = "\\ufe20-\\ufe2f",
          yC = "\\u20d0-\\u20ff",
          mC = hC + EC + yC,
          vC = "\\ufe0e\\ufe0f",
          _C = "\\u200d",
          IC = RegExp("[" + _C + gC + mC + vC + "]");

      function TC(e) {
          return IC.test(e)
      }
      cp.exports = TC
  });
  var vp = f((V1, mp) => {
      var dp = "\\ud800-\\udfff",
          bC = "\\u0300-\\u036f",
          AC = "\\ufe20-\\ufe2f",
          SC = "\\u20d0-\\u20ff",
          OC = bC + AC + SC,
          wC = "\\ufe0e\\ufe0f",
          xC = "[" + dp + "]",
          _o = "[" + OC + "]",
          Io = "\\ud83c[\\udffb-\\udfff]",
          RC = "(?:" + _o + "|" + Io + ")",
          pp = "[^" + dp + "]",
          gp = "(?:\\ud83c[\\udde6-\\uddff]){2}",
          hp = "[\\ud800-\\udbff][\\udc00-\\udfff]",
          CC = "\\u200d",
          Ep = RC + "?",
          yp = "[" + wC + "]?",
          LC = "(?:" + CC + "(?:" + [pp, gp, hp].join("|") + ")" + yp + Ep + ")*",
          PC = yp + Ep + LC,
          NC = "(?:" + [pp + _o + "?", _o, gp, hp, xC].join("|") + ")",
          fp = RegExp(Io + "(?=" + Io + ")|" + NC + PC, "g");

      function MC(e) {
          for (var t = fp.lastIndex = 0; fp.test(e);) ++t;
          return t
      }
      mp.exports = MC
  });
  var Ip = f((U1, _p) => {
      var DC = up(),
          FC = lp(),
          qC = vp();

      function XC(e) {
          return FC(e) ? qC(e) : DC(e)
      }
      _p.exports = XC
  });
  var bp = f((B1, Tp) => {
      var GC = jr(),
          VC = $r(),
          UC = ut(),
          BC = ap(),
          kC = Ip(),
          HC = "[object Map]",
          WC = "[object Set]";

      function zC(e) {
          if (e == null) return 0;
          if (UC(e)) return BC(e) ? kC(e) : e.length;
          var t = VC(e);
          return t == HC || t == WC ? e.size : GC(e).length
      }
      Tp.exports = zC
  });
  var Sp = f((k1, Ap) => {
      var KC = "Expected a function";

      function jC(e) {
          if (typeof e != "function") throw new TypeError(KC);
          return function() {
              var t = arguments;
              switch (t.length) {
                  case 0:
                      return !e.call(this);
                  case 1:
                      return !e.call(this, t[0]);
                  case 2:
                      return !e.call(this, t[0], t[1]);
                  case 3:
                      return !e.call(this, t[0], t[1], t[2])
              }
              return !e.apply(this, t)
          }
      }
      Ap.exports = jC
  });
  var To = f((H1, Op) => {
      var $C = nt(),
          YC = function() {
              try {
                  var e = $C(Object, "defineProperty");
                  return e({}, "", {}), e
              } catch {}
          }();
      Op.exports = YC
  });
  var bo = f((W1, xp) => {
      var wp = To();

      function QC(e, t, r) {
          t == "__proto__" && wp ? wp(e, t, {
              configurable: !0,
              enumerable: !0,
              value: r,
              writable: !0
          }) : e[t] = r
      }
      xp.exports = QC
  });
  var Cp = f((z1, Rp) => {
      var ZC = bo(),
          JC = Xr(),
          eL = Object.prototype,
          tL = eL.hasOwnProperty;

      function rL(e, t, r) {
          var n = e[t];
          (!(tL.call(e, t) && JC(n, r)) || r === void 0 && !(t in e)) && ZC(e, t, r)
      }
      Rp.exports = rL
  });
  var Np = f((K1, Pp) => {
      var nL = Cp(),
          iL = sr(),
          oL = Hr(),
          Lp = We(),
          aL = Rt();

      function sL(e, t, r, n) {
          if (!Lp(e)) return e;
          t = iL(t, e);
          for (var i = -1, o = t.length, a = o - 1, s = e; s != null && ++i < o;) {
              var u = aL(t[i]),
                  l = r;
              if (u === "__proto__" || u === "constructor" || u === "prototype") return e;
              if (i != a) {
                  var g = s[u];
                  l = n ? n(g, u, s) : void 0, l === void 0 && (l = Lp(g) ? g : oL(t[i + 1]) ? [] : {})
              }
              nL(s, u, l), s = s[u]
          }
          return e
      }
      Pp.exports = sL
  });
  var Dp = f((j1, Mp) => {
      var uL = Zr(),
          cL = Np(),
          lL = sr();

      function fL(e, t, r) {
          for (var n = -1, i = t.length, o = {}; ++n < i;) {
              var a = t[n],
                  s = uL(e, a);
              r(s, a) && cL(o, lL(a, e), s)
          }
          return o
      }
      Mp.exports = fL
  });
  var qp = f(($1, Fp) => {
      var dL = Br(),
          pL = Yn(),
          gL = Ti(),
          hL = Ii(),
          EL = Object.getOwnPropertySymbols,
          yL = EL ? function(e) {
              for (var t = []; e;) dL(t, gL(e)), e = pL(e);
              return t
          } : hL;
      Fp.exports = yL
  });
  var Gp = f((Y1, Xp) => {
      function mL(e) {
          var t = [];
          if (e != null)
              for (var r in Object(e)) t.push(r);
          return t
      }
      Xp.exports = mL
  });
  var Up = f((Q1, Vp) => {
      var vL = We(),
          _L = Kr(),
          IL = Gp(),
          TL = Object.prototype,
          bL = TL.hasOwnProperty;

      function AL(e) {
          if (!vL(e)) return IL(e);
          var t = _L(e),
              r = [];
          for (var n in e) n == "constructor" && (t || !bL.call(e, n)) || r.push(n);
          return r
      }
      Vp.exports = AL
  });
  var kp = f((Z1, Bp) => {
      var SL = Ai(),
          OL = Up(),
          wL = ut();

      function xL(e) {
          return wL(e) ? SL(e, !0) : OL(e)
      }
      Bp.exports = xL
  });
  var Wp = f((J1, Hp) => {
      var RL = _i(),
          CL = qp(),
          LL = kp();

      function PL(e) {
          return RL(e, LL, CL)
      }
      Hp.exports = PL
  });
  var Kp = f((eX, zp) => {
      var NL = Fi(),
          ML = it(),
          DL = Dp(),
          FL = Wp();

      function qL(e, t) {
          if (e == null) return {};
          var r = NL(FL(e), function(n) {
              return [n]
          });
          return t = ML(t), DL(e, r, function(n, i) {
              return t(n, i[0])
          })
      }
      zp.exports = qL
  });
  var $p = f((tX, jp) => {
      var XL = it(),
          GL = Sp(),
          VL = Kp();

      function UL(e, t) {
          return VL(e, GL(XL(t)))
      }
      jp.exports = UL
  });
  var Qp = f((rX, Yp) => {
      var BL = jr(),
          kL = $r(),
          HL = tr(),
          WL = ye(),
          zL = ut(),
          KL = kr(),
          jL = Kr(),
          $L = zr(),
          YL = "[object Map]",
          QL = "[object Set]",
          ZL = Object.prototype,
          JL = ZL.hasOwnProperty;

      function eP(e) {
          if (e == null) return !0;
          if (zL(e) && (WL(e) || typeof e == "string" || typeof e.splice == "function" || KL(e) || $L(e) || HL(e))) return !e.length;
          var t = kL(e);
          if (t == YL || t == QL) return !e.size;
          if (jL(e)) return !BL(e).length;
          for (var r in e)
              if (JL.call(e, r)) return !1;
          return !0
      }
      Yp.exports = eP
  });
  var Jp = f((nX, Zp) => {
      var tP = bo(),
          rP = uo(),
          nP = it();

      function iP(e, t) {
          var r = {};
          return t = nP(t, 3), rP(e, function(n, i, o) {
              tP(r, i, t(n, i, o))
          }), r
      }
      Zp.exports = iP
  });
  var tg = f((iX, eg) => {
      function oP(e, t) {
          for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1;);
          return e
      }
      eg.exports = oP
  });
  var ng = f((oX, rg) => {
      var aP = en();

      function sP(e) {
          return typeof e == "function" ? e : aP
      }
      rg.exports = sP
  });
  var og = f((aX, ig) => {
      var uP = tg(),
          cP = co(),
          lP = ng(),
          fP = ye();

      function dP(e, t) {
          var r = fP(e) ? uP : cP;
          return r(e, lP(t))
      }
      ig.exports = dP
  });
  var sg = f((sX, ag) => {
      var pP = Me(),
          gP = function() {
              return pP.Date.now()
          };
      ag.exports = gP
  });
  var lg = f((uX, cg) => {
      var hP = We(),
          Ao = sg(),
          ug = tn(),
          EP = "Expected a function",
          yP = Math.max,
          mP = Math.min;

      function vP(e, t, r) {
          var n, i, o, a, s, u, l = 0,
              g = !1,
              p = !1,
              d = !0;
          if (typeof e != "function") throw new TypeError(EP);
          t = ug(t) || 0, hP(r) && (g = !!r.leading, p = "maxWait" in r, o = p ? yP(ug(r.maxWait) || 0, t) : o, d = "trailing" in r ? !!r.trailing : d);

          function E(x) {
              var X = n,
                  U = i;
              return n = i = void 0, l = x, a = e.apply(U, X), a
          }

          function I(x) {
              return l = x, s = setTimeout(y, t), g ? E(x) : a
          }

          function v(x) {
              var X = x - u,
                  U = x - l,
                  B = t - X;
              return p ? mP(B, o - U) : B
          }

          function S(x) {
              var X = x - u,
                  U = x - l;
              return u === void 0 || X >= t || X < 0 || p && U >= o
          }

          function y() {
              var x = Ao();
              if (S(x)) return w(x);
              s = setTimeout(y, v(x))
          }

          function w(x) {
              return s = void 0, d && n ? E(x) : (n = i = void 0, a)
          }

          function O() {
              s !== void 0 && clearTimeout(s), l = 0, n = u = i = s = void 0
          }

          function C() {
              return s === void 0 ? a : w(Ao())
          }

          function R() {
              var x = Ao(),
                  X = S(x);
              if (n = arguments, i = this, u = x, X) {
                  if (s === void 0) return I(u);
                  if (p) return clearTimeout(s), s = setTimeout(y, t), E(u)
              }
              return s === void 0 && (s = setTimeout(y, t)), a
          }
          return R.cancel = O, R.flush = C, R
      }
      cg.exports = vP
  });
  var dg = f((cX, fg) => {
      var _P = lg(),
          IP = We(),
          TP = "Expected a function";

      function bP(e, t, r) {
          var n = !0,
              i = !0;
          if (typeof e != "function") throw new TypeError(TP);
          return IP(r) && (n = "leading" in r ? !!r.leading : n, i = "trailing" in r ? !!r.trailing : i), _P(e, t, {
              leading: n,
              maxWait: t,
              trailing: i
          })
      }
      fg.exports = bP
  });
  var gg = {};
  Ae(gg, {
      actionListPlaybackChanged: () => Ut,
      animationFrameChanged: () => mn,
      clearRequested: () => jP,
      elementStateChanged: () => Po,
      eventListenerAdded: () => yn,
      eventStateChanged: () => Ro,
      instanceAdded: () => Co,
      instanceRemoved: () => Lo,
      instanceStarted: () => vn,
      mediaQueriesDefined: () => Mo,
      parameterChanged: () => Vt,
      playbackRequested: () => zP,
      previewRequested: () => WP,
      rawDataImported: () => So,
      sessionInitialized: () => Oo,
      sessionStarted: () => wo,
      sessionStopped: () => xo,
      stopRequested: () => KP,
      testFrameRendered: () => $P,
      viewportWidthChanged: () => No
  });
  var pg, AP, SP, OP, wP, xP, RP, CP, LP, PP, NP, MP, DP, FP, qP, XP, GP, VP, UP, BP, kP, HP, So, Oo, wo, xo, WP, zP, KP, jP, yn, $P, Ro, mn, Vt, Co, vn, Lo, Po, Ut, No, Mo, _n = ce(() => {
      "use strict";
      Oe();
      pg = ie(pt()), {
          IX2_RAW_DATA_IMPORTED: AP,
          IX2_SESSION_INITIALIZED: SP,
          IX2_SESSION_STARTED: OP,
          IX2_SESSION_STOPPED: wP,
          IX2_PREVIEW_REQUESTED: xP,
          IX2_PLAYBACK_REQUESTED: RP,
          IX2_STOP_REQUESTED: CP,
          IX2_CLEAR_REQUESTED: LP,
          IX2_EVENT_LISTENER_ADDED: PP,
          IX2_TEST_FRAME_RENDERED: NP,
          IX2_EVENT_STATE_CHANGED: MP,
          IX2_ANIMATION_FRAME_CHANGED: DP,
          IX2_PARAMETER_CHANGED: FP,
          IX2_INSTANCE_ADDED: qP,
          IX2_INSTANCE_STARTED: XP,
          IX2_INSTANCE_REMOVED: GP,
          IX2_ELEMENT_STATE_CHANGED: VP,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: UP,
          IX2_VIEWPORT_WIDTH_CHANGED: BP,
          IX2_MEDIA_QUERIES_DEFINED: kP
      } = Ee, {
          reifyState: HP
      } = pg.IX2VanillaUtils, So = e => ({
          type: AP,
          payload: {
              ...HP(e)
          }
      }), Oo = ({
          hasBoundaryNodes: e,
          reducedMotion: t
      }) => ({
          type: SP,
          payload: {
              hasBoundaryNodes: e,
              reducedMotion: t
          }
      }), wo = () => ({
          type: OP
      }), xo = () => ({
          type: wP
      }), WP = ({
          rawData: e,
          defer: t
      }) => ({
          type: xP,
          payload: {
              defer: t,
              rawData: e
          }
      }), zP = ({
          actionTypeId: e = Se.GENERAL_START_ACTION,
          actionListId: t,
          actionItemId: r,
          eventId: n,
          allowEvents: i,
          immediate: o,
          testManual: a,
          verbose: s,
          rawData: u
      }) => ({
          type: RP,
          payload: {
              actionTypeId: e,
              actionListId: t,
              actionItemId: r,
              testManual: a,
              eventId: n,
              allowEvents: i,
              immediate: o,
              verbose: s,
              rawData: u
          }
      }), KP = e => ({
          type: CP,
          payload: {
              actionListId: e
          }
      }), jP = () => ({
          type: LP
      }), yn = (e, t) => ({
          type: PP,
          payload: {
              target: e,
              listenerParams: t
          }
      }), $P = (e = 1) => ({
          type: NP,
          payload: {
              step: e
          }
      }), Ro = (e, t) => ({
          type: MP,
          payload: {
              stateKey: e,
              newState: t
          }
      }), mn = (e, t) => ({
          type: DP,
          payload: {
              now: e,
              parameters: t
          }
      }), Vt = (e, t) => ({
          type: FP,
          payload: {
              key: e,
              value: t
          }
      }), Co = e => ({
          type: qP,
          payload: {
              ...e
          }
      }), vn = (e, t) => ({
          type: XP,
          payload: {
              instanceId: e,
              time: t
          }
      }), Lo = e => ({
          type: GP,
          payload: {
              instanceId: e
          }
      }), Po = (e, t, r, n) => ({
          type: VP,
          payload: {
              elementId: e,
              actionTypeId: t,
              current: r,
              actionItem: n
          }
      }), Ut = ({
          actionListId: e,
          isPlaying: t
      }) => ({
          type: UP,
          payload: {
              actionListId: e,
              isPlaying: t
          }
      }), No = ({
          width: e,
          mediaQueries: t
      }) => ({
          type: BP,
          payload: {
              width: e,
              mediaQueries: t
          }
      }), Mo = () => ({
          type: kP
      })
  });
  var Te = {};
  Ae(Te, {
      elementContains: () => qo,
      getChildElements: () => oN,
      getClosestElement: () => mr,
      getProperty: () => eN,
      getQuerySelector: () => Fo,
      getRefType: () => Xo,
      getSiblingElements: () => aN,
      getStyle: () => JP,
      getValidDocument: () => rN,
      isSiblingNode: () => iN,
      matchSelector: () => tN,
      queryDocument: () => nN,
      setStyle: () => ZP
  });

  function ZP(e, t, r) {
      e.style[t] = r
  }

  function JP(e, t) {
      return t.startsWith("--") ? window.getComputedStyle(document.documentElement).getPropertyValue(t) : e.style[t]
  }

  function eN(e, t) {
      return e[t]
  }

  function tN(e) {
      return t => t[Do](e)
  }

  function Fo({
      id: e,
      selector: t
  }) {
      if (e) {
          let r = e;
          if (e.indexOf(hg) !== -1) {
              let n = e.split(hg),
                  i = n[0];
              if (r = n[1], i !== document.documentElement.getAttribute(yg)) return null
          }
          return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`
      }
      return t
  }

  function rN(e) {
      return e == null || e === document.documentElement.getAttribute(yg) ? document : null
  }

  function nN(e, t) {
      return Array.prototype.slice.call(document.querySelectorAll(t ? e + " " + t : e))
  }

  function qo(e, t) {
      return e.contains(t)
  }

  function iN(e, t) {
      return e !== t && e.parentNode === t.parentNode
  }

  function oN(e) {
      let t = [];
      for (let r = 0, {
              length: n
          } = e || []; r < n; r++) {
          let {
              children: i
          } = e[r], {
              length: o
          } = i;
          if (o)
              for (let a = 0; a < o; a++) t.push(i[a])
      }
      return t
  }

  function aN(e = []) {
      let t = [],
          r = [];
      for (let n = 0, {
              length: i
          } = e; n < i; n++) {
          let {
              parentNode: o
          } = e[n];
          if (!o || !o.children || !o.children.length || r.indexOf(o) !== -1) continue;
          r.push(o);
          let a = o.firstElementChild;
          for (; a != null;) e.indexOf(a) === -1 && t.push(a), a = a.nextElementSibling
      }
      return t
  }

  function Xo(e) {
      return e != null && typeof e == "object" ? e instanceof Element ? YP : QP : null
  }
  var Eg, Do, hg, YP, QP, yg, mr, mg = ce(() => {
      "use strict";
      Eg = ie(pt());
      Oe();
      ({
          ELEMENT_MATCHES: Do
      } = Eg.IX2BrowserSupport), {
          IX2_ID_DELIMITER: hg,
          HTML_ELEMENT: YP,
          PLAIN_OBJECT: QP,
          WF_PAGE: yg
      } = me;
      mr = Element.prototype.closest ? (e, t) => document.documentElement.contains(e) ? e.closest(t) : null : (e, t) => {
          if (!document.documentElement.contains(e)) return null;
          let r = e;
          do {
              if (r[Do] && r[Do](t)) return r;
              r = r.parentNode
          } while (r != null);
          return null
      }
  });
  var Go = f((dX, _g) => {
      var sN = We(),
          vg = Object.create,
          uN = function() {
              function e() {}
              return function(t) {
                  if (!sN(t)) return {};
                  if (vg) return vg(t);
                  e.prototype = t;
                  var r = new e;
                  return e.prototype = void 0, r
              }
          }();
      _g.exports = uN
  });
  var In = f((pX, Ig) => {
      function cN() {}
      Ig.exports = cN
  });
  var bn = f((gX, Tg) => {
      var lN = Go(),
          fN = In();

      function Tn(e, t) {
          this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = void 0
      }
      Tn.prototype = lN(fN.prototype);
      Tn.prototype.constructor = Tn;
      Tg.exports = Tn
  });
  var Og = f((hX, Sg) => {
      var bg = mt(),
          dN = tr(),
          pN = ye(),
          Ag = bg ? bg.isConcatSpreadable : void 0;

      function gN(e) {
          return pN(e) || dN(e) || !!(Ag && e && e[Ag])
      }
      Sg.exports = gN
  });
  var Rg = f((EX, xg) => {
      var hN = Br(),
          EN = Og();

      function wg(e, t, r, n, i) {
          var o = -1,
              a = e.length;
          for (r || (r = EN), i || (i = []); ++o < a;) {
              var s = e[o];
              t > 0 && r(s) ? t > 1 ? wg(s, t - 1, r, n, i) : hN(i, s) : n || (i[i.length] = s)
          }
          return i
      }
      xg.exports = wg
  });
  var Lg = f((yX, Cg) => {
      var yN = Rg();

      function mN(e) {
          var t = e == null ? 0 : e.length;
          return t ? yN(e, 1) : []
      }
      Cg.exports = mN
  });
  var Ng = f((mX, Pg) => {
      function vN(e, t, r) {
          switch (r.length) {
              case 0:
                  return e.call(t);
              case 1:
                  return e.call(t, r[0]);
              case 2:
                  return e.call(t, r[0], r[1]);
              case 3:
                  return e.call(t, r[0], r[1], r[2])
          }
          return e.apply(t, r)
      }
      Pg.exports = vN
  });
  var Fg = f((vX, Dg) => {
      var _N = Ng(),
          Mg = Math.max;

      function IN(e, t, r) {
          return t = Mg(t === void 0 ? e.length - 1 : t, 0),
              function() {
                  for (var n = arguments, i = -1, o = Mg(n.length - t, 0), a = Array(o); ++i < o;) a[i] = n[t + i];
                  i = -1;
                  for (var s = Array(t + 1); ++i < t;) s[i] = n[i];
                  return s[t] = r(a), _N(e, this, s)
              }
      }
      Dg.exports = IN
  });
  var Xg = f((_X, qg) => {
      function TN(e) {
          return function() {
              return e
          }
      }
      qg.exports = TN
  });
  var Ug = f((IX, Vg) => {
      var bN = Xg(),
          Gg = To(),
          AN = en(),
          SN = Gg ? function(e, t) {
              return Gg(e, "toString", {
                  configurable: !0,
                  enumerable: !1,
                  value: bN(t),
                  writable: !0
              })
          } : AN;
      Vg.exports = SN
  });
  var kg = f((TX, Bg) => {
      var ON = 800,
          wN = 16,
          xN = Date.now;

      function RN(e) {
          var t = 0,
              r = 0;
          return function() {
              var n = xN(),
                  i = wN - (n - r);
              if (r = n, i > 0) {
                  if (++t >= ON) return arguments[0]
              } else t = 0;
              return e.apply(void 0, arguments)
          }
      }
      Bg.exports = RN
  });
  var Wg = f((bX, Hg) => {
      var CN = Ug(),
          LN = kg(),
          PN = LN(CN);
      Hg.exports = PN
  });
  var Kg = f((AX, zg) => {
      var NN = Lg(),
          MN = Fg(),
          DN = Wg();

      function FN(e) {
          return DN(MN(e, void 0, NN), e + "")
      }
      zg.exports = FN
  });
  var Yg = f((SX, $g) => {
      var jg = Si(),
          qN = jg && new jg;
      $g.exports = qN
  });
  var Zg = f((OX, Qg) => {
      function XN() {}
      Qg.exports = XN
  });
  var Vo = f((wX, eh) => {
      var Jg = Yg(),
          GN = Zg(),
          VN = Jg ? function(e) {
              return Jg.get(e)
          } : GN;
      eh.exports = VN
  });
  var rh = f((xX, th) => {
      var UN = {};
      th.exports = UN
  });
  var Uo = f((RX, ih) => {
      var nh = rh(),
          BN = Object.prototype,
          kN = BN.hasOwnProperty;

      function HN(e) {
          for (var t = e.name + "", r = nh[t], n = kN.call(nh, t) ? r.length : 0; n--;) {
              var i = r[n],
                  o = i.func;
              if (o == null || o == e) return i.name
          }
          return t
      }
      ih.exports = HN
  });
  var Sn = f((CX, oh) => {
      var WN = Go(),
          zN = In(),
          KN = 4294967295;

      function An(e) {
          this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = KN, this.__views__ = []
      }
      An.prototype = WN(zN.prototype);
      An.prototype.constructor = An;
      oh.exports = An
  });
  var sh = f((LX, ah) => {
      function jN(e, t) {
          var r = -1,
              n = e.length;
          for (t || (t = Array(n)); ++r < n;) t[r] = e[r];
          return t
      }
      ah.exports = jN
  });
  var ch = f((PX, uh) => {
      var $N = Sn(),
          YN = bn(),
          QN = sh();

      function ZN(e) {
          if (e instanceof $N) return e.clone();
          var t = new YN(e.__wrapped__, e.__chain__);
          return t.__actions__ = QN(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t
      }
      uh.exports = ZN
  });
  var dh = f((NX, fh) => {
      var JN = Sn(),
          lh = bn(),
          eM = In(),
          tM = ye(),
          rM = $e(),
          nM = ch(),
          iM = Object.prototype,
          oM = iM.hasOwnProperty;

      function On(e) {
          if (rM(e) && !tM(e) && !(e instanceof JN)) {
              if (e instanceof lh) return e;
              if (oM.call(e, "__wrapped__")) return nM(e)
          }
          return new lh(e)
      }
      On.prototype = eM.prototype;
      On.prototype.constructor = On;
      fh.exports = On
  });
  var gh = f((MX, ph) => {
      var aM = Sn(),
          sM = Vo(),
          uM = Uo(),
          cM = dh();

      function lM(e) {
          var t = uM(e),
              r = cM[t];
          if (typeof r != "function" || !(t in aM.prototype)) return !1;
          if (e === r) return !0;
          var n = sM(r);
          return !!n && e === n[0]
      }
      ph.exports = lM
  });
  var mh = f((DX, yh) => {
      var hh = bn(),
          fM = Kg(),
          dM = Vo(),
          Bo = Uo(),
          pM = ye(),
          Eh = gh(),
          gM = "Expected a function",
          hM = 8,
          EM = 32,
          yM = 128,
          mM = 256;

      function vM(e) {
          return fM(function(t) {
              var r = t.length,
                  n = r,
                  i = hh.prototype.thru;
              for (e && t.reverse(); n--;) {
                  var o = t[n];
                  if (typeof o != "function") throw new TypeError(gM);
                  if (i && !a && Bo(o) == "wrapper") var a = new hh([], !0)
              }
              for (n = a ? n : r; ++n < r;) {
                  o = t[n];
                  var s = Bo(o),
                      u = s == "wrapper" ? dM(o) : void 0;
                  u && Eh(u[0]) && u[1] == (yM | hM | EM | mM) && !u[4].length && u[9] == 1 ? a = a[Bo(u[0])].apply(a, u[3]) : a = o.length == 1 && Eh(o) ? a[s]() : a.thru(o)
              }
              return function() {
                  var l = arguments,
                      g = l[0];
                  if (a && l.length == 1 && pM(g)) return a.plant(g).value();
                  for (var p = 0, d = r ? t[p].apply(this, l) : g; ++p < r;) d = t[p].call(this, d);
                  return d
              }
          })
      }
      yh.exports = vM
  });
  var _h = f((FX, vh) => {
      var _M = mh(),
          IM = _M();
      vh.exports = IM
  });
  var Th = f((qX, Ih) => {
      function TM(e, t, r) {
          return e === e && (r !== void 0 && (e = e <= r ? e : r), t !== void 0 && (e = e >= t ? e : t)), e
      }
      Ih.exports = TM
  });
  var Ah = f((XX, bh) => {
      var bM = Th(),
          ko = tn();

      function AM(e, t, r) {
          return r === void 0 && (r = t, t = void 0), r !== void 0 && (r = ko(r), r = r === r ? r : 0), t !== void 0 && (t = ko(t), t = t === t ? t : 0), bM(ko(e), t, r)
      }
      bh.exports = AM
  });
  var Nh, Mh, Dh, Fh, SM, OM, wM, xM, RM, CM, LM, PM, NM, MM, DM, FM, qM, XM, GM, qh, Xh, VM, UM, BM, Gh, kM, HM, Vh, WM, Ho, Uh, Sh, Oh, Bh, _r, zM, je, kh, KM, xe, qe, Ir, Hh, Wo, wh, zo, jM, vr, $M, YM, QM, Wh, xh, ZM, Rh, JM, eD, tD, Ch, wn, xn, Lh, Ph, zh, Kh = ce(() => {
      "use strict";
      Nh = ie(_h()), Mh = ie(Jr()), Dh = ie(Ah());
      Oe();
      Ko();
      _n();
      Fh = ie(pt()), {
          MOUSE_CLICK: SM,
          MOUSE_SECOND_CLICK: OM,
          MOUSE_DOWN: wM,
          MOUSE_UP: xM,
          MOUSE_OVER: RM,
          MOUSE_OUT: CM,
          DROPDOWN_CLOSE: LM,
          DROPDOWN_OPEN: PM,
          SLIDER_ACTIVE: NM,
          SLIDER_INACTIVE: MM,
          TAB_ACTIVE: DM,
          TAB_INACTIVE: FM,
          NAVBAR_CLOSE: qM,
          NAVBAR_OPEN: XM,
          MOUSE_MOVE: GM,
          PAGE_SCROLL_DOWN: qh,
          SCROLL_INTO_VIEW: Xh,
          SCROLL_OUT_OF_VIEW: VM,
          PAGE_SCROLL_UP: UM,
          SCROLLING_IN_VIEW: BM,
          PAGE_FINISH: Gh,
          ECOMMERCE_CART_CLOSE: kM,
          ECOMMERCE_CART_OPEN: HM,
          PAGE_START: Vh,
          PAGE_SCROLL: WM
      } = De, Ho = "COMPONENT_ACTIVE", Uh = "COMPONENT_INACTIVE", {
          COLON_DELIMITER: Sh
      } = me, {
          getNamespacedParameterId: Oh
      } = Fh.IX2VanillaUtils, Bh = e => t => typeof t == "object" && e(t) ? !0 : t, _r = Bh(({
          element: e,
          nativeEvent: t
      }) => e === t.target), zM = Bh(({
          element: e,
          nativeEvent: t
      }) => e.contains(t.target)), je = (0, Nh.default)([_r, zM]), kh = (e, t) => {
          if (t) {
              let {
                  ixData: r
              } = e.getState(), {
                  events: n
              } = r, i = n[t];
              if (i && !jM[i.eventTypeId]) return i
          }
          return null
      }, KM = ({
          store: e,
          event: t
      }) => {
          let {
              action: r
          } = t, {
              autoStopEventId: n
          } = r.config;
          return !!kh(e, n)
      }, xe = ({
          store: e,
          event: t,
          element: r,
          eventStateKey: n
      }, i) => {
          let {
              action: o,
              id: a
          } = t, {
              actionListId: s,
              autoStopEventId: u
          } = o.config, l = kh(e, u);
          return l && Bt({
              store: e,
              eventId: u,
              eventTarget: r,
              eventStateKey: u + Sh + n.split(Sh)[1],
              actionListId: (0, Mh.default)(l, "action.config.actionListId")
          }), Bt({
              store: e,
              eventId: a,
              eventTarget: r,
              eventStateKey: n,
              actionListId: s
          }), Tr({
              store: e,
              eventId: a,
              eventTarget: r,
              eventStateKey: n,
              actionListId: s
          }), i
      }, qe = (e, t) => (r, n) => e(r, n) === !0 ? t(r, n) : n, Ir = {
          handler: qe(je, xe)
      }, Hh = {
          ...Ir,
          types: [Ho, Uh].join(" ")
      }, Wo = [{
          target: window,
          types: "resize orientationchange",
          throttle: !0
      }, {
          target: document,
          types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
          throttle: !0
      }], wh = "mouseover mouseout", zo = {
          types: Wo
      }, jM = {
          PAGE_START: Vh,
          PAGE_FINISH: Gh
      }, vr = (() => {
          let e = window.pageXOffset !== void 0,
              r = document.compatMode === "CSS1Compat" ? document.documentElement : document.body;
          return () => ({
              scrollLeft: e ? window.pageXOffset : r.scrollLeft,
              scrollTop: e ? window.pageYOffset : r.scrollTop,
              stiffScrollTop: (0, Dh.default)(e ? window.pageYOffset : r.scrollTop, 0, r.scrollHeight - window.innerHeight),
              scrollWidth: r.scrollWidth,
              scrollHeight: r.scrollHeight,
              clientWidth: r.clientWidth,
              clientHeight: r.clientHeight,
              innerWidth: window.innerWidth,
              innerHeight: window.innerHeight
          })
      })(), $M = (e, t) => !(e.left > t.right || e.right < t.left || e.top > t.bottom || e.bottom < t.top), YM = ({
          element: e,
          nativeEvent: t
      }) => {
          let {
              type: r,
              target: n,
              relatedTarget: i
          } = t, o = e.contains(n);
          if (r === "mouseover" && o) return !0;
          let a = e.contains(i);
          return !!(r === "mouseout" && o && a)
      }, QM = e => {
          let {
              element: t,
              event: {
                  config: r
              }
          } = e, {
              clientWidth: n,
              clientHeight: i
          } = vr(), o = r.scrollOffsetValue, u = r.scrollOffsetUnit === "PX" ? o : i * (o || 0) / 100;
          return $M(t.getBoundingClientRect(), {
              left: 0,
              top: u,
              right: n,
              bottom: i - u
          })
      }, Wh = e => (t, r) => {
          let {
              type: n
          } = t.nativeEvent, i = [Ho, Uh].indexOf(n) !== -1 ? n === Ho : r.isActive, o = {
              ...r,
              isActive: i
          };
          return (!r || o.isActive !== r.isActive) && e(t, o) || o
      }, xh = e => (t, r) => {
          let n = {
              elementHovered: YM(t)
          };
          return (r ? n.elementHovered !== r.elementHovered : n.elementHovered) && e(t, n) || n
      }, ZM = e => (t, r) => {
          let n = {
              ...r,
              elementVisible: QM(t)
          };
          return (r ? n.elementVisible !== r.elementVisible : n.elementVisible) && e(t, n) || n
      }, Rh = e => (t, r = {}) => {
          let {
              stiffScrollTop: n,
              scrollHeight: i,
              innerHeight: o
          } = vr(), {
              event: {
                  config: a,
                  eventTypeId: s
              }
          } = t, {
              scrollOffsetValue: u,
              scrollOffsetUnit: l
          } = a, g = l === "PX", p = i - o, d = Number((n / p).toFixed(2));
          if (r && r.percentTop === d) return r;
          let E = (g ? u : o * (u || 0) / 100) / p,
              I, v, S = 0;
          r && (I = d > r.percentTop, v = r.scrollingDown !== I, S = v ? d : r.anchorTop);
          let y = s === qh ? d >= S + E : d <= S - E,
              w = {
                  ...r,
                  percentTop: d,
                  inBounds: y,
                  anchorTop: S,
                  scrollingDown: I
              };
          return r && y && (v || w.inBounds !== r.inBounds) && e(t, w) || w
      }, JM = (e, t) => e.left > t.left && e.left < t.right && e.top > t.top && e.top < t.bottom, eD = e => (t, r) => {
          let n = {
              finished: document.readyState === "complete"
          };
          return n.finished && !(r && r.finshed) && e(t), n
      }, tD = e => (t, r) => {
          let n = {
              started: !0
          };
          return r || e(t), n
      }, Ch = e => (t, r = {
          clickCount: 0
      }) => {
          let n = {
              clickCount: r.clickCount % 2 + 1
          };
          return n.clickCount !== r.clickCount && e(t, n) || n
      }, wn = (e = !0) => ({
          ...Hh,
          handler: qe(e ? je : _r, Wh((t, r) => r.isActive ? Ir.handler(t, r) : r))
      }), xn = (e = !0) => ({
          ...Hh,
          handler: qe(e ? je : _r, Wh((t, r) => r.isActive ? r : Ir.handler(t, r)))
      }), Lh = {
          ...zo,
          handler: ZM((e, t) => {
              let {
                  elementVisible: r
              } = t, {
                  event: n,
                  store: i
              } = e, {
                  ixData: o
              } = i.getState(), {
                  events: a
              } = o;
              return !a[n.action.config.autoStopEventId] && t.triggered ? t : n.eventTypeId === Xh === r ? (xe(e), {
                  ...t,
                  triggered: !0
              }) : t
          })
      }, Ph = .05, zh = {
          [NM]: wn(),
          [MM]: xn(),
          [PM]: wn(),
          [LM]: xn(),
          [XM]: wn(!1),
          [qM]: xn(!1),
          [DM]: wn(),
          [FM]: xn(),
          [HM]: {
              types: "ecommerce-cart-open",
              handler: qe(je, xe)
          },
          [kM]: {
              types: "ecommerce-cart-close",
              handler: qe(je, xe)
          },
          [SM]: {
              types: "click",
              handler: qe(je, Ch((e, {
                  clickCount: t
              }) => {
                  KM(e) ? t === 1 && xe(e) : xe(e)
              }))
          },
          [OM]: {
              types: "click",
              handler: qe(je, Ch((e, {
                  clickCount: t
              }) => {
                  t === 2 && xe(e)
              }))
          },
          [wM]: {
              ...Ir,
              types: "mousedown"
          },
          [xM]: {
              ...Ir,
              types: "mouseup"
          },
          [RM]: {
              types: wh,
              handler: qe(je, xh((e, t) => {
                  t.elementHovered && xe(e)
              }))
          },
          [CM]: {
              types: wh,
              handler: qe(je, xh((e, t) => {
                  t.elementHovered || xe(e)
              }))
          },
          [GM]: {
              types: "mousemove mouseout scroll",
              handler: ({
                  store: e,
                  element: t,
                  eventConfig: r,
                  nativeEvent: n,
                  eventStateKey: i
              }, o = {
                  clientX: 0,
                  clientY: 0,
                  pageX: 0,
                  pageY: 0
              }) => {
                  let {
                      basedOn: a,
                      selectedAxis: s,
                      continuousParameterGroupId: u,
                      reverse: l,
                      restingState: g = 0
                  } = r, {
                      clientX: p = o.clientX,
                      clientY: d = o.clientY,
                      pageX: E = o.pageX,
                      pageY: I = o.pageY
                  } = n, v = s === "X_AXIS", S = n.type === "mouseout", y = g / 100, w = u, O = !1;
                  switch (a) {
                      case He.VIEWPORT: {
                          y = v ? Math.min(p, window.innerWidth) / window.innerWidth : Math.min(d, window.innerHeight) / window.innerHeight;
                          break
                      }
                      case He.PAGE: {
                          let {
                              scrollLeft: C,
                              scrollTop: R,
                              scrollWidth: x,
                              scrollHeight: X
                          } = vr();
                          y = v ? Math.min(C + E, x) / x : Math.min(R + I, X) / X;
                          break
                      }
                      case He.ELEMENT:
                      default: {
                          w = Oh(i, u);
                          let C = n.type.indexOf("mouse") === 0;
                          if (C && je({
                                  element: t,
                                  nativeEvent: n
                              }) !== !0) break;
                          let R = t.getBoundingClientRect(),
                              {
                                  left: x,
                                  top: X,
                                  width: U,
                                  height: B
                              } = R;
                          if (!C && !JM({
                                  left: p,
                                  top: d
                              }, R)) break;
                          O = !0, y = v ? (p - x) / U : (d - X) / B;
                          break
                      }
                  }
                  return S && (y > 1 - Ph || y < Ph) && (y = Math.round(y)), (a !== He.ELEMENT || O || O !== o.elementHovered) && (y = l ? 1 - y : y, e.dispatch(Vt(w, y))), {
                      elementHovered: O,
                      clientX: p,
                      clientY: d,
                      pageX: E,
                      pageY: I
                  }
              }
          },
          [WM]: {
              types: Wo,
              handler: ({
                  store: e,
                  eventConfig: t
              }) => {
                  let {
                      continuousParameterGroupId: r,
                      reverse: n
                  } = t, {
                      scrollTop: i,
                      scrollHeight: o,
                      clientHeight: a
                  } = vr(), s = i / (o - a);
                  s = n ? 1 - s : s, e.dispatch(Vt(r, s))
              }
          },
          [BM]: {
              types: Wo,
              handler: ({
                  element: e,
                  store: t,
                  eventConfig: r,
                  eventStateKey: n
              }, i = {
                  scrollPercent: 0
              }) => {
                  let {
                      scrollLeft: o,
                      scrollTop: a,
                      scrollWidth: s,
                      scrollHeight: u,
                      clientHeight: l
                  } = vr(), {
                      basedOn: g,
                      selectedAxis: p,
                      continuousParameterGroupId: d,
                      startsEntering: E,
                      startsExiting: I,
                      addEndOffset: v,
                      addStartOffset: S,
                      addOffsetValue: y = 0,
                      endOffsetValue: w = 0
                  } = r, O = p === "X_AXIS";
                  if (g === He.VIEWPORT) {
                      let C = O ? o / s : a / u;
                      return C !== i.scrollPercent && t.dispatch(Vt(d, C)), {
                          scrollPercent: C
                      }
                  } else {
                      let C = Oh(n, d),
                          R = e.getBoundingClientRect(),
                          x = (S ? y : 0) / 100,
                          X = (v ? w : 0) / 100;
                      x = E ? x : 1 - x, X = I ? X : 1 - X;
                      let U = R.top + Math.min(R.height * x, l),
                          W = R.top + R.height * X - U,
                          Q = Math.min(l + W, u),
                          T = Math.min(Math.max(0, l - U), Q) / Q;
                      return T !== i.scrollPercent && t.dispatch(Vt(C, T)), {
                          scrollPercent: T
                      }
                  }
              }
          },
          [Xh]: Lh,
          [VM]: Lh,
          [qh]: {
              ...zo,
              handler: Rh((e, t) => {
                  t.scrollingDown && xe(e)
              })
          },
          [UM]: {
              ...zo,
              handler: Rh((e, t) => {
                  t.scrollingDown || xe(e)
              })
          },
          [Gh]: {
              types: "readystatechange IX2_PAGE_UPDATE",
              handler: qe(_r, eD(xe))
          },
          [Vh]: {
              types: "readystatechange IX2_PAGE_UPDATE",
              handler: qe(_r, tD(xe))
          }
      }
  });
  var lE = {};
  Ae(lE, {
      observeRequests: () => ID,
      startActionGroup: () => Tr,
      startEngine: () => Mn,
      stopActionGroup: () => Bt,
      stopAllActionGroups: () => sE,
      stopEngine: () => Dn
  });

  function ID(e) {
      gt({
          store: e,
          select: ({
              ixRequest: t
          }) => t.preview,
          onChange: AD
      }), gt({
          store: e,
          select: ({
              ixRequest: t
          }) => t.playback,
          onChange: SD
      }), gt({
          store: e,
          select: ({
              ixRequest: t
          }) => t.stop,
          onChange: OD
      }), gt({
          store: e,
          select: ({
              ixRequest: t
          }) => t.clear,
          onChange: wD
      })
  }

  function TD(e) {
      gt({
          store: e,
          select: ({
              ixSession: t
          }) => t.mediaQueryKey,
          onChange: () => {
              Dn(e), nE({
                  store: e,
                  elementApi: Te
              }), Mn({
                  store: e,
                  allowEvents: !0
              }), iE()
          }
      })
  }

  function bD(e, t) {
      let r = gt({
          store: e,
          select: ({
              ixSession: n
          }) => n.tick,
          onChange: n => {
              t(n), r()
          }
      })
  }

  function AD({
      rawData: e,
      defer: t
  }, r) {
      let n = () => {
          Mn({
              store: r,
              rawData: e,
              allowEvents: !0
          }), iE()
      };
      t ? setTimeout(n, 0) : n()
  }

  function iE() {
      document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"))
  }

  function SD(e, t) {
      let {
          actionTypeId: r,
          actionListId: n,
          actionItemId: i,
          eventId: o,
          allowEvents: a,
          immediate: s,
          testManual: u,
          verbose: l = !0
      } = e, {
          rawData: g
      } = e;
      if (n && i && g && s) {
          let p = g.actionLists[n];
          p && (g = lD({
              actionList: p,
              actionItemId: i,
              rawData: g
          }))
      }
      if (Mn({
              store: t,
              rawData: g,
              allowEvents: a,
              testManual: u
          }), n && r === Se.GENERAL_START_ACTION || jo(r)) {
          Bt({
              store: t,
              actionListId: n
          }), aE({
              store: t,
              actionListId: n,
              eventId: o
          });
          let p = Tr({
              store: t,
              eventId: o,
              actionListId: n,
              immediate: s,
              verbose: l
          });
          l && p && t.dispatch(Ut({
              actionListId: n,
              isPlaying: !s
          }))
      }
  }

  function OD({
      actionListId: e
  }, t) {
      e ? Bt({
          store: t,
          actionListId: e
      }) : sE({
          store: t
      }), Dn(t)
  }

  function wD(e, t) {
      Dn(t), nE({
          store: t,
          elementApi: Te
      })
  }

  function Mn({
      store: e,
      rawData: t,
      allowEvents: r,
      testManual: n
  }) {
      let {
          ixSession: i
      } = e.getState();
      t && e.dispatch(So(t)), i.active || (e.dispatch(Oo({
          hasBoundaryNodes: !!document.querySelector(Cn),
          reducedMotion: document.body.hasAttribute("data-wf-ix-vacation") && window.matchMedia("(prefers-reduced-motion)").matches
      })), r && (ND(e), xD(), e.getState().ixSession.hasDefinedMediaQueries && TD(e)), e.dispatch(wo()), RD(e, n))
  }

  function xD() {
      let {
          documentElement: e
      } = document;
      e.className.indexOf(jh) === -1 && (e.className += ` ${jh}`)
  }

  function RD(e, t) {
      let r = n => {
          let {
              ixSession: i,
              ixParameters: o
          } = e.getState();
          i.active && (e.dispatch(mn(n, o)), t ? bD(e, r) : requestAnimationFrame(r))
      };
      r(window.performance.now())
  }

  function Dn(e) {
      let {
          ixSession: t
      } = e.getState();
      if (t.active) {
          let {
              eventListeners: r
          } = t;
          r.forEach(CD), gD(), e.dispatch(xo())
      }
  }

  function CD({
      target: e,
      listenerParams: t
  }) {
      e.removeEventListener.apply(e, t)
  }

  function LD({
      store: e,
      eventStateKey: t,
      eventTarget: r,
      eventId: n,
      eventConfig: i,
      actionListId: o,
      parameterGroup: a,
      smoothing: s,
      restingValue: u
  }) {
      let {
          ixData: l,
          ixSession: g
      } = e.getState(), {
          events: p
      } = l, d = p[n], {
          eventTypeId: E
      } = d, I = {}, v = {}, S = [], {
          continuousActionGroups: y
      } = a, {
          id: w
      } = a;
      fD(E, i) && (w = dD(t, w));
      let O = g.hasBoundaryNodes && r ? mr(r, Cn) : null;
      y.forEach(C => {
          let {
              keyframe: R,
              actionItems: x
          } = C;
          x.forEach(X => {
              let {
                  actionTypeId: U
              } = X, {
                  target: B
              } = X.config;
              if (!B) return;
              let W = B.boundaryMode ? O : null,
                  Q = hD(B) + $o + U;
              if (v[Q] = PD(v[Q], R, X), !I[Q]) {
                  I[Q] = !0;
                  let {
                      config: N
                  } = X;
                  Ln({
                      config: N,
                      event: d,
                      eventTarget: r,
                      elementRoot: W,
                      elementApi: Te
                  }).forEach(T => {
                      S.push({
                          element: T,
                          key: Q
                      })
                  })
              }
          })
      }), S.forEach(({
          element: C,
          key: R
      }) => {
          let x = v[R],
              X = (0, Je.default)(x, "[0].actionItems[0]", {}),
              {
                  actionTypeId: U
              } = X,
              B = Nn(U) ? Qo(U)(C, X) : null,
              W = Yo({
                  element: C,
                  actionItem: X,
                  elementApi: Te
              }, B);
          Zo({
              store: e,
              element: C,
              eventId: n,
              actionListId: o,
              actionItem: X,
              destination: W,
              continuous: !0,
              parameterId: w,
              actionGroups: x,
              smoothing: s,
              restingValue: u,
              pluginInstance: B
          })
      })
  }

  function PD(e = [], t, r) {
      let n = [...e],
          i;
      return n.some((o, a) => o.keyframe === t ? (i = a, !0) : !1), i == null && (i = n.length, n.push({
          keyframe: t,
          actionItems: []
      })), n[i].actionItems.push(r), n
  }

  function ND(e) {
      let {
          ixData: t
      } = e.getState(), {
          eventTypeMap: r
      } = t;
      oE(e), (0, kt.default)(r, (i, o) => {
          let a = zh[o];
          if (!a) {
              console.warn(`IX2 event type not configured: ${o}`);
              return
          }
          GD({
              logic: a,
              store: e,
              events: i
          })
      });
      let {
          ixSession: n
      } = e.getState();
      n.eventListeners.length && DD(e)
  }

  function DD(e) {
      let t = () => {
          oE(e)
      };
      MD.forEach(r => {
          window.addEventListener(r, t), e.dispatch(yn(window, [r, t]))
      }), t()
  }

  function oE(e) {
      let {
          ixSession: t,
          ixData: r
      } = e.getState(), n = window.innerWidth;
      if (n !== t.viewportWidth) {
          let {
              mediaQueries: i
          } = r;
          e.dispatch(No({
              width: n,
              mediaQueries: i
          }))
      }
  }

  function GD({
      logic: e,
      store: t,
      events: r
  }) {
      VD(r);
      let {
          types: n,
          handler: i
      } = e, {
          ixData: o
      } = t.getState(), {
          actionLists: a
      } = o, s = FD(r, XD);
      if (!(0, Qh.default)(s)) return;
      (0, kt.default)(s, (p, d) => {
          let E = r[d],
              {
                  action: I,
                  id: v,
                  mediaQueries: S = o.mediaQueryKeys
              } = E,
              {
                  actionListId: y
              } = I.config;
          ED(S, o.mediaQueryKeys) || t.dispatch(Mo()), I.actionTypeId === Se.GENERAL_CONTINUOUS_ACTION && (Array.isArray(E.config) ? E.config : [E.config]).forEach(O => {
              let {
                  continuousParameterGroupId: C
              } = O, R = (0, Je.default)(a, `${y}.continuousParameterGroups`, []), x = (0, Yh.default)(R, ({
                  id: B
              }) => B === C), X = (O.smoothing || 0) / 100, U = (O.restingState || 0) / 100;
              x && p.forEach((B, W) => {
                  let Q = v + $o + W;
                  LD({
                      store: t,
                      eventStateKey: Q,
                      eventTarget: B,
                      eventId: v,
                      eventConfig: O,
                      actionListId: y,
                      parameterGroup: x,
                      smoothing: X,
                      restingValue: U
                  })
              })
          }), (I.actionTypeId === Se.GENERAL_START_ACTION || jo(I.actionTypeId)) && aE({
              store: t,
              actionListId: y,
              eventId: v
          })
      });
      let u = p => {
              let {
                  ixSession: d
              } = t.getState();
              qD(s, (E, I, v) => {
                  let S = r[I],
                      y = d.eventState[v],
                      {
                          action: w,
                          mediaQueries: O = o.mediaQueryKeys
                      } = S;
                  if (!Pn(O, d.mediaQueryKey)) return;
                  let C = (R = {}) => {
                      let x = i({
                          store: t,
                          element: E,
                          event: S,
                          eventConfig: R,
                          nativeEvent: p,
                          eventStateKey: v
                      }, y);
                      yD(x, y) || t.dispatch(Ro(v, x))
                  };
                  w.actionTypeId === Se.GENERAL_CONTINUOUS_ACTION ? (Array.isArray(S.config) ? S.config : [S.config]).forEach(C) : C()
              })
          },
          l = (0, tE.default)(u, _D),
          g = ({
              target: p = document,
              types: d,
              throttle: E
          }) => {
              d.split(" ").filter(Boolean).forEach(I => {
                  let v = E ? l : u;
                  p.addEventListener(I, v), t.dispatch(yn(p, [I, v]))
              })
          };
      Array.isArray(n) ? n.forEach(g) : typeof n == "string" && g(e)
  }

  function VD(e) {
      if (!vD) return;
      let t = {},
          r = "";
      for (let n in e) {
          let {
              eventTypeId: i,
              target: o
          } = e[n], a = Fo(o);
          t[a] || (i === De.MOUSE_CLICK || i === De.MOUSE_SECOND_CLICK) && (t[a] = !0, r += a + "{cursor: pointer;touch-action: manipulation;}")
      }
      if (r) {
          let n = document.createElement("style");
          n.textContent = r, document.body.appendChild(n)
      }
  }

  function aE({
      store: e,
      actionListId: t,
      eventId: r
  }) {
      let {
          ixData: n,
          ixSession: i
      } = e.getState(), {
          actionLists: o,
          events: a
      } = n, s = a[r], u = o[t];
      if (u && u.useFirstGroupAsInitialState) {
          let l = (0, Je.default)(u, "actionItemGroups[0].actionItems", []),
              g = (0, Je.default)(s, "mediaQueries", n.mediaQueryKeys);
          if (!Pn(g, i.mediaQueryKey)) return;
          l.forEach(p => {
              let {
                  config: d,
                  actionTypeId: E
              } = p, I = d?.target?.useEventTarget === !0 && d?.target?.objectId == null ? {
                  target: s.target,
                  targets: s.targets
              } : d, v = Ln({
                  config: I,
                  event: s,
                  elementApi: Te
              }), S = Nn(E);
              v.forEach(y => {
                  let w = S ? Qo(E)(y, p) : null;
                  Zo({
                      destination: Yo({
                          element: y,
                          actionItem: p,
                          elementApi: Te
                      }, w),
                      immediate: !0,
                      store: e,
                      element: y,
                      eventId: r,
                      actionItem: p,
                      actionListId: t,
                      pluginInstance: w
                  })
              })
          })
      }
  }

  function sE({
      store: e
  }) {
      let {
          ixInstances: t
      } = e.getState();
      (0, kt.default)(t, r => {
          if (!r.continuous) {
              let {
                  actionListId: n,
                  verbose: i
              } = r;
              Jo(r, e), i && e.dispatch(Ut({
                  actionListId: n,
                  isPlaying: !1
              }))
          }
      })
  }

  function Bt({
      store: e,
      eventId: t,
      eventTarget: r,
      eventStateKey: n,
      actionListId: i
  }) {
      let {
          ixInstances: o,
          ixSession: a
      } = e.getState(), s = a.hasBoundaryNodes && r ? mr(r, Cn) : null;
      (0, kt.default)(o, u => {
          let l = (0, Je.default)(u, "actionItem.config.target.boundaryMode"),
              g = n ? u.eventStateKey === n : !0;
          if (u.actionListId === i && u.eventId === t && g) {
              if (s && l && !qo(s, u.element)) return;
              Jo(u, e), u.verbose && e.dispatch(Ut({
                  actionListId: i,
                  isPlaying: !1
              }))
          }
      })
  }

  function Tr({
      store: e,
      eventId: t,
      eventTarget: r,
      eventStateKey: n,
      actionListId: i,
      groupIndex: o = 0,
      immediate: a,
      verbose: s
  }) {
      let {
          ixData: u,
          ixSession: l
      } = e.getState(), {
          events: g
      } = u, p = g[t] || {}, {
          mediaQueries: d = u.mediaQueryKeys
      } = p, E = (0, Je.default)(u, `actionLists.${i}`, {}), {
          actionItemGroups: I,
          useFirstGroupAsInitialState: v
      } = E;
      if (!I || !I.length) return !1;
      o >= I.length && (0, Je.default)(p, "config.loop") && (o = 0), o === 0 && v && o++;
      let y = (o === 0 || o === 1 && v) && jo(p.action?.actionTypeId) ? p.config.delay : void 0,
          w = (0, Je.default)(I, [o, "actionItems"], []);
      if (!w.length || !Pn(d, l.mediaQueryKey)) return !1;
      let O = l.hasBoundaryNodes && r ? mr(r, Cn) : null,
          C = sD(w),
          R = !1;
      return w.forEach((x, X) => {
          let {
              config: U,
              actionTypeId: B
          } = x, W = Nn(B), {
              target: Q
          } = U;
          if (!Q) return;
          let N = Q.boundaryMode ? O : null;
          Ln({
              config: U,
              event: p,
              eventTarget: r,
              elementRoot: N,
              elementApi: Te
          }).forEach((L, V) => {
              let q = W ? Qo(B)(L, x) : null,
                  Z = W ? mD(B)(L, x) : null;
              R = !0;
              let Y = C === X && V === 0,
                  P = uD({
                      element: L,
                      actionItem: x
                  }),
                  G = Yo({
                      element: L,
                      actionItem: x,
                      elementApi: Te
                  }, q);
              Zo({
                  store: e,
                  element: L,
                  actionItem: x,
                  eventId: t,
                  eventTarget: r,
                  eventStateKey: n,
                  actionListId: i,
                  groupIndex: o,
                  isCarrier: Y,
                  computedStyle: P,
                  destination: G,
                  immediate: a,
                  verbose: s,
                  pluginInstance: q,
                  pluginDuration: Z,
                  instanceDelay: y
              })
          })
      }), R
  }

  function Zo(e) {
      let {
          store: t,
          computedStyle: r,
          ...n
      } = e, {
          element: i,
          actionItem: o,
          immediate: a,
          pluginInstance: s,
          continuous: u,
          restingValue: l,
          eventId: g
      } = n, p = !u, d = oD(), {
          ixElements: E,
          ixSession: I,
          ixData: v
      } = t.getState(), S = iD(E, i), {
          refState: y
      } = E[S] || {}, w = Xo(i), O = I.reducedMotion && di[o.actionTypeId], C;
      if (O && u) switch (v.events[g]?.eventTypeId) {
          case De.MOUSE_MOVE:
          case De.MOUSE_MOVE_IN_VIEWPORT:
              C = l;
              break;
          default:
              C = .5;
              break
      }
      let R = cD(i, y, r, o, Te, s);
      if (t.dispatch(Co({
              instanceId: d,
              elementId: S,
              origin: R,
              refType: w,
              skipMotion: O,
              skipToValue: C,
              ...n
          })), uE(document.body, "ix2-animation-started", d), a) {
          UD(t, d);
          return
      }
      gt({
          store: t,
          select: ({
              ixInstances: x
          }) => x[d],
          onChange: cE
      }), p && t.dispatch(vn(d, I.tick))
  }

  function Jo(e, t) {
      uE(document.body, "ix2-animation-stopping", {
          instanceId: e.id,
          state: t.getState()
      });
      let {
          elementId: r,
          actionItem: n
      } = e, {
          ixElements: i
      } = t.getState(), {
          ref: o,
          refType: a
      } = i[r] || {};
      a === rE && pD(o, n, Te), t.dispatch(Lo(e.id))
  }

  function uE(e, t, r) {
      let n = document.createEvent("CustomEvent");
      n.initCustomEvent(t, !0, !0, r), e.dispatchEvent(n)
  }

  function UD(e, t) {
      let {
          ixParameters: r
      } = e.getState();
      e.dispatch(vn(t, 0)), e.dispatch(mn(performance.now(), r));
      let {
          ixInstances: n
      } = e.getState();
      cE(n[t], e)
  }

  function cE(e, t) {
      let {
          active: r,
          continuous: n,
          complete: i,
          elementId: o,
          actionItem: a,
          actionTypeId: s,
          renderType: u,
          current: l,
          groupIndex: g,
          eventId: p,
          eventTarget: d,
          eventStateKey: E,
          actionListId: I,
          isCarrier: v,
          styleProp: S,
          verbose: y,
          pluginInstance: w
      } = e, {
          ixData: O,
          ixSession: C
      } = t.getState(), {
          events: R
      } = O, x = R && R[p] ? R[p] : {}, {
          mediaQueries: X = O.mediaQueryKeys
      } = x;
      if (Pn(X, C.mediaQueryKey) && (n || r || i)) {
          if (l || u === nD && i) {
              t.dispatch(Po(o, s, l, a));
              let {
                  ixElements: U
              } = t.getState(), {
                  ref: B,
                  refType: W,
                  refState: Q
              } = U[o] || {}, N = Q && Q[s];
              (W === rE || Nn(s)) && aD(B, Q, N, p, a, S, Te, u, w)
          }
          if (i) {
              if (v) {
                  let U = Tr({
                      store: t,
                      eventId: p,
                      eventTarget: d,
                      eventStateKey: E,
                      actionListId: I,
                      groupIndex: g + 1,
                      verbose: y
                  });
                  y && !U && t.dispatch(Ut({
                      actionListId: I,
                      isPlaying: !1
                  }))
              }
              Jo(e, t)
          }
      }
  }
  var Yh, Je, Qh, Zh, Jh, eE, kt, tE, Rn, rD, jo, $o, Cn, rE, nD, jh, Ln, iD, Yo, gt, oD, aD, nE, sD, uD, cD, lD, fD, dD, Pn, pD, gD, hD, ED, yD, Nn, Qo, mD, $h, vD, _D, MD, FD, qD, XD, Ko = ce(() => {
      "use strict";
      Yh = ie(Ui()), Je = ie(Jr()), Qh = ie(bp()), Zh = ie($p()), Jh = ie(Qp()), eE = ie(Jp()), kt = ie(og()), tE = ie(dg());
      Oe();
      Rn = ie(pt());
      _n();
      mg();
      Kh();
      rD = Object.keys(Lr), jo = e => rD.includes(e), {
          COLON_DELIMITER: $o,
          BOUNDARY_SELECTOR: Cn,
          HTML_ELEMENT: rE,
          RENDER_GENERAL: nD,
          W_MOD_IX: jh
      } = me, {
          getAffectedElements: Ln,
          getElementId: iD,
          getDestinationValues: Yo,
          observeStore: gt,
          getInstanceId: oD,
          renderHTMLElement: aD,
          clearAllStyles: nE,
          getMaxDurationItemIndex: sD,
          getComputedStyle: uD,
          getInstanceOrigin: cD,
          reduceListToGroup: lD,
          shouldNamespaceEventParameter: fD,
          getNamespacedParameterId: dD,
          shouldAllowMediaQuery: Pn,
          cleanupHTMLElement: pD,
          clearObjectCache: gD,
          stringifyTarget: hD,
          mediaQueriesEqual: ED,
          shallowEqual: yD
      } = Rn.IX2VanillaUtils, {
          isPluginType: Nn,
          createPluginInstance: Qo,
          getPluginDuration: mD
      } = Rn.IX2VanillaPlugins, $h = navigator.userAgent, vD = $h.match(/iPad/i) || $h.match(/iPhone/), _D = 12;
      MD = ["resize", "orientationchange"];
      FD = (e, t) => (0, Zh.default)((0, eE.default)(e, t), Jh.default), qD = (e, t) => {
          (0, kt.default)(e, (r, n) => {
              r.forEach((i, o) => {
                  let a = n + $o + o;
                  t(i, n, a)
              })
          })
      }, XD = e => {
          let t = {
              target: e.target,
              targets: e.targets
          };
          return Ln({
              config: t,
              elementApi: Te
          })
      }
  });
  var pE = f(ta => {
      "use strict";
      Object.defineProperty(ta, "__esModule", {
          value: !0
      });

      function BD(e, t) {
          for (var r in t) Object.defineProperty(e, r, {
              enumerable: !0,
              get: t[r]
          })
      }
      BD(ta, {
          actions: function() {
              return WD
          },
          destroy: function() {
              return dE
          },
          init: function() {
              return $D
          },
          setEnv: function() {
              return jD
          },
          store: function() {
              return Fn
          }
      });
      var kD = ci(),
          HD = zD((ip(), Ve(np))),
          ea = (Ko(), Ve(lE)),
          WD = KD((_n(), Ve(gg)));

      function zD(e) {
          return e && e.__esModule ? e : {
              default: e
          }
      }

      function fE(e) {
          if (typeof WeakMap != "function") return null;
          var t = new WeakMap,
              r = new WeakMap;
          return (fE = function(n) {
              return n ? r : t
          })(e)
      }

      function KD(e, t) {
          if (!t && e && e.__esModule) return e;
          if (e === null || typeof e != "object" && typeof e != "function") return {
              default: e
          };
          var r = fE(t);
          if (r && r.has(e)) return r.get(e);
          var n = {
                  __proto__: null
              },
              i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
              if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
                  var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                  a && (a.get || a.set) ? Object.defineProperty(n, o, a) : n[o] = e[o]
              } return n.default = e, r && r.set(e, n), n
      }
      var Fn = (0, kD.createStore)(HD.default);

      function jD(e) {
          e() && (0, ea.observeRequests)(Fn)
      }

      function $D(e) {
          dE(), (0, ea.startEngine)({
              store: Fn,
              rawData: e,
              allowEvents: !0
          })
      }

      function dE() {
          (0, ea.stopEngine)(Fn)
      }
  });
  var yE = f((jX, EE) => {
      "use strict";
      var gE = Be(),
          hE = pE();
      hE.setEnv(gE.env);
      gE.define("ix2", EE.exports = function() {
          return hE
      })
  });
  var vE = f(($X, mE) => {
      "use strict";
      var Ht = Be();
      Ht.define("links", mE.exports = function(e, t) {
          var r = {},
              n = e(window),
              i, o = Ht.env(),
              a = window.location,
              s = document.createElement("a"),
              u = "w--current",
              l = /index\.(html|php)$/,
              g = /\/$/,
              p, d;
          r.ready = r.design = r.preview = E;

          function E() {
              i = o && Ht.env("design"), d = Ht.env("slug") || a.pathname || "", Ht.scroll.off(v), p = [];
              for (var y = document.links, w = 0; w < y.length; ++w) I(y[w]);
              p.length && (Ht.scroll.on(v), v())
          }

          function I(y) {
              if (!y.getAttribute("hreflang")) {
                  var w = i && y.getAttribute("href-disabled") || y.getAttribute("href");
                  if (s.href = w, !(w.indexOf(":") >= 0)) {
                      var O = e(y);
                      if (s.hash.length > 1 && s.host + s.pathname === a.host + a.pathname) {
                          if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash)) return;
                          var C = e(s.hash);
                          C.length && p.push({
                              link: O,
                              sec: C,
                              active: !1
                          });
                          return
                      }
                      if (!(w === "#" || w === "")) {
                          var R = s.href === a.href || w === d || l.test(w) && g.test(d);
                          S(O, u, R)
                      }
                  }
              }
          }

          function v() {
              var y = n.scrollTop(),
                  w = n.height();
              t.each(p, function(O) {
                  if (!O.link.attr("hreflang")) {
                      var C = O.link,
                          R = O.sec,
                          x = R.offset().top,
                          X = R.outerHeight(),
                          U = w * .5,
                          B = R.is(":visible") && x + X - U >= y && x + U <= y + w;
                      O.active !== B && (O.active = B, S(C, u, B))
                  }
              })
          }

          function S(y, w, O) {
              var C = y.hasClass(w);
              O && C || !O && !C || (O ? y.addClass(w) : y.removeClass(w))
          }
          return r
      })
  });
  var IE = f((YX, _E) => {
      "use strict";
      var qn = Be();
      qn.define("scroll", _E.exports = function(e) {
          var t = {
                  WF_CLICK_EMPTY: "click.wf-empty-link",
                  WF_CLICK_SCROLL: "click.wf-scroll"
              },
              r = window.location,
              n = I() ? null : window.history,
              i = e(window),
              o = e(document),
              a = e(document.body),
              s = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(N) {
                  window.setTimeout(N, 15)
              },
              u = qn.env("editor") ? ".w-editor-body" : "body",
              l = "header, " + u + " > .header, " + u + " > .w-nav:not([data-no-scroll])",
              g = 'a[href="#"]',
              p = 'a[href*="#"]:not(.w-tab-link):not(' + g + ")",
              d = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
              E = document.createElement("style");
          E.appendChild(document.createTextNode(d));

          function I() {
              try {
                  return !!window.frameElement
              } catch {
                  return !0
              }
          }
          var v = /^#[a-zA-Z0-9][\w:.-]*$/;

          function S(N) {
              return v.test(N.hash) && N.host + N.pathname === r.host + r.pathname
          }
          let y = typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)");

          function w() {
              return document.body.getAttribute("data-wf-scroll-motion") === "none" || y.matches
          }

          function O(N, T) {
              var L;
              switch (T) {
                  case "add":
                      L = N.attr("tabindex"), L ? N.attr("data-wf-tabindex-swap", L) : N.attr("tabindex", "-1");
                      break;
                  case "remove":
                      L = N.attr("data-wf-tabindex-swap"), L ? (N.attr("tabindex", L), N.removeAttr("data-wf-tabindex-swap")) : N.removeAttr("tabindex");
                      break
              }
              N.toggleClass("wf-force-outline-none", T === "add")
          }

          function C(N) {
              var T = N.currentTarget;
              if (!(qn.env("design") || window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(T.className))) {
                  var L = S(T) ? T.hash : "";
                  if (L !== "") {
                      var V = e(L);
                      V.length && (N && (N.preventDefault(), N.stopPropagation()), R(L, N), window.setTimeout(function() {
                          x(V, function() {
                              O(V, "add"), V.get(0).focus({
                                  preventScroll: !0
                              }), O(V, "remove")
                          })
                      }, N ? 0 : 300))
                  }
              }
          }

          function R(N) {
              if (r.hash !== N && n && n.pushState && !(qn.env.chrome && r.protocol === "file:")) {
                  var T = n.state && n.state.hash;
                  T !== N && n.pushState({
                      hash: N
                  }, "", N)
              }
          }

          function x(N, T) {
              var L = i.scrollTop(),
                  V = X(N);
              if (L !== V) {
                  var q = U(N, L, V),
                      Z = Date.now(),
                      Y = function() {
                          var P = Date.now() - Z;
                          window.scroll(0, B(L, V, P, q)), P <= q ? s(Y) : typeof T == "function" && T()
                      };
                  s(Y)
              }
          }

          function X(N) {
              var T = e(l),
                  L = T.css("position") === "fixed" ? T.outerHeight() : 0,
                  V = N.offset().top - L;
              if (N.data("scroll") === "mid") {
                  var q = i.height() - L,
                      Z = N.outerHeight();
                  Z < q && (V -= Math.round((q - Z) / 2))
              }
              return V
          }

          function U(N, T, L) {
              if (w()) return 0;
              var V = 1;
              return a.add(N).each(function(q, Z) {
                  var Y = parseFloat(Z.getAttribute("data-scroll-time"));
                  !isNaN(Y) && Y >= 0 && (V = Y)
              }), (472.143 * Math.log(Math.abs(T - L) + 125) - 2e3) * V
          }

          function B(N, T, L, V) {
              return L > V ? T : N + (T - N) * W(L / V)
          }

          function W(N) {
              return N < .5 ? 4 * N * N * N : (N - 1) * (2 * N - 2) * (2 * N - 2) + 1
          }

          function Q() {
              var {
                  WF_CLICK_EMPTY: N,
                  WF_CLICK_SCROLL: T
              } = t;
              o.on(T, p, C), o.on(N, g, function(L) {
                  L.preventDefault()
              }), document.head.insertBefore(E, document.head.firstChild)
          }
          return {
              ready: Q
          }
      })
  });
  var bE = f((QX, TE) => {
      "use strict";
      var YD = Be();
      YD.define("touch", TE.exports = function(e) {
          var t = {},
              r = window.getSelection;
          e.event.special.tap = {
              bindType: "click",
              delegateType: "click"
          }, t.init = function(o) {
              return o = typeof o == "string" ? e(o).get(0) : o, o ? new n(o) : null
          };

          function n(o) {
              var a = !1,
                  s = !1,
                  u = Math.min(Math.round(window.innerWidth * .04), 40),
                  l, g;
              o.addEventListener("touchstart", p, !1), o.addEventListener("touchmove", d, !1), o.addEventListener("touchend", E, !1), o.addEventListener("touchcancel", I, !1), o.addEventListener("mousedown", p, !1), o.addEventListener("mousemove", d, !1), o.addEventListener("mouseup", E, !1), o.addEventListener("mouseout", I, !1);

              function p(S) {
                  var y = S.touches;
                  y && y.length > 1 || (a = !0, y ? (s = !0, l = y[0].clientX) : l = S.clientX, g = l)
              }

              function d(S) {
                  if (a) {
                      if (s && S.type === "mousemove") {
                          S.preventDefault(), S.stopPropagation();
                          return
                      }
                      var y = S.touches,
                          w = y ? y[0].clientX : S.clientX,
                          O = w - g;
                      g = w, Math.abs(O) > u && r && String(r()) === "" && (i("swipe", S, {
                          direction: O > 0 ? "right" : "left"
                      }), I())
                  }
              }

              function E(S) {
                  if (a && (a = !1, s && S.type === "mouseup")) {
                      S.preventDefault(), S.stopPropagation(), s = !1;
                      return
                  }
              }

              function I() {
                  a = !1
              }

              function v() {
                  o.removeEventListener("touchstart", p, !1), o.removeEventListener("touchmove", d, !1), o.removeEventListener("touchend", E, !1), o.removeEventListener("touchcancel", I, !1), o.removeEventListener("mousedown", p, !1), o.removeEventListener("mousemove", d, !1), o.removeEventListener("mouseup", E, !1), o.removeEventListener("mouseout", I, !1), o = null
              }
              this.destroy = v
          }

          function i(o, a, s) {
              var u = e.Event(o, {
                  originalEvent: a
              });
              e(a.target).trigger(u, s)
          }
          return t.instance = t.init(document), t
      })
  });
  var AE = f(ra => {
      "use strict";
      Object.defineProperty(ra, "__esModule", {
          value: !0
      });
      Object.defineProperty(ra, "default", {
          enumerable: !0,
          get: function() {
              return QD
          }
      });

      function QD(e, t, r, n, i, o, a, s, u, l, g, p, d) {
          return function(E) {
              e(E);
              var I = E.form,
                  v = {
                      name: I.attr("data-name") || I.attr("name") || "Untitled Form",
                      pageId: I.attr("data-wf-page-id") || "",
                      elementId: I.attr("data-wf-element-id") || "",
                      source: t.href,
                      test: r.env(),
                      fields: {},
                      fileUploads: {},
                      dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(I.html()),
                      trackingCookies: n()
                  };
              let S = I.attr("data-wf-flow");
              S && (v.wfFlow = S), i(E);
              var y = o(I, v.fields);
              if (y) return a(y);
              if (v.fileUploads = s(I), u(E), !l) {
                  g(E);
                  return
              }
              p.ajax({
                  url: d,
                  type: "POST",
                  data: v,
                  dataType: "json",
                  crossDomain: !0
              }).done(function(w) {
                  w && w.code === 200 && (E.success = !0), g(E)
              }).fail(function() {
                  g(E)
              })
          }
      }
  });
  var OE = f((JX, SE) => {
      "use strict";
      var Xn = Be();
      Xn.define("forms", SE.exports = function(e, t) {
          var r = {},
              n = e(document),
              i, o = window.location,
              a = window.XDomainRequest && !window.atob,
              s = ".w-form",
              u, l = /e(-)?mail/i,
              g = /^\S+@\S+$/,
              p = window.alert,
              d = Xn.env(),
              E, I, v, S = /list-manage[1-9]?.com/i,
              y = t.debounce(function() {
                  p("Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.")
              }, 100);
          r.ready = r.design = r.preview = function() {
              w(), !d && !E && C()
          };

          function w() {
              u = e("html").attr("data-wf-site"), I = "https://webflow.com/api/v1/form/" + u, a && I.indexOf("https://webflow.com") >= 0 && (I = I.replace("https://webflow.com", "https://formdata.webflow.com")), v = `${I}/signFile`, i = e(s + " form"), i.length && i.each(O)
          }

          function O(P, G) {
              var H = e(G),
                  D = e.data(G, s);
              D || (D = e.data(G, s, {
                  form: H
              })), R(D);
              var M = H.closest("div.w-form");
              D.done = M.find("> .w-form-done"), D.fail = M.find("> .w-form-fail"), D.fileUploads = M.find(".w-file-upload"), D.fileUploads.each(function(ee) {
                  q(ee, D)
              });
              var j = D.form.attr("aria-label") || D.form.attr("data-name") || "Form";
              D.done.attr("aria-label") || D.form.attr("aria-label", j), D.done.attr("tabindex", "-1"), D.done.attr("role", "region"), D.done.attr("aria-label") || D.done.attr("aria-label", j + " success"), D.fail.attr("tabindex", "-1"), D.fail.attr("role", "region"), D.fail.attr("aria-label") || D.fail.attr("aria-label", j + " failure");
              var re = D.action = H.attr("action");
              if (D.handler = null, D.redirect = H.attr("data-redirect"), S.test(re)) {
                  D.handler = T;
                  return
              }
              if (!re) {
                  if (u) {
                      D.handler = (() => {
                          let ee = AE().default;
                          return ee(R, o, Xn, W, V, X, p, U, x, u, L, e, I)
                      })();
                      return
                  }
                  y()
              }
          }

          function C() {
              E = !0, n.on("submit", s + " form", function(ee) {
                  var K = e.data(this, s);
                  K.handler && (K.evt = ee, K.handler(K))
              });
              let P = ".w-checkbox-input",
                  G = ".w-radio-input",
                  H = "w--redirected-checked",
                  D = "w--redirected-focus",
                  M = "w--redirected-focus-visible",
                  j = ":focus-visible, [data-wf-focus-visible]",
                  re = [
                      ["checkbox", P],
                      ["radio", G]
                  ];
              n.on("change", s + ' form input[type="checkbox"]:not(' + P + ")", ee => {
                  e(ee.target).siblings(P).toggleClass(H)
              }), n.on("change", s + ' form input[type="radio"]', ee => {
                  e(`input[name="${ee.target.name}"]:not(${P})`).map((le, ht) => e(ht).siblings(G).removeClass(H));
                  let K = e(ee.target);
                  K.hasClass("w-radio-input") || K.siblings(G).addClass(H)
              }), re.forEach(([ee, K]) => {
                  n.on("focus", s + ` form input[type="${ee}"]:not(` + K + ")", le => {
                      e(le.target).siblings(K).addClass(D), e(le.target).filter(j).siblings(K).addClass(M)
                  }), n.on("blur", s + ` form input[type="${ee}"]:not(` + K + ")", le => {
                      e(le.target).siblings(K).removeClass(`${D} ${M}`)
                  })
              })
          }

          function R(P) {
              var G = P.btn = P.form.find(':input[type="submit"]');
              P.wait = P.btn.attr("data-wait") || null, P.success = !1, G.prop("disabled", !1), P.label && G.val(P.label)
          }

          function x(P) {
              var G = P.btn,
                  H = P.wait;
              G.prop("disabled", !0), H && (P.label = G.val(), G.val(H))
          }

          function X(P, G) {
              var H = null;
              return G = G || {}, P.find(':input:not([type="submit"]):not([type="file"])').each(function(D, M) {
                  var j = e(M),
                      re = j.attr("type"),
                      ee = j.attr("data-name") || j.attr("name") || "Field " + (D + 1);
                  ee = encodeURIComponent(ee);
                  var K = j.val();
                  if (re === "checkbox") K = j.is(":checked");
                  else if (re === "radio") {
                      if (G[ee] === null || typeof G[ee] == "string") return;
                      K = P.find('input[name="' + j.attr("name") + '"]:checked').val() || null
                  }
                  typeof K == "string" && (K = e.trim(K)), G[ee] = K, H = H || Q(j, re, ee, K)
              }), H
          }

          function U(P) {
              var G = {};
              return P.find(':input[type="file"]').each(function(H, D) {
                  var M = e(D),
                      j = M.attr("data-name") || M.attr("name") || "File " + (H + 1),
                      re = M.attr("data-value");
                  typeof re == "string" && (re = e.trim(re)), G[j] = re
              }), G
          }
          let B = {
              _mkto_trk: "marketo"
          };

          function W() {
              return document.cookie.split("; ").reduce(function(G, H) {
                  let D = H.split("="),
                      M = D[0];
                  if (M in B) {
                      let j = B[M],
                          re = D.slice(1).join("=");
                      G[j] = re
                  }
                  return G
              }, {})
          }

          function Q(P, G, H, D) {
              var M = null;
              return G === "password" ? M = "Passwords cannot be submitted." : P.attr("required") ? D ? l.test(P.attr("type")) && (g.test(D) || (M = "Please enter a valid email address for: " + H)) : M = "Please fill out the required field: " + H : H === "g-recaptcha-response" && !D && (M = "Please confirm you\u2019re not a robot."), M
          }

          function N(P) {
              V(P), L(P)
          }

          function T(P) {
              R(P);
              var G = P.form,
                  H = {};
              if (/^https/.test(o.href) && !/^https/.test(P.action)) {
                  G.attr("method", "post");
                  return
              }
              V(P);
              var D = X(G, H);
              if (D) return p(D);
              x(P);
              var M;
              t.each(H, function(K, le) {
                  l.test(le) && (H.EMAIL = K), /^((full[ _-]?)?name)$/i.test(le) && (M = K), /^(first[ _-]?name)$/i.test(le) && (H.FNAME = K), /^(last[ _-]?name)$/i.test(le) && (H.LNAME = K)
              }), M && !H.FNAME && (M = M.split(" "), H.FNAME = M[0], H.LNAME = H.LNAME || M[1]);
              var j = P.action.replace("/post?", "/post-json?") + "&c=?",
                  re = j.indexOf("u=") + 2;
              re = j.substring(re, j.indexOf("&", re));
              var ee = j.indexOf("id=") + 3;
              ee = j.substring(ee, j.indexOf("&", ee)), H["b_" + re + "_" + ee] = "", e.ajax({
                  url: j,
                  data: H,
                  dataType: "jsonp"
              }).done(function(K) {
                  P.success = K.result === "success" || /already/.test(K.msg), P.success || console.info("MailChimp error: " + K.msg), L(P)
              }).fail(function() {
                  L(P)
              })
          }

          function L(P) {
              var G = P.form,
                  H = P.redirect,
                  D = P.success;
              if (D && H) {
                  Xn.location(H);
                  return
              }
              P.done.toggle(D), P.fail.toggle(!D), D ? P.done.focus() : P.fail.focus(), G.toggle(!D), R(P)
          }

          function V(P) {
              P.evt && P.evt.preventDefault(), P.evt = null
          }

          function q(P, G) {
              if (!G.fileUploads || !G.fileUploads[P]) return;
              var H, D = e(G.fileUploads[P]),
                  M = D.find("> .w-file-upload-default"),
                  j = D.find("> .w-file-upload-uploading"),
                  re = D.find("> .w-file-upload-success"),
                  ee = D.find("> .w-file-upload-error"),
                  K = M.find(".w-file-upload-input"),
                  le = M.find(".w-file-upload-label"),
                  ht = le.children(),
                  pe = ee.find(".w-file-upload-error-msg"),
                  et = re.find(".w-file-upload-file"),
                  Wt = re.find(".w-file-remove-link"),
                  zt = et.find(".w-file-upload-file-name"),
                  Kt = pe.attr("data-w-size-error"),
                  Xe = pe.attr("data-w-type-error"),
                  Gn = pe.attr("data-w-generic-error");
              if (d || le.on("click keydown", function(m) {
                      m.type === "keydown" && m.which !== 13 && m.which !== 32 || (m.preventDefault(), K.click())
                  }), le.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"), Wt.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"), d) K.on("click", function(m) {
                  m.preventDefault()
              }), le.on("click", function(m) {
                  m.preventDefault()
              }), ht.on("click", function(m) {
                  m.preventDefault()
              });
              else {
                  Wt.on("click keydown", function(m) {
                      if (m.type === "keydown") {
                          if (m.which !== 13 && m.which !== 32) return;
                          m.preventDefault()
                      }
                      K.removeAttr("data-value"), K.val(""), zt.html(""), M.toggle(!0), re.toggle(!1), le.focus()
                  }), K.on("change", function(m) {
                      H = m.target && m.target.files && m.target.files[0], H && (M.toggle(!1), ee.toggle(!1), j.toggle(!0), j.focus(), zt.text(H.name), b() || x(G), G.fileUploads[P].uploading = !0, Z(H, h))
                  });
                  var br = le.outerHeight();
                  K.height(br), K.width(1)
              }

              function c(m) {
                  var A = m.responseJSON && m.responseJSON.msg,
                      k = Gn;
                  typeof A == "string" && A.indexOf("InvalidFileTypeError") === 0 ? k = Xe : typeof A == "string" && A.indexOf("MaxFileSizeError") === 0 && (k = Kt), pe.text(k), K.removeAttr("data-value"), K.val(""), j.toggle(!1), M.toggle(!0), ee.toggle(!0), ee.focus(), G.fileUploads[P].uploading = !1, b() || R(G)
              }

              function h(m, A) {
                  if (m) return c(m);
                  var k = A.fileName,
                      $ = A.postData,
                      se = A.fileId,
                      F = A.s3Url;
                  K.attr("data-value", se), Y(F, $, H, k, _)
              }

              function _(m) {
                  if (m) return c(m);
                  j.toggle(!1), re.css("display", "inline-block"), re.focus(), G.fileUploads[P].uploading = !1, b() || R(G)
              }

              function b() {
                  var m = G.fileUploads && G.fileUploads.toArray() || [];
                  return m.some(function(A) {
                      return A.uploading
                  })
              }
          }

          function Z(P, G) {
              var H = new URLSearchParams({
                  name: P.name,
                  size: P.size
              });
              e.ajax({
                  type: "GET",
                  url: `${v}?${H}`,
                  crossDomain: !0
              }).done(function(D) {
                  G(null, D)
              }).fail(function(D) {
                  G(D)
              })
          }

          function Y(P, G, H, D, M) {
              var j = new FormData;
              for (var re in G) j.append(re, G[re]);
              j.append("file", H, D), e.ajax({
                  type: "POST",
                  url: P,
                  data: j,
                  processData: !1,
                  contentType: !1
              }).done(function() {
                  M(null)
              }).fail(function(ee) {
                  M(ee)
              })
          }
          return r
      })
  });
  Ea();
  ma();
  _a();
  ba();
  Ca();
  yE();
  vE();
  IE();
  bE();
  OE();
})();

Webflow.require('ix2').init({
  "events": {
      "e": {
          "id": "e",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "MOUSE_OVER",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-2"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "selector": ".menu-item",
              "originalId": "5ef4b770-bdef-31fe-f8ea-c1f950434c25",
              "appliesTo": "CLASS"
          },
          "targets": [{
              "selector": ".menu-item",
              "originalId": "5ef4b770-bdef-31fe-f8ea-c1f950434c25",
              "appliesTo": "CLASS"
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1724247681567
      },
      "e-2": {
          "id": "e-2",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "MOUSE_OUT",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-2",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "selector": ".menu-item",
              "originalId": "5ef4b770-bdef-31fe-f8ea-c1f950434c25",
              "appliesTo": "CLASS"
          },
          "targets": [{
              "selector": ".menu-item",
              "originalId": "5ef4b770-bdef-31fe-f8ea-c1f950434c25",
              "appliesTo": "CLASS"
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1724247681568
      },
      "e-3": {
          "id": "e-3",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "SCROLL_INTO_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-3",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-4"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "selector": ".status-indicator",
              "originalId": "5ef4b770-bdef-31fe-f8ea-c1f950434c1e",
              "appliesTo": "CLASS"
          },
          "targets": [{
              "selector": ".status-indicator",
              "originalId": "5ef4b770-bdef-31fe-f8ea-c1f950434c1e",
              "appliesTo": "CLASS"
          }],
          "config": {
              "loop": true,
              "playInReverse": false,
              "scrollOffsetValue": 0,
              "scrollOffsetUnit": "%",
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1724248263221
      },
      "e-5": {
          "id": "e-5",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "MOUSE_OVER",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-4",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-6"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "selector": ".person-avatar-wrapper",
              "originalId": "5ef4b770-bdef-31fe-f8ea-c1f950434c1c",
              "appliesTo": "CLASS"
          },
          "targets": [{
              "selector": ".person-avatar-wrapper",
              "originalId": "5ef4b770-bdef-31fe-f8ea-c1f950434c1c",
              "appliesTo": "CLASS"
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1724248483135
      },
      "e-6": {
          "id": "e-6",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "MOUSE_OUT",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-5",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-5"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "selector": ".person-avatar-wrapper",
              "originalId": "5ef4b770-bdef-31fe-f8ea-c1f950434c1c",
              "appliesTo": "CLASS"
          },
          "targets": [{
              "selector": ".person-avatar-wrapper",
              "originalId": "5ef4b770-bdef-31fe-f8ea-c1f950434c1c",
              "appliesTo": "CLASS"
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1724248483135
      },
      "e-7": {
          "id": "e-7",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "MOUSE_OVER",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-6",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-8"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "selector": ".primary-button",
              "originalId": "b2499e9e-9e97-96fa-bfa9-1871ea4c386d",
              "appliesTo": "CLASS"
          },
          "targets": [{
              "selector": ".primary-button",
              "originalId": "b2499e9e-9e97-96fa-bfa9-1871ea4c386d",
              "appliesTo": "CLASS"
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1724249522104
      },
      "e-8": {
          "id": "e-8",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "MOUSE_OUT",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-7",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-7"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "selector": ".primary-button",
              "originalId": "b2499e9e-9e97-96fa-bfa9-1871ea4c386d",
              "appliesTo": "CLASS"
          },
          "targets": [{
              "selector": ".primary-button",
              "originalId": "b2499e9e-9e97-96fa-bfa9-1871ea4c386d",
              "appliesTo": "CLASS"
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1724249522104
      },
      "e-9": {
          "id": "e-9",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "MOUSE_OVER",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-8",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-10"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "selector": ".quick-link-block.yellow-link-block",
              "originalId": "66c5d8b35ae804d24cca7f9f|5ad541f0-76cd-b569-6e3a-a7f0f7fc606f",
              "appliesTo": "CLASS"
          },
          "targets": [{
              "selector": ".quick-link-block.yellow-link-block",
              "originalId": "66c5d8b35ae804d24cca7f9f|5ad541f0-76cd-b569-6e3a-a7f0f7fc606f",
              "appliesTo": "CLASS"
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1724253658348
      },
      "e-10": {
          "id": "e-10",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "MOUSE_OUT",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-9",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-9"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "selector": ".quick-link-block.yellow-link-block",
              "originalId": "66c5d8b35ae804d24cca7f9f|5ad541f0-76cd-b569-6e3a-a7f0f7fc606f",
              "appliesTo": "CLASS"
          },
          "targets": [{
              "selector": ".quick-link-block.yellow-link-block",
              "originalId": "66c5d8b35ae804d24cca7f9f|5ad541f0-76cd-b569-6e3a-a7f0f7fc606f",
              "appliesTo": "CLASS"
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1724253658348
      },
      "e-11": {
          "id": "e-11",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "MOUSE_OVER",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-10",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-12"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "selector": ".quick-link-block.purple-link-block",
              "originalId": "66c5d8b35ae804d24cca7f9f|e5ef7c66-5546-c99a-0281-bb4271a9f316",
              "appliesTo": "CLASS"
          },
          "targets": [{
              "selector": ".quick-link-block.purple-link-block",
              "originalId": "66c5d8b35ae804d24cca7f9f|e5ef7c66-5546-c99a-0281-bb4271a9f316",
              "appliesTo": "CLASS"
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1724253978543
      },
      "e-12": {
          "id": "e-12",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "MOUSE_OUT",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-11",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-11"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "selector": ".quick-link-block.purple-link-block",
              "originalId": "66c5d8b35ae804d24cca7f9f|e5ef7c66-5546-c99a-0281-bb4271a9f316",
              "appliesTo": "CLASS"
          },
          "targets": [{
              "selector": ".quick-link-block.purple-link-block",
              "originalId": "66c5d8b35ae804d24cca7f9f|e5ef7c66-5546-c99a-0281-bb4271a9f316",
              "appliesTo": "CLASS"
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1724253978544
      },
      "e-13": {
          "id": "e-13",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "MOUSE_OVER",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-12",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-14"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "selector": ".quick-link-block.green-link-block",
              "originalId": "66c5d8b35ae804d24cca7f9f|708b6cf1-f326-51d7-2ba3-b34bb057ac00",
              "appliesTo": "CLASS"
          },
          "targets": [{
              "selector": ".quick-link-block.green-link-block",
              "originalId": "66c5d8b35ae804d24cca7f9f|708b6cf1-f326-51d7-2ba3-b34bb057ac00",
              "appliesTo": "CLASS"
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1724255454981
      },
      "e-14": {
          "id": "e-14",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "MOUSE_OUT",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-13",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-13"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "selector": ".quick-link-block.green-link-block",
              "originalId": "66c5d8b35ae804d24cca7f9f|708b6cf1-f326-51d7-2ba3-b34bb057ac00",
              "appliesTo": "CLASS"
          },
          "targets": [{
              "selector": ".quick-link-block.green-link-block",
              "originalId": "66c5d8b35ae804d24cca7f9f|708b6cf1-f326-51d7-2ba3-b34bb057ac00",
              "appliesTo": "CLASS"
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1724255454981
      },
      "e-15": {
          "id": "e-15",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "MOUSE_OVER",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-14",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-16"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "selector": ".quick-link-block.blue-link-block",
              "originalId": "66c5d8b35ae804d24cca7f9f|afdaf802-85b6-811e-7985-5082e22f1dc6",
              "appliesTo": "CLASS"
          },
          "targets": [{
              "selector": ".quick-link-block.blue-link-block",
              "originalId": "66c5d8b35ae804d24cca7f9f|afdaf802-85b6-811e-7985-5082e22f1dc6",
              "appliesTo": "CLASS"
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1724255758217
      },
      "e-16": {
          "id": "e-16",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "MOUSE_OUT",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-15",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-15"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "selector": ".quick-link-block.blue-link-block",
              "originalId": "66c5d8b35ae804d24cca7f9f|afdaf802-85b6-811e-7985-5082e22f1dc6",
              "appliesTo": "CLASS"
          },
          "targets": [{
              "selector": ".quick-link-block.blue-link-block",
              "originalId": "66c5d8b35ae804d24cca7f9f|afdaf802-85b6-811e-7985-5082e22f1dc6",
              "appliesTo": "CLASS"
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1724255758217
      },
      "e-17": {
          "id": "e-17",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "MOUSE_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-16",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-18"
              }
          },
          "mediaQueries": ["small", "tiny"],
          "target": {
              "selector": ".mobile-menu-icon-wrapper",
              "originalId": "66c5d8b35ae804d24cca7f9f|9ae0c34a-3d1f-316e-f948-4027fec32ecd",
              "appliesTo": "CLASS"
          },
          "targets": [{
              "selector": ".mobile-menu-icon-wrapper",
              "originalId": "66c5d8b35ae804d24cca7f9f|9ae0c34a-3d1f-316e-f948-4027fec32ecd",
              "appliesTo": "CLASS"
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1724319319460
      },
      "e-18": {
          "id": "e-18",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "MOUSE_SECOND_CLICK",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-17",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-17"
              }
          },
          "mediaQueries": ["small", "tiny"],
          "target": {
              "selector": ".mobile-menu-icon-wrapper",
              "originalId": "66c5d8b35ae804d24cca7f9f|9ae0c34a-3d1f-316e-f948-4027fec32ecd",
              "appliesTo": "CLASS"
          },
          "targets": [{
              "selector": ".mobile-menu-icon-wrapper",
              "originalId": "66c5d8b35ae804d24cca7f9f|9ae0c34a-3d1f-316e-f948-4027fec32ecd",
              "appliesTo": "CLASS"
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1724319319461
      },
      "e-19": {
          "id": "e-19",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "MOUSE_OVER",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-18",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-20"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "selector": ".award-block",
              "originalId": "4b6c113b-2ea4-a5b8-0ebf-f773c6641b50",
              "appliesTo": "CLASS"
          },
          "targets": [{
              "selector": ".award-block",
              "originalId": "4b6c113b-2ea4-a5b8-0ebf-f773c6641b50",
              "appliesTo": "CLASS"
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1724329593423
      },
      "e-20": {
          "id": "e-20",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "MOUSE_OUT",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-19",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-19"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "selector": ".award-block",
              "originalId": "4b6c113b-2ea4-a5b8-0ebf-f773c6641b50",
              "appliesTo": "CLASS"
          },
          "targets": [{
              "selector": ".award-block",
              "originalId": "4b6c113b-2ea4-a5b8-0ebf-f773c6641b50",
              "appliesTo": "CLASS"
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1724329593424
      },
      "e-21": {
          "id": "e-21",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "MOUSE_OVER",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-20",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-22"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "selector": ".collection-item",
              "originalId": "66c7334176f366a2c9b321e2|61594223-de3c-ae5a-543b-37527294a068",
              "appliesTo": "CLASS"
          },
          "targets": [{
              "selector": ".collection-item",
              "originalId": "66c7334176f366a2c9b321e2|61594223-de3c-ae5a-543b-37527294a068",
              "appliesTo": "CLASS"
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1724337360046
      },
      "e-22": {
          "id": "e-22",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "MOUSE_OUT",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-21",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-21"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "selector": ".collection-item",
              "originalId": "66c7334176f366a2c9b321e2|61594223-de3c-ae5a-543b-37527294a068",
              "appliesTo": "CLASS"
          },
          "targets": [{
              "selector": ".collection-item",
              "originalId": "66c7334176f366a2c9b321e2|61594223-de3c-ae5a-543b-37527294a068",
              "appliesTo": "CLASS"
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1724337360046
      },
      "e-23": {
          "id": "e-23",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "MOUSE_OVER",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-22",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-24"
              }
          },
          "mediaQueries": ["main"],
          "target": {
              "selector": ".tech-stack-block",
              "originalId": "7d1c793e-76e7-c239-238f-2575252cee72",
              "appliesTo": "CLASS"
          },
          "targets": [{
              "selector": ".tech-stack-block",
              "originalId": "7d1c793e-76e7-c239-238f-2575252cee72",
              "appliesTo": "CLASS"
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1724406857860
      },
      "e-24": {
          "id": "e-24",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "MOUSE_OUT",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-23",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-23"
              }
          },
          "mediaQueries": ["main"],
          "target": {
              "selector": ".tech-stack-block",
              "originalId": "7d1c793e-76e7-c239-238f-2575252cee72",
              "appliesTo": "CLASS"
          },
          "targets": [{
              "selector": ".tech-stack-block",
              "originalId": "7d1c793e-76e7-c239-238f-2575252cee72",
              "appliesTo": "CLASS"
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1724406857861
      },
      "e-25": {
          "id": "e-25",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "MOUSE_OVER",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-24",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-26"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "selector": ".social-button",
              "originalId": "83076154-2b50-d00f-331f-20480be69b5c",
              "appliesTo": "CLASS"
          },
          "targets": [{
              "selector": ".social-button",
              "originalId": "83076154-2b50-d00f-331f-20480be69b5c",
              "appliesTo": "CLASS"
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1724415481729
      },
      "e-26": {
          "id": "e-26",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "MOUSE_OUT",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-25",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-25"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "selector": ".social-button",
              "originalId": "83076154-2b50-d00f-331f-20480be69b5c",
              "appliesTo": "CLASS"
          },
          "targets": [{
              "selector": ".social-button",
              "originalId": "83076154-2b50-d00f-331f-20480be69b5c",
              "appliesTo": "CLASS"
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1724415481729
      }
  },
  "actionLists": {
      "a": {
          "id": "a",
          "title": "Menu Item Hover",
          "actionItemGroups": [{
              "actionItems": [{
                  "id": "a-n",
                  "actionTypeId": "TRANSFORM_SCALE",
                  "config": {
                      "delay": 0,
                      "easing": "ease",
                      "duration": 2000,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".menu-item-circle",
                          "selectorGuids": ["90866935-fcdb-1070-5c3d-b88b69c79571"]
                      },
                      "xValue": 0,
                      "yValue": 0,
                      "locked": true
                  }
              }, {
                  "id": "a-n-5",
                  "actionTypeId": "STYLE_BACKGROUND_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 500,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".menu-item",
                          "selectorGuids": ["a5fd969d-fb7c-3a1f-129f-de3a1458ed56"]
                      },
                      "globalSwatchId": "",
                      "rValue": 255,
                      "bValue": 255,
                      "gValue": 255,
                      "aValue": 0
                  }
              }, {
                  "id": "a-n-2",
                  "actionTypeId": "TRANSFORM_MOVE",
                  "config": {
                      "delay": 0,
                      "easing": "ease",
                      "duration": 2000,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".medium-s.menu-item-text",
                          "selectorGuids": ["0922a680-69af-6c2d-f0b8-96db90128149", "d3789c37-6ee0-45d0-1893-fd65130abc33"]
                      },
                      "xValue": -14,
                      "xUnit": "px",
                      "yUnit": "PX",
                      "zUnit": "PX"
                  }
              }]
          }, {
              "actionItems": [{
                  "id": "a-n-3",
                  "actionTypeId": "TRANSFORM_SCALE",
                  "config": {
                      "delay": 0,
                      "easing": "ease",
                      "duration": 300,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".menu-item-circle",
                          "selectorGuids": ["90866935-fcdb-1070-5c3d-b88b69c79571"]
                      },
                      "xValue": 1,
                      "yValue": 1,
                      "locked": true
                  }
              }, {
                  "id": "a-n-6",
                  "actionTypeId": "STYLE_BACKGROUND_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "ease",
                      "duration": 300,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".menu-item",
                          "selectorGuids": ["a5fd969d-fb7c-3a1f-129f-de3a1458ed56"]
                      },
                      "globalSwatchId": "--white-opacity--5",
                      "rValue": 255,
                      "bValue": 255,
                      "gValue": 255,
                      "aValue": 0.05
                  }
              }, {
                  "id": "a-n-4",
                  "actionTypeId": "TRANSFORM_MOVE",
                  "config": {
                      "delay": 0,
                      "easing": "ease",
                      "duration": 300,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".medium-s.menu-item-text",
                          "selectorGuids": ["0922a680-69af-6c2d-f0b8-96db90128149", "d3789c37-6ee0-45d0-1893-fd65130abc33"]
                      },
                      "xValue": 0,
                      "xUnit": "px",
                      "yUnit": "PX",
                      "zUnit": "PX"
                  }
              }]
          }],
          "useFirstGroupAsInitialState": true,
          "createdOn": 1724247686743
      },
      "a-2": {
          "id": "a-2",
          "title": "Menu Item Hover Out",
          "actionItemGroups": [{
              "actionItems": [{
                  "id": "a-2-n",
                  "actionTypeId": "TRANSFORM_SCALE",
                  "config": {
                      "delay": 0,
                      "easing": "ease",
                      "duration": 300,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".menu-item-circle",
                          "selectorGuids": ["90866935-fcdb-1070-5c3d-b88b69c79571"]
                      },
                      "xValue": 0,
                      "yValue": 0,
                      "locked": true
                  }
              }, {
                  "id": "a-2-n-2",
                  "actionTypeId": "STYLE_BACKGROUND_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "ease",
                      "duration": 300,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".menu-item",
                          "selectorGuids": ["a5fd969d-fb7c-3a1f-129f-de3a1458ed56"]
                      },
                      "globalSwatchId": "",
                      "rValue": 255,
                      "bValue": 255,
                      "gValue": 255,
                      "aValue": 0
                  }
              }, {
                  "id": "a-2-n-3",
                  "actionTypeId": "TRANSFORM_MOVE",
                  "config": {
                      "delay": 0,
                      "easing": "ease",
                      "duration": 300,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".medium-s.menu-item-text",
                          "selectorGuids": ["0922a680-69af-6c2d-f0b8-96db90128149", "d3789c37-6ee0-45d0-1893-fd65130abc33"]
                      },
                      "xValue": -14,
                      "xUnit": "px",
                      "yUnit": "PX",
                      "zUnit": "PX"
                  }
              }]
          }],
          "useFirstGroupAsInitialState": false,
          "createdOn": 1724247686743
      },
      "a-3": {
          "id": "a-3",
          "title": "Status Indicator Scale",
          "actionItemGroups": [{
              "actionItems": [{
                  "id": "a-3-n",
                  "actionTypeId": "TRANSFORM_SCALE",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 500,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".status-indicator",
                          "selectorGuids": ["81da4781-4003-924c-a775-3e56b09e8caa"]
                      },
                      "xValue": 1,
                      "yValue": 1,
                      "locked": true
                  }
              }]
          }, {
              "actionItems": [{
                  "id": "a-3-n-2",
                  "actionTypeId": "TRANSFORM_SCALE",
                  "config": {
                      "delay": 0,
                      "easing": "outQuad",
                      "duration": 750,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".status-indicator",
                          "selectorGuids": ["81da4781-4003-924c-a775-3e56b09e8caa"]
                      },
                      "xValue": 0.6,
                      "yValue": 0.6,
                      "locked": true
                  }
              }]
          }, {
              "actionItems": [{
                  "id": "a-3-n-3",
                  "actionTypeId": "TRANSFORM_SCALE",
                  "config": {
                      "delay": 0,
                      "easing": "outQuad",
                      "duration": 750,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".status-indicator",
                          "selectorGuids": ["81da4781-4003-924c-a775-3e56b09e8caa"]
                      },
                      "xValue": 1,
                      "yValue": 1,
                      "locked": true
                  }
              }]
          }],
          "useFirstGroupAsInitialState": true,
          "createdOn": 1724248271398
      },
      "a-4": {
          "id": "a-4",
          "title": "Person Avatar Hover",
          "actionItemGroups": [{
              "actionItems": [{
                  "id": "a-4-n",
                  "actionTypeId": "TRANSFORM_ROTATE",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 500,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".person-avatar",
                          "selectorGuids": ["f3611d1c-2465-479e-d323-6df7c322fbbd"]
                      },
                      "zValue": 0,
                      "xUnit": "DEG",
                      "yUnit": "DEG",
                      "zUnit": "deg"
                  }
              }, {
                  "id": "a-4-n-3",
                  "actionTypeId": "STYLE_BACKGROUND_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 500,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".person-avatar-wrapper",
                          "selectorGuids": ["fedc20db-86e8-747d-19c4-279e03f6e493"]
                      },
                      "globalSwatchId": "--white-opacity--5",
                      "rValue": 255,
                      "bValue": 255,
                      "gValue": 255,
                      "aValue": 0.05
                  }
              }]
          }, {
              "actionItems": [{
                  "id": "a-4-n-2",
                  "actionTypeId": "TRANSFORM_ROTATE",
                  "config": {
                      "delay": 0,
                      "easing": "ease",
                      "duration": 350,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".person-avatar",
                          "selectorGuids": ["f3611d1c-2465-479e-d323-6df7c322fbbd"]
                      },
                      "zValue": -10,
                      "xUnit": "DEG",
                      "yUnit": "DEG",
                      "zUnit": "deg"
                  }
              }, {
                  "id": "a-4-n-4",
                  "actionTypeId": "STYLE_BACKGROUND_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "ease",
                      "duration": 350,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".person-avatar-wrapper",
                          "selectorGuids": ["fedc20db-86e8-747d-19c4-279e03f6e493"]
                      },
                      "globalSwatchId": "--white-opacity--10",
                      "rValue": 255,
                      "bValue": 255,
                      "gValue": 255,
                      "aValue": 0.1
                  }
              }]
          }],
          "useFirstGroupAsInitialState": true,
          "createdOn": 1724248486806
      },
      "a-5": {
          "id": "a-5",
          "title": "Person Avatar Hover Out",
          "actionItemGroups": [{
              "actionItems": [{
                  "id": "a-5-n",
                  "actionTypeId": "TRANSFORM_ROTATE",
                  "config": {
                      "delay": 0,
                      "easing": "ease",
                      "duration": 350,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".person-avatar",
                          "selectorGuids": ["f3611d1c-2465-479e-d323-6df7c322fbbd"]
                      },
                      "zValue": 0,
                      "xUnit": "DEG",
                      "yUnit": "DEG",
                      "zUnit": "deg"
                  }
              }, {
                  "id": "a-5-n-2",
                  "actionTypeId": "STYLE_BACKGROUND_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "ease",
                      "duration": 350,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".person-avatar-wrapper",
                          "selectorGuids": ["fedc20db-86e8-747d-19c4-279e03f6e493"]
                      },
                      "globalSwatchId": "--white-opacity--5",
                      "rValue": 255,
                      "bValue": 255,
                      "gValue": 255,
                      "aValue": 0.05
                  }
              }]
          }],
          "useFirstGroupAsInitialState": false,
          "createdOn": 1724248486806
      },
      "a-6": {
          "id": "a-6",
          "title": "Primary Button Hover",
          "actionItemGroups": [{
              "actionItems": [{
                  "id": "a-6-n",
                  "actionTypeId": "STYLE_BACKGROUND_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 500,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".primary-button",
                          "selectorGuids": ["b35892dd-5535-ff6e-f5be-bdd2af5e9297"]
                      },
                      "globalSwatchId": "--white-opacity--10",
                      "rValue": 255,
                      "bValue": 255,
                      "gValue": 255,
                      "aValue": 0.1
                  }
              }, {
                  "id": "a-6-n-6",
                  "actionTypeId": "STYLE_OPACITY",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 500,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".primary-button-icon",
                          "selectorGuids": ["c5cc6c0d-2e44-a923-350c-3f46eefe74a7"]
                      },
                      "value": 0.65,
                      "unit": ""
                  }
              }, {
                  "id": "a-6-n-4",
                  "actionTypeId": "STYLE_TEXT_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 500,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".medium-s",
                          "selectorGuids": ["0922a680-69af-6c2d-f0b8-96db90128149"]
                      },
                      "globalSwatchId": "--white-opacity--65",
                      "rValue": 255,
                      "bValue": 255,
                      "gValue": 255,
                      "aValue": 0.65
                  }
              }]
          }, {
              "actionItems": [{
                  "id": "a-6-n-3",
                  "actionTypeId": "STYLE_BACKGROUND_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "ease",
                      "duration": 500,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".primary-button",
                          "selectorGuids": ["b35892dd-5535-ff6e-f5be-bdd2af5e9297"]
                      },
                      "globalSwatchId": "--white-opacity--30",
                      "rValue": 255,
                      "bValue": 255,
                      "gValue": 255,
                      "aValue": 0.3
                  }
              }, {
                  "id": "a-6-n-7",
                  "actionTypeId": "STYLE_OPACITY",
                  "config": {
                      "delay": 0,
                      "easing": "ease",
                      "duration": 500,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".primary-button-icon",
                          "selectorGuids": ["c5cc6c0d-2e44-a923-350c-3f46eefe74a7"]
                      },
                      "value": 1,
                      "unit": ""
                  }
              }, {
                  "id": "a-6-n-5",
                  "actionTypeId": "STYLE_TEXT_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "ease",
                      "duration": 500,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".medium-s",
                          "selectorGuids": ["0922a680-69af-6c2d-f0b8-96db90128149"]
                      },
                      "globalSwatchId": "--white",
                      "rValue": 255,
                      "bValue": 255,
                      "gValue": 255,
                      "aValue": 1
                  }
              }]
          }],
          "useFirstGroupAsInitialState": true,
          "createdOn": 1724249526220
      },
      "a-7": {
          "id": "a-7",
          "title": "Primary Button Hover Out",
          "actionItemGroups": [{
              "actionItems": [{
                  "id": "a-7-n",
                  "actionTypeId": "STYLE_BACKGROUND_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "ease",
                      "duration": 500,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".primary-button",
                          "selectorGuids": ["b35892dd-5535-ff6e-f5be-bdd2af5e9297"]
                      },
                      "globalSwatchId": "--white-opacity--10",
                      "rValue": 255,
                      "bValue": 255,
                      "gValue": 255,
                      "aValue": 0.1
                  }
              }, {
                  "id": "a-7-n-2",
                  "actionTypeId": "STYLE_OPACITY",
                  "config": {
                      "delay": 0,
                      "easing": "ease",
                      "duration": 500,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".primary-button-icon",
                          "selectorGuids": ["c5cc6c0d-2e44-a923-350c-3f46eefe74a7"]
                      },
                      "value": 0.65,
                      "unit": ""
                  }
              }, {
                  "id": "a-7-n-3",
                  "actionTypeId": "STYLE_TEXT_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "ease",
                      "duration": 500,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".medium-s",
                          "selectorGuids": ["0922a680-69af-6c2d-f0b8-96db90128149"]
                      },
                      "globalSwatchId": "--white-opacity--65",
                      "rValue": 255,
                      "bValue": 255,
                      "gValue": 255,
                      "aValue": 0.65
                  }
              }]
          }],
          "useFirstGroupAsInitialState": false,
          "createdOn": 1724249526220
      },
      "a-8": {
          "id": "a-8",
          "title": "Yellow Quick Link Block Hover",
          "actionItemGroups": [{
              "actionItems": [{
                  "id": "a-8-n",
                  "actionTypeId": "STYLE_BACKGROUND_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 500,
                      "target": {
                          "selector": ".quick-link-block.yellow-link-block",
                          "selectorGuids": ["65fa7d56-5329-c348-ac31-1fa8a9721f3a", "c449bb6d-0035-fc5d-d458-7189988ebde2"]
                      },
                      "globalSwatchId": "--yellow-opacity--10",
                      "rValue": 255,
                      "bValue": 39,
                      "gValue": 196,
                      "aValue": 0.1
                  }
              }, {
                  "id": "a-8-n-3",
                  "actionTypeId": "STYLE_BACKGROUND_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 500,
                      "target": {
                          "selector": ".quick-link-block-glow.yellow-glow",
                          "selectorGuids": ["333c5abc-25e8-f3f4-956f-8f19b226e32e", "ee137979-407c-796d-606b-74323add036c"]
                      },
                      "globalSwatchId": "--yellow-opacity--20",
                      "rValue": 255,
                      "bValue": 39,
                      "gValue": 196,
                      "aValue": 0.2
                  }
              }]
          }, {
              "actionItems": [{
                  "id": "a-8-n-2",
                  "actionTypeId": "STYLE_BACKGROUND_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "ease",
                      "duration": 500,
                      "target": {
                          "selector": ".quick-link-block.yellow-link-block",
                          "selectorGuids": ["65fa7d56-5329-c348-ac31-1fa8a9721f3a", "c449bb6d-0035-fc5d-d458-7189988ebde2"]
                      },
                      "globalSwatchId": "--yellow-opacity--20",
                      "rValue": 255,
                      "bValue": 39,
                      "gValue": 196,
                      "aValue": 0.2
                  }
              }, {
                  "id": "a-8-n-4",
                  "actionTypeId": "STYLE_BACKGROUND_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "ease",
                      "duration": 500,
                      "target": {
                          "selector": ".quick-link-block-glow.yellow-glow",
                          "selectorGuids": ["333c5abc-25e8-f3f4-956f-8f19b226e32e", "ee137979-407c-796d-606b-74323add036c"]
                      },
                      "globalSwatchId": "--yellow-opacity--35",
                      "rValue": 255,
                      "bValue": 39,
                      "gValue": 196,
                      "aValue": 0.35
                  }
              }]
          }],
          "useFirstGroupAsInitialState": true,
          "createdOn": 1724253665308
      },
      "a-9": {
          "id": "a-9",
          "title": "Yellow Quick Link Block Hover Out",
          "actionItemGroups": [{
              "actionItems": [{
                  "id": "a-9-n",
                  "actionTypeId": "STYLE_BACKGROUND_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "ease",
                      "duration": 500,
                      "target": {
                          "selector": ".quick-link-block.yellow-link-block",
                          "selectorGuids": ["65fa7d56-5329-c348-ac31-1fa8a9721f3a", "c449bb6d-0035-fc5d-d458-7189988ebde2"]
                      },
                      "globalSwatchId": "--yellow-opacity--10",
                      "rValue": 255,
                      "bValue": 39,
                      "gValue": 196,
                      "aValue": 0.1
                  }
              }, {
                  "id": "a-9-n-2",
                  "actionTypeId": "STYLE_BACKGROUND_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "ease",
                      "duration": 500,
                      "target": {
                          "selector": ".quick-link-block-glow.yellow-glow",
                          "selectorGuids": ["333c5abc-25e8-f3f4-956f-8f19b226e32e", "ee137979-407c-796d-606b-74323add036c"]
                      },
                      "globalSwatchId": "--yellow-opacity--20",
                      "rValue": 255,
                      "bValue": 39,
                      "gValue": 196,
                      "aValue": 0.2
                  }
              }]
          }],
          "useFirstGroupAsInitialState": false,
          "createdOn": 1724253665308
      },
      "a-10": {
          "id": "a-10",
          "title": "Orange Quick Link Block Hover",
          "actionItemGroups": [{
              "actionItems": [{
                  "id": "a-10-n",
                  "actionTypeId": "STYLE_BACKGROUND_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 500,
                      "target": {
                          "selector": ".quick-link-block.purple-link-block",
                          "selectorGuids": ["65fa7d56-5329-c348-ac31-1fa8a9721f3a", "af3bf72f-2e1c-ca9a-59e7-5132e7193006"]
                      },
                      "globalSwatchId": "--purple-opacity--10",
                      "rValue": 255,
                      "bValue": 32,
                      "gValue": 99,
                      "aValue": 0.1
                  }
              }, {
                  "id": "a-10-n-2",
                  "actionTypeId": "STYLE_BACKGROUND_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 500,
                      "target": {
                          "selector": ".quick-link-block-glow.purple-glow",
                          "selectorGuids": ["333c5abc-25e8-f3f4-956f-8f19b226e32e", "6c8798ab-d1f2-5817-e1ed-fa9c087b9ab4"]
                      },
                      "globalSwatchId": "--purple-opacity--20",
                      "rValue": 255,
                      "bValue": 32,
                      "gValue": 99,
                      "aValue": 0.2
                  }
              }]
          }, {
              "actionItems": [{
                  "id": "a-10-n-3",
                  "actionTypeId": "STYLE_BACKGROUND_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "ease",
                      "duration": 500,
                      "target": {
                          "selector": ".quick-link-block.purple-link-block",
                          "selectorGuids": ["65fa7d56-5329-c348-ac31-1fa8a9721f3a", "af3bf72f-2e1c-ca9a-59e7-5132e7193006"]
                      },
                      "globalSwatchId": "--purple-opacity--20",
                      "rValue": 255,
                      "bValue": 32,
                      "gValue": 99,
                      "aValue": 0.2
                  }
              }, {
                  "id": "a-10-n-4",
                  "actionTypeId": "STYLE_BACKGROUND_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "ease",
                      "duration": 500,
                      "target": {
                          "selector": ".quick-link-block-glow.purple-glow",
                          "selectorGuids": ["333c5abc-25e8-f3f4-956f-8f19b226e32e", "6c8798ab-d1f2-5817-e1ed-fa9c087b9ab4"]
                      },
                      "globalSwatchId": "--purple-opacity--35",
                      "rValue": 255,
                      "bValue": 32,
                      "gValue": 99,
                      "aValue": 0.35
                  }
              }]
          }],
          "useFirstGroupAsInitialState": true,
          "createdOn": 1724253665308
      },
      "a-11": {
          "id": "a-11",
          "title": "Orange Quick Link Block Hover Out",
          "actionItemGroups": [{
              "actionItems": [{
                  "id": "a-11-n",
                  "actionTypeId": "STYLE_BACKGROUND_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "ease",
                      "duration": 500,
                      "target": {
                          "selector": ".quick-link-block.purple-link-block",
                          "selectorGuids": ["65fa7d56-5329-c348-ac31-1fa8a9721f3a", "af3bf72f-2e1c-ca9a-59e7-5132e7193006"]
                      },
                      "globalSwatchId": "--purple-opacity--10",
                      "rValue": 255,
                      "bValue": 32,
                      "gValue": 99,
                      "aValue": 0.1
                  }
              }, {
                  "id": "a-11-n-2",
                  "actionTypeId": "STYLE_BACKGROUND_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "ease",
                      "duration": 500,
                      "target": {
                          "selector": ".quick-link-block-glow.purple-glow",
                          "selectorGuids": ["333c5abc-25e8-f3f4-956f-8f19b226e32e", "6c8798ab-d1f2-5817-e1ed-fa9c087b9ab4"]
                      },
                      "globalSwatchId": "--purple-opacity--20",
                      "rValue": 255,
                      "bValue": 32,
                      "gValue": 99,
                      "aValue": 0.2
                  }
              }]
          }],
          "useFirstGroupAsInitialState": false,
          "createdOn": 1724253665308
      },
      "a-12": {
          "id": "a-12",
          "title": "Green Quick Link Block Hover",
          "actionItemGroups": [{
              "actionItems": [{
                  "id": "a-12-n",
                  "actionTypeId": "STYLE_BACKGROUND_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 500,
                      "target": {
                          "selector": ".quick-link-block.green-link-block",
                          "selectorGuids": ["65fa7d56-5329-c348-ac31-1fa8a9721f3a", "1ee4a0c6-a89e-240e-d1a4-7b76088546a1"]
                      },
                      "globalSwatchId": "--green-opacity--10",
                      "rValue": 46,
                      "bValue": 113,
                      "gValue": 241,
                      "aValue": 0.1
                  }
              }, {
                  "id": "a-12-n-2",
                  "actionTypeId": "STYLE_BACKGROUND_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 500,
                      "target": {
                          "selector": ".quick-link-block-glow.green-glow",
                          "selectorGuids": ["333c5abc-25e8-f3f4-956f-8f19b226e32e", "9200b154-1216-f5de-08e0-ba50aa400bad"]
                      },
                      "globalSwatchId": "--green-opacity--20",
                      "rValue": 46,
                      "bValue": 113,
                      "gValue": 241,
                      "aValue": 0.2
                  }
              }]
          }, {
              "actionItems": [{
                  "id": "a-12-n-3",
                  "actionTypeId": "STYLE_BACKGROUND_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "ease",
                      "duration": 500,
                      "target": {
                          "selector": ".quick-link-block.green-link-block",
                          "selectorGuids": ["65fa7d56-5329-c348-ac31-1fa8a9721f3a", "1ee4a0c6-a89e-240e-d1a4-7b76088546a1"]
                      },
                      "globalSwatchId": "--green-opacity--20",
                      "rValue": 46,
                      "bValue": 113,
                      "gValue": 241,
                      "aValue": 0.2
                  }
              }, {
                  "id": "a-12-n-4",
                  "actionTypeId": "STYLE_BACKGROUND_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "ease",
                      "duration": 500,
                      "target": {
                          "selector": ".quick-link-block-glow.green-glow",
                          "selectorGuids": ["333c5abc-25e8-f3f4-956f-8f19b226e32e", "9200b154-1216-f5de-08e0-ba50aa400bad"]
                      },
                      "globalSwatchId": "--green-opacity--35",
                      "rValue": 46,
                      "bValue": 113,
                      "gValue": 241,
                      "aValue": 0.35
                  }
              }]
          }],
          "useFirstGroupAsInitialState": true,
          "createdOn": 1724253665308
      },
      "a-13": {
          "id": "a-13",
          "title": "Green Quick Link Block Hover Out",
          "actionItemGroups": [{
              "actionItems": [{
                  "id": "a-13-n",
                  "actionTypeId": "STYLE_BACKGROUND_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "ease",
                      "duration": 500,
                      "target": {
                          "selector": ".quick-link-block.green-link-block",
                          "selectorGuids": ["65fa7d56-5329-c348-ac31-1fa8a9721f3a", "1ee4a0c6-a89e-240e-d1a4-7b76088546a1"]
                      },
                      "globalSwatchId": "--green-opacity--10",
                      "rValue": 46,
                      "bValue": 113,
                      "gValue": 241,
                      "aValue": 0.1
                  }
              }, {
                  "id": "a-13-n-2",
                  "actionTypeId": "STYLE_BACKGROUND_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "ease",
                      "duration": 500,
                      "target": {
                          "selector": ".quick-link-block-glow.green-glow",
                          "selectorGuids": ["333c5abc-25e8-f3f4-956f-8f19b226e32e", "9200b154-1216-f5de-08e0-ba50aa400bad"]
                      },
                      "globalSwatchId": "--green-opacity--20",
                      "rValue": 46,
                      "bValue": 113,
                      "gValue": 241,
                      "aValue": 0.2
                  }
              }]
          }],
          "useFirstGroupAsInitialState": false,
          "createdOn": 1724253665308
      },
      "a-14": {
          "id": "a-14",
          "title": "Blue Quick Link Block Hover",
          "actionItemGroups": [{
              "actionItems": [{
                  "id": "a-14-n",
                  "actionTypeId": "STYLE_BACKGROUND_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 500,
                      "target": {
                          "selector": ".quick-link-block.blue-link-block",
                          "selectorGuids": ["65fa7d56-5329-c348-ac31-1fa8a9721f3a", "6b08c915-1457-46be-e5e6-1d53d10d0acd"]
                      },
                      "globalSwatchId": "--blue-opacity--10",
                      "rValue": 32,
                      "bValue": 255,
                      "gValue": 215,
                      "aValue": 0.1
                  }
              }, {
                  "id": "a-14-n-2",
                  "actionTypeId": "STYLE_BACKGROUND_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 500,
                      "target": {
                          "selector": ".quick-link-block-glow.blue-glow",
                          "selectorGuids": ["333c5abc-25e8-f3f4-956f-8f19b226e32e", "7a726bed-3631-5fd5-3630-531115bf5ab3"]
                      },
                      "globalSwatchId": "--blue-opacity--20",
                      "rValue": 32,
                      "bValue": 255,
                      "gValue": 215,
                      "aValue": 0.2
                  }
              }]
          }, {
              "actionItems": [{
                  "id": "a-14-n-3",
                  "actionTypeId": "STYLE_BACKGROUND_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "ease",
                      "duration": 500,
                      "target": {
                          "selector": ".quick-link-block.blue-link-block",
                          "selectorGuids": ["65fa7d56-5329-c348-ac31-1fa8a9721f3a", "6b08c915-1457-46be-e5e6-1d53d10d0acd"]
                      },
                      "globalSwatchId": "--blue-opacity--20",
                      "rValue": 32,
                      "bValue": 255,
                      "gValue": 215,
                      "aValue": 0.2
                  }
              }, {
                  "id": "a-14-n-4",
                  "actionTypeId": "STYLE_BACKGROUND_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "ease",
                      "duration": 500,
                      "target": {
                          "selector": ".quick-link-block-glow.blue-glow",
                          "selectorGuids": ["333c5abc-25e8-f3f4-956f-8f19b226e32e", "7a726bed-3631-5fd5-3630-531115bf5ab3"]
                      },
                      "globalSwatchId": "--blue-opacity--35",
                      "rValue": 32,
                      "bValue": 255,
                      "gValue": 215,
                      "aValue": 0.35
                  }
              }]
          }],
          "useFirstGroupAsInitialState": true,
          "createdOn": 1724253665308
      },
      "a-15": {
          "id": "a-15",
          "title": "Blue Quick Link Block Hover Out",
          "actionItemGroups": [{
              "actionItems": [{
                  "id": "a-15-n",
                  "actionTypeId": "STYLE_BACKGROUND_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "ease",
                      "duration": 500,
                      "target": {
                          "selector": ".quick-link-block.blue-link-block",
                          "selectorGuids": ["65fa7d56-5329-c348-ac31-1fa8a9721f3a", "6b08c915-1457-46be-e5e6-1d53d10d0acd"]
                      },
                      "globalSwatchId": "--blue-opacity--10",
                      "rValue": 32,
                      "bValue": 255,
                      "gValue": 215,
                      "aValue": 0.1
                  }
              }, {
                  "id": "a-15-n-2",
                  "actionTypeId": "STYLE_BACKGROUND_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "ease",
                      "duration": 500,
                      "target": {
                          "selector": ".quick-link-block-glow.blue-glow",
                          "selectorGuids": ["333c5abc-25e8-f3f4-956f-8f19b226e32e", "7a726bed-3631-5fd5-3630-531115bf5ab3"]
                      },
                      "globalSwatchId": "--blue-opacity--20",
                      "rValue": 32,
                      "bValue": 255,
                      "gValue": 215,
                      "aValue": 0.2
                  }
              }]
          }],
          "useFirstGroupAsInitialState": false,
          "createdOn": 1724253665308
      },
      "a-16": {
          "id": "a-16",
          "title": "Mobile Menu Open",
          "actionItemGroups": [{
              "actionItems": [{
                  "id": "a-16-n",
                  "actionTypeId": "GENERAL_DISPLAY",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 0,
                      "target": {
                          "selector": ".side-menu",
                          "selectorGuids": ["ff8c123e-ed66-37fe-cac9-7acab05c8c47"]
                      },
                      "value": "none"
                  }
              }, {
                  "id": "a-16-n-7",
                  "actionTypeId": "STYLE_OPACITY",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 500,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".mobile-menu-icon.close-icon",
                          "selectorGuids": ["de7ccd04-7e76-f0e2-5c8e-4bb5ea99a096", "3a0d9d1e-1057-330d-be53-6d36b4dd7197"]
                      },
                      "value": 0,
                      "unit": ""
                  }
              }, {
                  "id": "a-16-n-5",
                  "actionTypeId": "STYLE_OPACITY",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 500,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".mobile-menu-icon.open-icon",
                          "selectorGuids": ["de7ccd04-7e76-f0e2-5c8e-4bb5ea99a096", "b05636d3-ab90-5c62-da78-254c2b940b6f"]
                      },
                      "value": 0.65,
                      "unit": ""
                  }
              }, {
                  "id": "a-16-n-3",
                  "actionTypeId": "TRANSFORM_MOVE",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 500,
                      "target": {
                          "selector": ".side-menu",
                          "selectorGuids": ["ff8c123e-ed66-37fe-cac9-7acab05c8c47"]
                      },
                      "xValue": 100,
                      "xUnit": "%",
                      "yUnit": "PX",
                      "zUnit": "PX"
                  }
              }]
          }, {
              "actionItems": [{
                  "id": "a-16-n-2",
                  "actionTypeId": "GENERAL_DISPLAY",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 0,
                      "target": {
                          "selector": ".side-menu",
                          "selectorGuids": ["ff8c123e-ed66-37fe-cac9-7acab05c8c47"]
                      },
                      "value": "flex"
                  }
              }, {
                  "id": "a-16-n-8",
                  "actionTypeId": "STYLE_OPACITY",
                  "config": {
                      "delay": 0,
                      "easing": "ease",
                      "duration": 350,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".mobile-menu-icon.close-icon",
                          "selectorGuids": ["de7ccd04-7e76-f0e2-5c8e-4bb5ea99a096", "3a0d9d1e-1057-330d-be53-6d36b4dd7197"]
                      },
                      "value": 0.65,
                      "unit": ""
                  }
              }, {
                  "id": "a-16-n-6",
                  "actionTypeId": "STYLE_OPACITY",
                  "config": {
                      "delay": 0,
                      "easing": "ease",
                      "duration": 350,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".mobile-menu-icon.open-icon",
                          "selectorGuids": ["de7ccd04-7e76-f0e2-5c8e-4bb5ea99a096", "b05636d3-ab90-5c62-da78-254c2b940b6f"]
                      },
                      "value": 0,
                      "unit": ""
                  }
              }, {
                  "id": "a-16-n-4",
                  "actionTypeId": "TRANSFORM_MOVE",
                  "config": {
                      "delay": 0,
                      "easing": "ease",
                      "duration": 500,
                      "target": {
                          "selector": ".side-menu",
                          "selectorGuids": ["ff8c123e-ed66-37fe-cac9-7acab05c8c47"]
                      },
                      "xValue": 0,
                      "xUnit": "%",
                      "yUnit": "PX",
                      "zUnit": "PX"
                  }
              }]
          }],
          "useFirstGroupAsInitialState": true,
          "createdOn": 1724319325142
      },
      "a-17": {
          "id": "a-17",
          "title": "Mobile Menu Close",
          "actionItemGroups": [{
              "actionItems": [{
                  "id": "a-17-n-2",
                  "actionTypeId": "STYLE_OPACITY",
                  "config": {
                      "delay": 0,
                      "easing": "ease",
                      "duration": 350,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".mobile-menu-icon.close-icon",
                          "selectorGuids": ["de7ccd04-7e76-f0e2-5c8e-4bb5ea99a096", "3a0d9d1e-1057-330d-be53-6d36b4dd7197"]
                      },
                      "value": 0,
                      "unit": ""
                  }
              }, {
                  "id": "a-17-n-3",
                  "actionTypeId": "STYLE_OPACITY",
                  "config": {
                      "delay": 0,
                      "easing": "ease",
                      "duration": 350,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".mobile-menu-icon.open-icon",
                          "selectorGuids": ["de7ccd04-7e76-f0e2-5c8e-4bb5ea99a096", "b05636d3-ab90-5c62-da78-254c2b940b6f"]
                      },
                      "value": 0.65,
                      "unit": ""
                  }
              }, {
                  "id": "a-17-n-4",
                  "actionTypeId": "TRANSFORM_MOVE",
                  "config": {
                      "delay": 0,
                      "easing": "ease",
                      "duration": 500,
                      "target": {
                          "selector": ".side-menu",
                          "selectorGuids": ["ff8c123e-ed66-37fe-cac9-7acab05c8c47"]
                      },
                      "xValue": 100,
                      "xUnit": "%",
                      "yUnit": "PX",
                      "zUnit": "PX"
                  }
              }]
          }, {
              "actionItems": [{
                  "id": "a-17-n",
                  "actionTypeId": "GENERAL_DISPLAY",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 0,
                      "target": {
                          "selector": ".side-menu",
                          "selectorGuids": ["ff8c123e-ed66-37fe-cac9-7acab05c8c47"]
                      },
                      "value": "none"
                  }
              }]
          }],
          "useFirstGroupAsInitialState": false,
          "createdOn": 1724319325142
      },
      "a-18": {
          "id": "a-18",
          "title": "Award Block Hover",
          "actionItemGroups": [{
              "actionItems": [{
                  "id": "a-18-n",
                  "actionTypeId": "STYLE_OPACITY",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 500,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".award-block-glow-wrapper",
                          "selectorGuids": ["f4cb3ba1-8e69-80b0-aea7-102a5ac7ad5b"]
                      },
                      "value": 0,
                      "unit": ""
                  }
              }]
          }, {
              "actionItems": [{
                  "id": "a-18-n-2",
                  "actionTypeId": "STYLE_OPACITY",
                  "config": {
                      "delay": 0,
                      "easing": "ease",
                      "duration": 500,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".award-block-glow-wrapper",
                          "selectorGuids": ["f4cb3ba1-8e69-80b0-aea7-102a5ac7ad5b"]
                      },
                      "value": 1,
                      "unit": ""
                  }
              }]
          }],
          "useFirstGroupAsInitialState": true,
          "createdOn": 1724329596813
      },
      "a-19": {
          "id": "a-19",
          "title": "Award Block Hover Out",
          "actionItemGroups": [{
              "actionItems": [{
                  "id": "a-19-n",
                  "actionTypeId": "STYLE_OPACITY",
                  "config": {
                      "delay": 0,
                      "easing": "ease",
                      "duration": 500,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".award-block-glow-wrapper",
                          "selectorGuids": ["f4cb3ba1-8e69-80b0-aea7-102a5ac7ad5b"]
                      },
                      "value": 0,
                      "unit": ""
                  }
              }]
          }],
          "useFirstGroupAsInitialState": false,
          "createdOn": 1724329596813
      },
      "a-20": {
          "id": "a-20",
          "title": "Collection Item Hover",
          "actionItemGroups": [{
              "actionItems": [{
                  "id": "a-20-n",
                  "actionTypeId": "STYLE_OPACITY",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 500,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".portfolio-item-bg",
                          "selectorGuids": ["4b52cd43-a627-9bcb-b59d-c2349908a1e0"]
                      },
                      "value": 0,
                      "unit": ""
                  }
              }]
          }, {
              "actionItems": [{
                  "id": "a-20-n-2",
                  "actionTypeId": "STYLE_OPACITY",
                  "config": {
                      "delay": 0,
                      "easing": "ease",
                      "duration": 400,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".portfolio-item-bg",
                          "selectorGuids": ["4b52cd43-a627-9bcb-b59d-c2349908a1e0"]
                      },
                      "value": 0.1,
                      "unit": ""
                  }
              }]
          }],
          "useFirstGroupAsInitialState": true,
          "createdOn": 1724337364331
      },
      "a-21": {
          "id": "a-21",
          "title": "Collection Item Hover Out",
          "actionItemGroups": [{
              "actionItems": [{
                  "id": "a-21-n",
                  "actionTypeId": "STYLE_OPACITY",
                  "config": {
                      "delay": 0,
                      "easing": "ease",
                      "duration": 400,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".portfolio-item-bg",
                          "selectorGuids": ["4b52cd43-a627-9bcb-b59d-c2349908a1e0"]
                      },
                      "value": 0,
                      "unit": ""
                  }
              }]
          }],
          "useFirstGroupAsInitialState": false,
          "createdOn": 1724337364331
      },
      "a-22": {
          "id": "a-22",
          "title": "Tech Stack Block Hover",
          "actionItemGroups": [{
              "actionItems": [{
                  "id": "a-22-n",
                  "actionTypeId": "STYLE_OPACITY",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 500,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".tech-stack-block-glow-wrapper",
                          "selectorGuids": ["e9f08682-3a5c-d97e-7fdf-51d81427ae8b"]
                      },
                      "value": 0,
                      "unit": ""
                  }
              }, {
                  "id": "a-22-n-9",
                  "actionTypeId": "TRANSFORM_MOVE",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 500,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".tech-stack-icon",
                          "selectorGuids": ["0d09c5ad-f658-71bf-2c6f-a43ba8addab2"]
                      },
                      "yValue": 0,
                      "xUnit": "PX",
                      "yUnit": "px",
                      "zUnit": "PX"
                  }
              }, {
                  "id": "a-22-n-7",
                  "actionTypeId": "TRANSFORM_MOVE",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 500,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".medium-xs.tech-stack-name",
                          "selectorGuids": ["3d2c15f9-b20a-a2e1-3260-2b654670011a", "4c7d72c5-1529-88a3-53f5-b77b3b0fea7c"]
                      },
                      "yValue": 0,
                      "xUnit": "PX",
                      "yUnit": "px",
                      "zUnit": "PX"
                  }
              }, {
                  "id": "a-22-n-4",
                  "actionTypeId": "STYLE_FILTER",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 500,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".medium-xs.tech-stack-name",
                          "selectorGuids": ["3d2c15f9-b20a-a2e1-3260-2b654670011a", "4c7d72c5-1529-88a3-53f5-b77b3b0fea7c"]
                      },
                      "filters": [{
                          "type": "blur",
                          "filterId": "f787",
                          "value": 10,
                          "unit": "px"
                      }]
                  }
              }, {
                  "id": "a-22-n-3",
                  "actionTypeId": "STYLE_OPACITY",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 500,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".medium-xs.tech-stack-name",
                          "selectorGuids": ["3d2c15f9-b20a-a2e1-3260-2b654670011a", "4c7d72c5-1529-88a3-53f5-b77b3b0fea7c"]
                      },
                      "value": 0,
                      "unit": ""
                  }
              }]
          }, {
              "actionItems": [{
                  "id": "a-22-n-2",
                  "actionTypeId": "STYLE_OPACITY",
                  "config": {
                      "delay": 0,
                      "easing": "ease",
                      "duration": 500,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".tech-stack-block-glow-wrapper",
                          "selectorGuids": ["e9f08682-3a5c-d97e-7fdf-51d81427ae8b"]
                      },
                      "value": 1,
                      "unit": ""
                  }
              }, {
                  "id": "a-22-n-10",
                  "actionTypeId": "TRANSFORM_MOVE",
                  "config": {
                      "delay": 0,
                      "easing": "ease",
                      "duration": 500,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".tech-stack-icon",
                          "selectorGuids": ["0d09c5ad-f658-71bf-2c6f-a43ba8addab2"]
                      },
                      "yValue": -10,
                      "xUnit": "PX",
                      "yUnit": "px",
                      "zUnit": "PX"
                  }
              }, {
                  "id": "a-22-n-8",
                  "actionTypeId": "TRANSFORM_MOVE",
                  "config": {
                      "delay": 0,
                      "easing": "ease",
                      "duration": 500,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".medium-xs.tech-stack-name",
                          "selectorGuids": ["3d2c15f9-b20a-a2e1-3260-2b654670011a", "4c7d72c5-1529-88a3-53f5-b77b3b0fea7c"]
                      },
                      "yValue": -10,
                      "xUnit": "PX",
                      "yUnit": "px",
                      "zUnit": "PX"
                  }
              }, {
                  "id": "a-22-n-6",
                  "actionTypeId": "STYLE_FILTER",
                  "config": {
                      "delay": 0,
                      "easing": "ease",
                      "duration": 500,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".medium-xs.tech-stack-name",
                          "selectorGuids": ["3d2c15f9-b20a-a2e1-3260-2b654670011a", "4c7d72c5-1529-88a3-53f5-b77b3b0fea7c"]
                      },
                      "filters": [{
                          "type": "blur",
                          "filterId": "e241",
                          "value": 0,
                          "unit": "px"
                      }]
                  }
              }, {
                  "id": "a-22-n-5",
                  "actionTypeId": "STYLE_OPACITY",
                  "config": {
                      "delay": 0,
                      "easing": "ease",
                      "duration": 500,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".medium-xs.tech-stack-name",
                          "selectorGuids": ["3d2c15f9-b20a-a2e1-3260-2b654670011a", "4c7d72c5-1529-88a3-53f5-b77b3b0fea7c"]
                      },
                      "value": 1,
                      "unit": ""
                  }
              }]
          }],
          "useFirstGroupAsInitialState": true,
          "createdOn": 1724406862049
      },
      "a-23": {
          "id": "a-23",
          "title": "Tech Stack Block Hover Out",
          "actionItemGroups": [{
              "actionItems": [{
                  "id": "a-23-n",
                  "actionTypeId": "STYLE_OPACITY",
                  "config": {
                      "delay": 0,
                      "easing": "ease",
                      "duration": 500,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".tech-stack-block-glow-wrapper",
                          "selectorGuids": ["e9f08682-3a5c-d97e-7fdf-51d81427ae8b"]
                      },
                      "value": 0,
                      "unit": ""
                  }
              }, {
                  "id": "a-23-n-2",
                  "actionTypeId": "TRANSFORM_MOVE",
                  "config": {
                      "delay": 0,
                      "easing": "ease",
                      "duration": 500,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".tech-stack-icon",
                          "selectorGuids": ["0d09c5ad-f658-71bf-2c6f-a43ba8addab2"]
                      },
                      "yValue": 0,
                      "xUnit": "PX",
                      "yUnit": "px",
                      "zUnit": "PX"
                  }
              }, {
                  "id": "a-23-n-3",
                  "actionTypeId": "TRANSFORM_MOVE",
                  "config": {
                      "delay": 0,
                      "easing": "ease",
                      "duration": 500,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".medium-xs.tech-stack-name",
                          "selectorGuids": ["3d2c15f9-b20a-a2e1-3260-2b654670011a", "4c7d72c5-1529-88a3-53f5-b77b3b0fea7c"]
                      },
                      "yValue": 0,
                      "xUnit": "PX",
                      "yUnit": "px",
                      "zUnit": "PX"
                  }
              }, {
                  "id": "a-23-n-4",
                  "actionTypeId": "STYLE_FILTER",
                  "config": {
                      "delay": 0,
                      "easing": "ease",
                      "duration": 500,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".medium-xs.tech-stack-name",
                          "selectorGuids": ["3d2c15f9-b20a-a2e1-3260-2b654670011a", "4c7d72c5-1529-88a3-53f5-b77b3b0fea7c"]
                      },
                      "filters": [{
                          "type": "blur",
                          "filterId": "f787",
                          "value": 10,
                          "unit": "px"
                      }]
                  }
              }, {
                  "id": "a-23-n-5",
                  "actionTypeId": "STYLE_OPACITY",
                  "config": {
                      "delay": 0,
                      "easing": "ease",
                      "duration": 500,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".medium-xs.tech-stack-name",
                          "selectorGuids": ["3d2c15f9-b20a-a2e1-3260-2b654670011a", "4c7d72c5-1529-88a3-53f5-b77b3b0fea7c"]
                      },
                      "value": 0,
                      "unit": ""
                  }
              }]
          }],
          "useFirstGroupAsInitialState": false,
          "createdOn": 1724406862049
      },
      "a-24": {
          "id": "a-24",
          "title": "Social Button Hover",
          "actionItemGroups": [{
              "actionItems": [{
                  "id": "a-24-n",
                  "actionTypeId": "STYLE_OPACITY",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 500,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".social-button-glow-wrapper",
                          "selectorGuids": ["7051fe3f-6999-f0d1-8ad0-938ae19db9ff"]
                      },
                      "value": 0,
                      "unit": ""
                  }
              }]
          }, {
              "actionItems": [{
                  "id": "a-24-n-2",
                  "actionTypeId": "STYLE_OPACITY",
                  "config": {
                      "delay": 0,
                      "easing": "ease",
                      "duration": 500,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".social-button-glow-wrapper",
                          "selectorGuids": ["7051fe3f-6999-f0d1-8ad0-938ae19db9ff"]
                      },
                      "value": 1,
                      "unit": ""
                  }
              }]
          }],
          "useFirstGroupAsInitialState": true,
          "createdOn": 1724415485017
      },
      "a-25": {
          "id": "a-25",
          "title": "Social Button Hover Out",
          "actionItemGroups": [{
              "actionItems": [{
                  "id": "a-25-n",
                  "actionTypeId": "STYLE_OPACITY",
                  "config": {
                      "delay": 0,
                      "easing": "ease",
                      "duration": 500,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".social-button-glow-wrapper",
                          "selectorGuids": ["7051fe3f-6999-f0d1-8ad0-938ae19db9ff"]
                      },
                      "value": 0,
                      "unit": ""
                  }
              }]
          }],
          "useFirstGroupAsInitialState": false,
          "createdOn": 1724415485017
      }
  },
  "site": {
      "mediaQueries": [{
          "key": "main",
          "min": 992,
          "max": 10000
      }, {
          "key": "medium",
          "min": 768,
          "max": 991
      }, {
          "key": "small",
          "min": 480,
          "max": 767
      }, {
          "key": "tiny",
          "min": 0,
          "max": 479
      }]
  }
});
