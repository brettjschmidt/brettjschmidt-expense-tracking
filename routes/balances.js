const express = require("express");


const router = express.Router();

// Get all balances
router.get("/", (req, res) => {
    res.json({mssg: 'Get all balances'})
});

// Get a single balance
router.get("/:id", (req, res) => {
    res.json({mssg: 'Get single balance'})
});

// Post a new balance
router.post("/", (req, res) => {
    res.json({mssg: 'Post a new balance'})
});

// Delete a balance
router.delete("/:id", (req, res) => {
    res.json({mssg: 'Delete a balance'})
});

// Update a balance
router.patch("/:id", (req, res) => {
    res.json({mssg: 'Updata a balance'})
});

module.exports = router;