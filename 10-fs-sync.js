const{readFileSync, writeFileSync} = require('fs');
//same as const fs = require('fs')
console.log('start');
//read
 const first=readFileSync('./content/first.txt', 'utf-8');
 const sec=readFileSync('./content/second.txt', 'utf-8');

 console.log(first, sec)

 //write
 writeFileSync('./content/result-sync.txt',
 `here is the result: ${first}, ${sec}`,{flag: 'a'})
 //wrote me the new text file in the path..and flag: a mean continue writeing
 //did not overwrite

 console.log('done with the task');
 console.log('staring the next one');

 //top down, if the first task take too long ,the time needed is too much
 //take longer time