const httpHeaders = new Headers()
httpHeaders.append('Accept', 'application/json')
const req = new Request('https://gogle.com', {headers: httpHeaders})
