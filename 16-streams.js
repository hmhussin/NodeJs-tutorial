const fs = require('fs')
const http = require('http')

http.createServer((req, res) => {
    if (req.url === '/') {
        const text = fs.readFileSync('./content/big.txt', 'utf-8')
        res.end(text);
    }
    if (req.url === '/about') {
        const readStream = fs.createReadStream('./content/big.txt', 'utf8')
        readStream.on('open', () => {
            readStream.pipe(res)
        })
        readStream.on('error', (err) => {
            readStream.pipe(err)
        })
    }
}).listen(5000)