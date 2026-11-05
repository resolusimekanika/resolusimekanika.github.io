'use strict';

const API_V3 = 'https://api.are.na/v3';
const API_V2 = 'https://api.are.na/v2';
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
    const error = new Error(`Are.na HTTP ${response.status}`);
    error.status = response.status;
    throw error;
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

  if (!image) return null;

  const original =
    image.src ||
    variantSrc(image.original) ||
    null;

  if (!original) return null;

  return {
    original,
    display:
      variantSrc(image.large) ||
      variantSrc(image.display) ||
      variantSrc(image.medium) ||
      variantSrc(image.small) ||
      variantSrc(image.thumb) ||
      original,
    width: Number(image.width) || null,
    height: Number(image.height) || null,
    alt: block?.alt_text || block?.title || block?.generated_title || image?.filename || ''
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

async function getContents() {
  try {
    const response = await fetchJson(
      `${API_V3}/channels/${CHANNEL_ID}/contents?per=100&page=1&sort=position_asc`
    );
    return Array.isArray(response?.data) ? response.data : [];
  } catch (v3Error) {
    console.warn('Are.na v3 gallery request failed; trying v2 fallback.', v3Error);

    const response = await fetchJson(
      `${API_V2}/channels/${CHANNEL_ID}`
    );
    return Array.isArray(response?.contents) ? response.contents : [];
  }
}

async function render() {
  setStatus('');

  try {
    const contents = await getContents();
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
