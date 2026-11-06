'use strict';

const PROYEKSI_CDN = 'https://d2w9rnfcy7mm78.cloudfront.net';

const PROYEKSI_CAROUSELS = [
  {
    key: 'projection',
    ariaKey: 'proyeksiCarouselProjectionAria',
    labels: { id: 'Proyeksi', en: 'Projection' },
    items: [
      [39533693,'6af203296868347e8574877176589cc3.jpg'],
      [39533694,'8e958dfef64e8e3c19e23a12e2cdb047.jpg'],
      [39533695,'30d4c670c35a0f12dd15c76638880768.jpg'],
      [39533692,'2dea1afa1767c75660aec41855521b56.jpg'],
      [39533686,'a44e8d1a788729371cefe5853851e2bc.jpg'],
      [39533667,'0be942897b6212619ebd7eb53a69f033.jpg'],
      [39533655,'1d62dc7df0a59d932529a3831d3fe658.jpg'],
      [39533654,'86ef5cca85b8cdbbdaed7b9e00086845.jpg'],
      [39533653,'965224ad5afab55ff94c370575559047.jpg'],
      [39533652,'b289267e30d67217ad92da0c1270b670.jpg'],
      [39533651,'7b4e279832513101c74c1842616bbd98.jpg'],
      [39533648,'d8ff6465d20cea56e601e6d3321f36e2.jpg'],
      [39533647,'92e51dff76aee349ad8d6c9047d756fc.jpg'],
      [39533643,'4c767935aeed08d963ce4b9a31277879.jpg'],
      [39533642,'05b853748f14163a4193b21301256294.jpg'],
      [39533638,'3887a9c1640fd788eacb9c4a7484f85f.jpg']
    ]
  },
  {
    key: 'walk',
    ariaKey: 'proyeksiCarouselWalkAria',
    labels: { id: 'Dokumentasi Perjalanan', en: 'Documentation of the Walk' },
    items: [
      [39533691,'f47a4f1452e4bffee979c8a021c7c844.jpg'],
      [39533690,'fcbdd8ff36c0e597a9ed333de392456d.jpg'],
      [39533689,'f3a887789c99c494856dee8695a51a90.jpg'],
      [39533688,'fc495fbb29cb0d5172dec1a5aa47a360.jpg'],
      [39533668,'fa0d69d1718ba012a95b53dede3ecb08.jpg'],
      [39533669,'75dbab0ad5a1cfc8e9ddeeca070ab30c.jpg'],
      [39533666,'c30b162a8d3510741d305ad41f5435fb.jpg'],
      [39533665,'5a70ad3d5ffb2ec21fb818124a2fd94d.jpg'],
      [39533644,'a3325b76d5b811b9e536195e35fa5f16.jpg'],
      [39533646,'bc52f5339d09f53e0bd7d1fc6e6d5482.jpg'],
      [39533645,'402f763febc9ee43119abd0d8da85b7a.jpg'],
      [39533639,'deac764c6aae9a016d3bd4df89cc4799.jpg'],
      [39533637,'a7bdc084c5bc314b1445044c4e1db684.jpg']
    ]
  },
  {
    key: 'circuit',
    ariaKey: 'proyeksiCarouselCircuitAria',
    labels: { id: 'Citra Circuit Bent', en: 'Circuit Bent Images' },
    items: [
      [39533683,'7fd05f3c62ad3d5c2e0dcb498787f937.jpg'],
      [39533684,'70fe6f14bd5815295022cd8cd36f2872.jpg'],
      [39533685,'502502899f85f8f64fd3d09f5356c872.jpg'],
      [39533682,'e178922885c18abfe188cbb33cd2e391.jpg'],
      [39533678,'f8e0faa809b50d7304a27c5334dc6c0e.jpg'],
      [39533681,'2f8d1f4dbe4b56da331aa0c3d605de60.jpg'],
      [39533680,'3fd72fb63b53b185b8edfd681dcdeb61.jpg'],
      [39533679,'9e332779a6f7f504e9732f43651a6f65.jpg'],
      [39533671,'be598d1d75ce7ea7e6f0f92daf203b5f.jpg'],
      [39533676,'6662777dde509a45b8fc1b3515470a29.jpg'],
      [39533675,'5d4305ea767230d55219df318c866c2a.jpg'],
      [39533677,'847bac3d7110d9da454852f898eae1f2.jpg'],
      [39533673,'e921a5b586208a07f906cfbfcd18e953.jpg'],
      [39533672,'f65e1f115de8d58e51d6e88abbd04b44.jpg'],
      [39533674,'9a705f1827b698fdcb84b950a4c213e5.jpg'],
      [39533670,'a77d332f1abf1a287577c49f3af8ccd2.jpg'],
      [39533656,'52d23f324f4a097e1c9d23a53cabd94f.jpg'],
      [39533661,'da8ce17a664e484feac8c254ad0c1da1.jpg'],
      [39533663,'1ba27a99ad6dce24a9c77048d72814bc.jpg'],
      [39533657,'3b5c2f673e460c48e4761b818851181e.jpg'],
      [39533659,'d3da3dd5626cbe7b479b80f59f2dbbe6.jpg'],
      [39533662,'2fe53771af6a6994b5ceb9e7a687dfd7.jpg'],
      [39533664,'1e4483813265c10060cf7e19309c948a.jpg'],
      [39533658,'6cc7a725c4c85c153bc67892a7112bb7.jpg'],
      [39533660,'0fc9dc78db3d7d5a2edbba76e9167884.jpg'],
      [39533650,'5465366219fccfd271b669e071c10ef7.jpg'],
      [39533640,'4cb653d72804fe5b9c71b710a6acc51d.jpg'],
      [39533641,'4953b55503ceababac0038d97efe5caf.jpg']
    ]
  }
];

const PROYEKSI_ALT = {
  id: { project: 'Saat Adil Binasa, Setia Kekal Derita', of: 'dari' },
  en: { project: 'When Justice Perishes, Eternal Suffering Replace the Faith', of: 'of' }
};

const PROYEKSI_FACE_MASKS = Object.freeze({
  39533690: [
    [0.34714, 0.30509, 34],
    [0.48906, 0.42222, 28]
  ],
  39533637: [
    [0.72366, 0.41898, 52]
  ]
});


let proyeksiViewer = null;
let proyeksiViewerImage = null;
let proyeksiViewerMaskLayer = null;
let proyeksiViewerCounter = null;
let proyeksiViewerGroup = null;
let proyeksiViewerIndex = 0;
let proyeksiViewerPreviousFocus = null;

function proyeksiCopy(key, fallback) {
  const lang = proyeksiLanguage();
  const copy = {
    id: {
      close: 'Tutup tampilan layar penuh',
      previous: 'Gambar sebelumnya',
      next: 'Gambar berikutnya',
      dialog: 'Karusel gambar layar penuh'
    },
    en: {
      close: 'Close fullscreen image',
      previous: 'Previous image',
      next: 'Next image',
      dialog: 'Fullscreen image carousel'
    }
  };
  return copy[lang]?.[key] || fallback;
}

function createProyeksiViewer() {
  if (proyeksiViewer) return;

  proyeksiViewer = document.createElement('div');
  proyeksiViewer.className = 'arsip-viewer proyeksi-fullscreen-viewer';
  proyeksiViewer.hidden = true;
  proyeksiViewer.setAttribute('role', 'dialog');
  proyeksiViewer.setAttribute('aria-modal', 'true');

  proyeksiViewer.innerHTML = `
    <button class="arsip-viewer-close" type="button">×</button>
    <button class="arsip-viewer-nav arsip-viewer-prev" type="button">‹</button>
    <div class="arsip-viewer-stage">
      <img class="arsip-viewer-image" alt="">
      <div class="proyeksi-face-mask-layer proyeksi-viewer-mask-layer" aria-hidden="true"></div>
      <div class="arsip-viewer-counter" aria-live="polite"></div>
    </div>
    <button class="arsip-viewer-nav arsip-viewer-next" type="button">›</button>
  `;

  document.body.appendChild(proyeksiViewer);

  proyeksiViewerImage = proyeksiViewer.querySelector('.arsip-viewer-image');
  proyeksiViewerImage.addEventListener('load', () => requestAnimationFrame(refreshProyeksiViewerMasks));
  proyeksiViewerMaskLayer = proyeksiViewer.querySelector('.proyeksi-viewer-mask-layer');
  proyeksiViewerCounter = proyeksiViewer.querySelector('.arsip-viewer-counter');

  proyeksiViewer.querySelector('.arsip-viewer-prev').addEventListener('click', () => {
    showProyeksiViewerImage(proyeksiViewerIndex - 1);
  });

  proyeksiViewer.querySelector('.arsip-viewer-next').addEventListener('click', () => {
    showProyeksiViewerImage(proyeksiViewerIndex + 1);
  });

  proyeksiViewer.querySelector('.arsip-viewer-close').addEventListener('click', closeProyeksiViewer);

  proyeksiViewer.addEventListener('click', event => {
    if (event.target === proyeksiViewer || event.target.classList.contains('arsip-viewer-stage')) {
      closeProyeksiViewer();
    }
  });

  updateProyeksiViewerLanguage();
}

function updateProyeksiViewerLanguage() {
  if (!proyeksiViewer) return;
  proyeksiViewer.setAttribute('aria-label', proyeksiCopy('dialog', 'Fullscreen image carousel'));
  proyeksiViewer.querySelector('.arsip-viewer-close')
    .setAttribute('aria-label', proyeksiCopy('close', 'Close fullscreen image'));
  proyeksiViewer.querySelector('.arsip-viewer-prev')
    .setAttribute('aria-label', proyeksiCopy('previous', 'Previous image'));
  proyeksiViewer.querySelector('.arsip-viewer-next')
    .setAttribute('aria-label', proyeksiCopy('next', 'Next image'));
}

function positionProyeksiViewerMasks() {
  if (!proyeksiViewer || proyeksiViewer.hidden || !proyeksiViewerImage?.complete) return;

  const stage = proyeksiViewer.querySelector('.arsip-viewer-stage');
  const imageRect = proyeksiViewerImage.getBoundingClientRect();
  const stageRect = stage.getBoundingClientRect();
  if (!imageRect.width || !imageRect.height) return;

  proyeksiViewerMaskLayer.style.left = `${imageRect.left - stageRect.left}px`;
  proyeksiViewerMaskLayer.style.top = `${imageRect.top - stageRect.top}px`;
  proyeksiViewerMaskLayer.style.width = `${imageRect.width}px`;
  proyeksiViewerMaskLayer.style.height = `${imageRect.height}px`;
}

function renderProyeksiViewerMasks() {
  if (!proyeksiViewerMaskLayer) return;
  proyeksiViewerMaskLayer.replaceChildren();

  if (proyeksiViewerGroup?.key !== 'walk') return;

  const item = proyeksiViewerGroup.items[proyeksiViewerIndex];
  const masks = PROYEKSI_FACE_MASKS[item[0]] || [];

  masks.forEach(([cx, cy, size = 28]) => {
    const dot = document.createElement('span');
    dot.className = 'proyeksi-face-mask-dot';
    dot.style.left = `${cx * 100}%`;
    dot.style.top = `${cy * 100}%`;
    dot.style.width = `${size}px`;
    dot.style.height = `${size}px`;
    proyeksiViewerMaskLayer.appendChild(dot);
  });
}

function refreshProyeksiViewerMasks() {
  positionProyeksiViewerMasks();
  renderProyeksiViewerMasks();
}

function showProyeksiViewerImage(nextIndex) {
  if (!proyeksiViewerGroup?.items?.length) return;

  const items = proyeksiViewerGroup.items;
  proyeksiViewerIndex = (nextIndex + items.length) % items.length;
  const item = items[proyeksiViewerIndex];
  const lang = proyeksiLanguage();
  const copy = PROYEKSI_ALT[lang];
  const category = proyeksiViewerGroup.labels[lang];

  proyeksiViewerMaskLayer.replaceChildren();
  proyeksiViewerImage.src = proyeksiImageUrl(item);
  proyeksiViewerImage.alt =
    `${copy.project} — ${category} ${proyeksiViewerIndex + 1} ${copy.of} ${items.length}`;
  proyeksiViewerCounter.textContent =
    `${String(proyeksiViewerIndex + 1).padStart(2, '0')} / ${String(items.length).padStart(2, '0')}`;
}

function openProyeksiViewer(group, index, trigger) {
  createProyeksiViewer();
  proyeksiViewerGroup = group;
  proyeksiViewerIndex = index;
  proyeksiViewerPreviousFocus = trigger || document.activeElement;
  updateProyeksiViewerLanguage();
  showProyeksiViewerImage(index);
  proyeksiViewer.hidden = false;
  document.body.classList.add('arsip-viewer-open');
  proyeksiViewer.querySelector('.arsip-viewer-close').focus();
}

function closeProyeksiViewer() {
  if (!proyeksiViewer || proyeksiViewer.hidden) return;

  proyeksiViewer.hidden = true;
  proyeksiViewerImage.removeAttribute('src');
  proyeksiViewerMaskLayer.replaceChildren();
  document.body.classList.remove('arsip-viewer-open');

  if (proyeksiViewerPreviousFocus && typeof proyeksiViewerPreviousFocus.focus === 'function') {
    proyeksiViewerPreviousFocus.focus();
  }
}

document.addEventListener('keydown', event => {
  if (!proyeksiViewer || proyeksiViewer.hidden) return;

  if (event.key === 'ArrowLeft') {
    event.preventDefault();
    showProyeksiViewerImage(proyeksiViewerIndex - 1);
  } else if (event.key === 'ArrowRight') {
    event.preventDefault();
    showProyeksiViewerImage(proyeksiViewerIndex + 1);
  } else if (event.key === 'Escape') {
    event.preventDefault();
    closeProyeksiViewer();
  }
});

window.addEventListener('resize', () => {
  if (proyeksiViewer && !proyeksiViewer.hidden && proyeksiViewerImage?.complete) {
    requestAnimationFrame(refreshProyeksiViewerMasks);
  }
}, { passive: true });

function proyeksiImageUrl(item) {
  return `${PROYEKSI_CDN}/${item[0]}/original_${item[1]}`;
}

function proyeksiLanguage() {
  return document.documentElement.lang === 'en' ? 'en' : 'id';
}

function createProyeksiCarousel(group) {
  let index = 0;
  let currentItem = group.items[0];

  const section = document.createElement('section');
  section.className = 'proyeksi-carousel';
  section.tabIndex = 0;
  section.dataset.carousel = group.key;
  section.dataset.i18nAriaLabel = group.ariaKey;

  const header = document.createElement('div');
  header.className = 'proyeksi-carousel-header';

  const controls = document.createElement('div');
  controls.className = 'proyeksi-carousel-controls';

  const previous = document.createElement('button');
  previous.className = 'proyeksi-carousel-button';
  previous.type = 'button';
  previous.dataset.i18nAriaLabel = 'proyeksiCarouselPrevious';
  previous.setAttribute('aria-label', 'Gambar sebelumnya');
  previous.textContent = '‹';

  const counter = document.createElement('span');
  counter.className = 'proyeksi-carousel-counter';
  counter.setAttribute('aria-live', 'polite');

  const next = document.createElement('button');
  next.className = 'proyeksi-carousel-button';
  next.type = 'button';
  next.dataset.i18nAriaLabel = 'proyeksiCarouselNext';
  next.setAttribute('aria-label', 'Gambar berikutnya');
  next.textContent = '›';

  controls.append(previous, counter, next);
  header.append(controls);

  const stage = document.createElement('div');
  stage.className = 'proyeksi-carousel-stage';
  stage.tabIndex = 0;
  stage.setAttribute('role', 'button');

  const image = document.createElement('img');
  image.className = 'proyeksi-carousel-image';
  image.decoding = 'async';
  image.alt = '';

  const maskLayer = document.createElement('div');
  maskLayer.className = 'proyeksi-face-mask-layer';
  maskLayer.setAttribute('aria-hidden', 'true');

  stage.append(image, maskLayer);
  section.append(header, stage);

  function updateAlt() {
    const lang = proyeksiLanguage();
    const copy = PROYEKSI_ALT[lang];
    const category = group.labels[lang];
    image.alt = `${copy.project} — ${category} ${index + 1} ${copy.of} ${group.items.length}`;
  }

  function positionFaceMaskLayer() {
    const imageRect = image.getBoundingClientRect();
    const stageRect = stage.getBoundingClientRect();
    if (!imageRect.width || !imageRect.height) return;

    maskLayer.style.left = `${imageRect.left - stageRect.left}px`;
    maskLayer.style.top = `${imageRect.top - stageRect.top}px`;
    maskLayer.style.width = `${imageRect.width}px`;
    maskLayer.style.height = `${imageRect.height}px`;
  }

  function renderFaceMasks() {
    maskLayer.replaceChildren();
    if (group.key !== 'walk') return;

    const masks = PROYEKSI_FACE_MASKS[currentItem[0]] || [];
    masks.forEach(([cx, cy, size = 28]) => {
      const dot = document.createElement('span');
      dot.className = 'proyeksi-face-mask-dot';
      dot.style.left = `${cx * 100}%`;
      dot.style.top = `${cy * 100}%`;
      dot.style.width = `${size}px`;
      dot.style.height = `${size}px`;
      maskLayer.appendChild(dot);
    });
  }

  function refreshFaceMasks() {
    positionFaceMaskLayer();
    renderFaceMasks();
  }

  function show(nextIndex) {
    index = (nextIndex + group.items.length) % group.items.length;
    currentItem = group.items[index];
    maskLayer.replaceChildren();
    image.classList.add('is-loading');
    image.src = proyeksiImageUrl(currentItem);
    counter.textContent = `${String(index + 1).padStart(2, '0')} / ${String(group.items.length).padStart(2, '0')}`;
    updateAlt();
  }

  image.addEventListener('load', () => {
    image.classList.remove('is-loading');
    requestAnimationFrame(refreshFaceMasks);

    if (proyeksiViewer && !proyeksiViewer.hidden && image === proyeksiViewerImage) {
      requestAnimationFrame(refreshProyeksiViewerMasks);
    }
  });
  image.addEventListener('error', () => {
    image.classList.remove('is-loading');
    maskLayer.replaceChildren();
  });
  previous.addEventListener('click', () => show(index - 1));
  next.addEventListener('click', () => show(index + 1));

  stage.addEventListener('click', () => openProyeksiViewer(group, index, stage));
  stage.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openProyeksiViewer(group, index, stage);
    }
  });

  section.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      show(index - 1);
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      show(index + 1);
    }
  });

  window.addEventListener('resize', () => {
    if (image.complete) requestAnimationFrame(refreshFaceMasks);
  }, { passive: true });

  section.updateAlt = updateAlt;
  show(0);
  return section;
}

const proyeksiCarouselRoot = document.getElementById('proyeksi-carousels');
const proyeksiCarouselSections = [];

if (proyeksiCarouselRoot) {
  PROYEKSI_CAROUSELS.forEach(group => {
    const section = createProyeksiCarousel(group);
    proyeksiCarouselSections.push(section);
    proyeksiCarouselRoot.appendChild(section);
  });
}

window.addEventListener('site-language-change', () => {
  proyeksiCarouselSections.forEach(section => {
    if (typeof section.updateAlt === 'function') section.updateAlt();
  });
  updateProyeksiViewerLanguage();

  if (proyeksiViewer && !proyeksiViewer.hidden) {
    showProyeksiViewerImage(proyeksiViewerIndex);
  }
});
