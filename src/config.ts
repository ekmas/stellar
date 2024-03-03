export const SITE = {
  title: 'Astro Docs',
  description: 'Modern type-safe documentation theme for Astro.',
  defaultLanguage: 'en_US',
}

export const TWITTER_USERNAME = null
// enter your twitter username if you have it
export const GITHUB_REPO_URL = 'https://github.com/ekmas/astro-docs'

export type Frontmatter = {
  title: string
  description: string
  layout: string
  sidebarOrder?: number
}
