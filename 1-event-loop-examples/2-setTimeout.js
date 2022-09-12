// started operating system process

console.log('first')
setTimeout(() => {
  console.log('second')//the time is zero, settimeout is asyn, so offloaded
}, 0)
console.log('third')

// completed and exited operating system process