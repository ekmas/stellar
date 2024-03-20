import { type LanguageKeys } from '@/i18n/ui'
import { type ThemeObjectOrShikiThemeName } from 'astro-expressive-code'

export const PROJECT_NAME = 'Stellar'
// used for landing page heading and nav home link

export const SITE = {
  title: 'Stellar',
  description: 'Modern type-safe documentation theme for Astro.',
  defaultLanguage: 'en_US', // don't mistaken this with DEFAULT_LANGUAGE_CODE below, this is used only for meta tags
}
// used for meta tags

export const DEFAULT_LANGUAGE_CODE: LanguageKeys = 'en'
// when user is on '/' path, this will be the default language

export const TWITTER_USERNAME = null
// enter your twitter username if you have it

export const GITHUB_REPO_URL = 'https://github.com/ekmas/stellar'

export const GITHUB_EDIT_URL = GITHUB_REPO_URL + '/edit/main/src/pages/'
// used for edit url link at the bottom of each page in docs so users can edit it
// dont change it unless your branch name is not "main" (/edit/BRANCH_NAME/src/pages/)

export const GET_STARTED_LINK = '/introduction'
// used for landing page and nav link (just type it without language path)

export const SINGLE_LANGUAGE = false
// set this to true if you want to use only one language

export const OG_IMAGE = 'og.png'
// enter name of the og image file you put inside public folder
// image should be 1200 X 630 pixels

export const LIGHT_MODE_CODE_BLOCK_THEME: ThemeObjectOrShikiThemeName =
  'github-light'

export const DARK_MODE_CODE_BLOCK_THEME: ThemeObjectOrShikiThemeName =
  'github-dark'

// list of all themes you can use: https://expressive-code.com/guides/themes/#available-themes
// if u change any of those code block theme values make sure to change them as well in astro.config.mjs inside expressiveCode in themes array
