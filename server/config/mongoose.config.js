const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/jokes_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("The goose has been found!"))
    .catch(err => console.log("The goose is loose!", err))