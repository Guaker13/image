(function(){"use strict";try{if(typeof document<"u"){var o=document.createElement("style");o.appendChild(document.createTextNode('@import"https://cdnjs.cloudflare.com/ajax/libs/cropperjs/1.5.11/cropper.css";.image-tool{--bg-color: #cdd1e0;--front-color: #388ae5;--border-color: #e8e8eb}.image-tool__image{border-radius:3px;overflow:hidden;margin-bottom:10px}.image-tool__image-picture{max-width:100%;vertical-align:bottom;display:block}.image-tool__image-preloader{width:50px;height:50px;border-radius:50%;background-size:cover;margin:auto;position:relative;background-color:var(--bg-color);background-position:center center}.image-tool__image-preloader:after{content:"";position:absolute;z-index:3;width:60px;height:60px;border-radius:50%;border:2px solid var(--bg-color);border-top-color:var(--front-color);left:50%;top:50%;margin-top:-30px;margin-left:-30px;animation:image-preloader-spin 2s infinite linear;box-sizing:border-box}.image-tool__cropper-container{height:300px;overflow:scroll}.image-tool__cropper-canvas-btn{margin-top:12px;width:100%;height:30px;display:flex;align-items:center;justify-content:center;padding:13px;border-radius:3px;border:1px solid rgba(201,201,204,.48);font-size:14.9px;background:#fff;box-shadow:0 2px 2px #121e390a;color:#707684;text-align:center;cursor:pointer}.image-tool__cropper-canvas-btn svg{height:auto;margin:0 6px 0 0;max-height:none}.image-tool__caption[contentEditable=true][data-placeholder]:before{position:absolute!important;content:attr(data-placeholder);color:#707684;font-weight:400;display:none}.image-tool__caption[contentEditable=true][data-placeholder]:empty:before{display:block}.image-tool__caption[contentEditable=true][data-placeholder]:empty:focus:before{display:none}.image-tool--empty .image-tool__image,.image-tool--empty .image-tool__caption,.image-tool--loading .image-tool__caption,.image-tool--empty .image-tool__cropper,.image-tool--loading .image-tool__cropper{display:none}.image-tool .cdx-button{display:flex;align-items:center;justify-content:center}.image-tool .cdx-button svg{height:auto;margin:0 6px 0 0}.image-tool--filled .cdx-button,.image-tool--filled .image-tool__image-preloader,.image-tool--filled .image-tool__cropper,.image-tool--cropping .image-tool__caption,.image-tool--cropping .image-tool__image-preloader,.image-tool--cropping .cdx-button{display:none}.image-tool--loading .image-tool__image{min-height:200px;display:flex;border:1px solid var(--border-color);background-color:#fff}.image-tool--loading .image-tool__image-picture,.image-tool--loading .cdx-button,.image-tool--loading .image-tool__cropper{display:none}.image-tool--withBorder .image-tool__image{border:2px solid rgb(83,186,172)}.image-tool--withBackground .image-tool__image{padding:15px;background:var(--bg-color)}.image-tool--withBackground .image-tool__image-picture{max-width:60%;margin:0 auto}.image-tool--stretched .image-tool__image-picture{width:100%}@keyframes image-preloader-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}')),document.head.appendChild(o)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
const Ce = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.9919 9.5H19.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.5 5H14.5096"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M14.625 5H15C17.2091 5 19 6.79086 19 9V9.375"/><path stroke="currentColor" stroke-width="2" d="M9.375 5L9 5C6.79086 5 5 6.79086 5 9V9.375"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.3725 5H9.38207"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 9.5H5.00957"/><path stroke="currentColor" stroke-width="2" d="M9.375 19H9C6.79086 19 5 17.2091 5 15V14.625"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.3725 19H9.38207"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 14.55H5.00957"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 13V16M16 19V16M19 16H16M16 16H13"/></svg>', Et = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.13968 15.32L8.69058 11.5661C9.02934 11.2036 9.48873 11 9.96774 11C10.4467 11 10.9061 11.2036 11.2449 11.5661L15.3871 16M13.5806 14.0664L15.0132 12.533C15.3519 12.1705 15.8113 11.9668 16.2903 11.9668C16.7693 11.9668 17.2287 12.1705 17.5675 12.533L18.841 13.9634"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.7778 9.33331H13.7867"/></svg>';
function H(n, t = null, i = {}) {
  const e = document.createElement(n);
  Array.isArray(t) ? e.classList.add(...t) : t && e.classList.add(t);
  for (const o in i)
    e[o] = i[o];
  return e;
}
/*!
 * Cropper.js v1.6.1
 * https://fengyuanchen.github.io/cropperjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2023-09-17T03:44:19.860Z
 */
function Yt(n, t) {
  var i = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var e = Object.getOwnPropertySymbols(n);
    t && (e = e.filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    })), i.push.apply(i, e);
  }
  return i;
}
function re(n) {
  for (var t = 1; t < arguments.length; t++) {
    var i = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Yt(Object(i), !0).forEach(function(e) {
      Me(n, e, i[e]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : Yt(Object(i)).forEach(function(e) {
      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
    });
  }
  return n;
}
function xt(n) {
  "@babel/helpers - typeof";
  return xt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, xt(n);
}
function De(n, t) {
  if (!(n instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ut(n, t) {
  for (var i = 0; i < t.length; i++) {
    var e = t[i];
    e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(n, oe(e.key), e);
  }
}
function Te(n, t, i) {
  return t && Ut(n.prototype, t), i && Ut(n, i), Object.defineProperty(n, "prototype", {
    writable: !1
  }), n;
}
function Me(n, t, i) {
  return t = oe(t), t in n ? Object.defineProperty(n, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[t] = i, n;
}
function ne(n) {
  return Oe(n) || Se(n) || ke(n) || Ne();
}
function Oe(n) {
  if (Array.isArray(n))
    return Ct(n);
}
function Se(n) {
  if (typeof Symbol < "u" && n[Symbol.iterator] != null || n["@@iterator"] != null)
    return Array.from(n);
}
function ke(n, t) {
  if (n) {
    if (typeof n == "string")
      return Ct(n, t);
    var i = Object.prototype.toString.call(n).slice(8, -1);
    if (i === "Object" && n.constructor && (i = n.constructor.name), i === "Map" || i === "Set")
      return Array.from(n);
    if (i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))
      return Ct(n, t);
  }
}
function Ct(n, t) {
  (t == null || t > n.length) && (t = n.length);
  for (var i = 0, e = new Array(t); i < t; i++)
    e[i] = n[i];
  return e;
}
function Ne() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Re(n, t) {
  if (typeof n != "object" || n === null)
    return n;
  var i = n[Symbol.toPrimitive];
  if (i !== void 0) {
    var e = i.call(n, t || "default");
    if (typeof e != "object")
      return e;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(n);
}
function oe(n) {
  var t = Re(n, "string");
  return typeof t == "symbol" ? t : String(t);
}
var gt = typeof window < "u" && typeof window.document < "u", X = gt ? window : {}, At = gt && X.document.documentElement ? "ontouchstart" in X.document.documentElement : !1, Pt = gt ? "PointerEvent" in X : !1, O = "cropper", It = "all", se = "crop", he = "move", ce = "zoom", J = "e", K = "w", Z = "s", U = "n", rt = "ne", nt = "nw", ot = "se", st = "sw", Dt = "".concat(O, "-crop"), zt = "".concat(O, "-disabled"), A = "".concat(O, "-hidden"), Wt = "".concat(O, "-hide"), _e = "".concat(O, "-invisible"), pt = "".concat(O, "-modal"), Tt = "".concat(O, "-move"), ct = "".concat(O, "Action"), dt = "".concat(O, "Preview"), Lt = "crop", le = "move", ue = "none", Mt = "crop", Ot = "cropend", St = "cropmove", kt = "cropstart", Vt = "dblclick", Ae = At ? "touchstart" : "mousedown", Pe = At ? "touchmove" : "mousemove", Ie = At ? "touchend touchcancel" : "mouseup", $t = Pt ? "pointerdown" : Ae, qt = Pt ? "pointermove" : Pe, Gt = Pt ? "pointerup pointercancel" : Ie, Jt = "ready", Kt = "resize", Qt = "wheel", Nt = "zoom", Zt = "image/jpeg", Le = /^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/, Be = /^data:/, je = /^data:image\/jpeg;base64,/, He = /^img|canvas$/i, de = 200, fe = 100, te = {
  // Define the view mode of the cropper
  viewMode: 0,
  // 0, 1, 2, 3
  // Define the dragging mode of the cropper
  dragMode: Lt,
  // 'crop', 'move' or 'none'
  // Define the initial aspect ratio of the crop box
  initialAspectRatio: NaN,
  // Define the aspect ratio of the crop box
  aspectRatio: NaN,
  // An object with the previous cropping result data
  data: null,
  // A selector for adding extra containers to preview
  preview: "",
  // Re-render the cropper when resize the window
  responsive: !0,
  // Restore the cropped area after resize the window
  restore: !0,
  // Check if the current image is a cross-origin image
  checkCrossOrigin: !0,
  // Check the current image's Exif Orientation information
  checkOrientation: !0,
  // Show the black modal
  modal: !0,
  // Show the dashed lines for guiding
  guides: !0,
  // Show the center indicator for guiding
  center: !0,
  // Show the white modal to highlight the crop box
  highlight: !0,
  // Show the grid background
  background: !0,
  // Enable to crop the image automatically when initialize
  autoCrop: !0,
  // Define the percentage of automatic cropping area when initializes
  autoCropArea: 0.8,
  // Enable to move the image
  movable: !0,
  // Enable to rotate the image
  rotatable: !0,
  // Enable to scale the image
  scalable: !0,
  // Enable to zoom the image
  zoomable: !0,
  // Enable to zoom the image by dragging touch
  zoomOnTouch: !0,
  // Enable to zoom the image by wheeling mouse
  zoomOnWheel: !0,
  // Define zoom ratio when zoom the image by wheeling mouse
  wheelZoomRatio: 0.1,
  // Enable to move the crop box
  cropBoxMovable: !0,
  // Enable to resize the crop box
  cropBoxResizable: !0,
  // Toggle drag mode between "crop" and "move" when click twice on the cropper
  toggleDragModeOnDblclick: !0,
  // Size limitation
  minCanvasWidth: 0,
  minCanvasHeight: 0,
  minCropBoxWidth: 0,
  minCropBoxHeight: 0,
  minContainerWidth: de,
  minContainerHeight: fe,
  // Shortcuts of events
  ready: null,
  cropstart: null,
  cropmove: null,
  cropend: null,
  crop: null,
  zoom: null
}, Fe = '<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>', Xe = Number.isNaN || X.isNaN;
function D(n) {
  return typeof n == "number" && !Xe(n);
}
var ee = function(t) {
  return t > 0 && t < 1 / 0;
};
function wt(n) {
  return typeof n > "u";
}
function Q(n) {
  return xt(n) === "object" && n !== null;
}
var Ye = Object.prototype.hasOwnProperty;
function tt(n) {
  if (!Q(n))
    return !1;
  try {
    var t = n.constructor, i = t.prototype;
    return t && i && Ye.call(i, "isPrototypeOf");
  } catch {
    return !1;
  }
}
function _(n) {
  return typeof n == "function";
}
var Ue = Array.prototype.slice;
function pe(n) {
  return Array.from ? Array.from(n) : Ue.call(n);
}
function k(n, t) {
  return n && _(t) && (Array.isArray(n) || D(n.length) ? pe(n).forEach(function(i, e) {
    t.call(n, i, e, n);
  }) : Q(n) && Object.keys(n).forEach(function(i) {
    t.call(n, n[i], i, n);
  })), n;
}
var S = Object.assign || function(t) {
  for (var i = arguments.length, e = new Array(i > 1 ? i - 1 : 0), o = 1; o < i; o++)
    e[o - 1] = arguments[o];
  return Q(t) && e.length > 0 && e.forEach(function(a) {
    Q(a) && Object.keys(a).forEach(function(r) {
      t[r] = a[r];
    });
  }), t;
}, ze = /\.\d*(?:0|9){12}\d*$/;
function it(n) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e11;
  return ze.test(n) ? Math.round(n * t) / t : n;
}
var We = /^width|height|left|top|marginLeft|marginTop$/;
function W(n, t) {
  var i = n.style;
  k(t, function(e, o) {
    We.test(o) && D(e) && (e = "".concat(e, "px")), i[o] = e;
  });
}
function Ve(n, t) {
  return n.classList ? n.classList.contains(t) : n.className.indexOf(t) > -1;
}
function N(n, t) {
  if (t) {
    if (D(n.length)) {
      k(n, function(e) {
        N(e, t);
      });
      return;
    }
    if (n.classList) {
      n.classList.add(t);
      return;
    }
    var i = n.className.trim();
    i ? i.indexOf(t) < 0 && (n.className = "".concat(i, " ").concat(t)) : n.className = t;
  }
}
function F(n, t) {
  if (t) {
    if (D(n.length)) {
      k(n, function(i) {
        F(i, t);
      });
      return;
    }
    if (n.classList) {
      n.classList.remove(t);
      return;
    }
    n.className.indexOf(t) >= 0 && (n.className = n.className.replace(t, ""));
  }
}
function et(n, t, i) {
  if (t) {
    if (D(n.length)) {
      k(n, function(e) {
        et(e, t, i);
      });
      return;
    }
    i ? N(n, t) : F(n, t);
  }
}
var $e = /([a-z\d])([A-Z])/g;
function Bt(n) {
  return n.replace($e, "$1-$2").toLowerCase();
}
function Rt(n, t) {
  return Q(n[t]) ? n[t] : n.dataset ? n.dataset[t] : n.getAttribute("data-".concat(Bt(t)));
}
function lt(n, t, i) {
  Q(i) ? n[t] = i : n.dataset ? n.dataset[t] = i : n.setAttribute("data-".concat(Bt(t)), i);
}
function qe(n, t) {
  if (Q(n[t]))
    try {
      delete n[t];
    } catch {
      n[t] = void 0;
    }
  else if (n.dataset)
    try {
      delete n.dataset[t];
    } catch {
      n.dataset[t] = void 0;
    }
  else
    n.removeAttribute("data-".concat(Bt(t)));
}
var ge = /\s\s*/, me = function() {
  var n = !1;
  if (gt) {
    var t = !1, i = function() {
    }, e = Object.defineProperty({}, "once", {
      get: function() {
        return n = !0, t;
      },
      /**
       * This setter can fix a `TypeError` in strict mode
       * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Getter_only}
       * @param {boolean} value - The value to set
       */
      set: function(a) {
        t = a;
      }
    });
    X.addEventListener("test", i, e), X.removeEventListener("test", i, e);
  }
  return n;
}();
function B(n, t, i) {
  var e = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, o = i;
  t.trim().split(ge).forEach(function(a) {
    if (!me) {
      var r = n.listeners;
      r && r[a] && r[a][i] && (o = r[a][i], delete r[a][i], Object.keys(r[a]).length === 0 && delete r[a], Object.keys(r).length === 0 && delete n.listeners);
    }
    n.removeEventListener(a, o, e);
  });
}
function I(n, t, i) {
  var e = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, o = i;
  t.trim().split(ge).forEach(function(a) {
    if (e.once && !me) {
      var r = n.listeners, s = r === void 0 ? {} : r;
      o = function() {
        delete s[a][i], n.removeEventListener(a, o, e);
        for (var c = arguments.length, l = new Array(c), h = 0; h < c; h++)
          l[h] = arguments[h];
        i.apply(n, l);
      }, s[a] || (s[a] = {}), s[a][i] && n.removeEventListener(a, s[a][i], e), s[a][i] = o, n.listeners = s;
    }
    n.addEventListener(a, o, e);
  });
}
function at(n, t, i) {
  var e;
  return _(Event) && _(CustomEvent) ? e = new CustomEvent(t, {
    detail: i,
    bubbles: !0,
    cancelable: !0
  }) : (e = document.createEvent("CustomEvent"), e.initCustomEvent(t, !0, !0, i)), n.dispatchEvent(e);
}
function ve(n) {
  var t = n.getBoundingClientRect();
  return {
    left: t.left + (window.pageXOffset - document.documentElement.clientLeft),
    top: t.top + (window.pageYOffset - document.documentElement.clientTop)
  };
}
var yt = X.location, Ge = /^(\w+:)\/\/([^:/?#]*):?(\d*)/i;
function ie(n) {
  var t = n.match(Ge);
  return t !== null && (t[1] !== yt.protocol || t[2] !== yt.hostname || t[3] !== yt.port);
}
function ae(n) {
  var t = "timestamp=".concat((/* @__PURE__ */ new Date()).getTime());
  return n + (n.indexOf("?") === -1 ? "?" : "&") + t;
}
function ht(n) {
  var t = n.rotate, i = n.scaleX, e = n.scaleY, o = n.translateX, a = n.translateY, r = [];
  D(o) && o !== 0 && r.push("translateX(".concat(o, "px)")), D(a) && a !== 0 && r.push("translateY(".concat(a, "px)")), D(t) && t !== 0 && r.push("rotate(".concat(t, "deg)")), D(i) && i !== 1 && r.push("scaleX(".concat(i, ")")), D(e) && e !== 1 && r.push("scaleY(".concat(e, ")"));
  var s = r.length ? r.join(" ") : "none";
  return {
    WebkitTransform: s,
    msTransform: s,
    transform: s
  };
}
function Je(n) {
  var t = re({}, n), i = 0;
  return k(n, function(e, o) {
    delete t[o], k(t, function(a) {
      var r = Math.abs(e.startX - a.startX), s = Math.abs(e.startY - a.startY), p = Math.abs(e.endX - a.endX), c = Math.abs(e.endY - a.endY), l = Math.sqrt(r * r + s * s), h = Math.sqrt(p * p + c * c), d = (h - l) / l;
      Math.abs(d) > Math.abs(i) && (i = d);
    });
  }), i;
}
function ft(n, t) {
  var i = n.pageX, e = n.pageY, o = {
    endX: i,
    endY: e
  };
  return t ? o : re({
    startX: i,
    startY: e
  }, o);
}
function Ke(n) {
  var t = 0, i = 0, e = 0;
  return k(n, function(o) {
    var a = o.startX, r = o.startY;
    t += a, i += r, e += 1;
  }), t /= e, i /= e, {
    pageX: t,
    pageY: i
  };
}
function V(n) {
  var t = n.aspectRatio, i = n.height, e = n.width, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "contain", a = ee(e), r = ee(i);
  if (a && r) {
    var s = i * t;
    o === "contain" && s > e || o === "cover" && s < e ? i = e / t : e = i * t;
  } else
    a ? i = e / t : r && (e = i * t);
  return {
    width: e,
    height: i
  };
}
function Qe(n) {
  var t = n.width, i = n.height, e = n.degree;
  if (e = Math.abs(e) % 180, e === 90)
    return {
      width: i,
      height: t
    };
  var o = e % 90 * Math.PI / 180, a = Math.sin(o), r = Math.cos(o), s = t * r + i * a, p = t * a + i * r;
  return e > 90 ? {
    width: p,
    height: s
  } : {
    width: s,
    height: p
  };
}
function Ze(n, t, i, e) {
  var o = t.aspectRatio, a = t.naturalWidth, r = t.naturalHeight, s = t.rotate, p = s === void 0 ? 0 : s, c = t.scaleX, l = c === void 0 ? 1 : c, h = t.scaleY, d = h === void 0 ? 1 : h, w = i.aspectRatio, y = i.naturalWidth, u = i.naturalHeight, f = e.fillColor, m = f === void 0 ? "transparent" : f, v = e.imageSmoothingEnabled, b = v === void 0 ? !0 : v, x = e.imageSmoothingQuality, E = x === void 0 ? "low" : x, g = e.maxWidth, C = g === void 0 ? 1 / 0 : g, T = e.maxHeight, M = T === void 0 ? 1 / 0 : T, P = e.minWidth, $ = P === void 0 ? 0 : P, q = e.minHeight, Y = q === void 0 ? 0 : q, j = document.createElement("canvas"), R = j.getContext("2d"), G = V({
    aspectRatio: w,
    width: C,
    height: M
  }), ut = V({
    aspectRatio: w,
    width: $,
    height: Y
  }, "cover"), mt = Math.min(G.width, Math.max(ut.width, y)), vt = Math.min(G.height, Math.max(ut.height, u)), jt = V({
    aspectRatio: o,
    width: C,
    height: M
  }), Ht = V({
    aspectRatio: o,
    width: $,
    height: Y
  }, "cover"), Ft = Math.min(jt.width, Math.max(Ht.width, a)), Xt = Math.min(jt.height, Math.max(Ht.height, r)), Ee = [-Ft / 2, -Xt / 2, Ft, Xt];
  return j.width = it(mt), j.height = it(vt), R.fillStyle = m, R.fillRect(0, 0, mt, vt), R.save(), R.translate(mt / 2, vt / 2), R.rotate(p * Math.PI / 180), R.scale(l, d), R.imageSmoothingEnabled = b, R.imageSmoothingQuality = E, R.drawImage.apply(R, [n].concat(ne(Ee.map(function(xe) {
    return Math.floor(it(xe));
  })))), R.restore(), j;
}
var we = String.fromCharCode;
function ti(n, t, i) {
  var e = "";
  i += t;
  for (var o = t; o < i; o += 1)
    e += we(n.getUint8(o));
  return e;
}
var ei = /^data:.*,/;
function ii(n) {
  var t = n.replace(ei, ""), i = atob(t), e = new ArrayBuffer(i.length), o = new Uint8Array(e);
  return k(o, function(a, r) {
    o[r] = i.charCodeAt(r);
  }), e;
}
function ai(n, t) {
  for (var i = [], e = 8192, o = new Uint8Array(n); o.length > 0; )
    i.push(we.apply(null, pe(o.subarray(0, e)))), o = o.subarray(e);
  return "data:".concat(t, ";base64,").concat(btoa(i.join("")));
}
function ri(n) {
  var t = new DataView(n), i;
  try {
    var e, o, a;
    if (t.getUint8(0) === 255 && t.getUint8(1) === 216)
      for (var r = t.byteLength, s = 2; s + 1 < r; ) {
        if (t.getUint8(s) === 255 && t.getUint8(s + 1) === 225) {
          o = s;
          break;
        }
        s += 1;
      }
    if (o) {
      var p = o + 4, c = o + 10;
      if (ti(t, p, 4) === "Exif") {
        var l = t.getUint16(c);
        if (e = l === 18761, (e || l === 19789) && t.getUint16(c + 2, e) === 42) {
          var h = t.getUint32(c + 4, e);
          h >= 8 && (a = c + h);
        }
      }
    }
    if (a) {
      var d = t.getUint16(a, e), w, y;
      for (y = 0; y < d; y += 1)
        if (w = a + y * 12 + 2, t.getUint16(w, e) === 274) {
          w += 8, i = t.getUint16(w, e), t.setUint16(w, 1, e);
          break;
        }
    }
  } catch {
    i = 1;
  }
  return i;
}
function ni(n) {
  var t = 0, i = 1, e = 1;
  switch (n) {
    case 2:
      i = -1;
      break;
    case 3:
      t = -180;
      break;
    case 4:
      e = -1;
      break;
    case 5:
      t = 90, e = -1;
      break;
    case 6:
      t = 90;
      break;
    case 7:
      t = 90, i = -1;
      break;
    case 8:
      t = -90;
      break;
  }
  return {
    rotate: t,
    scaleX: i,
    scaleY: e
  };
}
var oi = {
  render: function() {
    this.initContainer(), this.initCanvas(), this.initCropBox(), this.renderCanvas(), this.cropped && this.renderCropBox();
  },
  initContainer: function() {
    var t = this.element, i = this.options, e = this.container, o = this.cropper, a = Number(i.minContainerWidth), r = Number(i.minContainerHeight);
    N(o, A), F(t, A);
    var s = {
      width: Math.max(e.offsetWidth, a >= 0 ? a : de),
      height: Math.max(e.offsetHeight, r >= 0 ? r : fe)
    };
    this.containerData = s, W(o, {
      width: s.width,
      height: s.height
    }), N(t, A), F(o, A);
  },
  // Canvas (image wrapper)
  initCanvas: function() {
    var t = this.containerData, i = this.imageData, e = this.options.viewMode, o = Math.abs(i.rotate) % 180 === 90, a = o ? i.naturalHeight : i.naturalWidth, r = o ? i.naturalWidth : i.naturalHeight, s = a / r, p = t.width, c = t.height;
    t.height * s > t.width ? e === 3 ? p = t.height * s : c = t.width / s : e === 3 ? c = t.width / s : p = t.height * s;
    var l = {
      aspectRatio: s,
      naturalWidth: a,
      naturalHeight: r,
      width: p,
      height: c
    };
    this.canvasData = l, this.limited = e === 1 || e === 2, this.limitCanvas(!0, !0), l.width = Math.min(Math.max(l.width, l.minWidth), l.maxWidth), l.height = Math.min(Math.max(l.height, l.minHeight), l.maxHeight), l.left = (t.width - l.width) / 2, l.top = (t.height - l.height) / 2, l.oldLeft = l.left, l.oldTop = l.top, this.initialCanvasData = S({}, l);
  },
  limitCanvas: function(t, i) {
    var e = this.options, o = this.containerData, a = this.canvasData, r = this.cropBoxData, s = e.viewMode, p = a.aspectRatio, c = this.cropped && r;
    if (t) {
      var l = Number(e.minCanvasWidth) || 0, h = Number(e.minCanvasHeight) || 0;
      s > 1 ? (l = Math.max(l, o.width), h = Math.max(h, o.height), s === 3 && (h * p > l ? l = h * p : h = l / p)) : s > 0 && (l ? l = Math.max(l, c ? r.width : 0) : h ? h = Math.max(h, c ? r.height : 0) : c && (l = r.width, h = r.height, h * p > l ? l = h * p : h = l / p));
      var d = V({
        aspectRatio: p,
        width: l,
        height: h
      });
      l = d.width, h = d.height, a.minWidth = l, a.minHeight = h, a.maxWidth = 1 / 0, a.maxHeight = 1 / 0;
    }
    if (i)
      if (s > (c ? 0 : 1)) {
        var w = o.width - a.width, y = o.height - a.height;
        a.minLeft = Math.min(0, w), a.minTop = Math.min(0, y), a.maxLeft = Math.max(0, w), a.maxTop = Math.max(0, y), c && this.limited && (a.minLeft = Math.min(r.left, r.left + (r.width - a.width)), a.minTop = Math.min(r.top, r.top + (r.height - a.height)), a.maxLeft = r.left, a.maxTop = r.top, s === 2 && (a.width >= o.width && (a.minLeft = Math.min(0, w), a.maxLeft = Math.max(0, w)), a.height >= o.height && (a.minTop = Math.min(0, y), a.maxTop = Math.max(0, y))));
      } else
        a.minLeft = -a.width, a.minTop = -a.height, a.maxLeft = o.width, a.maxTop = o.height;
  },
  renderCanvas: function(t, i) {
    var e = this.canvasData, o = this.imageData;
    if (i) {
      var a = Qe({
        width: o.naturalWidth * Math.abs(o.scaleX || 1),
        height: o.naturalHeight * Math.abs(o.scaleY || 1),
        degree: o.rotate || 0
      }), r = a.width, s = a.height, p = e.width * (r / e.naturalWidth), c = e.height * (s / e.naturalHeight);
      e.left -= (p - e.width) / 2, e.top -= (c - e.height) / 2, e.width = p, e.height = c, e.aspectRatio = r / s, e.naturalWidth = r, e.naturalHeight = s, this.limitCanvas(!0, !1);
    }
    (e.width > e.maxWidth || e.width < e.minWidth) && (e.left = e.oldLeft), (e.height > e.maxHeight || e.height < e.minHeight) && (e.top = e.oldTop), e.width = Math.min(Math.max(e.width, e.minWidth), e.maxWidth), e.height = Math.min(Math.max(e.height, e.minHeight), e.maxHeight), this.limitCanvas(!1, !0), e.left = Math.min(Math.max(e.left, e.minLeft), e.maxLeft), e.top = Math.min(Math.max(e.top, e.minTop), e.maxTop), e.oldLeft = e.left, e.oldTop = e.top, W(this.canvas, S({
      width: e.width,
      height: e.height
    }, ht({
      translateX: e.left,
      translateY: e.top
    }))), this.renderImage(t), this.cropped && this.limited && this.limitCropBox(!0, !0);
  },
  renderImage: function(t) {
    var i = this.canvasData, e = this.imageData, o = e.naturalWidth * (i.width / i.naturalWidth), a = e.naturalHeight * (i.height / i.naturalHeight);
    S(e, {
      width: o,
      height: a,
      left: (i.width - o) / 2,
      top: (i.height - a) / 2
    }), W(this.image, S({
      width: e.width,
      height: e.height
    }, ht(S({
      translateX: e.left,
      translateY: e.top
    }, e)))), t && this.output();
  },
  initCropBox: function() {
    var t = this.options, i = this.canvasData, e = t.aspectRatio || t.initialAspectRatio, o = Number(t.autoCropArea) || 0.8, a = {
      width: i.width,
      height: i.height
    };
    e && (i.height * e > i.width ? a.height = a.width / e : a.width = a.height * e), this.cropBoxData = a, this.limitCropBox(!0, !0), a.width = Math.min(Math.max(a.width, a.minWidth), a.maxWidth), a.height = Math.min(Math.max(a.height, a.minHeight), a.maxHeight), a.width = Math.max(a.minWidth, a.width * o), a.height = Math.max(a.minHeight, a.height * o), a.left = i.left + (i.width - a.width) / 2, a.top = i.top + (i.height - a.height) / 2, a.oldLeft = a.left, a.oldTop = a.top, this.initialCropBoxData = S({}, a);
  },
  limitCropBox: function(t, i) {
    var e = this.options, o = this.containerData, a = this.canvasData, r = this.cropBoxData, s = this.limited, p = e.aspectRatio;
    if (t) {
      var c = Number(e.minCropBoxWidth) || 0, l = Number(e.minCropBoxHeight) || 0, h = s ? Math.min(o.width, a.width, a.width + a.left, o.width - a.left) : o.width, d = s ? Math.min(o.height, a.height, a.height + a.top, o.height - a.top) : o.height;
      c = Math.min(c, o.width), l = Math.min(l, o.height), p && (c && l ? l * p > c ? l = c / p : c = l * p : c ? l = c / p : l && (c = l * p), d * p > h ? d = h / p : h = d * p), r.minWidth = Math.min(c, h), r.minHeight = Math.min(l, d), r.maxWidth = h, r.maxHeight = d;
    }
    i && (s ? (r.minLeft = Math.max(0, a.left), r.minTop = Math.max(0, a.top), r.maxLeft = Math.min(o.width, a.left + a.width) - r.width, r.maxTop = Math.min(o.height, a.top + a.height) - r.height) : (r.minLeft = 0, r.minTop = 0, r.maxLeft = o.width - r.width, r.maxTop = o.height - r.height));
  },
  renderCropBox: function() {
    var t = this.options, i = this.containerData, e = this.cropBoxData;
    (e.width > e.maxWidth || e.width < e.minWidth) && (e.left = e.oldLeft), (e.height > e.maxHeight || e.height < e.minHeight) && (e.top = e.oldTop), e.width = Math.min(Math.max(e.width, e.minWidth), e.maxWidth), e.height = Math.min(Math.max(e.height, e.minHeight), e.maxHeight), this.limitCropBox(!1, !0), e.left = Math.min(Math.max(e.left, e.minLeft), e.maxLeft), e.top = Math.min(Math.max(e.top, e.minTop), e.maxTop), e.oldLeft = e.left, e.oldTop = e.top, t.movable && t.cropBoxMovable && lt(this.face, ct, e.width >= i.width && e.height >= i.height ? he : It), W(this.cropBox, S({
      width: e.width,
      height: e.height
    }, ht({
      translateX: e.left,
      translateY: e.top
    }))), this.cropped && this.limited && this.limitCanvas(!0, !0), this.disabled || this.output();
  },
  output: function() {
    this.preview(), at(this.element, Mt, this.getData());
  }
}, si = {
  initPreview: function() {
    var t = this.element, i = this.crossOrigin, e = this.options.preview, o = i ? this.crossOriginUrl : this.url, a = t.alt || "The image to preview", r = document.createElement("img");
    if (i && (r.crossOrigin = i), r.src = o, r.alt = a, this.viewBox.appendChild(r), this.viewBoxImage = r, !!e) {
      var s = e;
      typeof e == "string" ? s = t.ownerDocument.querySelectorAll(e) : e.querySelector && (s = [e]), this.previews = s, k(s, function(p) {
        var c = document.createElement("img");
        lt(p, dt, {
          width: p.offsetWidth,
          height: p.offsetHeight,
          html: p.innerHTML
        }), i && (c.crossOrigin = i), c.src = o, c.alt = a, c.style.cssText = 'display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"', p.innerHTML = "", p.appendChild(c);
      });
    }
  },
  resetPreview: function() {
    k(this.previews, function(t) {
      var i = Rt(t, dt);
      W(t, {
        width: i.width,
        height: i.height
      }), t.innerHTML = i.html, qe(t, dt);
    });
  },
  preview: function() {
    var t = this.imageData, i = this.canvasData, e = this.cropBoxData, o = e.width, a = e.height, r = t.width, s = t.height, p = e.left - i.left - t.left, c = e.top - i.top - t.top;
    !this.cropped || this.disabled || (W(this.viewBoxImage, S({
      width: r,
      height: s
    }, ht(S({
      translateX: -p,
      translateY: -c
    }, t)))), k(this.previews, function(l) {
      var h = Rt(l, dt), d = h.width, w = h.height, y = d, u = w, f = 1;
      o && (f = d / o, u = a * f), a && u > w && (f = w / a, y = o * f, u = w), W(l, {
        width: y,
        height: u
      }), W(l.getElementsByTagName("img")[0], S({
        width: r * f,
        height: s * f
      }, ht(S({
        translateX: -p * f,
        translateY: -c * f
      }, t))));
    }));
  }
}, hi = {
  bind: function() {
    var t = this.element, i = this.options, e = this.cropper;
    _(i.cropstart) && I(t, kt, i.cropstart), _(i.cropmove) && I(t, St, i.cropmove), _(i.cropend) && I(t, Ot, i.cropend), _(i.crop) && I(t, Mt, i.crop), _(i.zoom) && I(t, Nt, i.zoom), I(e, $t, this.onCropStart = this.cropStart.bind(this)), i.zoomable && i.zoomOnWheel && I(e, Qt, this.onWheel = this.wheel.bind(this), {
      passive: !1,
      capture: !0
    }), i.toggleDragModeOnDblclick && I(e, Vt, this.onDblclick = this.dblclick.bind(this)), I(t.ownerDocument, qt, this.onCropMove = this.cropMove.bind(this)), I(t.ownerDocument, Gt, this.onCropEnd = this.cropEnd.bind(this)), i.responsive && I(window, Kt, this.onResize = this.resize.bind(this));
  },
  unbind: function() {
    var t = this.element, i = this.options, e = this.cropper;
    _(i.cropstart) && B(t, kt, i.cropstart), _(i.cropmove) && B(t, St, i.cropmove), _(i.cropend) && B(t, Ot, i.cropend), _(i.crop) && B(t, Mt, i.crop), _(i.zoom) && B(t, Nt, i.zoom), B(e, $t, this.onCropStart), i.zoomable && i.zoomOnWheel && B(e, Qt, this.onWheel, {
      passive: !1,
      capture: !0
    }), i.toggleDragModeOnDblclick && B(e, Vt, this.onDblclick), B(t.ownerDocument, qt, this.onCropMove), B(t.ownerDocument, Gt, this.onCropEnd), i.responsive && B(window, Kt, this.onResize);
  }
}, ci = {
  resize: function() {
    if (!this.disabled) {
      var t = this.options, i = this.container, e = this.containerData, o = i.offsetWidth / e.width, a = i.offsetHeight / e.height, r = Math.abs(o - 1) > Math.abs(a - 1) ? o : a;
      if (r !== 1) {
        var s, p;
        t.restore && (s = this.getCanvasData(), p = this.getCropBoxData()), this.render(), t.restore && (this.setCanvasData(k(s, function(c, l) {
          s[l] = c * r;
        })), this.setCropBoxData(k(p, function(c, l) {
          p[l] = c * r;
        })));
      }
    }
  },
  dblclick: function() {
    this.disabled || this.options.dragMode === ue || this.setDragMode(Ve(this.dragBox, Dt) ? le : Lt);
  },
  wheel: function(t) {
    var i = this, e = Number(this.options.wheelZoomRatio) || 0.1, o = 1;
    this.disabled || (t.preventDefault(), !this.wheeling && (this.wheeling = !0, setTimeout(function() {
      i.wheeling = !1;
    }, 50), t.deltaY ? o = t.deltaY > 0 ? 1 : -1 : t.wheelDelta ? o = -t.wheelDelta / 120 : t.detail && (o = t.detail > 0 ? 1 : -1), this.zoom(-o * e, t)));
  },
  cropStart: function(t) {
    var i = t.buttons, e = t.button;
    if (!(this.disabled || (t.type === "mousedown" || t.type === "pointerdown" && t.pointerType === "mouse") && // No primary button (Usually the left button)
    (D(i) && i !== 1 || D(e) && e !== 0 || t.ctrlKey))) {
      var o = this.options, a = this.pointers, r;
      t.changedTouches ? k(t.changedTouches, function(s) {
        a[s.identifier] = ft(s);
      }) : a[t.pointerId || 0] = ft(t), Object.keys(a).length > 1 && o.zoomable && o.zoomOnTouch ? r = ce : r = Rt(t.target, ct), Le.test(r) && at(this.element, kt, {
        originalEvent: t,
        action: r
      }) !== !1 && (t.preventDefault(), this.action = r, this.cropping = !1, r === se && (this.cropping = !0, N(this.dragBox, pt)));
    }
  },
  cropMove: function(t) {
    var i = this.action;
    if (!(this.disabled || !i)) {
      var e = this.pointers;
      t.preventDefault(), at(this.element, St, {
        originalEvent: t,
        action: i
      }) !== !1 && (t.changedTouches ? k(t.changedTouches, function(o) {
        S(e[o.identifier] || {}, ft(o, !0));
      }) : S(e[t.pointerId || 0] || {}, ft(t, !0)), this.change(t));
    }
  },
  cropEnd: function(t) {
    if (!this.disabled) {
      var i = this.action, e = this.pointers;
      t.changedTouches ? k(t.changedTouches, function(o) {
        delete e[o.identifier];
      }) : delete e[t.pointerId || 0], i && (t.preventDefault(), Object.keys(e).length || (this.action = ""), this.cropping && (this.cropping = !1, et(this.dragBox, pt, this.cropped && this.options.modal)), at(this.element, Ot, {
        originalEvent: t,
        action: i
      }));
    }
  }
}, li = {
  change: function(t) {
    var i = this.options, e = this.canvasData, o = this.containerData, a = this.cropBoxData, r = this.pointers, s = this.action, p = i.aspectRatio, c = a.left, l = a.top, h = a.width, d = a.height, w = c + h, y = l + d, u = 0, f = 0, m = o.width, v = o.height, b = !0, x;
    !p && t.shiftKey && (p = h && d ? h / d : 1), this.limited && (u = a.minLeft, f = a.minTop, m = u + Math.min(o.width, e.width, e.left + e.width), v = f + Math.min(o.height, e.height, e.top + e.height));
    var E = r[Object.keys(r)[0]], g = {
      x: E.endX - E.startX,
      y: E.endY - E.startY
    }, C = function(M) {
      switch (M) {
        case J:
          w + g.x > m && (g.x = m - w);
          break;
        case K:
          c + g.x < u && (g.x = u - c);
          break;
        case U:
          l + g.y < f && (g.y = f - l);
          break;
        case Z:
          y + g.y > v && (g.y = v - y);
          break;
      }
    };
    switch (s) {
      case It:
        c += g.x, l += g.y;
        break;
      case J:
        if (g.x >= 0 && (w >= m || p && (l <= f || y >= v))) {
          b = !1;
          break;
        }
        C(J), h += g.x, h < 0 && (s = K, h = -h, c -= h), p && (d = h / p, l += (a.height - d) / 2);
        break;
      case U:
        if (g.y <= 0 && (l <= f || p && (c <= u || w >= m))) {
          b = !1;
          break;
        }
        C(U), d -= g.y, l += g.y, d < 0 && (s = Z, d = -d, l -= d), p && (h = d * p, c += (a.width - h) / 2);
        break;
      case K:
        if (g.x <= 0 && (c <= u || p && (l <= f || y >= v))) {
          b = !1;
          break;
        }
        C(K), h -= g.x, c += g.x, h < 0 && (s = J, h = -h, c -= h), p && (d = h / p, l += (a.height - d) / 2);
        break;
      case Z:
        if (g.y >= 0 && (y >= v || p && (c <= u || w >= m))) {
          b = !1;
          break;
        }
        C(Z), d += g.y, d < 0 && (s = U, d = -d, l -= d), p && (h = d * p, c += (a.width - h) / 2);
        break;
      case rt:
        if (p) {
          if (g.y <= 0 && (l <= f || w >= m)) {
            b = !1;
            break;
          }
          C(U), d -= g.y, l += g.y, h = d * p;
        } else
          C(U), C(J), g.x >= 0 ? w < m ? h += g.x : g.y <= 0 && l <= f && (b = !1) : h += g.x, g.y <= 0 ? l > f && (d -= g.y, l += g.y) : (d -= g.y, l += g.y);
        h < 0 && d < 0 ? (s = st, d = -d, h = -h, l -= d, c -= h) : h < 0 ? (s = nt, h = -h, c -= h) : d < 0 && (s = ot, d = -d, l -= d);
        break;
      case nt:
        if (p) {
          if (g.y <= 0 && (l <= f || c <= u)) {
            b = !1;
            break;
          }
          C(U), d -= g.y, l += g.y, h = d * p, c += a.width - h;
        } else
          C(U), C(K), g.x <= 0 ? c > u ? (h -= g.x, c += g.x) : g.y <= 0 && l <= f && (b = !1) : (h -= g.x, c += g.x), g.y <= 0 ? l > f && (d -= g.y, l += g.y) : (d -= g.y, l += g.y);
        h < 0 && d < 0 ? (s = ot, d = -d, h = -h, l -= d, c -= h) : h < 0 ? (s = rt, h = -h, c -= h) : d < 0 && (s = st, d = -d, l -= d);
        break;
      case st:
        if (p) {
          if (g.x <= 0 && (c <= u || y >= v)) {
            b = !1;
            break;
          }
          C(K), h -= g.x, c += g.x, d = h / p;
        } else
          C(Z), C(K), g.x <= 0 ? c > u ? (h -= g.x, c += g.x) : g.y >= 0 && y >= v && (b = !1) : (h -= g.x, c += g.x), g.y >= 0 ? y < v && (d += g.y) : d += g.y;
        h < 0 && d < 0 ? (s = rt, d = -d, h = -h, l -= d, c -= h) : h < 0 ? (s = ot, h = -h, c -= h) : d < 0 && (s = nt, d = -d, l -= d);
        break;
      case ot:
        if (p) {
          if (g.x >= 0 && (w >= m || y >= v)) {
            b = !1;
            break;
          }
          C(J), h += g.x, d = h / p;
        } else
          C(Z), C(J), g.x >= 0 ? w < m ? h += g.x : g.y >= 0 && y >= v && (b = !1) : h += g.x, g.y >= 0 ? y < v && (d += g.y) : d += g.y;
        h < 0 && d < 0 ? (s = nt, d = -d, h = -h, l -= d, c -= h) : h < 0 ? (s = st, h = -h, c -= h) : d < 0 && (s = rt, d = -d, l -= d);
        break;
      case he:
        this.move(g.x, g.y), b = !1;
        break;
      case ce:
        this.zoom(Je(r), t), b = !1;
        break;
      case se:
        if (!g.x || !g.y) {
          b = !1;
          break;
        }
        x = ve(this.cropper), c = E.startX - x.left, l = E.startY - x.top, h = a.minWidth, d = a.minHeight, g.x > 0 ? s = g.y > 0 ? ot : rt : g.x < 0 && (c -= h, s = g.y > 0 ? st : nt), g.y < 0 && (l -= d), this.cropped || (F(this.cropBox, A), this.cropped = !0, this.limited && this.limitCropBox(!0, !0));
        break;
    }
    b && (a.width = h, a.height = d, a.left = c, a.top = l, this.action = s, this.renderCropBox()), k(r, function(T) {
      T.startX = T.endX, T.startY = T.endY;
    });
  }
}, ui = {
  // Show the crop box manually
  crop: function() {
    return this.ready && !this.cropped && !this.disabled && (this.cropped = !0, this.limitCropBox(!0, !0), this.options.modal && N(this.dragBox, pt), F(this.cropBox, A), this.setCropBoxData(this.initialCropBoxData)), this;
  },
  // Reset the image and crop box to their initial states
  reset: function() {
    return this.ready && !this.disabled && (this.imageData = S({}, this.initialImageData), this.canvasData = S({}, this.initialCanvasData), this.cropBoxData = S({}, this.initialCropBoxData), this.renderCanvas(), this.cropped && this.renderCropBox()), this;
  },
  // Clear the crop box
  clear: function() {
    return this.cropped && !this.disabled && (S(this.cropBoxData, {
      left: 0,
      top: 0,
      width: 0,
      height: 0
    }), this.cropped = !1, this.renderCropBox(), this.limitCanvas(!0, !0), this.renderCanvas(), F(this.dragBox, pt), N(this.cropBox, A)), this;
  },
  /**
   * Replace the image's src and rebuild the cropper
   * @param {string} url - The new URL.
   * @param {boolean} [hasSameSize] - Indicate if the new image has the same size as the old one.
   * @returns {Cropper} this
   */
  replace: function(t) {
    var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    return !this.disabled && t && (this.isImg && (this.element.src = t), i ? (this.url = t, this.image.src = t, this.ready && (this.viewBoxImage.src = t, k(this.previews, function(e) {
      e.getElementsByTagName("img")[0].src = t;
    }))) : (this.isImg && (this.replaced = !0), this.options.data = null, this.uncreate(), this.load(t))), this;
  },
  // Enable (unfreeze) the cropper
  enable: function() {
    return this.ready && this.disabled && (this.disabled = !1, F(this.cropper, zt)), this;
  },
  // Disable (freeze) the cropper
  disable: function() {
    return this.ready && !this.disabled && (this.disabled = !0, N(this.cropper, zt)), this;
  },
  /**
   * Destroy the cropper and remove the instance from the image
   * @returns {Cropper} this
   */
  destroy: function() {
    var t = this.element;
    return t[O] ? (t[O] = void 0, this.isImg && this.replaced && (t.src = this.originalUrl), this.uncreate(), this) : this;
  },
  /**
   * Move the canvas with relative offsets
   * @param {number} offsetX - The relative offset distance on the x-axis.
   * @param {number} [offsetY=offsetX] - The relative offset distance on the y-axis.
   * @returns {Cropper} this
   */
  move: function(t) {
    var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t, e = this.canvasData, o = e.left, a = e.top;
    return this.moveTo(wt(t) ? t : o + Number(t), wt(i) ? i : a + Number(i));
  },
  /**
   * Move the canvas to an absolute point
   * @param {number} x - The x-axis coordinate.
   * @param {number} [y=x] - The y-axis coordinate.
   * @returns {Cropper} this
   */
  moveTo: function(t) {
    var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t, e = this.canvasData, o = !1;
    return t = Number(t), i = Number(i), this.ready && !this.disabled && this.options.movable && (D(t) && (e.left = t, o = !0), D(i) && (e.top = i, o = !0), o && this.renderCanvas(!0)), this;
  },
  /**
   * Zoom the canvas with a relative ratio
   * @param {number} ratio - The target ratio.
   * @param {Event} _originalEvent - The original event if any.
   * @returns {Cropper} this
   */
  zoom: function(t, i) {
    var e = this.canvasData;
    return t = Number(t), t < 0 ? t = 1 / (1 - t) : t = 1 + t, this.zoomTo(e.width * t / e.naturalWidth, null, i);
  },
  /**
   * Zoom the canvas to an absolute ratio
   * @param {number} ratio - The target ratio.
   * @param {Object} pivot - The zoom pivot point coordinate.
   * @param {Event} _originalEvent - The original event if any.
   * @returns {Cropper} this
   */
  zoomTo: function(t, i, e) {
    var o = this.options, a = this.canvasData, r = a.width, s = a.height, p = a.naturalWidth, c = a.naturalHeight;
    if (t = Number(t), t >= 0 && this.ready && !this.disabled && o.zoomable) {
      var l = p * t, h = c * t;
      if (at(this.element, Nt, {
        ratio: t,
        oldRatio: r / p,
        originalEvent: e
      }) === !1)
        return this;
      if (e) {
        var d = this.pointers, w = ve(this.cropper), y = d && Object.keys(d).length ? Ke(d) : {
          pageX: e.pageX,
          pageY: e.pageY
        };
        a.left -= (l - r) * ((y.pageX - w.left - a.left) / r), a.top -= (h - s) * ((y.pageY - w.top - a.top) / s);
      } else
        tt(i) && D(i.x) && D(i.y) ? (a.left -= (l - r) * ((i.x - a.left) / r), a.top -= (h - s) * ((i.y - a.top) / s)) : (a.left -= (l - r) / 2, a.top -= (h - s) / 2);
      a.width = l, a.height = h, this.renderCanvas(!0);
    }
    return this;
  },
  /**
   * Rotate the canvas with a relative degree
   * @param {number} degree - The rotate degree.
   * @returns {Cropper} this
   */
  rotate: function(t) {
    return this.rotateTo((this.imageData.rotate || 0) + Number(t));
  },
  /**
   * Rotate the canvas to an absolute degree
   * @param {number} degree - The rotate degree.
   * @returns {Cropper} this
   */
  rotateTo: function(t) {
    return t = Number(t), D(t) && this.ready && !this.disabled && this.options.rotatable && (this.imageData.rotate = t % 360, this.renderCanvas(!0, !0)), this;
  },
  /**
   * Scale the image on the x-axis.
   * @param {number} scaleX - The scale ratio on the x-axis.
   * @returns {Cropper} this
   */
  scaleX: function(t) {
    var i = this.imageData.scaleY;
    return this.scale(t, D(i) ? i : 1);
  },
  /**
   * Scale the image on the y-axis.
   * @param {number} scaleY - The scale ratio on the y-axis.
   * @returns {Cropper} this
   */
  scaleY: function(t) {
    var i = this.imageData.scaleX;
    return this.scale(D(i) ? i : 1, t);
  },
  /**
   * Scale the image
   * @param {number} scaleX - The scale ratio on the x-axis.
   * @param {number} [scaleY=scaleX] - The scale ratio on the y-axis.
   * @returns {Cropper} this
   */
  scale: function(t) {
    var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t, e = this.imageData, o = !1;
    return t = Number(t), i = Number(i), this.ready && !this.disabled && this.options.scalable && (D(t) && (e.scaleX = t, o = !0), D(i) && (e.scaleY = i, o = !0), o && this.renderCanvas(!0, !0)), this;
  },
  /**
   * Get the cropped area position and size data (base on the original image)
   * @param {boolean} [rounded=false] - Indicate if round the data values or not.
   * @returns {Object} The result cropped data.
   */
  getData: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, i = this.options, e = this.imageData, o = this.canvasData, a = this.cropBoxData, r;
    if (this.ready && this.cropped) {
      r = {
        x: a.left - o.left,
        y: a.top - o.top,
        width: a.width,
        height: a.height
      };
      var s = e.width / e.naturalWidth;
      if (k(r, function(l, h) {
        r[h] = l / s;
      }), t) {
        var p = Math.round(r.y + r.height), c = Math.round(r.x + r.width);
        r.x = Math.round(r.x), r.y = Math.round(r.y), r.width = c - r.x, r.height = p - r.y;
      }
    } else
      r = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      };
    return i.rotatable && (r.rotate = e.rotate || 0), i.scalable && (r.scaleX = e.scaleX || 1, r.scaleY = e.scaleY || 1), r;
  },
  /**
   * Set the cropped area position and size with new data
   * @param {Object} data - The new data.
   * @returns {Cropper} this
   */
  setData: function(t) {
    var i = this.options, e = this.imageData, o = this.canvasData, a = {};
    if (this.ready && !this.disabled && tt(t)) {
      var r = !1;
      i.rotatable && D(t.rotate) && t.rotate !== e.rotate && (e.rotate = t.rotate, r = !0), i.scalable && (D(t.scaleX) && t.scaleX !== e.scaleX && (e.scaleX = t.scaleX, r = !0), D(t.scaleY) && t.scaleY !== e.scaleY && (e.scaleY = t.scaleY, r = !0)), r && this.renderCanvas(!0, !0);
      var s = e.width / e.naturalWidth;
      D(t.x) && (a.left = t.x * s + o.left), D(t.y) && (a.top = t.y * s + o.top), D(t.width) && (a.width = t.width * s), D(t.height) && (a.height = t.height * s), this.setCropBoxData(a);
    }
    return this;
  },
  /**
   * Get the container size data.
   * @returns {Object} The result container data.
   */
  getContainerData: function() {
    return this.ready ? S({}, this.containerData) : {};
  },
  /**
   * Get the image position and size data.
   * @returns {Object} The result image data.
   */
  getImageData: function() {
    return this.sized ? S({}, this.imageData) : {};
  },
  /**
   * Get the canvas position and size data.
   * @returns {Object} The result canvas data.
   */
  getCanvasData: function() {
    var t = this.canvasData, i = {};
    return this.ready && k(["left", "top", "width", "height", "naturalWidth", "naturalHeight"], function(e) {
      i[e] = t[e];
    }), i;
  },
  /**
   * Set the canvas position and size with new data.
   * @param {Object} data - The new canvas data.
   * @returns {Cropper} this
   */
  setCanvasData: function(t) {
    var i = this.canvasData, e = i.aspectRatio;
    return this.ready && !this.disabled && tt(t) && (D(t.left) && (i.left = t.left), D(t.top) && (i.top = t.top), D(t.width) ? (i.width = t.width, i.height = t.width / e) : D(t.height) && (i.height = t.height, i.width = t.height * e), this.renderCanvas(!0)), this;
  },
  /**
   * Get the crop box position and size data.
   * @returns {Object} The result crop box data.
   */
  getCropBoxData: function() {
    var t = this.cropBoxData, i;
    return this.ready && this.cropped && (i = {
      left: t.left,
      top: t.top,
      width: t.width,
      height: t.height
    }), i || {};
  },
  /**
   * Set the crop box position and size with new data.
   * @param {Object} data - The new crop box data.
   * @returns {Cropper} this
   */
  setCropBoxData: function(t) {
    var i = this.cropBoxData, e = this.options.aspectRatio, o, a;
    return this.ready && this.cropped && !this.disabled && tt(t) && (D(t.left) && (i.left = t.left), D(t.top) && (i.top = t.top), D(t.width) && t.width !== i.width && (o = !0, i.width = t.width), D(t.height) && t.height !== i.height && (a = !0, i.height = t.height), e && (o ? i.height = i.width / e : a && (i.width = i.height * e)), this.renderCropBox()), this;
  },
  /**
   * Get a canvas drawn the cropped image.
   * @param {Object} [options={}] - The config options.
   * @returns {HTMLCanvasElement} - The result canvas.
   */
  getCroppedCanvas: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!this.ready || !window.HTMLCanvasElement)
      return null;
    var i = this.canvasData, e = Ze(this.image, this.imageData, i, t);
    if (!this.cropped)
      return e;
    var o = this.getData(t.rounded), a = o.x, r = o.y, s = o.width, p = o.height, c = e.width / Math.floor(i.naturalWidth);
    c !== 1 && (a *= c, r *= c, s *= c, p *= c);
    var l = s / p, h = V({
      aspectRatio: l,
      width: t.maxWidth || 1 / 0,
      height: t.maxHeight || 1 / 0
    }), d = V({
      aspectRatio: l,
      width: t.minWidth || 0,
      height: t.minHeight || 0
    }, "cover"), w = V({
      aspectRatio: l,
      width: t.width || (c !== 1 ? e.width : s),
      height: t.height || (c !== 1 ? e.height : p)
    }), y = w.width, u = w.height;
    y = Math.min(h.width, Math.max(d.width, y)), u = Math.min(h.height, Math.max(d.height, u));
    var f = document.createElement("canvas"), m = f.getContext("2d");
    f.width = it(y), f.height = it(u), m.fillStyle = t.fillColor || "transparent", m.fillRect(0, 0, y, u);
    var v = t.imageSmoothingEnabled, b = v === void 0 ? !0 : v, x = t.imageSmoothingQuality;
    m.imageSmoothingEnabled = b, x && (m.imageSmoothingQuality = x);
    var E = e.width, g = e.height, C = a, T = r, M, P, $, q, Y, j;
    C <= -s || C > E ? (C = 0, M = 0, $ = 0, Y = 0) : C <= 0 ? ($ = -C, C = 0, M = Math.min(E, s + C), Y = M) : C <= E && ($ = 0, M = Math.min(s, E - C), Y = M), M <= 0 || T <= -p || T > g ? (T = 0, P = 0, q = 0, j = 0) : T <= 0 ? (q = -T, T = 0, P = Math.min(g, p + T), j = P) : T <= g && (q = 0, P = Math.min(p, g - T), j = P);
    var R = [C, T, M, P];
    if (Y > 0 && j > 0) {
      var G = y / s;
      R.push($ * G, q * G, Y * G, j * G);
    }
    return m.drawImage.apply(m, [e].concat(ne(R.map(function(ut) {
      return Math.floor(it(ut));
    })))), f;
  },
  /**
   * Change the aspect ratio of the crop box.
   * @param {number} aspectRatio - The new aspect ratio.
   * @returns {Cropper} this
   */
  setAspectRatio: function(t) {
    var i = this.options;
    return !this.disabled && !wt(t) && (i.aspectRatio = Math.max(0, t) || NaN, this.ready && (this.initCropBox(), this.cropped && this.renderCropBox())), this;
  },
  /**
   * Change the drag mode.
   * @param {string} mode - The new drag mode.
   * @returns {Cropper} this
   */
  setDragMode: function(t) {
    var i = this.options, e = this.dragBox, o = this.face;
    if (this.ready && !this.disabled) {
      var a = t === Lt, r = i.movable && t === le;
      t = a || r ? t : ue, i.dragMode = t, lt(e, ct, t), et(e, Dt, a), et(e, Tt, r), i.cropBoxMovable || (lt(o, ct, t), et(o, Dt, a), et(o, Tt, r));
    }
    return this;
  }
}, di = X.Cropper, ye = /* @__PURE__ */ function() {
  function n(t) {
    var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (De(this, n), !t || !He.test(t.tagName))
      throw new Error("The first argument is required and must be an <img> or <canvas> element.");
    this.element = t, this.options = S({}, te, tt(i) && i), this.cropped = !1, this.disabled = !1, this.pointers = {}, this.ready = !1, this.reloading = !1, this.replaced = !1, this.sized = !1, this.sizing = !1, this.init();
  }
  return Te(n, [{
    key: "init",
    value: function() {
      var i = this.element, e = i.tagName.toLowerCase(), o;
      if (!i[O]) {
        if (i[O] = this, e === "img") {
          if (this.isImg = !0, o = i.getAttribute("src") || "", this.originalUrl = o, !o)
            return;
          o = i.src;
        } else
          e === "canvas" && window.HTMLCanvasElement && (o = i.toDataURL());
        this.load(o);
      }
    }
  }, {
    key: "load",
    value: function(i) {
      var e = this;
      if (i) {
        this.url = i, this.imageData = {};
        var o = this.element, a = this.options;
        if (!a.rotatable && !a.scalable && (a.checkOrientation = !1), !a.checkOrientation || !window.ArrayBuffer) {
          this.clone();
          return;
        }
        if (Be.test(i)) {
          je.test(i) ? this.read(ii(i)) : this.clone();
          return;
        }
        var r = new XMLHttpRequest(), s = this.clone.bind(this);
        this.reloading = !0, this.xhr = r, r.onabort = s, r.onerror = s, r.ontimeout = s, r.onprogress = function() {
          r.getResponseHeader("content-type") !== Zt && r.abort();
        }, r.onload = function() {
          e.read(r.response);
        }, r.onloadend = function() {
          e.reloading = !1, e.xhr = null;
        }, a.checkCrossOrigin && ie(i) && o.crossOrigin && (i = ae(i)), r.open("GET", i, !0), r.responseType = "arraybuffer", r.withCredentials = o.crossOrigin === "use-credentials", r.send();
      }
    }
  }, {
    key: "read",
    value: function(i) {
      var e = this.options, o = this.imageData, a = ri(i), r = 0, s = 1, p = 1;
      if (a > 1) {
        this.url = ai(i, Zt);
        var c = ni(a);
        r = c.rotate, s = c.scaleX, p = c.scaleY;
      }
      e.rotatable && (o.rotate = r), e.scalable && (o.scaleX = s, o.scaleY = p), this.clone();
    }
  }, {
    key: "clone",
    value: function() {
      var i = this.element, e = this.url, o = i.crossOrigin, a = e;
      this.options.checkCrossOrigin && ie(e) && (o || (o = "anonymous"), a = ae(e)), this.crossOrigin = o, this.crossOriginUrl = a;
      var r = document.createElement("img");
      o && (r.crossOrigin = o), r.src = a || e, r.alt = i.alt || "The image to crop", this.image = r, r.onload = this.start.bind(this), r.onerror = this.stop.bind(this), N(r, Wt), i.parentNode.insertBefore(r, i.nextSibling);
    }
  }, {
    key: "start",
    value: function() {
      var i = this, e = this.image;
      e.onload = null, e.onerror = null, this.sizing = !0;
      var o = X.navigator && /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(X.navigator.userAgent), a = function(c, l) {
        S(i.imageData, {
          naturalWidth: c,
          naturalHeight: l,
          aspectRatio: c / l
        }), i.initialImageData = S({}, i.imageData), i.sizing = !1, i.sized = !0, i.build();
      };
      if (e.naturalWidth && !o) {
        a(e.naturalWidth, e.naturalHeight);
        return;
      }
      var r = document.createElement("img"), s = document.body || document.documentElement;
      this.sizingImage = r, r.onload = function() {
        a(r.width, r.height), o || s.removeChild(r);
      }, r.src = e.src, o || (r.style.cssText = "left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;", s.appendChild(r));
    }
  }, {
    key: "stop",
    value: function() {
      var i = this.image;
      i.onload = null, i.onerror = null, i.parentNode.removeChild(i), this.image = null;
    }
  }, {
    key: "build",
    value: function() {
      if (!(!this.sized || this.ready)) {
        var i = this.element, e = this.options, o = this.image, a = i.parentNode, r = document.createElement("div");
        r.innerHTML = Fe;
        var s = r.querySelector(".".concat(O, "-container")), p = s.querySelector(".".concat(O, "-canvas")), c = s.querySelector(".".concat(O, "-drag-box")), l = s.querySelector(".".concat(O, "-crop-box")), h = l.querySelector(".".concat(O, "-face"));
        this.container = a, this.cropper = s, this.canvas = p, this.dragBox = c, this.cropBox = l, this.viewBox = s.querySelector(".".concat(O, "-view-box")), this.face = h, p.appendChild(o), N(i, A), a.insertBefore(s, i.nextSibling), F(o, Wt), this.initPreview(), this.bind(), e.initialAspectRatio = Math.max(0, e.initialAspectRatio) || NaN, e.aspectRatio = Math.max(0, e.aspectRatio) || NaN, e.viewMode = Math.max(0, Math.min(3, Math.round(e.viewMode))) || 0, N(l, A), e.guides || N(l.getElementsByClassName("".concat(O, "-dashed")), A), e.center || N(l.getElementsByClassName("".concat(O, "-center")), A), e.background && N(s, "".concat(O, "-bg")), e.highlight || N(h, _e), e.cropBoxMovable && (N(h, Tt), lt(h, ct, It)), e.cropBoxResizable || (N(l.getElementsByClassName("".concat(O, "-line")), A), N(l.getElementsByClassName("".concat(O, "-point")), A)), this.render(), this.ready = !0, this.setDragMode(e.dragMode), e.autoCrop && this.crop(), this.setData(e.data), _(e.ready) && I(i, Jt, e.ready, {
          once: !0
        }), at(i, Jt);
      }
    }
  }, {
    key: "unbuild",
    value: function() {
      if (this.ready) {
        this.ready = !1, this.unbind(), this.resetPreview();
        var i = this.cropper.parentNode;
        i && i.removeChild(this.cropper), F(this.element, A);
      }
    }
  }, {
    key: "uncreate",
    value: function() {
      this.ready ? (this.unbuild(), this.ready = !1, this.cropped = !1) : this.sizing ? (this.sizingImage.onload = null, this.sizing = !1, this.sized = !1) : this.reloading ? (this.xhr.onabort = null, this.xhr.abort()) : this.image && this.stop();
    }
    /**
     * Get the no conflict cropper class.
     * @returns {Cropper} The cropper class.
     */
  }], [{
    key: "noConflict",
    value: function() {
      return window.Cropper = di, n;
    }
    /**
     * Change the default options.
     * @param {Object} options - The new default options.
     */
  }, {
    key: "setDefaults",
    value: function(i) {
      S(te, tt(i) && i);
    }
  }]), n;
}();
S(ye.prototype, oi, si, hi, ci, li, ui);
function fi(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var be = { exports: {} };
(function(n, t) {
  (function(i, e) {
    n.exports = e();
  })(window, function() {
    return function(i) {
      var e = {};
      function o(a) {
        if (e[a])
          return e[a].exports;
        var r = e[a] = { i: a, l: !1, exports: {} };
        return i[a].call(r.exports, r, r.exports, o), r.l = !0, r.exports;
      }
      return o.m = i, o.c = e, o.d = function(a, r, s) {
        o.o(a, r) || Object.defineProperty(a, r, { enumerable: !0, get: s });
      }, o.r = function(a) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(a, "__esModule", { value: !0 });
      }, o.t = function(a, r) {
        if (1 & r && (a = o(a)), 8 & r || 4 & r && typeof a == "object" && a && a.__esModule)
          return a;
        var s = /* @__PURE__ */ Object.create(null);
        if (o.r(s), Object.defineProperty(s, "default", { enumerable: !0, value: a }), 2 & r && typeof a != "string")
          for (var p in a)
            o.d(s, p, (function(c) {
              return a[c];
            }).bind(null, p));
        return s;
      }, o.n = function(a) {
        var r = a && a.__esModule ? function() {
          return a.default;
        } : function() {
          return a;
        };
        return o.d(r, "a", r), r;
      }, o.o = function(a, r) {
        return Object.prototype.hasOwnProperty.call(a, r);
      }, o.p = "", o(o.s = 3);
    }([function(i, e) {
      var o;
      o = function() {
        return this;
      }();
      try {
        o = o || new Function("return this")();
      } catch {
        typeof window == "object" && (o = window);
      }
      i.exports = o;
    }, function(i, e, o) {
      (function(a) {
        var r = o(2), s = setTimeout;
        function p() {
        }
        function c(f) {
          if (!(this instanceof c))
            throw new TypeError("Promises must be constructed via new");
          if (typeof f != "function")
            throw new TypeError("not a function");
          this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], u(f, this);
        }
        function l(f, m) {
          for (; f._state === 3; )
            f = f._value;
          f._state !== 0 ? (f._handled = !0, c._immediateFn(function() {
            var v = f._state === 1 ? m.onFulfilled : m.onRejected;
            if (v !== null) {
              var b;
              try {
                b = v(f._value);
              } catch (x) {
                return void d(m.promise, x);
              }
              h(m.promise, b);
            } else
              (f._state === 1 ? h : d)(m.promise, f._value);
          })) : f._deferreds.push(m);
        }
        function h(f, m) {
          try {
            if (m === f)
              throw new TypeError("A promise cannot be resolved with itself.");
            if (m && (typeof m == "object" || typeof m == "function")) {
              var v = m.then;
              if (m instanceof c)
                return f._state = 3, f._value = m, void w(f);
              if (typeof v == "function")
                return void u((b = v, x = m, function() {
                  b.apply(x, arguments);
                }), f);
            }
            f._state = 1, f._value = m, w(f);
          } catch (E) {
            d(f, E);
          }
          var b, x;
        }
        function d(f, m) {
          f._state = 2, f._value = m, w(f);
        }
        function w(f) {
          f._state === 2 && f._deferreds.length === 0 && c._immediateFn(function() {
            f._handled || c._unhandledRejectionFn(f._value);
          });
          for (var m = 0, v = f._deferreds.length; m < v; m++)
            l(f, f._deferreds[m]);
          f._deferreds = null;
        }
        function y(f, m, v) {
          this.onFulfilled = typeof f == "function" ? f : null, this.onRejected = typeof m == "function" ? m : null, this.promise = v;
        }
        function u(f, m) {
          var v = !1;
          try {
            f(function(b) {
              v || (v = !0, h(m, b));
            }, function(b) {
              v || (v = !0, d(m, b));
            });
          } catch (b) {
            if (v)
              return;
            v = !0, d(m, b);
          }
        }
        c.prototype.catch = function(f) {
          return this.then(null, f);
        }, c.prototype.then = function(f, m) {
          var v = new this.constructor(p);
          return l(this, new y(f, m, v)), v;
        }, c.prototype.finally = r.a, c.all = function(f) {
          return new c(function(m, v) {
            if (!f || f.length === void 0)
              throw new TypeError("Promise.all accepts an array");
            var b = Array.prototype.slice.call(f);
            if (b.length === 0)
              return m([]);
            var x = b.length;
            function E(C, T) {
              try {
                if (T && (typeof T == "object" || typeof T == "function")) {
                  var M = T.then;
                  if (typeof M == "function")
                    return void M.call(T, function(P) {
                      E(C, P);
                    }, v);
                }
                b[C] = T, --x == 0 && m(b);
              } catch (P) {
                v(P);
              }
            }
            for (var g = 0; g < b.length; g++)
              E(g, b[g]);
          });
        }, c.resolve = function(f) {
          return f && typeof f == "object" && f.constructor === c ? f : new c(function(m) {
            m(f);
          });
        }, c.reject = function(f) {
          return new c(function(m, v) {
            v(f);
          });
        }, c.race = function(f) {
          return new c(function(m, v) {
            for (var b = 0, x = f.length; b < x; b++)
              f[b].then(m, v);
          });
        }, c._immediateFn = typeof a == "function" && function(f) {
          a(f);
        } || function(f) {
          s(f, 0);
        }, c._unhandledRejectionFn = function(f) {
          typeof console < "u" && console && console.warn("Possible Unhandled Promise Rejection:", f);
        }, e.a = c;
      }).call(this, o(5).setImmediate);
    }, function(i, e, o) {
      e.a = function(a) {
        var r = this.constructor;
        return this.then(function(s) {
          return r.resolve(a()).then(function() {
            return s;
          });
        }, function(s) {
          return r.resolve(a()).then(function() {
            return r.reject(s);
          });
        });
      };
    }, function(i, e, o) {
      function a(u) {
        return (a = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(f) {
          return typeof f;
        } : function(f) {
          return f && typeof Symbol == "function" && f.constructor === Symbol && f !== Symbol.prototype ? "symbol" : typeof f;
        })(u);
      }
      o(4);
      var r, s, p, c, l, h, d, w = o(8), y = (s = function(u) {
        return new Promise(function(f, m) {
          u = c(u), (u = l(u)).beforeSend && u.beforeSend();
          var v = window.XMLHttpRequest ? new window.XMLHttpRequest() : new window.ActiveXObject("Microsoft.XMLHTTP");
          v.open(u.method, u.url), v.setRequestHeader("X-Requested-With", "XMLHttpRequest"), Object.keys(u.headers).forEach(function(x) {
            var E = u.headers[x];
            v.setRequestHeader(x, E);
          });
          var b = u.ratio;
          v.upload.addEventListener("progress", function(x) {
            var E = Math.round(x.loaded / x.total * 100), g = Math.ceil(E * b / 100);
            u.progress(Math.min(g, 100));
          }, !1), v.addEventListener("progress", function(x) {
            var E = Math.round(x.loaded / x.total * 100), g = Math.ceil(E * (100 - b) / 100) + b;
            u.progress(Math.min(g, 100));
          }, !1), v.onreadystatechange = function() {
            if (v.readyState === 4) {
              var x = v.response;
              try {
                x = JSON.parse(x);
              } catch {
              }
              var E = w.parseHeaders(v.getAllResponseHeaders()), g = { body: x, code: v.status, headers: E };
              d(v.status) ? f(g) : m(g);
            }
          }, v.send(u.data);
        });
      }, p = function(u) {
        return u.method = "POST", s(u);
      }, c = function() {
        var u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        if (u.url && typeof u.url != "string")
          throw new Error("Url must be a string");
        if (u.url = u.url || "", u.method && typeof u.method != "string")
          throw new Error("`method` must be a string or null");
        if (u.method = u.method ? u.method.toUpperCase() : "GET", u.headers && a(u.headers) !== "object")
          throw new Error("`headers` must be an object or null");
        if (u.headers = u.headers || {}, u.type && (typeof u.type != "string" || !Object.values(r).includes(u.type)))
          throw new Error("`type` must be taken from module's «contentType» library");
        if (u.progress && typeof u.progress != "function")
          throw new Error("`progress` must be a function or null");
        if (u.progress = u.progress || function(f) {
        }, u.beforeSend = u.beforeSend || function(f) {
        }, u.ratio && typeof u.ratio != "number")
          throw new Error("`ratio` must be a number");
        if (u.ratio < 0 || u.ratio > 100)
          throw new Error("`ratio` must be in a 0-100 interval");
        if (u.ratio = u.ratio || 90, u.accept && typeof u.accept != "string")
          throw new Error("`accept` must be a string with a list of allowed mime-types");
        if (u.accept = u.accept || "*/*", u.multiple && typeof u.multiple != "boolean")
          throw new Error("`multiple` must be a true or false");
        if (u.multiple = u.multiple || !1, u.fieldName && typeof u.fieldName != "string")
          throw new Error("`fieldName` must be a string");
        return u.fieldName = u.fieldName || "files", u;
      }, l = function(u) {
        switch (u.method) {
          case "GET":
            var f = h(u.data, r.URLENCODED);
            delete u.data, u.url = /\?/.test(u.url) ? u.url + "&" + f : u.url + "?" + f;
            break;
          case "POST":
          case "PUT":
          case "DELETE":
          case "UPDATE":
            var m = function() {
              return (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}).type || r.JSON;
            }(u);
            (w.isFormData(u.data) || w.isFormElement(u.data)) && (m = r.FORM), u.data = h(u.data, m), m !== y.contentType.FORM && (u.headers["content-type"] = m);
        }
        return u;
      }, h = function() {
        var u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        switch (arguments.length > 1 ? arguments[1] : void 0) {
          case r.URLENCODED:
            return w.urlEncode(u);
          case r.JSON:
            return w.jsonEncode(u);
          case r.FORM:
            return w.formEncode(u);
          default:
            return u;
        }
      }, d = function(u) {
        return u >= 200 && u < 300;
      }, { contentType: r = { URLENCODED: "application/x-www-form-urlencoded; charset=utf-8", FORM: "multipart/form-data", JSON: "application/json; charset=utf-8" }, request: s, get: function(u) {
        return u.method = "GET", s(u);
      }, post: p, transport: function(u) {
        return u = c(u), w.selectFiles(u).then(function(f) {
          for (var m = new FormData(), v = 0; v < f.length; v++)
            m.append(u.fieldName, f[v], f[v].name);
          w.isObject(u.data) && Object.keys(u.data).forEach(function(x) {
            var E = u.data[x];
            m.append(x, E);
          });
          var b = u.beforeSend;
          return u.beforeSend = function() {
            return b(f);
          }, u.data = m, p(u);
        });
      }, selectFiles: function(u) {
        return delete (u = c(u)).beforeSend, w.selectFiles(u);
      } });
      i.exports = y;
    }, function(i, e, o) {
      o.r(e);
      var a = o(1);
      window.Promise = window.Promise || a.a;
    }, function(i, e, o) {
      (function(a) {
        var r = a !== void 0 && a || typeof self < "u" && self || window, s = Function.prototype.apply;
        function p(c, l) {
          this._id = c, this._clearFn = l;
        }
        e.setTimeout = function() {
          return new p(s.call(setTimeout, r, arguments), clearTimeout);
        }, e.setInterval = function() {
          return new p(s.call(setInterval, r, arguments), clearInterval);
        }, e.clearTimeout = e.clearInterval = function(c) {
          c && c.close();
        }, p.prototype.unref = p.prototype.ref = function() {
        }, p.prototype.close = function() {
          this._clearFn.call(r, this._id);
        }, e.enroll = function(c, l) {
          clearTimeout(c._idleTimeoutId), c._idleTimeout = l;
        }, e.unenroll = function(c) {
          clearTimeout(c._idleTimeoutId), c._idleTimeout = -1;
        }, e._unrefActive = e.active = function(c) {
          clearTimeout(c._idleTimeoutId);
          var l = c._idleTimeout;
          l >= 0 && (c._idleTimeoutId = setTimeout(function() {
            c._onTimeout && c._onTimeout();
          }, l));
        }, o(6), e.setImmediate = typeof self < "u" && self.setImmediate || a !== void 0 && a.setImmediate || this && this.setImmediate, e.clearImmediate = typeof self < "u" && self.clearImmediate || a !== void 0 && a.clearImmediate || this && this.clearImmediate;
      }).call(this, o(0));
    }, function(i, e, o) {
      (function(a, r) {
        (function(s, p) {
          if (!s.setImmediate) {
            var c, l, h, d, w, y = 1, u = {}, f = !1, m = s.document, v = Object.getPrototypeOf && Object.getPrototypeOf(s);
            v = v && v.setTimeout ? v : s, {}.toString.call(s.process) === "[object process]" ? c = function(E) {
              r.nextTick(function() {
                x(E);
              });
            } : function() {
              if (s.postMessage && !s.importScripts) {
                var E = !0, g = s.onmessage;
                return s.onmessage = function() {
                  E = !1;
                }, s.postMessage("", "*"), s.onmessage = g, E;
              }
            }() ? (d = "setImmediate$" + Math.random() + "$", w = function(E) {
              E.source === s && typeof E.data == "string" && E.data.indexOf(d) === 0 && x(+E.data.slice(d.length));
            }, s.addEventListener ? s.addEventListener("message", w, !1) : s.attachEvent("onmessage", w), c = function(E) {
              s.postMessage(d + E, "*");
            }) : s.MessageChannel ? ((h = new MessageChannel()).port1.onmessage = function(E) {
              x(E.data);
            }, c = function(E) {
              h.port2.postMessage(E);
            }) : m && "onreadystatechange" in m.createElement("script") ? (l = m.documentElement, c = function(E) {
              var g = m.createElement("script");
              g.onreadystatechange = function() {
                x(E), g.onreadystatechange = null, l.removeChild(g), g = null;
              }, l.appendChild(g);
            }) : c = function(E) {
              setTimeout(x, 0, E);
            }, v.setImmediate = function(E) {
              typeof E != "function" && (E = new Function("" + E));
              for (var g = new Array(arguments.length - 1), C = 0; C < g.length; C++)
                g[C] = arguments[C + 1];
              var T = { callback: E, args: g };
              return u[y] = T, c(y), y++;
            }, v.clearImmediate = b;
          }
          function b(E) {
            delete u[E];
          }
          function x(E) {
            if (f)
              setTimeout(x, 0, E);
            else {
              var g = u[E];
              if (g) {
                f = !0;
                try {
                  (function(C) {
                    var T = C.callback, M = C.args;
                    switch (M.length) {
                      case 0:
                        T();
                        break;
                      case 1:
                        T(M[0]);
                        break;
                      case 2:
                        T(M[0], M[1]);
                        break;
                      case 3:
                        T(M[0], M[1], M[2]);
                        break;
                      default:
                        T.apply(p, M);
                    }
                  })(g);
                } finally {
                  b(E), f = !1;
                }
              }
            }
          }
        })(typeof self > "u" ? a === void 0 ? this : a : self);
      }).call(this, o(0), o(7));
    }, function(i, e) {
      var o, a, r = i.exports = {};
      function s() {
        throw new Error("setTimeout has not been defined");
      }
      function p() {
        throw new Error("clearTimeout has not been defined");
      }
      function c(v) {
        if (o === setTimeout)
          return setTimeout(v, 0);
        if ((o === s || !o) && setTimeout)
          return o = setTimeout, setTimeout(v, 0);
        try {
          return o(v, 0);
        } catch {
          try {
            return o.call(null, v, 0);
          } catch {
            return o.call(this, v, 0);
          }
        }
      }
      (function() {
        try {
          o = typeof setTimeout == "function" ? setTimeout : s;
        } catch {
          o = s;
        }
        try {
          a = typeof clearTimeout == "function" ? clearTimeout : p;
        } catch {
          a = p;
        }
      })();
      var l, h = [], d = !1, w = -1;
      function y() {
        d && l && (d = !1, l.length ? h = l.concat(h) : w = -1, h.length && u());
      }
      function u() {
        if (!d) {
          var v = c(y);
          d = !0;
          for (var b = h.length; b; ) {
            for (l = h, h = []; ++w < b; )
              l && l[w].run();
            w = -1, b = h.length;
          }
          l = null, d = !1, function(x) {
            if (a === clearTimeout)
              return clearTimeout(x);
            if ((a === p || !a) && clearTimeout)
              return a = clearTimeout, clearTimeout(x);
            try {
              a(x);
            } catch {
              try {
                return a.call(null, x);
              } catch {
                return a.call(this, x);
              }
            }
          }(v);
        }
      }
      function f(v, b) {
        this.fun = v, this.array = b;
      }
      function m() {
      }
      r.nextTick = function(v) {
        var b = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var x = 1; x < arguments.length; x++)
            b[x - 1] = arguments[x];
        h.push(new f(v, b)), h.length !== 1 || d || c(u);
      }, f.prototype.run = function() {
        this.fun.apply(null, this.array);
      }, r.title = "browser", r.browser = !0, r.env = {}, r.argv = [], r.version = "", r.versions = {}, r.on = m, r.addListener = m, r.once = m, r.off = m, r.removeListener = m, r.removeAllListeners = m, r.emit = m, r.prependListener = m, r.prependOnceListener = m, r.listeners = function(v) {
        return [];
      }, r.binding = function(v) {
        throw new Error("process.binding is not supported");
      }, r.cwd = function() {
        return "/";
      }, r.chdir = function(v) {
        throw new Error("process.chdir is not supported");
      }, r.umask = function() {
        return 0;
      };
    }, function(i, e, o) {
      function a(s, p) {
        for (var c = 0; c < p.length; c++) {
          var l = p[c];
          l.enumerable = l.enumerable || !1, l.configurable = !0, "value" in l && (l.writable = !0), Object.defineProperty(s, l.key, l);
        }
      }
      var r = o(9);
      i.exports = function() {
        function s() {
          (function(h, d) {
            if (!(h instanceof d))
              throw new TypeError("Cannot call a class as a function");
          })(this, s);
        }
        var p, c, l;
        return p = s, l = [{ key: "urlEncode", value: function(h) {
          return r(h);
        } }, { key: "jsonEncode", value: function(h) {
          return JSON.stringify(h);
        } }, { key: "formEncode", value: function(h) {
          if (this.isFormData(h))
            return h;
          if (this.isFormElement(h))
            return new FormData(h);
          if (this.isObject(h)) {
            var d = new FormData();
            return Object.keys(h).forEach(function(w) {
              var y = h[w];
              d.append(w, y);
            }), d;
          }
          throw new Error("`data` must be an instance of Object, FormData or <FORM> HTMLElement");
        } }, { key: "isObject", value: function(h) {
          return Object.prototype.toString.call(h) === "[object Object]";
        } }, { key: "isFormData", value: function(h) {
          return h instanceof FormData;
        } }, { key: "isFormElement", value: function(h) {
          return h instanceof HTMLFormElement;
        } }, { key: "selectFiles", value: function() {
          var h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          return new Promise(function(d, w) {
            var y = document.createElement("INPUT");
            y.type = "file", h.multiple && y.setAttribute("multiple", "multiple"), h.accept && y.setAttribute("accept", h.accept), y.style.display = "none", document.body.appendChild(y), y.addEventListener("change", function(u) {
              var f = u.target.files;
              d(f), document.body.removeChild(y);
            }, !1), y.click();
          });
        } }, { key: "parseHeaders", value: function(h) {
          var d = h.trim().split(/[\r\n]+/), w = {};
          return d.forEach(function(y) {
            var u = y.split(": "), f = u.shift(), m = u.join(": ");
            f && (w[f] = m);
          }), w;
        } }], (c = null) && a(p.prototype, c), l && a(p, l), s;
      }();
    }, function(i, e) {
      var o = function(r) {
        return encodeURIComponent(r).replace(/[!'()*]/g, escape).replace(/%20/g, "+");
      }, a = function(r, s, p, c) {
        return s = s || null, p = p || "&", c = c || null, r ? function(l) {
          for (var h = new Array(), d = 0; d < l.length; d++)
            l[d] && h.push(l[d]);
          return h;
        }(Object.keys(r).map(function(l) {
          var h, d, w = l;
          if (c && (w = c + "[" + w + "]"), typeof r[l] == "object" && r[l] !== null)
            h = a(r[l], null, p, w);
          else {
            s && (d = w, w = !isNaN(parseFloat(d)) && isFinite(d) ? s + Number(w) : w);
            var y = r[l];
            y = (y = (y = (y = y === !0 ? "1" : y) === !1 ? "0" : y) === 0 ? "0" : y) || "", h = o(w) + "=" + o(y);
          }
          return h;
        })).join(p).replace(/[!'()*]/g, "") : "";
      };
      i.exports = a;
    }]);
  });
})(be);
var pi = be.exports;
const z = /* @__PURE__ */ fi(pi);
class L {
  /**
   * @param {object} ui - image tool Ui module
   * @param {object} ui.api - Editor.js API
   * @param {ImageConfig} ui.config - user config
   * @param {Function} ui.onSelectFile - callback for clicks on Select file button
   * @param {boolean} ui.readOnly - read-only mode flag
   */
  constructor({ api: t, config: i, onSelectFile: e, readOnly: o }) {
    this.api = t, this.config = i, this.onSelectFile = e, this.readOnly = o, this.cropper = null, this.nodes = {
      wrapper: H("div", [this.CSS.baseClass, this.CSS.wrapper]),
      imageContainer: H("div", [this.CSS.imageContainer]),
      fileButton: this.createFileButton(),
      imageEl: void 0,
      imagePreloader: H("div", this.CSS.imagePreloader),
      caption: H("div", [this.CSS.input, this.CSS.caption], {
        contentEditable: !this.readOnly
      }),
      cropper: H("div", [this.CSS.cropper]),
      cropperContainer: H("div", [this.CSS.cropperContainer]),
      cropperCanvas: H("canvas", [this.CSS.cropperCanvas]),
      cropperCanvasButton: this.createCroppedButton()
    }, this.nodes.caption.dataset.placeholder = this.config.captionPlaceholder, this.nodes.imageContainer.appendChild(this.nodes.imagePreloader), this.nodes.wrapper.appendChild(this.nodes.imageContainer), this.nodes.wrapper.appendChild(this.nodes.caption), this.nodes.wrapper.appendChild(this.nodes.fileButton), this.nodes.cropperContainer.appendChild(this.nodes.cropperCanvas), this.nodes.cropper.appendChild(this.nodes.cropperContainer), this.nodes.cropper.appendChild(this.nodes.cropperCanvasButton), this.nodes.wrapper.appendChild(this.nodes.cropper);
  }
  /**
   * CSS classes
   *
   * @returns {object}
   */
  get CSS() {
    return {
      baseClass: this.api.styles.block,
      loading: this.api.styles.loader,
      input: this.api.styles.input,
      button: this.api.styles.button,
      /**
       * Tool's classes
       */
      wrapper: "image-tool",
      imageContainer: "image-tool__image",
      imagePreloader: "image-tool__image-preloader",
      imageEl: "image-tool__image-picture",
      caption: "image-tool__caption",
      cropper: "image-tool__cropper",
      cropperContainer: "image-tool__cropper-container",
      cropperCanvas: "image-tool__cropper-canvas",
      cropperConfirmButton: "image-tool__cropper-canvas-btn"
    };
  }
  /**
   * Ui statuses:
   * - empty
   * - cropping
   * - uploading
   * - filled
   *
   * @returns {{EMPTY: string, CROPPING: string, UPLOADING: string, FILLED: string}}
   */
  static get status() {
    return {
      EMPTY: "empty",
      UPLOADING: "loading",
      CROPPING: "cropping",
      FILLED: "filled"
    };
  }
  /**
   * Renders tool UI
   *
   * @param {ImageToolData} toolData - saved tool data
   * @returns {Element}
   */
  render(t) {
    return !t.file || Object.keys(t.file).length === 0 ? this.toggleStatus(L.status.EMPTY) : this.toggleStatus(L.status.UPLOADING), this.nodes.wrapper;
  }
  /**
   * Creates upload-file button
   *
   * @returns {Element}
   */
  createFileButton() {
    const t = H("div", [this.CSS.button]);
    return t.innerHTML = this.config.buttonContent || `${Et} ${this.api.i18n.t("Select an Image")}`, t.addEventListener("click", () => {
      z.selectFiles({ accept: this.config.types }).then((i) => {
        this.showCropper(i[0]);
      });
    }), t;
  }
  /**
   * Create send cropped file button
   *
   * @returns {Element}
   */
  createCroppedButton() {
    const t = H("button", [this.CSS.cropperConfirmButton], { type: "button" });
    return t.innerHTML = this.config.buttonCropped || `${Et} ${this.api.i18n.t("Upload photo")}`, t.addEventListener("click", () => {
      const i = this.getCroppedCanvas();
      i && i.toBlob((e) => {
        this.onSelectFile(new File([e], "fileName.jpg", { type: "image/jpeg" }));
      });
    }), t;
  }
  /**
   * Returns cropped canvas
   *
   * @returns {null|HTMLCanvasElement}
   */
  getCroppedCanvas() {
    return this.cropper ? this.cropper.getCroppedCanvas() : null;
  }
  /**
   * Render cropper
   *
   * @param {File} file
   * @returns {Element}
   */
  showCropper(t) {
    const i = this.nodes.cropperCanvas, e = i.getContext("2d"), o = new FileReader(), a = new Image();
    return a.onload = () => {
      e.canvas.width = a.width, e.canvas.height = a.height, e.drawImage(a, 0, 0, e.canvas.width, e.canvas.height), this.cropper = new ye(i, this.config.cropperConfigs);
    }, o.onloadend = function() {
      a.src = o.result;
    }, o.readAsDataURL(t), this.toggleStatus(L.status.CROPPING), i;
  }
  /**
   * Shows uploading preloader
   *
   * @param {string} src - preview source
   * @returns {void}
   */
  showPreloader(t) {
    this.nodes.imagePreloader.style.backgroundImage = `url(${t})`, this.toggleStatus(L.status.UPLOADING);
  }
  /**
   * Hide uploading preloader
   *
   * @returns {void}
   */
  hidePreloader() {
    this.nodes.imagePreloader.style.backgroundImage = "", this.toggleStatus(L.status.EMPTY);
  }
  /**
   * Shows an image
   *
   * @param {string} url - image source
   * @returns {void}
   */
  fillImage(t) {
    const i = /\.mp4$/.test(t) ? "VIDEO" : "IMG", e = {
      src: t
    };
    let o = "load";
    i === "VIDEO" && (e.autoplay = !0, e.loop = !0, e.muted = !0, e.playsinline = !0, o = "loadeddata"), this.nodes.imageEl = H(i, this.CSS.imageEl, e), this.nodes.imageEl.addEventListener(o, () => {
      this.toggleStatus(L.status.FILLED), this.nodes.imagePreloader && (this.nodes.imagePreloader.style.backgroundImage = "");
    }), this.nodes.imageContainer.appendChild(this.nodes.imageEl);
  }
  /**
   * Shows caption input
   *
   * @param {string} text - caption text
   * @returns {void}
   */
  fillCaption(t) {
    this.nodes.caption && (this.nodes.caption.innerHTML = t);
  }
  /**
   * Changes UI status
   *
   * @param {string} status - see {@link Ui.status} constants
   * @returns {void}
   */
  toggleStatus(t) {
    for (const i in L.status)
      Object.prototype.hasOwnProperty.call(L.status, i) && this.nodes.wrapper.classList.toggle(`${this.CSS.wrapper}--${L.status[i]}`, t === L.status[i]);
  }
  /**
   * Apply visual representation of activated tune
   *
   * @param {string} tuneName - one of available tunes {@link Tunes.tunes}
   * @param {boolean} status - true for enable, false for disable
   * @returns {void}
   */
  applyTune(t, i) {
    this.nodes.wrapper.classList.toggle(`${this.CSS.wrapper}--${t}`, i);
  }
}
function bt(n) {
  return n && typeof n.then == "function";
}
class gi {
  /**
   * @param {object} params - uploader module params
   * @param {ImageConfig} params.config - image tool config
   * @param {Function} params.onUpload - one callback for all uploading (file, url, d-n-d, pasting)
   * @param {Function} params.onError - callback for uploading errors
   */
  constructor({ config: t, onUpload: i, onError: e }) {
    this.config = t, this.onUpload = i, this.onError = e;
  }
  /**
   * Handle clicks on the upload file button
   * Fires ajax.transport()
   *
   * @param {Function} onPreview - callback fired when preview is ready
   * @param {object} [croppedFile] - if the user is using cropping
   */
  uploadSelectedFile({ onPreview: t }, i) {
    const e = function(a) {
      const r = new FileReader();
      r.readAsDataURL(a), r.onload = (s) => {
        t(s.target.result);
      };
    };
    let o;
    if (this.config.uploader && typeof this.config.uploader.uploadByFile == "function") {
      const a = (r) => {
        e(r[0]);
        const s = this.config.uploader.uploadByFile(r[0]);
        return bt(s) || console.warn("Custom uploader method uploadByFile should return a Promise"), s;
      };
      if (i)
        return a([i]);
      o = z.selectFiles({ accept: this.config.types }).then((r) => a(r));
    } else if (i) {
      const a = new FormData();
      a.append(this.config.field, i, "image.jpg"), o = z.post({
        url: this.config.endpoints.byFile,
        data: a,
        headers: this.config.additionalRequestHeaders,
        beforeSend: () => {
          e(i);
        }
      }).then((r) => r.body);
    } else
      o = z.transport({
        url: this.config.endpoints.byFile,
        data: this.config.additionalRequestData,
        accept: this.config.types,
        headers: this.config.additionalRequestHeaders,
        beforeSend: (a) => {
          e(a[0]);
        },
        fieldName: this.config.field
      }).then((a) => a.body);
    o.then((a) => {
      this.onUpload(a);
    }).catch((a) => {
      this.onError(a);
    });
  }
  /**
   * Handle clicks on the upload file button
   * Fires ajax.post()
   *
   * @param {string} url - image source url
   */
  uploadByUrl(t) {
    let i;
    this.config.uploader && typeof this.config.uploader.uploadByUrl == "function" ? (i = this.config.uploader.uploadByUrl(t), bt(i) || console.warn("Custom uploader method uploadByUrl should return a Promise")) : i = z.post({
      url: this.config.endpoints.byUrl,
      data: Object.assign({
        url: t
      }, this.config.additionalRequestData),
      type: z.contentType.JSON,
      headers: this.config.additionalRequestHeaders
    }).then((e) => e.body), i.then((e) => {
      this.onUpload(e);
    }).catch((e) => {
      this.onError(e);
    });
  }
  /**
   * Handle clicks on the upload file button
   * Fires ajax.post()
   *
   * @param {File} file - file pasted by drag-n-drop
   * @param {Function} onPreview - file pasted by drag-n-drop
   */
  uploadByFile(t, { onPreview: i }) {
    const e = new FileReader();
    e.readAsDataURL(t), e.onload = (a) => {
      i(a.target.result);
    };
    let o;
    if (this.config.uploader && typeof this.config.uploader.uploadByFile == "function")
      o = this.config.uploader.uploadByFile(t), bt(o) || console.warn("Custom uploader method uploadByFile should return a Promise");
    else {
      const a = new FormData();
      a.append(this.config.field, t), this.config.additionalRequestData && Object.keys(this.config.additionalRequestData).length && Object.entries(this.config.additionalRequestData).forEach(([r, s]) => {
        a.append(r, s);
      }), o = z.post({
        url: this.config.endpoints.byFile,
        data: a,
        type: z.contentType.JSON,
        headers: this.config.additionalRequestHeaders
      }).then((r) => r.body);
    }
    o.then((a) => {
      this.onUpload(a);
    }).catch((a) => {
      this.onError(a);
    });
  }
}
/**
 * Image Tool for the Editor.js
 *
 * @author CodeX <team@codex.so>
 * @license MIT
 * @see {@link https://github.com/editor-js/image}
 *
 * To developers.
 * To simplify Tool structure, we split it to 4 parts:
 *  1) index.js — main Tool's interface, public API and methods for working with data
 *  2) uploader.js — module that has methods for sending files via AJAX: from device, by URL or File pasting
 *  3) ui.js — module for UI manipulations: render, showing preloader, etc
 *  4) tunes.js — working with Block Tunes: render buttons, handle clicks
 *
 * For debug purposes there is a testing server
 * that can save uploaded files and return a Response {@link UploadResponseFormat}
 *
 *       $ node dev/server.js
 *
 * It will expose 8008 port, so you can pass http://localhost:8008 with the Tools config:
 *
 * image: {
 *   class: ImageTool,
 *   config: {
 *     endpoints: {
 *       byFile: 'http://localhost:8008/uploadFile',
 *       byUrl: 'http://localhost:8008/fetchUrl',
 *     }
 *   },
 * },
 */
class _t {
  /**
   * Notify core that read-only mode is supported
   *
   * @returns {boolean}
   */
  static get isReadOnlySupported() {
    return !0;
  }
  /**
   * Get Tool toolbox settings
   * icon - Tool icon's SVG
   * title - title to show in toolbox
   *
   * @returns {{icon: string, title: string}}
   */
  static get toolbox() {
    return {
      icon: Et,
      title: "Image"
    };
  }
  /**
   * Available image tools
   *
   * @returns {Array}
   */
  static get tunes() {
    return [
      {
        name: "withBorder",
        icon: Ce,
        title: "With border",
        toggle: !0
      }
      // {
      //   name: 'stretched',
      //   icon: IconStretch,
      //   title: 'Stretch image',
      //   toggle: true,
      // },
      // {
      //   name: 'withBackground',
      //   icon: IconAddBackground,
      //   title: 'With background',
      //   toggle: true,
      // },
    ];
  }
  /**
   * @param {object} tool - tool properties got from editor.js
   * @param {ImageToolData} tool.data - previously saved data
   * @param {ImageConfig} tool.config - user config for Tool
   * @param {object} tool.api - Editor.js API
   * @param {boolean} tool.readOnly - read-only mode flag
   * @param {BlockAPI|{}} tool.block - current Block API
   */
  constructor({ data: t, config: i, api: e, readOnly: o, block: a }) {
    this.api = e, this.readOnly = o, this.block = a, this.config = {
      endpoints: i.endpoints || "",
      additionalRequestData: i.additionalRequestData || {},
      additionalRequestHeaders: i.additionalRequestHeaders || {},
      field: i.field || "image",
      types: i.types || "image/*",
      captionPlaceholder: this.api.i18n.t(i.captionPlaceholder || "Caption"),
      buttonContent: i.buttonContent || "",
      uploader: i.uploader || void 0,
      actions: i.actions || [],
      withCropper: i.withCropper || !1,
      cropperConfigs: i.cropperConfigs || {}
    }, this.uploader = new gi({
      config: this.config,
      onUpload: (r) => this.onUpload(r),
      onError: (r) => this.uploadingFailed(r)
    }), this.ui = new L({
      api: e,
      config: this.config,
      onSelectFile: (r) => {
        this.uploader.uploadSelectedFile({
          onPreview: (s) => {
            this.ui.showPreloader(s);
          }
        }, r);
      },
      readOnly: o
    }), this._data = {}, this.data = t;
  }
  /**
   * Renders Block content
   *
   * @public
   *
   * @returns {HTMLDivElement}
   */
  render() {
    return this.ui.render(this.data);
  }
  /**
   * Validate data: check if Image exists
   *
   * @param {ImageToolData} savedData — data received after saving
   * @returns {boolean} false if saved data is not correct, otherwise true
   * @public
   */
  validate(t) {
    return t.file && t.file.url;
  }
  /**
   * Return Block data
   *
   * @public
   *
   * @returns {ImageToolData}
   */
  save() {
    const t = this.ui.nodes.caption;
    return this._data.caption = t.innerHTML, this.data;
  }
  /**
   * Returns configuration for block tunes: add background, add border, stretch image
   *
   * @public
   *
   * @returns {Array}
   */
  renderSettings() {
    return _t.tunes.concat(this.config.actions).map((i) => ({
      icon: i.icon,
      label: this.api.i18n.t(i.title),
      name: i.name,
      toggle: i.toggle,
      isActive: this.data[i.name],
      onActivate: () => {
        if (typeof i.action == "function") {
          i.action(i.name);
          return;
        }
        this.tuneToggled(i.name);
      }
    }));
  }
  /**
   * Fires after clicks on the Toolbox Image Icon
   * Initiates click on the Select File button
   *
   * @public
   */
  appendCallback() {
    this.ui.nodes.fileButton.click();
  }
  /**
   * Specify paste substitutes
   *
   * @see {@link https://github.com/codex-team/editor.js/blob/master/docs/tools.md#paste-handling}
   * @returns {{tags: string[], patterns: object<string, RegExp>, files: {extensions: string[], mimeTypes: string[]}}}
   */
  static get pasteConfig() {
    return {
      /**
       * Paste HTML into Editor
       */
      tags: [
        {
          img: { src: !0 }
        }
      ],
      /**
       * Paste URL of image into the Editor
       */
      patterns: {
        image: /https?:\/\/\S+\.(gif|jpe?g|tiff|png|svg|webp)(\?[a-z0-9=]*)?$/i
      },
      /**
       * Drag n drop file from into the Editor
       */
      files: {
        mimeTypes: ["image/*"]
      }
    };
  }
  /**
   * Specify paste handlers
   *
   * @public
   * @see {@link https://github.com/codex-team/editor.js/blob/master/docs/tools.md#paste-handling}
   * @param {CustomEvent} event - editor.js custom paste event
   *                              {@link https://github.com/codex-team/editor.js/blob/master/types/tools/paste-events.d.ts}
   * @returns {void}
   */
  async onPaste(t) {
    switch (t.type) {
      case "tag": {
        const i = t.detail.data;
        if (/^blob:/.test(i.src)) {
          const o = await (await fetch(i.src)).blob();
          this.uploadFile(o);
          break;
        }
        this.uploadUrl(i.src);
        break;
      }
      case "pattern": {
        const i = t.detail.data;
        this.uploadUrl(i);
        break;
      }
      case "file": {
        const i = t.detail.file;
        this.uploadFile(i);
        break;
      }
    }
  }
  /**
   * Private methods
   * ̿̿ ̿̿ ̿̿ ̿'̿'\̵͇̿̿\з= ( ▀ ͜͞ʖ▀) =ε/̵͇̿̿/’̿’̿ ̿ ̿̿ ̿̿ ̿̿
   */
  /**
   * Stores all Tool's data
   *
   * @private
   *
   * @param {ImageToolData} data - data in Image Tool format
   */
  set data(t) {
    this.image = t.file, this._data.caption = t.caption || "", this.ui.fillCaption(this._data.caption), _t.tunes.forEach(({ name: i }) => {
      const e = typeof t[i] < "u" ? t[i] === !0 || t[i] === "true" : !1;
      this.setTune(i, e);
    });
  }
  /**
   * Return Tool data
   *
   * @private
   *
   * @returns {ImageToolData}
   */
  get data() {
    return this._data;
  }
  /**
   * Set new image file
   *
   * @private
   *
   * @param {object} file - uploaded file data
   */
  set image(t) {
    this._data.file = t || {}, t && t.url && this.ui.fillImage(t.url);
  }
  /**
   * File uploading callback
   *
   * @private
   *
   * @param {UploadResponseFormat} response - uploading server response
   * @returns {void}
   */
  onUpload(t) {
    t.success && t.file ? this.image = t.file : this.uploadingFailed("incorrect response: " + JSON.stringify(t));
  }
  /**
   * Handle uploader errors
   *
   * @private
   * @param {string} errorText - uploading error text
   * @returns {void}
   */
  uploadingFailed(t) {
    console.log("Image Tool: uploading failed because of", t), this.api.notifier.show({
      message: this.api.i18n.t("Couldn’t upload image. Please try another."),
      style: "error"
    }), this.ui.hidePreloader();
  }
  /**
   * Callback fired when Block Tune is activated
   *
   * @private
   *
   * @param {string} tuneName - tune that has been clicked
   * @returns {void}
   */
  tuneToggled(t) {
    this.setTune(t, !this._data[t]);
  }
  /**
   * Set one tune
   *
   * @param {string} tuneName - {@link Tunes.tunes}
   * @param {boolean} value - tune state
   * @returns {void}
   */
  setTune(t, i) {
    this._data[t] = i, this.ui.applyTune(t, i), t === "stretched" && Promise.resolve().then(() => {
      this.block.stretched = i;
    }).catch((e) => {
      console.error(e);
    });
  }
  /**
   * Show preloader and upload image file
   *
   * @param {File} file - file that is currently uploading (from paste)
   * @returns {void}
   */
  uploadFile(t) {
    this.uploader.uploadByFile(t, {
      onPreview: (i) => {
        this.ui.showPreloader(i);
      }
    });
  }
  /**
   * Show preloader and upload image by target url
   *
   * @param {string} url - url pasted
   * @returns {void}
   */
  uploadUrl(t) {
    this.ui.showPreloader(t), this.uploader.uploadByUrl(t);
  }
}
export {
  _t as default
};
