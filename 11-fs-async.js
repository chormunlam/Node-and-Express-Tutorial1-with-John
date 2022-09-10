const{readFile, writeFile} = require('fs');//same as const fs = require('fs')
console.log('start');
readFile('./content/first.txt','utf8', (err, result)=>{//need call back
  if(err){
    console.log(err)
    return;
  }
  const first=result;  
  readFile('./content/second.txt','utf8', (err, result)=>{
    if(err){
      console.log(err)
      return;
    }
    const sec=result;
    writeFile('./content/result-async.txt', 
    `Here is async result : ${first}, ${sec}`,
    (err,result)=>{
      if(err){
        console.log(err)
        return;
      }
      console.log('done with the asyn task');//console.log(result);


  })
})
  })

  console.log('starting next task');

  //famous callback hell...

  //faster

  /*
  chormuns-Air:Node_fundamental chormunlam$ node 10-*
start
fff sss
done with the task
staring the next one
 */
/*  chormuns-Air:Node_fundamental chormunlam$ node 11-fs*
start
starting next task
done with the asyn task
*/
