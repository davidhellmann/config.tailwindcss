import plugin from 'tailwindcss/plugin'
import colors from 'tailwindcss/colors'

export default {
  darkMode: "class", // or 'media' or 'class'
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        inherit: colors.inherit,
        current: colors.current,
        transparent: colors.transparent,
        black: colors.black,
        white: colors.white,
        // Gray colors.
        gray: colors.zinc,
        // Error styling colors.
        red: colors.red,
        // Notice styling colors.
        yellow: colors.amber,
        // Success styling colors.
        green: colors.green,
      },
      spacing: {
        // Used for the mobile navigation toggle.
        'safe': 'calc(env(safe-area-inset-bottom, 0rem) + 2rem)',
        'fluid-grid-gap': 'var(--col-gap)'
      },
      zIndex: {
        // Z-index stuff behind it's parent.
        'behind': '-1',
      },
    },
  },
  plugins: [
    plugin(function({ addComponents, addUtilities, matchUtilities, addBase, theme }) {
      addBase({
        ':root': {
          // Fluid typography from 1 rem to 1.2 rem with fallback to 16px.
          fontSize: '100%',
          'font-size': 'clamp(1rem, 1.6vw, 1.2rem)',
          // Safari resize fix.
          minHeight: '0vw',
        },
        // Used to hide alpine elements before being rendered.
        // '[x-cloak]': {
        //   display: 'none !important'
        // },
      }),
          // Fluid grid components.
          addComponents({
            '.fluid-grid': {
              '--col-gap': 'clamp(1rem, 3vw, 4rem)',
              '--content-max-width': theme('screens.2xl'),
              '--col-width': `calc((min(calc(100% - var(--padding-left) - var(--padding-right) - 2 * var(--col-gap)), var(--content-max-width)) - 11 * var(--col-gap)) / 12)`,
              '--padding-left': 'clamp(calc(env(safe-area-inset-left, 0rem) + 1rem), 2vw, calc(env(safe-area-inset-left, 0rem) + 2rem))',
              '--padding-right': 'clamp(calc(env(safe-area-inset-right, 0rem) + 1rem), 2vw, calc(env(safe-area-inset-right, 0rem) + 2rem))',
              '--side-width': 'minmax(0, 1fr)',
              display: 'grid',
              columnGap: 'var(--col-gap)',
              gridTemplateColumns: '[full-start] var(--side-width) [content-start col-1] var(--col-width) [col-2] var(--col-width) [col-3] var(--col-width) [col-4] var(--col-width) [col-5] var(--col-width) [col-6] var(--col-width) [col-7] var(--col-width) [col-8] var(--col-width) [col-9] var(--col-width) [col-10] var(--col-width) [col-11] var(--col-width) [col-12] var(--col-width) [content-end] var(--side-width) [full-end]',
            }
          }),
          // Add fluid grid utilities.
          addUtilities({
            '.span-content, .span-md, .span-lg, .span-xl': {
              gridColumn: 'content'
            },
            '.span-full': {
              gridColumn: 'full'
            },
            '@media screen(md)': {
              '.span-md': {
                gridColumn: 'col-3 / span 8'
              },
              '.span-lg': {
                gridColumn: 'col-2 / span 10'
              },
              '.span-xl': {
                gridColumn: 'col-1 / span 12'
              }
            },
            '@media screen(lg)': {
              '.span-md': {
                gridColumn: 'col-4 / span 6'
              },
              '.span-lg': {
                gridColumn: 'col-3 / span 8'
              },
              '.span-xl': {
                gridColumn: 'col-2 / span 10'
              }
            }
          }),
          // Stack utilities.
          matchUtilities(
              {
                'stack': (value) => ({
                  '> *': {
                    '--stack-space': value,
                  },
                  '> *:not(.no-space-y, .no-space-b) + *:not(.no-space-y, .no-space-t)': {
                    'margin-block-start': `var(--stack-item-space, var(--stack-space, ${theme('spacing.16')}))`
                  },
                }),
                'stack-space': (value) => ({
                  '--stack-item-space': value,
                  '&:is([class*="stack-"][class*="stack-space-"] > *)': {
                    '--stack-item-space': value,
                  },
                }),
              },
              { values: theme('spacing') }
          ),
          addUtilities({
            '[class*="stack-"][class*="stack-space-"]': {
              '& > *': {
                '--stack-item-space': 'initial',
              },
            },
            '.stack-space-inherit': {
              '--stack-item-space': 'initial',
              '&:is([class*="stack-"][class*="stack-space-"] > *)': {
                '--stack-item-space': 'initial',
              },
            },
            '*:is(.stack-space-collapse) + *:is(.stack-space-collapse)': {
              '--stack-item-space': 0,
            },
          })
    }),
  ]
}