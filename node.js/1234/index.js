import http from 'http';
http.createServer((request, response) => {
    console.log('Hello world');
}).listen(4000)

http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write('Hello World!');
    response.end();
}).listen(4000)
