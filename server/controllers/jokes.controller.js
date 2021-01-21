const { modelName } = require("../models/jokes.models");
const Jokes = require("../models/jokes.models");

// Get All the Jokes
module.exports.findAllJokes = (req, res) => {
    Jokes.find()
        .then(allJokes => res.json({allJokes: allJokes}))
        .catch(err => res.json({message: "No Jokes Yo", error: err}))
}
// Get One Joke
module.exports.findOneJoke = (req, res) => {
    Jokes.findOneJoke({_id: req.params._id})
        .then(oneJoke => res.json({oneJoke: oneJoke}))
        .catch(err => res.json({message: "Cannot find a Joke", error: err}))
}
// Post a Joke
module.exports.createJoke = (req, res) => {
    Jokes.create(req.body)
        .then(newJoke => res.json({newJoke: newJoke}))
        .catch(err => res.json({message: "Cannot add a Joke to DB", error: err}))
}
// Delete a Joke
module.exports.deleteJoke = (req,res) => {
    Jokes.remove({_id: req.params._id})
        .then(res.json({message: " Joke has been removed"}))
        .catch(err => res.json({message: "What happened the joke cannot be deleted!", error: err}))
}
// Update a Joke
module.exports.updateJoke = (req, res) => {
    Jokes.update(req.body)
        .then(updateJoke => res.json({updateJoke: updateJoke}))
        .catch(err => res.json({message: "Never change a good joke!", error: err}))
}