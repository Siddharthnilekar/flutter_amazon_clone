//IMPORT FROM PACKAGES
const express = require("express");
const mongoose = require("mongoose");

//IMPORT FROM OTHER FILES
const authRouter = require('./routes/auth');

//INIT
const PORT = 3000;
const app = express();
const DB = "mongodb+srv://siddharth:siddharth123@cluster0.zdy39.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

//middleware
app.use(express.json());
app.use(authRouter);

//Connection
mongoose.connect(DB).then(()=>{
    console.log('Connection Successful');
})
.catch((e)=>{
    console.log(e);
    
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`connexted at port ${PORT}`);
});
