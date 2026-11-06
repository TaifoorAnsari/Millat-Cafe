/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: 'var(--cream)',
        'cream-2': 'var(--cream-2)',
        espresso: 'var(--espresso)',
        mocha: 'var(--mocha)',
        caramel: 'var(--caramel)',
        gold: 'var(--gold)',
        forest: 'var(--forest)',
        blush: 'var(--blush)',
        muted: 'var(--text-muted)',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
        accent: ['Montserrat', 'sans-serif'],
      },
      boxShadow: { warm: '0 18px 45px -18px rgba(43,29,22,.32)' },
      borderRadius: { card: '24px', image: '20px', hero: '32px' },
      maxWidth: { site: '1200px' },
    },
  },
  plugins: [],
};
