// pure array copy
const aArray = [1, 2, 3]
const bArray = [ ...aArray ]

// pure array push
function purePush(aArray, newEntry) {
  return [ ...aArray, newEntry]
}
const purePush2 = (aArray, newEntry) => [ ...aArray, newEntry]

function purePop(aArray) {
  return aArray.slice(0, 1)
}

const purePop2 = aArray => aArray.slice(0, 1)

function pureShift(aArray) {
  return aArray.slice(1)
}

const pureShift2 = aArray => aArray.slice(1)

function pureUnshift(aArray, newEntry) {
  return [ newEntry, ...aArray]
}

const pureUnshift2 = (aArray, newEntry) => [ newEntry, ...aArray ]

function pureSplice(aArray, start, deleteCount, ...items) {
  return [ ...aArray.slice(0, start), ...items, ...aArray.slice(start + deleteCount) ]
}

const pureSplice2 = (aArray, start, deleteCount, ...items) => ([ ...aArray.slice(0, start), ...items, ...aArray.slice(start +deleteCount) ])

function pureSort(aArray, compareFunction) {
  return [ ...aArray ].sort(compareFunction)
}

const pureSort2 = (aArray, compareFunction) => [ ...aArray ].sort(compareFunction)

function pureReverse (aArray) {
  return [ ...aArray ].reverse()
}

const pureReverse2 = aArray => [ ...aArray ].reverse()

function pureDelete (aArray, index) {
  return aArray.slice(0, index).concat(aArray.slice(index+1))
}

const pureDelete2 = (aArray, index) => (
  aArray.slice(0, index).concat(aArray.slice(index+1))
)


function pureDeleteByValue (aArray, value) {
  return aArray.filter(function(v) {
    return v !== value
  })
}

const pureDeleteByValue2 = (aArray, value) => (
  aArray.filter((v) => v !== value)
)

function pureDeleteByIndex (aArray, index) {
  return aArray.filter(function (v, i) {
    return i !== index
  })
}

const pureDeleteByIndex2 = (aArray, index) => (
  aArray.filter((v, i) => i !== index)
)
