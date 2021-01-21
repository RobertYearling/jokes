const mongoose = require("mongoose");

const JokesSchema = new mongoose.Schema({
    setup: {
        type: String,
        required:[true,"This is validated"],
        minlength: [10,"Setup has to have more than 10 char."]
    },
    punchline: {
        type: String,
        required:[true,"This is validated"],
        minlength: [3,"A puchbowl has to have more than 3 char."]
    }
},{timestamps: true})

const Jokes = mongoose.model("Jokes", JokesSchema);

module.exports = Jokes;