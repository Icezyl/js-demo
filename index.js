// const target = Object.defineProperty({}, "a", {
//   value: 10,
//   writable: true
// });
// console.log(target);
// const res = Object.assign(target, { b: 2 }, { b: 3, a: 100 }, { c: 4 });
// console.log("res: ", res);

// Object.myAssign = function(tarage, ...sources) {
//   console.log("sources: ", sources);
//   sources.forEach(source => {
//     console.log(Object.keys(source));
//     const descriptors = Object.keys(source).reduce((descriptors, key) => {
//       console.log('descriptors, key: ', descriptors, key);
//       descriptors[key] = Object.getOwnPropertyDescriptor(source, key);
//       return descriptors;
//     }, {});
//     Object.defineProperties(tarage, descriptors);
//   });
// };

// Object.myAssign({}, { a: 1, c: 6 }, { b: 2 });

// let o = {};
// Object.defineProperty(o, "age", {
//   value: 18,
//   writable: true,
//   enumerable: true,
//   configurable: true,
//   // get() {
//   //   console.log(this);
//   //   return 18;
//   // },
//   set: function(newVal) {
//     console.log("newVal: ", newVall);
//   }
// });
// o.age = 16;
// console.log(o);

// let obj = Object.create(
//   {},
//   {
//     a: {
//       value: 1,
//       enumerable: true
//     },
//     b: {
//       value: 1,
//       enumerable: false
//     }
//   }
// );
// // console.log(Object.getOwnPropertyNames());
// console.log(Object.keys(obj));
// console.log([] + []);

// console.log("a".charCodeAt(0));

// Object.defineProperty(window, "_", {
//   get() {
//     this._c = this._c || "a".charCodeAt(0);
//     var _ch = String.fromCharCode(this._c);
//     if (this.c >= "a".charCodeAt(0) + 26) return;
//     this._c++;
//     return _ch;
//   }
// });

// console.log(_ + _ + _ + _ + _ + _ + _ + _ + _ + _ + _ + _ + _ + _ + _ + _ + _);

// let arr = [1, 2, 3, 4, 5];

// let ms = arr.reduce((prev, cur, item, arr) => {
//   console.log("prev,cur,item,arr: ", prev, cur);
//   return prev + cur;
// });

// console.log(arr, ms);
// const obj = {
//   prop: 42
// };

// let s = Object.freeze(obj);
// console.log(Object.entries(obj));
// for (let [key, val] of Object.entries(obj)) {
//   console.log("key,val: ", key, val);
// }

// let sv = Object.getOwnPropertyDescriptor(s, "prop");
// console.log("sv: ", sv);

// console.log(Object.getOwnPropertyNames(obj));

const obj = {};
Object.defineProperty(obj, "a", {
  value: 12,
  enumerable: true
});

let ls = Object.entries(obj);
console.log("ls: ", ls);
