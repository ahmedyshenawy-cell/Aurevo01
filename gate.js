/* بوابة الدخول للوحة التعديل (حماية بسيطة من ناحية المتصفح) */
(function () {
  "use strict";
  var A = window.ADMIN_AUTH, KEY = "aurevo_admin_ok";
  var root = document.documentElement;

  /* SHA-256 بالـ JS عادي (علشان يشتغل في أي بيئة) */
  function sha256(s) {
    var b = unescape(encodeURIComponent(s)), i, j, w = [], H = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19];
    var K = [0x428a2f98,0x71374491,0xb5c0fbcf,0xe9b5dba5,0x3956c25b,0x59f111f1,0x923f82a4,0xab1c5ed5,0xd807aa98,0x12835b01,0x243185be,0x550c7dc3,0x72be5d74,0x80deb1fe,0x9bdc06a7,0xc19bf174,0xe49b69c1,0xefbe4786,0x0fc19dc6,0x240ca1cc,0x2de92c6f,0x4a7484aa,0x5cb0a9dc,0x76f988da,0x983e5152,0xa831c66d,0xb00327c8,0xbf597fc7,0xc6e00bf3,0xd5a79147,0x06ca6351,0x14292967,0x27b70a85,0x2e1b2138,0x4d2c6dfc,0x53380d13,0x650a7354,0x766a0abb,0x81c2c92e,0x92722c85,0xa2bfe8a1,0xa81a664b,0xc24b8b70,0xc76c51a3,0xd192e819,0xd6990624,0xf40e3585,0x106aa070,0x19a4c116,0x1e376c08,0x2748774c,0x34b0bcb5,0x391c0cb3,0x4ed8aa4a,0x5b9cca4f,0x682e6ff3,0x748f82ee,0x78a5636f,0x84c87814,0x8cc70208,0x90befffa,0xa4506ceb,0xbef9a3f7,0xc67178f2];
    function r(x, n) { return (x >>> n) | (x << (32 - n)); }
    var l = b.length * 8; b += "\x80"; while (b.length % 64 !== 56) b += "\0";
    for (i = 0; i < 8; i++) b += String.fromCharCode(i < 4 ? 0 : (l >>> (8 * (7 - i))) & 255);
    for (i = 0; i < b.length; i += 64) {
      for (j = 0; j < 64; j++) {
        if (j < 16) w[j] = (b.charCodeAt(i + 4 * j) << 24) | (b.charCodeAt(i + 4 * j + 1) << 16) | (b.charCodeAt(i + 4 * j + 2) << 8) | b.charCodeAt(i + 4 * j + 3);
        else { var s0 = r(w[j - 15], 7) ^ r(w[j - 15], 18) ^ (w[j - 15] >>> 3), s1 = r(w[j - 2], 17) ^ r(w[j - 2], 19) ^ (w[j - 2] >>> 10); w[j] = (w[j - 16] + s0 + w[j - 7] + s1) | 0; }
      }
      var a = H.slice();
      for (j = 0; j < 64; j++) {
        var S1 = r(a[4], 6) ^ r(a[4], 11) ^ r(a[4], 25), ch = (a[4] & a[5]) ^ (~a[4] & a[6]), t1 = (a[7] + S1 + ch + K[j] + w[j]) | 0;
        var S0 = r(a[0], 2) ^ r(a[0], 13) ^ r(a[0], 22), mj = (a[0] & a[1]) ^ (a[0] & a[2]) ^ (a[1] & a[2]), t2 = (S0 + mj) | 0;
        a = [(t1 + t2) | 0, a[0], a[1], a[2], (a[3] + t1) | 0, a[4], a[5], a[6]];
      }
      for (j = 0; j < 8; j++) H[j] = (H[j] + a[j]) | 0;
    }
    return H.map(function (x) { return ("00000000" + (x >>> 0).toString(16)).slice(-8); }).join("");
  }

  var ok = false; try { ok = sessionStorage.getItem(KEY) === A.hash; } catch (e) {}
  if (!ok) root.classList.add("locked");

  document.addEventListener("DOMContentLoaded", function () {
    if (ok) return addChangeBtn();
    var g = document.createElement("div"); g.className = "gate";
    g.innerHTML = '<form class="gate-card" autocomplete="off"><img src="icon.png" alt=""><h1>لوحة تعديل اوريفيو</h1>' +
      '<label for="gpw">الباسورد</label><input id="gpw" type="password" autocomplete="current-password" required>' +
      '<p class="gate-err" role="alert"></p><button class="b b-wine" type="submit">دخول</button></form>';
    document.body.appendChild(g);
    var f = g.querySelector("form"), inp = g.querySelector("input"), err = g.querySelector(".gate-err"), fails = 0, until = 0;
    inp.focus();
    f.addEventListener("submit", function (e) {
      e.preventDefault();
      var wait = Math.ceil((until - Date.now()) / 1000);
      if (wait > 0) { err.textContent = "استنى " + wait + " ثانية وجرّب تاني."; return; }
      if (sha256(A.salt + inp.value) === A.hash) {
        try { sessionStorage.setItem(KEY, A.hash); } catch (x) {}
        root.classList.remove("locked"); g.remove(); addChangeBtn();
      } else {
        fails++; inp.value = ""; err.textContent = "الباسورد غلط.";
        if (fails >= 3) { until = Date.now() + Math.min(300, 15 * fails) * 1000; err.textContent = "الباسورد غلط. استنى شوية قبل المحاولة الجاية."; }
      }
    });
  });

  function addChangeBtn() {
    var bar = document.querySelector(".bar-actions"); if (!bar || bar.querySelector(".chg")) return;
    var b = document.createElement("button"); b.type = "button"; b.className = "b b-ghost chg"; b.textContent = "تغيير الباسورد";
    b.onclick = function () {
      var p = prompt("اكتب الباسورد الجديد (8 حروف على الأقل):");
      if (p === null) return;
      if (p.length < 8) { alert("الباسورد قصير. لازم 8 حروف على الأقل."); return; }
      var salt = ""; var arr = new Uint8Array(8); (window.crypto || {}).getRandomValues ? crypto.getRandomValues(arr) : arr.forEach(function (_, i) { arr[i] = Math.random() * 256; });
      arr.forEach(function (x) { salt += ("0" + x.toString(16)).slice(-2); });
      var txt = '/* بيانات دخول لوحة التعديل (مشفّرة). لتغيير الباسورد استخدم زرار "تغيير الباسورد" جوه اللوحة. */\nwindow.ADMIN_AUTH = { salt: "' + salt + '", hash: "' + sha256(salt + p) + '" };\n';
      var u = URL.createObjectURL(new Blob([txt], { type: "text/javascript" })), a = document.createElement("a");
      a.href = u; a.download = "auth.js"; document.body.appendChild(a); a.click(); a.remove();
      alert("اتحمّل ملف auth.js الجديد.\nارفعه على GitHub مكان القديم (Upload files ← Commit) علشان الباسورد الجديد يشتغل.");
    };
    bar.insertBefore(b, bar.firstChild);
  }
})();
