function consume(reader) {
  let total = 0
  return pump()
  function pump() {
    return reader.read().then(({done, value}) => {
      if (done) {
        return
      }
      total += value.byteLength
      console.log(`received ${value.byteLength} bytes (${total}) bytes in total`)
      return pump()
    })
  }
}

fetch('https://ram.komica2.net/00/src/1634269902830.jpg')
  .then(res => consume(res.body.getReader()))
  .then(() => console.log('consumed the entire body without keeping the whole thing in memory!'))
  .catch(e => console.log('something went wrong: ' + e))
