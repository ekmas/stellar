import { type LanguageKeys } from './ui'

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
