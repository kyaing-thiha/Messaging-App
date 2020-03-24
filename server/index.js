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
        profilePic: req.body.profilePic,
        minionPals: [...mockUsers]
    }

    mockUsers.push(newMinion)
    res.json(newMinion)
})

app.get("/mock/getMockUser", (req, res, next)=>{
    res.json(mockUsers[0]);
});

app.get("/mock/getMockMessages", (req, res, next)=>{
    res.json(mockMessages)
})
/** */

app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`) 
})