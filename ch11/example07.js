const p1 = new Promise((resolve, reject2) => {
  reject2(new Error('rejected'))
})

p1.then((val) => {
  console.log(val)
  return val +2
}).then((val) => console.log(val))
.catch((err) => console.log('error:', err.message))
.then((val) => console.log('done'))
