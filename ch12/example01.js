function reqListener() {
  const data = JSON.parse(this.responseText)
  console.log(data)
}

function reqError(err) {
  console.log('Fetch Error :-S', err)
}

const XMLHttpRequest = require('xhr2')
const oReq = new XMLHttpRequest()
oReq.onload = reqListener
oReq.onerror = reqError
oReq.open('GET', 'file:///Users/tony/ReactJs-zero-background/ch12/sample.json', false)
oReq.send(null)
