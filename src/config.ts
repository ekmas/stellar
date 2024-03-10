import { type LanguageKeys } from '@/i18n'

export const SITE = {
  title: 'Astro Docs',
  description: 'Modern type-safe documentation theme for Astro.',
  defaultLanguage: 'en_US',
}

export const TWITTER_USERNAME = null
// enter your twitter username if you have it
export const GITHUB_REPO_URL = 'https://github.com/ekmas/astro-docs'

export const GITHUB_EDIT_URL = GITHUB_REPO_URL + '/edit/main/src/pages/'
// used for edit url link at the bottom of each page in docs so users can edit it
// dont change it unless your branch name is not "main" (/edit/BRANCH_NAME/src/pages/)

export const GET_STARTED_LINK = '/getting-started'
// used for landing page and nav link (just type it without language path)

export type Frontmatter = {
  title: string
  description: string
  layout: string
  file: string
}

type SidebarSchema = {
  [Lang in LanguageKeys]: {
    'getting-started': string
    'first-section': {
      sectionName: string
      sectionItems: {
        'first-item': string
        'second-item': string
        'first-subsection': {
          subsectionName: string
          subsectionItems: {
            'third-item': string
            'fourth-item': string
          }
        }
      }
    }
    'second-section': {
      sectionName: string
      sectionItems: {
        'fifth-item': string
        'sixth-item': string
        'seventh-item': string
      }
    }
  }
}

export const SIDEBAR: SidebarSchema = {
  en: {
    'getting-started': 'Getting started',
    'first-section': {
      sectionName: 'First section',
      sectionItems: {
        'first-item': 'First item',
        'second-item': 'Second item',
        'first-subsection': {
          subsectionName: 'First subsection',
          subsectionItems: {
            'third-item': 'Third item',
            'fourth-item': 'Fourth item',
          },
        },
      },
    },
    'second-section': {
      sectionName: 'Second section',
      sectionItems: {
        'fifth-item': 'Fifth item',
        'sixth-item': 'Sixth item',
        'seventh-item': 'Seventh item',
      },
    },
  },
  sr: {
    'getting-started': 'Pocnimo',
    'first-section': {
      sectionName: 'Prva sekcija',
      sectionItems: {
        'first-item': 'Prva stvar',
        'second-item': 'Druga stvar',
        'first-subsection': {
          subsectionName: 'Prva podsekcija',
          subsectionItems: {
            'third-item': 'Treca stvar ',
            'fourth-item': 'Cetvrta stvar',
          },
        },
      },
    },
    'second-section': {
      sectionName: 'Druga sekcija',
      sectionItems: {
        'fifth-item': 'Peta stvar',
        'sixth-item': 'Sesta stvar',
        'seventh-item': 'Sedma stvar',
      },
    },
  },
}
