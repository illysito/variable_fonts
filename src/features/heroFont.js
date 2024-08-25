import { gsap } from 'gsap'

function heroFont(counter, speed, amplitude) {
  const hero_font = document.querySelector('.hero-heading')
  let WGHT_RATE = Math.sin(counter * speed) * amplitude
  let WDTH_RATE = Math.cos(counter * speed) * -amplitude
  WGHT_RATE = gsap.utils.mapRange(-amplitude, amplitude, 200, 800, WGHT_RATE)
  WDTH_RATE = gsap.utils.mapRange(-amplitude, amplitude, 85, 95, WDTH_RATE)
  console.log('wght: ' + WGHT_RATE)
  console.log('wdth: ' + WDTH_RATE)

  gsap.set(hero_font, {
    fontVariationSettings: `'wght' ${WGHT_RATE}, 'wdth' ${WDTH_RATE}`,
    duration: 0,
  })
}

export default heroFont
