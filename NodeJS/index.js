const fs = require("fs");


console.log("Hello, World!");

// fs.writeFile("index.html", "Hello HTML",(err)=>{
//     if(err) throw err;
//     console.log("HTML file created!")
// });

fs.readFile("index.html", (err, data)=>{
    if(err) throw err;
    console.log(data.toString());
});