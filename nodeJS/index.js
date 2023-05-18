import http from "http";
import fs from "fs";
import dotenv from "dotenv";
dotenv.config();

import { createLink } from './utils.js';

const PORT = process.env.PORT || 3333;
const folder = process.argv[2]; 

const server = http.createServer((req,res) => {
   if(req.url === "/"){
      fs.readdir(folder,(err,files) => {
         // console.log("%s %O folder -> ", JSON.stringify(folder,null,2))
         console.log("...")
         if(err){
            console.log(err);
         }
         else{
            res.writeHead(200, { "Content-Type": "text/html" });
            files.forEach(f => {
               const link = createLink(f);
               res.write(link);
               // res.write(createLink(`${f}\n`))
            } );
            res.end();
         }
      })
   }
})

server.listen(PORT,() => {
   console.log(`Server Online na porta ${PORT}`);
});