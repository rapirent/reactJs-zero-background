Promise.resolve("Success").then(function(value) {
  console.log(value)
}, function(value) {
  console.log('will not be called')
})

Promise.reject(new Error("fail")).then(function(error) {
  console.log('will not be called')
}, function(error) {
  console.log(error)
})


Promise.reject("fail").then(function(error) {
  console.log('will not be called')
}, function(error) {
  console.log(error)
})
