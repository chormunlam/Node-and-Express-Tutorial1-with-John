//CommonJS, every file in node is module(by default)

//Modules- Encapsulated Code9only share minimum..es6, only share wha we want

const names = require('./4-names')//need . to start the module
const sayHI=require('./5-utils')

const data=require('./6-alternative-flavor')
// console.log(data)
// sayHI(names.john)
// sayHI('susan')
// sayHI(names.peter)

require('./7-mind-g')//still print out the function result