const promise = new Promise(function(resolve, reject) {
  resolve(1)
})

promise.then(function(value) {
  console.log(value)
  return value + 1
}).then(function(value) {
  console.log(value)
  return value + 2
}).then(function(value) {
  console.log(value)
  return value + 4
})
