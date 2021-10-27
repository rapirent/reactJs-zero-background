//copy
const obj = { a: 1 }
const copy = Object.assign({}, obj)

function updateProperty(obj, item) {
  return Object.assign({}, obj, item)
}

// object spread
function updateProperty2(obj, item) {
  return { ...obj, ...item}
}


function deleteProperty (obj, key) {
  const newObj = Object.assign({}, obj)
  delete newObj[key]
  return newObj
}

function deleteProperty(obj, key) {
  let { [key]: deleted, ...newObj } = obj
  return newObj
}
