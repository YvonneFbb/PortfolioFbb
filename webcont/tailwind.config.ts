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
        'custom-wide': '0.1em',
        'custom-wider': '0.25em',
        'custom-widest': '0.80em',
      },
      keyframes: {
        'menu-item': {
          '0%': { 
            opacity: '0', 
            transform: 'translateY(20px)',
            filter: 'blur(2px)'
          },
          '100%': { 
            opacity: '1', 
            transform: 'translateY(0)',
            filter: 'blur(0)'
          }
        }
      },
      animation: {
        'menu-item': 'menu-item 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards'
      }
    }

  },
  plugins: [],
} satisfies Config;
