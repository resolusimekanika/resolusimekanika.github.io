'use strict';

const API = 'https://api.are.na/v2';
const CHANNEL_ID = 5021576;

const gallery = document.getElementById('gallery');
const statusEl = document.getElementById('status');

let viewerImages = [];
let viewerIndex = 0;
let viewer = null;
let viewerImage = null;
let viewerCounter = null;
let viewerPreviousFocus = null;

function setStatus(message) {
  statusEl.textContent = message || '';
}

async function fetchJson(url) {
  const response = await fetch(url, {
    headers: { Accept: 'application/json' }
  });

  if (!response.ok) {
    throw new Error(`Are.na HTTP ${response.status}`);
  }

  return response.json();
}

function imageInfo(block) {
  const image = block?.image;
  const original = image?.original?.url || null;

  if (!original) return null;

  return {
    original,
    display:
      image?.display?.url ||
      image?.large?.url ||
      image?.thumb?.url ||
      original,
    width: Number(image?.original?.width || image?.width) || null,
    height: Number(image?.original?.height || image?.height) || null,
    alt:
      block?.title ||
      block?.generated_title ||
      block?.content ||
      image?.filename ||
      ''
  };
}

function createViewer() {
  if (viewer) return;

  viewer = document.createElement('div');
  viewer.className = 'arsip-viewer';
  viewer.hidden = true;
  viewer.setAttribute('role', 'dialog');
  viewer.setAttribute('aria-modal', 'true');
  viewer.setAttribute('aria-label', 'Arsip Terbagi image carousel');

  viewer.innerHTML = `
    <button class="arsip-viewer-close" type="button" aria-label="Close image carousel">×</button>
    <button class="arsip-viewer-nav arsip-viewer-prev" type="button" aria-label="Previous image">‹</button>
    <div class="arsip-viewer-stage">
      <img class="arsip-viewer-image" alt="">
      <div class="arsip-viewer-counter" aria-live="polite"></div>
    </div>
    <button class="arsip-viewer-nav arsip-viewer-next" type="button" aria-label="Next image">›</button>
  `;

  document.body.appendChild(viewer);

  viewerImage = viewer.querySelector('.arsip-viewer-image');
  viewerCounter = viewer.querySelector('.arsip-viewer-counter');

  viewer.querySelector('.arsip-viewer-prev').addEventListener('click', () => showViewerImage(viewerIndex - 1));
  viewer.querySelector('.arsip-viewer-next').addEventListener('click', () => showViewerImage(viewerIndex + 1));
  viewer.querySelector('.arsip-viewer-close').addEventListener('click', closeViewer);

  viewer.addEventListener('click', event => {
    if (event.target === viewer || event.target.classList.contains('arsip-viewer-stage')) {
      closeViewer();
    }
  });
}

function preloadViewerImage(index) {
  if (!viewerImages.length) return;

  const normalized = (index + viewerImages.length) % viewerImages.length;
  const info = viewerImages[normalized];
  if (!info?.display) return;

  const preload = new Image();
  preload.decoding = 'async';
  preload.src = info.display;
}

function showViewerImage(index) {
  if (!viewerImages.length) return;

  viewerIndex = (index + viewerImages.length) % viewerImages.length;
  const info = viewerImages[viewerIndex];

  if (viewerImage.src !== info.display) {
    viewerImage.src = info.display;
  }

  viewerImage.alt = info.alt || `Arsip Terbagi image ${viewerIndex + 1}`;
  viewerCounter.textContent = `${String(viewerIndex + 1).padStart(2, '0')} / ${String(viewerImages.length).padStart(2, '0')}`;

  preloadViewerImage(viewerIndex - 1);
  preloadViewerImage(viewerIndex + 1);
}

function openViewer(index, trigger) {
  createViewer();
  viewerPreviousFocus = trigger || document.activeElement;
  showViewerImage(index);
  viewer.hidden = false;
  document.body.classList.add('arsip-viewer-open');
  viewer.querySelector('.arsip-viewer-close').focus();
}

function closeViewer() {
  if (!viewer || viewer.hidden) return;

  viewer.hidden = true;
  viewerImage.removeAttribute('src');
  document.body.classList.remove('arsip-viewer-open');

  if (viewerPreviousFocus && typeof viewerPreviousFocus.focus === 'function') {
    viewerPreviousFocus.focus();
  }
}

function makeItem(block, index) {
  const info = imageInfo(block);
  if (!info) return null;

  const figure = document.createElement('figure');
  figure.className = 'gallery-item';

  const link = document.createElement('a');
  link.className = 'gallery-link';
  link.href = info.original;
  link.title = 'Open image carousel';
  link.setAttribute(
    'aria-label',
    `Open Arsip Terbagi image ${String(index + 1).padStart(2, '0')} in carousel`
  );

  link.addEventListener('click', event => {
    event.preventDefault();
    openViewer(index, link);
  });

  const img = document.createElement('img');
  img.className = 'gallery-image';
  img.src = info.display;
  img.alt = info.alt || `Arsip Terbagi documentation image ${String(index + 1).padStart(2, '0')}`;
  img.decoding = 'async';
  img.loading = index < 2 ? 'eager' : 'lazy';

  if (index === 0) img.fetchPriority = 'high';

  if (info.width && info.height) {
    img.width = info.width;
    img.height = info.height;
  }

  link.appendChild(img);
  figure.appendChild(link);
  return figure;
}

document.addEventListener('keydown', event => {
  if (!viewer || viewer.hidden) return;

  if (event.key === 'ArrowLeft') {
    event.preventDefault();
    showViewerImage(viewerIndex - 1);
  } else if (event.key === 'ArrowRight') {
    event.preventDefault();
    showViewerImage(viewerIndex + 1);
  } else if (event.key === 'Escape') {
    event.preventDefault();
    closeViewer();
  }
});

async function render() {
  setStatus('');

  try {
    const response = await fetchJson(
      `${API}/channels/${CHANNEL_ID}?per=100`
    );

    const contents = Array.isArray(response?.contents)
      ? [...response.contents].sort(
          (a, b) => Number(b?.position || 0) - Number(a?.position || 0)
        )
      : [];

    const imageBlocks = contents.filter(block => imageInfo(block));
    viewerImages = imageBlocks.map(block => imageInfo(block));

    imageBlocks.forEach((block, index) => {
      const item = makeItem(block, index);
      if (item) gallery.appendChild(item);
    });

    if (!imageBlocks.length) {
      setStatus('No Arsip Terbagi images could be loaded from Are.na.');
    }
  } catch (error) {
    console.error(error);
    setStatus('Could not load the Arsip Terbagi image archive.');
  }
}

render();
