const fs=require('fs')
const promise = new Promise((resolve, reject) => {
    fs.writeFile('./content/result.txt','utf-8', (err, result) => {
        if (err)
            reject(err)
        else
            resolve('done')
    })
    
})
console.log(promise)
promise.then((result) => console.log(result+promise)).catch((err) => console.log(err))
