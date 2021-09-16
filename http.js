const http = require("http");
const PORT = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });

    res.end(JSON.stringify({
        id: 1,
        name: 'Sir Issac Newton',
        class: 12,
    }));
});

server.listen(PORT, () => {
    console.log("server started")
}); //localhost:3000