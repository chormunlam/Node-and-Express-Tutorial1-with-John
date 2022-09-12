const http = require('http')

const server = http.createServer((req, res) => {
  console.log('request event')//this is stay alive , keep console.log the string
  res.end('Hello World')//send back the string
})

server.listen(5000, () => {//this is asyn, waiting the request to come in, then call back run
  //console.log('Server listening on port : 5000....')
})
//why we get request event twice every time i refresh it...