const {readFileSync,writeFileSync}=require('fs')
var first=readFileSync('./content/first.txt','utf-8')
var second=readFileSync('./content/second.txt','utf-8')
console.log(`first:${first} , second ${second}`)
writeFileSync('./content/first.txt','/n this text written by writeFileSync method ',{flag:'a'})
writeFileSync('./content/second.txt','/n this text written by writeFileSync method ',{flag:'a'})
//reload files after writing 
first=readFileSync('./content/first.txt','utf-8')
second=readFileSync('./content/second.txt','utf-8')
console.log(`first:${first} , second ${second}`)
//create not exiting file
writeFileSync('./content/result','this file created by writeFileSync method')