const express = require("express");
const graphqlHTTP = require("express-graphql");
const { buildSchema } = require("graphql");

const app = express();
const PORT = 8080;

const mockMiddleware = require("./src/middlewares/mockMiddlewares")
const attachCorsHeader = require("./src/middlewares/attachCorsHeader")

app.use(attachCorsHeader);

//Mock
app.use("/mock", mockMiddleware);

//GraphQL

app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`) 
})