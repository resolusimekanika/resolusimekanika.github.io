'use strict';

const ARENA_API = 'https://api.are.na/v3';

function arenaVariant(variant) {
  if (!variant) return null;
  if (typeof variant === 'string') return variant;
  return variant.src || variant.src_2x || variant.src_1x || variant.url || null;
}

function arenaImageInfo(block) {
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
      arenaVariant(image.large) ||
      arenaVariant(image.medium) ||
      arenaVariant(image.small) ||
      original,
    width: Number(image.width) || null,
    height: Number(image.height) || null,
    alt: block?.alt_text || block?.title || image?.filename || ''
  };
}

async function arenaBlock(id) {
  const response = await fetch(`${ARENA_API}/blocks/${id}`, {
    headers: { Accept: 'application/json' }
  });

  if (!response.ok) throw new Error(`Are.na HTTP ${response.status}`);
  return response.json();
}

async function hydrateArenaThumbnails() {
  const images = [...document.querySelectorAll('img[data-arena-block]')];

  await Promise.all(images.map(async img => {
    try {
      const block = await arenaBlock(img.dataset.arenaBlock);
      const info = arenaImageInfo(block);
      if (!info) return;

      img.src = info.display;
      img.alt = img.alt || info.alt;

      if (info.width && info.height) {
        img.width = info.width;
        img.height = info.height;
      }
    } catch (error) {
      console.warn('Could not load Are.na thumbnail', error);
    }
  }));
}

hydrateArenaThumbnails();
