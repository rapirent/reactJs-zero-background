const httpHeaders = {'Content-Type': 'image/jpeg', 'Accept-Charset': 'utf-8', 'X-My-Custom-Header': 'fetch are cc'}
const myHeaders = new Headers(httpHeaders)
const req = new Request('https://google.com', {headers: myHeaders})
