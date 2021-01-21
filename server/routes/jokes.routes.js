const JokesController = require("../controllers/jokes.controller");

module.exports = app => {
    // Get All
    app.get("/api/jokes", JokesController.findAllJokes);
    // Get One
    app.get("/api/jokes/:_id", JokesController.findOneJoke);
    // Add New
    app.post("/api/jokes/new", JokesController.createJoke);
    // Update Song
    app.put("/api/jokes/update/:_id", JokesController.updateJoke);
    // Delete Song
    app.delete("/api/jokes/delete/:_id", JokesController.deleteJoke);
}