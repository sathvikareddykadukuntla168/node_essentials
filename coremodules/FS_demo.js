const fs = require('fs');
const path=require('path');

// async - sync both available -> we mostly use async

//create folder
// fs.mkdir(path.join(__dirname,'/test'),{}, err=>{
//     //{} -> options -> here we dont have any
//     if(err)throw err;
//     console.log('Folder created');
// });

//create file -> open
//write to a file -> write 

//create and write to file 
fs.writeFile(path.join(__dirname,'/test','hello.txt'),'Hello world!', err=>{
    //{} -> options -> here we dont have any
    if(err)throw err;
    console.log('File written to');
});
//create and write to file 
fs.writeFile(path.join(__dirname,'/test','hello.txt'),'Hello world! second time', err=>{
    //{} -> options -> here we dont have any
    if(err)throw err;
    console.log('File written to');
});
//Over writes


//to append -> use append function.
fs.appendFile(path.join(__dirname,'/test','hello.txt'),'appending the line', err=>{
    //{} -> options -> here we dont have any
    if(err)throw err;
    console.log('File appended to');
});


//Read File 
fs.readFile(path.join(__dirname,'/test','hello.txt'),'utf8', (err,data)=>{
    //{} -> options -> here we dont have any
    // if utf8 is not put some rawbuffer is shown rather than normal data
    if(err)throw err;
    console.log(data);
});

//Rename file
fs.rename(path.join(__dirname,'/test','hello.txt'),path.join(__dirname,'/test','helloworld.txt'), (err)=>{
    //{} -> options -> here we dont have any
    // if utf8 is not put some rawbuffer is shown rather than normal data
    if(err)throw err;
    console.log('File renamed');
});