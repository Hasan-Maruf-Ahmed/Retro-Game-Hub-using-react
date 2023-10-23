const express = require('express');
const router = express.Router();
const Scores = require("../models/playerData");
const checkLogin = require('../middlewares/checkLogin');

router.post("/", checkLogin, async (req, res) => {
    const newScore = new Scores({
        ...req.body,
        user: req.userId,
    });
    try {
        
        await newScore.save();
        res.status(200).json({
            message: "Score saved successfully",
        })
    }catch {
        req.status(500).json({
            message: "Input failed",
        })
    }
})
module.exports = router;