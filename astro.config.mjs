import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import expressiveCode from 'astro-expressive-code'

// https://astro.build/config
export default defineConfig({
  site: 'https://stellar-theme.netlify.app',
  integrations: [
    tailwind(),
    expressiveCode({
      themes: ['github-dark', 'github-light'],
      styleOverrides: {
        frames: {
          editorActiveTabIndicatorTopColor: 'transparent',
          editorActiveTabBorderColor: '#80808080',
          editorTabBarBorderBottomColor: '#80808080',
        },
        uiFontFamily: 'inherit',
        borderColor: '#80808080',
      },
    }),
    mdx(),
    react(),
  ],
})
