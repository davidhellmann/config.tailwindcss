/** @type {import('tailwindcss').Config} */

// plugins
import pluginsContainerQueries from "@tailwindcss/container-queries";
import pluginsFluidType from "tailwindcss-fluid-type";

// Components
import { componentsContainer } from "./components/container.js";

// Utilities
import { utilitiesStack } from "./utilities/stack.js";

// Settings
import colors from "./settings/colors.js";
import fontFamilies from "./settings/fontFamilies.js";
import fontSizes from "./settings/fontSizes.js";
import grid from "./settings/grid.js";
import screens from "./settings/screens.js";
import shadows from "./settings/shadows.js";

export default {
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: [],
  safelist: [],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    fontFamily: fontFamilies,
    screens: screens,
    colors: colors,
    extend: {
      boxShadow: shadows,
      dropShadow: shadows,
      gridTemplateColumns: { ...grid.gridTemplateColumns },
      gridColumn: { ...grid.gridColumn },
      gridRowStart: { ...grid.gridRowStart },
      gridRowEnd: { ...grid.gridRowEnd },
      aspectRatio: {
        landscape: "3 / 2",
        portrait: "2 / 3",
      },
    },
  },
  corePlugins: {
    fontSizes: false,
    container: false,
  },
  plugins: [
    pluginsContainerQueries,
    pluginsFluidType({
      ...fontSizes,
    }),
    componentsContainer,
    utilitiesStack
  ],
};
