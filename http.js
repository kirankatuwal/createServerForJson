const http = require("http");
const PORT = 3000;

const server = http.createServer();
server.on('request', (req, res) => {
    if (req.url === '/myfile') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');

        res.end(JSON.stringify({
            id: 1,
            name: 'Sir Issac Newton',
            class: 12,
        }));
    } else if (req.url === '/myhtml') {
        res.statusCode = 200;
        res.setHeader('Content-type', 'text/html');
        res.write('<html>');
        res.write('<body>');
        res.write('<ul>');
        res.write('<li> My Name is Kiran </li>');
        res.write('<li> I read in class 4 </li>');
        res.write('</ul>');
        res.write('</body>');
        res.write('</html>');
        res.end();
    } else if (req.url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-type', 'text/html');
        res.write('<html>');
        res.write('<body>');
        res.write('<ul>');
        res.write('<li> Root FILE </li>');
        res.write('<li> I read in class 4 </li>');
        res.write('</ul>');
        res.write('</body>');
        res.write('</html>');
        res.end();
    } else {
        res.statusCode = 404;
        res.write('<html>');
        res.write('<body>');
        res.write('<ul>');
        res.write('<li> Page NOT FOUND </li>');
        res.write('<li> Goto homepage </li>');
        res.write('</ul>');
        res.write('</body>');
        res.write('</html>');
        res.end();
    }
});

server.listen(PORT, () => {
    console.log("server started")
}); //localhost:3000