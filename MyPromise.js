const PENDING = "PENDING",
  FULFILLED = "FULFILLED",
  REJECTED = "REJECTED"

const resolvePromise = (promise, x, resolve, reject) => {
  if (promise === x) return reject(new aTypeError("统一引用进入死循环"))

  let called = false
  // 判断x是object或function  有可能是promise
  if ((typeof x === "object" && x !== null) || typeof x === "function") {
    try {
      let then = x.then
      if (typeof then === "function") {
        // Promise
        then.call(
          x,
          (y) => {
            if (called) return
            called = true
            resolve(y)
          },
          (r) => {
            if (called) return
            called = true
            reject(r)
          }
        )
      } else {
        return reject(x)
      }
    } catch (error) {
      if (called) return
      called = true
      return reject(error)
    }
  } else {
    return reject(x)
  }
}
class MyPromise {
  constructor(excutor) {
    this.state = PENDING
    this.value = undefined
    this.reason = undefined

    this.onFulfilledCallbacks = []
    this.onRejectedCallbacks = []

    const resolve = (value) => {
      if (this.state === PENDING) {
        this.state = FULFILLED
        this.value = value

        this.onFulfilledCallbacks.forEach((fn) => fn())
      }
    }

    const reject = (reason) => {
      if (this.state === PENDING) {
        this.state = REJECTED
        this.reason = reason

        this.onRejectedCallbacks.forEach((fn) => fn())
      }
    }

    try {
      excutor(resolve, reject)
    } catch (error) {
      reject(error)
    }
  }

  then(onFulFilled, onRejected) {
    onFulFilled =
      typeof onFulFilled === "function" ? onFulFilled : (value) => value
    onRejected =
      typeof onRejected === "function"
        ? onRejected
        : (reason) => {
            throw reason
          }
    let promise2 = new MyPromise((resolve, reject) => {
      if (this.state === FULFILLED) {
        setTimeout(() => {
          try {
            let x = onFulFilled(this.value)
            resolvePromise(promise2, x, resolve, reject)
          } catch (error) {
            reject(error)
          }
        })
      }
      if (this.state === REJECTED) {
        setTimeout(() => {
          try {
            let x = onRejected(this.reason)
            resolvePromise(promise2, x, resolve, reject)
          } catch (error) {
            reject(error)
          }
        })
      }
      if (this.state === PENDING) {
        this.onFulfilledCallbacks.push(() => {
          try {
            let x = onFulFilled(this.value)
            resolvePromise(promise2, x, resolve, reject)
          } catch (error) {
            reject(error)
          }
        })

        this.onRejectedCallbacks.push(() => {
          try {
            let x = onRejected(this.reason)
            resolvePromise(promise2, x, resolve, reject)
          } catch (error) {
            reject(error)
          }
        })
        console.log(this.onRejectedCallbacks)
      }
    })

    return promise2
  }

  catch(errorCallback) {
    return this.then(null, errorCallback)
  }
}

let promise = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    reject()
  }, 1000)
})
console.log(promise)
promise.then(
  (value) => {
    console.log("value: ", value)
  },
  (error) => {
    console.log("error: ", error)
  }
)
