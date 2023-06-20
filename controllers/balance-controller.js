const Balance = require("../models/balance-model");
const mongoose = require("mongoose");

// Get all balances
const getBalances = async (req, res) => {
    const balances = await Balance.find({}).sort({ title: 1, date: 1 });

    res.status(200).json(balances);
};

// Get a single balance
const getBalance = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "Sorry no balance" });
    }

    const balance = await Balance.findById(id);

    if (!balance) {
        return res.status(400).json({ error: "No such balance" });
    }

    res.status(200).json(balance);
};

// Create a new balance
const createBalance = async (req, res) => {
    const { title, amount, date, category } = req.body;
    try {
        const balance = await Balance.create({ title, amount, date, category });
        res.status(200).json(balance);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a balance
const deleteBalance = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "Sorry no balance" });
    }

    const balance = await Balance.findOneAndDelete({ _id: id });

    if (!balance) {
        return res.status(400).json({ error: "No such balance" });
    }
    res.status(200).json(balance);
};

// Update a balance
const updateBalance = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "Sorry no balance" });
    }

    const balance = await Balance.findOneAndUpdate(
        { _id: id },
        { ...req.body }
    );

    if (!balance) {
        return res.status(400).json({ error: "No such balance" });
    }

    res.status(200).json(balance);
};

module.exports = {
    createBalance,
    getBalances,
    getBalance,
    deleteBalance,
    updateBalance,
};
