const { Console } = require('console');
const url = require('url');

const myurl=new URL('https://www.youtube.com/watch?v=fBNz5xF-Kx4');

// Serialized URL
console.log(myurl.href);
console.log(myurl.toString());
//HOST (ROOT DOMAIN)
console.log(myurl.host);
// HOST nAMe
console.log(myurl.hostname);
//pathname
console.log(myurl.pathname);
//Serialized query
console.log(myurl.search);
//Param objects
console.log(myurl.searchParams);
// ADD PARAMS
myurl.searchParams.append('abc','123');
console.log(myurl.searchParams);
//Loop through params
myurl.searchParams.forEach((value,name)=>console.log(`${name}:${value}`));
