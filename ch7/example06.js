class Point {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
  toString() {
    return '(' + this.x + ', '+ this.y + ')'
  }
}

class ColorPoint extends Point {
  constructor(x, y, color) {
    super(x, y)
    this.color = color
  }
  toString() {
    return super.toString() + ' in ' + this.color
  }
}

const point = new Point(1, 2)
console.log(point)
const ppoint = new ColorPoint(1, 2, 'red')
console.log(ppoint)
