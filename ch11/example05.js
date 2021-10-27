const p1 = new Promise((resolve, reject) => {
  reject(new Error('???'))
  resolve(4)
})

p1.then((val) => {
  console.log(val)
  return val + 2
}).then((val) => {
  console.log(val)
  throw new Error('error')
}).catch((err) => {
  console.log(err.message)
  return 100
}).then((val) => console.log(val, 'done'))
