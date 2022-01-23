//! pattern classes always have a display method
// display(w, h) {}
// w = width of module, h = height of module

class CornerCircle {
  constructor() {
    this.n = STRIPES
    this.colors = COLORS
  }

  display(w, h) {
    push()

    const size = max(w, h) / this.n
    const repeats = this.n * 2

    for (let i = 0; i < repeats; i++) {

      const radius = ((repeats) - i) * size
      const colorIndex = i % this.colors.length //? cycle colors

      fill(this.colors[colorIndex])
      ellipse(0, 0, radius * 2)
    }

    pop()
  }
}

//* -----

class Stripes {
  constructor() {
    this.n = STRIPES
    this.colors = COLORS
  }

  display(w, h) {
    push()

    const size = w / this.n

    for (let i = 0; i < this.n; i++) {

      const x = i * size
      const colorIndex = i % this.colors.length //? cycle colors

      fill(this.colors[colorIndex])
      rect(x, 0, size, h)
    }

    pop()
  }
}

//* -----

class Solid {
  display(w, h) {
    push()
    fill(COLORS[3])
    rect(0, 0, w, h)
    pop()
  }
}

//* -----

class SideCircle {
  constructor() {
    this.n = STRIPES
    this.colors = COLORS
  }

  display(w, h) {
    push()
    fill(COLORS[0])
    rect(0, 0, w, h)
    fill(COLORS[1])
    ellipse(w / 2, h, w)
    fill(COLORS[2])
    ellipse(w / 2, h, w / this.n)
    pop()
  }
}

//* -----

class Eye {
  constructor() {
    this.eyeDiameter = 0.2
    this.pupilDiameter = 0.1
  }

  display(w, h) {
    push()
    translate(1 - 1 / 3, 1 / 3)
    fill('white')
    ellipse(0, 0, this.eyeDiameter)

    fill('black')
    ellipse(0, 0, this.pupilDiameter)
    pop()
  }
}