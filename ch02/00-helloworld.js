const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Hello Server</title>
        
    </head>
    <body>
      <h1>Helloworld server<h1>
    </body>
</html>');
});

server.listen(port, () =>
    console.log(
        `server started on port ${port}; ` + 'press Ctrl-C to terminate....'
    )
);
