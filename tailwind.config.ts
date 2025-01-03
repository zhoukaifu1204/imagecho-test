

const config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1280px',
      xl: '1920px'
    },
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)'
      },
      fontFamily: {
        sans: 'var(--font-dm-sans)'
      },
      container: {
        // center: true
        // padding: {
        //   DEFAULT: '1rem',
        //   md: '2rem',
        //   lg: '6rem'
        // }
      }
    }
  },
  plugins: []
}
export default config
