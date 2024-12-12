import { gsap } from 'gsap'

function changeJazz(counter, speed, amplitude, hero_array) {
  const totalWidth = 117.7 * 4
  const steepness = 2
  speed *= 3

  // prettier-ignore
  let F_WDTH_RATE = Math.sin(counter * speed) ** steepness * -amplitude
  let A_WDTH_RATE = Math.cos(counter * speed) ** (steepness / 2) * -amplitude
  let J_WDTH_RATE = Math.sin(counter * speed) ** steepness * -amplitude
  let Z_WDTH_RATE = Math.cos(counter * speed) ** (steepness / 2) * -amplitude

  // prettier-ignore
  F_WDTH_RATE = gsap.utils.mapRange(-amplitude, amplitude, 63.6, 177.3, F_WDTH_RATE)
  // prettier-ignore
  A_WDTH_RATE = gsap.utils.mapRange(-amplitude, amplitude, 63.6, 177.3, A_WDTH_RATE)
  // prettier-ignore
  J_WDTH_RATE = gsap.utils.mapRange(-amplitude, amplitude, 63.6, 177.3, J_WDTH_RATE)
  // prettier-ignore
  Z_WDTH_RATE = gsap.utils.mapRange(-amplitude, amplitude, 63.6, 177.3, Z_WDTH_RATE)

  let remWidth_1 = totalWidth - (F_WDTH_RATE + A_WDTH_RATE)
  let remWidth_2 = totalWidth - (J_WDTH_RATE + Z_WDTH_RATE)

  let R_WDTH_RATE = remWidth_1 * 0.4
  // prettier-ignore
  R_WDTH_RATE = gsap.utils.mapRange(63.6, totalWidth - (3 * 63.6), 63.6, 177.3, R_WDTH_RATE)

  let O_WDTH_RATE = remWidth_1 * 0.7
  // prettier-ignore
  O_WDTH_RATE = gsap.utils.mapRange(63.6, totalWidth - (3 * 63.6), 63.6, 177.3, O_WDTH_RATE)

  //prettier-ignore
  let tinyLeftover1 = totalWidth - (F_WDTH_RATE + A_WDTH_RATE + R_WDTH_RATE + O_WDTH_RATE)
  // console.log(tinyLeftover1)
  O_WDTH_RATE += tinyLeftover1 * 0.6
  R_WDTH_RATE += tinyLeftover1 * 0.3

  let A_2_WDTH_RATE = remWidth_2 * 0.4
  // prettier-ignore
  A_2_WDTH_RATE = gsap.utils.mapRange(63.6, totalWidth - (3 * 63.6), 63.6, 177.3, A_2_WDTH_RATE)

  let Z_2_WDTH_RATE = remWidth_2 * 0.7
  // prettier-ignore
  Z_2_WDTH_RATE = gsap.utils.mapRange(63.6, totalWidth - (3 * 63.6), 63.6, 177.3, Z_2_WDTH_RATE)

  //prettier-ignore
  let tinyLeftover2 = totalWidth - (J_WDTH_RATE + A_2_WDTH_RATE + Z_WDTH_RATE + Z_2_WDTH_RATE)
  // console.log(tinyLeftover2)
  A_2_WDTH_RATE += tinyLeftover2 * 0.6
  Z_2_WDTH_RATE += tinyLeftover2 * 0.3

  // let SUM = F_WDTH_RATE + A_WDTH_RATE + R_WDTH_RATE + O_WDTH_RATE
  // console.log('R:' + R_WDTH_RATE)
  // console.log('O:' + O_WDTH_RATE)
  // console.log('SUM:' + SUM)

  const F = hero_array[0]
  const A = hero_array[1]
  const R = hero_array[2]
  const O = hero_array[3]
  const J = hero_array[4]
  const A_2 = hero_array[5]
  const Z = hero_array[6]
  const Z_2 = hero_array[7]

  gsap.to(F, {
    fontVariationSettings: `'wdth' ${F_WDTH_RATE}`,
  })
  gsap.to(A, {
    fontVariationSettings: `'wdth' ${A_WDTH_RATE}`,
  })
  gsap.to(R, {
    fontVariationSettings: `'wdth' ${R_WDTH_RATE}`,
  })
  gsap.to(O, {
    fontVariationSettings: `'wdth' ${O_WDTH_RATE}`,
  })
  gsap.to(J, {
    fontVariationSettings: `'wdth' ${J_WDTH_RATE}`,
  })
  gsap.to(A_2, {
    fontVariationSettings: `'wdth' ${A_2_WDTH_RATE}`,
  })
  gsap.to(Z, {
    fontVariationSettings: `'wdth' ${Z_WDTH_RATE}`,
  })
  gsap.to(Z_2, {
    fontVariationSettings: `'wdth' ${Z_2_WDTH_RATE}`,
  })
}

export default changeJazz
