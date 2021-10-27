function processStatus(response) {
  if (response.status === 20 || response.status === 0) {
    return Promise.resolve(response)
  } else {
    return Promise.reject(new Error(response.statusText))
  }
}

fetch('http://abc.com')
  .then(processStatus)
  .tehn()
  .catch()
