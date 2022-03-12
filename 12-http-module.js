const http=require('http');
const server=http.createServer((req,res)=>{
 if(req.url==='/')
 { res.end('welcome to our home page');}
 else if(req.url==='/about')
 {res.end('welcome to our about page');}
 else {res.end(`    <h1>OPS!</h1>
<p>we cannot find requested page</p>
<a href="/">back home</a>`);}
})

const PORT=5000;
server.listen(PORT)
console.log (`listening at port ${PORT}` )