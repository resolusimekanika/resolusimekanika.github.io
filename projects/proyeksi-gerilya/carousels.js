'use strict';

const PROYEKSI_CDN = 'https://d2w9rnfcy7mm78.cloudfront.net';
const PROYEKSI_ARENA_API = 'https://api.are.na/v3';
const PROYEKSI_GIF_CHANNEL = 'saat-adil-binasa-setia-kekal-derita-when-justice-perishes-eternal-suffering-replace-the-faith-gif';
const PROYEKSI_FEATURE_GIF_PARTS = [
  '/assets/proyeksi-gerilya/gm12p5/part-00.txt',
  '/assets/proyeksi-gerilya/gm12p5/part-01.txt',
  '/assets/proyeksi-gerilya/gm12p5/part-02.txt',
  '/assets/proyeksi-gerilya/gm12p5/part-03.txt',
  '/assets/proyeksi-gerilya/gm12p5/part-04.txt',
  '/assets/proyeksi-gerilya/gm12p5/part-05.txt',
  '/assets/proyeksi-gerilya/gm12p5/part-06.txt',
  '/assets/proyeksi-gerilya/gm12p5/part-07.txt'
];


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
    [0.695, 0.395, 96]
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
  if (item && typeof item === 'object' && !Array.isArray(item) && item.url) {
    return item.url;
  }
  return `${PROYEKSI_CDN}/${item[0]}/original_${item[1]}`;
}

async function fetchProyeksiGifItems() {
  const response = await fetch(
    `${PROYEKSI_ARENA_API}/channels/${encodeURIComponent(PROYEKSI_GIF_CHANNEL)}/contents?per=100&sort=position_desc`,
    { headers: { Accept: 'application/json' } }
  );

  if (!response.ok) {
    throw new Error(`Are.na GIF channel HTTP ${response.status}`);
  }

  const data = await response.json();
  const contents = Array.isArray(data?.data) ? data.data : [];

  return contents
    .map(block => {
      const image = block?.image;
      const original =
        image?.src ||
        image?.original?.url ||
        null;

      if (!original) return null;

      return {
        id: block.id,
        url: original,
        title:
          block?.title ||
          block?.alt_text ||
          image?.filename ||
          'Animated GIF'
      };
    })
    .filter(Boolean);
}

async function loadProyeksiFeatureGifUrl() {
  const responses = await Promise.all(
    PROYEKSI_FEATURE_GIF_PARTS.map(url => fetch(url))
  );

  responses.forEach(response => {
    if (!response.ok) {
      throw new Error(`Feature GIF chunk HTTP ${response.status}`);
    }
  });

  const parts = await Promise.all(responses.map(response => response.text()));
  const encoded = parts.join('');
  const binary = atob(encoded);
  const bytes = new Uint8Array(binary.length);

  for (let offset = 0; offset < binary.length; offset += 65536) {
    const end = Math.min(offset + 65536, binary.length);
    for (let i = offset; i < end; i += 1) {
      bytes[i] = binary.charCodeAt(i);
    }
  }

  return URL.createObjectURL(new Blob([bytes], { type: 'image/gif' }));
}

function createProyeksiDescription() {
  const article = document.createElement('article');
  article.className = 'proyeksi-project-description';

  const copy = {
    en: `
      <p>What seems to be the exclusive experience of cinema is broken down from its walls into vivid spatial reality. Accumulating mass media in a live, generative performance. Reading my environment and responding through a dialectical spatial conversation about free speech, placement, and media representation. Through illumination, I realize how the reflections of my surroundings affect me, the speed at which I travel, and the content I choose to linger on just a little longer than others. This experience is generative; the glimpses of narrative an audience encounters are generative. Situating itself within the format of experimental filmmaking.</p>

      <p>Video imaging was made possible by animating sequences through the Sandin Image Processor, part of the Film, Video, New Media, and Animation department's collection at the School of the Art Institute of Chicago on Michigan Avenue. Under the mentorship of James Connolly, I learned to understand the history of this machine. Physically occupying wall space, the Sandin Image Processor works through patch-cable modulations. Emerging from Chicago's early video art scene in the 1970s, the Sandin Image Processor renounces intellectual property in the most comedic yet evolutionary way. Through Dan Sandin's Distribution Religion and Phil Morton's subsequent COPY-IT-RIGHT, the machine became more than an instrument. It became a proposition for how knowledge, technology, and creative production could circulate without the usual restrictions of ownership.</p>

      <p>This video synthesizer works by modulating voltages across various processing stages of the video signal, even making audio-reactive capabilities possible. Media archaeology plays into my concept of modulating mass media, re-representing visual properties while drawing public attention beyond the conventional, fixed screens of pixels found in computer monitors, cinema screens, and televisions.</p>

      <p>Leading on to <a href="/projects/proyeksi-jalanan/">Proyeksi Jalanan</a>, I purposely fabricate this projection system to be directional, with respect for the public's individual identities; avoiding the capture of faces while leaving sounds intact, as well as the presence of their bodies. To make something visible does not necessarily mean to expose everything. In these public encounters, I negotiate what can be illuminated, what remains obscured, and what is allowed to pass through. We all calibrate ourselves through life this way, gently, with a hustle attitude. Leaning towards progress by laying the screen on canvases that ground us all together: the pavements, the walls, the parks, the darkness, the streets.</p>

      <p>I actively find places for these images and texts to sit on. I am conscious 24/7, as both my homes are about 12 hours apart, meaning that when I am supposed to be asleep, my family is starting their day. Every 12 hours is another morning for me. My movements acknowledge the danger and lack of security I encounter as a woman in dark urban spaces, yet I remain consciously aware and awake.</p>

      <p>This traveling projection was intended to voice community grievances throughout the 2025 #ResetIndonesia movement. The legal protest hours in Indonesia (WIB, UTC+7) coincided with a suitable time for my projections in Chicago. It was important for this project to be executed as a team. Brought together from different parts of the world, we each looked out for one another, and I am extremely grateful for their time.</p>

      <p>I aim to continue these practices across various spaces and places. I create tools to help me through my practice, and this tool is to evolve in the following project, <a href="/projects/proyeksi-jalanan/">Proyeksi Jalanan</a>, as a wearable and handheld apparatus. Every landscape tells a different story. This way, I build on improvisation and the generative nature of everyday life, seeking visibility through public spaces, whether on domestic walls, porous fences, bridges, roads, or construction sites.</p>

      <p>These placements stay in line with my intention to cast light on spaces that evolve through time and human labor. Human intervention in development plays an active role in setting change in motion for future generations to come.</p>
    `,
    id: `
      <p>Apa yang tampak sebagai pengalaman eksklusif sinema dipecah keluar dari dinding-dindingnya menuju realitas spasial yang hidup. Mengakumulasi media massa dalam sebuah performans generatif secara langsung. Membaca lingkungan saya dan meresponsnya melalui percakapan spasial dialektis tentang kebebasan berbicara, penempatan, dan representasi media. Melalui iluminasi, saya menyadari bagaimana pantulan lingkungan sekitar memengaruhi saya, kecepatan saya bergerak, dan konten yang saya pilih untuk saya tatap sedikit lebih lama daripada yang lain. Pengalaman ini bersifat generatif; kilasan narasi yang ditemui penonton juga bersifat generatif. Menempatkan dirinya di dalam format pembuatan film eksperimental.</p>

      <p>Pencitraan video dimungkinkan melalui animasi sekuens menggunakan Sandin Image Processor, bagian dari koleksi departemen Film, Video, New Media, and Animation di School of the Art Institute of Chicago di Michigan Avenue. Di bawah bimbingan James Connolly, saya belajar memahami sejarah mesin ini. Secara fisik menempati ruang dinding, Sandin Image Processor bekerja melalui modulasi kabel patch. Muncul dari skena awal seni video Chicago pada 1970-an, Sandin Image Processor menolak kepemilikan intelektual dengan cara yang sekaligus jenaka dan evolusioner. Melalui Distribution Religion karya Dan Sandin dan COPY-IT-RIGHT yang kemudian dikembangkan Phil Morton, mesin ini menjadi lebih dari sekadar instrumen. Ia menjadi sebuah proposisi tentang bagaimana pengetahuan, teknologi, dan produksi kreatif dapat beredar tanpa batasan kepemilikan yang lazim.</p>

      <p>Sintesis video ini bekerja dengan memodulasi tegangan pada berbagai tahapan pemrosesan sinyal video, bahkan memungkinkan kemampuan audio-reaktif. Arkeologi media berperan dalam konsep saya untuk memodulasi media massa, merepresentasikan ulang properti visual sambil mengarahkan perhatian publik melampaui layar piksel konvensional dan tetap yang ditemukan pada monitor komputer, layar bioskop, dan televisi.</p>

      <p>Berlanjut menuju <a href="/projects/proyeksi-jalanan/">Proyeksi Jalanan</a>, saya dengan sengaja merancang sistem proyeksi ini agar bersifat terarah, dengan menghormati identitas individual publik; menghindari penangkapan wajah sambil membiarkan suara tetap utuh, beserta kehadiran tubuh mereka. Membuat sesuatu terlihat tidak selalu berarti mengekspos semuanya. Dalam perjumpaan publik ini, saya bernegosiasi tentang apa yang dapat diterangi, apa yang tetap tersamarkan, dan apa yang diperbolehkan untuk lewat. Kita semua mengkalibrasi diri melalui hidup dengan cara seperti ini, secara lembut, dengan sikap hustle. Condong menuju kemajuan dengan meletakkan layar pada kanvas-kanvas yang menambatkan kita bersama: trotoar, dinding, taman, kegelapan, jalanan.</p>

      <p>Saya secara aktif mencari tempat bagi gambar dan teks ini untuk berada. Saya sadar 24/7, karena kedua rumah saya berjarak sekitar 12 jam, yang berarti ketika saya seharusnya tidur, keluarga saya sedang memulai hari mereka. Setiap 12 jam adalah pagi yang lain bagi saya. Gerak saya mengakui bahaya dan kurangnya rasa aman yang saya hadapi sebagai perempuan di ruang urban yang gelap, namun saya tetap sadar dan terjaga.</p>

      <p>Proyeksi keliling ini dimaksudkan untuk menyuarakan keresahan komunitas selama gerakan #ResetIndonesia 2025. Jam legal demonstrasi di Indonesia (WIB, UTC+7) bertepatan dengan waktu yang sesuai untuk proyeksi saya di Chicago. Penting bagi proyek ini untuk dijalankan sebagai tim. Dipertemukan dari berbagai belahan dunia, kami saling menjaga satu sama lain, dan saya sangat berterima kasih atas waktu mereka.</p>

      <p>Saya bertujuan melanjutkan praktik ini di berbagai ruang dan tempat. Saya menciptakan alat untuk membantu saya dalam praktik, dan alat ini akan berkembang dalam proyek berikutnya, <a href="/projects/proyeksi-jalanan/">Proyeksi Jalanan</a>, sebagai perangkat wearable dan handheld. Setiap lanskap menceritakan kisah yang berbeda. Dengan cara ini, saya membangun improvisasi dan sifat generatif kehidupan sehari-hari, mencari visibilitas melalui ruang publik, baik pada dinding rumah, pagar berpori, jembatan, jalan, maupun lokasi konstruksi.</p>

      <p>Penempatan-penempatan ini tetap sejalan dengan niat saya untuk menyorot ruang-ruang yang berevolusi melalui waktu dan kerja manusia. Intervensi manusia dalam pembangunan memainkan peran aktif dalam menggerakkan perubahan bagi generasi-generasi mendatang.</p>
    `
  };

  function updateLanguage() {
    const language = proyeksiLanguage();
    article.lang = language;
    article.innerHTML = copy[language];
  }

  article.updateLanguage = updateLanguage;
  updateLanguage();
  return article;
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
    section.setAttribute('aria-label', category);
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

function createProyeksiGrid(group) {
  const section = document.createElement('section');
  section.className = 'proyeksi-grid-section';
  section.dataset.carousel = group.key;

  const grid = document.createElement('div');
  grid.className = 'proyeksi-still-grid';

  const images = [];

  group.items.forEach((item, index) => {
    const button = document.createElement('button');
    button.className = 'proyeksi-grid-item';
    button.type = 'button';

    const image = document.createElement('img');
    image.className = 'proyeksi-grid-image';
    image.src = proyeksiImageUrl(item);
    image.decoding = 'async';
    image.loading = index < 4 ? 'eager' : 'lazy';

    button.appendChild(image);
    button.addEventListener('click', () => openProyeksiViewer(group, index, button));
    grid.appendChild(button);
    images.push({ button, image, index });
  });

  function updateAlt() {
    const lang = proyeksiLanguage();
    const copy = PROYEKSI_ALT[lang];
    const category = group.labels[lang];
    section.setAttribute('aria-label', category);

    images.forEach(entry => {
      const label =
        `${copy.project} — ${category} ${entry.index + 1} ${copy.of} ${group.items.length}`;
      entry.image.alt = label;
      entry.button.setAttribute('aria-label', label);
    });
  }

  section.appendChild(grid);
  section.updateAlt = updateAlt;
  updateAlt();
  return section;
}

const proyeksiCarouselRoot = document.getElementById('proyeksi-carousels');
const proyeksiCarouselSections = [];

async function renderProyeksiMedia() {
  if (!proyeksiCarouselRoot) return;

  const [projectionGroup, walkGroup, circuitGroup] = PROYEKSI_CAROUSELS;

  const projectionSection = createProyeksiCarousel(projectionGroup);
  proyeksiCarouselSections.push(projectionSection);
  proyeksiCarouselRoot.appendChild(projectionSection);

  const featureSlot = document.createElement('div');
  featureSlot.className = 'proyeksi-feature-gif-slot';
  featureSlot.setAttribute('aria-busy', 'true');
  proyeksiCarouselRoot.appendChild(featureSlot);

  const projectDescription = createProyeksiDescription();
  proyeksiCarouselSections.push(projectDescription);
  proyeksiCarouselRoot.appendChild(projectDescription);

  const walkSection = createProyeksiCarousel(walkGroup);
  proyeksiCarouselSections.push(walkSection);
  proyeksiCarouselRoot.appendChild(walkSection);

  const gifSlot = document.createElement('div');
  gifSlot.className = 'proyeksi-gif-slot';
  proyeksiCarouselRoot.appendChild(gifSlot);

  const gridSection = createProyeksiGrid(circuitGroup);
  proyeksiCarouselSections.push(gridSection);
  proyeksiCarouselRoot.appendChild(gridSection);

  try {
    const featureUrl = await loadProyeksiFeatureGifUrl();
    const featureGroup = {
      key: 'feature-gif',
      labels: { id: 'GIF', en: 'GIF' },
      items: [{ id: 'gm12p5', url: featureUrl, title: 'GM12p5 animated GIF' }]
    };
    const featureCarousel = createProyeksiCarousel(featureGroup);
    featureCarousel.classList.add('proyeksi-feature-gif');
    proyeksiCarouselSections.push(featureCarousel);
    featureSlot.replaceWith(featureCarousel);
  } catch (error) {
    console.error('Could not load featured Proyeksi Gerilya GIF.', error);
    featureSlot.remove();
  }

  try {
    const gifItems = await fetchProyeksiGifItems();

    if (!gifItems.length) {
      gifSlot.remove();
      return;
    }

    const gifGroup = {
      key: 'gif',
      labels: { id: 'GIF', en: 'GIF' },
      items: gifItems
    };

    const gifCarousel = createProyeksiCarousel(gifGroup);
    proyeksiCarouselSections.push(gifCarousel);
    gifSlot.replaceWith(gifCarousel);
  } catch (error) {
    console.error('Could not load Proyeksi Gerilya GIF channel.', error);
    gifSlot.remove();
  }
}
renderProyeksiMedia();

window.addEventListener('site-language-change', () => {
  proyeksiCarouselSections.forEach(section => {
    if (typeof section.updateAlt === 'function') section.updateAlt();
    if (typeof section.updateLanguage === 'function') section.updateLanguage();
  });
  updateProyeksiViewerLanguage();

  if (proyeksiViewer && !proyeksiViewer.hidden) {
    showProyeksiViewerImage(proyeksiViewerIndex);
  }
});
