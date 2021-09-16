# Creating Server with Node JS
## Using port 3000 

<!-- Example 1 ~ Shortes method -->
const http = require("http");

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write("Working on it. . . . ");
    res.end("Ending . . . ");
}).listen(3000, console.log("server started"));

<!-- Ends here Simple Server with port 3000 -->

<!-- Example 2 ~ Definite method with JSON.stringify -->

const http = require("http");
const PORT = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json'});
    
    res.end(JSON.stringify({
        id:1,
        name:'Sir Issac Newton',
        class:12,
    }));
});

server.listen(PORT,()=>{
console.log("server started")
} ); //localhost:3000
<!-- Ends Here with port 3000 -->