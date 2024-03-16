import plugin from "tailwindcss/plugin";

export const utilitiesStack = plugin(function ({matchUtilities, theme}) {
  matchUtilities(
    {
      stack: (value) => ({
        "> *": {
          "--stack-space": value,
        },
        "> *:not(.no-space-y, .no-space-b) + *:not(.no-space-y, .no-space-t)": {
          marginBlockStart: "var(--stack-space, 4rem)"
        },
      }),
      "stack-space": (value) => ({
        "--stack-space": value,
      }),
    },
    {values: theme("spacing")}
  );
});
