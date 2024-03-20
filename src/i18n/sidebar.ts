import { type LanguageKeys } from '@/i18n/ui'

type SidebarSchema = {
  [Lang in LanguageKeys]: {
    introduction: string
    'getting-started': string
    'sidebar-config': string
    'writing-docs': string
    'styling-config': string
  }
}

export const SIDEBAR: SidebarSchema = {
  en: {
    introduction: 'Introduction',
    'getting-started': 'Getting started',
    'sidebar-config': 'Sidebar config',
    'writing-docs': 'Writing docs',
    'styling-config': 'Styling config',
  },
  sr: {
    introduction: 'Uvod',
    'getting-started': 'Početak',
    'sidebar-config': 'Sidebar konfiguracija',
    'writing-docs': 'Pisanje dokumentacije',
    'styling-config': 'Konfiguracija stilizovanja',
  },
}
