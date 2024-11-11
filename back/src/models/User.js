const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    orders: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order",
    }],
});

const User = mongoose.model("User", userSchema);

module.exports = User;