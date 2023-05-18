const http = require("http");
const fs = require("fs")
require("dotenv").config();

const PORT = process.env.PORT || 3333;
const folder = process.argv[2];

const server = http.createServer((req,res) => {
   fs.readdir(folder,(err,files) => {
      if(err){
         console.log(err);
      }
      else{
         res.writeHead(200, { "Content-Type": "text/plain" });
         // res.write("Hello word Server");
         files.forEach(f => res.write(`${f}<br>`));

         res.end();
      }
   })

})

server.listen(PORT,() => {
   console.log(`Server Online na porta ${PORT}`);
});