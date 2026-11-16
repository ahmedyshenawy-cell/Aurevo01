/* بيرسم الموقع من ملف data/content.js — مفيش داعي تعدّل هنا */
(function () {
  "use strict";
  var S = window.SITE;
  try { if (window.parent !== window && window.parent.__PREVIEW_SITE) S = window.parent.__PREVIEW_SITE; } catch (e) {}
  if (!S) { console.error("data/content.js مش متحمّل"); return; }

  /* ---------- أدوات ---------- */
  var $ = function (id) { return document.getElementById(id); };
  function esc(v) {
    return String(v == null ? "" : v).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function isExternal(l) { return /^https?:\/\//i.test(l); }
  function linkAttrs(l) {
    if (!l) return "";
    return 'href="' + esc(l) + '"' + (isExternal(l) ? ' target="_blank" rel="noopener"' : "");
  }
  function wa(msg) {
    return "https://wa.me/" + encodeURIComponent(S.contact.whatsapp) + "?text=" + encodeURIComponent(msg || S.contact.whatsappMessage);
  }
  function svg(paths, extra) {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"' + (extra || "") + ">" + paths + "</svg>";
  }
  var I = {
    social: svg('<path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z"/>'),
    ads: svg('<path d="M3 11v2a1 1 0 0 0 1 1h2l5 4V6L6 10H4a1 1 0 0 0-1 1z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M18 6a8.5 8.5 0 0 1 0 12"/>'),
    seo: svg('<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>'),
    video: svg('<rect x="3" y="5" width="18" height="14" rx="3"/><path d="m10.5 9.5 4 2.5-4 2.5z"/>'),
    brand: svg('<path d="M12 3 3 9l9 12 9-12z"/><path d="M3 9h18M9 9l3 12 3-12"/>'),
    design: svg('<path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z"/><path d="M19 16v4M17 18h4"/>'),
    check: svg('<path d="m5 12 5 5 9-10"/>'),
    plus: svg('<path d="M12 5v14M5 12h14"/>'),
    out: svg('<path d="M7 17 17 7M8 7h9v9"/>'),
    phone: svg('<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/>'),
    burger: svg('<path d="M4 7h16M4 12h16M4 17h16"/>'),
    close: svg('<path d="M6 6l12 12M18 6 6 18"/>')
  };

  function head(o, center) {
    return '<div class="sec-head' + (center ? " center" : "") + '">' +
      (o.kicker ? '<p class="kicker">' + esc(o.kicker) + "</p>" : "") +
      "<h2>" + esc(o.title) + "</h2>" +
      (o.text ? "<p>" + esc(o.text) + "</p>" : "") + "</div>";
  }
  function logoHTML() {
    if (S.brand.logoWide) {
      return '<a class="logo logo-wide" href="#hero" aria-label="' + esc(S.brand.name) + '">' +
        '<img src="' + esc(S.brand.logoWide) + '" alt="' + esc(S.brand.name) + '"></a>';
    }
    return '<a class="logo" href="#hero" aria-label="' + esc(S.brand.name) + '">' +
      '<img src="' + esc(S.brand.logo) + '" alt="">' +
      '<span class="logo-text"><b>' + esc(S.brand.name) + "</b><small>" + esc(S.brand.slogan) + "</small></span></a>";
  }

  /* ---------- الهيدر ---------- */
  var navLinks = S.nav.map(function (n) { return '<a href="' + esc(n.href) + '">' + esc(n.label) + "</a>"; }).join("");
  $("header").innerHTML =
    '<div class="container header-in">' + logoHTML() +
    '<nav class="nav" aria-label="القائمة الرئيسية">' + navLinks + "</nav>" +
    '<a class="btn btn-light" href="' + esc(wa()) + '" target="_blank" rel="noopener">احجز استشارة مجانية</a>' +
    '<button class="burger" id="burger" aria-label="فتح القائمة" aria-expanded="false" aria-controls="mobileMenu">' + I.burger + "</button></div>" +
    '<div class="mobile-menu" id="mobileMenu">' + navLinks +
    '<a class="btn btn-light" href="' + esc(wa()) + '" target="_blank" rel="noopener">احجز استشارة مجانية</a></div>';

  var burger = $("burger"), menu = $("mobileMenu");
  function toggleMenu(open) {
    menu.classList.toggle("open", open);
    burger.innerHTML = open ? I.close : I.burger;
    burger.setAttribute("aria-expanded", String(open));
  }
  burger.addEventListener("click", function () { toggleMenu(!menu.classList.contains("open")); });
  menu.addEventListener("click", function (e) { if (e.target.tagName === "A") toggleMenu(false); });

  /* ---------- الهيرو + شريط العملاء ---------- */
  var h = S.hero;
  var chips = S.clients.items.map(function (c) {
    var inner = '<img src="' + esc(c.logo) + '" alt="" loading="lazy"><b>' + esc(c.name) + "</b>";
    return c.link ? "<a " + linkAttrs(c.link) + ">" + inner + "</a>" : '<span class="chip">' + inner + "</span>";
  }).join("");
  $("hero").innerHTML =
    '<div class="container"><div class="hero-in">' +
    '<span class="hero-kicker">' + esc(h.kicker) + "</span>" +
    "<h1>" + esc(h.title) + "</h1>" +
    '<p class="lead">' + esc(h.text) + "</p>" +
    '<div class="hero-actions">' +
    '<a class="btn btn-light" href="' + esc(h.primaryBtn.href) + '">' + esc(h.primaryBtn.label) + "</a>" +
    '<a class="btn btn-ghost" href="' + esc(wa()) + '" target="_blank" rel="noopener">' + I.phone + esc(h.secondaryBtn) + "</a>" +
    "</div></div></div>" +
    '<div class="marquee-wrap"><div class="marquee-label"><b>' + esc(h.clientsCount) + "</b><span>" + esc(h.clientsLabel) + "</span></div>" +
    '<div class="marquee" aria-hidden="false"><div class="marquee-track">' + chips + chips + "</div></div></div>";

  /* ---------- الأرقام ---------- */
  $("stats").innerHTML = '<div class="container stats-in">' + S.stats.map(function (s) {
    return '<div class="stat"><b>' + esc(s.value) + "</b><span>" + esc(s.label) + "</span></div>";
  }).join("") + "</div>";

  /* ---------- الخدمات ---------- */
  $("services").innerHTML = '<div class="container">' + head(S.services) +
    '<div class="services-grid">' + S.services.items.map(function (s) {
      return "<a class=\"service\" " + (linkAttrs(s.link) || 'href="#contact"') + '>' +
        '<span class="ico">' + (I[s.icon] || I.design) + "</span>" +
        "<h3>" + esc(s.title) + "</h3><p>" + esc(s.text) + '</p><span class="more">اطلب الخدمة</span></a>';
    }).join("") + "</div></div>";

  /* ---------- الفرق عندنا ---------- */
  var d = S.difference;
  $("difference").innerHTML = '<div class="container split"><div class="split-text">' +
    '<p class="kicker">' + esc(d.kicker) + "</p><h2>" + esc(d.title) + '</h2><p class="sub">' + esc(d.text) + "</p>" +
    '<a class="btn btn-light" ' + linkAttrs(d.btn.href) + ">" + esc(d.btn.label) + "</a></div>" +
    '<div class="diff-grid">' + d.items.map(function (i) {
      return '<div class="diff-item"><h3>' + esc(i.title) + "</h3><p>" + esc(i.text) + "</p></div>";
    }).join("") + "</div></div>";

  /* ---------- العملاء ---------- */
  $("clients").innerHTML = '<div class="container">' + head(S.clients) +
    '<div class="clients-grid">' + S.clients.items.map(function (c) {
      var inner = '<img src="' + esc(c.logo) + '" alt="' + esc(c.name) + '" loading="lazy"><span><b>' + esc(c.name) + "</b><small>" + esc(c.field) + "</small></span>";
      return c.link ? '<a class="client" ' + linkAttrs(c.link) + ">" + inner + "</a>" : '<div class="client">' + inner + "</div>";
    }).join("") + "</div></div>";

  /* ---------- الباقات ---------- */
  var P = S.packages;
  function plansHTML(tab) {
    return tab.plans.map(function (p) {
      var featured = !!p.badge;
      return '<article class="plan' + (featured ? " featured" : "") + '">' +
        (featured ? '<span class="plan-badge">' + esc(p.badge) + "</span>" : "") +
        "<h3>" + esc(p.name) + '</h3><p class="contract">' + esc(P.contractNote) + '</p><p class="price">' + esc(P.priceNote) + "</p>" +
        '<div class="platforms">' + (p.platforms || []).map(function (x) { return "<span>" + esc(x) + "</span>"; }).join("") + "</div>" +
        "<ul>" + p.features.map(function (f) { return "<li>" + I.check + "<span>" + esc(f) + "</span></li>"; }).join("") + "</ul>" +
        '<a class="btn ' + (featured ? "btn-light" : "btn-wine") + '" target="_blank" rel="noopener" href="' +
        esc(wa("أهلاً اوريفيو، حابب أعرف تفاصيل باقة " + p.name + " (" + tab.label + ").")) + '">' + esc(P.cta) + "</a></article>";
    }).join("");
  }
  $("packages").innerHTML = '<div class="container">' + head(P, true) +
    '<div class="tabs" role="tablist">' + P.tabs.map(function (t, i) {
      return '<button class="tab" role="tab" id="tab' + i + '" aria-selected="' + (i === 0) + '" data-i="' + i + '">' + esc(t.label) + "</button>";
    }).join("") + "</div>" +
    '<div class="plans" id="plans" role="tabpanel">' + plansHTML(P.tabs[0]) + "</div>" +
    '<p class="pkg-note">' + esc(P.footnote) + "</p></div>";
  document.querySelector(".tabs").addEventListener("click", function (e) {
    var b = e.target.closest(".tab"); if (!b) return;
    var i = +b.dataset.i;
    document.querySelectorAll(".tab").forEach(function (t) { t.setAttribute("aria-selected", String(t === b)); });
    $("plans").innerHTML = plansHTML(P.tabs[i]);
  });

  /* ---------- الشغل ---------- */
  var W = S.work;
  $("work").innerHTML = '<div class="container">' + head(W) +
    '<div class="work-grid">' + W.items.map(function (w) {
      var inner = '<img src="' + esc(w.image) + '" alt="' + esc(w.title) + '" loading="lazy">' +
        (w.link ? '<span class="work-open">' + I.out + "</span>" : "") +
        '<span class="work-cap"><b>' + esc(w.title) + "</b><small>" + esc(w.client) + "</small></span>";
      return w.link ? '<a class="work-item" ' + linkAttrs(w.link) + ">" + inner + "</a>" : '<div class="work-item">' + inner + "</div>";
    }).join("") + "</div>" +
    (W.btn ? '<div class="work-more"><a class="btn btn-line" ' + linkAttrs(W.btn.href) + ">" + esc(W.btn.label) + "</a></div>" : "") + "</div>";

  /* ---------- الأسئلة ---------- */
  var F = S.faq;
  $("faq").innerHTML = '<div class="container faq-split"><div class="split-text">' +
    '<p class="kicker">' + esc(F.kicker) + "</p><h2>" + esc(F.title) + '</h2><p class="sub">' + esc(F.text) + "</p>" +
    '<a class="btn btn-wine" href="' + esc(wa()) + '" target="_blank" rel="noopener">' + esc(F.btn) + "</a></div>" +
    '<div class="faq-list">' + F.items.map(function (q) {
      return "<details><summary><span>" + esc(q.q) + "</span>" + I.plus + "</summary><p>" + esc(q.a) + "</p></details>";
    }).join("") + "</div></div>";

  /* ---------- التواصل ---------- */
  var C = S.cta, ct = S.contact;
  $("contact").innerHTML = '<div class="container cta-split"><div class="cta-info">' +
    "<h2>" + esc(C.title) + "</h2><p>" + esc(C.text) + "</p>" +
    '<p class="cta-or">' + esc(C.orText) + "</p>" +
    '<div class="cta-links"><a class="btn btn-light" href="' + esc(wa()) + '" target="_blank" rel="noopener">' + I.phone + "واتساب</a>" +
    '<a class="btn btn-ghost" href="tel:' + esc(ct.phone) + '" dir="ltr">' + esc(ct.phone) + "</a></div></div>" +
    '<form class="form" id="leadForm" novalidate>' +
    '<div class="field"><label for="fName">الاسم</label><input id="fName" name="name" autocomplete="name" required></div>' +
    '<div class="field"><label for="fPhone">رقم الموبايل / واتساب</label><input id="fPhone" name="phone" type="tel" inputmode="tel" autocomplete="tel" dir="ltr" required></div>' +
    '<div class="field"><label for="fType">' + esc(C.typeLabel) + '</label><select id="fType" name="type">' +
    C.types.map(function (t) { return "<option>" + esc(t) + "</option>"; }).join("") + "</select></div>" +
    '<button class="btn btn-wine" type="submit">' + esc(C.submit) + "</button><small>" + esc(C.privacy) + "</small></form></div>";

  $("leadForm").addEventListener("submit", function (e) {
    e.preventDefault();
    var f = e.target, name = f.name.value.trim(), phone = f.phone.value.trim();
    [f.name, f.phone].forEach(function (x) { x.style.borderColor = x.value.trim() ? "" : "#c0392b"; });
    if (!name || !phone) return;
    var msg = "أهلاً اوريفيو، أنا " + name + "\nنوع النشاط: " + f.type.value + "\nرقمي: " + phone + "\nحابب أحجز استشارة مجانية.";
    window.open(wa(msg), "_blank", "noopener");
  });

  /* ---------- الفوتر ---------- */
  var social = ct.social.filter(function (s) { return s.link; }).map(function (s) {
    return '<a ' + linkAttrs(s.link) + ">" + esc(s.name) + "</a>";
  }).join("");
  $("footer").innerHTML = '<div class="container"><div class="footer-grid">' +
    "<div>" + logoHTML() + "<p>" + esc(S.brand.tagline) + "</p>" + (social ? '<div class="social">' + social + "</div>" : "") + "</div>" +
    "<div><h3>الخدمات</h3><ul>" + S.services.items.map(function (s) { return '<li><a href="#services">' + esc(s.title) + "</a></li>"; }).join("") + "</ul></div>" +
    "<div><h3>الصفحة</h3><ul>" + S.nav.map(function (n) { return '<li><a href="' + esc(n.href) + '">' + esc(n.label) + "</a></li>"; }).join("") + "</ul></div>" +
    "<div><h3>تواصل معنا</h3><ul>" +
    '<li><a href="tel:' + esc(ct.phone) + '" dir="ltr">' + esc(ct.phone) + "</a></li>" +
    '<li><a href="mailto:' + esc(ct.email) + '">' + esc(ct.email) + "</a></li>" +
    '<li><a href="' + esc(wa()) + '" target="_blank" rel="noopener">واتساب</a></li>' +
    "<li>" + esc(ct.address) + "</li></ul></div></div>" +
    '<p class="copy">© ' + esc(S.brand.year) + " " + esc(S.brand.name) + ". جميع الحقوق محفوظة.</p></div>";

  /* ---------- واتساب العائم ---------- */
  if (location.hash.length > 1) { try { var tg = document.querySelector(location.hash); if (tg) tg.scrollIntoView(); } catch (e) {} }

  var fl = $("waFloat"); fl.href = wa(); fl.innerHTML = I.phone;
})();
