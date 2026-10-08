'use strict';

const API = 'https://api.are.na/v3';
const CHANNEL_SLUG = 'post-acoustic-instrumentology-dunia-dalam-suara-2025';

const BLOCK_IDS = [
  51152991,
  40204761,
  40204901,
  40204902,
  40204601,
  40204792,
  40204768,
  40204764,
  40204760,
  40204759,
  40204686,
  40204666,
  40204645,
  51152992
];

const TEXT = window.GALLERY_TEXT || {};

const TEXT_AFTER = {
  0: TEXT.after01,
  3: TEXT.after04,
  9: TEXT.after10,
  13: TEXT.after14
};

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
    const error = new Error(`HTTP ${response.status}`);
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

  const original = image.src || null;
  if (!original) return null;

  return {
    original,
    display:
      variantSrc(image.large) ||
      variantSrc(image.medium) ||
      variantSrc(image.small) ||
      original,
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
    `Open image ${String(index + 1).padStart(2, '0')} at original resolution`
  );

  const img = document.createElement('img');
  img.className = 'gallery-image';
  img.src = info.display;
  img.alt = info.alt || `Artwork documentation image ${String(index + 1).padStart(2, '0')}`;
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

function makeText(value) {
  const text = document.createElement('div');
  text.className = 'gallery-text';
  text.textContent = (value || '').trim();
  return text;
}

async function getBlocks() {
  try {
    const response = await api(
      `/channels/${encodeURIComponent(CHANNEL_SLUG)}/contents?per=100&page=1`
    );

    const contents = Array.isArray(response?.data) ? response.data : [];
    const byId = new Map(
      contents
        .filter(item => item && item.id != null)
        .map(item => [Number(item.id), item])
    );

    const missing = BLOCK_IDS.filter(id => !byId.has(id));

    for (const id of missing) {
      try {
        const block = await api(`/blocks/${id}`);
        if (block?.id != null) byId.set(Number(block.id), block);
      } catch (error) {
        console.error(`Are.na block ${id}:`, error);
      }
    }

    return BLOCK_IDS.map(id => byId.get(id) || null);
  } catch (channelError) {
    console.warn('Channel fetch failed; trying exact public block endpoints.', channelError);

    const blocks = [];

    for (const id of BLOCK_IDS) {
      try {
        blocks.push(await api(`/blocks/${id}`));
      } catch (error) {
        console.error(`Are.na block ${id}:`, error);
        blocks.push(null);
      }
    }

    return blocks;
  }
}

async function render() {
  setStatus('');

  try {
    const blocks = await getBlocks();
    let count = 0;
    const missing = [];

    blocks.forEach((block, index) => {
      const item = block ? makeItem(block, index) : null;

      if (!item) {
        missing.push(BLOCK_IDS[index]);
        return;
      }

      gallery.appendChild(item);

      if (TEXT_AFTER[index] && TEXT_AFTER[index].trim()) {
        gallery.appendChild(makeText(TEXT_AFTER[index]));
      }

      count += 1;
    });

    if (count === 0) {
      setStatus('Could not connect to Are.na from this browser.');
      return;
    }

    if (missing.length) {
      setStatus(
        `Loaded ${count} of ${BLOCK_IDS.length} images. Missing block${missing.length === 1 ? '' : 's'}: ${missing.join(', ')}.`
      );
    }
  } catch (error) {
    console.error(error);
    setStatus('Could not connect to Are.na from this browser.');
  }
}

render();
