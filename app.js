
//you can copied code form somewhere or start from the scrach. 
//every one have same issue , and some nice guys provide therre pjs, we can do it too
//npm : resuable code...module dependency

//npm - global command, comes with node
//npm --version

//local depnedecy - uee it ony in this particular project (focus)
//npm i <packageName>

//gloobal dependecy -use it in any project (less need)
//npm install -g <packageName>
//sudo npm install -g <packageName> (mac)


//package.json -maiifest file (stores important info about project/package)'
//3 ways you can creat package.json: 
//1. manual apporach (create package.json in the root, create properties etc)
//2. npm init( step by step, press enter to skip)
//3. npm init -y (everyhing deafault)



//if you want to pusbibish the npm, make sure the packname is unique, no dubicate to other npm 

//all the dependency are store in node_modules

const  _ =require('lodash')

const items =[1,[2,[3, [4]]]]
const newItems =_.flattenDeep(items);
console.log(newItems);
