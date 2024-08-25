import { gsap } from 'gsap'

import './styles/style.css'

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

const kini = new Font('.kini', ['wght'], [[4, 460]], [0])

const amari = new Font('.amari', ['wght'], [[0, 265]], [1])

const bdo = new Font('.bdo', ['wght'], [[300, 900]], [2])

const beiruti = new Font('.beiruti', ['wght'], [[200, 900]], [3])

const bricolage = new Font(
  '.bricolage',
  ['wght', 'wdth'],
  [
    [200, 800],
    [75, 100],
  ],
  [4, 5]
)

const cubao = new Font('.cubao', ['wdth'], [[63.6, 177.3]], [6])

const danfo = new Font('.danfo', ['ELSH'], [[0, 100]], [7])

const diabolik = new Font(
  '.diabolik',
  ['wght', 'CNTR'],
  [
    [400, 900],
    [0, 100],
  ],
  [8, 9]
)

const format = new Font('.format', ['slnt'], [[400, 800]], [10])

const fustat = new Font('.fustat', ['wght'], [[200, 800]], [11])

const geom = new Font('.geom', ['wght'], [[300, 900]], [12])

const goli = new Font('.goli', ['wght'], [[300, 700]], [13])

const gully = new Font(
  '.gully',
  ['wght', 'wdth'],
  [
    [300, 700],
    [100, 50],
  ],
  [14, 15]
)

const humane = new Font('.humane', ['wght'], [[100, 900]], [16])

// const diabolik = document.querySelector('.diabolik')
const sliders = document.querySelectorAll('.axis')
const handles = document.querySelectorAll('.axis-drag')
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
]

// ESTABLEZCO VALOR INICIAL
gsap.set('.font', {
  fontWeight: 1,
})

// Flag que me avisara de que estoy pulsando y flags que determinan los elementos actuales
let isDragging = false
let currentHandle = null
let currentSlider = null
let currentIndex = null
let currentFont = null
let currentAxes = null
let currentAxisIndex = null
let currentAxis = null
let currentName = null

// recorro el arraw sliders y asocio el indice de cada uno con los del array handles
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
          console.log('currentFont: ' + currentFont)
          console.log('currentName: ' + currentName)
          console.log('currentAxes: ' + currentAxes)
          console.log('currentAxisIndex: ' + currentAxisIndex)
          console.log('currentAxis: ' + currentAxis)
          console.log('currentIndex: ' + currentIndex)
        }
      })
    })
  })
})

// vuelvo al estado inicial cuando levanto el mouse
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

document.addEventListener('mousemove', (e) => {
  // si estoy pulsando y existe el slider y el handler:
  if (isDragging && currentHandle && currentSlider) {
    // obtengo el rectangulo del slider
    let sliderRect = currentSlider.getBoundingClientRect()
    // determino la x inicial (0) como la posición de mi ratón menos el borde del rectángulo
    let x = e.clientX - sliderRect.left
    x = Math.max(0, Math.min(x, sliderRect.width))
    currentHandle.style.left = x + 'px'
    // kini_weight = gsap.utils.mapRange(
    //   0,
    //   sliderRect.right,
    //   4,
    //   460,
    //   x
    // )
    console.log(
      'axis bound min: ' + currentFont.axes_bounds[currentAxisIndex][0]
    )
    console.log(
      'axis bound max: ' + currentFont.axes_bounds[currentAxisIndex][1]
    )

    let WGHT = currentFont.axes_bounds[0][0]
    let VARIATION = 0
    if (currentFont.axes_bounds[1]) {
      VARIATION = currentFont.axes_bounds[1][0]
    } else {
      VARIATION = 0
    }

    // YA TENGO LA POSICIÖN DEL ROLLO ARRIBA. AHORA TENGO QUE IDENTIFICAR QUE SLIDER ES; COLOCAR BIEN EL MAPA Y HACERLE GSAP AL QUE CORRESPONDA
    // WGHT = Math.floor(gsap.utils.mapRange(0, sliderRect.width, 0, 500, x))
    if (currentAxisIndex === 0) {
      WGHT = Math.floor(
        gsap.utils.mapRange(
          0,
          sliderRect.width,
          currentFont.axes_bounds[currentAxisIndex][0],
          currentFont.axes_bounds[currentAxisIndex][1],
          x
        )
      )
    } else {
      VARIATION = Math.floor(
        gsap.utils.mapRange(
          0,
          sliderRect.width,
          currentFont.axes_bounds[currentAxisIndex][0],
          currentFont.axes_bounds[currentAxisIndex][1],
          x
        )
      )
    }

    console.log(VARIATION)

    if (currentAxes.length == 1) {
      console.log(`${currentAxes[0]} ${WGHT}`)
      gsap.to(currentName, {
        fontVariationSettings: `'${currentAxes[0]}' ${WGHT}`,
        duration: 0,
      })
    } else if (currentAxes.length == 2) {
      gsap.to(currentName, {
        fontVariationSettings: `'wght' ${WGHT}, '${currentAxes[1]}' ${VARIATION}`,
        duration: 0,
      })
    } else if (currentAxes.length == 3) {
      gsap.to(currentName, {
        fontVariationSettings: `'wght' ${WGHT}, 'wdth' ${VARIATION}, '${currentAxes[2]}' ${VARIATION}`,
        duration: 0,
      })
    } else {
      console.log('FONT CONTROLS OUT OF BOUND')
    }
  }
})
