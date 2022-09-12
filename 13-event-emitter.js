//event: use heavily in node
// get back the class
// if want custom, need to extend from class
// otherwise just for emitting and handling events create instance

const EventEmitter = require('events')//using events modules
const customEmitter = new EventEmitter()//create instance/object

// on and emit methods
// keep track of the order
// additional arguments
// built-in modules utilize it

//listener, the order matters, we need to listen first ,the we emit it
customEmitter.on('response', (name, id) => {
  console.log(`data recieved, user ${name} with id:${id}`)
})

//this listen to same event 
customEmitter.on('response', (name) => {
  console.log('some other logic here '+ name)
})

//listen is on , now i can tell/emit
customEmitter.emit('response', 'john', 34)