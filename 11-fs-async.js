//read and write file async 
const {readFile,writeFile}=require('fs');
//read file first.txt
console.log('start  async task')
readFile('./content/big.txt','utf8',(err,first)=>{
    if(err)
    {console.log(err);
    return;}
    //read file second.txt
    readFile('./content/second.txt','utf8',(err,second)=>{
        if(err)
        {console.log(err);
        return;}
        //write the result in result.txt
        writeFile('./content/result.txt',`this is the result of reading ${first} and ${second} `,(err,result)=>{
            if(err)
            {console.log(err);
            return;}
    });
});
console.log('ending async task')
});
console.log('start new task')
// note console logs arrangements


