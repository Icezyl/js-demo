let obj = {
  a: 1,
  b: 2,
  c: 3,
  d: {
    e: 4,
    f: 5,
    g: {
      h: 0,
    },
  },
}

/**
 * @param {object} o
 * @description 采用递归实现的深度冻结
 */
Object.deepFreeze = function (o) {
  let _keys = Object.getOwnPropertyNames(o)
  console.log( _keys);
  if (_keys.length > 0) {
    _keys.forEach(function (key) {
      var _value = o[key]
      if (typeof _value === "object" && _value !== null) {
        Object.deepFreeze(_value)
      }
    })
  }
  return Object.freeze(o)
}
Object.deepFreeze(obj)
obj.b = 8
console.log(obj)
