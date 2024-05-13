const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.setHeader('content-type', 'text-html');
    console.log(req.url);

    if (req.url == '/') {
        res.statusCode = 200;
        res.end(
            '<h1>This is codewithdusty</h1><p>Hey this is the way to rock the world!!</p>'
        );
    } else if (req.url == '/about') {
        res.statusCode = 200;
        res.end(
            '<h1>This is about codewithdusty</h1><p>Hey this is the way to about codewithharry!!</p>'
        );
    } else {
        // res.harry();
        res.statusCode = 404;
        res.end(
            '<h1>Not Found</h1><p>Hey this page was not found on the server</p>'
        );
    }
});

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
