const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

router.use((req, res, next)=>{
    try{
        const sender = jwt.verify(req.body.token, process.env.JWT_KEY);
        req.senderId = sender._id;
        next();
    }
    catch(error){
        res.json({error})
    }
})

module.exports = router;