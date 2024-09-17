import { gsap } from 'gsap'

function changeWidth(counter, speed, amplitude, hero_array) {
  let WGHT_RATE = Math.sin(counter * speed) * amplitude
  let WDTH_RATE = Math.cos(counter * speed) * -amplitude
  WGHT_RATE = gsap.utils.mapRange(-amplitude, amplitude, 200, 800, WGHT_RATE)
  WDTH_RATE = gsap.utils.mapRange(-amplitude, amplitude, 75, 100, WDTH_RATE)
  // console.log('wght: ' + WGHT_RATE)
  // console.log('wdth: ' + WDTH_RATE)
  // console.log(WGHT_RATE)
  // console.log(hero_font_array)

  gsap.to(hero_array, {
    fontVariationSettings: `'wght' ${WGHT_RATE}, 'wdth' ${WDTH_RATE}`,
    // fontWeight: WGHT_RATE,
    duration: 0.1,
    stagger: 0.5,
  })
}

export default changeWidth
