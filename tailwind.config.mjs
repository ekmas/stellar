import typography from '@tailwindcss/typography'
import colors from 'tailwindcss/colors'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      screens: {
        w1600: { max: '1600px' },
        w1400: { max: '1400px' },
        w1200: { max: '1200px' },
        w1100: { max: '1100px' },
        w900: { max: '900px' },
        w800: { max: '800px' },
        w600: { max: '600px' },
        w500: { max: '500px' },
        w400: { max: '400px' },
      },
      colors: {
        lightModeText: '#000',
        darkModeText: '#fff',

        lightModeBg: colors.neutral[100],
        darkModeBg: colors.neutral[950],

        lightModeIcon: '#000',
        darkModeIcon: '#fff',

        lightModeBgHover: colors.neutral[300],
        darkModeBgHover: colors.neutral[700],
      },
      backgroundImage: {
        lightModeGradient:
          'radial-gradient(ellipse 80% 80% at 50% -20%,rgba(120,119,198,0.5),rgba(0,0,0,0))',
        darkModeGradient:
          'radial-gradient(ellipse 80% 80% at 50% -20%,rgba(120,119,198,0.3),rgba(255,255,255,0))',
      },
      borderRadius: {
        base: '10px', // dont make this value greater than 30px because it can make some elements look weird e.g. search element and search results
      },
    },
  },
  plugins: [typography],
  darkMode: 'class',
}
