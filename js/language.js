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
    categoryPerformance: 'PERFORMANS',
    categoryInstallation: 'INSTALASI',
    categoryProjection: 'PROYEKSI',
    categoryCollaboration: 'KOLABORASI',
    titleTakeOffBlindfold: 'Take Off the Blindfold, Adjust Your Eyes, Look in the Mirror, See the Face of Your Mother x Sound Design untuk Jonni Peppers',
    titleMacamPagi: 'Macam Pagi: Perbincangan Dengan Ibu',
    titleRevelation: 'Baru saja kusadari bahwa benak dan kata yang terucap terasa hilang kaitan, - Dan ku tak bisa memaksakannya.',
    titleArsipTerbagi: 'Arsip Terbagi',
    projectPrimaryArsipTerbagi: 'Arsip Terbagi [2026]',
    projectSecondaryArsipTerbagi: 'Divided Archive',
    pageTitleArsipTerbagi: 'Arsip Terbagi [2026] — Resolusi Mekanika',
    titleWormZine: 'WORM - zine kolektif',
    projectPrimaryWormZine: 'WORM - zine kolektif',
    projectSecondaryWormZine: 'WORM - Collective Zine',
    pageTitleWormZine: 'WORM - zine kolektif — Resolusi Mekanika',
    titleProyeksiGerilya: 'Proyeksi Gerilya',
    projectPrimaryProyeksiGerilya: 'Proyeksi Gerilya [2025]',
    projectSecondaryProyeksiGerilya: 'Guerilla Projection',
    pageTitleProyeksiGerilya: 'Proyeksi Gerilya [2025] — Resolusi Mekanika',
    videoTitleProyeksiGerilya: 'Dokumentasi video Proyeksi Gerilya',
    proyeksiDocumentation: 'Chicago, IL 09-2025\n\nDokumentasi oleh\nD. Wibowo\nJay Wei\nJohn Thomure\nMiles Dharapak',
    titleSuratJakarta: 'Surat Cinta Untuk Jakarta (Nota-nota Kolektif dari 2023-2026)',
    titleWormArchive: 'WORM - Arsip Komunitas',
    projectPrimaryWormArchive: 'WORM - Arsip Komunitas',
    projectSecondaryWormArchive: 'WORM - Community Archives',
    pageTitleWormArchive: 'WORM - Arsip Komunitas — Resolusi Mekanika',
    titleSaatAdil: 'Saat Adil Binasa, Setia Kekal Derita',
    titleTranscript: 'Transkrip Kultur: iterasi I & II',
    titleStayAway: 'Stay Away Stay Alive - Sebuah Antologi',
    projectPrimaryDuniaDalamSuara: 'Post-Acoustic Instrumentology: Dunia Dalam Suara [2025]',
    projectSecondaryDuniaDalamSuara: 'Post-Acoustic Instrumentology: World Within Sound',
    pageTitleDuniaDalamSuara: 'Post-Acoustic Instrumentology: Dunia Dalam Suara [2025] — Resolusi Mekanika',
    projectPrimaryUChicagoQuadraphonics: 'University of Chicago - Pertunjukan Quadraphonics di Bond Chapel x Jack Herscowitz [2026]',
    projectSecondaryUChicagoQuadraphonics: 'University of Chicago - Quadraphonics show at the Bond Chapel x Jack Herscowitz',
    pageTitleUChicagoQuadraphonics: 'University of Chicago - Pertunjukan Quadraphonics di Bond Chapel x Jack Herscowitz [2026] — Resolusi Mekanika',
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
    categoryPerformance: 'PERFORMANCE',
    categoryInstallation: 'INSTALLATION',
    categoryProjection: 'PROJECTION',
    categoryCollaboration: 'COLLABORATION',
    titleTakeOffBlindfold: 'Take Off the Blindfold, Adjust Your Eyes, Look in the Mirror, See the Face of Your Mother x Sound Design for Jonni Peppers',
    titleMacamPagi: 'Morning Kinds: Conversation with Mother',
    titleRevelation: 'Having a sort of revelation that my thoughts and the words that form them feel so entirely unrelated, – And I can’t force them to.',
    titleArsipTerbagi: 'Divided Archive',
    projectPrimaryArsipTerbagi: 'Divided Archive [2026]',
    projectSecondaryArsipTerbagi: 'Arsip Terbagi',
    pageTitleArsipTerbagi: 'Divided Archive [2026] — Resolusi Mekanika',
    titleWormZine: 'WORM - Collective Zine',
    projectPrimaryWormZine: 'WORM - Collective Zine',
    projectSecondaryWormZine: 'WORM - zine kolektif',
    pageTitleWormZine: 'WORM - Collective Zine — Resolusi Mekanika',
    titleProyeksiGerilya: 'Guerilla Projection',
    projectPrimaryProyeksiGerilya: 'Guerilla Projection [2025]',
    projectSecondaryProyeksiGerilya: 'Proyeksi Gerilya',
    pageTitleProyeksiGerilya: 'Guerilla Projection [2025] — Resolusi Mekanika',
    videoTitleProyeksiGerilya: 'Guerilla Projection video documentation',
    proyeksiDocumentation: 'Chicago, IL 09-2025\n\nDocumentation by\nD. Wibowo\nJay Wei\nJohn Thomure\nMiles Dharapak',
    titleSuratJakarta: 'Love Letter To Jakarta (Collective Notes from 2023-2026)',
    titleWormArchive: 'WORM - Community Archives',
    projectPrimaryWormArchive: 'WORM - Community Archives',
    projectSecondaryWormArchive: 'WORM - Arsip Komunitas',
    pageTitleWormArchive: 'WORM - Community Archives — Resolusi Mekanika',
    titleSaatAdil: 'When Justice Perishes, Eternal Suffering Replace the Faith',
    titleTranscript: 'Transcript of Culture: iteration I & II',
    titleStayAway: 'Stay Away Stay Alive: The Anthology',
    projectPrimaryDuniaDalamSuara: 'Post-Acoustic Instrumentology: World Within Sound [2025]',
    projectSecondaryDuniaDalamSuara: 'Post-Acoustic Instrumentology: Dunia Dalam Suara',
    pageTitleDuniaDalamSuara: 'Post-Acoustic Instrumentology: World Within Sound [2025] — Resolusi Mekanika',
    projectPrimaryUChicagoQuadraphonics: 'University of Chicago - Quadraphonics show at the Bond Chapel x Jack Herscowitz [2026]',
    projectSecondaryUChicagoQuadraphonics: 'University of Chicago - Pertunjukan Quadraphonics di Bond Chapel x Jack Herscowitz',
    pageTitleUChicagoQuadraphonics: 'University of Chicago - Quadraphonics show at the Bond Chapel x Jack Herscowitz [2026] — Resolusi Mekanika',
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

  document.querySelectorAll('[data-i18n-title]').forEach(element => {
    const key = element.dataset.i18nTitle;
    const value = SITE_COPY[selected]?.[key];
    if (typeof value === 'string') element.setAttribute('title', value);
  });

  document.querySelectorAll('[data-i18n-aria-label]').forEach(element => {
    const key = element.dataset.i18nAriaLabel;
    const value = SITE_COPY[selected]?.[key];
    if (typeof value === 'string') element.setAttribute('aria-label', value);
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
