import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Times New Roman', 'Times', 'serif']
      },
      letterSpacing: {
        'custom-wide': '0.15em',
        'custom-wider': '0.25em',
        'custom-widest': '0.80em',
      },
    }

  },
  plugins: [],
} satisfies Config;
