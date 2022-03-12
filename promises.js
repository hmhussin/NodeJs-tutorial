let x = 6;
let y = 6;
var promise = new Promise((resolve, reject) => {
    if (x === y)
    {
        resolve(x)
    }
    else
    {
        reject(y)
    }
})
promise.then(() => {
    console.log('equal');
}).catch(() => {
    console.log('fail')
})