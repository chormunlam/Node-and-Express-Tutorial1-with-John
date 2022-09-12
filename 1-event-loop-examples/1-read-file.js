const {readFile} = require('fs')

console.log('startd a first task')
//check file path
readFile('./content/first.txt', 'utf-8',(err, result)=>{//event loop offload it
  if(err){
    console.log(err)
    return
  }
  console.log(result)
  console.log('completed first task')
})

console.log('starting next task')

//output:
/*
startd a first task

starting next task

fff
completed first task

bc the readfile is sync
*/