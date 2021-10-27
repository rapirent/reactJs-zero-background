class Option {
  constructor(key, value, autoLoad = false) {
    if (typeof key != 'undefined') {
      this['_' + key] = value;
    }
    this.autoLoad = autoLoad
  }

  get color() {
    if (this._color !== undefined) {
      return this._color
    } else {
      return 'no color prop'
    }
  }

  set color(value) {
    this._color = value
  }
}

const op1 = new Option('color', 'red')
op1.color = 'yellow'
console.log(op1)
const op2 = new Option('action', 'run')
console.log(op2.color)
op2.color = 'yellow'
console.log(op2)
