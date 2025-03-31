const express = require('express')
const app = express()

//to run this:(listen)
app.listen(3000, () => {
    console.log('Server is running on port 3000');//(Express backend is running in port 3000)
});

app.get('/', (req,res) =>{
    res.send ("Hello this is Avin's node api")//print this on the server(localhost:3000)
});