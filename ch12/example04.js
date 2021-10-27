fetch('http://abc.com').then(response => {
  if (!response.ok) throw new Error(response.statusText)
  return response.json()
}).catch(function(err) {
  //console.log(err)
})
