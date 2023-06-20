
const mongoose = require("mongoose");
// const numberSchema = new Schema({
//     integerOnly: {
//         type: Number,
//         get: a => (a/100).toFixed(2),
//         set: a => a*100
//     }
// },
// {
//     toJSON: { getters: true }
// }
// )

const Schema = mongoose.Schema;

const balanceSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    amount: {
        type: mongoose.Types.Decimal128,
        required: true,
    },
    date: {
        type: Number,
        required: true,
        min: 1,
        max: 31,
    },
    category: {
        type: String,
        enum: {
            values: [
                "Subscription",
                "Insurance",
                "Entertainment",
                "Emergency Funds",
                "Miscellaneous",
                "Housing/Rent",
                "Utility Bills",
                "Cell Phone",
                "School",
                "Grooming",
                "Transportation",
                "Food/Groceries"
            ],
            required: true,
            message: "value is not supported",
        },
    },
});

module.exports = mongoose.model("Balance", balanceSchema);
