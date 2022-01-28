/**
 * @param {*} o Object
 * @returns [[],[]]
 */
Object.myEntries = (o) => {
  let __arr = []
  if (Object.prototype.toString.call(o) == "[object Object]") {
    for (let item in o) {
      let v = [item, o[item]]
      __arr.push(v)
    }
  }
  return __arr
}

/**
 * @param {*} arr Array
 * @returns Object
 */
Object.myFromEntries = (arr) => {
  let __obj = {}
  for (let item of arr) {
    __obj[item[0]] = item[1]
  }
  return __obj
}

let obj = {
  a: 1,
  b: 2,
}

let newMyEntries = Object.myEntries(obj)
let newEntries = Object.entries(obj)
console.log("newEntries: ", newEntries, newMyEntries)

let newFrom = Object.fromEntries(newEntries)
let newMyFrom = Object.myFromEntries(newEntries)
console.log("newFrom: ", newFrom, newMyFrom)
