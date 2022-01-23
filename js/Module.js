class Module {
  constructor(options) {
    const defaults = {
      x: 0,
      y: 0,
      w: 1,
      h: 1,
      rotate: 0,
      pattern: new Solid(),
      roundCorners: { topRight: 0, bottomRight: 0, bottomLeft: 0, topLeft: 0 },
    }
    Object.assign(this, defaults, options)
  }

  display() {
    push()
    translate(this.x, this.y)
    translate(this.w / 2, this.h / 2)
    rotate(this.rotate)
    translate(-this.w / 2, -this.h / 2)
    roundMask(0, 0, this.w, this.h, this.roundCorners)
    this.pattern.display(this.w, this.h)
    pop()
  }
}

function roundMask(x, y, w, h, { topLeft = 0, topRight = 0, bottomRight = 0, bottomLeft = 0 } = {}) {
  const maxValue = 1 - 0.00001
  drawingContext.beginPath()
  drawingContext.moveTo(x + min(topRight, maxValue), y)
  drawingContext.arcTo(x + w, y, x + w, y + h, min(topRight, maxValue))
  drawingContext.arcTo(x + w, y + h, x, y + h, bottomRight)
  drawingContext.arcTo(x, y + h, x, y, min(bottomLeft, maxValue))
  drawingContext.arcTo(x, y, x + w, y, min(topLeft, maxValue))
  drawingContext.clip()
}