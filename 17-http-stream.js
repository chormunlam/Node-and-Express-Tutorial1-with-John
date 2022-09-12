var http = require('http')
var fs = require('fs')

http
  .createServer(function (req, res) {
    //this 2 lines sent large chunk of file
    // const text = fs.readFileSync('./content/big.txt', 'utf8')
    // res.end(text)

    //so let refactor it to smaller chunks
    const fileStream = fs.createReadStream('./content/big.txt', 'utf8')
    fileStream.on('open', () => {
      fileStream.pipe(res)
    })
    fileStream.on('error', (err) => {
      res.end(err)
    })
  })
  .listen(5000)

  //still same request, still same size, the response heaader now is chunks