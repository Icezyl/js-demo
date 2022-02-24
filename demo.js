// let obj = {
//   name: "tom",
//   age: 16,
// }

// let objProxy = new Proxy(obj, {
//   get: (target, key) => {
//     console.log("target, key: ", target, key)
//     return target[key]
//   },
//   set: (target, key, value) => {
//     console.log("value: ", value)
//     console.log("target,key: ", target, key)
//     target[key] = value
//   },
// })
// objProxy.name = "lili"
// console.log(objProxy.name, obj)

let obj = Object.defineProperty({}, "a", {
  value: 10,
})
console.log("obj: ", obj)
console.log("obj: ", Object.assign(obj))
console.log(JSON.stringify(obj))
