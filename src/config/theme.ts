// Design tokens mirrored here for use in JS/TS (e.g. Framer Motion, inline SVG).
// The source of truth for CSS is the @theme block in src/index.css.

export const theme = {
  colors: {
    primary: "#D9A52A",
    primaryDark: "#B8841A",
    primaryLight: "#F0C766",
    secondary: "#0D1117",
    background: "#FAF8F4",
    surface: "#FFFFFF",
    surfaceDark: "#14181F",
    ink: "#0D1117",
    inkMuted: "#5B6270",
    border: "#E6E2D8",
  },
  ease: [0.16, 1, 0.3, 1] as const,
} as const;
