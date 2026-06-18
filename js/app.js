/* ============================================================
   GSAP Showcase — shell (abas, lazy iframes e demos de Flip)
   ============================================================ */
(function () {
  "use strict";

  var hasGSAP = typeof window.gsap !== "undefined";
  if (hasGSAP && typeof Flip !== "undefined") gsap.registerPlugin(Flip);

  /* ---------- Abas ---------- */
  var tabs = Array.prototype.slice.call(document.querySelectorAll(".tab"));
  var panels = Array.prototype.slice.call(document.querySelectorAll(".panel"));

  function loadIframes(panel) {
    panel.querySelectorAll("iframe[data-src]").forEach(function (f) {
      if (!f.getAttribute("src")) f.setAttribute("src", f.getAttribute("data-src"));
    });
  }

  function animateIn(panel) {
    if (!hasGSAP) return;
    var items = panel.querySelectorAll(".demo, .extra-block, .demo-card");
    gsap.fromTo(items,
      { y: 24, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 0.5, ease: "power3.out", stagger: 0.05, overwrite: true });
  }

  var validTabs = tabs.map(function (t) { return t.dataset.tab; });

  function activate(name, opts) {
    opts = opts || {};
    if (validTabs.indexOf(name) === -1) return;
    tabs.forEach(function (t) { t.classList.toggle("active", t.dataset.tab === name); });
    panels.forEach(function (p) {
      var on = p.dataset.tab === name;
      p.classList.toggle("active", on);
      if (on) { loadIframes(p); animateIn(p); }
    });
    if (opts.updateHash !== false && location.hash.slice(1) !== name) {
      history.replaceState(null, "", "#" + name);
    }
    if (opts.scroll !== false) window.scrollTo({ top: 0, behavior: "smooth" });
  }

  tabs.forEach(function (t) {
    t.addEventListener("click", function () { activate(t.dataset.tab); });
  });

  window.addEventListener("hashchange", function () {
    activate(location.hash.slice(1), { updateHash: false });
  });

  // aba inicial (respeita o hash da URL, ex.: #flip)
  var initial = location.hash.slice(1);
  if (validTabs.indexOf(initial) !== -1) {
    activate(initial, { updateHash: false, scroll: false });
  } else {
    var first = document.querySelector(".panel.active");
    if (first) { loadIframes(first); animateIn(first); }
  }

  /* ---------- Helper de Flip ---------- */
  function flip(targets, mutate, opts) {
    if (!hasGSAP) { mutate(); return; }
    var state = Flip.getState(targets);
    mutate();
    Flip.from(state, Object.assign({ duration: 0.6, ease: "power2.inOut" }, opts || {}));
  }

  /* ---------- 1) Card vira seção ---------- */
  var fcCard = document.getElementById("fcCard");
  if (fcCard) {
    fcCard.addEventListener("click", function () {
      flip(fcCard, function () { fcCard.classList.toggle("full"); }, { absolute: true });
      var hint = fcCard.querySelector(".h");
      if (hint) hint.textContent = fcCard.classList.contains("full") ? "clique para voltar ⤡" : "clique para expandir ⤢";
    });
  }

  /* ---------- 2) Imagem pequena vira banner ---------- */
  var fiImg = document.getElementById("fiImg");
  if (fiImg) {
    fiImg.addEventListener("click", function () {
      flip(fiImg, function () { fiImg.classList.toggle("banner"); });
    });
  }

  /* ---------- 3) Grid reorganizando ---------- */
  var fgGrid = document.getElementById("fgGrid");
  if (fgGrid) {
    var colors = ["green", "blue", "purple", "green", "blue", "purple", "green", "blue"];
    colors.forEach(function (c) {
      var tile = document.createElement("div");
      tile.className = "fg-tile c-" + c;
      tile.dataset.color = c;
      fgGrid.appendChild(tile);
    });

    var shuffleBtn = document.getElementById("fgShuffle");
    if (shuffleBtn) {
      shuffleBtn.addEventListener("click", function () {
        var tiles = Array.prototype.slice.call(fgGrid.children);
        if (!hasGSAP) return;
        var state = Flip.getState(tiles);
        tiles.sort(function () { return Math.random() - 0.5; })
             .forEach(function (t) { fgGrid.appendChild(t); });
        Flip.from(state, { duration: 0.6, ease: "power2.inOut", stagger: 0.04 });
      });
    }

    document.querySelectorAll("#flip-3 [data-filter]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var f = btn.dataset.filter;
        var tiles = Array.prototype.slice.call(fgGrid.children);
        if (!hasGSAP) {
          tiles.forEach(function (t) { t.style.display = (f === "all" || t.dataset.color === f) ? "" : "none"; });
          return;
        }
        var state = Flip.getState(tiles);
        tiles.forEach(function (t) {
          t.style.display = (f === "all" || t.dataset.color === f) ? "" : "none";
        });
        Flip.from(state, {
          duration: 0.5, ease: "power2.inOut", stagger: 0.03,
          onEnter: function (els) { return gsap.fromTo(els, { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, duration: 0.4 }); },
          onLeave: function (els) { return gsap.to(els, { opacity: 0, scale: 0, duration: 0.4 }); }
        });
      });
    });
  }

  /* ---------- 4) Menu expandindo ---------- */
  var fmMenu = document.getElementById("fmMenu");
  if (fmMenu) {
    fmMenu.addEventListener("click", function (e) {
      if (e.target.tagName === "A") e.preventDefault();
      flip(fmMenu, function () { fmMenu.classList.toggle("open"); }, {
        absolute: true,
        onComplete: function () {
          if (hasGSAP && fmMenu.classList.contains("open")) {
            gsap.from("#fmMenu .items a", { x: -20, autoAlpha: 0, stagger: 0.07, duration: 0.4, ease: "power2.out" });
          }
        }
      });
    });
  }

  /* ---------- 5) Elemento compartilhado entre seções ---------- */
  var sharedEl = document.getElementById("sharedEl");
  var slotA = document.getElementById("slotA");
  var slotB = document.getElementById("slotB");
  var fsMove = document.getElementById("fsMove");
  if (sharedEl && slotA && slotB && fsMove) {
    var inA = true;
    fsMove.addEventListener("click", function () {
      if (!hasGSAP) { (inA ? slotB : slotA).appendChild(sharedEl); inA = !inA; return; }
      var state = Flip.getState(sharedEl);
      (inA ? slotB : slotA).appendChild(sharedEl);
      inA = !inA;
      Flip.from(state, { duration: 0.7, ease: "power3.inOut", scale: true });
      fsMove.textContent = inA ? "Mover →" : "← Voltar";
    });
  }
})();
