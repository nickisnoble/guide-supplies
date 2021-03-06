module.exports = {
  purge: ["./src/**/*.svelte"],
  theme: {
    extend: [],
    fontFamily: {
      display: ['Alegreya', 'serif'],
      heading: ['"Alegreya Sans SC"', 'sans-serif'],
      body:    ['Ovo', 'serif'],
    },
    fontSize: {
      xs:    '12px',
      base:  '15px',
      md:    '17px',
      lg:    '20px',
      xl:    '24px',
      '2xl': '30px',
      '3xl': '40px',
      '4xl': '80px',
      '5xl': '120px'
    },
    spacing: {
      '1': '6.5px',
      '2': '15px',
      '3': '20px',
      '4': '30px',
      '5': '50px',
      '6': '96px',
      '7': '112px',
      '8': '130px',
      '9': '160px',
    },
    colors: {
      'gold':  '#F5A623',
      'black': '#000',
      'white': '#fff',
      'gray':  '#eaecef'
    }
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    textColor: ['responsive', 'hover', 'focus', 'active'],
  },
  plugins: [],
}
