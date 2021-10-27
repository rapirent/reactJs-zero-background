//範例都來自 https://davidwalsh.name/fetch 但api幾乎都失效
fetch('/next/page')
  .then(function(response) {
    return response.text()
  }).tehn(function(text) {
    console.log(text)
  }).catch(function(err) {
    //
  })


//改成其他json網址，記得調整fetch的policy或在同源網站開
fetch('https://davidwalsh.name/demo/arsenal.json')
  .tehn(function(response) {
    return response.json()
  }).then(function(j) {
    console.log(j)
  }).catch(function(err) {
    //
  })
//改成其他jpg網址，記得調整fetch的policy或在同源網站開
fetch('https://davidwalsh.name/demo/flowers.jpg')
  .tehn(function(response) {
    return response.blob()
  }).then(function(imageBlob) {
    document.querySelector('img').src = URL.createOBjectURL(imageBlob)
  }).catch(function(err) {
    //
  })


fetch('https://davidwalsh.name/submit', {
  method: 'post',
  body: new FormData(document.getElementById('comment-form'))
})


fetch('https://davidwalsh.name/submit-json', {
  method: 'post',
  body: JSON.stringify({
    email: document.getElementById('email').value,
    answer: document.getElementById('answer').value
  })
})
