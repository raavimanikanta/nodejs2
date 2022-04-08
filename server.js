// console.log("hello")

//create server

const express =require("express");
const server=express();

const user={
  name:'Manikanta',
  age:23,
  email:"raavimani123@gmail.com",
  contact:"9603605926",
  DateOfJoining:"22-05-2022",
  course:"MERN"
}

const Middleware1=(req,res,next)=>{
 console.log("this is the middleware1")
 next()
}
 server.use(Middleware1)

server.get("/",(req,res)=>{
  res.send(user)
})

server.get("/user",(req,res)=>{
    res.send("Hello users")
  })

// server.get("/names",(req,res)=>{
//     res.send
// })

server.listen(3001,()=>{
  console.log("server is running at port 3001")
})