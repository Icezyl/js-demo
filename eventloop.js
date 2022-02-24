// async function async1() {
//   console.log(1)
//   await async2()
//   console.log(2)
// }
// async function async2() {
//   console.log(3)
// }
// console.log(4)
// setTimeout(function () {
//   console.log(5)
// }, 0)
// async1()
// new Promise(function (resolve) {
//   console.log(6)
//   resolve()
// }).then((res) => {
//   console.log(7)
// })
// console.log(8)
async1()
console.log(1)
async function async1() {
  await new Promise((resolve) => {
    console.log(2)
    resolve()
  }).then((res) => {
    console.log(3)
  })
}
console.log(4)
