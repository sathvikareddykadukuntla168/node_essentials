//const Person=require('./person');

// u could use babble to use import - from rel .!
// console.log(person.name);


// console.log("Heyy form nodejs to sath");


// const p1 =new Person('satz',20);
// p1.greeting();

// if express is there -> app.get('/about',callback);

// lets see without

const httpobj = require('http');
const path = require('path');
const fs = require('fs');

// const server = httpobj.createServer((req,res)=>{
//    if(req.url ==='/') {
//        fs.readFile(
//         path.join(__dirname,'public','index.html'),(err,content)=>{
//         if(err) throw err;
//         res.writeHead(200,{'Content-Type' : 'text/html'})
//         res.end(content);
//        })
//        //res.end('<h1>homepage</h1>');
//    }
//    if(req.url ==='/about') {
//         fs.readFile(
//         path.join(__dirname,'public','about.html'),(err,content)=>{
//         if(err) throw err;
//         res.writeHead(200,{'Content-Type' : 'text/html'})
//         res.end(content);
//         })
//     }
//     if(req.url ==='/api/users') {
//         const users=[
//             {name:'sat',age:40},
//             {name:'kms',age:50}
//         ];
//         res.writeHead(200,{'Content-Type':'application/json'});
//         res.end(JSON.stringify(users));
//      }
//     //res.end('<h1>homepage</h1>');
//    console.log(req.url);
// });

const server = new httpobj.createServer((req,res)=>{
    //build file path 
    let filepath = path.join(__dirname,'',req.url==='/'?'index.html':req.url);
    console.log(filepath);
    //res.end();

    //extension of the file
    let extname= path.extname(filepath);

    //Initial content type

    let contentType = 'text/html';

     //check ext and set content type
    switch(extname){
        case '.js':
            contentType = 'text/javascript';
            break;
        // slly write for others css png json jpg .... 

    }
    //read file
    fs.readFile(filepath,(err,content)=>{
        if(err){
            if(err.code=='ENOENT'){
                //page not found
                fs.readFile(path.join(__dirname,'','404.html'),(err,content)=>{
                    res.writeHead(200,{'Content-Type':contentType});
                    res.end(content,'utf8');
                });
            }
            else{
                //some server error ~500
                res.writeHead(500);
                res.end(`server error`)
            }
        }
        else{
            //sucess
            res.writeHead(200,{'Content-Type':contentType});
            res.end(content,'utf8');
        }
    });
   

});

const PORT =process.env.PORT||3000;

server.listen(PORT,()=>console.log(`server running on port ${PORT}`));





