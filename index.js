const express = require('express')
const mongoose = require('mongoose');//DB connection
const app = express()

//to run this:(listen)
app.listen(3000, () => {
    console.log('Server is running on port 3000');//(Express backend is running in port 3000)
});

app.get('/', (req,res) =>{
    res.send ("Hello this is Avin's Node.js API ")//print this on the server(localhost:3000)
});


mongoose.connect("mongodb+srv://avinsapkota7:j5UkzmFQoSFSSaym@backenddb.dekb0io.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
.then(() => {
    console.log("Connected successfully to the database!");
})
.catch(() => {
    console.log("Connection failed!");
});