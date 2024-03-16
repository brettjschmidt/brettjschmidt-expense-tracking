require("dotenv").config();

const express = require("express");

// express app
const app = express();
const mongoose = require("mongoose");
const balancesRoutes = require("./routes/balances");
const accountRoutes = require("./routes/accounts")

// middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// routes
app.use("/api/balances", balancesRoutes);
app.use("/api/accounts", accountRoutes);

// connect to mongo
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests
        app.listen(process.env.PORT, () => {
            console.log("connected to Mongodb & listening on port", process.env.PORT);
        });
    })
    .catch((error) => {
        console.log(error);
    });

    // API_BASE_URL for backend
const API_BASE_URL = process.env.API_BASE_URL;
console.log("Backend API Base URL:", API_BASE_URL);