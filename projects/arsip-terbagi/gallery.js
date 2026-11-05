'use strict';

const API = 'https://api.are.na/v3';
const CHANNEL_SLUG = 'arsip-terbagi';

const gallery = document.getElementById('gallery');
const statusEl = document.getElementById('status');

function setStatus(message) {
  statusEl.textContent = message || '';
}

async function api(path) {
  const response = await fetch(`${API}${path}`, {
    headers: { Accept: 'application/json' }
  });

  if (!response.ok) {
    throw new Error(`Are.na HTTP ${response.status}`);
  }

  return response.json();
}

function variantSrc(variant) {
  if (!variant) return null;
  if (typeof variant === 'string') return variant;
  return variant.src || variant.src_2x || variant.src_1x || variant.url || null;
}

function imageInfo(block) {
  const image =
    block?.image ||
    block?.attachment?.image ||
    block?.embed?.image ||
    null;

  if (!image?.src) return null;

  return {
    original: image.src,
    display:
      variantSrc(image.large) ||
      variantSrc(image.medium) ||
      variantSrc(image.small) ||
      image.src,
    width: Number(image.width) || null,
    height: Number(image.height) || null,
    alt: block?.alt_text || block?.title || image?.filename || ''
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

async function getAllContents() {
  const items = [];
  let page = 1;

  while (true) {
    const response = await api(
      `/channels/${encodeURIComponent(CHANNEL_SLUG)}/contents?per=100&page=${page}&sort=position`
    );

    const batch = Array.isArray(response?.data) ? response.data : [];
    items.push(...batch);

    const hasMore =
      response?.meta?.has_more_pages === true ||
      response?.meta?.next_page != null;

    if (!hasMore) break;
    page = Number(response?.meta?.next_page) || page + 1;
  }

  return items;
}

async function render() {
  setStatus('');

  try {
    const contents = await getAllContents();
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
    setStatus('Could not connect to the Arsip Terbagi Are.na channel from this browser.');
  }
}

render();
