/** @type {import('tailwindcss').Config} */

import presetDefault from 'tailwindcss/defaultConfig'
import presetBaukasten from './tailwind.preset.baukasten.js'
import presetSmoothShadows from './tailwind.preset.smoothShadows.js'

export default {
  // The various configurable Tailwind configuration files.
  presets: [
    presetDefault,
    presetBaukasten,
    presetSmoothShadows
  ],
  // Configure files to scan for utility classes (JIT).
  content: [],
  safelist: []
}