const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // if (req.url === '/') {
  //   res.write('Hello World');
  //   // res.writeHead(200, { 'Content-Type': 'text/html' });
  //   // fs.readFile('./index.html', function (err, data) {
  //   //   if (err) {
  //   //     res.write(err);
  //   //   } else {
  //   //     res.write(data);
  //   //   }
  //   // });
  //   res.end();
  // }
  if (req.url === '/index.html' || req.url === '/') {
    res.write(fs.readFileSync('./index.html'));
    res.end();
  } else if (req.url === '/index.css') {
    res.write(fs.readFileSync('./index.css'));
    res.end();
  } else if (req.url === '/memes' || req.url === '/memes/index.html') {
    res.write(fs.readFileSync('./memes/index.html'));
    res.end();
  } else if (req.url === '/1.jpg') {
    res.write(fs.readFileSync('./memes/1.jpg'));
    res.end();
  } else {
    res.write(JSON.stringify(404));
    res.end();
  }
});

server.listen(3000);

console.log('server running on port 3000...');
