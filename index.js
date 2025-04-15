const express = require('express')
const mongoose = require('mongoose');//DB connection
const Product = require('./models/product.model');//connecting the product.
const app = express()

app.use(express.json());

app.get('/', (req,res) =>{
    res.send ("Hello this is Avin's Node.js API ")//print this on the server(localhost:3000)
});

// Creating API
app.post("/api/products", async (req, res) => {
    // console.log(req.body);
    // res.send(req.body);
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
        
    } catch (error){
        res.status(500).json({message: error.message});
    }
});

// TO VIEW THE API products

app.get ('/api/products' , async (req, res) =>{

    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message: error. message});
    }
});

mongoose.connect("mongodb+srv://avinsapkota7:j5UkzmFQoSFSSaym@backenddb.dekb0io.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
.then(() => {
    console.log("Connected successfully to the database!");
    app.listen(3000, () => {
        console.log('Server is running on port 3000');//(Express backend is running in port 3000)
    });
})
.catch(() => {
    console.log("Connection failed!");
});