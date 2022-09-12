//show the code that block the event loop
const http = require('http')

//server
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Home Page')
  }
  if (req.url === '/about') {
    // blocking code: could be nested for loop
    for (let i = 0; i < 1000; i++) {
      for (let j = 0; j < 1000; j++) {
        console.log(`${i} ${j}`)
      }
    }
    res.end('About Page')
  }
  res.end('Error Page')
})

//listen
server.listen(5000, () => {
  console.log('Server listening on port : 5000....')
})