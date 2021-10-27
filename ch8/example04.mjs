import aFunction from './example04.module.mjs'
import square from './example04.module.mjs' //import { default as square } from './example04.module.mjs'
import { default as square2 } from './example04.module.mjs'

console.log(aFunction(5))

console.log(square(5))

console.log(square2(5))
