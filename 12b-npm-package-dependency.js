
//npm
/*
you can copied code form somewhere or start from the scrach. 
every one have same issue , and some nice guys provide therre pjs, we can do it too
npm : resuable code...module dependency

if you want to pusbibish your own npm, 
make sure the packname is unique, no dubicate to other npm 

npm - global command, comes with node
npm --version

*/



//local and global dependecy
/*
local depnedecy - uee it ony in this particular project (focus)
npm i <packageName>

gloobal dependecy -use it in any project (less need)
npm install -g <packageName>
sudo npm install -g <packageName> (mac)

*/



//package.json -maiifest file (stores important info about project/package)'
/*
3 ways you can creat package.json: 
1. manual apporach (create package.json in the root, create properties etc)
2. npm init( step by step, press enter to skip)
3. npm init -y (everyhing deafault)
*/



//all the dependency are store in node_modules

const  _ =require('lodash')

const items =[1,[2,[3, [4]]]]
const newItems =_.flattenDeep(items);
console.log(newItems);
console.log("hello w");

//Q1,since i put my node_modules in gitignore, how ppl to use lodash here?
/*
we the the dependecy there right??
ok, we uploaded the package.json
if my team member want to clone the file, and do : npm install
it will check the dependcy, and then will automaticly set up the node moudle file
*/

//dev dependency
/*
npm i nodemon -D or npm i nodemon --save-dev
example: npm i nodemon -D


dependencies are required to run, devDependencies only to develop,
A dependency is a library that a project needs to function effectively.
DevDependencies are the packages a developer needs during
development.


//nodemon  
//the diff is nodemon keep track the changing and updata it
/* 
in package.json
"scripts": {
    "start": "node app.js",
    "dev":"nodemon app.js"
  },

chormuns-Air:Node_fundamental chormunlam$ npm start

> node_fundamental@1.0.0 start
> node app.js

[ 1, 2, 3, 4 ]

chormuns-Air:Node_fundamental chormunlam$ npm  run dev

> node_fundamental@1.0.0 dev
> nodemon app.js

[nodemon] 2.0.19
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node app.js`
[ 1, 2, 3, 4 ]
*/
//at the end i change the start to : "nodemon app.js" instaed of "nod app.js"


//uninstall
/*
npm unistall <package name>
remove packag-lock.jason and node moudle
npm install will get all the pagake-lock and node moudle back

example: npm unistall bootstrap
*/

//insatll back 
/**
 npm install 
 will get all the pagake-lock and node moudle back
 */

 //global dependency
 /*
 that we can use nodemon xxx.js
 dont need to do npm start

 sudo npm install -g nodemon

 what is npx?
 package runner
 npx toolname filename
 */

 //package-lock.json: let other know the veriosn for all the packeage and dependcy. 