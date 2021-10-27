const p1 = Promise.resolve(3)
const p2 = 1337
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('foo'), 1000 )
})

Promise.all([p1, p2, p3]).then((value) => {
  console.log(value)
}).catch((err) => {
  console.log(err.message)
})

Promise.all('i am a string').then((value) => {
  console.log(value)
}).catch((err) => {
  console.log(err.message)
})
