const p1 = new Promise((resolve, reject) => {
  throw new Error('rejected') // a throw create a new Promise.rejected誒
})

p1.then((val) => {
  console.log(val)
  return val +2
}).then((val) => console.log(val))
.catch((err) => console.log('error:', err.message))
.then((val) => console.log('done'))
