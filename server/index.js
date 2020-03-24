const express = require("express");
const bodyParser= require("body-parser");

const app = express();
const PORT = 8080;

const attachCorsHeader = require("./src/middlewares/attachCorsHeader");

app.use(attachCorsHeader);

app.use(bodyParser.json());

/** Mock */

const mockUsers = require("./src/mocks/mockUser")
const mockMessages = require("./src/mocks/mockMessages")

app.post("/user/createUser", (req, res, next)=>{
    const newMinion = {
        _id: 7,
        name: req.body.name,
        password: req.body.password,
        profilePic: req.body.profilePic,
        minionPals: [...mockUsers]
    }

    mockUsers.push(newMinion)
    res.json(newMinion)
})

app.post("/user/signIn", (req, res, next)=>{
    _id = req.body._id;
    password = req.body.password;

    //TODO: verify if the password is same as saved in database

    res.json();
})

app.get("/mock/getMockUser", (req, res, next)=>{
    res.json(mockUsers[0]);
});

app.get("/messages/retrieve", (req, res, next)=>{
    
    //TODO: to retrieve message from databse 
    res.json(mockMessages)
})

app.get("/messages/send", (req, res, next)=>{
    //TODO: to create message
    //TODO: to add message to database
    res.json();
})
/** */

app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`) 
})