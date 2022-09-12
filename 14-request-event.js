const http = require('http')
//we create the server like this before
// const server = http.createServer((req, res) => {
//   res.end('Welcome')
// })

//but there is anohter way to set up the server.  instead of callback, weuse method in server
// Using Event Emitter API
const server = http.createServer()
// sever emits request event
// subcribe to it / listen for it / respond to it
server.on('request', (req, res) => {
  res.end('Welcome')
})

server.listen(5000)