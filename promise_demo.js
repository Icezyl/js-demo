// then 用法

let promise = new Promise((resolve, reject) => {
  resolve(154)
})

promise
  .then((res) => {
    return res
  })
  .then((res) => {
    return new Promise((resolve, reject) => {
      resolve(res)
    })
  })
  .then((res) => {
    console.log("res: ", res)
    throw new Error("Error a error")
  })

// 成功条件
// then return 一个普通的javascript value
// then return 新的Promise并且是成功态的结果 value

// 失败调节
// then return 新的Promise失败态的原因 reason
// then return 抛出 throw new Error

// 链式调用
// jQuery return this


/** 
 * Promise
 * 1.基本类 
 * 2.异步-发布订阅
 * 3.链式调用
 */