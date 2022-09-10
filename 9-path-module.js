const path =require('path')

console.log(path.sep)// '/'

const filePath=path.join('/content/', 'subflolder', 'test.txt')
console.log(filePath)

const base=path.basename(filePath)
console.log(base)//test.txt

const absolute =path.resolve(__dirname, '/content/', 'subflolder', 'test.txt')
const absoluteB=path.resolve(__dirname, filePath)
console.log(absolute)
console.log(absoluteB)
/*

chormuns-Air:Node_fundamental chormunlam$ node 9*
/
/content/subflolder/test.txt
test.txt
/content/subflolder/test.txt
/content/subflolder/test.txt
 */
