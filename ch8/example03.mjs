import * as myModule from './example02.module.mjs'

console.log(myModule.aString)
console.log(myModule.aObject)

myModule.aFunction()

const newObj = new myModule.aClass('Inori', 16)
console.log(newObj)
