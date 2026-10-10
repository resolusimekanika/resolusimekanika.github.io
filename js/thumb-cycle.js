'use strict';

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-cycle-images]').forEach(card => {
    const image = card.querySelector('.project-image');
    const images = (card.dataset.cycleImages || '').split('|').filter(Boolean);
    if (!image || images.length < 2) return;

    images.forEach(src => {
      const preload = new Image();
      preload.src = src;
    });

    let current = 0;
    let lastX = null;
    let lastY = null;
    const movementThreshold = 20;

    const swapImage = () => {
      let next = current;
      while (next === current && images.length > 1) {
        next = Math.floor(Math.random() * images.length);
      }
      current = next;
      image.src = images[current];
    };

    card.addEventListener('pointerenter', event => {
      lastX = event.clientX;
      lastY = event.clientY;
    });

    card.addEventListener('pointermove', event => {
      if (lastX === null || lastY === null) {
        lastX = event.clientX;
        lastY = event.clientY;
        return;
      }

      const dx = event.clientX - lastX;
      const dy = event.clientY - lastY;
      if (Math.hypot(dx, dy) < movementThreshold) return;

      lastX = event.clientX;
      lastY = event.clientY;
      swapImage();
    });

    card.addEventListener('pointerleave', () => {
      current = 0;
      image.src = images[0];
      lastX = null;
      lastY = null;
    });
  });
});
