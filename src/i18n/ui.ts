export type LanguageKeys = keyof typeof LANGUAGES

type LanguageObject<T> = {
  [Lang in LanguageKeys]: T
}

export const LANGUAGES = {
  en: 'English',
  sr: 'Srpski',
} as const

export type LandingPageObj = {
  description: string
  getStartedBtnText: string
  githubBtnText: string
}

export type NavObj = {
  documentation: string
}

export type OnThisPage = {
  onThisPage: string
  scrollToTop: string
}

export type Misc = {
  editThisPage: string
  previous: string
  next: string
}

export const LANDING_PAGE: LanguageObject<LandingPageObj> = {
  en: {
    description: 'Modern type-safe documentation theme for Astro.',
    getStartedBtnText: 'Get started',
    githubBtnText: 'Source code',
  },
  sr: {
    description: 'Moderna Astro tema za dokumentaciju sa Typescript podrškom.',
    getStartedBtnText: 'Počni',
    githubBtnText: 'Izvorni kod',
  },
} as const

export const NAV: LanguageObject<NavObj> = {
  en: {
    documentation: 'Docs',
  },
  sr: {
    documentation: 'Dokumentacija',
  },
} as const

export const ON_THIS_PAGE: LanguageObject<OnThisPage> = {
  en: {
    onThisPage: 'On this page',
    scrollToTop: 'Scroll to top',
  },
  sr: {
    onThisPage: 'Na ovoj stranici',
    scrollToTop: 'Skroluj do vrha',
  },
}

export const MISC: LanguageObject<Misc> = {
  en: {
    editThisPage: 'Edit this page',
    next: 'Next',
    previous: 'Previous',
  },
  sr: {
    editThisPage: 'Uredi ovu stranicu',
    next: 'Sledeće',
    previous: 'Prethodno',
  },
}
