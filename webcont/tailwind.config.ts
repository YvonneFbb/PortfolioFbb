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
      fontWeight: {
        'boldness-450': '450',
        'boldness-600': '600'
      },
      letterSpacing: {
        'custom-wider': '0.25em',
        'custom-widest': '0.80em',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: 0, transform: 'translateY(-10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        }
      },
      animation: {
        'fade-in': 'fade-in 0.3s ease-out'
      }
    }

  },
  plugins: [],
} satisfies Config;
