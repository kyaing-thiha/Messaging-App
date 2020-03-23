const express = require("express");
const router = express.Router();

//Mock Data

const mockUser = require("../mocks/mockUser")
const mockMessages = require("../mocks/mockMessages")


router.use("/getMockUser", (req, res, next)=>{
    res.json(mockUser);
});

router.get("/getMockMessages", (req, res, next)=>{
    res.json(mockMessages)
})

module.exports=router;