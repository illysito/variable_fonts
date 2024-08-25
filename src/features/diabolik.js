import { gsap } from 'gsap'

function kini(weight) {
  console.log(weight)
  gsap.to('.diabolik', {
    fontWeight: 500,
    // fontVariationSettings: `'CNTR' ${CNTR}`,
  })
}

export default kini
