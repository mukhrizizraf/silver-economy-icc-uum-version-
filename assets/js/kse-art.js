/* ==========================================================================
   i-CareElder: drawn pictures
   Every picture in this copy is a simple vector drawing written here as
   code: no photographs, no generated images. Colours come from the page's
   own tokens, so the drawings follow each look and light / dark.

   Static markup asks for one with <span class="art" data-art="phone"
   data-tone="t2"></span>; scripts call K.art(name, tone).
   ========================================================================== */
(function (K) {
'use strict';

/* Line scenes on a 150 x 150 grid: a soft round ground plus strokes. */
var ART = {
  masjid: '<path d="M26 118h98M40 118V86h70v32"/><path d="M50 86c0-17 11-27 25-38 14 11 25 21 25 38"/><path d="M75 48V36"/><circle cx="75" cy="31" r="3.5"/><path d="M24 118V74l5-9 5 9v44M116 118V74l5-9 5 9v44"/><path d="M67 118v-13a8 8 0 0 1 16 0v13"/>',
  health: '<circle cx="75" cy="66" r="32"/><path d="M75 49v34M58 66h34"/><path d="M26 118h26l8-14 10 24 9-14h45"/>',
  home: '<path d="M32 76l43-36 43 36"/><path d="M42 68v50h66V68"/><path d="M65 118V94h20v24"/><path d="M75 62c-4-5-12-1-9 5 2 3 6 5 9 7 3-2 7-4 9-7 3-6-5-10-9-5z"/>',
  transport: '<path d="M26 104V70a6 6 0 0 1 6-6h50v40"/><path d="M82 76h22l18 20v8h-6"/><path d="M26 104h10M60 104h24M110 104h12"/><path d="M38 74h38v14H38z"/><circle cx="48" cy="106" r="10"/><circle cx="100" cy="106" r="10"/>',
  meals: '<path d="M32 78h86a43 43 0 0 1-86 0z"/><path d="M58 62c0-8 8-10 8-18M76 62c0-8 8-10 8-18M94 62c0-8 8-10 8-18"/><path d="M56 124h38"/>',
  people: '<circle cx="58" cy="58" r="13"/><circle cx="95" cy="66" r="10"/><path d="M30 120c2-22 13-34 28-34s26 12 28 34"/><path d="M84 94c3-3 7-4 11-4 11 0 19 10 21 30"/>',
  group: '<circle cx="75" cy="54" r="11"/><circle cx="42" cy="70" r="9"/><circle cx="108" cy="70" r="9"/><path d="M52 120c1-22 10-34 23-34s22 12 23 34"/><path d="M22 120c1-14 8-24 20-24M128 120c-1-14-8-24-20-24"/>',
  advice: '<rect x="46" y="40" width="58" height="78" rx="9"/><path d="M62 40v-7h26v7"/><path d="M60 62h30M60 77h30"/><path d="M60 98l8 8 15-16"/>',
  tea: '<circle cx="46" cy="52" r="11"/><circle cx="104" cy="52" r="11"/><path d="M20 118c1-20 11-32 26-32M130 118c-1-20-11-32-26-32"/><path d="M58 96h34v8a17 17 0 0 1-34 0z"/><path d="M92 100h5a6 6 0 0 1 0 12h-5"/><path d="M70 86c0-5 5-6 5-11M80 86c0-5 5-6 5-11"/><path d="M52 124h46"/>',
  phone: '<rect x="50" y="24" width="50" height="100" rx="11"/><path d="M68 33h14"/><rect x="59" y="46" width="32" height="18" rx="5"/><rect x="59" y="72" width="32" height="18" rx="5"/><circle cx="75" cy="110" r="4"/>',
  phonehelp: '<circle cx="50" cy="52" r="12"/><path d="M24 122c2-22 12-34 26-34s24 12 26 34"/><rect x="86" y="44" width="38" height="66" rx="8"/><path d="M98 56h14M97 72h16M97 86h16"/><path d="M70 74l14-6"/>',
  elder: '<path d="M75 26c-22 0-37 16-37 38v20c0 7 5 11 11 11h52c6 0 11-4 11-11V64c0-22-15-38-37-38z"/><ellipse cx="75" cy="66" rx="19" ry="22"/><path d="M68 76c4 3 10 3 14 0"/><path d="M67 62v1M83 62v1"/><path d="M30 130c4-22 21-35 45-35s41 13 45 35"/>'
};
K.ART = ART;
var TONES = { t1: 1, t2: 1, t3: 1, t4: 1, t5: 1, paddy: 1, gold: 1 };
K.art = function (name, tone, cls) {
  return '<svg class="art-svg' + (cls ? ' ' + cls : '') + '" viewBox="0 0 150 150" aria-hidden="true" focusable="false"' +
    (TONES[tone] ? ' style="--art:var(--' + tone + ')"' : '') + '><circle class="a-soft" cx="75" cy="78" r="58"/><g class="a-line">' + (ART[name] || ART.people) + '</g></svg>';
};

/* The Overview hero: Kedah paddy fields at golden hour, Gunung Jerai behind,
   a kampung house on stilts and two coconut palms. Wide, and it crops
   cleanly to a phone (slice). */
K.heroArt = function () {
  function palm(x, y, s) {
    return '<g class="h-palm" transform="translate(' + x + ' ' + y + ') scale(' + s + ')">' +
      '<path class="h-trunk" d="M0 0c4-60 14-120 34-170"/>' +
      '<path class="h-leaf" d="M34-170c-30-6-60 4-78 26M34-170c-14-26-44-38-70-34M34-170c18-24 50-30 76-20M34-170c34-4 62 14 74 40M34-170c4 30-6 56-24 74"/></g>';
  }
  var rows = '';
  for (var i = 0; i < 9; i++) {
    var y = 470 + i * 22 + i * i * 2.2;
    rows += '<path d="M-20 ' + y + 'C300 ' + (y - 14) + ' 900 ' + (y - 6) + ' 1220 ' + (y - 22) + '"/>';
  }
  return '<svg class="hero-art" viewBox="0 0 1200 660" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">' +
    '<defs><linearGradient id="hSky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" class="h-sky1"/><stop offset="1" class="h-sky2"/></linearGradient></defs>' +
    '<rect width="1200" height="660" fill="url(#hSky)"/>' +
    '<circle class="h-glow" cx="860" cy="250" r="150"/><circle class="h-sun" cx="860" cy="250" r="66"/>' +
    '<path class="h-bird" d="M300 150q10-8 20 0q10-8 20 0M360 120q8-6 16 0q8-6 16 0M960 140q8-6 16 0q8-6 16 0"/>' +
    '<path class="h-far" d="M0 360L120 330L240 300L330 322L430 262L520 206L590 236L650 222L760 290L880 330L1000 312L1200 288V660H0z"/>' +
    '<path class="h-near" d="M0 412C200 388 380 396 600 404S1000 396 1200 376V660H0z"/>' +
    '<path class="h-field1" d="M0 452C300 430 900 440 1200 418V660H0z"/>' +
    '<path class="h-field2" d="M0 540C350 516 850 528 1200 500V660H0z"/>' +
    '<g class="h-rows">' + rows + '</g>' +
    palm(170, 452, 1.05) + palm(1040, 440, .9) +
    '<g class="h-house">' +
      '<path class="h-stilt" d="M262 440v-44M300 440v-44M370 440v-44M408 440v-44"/>' +
      '<rect class="h-wall" x="250" y="330" width="170" height="66" rx="3"/>' +
      '<path class="h-roof" d="M228 336L335 262L442 336z"/>' +
      '<path class="h-gable" d="M300 312L335 288L370 312z"/>' +
      '<rect class="h-win" x="272" y="348" width="34" height="30" rx="2"/><rect class="h-win" x="364" y="348" width="34" height="30" rx="2"/>' +
      '<rect class="h-door" x="318" y="344" width="34" height="52" rx="2"/>' +
      '<path class="h-stair" d="M326 396l-14 44M346 396l-14 44M322 410h20M318 424h20"/>' +
    '</g></svg>';
};

/* the person at the centre of the Overview map: a round portrait drawn in lines */
K.elderMark = function () {
  return '<g class="elder-mark" transform="translate(-31 -31) scale(.4133)"><rect width="150" height="150" class="em-bg"/>' +
    '<g class="a-line">' + ART.elder + '</g></g>';
};

function fill() {
  Array.prototype.slice.call(document.querySelectorAll('[data-art]')).forEach(function (el) {
    if (el.getAttribute('data-drawn')) return;
    el.setAttribute('data-drawn', '1');
    var tone = el.getAttribute('data-tone');
    if (TONES[tone]) el.style.setProperty('--art', 'var(--' + tone + ')');
    el.innerHTML = el.getAttribute('data-art') === 'hero' ? K.heroArt() : K.art(el.getAttribute('data-art'), el.getAttribute('data-tone'));
  });
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fill); else fill();
K.drawArt = fill;

})(window.KSE);
