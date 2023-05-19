import fs from "fs";

const readFile = (filename) => new Promise((resolve,reject) => {
   fs.readFile(filename,(err,content) => {
      if(err) reject(err);
      else resolve(parseInt(content));
   })
})

{/* Exemplo 1 */}
readFile("./1.txt")
   .then((c1) => {
      console.log(c1)
      return readFile("./2.txt");
   })
   .catch(err => console.log(err))

{/* Exemplo 2 */}
Promise.all([readFile("./1.txt"),readFile("./2.txt"),readFile("./3.txt")]).then(([c1,c2,c3])=>{
   console.log(c1 + c2 + c3); 
})

{/* Exemplo 3 */}
async function soma(){
   const c1 = await readFile("./1.txt");
   const c2 = await readFile("./2.txt");
   const c3 = await readFile("./3.txt");
   console.log("async function soma() -> ",c1+c2+c3);
   return c1+c2+c3;
}


soma();
soma().then((soma) => console.log("soma().then -> ",soma));
