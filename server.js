require("dotenv").config()

const express = require("express");


// express app
const app = express();
const balancesRoutes = require("./routes/balances")

// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})


// routes
app.use("/api/balances", balancesRoutes)


// listen for requests
app.listen(process.env.PORT, () => {
    console.log("listening on port", process.env.PORT)
})