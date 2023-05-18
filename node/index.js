// const http = require("http");
// const fs = require("fs")
// require("dotenv").config();

import http from "http";
import fs from "fs";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 3333;
const folder = process.argv[2]; 

const server = http.createServer((req,res) => {
   if()
   fs.readdir(folder,(err,files) => {
      console.log("folder -> ",folder)

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