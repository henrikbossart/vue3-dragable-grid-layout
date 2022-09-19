var ti = Object.defineProperty;
var ei = (e, t, n) => t in e ? ti(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var f = (e, t, n) => (ei(e, typeof t != "symbol" ? t + "" : t, n), n);
import { defineComponent as Kn, ref as G, inject as ni, reactive as oi, computed as ae, watch as U, onBeforeUnmount as Jn, onMounted as Qn, openBlock as Yt, createElementBlock as ue, normalizeClass as hn, unref as Dt, normalizeStyle as Zn, renderSlot as De, createCommentVNode as ii, provide as ri, nextTick as yt, onBeforeMount as si, createElementVNode as ai, withDirectives as ci, createVNode as li, mergeProps as gn, vShow as ui, Fragment as di, renderList as fi, createBlock as pi, withCtx as hi } from "vue";
const to = Symbol("$emitter"), gi = (e) => {
  let t = 0, n;
  for (let o = 0; o < e.length; o++)
    n = e[o].y + e[o].h, n > t && (t = n);
  return t;
}, Ce = (e) => {
  const t = Array(e.length);
  for (let n = 0; n < e.length; n++)
    t[n] = mi(e[n]);
  return t;
}, mi = (e) => JSON.parse(JSON.stringify(e)), eo = (e, t) => !(e === t || e.x + e.w <= t.x || e.x >= t.x + t.w || e.y + e.h <= t.y || e.y >= t.y + t.h), qt = (e, t) => {
  const n = oo(e), o = io(e), i = Array(e.length);
  for (let r = 0; r < o.length; r++) {
    let s = o[r];
    s.static || (s = vi(n, s, t), n.push(s)), i[e.indexOf(s)] = s, s.moved = !1;
  }
  return i;
}, vi = (e, t, n) => {
  if (n)
    for (; t.y > 0 && !de(e, t); )
      t.y--;
  let o;
  for (; o = de(e, t); )
    t.y = o.y + o.h;
  return t;
}, yi = (e, t) => {
  const n = oo(e);
  for (let o = 0; o < e.length; o++) {
    const i = e[o];
    if (i.x + i.w > t.cols && (i.x = t.cols - i.w), i.x < 0 && (i.x = 0, i.w = t.cols), !i.static)
      n.push(i);
    else
      for (; de(n, i); )
        i.y++;
  }
  return e;
}, no = (e, t) => e.filter((n) => eo(n, t)), de = (e, t) => {
  for (let n = 0, o = e.length; n < o; n++)
    if (eo(e[n], t))
      return e[n];
}, mn = (e, t) => e.filter((n) => n.i === +t)[0], oo = (e) => e.filter((t) => t.static), Me = (e, t, n, o, i, r) => {
  if (t.static)
    return e;
  const s = t.x, a = t.y, l = o && t.y > o;
  t.x = n, t.y = o, t.moved = !0;
  let c = io(e);
  l && (c = c.reverse());
  const u = no(c, t);
  if (r && u.length)
    return t.x = s, t.y = a, t.moved = !1, e;
  for (let d = 0; d < u.length; d++) {
    const g = u[d];
    g.moved || t.y > g.y && t.y - g.y > g.h / 4 || (g.static ? e = vn(e, g, t, i) : e = vn(e, t, g, i));
  }
  return e;
}, vn = (e, t, n, o) => {
  if (o) {
    const r = {
      h: n.h,
      i: -1,
      w: n.w,
      x: n.x,
      y: Math.max(t.y - n.h, 0)
    };
    if (!de(e, r))
      return Me(e, n, r.x, r.y, !1);
  }
  return Me(e, n, n.x, n.y + 1, !1);
}, bi = (e, t, n, o) => ({
  height: `${o}px`,
  left: `${t}px`,
  position: "absolute",
  top: `${e}px`,
  width: `${n}px`
}), xi = (e, t, n, o) => ({
  height: `${o}px`,
  position: "absolute",
  transform: `translate3d(${t}px,${e}px, 0)`,
  width: `${n}px`
}), io = (e) => [...e].sort((t, n) => t.y === n.y && t.x === n.x ? 0 : t.y > n.y || t.y === n.y && t.x > n.x ? 1 : -1), wi = (e, t, n) => e.trim().replace(t, n), Si = (e, t, n, o, i, r, s) => {
  if (Object.prototype.hasOwnProperty.call(t, o))
    return Ce(t[o] || []);
  let a = e;
  const l = ro(n), c = l.slice(l.indexOf(o));
  for (let u = 0; u < c.length; u++) {
    const d = c[u];
    if (Object.prototype.hasOwnProperty.call(t, d)) {
      a = t[d];
      break;
    }
  }
  return a = Ce(a || []), qt(yi(a, { cols: r }), s);
}, Ei = (e, t) => {
  var i;
  const n = ro(e);
  let [o] = n;
  for (let r = 1; r < n.length; r++) {
    const s = n[r];
    t > ((i = e[s]) != null ? i : 1) && (o = s);
  }
  return o;
}, ke = (e, t) => {
  var n;
  return (n = t[e]) != null ? n : void 0;
}, ro = (e) => Object.keys(e).sort((t, n) => {
  var o, i;
  return ((o = e[t]) != null ? o : 1) - ((i = e[n]) != null ? i : 1);
}), so = (e) => !!(e && e.Window) && e instanceof e.Window;
let ao, It;
function co(e) {
  ao = e;
  const t = e.document.createTextNode("");
  t.ownerDocument !== e.document && typeof e.wrap == "function" && e.wrap(t) === t && (e = e.wrap(e)), It = e;
}
typeof window < "u" && !!window && co(window);
function vt(e) {
  return so(e) ? e : (e.ownerDocument || e).defaultView || It.window;
}
const Ii = (e) => e === It || so(e), zi = (e) => ye(e) && e.nodeType === 11, ye = (e) => !!e && typeof e == "object", lo = (e) => typeof e == "function", _i = (e) => typeof e == "number", Ti = (e) => typeof e == "boolean", Oi = (e) => typeof e == "string", Pi = (e) => {
  if (!e || typeof e != "object")
    return !1;
  const t = vt(e) || It;
  return /object|function/.test(typeof Element) ? e instanceof Element || e instanceof t.Element : e.nodeType === 1 && typeof e.nodeName == "string";
}, Di = (e) => ye(e) && !!e.constructor && /function Object\b/.test(e.constructor.toString()), Ci = (e) => ye(e) && typeof e.length < "u" && lo(e.splice), h = {
  window: Ii,
  docFrag: zi,
  object: ye,
  func: lo,
  number: _i,
  bool: Ti,
  string: Oi,
  element: Pi,
  plainObject: Di,
  array: Ci
};
function Mi(e) {
  const {
    actions: t,
    Interactable: n,
    defaults: o
  } = e;
  n.prototype.draggable = ce.draggable, t.map.drag = ce, t.methodDict.drag = "draggable", o.actions.drag = ce.defaults;
}
function Ie({
  interaction: e
}) {
  if (e.prepared.name !== "drag")
    return;
  const t = e.prepared.axis;
  t === "x" ? (e.coords.cur.page.y = e.coords.start.page.y, e.coords.cur.client.y = e.coords.start.client.y, e.coords.velocity.client.y = 0, e.coords.velocity.page.y = 0) : t === "y" && (e.coords.cur.page.x = e.coords.start.page.x, e.coords.cur.client.x = e.coords.start.client.x, e.coords.velocity.client.x = 0, e.coords.velocity.page.x = 0);
}
function yn({
  iEvent: e,
  interaction: t
}) {
  if (t.prepared.name !== "drag")
    return;
  const n = t.prepared.axis;
  if (n === "x" || n === "y") {
    const o = n === "x" ? "y" : "x";
    e.page[o] = t.coords.start.page[o], e.client[o] = t.coords.start.client[o], e.delta[o] = 0;
  }
}
const ki = function(t) {
  return h.object(t) ? (this.options.drag.enabled = t.enabled !== !1, this.setPerAction("drag", t), this.setOnEvents("drag", t), /^(xy|x|y|start)$/.test(t.lockAxis) && (this.options.drag.lockAxis = t.lockAxis), /^(xy|x|y)$/.test(t.startAxis) && (this.options.drag.startAxis = t.startAxis), this) : h.bool(t) ? (this.options.drag.enabled = t, this) : this.options.drag;
}, ce = {
  id: "actions/drag",
  install: Mi,
  listeners: {
    "interactions:before-action-move": Ie,
    "interactions:action-resume": Ie,
    "interactions:action-move": yn,
    "auto-start:check": (e) => {
      const {
        interaction: t,
        interactable: n,
        buttons: o
      } = e, i = n.options.drag;
      if (!(!(i && i.enabled) || t.pointerIsDown && /mouse|pointer/.test(t.pointerType) && (o & n.options.drag.mouseButtons) === 0))
        return e.action = {
          name: "drag",
          axis: i.lockAxis === "start" ? i.startAxis : i.lockAxis
        }, !1;
    }
  },
  draggable: ki,
  beforeMove: Ie,
  move: yn,
  defaults: {
    startAxis: "xy",
    lockAxis: "xy"
  },
  getCursor() {
    return "move";
  }
}, uo = ce, st = {
  init: Ai,
  document: null,
  DocumentFragment: null,
  SVGElement: null,
  SVGSVGElement: null,
  SVGElementInstance: null,
  Element: null,
  HTMLElement: null,
  Event: null,
  Touch: null,
  PointerEvent: null
};
function Lt() {
}
const Z = st;
function Ai(e) {
  const t = e;
  st.document = t.document, st.DocumentFragment = t.DocumentFragment || Lt, st.SVGElement = t.SVGElement || Lt, st.SVGSVGElement = t.SVGSVGElement || Lt, st.SVGElementInstance = t.SVGElementInstance || Lt, st.Element = t.Element || Lt, st.HTMLElement = t.HTMLElement || st.Element, st.Event = t.Event, st.Touch = t.Touch || Lt, st.PointerEvent = t.PointerEvent || t.MSPointerEvent;
}
const at = {
  init: Ri,
  supportsTouch: null,
  supportsPointerEvent: null,
  isIOS7: null,
  isIOS: null,
  isIe9: null,
  isOperaMobile: null,
  prefixedMatchesSelector: null,
  pEventTypes: null,
  wheelEvent: null
};
function Ri(e) {
  const t = Z.Element, n = e.navigator || {};
  at.supportsTouch = "ontouchstart" in e || h.func(e.DocumentTouch) && Z.document instanceof e.DocumentTouch, at.supportsPointerEvent = n.pointerEnabled !== !1 && !!Z.PointerEvent, at.isIOS = /iP(hone|od|ad)/.test(n.platform), at.isIOS7 = /iP(hone|od|ad)/.test(n.platform) && /OS 7[^\d]/.test(n.appVersion), at.isIe9 = /MSIE 9/.test(n.userAgent), at.isOperaMobile = n.appName === "Opera" && at.supportsTouch && /Presto/.test(n.userAgent), at.prefixedMatchesSelector = "matches" in t.prototype ? "matches" : "webkitMatchesSelector" in t.prototype ? "webkitMatchesSelector" : "mozMatchesSelector" in t.prototype ? "mozMatchesSelector" : "oMatchesSelector" in t.prototype ? "oMatchesSelector" : "msMatchesSelector", at.pEventTypes = at.supportsPointerEvent ? Z.PointerEvent === e.MSPointerEvent ? {
    up: "MSPointerUp",
    down: "MSPointerDown",
    over: "mouseover",
    out: "mouseout",
    move: "MSPointerMove",
    cancel: "MSPointerCancel"
  } : {
    up: "pointerup",
    down: "pointerdown",
    over: "pointerover",
    out: "pointerout",
    move: "pointermove",
    cancel: "pointercancel"
  } : null, at.wheelEvent = Z.document && "onmousewheel" in Z.document ? "mousewheel" : "wheel";
}
const ct = at;
function Ct(e, t) {
  if (e.contains)
    return e.contains(t);
  for (; t; ) {
    if (t === e)
      return !0;
    t = t.parentNode;
  }
  return !1;
}
function fo(e, t) {
  for (; h.element(e); ) {
    if (Et(e, t))
      return e;
    e = ut(e);
  }
  return null;
}
function ut(e) {
  let t = e.parentNode;
  if (h.docFrag(t)) {
    for (; (t = t.host) && h.docFrag(t); )
      ;
    return t;
  }
  return t;
}
function Et(e, t) {
  return It !== ao && (t = t.replace(/\/deep\//g, " ")), e[ct.prefixedMatchesSelector](t);
}
const Ae = (e) => e.parentNode || e.host;
function $i(e) {
  let t = [], n;
  for (let o = 0; o < e.length; o++) {
    const i = e[o], r = e[n];
    if (!i || o === n)
      continue;
    if (!r) {
      n = o;
      continue;
    }
    const s = Ae(i), a = Ae(r);
    if (s === i.ownerDocument)
      continue;
    if (a === i.ownerDocument) {
      n = o;
      continue;
    }
    if (s === a) {
      Ni(i, r) && (n = o);
      continue;
    }
    t = t.length ? t : bn(r);
    let l;
    if (r instanceof Z.HTMLElement && i instanceof Z.SVGElement && !(i instanceof Z.SVGSVGElement)) {
      if (i === a)
        continue;
      l = i.ownerSVGElement;
    } else
      l = i;
    const c = bn(l, r.ownerDocument);
    let u = 0;
    for (; c[u] && c[u] === t[u]; )
      u++;
    const d = [c[u - 1], c[u], t[u]];
    if (d[0]) {
      let g = d[0].lastChild;
      for (; g; ) {
        if (g === d[1]) {
          n = o, t = c;
          break;
        } else if (g === d[2])
          break;
        g = g.previousSibling;
      }
    }
  }
  return n;
}
function bn(e, t) {
  const n = [];
  let o = e, i;
  for (; (i = Ae(o)) && o !== t && i !== o.ownerDocument; )
    n.unshift(o), o = i;
  return n;
}
function Ni(e, t) {
  const n = parseInt(vt(e).getComputedStyle(e).zIndex, 10) || 0, o = parseInt(vt(t).getComputedStyle(t).zIndex, 10) || 0;
  return n >= o;
}
function Re(e, t, n) {
  for (; h.element(e); ) {
    if (Et(e, t))
      return !0;
    if (e = ut(e), e === n)
      return Et(e, t);
  }
  return !1;
}
function xn(e) {
  return e.correspondingUseElement || e;
}
function Li(e) {
  return e = e || It, {
    x: e.scrollX || e.document.documentElement.scrollLeft,
    y: e.scrollY || e.document.documentElement.scrollTop
  };
}
function Je(e) {
  const t = e instanceof Z.SVGElement ? e.getBoundingClientRect() : e.getClientRects()[0];
  return t && {
    left: t.left,
    right: t.right,
    top: t.top,
    bottom: t.bottom,
    width: t.width || t.right - t.left,
    height: t.height || t.bottom - t.top
  };
}
function Qe(e) {
  const t = Je(e);
  if (!ct.isIOS7 && t) {
    const n = Li(vt(e));
    t.left += n.x, t.right += n.x, t.top += n.y, t.bottom += n.y;
  }
  return t;
}
function po(e) {
  const t = [];
  for (; e; )
    t.push(e), e = ut(e);
  return t;
}
function wn(e) {
  return h.string(e) ? (Z.document.querySelector(e), !0) : !1;
}
function z(e, t) {
  for (const o in t)
    e[o] = t[o];
  return e;
}
function ho(e, t, n) {
  return e === "parent" ? ut(n) : e === "self" ? t.getRect(n) : fo(n, e);
}
function Kt(e, t, n, o) {
  let i = e;
  return h.string(i) ? i = ho(i, t, n) : h.func(i) && (i = i(...o)), h.element(i) && (i = Qe(i)), i;
}
function be(e) {
  return e && {
    x: "x" in e ? e.x : e.left,
    y: "y" in e ? e.y : e.top
  };
}
function Hi(e) {
  return e && !("left" in e && "top" in e) && (e = z({}, e), e.left = e.x || 0, e.top = e.y || 0, e.right = e.right || e.left + e.width, e.bottom = e.bottom || e.top + e.height), e;
}
function $e(e) {
  return e && !("x" in e && "y" in e) && (e = z({}, e), e.x = e.left || 0, e.y = e.top || 0, e.width = e.width || (e.right || 0) - e.x, e.height = e.height || (e.bottom || 0) - e.y), e;
}
function xe(e, t, n) {
  e.left && (t.left += n.x), e.right && (t.right += n.x), e.top && (t.top += n.y), e.bottom && (t.bottom += n.y), t.width = t.right - t.left, t.height = t.bottom - t.top;
}
function Zt(e, t, n) {
  const o = e.options[n], r = o && o.origin || e.options.origin, s = Kt(r, e, t, [e && t]);
  return be(s) || {
    x: 0,
    y: 0
  };
}
function Mt(e, t, n) {
  if (n = n || {}, h.string(e) && e.search(" ") !== -1 && (e = Sn(e)), h.array(e))
    return e.reduce((o, i) => z(o, Mt(i, t, n)), n);
  if (h.object(e) && (t = e, e = ""), h.func(t))
    n[e] = n[e] || [], n[e].push(t);
  else if (h.array(t))
    for (const o of t)
      Mt(e, o, n);
  else if (h.object(t))
    for (const o in t) {
      const i = Sn(o).map((r) => `${e}${r}`);
      Mt(i, t[o], n);
    }
  return n;
}
function Sn(e) {
  return e.trim().split(/ +/);
}
const te = (e, t) => Math.sqrt(e * e + t * t);
function fe(e, t) {
  e.__set || (e.__set = {});
  for (const n in t)
    typeof e[n] != "function" && n !== "__set" && Object.defineProperty(e, n, {
      get() {
        return n in e.__set ? e.__set[n] : e.__set[n] = t[n];
      },
      set(o) {
        e.__set[n] = o;
      },
      configurable: !0
    });
  return e;
}
function le(e, t) {
  e.page = e.page || {}, e.page.x = t.page.x, e.page.y = t.page.y, e.client = e.client || {}, e.client.x = t.client.x, e.client.y = t.client.y, e.timeStamp = t.timeStamp;
}
function ji(e, t, n) {
  e.page.x = n.page.x - t.page.x, e.page.y = n.page.y - t.page.y, e.client.x = n.client.x - t.client.x, e.client.y = n.client.y - t.client.y, e.timeStamp = n.timeStamp - t.timeStamp;
}
function Bi(e, t) {
  const n = Math.max(t.timeStamp / 1e3, 1e-3);
  e.page.x = t.page.x / n, e.page.y = t.page.y / n, e.client.x = t.client.x / n, e.client.y = t.client.y / n, e.timeStamp = n;
}
function go(e) {
  e.page.x = 0, e.page.y = 0, e.client.x = 0, e.client.y = 0;
}
function mo(e) {
  return e instanceof Z.Event || e instanceof Z.Touch;
}
function pe(e, t, n) {
  return n = n || {}, e = e || "page", n.x = t[e + "X"], n.y = t[e + "Y"], n;
}
function vo(e, t) {
  return t = t || {
    x: 0,
    y: 0
  }, ct.isOperaMobile && mo(e) ? (pe("screen", e, t), t.x += window.scrollX, t.y += window.scrollY) : pe("page", e, t), t;
}
function Fi(e, t) {
  return t = t || {}, ct.isOperaMobile && mo(e) ? pe("screen", e, t) : pe("client", e, t), t;
}
function Jt(e) {
  return h.number(e.pointerId) ? e.pointerId : e.identifier;
}
function Wi(e, t, n) {
  const o = t.length > 1 ? yo(t) : t[0];
  vo(o, e.page), Fi(o, e.client), e.timeStamp = n;
}
function Ze(e) {
  const t = [];
  return h.array(e) ? (t[0] = e[0], t[1] = e[1]) : e.type === "touchend" ? e.touches.length === 1 ? (t[0] = e.touches[0], t[1] = e.changedTouches[0]) : e.touches.length === 0 && (t[0] = e.changedTouches[0], t[1] = e.changedTouches[1]) : (t[0] = e.touches[0], t[1] = e.touches[1]), t;
}
function yo(e) {
  const t = {
    pageX: 0,
    pageY: 0,
    clientX: 0,
    clientY: 0,
    screenX: 0,
    screenY: 0
  };
  for (const n of e)
    for (const o in t)
      t[o] += n[o];
  for (const n in t)
    t[n] /= e.length;
  return t;
}
function Ne(e) {
  if (!e.length)
    return null;
  const t = Ze(e), n = Math.min(t[0].pageX, t[1].pageX), o = Math.min(t[0].pageY, t[1].pageY), i = Math.max(t[0].pageX, t[1].pageX), r = Math.max(t[0].pageY, t[1].pageY);
  return {
    x: n,
    y: o,
    left: n,
    top: o,
    right: i,
    bottom: r,
    width: i - n,
    height: r - o
  };
}
function Le(e, t) {
  const n = t + "X", o = t + "Y", i = Ze(e), r = i[0][n] - i[1][n], s = i[0][o] - i[1][o];
  return te(r, s);
}
function He(e, t) {
  const n = t + "X", o = t + "Y", i = Ze(e), r = i[1][n] - i[0][n], s = i[1][o] - i[0][o];
  return 180 * Math.atan2(s, r) / Math.PI;
}
function bo(e) {
  return h.string(e.pointerType) ? e.pointerType : h.number(e.pointerType) ? [void 0, void 0, "touch", "pen", "mouse"][e.pointerType] : /touch/.test(e.type || "") || e instanceof Z.Touch ? "touch" : "mouse";
}
function xo(e) {
  const t = h.func(e.composedPath) ? e.composedPath() : e.path;
  return [xn(t ? t[0] : e.target), xn(e.currentTarget)];
}
function Bt() {
  return {
    page: {
      x: 0,
      y: 0
    },
    client: {
      x: 0,
      y: 0
    },
    timeStamp: 0
  };
}
function qi(e) {
  return {
    coords: e,
    get page() {
      return this.coords.page;
    },
    get client() {
      return this.coords.client;
    },
    get timeStamp() {
      return this.coords.timeStamp;
    },
    get pageX() {
      return this.coords.page.x;
    },
    get pageY() {
      return this.coords.page.y;
    },
    get clientX() {
      return this.coords.client.x;
    },
    get clientY() {
      return this.coords.client.y;
    },
    get pointerId() {
      return this.coords.pointerId;
    },
    get target() {
      return this.coords.target;
    },
    get type() {
      return this.coords.type;
    },
    get pointerType() {
      return this.coords.pointerType;
    },
    get buttons() {
      return this.coords.buttons;
    },
    preventDefault() {
    }
  };
}
class we {
  constructor(t) {
    f(this, "immediatePropagationStopped", !1);
    f(this, "propagationStopped", !1);
    this._interaction = t;
  }
  preventDefault() {
  }
  stopPropagation() {
    this.propagationStopped = !0;
  }
  stopImmediatePropagation() {
    this.immediatePropagationStopped = this.propagationStopped = !0;
  }
}
Object.defineProperty(we.prototype, "interaction", {
  get() {
    return this._interaction._proxy;
  },
  set() {
  }
});
const Xi = (e, t) => e.indexOf(t) !== -1, Yi = (e, t) => e.splice(e.indexOf(t), 1), wo = (e, t) => {
  for (const n of t)
    e.push(n);
  return e;
}, tn = (e) => wo([], e), ee = (e, t) => {
  for (let n = 0; n < e.length; n++)
    if (t(e[n], n, e))
      return n;
  return -1;
}, he = (e, t) => e[ee(e, t)];
class gt extends we {
  constructor(n, o, i) {
    super(o._interaction);
    f(this, "dropzone");
    f(this, "dragEvent");
    f(this, "relatedTarget");
    f(this, "draggable");
    f(this, "propagationStopped", !1);
    f(this, "immediatePropagationStopped", !1);
    const {
      element: r,
      dropzone: s
    } = i === "dragleave" ? n.prev : n.cur;
    this.type = i, this.target = r, this.currentTarget = r, this.dropzone = s, this.dragEvent = o, this.relatedTarget = o.target, this.draggable = o.interactable, this.timeStamp = o.timeStamp;
  }
  reject() {
    const {
      dropState: n
    } = this._interaction;
    if (!(this.type !== "dropactivate" && (!this.dropzone || n.cur.dropzone !== this.dropzone || n.cur.element !== this.target)))
      if (n.prev.dropzone = this.dropzone, n.prev.element = this.target, n.rejected = !0, n.events.enter = null, this.stopImmediatePropagation(), this.type === "dropactivate") {
        const o = n.activeDrops, i = ee(o, ({
          dropzone: s,
          element: a
        }) => s === this.dropzone && a === this.target);
        n.activeDrops.splice(i, 1);
        const r = new gt(n, this.dragEvent, "dropdeactivate");
        r.dropzone = this.dropzone, r.target = this.target, this.dropzone.fire(r);
      } else
        this.dropzone.fire(new gt(n, this.dragEvent, "dragleave"));
  }
  preventDefault() {
  }
  stopPropagation() {
    this.propagationStopped = !0;
  }
  stopImmediatePropagation() {
    this.immediatePropagationStopped = this.propagationStopped = !0;
  }
}
function Gi(e) {
  const {
    actions: t,
    interactStatic: n,
    Interactable: o,
    defaults: i
  } = e;
  e.usePlugin(uo), o.prototype.dropzone = function(r) {
    return Ui(this, r);
  }, o.prototype.dropCheck = function(r, s, a, l, c, u) {
    return Ki(this, r, s, a, l, c, u);
  }, n.dynamicDrop = function(r) {
    return h.bool(r) ? (e.dynamicDrop = r, n) : e.dynamicDrop;
  }, z(t.phaselessTypes, {
    dragenter: !0,
    dragleave: !0,
    dropactivate: !0,
    dropdeactivate: !0,
    dropmove: !0,
    drop: !0
  }), t.methodDict.drop = "dropzone", e.dynamicDrop = !1, i.actions.drop = Io.defaults;
}
function Vi({
  interactables: e
}, t) {
  const n = [];
  for (const o of e.list) {
    if (!o.options.drop.enabled)
      continue;
    const i = o.options.drop.accept;
    if (h.element(i) && i !== t || h.string(i) && !Et(t, i) || h.func(i) && !i({
      dropzone: o,
      draggableElement: t
    }))
      continue;
    const r = h.string(o.target) ? o._context.querySelectorAll(o.target) : h.array(o.target) ? o.target : [o.target];
    for (const s of r)
      s !== t && n.push({
        dropzone: o,
        element: s,
        rect: o.getRect(s)
      });
  }
  return n;
}
function So(e, t) {
  for (const {
    dropzone: n,
    element: o
  } of e.slice())
    t.dropzone = n, t.target = o, n.fire(t), t.propagationStopped = t.immediatePropagationStopped = !1;
}
function je(e, t) {
  const n = Vi(e, t);
  for (const o of n)
    o.rect = o.dropzone.getRect(o.element);
  return n;
}
function Eo({
  dropState: e,
  interactable: t,
  element: n
}, o, i) {
  const r = [];
  for (const {
    dropzone: a,
    element: l,
    rect: c
  } of e.activeDrops)
    r.push(a.dropCheck(o, i, t, n, l, c) ? l : null);
  const s = $i(r);
  return e.activeDrops[s] || null;
}
function Be(e, t, n) {
  const {
    dropState: o
  } = e, i = {
    enter: null,
    leave: null,
    activate: null,
    deactivate: null,
    move: null,
    drop: null
  };
  return n.type === "dragstart" && (i.activate = new gt(o, n, "dropactivate"), i.activate.target = null, i.activate.dropzone = null), n.type === "dragend" && (i.deactivate = new gt(o, n, "dropdeactivate"), i.deactivate.target = null, i.deactivate.dropzone = null), o.rejected || (o.cur.element !== o.prev.element && (o.prev.dropzone && (i.leave = new gt(o, n, "dragleave"), n.dragLeave = i.leave.target = o.prev.element, n.prevDropzone = i.leave.dropzone = o.prev.dropzone), o.cur.dropzone && (i.enter = new gt(o, n, "dragenter"), n.dragEnter = o.cur.element, n.dropzone = o.cur.dropzone)), n.type === "dragend" && o.cur.dropzone && (i.drop = new gt(o, n, "drop"), n.dropzone = o.cur.dropzone, n.relatedTarget = o.cur.element), n.type === "dragmove" && o.cur.dropzone && (i.move = new gt(o, n, "dropmove"), i.move.dragmove = n, n.dropzone = o.cur.dropzone)), i;
}
function ze(e, t) {
  const {
    dropState: n
  } = e, {
    activeDrops: o,
    cur: i,
    prev: r
  } = n;
  t.leave && r.dropzone.fire(t.leave), t.enter && i.dropzone.fire(t.enter), t.move && i.dropzone.fire(t.move), t.drop && i.dropzone.fire(t.drop), t.deactivate && So(o, t.deactivate), n.prev.dropzone = i.dropzone, n.prev.element = i.element;
}
function En({
  interaction: e,
  iEvent: t,
  event: n
}, o) {
  if (t.type !== "dragmove" && t.type !== "dragend")
    return;
  const {
    dropState: i
  } = e;
  o.dynamicDrop && (i.activeDrops = je(o, e.element));
  const r = t, s = Eo(e, r, n);
  i.rejected = i.rejected && !!s && s.dropzone === i.cur.dropzone && s.element === i.cur.element, i.cur.dropzone = s && s.dropzone, i.cur.element = s && s.element, i.events = Be(e, n, r);
}
function Ui(e, t) {
  if (h.object(t)) {
    if (e.options.drop.enabled = t.enabled !== !1, t.listeners) {
      const n = Mt(t.listeners), o = Object.keys(n).reduce((i, r) => {
        const s = /^(enter|leave)/.test(r) ? `drag${r}` : /^(activate|deactivate|move)/.test(r) ? `drop${r}` : r;
        return i[s] = n[r], i;
      }, {});
      e.off(e.options.drop.listeners), e.on(o), e.options.drop.listeners = o;
    }
    return h.func(t.ondrop) && e.on("drop", t.ondrop), h.func(t.ondropactivate) && e.on("dropactivate", t.ondropactivate), h.func(t.ondropdeactivate) && e.on("dropdeactivate", t.ondropdeactivate), h.func(t.ondragenter) && e.on("dragenter", t.ondragenter), h.func(t.ondragleave) && e.on("dragleave", t.ondragleave), h.func(t.ondropmove) && e.on("dropmove", t.ondropmove), /^(pointer|center)$/.test(t.overlap) ? e.options.drop.overlap = t.overlap : h.number(t.overlap) && (e.options.drop.overlap = Math.max(Math.min(1, t.overlap), 0)), "accept" in t && (e.options.drop.accept = t.accept), "checker" in t && (e.options.drop.checker = t.checker), e;
  }
  return h.bool(t) ? (e.options.drop.enabled = t, e) : e.options.drop;
}
function Ki(e, t, n, o, i, r, s) {
  let a = !1;
  if (!(s = s || e.getRect(r)))
    return e.options.drop.checker ? e.options.drop.checker(t, n, a, e, r, o, i) : !1;
  const l = e.options.drop.overlap;
  if (l === "pointer") {
    const u = Zt(o, i, "drag"), d = vo(t);
    d.x += u.x, d.y += u.y;
    const g = d.x > s.left && d.x < s.right, m = d.y > s.top && d.y < s.bottom;
    a = g && m;
  }
  const c = o.getRect(i);
  if (c && l === "center") {
    const u = c.left + c.width / 2, d = c.top + c.height / 2;
    a = u >= s.left && u <= s.right && d >= s.top && d <= s.bottom;
  }
  return c && h.number(l) && (a = Math.max(0, Math.min(s.right, c.right) - Math.max(s.left, c.left)) * Math.max(0, Math.min(s.bottom, c.bottom) - Math.max(s.top, c.top)) / (c.width * c.height) >= l), e.options.drop.checker && (a = e.options.drop.checker(t, n, a, e, r, o, i)), a;
}
const Io = {
  id: "actions/drop",
  install: Gi,
  listeners: {
    "interactions:before-action-start": ({
      interaction: e
    }) => {
      e.prepared.name === "drag" && (e.dropState = {
        cur: {
          dropzone: null,
          element: null
        },
        prev: {
          dropzone: null,
          element: null
        },
        rejected: null,
        events: null,
        activeDrops: []
      });
    },
    "interactions:after-action-start": ({
      interaction: e,
      event: t,
      iEvent: n
    }, o) => {
      if (e.prepared.name !== "drag")
        return;
      const {
        dropState: i
      } = e;
      i.activeDrops = null, i.events = null, i.activeDrops = je(o, e.element), i.events = Be(e, t, n), i.events.activate && (So(i.activeDrops, i.events.activate), o.fire("actions/drop:start", {
        interaction: e,
        dragEvent: n
      }));
    },
    "interactions:action-move": En,
    "interactions:after-action-move": ({
      interaction: e,
      iEvent: t
    }, n) => {
      e.prepared.name === "drag" && (ze(e, e.dropState.events), n.fire("actions/drop:move", {
        interaction: e,
        dragEvent: t
      }), e.dropState.events = {});
    },
    "interactions:action-end": (e, t) => {
      if (e.interaction.prepared.name !== "drag")
        return;
      const {
        interaction: n,
        iEvent: o
      } = e;
      En(e, t), ze(n, n.dropState.events), t.fire("actions/drop:end", {
        interaction: n,
        dragEvent: o
      });
    },
    "interactions:stop": ({
      interaction: e
    }) => {
      if (e.prepared.name !== "drag")
        return;
      const {
        dropState: t
      } = e;
      t && (t.activeDrops = null, t.events = null, t.cur.dropzone = null, t.cur.element = null, t.prev.dropzone = null, t.prev.element = null, t.rejected = !1);
    }
  },
  getActiveDrops: je,
  getDrop: Eo,
  getDropEvents: Be,
  fireDropEvents: ze,
  defaults: {
    enabled: !1,
    accept: null,
    overlap: "pointer"
  }
}, Ji = Io;
function Qi(e) {
  const {
    actions: t,
    Interactable: n,
    defaults: o
  } = e;
  n.prototype.gesturable = function(i) {
    return h.object(i) ? (this.options.gesture.enabled = i.enabled !== !1, this.setPerAction("gesture", i), this.setOnEvents("gesture", i), this) : h.bool(i) ? (this.options.gesture.enabled = i, this) : this.options.gesture;
  }, t.map.gesture = Fe, t.methodDict.gesture = "gesturable", o.actions.gesture = Fe.defaults;
}
function _e({
  interaction: e,
  iEvent: t,
  phase: n
}) {
  if (e.prepared.name !== "gesture")
    return;
  const o = e.pointers.map((a) => a.pointer), i = n === "start", r = n === "end", s = e.interactable.options.deltaSource;
  if (t.touches = [o[0], o[1]], i)
    t.distance = Le(o, s), t.box = Ne(o), t.scale = 1, t.ds = 0, t.angle = He(o, s), t.da = 0, e.gesture.startDistance = t.distance, e.gesture.startAngle = t.angle;
  else if (r) {
    const a = e.prevEvent;
    t.distance = a.distance, t.box = a.box, t.scale = a.scale, t.ds = 0, t.angle = a.angle, t.da = 0;
  } else
    t.distance = Le(o, s), t.box = Ne(o), t.scale = t.distance / e.gesture.startDistance, t.angle = He(o, s), t.ds = t.scale - e.gesture.scale, t.da = t.angle - e.gesture.angle;
  e.gesture.distance = t.distance, e.gesture.angle = t.angle, h.number(t.scale) && t.scale !== 1 / 0 && !isNaN(t.scale) && (e.gesture.scale = t.scale);
}
const Fe = {
  id: "actions/gesture",
  before: ["actions/drag", "actions/resize"],
  install: Qi,
  listeners: {
    "interactions:action-start": _e,
    "interactions:action-move": _e,
    "interactions:action-end": _e,
    "interactions:new": ({
      interaction: e
    }) => {
      e.gesture = {
        angle: 0,
        distance: 0,
        scale: 1,
        startAngle: 0,
        startDistance: 0
      };
    },
    "auto-start:check": (e) => {
      if (e.interaction.pointers.length < 2)
        return;
      const t = e.interactable.options.gesture;
      if (!!(t && t.enabled))
        return e.action = {
          name: "gesture"
        }, !1;
    }
  },
  defaults: {},
  getCursor() {
    return "";
  }
}, Zi = Fe;
function tr(e) {
  const {
    actions: t,
    browser: n,
    Interactable: o,
    defaults: i
  } = e;
  mt.cursors = ir(n), mt.defaultMargin = n.supportsTouch || n.supportsPointerEvent ? 20 : 10, o.prototype.resizable = function(r) {
    return nr(this, r, e);
  }, t.map.resize = mt, t.methodDict.resize = "resizable", i.actions.resize = mt.defaults;
}
function er(e) {
  const {
    interaction: t,
    interactable: n,
    element: o,
    rect: i,
    buttons: r
  } = e;
  if (!i)
    return;
  const s = z({}, t.coords.cur.page), a = n.options.resize;
  if (!(!(a && a.enabled) || t.pointerIsDown && /mouse|pointer/.test(t.pointerType) && (r & a.mouseButtons) === 0)) {
    if (h.object(a.edges)) {
      const l = {
        left: !1,
        right: !1,
        top: !1,
        bottom: !1
      };
      for (const c in l)
        l[c] = or(c, a.edges[c], s, t._latestPointer.eventTarget, o, i, a.margin || mt.defaultMargin);
      l.left = l.left && !l.right, l.top = l.top && !l.bottom, (l.left || l.right || l.top || l.bottom) && (e.action = {
        name: "resize",
        edges: l
      });
    } else {
      const l = a.axis !== "y" && s.x > i.right - mt.defaultMargin, c = a.axis !== "x" && s.y > i.bottom - mt.defaultMargin;
      (l || c) && (e.action = {
        name: "resize",
        axes: (l ? "x" : "") + (c ? "y" : "")
      });
    }
    return e.action ? !1 : void 0;
  }
}
function nr(e, t, n) {
  return h.object(t) ? (e.options.resize.enabled = t.enabled !== !1, e.setPerAction("resize", t), e.setOnEvents("resize", t), h.string(t.axis) && /^x$|^y$|^xy$/.test(t.axis) ? e.options.resize.axis = t.axis : t.axis === null && (e.options.resize.axis = n.defaults.actions.resize.axis), h.bool(t.preserveAspectRatio) ? e.options.resize.preserveAspectRatio = t.preserveAspectRatio : h.bool(t.square) && (e.options.resize.square = t.square), e) : h.bool(t) ? (e.options.resize.enabled = t, e) : e.options.resize;
}
function or(e, t, n, o, i, r, s) {
  if (!t)
    return !1;
  if (t === !0) {
    const a = h.number(r.width) ? r.width : r.right - r.left, l = h.number(r.height) ? r.height : r.bottom - r.top;
    if (s = Math.min(s, Math.abs((e === "left" || e === "right" ? a : l) / 2)), a < 0 && (e === "left" ? e = "right" : e === "right" && (e = "left")), l < 0 && (e === "top" ? e = "bottom" : e === "bottom" && (e = "top")), e === "left") {
      const c = a >= 0 ? r.left : r.right;
      return n.x < c + s;
    }
    if (e === "top") {
      const c = l >= 0 ? r.top : r.bottom;
      return n.y < c + s;
    }
    if (e === "right")
      return n.x > (a >= 0 ? r.right : r.left) - s;
    if (e === "bottom")
      return n.y > (l >= 0 ? r.bottom : r.top) - s;
  }
  return h.element(o) ? h.element(t) ? t === o : Re(o, t, i) : !1;
}
function ir(e) {
  return e.isIe9 ? {
    x: "e-resize",
    y: "s-resize",
    xy: "se-resize",
    top: "n-resize",
    left: "w-resize",
    bottom: "s-resize",
    right: "e-resize",
    topleft: "se-resize",
    bottomright: "se-resize",
    topright: "ne-resize",
    bottomleft: "ne-resize"
  } : {
    x: "ew-resize",
    y: "ns-resize",
    xy: "nwse-resize",
    top: "ns-resize",
    left: "ew-resize",
    bottom: "ns-resize",
    right: "ew-resize",
    topleft: "nwse-resize",
    bottomright: "nwse-resize",
    topright: "nesw-resize",
    bottomleft: "nesw-resize"
  };
}
function rr({
  iEvent: e,
  interaction: t
}) {
  if (t.prepared.name !== "resize" || !t.prepared.edges)
    return;
  const n = e, o = t.rect;
  t._rects = {
    start: z({}, o),
    corrected: z({}, o),
    previous: z({}, o),
    delta: {
      left: 0,
      right: 0,
      width: 0,
      top: 0,
      bottom: 0,
      height: 0
    }
  }, n.edges = t.prepared.edges, n.rect = t._rects.corrected, n.deltaRect = t._rects.delta;
}
function sr({
  iEvent: e,
  interaction: t
}) {
  if (t.prepared.name !== "resize" || !t.prepared.edges)
    return;
  const n = e, i = t.interactable.options.resize.invert, r = i === "reposition" || i === "negate", s = t.rect, {
    start: a,
    corrected: l,
    delta: c,
    previous: u
  } = t._rects;
  if (z(u, l), r) {
    if (z(l, s), i === "reposition") {
      if (l.top > l.bottom) {
        const d = l.top;
        l.top = l.bottom, l.bottom = d;
      }
      if (l.left > l.right) {
        const d = l.left;
        l.left = l.right, l.right = d;
      }
    }
  } else
    l.top = Math.min(s.top, a.bottom), l.bottom = Math.max(s.bottom, a.top), l.left = Math.min(s.left, a.right), l.right = Math.max(s.right, a.left);
  l.width = l.right - l.left, l.height = l.bottom - l.top;
  for (const d in l)
    c[d] = l[d] - u[d];
  n.edges = t.prepared.edges, n.rect = l, n.deltaRect = c;
}
function ar({
  iEvent: e,
  interaction: t
}) {
  if (t.prepared.name !== "resize" || !t.prepared.edges)
    return;
  const n = e;
  n.edges = t.prepared.edges, n.rect = t._rects.corrected, n.deltaRect = t._rects.delta;
}
function In({
  iEvent: e,
  interaction: t
}) {
  if (t.prepared.name !== "resize" || !t.resizeAxes)
    return;
  const n = t.interactable.options, o = e;
  n.resize.square ? (t.resizeAxes === "y" ? o.delta.x = o.delta.y : o.delta.y = o.delta.x, o.axes = "xy") : (o.axes = t.resizeAxes, t.resizeAxes === "x" ? o.delta.y = 0 : t.resizeAxes === "y" && (o.delta.x = 0));
}
const mt = {
  id: "actions/resize",
  before: ["actions/drag"],
  install: tr,
  listeners: {
    "interactions:new": ({
      interaction: e
    }) => {
      e.resizeAxes = "xy";
    },
    "interactions:action-start": (e) => {
      rr(e), In(e);
    },
    "interactions:action-move": (e) => {
      sr(e), In(e);
    },
    "interactions:action-end": ar,
    "auto-start:check": er
  },
  defaults: {
    square: !1,
    preserveAspectRatio: !1,
    axis: "xy",
    margin: NaN,
    edges: null,
    invert: "none"
  },
  cursors: null,
  getCursor({
    edges: e,
    axis: t,
    name: n
  }) {
    const o = mt.cursors;
    let i = null;
    if (t)
      i = o[n + t];
    else if (e) {
      let r = "";
      for (const s of ["top", "bottom", "left", "right"])
        e[s] && (r += s);
      i = o[r];
    }
    return i;
  },
  defaultMargin: null
}, cr = mt, lr = {
  id: "actions",
  install(e) {
    e.usePlugin(Zi), e.usePlugin(cr), e.usePlugin(uo), e.usePlugin(Ji);
  }
};
let zn = 0, ht, Pt;
function ur(e) {
  if (ht = e.requestAnimationFrame, Pt = e.cancelAnimationFrame, !ht) {
    const t = ["ms", "moz", "webkit", "o"];
    for (const n of t)
      ht = e[`${n}RequestAnimationFrame`], Pt = e[`${n}CancelAnimationFrame`] || e[`${n}CancelRequestAnimationFrame`];
  }
  ht = ht && ht.bind(e), Pt = Pt && Pt.bind(e), ht || (ht = (t) => {
    const n = Date.now(), o = Math.max(0, 16 - (n - zn)), i = e.setTimeout(() => {
      t(n + o);
    }, o);
    return zn = n + o, i;
  }, Pt = (t) => clearTimeout(t));
}
const wt = {
  request: (e) => ht(e),
  cancel: (e) => Pt(e),
  init: ur
};
function dr(e) {
  const {
    defaults: t,
    actions: n
  } = e;
  e.autoScroll = P, P.now = () => e.now(), n.phaselessTypes.autoscroll = !0, t.perAction.autoScroll = P.defaults;
}
const P = {
  defaults: {
    enabled: !1,
    margin: 60,
    container: null,
    speed: 300
  },
  now: Date.now,
  interaction: null,
  i: 0,
  x: 0,
  y: 0,
  isScrolling: !1,
  prevTime: 0,
  margin: 0,
  speed: 0,
  start(e) {
    P.isScrolling = !0, wt.cancel(P.i), e.autoScroll = P, P.interaction = e, P.prevTime = P.now(), P.i = wt.request(P.scroll);
  },
  stop() {
    P.isScrolling = !1, P.interaction && (P.interaction.autoScroll = null), wt.cancel(P.i);
  },
  scroll() {
    const {
      interaction: e
    } = P, {
      interactable: t,
      element: n
    } = e, o = e.prepared.name, i = t.options[o].autoScroll, r = _n(i.container, t, n), s = P.now(), a = (s - P.prevTime) / 1e3, l = i.speed * a;
    if (l >= 1) {
      const c = {
        x: P.x * l,
        y: P.y * l
      };
      if (c.x || c.y) {
        const u = Tn(r);
        h.window(r) ? r.scrollBy(c.x, c.y) : r && (r.scrollLeft += c.x, r.scrollTop += c.y);
        const d = Tn(r), g = {
          x: d.x - u.x,
          y: d.y - u.y
        };
        (g.x || g.y) && t.fire({
          type: "autoscroll",
          target: n,
          interactable: t,
          delta: g,
          interaction: e,
          container: r
        });
      }
      P.prevTime = s;
    }
    P.isScrolling && (wt.cancel(P.i), P.i = wt.request(P.scroll));
  },
  check(e, t) {
    var n;
    return (n = e.options[t].autoScroll) == null ? void 0 : n.enabled;
  },
  onInteractionMove({
    interaction: e,
    pointer: t
  }) {
    if (!(e.interacting() && P.check(e.interactable, e.prepared.name)))
      return;
    if (e.simulation) {
      P.x = P.y = 0;
      return;
    }
    let n, o, i, r;
    const {
      interactable: s,
      element: a
    } = e, l = e.prepared.name, c = s.options[l].autoScroll, u = _n(c.container, s, a);
    if (h.window(u))
      r = t.clientX < P.margin, n = t.clientY < P.margin, o = t.clientX > u.innerWidth - P.margin, i = t.clientY > u.innerHeight - P.margin;
    else {
      const d = Je(u);
      r = t.clientX < d.left + P.margin, n = t.clientY < d.top + P.margin, o = t.clientX > d.right - P.margin, i = t.clientY > d.bottom - P.margin;
    }
    P.x = o ? 1 : r ? -1 : 0, P.y = i ? 1 : n ? -1 : 0, P.isScrolling || (P.margin = c.margin, P.speed = c.speed, P.start(e));
  }
};
function _n(e, t, n) {
  return (h.string(e) ? ho(e, t, n) : e) || vt(n);
}
function Tn(e) {
  return h.window(e) && (e = window.document.body), {
    x: e.scrollLeft,
    y: e.scrollTop
  };
}
const fr = {
  id: "auto-scroll",
  install: dr,
  listeners: {
    "interactions:new": ({
      interaction: e
    }) => {
      e.autoScroll = null;
    },
    "interactions:destroy": ({
      interaction: e
    }) => {
      e.autoScroll = null, P.stop(), P.interaction && (P.interaction = null);
    },
    "interactions:stop": P.stop,
    "interactions:action-move": (e) => P.onInteractionMove(e)
  }
}, pr = fr;
function Qt(e, t) {
  let n = !1;
  return function() {
    return n || (It.console.warn(t), n = !0), e.apply(this, arguments);
  };
}
function en(e, t) {
  return e.name = t.name, e.axis = t.axis, e.edges = t.edges, e;
}
function hr(e) {
  const {
    Interactable: t
  } = e;
  t.prototype.getAction = function(o, i, r, s) {
    const a = gr(this, i, r, s, e);
    return this.options.actionChecker ? this.options.actionChecker(o, i, a, this, s, r) : a;
  }, t.prototype.ignoreFrom = Qt(function(n) {
    return this._backCompatOption("ignoreFrom", n);
  }, "Interactable.ignoreFrom() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue})."), t.prototype.allowFrom = Qt(function(n) {
    return this._backCompatOption("allowFrom", n);
  }, "Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue})."), t.prototype.actionChecker = vr, t.prototype.styleCursor = mr;
}
function gr(e, t, n, o, i) {
  const r = e.getRect(o), s = t.buttons || {
    0: 1,
    1: 4,
    3: 8,
    4: 16
  }[t.button], a = {
    action: null,
    interactable: e,
    interaction: n,
    element: o,
    rect: r,
    buttons: s
  };
  return i.fire("auto-start:check", a), a.action;
}
function mr(e) {
  return h.bool(e) ? (this.options.styleCursor = e, this) : e === null ? (delete this.options.styleCursor, this) : this.options.styleCursor;
}
function vr(e) {
  return h.func(e) ? (this.options.actionChecker = e, this) : e === null ? (delete this.options.actionChecker, this) : this.options.actionChecker;
}
const yr = {
  id: "auto-start/interactableMethods",
  install: hr
};
function br(e) {
  const {
    interactStatic: t,
    defaults: n
  } = e;
  e.usePlugin(yr), n.base.actionChecker = null, n.base.styleCursor = !0, z(n.perAction, {
    manualStart: !1,
    max: 1 / 0,
    maxPerElement: 1,
    allowFrom: null,
    ignoreFrom: null,
    mouseButtons: 1
  }), t.maxInteractions = (o) => Oo(o, e), e.autoStart = {
    maxInteractions: 1 / 0,
    withinInteractionLimit: Se,
    cursorElement: null
  };
}
function xr({
  interaction: e,
  pointer: t,
  event: n,
  eventTarget: o
}, i) {
  if (e.interacting())
    return;
  const r = _o(e, t, n, o, i);
  To(e, r, i);
}
function wr({
  interaction: e,
  pointer: t,
  event: n,
  eventTarget: o
}, i) {
  if (e.pointerType !== "mouse" || e.pointerIsDown || e.interacting())
    return;
  const r = _o(e, t, n, o, i);
  To(e, r, i);
}
function Sr(e, t) {
  const {
    interaction: n
  } = e;
  if (!n.pointerIsDown || n.interacting() || !n.pointerWasMoved || !n.prepared.name)
    return;
  t.fire("autoStart:before-start", e);
  const {
    interactable: o
  } = n, i = n.prepared.name;
  i && o && (o.options[i].manualStart || !Se(o, n.element, n.prepared, t) ? n.stop() : (n.start(n.prepared, o, n.element), Po(n, t)));
}
function Er({
  interaction: e
}, t) {
  const {
    interactable: n
  } = e;
  n && n.options.styleCursor && We(e.element, "", t);
}
function zo(e, t, n, o, i) {
  return t.testIgnoreAllow(t.options[e.name], n, o) && t.options[e.name].enabled && Se(t, n, e, i) ? e : null;
}
function Ir(e, t, n, o, i, r, s) {
  for (let a = 0, l = o.length; a < l; a++) {
    const c = o[a], u = i[a], d = c.getAction(t, n, e, u);
    if (!d)
      continue;
    const g = zo(d, c, u, r, s);
    if (g)
      return {
        action: g,
        interactable: c,
        element: u
      };
  }
  return {
    action: null,
    interactable: null,
    element: null
  };
}
function _o(e, t, n, o, i) {
  let r = [], s = [], a = o;
  function l(c) {
    r.push(c), s.push(a);
  }
  for (; h.element(a); ) {
    r = [], s = [], i.interactables.forEachMatch(a, l);
    const c = Ir(e, t, n, r, s, o, i);
    if (c.action && !c.interactable.options[c.action.name].manualStart)
      return c;
    a = ut(a);
  }
  return {
    action: null,
    interactable: null,
    element: null
  };
}
function To(e, {
  action: t,
  interactable: n,
  element: o
}, i) {
  t = t || {
    name: null
  }, e.interactable = n, e.element = o, en(e.prepared, t), e.rect = n && t.name ? n.getRect(o) : null, Po(e, i), i.fire("autoStart:prepared", {
    interaction: e
  });
}
function Se(e, t, n, o) {
  const i = e.options, r = i[n.name].max, s = i[n.name].maxPerElement, a = o.autoStart.maxInteractions;
  let l = 0, c = 0, u = 0;
  if (!(r && s && a))
    return !1;
  for (const d of o.interactions.list) {
    const g = d.prepared.name;
    if (!!d.interacting()) {
      if (l++, l >= a)
        return !1;
      if (d.interactable === e && (c += g === n.name ? 1 : 0, c >= r || d.element === t && (u++, g === n.name && u >= s)))
        return !1;
    }
  }
  return a > 0;
}
function Oo(e, t) {
  return h.number(e) ? (t.autoStart.maxInteractions = e, this) : t.autoStart.maxInteractions;
}
function We(e, t, n) {
  const {
    cursorElement: o
  } = n.autoStart;
  o && o !== e && (o.style.cursor = ""), e.ownerDocument.documentElement.style.cursor = t, e.style.cursor = t, n.autoStart.cursorElement = t ? e : null;
}
function Po(e, t) {
  const {
    interactable: n,
    element: o,
    prepared: i
  } = e;
  if (!(e.pointerType === "mouse" && n && n.options.styleCursor)) {
    t.autoStart.cursorElement && We(t.autoStart.cursorElement, "", t);
    return;
  }
  let r = "";
  if (i.name) {
    const s = n.options[i.name].cursorChecker;
    h.func(s) ? r = s(i, n, o, e._interacting) : r = t.actions.map[i.name].getCursor(i);
  }
  We(e.element, r || "", t);
}
const zr = {
  id: "auto-start/base",
  before: ["actions"],
  install: br,
  listeners: {
    "interactions:down": xr,
    "interactions:move": (e, t) => {
      wr(e, t), Sr(e, t);
    },
    "interactions:stop": Er
  },
  maxInteractions: Oo,
  withinInteractionLimit: Se,
  validateAction: zo
}, nn = zr;
function _r({
  interaction: e,
  eventTarget: t,
  dx: n,
  dy: o
}, i) {
  if (e.prepared.name !== "drag")
    return;
  const r = Math.abs(n), s = Math.abs(o), a = e.interactable.options.drag, l = a.startAxis, c = r > s ? "x" : r < s ? "y" : "xy";
  if (e.prepared.axis = a.lockAxis === "start" ? c[0] : a.lockAxis, c !== "xy" && l !== "xy" && l !== c) {
    e.prepared.name = null;
    let u = t;
    const d = function(g) {
      if (g === e.interactable)
        return;
      const m = e.interactable.options.drag;
      if (!m.manualStart && g.testIgnoreAllow(m, u, t)) {
        const b = g.getAction(e.downPointer, e.downEvent, e, u);
        if (b && b.name === "drag" && Tr(c, g) && nn.validateAction(b, g, u, t, i))
          return g;
      }
    };
    for (; h.element(u); ) {
      const g = i.interactables.forEachMatch(u, d);
      if (g) {
        e.prepared.name = "drag", e.interactable = g, e.element = u;
        break;
      }
      u = ut(u);
    }
  }
}
function Tr(e, t) {
  if (!t)
    return !1;
  const n = t.options.drag.startAxis;
  return e === "xy" || n === "xy" || n === e;
}
const Or = {
  id: "auto-start/dragAxis",
  listeners: {
    "autoStart:before-start": _r
  }
};
function Pr(e) {
  const {
    defaults: t
  } = e;
  e.usePlugin(nn), t.perAction.hold = 0, t.perAction.delay = 0;
}
function Te(e) {
  const t = e.prepared && e.prepared.name;
  if (!t)
    return null;
  const n = e.interactable.options;
  return n[t].hold || n[t].delay;
}
const Dr = {
  id: "auto-start/hold",
  install: Pr,
  listeners: {
    "interactions:new": ({
      interaction: e
    }) => {
      e.autoStartHoldTimer = null;
    },
    "autoStart:prepared": ({
      interaction: e
    }) => {
      const t = Te(e);
      t > 0 && (e.autoStartHoldTimer = setTimeout(() => {
        e.start(e.prepared, e.interactable, e.element);
      }, t));
    },
    "interactions:move": ({
      interaction: e,
      duplicate: t
    }) => {
      e.autoStartHoldTimer && e.pointerWasMoved && !t && (clearTimeout(e.autoStartHoldTimer), e.autoStartHoldTimer = null);
    },
    "autoStart:before-start": ({
      interaction: e
    }) => {
      Te(e) > 0 && (e.prepared.name = null);
    }
  },
  getHoldDuration: Te
}, Cr = Dr, Mr = {
  id: "auto-start",
  install(e) {
    e.usePlugin(nn), e.usePlugin(Cr), e.usePlugin(Or);
  }
};
function kr(e) {
  return /^(always|never|auto)$/.test(e) ? (this.options.preventDefault = e, this) : h.bool(e) ? (this.options.preventDefault = e ? "always" : "never", this) : this.options.preventDefault;
}
function Ar(e, t, n) {
  const o = e.options.preventDefault;
  if (o !== "never") {
    if (o === "always") {
      n.preventDefault();
      return;
    }
    if (t.events.supportsPassive && /^touch(start|move)$/.test(n.type)) {
      const i = vt(n.target).document, r = t.getDocOptions(i);
      if (!(r && r.events) || r.events.passive !== !1)
        return;
    }
    /^(mouse|pointer|touch)*(down|start)/i.test(n.type) || h.element(n.target) && Et(n.target, "input,select,textarea,[contenteditable=true],[contenteditable=true] *") || n.preventDefault();
  }
}
function Rr({
  interaction: e,
  event: t
}) {
  e.interactable && e.interactable.checkAndPreventDefault(t);
}
function $r(e) {
  const {
    Interactable: t
  } = e;
  t.prototype.preventDefault = kr, t.prototype.checkAndPreventDefault = function(n) {
    return Ar(this, e, n);
  }, e.interactions.docEvents.push({
    type: "dragstart",
    listener(n) {
      for (const o of e.interactions.list)
        if (o.element && (o.element === n.target || Ct(o.element, n.target))) {
          o.interactable.checkAndPreventDefault(n);
          return;
        }
    }
  });
}
const Do = {
  id: "core/interactablePreventDefault",
  install: $r,
  listeners: ["down", "move", "up", "cancel"].reduce((e, t) => (e[`interactions:${t}`] = Rr, e), {})
}, Nr = {};
var Ht;
(function(e) {
  e.touchAction = "touchAction", e.boxSizing = "boxSizing", e.noListeners = "noListeners";
})(Ht || (Ht = {}));
const On = "[interact.js] ", qe = {
  touchAction: "https://developer.mozilla.org/en-US/docs/Web/CSS/touch-action",
  boxSizing: "https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing"
}, Lr = !1;
function Hr(e, {
  logger: t
} = {}) {
  const {
    Interactable: n,
    defaults: o
  } = e;
  e.logger = t || console, o.base.devTools = {
    ignore: {}
  }, n.prototype.devTools = function(i) {
    return i ? (z(this.options.devTools, i), this) : this.options.devTools;
  }, e.usePlugin(Nr);
}
const Pn = [{
  name: Ht.touchAction,
  perform({
    element: e
  }) {
    return !jr(e, "touchAction", /pan-|pinch|none/);
  },
  getInfo({
    element: e
  }) {
    return [e, qe.touchAction];
  },
  text: `Consider adding CSS "touch-action: none" to this element
`
}, {
  name: Ht.boxSizing,
  perform(e) {
    const {
      element: t
    } = e;
    return e.prepared.name === "resize" && t instanceof Z.HTMLElement && !Co(t, "boxSizing", /border-box/);
  },
  text: 'Consider adding CSS "box-sizing: border-box" to this resizable element',
  getInfo({
    element: e
  }) {
    return [e, qe.boxSizing];
  }
}, {
  name: Ht.noListeners,
  perform(e) {
    const t = e.prepared.name;
    return !(e.interactable.events.types[`${t}move`] || []).length;
  },
  getInfo(e) {
    return [e.prepared.name, e.interactable];
  },
  text: "There are no listeners set for this action"
}];
function Co(e, t, n) {
  const o = e.style[t] || It.getComputedStyle(e)[t];
  return n.test((o || "").toString());
}
function jr(e, t, n) {
  let o = e;
  for (; h.element(o); ) {
    if (Co(o, t, n))
      return !0;
    o = ut(o);
  }
  return !1;
}
const Dn = "dev-tools", Br = Lr ? {
  id: Dn,
  install: () => {
  }
} : {
  id: Dn,
  install: Hr,
  listeners: {
    "interactions:action-start": ({
      interaction: e
    }, t) => {
      for (const n of Pn) {
        const o = e.interactable && e.interactable.options;
        !(o && o.devTools && o.devTools.ignore[n.name]) && n.perform(e) && t.logger.warn(On + n.text, ...n.getInfo(e));
      }
    }
  },
  checks: Pn,
  CheckName: Ht,
  links: qe,
  prefix: On
}, Fr = Br;
function jt(e) {
  const t = {};
  for (const n in e) {
    const o = e[n];
    h.plainObject(o) ? t[n] = jt(o) : h.array(o) ? t[n] = tn(o) : t[n] = o;
  }
  return t;
}
class on {
  constructor(t) {
    f(this, "states", []);
    f(this, "startOffset", {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    });
    f(this, "startDelta");
    f(this, "result");
    f(this, "endResult");
    f(this, "edges");
    f(this, "interaction");
    this.interaction = t, this.result = ie();
  }
  start({
    phase: t
  }, n) {
    const {
      interaction: o
    } = this, i = Wr(o);
    this.prepareStates(i), this.edges = z({}, o.edges), this.startOffset = qr(o.rect, n), this.startDelta = {
      x: 0,
      y: 0
    };
    const r = this.fillArg({
      phase: t,
      pageCoords: n,
      preEnd: !1
    });
    return this.result = ie(), this.startAll(r), this.result = this.setAll(r);
  }
  fillArg(t) {
    const {
      interaction: n
    } = this;
    return t.interaction = n, t.interactable = n.interactable, t.element = n.element, t.rect = t.rect || n.rect, t.edges = this.edges, t.startOffset = this.startOffset, t;
  }
  startAll(t) {
    for (const n of this.states)
      n.methods.start && (t.state = n, n.methods.start(t));
  }
  setAll(t) {
    const {
      phase: n,
      preEnd: o,
      skipModifiers: i,
      rect: r
    } = t;
    t.coords = z({}, t.pageCoords), t.rect = z({}, r);
    const s = i ? this.states.slice(i) : this.states, a = ie(t.coords, t.rect);
    for (const d of s) {
      var l;
      const {
        options: g
      } = d, m = z({}, t.coords);
      let b = null;
      (l = d.methods) != null && l.set && this.shouldDo(g, o, n) && (t.state = d, b = d.methods.set(t), xe(this.interaction.edges, t.rect, {
        x: t.coords.x - m.x,
        y: t.coords.y - m.y
      })), a.eventProps.push(b);
    }
    a.delta.x = t.coords.x - t.pageCoords.x, a.delta.y = t.coords.y - t.pageCoords.y, a.rectDelta.left = t.rect.left - r.left, a.rectDelta.right = t.rect.right - r.right, a.rectDelta.top = t.rect.top - r.top, a.rectDelta.bottom = t.rect.bottom - r.bottom;
    const c = this.result.coords, u = this.result.rect;
    if (c && u) {
      const d = a.rect.left !== u.left || a.rect.right !== u.right || a.rect.top !== u.top || a.rect.bottom !== u.bottom;
      a.changed = d || c.x !== a.coords.x || c.y !== a.coords.y;
    }
    return a;
  }
  applyToInteraction(t) {
    const {
      interaction: n
    } = this, {
      phase: o
    } = t, i = n.coords.cur, r = n.coords.start, {
      result: s,
      startDelta: a
    } = this, l = s.delta;
    o === "start" && z(this.startDelta, s.delta);
    for (const [d, g] of [[r, a], [i, l]])
      d.page.x += g.x, d.page.y += g.y, d.client.x += g.x, d.client.y += g.y;
    const {
      rectDelta: c
    } = this.result, u = t.rect || n.rect;
    u.left += c.left, u.right += c.right, u.top += c.top, u.bottom += c.bottom, u.width = u.right - u.left, u.height = u.bottom - u.top;
  }
  setAndApply(t) {
    const {
      interaction: n
    } = this, {
      phase: o,
      preEnd: i,
      skipModifiers: r
    } = t, s = this.setAll(this.fillArg({
      preEnd: i,
      phase: o,
      pageCoords: t.modifiedCoords || n.coords.cur.page
    }));
    if (this.result = s, !s.changed && (!r || r < this.states.length) && n.interacting())
      return !1;
    if (t.modifiedCoords) {
      const {
        page: a
      } = n.coords.cur, l = {
        x: t.modifiedCoords.x - a.x,
        y: t.modifiedCoords.y - a.y
      };
      s.coords.x += l.x, s.coords.y += l.y, s.delta.x += l.x, s.delta.y += l.y;
    }
    this.applyToInteraction(t);
  }
  beforeEnd(t) {
    const {
      interaction: n,
      event: o
    } = t, i = this.states;
    if (!i || !i.length)
      return;
    let r = !1;
    for (const s of i) {
      t.state = s;
      const {
        options: a,
        methods: l
      } = s, c = l.beforeEnd && l.beforeEnd(t);
      if (c)
        return this.endResult = c, !1;
      r = r || !r && this.shouldDo(a, !0, t.phase, !0);
    }
    r && n.move({
      event: o,
      preEnd: !0
    });
  }
  stop(t) {
    const {
      interaction: n
    } = t;
    if (!this.states || !this.states.length)
      return;
    const o = z({
      states: this.states,
      interactable: n.interactable,
      element: n.element,
      rect: null
    }, t);
    this.fillArg(o);
    for (const i of this.states)
      o.state = i, i.methods.stop && i.methods.stop(o);
    this.states = null, this.endResult = null;
  }
  prepareStates(t) {
    this.states = [];
    for (let n = 0; n < t.length; n++) {
      const {
        options: o,
        methods: i,
        name: r
      } = t[n];
      this.states.push({
        options: o,
        methods: i,
        index: n,
        name: r
      });
    }
    return this.states;
  }
  restoreInteractionCoords({
    interaction: {
      coords: t,
      rect: n,
      modification: o
    }
  }) {
    if (!o.result)
      return;
    const {
      startDelta: i
    } = o, {
      delta: r,
      rectDelta: s
    } = o.result, a = [[t.start, i], [t.cur, r]];
    for (const [l, c] of a)
      l.page.x -= c.x, l.page.y -= c.y, l.client.x -= c.x, l.client.y -= c.y;
    n.left -= s.left, n.right -= s.right, n.top -= s.top, n.bottom -= s.bottom;
  }
  shouldDo(t, n, o, i) {
    return !(!t || t.enabled === !1 || i && !t.endOnly || t.endOnly && !n || o === "start" && !t.setStart);
  }
  copyFrom(t) {
    this.startOffset = t.startOffset, this.startDelta = t.startDelta, this.edges = t.edges, this.states = t.states.map((n) => jt(n)), this.result = ie(z({}, t.result.coords), z({}, t.result.rect));
  }
  destroy() {
    for (const t in this)
      this[t] = null;
  }
}
function ie(e, t) {
  return {
    rect: t,
    coords: e,
    delta: {
      x: 0,
      y: 0
    },
    rectDelta: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    },
    eventProps: [],
    changed: !0
  };
}
function Wr(e) {
  const t = e.interactable.options[e.prepared.name], n = t.modifiers;
  return n && n.length ? n : ["snap", "snapSize", "snapEdges", "restrict", "restrictEdges", "restrictSize"].map((o) => {
    const i = t[o];
    return i && i.enabled && {
      options: i,
      methods: i._methods
    };
  }).filter((o) => !!o);
}
function qr(e, t) {
  return e ? {
    left: t.x - e.left,
    top: t.y - e.top,
    right: e.right - t.x,
    bottom: e.bottom - t.y
  } : {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0
  };
}
function zt(e, t) {
  const {
    defaults: n
  } = e, o = {
    start: e.start,
    set: e.set,
    beforeEnd: e.beforeEnd,
    stop: e.stop
  }, i = (r) => {
    const s = r || {};
    s.enabled = s.enabled !== !1;
    for (const l in n)
      l in s || (s[l] = n[l]);
    const a = {
      options: s,
      methods: o,
      name: t,
      enable: () => (s.enabled = !0, a),
      disable: () => (s.enabled = !1, a)
    };
    return a;
  };
  return t && typeof t == "string" && (i._defaults = n, i._methods = o), i;
}
function Gt({
  iEvent: e,
  interaction: t
}) {
  const n = t.modification.result;
  n && (e.modifiers = n.eventProps);
}
const Xr = {
  id: "modifiers/base",
  before: ["actions"],
  install: (e) => {
    e.defaults.perAction.modifiers = [];
  },
  listeners: {
    "interactions:new": ({
      interaction: e
    }) => {
      e.modification = new on(e);
    },
    "interactions:before-action-start": (e) => {
      const t = e.interaction.modification;
      t.start(e, e.interaction.coords.start.page), e.interaction.edges = t.edges, t.applyToInteraction(e);
    },
    "interactions:before-action-move": (e) => e.interaction.modification.setAndApply(e),
    "interactions:before-action-end": (e) => e.interaction.modification.beforeEnd(e),
    "interactions:action-start": Gt,
    "interactions:action-move": Gt,
    "interactions:action-end": Gt,
    "interactions:after-action-start": (e) => e.interaction.modification.restoreInteractionCoords(e),
    "interactions:after-action-move": (e) => e.interaction.modification.restoreInteractionCoords(e),
    "interactions:stop": (e) => e.interaction.modification.stop(e)
  }
}, Mo = Xr, ko = {
  base: {
    preventDefault: "auto",
    deltaSource: "page"
  },
  perAction: {
    enabled: !1,
    origin: {
      x: 0,
      y: 0
    }
  },
  actions: {}
};
class rn extends we {
  constructor(n, o, i, r, s, a, l) {
    super(n);
    f(this, "relatedTarget", null);
    f(this, "screenX");
    f(this, "screenY");
    f(this, "button");
    f(this, "buttons");
    f(this, "ctrlKey");
    f(this, "shiftKey");
    f(this, "altKey");
    f(this, "metaKey");
    f(this, "page");
    f(this, "client");
    f(this, "delta");
    f(this, "rect");
    f(this, "x0");
    f(this, "y0");
    f(this, "t0");
    f(this, "dt");
    f(this, "duration");
    f(this, "clientX0");
    f(this, "clientY0");
    f(this, "velocity");
    f(this, "speed");
    f(this, "swipe");
    f(this, "axes");
    f(this, "preEnd");
    s = s || n.element;
    const c = n.interactable, u = (c && c.options || ko).deltaSource, d = Zt(c, s, i), g = r === "start", m = r === "end", b = g ? this : n.prevEvent, _ = g ? n.coords.start : m ? {
      page: b.page,
      client: b.client,
      timeStamp: n.coords.cur.timeStamp
    } : n.coords.cur;
    this.page = z({}, _.page), this.client = z({}, _.client), this.rect = z({}, n.rect), this.timeStamp = _.timeStamp, m || (this.page.x -= d.x, this.page.y -= d.y, this.client.x -= d.x, this.client.y -= d.y), this.ctrlKey = o.ctrlKey, this.altKey = o.altKey, this.shiftKey = o.shiftKey, this.metaKey = o.metaKey, this.button = o.button, this.buttons = o.buttons, this.target = s, this.currentTarget = s, this.preEnd = a, this.type = l || i + (r || ""), this.interactable = c, this.t0 = g ? n.pointers[n.pointers.length - 1].downTime : b.t0, this.x0 = n.coords.start.page.x - d.x, this.y0 = n.coords.start.page.y - d.y, this.clientX0 = n.coords.start.client.x - d.x, this.clientY0 = n.coords.start.client.y - d.y, g || m ? this.delta = {
      x: 0,
      y: 0
    } : this.delta = {
      x: this[u].x - b[u].x,
      y: this[u].y - b[u].y
    }, this.dt = n.coords.delta.timeStamp, this.duration = this.timeStamp - this.t0, this.velocity = z({}, n.coords.velocity[u]), this.speed = te(this.velocity.x, this.velocity.y), this.swipe = m || r === "inertiastart" ? this.getSwipe() : null;
  }
  getSwipe() {
    const n = this._interaction;
    if (n.prevEvent.speed < 600 || this.timeStamp - n.prevEvent.timeStamp > 150)
      return null;
    let o = 180 * Math.atan2(n.prevEvent.velocityY, n.prevEvent.velocityX) / Math.PI;
    const i = 22.5;
    o < 0 && (o += 360);
    const r = 135 - i <= o && o < 225 + i, s = 225 - i <= o && o < 315 + i, a = !r && (315 - i <= o || o < 45 + i), l = !s && 45 - i <= o && o < 135 + i;
    return {
      up: s,
      down: l,
      left: r,
      right: a,
      angle: o,
      speed: n.prevEvent.speed,
      velocity: {
        x: n.prevEvent.velocityX,
        y: n.prevEvent.velocityY
      }
    };
  }
  preventDefault() {
  }
  stopImmediatePropagation() {
    this.immediatePropagationStopped = this.propagationStopped = !0;
  }
  stopPropagation() {
    this.propagationStopped = !0;
  }
}
Object.defineProperties(rn.prototype, {
  pageX: {
    get() {
      return this.page.x;
    },
    set(e) {
      this.page.x = e;
    }
  },
  pageY: {
    get() {
      return this.page.y;
    },
    set(e) {
      this.page.y = e;
    }
  },
  clientX: {
    get() {
      return this.client.x;
    },
    set(e) {
      this.client.x = e;
    }
  },
  clientY: {
    get() {
      return this.client.y;
    },
    set(e) {
      this.client.y = e;
    }
  },
  dx: {
    get() {
      return this.delta.x;
    },
    set(e) {
      this.delta.x = e;
    }
  },
  dy: {
    get() {
      return this.delta.y;
    },
    set(e) {
      this.delta.y = e;
    }
  },
  velocityX: {
    get() {
      return this.velocity.x;
    },
    set(e) {
      this.velocity.x = e;
    }
  },
  velocityY: {
    get() {
      return this.velocity.y;
    },
    set(e) {
      this.velocity.y = e;
    }
  }
});
class Yr {
  constructor(t, n, o, i, r) {
    f(this, "id");
    f(this, "pointer");
    f(this, "event");
    f(this, "downTime");
    f(this, "downTarget");
    this.id = t, this.pointer = n, this.event = o, this.downTime = i, this.downTarget = r;
  }
}
let Xe;
(function(e) {
  e.interactable = "", e.element = "", e.prepared = "", e.pointerIsDown = "", e.pointerWasMoved = "", e._proxy = "";
})(Xe || (Xe = {}));
let ge;
(function(e) {
  e.start = "", e.move = "", e.end = "", e.stop = "", e.interacting = "";
})(ge || (ge = {}));
let Gr = 0;
class Vr {
  constructor({
    pointerType: t,
    scopeFire: n
  }) {
    f(this, "interactable", null);
    f(this, "element", null);
    f(this, "rect", null);
    f(this, "_rects");
    f(this, "edges", null);
    f(this, "_scopeFire");
    f(this, "prepared", {
      name: null,
      axis: null,
      edges: null
    });
    f(this, "pointerType");
    f(this, "pointers", []);
    f(this, "downEvent", null);
    f(this, "downPointer", {});
    f(this, "_latestPointer", {
      pointer: null,
      event: null,
      eventTarget: null
    });
    f(this, "prevEvent", null);
    f(this, "pointerIsDown", !1);
    f(this, "pointerWasMoved", !1);
    f(this, "_interacting", !1);
    f(this, "_ending", !1);
    f(this, "_stopped", !0);
    f(this, "_proxy", null);
    f(this, "simulation", null);
    f(this, "doMove", Qt(function(t) {
      this.move(t);
    }, "The interaction.doMove() method has been renamed to interaction.move()"));
    f(this, "coords", {
      start: Bt(),
      prev: Bt(),
      cur: Bt(),
      delta: Bt(),
      velocity: Bt()
    });
    f(this, "_id", Gr++);
    this._scopeFire = n, this.pointerType = t;
    const o = this;
    this._proxy = {};
    for (const i in Xe)
      Object.defineProperty(this._proxy, i, {
        get() {
          return o[i];
        }
      });
    for (const i in ge)
      Object.defineProperty(this._proxy, i, {
        value: (...r) => o[i](...r)
      });
    this._scopeFire("interactions:new", {
      interaction: this
    });
  }
  get pointerMoveTolerance() {
    return 1;
  }
  pointerDown(t, n, o) {
    const i = this.updatePointer(t, n, o, !0), r = this.pointers[i];
    this._scopeFire("interactions:down", {
      pointer: t,
      event: n,
      eventTarget: o,
      pointerIndex: i,
      pointerInfo: r,
      type: "down",
      interaction: this
    });
  }
  start(t, n, o) {
    return this.interacting() || !this.pointerIsDown || this.pointers.length < (t.name === "gesture" ? 2 : 1) || !n.options[t.name].enabled ? !1 : (en(this.prepared, t), this.interactable = n, this.element = o, this.rect = n.getRect(o), this.edges = this.prepared.edges ? z({}, this.prepared.edges) : {
      left: !0,
      right: !0,
      top: !0,
      bottom: !0
    }, this._stopped = !1, this._interacting = this._doPhase({
      interaction: this,
      event: this.downEvent,
      phase: "start"
    }) && !this._stopped, this._interacting);
  }
  pointerMove(t, n, o) {
    !this.simulation && !(this.modification && this.modification.endResult) && this.updatePointer(t, n, o, !1);
    const i = this.coords.cur.page.x === this.coords.prev.page.x && this.coords.cur.page.y === this.coords.prev.page.y && this.coords.cur.client.x === this.coords.prev.client.x && this.coords.cur.client.y === this.coords.prev.client.y;
    let r, s;
    this.pointerIsDown && !this.pointerWasMoved && (r = this.coords.cur.client.x - this.coords.start.client.x, s = this.coords.cur.client.y - this.coords.start.client.y, this.pointerWasMoved = te(r, s) > this.pointerMoveTolerance);
    const a = this.getPointerIndex(t), l = {
      pointer: t,
      pointerIndex: a,
      pointerInfo: this.pointers[a],
      event: n,
      type: "move",
      eventTarget: o,
      dx: r,
      dy: s,
      duplicate: i,
      interaction: this
    };
    i || Bi(this.coords.velocity, this.coords.delta), this._scopeFire("interactions:move", l), !i && !this.simulation && (this.interacting() && (l.type = null, this.move(l)), this.pointerWasMoved && le(this.coords.prev, this.coords.cur));
  }
  move(t) {
    (!t || !t.event) && go(this.coords.delta), t = z({
      pointer: this._latestPointer.pointer,
      event: this._latestPointer.event,
      eventTarget: this._latestPointer.eventTarget,
      interaction: this
    }, t || {}), t.phase = "move", this._doPhase(t);
  }
  pointerUp(t, n, o, i) {
    let r = this.getPointerIndex(t);
    r === -1 && (r = this.updatePointer(t, n, o, !1));
    const s = /cancel$/i.test(n.type) ? "cancel" : "up";
    this._scopeFire(`interactions:${s}`, {
      pointer: t,
      pointerIndex: r,
      pointerInfo: this.pointers[r],
      event: n,
      eventTarget: o,
      type: s,
      curEventTarget: i,
      interaction: this
    }), this.simulation || this.end(n), this.removePointer(t, n);
  }
  documentBlur(t) {
    this.end(t), this._scopeFire("interactions:blur", {
      event: t,
      type: "blur",
      interaction: this
    });
  }
  end(t) {
    this._ending = !0, t = t || this._latestPointer.event;
    let n;
    this.interacting() && (n = this._doPhase({
      event: t,
      interaction: this,
      phase: "end"
    })), this._ending = !1, n === !0 && this.stop();
  }
  currentAction() {
    return this._interacting ? this.prepared.name : null;
  }
  interacting() {
    return this._interacting;
  }
  stop() {
    this._scopeFire("interactions:stop", {
      interaction: this
    }), this.interactable = this.element = null, this._interacting = !1, this._stopped = !0, this.prepared.name = this.prevEvent = null;
  }
  getPointerIndex(t) {
    const n = Jt(t);
    return this.pointerType === "mouse" || this.pointerType === "pen" ? this.pointers.length - 1 : ee(this.pointers, (o) => o.id === n);
  }
  getPointerInfo(t) {
    return this.pointers[this.getPointerIndex(t)];
  }
  updatePointer(t, n, o, i) {
    const r = Jt(t);
    let s = this.getPointerIndex(t), a = this.pointers[s];
    return i = i === !1 ? !1 : i || /(down|start)$/i.test(n.type), a ? a.pointer = t : (a = new Yr(r, t, n, null, null), s = this.pointers.length, this.pointers.push(a)), Wi(this.coords.cur, this.pointers.map((l) => l.pointer), this._now()), ji(this.coords.delta, this.coords.prev, this.coords.cur), i && (this.pointerIsDown = !0, a.downTime = this.coords.cur.timeStamp, a.downTarget = o, fe(this.downPointer, t), this.interacting() || (le(this.coords.start, this.coords.cur), le(this.coords.prev, this.coords.cur), this.downEvent = n, this.pointerWasMoved = !1)), this._updateLatestPointer(t, n, o), this._scopeFire("interactions:update-pointer", {
      pointer: t,
      event: n,
      eventTarget: o,
      down: i,
      pointerInfo: a,
      pointerIndex: s,
      interaction: this
    }), s;
  }
  removePointer(t, n) {
    const o = this.getPointerIndex(t);
    if (o === -1)
      return;
    const i = this.pointers[o];
    this._scopeFire("interactions:remove-pointer", {
      pointer: t,
      event: n,
      eventTarget: null,
      pointerIndex: o,
      pointerInfo: i,
      interaction: this
    }), this.pointers.splice(o, 1), this.pointerIsDown = !1;
  }
  _updateLatestPointer(t, n, o) {
    this._latestPointer.pointer = t, this._latestPointer.event = n, this._latestPointer.eventTarget = o;
  }
  destroy() {
    this._latestPointer.pointer = null, this._latestPointer.event = null, this._latestPointer.eventTarget = null;
  }
  _createPreparedEvent(t, n, o, i) {
    return new rn(this, t, this.prepared.name, n, this.element, o, i);
  }
  _fireEvent(t) {
    var n;
    (n = this.interactable) == null || n.fire(t), (!this.prevEvent || t.timeStamp >= this.prevEvent.timeStamp) && (this.prevEvent = t);
  }
  _doPhase(t) {
    const {
      event: n,
      phase: o,
      preEnd: i,
      type: r
    } = t, {
      rect: s
    } = this;
    if (s && o === "move" && (xe(this.edges, s, this.coords.delta[this.interactable.options.deltaSource]), s.width = s.right - s.left, s.height = s.bottom - s.top), this._scopeFire(`interactions:before-action-${o}`, t) === !1)
      return !1;
    const l = t.iEvent = this._createPreparedEvent(n, o, i, r);
    return this._scopeFire(`interactions:action-${o}`, t), o === "start" && (this.prevEvent = l), this._fireEvent(l), this._scopeFire(`interactions:after-action-${o}`, t), !0;
  }
  _now() {
    return Date.now();
  }
}
ge.offsetBy = "";
function Ur(e) {
  !e.pointerIsDown || (Ye(e.coords.cur, e.offset.total), e.offset.pending.x = 0, e.offset.pending.y = 0);
}
function Cn({
  interaction: e
}) {
  Ao(e);
}
function Kr({
  interaction: e
}) {
  if (!!Ao(e))
    return e.move({
      offset: !0
    }), e.end(), !1;
}
function Jr({
  interaction: e
}) {
  e.offset.total.x = 0, e.offset.total.y = 0, e.offset.pending.x = 0, e.offset.pending.y = 0;
}
function Ao(e) {
  if (!Zr(e))
    return !1;
  const {
    pending: t
  } = e.offset;
  return Ye(e.coords.cur, t), Ye(e.coords.delta, t), xe(e.edges, e.rect, t), t.x = 0, t.y = 0, !0;
}
function Qr({
  x: e,
  y: t
}) {
  this.offset.pending.x += e, this.offset.pending.y += t, this.offset.total.x += e, this.offset.total.y += t;
}
function Ye({
  page: e,
  client: t
}, {
  x: n,
  y: o
}) {
  e.x += n, e.y += o, t.x += n, t.y += o;
}
function Zr(e) {
  return !!(e.offset.pending.x || e.offset.pending.y);
}
const ts = {
  id: "offset",
  before: ["modifiers", "pointer-events", "actions", "inertia"],
  install(e) {
    e.Interaction.prototype.offsetBy = Qr;
  },
  listeners: {
    "interactions:new": ({
      interaction: e
    }) => {
      e.offset = {
        total: {
          x: 0,
          y: 0
        },
        pending: {
          x: 0,
          y: 0
        }
      };
    },
    "interactions:update-pointer": ({
      interaction: e
    }) => Ur(e),
    "interactions:before-action-start": Cn,
    "interactions:before-action-move": Cn,
    "interactions:before-action-end": Kr,
    "interactions:stop": Jr
  }
}, Ro = ts;
function es(e) {
  const {
    defaults: t
  } = e;
  e.usePlugin(Ro), e.usePlugin(Mo), e.actions.phases.inertiastart = !0, e.actions.phases.resume = !0, t.perAction.inertia = {
    enabled: !1,
    resistance: 10,
    minSpeed: 100,
    endSpeed: 10,
    allowResume: !0,
    smoothEndDuration: 300
  };
}
class ns {
  constructor(t) {
    f(this, "active", !1);
    f(this, "isModified", !1);
    f(this, "smoothEnd", !1);
    f(this, "allowResume", !1);
    f(this, "modification");
    f(this, "modifierCount", 0);
    f(this, "modifierArg");
    f(this, "startCoords");
    f(this, "t0", 0);
    f(this, "v0", 0);
    f(this, "te", 0);
    f(this, "targetOffset");
    f(this, "modifiedOffset");
    f(this, "currentOffset");
    f(this, "lambda_v0", 0);
    f(this, "one_ve_v0", 0);
    f(this, "timeout");
    f(this, "interaction");
    this.interaction = t;
  }
  start(t) {
    const {
      interaction: n
    } = this, o = re(n);
    if (!o || !o.enabled)
      return !1;
    const {
      client: i
    } = n.coords.velocity, r = te(i.x, i.y), s = this.modification || (this.modification = new on(n));
    if (s.copyFrom(n.modification), this.t0 = n._now(), this.allowResume = o.allowResume, this.v0 = r, this.currentOffset = {
      x: 0,
      y: 0
    }, this.startCoords = n.coords.cur.page, this.modifierArg = s.fillArg({
      pageCoords: this.startCoords,
      preEnd: !0,
      phase: "inertiastart"
    }), this.t0 - n.coords.cur.timeStamp < 50 && r > o.minSpeed && r > o.endSpeed)
      this.startInertia();
    else {
      if (s.result = s.setAll(this.modifierArg), !s.result.changed)
        return !1;
      this.startSmoothEnd();
    }
    return n.modification.result.rect = null, n.offsetBy(this.targetOffset), n._doPhase({
      interaction: n,
      event: t,
      phase: "inertiastart"
    }), n.offsetBy({
      x: -this.targetOffset.x,
      y: -this.targetOffset.y
    }), n.modification.result.rect = null, this.active = !0, n.simulation = this, !0;
  }
  startInertia() {
    const t = this.interaction.coords.velocity.client, n = re(this.interaction), o = n.resistance, i = -Math.log(n.endSpeed / this.v0) / o;
    this.targetOffset = {
      x: (t.x - i) / o,
      y: (t.y - i) / o
    }, this.te = i, this.lambda_v0 = o / this.v0, this.one_ve_v0 = 1 - n.endSpeed / this.v0;
    const {
      modification: r,
      modifierArg: s
    } = this;
    s.pageCoords = {
      x: this.startCoords.x + this.targetOffset.x,
      y: this.startCoords.y + this.targetOffset.y
    }, r.result = r.setAll(s), r.result.changed && (this.isModified = !0, this.modifiedOffset = {
      x: this.targetOffset.x + r.result.delta.x,
      y: this.targetOffset.y + r.result.delta.y
    }), this.onNextFrame(() => this.inertiaTick());
  }
  startSmoothEnd() {
    this.smoothEnd = !0, this.isModified = !0, this.targetOffset = {
      x: this.modification.result.delta.x,
      y: this.modification.result.delta.y
    }, this.onNextFrame(() => this.smoothEndTick());
  }
  onNextFrame(t) {
    this.timeout = wt.request(() => {
      this.active && t();
    });
  }
  inertiaTick() {
    const {
      interaction: t
    } = this, o = re(t).resistance, i = (t._now() - this.t0) / 1e3;
    if (i < this.te) {
      const r = 1 - (Math.exp(-o * i) - this.lambda_v0) / this.one_ve_v0;
      let s;
      this.isModified ? s = as(0, 0, this.targetOffset.x, this.targetOffset.y, this.modifiedOffset.x, this.modifiedOffset.y, r) : s = {
        x: this.targetOffset.x * r,
        y: this.targetOffset.y * r
      };
      const a = {
        x: s.x - this.currentOffset.x,
        y: s.y - this.currentOffset.y
      };
      this.currentOffset.x += a.x, this.currentOffset.y += a.y, t.offsetBy(a), t.move(), this.onNextFrame(() => this.inertiaTick());
    } else
      t.offsetBy({
        x: this.modifiedOffset.x - this.currentOffset.x,
        y: this.modifiedOffset.y - this.currentOffset.y
      }), this.end();
  }
  smoothEndTick() {
    const {
      interaction: t
    } = this, n = t._now() - this.t0, {
      smoothEndDuration: o
    } = re(t);
    if (n < o) {
      const i = {
        x: kn(n, 0, this.targetOffset.x, o),
        y: kn(n, 0, this.targetOffset.y, o)
      }, r = {
        x: i.x - this.currentOffset.x,
        y: i.y - this.currentOffset.y
      };
      this.currentOffset.x += r.x, this.currentOffset.y += r.y, t.offsetBy(r), t.move({
        skipModifiers: this.modifierCount
      }), this.onNextFrame(() => this.smoothEndTick());
    } else
      t.offsetBy({
        x: this.targetOffset.x - this.currentOffset.x,
        y: this.targetOffset.y - this.currentOffset.y
      }), this.end();
  }
  resume({
    pointer: t,
    event: n,
    eventTarget: o
  }) {
    const {
      interaction: i
    } = this;
    i.offsetBy({
      x: -this.currentOffset.x,
      y: -this.currentOffset.y
    }), i.updatePointer(t, n, o, !0), i._doPhase({
      interaction: i,
      event: n,
      phase: "resume"
    }), le(i.coords.prev, i.coords.cur), this.stop();
  }
  end() {
    this.interaction.move(), this.interaction.end(), this.stop();
  }
  stop() {
    this.active = this.smoothEnd = !1, this.interaction.simulation = null, wt.cancel(this.timeout);
  }
}
function os({
  interaction: e,
  event: t
}) {
  return !e._interacting || e.simulation ? null : e.inertia.start(t) ? !1 : null;
}
function is(e) {
  const {
    interaction: t,
    eventTarget: n
  } = e, o = t.inertia;
  if (!o.active)
    return;
  let i = n;
  for (; h.element(i); ) {
    if (i === t.element) {
      o.resume(e);
      break;
    }
    i = ut(i);
  }
}
function rs({
  interaction: e
}) {
  const t = e.inertia;
  t.active && t.stop();
}
function re({
  interactable: e,
  prepared: t
}) {
  return e && e.options && t.name && e.options[t.name].inertia;
}
const ss = {
  id: "inertia",
  before: ["modifiers", "actions"],
  install: es,
  listeners: {
    "interactions:new": ({
      interaction: e
    }) => {
      e.inertia = new ns(e);
    },
    "interactions:before-action-end": os,
    "interactions:down": is,
    "interactions:stop": rs,
    "interactions:before-action-resume": (e) => {
      const {
        modification: t
      } = e.interaction;
      t.stop(e), t.start(e, e.interaction.coords.cur.page), t.applyToInteraction(e);
    },
    "interactions:before-action-inertiastart": (e) => e.interaction.modification.setAndApply(e),
    "interactions:action-resume": Gt,
    "interactions:action-inertiastart": Gt,
    "interactions:after-action-inertiastart": (e) => e.interaction.modification.restoreInteractionCoords(e),
    "interactions:after-action-resume": (e) => e.interaction.modification.restoreInteractionCoords(e)
  }
};
function Mn(e, t, n, o) {
  const i = 1 - e;
  return i * i * t + 2 * i * e * n + e * e * o;
}
function as(e, t, n, o, i, r, s) {
  return {
    x: Mn(s, e, n, i),
    y: Mn(s, t, o, r)
  };
}
function kn(e, t, n, o) {
  return e /= o, -n * e * (e - 2) + t;
}
const cs = ss;
function An(e, t) {
  for (const n of t) {
    if (e.immediatePropagationStopped)
      break;
    n(e);
  }
}
class $o {
  constructor(t) {
    f(this, "options");
    f(this, "types", {});
    f(this, "propagationStopped", !1);
    f(this, "immediatePropagationStopped", !1);
    f(this, "global");
    this.options = z({}, t || {});
  }
  fire(t) {
    let n;
    const o = this.global;
    (n = this.types[t.type]) && An(t, n), !t.propagationStopped && o && (n = o[t.type]) && An(t, n);
  }
  on(t, n) {
    const o = Mt(t, n);
    for (t in o)
      this.types[t] = wo(this.types[t] || [], o[t]);
  }
  off(t, n) {
    const o = Mt(t, n);
    for (t in o) {
      const i = this.types[t];
      if (!(!i || !i.length))
        for (const r of o[t]) {
          const s = i.indexOf(r);
          s !== -1 && i.splice(s, 1);
        }
    }
  }
  getRect(t) {
    return null;
  }
}
function Ge(e, t) {
  if (t.phaselessTypes[e])
    return !0;
  for (const n in t.map)
    if (e.indexOf(n) === 0 && e.substr(n.length) in t.phases)
      return !0;
  return !1;
}
function ls(e) {
  const t = (n, o) => {
    let i = e.interactables.get(n, o);
    return i || (i = e.interactables.new(n, o), i.events.global = t.globalEvents), i;
  };
  return t.getPointerAverage = yo, t.getTouchBBox = Ne, t.getTouchDistance = Le, t.getTouchAngle = He, t.getElementRect = Qe, t.getElementClientRect = Je, t.matchesSelector = Et, t.closest = fo, t.globalEvents = {}, t.version = "1.10.17", t.scope = e, t.use = function(n, o) {
    return this.scope.usePlugin(n, o), this;
  }, t.isSet = function(n, o) {
    return !!this.scope.interactables.get(n, o && o.context);
  }, t.on = Qt(function(o, i, r) {
    if (h.string(o) && o.search(" ") !== -1 && (o = o.trim().split(/ +/)), h.array(o)) {
      for (const s of o)
        this.on(s, i, r);
      return this;
    }
    if (h.object(o)) {
      for (const s in o)
        this.on(s, o[s], i);
      return this;
    }
    return Ge(o, this.scope.actions) ? this.globalEvents[o] ? this.globalEvents[o].push(i) : this.globalEvents[o] = [i] : this.scope.events.add(this.scope.document, o, i, {
      options: r
    }), this;
  }, "The interact.on() method is being deprecated"), t.off = Qt(function(o, i, r) {
    if (h.string(o) && o.search(" ") !== -1 && (o = o.trim().split(/ +/)), h.array(o)) {
      for (const s of o)
        this.off(s, i, r);
      return this;
    }
    if (h.object(o)) {
      for (const s in o)
        this.off(s, o[s], i);
      return this;
    }
    if (Ge(o, this.scope.actions)) {
      let s;
      o in this.globalEvents && (s = this.globalEvents[o].indexOf(i)) !== -1 && this.globalEvents[o].splice(s, 1);
    } else
      this.scope.events.remove(this.scope.document, o, i, r);
    return this;
  }, "The interact.off() method is being deprecated"), t.debug = function() {
    return this.scope;
  }, t.supportsTouch = function() {
    return ct.supportsTouch;
  }, t.supportsPointerEvent = function() {
    return ct.supportsPointerEvent;
  }, t.stop = function() {
    for (const n of this.scope.interactions.list)
      n.stop();
    return this;
  }, t.pointerMoveTolerance = function(n) {
    return h.number(n) ? (this.scope.interactions.pointerMoveTolerance = n, this) : this.scope.interactions.pointerMoveTolerance;
  }, t.addDocument = function(n, o) {
    this.scope.addDocument(n, o);
  }, t.removeDocument = function(n) {
    this.scope.removeDocument(n);
  }, t;
}
class us {
  constructor(t, n, o, i) {
    f(this, "options");
    f(this, "_actions");
    f(this, "target");
    f(this, "events", new $o());
    f(this, "_context");
    f(this, "_win");
    f(this, "_doc");
    f(this, "_scopeEvents");
    f(this, "_rectChecker");
    this._actions = n.actions, this.target = t, this._context = n.context || o, this._win = vt(wn(t) ? this._context : t), this._doc = this._win.document, this._scopeEvents = i, this.set(n);
  }
  get _defaults() {
    return {
      base: {},
      perAction: {},
      actions: {}
    };
  }
  setOnEvents(t, n) {
    return h.func(n.onstart) && this.on(`${t}start`, n.onstart), h.func(n.onmove) && this.on(`${t}move`, n.onmove), h.func(n.onend) && this.on(`${t}end`, n.onend), h.func(n.oninertiastart) && this.on(`${t}inertiastart`, n.oninertiastart), this;
  }
  updatePerActionListeners(t, n, o) {
    (h.array(n) || h.object(n)) && this.off(t, n), (h.array(o) || h.object(o)) && this.on(t, o);
  }
  setPerAction(t, n) {
    const o = this._defaults;
    for (const i in n) {
      const r = i, s = this.options[t], a = n[r];
      r === "listeners" && this.updatePerActionListeners(t, s.listeners, a), h.array(a) ? s[r] = tn(a) : h.plainObject(a) ? (s[r] = z(s[r] || {}, jt(a)), h.object(o.perAction[r]) && "enabled" in o.perAction[r] && (s[r].enabled = a.enabled !== !1)) : h.bool(a) && h.object(o.perAction[r]) ? s[r].enabled = a : s[r] = a;
    }
  }
  getRect(t) {
    return t = t || (h.element(this.target) ? this.target : null), h.string(this.target) && (t = t || this._context.querySelector(this.target)), Qe(t);
  }
  rectChecker(t) {
    return h.func(t) ? (this._rectChecker = t, this.getRect = (n) => {
      const o = z({}, this._rectChecker(n));
      return "width" in o || (o.width = o.right - o.left, o.height = o.bottom - o.top), o;
    }, this) : t === null ? (delete this.getRect, delete this._rectChecker, this) : this.getRect;
  }
  _backCompatOption(t, n) {
    if (wn(n) || h.object(n)) {
      this.options[t] = n;
      for (const o in this._actions.map)
        this.options[o][t] = n;
      return this;
    }
    return this.options[t];
  }
  origin(t) {
    return this._backCompatOption("origin", t);
  }
  deltaSource(t) {
    return t === "page" || t === "client" ? (this.options.deltaSource = t, this) : this.options.deltaSource;
  }
  context() {
    return this._context;
  }
  inContext(t) {
    return this._context === t.ownerDocument || Ct(this._context, t);
  }
  testIgnoreAllow(t, n, o) {
    return !this.testIgnore(t.ignoreFrom, n, o) && this.testAllow(t.allowFrom, n, o);
  }
  testAllow(t, n, o) {
    return t ? h.element(o) ? h.string(t) ? Re(o, t, n) : h.element(t) ? Ct(t, o) : !1 : !1 : !0;
  }
  testIgnore(t, n, o) {
    return !t || !h.element(o) ? !1 : h.string(t) ? Re(o, t, n) : h.element(t) ? Ct(t, o) : !1;
  }
  fire(t) {
    return this.events.fire(t), this;
  }
  _onOff(t, n, o, i) {
    h.object(n) && !h.array(n) && (i = o, o = null);
    const r = t === "on" ? "add" : "remove", s = Mt(n, o);
    for (let a in s) {
      a === "wheel" && (a = ct.wheelEvent);
      for (const l of s[a])
        Ge(a, this._actions) ? this.events[t](a, l) : h.string(this.target) ? this._scopeEvents[`${r}Delegate`](this.target, this._context, a, l, i) : this._scopeEvents[r](this.target, a, l, i);
    }
    return this;
  }
  on(t, n, o) {
    return this._onOff("on", t, n, o);
  }
  off(t, n, o) {
    return this._onOff("off", t, n, o);
  }
  set(t) {
    const n = this._defaults;
    h.object(t) || (t = {}), this.options = jt(n.base);
    for (const o in this._actions.methodDict) {
      const i = o, r = this._actions.methodDict[i];
      this.options[i] = {}, this.setPerAction(i, z(z({}, n.perAction), n.actions[i])), this[r](t[i]);
    }
    for (const o in t)
      h.func(this[o]) && this[o](t[o]);
    return this;
  }
  unset() {
    if (h.string(this.target))
      for (const t in this._scopeEvents.delegatedEvents) {
        const n = this._scopeEvents.delegatedEvents[t];
        for (let o = n.length - 1; o >= 0; o--) {
          const {
            selector: i,
            context: r,
            listeners: s
          } = n[o];
          i === this.target && r === this._context && n.splice(o, 1);
          for (let a = s.length - 1; a >= 0; a--)
            this._scopeEvents.removeDelegate(this.target, this._context, t, s[a][0], s[a][1]);
        }
      }
    else
      this._scopeEvents.remove(this.target, "all");
  }
}
class ds {
  constructor(t) {
    f(this, "list", []);
    f(this, "selectorMap", {});
    f(this, "scope");
    this.scope = t, t.addListeners({
      "interactable:unset": ({
        interactable: n
      }) => {
        const {
          target: o,
          _context: i
        } = n, r = h.string(o) ? this.selectorMap[o] : o[this.scope.id], s = ee(r, (a) => a.context === i);
        r[s] && (r[s].context = null, r[s].interactable = null), r.splice(s, 1);
      }
    });
  }
  new(t, n) {
    n = z(n || {}, {
      actions: this.scope.actions
    });
    const o = new this.scope.Interactable(t, n, this.scope.document, this.scope.events), i = {
      context: o._context,
      interactable: o
    };
    return this.scope.addDocument(o._doc), this.list.push(o), h.string(t) ? (this.selectorMap[t] || (this.selectorMap[t] = []), this.selectorMap[t].push(i)) : (o.target[this.scope.id] || Object.defineProperty(t, this.scope.id, {
      value: [],
      configurable: !0
    }), t[this.scope.id].push(i)), this.scope.fire("interactable:new", {
      target: t,
      options: n,
      interactable: o,
      win: this.scope._win
    }), o;
  }
  get(t, n) {
    const o = n && n.context || this.scope.document, i = h.string(t), r = i ? this.selectorMap[t] : t[this.scope.id];
    if (!r)
      return null;
    const s = he(r, (a) => a.context === o && (i || a.interactable.inContext(t)));
    return s && s.interactable;
  }
  forEachMatch(t, n) {
    for (const o of this.list) {
      let i;
      if ((h.string(o.target) ? h.element(t) && Et(t, o.target) : t === o.target) && o.inContext(t) && (i = n(o)), i !== void 0)
        return i;
    }
  }
}
function fs(e) {
  var t;
  const n = [], o = {}, i = [], r = {
    add: s,
    remove: a,
    addDelegate: l,
    removeDelegate: c,
    delegateListener: u,
    delegateUseCapture: d,
    delegatedEvents: o,
    documents: i,
    targets: n,
    supportsOptions: !1,
    supportsPassive: !1
  };
  (t = e.document) == null || t.createElement("div").addEventListener("test", null, {
    get capture() {
      return r.supportsOptions = !0;
    },
    get passive() {
      return r.supportsPassive = !0;
    }
  }), e.events = r;
  function s(g, m, b, _) {
    const D = Ft(_);
    let T = he(n, (I) => I.eventTarget === g);
    T || (T = {
      eventTarget: g,
      events: {}
    }, n.push(T)), T.events[m] || (T.events[m] = []), g.addEventListener && !Xi(T.events[m], b) && (g.addEventListener(m, b, r.supportsOptions ? D : D.capture), T.events[m].push(b));
  }
  function a(g, m, b, _) {
    const D = Ft(_), T = ee(n, (p) => p.eventTarget === g), I = n[T];
    if (!I || !I.events)
      return;
    if (m === "all") {
      for (m in I.events)
        I.events.hasOwnProperty(m) && a(g, m, "all");
      return;
    }
    let k = !1;
    const v = I.events[m];
    if (v) {
      if (b === "all") {
        for (let p = v.length - 1; p >= 0; p--)
          a(g, m, v[p], D);
        return;
      } else
        for (let p = 0; p < v.length; p++)
          if (v[p] === b) {
            g.removeEventListener(m, b, r.supportsOptions ? D : D.capture), v.splice(p, 1), v.length === 0 && (delete I.events[m], k = !0);
            break;
          }
    }
    k && !Object.keys(I.events).length && n.splice(T, 1);
  }
  function l(g, m, b, _, D) {
    const T = Ft(D);
    if (!o[b]) {
      o[b] = [];
      for (const v of i)
        s(v, b, u), s(v, b, d, !0);
    }
    const I = o[b];
    let k = he(I, (v) => v.selector === g && v.context === m);
    k || (k = {
      selector: g,
      context: m,
      listeners: []
    }, I.push(k)), k.listeners.push([_, T]);
  }
  function c(g, m, b, _, D) {
    const T = Ft(D), I = o[b];
    let k = !1, v;
    if (!!I)
      for (v = I.length - 1; v >= 0; v--) {
        const p = I[v];
        if (p.selector === g && p.context === m) {
          const {
            listeners: A
          } = p;
          for (let x = A.length - 1; x >= 0; x--) {
            const [B, {
              capture: q,
              passive: M
            }] = A[x];
            if (B === _ && q === T.capture && M === T.passive) {
              A.splice(x, 1), A.length || (I.splice(v, 1), a(m, b, u), a(m, b, d, !0)), k = !0;
              break;
            }
          }
          if (k)
            break;
        }
      }
  }
  function u(g, m) {
    const b = Ft(m), _ = new ps(g), D = o[g.type], [T] = xo(g);
    let I = T;
    for (; h.element(I); ) {
      for (let k = 0; k < D.length; k++) {
        const v = D[k], {
          selector: p,
          context: A
        } = v;
        if (Et(I, p) && Ct(A, T) && Ct(A, I)) {
          const {
            listeners: x
          } = v;
          _.currentTarget = I;
          for (const [B, {
            capture: q,
            passive: M
          }] of x)
            q === b.capture && M === b.passive && B(_);
        }
      }
      I = ut(I);
    }
  }
  function d(g) {
    return u.call(this, g, !0);
  }
  return r;
}
class ps {
  constructor(t) {
    f(this, "currentTarget");
    f(this, "originalEvent");
    f(this, "type");
    this.originalEvent = t, fe(this, t);
  }
  preventOriginalDefault() {
    this.originalEvent.preventDefault();
  }
  stopPropagation() {
    this.originalEvent.stopPropagation();
  }
  stopImmediatePropagation() {
    this.originalEvent.stopImmediatePropagation();
  }
}
function Ft(e) {
  if (!h.object(e))
    return {
      capture: !!e,
      passive: !1
    };
  const t = z({}, e);
  return t.capture = !!e.capture, t.passive = !!e.passive, t;
}
const hs = {
  id: "events",
  install: fs
}, Ve = {
  methodOrder: ["simulationResume", "mouseOrPen", "hasPointer", "idle"],
  search(e) {
    for (const t of Ve.methodOrder) {
      const n = Ve[t](e);
      if (n)
        return n;
    }
    return null;
  },
  simulationResume({
    pointerType: e,
    eventType: t,
    eventTarget: n,
    scope: o
  }) {
    if (!/down|start/i.test(t))
      return null;
    for (const i of o.interactions.list) {
      let r = n;
      if (i.simulation && i.simulation.allowResume && i.pointerType === e)
        for (; r; ) {
          if (r === i.element)
            return i;
          r = ut(r);
        }
    }
    return null;
  },
  mouseOrPen({
    pointerId: e,
    pointerType: t,
    eventType: n,
    scope: o
  }) {
    if (t !== "mouse" && t !== "pen")
      return null;
    let i;
    for (const r of o.interactions.list)
      if (r.pointerType === t) {
        if (r.simulation && !Rn(r, e))
          continue;
        if (r.interacting())
          return r;
        i || (i = r);
      }
    if (i)
      return i;
    for (const r of o.interactions.list)
      if (r.pointerType === t && !(/down/i.test(n) && r.simulation))
        return r;
    return null;
  },
  hasPointer({
    pointerId: e,
    scope: t
  }) {
    for (const n of t.interactions.list)
      if (Rn(n, e))
        return n;
    return null;
  },
  idle({
    pointerType: e,
    scope: t
  }) {
    for (const n of t.interactions.list) {
      if (n.pointers.length === 1) {
        const o = n.interactable;
        if (o && !(o.options.gesture && o.options.gesture.enabled))
          continue;
      } else if (n.pointers.length >= 2)
        continue;
      if (!n.interacting() && e === n.pointerType)
        return n;
    }
    return null;
  }
};
function Rn(e, t) {
  return e.pointers.some(({
    id: n
  }) => n === t);
}
const gs = Ve, No = ["pointerDown", "pointerMove", "pointerUp", "updatePointer", "removePointer", "windowBlur"];
function ms(e) {
  const t = {};
  for (const r of No)
    t[r] = Lo(r, e);
  const n = ct.pEventTypes;
  let o;
  Z.PointerEvent ? o = [{
    type: n.down,
    listener: i
  }, {
    type: n.down,
    listener: t.pointerDown
  }, {
    type: n.move,
    listener: t.pointerMove
  }, {
    type: n.up,
    listener: t.pointerUp
  }, {
    type: n.cancel,
    listener: t.pointerUp
  }] : o = [{
    type: "mousedown",
    listener: t.pointerDown
  }, {
    type: "mousemove",
    listener: t.pointerMove
  }, {
    type: "mouseup",
    listener: t.pointerUp
  }, {
    type: "touchstart",
    listener: i
  }, {
    type: "touchstart",
    listener: t.pointerDown
  }, {
    type: "touchmove",
    listener: t.pointerMove
  }, {
    type: "touchend",
    listener: t.pointerUp
  }, {
    type: "touchcancel",
    listener: t.pointerUp
  }], o.push({
    type: "blur",
    listener(r) {
      for (const s of e.interactions.list)
        s.documentBlur(r);
    }
  }), e.prevTouchTime = 0, e.Interaction = class extends Vr {
    get pointerMoveTolerance() {
      return e.interactions.pointerMoveTolerance;
    }
    set pointerMoveTolerance(r) {
      e.interactions.pointerMoveTolerance = r;
    }
    _now() {
      return e.now();
    }
  }, e.interactions = {
    list: [],
    new(r) {
      r.scopeFire = (a, l) => e.fire(a, l);
      const s = new e.Interaction(r);
      return e.interactions.list.push(s), s;
    },
    listeners: t,
    docEvents: o,
    pointerMoveTolerance: 1
  };
  function i() {
    for (const r of e.interactions.list)
      if (!(!r.pointerIsDown || r.pointerType !== "touch" || r._interacting))
        for (const s of r.pointers)
          e.documents.some(({
            doc: a
          }) => Ct(a, s.downTarget)) || r.removePointer(s.pointer, s.event);
  }
  e.usePlugin(Do);
}
function Lo(e, t) {
  return function(n) {
    const o = t.interactions.list, i = bo(n), [r, s] = xo(n), a = [];
    if (/^touch/.test(n.type)) {
      t.prevTouchTime = t.now();
      for (const l of n.changedTouches) {
        const c = l, u = Jt(c), d = {
          pointer: c,
          pointerId: u,
          pointerType: i,
          eventType: n.type,
          eventTarget: r,
          curEventTarget: s,
          scope: t
        }, g = $n(d);
        a.push([d.pointer, d.eventTarget, d.curEventTarget, g]);
      }
    } else {
      let l = !1;
      if (!ct.supportsPointerEvent && /mouse/.test(n.type)) {
        for (let c = 0; c < o.length && !l; c++)
          l = o[c].pointerType !== "mouse" && o[c].pointerIsDown;
        l = l || t.now() - t.prevTouchTime < 500 || n.timeStamp === 0;
      }
      if (!l) {
        const c = {
          pointer: n,
          pointerId: Jt(n),
          pointerType: i,
          eventType: n.type,
          curEventTarget: s,
          eventTarget: r,
          scope: t
        }, u = $n(c);
        a.push([c.pointer, c.eventTarget, c.curEventTarget, u]);
      }
    }
    for (const [l, c, u, d] of a)
      d[e](l, n, c, u);
  };
}
function $n(e) {
  const {
    pointerType: t,
    scope: n
  } = e, i = {
    interaction: gs.search(e),
    searchDetails: e
  };
  return n.fire("interactions:find", i), i.interaction || n.interactions.new({
    pointerType: t
  });
}
function Oe({
  doc: e,
  scope: t,
  options: n
}, o) {
  const {
    interactions: {
      docEvents: i
    },
    events: r
  } = t, s = r[o];
  t.browser.isIOS && !n.events && (n.events = {
    passive: !1
  });
  for (const l in r.delegatedEvents)
    s(e, l, r.delegateListener), s(e, l, r.delegateUseCapture, !0);
  const a = n && n.events;
  for (const {
    type: l,
    listener: c
  } of i)
    s(e, l, c, a);
}
const vs = {
  id: "core/interactions",
  install: ms,
  listeners: {
    "scope:add-document": (e) => Oe(e, "add"),
    "scope:remove-document": (e) => Oe(e, "remove"),
    "interactable:unset": ({
      interactable: e
    }, t) => {
      for (let n = t.interactions.list.length - 1; n >= 0; n--) {
        const o = t.interactions.list[n];
        o.interactable === e && (o.stop(), t.fire("interactions:destroy", {
          interaction: o
        }), o.destroy(), t.interactions.list.length > 2 && t.interactions.list.splice(n, 1));
      }
    }
  },
  onDocSignal: Oe,
  doOnInteractions: Lo,
  methodNames: No
}, ys = vs;
class bs {
  constructor() {
    f(this, "id", `__interact_scope_${Math.floor(Math.random() * 100)}`);
    f(this, "isInitialized", !1);
    f(this, "listenerMaps", []);
    f(this, "browser", ct);
    f(this, "defaults", jt(ko));
    f(this, "Eventable", $o);
    f(this, "actions", {
      map: {},
      phases: {
        start: !0,
        move: !0,
        end: !0
      },
      methodDict: {},
      phaselessTypes: {}
    });
    f(this, "interactStatic", ls(this));
    f(this, "InteractEvent", rn);
    f(this, "Interactable");
    f(this, "interactables", new ds(this));
    f(this, "_win");
    f(this, "document");
    f(this, "window");
    f(this, "documents", []);
    f(this, "_plugins", {
      list: [],
      map: {}
    });
    f(this, "onWindowUnload", (t) => this.removeDocument(t.target));
    const t = this;
    this.Interactable = class extends us {
      get _defaults() {
        return t.defaults;
      }
      set(n) {
        return super.set(n), t.fire("interactable:set", {
          options: n,
          interactable: this
        }), this;
      }
      unset() {
        super.unset();
        const n = t.interactables.list.indexOf(this);
        n < 0 || (super.unset(), t.interactables.list.splice(n, 1), t.fire("interactable:unset", {
          interactable: this
        }));
      }
    };
  }
  addListeners(t, n) {
    this.listenerMaps.push({
      id: n,
      map: t
    });
  }
  fire(t, n) {
    for (const {
      map: {
        [t]: o
      }
    } of this.listenerMaps)
      if (!!o && o(n, this, t) === !1)
        return !1;
  }
  init(t) {
    return this.isInitialized ? this : xs(this, t);
  }
  pluginIsInstalled(t) {
    return this._plugins.map[t.id] || this._plugins.list.indexOf(t) !== -1;
  }
  usePlugin(t, n) {
    if (!this.isInitialized)
      return this;
    if (this.pluginIsInstalled(t))
      return this;
    if (t.id && (this._plugins.map[t.id] = t), this._plugins.list.push(t), t.install && t.install(this, n), t.listeners && t.before) {
      let o = 0;
      const i = this.listenerMaps.length, r = t.before.reduce((s, a) => (s[a] = !0, s[Nn(a)] = !0, s), {});
      for (; o < i; o++) {
        const s = this.listenerMaps[o].id;
        if (r[s] || r[Nn(s)])
          break;
      }
      this.listenerMaps.splice(o, 0, {
        id: t.id,
        map: t.listeners
      });
    } else
      t.listeners && this.listenerMaps.push({
        id: t.id,
        map: t.listeners
      });
    return this;
  }
  addDocument(t, n) {
    if (this.getDocIndex(t) !== -1)
      return !1;
    const o = vt(t);
    n = n ? z({}, n) : {}, this.documents.push({
      doc: t,
      options: n
    }), this.events.documents.push(t), t !== this.document && this.events.add(o, "unload", this.onWindowUnload), this.fire("scope:add-document", {
      doc: t,
      window: o,
      scope: this,
      options: n
    });
  }
  removeDocument(t) {
    const n = this.getDocIndex(t), o = vt(t), i = this.documents[n].options;
    this.events.remove(o, "unload", this.onWindowUnload), this.documents.splice(n, 1), this.events.documents.splice(n, 1), this.fire("scope:remove-document", {
      doc: t,
      window: o,
      scope: this,
      options: i
    });
  }
  getDocIndex(t) {
    for (let n = 0; n < this.documents.length; n++)
      if (this.documents[n].doc === t)
        return n;
    return -1;
  }
  getDocOptions(t) {
    const n = this.getDocIndex(t);
    return n === -1 ? null : this.documents[n].options;
  }
  now() {
    return (this.window.Date || Date).now();
  }
}
function xs(e, t) {
  return e.isInitialized = !0, h.window(t) && co(t), Z.init(t), ct.init(t), wt.init(t), e.window = t, e.document = t.document, e.usePlugin(ys), e.usePlugin(hs), e;
}
function Nn(e) {
  return e && e.replace(/\/.*$/, "");
}
const Ho = new bs(), ws = Ho.interactStatic, tt = ws, Ss = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : globalThis;
Ho.init(Ss);
const Es = () => {
}, Is = () => {
}, zs = (e) => {
  const t = [["x", "y"], ["left", "top"], ["right", "bottom"], ["width", "height"]].filter(([o, i]) => o in e || i in e), n = (o, i) => {
    const {
      range: r,
      limits: s = {
        left: -1 / 0,
        right: 1 / 0,
        top: -1 / 0,
        bottom: 1 / 0
      },
      offset: a = {
        x: 0,
        y: 0
      }
    } = e, l = {
      range: r,
      grid: e,
      x: null,
      y: null
    };
    for (const [c, u] of t) {
      const d = Math.round((o - a.x) / e[c]), g = Math.round((i - a.y) / e[u]);
      l[c] = Math.max(s.left, Math.min(s.right, d * e[c] + a.x)), l[u] = Math.max(s.top, Math.min(s.bottom, g * e[u] + a.y));
    }
    return l;
  };
  return n.grid = e, n.coordFields = t, n;
}, _s = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  edgeTarget: Es,
  elements: Is,
  grid: zs
}, Symbol.toStringTag, { value: "Module" })), Ts = {
  id: "snappers",
  install(e) {
    const {
      interactStatic: t
    } = e;
    t.snappers = z(t.snappers || {}, _s), t.createSnapGrid = t.snappers.grid;
  }
}, Os = Ts, Ps = {
  start(e) {
    const {
      state: t,
      rect: n,
      edges: o,
      pageCoords: i
    } = e;
    let {
      ratio: r
    } = t.options;
    const {
      equalDelta: s,
      modifiers: a
    } = t.options;
    r === "preserve" && (r = n.width / n.height), t.startCoords = z({}, i), t.startRect = z({}, n), t.ratio = r, t.equalDelta = s;
    const l = t.linkedEdges = {
      top: o.top || o.left && !o.bottom,
      left: o.left || o.top && !o.right,
      bottom: o.bottom || o.right && !o.top,
      right: o.right || o.bottom && !o.left
    };
    if (t.xIsPrimaryAxis = !!(o.left || o.right), t.equalDelta) {
      const u = (l.left ? 1 : -1) * (l.top ? 1 : -1);
      t.edgeSign = {
        x: u,
        y: u
      };
    } else
      t.edgeSign = {
        x: l.left ? -1 : 1,
        y: l.top ? -1 : 1
      };
    if (z(e.edges, l), !a || !a.length)
      return;
    const c = new on(e.interaction);
    c.copyFrom(e.interaction.modification), c.prepareStates(a), t.subModification = c, c.startAll({
      ...e
    });
  },
  set(e) {
    const {
      state: t,
      rect: n,
      coords: o
    } = e, i = z({}, o), r = t.equalDelta ? Ds : Cs;
    if (r(t, t.xIsPrimaryAxis, o, n), !t.subModification)
      return null;
    const s = z({}, n);
    xe(t.linkedEdges, s, {
      x: o.x - i.x,
      y: o.y - i.y
    });
    const a = t.subModification.setAll({
      ...e,
      rect: s,
      edges: t.linkedEdges,
      pageCoords: o,
      prevCoords: o,
      prevRect: s
    }), {
      delta: l
    } = a;
    if (a.changed) {
      const c = Math.abs(l.x) > Math.abs(l.y);
      r(t, c, a.coords, a.rect), z(o, a.coords);
    }
    return a.eventProps;
  },
  defaults: {
    ratio: "preserve",
    equalDelta: !1,
    modifiers: [],
    enabled: !1
  }
};
function Ds({
  startCoords: e,
  edgeSign: t
}, n, o) {
  n ? o.y = e.y + (o.x - e.x) * t.y : o.x = e.x + (o.y - e.y) * t.x;
}
function Cs({
  startRect: e,
  startCoords: t,
  ratio: n,
  edgeSign: o
}, i, r, s) {
  if (i) {
    const a = s.width / n;
    r.y = t.y + (a - e.height) * o.y;
  } else {
    const a = s.height * n;
    r.x = t.x + (a - e.width) * o.x;
  }
}
const Ms = zt(Ps, "aspectRatio"), jo = () => {
};
jo._defaults = {};
const se = jo;
function ks({
  rect: e,
  startOffset: t,
  state: n,
  interaction: o,
  pageCoords: i
}) {
  const {
    options: r
  } = n, {
    elementRect: s
  } = r, a = z({
    left: 0,
    top: 0,
    right: 0,
    bottom: 0
  }, r.offset || {});
  if (e && s) {
    const l = kt(r.restriction, o, i);
    if (l) {
      const c = l.right - l.left - e.width, u = l.bottom - l.top - e.height;
      c < 0 && (a.left += c, a.right += c), u < 0 && (a.top += u, a.bottom += u);
    }
    a.left += t.left - e.width * s.left, a.top += t.top - e.height * s.top, a.right += t.right - e.width * (1 - s.right), a.bottom += t.bottom - e.height * (1 - s.bottom);
  }
  n.offset = a;
}
function As({
  coords: e,
  interaction: t,
  state: n
}) {
  const {
    options: o,
    offset: i
  } = n, r = kt(o.restriction, t, e);
  if (!r)
    return;
  const s = Hi(r);
  e.x = Math.max(Math.min(s.right - i.right, e.x), s.left + i.left), e.y = Math.max(Math.min(s.bottom - i.bottom, e.y), s.top + i.top);
}
function kt(e, t, n) {
  return h.func(e) ? Kt(e, t.interactable, t.element, [n.x, n.y, t]) : Kt(e, t.interactable, t.element);
}
const Rs = {
  restriction: null,
  elementRect: null,
  offset: null,
  endOnly: !1,
  enabled: !1
}, me = {
  start: ks,
  set: As,
  defaults: Rs
}, $s = zt(me, "restrict"), Bo = {
  top: 1 / 0,
  left: 1 / 0,
  bottom: -1 / 0,
  right: -1 / 0
}, Fo = {
  top: -1 / 0,
  left: -1 / 0,
  bottom: 1 / 0,
  right: 1 / 0
};
function Ns({
  interaction: e,
  startOffset: t,
  state: n
}) {
  const {
    options: o
  } = n;
  let i;
  if (o) {
    const r = kt(o.offset, e, e.coords.start.page);
    i = be(r);
  }
  i = i || {
    x: 0,
    y: 0
  }, n.offset = {
    top: i.y + t.top,
    left: i.x + t.left,
    bottom: i.y - t.bottom,
    right: i.x - t.right
  };
}
function Ls({
  coords: e,
  edges: t,
  interaction: n,
  state: o
}) {
  const {
    offset: i,
    options: r
  } = o;
  if (!t)
    return;
  const s = z({}, e), a = kt(r.inner, n, s) || {}, l = kt(r.outer, n, s) || {};
  Ln(a, Bo), Ln(l, Fo), t.top ? e.y = Math.min(Math.max(l.top + i.top, s.y), a.top + i.top) : t.bottom && (e.y = Math.max(Math.min(l.bottom + i.bottom, s.y), a.bottom + i.bottom)), t.left ? e.x = Math.min(Math.max(l.left + i.left, s.x), a.left + i.left) : t.right && (e.x = Math.max(Math.min(l.right + i.right, s.x), a.right + i.right));
}
function Ln(e, t) {
  for (const n of ["top", "left", "bottom", "right"])
    n in e || (e[n] = t[n]);
  return e;
}
const Hs = {
  inner: null,
  outer: null,
  offset: null,
  endOnly: !1,
  enabled: !1
}, Vt = {
  noInner: Bo,
  noOuter: Fo,
  start: Ns,
  set: Ls,
  defaults: Hs
}, js = zt(Vt, "restrictEdges"), Bs = z({
  get elementRect() {
    return {
      top: 0,
      left: 0,
      bottom: 1,
      right: 1
    };
  },
  set elementRect(e) {
  }
}, me.defaults), Fs = {
  start: me.start,
  set: me.set,
  defaults: Bs
}, Ws = zt(Fs, "restrictRect"), qs = {
  width: -1 / 0,
  height: -1 / 0
}, Xs = {
  width: 1 / 0,
  height: 1 / 0
};
function Ys(e) {
  return Vt.start(e);
}
function Gs(e) {
  const {
    interaction: t,
    state: n,
    rect: o,
    edges: i
  } = e, {
    options: r
  } = n;
  if (!i)
    return;
  const s = $e(kt(r.min, t, e.coords)) || qs, a = $e(kt(r.max, t, e.coords)) || Xs;
  n.options = {
    endOnly: r.endOnly,
    inner: z({}, Vt.noInner),
    outer: z({}, Vt.noOuter)
  }, i.top ? (n.options.inner.top = o.bottom - s.height, n.options.outer.top = o.bottom - a.height) : i.bottom && (n.options.inner.bottom = o.top + s.height, n.options.outer.bottom = o.top + a.height), i.left ? (n.options.inner.left = o.right - s.width, n.options.outer.left = o.right - a.width) : i.right && (n.options.inner.right = o.left + s.width, n.options.outer.right = o.left + a.width), Vt.set(e), n.options = r;
}
const Vs = {
  min: null,
  max: null,
  endOnly: !1,
  enabled: !1
}, Us = {
  start: Ys,
  set: Gs,
  defaults: Vs
}, Ks = zt(Us, "restrictSize");
function Js(e) {
  const {
    interaction: t,
    interactable: n,
    element: o,
    rect: i,
    state: r,
    startOffset: s
  } = e, {
    options: a
  } = r, l = a.offsetWithOrigin ? Zs(e) : {
    x: 0,
    y: 0
  };
  let c;
  if (a.offset === "startCoords")
    c = {
      x: t.coords.start.page.x,
      y: t.coords.start.page.y
    };
  else {
    const d = Kt(a.offset, n, o, [t]);
    c = be(d) || {
      x: 0,
      y: 0
    }, c.x += l.x, c.y += l.y;
  }
  const {
    relativePoints: u
  } = a;
  r.offsets = i && u && u.length ? u.map((d, g) => ({
    index: g,
    relativePoint: d,
    x: s.left - i.width * d.x + c.x,
    y: s.top - i.height * d.y + c.y
  })) : [{
    index: 0,
    relativePoint: null,
    x: c.x,
    y: c.y
  }];
}
function Qs(e) {
  const {
    interaction: t,
    coords: n,
    state: o
  } = e, {
    options: i,
    offsets: r
  } = o, s = Zt(t.interactable, t.element, t.prepared.name), a = z({}, n), l = [];
  i.offsetWithOrigin || (a.x -= s.x, a.y -= s.y);
  for (const u of r) {
    const d = a.x - u.x, g = a.y - u.y;
    for (let m = 0, b = i.targets.length; m < b; m++) {
      const _ = i.targets[m];
      let D;
      h.func(_) ? D = _(d, g, t._proxy, u, m) : D = _, D && l.push({
        x: (h.number(D.x) ? D.x : d) + u.x,
        y: (h.number(D.y) ? D.y : g) + u.y,
        range: h.number(D.range) ? D.range : i.range,
        source: _,
        index: m,
        offset: u
      });
    }
  }
  const c = {
    target: null,
    inRange: !1,
    distance: 0,
    range: 0,
    delta: {
      x: 0,
      y: 0
    }
  };
  for (const u of l) {
    const d = u.range, g = u.x - a.x, m = u.y - a.y, b = te(g, m);
    let _ = b <= d;
    d === 1 / 0 && c.inRange && c.range !== 1 / 0 && (_ = !1), (!c.target || (_ ? c.inRange && d !== 1 / 0 ? b / d < c.distance / c.range : d === 1 / 0 && c.range !== 1 / 0 || b < c.distance : !c.inRange && b < c.distance)) && (c.target = u, c.distance = b, c.range = d, c.inRange = _, c.delta.x = g, c.delta.y = m);
  }
  return c.inRange && (n.x = c.target.x, n.y = c.target.y), o.closest = c, c;
}
function Zs(e) {
  const {
    element: t
  } = e.interaction;
  return be(Kt(e.state.options.origin, null, null, [t])) || Zt(e.interactable, t, e.interaction.prepared.name);
}
const ta = {
  range: 1 / 0,
  targets: null,
  offset: null,
  offsetWithOrigin: !0,
  origin: null,
  relativePoints: null,
  endOnly: !1,
  enabled: !1
}, sn = {
  start: Js,
  set: Qs,
  defaults: ta
}, ea = zt(sn, "snap");
function na(e) {
  const {
    state: t,
    edges: n
  } = e, {
    options: o
  } = t;
  if (!n)
    return null;
  e.state = {
    options: {
      targets: null,
      relativePoints: [{
        x: n.left ? 0 : 1,
        y: n.top ? 0 : 1
      }],
      offset: o.offset || "self",
      origin: {
        x: 0,
        y: 0
      },
      range: o.range
    }
  }, t.targetFields = t.targetFields || [["width", "height"], ["x", "y"]], sn.start(e), t.offsets = e.state.offsets, e.state = t;
}
function oa(e) {
  const {
    interaction: t,
    state: n,
    coords: o
  } = e, {
    options: i,
    offsets: r
  } = n, s = {
    x: o.x - r[0].x,
    y: o.y - r[0].y
  };
  n.options = z({}, i), n.options.targets = [];
  for (const l of i.targets || []) {
    let c;
    if (h.func(l) ? c = l(s.x, s.y, t) : c = l, !!c) {
      for (const [u, d] of n.targetFields)
        if (u in c || d in c) {
          c.x = c[u], c.y = c[d];
          break;
        }
      n.options.targets.push(c);
    }
  }
  const a = sn.set(e);
  return n.options = i, a;
}
const ia = {
  range: 1 / 0,
  targets: null,
  offset: null,
  endOnly: !1,
  enabled: !1
}, ve = {
  start: na,
  set: oa,
  defaults: ia
}, ra = zt(ve, "snapSize");
function sa(e) {
  const {
    edges: t
  } = e;
  return t ? (e.state.targetFields = e.state.targetFields || [[t.left ? "left" : "right", t.top ? "top" : "bottom"]], ve.start(e)) : null;
}
const aa = {
  start: sa,
  set: ve.set,
  defaults: z(jt(ve.defaults), {
    targets: null,
    range: null,
    offset: {
      x: 0,
      y: 0
    }
  })
}, ca = zt(aa, "snapEdges"), Pe = {
  aspectRatio: Ms,
  restrictEdges: js,
  restrict: $s,
  restrictRect: Ws,
  restrictSize: Ks,
  snapEdges: ca,
  snap: ea,
  snapSize: ra,
  spring: se,
  avoid: se,
  transform: se,
  rubberband: se
}, la = {
  id: "modifiers",
  install(e) {
    const {
      interactStatic: t
    } = e;
    e.usePlugin(Mo), e.usePlugin(Os), t.modifiers = Pe;
    for (const n in Pe) {
      const {
        _defaults: o,
        _methods: i
      } = Pe[n];
      o._methods = i, e.defaults.perAction[n] = o;
    }
  }
}, ua = la;
class Wo extends we {
  constructor(t, n, o, i, r, s) {
    if (super(r), fe(this, o), o !== n && fe(this, n), this.timeStamp = s, this.originalEvent = o, this.type = t, this.pointerId = Jt(n), this.pointerType = bo(n), this.target = i, this.currentTarget = null, t === "tap") {
      const a = r.getPointerIndex(n);
      this.dt = this.timeStamp - r.pointers[a].downTime;
      const l = this.timeStamp - r.tapTime;
      this.double = !!r.prevTap && r.prevTap.type !== "doubletap" && r.prevTap.target === this.target && l < 500;
    } else
      t === "doubletap" && (this.dt = n.timeStamp - r.tapTime, this.double = !0);
  }
  _subtractOrigin({
    x: t,
    y: n
  }) {
    return this.pageX -= t, this.pageY -= n, this.clientX -= t, this.clientY -= n, this;
  }
  _addOrigin({
    x: t,
    y: n
  }) {
    return this.pageX += t, this.pageY += n, this.clientX += t, this.clientY += n, this;
  }
  preventDefault() {
    this.originalEvent.preventDefault();
  }
}
const da = {
  holdDuration: 600,
  ignoreFrom: null,
  allowFrom: null,
  origin: {
    x: 0,
    y: 0
  }
}, Ut = {
  id: "pointer-events/base",
  before: ["inertia", "modifiers", "auto-start", "actions"],
  install: va,
  listeners: {
    "interactions:new": fa,
    "interactions:update-pointer": pa,
    "interactions:move": ha,
    "interactions:down": (e, t) => {
      ga(e, t), St(e, t);
    },
    "interactions:up": (e, t) => {
      Ue(e), St(e, t), ma(e, t);
    },
    "interactions:cancel": (e, t) => {
      Ue(e), St(e, t);
    }
  },
  PointerEvent: Wo,
  fire: St,
  collectEventTargets: qo,
  defaults: da,
  types: {
    down: !0,
    move: !0,
    up: !0,
    cancel: !0,
    tap: !0,
    doubletap: !0,
    hold: !0
  }
};
function St(e, t) {
  const {
    interaction: n,
    pointer: o,
    event: i,
    eventTarget: r,
    type: s,
    targets: a = qo(e, t)
  } = e, l = new Wo(s, o, i, r, n, t.now());
  t.fire("pointerEvents:new", {
    pointerEvent: l
  });
  const c = {
    interaction: n,
    pointer: o,
    event: i,
    eventTarget: r,
    targets: a,
    type: s,
    pointerEvent: l
  };
  for (let u = 0; u < a.length; u++) {
    const d = a[u];
    for (const m in d.props || {})
      l[m] = d.props[m];
    const g = Zt(d.eventable, d.node);
    if (l._subtractOrigin(g), l.eventable = d.eventable, l.currentTarget = d.node, d.eventable.fire(l), l._addOrigin(g), l.immediatePropagationStopped || l.propagationStopped && u + 1 < a.length && a[u + 1].node !== l.currentTarget)
      break;
  }
  if (t.fire("pointerEvents:fired", c), s === "tap") {
    const u = l.double ? St({
      interaction: n,
      pointer: o,
      event: i,
      eventTarget: r,
      type: "doubletap"
    }, t) : l;
    n.prevTap = u, n.tapTime = u.timeStamp;
  }
  return l;
}
function qo({
  interaction: e,
  pointer: t,
  event: n,
  eventTarget: o,
  type: i
}, r) {
  const s = e.getPointerIndex(t), a = e.pointers[s];
  if (i === "tap" && (e.pointerWasMoved || !(a && a.downTarget === o)))
    return [];
  const l = po(o), c = {
    interaction: e,
    pointer: t,
    event: n,
    eventTarget: o,
    type: i,
    path: l,
    targets: [],
    node: null
  };
  for (const u of l)
    c.node = u, r.fire("pointerEvents:collect-targets", c);
  return i === "hold" && (c.targets = c.targets.filter((u) => {
    var d;
    return u.eventable.options.holdDuration === ((d = e.pointers[s]) == null ? void 0 : d.hold.duration);
  })), c.targets;
}
function fa({
  interaction: e
}) {
  e.prevTap = null, e.tapTime = 0;
}
function pa({
  down: e,
  pointerInfo: t
}) {
  !e && t.hold || (t.hold = {
    duration: 1 / 0,
    timeout: null
  });
}
function Ue({
  interaction: e,
  pointerIndex: t
}) {
  const n = e.pointers[t].hold;
  n && n.timeout && (clearTimeout(n.timeout), n.timeout = null);
}
function ha(e, t) {
  const {
    interaction: n,
    pointer: o,
    event: i,
    eventTarget: r,
    duplicate: s
  } = e;
  !s && (!n.pointerIsDown || n.pointerWasMoved) && (n.pointerIsDown && Ue(e), St({
    interaction: n,
    pointer: o,
    event: i,
    eventTarget: r,
    type: "move"
  }, t));
}
function ga({
  interaction: e,
  pointer: t,
  event: n,
  eventTarget: o,
  pointerIndex: i
}, r) {
  const s = e.pointers[i].hold, a = po(o), l = {
    interaction: e,
    pointer: t,
    event: n,
    eventTarget: o,
    type: "hold",
    targets: [],
    path: a,
    node: null
  };
  for (const u of a)
    l.node = u, r.fire("pointerEvents:collect-targets", l);
  if (!l.targets.length)
    return;
  let c = 1 / 0;
  for (const u of l.targets) {
    const d = u.eventable.options.holdDuration;
    d < c && (c = d);
  }
  s.duration = c, s.timeout = setTimeout(() => {
    St({
      interaction: e,
      eventTarget: o,
      pointer: t,
      event: n,
      type: "hold"
    }, r);
  }, c);
}
function ma({
  interaction: e,
  pointer: t,
  event: n,
  eventTarget: o
}, i) {
  e.pointerWasMoved || St({
    interaction: e,
    eventTarget: o,
    pointer: t,
    event: n,
    type: "tap"
  }, i);
}
function va(e) {
  e.pointerEvents = Ut, e.defaults.actions.pointerEvents = Ut.defaults, z(e.actions.phaselessTypes, Ut.types);
}
const ya = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ut
}, Symbol.toStringTag, { value: "Module" }));
function ba(e) {
  e.usePlugin(Ut);
  const {
    pointerEvents: t
  } = e;
  t.defaults.holdRepeatInterval = 0, t.types.holdrepeat = e.actions.phaselessTypes.holdrepeat = !0;
}
function xa({
  pointerEvent: e
}) {
  e.type === "hold" && (e.count = (e.count || 0) + 1);
}
function wa({
  interaction: e,
  pointerEvent: t,
  eventTarget: n,
  targets: o
}, i) {
  if (t.type !== "hold" || !o.length)
    return;
  const r = o[0].eventable.options.holdRepeatInterval;
  r <= 0 || (e.holdIntervalHandle = setTimeout(() => {
    i.pointerEvents.fire({
      interaction: e,
      eventTarget: n,
      type: "hold",
      pointer: t,
      event: t
    }, i);
  }, r));
}
function Sa({
  interaction: e
}) {
  e.holdIntervalHandle && (clearInterval(e.holdIntervalHandle), e.holdIntervalHandle = null);
}
const Ea = {
  id: "pointer-events/holdRepeat",
  install: ba,
  listeners: ["move", "up", "cancel", "endall"].reduce((e, t) => (e[`pointerEvents:${t}`] = Sa, e), {
    "pointerEvents:new": xa,
    "pointerEvents:fired": wa
  })
}, Ia = Ea;
function za(e) {
  const {
    Interactable: t
  } = e;
  t.prototype.pointerEvents = _a;
  const n = t.prototype._backCompatOption;
  t.prototype._backCompatOption = function(o, i) {
    const r = n.call(this, o, i);
    return r === this && (this.events.options[o] = i), r;
  };
}
function _a(e) {
  return z(this.events.options, e), this;
}
const Ta = {
  id: "pointer-events/interactableTargets",
  install: za,
  listeners: {
    "pointerEvents:collect-targets": ({
      targets: e,
      node: t,
      type: n,
      eventTarget: o
    }, i) => {
      i.interactables.forEachMatch(t, (r) => {
        const s = r.events, a = s.options;
        s.types[n] && s.types[n].length && r.testIgnoreAllow(a, t, o) && e.push({
          node: t,
          eventable: s,
          props: {
            interactable: r
          }
        });
      });
    },
    "interactable:new": ({
      interactable: e
    }) => {
      e.events.getRect = function(t) {
        return e.getRect(t);
      };
    },
    "interactable:set": ({
      interactable: e,
      options: t
    }, n) => {
      z(e.events.options, n.pointerEvents.defaults), z(e.events.options, t.pointerEvents || {});
    }
  }
}, Oa = Ta, Pa = {
  id: "pointer-events",
  install(e) {
    e.usePlugin(ya), e.usePlugin(Ia), e.usePlugin(Oa);
  }
}, Da = Pa;
function Ca(e) {
  const {
    Interactable: t
  } = e;
  e.actions.phases.reflow = !0, t.prototype.reflow = function(n) {
    return Ma(this, n, e);
  };
}
function Ma(e, t, n) {
  const o = h.string(e.target) ? tn(e._context.querySelectorAll(e.target)) : [e.target], i = n.window.Promise, r = i ? [] : null;
  for (const s of o) {
    const a = e.getRect(s);
    if (!a)
      break;
    const l = he(n.interactions.list, (u) => u.interacting() && u.interactable === e && u.element === s && u.prepared.name === t.name);
    let c;
    if (l)
      l.move(), r && (c = l._reflowPromise || new i((u) => {
        l._reflowResolve = u;
      }));
    else {
      const u = $e(a), d = {
        page: {
          x: u.x,
          y: u.y
        },
        client: {
          x: u.x,
          y: u.y
        },
        timeStamp: n.now()
      }, g = qi(d);
      c = ka(n, e, s, t, g);
    }
    r && r.push(c);
  }
  return r && i.all(r).then(() => e);
}
function ka(e, t, n, o, i) {
  const r = e.interactions.new({
    pointerType: "reflow"
  }), s = {
    interaction: r,
    event: i,
    pointer: i,
    eventTarget: n,
    phase: "reflow"
  };
  r.interactable = t, r.element = n, r.prevEvent = i, r.updatePointer(i, i, n, !0), go(r.coords.delta), en(r.prepared, o), r._doPhase(s);
  const {
    Promise: a
  } = e.window, l = a ? new a((c) => {
    r._reflowResolve = c;
  }) : void 0;
  return r._reflowPromise = l, r.start(o, t, n), r._interacting ? (r.move(s), r.end(i)) : (r.stop(), r._reflowResolve()), r.removePointer(i, i), l;
}
const Aa = {
  id: "reflow",
  install: Ca,
  listeners: {
    "interactions:stop": ({
      interaction: e
    }, t) => {
      e.pointerType === "reflow" && (e._reflowResolve && e._reflowResolve(), Yi(t.interactions.list, e));
    }
  }
}, Ra = Aa;
tt.use(Do);
tt.use(Ro);
tt.use(Da);
tt.use(cs);
tt.use(ua);
tt.use(Mr);
tt.use(lr);
tt.use(pr);
tt.use(Ra);
tt.use(Fr);
if (typeof module == "object" && !!module)
  try {
    module.exports = tt;
  } catch {
  }
tt.default = tt;
const $a = (e) => !isNaN(e), Na = (e) => {
  const t = e.target.offsetParent || document.body, n = e.offsetParent === document.body ? { left: 0, top: 0 } : t.getBoundingClientRect(), o = e.clientX + t.scrollLeft - n.left, i = e.clientY + t.scrollTop - n.top;
  return { x: o, y: i };
}, Hn = (e, t, n, o) => !$a(e) ? { deltaX: 0, deltaY: 0, lastX: n, lastY: o, x: n, y: o } : { deltaX: n - e, deltaY: o - t, lastX: e, lastY: t, x: n, y: o }, jn = (e) => Na(e), Ke = /* @__PURE__ */ Kn({
  __name: "GridItem",
  props: {
    breakpointCols: {
      required: !0,
      type: Object
    },
    colNum: {
      required: !0,
      type: Number
    },
    containerWidth: {
      required: !0,
      type: Number
    },
    h: {
      required: !0,
      type: Number
    },
    i: {
      required: !0,
      type: Number
    },
    isDraggable: {
      required: !0,
      type: Boolean
    },
    isResizable: {
      required: !0,
      type: Boolean
    },
    lastBreakpoint: {
      required: !0,
      type: String
    },
    margin: {
      required: !0,
      type: Array
    },
    maxH: {
      default: 1 / 0,
      type: Number
    },
    maxRows: {
      required: !0,
      type: Number
    },
    maxW: {
      default: 1 / 0,
      type: Number
    },
    minH: {
      default: 1,
      type: Number
    },
    minW: {
      default: 1,
      type: Number
    },
    observer: {
      default: void 0,
      type: [IntersectionObserver, void 0]
    },
    rowHeight: {
      required: !0,
      type: Number
    },
    static: {
      default: !1,
      type: Boolean
    },
    useCssTransforms: {
      required: !0,
      type: Boolean
    },
    w: {
      required: !0,
      type: Number
    },
    x: {
      required: !0,
      type: Number
    },
    y: {
      required: !0,
      type: Number
    }
  },
  emits: ["container-resized", "resize", "resized", "move", "moved", "drag-event", "resize-event"],
  setup(e, { expose: t, emit: n }) {
    const o = e, i = G(null), r = ni(to), s = "vue-resizable-handle", a = G(o.colNum), l = G(!1), c = G({}), u = G({ h: o.h, w: o.w, x: o.x, y: o.y }), d = G(null), g = G(!1), m = G(!1), b = G({ h: NaN, w: NaN, x: NaN, y: NaN }), _ = G({ h: NaN, w: NaN, x: NaN, y: NaN }), D = G(!1), T = G(null), I = oi({ props: {} }), k = ae(() => ({
      "css-transforms": o.useCssTransforms,
      "disable-user-select": g.value,
      "no-touch": v.value,
      resizing: m.value,
      static: o.static,
      "vue-draggable-dragging": g.value,
      "vue-resizable": p.value
    })), v = ae(() => {
      const y = (o.isDraggable || o.isResizable) && !o.static, $ = navigator.userAgent.toLowerCase().indexOf("android") !== -1;
      return y && $;
    }), p = ae(() => o.isResizable && !o.static);
    U(() => o.observer, () => {
      o.observer && i.value && (o.observer.observe(i.value), i.value.__INTERSECTION_OBSERVER_INDEX__ = o.i);
    }), U(() => a.value, () => {
      O(), X();
    }), U(() => o.containerWidth, () => {
      O(), X();
    }), U(() => o.h, (y) => {
      u.value.h = y, X();
    }), U(() => o.isDraggable, () => {
      S();
    }), U(() => o.isResizable, () => {
      O();
    }), U(() => o.maxH, () => {
      O();
    }), U(() => o.maxW, () => {
      O();
    }), U(() => o.minH, () => {
      O();
    }), U(() => o.minW, () => {
      O();
    }), U(() => o.rowHeight, () => {
      X();
    }), U(() => o.static, () => {
      O(), S();
    }), U(() => o.w, (y) => {
      u.value.w = y, M();
    }), U(() => o.x, (y) => {
      u.value.x = y, M();
    }), U(() => o.y, (y) => {
      u.value.y = y, M();
    });
    const A = () => {
      const [y] = o.margin;
      return (o.containerWidth - y * (a.value + 1)) / a.value;
    }, x = (y, $, N, L) => {
      const E = A(), [C, V] = o.margin;
      return {
        height: L === 1 / 0 ? L : Math.round(o.rowHeight * L + Math.max(0, L - 1) * V),
        left: Math.round(E * y + (y + 1) * V),
        top: Math.round(o.rowHeight * $ + ($ + 1) * V),
        width: N === 1 / 0 ? N : Math.round(E * N + Math.max(0, N - 1) * C)
      };
    }, B = (y, $) => {
      const N = A(), [L, E] = o.margin, C = Math.round(($ + L) / (N + L)), V = Math.round((y + E) / (o.rowHeight + E));
      return {
        h: Math.max(Math.min(V, o.maxRows - u.value.y), 0),
        w: Math.max(Math.min(C, a.value - u.value.x), 0)
      };
    }, q = (y, $) => {
      const N = A(), [L, E] = o.margin, C = Math.round(($ - L) / (N + L)), V = Math.round((y - E) / (o.rowHeight + E));
      return {
        x: Math.max(Math.min(C, a.value - u.value.w), 0),
        y: Math.max(Math.min(V, o.maxRows - u.value.h), 0)
      };
    }, M = () => {
      var $, N, L, E, C, V;
      const y = x(u.value.x, u.value.y, u.value.w, u.value.h);
      o.x + o.w > a.value ? (u.value.x = 0, u.value.w = o.w > a.value ? a.value : o.w) : (u.value.x = o.x, u.value.w = o.w), g.value && (y.top = ($ = c.value.top) != null ? $ : 0, y.left = (N = c.value.left) != null ? N : 0), m.value && (y.width = (E = (L = T == null ? void 0 : T.value) == null ? void 0 : L.width) != null ? E : 0, y.height = (V = (C = T == null ? void 0 : T.value) == null ? void 0 : C.height) != null ? V : 0), I.props = o.useCssTransforms ? xi(y.top, y.left, y.width, y.height) : bi(y.top, y.left, y.width, y.height);
    }, X = () => {
      M();
      const y = {};
      for (const $ of ["width", "height"]) {
        const N = I.props[$], L = N == null ? void 0 : N.toString().match(/^(\d+)px$/);
        if (!L)
          return;
        y[$] = +L[1];
      }
      n("container-resized", {
        h: o.h,
        height: y.height,
        i: o.i,
        w: o.w,
        width: y.width
      });
    }, R = (y) => {
      var V, et, ot, it;
      if (o.static || m.value)
        return;
      const $ = jn(y);
      if (!$)
        return;
      const { x: N, y: L } = $, E = { left: 0, top: 0 };
      switch (y.type) {
        case "dragstart": {
          _.value.x = u.value.x, _.value.y = u.value.y;
          const J = y.target.offsetParent.getBoundingClientRect(), w = y.target.getBoundingClientRect();
          E.left = w.left - J.left, E.top = w.top - J.top, c.value = E, g.value = !0;
          break;
        }
        case "dragend": {
          if (!g.value)
            return;
          const J = y.target.offsetParent.getBoundingClientRect(), w = y.target.getBoundingClientRect();
          E.left = w.left - J.left, E.top = w.top - J.top, c.value = {}, g.value = !1;
          break;
        }
        case "dragmove": {
          const J = Hn(b.value.x, b.value.y, N, L);
          E.left = ((et = (V = c == null ? void 0 : c.value) == null ? void 0 : V.left) != null ? et : 0) + J.deltaX, E.top = ((it = (ot = c == null ? void 0 : c.value) == null ? void 0 : ot.top) != null ? it : 0) + J.deltaY, c.value = E;
          break;
        }
      }
      const C = q(E.top, E.left);
      b.value.x = N, b.value.y = L, (u.value.x !== C.x || u.value.y !== C.y) && n("move", o.i, C.x, C.y), y.type === "dragend" && (_.value.x !== u.value.x || _.value.y !== u.value.y) && n("moved", o.i, C.x, C.y), r == null || r.emit("drag-event", [y.type, o.i, C.x, C.y, u.value.h, u.value.w]);
    }, H = (y) => {
      var V, et, ot, it;
      if (o.static)
        return;
      const $ = jn(y);
      if (!$)
        return;
      const { x: N, y: L } = $, E = { height: 0, width: 0 };
      switch (y.type) {
        case "resizestart": {
          _.value.w = u.value.w, _.value.h = u.value.h;
          const { height: J, width: w } = x(u.value.x, u.value.y, u.value.w, u.value.h);
          E.width = w, E.height = J, T.value = E, m.value = !0;
          break;
        }
        case "resizemove": {
          const J = Hn(b.value.x, b.value.h, N, L);
          E.width = ((et = (V = T == null ? void 0 : T.value) == null ? void 0 : V.width) != null ? et : 0) + J.deltaX, E.height = ((it = (ot = T == null ? void 0 : T.value) == null ? void 0 : ot.height) != null ? it : 0) + J.deltaY, T.value = E, m.value = !0;
          break;
        }
        case "resizeend": {
          const { height: J, width: w } = x(u.value.x, u.value.y, u.value.w, u.value.h);
          E.width = w, E.height = J, T.value = null, m.value = !1;
          break;
        }
      }
      const C = B(E.height, E.width);
      C.w < o.minW && (C.w = o.minW), C.w > o.maxW && (C.w = o.maxW), C.h < o.minH && (C.h = o.minH), C.h > o.maxH && (C.h = o.maxH), C.h < 1 && (C.h = 1), C.w < 1 && (C.w = 1), b.value.x = N, b.value.h = L, (u.value.w !== C.w || u.value.h !== C.h) && n("resize", o.i, C.h, C.w, E.height, E.width), y.type === "resizeend" && (_.value.w !== u.value.w || _.value.h !== u.value.h) && n("resized", o.i, C.h, C.w, E.height, E.width), r == null || r.emit("resize-event", [y.type, o.i, u.value.x, u.value.y, C.h, C.w]);
    }, K = (y) => {
      a.value = y;
    }, S = () => {
      !d.value && i.value && (d.value = tt(i.value)), o.isDraggable && !o.static ? (d.value.draggable({ ignoreFrom: "a, button" }), l.value || (l.value = !0, d.value.on("dragstart dragmove dragend", R))) : d.value.draggable({ enabled: !1 });
    }, O = () => {
      if (!d.value && i.value && (d.value = tt(i.value)), o.isResizable && !o.static) {
        const y = `.${wi(s, " ", ".")}`, $ = x(0, 0, o.maxW, o.maxH), N = x(0, 0, o.minW, o.minH), L = {
          edges: { bottom: y, left: !1, right: y, top: !1 },
          ignoreFrom: "a, button",
          restrictSize: {
            max: { height: $.height, width: $.width },
            min: { height: N.height, width: N.width }
          }
        };
        d.value.resizable(L), D.value || (D.value = !0, d.value.on("resizestart resizemove resizeend", H));
      } else
        d.value.resizable({ enabled: !1 });
    };
    return (() => {
      r == null || r.on("recalculate-styles", M), r == null || r.on("set-col-num", K);
    })(), Jn(() => {
      r == null || r.off("recalculate-styles", M), r == null || r.off("set-col-num", K), d.value && d.value.unset(), o.observer && o.observer.unobserve(i.value);
    }), Qn(() => {
      o.lastBreakpoint && (a.value = ke(o.lastBreakpoint, o.breakpointCols)), S(), M();
    }), t({
      createStyle: M,
      handleDrag: R,
      handleResize: H,
      tryMakeDraggable: S,
      tryMakeResizable: O
    }), (y, $) => (Yt(), ue("div", {
      ref_key: "item",
      ref: i,
      class: hn(["vue-grid-item", Dt(k)]),
      style: Zn(I.props)
    }, [
      De(y.$slots, "default"),
      Dt(p) ? (Yt(), ue("span", {
        key: 0,
        class: hn(s)
      })) : ii("", !0)
    ], 6));
  }
});
var an = { exports: {} }, La = an.exports = {};
La.forEach = function(e, t) {
  for (var n = 0; n < e.length; n++) {
    var o = t(e[n]);
    if (o)
      return o;
  }
};
var Ha = function(e) {
  var t = e.stateHandler.getState;
  function n(s) {
    var a = t(s);
    return a && !!a.isDetectable;
  }
  function o(s) {
    t(s).isDetectable = !0;
  }
  function i(s) {
    return !!t(s).busy;
  }
  function r(s, a) {
    t(s).busy = !!a;
  }
  return {
    isDetectable: n,
    markAsDetectable: o,
    isBusy: i,
    markBusy: r
  };
}, ja = function(e) {
  var t = {};
  function n(s) {
    var a = e.get(s);
    return a === void 0 ? [] : t[a] || [];
  }
  function o(s, a) {
    var l = e.get(s);
    t[l] || (t[l] = []), t[l].push(a);
  }
  function i(s, a) {
    for (var l = n(s), c = 0, u = l.length; c < u; ++c)
      if (l[c] === a) {
        l.splice(c, 1);
        break;
      }
  }
  function r(s) {
    var a = n(s);
    !a || (a.length = 0);
  }
  return {
    get: n,
    add: o,
    removeListener: i,
    removeAllListeners: r
  };
}, Ba = function() {
  var e = 1;
  function t() {
    return e++;
  }
  return {
    generate: t
  };
}, Fa = function(e) {
  var t = e.idGenerator, n = e.stateHandler.getState;
  function o(r) {
    var s = n(r);
    return s && s.id !== void 0 ? s.id : null;
  }
  function i(r) {
    var s = n(r);
    if (!s)
      throw new Error("setId required the element to have a resize detection state.");
    var a = t.generate();
    return s.id = a, a;
  }
  return {
    get: o,
    set: i
  };
}, Wa = function(e) {
  function t() {
  }
  var n = {
    log: t,
    warn: t,
    error: t
  };
  if (!e && window.console) {
    var o = function(i, r) {
      i[r] = function() {
        var a = console[r];
        if (a.apply)
          a.apply(console, arguments);
        else
          for (var l = 0; l < arguments.length; l++)
            a(arguments[l]);
      };
    };
    o(n, "log"), o(n, "warn"), o(n, "error");
  }
  return n;
}, cn = { exports: {} }, Xo = cn.exports = {};
Xo.isIE = function(e) {
  function t() {
    var o = navigator.userAgent.toLowerCase();
    return o.indexOf("msie") !== -1 || o.indexOf("trident") !== -1 || o.indexOf(" edge/") !== -1;
  }
  if (!t())
    return !1;
  if (!e)
    return !0;
  var n = function() {
    var o, i = 3, r = document.createElement("div"), s = r.getElementsByTagName("i");
    do
      r.innerHTML = "<!--[if gt IE " + ++i + "]><i></i><![endif]-->";
    while (s[0]);
    return i > 4 ? i : o;
  }();
  return e === n;
};
Xo.isLegacyOpera = function() {
  return !!window.opera;
};
var Yo = { exports: {} }, qa = Yo.exports = {};
qa.getOption = Xa;
function Xa(e, t, n) {
  var o = e[t];
  return o == null && n !== void 0 ? n : o;
}
var Bn = Yo.exports, Ya = function(t) {
  t = t || {};
  var n = t.reporter, o = Bn.getOption(t, "async", !0), i = Bn.getOption(t, "auto", !0);
  i && !o && (n && n.warn("Invalid options combination. auto=true and async=false is invalid. Setting async=true."), o = !0);
  var r = Fn(), s, a = !1;
  function l(b, _) {
    !a && i && o && r.size() === 0 && d(), r.add(b, _);
  }
  function c() {
    for (a = !0; r.size(); ) {
      var b = r;
      r = Fn(), b.process();
    }
    a = !1;
  }
  function u(b) {
    a || (b === void 0 && (b = o), s && (g(s), s = null), b ? d() : c());
  }
  function d() {
    s = m(c);
  }
  function g(b) {
    var _ = clearTimeout;
    return _(b);
  }
  function m(b) {
    var _ = function(D) {
      return setTimeout(D, 0);
    };
    return _(b);
  }
  return {
    add: l,
    force: u
  };
};
function Fn() {
  var e = {}, t = 0, n = 0, o = 0;
  function i(a, l) {
    l || (l = a, a = 0), a > n ? n = a : a < o && (o = a), e[a] || (e[a] = []), e[a].push(l), t++;
  }
  function r() {
    for (var a = o; a <= n; a++)
      for (var l = e[a], c = 0; c < l.length; c++) {
        var u = l[c];
        u();
      }
  }
  function s() {
    return t;
  }
  return {
    add: i,
    process: r,
    size: s
  };
}
var ln = "_erd";
function Ga(e) {
  return e[ln] = {}, Go(e);
}
function Go(e) {
  return e[ln];
}
function Va(e) {
  delete e[ln];
}
var Ua = {
  initState: Ga,
  getState: Go,
  cleanState: Va
}, Wt = cn.exports, Ka = function(e) {
  e = e || {};
  var t = e.reporter, n = e.batchProcessor, o = e.stateHandler.getState;
  if (!t)
    throw new Error("Missing required dependency: reporter.");
  function i(c, u) {
    function d() {
      u(c);
    }
    if (Wt.isIE(8))
      o(c).object = {
        proxy: d
      }, c.attachEvent("onresize", d);
    else {
      var g = a(c);
      if (!g)
        throw new Error("Element is not detectable by this strategy.");
      g.contentDocument.defaultView.addEventListener("resize", d);
    }
  }
  function r(c) {
    var u = e.important ? " !important; " : "; ";
    return (c.join(u) + u).trim();
  }
  function s(c, u, d) {
    d || (d = u, u = c, c = null), c = c || {}, c.debug;
    function g(m, b) {
      var _ = r(["display: block", "position: absolute", "top: 0", "left: 0", "width: 100%", "height: 100%", "border: none", "padding: 0", "margin: 0", "opacity: 0", "z-index: -1000", "pointer-events: none"]), D = !1, T = window.getComputedStyle(m), I = m.offsetWidth, k = m.offsetHeight;
      o(m).startSize = {
        width: I,
        height: k
      };
      function v() {
        function p() {
          if (T.position === "static") {
            m.style.setProperty("position", "relative", c.important ? "important" : "");
            var B = function(q, M, X, R) {
              function H(S) {
                return S.replace(/[^-\d\.]/g, "");
              }
              var K = X[R];
              K !== "auto" && H(K) !== "0" && (q.warn("An element that is positioned static has style." + R + "=" + K + " which is ignored due to the static positioning. The element will need to be positioned relative, so the style." + R + " will be set to 0. Element: ", M), M.style.setProperty(R, "0", c.important ? "important" : ""));
            };
            B(t, m, T, "top"), B(t, m, T, "right"), B(t, m, T, "bottom"), B(t, m, T, "left");
          }
        }
        function A() {
          D || p();
          function B(M, X) {
            if (!M.contentDocument) {
              var R = o(M);
              R.checkForObjectDocumentTimeoutId && window.clearTimeout(R.checkForObjectDocumentTimeoutId), R.checkForObjectDocumentTimeoutId = setTimeout(function() {
                R.checkForObjectDocumentTimeoutId = 0, B(M, X);
              }, 100);
              return;
            }
            X(M.contentDocument);
          }
          var q = this;
          B(q, function(X) {
            b(m);
          });
        }
        T.position !== "" && (p(), D = !0);
        var x = document.createElement("object");
        x.style.cssText = _, x.tabIndex = -1, x.type = "text/html", x.setAttribute("aria-hidden", "true"), x.onload = A, Wt.isIE() || (x.data = "about:blank"), o(m) && (m.appendChild(x), o(m).object = x, Wt.isIE() && (x.data = "about:blank"));
      }
      n ? n.add(v) : v();
    }
    Wt.isIE(8) ? d(u) : g(u, d);
  }
  function a(c) {
    return o(c).object;
  }
  function l(c) {
    if (!!o(c)) {
      var u = a(c);
      !u || (Wt.isIE(8) ? c.detachEvent("onresize", u.proxy) : c.removeChild(u), o(c).checkForObjectDocumentTimeoutId && window.clearTimeout(o(c).checkForObjectDocumentTimeoutId), delete o(c).object);
    }
  }
  return {
    makeDetectable: s,
    addListener: i,
    uninstall: l
  };
}, Ja = an.exports.forEach, Qa = function(e) {
  e = e || {};
  var t = e.reporter, n = e.batchProcessor, o = e.stateHandler.getState;
  e.stateHandler.hasState;
  var i = e.idHandler;
  if (!n)
    throw new Error("Missing required dependency: batchProcessor");
  if (!t)
    throw new Error("Missing required dependency: reporter.");
  var r = u(), s = "erd_scroll_detection_scrollbar_style", a = "erd_scroll_detection_container";
  function l(v) {
    d(v, s, a);
  }
  l(window.document);
  function c(v) {
    var p = e.important ? " !important; " : "; ";
    return (v.join(p) + p).trim();
  }
  function u() {
    var v = 500, p = 500, A = document.createElement("div");
    A.style.cssText = c(["position: absolute", "width: " + v * 2 + "px", "height: " + p * 2 + "px", "visibility: hidden", "margin: 0", "padding: 0"]);
    var x = document.createElement("div");
    x.style.cssText = c(["position: absolute", "width: " + v + "px", "height: " + p + "px", "overflow: scroll", "visibility: none", "top: " + -v * 3 + "px", "left: " + -p * 3 + "px", "visibility: hidden", "margin: 0", "padding: 0"]), x.appendChild(A), document.body.insertBefore(x, document.body.firstChild);
    var B = v - x.clientWidth, q = p - x.clientHeight;
    return document.body.removeChild(x), {
      width: B,
      height: q
    };
  }
  function d(v, p, A) {
    function x(X, R) {
      R = R || function(K) {
        v.head.appendChild(K);
      };
      var H = v.createElement("style");
      return H.innerHTML = X, H.id = p, R(H), H;
    }
    if (!v.getElementById(p)) {
      var B = A + "_animation", q = A + "_animation_active", M = `/* Created by the element-resize-detector library. */
`;
      M += "." + A + " > div::-webkit-scrollbar { " + c(["display: none"]) + ` }

`, M += "." + q + " { " + c(["-webkit-animation-duration: 0.1s", "animation-duration: 0.1s", "-webkit-animation-name: " + B, "animation-name: " + B]) + ` }
`, M += "@-webkit-keyframes " + B + ` { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }
`, M += "@keyframes " + B + " { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }", x(M);
    }
  }
  function g(v) {
    v.className += " " + a + "_animation_active";
  }
  function m(v, p, A) {
    if (v.addEventListener)
      v.addEventListener(p, A);
    else if (v.attachEvent)
      v.attachEvent("on" + p, A);
    else
      return t.error("[scroll] Don't know how to add event listeners.");
  }
  function b(v, p, A) {
    if (v.removeEventListener)
      v.removeEventListener(p, A);
    else if (v.detachEvent)
      v.detachEvent("on" + p, A);
    else
      return t.error("[scroll] Don't know how to remove event listeners.");
  }
  function _(v) {
    return o(v).container.childNodes[0].childNodes[0].childNodes[0];
  }
  function D(v) {
    return o(v).container.childNodes[0].childNodes[0].childNodes[1];
  }
  function T(v, p) {
    var A = o(v).listeners;
    if (!A.push)
      throw new Error("Cannot add listener to an element that is not detectable.");
    o(v).listeners.push(p);
  }
  function I(v, p, A) {
    A || (A = p, p = v, v = null), v = v || {};
    function x() {
      if (v.debug) {
        var w = Array.prototype.slice.call(arguments);
        if (w.unshift(i.get(p), "Scroll: "), t.log.apply)
          t.log.apply(null, w);
        else
          for (var j = 0; j < w.length; j++)
            t.log(w[j]);
      }
    }
    function B(w) {
      function j(Y) {
        var lt = Y.getRootNode && Y.getRootNode().contains(Y);
        return Y === Y.ownerDocument.body || Y.ownerDocument.body.contains(Y) || lt;
      }
      return !j(w) || window.getComputedStyle(w) === null;
    }
    function q(w) {
      var j = o(w).container.childNodes[0], Y = window.getComputedStyle(j);
      return !Y.width || Y.width.indexOf("px") === -1;
    }
    function M() {
      var w = window.getComputedStyle(p), j = {};
      return j.position = w.position, j.width = p.offsetWidth, j.height = p.offsetHeight, j.top = w.top, j.right = w.right, j.bottom = w.bottom, j.left = w.left, j.widthCSS = w.width, j.heightCSS = w.height, j;
    }
    function X() {
      var w = M();
      o(p).startSize = {
        width: w.width,
        height: w.height
      }, x("Element start size", o(p).startSize);
    }
    function R() {
      o(p).listeners = [];
    }
    function H() {
      if (x("storeStyle invoked."), !o(p)) {
        x("Aborting because element has been uninstalled");
        return;
      }
      var w = M();
      o(p).style = w;
    }
    function K(w, j, Y) {
      o(w).lastWidth = j, o(w).lastHeight = Y;
    }
    function S(w) {
      return _(w).childNodes[0];
    }
    function O() {
      return 2 * r.width + 1;
    }
    function W() {
      return 2 * r.height + 1;
    }
    function y(w) {
      return w + 10 + O();
    }
    function $(w) {
      return w + 10 + W();
    }
    function N(w) {
      return w * 2 + O();
    }
    function L(w) {
      return w * 2 + W();
    }
    function E(w, j, Y) {
      var lt = _(w), _t = D(w), At = y(j), Rt = $(Y), nt = N(j), F = L(Y);
      lt.scrollLeft = At, lt.scrollTop = Rt, _t.scrollLeft = nt, _t.scrollTop = F;
    }
    function C() {
      var w = o(p).container;
      if (!w) {
        w = document.createElement("div"), w.className = a, w.style.cssText = c(["visibility: hidden", "display: inline", "width: 0px", "height: 0px", "z-index: -1", "overflow: hidden", "margin: 0", "padding: 0"]), o(p).container = w, g(w), p.appendChild(w);
        var j = function() {
          o(p).onRendered && o(p).onRendered();
        };
        m(w, "animationstart", j), o(p).onAnimationStart = j;
      }
      return w;
    }
    function V() {
      function w() {
        var Q = o(p).style;
        if (Q.position === "static") {
          p.style.setProperty("position", "relative", v.important ? "important" : "");
          var pt = function(Nt, Ot, Jo, oe) {
            function Qo(Zo) {
              return Zo.replace(/[^-\d\.]/g, "");
            }
            var Ee = Jo[oe];
            Ee !== "auto" && Qo(Ee) !== "0" && (Nt.warn("An element that is positioned static has style." + oe + "=" + Ee + " which is ignored due to the static positioning. The element will need to be positioned relative, so the style." + oe + " will be set to 0. Element: ", Ot), Ot.style[oe] = 0);
          };
          pt(t, p, Q, "top"), pt(t, p, Q, "right"), pt(t, p, Q, "bottom"), pt(t, p, Q, "left");
        }
      }
      function j(Q, pt, Nt, Ot) {
        return Q = Q ? Q + "px" : "0", pt = pt ? pt + "px" : "0", Nt = Nt ? Nt + "px" : "0", Ot = Ot ? Ot + "px" : "0", ["left: " + Q, "top: " + pt, "right: " + Ot, "bottom: " + Nt];
      }
      if (x("Injecting elements"), !o(p)) {
        x("Aborting because element has been uninstalled");
        return;
      }
      w();
      var Y = o(p).container;
      Y || (Y = C());
      var lt = r.width, _t = r.height, At = c(["position: absolute", "flex: none", "overflow: hidden", "z-index: -1", "visibility: hidden", "width: 100%", "height: 100%", "left: 0px", "top: 0px"]), Rt = c(["position: absolute", "flex: none", "overflow: hidden", "z-index: -1", "visibility: hidden"].concat(j(-(1 + lt), -(1 + _t), -_t, -lt))), nt = c(["position: absolute", "flex: none", "overflow: scroll", "z-index: -1", "visibility: hidden", "width: 100%", "height: 100%"]), F = c(["position: absolute", "flex: none", "overflow: scroll", "z-index: -1", "visibility: hidden", "width: 100%", "height: 100%"]), rt = c(["position: absolute", "left: 0", "top: 0"]), Tt = c(["position: absolute", "width: 200%", "height: 200%"]), dt = document.createElement("div"), ft = document.createElement("div"), $t = document.createElement("div"), un = document.createElement("div"), ne = document.createElement("div"), dn = document.createElement("div");
      dt.dir = "ltr", dt.style.cssText = At, dt.className = a, ft.className = a, ft.style.cssText = Rt, $t.style.cssText = nt, un.style.cssText = rt, ne.style.cssText = F, dn.style.cssText = Tt, $t.appendChild(un), ne.appendChild(dn), ft.appendChild($t), ft.appendChild(ne), dt.appendChild(ft), Y.appendChild(dt);
      function fn() {
        var Q = o(p);
        Q && Q.onExpand ? Q.onExpand() : x("Aborting expand scroll handler: element has been uninstalled");
      }
      function pn() {
        var Q = o(p);
        Q && Q.onShrink ? Q.onShrink() : x("Aborting shrink scroll handler: element has been uninstalled");
      }
      m($t, "scroll", fn), m(ne, "scroll", pn), o(p).onExpandScroll = fn, o(p).onShrinkScroll = pn;
    }
    function et() {
      function w(nt, F, rt) {
        var Tt = S(nt), dt = y(F), ft = $(rt);
        Tt.style.setProperty("width", dt + "px", v.important ? "important" : ""), Tt.style.setProperty("height", ft + "px", v.important ? "important" : "");
      }
      function j(nt) {
        var F = p.offsetWidth, rt = p.offsetHeight, Tt = F !== o(p).lastWidth || rt !== o(p).lastHeight;
        x("Storing current size", F, rt), K(p, F, rt), n.add(0, function() {
          if (!!Tt) {
            if (!o(p)) {
              x("Aborting because element has been uninstalled");
              return;
            }
            if (!Y()) {
              x("Aborting because element container has not been initialized");
              return;
            }
            if (v.debug) {
              var ft = p.offsetWidth, $t = p.offsetHeight;
              (ft !== F || $t !== rt) && t.warn(i.get(p), "Scroll: Size changed before updating detector elements.");
            }
            w(p, F, rt);
          }
        }), n.add(1, function() {
          if (!o(p)) {
            x("Aborting because element has been uninstalled");
            return;
          }
          if (!Y()) {
            x("Aborting because element container has not been initialized");
            return;
          }
          E(p, F, rt);
        }), Tt && nt && n.add(2, function() {
          if (!o(p)) {
            x("Aborting because element has been uninstalled");
            return;
          }
          if (!Y()) {
            x("Aborting because element container has not been initialized");
            return;
          }
          nt();
        });
      }
      function Y() {
        return !!o(p).container;
      }
      function lt() {
        function nt() {
          return o(p).lastNotifiedWidth === void 0;
        }
        x("notifyListenersIfNeeded invoked");
        var F = o(p);
        if (nt() && F.lastWidth === F.startSize.width && F.lastHeight === F.startSize.height)
          return x("Not notifying: Size is the same as the start size, and there has been no notification yet.");
        if (F.lastWidth === F.lastNotifiedWidth && F.lastHeight === F.lastNotifiedHeight)
          return x("Not notifying: Size already notified");
        x("Current size not notified, notifying..."), F.lastNotifiedWidth = F.lastWidth, F.lastNotifiedHeight = F.lastHeight, Ja(o(p).listeners, function(rt) {
          rt(p);
        });
      }
      function _t() {
        if (x("startanimation triggered."), q(p)) {
          x("Ignoring since element is still unrendered...");
          return;
        }
        x("Element rendered.");
        var nt = _(p), F = D(p);
        (nt.scrollLeft === 0 || nt.scrollTop === 0 || F.scrollLeft === 0 || F.scrollTop === 0) && (x("Scrollbars out of sync. Updating detector elements..."), j(lt));
      }
      function At() {
        if (x("Scroll detected."), q(p)) {
          x("Scroll event fired while unrendered. Ignoring...");
          return;
        }
        j(lt);
      }
      if (x("registerListenersAndPositionElements invoked."), !o(p)) {
        x("Aborting because element has been uninstalled");
        return;
      }
      o(p).onRendered = _t, o(p).onExpand = At, o(p).onShrink = At;
      var Rt = o(p).style;
      w(p, Rt.width, Rt.height);
    }
    function ot() {
      if (x("finalizeDomMutation invoked."), !o(p)) {
        x("Aborting because element has been uninstalled");
        return;
      }
      var w = o(p).style;
      K(p, w.width, w.height), E(p, w.width, w.height);
    }
    function it() {
      A(p);
    }
    function J() {
      x("Installing..."), R(), X(), n.add(0, H), n.add(1, V), n.add(2, et), n.add(3, ot), n.add(4, it);
    }
    x("Making detectable..."), B(p) ? (x("Element is detached"), C(), x("Waiting until element is attached..."), o(p).onRendered = function() {
      x("Element is now attached"), J();
    }) : J();
  }
  function k(v) {
    var p = o(v);
    !p || (p.onExpandScroll && b(_(v), "scroll", p.onExpandScroll), p.onShrinkScroll && b(D(v), "scroll", p.onShrinkScroll), p.onAnimationStart && b(p.container, "animationstart", p.onAnimationStart), p.container && v.removeChild(p.container));
  }
  return {
    makeDetectable: I,
    addListener: T,
    uninstall: k,
    initDocument: l
  };
}, Xt = an.exports.forEach, Za = Ha, tc = ja, ec = Ba, nc = Fa, oc = Wa, Wn = cn.exports, ic = Ya, bt = Ua, rc = Ka, sc = Qa;
function qn(e) {
  return Array.isArray(e) || e.length !== void 0;
}
function Xn(e) {
  if (Array.isArray(e))
    return e;
  var t = [];
  return Xt(e, function(n) {
    t.push(n);
  }), t;
}
function Yn(e) {
  return e && e.nodeType === 1;
}
var ac = function(e) {
  e = e || {};
  var t;
  if (e.idHandler)
    t = {
      get: function(I) {
        return e.idHandler.get(I, !0);
      },
      set: e.idHandler.set
    };
  else {
    var n = ec(), o = nc({
      idGenerator: n,
      stateHandler: bt
    });
    t = o;
  }
  var i = e.reporter;
  if (!i) {
    var r = i === !1;
    i = oc(r);
  }
  var s = xt(e, "batchProcessor", ic({ reporter: i })), a = {};
  a.callOnAdd = !!xt(e, "callOnAdd", !0), a.debug = !!xt(e, "debug", !1);
  var l = tc(t), c = Za({
    stateHandler: bt
  }), u, d = xt(e, "strategy", "object"), g = xt(e, "important", !1), m = {
    reporter: i,
    batchProcessor: s,
    stateHandler: bt,
    idHandler: t,
    important: g
  };
  if (d === "scroll" && (Wn.isLegacyOpera() ? (i.warn("Scroll strategy is not supported on legacy Opera. Changing to object strategy."), d = "object") : Wn.isIE(9) && (i.warn("Scroll strategy is not supported on IE9. Changing to object strategy."), d = "object")), d === "scroll")
    u = sc(m);
  else if (d === "object")
    u = rc(m);
  else
    throw new Error("Invalid strategy name: " + d);
  var b = {};
  function _(I, k, v) {
    function p(X) {
      var R = l.get(X);
      Xt(R, function(K) {
        K(X);
      });
    }
    function A(X, R, H) {
      l.add(R, H), X && H(R);
    }
    if (v || (v = k, k = I, I = {}), !k)
      throw new Error("At least one element required.");
    if (!v)
      throw new Error("Listener required.");
    if (Yn(k))
      k = [k];
    else if (qn(k))
      k = Xn(k);
    else
      return i.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");
    var x = 0, B = xt(I, "callOnAdd", a.callOnAdd), q = xt(I, "onReady", function() {
    }), M = xt(I, "debug", a.debug);
    Xt(k, function(R) {
      bt.getState(R) || (bt.initState(R), t.set(R));
      var H = t.get(R);
      if (M && i.log("Attaching listener to element", H, R), !c.isDetectable(R)) {
        if (M && i.log(H, "Not detectable."), c.isBusy(R)) {
          M && i.log(H, "System busy making it detectable"), A(B, R, v), b[H] = b[H] || [], b[H].push(function() {
            x++, x === k.length && q();
          });
          return;
        }
        return M && i.log(H, "Making detectable..."), c.markBusy(R, !0), u.makeDetectable({ debug: M, important: g }, R, function(S) {
          if (M && i.log(H, "onElementDetectable"), bt.getState(S)) {
            c.markAsDetectable(S), c.markBusy(S, !1), u.addListener(S, p), A(B, S, v);
            var O = bt.getState(S);
            if (O && O.startSize) {
              var W = S.offsetWidth, y = S.offsetHeight;
              (O.startSize.width !== W || O.startSize.height !== y) && p(S);
            }
            b[H] && Xt(b[H], function($) {
              $();
            });
          } else
            M && i.log(H, "Element uninstalled before being detectable.");
          delete b[H], x++, x === k.length && q();
        });
      }
      M && i.log(H, "Already detecable, adding listener."), A(B, R, v), x++;
    }), x === k.length && q();
  }
  function D(I) {
    if (!I)
      return i.error("At least one element is required.");
    if (Yn(I))
      I = [I];
    else if (qn(I))
      I = Xn(I);
    else
      return i.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");
    Xt(I, function(k) {
      l.removeAllListeners(k), u.uninstall(k), bt.cleanState(k);
    });
  }
  function T(I) {
    u.initDocument && u.initDocument(I);
  }
  return {
    listenTo: _,
    removeListener: l.removeListener,
    removeAllListeners: l.removeAllListeners,
    uninstall: D,
    initDocument: T
  };
};
function xt(e, t, n) {
  var o = e[t];
  return o == null && n !== void 0 ? n : o;
}
function cc(e) {
  return { all: e = e || /* @__PURE__ */ new Map(), on: function(t, n) {
    var o = e.get(t);
    o ? o.push(n) : e.set(t, [n]);
  }, off: function(t, n) {
    var o = e.get(t);
    o && (n ? o.splice(o.indexOf(n) >>> 0, 1) : e.set(t, []));
  }, emit: function(t, n) {
    var o = e.get(t);
    o && o.slice().map(function(i) {
      i(n);
    }), (o = e.get("*")) && o.slice().map(function(i) {
      i(t, n);
    });
  } };
}
const Vo = () => typeof window < "u", lc = (e, t) => {
  if (!Vo)
    return t();
  window.addEventListener(e, t);
}, uc = (e, t) => {
  !Vo || window.removeEventListener(e, t);
}, Uo = {
  breakpointsValidatorPayload: {
    invalidBreakpointsKeys1: { lg: 0, md: 0, sm: 0, xs: 0, xx: 0 },
    invalidBreakpointsKeys2: { lg: 0, md: 0, sm: 0, xs: 0 },
    invalidBreakpointsTypes: { lg: "0", md: 0, sm: 0, xs: 0, xx: 0 },
    validBreakpoints: { lg: 0, md: 0, sm: 0, xs: 0, xxs: 0 }
  },
  intersectionObserverConfig: { root: null, rootMargin: "8px", threshold: 0.4 },
  keysValidatorPayload: {
    invalidKeys1: ["lg", "md", "sm", "xs", "xxw"],
    invalidKeys2: ["1", "2", "3", "4", "5"],
    validKeys: ["lg", "md", "sm", "xs", "xxs"]
  },
  layoutValidatorPayload: {
    invalidOptionalLayout: {
      isDraggable: !0,
      isResizable: !1,
      maxH: 0,
      maxW: "0",
      minH: 0,
      minW: 0,
      moved: !0,
      static: !1
    },
    invalidRequiredLayout: { h: 0, i: "string", w: 0, x: 0, y: 0 },
    validOptionalLayout: {
      isDraggable: !0,
      isResizable: !1,
      maxH: 0,
      maxW: 0,
      minH: 0,
      minW: 0,
      moved: !0,
      static: !1
    },
    validRequiredLayout: { h: 0, i: -1, w: 0, x: 0, y: 0 }
  },
  marginValidatorPayload: {
    invalidMargin1: [0, 0, 0],
    invalidMargin2: ["0", 0],
    validMargin: [0, 0]
  }
}, { keysValidatorPayload: dc, layoutValidatorPayload: fc } = Uo, Gn = (e) => {
  const t = Object.keys(e), n = t.map((o) => typeof e[o] == "number");
  return Ko(dc.validKeys, t) && n.indexOf(!1) === -1;
}, pc = (e) => {
  e = { ...Uo.intersectionObserverConfig, ...e };
  const t = ["root", "rootMargin", "threshold"];
  return !Object.keys(e).map((o) => t.includes(o)).includes(!1);
}, Ko = (e, t) => {
  const n = t.filter((o) => e.indexOf(o) >= 0);
  return t.length >= e.length && n.length === e.length;
}, Vn = (e) => {
  const { validOptionalLayout: t, validRequiredLayout: n } = fc, o = { ...n, ...t }, i = Object.keys(n);
  return e.map((a) => Ko(i, Object.keys(a))).includes(!1) ? !1 : !e.map((a) => Object.keys(a).map((c) => o[c] ? typeof a[c] == typeof o[c] : !0).includes(!1)).includes(!0);
}, hc = (e) => {
  const t = e.map((o) => typeof o == "number"), n = e.length === 2;
  return t.indexOf(!1) === -1 && n;
}, gc = /* @__PURE__ */ Kn({
  __name: "GridLayout",
  props: {
    autoSize: {
      default: !0,
      type: Boolean
    },
    breakpoints: {
      default: () => ({ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }),
      type: Object,
      validator: Gn
    },
    colNum: {
      required: !0,
      type: Number
    },
    cols: {
      default: () => ({ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }),
      type: Object,
      validator: Gn
    },
    intersectionObserverConfig: {
      default: () => ({ root: null, rootMargin: "8px", threshold: 0.4 }),
      type: Object,
      validator: pc
    },
    isDraggable: {
      default: !0,
      type: Boolean
    },
    isResizable: {
      default: !0,
      type: Boolean
    },
    layout: {
      required: !0,
      type: Array,
      validator: Vn
    },
    margin: {
      default: () => [10, 10],
      type: Array,
      validator: hc
    },
    maxRows: {
      default: 1 / 0,
      type: Number
    },
    preventCollision: {
      default: !1,
      type: Boolean
    },
    responsive: {
      default: !1,
      type: Boolean
    },
    responsiveLayouts: {
      default: () => ({}),
      type: Object,
      validator: (e) => {
        const t = Object.keys(e);
        return t.length ? !t.map((o) => Vn(e[o])).includes(!1) : !0;
      }
    },
    rowHeight: {
      default: 150,
      type: Number
    },
    useCssTransforms: {
      default: !0,
      type: Boolean
    },
    useObserver: {
      default: !1,
      type: Boolean
    },
    verticalCompact: {
      default: !0,
      type: Boolean
    }
  },
  emits: [
    "update:layout",
    "layout-ready",
    "update:breakpoint",
    "layout-created",
    "layout-before-mount",
    "layout-mounted",
    "container-resized",
    "item-resize",
    "item-resized",
    "item-move",
    "item-moved",
    "intersection-observe",
    "intersection-unobserve"
  ],
  setup(e, { emit: t }) {
    const n = e, o = cc();
    ri(to, o);
    const i = { h: 0, i: -1, w: 0, x: 0, y: 0 }, r = ["minW", "minH", "maxW", "maxH", "moved", "static", "isDraggable", "isResizable"], s = G(ac({ callOnAdd: !1, strategy: "scroll" })), a = G(!1), l = G(""), c = G(0), u = G({}), d = G({}), g = G(n.layout), m = G({ h: 0, i: -1, w: 0, x: 0, y: 0 }), b = G(0);
    let _;
    const D = G(null), T = ae(() => ({
      breakpointCols: n.cols,
      colNum: n.colNum,
      containerWidth: b.value,
      isDraggable: n.isDraggable,
      isResizable: n.isResizable,
      lastBreakpoint: l.value,
      margin: n.margin,
      maxRows: n.maxRows,
      responsive: n.responsive,
      rowHeight: n.rowHeight,
      useCssTransforms: n.useCssTransforms,
      width: b.value
    }));
    U(() => n.colNum, (S) => {
      o.emit("set-col-num", S);
    }), U(() => n.layout, () => {
      v();
    }), U(() => n.margin, () => {
      x();
    }), U(() => n.responsive, (S) => {
      S || (t("update:layout", g.value), o.emit("set-col-num", n.colNum)), q();
    }), U(() => b.value, (S, O) => {
      yt(() => {
        O === 0 && yt(() => {
          t("layout-ready", n.layout);
        }), n.responsive && M(), x();
      });
    }), U(() => n.useObserver, (S) => {
      if (!S) {
        _.disconnect();
        return;
      }
      K();
    });
    const I = (S) => {
      const O = {
        observe: [],
        unobserve: []
      };
      S.forEach(({ target: W, isIntersecting: y }) => {
        if (y) {
          O.observe.push(W.__INTERSECTION_OBSERVER_INDEX__);
          return;
        }
        O.unobserve.push(W.__INTERSECTION_OBSERVER_INDEX__);
      }), t("intersection-observe", O.observe), t("intersection-unobserve", O.unobserve);
    }, k = (S) => {
      const O = Object.keys(i);
      return Object.keys(S).reduce((W, y) => ((r.includes(y) || O.includes(y)) && (W[y] = S[y]), W), {});
    }, v = () => {
      if (n.layout && g.value) {
        if (n.layout.length !== g.value.length) {
          const S = p(n.layout, g.value);
          S.length > 0 && (n.layout.length > g.value.length ? g.value = g.value.concat(S) : g.value = g.value.filter((O) => !S.some((W) => O.i === W.i))), c.value = n.layout.length, A();
        }
        qt(n.layout, n.verticalCompact), x(), t("update:layout", n.layout), o.emit("recalculate-styles");
      }
    }, p = (S, O) => {
      const W = S.filter(($) => !O.some((N) => $.i === N.i)), y = O.filter(($) => !S.some((N) => $.i === N.i));
      return W.concat(y);
    }, A = () => {
      u.value = Object.assign({}, n.responsiveLayouts);
    }, x = () => {
      const S = B();
      d.value = { height: S };
    }, B = () => {
      if (!n.autoSize)
        return;
      const [, S] = n.margin;
      return `${gi(n.layout) * (n.rowHeight + S) + S}px`;
    }, q = () => {
      D.value && (b.value = D.value.offsetWidth);
    }, M = () => {
      const S = Ei(n.breakpoints, b.value), O = ke(S, n.cols);
      l.value && !u.value[l.value] && (u.value[l.value] = Ce(n.layout));
      const W = Si(
        g.value,
        u.value,
        n.breakpoints,
        S,
        l.value,
        O,
        n.verticalCompact
      );
      u.value[S] = W, l.value !== S && t("update:breakpoint", S, W), l.value = S, t("update:layout", W), o.emit("set-col-num", ke(S, n.cols));
    }, X = () => {
      t("layout-created", n.layout), o.on("resize-event", R), o.on("drag-event", H);
    }, R = ([S, O, W, y, $, N]) => {
      const L = mn(n.layout, O), E = L != null ? L : { ...i };
      let C;
      if (n.preventCollision) {
        const V = no(n.layout, { ...E, h: $, w: N }).filter(
          (et) => et.i !== E.i
        );
        if (C = V.length > 0, C) {
          let et = 1 / 0, ot = 1 / 0;
          V.forEach((it) => {
            it.x > E.x && (et = Math.min(et, it.x)), it.y > E.y && (ot = Math.min(ot, it.y));
          }), Number.isFinite(et) && (E.w = et - E.x), Number.isFinite(ot) && (E.h = ot - E.y);
        }
      }
      C || (E.w = N, E.h = $), S === "resizestart" || S === "resizemove" ? (m.value.i = +O, m.value.x = W, m.value.y = y, m.value.w = E.w, m.value.h = E.h, yt(() => {
        a.value = !0;
      })) : yt(() => {
        a.value = !1;
      }), n.responsive && M(), qt(n.layout, n.verticalCompact), o.emit("recalculate-styles"), x(), S === "resizeend" && t("update:layout", n.layout);
    }, H = ([S, O, W, y, $, N]) => {
      const L = mn(n.layout, O), E = L != null ? L : { ...i };
      S === "dragmove" || S === "dragstart" ? (m.value.i = +O, m.value.x = E.x, m.value.y = E.y, m.value.w = N, m.value.h = $, yt(() => {
        a.value = !0;
      })) : yt(() => {
        a.value = !1;
      }), t("update:layout", Me(n.layout, E, W, y, !0, n.preventCollision)), qt(n.layout, n.verticalCompact), o.emit("recalculate-styles"), x(), S === "dragend" && t("update:layout", n.layout);
    }, K = () => {
      _ = new IntersectionObserver(I, {
        root: null,
        rootMargin: "8px",
        threshold: 0.4,
        ...n.intersectionObserverConfig
      });
    };
    return X(), Jn(() => {
      uc("resize", q), s.value && D.value && s.value.uninstall(D.value), o.off("resize-event", R), o.off("drag-event", H);
    }), si(() => {
      t("layout-before-mount", n.layout);
    }), Qn(() => {
      t("layout-mounted", n.layout), yt(() => {
        g.value = n.layout, yt(() => {
          q(), A(), lc("resize", q.bind(this)), qt(n.layout, n.verticalCompact), t("update:layout", n.layout), x(), D.value && s.value.listenTo(D.value, q), n.useObserver && K();
        });
      });
    }), (S, O) => (Yt(), ue("div", null, [
      ai("div", {
        ref_key: "wrapper",
        ref: D,
        class: "vue-grid-layout",
        style: Zn(d.value)
      }, [
        ci(li(Ke, gn({ class: "vue-grid-placeholder" }, { ...Dt(T), ...m.value }), null, 16), [
          [ui, a.value]
        ]),
        De(S.$slots, "default", {
          gridItemProps: { ...Dt(T), observer: Dt(_) }
        }, () => [
          (Yt(!0), ue(di, null, fi(e.layout, (W) => (Yt(), pi(Ke, gn({
            key: W.i
          }, { ...Dt(T), ...k(W) }, {
            observer: Dt(_),
            onContainerResized: O[0] || (O[0] = (y) => t("container-resized", y)),
            onResize: O[1] || (O[1] = (y) => t("item-resize", y)),
            onMove: O[2] || (O[2] = (y) => t("item-move", y)),
            onMoved: O[3] || (O[3] = (y) => t("item-moved", y))
          }), {
            default: hi(() => [
              De(S.$slots, "gridItemContent", { item: W })
            ]),
            _: 2
          }, 1040, ["observer"]))), 128))
        ])
      ], 4)
    ]));
  }
});
const Un = {
  GridItem: Ke,
  GridLayout: gc
};
function mc(e) {
  e.$_v3DRRGridLayout || (e.$_v3DRRGridLayout = !0, Object.keys(Un).forEach((t) => {
    e.component(t, Un[t]);
  }));
}
const bc = {
  install: mc
};
export {
  Ke as GridItem,
  gc as GridLayout,
  bc as default
};
