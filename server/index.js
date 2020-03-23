const express = require("express");

const app = express();
const PORT = 8080;

const mockMiddleware = require("./src/middlewares/mockMiddlewares")
const attachCorsHeader = require("./src/middlewares/attachCorsHeader")

app.use(attachCorsHeader);

//Mock
app.use("/mock", mockMiddleware);

app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`) 
})