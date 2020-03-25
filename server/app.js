const express = require("express");
const bodyParser= require("body-parser");

const attachCorsHeader = require("./src/middlewares/attachCorsHeader");
const minionRoutes = require("./src/routes/minionRoutes");
const messagesRoute = require("./src/routes/messagesRoute")
const authenticate = require("./src/middlewares/authenticate")

const app = express();

app.use(attachCorsHeader);
app.use(bodyParser.json());

app.use("/minions", minionRoutes);
app.use("/messages", authenticate,messagesRoute);

/* To handle if there are error in route handlers */
app.use((error, req, res, next)=>{
    res.status(error.status || 500).json({
        error: error.message
    })
})

/* To handle if page requested is not found */
app.use((req, res, next) => {
    const error = new Error("Not found");
    res.status(404).json({
        error: error.message
    })
  });

module.exports = app;