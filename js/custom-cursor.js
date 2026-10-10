'use strict';

(() => {
  const MOBILE_MAX = 820;
  const html = document.documentElement;
  let cursor = null;

  function ensureCursor() {
    if (cursor) return cursor;

    cursor = document.createElement('img');
    cursor.id = 'site-custom-cursor';
    cursor.src = '/assets/cursor.png?v=cursor-follow-v1';
    cursor.alt = '';
    cursor.setAttribute('aria-hidden', 'true');
    cursor.draggable = false;
    document.body.appendChild(cursor);
    return cursor;
  }

  function activateAt(x, y) {
    if (window.innerWidth <= MOBILE_MAX) {
      html.classList.remove('custom-cursor-active');
      return;
    }

    const el = ensureCursor();
    html.classList.add('custom-cursor-active');
    el.style.transform = 'translate3d(' + x + 'px,' + y + 'px,0)';
  }

  window.addEventListener('pointermove', event => {
    if (event.pointerType && event.pointerType !== 'mouse') return;
    activateAt(event.clientX, event.clientY);
  }, { passive: true });

  // Mouse-event fallback for browsers/devices that do not expose pointerType.
  window.addEventListener('mousemove', event => {
    activateAt(event.clientX, event.clientY);
  }, { passive: true });

  document.addEventListener('mouseleave', () => {
    html.classList.remove('custom-cursor-active');
  });

  window.addEventListener('blur', () => {
    html.classList.remove('custom-cursor-active');
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth <= MOBILE_MAX) {
      html.classList.remove('custom-cursor-active');
    }
  });
})();
