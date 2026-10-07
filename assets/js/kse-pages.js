/* ==========================================================================
   Silver Economy: page controllers
   One init per body[data-page]. Each init binds events once and pushes its
   render functions onto K.onLang, which the shell runs on load and on every
   language switch.
   ========================================================================== */
(function (K) {
'use strict';
var $ = K.$, $$ = K.$$, esc = K.esc;

/* ---------- 01 Overview ---------- */
K.pageInit.overview = function () {
  var svg = $('#constellation'), first = true, scene = $('[data-scene]'), hero = $('#hero');
  /* The sheet rises over the photo and the photo recedes behind it, the way
     an iOS view steps back when a sheet is presented. One scroll listener
     writes --p (0 to 1); kse-ios.css does the rest. */
  if (hero && scene && !K.reduceMotion) {
    var ticking = false;
    var settle = function () {
      ticking = false;
      var h = scene.offsetHeight || 1, p = Math.min(1, Math.max(0, window.scrollY / (h * 0.7)));
      hero.style.setProperty('--p', p.toFixed(3));
    };
    window.addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(settle); } }, { passive: true });
    settle();
  }
  /* A restrained cursor parallax keeps the couple and the room feeling like
     a living illustration without moving layout or stealing the CTAs. */
  if (scene && !K.reduceMotion) {
    var raf = 0;
    scene.addEventListener('pointermove', function (e) {
      var r = scene.getBoundingClientRect();
      var x = ((e.clientX - r.left) / r.width - .5) * 2;
      var y = ((e.clientY - r.top) / r.height - .5) * 2;
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(function () {
        scene.style.setProperty('--mx', (x * 8).toFixed(2) + 'px');
        scene.style.setProperty('--my', (y * 5).toFixed(2) + 'px');
      });
    });
    scene.addEventListener('pointerleave', function () {
      scene.style.setProperty('--mx', '0px'); scene.style.setProperty('--my', '0px');
    });
  }
  /* the map draws on its own, so a problem there never blanks the lists below */
  K.onLang.push(function () {
    K.viz.constellation(svg, $('#consLegend'), first); first = false;
    K.viz.needPicker(svg, $('#needBar'), $('#needOut'));
  });
  K.onLang.push(function () {
    $('#why').innerHTML = K.why.map(function (w) {
      return '<div class="fig"><b>' + esc(K.L(w.big)) + '</b><p>' + esc(K.L(w.t)) + '</p><small>' + esc(K.T('Source: ', 'Sumber: ') + K.L(w.src)) + '</small></div>';
    }).join('');
    $('#partnerList').innerHTML = K.partners.map(function (p) {
      var s = K.partnerStatus[p.s];
      return '<li><b>' + esc(K.L(p.n)) + '</b>' + K.pill(s.c === 'verified' ? 'Verified' : 'Candidate', K.L(s)) + '</li>';
    }).join('');
    $('#team').innerHTML = K.team.map(function (m, i) {
      return '<li class="person' + (m.cls ? ' ' + m.cls : '') + '"><span class="avatar avatar-' + i + '" aria-hidden="true">' + esc(m.i) + '</span><div><b>' + esc(m.n) + '</b><span>' + esc(K.L(m.r)) + '</span></div></li>';
    }).join('');
    $('#track').innerHTML = K.track.map(function (t) { return '<li><b>' + esc(t.n) + '</b><span>' + esc(K.L(t.t)) + '</span></li>'; }).join('');
    /* ticked in the application form, so each one carries a drawn tick */
    if ($('#plans')) $('#plans').innerHTML = K.plans.map(function (p) {
      return '<li><svg class="tick" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.2 4.2L19 7"/></svg><b>' + esc(K.L(p.n)) + '</b><span>' + esc(K.L(p.t)) + '</span></li>';
    }).join('');
  });
};

/* ---------- 04 Try a case: see kse-assist.js (rules) and kse-case-ui.js (screens) ---------- */

/* ---------- 08 Our Silver App ---------- */
K.pageInit.app = function () {
  var current = 0, screens = K.$$('[data-screen]'), dots = $('#appDots'), progress = $('#appProgress');
  /* two paths share the welcome screen: getting help (screens 1 to 9) and giving (data-flow="give") */
  function num(s) { return Number(s.getAttribute('data-screen')); }
  var flows = { help: [0], give: [0] };
  screens.forEach(function (s) { if (num(s)) flows[s.getAttribute('data-flow') === 'give' ? 'give' : 'help'].push(num(s)); });
  var flow = flows.help;
  function show(n) {
    if (n !== 0 && flows.give.indexOf(n) > 0) flow = flows.give; else if (n !== 0) flow = flows.help;
    current = n;
    var at = flow.indexOf(current);
    screens.forEach(function (s) { s.classList.toggle('is-active', num(s) === current); });
    if (progress) progress.style.setProperty('--v', ((at + 1) / flow.length * 100) + '%');
    if (dots) dots.innerHTML = flow.map(function (sn, i) { return '<button type="button" class="' + (sn === current ? 'is-on' : '') + '" data-app-dot="' + sn + '" aria-label="Screen ' + (i + 1) + '"></button>'; }).join('');
    var back = $('#appScreenBack');
    if (back) {
      back.disabled = !current;
      back.style.visibility = current ? 'visible' : 'hidden';
    }
  }
  function step(d) { var i = flow.indexOf(current) + d; if (i >= 0 && i < flow.length) show(flow[i]); }
  function move(n) { if (n === 0) flow = flows.help; show(n); }
  $('#appLaunch').addEventListener('click', function () { move(0); document.querySelector('.phone-mock').scrollIntoView({ behavior: K.reduceMotion ? 'auto' : 'smooth', block: 'center' }); });
  $('#appScreens').addEventListener('click', function (e) {
    var next = e.target.closest('[data-app-next]'), reset = e.target.closest('[data-app-reset]'), choice = e.target.closest('.mock-choices button'), lang = e.target.closest('[data-app-lang]'), jump = e.target.closest('[data-app-go]');
    if (jump) return show(Number(jump.getAttribute('data-app-go')));
    if (next) { if (current === 0) flow = flows.help; step(1); } if (reset) move(0); if (choice) { var grp = choice.parentNode; if (grp.hasAttribute('data-multi')) { var on = !choice.classList.contains('is-selected'); choice.classList.toggle('is-selected', on); choice.setAttribute('aria-pressed', String(on)); } else { [].forEach.call(grp.querySelectorAll('button'), function (b) { b.classList.remove('is-selected'); b.setAttribute('aria-pressed', 'false'); }); choice.classList.add('is-selected'); choice.setAttribute('aria-pressed', 'true'); } } if (lang) K.setLang(K.lang === 'bm' ? 'en' : 'bm');
  });
  $('#appScreenBack').addEventListener('click', function () { step(-1); });
  $('#appDots').addEventListener('click', function (e) { var b = e.target.closest('[data-app-dot]'); if (b) move(Number(b.getAttribute('data-app-dot'))); });
  show(0);
};

})(window.KSE);
