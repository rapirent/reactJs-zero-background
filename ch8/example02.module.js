exports.aString = 'test'
exports.aFunction = () => console.log('function test')
exports.aObject = {a: 1}
class aClass {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
}
exports.aClass = aClass
