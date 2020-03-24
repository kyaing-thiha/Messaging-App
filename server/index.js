const express = require("express");
const bodyParser= require("body-parser");
const mongoose = require("mongoose");
const attachCorsHeader = require("./src/middlewares/attachCorsHeader");
const minionRoutes = require("./src/routes/minionRoutes");

const app = express();
const PORT = 8080;

const password = "Minion";
const mongoConnectionURL =  `mongodb+srv://Minion:${password}@cluster0-0avav.mongodb.net/test?retryWrites=true&w=majority`;
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

app.get("/messages/retrieve", (req, res, next)=>{
    
    //TODO: to retrieve message from databse 
    res.json(mockMessages)
})

app.get("/messages/send", (req, res, next)=>{
    //TODO: to create message
    //TODO: to add message to database
    res.json();
})

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