'use strict';

const API = 'https://api.are.na/v2';
const CHANNEL_SLUG = 'w-o-r-m-tbfulptl80g';
const EXCLUDED_BLOCK_IDS = new Set([45672329, 45672328, 45672347]);

const gallery = document.getElementById('worm-community-gallery');
const statusEl = document.getElementById('worm-community-status');

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

  const img = document.createElement('img');
  img.className = 'gallery-image';
  img.src = info.display;
  img.alt =
    info.alt ||
    `WORM Community Archives image ${String(index + 1).padStart(2, '0')}`;
  img.decoding = 'async';
  img.loading = index < 2 ? 'eager' : 'lazy';

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
      `${API}/channels/${encodeURIComponent(CHANNEL_SLUG)}?per=100`
    );

    const contents = Array.isArray(response?.contents)
      ? [...response.contents].sort(
          (a, b) => Number(b?.position || 0) - Number(a?.position || 0)
        )
      : [];

    const blocks = contents.filter(block => {
      const id = Number(block?.id);
      return !EXCLUDED_BLOCK_IDS.has(id) && imageInfo(block);
    });

    blocks.forEach((block, index) => {
      const item = makeItem(block, index);
      if (item) gallery.appendChild(item);
    });

    if (!blocks.length) {
      setStatus('No archive images could be loaded from Are.na.');
    }
  } catch (error) {
    console.error(error);
    setStatus('Could not connect to the WORM Are.na archive from this browser.');
  }
}

render();
