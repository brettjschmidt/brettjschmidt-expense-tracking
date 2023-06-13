const express = require("express");


const router = express.Router();

// Get all accounts
router.get("/", (req, res) => {
    res.json({mssg: 'Get all accounts'})
});

// Get a single account
router.get("/:id", (req, res) => {
    res.json({mssg: 'Get single account'})
});

// Post a new account
router.post("/", (req, res) => {
    res.json({mssg: 'Post a new account'})
});

// Delete a account
router.delete("/:id", (req, res) => {
    res.json({mssg: 'Delete a account'})
});

// Update a account
router.patch("/:id", (req, res) => {
    res.json({mssg: 'Updata a account'})
});

module.exports = router;