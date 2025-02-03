console.log("helllo, world!");

const express = require('express');
const PORT = 3000;

const app = express();

//CREATING AN API
app.listen(PORT, "0.0.0.0", () =>{
    console.log(`connexted at port ${PORT}`);
});