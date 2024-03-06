export type LanguageKeys = keyof typeof LANGUAGES

type LanguageObject<T> = {
  [Lang in LanguageKeys]: T
}

export type LandingPageObj = {
  description: string
  getStartedBtnText: string
  githubBtnText: string
}

export const LANGUAGES = {
  en: 'Engleski',
  sr: 'Srpski',
} as const

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
