export const TR = 'tr';
export const EN = 'en';

export type Language = typeof EN | typeof TR;

export const translations = {
  en: {
    loading: "Loading Presentation...",
    registerObject: "Register New Object",
    saveAndDiscover: "Save & Discover",
    languageToggle: "EN / TR",
    pressQuestionMark: "Press '?' for controls",
    slideIndicator: "Slide",
  },
  tr: {
    loading: "Sunum Yükleniyor...",
    registerObject: "Yeni Eser Kaydı",
    saveAndDiscover: "Kaydet ve Keşfet",
    languageToggle: "EN / TR",
    pressQuestionMark: "Kontroller için '?' tuşuna basın",
    slideIndicator: "Slayt",
  }
};
