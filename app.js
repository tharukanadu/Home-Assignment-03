const express=require('express')
const mongoose=require('mongoose')
const accountCreate=require('./routers/account')
const app=express()
const port=4000
app.use(express.json())


app.use('/account',accountCreate)

const { MongoClient, ServerApiVersion } = require('mongodb');
const url = "mongodb+srv://FacebookClone:RxOQf21VYj43Yt1A@cluster0.fzzvb94.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

mongoose.connect(url,{useNewUrlParser:true})
const con=mongoose.connection

con.on("open",()=>{
    console.log("Mongodb Connected");

})


app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`)
})