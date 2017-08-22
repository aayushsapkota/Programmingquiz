/*! modernizr 3.5.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-geolocation-input-json-localstorage-sessionstorage-setclasses !*/
! function(e, n, t) {
  function o(e, n) {
    return typeof e === n
  }

  function s() {
    var e, n, t, s, a, i, c;
    for (var u in l)
      if (l.hasOwnProperty(u)) {
        if (e = [], n = l[u], n.name && (e.push(n.name.toLowerCase()), n.options && n.options.aliases && n.options.aliases.length))
          for (t = 0; t < n.options.aliases.length; t++) e.push(n.options.aliases[t].toLowerCase());
        for (s = o(n.fn, "function") ? n.fn() : n.fn, a = 0; a < e.length; a++) i = e[a], c = i.split("."), 1 === c.length ? Modernizr[c[0]] = s : (!Modernizr[c[0]] || Modernizr[c[0]] instanceof Boolean || (Modernizr[c[0]] = new Boolean(Modernizr[c[0]])), Modernizr[c[0]][c[1]] = s), r.push((s ? "" : "no-") + c.join("-"))
      }
  }

  function a(e) {
    var n = u.className,
      t = Modernizr._config.classPrefix || "";
    if (f && (n = n.baseVal), Modernizr._config.enableJSClass) {
      var o = new RegExp("(^|\\s)" + t + "no-js(\\s|$)");
      n = n.replace(o, "$1" + t + "js$2")
    }
    Modernizr._config.enableClasses && (n += " " + t + e.join(" " + t), f ? u.className.baseVal = n : u.className = n)
  }

  function i() {
    return "function" != typeof n.createElement ? n.createElement(arguments[0]) : f ? n.createElementNS.call(n, "http://www.w3.org/2000/svg", arguments[0]) : n.createElement.apply(n, arguments)
  }
  var r = [],
    l = [],
    c = {
      _version: "3.5.0",
      _config: {
        classPrefix: "",
        enableClasses: !0,
        enableJSClass: !0,
        usePrefixes: !0
      },
      _q: [],
      on: function(e, n) {
        var t = this;
        setTimeout(function() {
          n(t[e])
        }, 0)
      },
      addTest: function(e, n, t) {
        l.push({
          name: e,
          fn: n,
          options: t
        })
      },
      addAsyncTest: function(e) {
        l.push({
          name: null,
          fn: e
        })
      }
    },
    Modernizr = function() {};
  Modernizr.prototype = c, Modernizr = new Modernizr, Modernizr.addTest("geolocation", "geolocation" in navigator), Modernizr.addTest("json", "JSON" in e && "parse" in JSON && "stringify" in JSON), Modernizr.addTest("localstorage", function() {
    var e = "modernizr";
    try {
      return localStorage.setItem(e, e), localStorage.removeItem(e), !0
    } catch (n) {
      return !1
    }
  });
  var u = n.documentElement,
    f = "svg" === u.nodeName.toLowerCase(),
    m = i("input"),
    p = "autocomplete autofocus list placeholder max min multiple pattern required step".split(" "),
    d = {};
  Modernizr.input = function(n) {
    for (var t = 0, o = n.length; o > t; t++) d[n[t]] = !!(n[t] in m);
    return d.list && (d.list = !(!i("datalist") || !e.HTMLDataListElement)), d
  }(p), Modernizr.addTest("sessionstorage", function() {
    var e = "modernizr";
    try {
      return sessionStorage.setItem(e, e), sessionStorage.removeItem(e), !0
    } catch (n) {
      return !1
    }
  }), s(), a(r), delete c.addTest, delete c.addAsyncTest;
  for (var g = 0; g < Modernizr._q.length; g++) Modernizr._q[g]();
  e.Modernizr = Modernizr
}(window, document);
