let vm = new Vue({
  data() {
    return {
      a: 1,
      b: 2,
    }
  },
})
vm.a = 6
console.log(vm)
function Vue(options) {
  let _data = options.data(),
    _this = this
  console.log("_data: ", _data)

  for (var k in _data) {
    ;(function (k) {
      Object.defineProperty(_this, k, {
        get() {
          console.log("get", k)
          return _data[k]
        },
        set(newValue) {
          console.log("set", k)
          _data[k] = newValue
        },
      })
    })(k)

    // _this.__defineGetter__(k, function () {
    //   return _data[k]
    // })
    // _this.__defineSetter__(k, function (newValue) {
    //   _data[k] = newValue
    // })
  }
}
let obj = {
  get a() {
    return "122"
  },
}
console.log(vm.__lookupGetter__("a"))
console.log(vm.__lookupSetter__("a"))

console.log(Object.getOwnPropertyDescriptor(vm, "a").get)
console.log(Object.getOwnPropertyDescriptor(vm, "a").set)
