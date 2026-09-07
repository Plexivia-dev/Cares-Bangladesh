/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './src/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1200px',
        '2xl': '1200px',
      },
    },
    extend: {
      maxWidth: {
        'container': '1200px',
      },
      borderRadius: {
        none: '0px',
        xs: '2px',
        sm: '4px',
        DEFAULT: '4px',
        md: '6px',
        lg: '8px',
        xl: '12px',
        '2xl': '12px',
        '3xl': '12px',
        full: '9999px',
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: '#004460',
          foreground: '#ffffff',
          dark: '#002e42',
          light: '#00668f',
        },
        secondary: {
          DEFAULT: '#007791',
          foreground: '#ffffff',
          light: '#e0f2fe',
        },
        accent: {
          DEFAULT: '#f59e0b',
          foreground: '#ffffff',
          orange: '#ff7a00',
          green: '#10b981',
          pink: '#ec4899',
          purple: '#8b5cf6',
        },
        muted: {
          DEFAULT: '#f8fafc',
          foreground: '#64748b',
        },
        card: {
          DEFAULT: '#ffffff',
          foreground: '#0f172a',
        },
      },
      fontFamily: {
        flavors: ['var(--font-flavors)', 'Flavors', 'cursive', 'sans-serif'],
        sister: ['var(--font-sister)', 'Love Ya Like A Sister', 'cursive', 'sans-serif'],
        sans: ['var(--font-montserrat)', 'Montserrat', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [],
};
