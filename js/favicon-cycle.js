'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const frames = [
    '/assets/favicon-white.jpg?v=favicon-flicker-v2',
    '/assets/favicon-black.jpg?v=favicon-flicker-v2'
  ];

  let index = 0;
  let link = document.querySelector('link[rel="icon"]');

  if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.head.appendChild(link);
  }

  link.type = 'image/jpeg';
  link.href = frames[0];

  frames.forEach(src => {
    const preload = new Image();
    preload.src = src;
  });

  window.setInterval(() => {
    index = (index + 1) % frames.length;
    link.href = frames[index];
  }, 250);
});
