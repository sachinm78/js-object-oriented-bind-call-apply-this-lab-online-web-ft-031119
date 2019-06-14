//Your code here

function justInvoke(fn) {
  return fn()
}

function setThisWithCall(fn, thisVal, arg) {
  return fn.call(thisVal, arg)
}