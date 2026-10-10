'use strict';

(() => {
  const frames = [
    '/assets/favicon-black.png?v=favicon-v4&frame=0',
    '/assets/favicon-white.png?v=favicon-v4&frame=1'
  ];

  let frame = 0;

  function setAnimatedFavicon(src) {
    const old = document.getElementById('animated-favicon');
    if (old) old.remove();

    const link = document.createElement('link');
    link.id = 'animated-favicon';
    link.rel = 'icon';
    link.type = 'image/png';
    link.sizes = '64x64';
    link.href = src;
    document.head.appendChild(link);
  }

  frames.forEach(src => {
    const img = new Image();
    img.src = src;
  });

  setAnimatedFavicon(frames[0]);

  window.setInterval(() => {
    frame = (frame + 1) % frames.length;
    setAnimatedFavicon(frames[frame]);
  }, 250);
})();
