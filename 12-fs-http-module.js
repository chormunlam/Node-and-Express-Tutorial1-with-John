//http module
const { diffieHellman } = require('crypto');
const http=require('http');
const server =http.createServer((req, res)=>{//req: incoming request, responce : what sending back
  if(req.url === '/'){
    res.end(`<h1>home page</h1>
    <p>this is about link</p>
    <a href="/about">about</a>`)
  }
  if(req.url === "about"){
    res.end('here is our short history')
  }
  res.end(`
  <h1>Oops!</h1>
  <p>no page u look for</p>
  <a href="/">back home</a>
  
  `)

})
server.listen(5000)

//somethig i cant go to other path, the app.js terminated. 
//Error [ERR_STREAM_WRITE_AFTER_END]: write after end