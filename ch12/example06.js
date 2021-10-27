let url = new URL('https://geo.example.org/api')
let params = {lat:35.696233, long:139.570431}
Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
fetch(url).then( key => console.log(key))
