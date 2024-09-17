import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger)

import changeColor from './features/changeFontColor'
import changeWidth from './features/changeFontWidth'
// import heroFont from './features/heroFont'

import './styles/style.css'

// OBJETO FUENTE
function Font(name, axes, axes_bounds, indexes) {
  this.name = name
  this.axes = axes
  this.axes_bounds = axes_bounds
  this.indexes = indexes

  this.getName = function () {
    return this.name
  }
  this.getAxes = function () {
    return this.axes
  }
  this.getAxesBounds = function () {
    return this.axes_bounds
  }
}

// FUENTES POR ORDEN ALFABETICO
const kini = new Font('.kini', ['wght'], [[4, 460]], [0])
const amari = new Font('.amari', ['wght'], [[0, 265]], [1])
const bdo = new Font('.bdo', ['wght'], [[300, 900]], [2])
const beiruti = new Font('.beiruti', ['wght'], [[200, 900]], [3])
const bricolage = new Font(
  '.bricolage',
  ['wght', 'wdth', 'opsz'],
  [
    [200, 800],
    [75, 100],
    [96, 12],
  ],
  [4, 5, 6]
)
const cubao = new Font('.cubao', ['wdth'], [[63.6, 177.3]], [7])
const danfo = new Font('.danfo', ['ELSH'], [[0, 100]], [8])
const diabolik = new Font(
  '.diabolik',
  ['wght', 'CNTR'],
  [
    [400, 900],
    [0, 100],
  ],
  [9, 10]
)
const format = new Font('.format', ['slnt'], [[400, 800]], [11])
const fustat = new Font('.fustat', ['wght'], [[200, 800]], [12])
const geom = new Font('.geom', ['wght'], [[300, 900]], [13])
const goli = new Font('.goli', ['wght'], [[300, 700]], [14])
const gully = new Font(
  '.gully',
  ['wght', 'wdth'],
  [
    [300, 700],
    [100, 50],
  ],
  [15, 16]
)
const humane = new Font('.humane', ['wght'], [[100, 900]], [17])
const detechno_glitch = new Font(
  '.detechno-glitch',
  ['slnt', 'Glch'],
  [
    [0, 50],
    [0, 100],
  ],
  [18, 19]
)
const detechno_twist = new Font(
  '.detechno-twist',
  ['slnt', 'Twst'],
  [
    [0, 50],
    [0, 100],
  ],
  [20, 21]
)
const mimoid = new Font('.mimoid', ['wght'], [[100, -100]], [22])
const minimochi = new Font(
  '.minimochi',
  ['FLAV', 'SLCE', 'STCH'],
  [
    [0, 100],
    [0, 100],
    [0, 100],
  ],
  [23, 24, 25]
)
const neueregrade = new Font('.neue-regrade', ['wght'], [[300, 800]], [26])
const oceanus = new Font('.oceanus', ['wght'], [[100, 250]], [27])
const rethink = new Font('.rethink', ['wght'], [[400, 800]], [28])
const sol = new Font('.sol', ['wght'], [[100, 900]], [29])
const spline_mono = new Font('.spline-mono', ['wght'], [[300, 700]], [30])
const suspicion = new Font('.suspicion', ['wght'], [[100, 900]], [31])
const that_then = new Font(
  '.thatthen',
  ['THAT', 'THIS'],
  [
    [0, 100],
    [0, 100],
  ],
  [32, 33]
)
const uncage = new Font('.uncage', ['wght'], [[400, 700]], [34])
const unique = new Font('.unique', ['wght'], [[100, 700]], [35])
const work_grotesk = new Font('.work-grotesq', ['wdth'], [[400, 900]], [36])
const work_sans = new Font('.work-sans', ['wght'], [[199, 900]], [37])

// VARIABLES GLOBALES
let t = 0
let speed = 0.025
let amplitude = 100
// let blue = '#00f'
// let pinky = '#ffbbd5'
let VARIATION_1 = 0
let VARIATION_2 = 0
let VARIATION_3 = 0
const sliders = document.querySelectorAll('.axis')
const handles = document.querySelectorAll('.axis-drag')
//
let isDragging = false
let currentHandle = null
let currentSlider = null
let currentIndex = null // el INDEX de los SLIDERS dentro del NodeList
let currentFont = null // la fuente ACTUAL
let previousFont = null // fuente ANTERIOR, necesaria para inicializar los EJES con cada cambio de fuente
let currentAxes = null // el array de EJES de la fuente ACTUAL
let currentAxisIndex = null // el indice ACTUAL dentro del array de EJES de la fuente ACTUAL
let currentAxis = null // el EJE ACTUAL
let currentName = null // el NOMBRE de la fuente
let previousName = null
//
const fonts = [
  kini,
  amari,
  bdo,
  beiruti,
  bricolage,
  cubao,
  danfo,
  diabolik,
  format,
  fustat,
  geom,
  goli,
  gully,
  humane,
  detechno_glitch,
  detechno_twist,
  mimoid,
  minimochi,
  neueregrade,
  oceanus,
  rethink,
  sol,
  spline_mono,
  suspicion,
  that_then,
  uncage,
  unique,
  work_grotesk,
  work_sans,
]

// Recorro el arraw sliders y asocio el indice de cada uno con los del array handles
sliders.forEach((slider, i) => {
  const handle = handles[i]

  // cuando pincho en un handle, ya asociado a su slider, activo isDragging y meto en currentHandle y currentSlider los elementos q son
  handle.addEventListener('mousedown', (e) => {
    // console.log('mousedown')
    console.log(e)
    isDragging = true
    currentHandle = handle
    currentSlider = slider
    currentIndex = i
    fonts.forEach((font) => {
      font.indexes.forEach((index, j) => {
        if (index === currentIndex) {
          currentFont = font
          currentAxisIndex = j
          currentName = currentFont.getName()
          currentAxes = currentFont.getAxes()
          currentAxis = currentAxes[j]
          if (currentName !== previousName) {
            console.log('Font Change!')
            setVariations()
          }
          previousFont = currentFont
          previousName = previousFont.getName()
          console.log('currentFont: ' + currentFont)
          console.log('previousFont: ' + previousFont)
          console.log('currentName: ' + currentName)
          console.log('previousName: ' + previousName)
          console.log('currentAxes: ' + currentAxes)
          console.log('currentAxisIndex: ' + currentAxisIndex)
          console.log('currentAxis: ' + currentAxis)
          console.log('currentIndex: ' + currentIndex)
        }
      })
    })
  })
})

// Vuelvo al estado inicial cuando levanto el mouse
document.addEventListener('mouseup', () => {
  isDragging = false
  currentHandle = null
  currentSlider = null
  currentIndex = null
  currentFont = null
  currentAxes = null
  currentAxisIndex = null
  currentAxis = null
  currentName = null
  // console.log(isDragging)
})

// VALOR INICIAL DE CADA AXIS EN EL MINIMO para que mover uno no sobreescriba al otro
function setVariations() {
  if (currentFont) {
    VARIATION_1 = currentFont.axes_bounds[0][0]
    if (currentFont.axes_bounds[1] && !currentFont.axes_bounds[2]) {
      console.log('minimochi FALSO')
      VARIATION_2 = currentFont.axes_bounds[1][0]
    } else if (currentFont.axes_bounds[2]) {
      console.log('minimochi!')
      VARIATION_2 = currentFont.axes_bounds[1][0]
      VARIATION_3 = currentFont.axes_bounds[2][0]
    }
  }
}

// FUNCION PRINCIPAL
document.addEventListener('mousemove', (e) => {
  // si estoy pulsando y existe el slider y el handler:
  if (isDragging && currentHandle && currentSlider) {
    // obtengo el rectangulo del slider
    let sliderRect = currentSlider.getBoundingClientRect()
    let handleRect = currentHandle.getBoundingClientRect()
    // determino la x inicial (0) como la posición de mi ratón menos el borde del rectángulo
    let x = e.clientX - sliderRect.left
    x = Math.max(0, Math.min(x, sliderRect.width - handleRect.width))
    currentHandle.style.left = x + 'px'
    // YA TENGO LA POSICIÖN DEL ROLLO ARRIBA. AHORA TENGO QUE IDENTIFICAR QUE SLIDER ES; COLOCAR BIEN EL MAPA Y HACERLE GSAP AL QUE CORRESPONDA
    // WGHT = Math.floor(gsap.utils.mapRange(0, sliderRect.width, 0, 500, x))
    if (currentAxisIndex === 0) {
      VARIATION_1 = Math.floor(
        gsap.utils.mapRange(
          0,
          sliderRect.width,
          currentFont.axes_bounds[currentAxisIndex][0],
          currentFont.axes_bounds[currentAxisIndex][1],
          x
        )
      )
      console.log('VARIATION 1: ' + VARIATION_1)
      console.log('VARIATION 2: ' + VARIATION_2)
      console.log('VARIATION 3: ' + VARIATION_3)
    } else if (currentAxisIndex === 1) {
      VARIATION_2 = Math.floor(
        gsap.utils.mapRange(
          0,
          sliderRect.width,
          currentFont.axes_bounds[currentAxisIndex][0],
          currentFont.axes_bounds[currentAxisIndex][1],
          x
        )
      )
      console.log('VARIATION 1: ' + VARIATION_1)
      console.log('VARIATION 2: ' + VARIATION_2)
      console.log('VARIATION 3: ' + VARIATION_3)
    } else if (currentAxisIndex === 2) {
      VARIATION_3 = Math.floor(
        gsap.utils.mapRange(
          0,
          sliderRect.width,
          currentFont.axes_bounds[currentAxisIndex][0],
          currentFont.axes_bounds[currentAxisIndex][1],
          x
        )
      )
      console.log('VARIATION 1: ' + VARIATION_1)
      console.log('VARIATION 2: ' + VARIATION_2)
      console.log('VARIATION 3: ' + VARIATION_3)
    } else {
      console.log('ERROR')
    }

    if (currentAxes.length == 1) {
      console.log(`${currentAxes[0]} ${VARIATION_1}`)
      gsap.to(currentName, {
        fontVariationSettings: `'${currentAxes[0]}' ${VARIATION_1}`,
        duration: 0,
      })
    } else if (currentAxes.length == 2) {
      gsap.to(currentName, {
        fontVariationSettings: `'${currentAxes[0]}' ${VARIATION_1}, '${currentAxes[1]}' ${VARIATION_2}`,
        duration: 0,
      })
    } else if (currentAxes.length == 3) {
      gsap.to(currentName, {
        fontVariationSettings: `'${currentAxes[0]}' ${VARIATION_1}, '${currentAxes[1]}' ${VARIATION_2}, '${currentAxes[2]}' ${VARIATION_3}`,
        duration: 0,
      })
    } else {
      console.log('FONT CONTROLS OUT OF BOUND')
    }
  }
})

changeColor('#0a0a0a')

const hero_font = document.querySelector('.hero-heading-3')
let hero_array = new SplitType(hero_font, { types: 'chars' }).chars
gsap.set(hero_font, {
  fontWeight: 63.6,
})

function hero() {
  // heroFont(t, speed, amplitude)
  changeWidth(t, speed, amplitude, hero_array)
  t++
  // requestAnimationFrame(hero)
  requestAnimationFrame(hero)
}
requestAnimationFrame(hero)

gsap.to('.fonts-section', {
  y: -100,
  duration: 3,
  scrollTrigger: {
    trigger: '.fonts-section',
    start: 'top 90%',
    end: 'top 50%',
    scrub: 1,
    markers: false,
  },
})
