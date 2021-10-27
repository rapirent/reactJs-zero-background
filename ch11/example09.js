const async1 = new Promise((resolve, reject) => {
  console.log('async1')
  resolve('??')
})

function async2() {
  console.log('async2')
}


function async3() {
  console.log('async3')
}


function async4() {
  console.log('async4')
  throw Error('4')
}

function errorHandler1() {
  console.log('error 1')
}

function errorHandler2() {
  console.log('error 2')
}

async1
  .then(() => async2(), undefined)
  .then(() => async3(), undefined)
  .then(undefined, (err) => errorHandler1())
  .then(() => async4(), (err) => errorHandler2())
  .then(undefined, (err) => console.log('Don\'t worry about it'))
  .then(() => console.log('All done'), undefined)
