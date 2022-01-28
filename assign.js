let obj = {
  a: 1,
  b: 2,
  c: 3,
  d: {
    e: 4,
    f: 5,
  },
}

let newObj = Object.assign({}, obj)
newObj.a = 5
newObj.d.e = 8
console.log("newObj: ", newObj, obj)
