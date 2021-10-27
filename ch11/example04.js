const p1 = new Promise((resolve, reject) => {
  resolve(4)
  reject(5)
})

p1.then((val) => {
  console.log(val)
  return val + 2
}).then((val) => {
  console.log(val)
  return val + 5
}).catch((err) => {
  console.log(err.message)
  console.error(err)
  return 100
}).then((val) => console.log(val, 'done'))
