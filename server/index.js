const express = require("express");
const app = express();
const PORT = 8080;

//Mock Data
const mockUser = require("./src/mocks/mockUser")
const mockMessages = require("./src/mocks/mockMessages")

app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS"){
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
    }
    next();
})

app.get("/getMockUser", (req, res, next)=>{
    res.json(mockUser)
})

app.get("/getMockMessages", (req, res, next)=>{
    res.json(mockMessages)
})

app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`) 
})