// @license magnet:?xt=urn:btih:0b31508aeb0634b347b8270c7bee4d411b5d4109&dn=agpl-3.0.txt AGPL-3.0
(() => {
  "use strict";
  var e,
    t,
    n = { createElementNS: document.createElementNS };
  var o = !0;
  function r(e) {
    o = e;
  }
  function i(e) {
    try {
      r(!1), e();
    } finally {
      r(!0);
    }
  }
  function s(e) {
    !(function (e, t, n) {
      if (n) {
        var o = new Date();
        o.setTime(o.getTime() + 24 * n * 60 * 60 * 1e3);
        var r = "; expires=" + o.toGMTString();
      } else r = "";
      document.cookie = e + "=" + t + r + "; path=/";
    })(e, "", -1);
  }
  function a(e) {
    return (
      (a =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            }),
      a(e)
    );
  }
  function l(e, t) {
    for (var n = 0; n < t.length; n++) {
      var o = t[n];
      (o.enumerable = o.enumerable || !1),
        (o.configurable = !0),
        "value" in o && (o.writable = !0),
        Object.defineProperty(
          e,
          ((r = o.key),
          (i = void 0),
          (i = (function (e, t) {
            if ("object" !== a(e) || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var o = n.call(e, t || "default");
              if ("object" !== a(o)) return o;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === t ? String : Number)(e);
          })(r, "string")),
          "symbol" === a(i) ? i : String(i)),
          o
        );
    }
    var r, i;
  }
  function c(e) {
    var t = f();
    return function () {
      var n,
        o = d(e);
      if (t) {
        var r = d(this).constructor;
        n = Reflect.construct(o, arguments, r);
      } else n = o.apply(this, arguments);
      return (function (e, t) {
        if (t && ("object" === a(t) || "function" == typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        return (function (e) {
          if (void 0 === e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return e;
        })(e);
      })(this, n);
    };
  }
  function u(e) {
    var t = "function" == typeof Map ? new Map() : void 0;
    return (
      (u = function (e) {
        if (
          null === e ||
          ((n = e), -1 === Function.toString.call(n).indexOf("[native code]"))
        )
          return e;
        var n;
        if ("function" != typeof e)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        if (void 0 !== t) {
          if (t.has(e)) return t.get(e);
          t.set(e, o);
        }
        function o() {
          return h(e, arguments, d(this).constructor);
        }
        return (
          (o.prototype = Object.create(e.prototype, {
            constructor: {
              value: o,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          p(o, e)
        );
      }),
      u(e)
    );
  }
  function h(e, t, n) {
    return (
      (h = f()
        ? Reflect.construct.bind()
        : function (e, t, n) {
            var o = [null];
            o.push.apply(o, t);
            var r = new (Function.bind.apply(e, o))();
            return n && p(r, n.prototype), r;
          }),
      h.apply(null, arguments)
    );
  }
  function f() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
      return (
        Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {})
        ),
        !0
      );
    } catch (e) {
      return !1;
    }
  }
  function p(e, t) {
    return (
      (p = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (e, t) {
            return (e.__proto__ = t), e;
          }),
      p(e, t)
    );
  }
  function d(e) {
    return (
      (d = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          }),
      d(e)
    );
  }
  if ("undefiend" != typeof window.XMLHttpRequest) {
    var m = (function (e) {
      !(function (e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          t && p(e, t);
      })(i, e);
      var t,
        n,
        o,
        r = c(i);
      function i() {
        return (
          (function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, i),
          r.apply(this, arguments)
        );
      }
      return (
        (t = i),
        n && l(t.prototype, n),
        o && l(t, o),
        Object.defineProperty(t, "prototype", { writable: !1 }),
        t
      );
    })(u(XMLHttpRequest));
    Object.defineProperty(
      m.prototype,
      "responseURL",
      Object.getOwnPropertyDescriptor(XMLHttpRequest.prototype, "responseURL")
    );
  }
  function v(e, t, n, o, r) {
    var i;
    if (
      (((i = window.XMLHttpRequest
        ? new m()
        : new ActiveXObject("Microsoft.XMLHTTP")).onreadystatechange =
        function () {
          4 == this.readyState && n(i);
        }),
      i.open(e, t, !0),
      o)
    )
      for (var s in o) o.hasOwnProperty(s) && i.setRequestHeader(s, o[s]);
    (i.withCredentials = !0), i.send(r);
  }
  function y(e) {
    return void 0 !== e && e && e.constructor === Array;
  }
  function g(e, t) {
    var n = window["HTML".concat(e, "Element")];
    if (void 0 !== n) {
      var o = Object.getOwnPropertyDescriptor(n.prototype, t);
      void 0 !== o && Object.defineProperty(n.prototype, "_wm_".concat(t), o);
    }
  }
  function w(e) {
    var t =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "src",
      n = "_wm_".concat(t);
    return n in e.__proto__ ? e[n] : e[t];
  }
  g("Image", "src"),
    g("Media", "src"),
    g("Embed", "src"),
    g("IFrame", "src"),
    g("Script", "src"),
    g("Link", "href"),
    g("Anchor", "href");
  var b = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    S = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    T = {
      Y: function (e) {
        return e.getUTCFullYear();
      },
      m: function (e) {
        return e.getUTCMonth() + 1;
      },
      b: function (e) {
        return S[e.getUTCMonth()];
      },
      B: function (e) {
        return b[e.getUTCMonth()];
      },
      d: function (e) {
        return e.getUTCDate();
      },
      H: function (e) {
        return ("0" + e.getUTCHours()).slice(-2);
      },
      M: function (e) {
        return ("0" + e.getUTCMinutes()).slice(-2);
      },
      S: function (e) {
        return ("0" + e.getUTCSeconds()).slice(-2);
      },
      "%": function () {
        return "%";
      },
    };
  function C(e) {
    var t = (function (e) {
      return (
        "number" == typeof e && (e = e.toString()),
        [
          e.slice(-14, -10),
          e.slice(-10, -8),
          e.slice(-8, -6),
          e.slice(-6, -4),
          e.slice(-4, -2),
          e.slice(-2),
        ]
      );
    })(e);
    return new Date(Date.UTC(t[0], t[1] - 1, t[2], t[3], t[4], t[5]));
  }
  function M(e) {
    return S[e];
  }
  function _(e, t) {
    return t.replace(/%./g, function (t) {
      var n = T[t[1]];
      return n ? n(C(e)) : t;
    });
  }
  var k = window.Date;
  function x(e, t) {
    return (e = e.toString()).length >= t
      ? e
      : "00000000".substring(0, t - e.length) + e;
  }
  function E(e) {
    for (var t = 0, n = 0; n < e.length; n++)
      t = Math.max(t, Math.max.apply(null, e[n][1]));
    if (
      (function (e) {
        for (var t = 0, n = 1e3, o = 0; o < e.length; o++) {
          var r = e[o];
          (t = Math.max(t, Math.max.apply(null, r[1]))),
            (n = Math.min(n, Math.min.apply(null, r[1].filter(Boolean))));
        }
        return Math.log1p(t) - Math.log1p(n) > 3;
      })(e)
    ) {
      var o = [];
      for (n = 0; n < e.length; n++) {
        var r = e[n];
        o.push([r[0], r[1].map(Math.log1p)]);
      }
      (e = o), (t = Math.log1p(t));
    }
    return [e, t];
  }
  function H(e, t) {
    var n =
      ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
    if (!n) {
      if (
        Array.isArray(e) ||
        (n = (function (e, t) {
          if (!e) return;
          if ("string" == typeof e) return L(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          "Object" === n && e.constructor && (n = e.constructor.name);
          if ("Map" === n || "Set" === n) return Array.from(e);
          if (
            "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return L(e, t);
        })(e)) ||
        (t && e && "number" == typeof e.length)
      ) {
        n && (e = n);
        var o = 0,
          r = function () {};
        return {
          s: r,
          n: function () {
            return o >= e.length ? { done: !0 } : { done: !1, value: e[o++] };
          },
          e: function (e) {
            throw e;
          },
          f: r,
        };
      }
      throw new TypeError(
        "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
      );
    }
    var i,
      s = !0,
      a = !1;
    return {
      s: function () {
        n = n.call(e);
      },
      n: function () {
        var e = n.next();
        return (s = e.done), e;
      },
      e: function (e) {
        (a = !0), (i = e);
      },
      f: function () {
        try {
          s || null == n.return || n.return();
        } finally {
          if (a) throw i;
        }
      },
    };
  }
  function L(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
    return o;
  }
  function A(e, t, n) {
    var o = n("wm-capresources");
    o.innerHTML = "";
    var r = n("wm-capresources-loading");
    r.style.display = "block";
    var i = C(e).getTime(),
      s = 0;
    t = window.location.origin + t;
    var a = [];
    function l(e, n) {
      var o,
        r =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : "src",
        i = window.location.origin,
        s = H(U(window, e));
      try {
        for (s.s(); !(o = s.n()).done; ) {
          var l = o.value;
          if (!n || n(l)) {
            var c = w(l, r);
            c &&
              !c.startsWith(t) &&
              c.startsWith(i) &&
              (c.startsWith("data:") || a.push(c));
          }
        }
      } catch (e) {
        s.e(e);
      } finally {
        s.f();
      }
    }
    l("img"),
      l("frame"),
      l("iframe", function (e) {
        return "playback" !== e.id;
      }),
      l("script"),
      l(
        "link",
        function (e) {
          return "stylesheet" === e.rel;
        },
        "href"
      );
    var c = a.filter(function (e, t, n) {
      return n.indexOf(e) === t;
    });
    c.length > 0
      ? ((s = 0),
        c.map(function (e) {
          e.match("^https?://") &&
            (s++,
            v("HEAD", e, function (e) {
              if (200 == e.status) {
                var t = e.getResponseHeader("Memento-Datetime");
                if (null == t) console.log("%s: no Memento-Datetime", u);
                else {
                  var n = document.createElement("span"),
                    a = (function (e, t) {
                      var n = new Date(e).getTime() - t,
                        o = "";
                      n < 0 ? ((o += "-"), (n = Math.abs(n))) : (o += "+");
                      var r = !1;
                      if (n < 1e3) return { delta: n, text: "", highlight: r };
                      var i = n,
                        s = Math.floor(n / 1e3 / 60 / 60 / 24 / 30 / 12);
                      n -= 1e3 * s * 60 * 60 * 24 * 30 * 12;
                      var a = Math.floor(n / 1e3 / 60 / 60 / 24 / 30);
                      n -= 1e3 * a * 60 * 60 * 24 * 30;
                      var l = Math.floor(n / 1e3 / 60 / 60 / 24);
                      n -= 1e3 * l * 60 * 60 * 24;
                      var c = Math.floor(n / 1e3 / 60 / 60);
                      n -= 1e3 * c * 60 * 60;
                      var u = Math.floor(n / 1e3 / 60);
                      n -= 1e3 * u * 60;
                      var h = Math.floor(n / 1e3),
                        f = [];
                      return (
                        s > 1
                          ? (f.push(s + " years"), (r = !0))
                          : 1 == s && (f.push(s + " year"), (r = !0)),
                        a > 1
                          ? (f.push(a + " months"), (r = !0))
                          : 1 == a && (f.push(a + " month"), (r = !0)),
                        l > 1
                          ? f.push(l + " days")
                          : 1 == l && f.push(l + " day"),
                        c > 1
                          ? f.push(c + " hours")
                          : 1 == c && f.push(c + " hour"),
                        u > 1
                          ? f.push(u + " minutes")
                          : 1 == u && f.push(u + " minute"),
                        h > 1
                          ? f.push(h + " seconds")
                          : 1 == h && f.push(h + " second"),
                        f.length > 2 && (f = f.slice(0, 2)),
                        { delta: i, text: o + f.join(" "), highlight: r }
                      );
                    })(t, i),
                    l = a.highlight ? "color:red;" : "";
                  (n.innerHTML = " " + a.text),
                    (n.title = t),
                    n.setAttribute("style", l);
                  var c = e.getResponseHeader("Content-Type"),
                    u = e.responseURL.replace(window.location.origin, ""),
                    h = document.createElement("a");
                  (h.innerHTML = u.split("/").splice(3).join("/")),
                    (h._wm_href = u),
                    (h.title = c),
                    (h.onmouseover = N),
                    (h.onmouseout = j);
                  var f = document.createElement("div");
                  f.setAttribute("data-delta", a.delta),
                    f.appendChild(h),
                    f.append(n),
                    o.appendChild(f);
                  var p = Array.prototype.slice.call(o.childNodes, 0);
                  p.sort(function (e, t) {
                    return (
                      t.getAttribute("data-delta") -
                      e.getAttribute("data-delta")
                    );
                  }),
                    (o.innerHTML = "");
                  for (var d = 0, m = p.length; d < m; d++) o.appendChild(p[d]);
                }
              }
              0 == --s && (r.style.display = "none");
            }));
        }))
      : ((o.innerHTML = "There are no sub-resources in the page."),
        (r.style.display = "none"));
  }
  function O(e, t) {
    for (
      var n = t.split("/").splice(6).join("/"),
        o = e.document.querySelectorAll(
          "img[src$='" +
            n +
            "'], iframe[src$='" +
            n +
            "'], frame[src$='" +
            n +
            "']"
        ),
        r = Array.prototype.slice.call(o),
        i = 0;
      i < e.frames.length;
      i++
    )
      try {
        var s = O(e.frames[i].window, t);
        r = r.concat(s);
      } catch (e) {}
    return r;
  }
  function R(e) {
    return "FRAME" == e.tagName || "IFRAME" == e.tagName
      ? e.contentWindow.document.documentElement
      : e;
  }
  function N(e) {
    var t = O(window, e.target.href);
    if (t.length > 0)
      for (var n = 0; n < t.length; n++) R(t[n]).classList.add("wb-highlight");
  }
  function j(e) {
    var t = O(window, e.target.href);
    if (t.length > 0)
      for (var n = 0; n < t.length; n++)
        R(t[n]).classList.remove("wb-highlight");
  }
  function U(e, t) {
    for (
      var n = e.document.getElementsByTagName(t),
        o = Array.prototype.slice.call(n),
        r = 0;
      r < e.frames.length;
      r++
    )
      try {
        var i = U(e.frames[r].window, t);
        o = o.concat(i);
      } catch (e) {}
    return o;
  }
  function I(e) {
    return (
      (I =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            }),
      I(e)
    );
  }
  function P(e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }
  function D(e, t) {
    for (var n = 0; n < t.length; n++) {
      var o = t[n];
      (o.enumerable = o.enumerable || !1),
        (o.configurable = !0),
        "value" in o && (o.writable = !0),
        Object.defineProperty(
          e,
          ((r = o.key),
          (i = void 0),
          (i = (function (e, t) {
            if ("object" !== I(e) || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var o = n.call(e, t || "default");
              if ("object" !== I(o)) return o;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === t ? String : Number)(e);
          })(r, "string")),
          "symbol" === I(i) ? i : String(i)),
          o
        );
    }
    var r, i;
  }
  function q(e, t, n) {
    return (
      t && D(e.prototype, t),
      n && D(e, n),
      Object.defineProperty(e, "prototype", { writable: !1 }),
      e
    );
  }
  function B(e, t) {
    return e.classList
      ? e.classList.contains(t)
      : new RegExp("\\b" + t + "\\b").test(e.className);
  }
  function F(e, t, n) {
    e.attachEvent ? e.attachEvent("on" + t, n) : e.addEventListener(t, n);
  }
  function W(e, t, n) {
    e.detachEvent ? e.detachEvent("on" + t, n) : e.removeEventListener(t, n);
  }
  function X(e, t, n, o) {
    F(o || document, t, function (t) {
      for (var o, r = t.target || t.srcElement; r && !(o = B(r, e)); )
        r = r.parentElement;
      o && n.call(r, t);
    });
  }
  var Y = (function () {
      function e(t, n) {
        P(this, e),
          (this.input = t),
          (this.source = 0),
          (this.minChars = 3),
          (this.delay = 150),
          (this.offsetLeft = 0),
          (this.offsetTop = 0),
          (this.cache = !0),
          (this.menuClass = ""),
          Object.assign(this, n),
          (this.root = this.input.getRootNode()),
          this.cache && (this.cache = {}),
          (this.sc = document.createElement("div")),
          (this.sc.className = "wb-autocomplete-suggestions " + this.menuClass),
          this.root.appendChild(this.sc);
        this.selector;
        (this.autocompleteAttr = t.getAttribute("autocomplete")),
          t.setAttribute("autocomplete", "off"),
          (this.last_val = ""),
          (this.updateSC = this.updateSC.bind(this)),
          (this.blurHandler = this.blurHandler.bind(this)),
          (this.keydownHandler = this.keydownHandler.bind(this)),
          (this.keyupHandler = this.keyupHandler.bind(this)),
          (this.focusHandler = this.focusHandler.bind(this)),
          F(window, "resize", this.updateSC),
          F(t, "blur", this.blurHandler),
          F(t, "keydown", this.keydownHandler),
          F(t, "keyup", this.keyupHandler),
          this.minChars || F(t, "focus", this.focusHandler);
        var o = this;
        X(
          "wb-autocomplete-suggestion",
          "mouseleave",
          function (e) {
            var t = o.sc.querySelector(".autocomplete-suggestion.selected");
            t &&
              setTimeout(function () {
                t.className = t.className.replace("selected", "");
              }, 20);
          },
          this.sc
        ),
          X(
            "wb-autocomplete-suggestion",
            "mouseover",
            function (e) {
              var t = o.sc.querySelector(
                ".wb-autocomplete-suggestion.selected"
              );
              t && (t.className = t.className.replace("selected", "")),
                (this.className += " selected");
            },
            this.sc
          ),
          X(
            "wb-autocomplete-suggestion",
            "mousedown",
            function (e) {
              if (B(this, "wb-autocomplete-suggestion")) {
                var t = this.getAttribute("data-val");
                (o.input.value = t),
                  o.onSelect(e, t, this),
                  (o.sc.style.display = "none");
              }
            },
            this.sc
          );
      }
      return (
        q(e, [
          {
            key: "unload",
            value: function () {
              W(window, "resize", this.updateSC),
                W(this.input, "blur", this.blurHandler),
                W(this.input, "focus", this.focusHandler),
                W(this.input, "keydown", this.keydownHandler),
                W(this.input, "keyup", this.keyupHandler),
                this.autocompleteAttr
                  ? this.setAttribute("autocomplete", this.autocompleteAttr)
                  : this.removeAttribute("autocomplete"),
                this.root.removeChild(this.sc);
            },
          },
          {
            key: "updateSC",
            value: function (e, t) {
              var n = this.input.getBoundingClientRect();
              if (
                ((this.sc.style.left =
                  Math.round(
                    n.left +
                      (window.pageXOffset ||
                        document.documentElement.scrollLeft) +
                      this.offsetLeft
                  ) + "px"),
                (this.sc.style.top =
                  Math.round(
                    n.bottom +
                      (window.pageYOffset ||
                        document.documentElement.scrollTop) +
                      this.offsetTop
                  ) + "px"),
                (this.sc.style.width = Math.round(n.right - n.left) + "px"),
                !e)
              )
                if (
                  ((this.sc.style.display = "block"),
                  this.sc.maxHeight ||
                    (this.sc.maxHeight = parseInt(
                      (window.getComputedStyle
                        ? getComputedStyle(this.sc, null)
                        : this.sc.currentStyle
                      ).maxHeight
                    )),
                  this.sc.suggestionHeight ||
                    (this.sc.suggestionHeight = this.sc.querySelector(
                      ".wb-autocomplete-suggestion"
                    ).offsetHeight),
                  this.sc.suggestionHeight)
                )
                  t || (this.sc.scrollTop = 0);
                else {
                  var o = this.sc.scrollTop,
                    r =
                      t.getBoundingClientRect().top -
                      this.sc.getBoundingClientRect().top;
                  r + this.sc.suggestionHeight - this.sc.maxHeight > 0
                    ? (this.sc.scrollTop =
                        r + this.sc.suggestionHeight + o - this.sc.maxHeight)
                    : r < 0 && (this.sc.scrollTop = r + o);
                }
            },
          },
          {
            key: "blurHandler",
            value: function () {
              var e = this;
              try {
                var t = this.root.querySelector(
                  ".wb-autocomplete-suggestions:hover"
                );
              } catch (e) {
                t = null;
              }
              t
                ? this.input !== document.activeElement &&
                  setTimeout(function () {
                    return e.focus();
                  }, 20)
                : ((this.last_val = this.input.value),
                  (this.sc.style.display = "none"),
                  setTimeout(function () {
                    return (e.sc.style.display = "none");
                  }, 350));
            },
          },
          {
            key: "suggest",
            value: function (e) {
              var t = this.input.value;
              if (
                ((this.cache[t] = e), e.length && t.length >= this.minChars)
              ) {
                for (var n = "", o = 0; o < e.length; o++)
                  n += this.renderItem(e[o], t);
                (this.sc.innerHTML = n), this.updateSC(0);
              } else this.sc.style.display = "none";
            },
          },
          {
            key: "keydownHandler",
            value: function (e) {
              var t,
                n = this,
                o = window.event ? e.keyCode : e.which;
              if ((40 == o || 38 == o) && this.sc.innerHTML)
                return (
                  (r = this.sc.querySelector(
                    ".wb-autocomplete-suggestion.selected"
                  ))
                    ? (t = 40 == o ? r.nextSibling : r.previousSibling)
                      ? ((r.className = r.className.replace("selected", "")),
                        (t.className += " selected"),
                        (this.input.value = t.getAttribute("data-val")))
                      : ((r.className = r.className.replace("selected", "")),
                        (this.input.value = this.last_val),
                        (t = 0))
                    : (((t =
                        40 == o
                          ? this.sc.querySelector(".wb-autocomplete-suggestion")
                          : this.sc.childNodes[
                              this.sc.childNodes.length - 1
                            ]).className += " selected"),
                      (this.input.value = t.getAttribute("data-val"))),
                  this.updateSC(0, t),
                  !1
                );
              if (27 == o)
                (this.value = this.last_val), (this.sc.style.display = "none");
              else if (13 == o || 9 == o) {
                var r;
                (r = this.sc.querySelector(
                  ".wb-autocomplete-suggestion.selected"
                )) &&
                  "none" != this.sc.style.display &&
                  (this.onSelect(e, r.getAttribute("data-val"), r),
                  setTimeout(function () {
                    n.sc.style.display = "none";
                  }, 20));
              }
            },
          },
          {
            key: "keyupHandler",
            value: function (e) {
              var t = this,
                n = window.event ? e.keyCode : e.which;
              if (!n || ((n < 35 || n > 40) && 13 != n && 27 != n)) {
                var o = this.input.value;
                if (o.length >= this.minChars) {
                  if (o != this.last_val) {
                    if (
                      ((this.last_val = o),
                      clearTimeout(this.timer),
                      this.cache)
                    ) {
                      if (o in this.cache)
                        return void this.suggest(this.cache[o]);
                      for (var r = 1; r < o.length - this.minChars; r++) {
                        var i = o.slice(0, o.length - r);
                        if (i in this.cache && !this.cache[i].length)
                          return void this.suggest([]);
                      }
                    }
                    this.timer = setTimeout(function () {
                      t.source(o, t.suggest.bind(t));
                    }, this.delay);
                  }
                } else (this.last_val = o), (this.sc.style.display = "none");
              }
            },
          },
          {
            key: "focusHandler",
            value: function (e) {
              (this.last_val = "\n"), this.keyupHandler(e);
            },
          },
          {
            key: "renderItem",
            value: function (e, t) {
              t = t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
              var n = new RegExp("(" + t.split(" ").join("|") + ")", "gi");
              return (
                '<div class="wb-autocomplete-suggestion" data-val="' +
                e +
                '">' +
                e.replace(n, "<b>$1</b>") +
                "</div>"
              );
            },
          },
          { key: "onSelect", value: function (e, t, n) {} },
        ]),
        e
      );
    })(),
    $ = (function () {
      function e(t, n) {
        P(this, e);
        var o = t.getRootNode();
        if (o.querySelector) {
          var r = "object" == I(t) ? [t] : o.querySelectorAll(t);
          this.elems = r.map(function (e) {
            return new Y(e, n);
          });
        }
      }
      return (
        q(e, [
          {
            key: "destroy",
            value: function () {
              for (; this.elems.length > 0; ) this.elems.pop().unload();
            },
          },
        ]),
        e
      );
    })();
  function J(e) {
    return (
      (J =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            }),
      J(e)
    );
  }
  function G(e, t) {
    for (var n = 0; n < t.length; n++) {
      var o = t[n];
      (o.enumerable = o.enumerable || !1),
        (o.configurable = !0),
        "value" in o && (o.writable = !0),
        Object.defineProperty(
          e,
          ((r = o.key),
          (i = void 0),
          (i = (function (e, t) {
            if ("object" !== J(e) || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var o = n.call(e, t || "default");
              if ("object" !== J(o)) return o;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === t ? String : Number)(e);
          })(r, "string")),
          "symbol" === J(i) ? i : String(i)),
          o
        );
    }
    var r, i;
  }
  var z = JSON;
  var V = (function () {
    function e(t, n, o) {
      var r = this;
      !(function (e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      })(this, e),
        (this.el = t),
        (this.url = n),
        (this.timestamp = o),
        (t.onclick = this.save.bind(this)),
        document.addEventListener("DOMContentLoaded", function () {
          var e;
          r.enableSaveSnapshot(
            ((e = "logged-in-user"), document.cookie.search(e) >= 0)
          );
        });
    }
    var t, n, o;
    return (
      (t = e),
      (n = [
        {
          key: "save",
          value: function (e) {
            var t, n, o, r;
            this.start(),
              (t = this.url),
              (n = this.timestamp),
              (o = []),
              (r =
                (r = {
                  failure: this.failure.bind(this),
                  success: this.success.bind(this),
                }) || {}),
              v(
                "POST",
                "/__wb/web-archive/",
                function (e) {
                  401 === e.status
                    ? r.userNotLoggedIn && r.userNotLoggedIn(e)
                    : e.status >= 400
                    ? r.failure && r.failure(e)
                    : r.success && r.success(e);
                },
                { "Content-Type": "application/json" },
                z.stringify({ url: t, snapshot: n, tags: o || [] })
              );
          },
        },
        {
          key: "start",
          value: function () {
            this.hide([
              "wm-save-snapshot-fail",
              "wm-save-snapshot-open",
              "wm-save-snapshot-success",
            ]),
              this.show(["wm-save-snapshot-in-progress"]);
          },
        },
        {
          key: "failure",
          value: function (e) {
            401 == e.status
              ? this.userNotLoggedIn(e)
              : (this.hide([
                  "wm-save-snapshot-in-progress",
                  "wm-save-snapshot-success",
                ]),
                this.show(["wm-save-snapshot-fail", "wm-save-snapshot-open"]),
                console.log("You have got an error."),
                console.log(
                  "If you think something wrong here please send it to support."
                ),
                console.log('Response: "' + e.responseText + '"'),
                console.log('status: "' + e.status + '"'));
          },
        },
        {
          key: "success",
          value: function (e) {
            this.hide([
              "wm-save-snapshot-fail",
              "wm-save-snapshot-in-progress",
            ]),
              this.show(["wm-save-snapshot-open", "wm-save-snapshot-success"]);
          },
        },
        {
          key: "enableSaveSnapshot",
          value: function () {
            arguments.length > 0 && void 0 !== arguments[0] && !arguments[0]
              ? (this.hide([
                  "wm-save-snapshot-open",
                  "wm-save-snapshot-in-progress",
                ]),
                this.show("wm-sign-in"))
              : (this.show("wm-save-snapshot-open"), this.hide("wm-sign-in"));
          },
        },
        {
          key: "show",
          value: function (e) {
            this.setDisplayStyle(e, "inline-block");
          },
        },
        {
          key: "hide",
          value: function (e) {
            this.setDisplayStyle(e, "none");
          },
        },
        {
          key: "setDisplayStyle",
          value: function (e, t) {
            var n = this;
            (y(e) ? e : [e]).forEach(function (e) {
              var o = n.el.getRootNode().getElementById(e);
              o && (o.style.display = t);
            });
          },
        },
      ]),
      n && G(t.prototype, n),
      o && G(t, o),
      Object.defineProperty(t, "prototype", { writable: !1 }),
      e
    );
  })();
  function K(e, t) {
    var n =
      ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
    if (!n) {
      if (
        Array.isArray(e) ||
        (n = (function (e, t) {
          if (!e) return;
          if ("string" == typeof e) return Q(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          "Object" === n && e.constructor && (n = e.constructor.name);
          if ("Map" === n || "Set" === n) return Array.from(e);
          if (
            "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return Q(e, t);
        })(e)) ||
        (t && e && "number" == typeof e.length)
      ) {
        n && (e = n);
        var o = 0,
          r = function () {};
        return {
          s: r,
          n: function () {
            return o >= e.length ? { done: !0 } : { done: !1, value: e[o++] };
          },
          e: function (e) {
            throw e;
          },
          f: r,
        };
      }
      throw new TypeError(
        "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
      );
    }
    var i,
      s = !0,
      a = !1;
    return {
      s: function () {
        n = n.call(e);
      },
      n: function () {
        var e = n.next();
        return (s = e.done), e;
      },
      e: function (e) {
        (a = !0), (i = e);
      },
      f: function () {
        try {
          s || null == n.return || n.return();
        } finally {
          if (a) throw i;
        }
      },
    };
  }
  function Q(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
    return o;
  }
  var Z,
    ee,
    te = window.JSON,
    ne = window.open,
    oe = window.Date,
    re = window.fetch,
    ie = document,
    se = document,
    ae = function (e) {
      return se.getElementById(e);
    };
  var le,
    ce = "/static/";
  function ue(e) {
    Z.classList.contains("wm-closed")
      ? (e && ee.classList.add("notice-only"),
        Z.classList.replace("wm-closed", "wm-open"),
        (ee.style.display = "block"),
        A(le, ce, ae))
      : (Z.classList.replace("wm-open", "wm-closed"),
        (ee.style.display = "none"),
        ee.classList.remove("notice-only"));
  }
  function he(e, t) {
    var n = ae(e);
    n && (n.style.visibility = t ? "visible" : "hidden");
  }
  function fe(e, t) {
    y(e) || (e = [e]);
    for (var n = 0; n < e.length; n++) he(e[n], t);
  }
  var pe = /web\/(\d*)\/http:\/\/web\.archive\.org\/screenshot/g;
  window.__wm = {
    init: function (t) {
      !(function () {
        var e = document.cookie.split(";");
        if (e.length > 40)
          for (var t = 0; t < e.length; t++) {
            s(e[t].split("=")[0].trim());
          }
      })(),
        (e = t),
        (document.createElementNS = function (t, o) {
          return (
            0 == t.indexOf(e) &&
              (t = t.substring(e.length).replace(/\/?[0-9]+\//, "")),
            n.createElementNS.call(this, t, o)
          );
        });
    },
    wombat: function (e, n, r, i, s, a) {
      var l = "".concat(r).concat(i, "/"),
        c = new URL(r),
        u = r.replace(/^https?:/, ""),
        h = [
          "http://analytics.archive.org/",
          "https://analytics.archive.org/",
          "//analytics.archive.org/",
          "/__wb/",
          "/".concat(i, "/"),
          r,
          u,
        ];
      s.startsWith(r) ||
        s.startsWith(u) ||
        (h.push(s), /^\/\//.test(s) ? h.push(c.protocol + s) : /^\//.test(s));
      var f = new URL(e),
        p = {
          url: e,
          timestamp: n,
          prefix: l,
          coll: i,
          static_prefix: s,
          request_ts: n,
          proxy_magic: "",
          mod: "",
          is_framed: !1,
          is_live: !1,
          enable_auto_fetch: !0,
          auto_fetch_worker_prefix: l,
          wombat_ts: n,
          wombat_sec: a,
          wombat_scheme: (f.protocol || "http").replace(/:$/, ""),
          wombat_host: f.host,
          wombat_opts: { no_rewrite_prefixes: h },
        };
      if ("undefined" != typeof _WBWombat) {
        var d = _WBWombat.prototype.rewriteUrl;
        return (
          (_WBWombat.prototype.rewriteUrl = function (e) {
            for (
              var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
              r < t;
              r++
            )
              n[r - 1] = arguments[r];
            return o ? d.call.apply(d, [this, e].concat(n)) : e;
          }),
          ((t = _WBWombat(window, p)).actual = !0),
          (window._wb_wombat = t.wombatInit()),
          (window._wb_wombat.actual = !0),
          t
        );
      }
    },
    rw: r,
    bt: function (e, t, n, o, r, s, a, l, c, u, h) {
      var f;
      ce = c || "/static/";
      var p,
        d,
        m,
        y = "/" + (r || "web") + "/",
        g = C((le = a)),
        w = g.getUTCFullYear(),
        b = g.getUTCMonth() + 1,
        S = g.getUTCDate(),
        T = -1,
        H = -1,
        L = ae("wm-ipp-base");
      if (L.attachShadow) {
        var A = L.attachShadow({ mode: "closed" });
        for (se = A; L.children.length > 0; ) A.appendChild(L.children[0]);
        if (u)
          for (var O = 0; O < u.length; O++) {
            var R = ie.createElement("link");
            R.setAttribute("rel", "stylesheet"),
              R.setAttribute("type", "text/css"),
              R.setAttribute("href", u[O]),
              A.appendChild(R);
          }
      }
      function N() {
        var e =
          ae("donato").offsetHeight +
          (ae("wm-ipp-inside").offsetHeight - ae("wm-capinfo").offsetHeight);
        console.debug("adjustHeight: baseHeight=%s", e + "px"),
          (L.style.height = e + "px");
      }
      window.top == window.self && (L.style.display = "block");
      var j = !1,
        U = !0,
        I =
          null === (f = ae("donato-if")) || void 0 === f
            ? void 0
            : f.contentWindow,
        P = ae("donato");
      if ((console.debug("$donato = %o", P), P))
        if (window.top != window.self)
          (P.style.display = "none"),
            console.debug("hid $donato as window.top != window.self");
        else {
          var D = ae("donato-base");
          window.addEventListener(
            "message",
            function (e) {
              if (e.source === I) {
                var t = "string" == typeof e.data ? te.parse(e.data) : e.data;
                if (
                  (console.log("got message %o", t), "set height" == t.event)
                ) {
                  var n = t.value,
                    o = t.bannerHeight;
                  if ("number" != typeof n || n <= 0) return;
                  if (!U) return;
                  if ((t.value, j)) return;
                  (P.style.height = o + "px"), (D.style.height = n + "px"), N();
                } else if ("open modal" == t.event)
                  (D.style.height = ""),
                    document.body.classList.add("wm-modal"),
                    window.scrollTo(0, 0),
                    (j = !0);
                else if ("close modal" == t.event)
                  (P.style.marginBottom = "0px"),
                    document.body.classList.remove("wm-modal"),
                    (j = !1);
                else if ("hide banner" == t.event) {
                  (P.style.height = 0), (P.style.visibility = "hidden");
                  var r = new oe(oe.now() + 24 * t.value * 3600 * 1e3);
                  (document.cookie =
                    "donation=x; domain=archive.org; path=/; expires=" +
                    r.toUTCString()),
                    (U = !1),
                    (j = !1),
                    0,
                    N();
                }
              }
            },
            !1
          ),
            console.debug("installed message listener to #donato-base: %o", D);
        }
      ae("wm-tb-close").addEventListener("click", function (e) {
        (ae("wm-ipp-inside").style.display = "none"), e.preventDefault(), N();
      });
      var q = ae("wm-ipp-sparkline");
      function B(e) {
        var t = "mouseenter" == e.type ? 1 : 0;
        if (t !== p) {
          var n = ae("wm-ipp"),
            o = ae("displayYearEl"),
            r = ae("displayMonthEl"),
            i = ae("displayDayEl");
          t
            ? (n.className = "hi")
            : ((n.className = ""),
              (o.innerHTML = w),
              (r.innerHTML = M(b - 1)),
              (i.innerHTML = x(S, 2))),
            (d.style.display = t ? "inline" : "none"),
            (m.style.display = t ? "inline" : "none"),
            (p = t);
        }
      }
      (Z = ae("wm-expand")),
        (ee = ae("wm-capinfo")),
        (ae("wm-graph-anchor")._no_rewrite = !0),
        ((d = ie.createElement("div")).className = "yt"),
        (d.style.display = "none"),
        (d.style.width = n + "px"),
        (d.style.height = t + "px"),
        ((m = ie.createElement("div")).className = "mt"),
        (m.style.display = "none"),
        (m.style.width = o + "px"),
        (m.style.height = t + "px"),
        q.appendChild(d),
        q.appendChild(m);
      var F = ae("wm-sparkline-canvas");
      (q.onmouseenter = B),
        (q.onmouseleave = B),
        (q.onmousemove = function (t) {
          var r,
            i,
            a = q,
            c = (function (e) {
              var t = 0;
              return (
                e.pageX || e.pageY
                  ? (t = e.pageX)
                  : (e.clientX || e.clientY) &&
                    (t =
                      e.clientX +
                      document.body.scrollLeft +
                      document.documentElement.scrollLeft),
                t
              );
            })(t),
            u =
              ((r = a),
              (i = ie.documentElement),
              (void 0 !== r.getBoundingClientRect
                ? r.getBoundingClientRect()
                : { top: 0, left: 0 }
              ).left +
                (window.scrollX || i.scrollLeft) -
                (i.clientLeft || 0)),
            h = Math.min(Math.max(0, c - u), e),
            f = h % n,
            p = Math.floor(h / n),
            v = Math.min(11, Math.floor(f / o)),
            g = 12 * p + v,
            w = f % 2 == 1 ? 15 : 1,
            b = x(p + l) + x(v + 1, 2) + x(w, 2) + "000000";
          (ae("displayYearEl").innerHTML = p + l),
            (ae("displayMonthEl").innerHTML = M(v));
          var S = y + b + "/" + s;
          if (((ae("wm-graph-anchor").href = S), T != p)) {
            var C = p * n;
            (d.style.left = C + "px"), (T = p);
          }
          if (H != g) {
            var _ = p + g * o + 1;
            (m.style.left = _ + "px"), (H = g);
          }
        });
      var W = ae("wm-sparkline-canvas");
      if (W.getContext && W.getContext("2d")) {
        v(
          "GET",
          "/__wb/sparkline?output=json&url=" +
            encodeURIComponent(s) +
            ((r && "&collection=" + r) || ""),
          function (n) {
            if (200 == n.status) {
              for (
                var o = te.parse(n.responseText),
                  r = o.years,
                  i = Object.getOwnPropertyNames(r),
                  a = (o.years = []),
                  c = 0;
                c < i.length;
                c++
              ) {
                var u = i[c];
                r[u] && a.push([u, r[u]]);
              }
              !(function (e) {
                for (
                  var t = ae("wm-nav-captures"),
                    n = 0,
                    o = e.years,
                    r = e.first_ts,
                    i = e.last_ts,
                    a = 0;
                  a < o.length;
                  a++
                )
                  for (var l = o[a][1], c = 0; c < l.length; c++) n += l[c];
                var u,
                  h = document.createElement("a");
                (h.className = "t"),
                  (h._no_rewrite = !0),
                  (h.href = "".concat(y, "*/").concat(s)),
                  (h.title = "See a list of every capture for this URL"),
                  (h.innerText = ""
                    .concat(
                      ((u = n), ("" + u).replace(/\B(?=(\d{3})+$)/g, ",")),
                      " "
                    )
                    .concat(n > 1 ? "captures" : "capture"));
                var f = _(r, "%d %b %Y");
                i != r && (f += " - ".concat(_(i, "%d %b %Y")));
                var p = document.createElement("div");
                (p.className = "r"),
                  (p.title = "Timespan for captures of this URL"),
                  (p.innerText = f),
                  (t.innerHTML = ""),
                  t.appendChild(h),
                  t.appendChild(p);
              })(o),
                (function (e, t, n, o, r, i, s) {
                  var a = o.getContext("2d");
                  if (a) {
                    a.fillStyle = "#FFF";
                    var l = new k().getUTCFullYear(),
                      c = t / (l - r + 1),
                      u = E(e.years),
                      h = u[0],
                      f = n / u[1];
                    if (i >= r) {
                      var p = T(i);
                      (a.fillStyle = "#FFFFA5"), a.fillRect(p, 0, c, n);
                    }
                    for (var d = r; d <= l; d++)
                      (p = T(d)),
                        a.beginPath(),
                        a.moveTo(p, 0),
                        a.lineTo(p, n),
                        (a.lineWidth = 1),
                        (a.strokeStyle = "#CCC"),
                        a.stroke();
                    s = parseInt(s) - 1;
                    for (var m = (c - 1) / 12, v = 0; v < h.length; v++) {
                      d = h[v][0];
                      for (var y = h[v][1], g = T(d) + 1, w = 0; w < 12; w++) {
                        var b = y[w];
                        if (b > 0) {
                          var S = Math.ceil(b * f);
                          (a.fillStyle = d == i && w == s ? "#EC008C" : "#000"),
                            a.fillRect(
                              Math.round(g),
                              Math.ceil(n - S),
                              Math.ceil(m),
                              Math.round(S)
                            );
                        }
                        g += m;
                      }
                    }
                  }
                  function T(e) {
                    return Math.ceil((e - r) * c) + 0.5;
                  }
                })(o, e, t, W, l, w, b);
            }
          }
        );
      } else {
        var X = new Image();
        (X.src =
          "/__wb/sparkline?url=" +
          encodeURIComponent(s) +
          "&width=" +
          e +
          "&height=" +
          t +
          "&selected_year=" +
          w +
          "&selected_month=" +
          b +
          ((r && "&collection=" + r) || "")),
          (X.alt = "sparkline"),
          (X.width = e),
          (X.height = t),
          (X.id = "sparklineImgId"),
          (X.border = "0"),
          F.parentNode.replaceChild(X, F);
      }
      function Y(e) {
        for (var t = [], n = e.length, o = 0; o < n; o++)
          void 0 === e[o].excluded && t.push(e[o].display_name);
        return t;
      }
      (ae("wm-share-facebook").onclick = function (e) {
        var t = this.dataset.url;
        return (
          ne(
            "https://www.facebook.com/sharer/sharer.php?u=" +
              encodeURIComponent(t),
            "",
            "height=400,width=600"
          ),
          e.preventDefault(),
          !1
        );
      }),
        (ae("wm-share-twitter").onclick = function (e) {
          var t = this.dataset.url;
          return (
            ne(
              "https://twitter.com/intent/tweet?text=" +
                encodeURIComponent(t) +
                "&via=internetarchive",
              "",
              "height=446,width=600"
            ),
            e.preventDefault(),
            !1
          );
        }),
        new $(ae("wmtbURL"), {
          delay: 400,
          source: function (e, t) {
            v(
              "GET",
              "/__wb/search/host?q=" + encodeURIComponent(e),
              function (n) {
                if (
                  void 0 !== (n = te.parse(n.response)).hosts &&
                  n.hosts.length > 0
                ) {
                  var o = Y(n.hosts);
                  t(o);
                } else
                  void 0 !== n.isUrl && !0 === n.isUrl && void 0 === n.excluded
                    ? t([e])
                    : v(
                        "GET",
                        "/__wb/search/anchor?q=" + encodeURIComponent(e),
                        function (e) {
                          if (
                            void 0 !== (e = te.parse(e.response)) &&
                            e.length > 0
                          ) {
                            var n = Y(e.slice(0, 5));
                            t(n);
                          }
                        }
                      );
              }
            );
          },
          onSelect: function (e, t, n) {
            ae("wmtb").submit();
          },
        }),
        (ae("wmtb").onsubmit = function (e) {
          var t = ae("wmtbURL").value;
          if (
            0 !== t.indexOf("http://") &&
            0 !== t.indexOf("https://") &&
            !t.match(/[\w\.]{2,256}\.[a-z]{2,4}/gi)
          )
            return (
              (document.location.href = "/web/*/" + ae("wmtbURL").value),
              e.preventDefault(),
              !1
            );
        }),
        (function (e, t) {
          !(function (e, t, n) {
            !(function (e, t) {
              v("HEAD", e, function (e) {
                t(e.status < 300, e.responseURL);
              });
            })(
              "/web/" + t + "/http://web.archive.org/screenshot/" + e,
              function (e, o) {
                if (!e) return n(!1);
                var r = (function (e) {
                  var t = pe.exec(e);
                  if (t && t[1]) return t[1];
                  return null;
                })(o);
                if (!r)
                  return (
                    console.warn("failed to extract timestamp from %s", o),
                    void n(!1)
                  );
                var i = (C(r).getTime() - C(t).getTime()) / 1e3;
                console.log("screen shot delta: " + i + "s"),
                  n(i > 0 && i < 60, i);
              }
            );
          })(e, t, function (e, t) {
            e
              ? ((ae("wm-screenshot").title =
                  "screen shot (delta: " + t + "s)"),
                fe("wm-screenshot", !0))
              : fe("wm-screenshot", !1);
          });
        })(s, le),
        h &&
          (function (e, t) {
            !(function (e, t, n) {
              var o =
                "/web/" +
                t +
                "id_/http://wayback-metadata.archive.org/youtube-dl/" +
                e;
              v("GET", o, n);
            })(e, t, function (e) {
              if (e.status < 300) {
                var t = te.parse(e.responseText);
                fe("wm-video", !0),
                  (ae("wm-video").href = t.url),
                  (ae("wm-video").title = "Video: " + t.title);
              } else fe("wm-video", !1);
            });
          })(s, le);
      var J = ae("wm-capinfo-notice");
      if (J)
        if ("api" == J.getAttribute("source")) {
          var G =
            "https://wayback-api.archive.org/services/context/notices?url="
              .concat(encodeURIComponent(s), "&timestamp=")
              .concat(le);
          re(G, { credentials: "omit" })
            .then(function (e) {
              return e.json();
            })
            .then(function (e) {
              var t = e.status,
                n = e.notices;
              if ("success" == t && (null == n ? void 0 : n.length) > 0)
                try {
                  var o = document.createElement("div");
                  o.setAttribute(
                    "style",
                    "background-color:#666;color:#fff;font-weight:bold;text-align:center"
                  ),
                    (o.textContent = "NOTICE");
                  var r = document.createElement("div");
                  r.className = "wm-capinfo-content";
                  var s,
                    a = K(n);
                  try {
                    var l = function () {
                      var e = s.value;
                      "string" == typeof e.notice &&
                        i(function () {
                          var t = document.createElement("div");
                          (t.innerHTML = e.notice), r.appendChild(t);
                        });
                    };
                    for (a.s(); !(s = a.n()).done; ) l();
                  } catch (e) {
                    a.e(e);
                  } finally {
                    a.f();
                  }
                  J.appendChild(o),
                    i(function () {
                      return J.appendChild(r);
                    }),
                    ue(!0);
                } catch (e) {
                  console.error(
                    "failed to build content of %o - maybe notice text is malformed: %s",
                    J,
                    n
                  );
                }
            });
        } else ue(!0);
      new V(ae("wm-save-snapshot-open"), s, le);
    },
    ex: function (e) {
      e.stopPropagation(), ue(!1);
    },
    ajax: v,
    sp: function () {
      return ce;
    },
  };
})();
// @license-end
