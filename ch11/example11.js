function initPromise1(someObject) {
  return new Promise(function(resolve) {
    if (typeof someObject !== 'object')
      throw new Error('error occured')
    else
      resolve(someObject)
  })
}

function initPromise2(someObject) {
  if (typeof someObject !== 'object')
    throw new Error('error occured')
  else
    return Promise.resolve(someObject)
}

function initPromise3(someObject) {
  if (typeof someObject !== 'object')
    return Promise.reject(new Error('error occured'))
  else
    return Promise.resolve(someObject)
}

initPromise1(1).then((value) => {
  console.log(value)
}).catch((err) => {
  console.log(err.message)
})
initPromise2(new String('test')).then((value) => {
  console.log(value)
}).catch((err) => {
  console.log(err.message)
})
initPromise3('test').then((value) => {
  console.log(value)
}).catch((err) => {
  console.log(err.message)
})
