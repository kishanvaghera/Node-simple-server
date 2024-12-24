const http = require("http");

const server = http.createServer((req, res) => {
    res.end("Hello from server");
});

server.listen(3000, () => {
    console.log("server is started");
});