const http = require('http');
const fs = require('fs');

const port = process.env.PORT || 3000 ;

const server = http.createServer((req , res)=>{

    res.setHeader('Content-Type' , 'text/html'); // cpntent type to be display as a response need to defined as above

    if(req.url == '/'){
        res.statusCode = 200 ;
       const data = fs.readFileSync('index.html')
       res.end(data.toString())
    }else if(req.url == '/about'){
        res.statusCode = 200 ;
        const data = fs.readFileSync('about.html')
       res.end(data.toString())
    }else if(req.url == '/form'){
        res.statusCode = 200 ;
        const data = fs.readFileSync('form.html')
       res.end(data.toString())
    }
    else{
        res.statusCode = 404 ; 
        res.end('<h1>Not Found ... !</h1>')
    }
   
})

server.listen(port , ()=>{
    console.log("listening......")
})