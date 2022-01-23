//? click to generate a new bird

const MODULES = []
const GRID = {
  rows: 5,
  columns: 2,
  cellSize: 130
}
const COLORS = [
  '#2FF3E0',
  '#F8D210',
  '#FA26A0',
  '#F51720',
]

const STRIPES = 3

function setup() {
  createCanvas(100, 100)
  cursor(HAND)
  windowResized()
  noStroke()
  angleMode(DEGREES)
  generateBird()
}

function draw() {
  background('white')
  translate(width / 2, height / 2)

  const margins = 100
  scale((height - margins) / GRID.rows)

  translate(-GRID.columns / 2, -GRID.rows / 2)

  MODULES.forEach(module => module.display())
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}

function mousePressed() {
  generateBird()
}

function generateBird() {

  const tailHeight = random(0.5, 1.5)

  MODULES.length = 0 //? empty array

  MODULES.push(
    //* branch
    new Module({ x: -0.5, y: 3, w: 3, h: 0.1 }),

    //* head

    new Module({ x: 0, y: 0, pattern: new SideCircle(), roundCorners: { topLeft: 0.5 } }),
    // beak
    new Module({ x: 1, y: 0, w: random(0.5, 1.5), h: random(0.3, 0.6), roundCorners: { topRight: 0.3 } }),
    // eye
    new Module({ x: 0, y: 0, pattern: new Eye() }),

    //* body
    new Module({ x: 0, y: 1, pattern: new Stripes(), rotate: 0 }),
    new Module({ x: 1, y: 1, pattern: new CornerCircle(), roundCorners: { bottomRight: 1 }, rotate: -90 }),
    new Module({ x: 0, y: 2, pattern: new CornerCircle(), roundCorners: { bottomRight: 1 }, rotate: 90 }),
    new Module({ x: 1, y: 2, pattern: new Stripes(), rotate: 180 }),

    //* tail
    new Module({ x: 1, y: 3, h: tailHeight, pattern: new Stripes(), rotate: 180 }),
    new Module({ x: 1, y: 3 + tailHeight, pattern: new CornerCircle(), roundCorners: { bottomRight: 1 }, rotate: 90 }),


  )
}