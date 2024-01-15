import type { Config } from "tailwindcss";
import { createPreset } from "@adaptavant/core/tailwind";
import { tokens } from "@adaptavant/brands/setmore";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@adaptavant/core/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  presets: [createPreset(tokens)],
} satisfies Config;
