const http = require('http');

let users = [
  {
    name: "Anton"
  }, 
  {
    name: "Masha"
  }
]

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "application/json"
  })
  if(req.method === 'GET') {
    res.end(JSON.stringify(users));
  } 
  if(req.method === 'POST') {
   req.on('data', (data) => {    
     users.push(JSON.parse(data));
     res.end('ok');
   })
  }
  if(req.method === 'PUT') {
   req.on('data', (data) => {    
     users = JSON.parse(data);
     res.end('ok');
   })
  } 
})

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`server was created at ${PORT} port`)
})