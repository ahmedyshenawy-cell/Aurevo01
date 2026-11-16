/* لوحة تعديل اوريفيو — بتقرا data/content.js وبتطلّع نسخة جديدة منه + الصور المرفوعة */
(function () {
  "use strict";
  var DATA = JSON.parse(JSON.stringify(window.SITE));
  var uploads = {};            // path -> { blob, dataUrl }
  var dirty = false, timer = null, currentSection = "hero";
  var $ = function (id) { return document.getElementById(id); };

  /* ---------- أسماء بالعربي ---------- */
  var SEC = { brand: "بيانات الشركة واللوجو", contact: "التواصل والسوشيال", nav: "القائمة العلوية", hero: "الهيرو (أول الصفحة)", stats: "الأرقام", services: "الخدمات", difference: "الفرق عندنا", clients: "العملاء", work: "معرض الشغل (صور + لينكات)", packages: "الباقات", faq: "الأسئلة الشائعة", cta: "فورم التواصل" };
  var SEC_ID = { brand: "hero", contact: "contact", nav: "hero", hero: "hero", stats: "stats", services: "services", difference: "difference", clients: "clients", work: "work", packages: "packages", faq: "faq", cta: "contact" };
  var LBL = { name: "الاسم", nameEn: "الاسم بالإنجليزي", logo: "الأيقونة الصغيرة", logoWide: "اللوجو الكامل", slogan: "الشعار الفرعي", tagline: "الجملة التعريفية", year: "السنة", whatsapp: "رقم الواتساب (بالكود الدولي بدون +)", phone: "الموبايل", email: "الإيميل", address: "العنوان", social: "السوشيال ميديا", link: "اللينك", whatsappMessage: "رسالة الواتساب الجاهزة", label: "النص", href: "اللينك", kicker: "العنوان الصغير", title: "العنوان", text: "النص", primaryBtn: "الزر الأساسي", secondaryBtn: "نص زر الواتساب", clientsCount: "عدد العملاء", clientsLabel: "وصف العدد", value: "الرقم", items: "العناصر", icon: "الأيقونة", btn: "الزر", field: "المجال", image: "الصورة", client: "العميل", priceNote: "نص السعر", contractNote: "نص مدة العقد", footnote: "الملاحظة تحت الباقات", cta: "نص زر الباقة", tabs: "التابات", plans: "الباقات", badge: "الشارة (سيبها فاضية لو مفيش)", platforms: "المنصات (كل واحدة في سطر)", features: "المميزات (كل واحدة في سطر)", q: "السؤال", a: "الإجابة", submit: "نص زر الإرسال", privacy: "ملاحظة الخصوصية", typeLabel: "عنوان قائمة النشاط", types: "أنواع النشاط (كل واحد في سطر)", orText: "نص \"أو\"", secondaryBtn2: "" };
  var ICONS = { social: "سوشيال ميديا", ads: "إعلانات", seo: "جوجل / SEO", video: "فيديو", brand: "هوية", design: "تصميم" };
  var IMG_KEYS = { logo: 1, logoWide: 1, image: 1 };
  var LINES = { platforms: 1, features: 1, types: 1 };
  var LONG = { text: 1, a: 1, tagline: 1, whatsappMessage: 1 };
  var LTR = { link: 1, href: 1, email: 1, phone: 1, whatsapp: 1, image: 1, logo: 1, logoWide: 1, nameEn: 1 };

  function el(tag, cls, html) { var e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function changed() { dirty = true; clearTimeout(timer); timer = setTimeout(refreshPreview, 700); }
  function toast(msg) { var t = el("div", "toast", esc(msg)); document.body.appendChild(t); setTimeout(function () { t.remove(); }, 2600); }

  /* ---------- بناء الحقول ---------- */
  function buildField(parent, key) {
    var v = parent[key], label = LBL[key] || key;
    if (Array.isArray(v) || (v === undefined)) return null;

    if (Array.isArray(v) === false && v !== null && typeof v === "object") {
      var g = el("div", "grp"); g.appendChild(el("span", "lg", esc(label)));
      Object.keys(v).forEach(function (k) { var f = buildField(v, k); if (f) g.appendChild(f); });
      return g;
    }
    var wrap = el("div", "fld"), id = "f" + Math.random().toString(36).slice(2, 8);
    wrap.appendChild(el("label", null, esc(label))); wrap.firstChild.htmlFor = id;

    if (key === "icon") {
      var sel = el("select"); sel.id = id;
      Object.keys(ICONS).forEach(function (k) { var o = el("option", null, esc(ICONS[k])); o.value = k; if (k === v) o.selected = true; sel.appendChild(o); });
      sel.onchange = function () { parent[key] = sel.value; changed(); };
      wrap.appendChild(sel); return wrap;
    }
    if (IMG_KEYS[key]) return imageField(parent, key, label);

    var inp = (LONG[key] || String(v).length > 70) ? el("textarea") : el("input");
    inp.id = id; inp.value = v; if (LTR[key]) inp.classList.add("ltr");
    inp.oninput = function () { parent[key] = inp.value; changed(); };
    wrap.appendChild(inp); return wrap;
  }

  function linesField(parent, key) {
    var wrap = el("div", "fld"), id = "f" + Math.random().toString(36).slice(2, 8);
    var lb = el("label", null, esc(LBL[key] || key)); lb.htmlFor = id; wrap.appendChild(lb);
    var ta = el("textarea"); ta.id = id; ta.value = (parent[key] || []).join("\n");
    ta.oninput = function () { parent[key] = ta.value.split("\n").map(function (x) { return x.trim(); }).filter(Boolean); changed(); };
    wrap.appendChild(ta); return wrap;
  }

  function resolve(path) { return uploads[path] ? uploads[path].dataUrl : path; }

  function imageField(parent, key, label) {
    var wrap = el("div", "fld"); wrap.appendChild(el("span", "lg", esc(label)));
    var box = el("div", "img"), th = el("div", "thumb"), col = el("div", "col"), row = el("div", "row");
    var inp = el("input", "ltr"); inp.value = parent[key]; inp.placeholder = "اسم-الصورة.jpg أو لينك";
    var up = el("button", "b b-sm", "رفع صورة"); up.type = "button";
    var file = el("input"); file.type = "file"; file.accept = "image/*"; file.hidden = true;
    function paint() { th.style.backgroundImage = parent[key] ? 'url("' + resolve(parent[key]) + '")' : "none"; }
    inp.oninput = function () { parent[key] = inp.value.trim(); paint(); changed(); };
    up.onclick = function () { file.click(); };
    file.onchange = function () {
      if (!file.files[0]) return;
      processImage(file.files[0], key).then(function (r) {
        uploads[r.path] = r; parent[key] = r.path; inp.value = r.path; paint(); changed();
        toast("اتضافت: " + r.path.split("/").pop());
      }).catch(function () { toast("الصورة دي ماتقراتش، جرّب صورة تانية"); });
      file.value = "";
    };
    row.appendChild(inp); row.appendChild(up); col.appendChild(row); col.appendChild(file);
    box.appendChild(th); box.appendChild(col); wrap.appendChild(box); paint(); return wrap;
  }

  /* ---------- ضغط الصور قبل الرفع ---------- */
  function slug(n) { return n.replace(/\.[^.]+$/, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "img"; }
  function blobToDataUrl(b) { return new Promise(function (res, rej) { var r = new FileReader(); r.onload = function () { res(r.result); }; r.onerror = rej; r.readAsDataURL(b); }); }
  function processImage(file, key) {
    var base = slug(file.name) + "-" + Date.now().toString(36);
    if (/svg|gif/.test(file.type)) {
      var ext = /svg/.test(file.type) ? "svg" : "gif";
      return blobToDataUrl(file).then(function (d) { return { path: "u-" + base + "." + ext, blob: file, dataUrl: d }; });
    }
    var isLogo = key !== "image", max = isLogo ? 900 : 1600;
    return new Promise(function (res, rej) {
      var img = new Image(), url = URL.createObjectURL(file);
      img.onload = function () {
        var k = Math.min(1, max / Math.max(img.width, img.height)), c = document.createElement("canvas");
        c.width = Math.round(img.width * k); c.height = Math.round(img.height * k);
        var ctx = c.getContext("2d");
        if (!isLogo) { ctx.fillStyle = "#fff"; ctx.fillRect(0, 0, c.width, c.height); }
        ctx.drawImage(img, 0, 0, c.width, c.height); URL.revokeObjectURL(url);
        var type = isLogo ? "image/png" : "image/jpeg", ext = isLogo ? "png" : "jpg";
        c.toBlob(function (b) {
          if (!b) return rej();
          blobToDataUrl(b).then(function (d) { res({ path: "u-" + base + "." + ext, blob: b, dataUrl: d }); });
        }, type, 0.86);
      };
      img.onerror = rej; img.src = url;
    });
  }

  /* ---------- القوائم (إضافة / حذف / ترتيب) ---------- */
  function blank(o) {
    if (Array.isArray(o)) return o.length && typeof o[0] === "object" ? [blank(o[0])] : [];
    if (o && typeof o === "object") { var r = {}; Object.keys(o).forEach(function (k) { r[k] = blank(o[k]); }); return r; }
    return "";
  }
  function summary(it, i) { return (typeof it === "object" ? (it.title || it.name || it.label || it.q || it.value || it.client) : it) || "عنصر " + (i + 1); }

  function listField(parent, key, label) {
    var arr = parent[key], box = el("div", "fld");
    box.appendChild(el("span", "lg", esc(label)));
    var list = el("div", "list"); box.appendChild(list);
    var add = el("button", "b b-sm", "+ إضافة"); add.type = "button"; box.appendChild(add);
    var template = arr.length ? blank(arr[0]) : {};

    function render() {
      list.innerHTML = "";
      arr.forEach(function (it, i) {
        var d = el("details", "item"), s = el("summary"), sum = el("span", "sum", esc(summary(it, i))), tools = el("span", "tools");
        function tb(txt, title, fn, cls) { var b = el("button", "b b-sm " + (cls || ""), txt); b.type = "button"; b.title = title; b.onclick = function (e) { e.preventDefault(); e.stopPropagation(); fn(); }; tools.appendChild(b); }
        tb("▲", "فوق", function () { if (i > 0) { arr.splice(i - 1, 0, arr.splice(i, 1)[0]); render(); changed(); } });
        tb("▼", "تحت", function () { if (i < arr.length - 1) { arr.splice(i + 1, 0, arr.splice(i, 1)[0]); render(); changed(); } });
        tb("حذف", "حذف", function () { if (confirm("تمسح العنصر ده؟")) { arr.splice(i, 1); render(); changed(); } }, "b-del");
        s.appendChild(sum); s.appendChild(tools); d.appendChild(s);
        var body = el("div", "item-body"); d.appendChild(body);
        fillObject(body, it, function () { sum.textContent = summary(it, i); });
        list.appendChild(d);
      });
    }
    add.onclick = function () { arr.push(JSON.parse(JSON.stringify(template))); render(); list.lastChild.open = true; changed(); };
    render(); return box;
  }

  /* بيملا عنصر (كائن) بحقوله */
  function fillObject(body, obj, onSum) {
    if (obj === null || typeof obj !== "object") return;
    Object.keys(obj).forEach(function (k) {
      var v = obj[k], node;
      if (Array.isArray(v) || (LINES[k])) node = LINES[k] ? linesField(obj, k) : listField(obj, k, LBL[k] || k);
      else node = buildField(obj, k);
      if (node) body.appendChild(node);
    });
    if (onSum) body.addEventListener("input", onSum);
  }

  /* ---------- رسم اللوحة ---------- */
  function renderEditor() {
    var ed = $("editor"); ed.innerHTML = "";
    var order = ["brand", "hero", "stats", "services", "difference", "clients", "work", "packages", "faq", "cta", "contact", "nav"];
    order.forEach(function (k, n) {
      if (!DATA[k]) return;
      var d = el("details", "sec"); if (n === 0) d.open = true;
      d.appendChild(el("summary", null, esc(SEC[k] || k)));
      var body = el("div", "sec-body"); d.appendChild(body);
      if (Array.isArray(DATA[k])) body.appendChild(listField(DATA, k, SEC[k]));
      else fillObject(body, DATA[k]);
      d.addEventListener("toggle", function () { if (d.open) { currentSection = SEC_ID[k]; refreshPreview(); } });
      ed.appendChild(d);
    });
  }

  /* ---------- المعاينة ---------- */
  function previewData() {
    function walk(o) {
      if (typeof o === "string") return uploads[o] ? uploads[o].dataUrl : o;
      if (Array.isArray(o)) return o.map(walk);
      if (o && typeof o === "object") { var r = {}; Object.keys(o).forEach(function (k) { r[k] = walk(o[k]); }); return r; }
      return o;
    }
    return walk(DATA);
  }
  function refreshPreview() {
    window.__PREVIEW_SITE = previewData();
    var f = $("frame");
    try {
      f.contentWindow.location.replace("index.html#" + currentSection);
      f.contentWindow.location.reload();
    } catch (e) { f.src = "index.html#" + currentSection; }
  }

  /* ---------- ملف ZIP بسيط (بدون مكتبات) ---------- */
  var CRC = (function () { var t = [], c, n, k; for (n = 0; n < 256; n++) { c = n; for (k = 0; k < 8; k++) c = c & 1 ? 0xEDB88320 ^ (c >>> 1) : c >>> 1; t[n] = c >>> 0; } return t; })();
  function crc32(u8) { var c = 0xFFFFFFFF; for (var i = 0; i < u8.length; i++) c = CRC[(c ^ u8[i]) & 255] ^ (c >>> 8); return (c ^ 0xFFFFFFFF) >>> 0; }
  function makeZip(files) {
    var enc = new TextEncoder(), parts = [], central = [], offset = 0, now = new Date();
    var dt = ((now.getHours() << 11) | (now.getMinutes() << 5) | (now.getSeconds() >> 1)) & 0xFFFF;
    var dd = (((now.getFullYear() - 1980) << 9) | ((now.getMonth() + 1) << 5) | now.getDate()) & 0xFFFF;
    files.forEach(function (f) {
      var name = enc.encode(f.name), crc = crc32(f.data), sz = f.data.length;
      var h = new DataView(new ArrayBuffer(30));
      h.setUint32(0, 0x04034b50, true); h.setUint16(4, 20, true); h.setUint16(6, 0x0800, true); h.setUint16(8, 0, true);
      h.setUint16(10, dt, true); h.setUint16(12, dd, true); h.setUint32(14, crc, true); h.setUint32(18, sz, true); h.setUint32(22, sz, true);
      h.setUint16(26, name.length, true); h.setUint16(28, 0, true);
      parts.push(new Uint8Array(h.buffer), name, f.data);
      var c = new DataView(new ArrayBuffer(46));
      c.setUint32(0, 0x02014b50, true); c.setUint16(4, 20, true); c.setUint16(6, 20, true); c.setUint16(8, 0x0800, true); c.setUint16(10, 0, true);
      c.setUint16(12, dt, true); c.setUint16(14, dd, true); c.setUint32(16, crc, true); c.setUint32(20, sz, true); c.setUint32(24, sz, true);
      c.setUint16(28, name.length, true); c.setUint32(42, offset, true);
      central.push(new Uint8Array(c.buffer), name);
      offset += 30 + name.length + sz;
    });
    var csize = central.reduce(function (a, b) { return a + b.length; }, 0);
    var e = new DataView(new ArrayBuffer(22));
    e.setUint32(0, 0x06054b50, true); e.setUint16(8, files.length, true); e.setUint16(10, files.length, true);
    e.setUint32(12, csize, true); e.setUint32(16, offset, true);
    return new Blob(parts.concat(central, [new Uint8Array(e.buffer)]), { type: "application/zip" });
  }

  /* ---------- التصدير ---------- */
  function contentJS() {
    return "/* ملف المحتوى — اتولّد من لوحة التعديل (admin.html). تقدر تعدّله بإيدك برضه. */\n\nwindow.SITE = " + JSON.stringify(DATA, null, 2) + ";\n";
  }
  function used(o, acc) {
    if (typeof o === "string") { if (uploads[o]) acc[o] = 1; }
    else if (Array.isArray(o)) o.forEach(function (x) { used(x, acc); });
    else if (o && typeof o === "object") Object.keys(o).forEach(function (k) { used(o[k], acc); });
    return acc;
  }
  function exportZip() {
    var enc = new TextEncoder(), files = [{ name: "content.js", data: enc.encode(contentJS()) }];
    var paths = Object.keys(used(DATA, {})), jobs = paths.map(function (p) {
      return uploads[p].blob.arrayBuffer().then(function (b) { files.push({ name: p, data: new Uint8Array(b) }); });
    });
    Promise.all(jobs).then(function () {
      var url = URL.createObjectURL(makeZip(files)), a = document.createElement("a");
      a.href = url; a.download = "aurevo-update.zip"; document.body.appendChild(a); a.click(); a.remove();
      setTimeout(function () { URL.revokeObjectURL(url); }, 4000);
      dirty = false; $("doneDialog").showModal();
    });
  }

  /* ---------- ربط الأزرار ---------- */
  $("btnPreview").onclick = refreshPreview;
  $("btnExport").onclick = exportZip;
  $("closeDone").onclick = function () { $("doneDialog").close(); };
  $("mtabs").addEventListener("click", function (e) {
    var b = e.target.closest("button"); if (!b) return;
    document.querySelectorAll("#mtabs button").forEach(function (x) { x.classList.toggle("on", x === b); });
    $("layout").dataset.pane = b.dataset.p; if (b.dataset.p === "view") refreshPreview();
  });
  window.addEventListener("beforeunload", function (e) { if (dirty) { e.preventDefault(); e.returnValue = ""; } });
  $("frame").addEventListener("load", function () {});

  renderEditor();
  window.__PREVIEW_SITE = previewData();
})();
