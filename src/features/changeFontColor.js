import { gsap } from 'gsap'

function changeColor(color) {
  const fonts = document.querySelectorAll('.font')
  console.log('Should be changing colors')
  console.log(fonts)

  fonts.forEach((font) => {
    gsap.set(font, {
      color: color,
      duration: 0,
    })
  })
}

export default changeColor
