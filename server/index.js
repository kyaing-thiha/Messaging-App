const express = require("express");
const bodyParser= require("body-parser");
const mongoose = require("mongoose");
require('dotenv').config();

const attachCorsHeader = require("./src/middlewares/attachCorsHeader");
const minionRoutes = require("./src/routes/minionRoutes");
const messagesRoute = require("./src/routes/messagesRoute")
const authenticate = require("./src/middlewares/authenticate")

const app = express();
const PORT = 8080;

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


app.use(attachCorsHeader);

app.use(bodyParser.json());


app.use("/minions", minionRoutes);
app.use("/messages", authenticate,messagesRoute);

/** Mock */
const mockUsers = require("./src/mocks/mockUser")
const mockMessages = require("./src/mocks/mockMessages")

app.get("/mock/getMockUser", (req, res, next)=>{
    res.json(mockUsers[0]);
});

app.get("/mock/getMockMessages", (req, res, next)=>{
    res.json(mockMessages);
});

/** */

app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`) 
})