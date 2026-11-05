'use strict';

const API = 'https://api.are.na/v2';
const CHANNEL_ID = 5021576;

const gallery = document.getElementById('gallery');
const statusEl = document.getElementById('status');

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
      image?.large?.url ||
      image?.display?.url ||
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

function makeItem(block, index) {
  const info = imageInfo(block);
  if (!info) return null;

  const figure = document.createElement('figure');
  figure.className = 'gallery-item';

  const link = document.createElement('a');
  link.className = 'gallery-link';
  link.href = info.original;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.title = 'Open original image';
  link.setAttribute(
    'aria-label',
    `Open Arsip Terbagi image ${String(index + 1).padStart(2, '0')} at original resolution`
  );

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
