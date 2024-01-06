const express=require("express");
const path=require("path")
const app=express()

const staticfolder=express.static(path.join(__dirname,"public"));
app.use(staticfolder);

app.get("/",(req,res)=>{
  res.sendFile(path.join(__dirname,"index.html"))
 })


app.listen(3000,()=>{
  console.log("Server is listening on port 3000...")

})