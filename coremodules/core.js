//core modules
const path= require('path');

// Base name -> gets basefile name
console.log(__filename);
console.log(path.basename(__filename));

//directory name
console.log(path.dirname(__filename));

//File extension is returned
console.log(path.extname(__filename));

//create path obj
console.log(path.parse(__filename));//retunrs obj -> u could ask for properties of it though

//concat paths 
//all are merged with slashed bruh.!thats it
// ../test/hello.html
console.log(path.join(__dirname,'test','hello.html'));//all are merged with slashed bruh.!thats it

