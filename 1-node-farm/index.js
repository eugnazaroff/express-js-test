const http = require('http')
const url = require('url')
const fs = require('fs')



//////////
////SERVER
//////////

const data = fs.readFileSync(`${__dirname}/starter/dev-data/data.json`,'utf-8');
const dataOb = JSON.parse(data);

const server = http.createServer((req, res)=>{
    console.log(req.url);


    const pathName = req.url;

    if(pathName === '/' || pathName ==='/overview'){
        res.end(`this is overview`)
    }

    else if(pathName === '/product'){
        res.end(`this is product`)
    }
    else if(pathName === '/api'){
        
    res.writeHead(200, {'Content-type': 'application/json'})
    res.end(data)
    }
    
     

    else{
        res.writeHead(404);
        res.end('<h1>page not found</h1>')
    }

    
})

server.listen(3000, '127.0.0.1', ()=>{
    console.log("server started...");
});

