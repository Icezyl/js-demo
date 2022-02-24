/**
 * 深拷贝
 * Object.assign 只能拷贝第一层
 *
 * JSON.stringify和JSON.parse可以实现深拷贝，但是会抛弃对象的constructor，深拷贝后不管什么对象都会变成Object。
 *
 */

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
// console.log("newObj: ", newObj, obj)

function User() {
  
}
console.log(Object.prototype.toString.call(new User()))
