import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  headerFontFamily: ['Lato', 'Helvetica Neue', 'Arial'],
  bodyFontFamily: ['Muli', 'Roboto', 'Georgia'],
  googleFonts: [
    {
      name: 'Lato',
      styles: ['400', '700'],
    },
    {
      name: 'Muli',
      styles: ['400'],
    },
  ],
})

export default typography
