// Shared carousel delegation and utilities for Taqueritos
export function initCarouselDelegation() {
  if (window.__taqueritos_carousel_ready) return;
  window.__taqueritos_carousel_ready = true;

  function closest(el, selector) {
    if (!el || !(el instanceof Element)) return null;
    return el.closest(selector);
  }

  function findVisibleTrackForButton(btn_el) {
    if (!btn_el) return null;
    // Prefer data-carousel-id on ancestor
    var dataOwner = closest(btn_el, '[data-carousel-id]');
    var track = null;
    if (dataOwner) {
      var carouselId = dataOwner.getAttribute('data-carousel-id');
      if (carouselId) {
        track = document.querySelector('.games-carousel-track[data-carousel-id="' + carouselId + '"]');
      }
    }

    // Explicit target on button
    var explicitTarget = btn_el.getAttribute && btn_el.getAttribute('data-carousel-target');
    if (!track && explicitTarget) {
      track = document.querySelector('.games-carousel-track[data-carousel-id="' + explicitTarget + '"]');
    }

    if (!track) {
      // Fallback: nearest section visible track
      var section = closest(btn_el, 'section');
      if (!section) return null;
      var tracks = Array.from(section.querySelectorAll('.games-carousel-track'));
      for (var i = 0; i < tracks.length; i++) {
        var t = tracks[i];
        var display = getComputedStyle(t).display;
        var visibility = getComputedStyle(t).visibility;
        var isVisible = display !== 'none' && visibility !== 'hidden' && t.offsetHeight > 0;
        if (isVisible) {
          track = t;
          break;
        }
      }
      if (!track) track = tracks[0] || null;
    }

    return track;
  }

  document.addEventListener('click', function (e) {
    var target = e.target;
    if (!target) return;

    var nextBtn = closest(target, '.games-carousel-btn-next');
    var prevBtn = closest(target, '.games-carousel-btn-prev');
    if (!(nextBtn || prevBtn)) return;

    var btn_el = nextBtn || prevBtn;
    var track = findVisibleTrackForButton(btn_el);
    if (!track) return;

    var firstCard = track.querySelector('.game-card, .game-slide-mobile, .game-slide-desktop');
    if (!firstCard) return;

    var cardWidth = firstCard.getBoundingClientRect().width;
    var gapStr = getComputedStyle(track).gap || getComputedStyle(track).columnGap || '16px';
    var gap = parseFloat(gapStr) || 16;
    var scrollAmount = cardWidth + gap;

    if (nextBtn) {
      track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    } else {
      track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }

    e.preventDefault();
    e.stopPropagation();
  }, false);
}

export function computeCardScrollAmount(track) {
  if (!track) return 0;
  var firstCard = track.querySelector('.game-card, .game-slide-mobile, .game-slide-desktop');
  if (!firstCard) return 0;
  var cardWidth = firstCard.getBoundingClientRect().width;
  var gapStr = getComputedStyle(track).gap || getComputedStyle(track).columnGap || '16px';
  var gap = parseFloat(gapStr) || 16;
  return cardWidth + gap;
}
