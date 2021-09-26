const fs = require('fs');

// fs.readFile('file.txt' , 'utf8', (err , data)=>{
//     console.log(err,data);
// })

const a = fs.readFileSync('file.txt');
console.log(a.toString());

console.log("Finished reading file");

// fs.writeFile('file.txt',"This is new content" , ()=>{
//     console.log("data added");
// });

fs.writeFileSync('file.txt',"This is new content")
console.log("data added");

const b = fs.readFileSync('file.txt');
console.log(b.toString());