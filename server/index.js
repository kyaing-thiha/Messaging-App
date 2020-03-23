const express = require("express");
const app = express();
const PORT = 8080;

//Mock Data
const mockUser = require("./src/mocks/mockUser")
const mockMessages = require("./src/mocks/mockMessages")

app.get("/getMockUser", (req, res, next)=>{
    res.json(mockUser)
})

app.get("/getMockMessages", (req, res, next)=>{
    res.json(mockMessages)
})

app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`) 
})