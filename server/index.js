const http = require("http");
const app = require("./app");
const mongoose = require("mongoose");
require('dotenv').config();

const port = process.env.PORT || 3000;
const server = http.createServer(app);

const mongoConnectionURL =  process.env.DB_CONNECTION;
const databaseName = "MinionAssociation"
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: databaseName
}

mongoose.connect( mongoConnectionURL, options)
    .then(()=>console.log("connected to database"))
    .catch((error)=>console.log(`Error connecting to MongoDB ${error}`));

server.listen(port, ()=>{
    console.log(`server running on port ${port}`) 
})