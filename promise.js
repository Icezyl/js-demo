class NewPromise {
  static PENDING = "pending"
  static RESOLVED = "resolved"
  static REJECTED = "rejected"

  constructor(executor) {
    this.status = NewPromise.PENDING
    this.value = null
    try {
      executor(this.resolve.bind(this), this.reject.bind(this))
    } catch (err) {
      console.log("err: ", err)
      this.reject(err)
    }
  }
  resolve(value) {
    if (this.status == NewPromise.PENDING) {
      this.status = NewPromise.RESOLVED
      this.value = value
    }
  }
  reject(reason) {
    if (this.status == NewPromise.PENDING) {
      this.status = NewPromise.REJECTED
      this.value = reason
    }
  }
  then(onResolved, onRejected) {
    if (typeof onResolved !== "function") {
      onResolved = () => {}
    }
    if (typeof onRejected !== "function") {
      onRejected = () => {}
    }
    if (this.status == NewPromise.RESOLVED) {
      setTimeout(() => {
        try {
          onResolved(this.value)
        } catch (err) {
          onRejected(err)
        }
      })
    }
    if ((this.status = NewPromise.REJECTED)) {
      setTimeout(() => {
        try {
          onRejected(this.value)
        } catch (err) {
          onRejected(err)
        }
      })
    }
  }
  catch(onRejected) {}
}

console.log(1)
// new NewPromise((resolve, reject) => {
//   console.log(123)
//   resolve(154)
// }).then((res) => {
//   console.log("res: ", res)
// })

new Promise((resolve, reject) => {
  console.log(123)
  resolve(15)
}).then((res) => {
  console.log(154)
})
console.log(2)

//
// new Promise((resolve, reject) => {
//   console.log(124)
//   resolve()
// })
