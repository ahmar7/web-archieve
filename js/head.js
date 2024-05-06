var mi_version = "8.5.3";
var mi_track_user = true;
var mi_no_track_reason = "";

var disableStrs = ["ga-disable-UA-214539601-1"];

/* Function to detect opted out users */
function __gtagTrackerIsOptedOut() {
  for (var index = 0; index < disableStrs.length; index++) {
    if (document.cookie.indexOf(disableStrs[index] + "=true") > -1) {
      return true;
    }
  }

  return false;
}

/* Disable tracking if the opt-out cookie exists. */
if (__gtagTrackerIsOptedOut()) {
  for (var index = 0; index < disableStrs.length; index++) {
    window[disableStrs[index]] = true;
  }
}

/* Opt-out function */
function __gtagTrackerOptout() {
  for (var index = 0; index < disableStrs.length; index++) {
    document.cookie =
      disableStrs[index] +
      "=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/";
    window[disableStrs[index]] = true;
  }
}

if ("undefined" === typeof gaOptout) {
  function gaOptout() {
    __gtagTrackerOptout();
  }
}
window.dataLayer = window.dataLayer || [];

window.MonsterInsightsDualTracker = {
  helpers: {},
  trackers: {},
};
if (mi_track_user) {
  function __gtagDataLayer() {
    dataLayer.push(arguments);
  }

  function __gtagTracker(type, name, parameters) {
    if (!parameters) {
      parameters = {};
    }

    if (parameters.send_to) {
      __gtagDataLayer.apply(null, arguments);
      return;
    }

    if (type === "event") {
      parameters.send_to = monsterinsights_frontend.ua;
      __gtagDataLayer(type, name, parameters);
    } else {
      __gtagDataLayer.apply(null, arguments);
    }
  }
  __gtagTracker("js", new Date());
  __gtagTracker("set", {
    "developer_id.dZGIzZG": true,
  });
  __gtagTracker("config", "UA-214539601-1", {
    forceSSL: "true",
    link_attribution: "true",
  });
  window.gtag = __gtagTracker;
  (function () {
    /* https://developers.google.com/analytics/devguides/collection/analyticsjs/ */
    /* ga and __gaTracker compatibility shim. */
    var noopfn = function () {
      return null;
    };
    var newtracker = function () {
      return new Tracker();
    };
    var Tracker = function () {
      return null;
    };
    var p = Tracker.prototype;
    p.get = noopfn;
    p.set = noopfn;
    p.send = function () {
      var args = Array.prototype.slice.call(arguments);
      args.unshift("send");
      __gaTracker.apply(null, args);
    };
    var __gaTracker = function () {
      var len = arguments.length;
      if (len === 0) {
        return;
      }
      var f = arguments[len - 1];
      if (
        typeof f !== "object" ||
        f === null ||
        typeof f.hitCallback !== "function"
      ) {
        if ("send" === arguments[0]) {
          var hitConverted,
            hitObject = false,
            action;
          if ("event" === arguments[1]) {
            if ("undefined" !== typeof arguments[3]) {
              hitObject = {
                eventAction: arguments[3],
                eventCategory: arguments[2],
                eventLabel: arguments[4],
                value: arguments[5] ? arguments[5] : 1,
              };
            }
          }
          if ("pageview" === arguments[1]) {
            if ("undefined" !== typeof arguments[2]) {
              hitObject = {
                eventAction: "page_view",
                page_path: arguments[2],
              };
            }
          }
          if (typeof arguments[2] === "object") {
            hitObject = arguments[2];
          }
          if (typeof arguments[5] === "object") {
            Object.assign(hitObject, arguments[5]);
          }
          if ("undefined" !== typeof arguments[1].hitType) {
            hitObject = arguments[1];
            if ("pageview" === hitObject.hitType) {
              hitObject.eventAction = "page_view";
            }
          }
          if (hitObject) {
            action =
              "timing" === arguments[1].hitType
                ? "timing_complete"
                : hitObject.eventAction;
            hitConverted = mapArgs(hitObject);
            __gtagTracker("event", action, hitConverted);
          }
        }
        return;
      }

      function mapArgs(args) {
        var arg,
          hit = {};
        var gaMap = {
          eventCategory: "event_category",
          eventAction: "event_action",
          eventLabel: "event_label",
          eventValue: "event_value",
          nonInteraction: "non_interaction",
          timingCategory: "event_category",
          timingVar: "name",
          timingValue: "value",
          timingLabel: "event_label",
          page: "page_path",
          location: "page_location",
          title: "page_title",
        };
        for (arg in args) {
          if (!(!args.hasOwnProperty(arg) || !gaMap.hasOwnProperty(arg))) {
            hit[gaMap[arg]] = args[arg];
          } else {
            hit[arg] = args[arg];
          }
        }
        return hit;
      }

      try {
        f.hitCallback();
      } catch (ex) {}
    };
    __gaTracker.create = newtracker;
    __gaTracker.getByName = newtracker;
    __gaTracker.getAll = function () {
      return [];
    };
    __gaTracker.remove = noopfn;
    __gaTracker.loaded = true;
    window["__gaTracker"] = __gaTracker;
  })();
} else {
  console.log("");
  (function () {
    function __gtagTracker() {
      return null;
    }
    window["__gtagTracker"] = __gtagTracker;
    window["gtag"] = __gtagTracker;
  })();
}

window._wpemojiSettings = {
  baseUrl:
    "https://web.archive.org/web/20220522052634/https://s.w.org/images/core/emoji/13.1.0/72x72/",
  ext: ".png",
  svgUrl:
    "https://web.archive.org/web/20220522052634/https://s.w.org/images/core/emoji/13.1.0/svg/",
  svgExt: ".svg",
  source: {
    concatemoji:
      "https://web.archive.org/web/20220522052634/https://originalmega888.com/wp-includes/js/wp-emoji-release.min.js?ver=5.9.3",
  },
};
/*! This file is auto-generated */
!(function (e, a, t) {
  var n,
    r,
    o,
    i = a.createElement("canvas"),
    p = i.getContext && i.getContext("2d");
  function s(e, t) {
    var a = String.fromCharCode;
    p.clearRect(0, 0, i.width, i.height), p.fillText(a.apply(this, e), 0, 0);
    e = i.toDataURL();
    return (
      p.clearRect(0, 0, i.width, i.height),
      p.fillText(a.apply(this, t), 0, 0),
      e === i.toDataURL()
    );
  }
  function c(e) {
    var t = a.createElement("script");
    (t.src = e),
      (t.defer = t.type = "text/javascript"),
      a.getElementsByTagName("head")[0].appendChild(t);
  }
  for (
    o = Array("flag", "emoji"),
      t.supports = { everything: !0, everythingExceptFlag: !0 },
      r = 0;
    r < o.length;
    r++
  )
    (t.supports[o[r]] = (function (e) {
      if (!p || !p.fillText) return !1;
      switch (((p.textBaseline = "top"), (p.font = "600 32px Arial"), e)) {
        case "flag":
          return s(
            [127987, 65039, 8205, 9895, 65039],
            [127987, 65039, 8203, 9895, 65039]
          )
            ? !1
            : !s(
                [55356, 56826, 55356, 56819],
                [55356, 56826, 8203, 55356, 56819]
              ) &&
                !s(
                  [
                    55356, 57332, 56128, 56423, 56128, 56418, 56128, 56421,
                    56128, 56430, 56128, 56423, 56128, 56447,
                  ],
                  [
                    55356, 57332, 8203, 56128, 56423, 8203, 56128, 56418, 8203,
                    56128, 56421, 8203, 56128, 56430, 8203, 56128, 56423, 8203,
                    56128, 56447,
                  ]
                );
        case "emoji":
          return !s(
            [10084, 65039, 8205, 55357, 56613],
            [10084, 65039, 8203, 55357, 56613]
          );
      }
      return !1;
    })(o[r])),
      (t.supports.everything = t.supports.everything && t.supports[o[r]]),
      "flag" !== o[r] &&
        (t.supports.everythingExceptFlag =
          t.supports.everythingExceptFlag && t.supports[o[r]]);
  (t.supports.everythingExceptFlag =
    t.supports.everythingExceptFlag && !t.supports.flag),
    (t.DOMReady = !1),
    (t.readyCallback = function () {
      t.DOMReady = !0;
    }),
    t.supports.everything ||
      ((n = function () {
        t.readyCallback();
      }),
      a.addEventListener
        ? (a.addEventListener("DOMContentLoaded", n, !1),
          e.addEventListener("load", n, !1))
        : (e.attachEvent("onload", n),
          a.attachEvent("onreadystatechange", function () {
            "complete" === a.readyState && t.readyCallback();
          })),
      (n = t.source || {}).concatemoji
        ? c(n.concatemoji)
        : n.wpemoji && n.twemoji && (c(n.twemoji), c(n.wpemoji)));
})(window, document, window._wpemojiSettings);
