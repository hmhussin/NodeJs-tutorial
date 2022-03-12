const path=require('path')
console.log(path.sep)
//create filepath
const filepath=path.join('/content','subfolder','test.txt')
console.log(filepath)
//absolute path
const absolute=path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolute)