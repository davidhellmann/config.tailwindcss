import plugin from 'tailwindcss/plugin'
import defaultTheme from 'tailwindcss/defaultTheme'
import colors from 'tailwindcss/colors'
import pluginsContainerQueries from "@tailwindcss/container-queries";

export default {
  theme: {
    // Here we define the default colors available. If you want to include
    // all default Tailwind colors you should extend the colors instead.
    colors: {
      black:   colors.black,
      white:  colors.white,
      // Neutrals: neutral colors, with a default fallback if you don't need shades. Always set a DEFAULT when you use shades.
      neutral: {
        DEFAULT: colors.zinc['800'],
        ...colors.zinc
      },
      // Brand color with a default fallback if you don't need shades. Always set a DEFAULT when you use shades.
      primary: colors.green,
      secondary: colors.emerald,
    },
    // Remove the font families you don't want to use.
    fontFamily: {
      mono: [
        // Use a custom mono font for this site by changing 'JetBrains Mono' to the
        // font name you want and uncommenting the following line.
        // 'JetBrains Mono',
        ...defaultTheme.fontFamily.mono,
      ],
      sans: [
        // Use a custom sans serif font for this site by changing 'Lato' to the
        // font name you want and uncommenting the following line.
        // 'Lato',
        ...defaultTheme.fontFamily.sans,
      ],
      serif: [
        // Use a custom serif font for this site by changing 'Merriweather' to the
        // font name you want and uncommenting the following line.
        // 'Merriweather',
        ...defaultTheme.fontFamily.serif,
      ],
    },
    // The font weights available for this site.
    fontWeight: {
      // hairline: 100,
      // thin: 200,
      // light: 300,
      normal: 400,
      // medium: 500,
      // semibold: 600,
      bold: 700,
      // extrabold: 800,
      // black: 900,
    },
    extend: {
      // Set default transition durations and easing when using the transition utilities.
      transitionDuration: {
        DEFAULT: '300ms',
      },
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      aspectRatio: {
        landscape: "3 / 2",
        portrait: "2 / 3",
      },
    },
  },
  plugins: [
    pluginsContainerQueries,
    plugin(function({ addBase, addComponents, addUtilities, theme }) {
      addBase({
        // Default color transition on links unless user prefers reduced motion.
        '@media (prefers-reduced-motion: no-preference)': {
          'a': {
            transition: 'color .3s ease-in-out',
          },
        },
        'html': {
          color: theme('colors.neutral.DEFAULT'),
          //--------------------------------------------------------------------------
          // Set sans, serif or mono stack with optional custom font as default.
          //--------------------------------------------------------------------------
          // fontFamily: theme('fontFamily.mono'),
          fontFamily: theme('fontFamily.sans'),
          // fontFamily: theme('fontFamily.serif'),
        },
        ':root': {
          '--focus-outline-width': '2px',
          '--focus-outline-offset': '3px',
          '--focus-outline-color': 'currentColor',
          '--focus-outline-style': 'dotted',
          '--focus-form-outline-width': '3px',
          '--focus-form-outline-offset': '0',
          '--focus-form-outline-color': "theme('colors.primary.DEFAULT / .5')",
          '--focus-form-outline-style': 'solid',
        },
        ':focus': {
          outlineWidth: 'var(--focus-outline-width, 2px)',
          outlineOffset: 'var(--focus-outline-offset, 3px)',
          outlineColor: 'var(--focus-outline-color, currentColor)',
          outlineStyle: 'var(--focus-outline-style, dotted)',
        },
        '*:focus:not(:focus-visible)': {
          outline: '2px solid transparent',
          outlineOffset: '2px',
        },
        'input:not([type="button"]):focus, textarea:focus, select:focus': {
          boxShadow: 'none',
          outlineWidth: 'var(--focus-form-outline-width, 3px)',
          outlineOffset: 'var(--focus-form-outline-offset, 0)',
          outlineColor: 'var(--focus-form-outline-color, currentColor)',
          outlineStyle: 'var(--focus-form-outline-style, solid)',
        },
        'mark': {
          backgroundColor: "theme('colors.primary.DEFAULT / 1')",
          color: theme('colors.white')
        },
      }),
          // Custom components for this particular site.
          addComponents({}),
          // Custom utilities for this particular site.
          addUtilities({})
    }),
  ]
}