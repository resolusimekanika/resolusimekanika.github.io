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

const ARSIP_BODY_COPY = {
  en: `
    <p>Arsip Terbagi — Divided Archive performs a wall-separated diptych experience; composed of a body-visual composition with a set of generative sounds that unite the ambiance.</p>

    <p>Sounds unites space through physical and invisible walls, auditory information that the hearing receives even in the politics of consensual ties.</p>

    <p>The archive of sounds mainly come from a variety of physical cassettes collected while I was digging through South Jakarta's 'Blok M Square' underground record stores. In January 26’ I span a visit to Mas Andri's Kedai Musik which is only one of the many vintage and modern physical record stores in the mall's basement. Mas Andri's store is often always my first stop since I was a child.</p>

    <p>This visit, I came in with a vision for my #jajanrock, only acquiring cassette tapes after diving into mixing-mastering processes with the Otari MX-5050 in Chicago from 2024-2026. Few of the many archives added to my collection were Margie Segers' "Jazz Samba" album - 1974, Jopie Latul [or Yopie Latul as it says in the actual cassette]'s "Ambon Jazz Rock" album - 1982, and Hetty Koes Endang's "<em>Damai Dibumi</em>" album [translates to Peace on Earth] - 1978.</p>

    <p>The second element added to my setlist were an archive of episodes from the Indonesian cooking shows I grew up watching "Aroma", of Ibu Sisca Soewitomo, which aired for a decade on national television from 1997-2007 on the <em>Indosiar</em> network.</p>

    <p>Lastly, large repetitive text prompts were introduced as part of the projection. This text bank has been part of an ever-evolving archive, compiled from bites of thoughts that circulated my presence over the years both in original and conversational formats. This specific text archive is very personal, presented in its vulnerable exposure and anonymity.</p>

    <p>I invite the audience to move around the space to complete the information that neither the performer nor the monitor will be able to witness; whether the monitor has something to witness is something up for the audience to decide.</p>

    <p>This performance poses the question of importance when we talk about the production of archives in history; Does the focus impend on the body emitting the information? Or is it the mixed signal of digital archive born out of the body's physical production and visualization of history? Is it this archival value of essay about the creation of this performance? Or is it the present experience made from the witnessing bodies (audience) in real time in the actual space it was performed?</p>

    <p>Spatiality is especially unique at UVA’s landscape. We can say this to be a site-specific performance, circulating the space-dividing center wall, we are entering the private public space as intimacy becomes present.</p>

    <p><em>In the performance architecture,</em> the performer stays behind the projection wall. Unable to witness the materiality of information created through real-time archive screening, remix, and rehistorization.<br>The projector shoots out live generative visuals towards that same center wall on the other side.</p>

    <p class="arsip-body-duration"><em>Duration:</em> 30 minutes</p>
  `,
  id: `
    <p>Arsip Terbagi — Divided Archive menghadirkan pengalaman diptych yang dipisahkan oleh dinding; tersusun dari komposisi tubuh-visual dengan rangkaian bunyi generatif yang menyatukan suasana.</p>

    <p>Bunyi menyatukan ruang melalui dinding-dinding fisik maupun tak kasatmata, sebagai informasi auditori yang diterima pendengaran bahkan di dalam politik ikatan konsensual.</p>

    <p>Arsip bunyi terutama berasal dari beragam kaset fisik yang saya kumpulkan ketika menyusuri toko-toko rekaman bawah tanah di 'Blok M Square', Jakarta Selatan. Pada Januari ’26 saya menyempatkan kunjungan ke Kedai Musik milik Mas Andri, salah satu dari banyak toko rekaman fisik vintage maupun modern di lantai bawah mal tersebut. Toko Mas Andri hampir selalu menjadi persinggahan pertama saya sejak kecil.</p>

    <p>Dalam kunjungan ini, saya datang dengan visi untuk #jajanrock, hanya membeli kaset setelah mendalami proses mixing-mastering dengan Otari MX-5050 di Chicago dari 2024-2026. Beberapa dari banyak arsip yang saya tambahkan ke koleksi adalah album "Jazz Samba" Margie Segers - 1974, album "Ambon Jazz Rock" Jopie Latul [atau Yopie Latul sebagaimana tertulis pada kaset aslinya] - 1982, dan album "<em>Damai Dibumi</em>" Hetty Koes Endang [diterjemahkan ke bahasa Inggris sebagai Peace on Earth] - 1978.</p>

    <p>Elemen kedua yang saya tambahkan ke setlist adalah arsip episode-episode acara memasak Indonesia yang saya tonton sejak kecil, "Aroma", bersama Ibu Sisca Soewitomo, yang tayang selama satu dekade di televisi nasional dari 1997-2007 di jaringan <em>Indosiar</em>.</p>

    <p>Terakhir, prompt teks besar yang repetitif diperkenalkan sebagai bagian dari proyeksi. Bank teks ini telah menjadi bagian dari sebuah arsip yang terus berkembang, dihimpun dari potongan-potongan pikiran yang mengitari kehadiran saya selama bertahun-tahun, baik dalam bentuk asli maupun percakapan. Arsip teks khusus ini sangat personal, ditampilkan dalam keterbukaan yang rentan sekaligus anonim.</p>

    <p>Saya mengundang penonton untuk bergerak mengelilingi ruang guna melengkapi informasi yang tidak dapat disaksikan oleh performer maupun monitor; apakah monitor memang memiliki sesuatu untuk disaksikan adalah sesuatu yang saya serahkan kepada penonton untuk menentukan.</p>

    <p>Pertunjukan ini mengajukan pertanyaan tentang apa yang dianggap penting ketika kita berbicara mengenai produksi arsip dalam sejarah; Apakah fokusnya terletak pada tubuh yang memancarkan informasi? Ataukah pada sinyal campuran arsip digital yang lahir dari produksi fisik tubuh dan visualisasi sejarah? Apakah nilai arsipnya terletak pada esai mengenai penciptaan pertunjukan ini? Ataukah pada pengalaman kini yang terbentuk dari tubuh-tubuh yang menyaksikan (penonton) secara real-time di ruang tempat pertunjukan tersebut benar-benar berlangsung?</p>

    <p>Spatialitas menjadi sangat khas dalam lanskap UVA. Kita dapat menyebutnya sebuah pertunjukan site-specific; dengan mengitari dinding tengah yang membagi ruang, kita memasuki ruang publik privat ketika keintiman menjadi hadir.</p>

    <p><em>Dalam arsitektur pertunjukan,</em> performer tetap berada di belakang dinding proyeksi. Tidak dapat menyaksikan materialitas informasi yang diciptakan melalui pemutaran arsip, remix, dan rehistorisasi secara real-time.<br>Proyektor memancarkan visual generatif live ke dinding tengah yang sama dari sisi seberang.</p>

    <p class="arsip-body-duration"><em>Durasi:</em> 30 menit</p>
  `
};

let arsipBodyCopy = null;

function currentArsipLanguage() {
  return document.documentElement.lang === 'en' ? 'en' : 'id';
}

function updateArsipBodyCopy() {
  if (!arsipBodyCopy) return;

  const language = currentArsipLanguage();
  arsipBodyCopy.lang = language;
  arsipBodyCopy.innerHTML = ARSIP_BODY_COPY[language];
}

function createArsipBodyCopy() {
  const article = document.createElement('article');
  article.className = 'arsip-body-copy';
  article.setAttribute('aria-label', 'Arsip Terbagi project text');
  arsipBodyCopy = article;
  updateArsipBodyCopy();
  return article;
}

window.addEventListener('site-language-change', updateArsipBodyCopy);


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
      if (!item) return;

      if (index === 0) {
        item.appendChild(createArsipBodyCopy());
      }

      gallery.appendChild(item);
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
