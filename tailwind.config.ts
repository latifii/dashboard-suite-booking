import { Config } from "tailwindcss";
import { colord, extend } from "colord";
import mixPlugin from "colord/plugins/mix";

extend([mixPlugin]);

export function generateDarkenColorFrom(
  input: string,
  percentage = 0.07,
): string {
  return colord(input).darken(percentage).toHex();
}

export function generateForegroundColorFrom(
  input: string,
  percentage = 0.8,
): string {
  return colord(input)
    .mix(colord(input).isDark() ? "white" : "black", percentage)
    .toHex();
}

type ColorObject = {
  [key: string]: string;
};

export const tailwindColors: ColorObject = {
  current: "currentColor",
  transparent: "transparent",
  white: "#F9F9F9",
  primary: "#007BEC",
  dark: "#000",
  "primary-content": "#FFFFFF",
  "primary-focus": generateDarkenColorFrom("#007BEC"),
  secondary: "#6c5ce7",
  "secondary-content": "#FFFFFF",
  "secondary-focus": generateDarkenColorFrom("#6c5ce7"),
  accent: "#1FB2A5",
  "accent-content": "#FFFFFF",
  "accent-focus": generateDarkenColorFrom("#1FB2A5"),
  neutral: "#2a323c",
  "neutral-content": generateForegroundColorFrom("#FFFFFF"),
  "neutral-focus": generateDarkenColorFrom("#2a323c", 0.03),
  word: "#4c4c4c",
  "base-10": "#EDEFF3",
  "base-25": "#353d47",
  "base-50": "#2a323c",
  "base-75": "#20272e",
  "base-100": "#1d232a",
  "base-200": "#191e24",
  "base-300": "#15191e",
  "base-content": "#A6ADBB",
  muted: "#353d47",
  "muted-50": "#D1D5DB",
  "muted-100": "#9e9e9e",
  info: "#3abff8",
  "info-content": generateForegroundColorFrom("#3abff8"),
  success: "#36d399",
  "success-content": generateForegroundColorFrom("#36d399"),
  warning: "#fbbd23",
  "warning-content": generateForegroundColorFrom("#fbbd23"),
  error: "#f87272",
  "error-content": generateForegroundColorFrom("#f87272"),
  "gradient-first": "#007BEC",
  "gradient-second": "#91c3fd",
};

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,mdx}"],

  theme: {
    colors: tailwindColors,
    container: {
      center: true,
      padding: {
        DEFAULT: "0.75rem",
        // lg: "2rem",
      },
    },
    fontFamily: {
      sans: ["Iransans", "Helvetica", "Arial", "sans-serif"],
    },
    extend: {
      borderColor: {
        DEFAULT: "#D1D5DB",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};

export default config;
