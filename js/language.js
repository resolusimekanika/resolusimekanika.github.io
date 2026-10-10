'use strict';

const SITE_LANG_KEY = 'resolusi-mekanika-language';
const SITE_DEFAULT_LANG = 'id';

const SITE_COPY = {
  id: {
    navWork: 'KARYA',
    navSpatial: 'PATUNG / ELEKTRONIKA / INSTALASI / PROYEKSI',
    navCanvas: 'KANVAS / GESTUR',
    navLive: 'SUARA / PERFORMANS',
    navWriting: 'SASTRA / RISET',
    navWorkshops: 'LOKAKARYA / DEMO',
    navArchive: 'ARSIP / KOLABORASI',
    categoryAnimation: 'ANIMASI',
    categoryArchive: 'ARSIP',
    categoryPublication: 'PUBLIKASI',
    titleArsipTerbagi: 'Arsip Terbagi',
    titleWormZine: 'WORM - zine kolektif',
    titleProyeksiGerilya: 'Proyeksi Gerilya',
    titleSuratJakarta: 'Surat Cinta Untuk Jakarta (Nota-nota Kolektif dari 2023-2026)',
    titleWormArchive: 'WORM - Arsip Komunitas',
    titleSaatAdil: 'Saat Adil Binasa, Setia Kekal Derita',
    titleTranscript: 'Transkrip Kultur: iterasi I & II',
    titleStayAway: 'Stay Away Stay Alive - Sebuah Antologi',
    navAbout: 'TENTANG RESOLUSI MEKANIKA / CV / KONTAK',

    spatialTitle: 'PATUNG / ELEKTRONIKA / INSTALASI / PROYEKSI',
    spatialIntro: 'Patung, elektronika, instalasi, proyeksi, dan karya ruang.',

    canvasTitle: 'KANVAS / GESTUR',
    canvasIntro: 'Kanvas, lukisan, gambar, gestur, dan karya berbasis permukaan.',

    liveTitle: 'SUARA / PERFORMANS',
    liveIntro: 'Pertunjukan, bunyi, Resolusi Mekanika, radio, dan set langsung.',

    writingTitle: 'SASTRA / RISET',
    writingIntro: 'Tulisan, riset, percakapan, catatan, dan dokumentasi.',

    workshopsTitle: 'LOKAKARYA / DEMO',
    workshopsIntro: 'Lokakarya, zine, edisi, demonstrasi, dan proyek partisipatif.',

    archiveTitle: 'ARSIP / KOLABORASI',
    archiveIntro: 'Kolaborasi, animasi, band, artikel, dan dokumentasi eksternal.',

    aboutTitle: 'TENTANG RESOLUSI MEKANIKA',
    aboutIntro: 'Biografi, CV, kontak, dan tautan.',

    projectTags: 'suara / material / ruang / udara bergerak / pendengaran'
  },

  en: {
    navWork: 'WORK',
    navSpatial: 'SCULPTURE / ELECTRONICS / INSTALLATION / PROJECTION',
    navCanvas: 'CANVAS / GESTURES',
    navLive: 'SOUND / PERFORMANCE',
    navWriting: 'WRITING / RESEARCH',
    navWorkshops: 'WORKSHOPS / EDITIONS',
    navArchive: 'ARCHIVE / COLLABORATIONS',
    categoryAnimation: 'ANIMATION',
    categoryArchive: 'ARCHIVE',
    categoryPublication: 'ZINE',
    titleArsipTerbagi: 'Divided Archive',
    titleWormZine: 'WORM - Collective Zine',
    titleProyeksiGerilya: 'Guerilla Projection',
    titleSuratJakarta: 'Love Letter To Jakarta (Collective Notes from 2023-2026)',
    titleWormArchive: 'WORM - Community Archives',
    titleSaatAdil: 'When Justice Perishes, Eternal Suffering Replace the Faith',
    titleTranscript: 'Transcript of Culture: iteration I & II',
    titleStayAway: 'Stay Away Stay Alive: The Anthology',
    navAbout: 'ABOUT RESOLUSI MEKANIKA / CV / CONTACT',

    spatialTitle: 'SCULPTURE / ELECTRONICS / INSTALLATION / PROJECTION',
    spatialIntro: 'Sculpture, electronics, installation, projection, and spatial works.',

    canvasTitle: 'CANVAS / GESTURES',
    canvasIntro: 'Canvas, painting, drawing, gesture, and surface-based works.',

    liveTitle: 'SOUND / PERFORMANCE',
    liveIntro: 'Performances, sound, Resolusi Mekanika, radio, and live sets.',

    writingTitle: 'WRITING / RESEARCH',
    writingIntro: 'Writing, research, conversations, notes, and documentation.',

    workshopsTitle: 'WORKSHOPS / EDITIONS',
    workshopsIntro: 'Workshops, zines, editions, demonstrations, and participatory projects.',

    archiveTitle: 'ARCHIVE / COLLABORATIONS',
    archiveIntro: 'Collaborations, animation, bands, articles, and external documentation.',

    aboutTitle: 'ABOUT RESOLUSI MEKANIKA',
    aboutIntro: 'Biography, CV, contact, and links.',

    projectTags: 'sound / material / space / moving air / listening'
  }
};

function getSiteLanguage() {
  const saved = localStorage.getItem(SITE_LANG_KEY);
  return saved === 'en' ? 'en' : SITE_DEFAULT_LANG;
}

function applySiteLanguage(lang) {
  const selected = lang === 'en' ? 'en' : 'id';
  document.documentElement.lang = selected === 'id' ? 'id' : 'en';

  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.dataset.i18n;
    const value = SITE_COPY[selected]?.[key];
    if (typeof value === 'string') element.textContent = value;
  });

  document.querySelectorAll('[data-lang]').forEach(button => {
    const active = button.dataset.lang === selected;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-pressed', active ? 'true' : 'false');
  });

  window.dispatchEvent(new CustomEvent('site-language-change', {
    detail: { language: selected }
  }));
}

document.addEventListener('DOMContentLoaded', () => {
  const initial = getSiteLanguage();
  applySiteLanguage(initial);

  document.querySelectorAll('[data-lang]').forEach(button => {
    button.addEventListener('click', () => {
      const lang = button.dataset.lang === 'en' ? 'en' : 'id';
      localStorage.setItem(SITE_LANG_KEY, lang);
      applySiteLanguage(lang);
    });
  });
});
