const Todos = require("../models/todo");



module.exports = (app) => {

    app.get("/api/setupTodos", (req, res) =>{

        const starterTodos = [
            {
                username: "test",
                todo: "Walk the dog",
                isDone: false,
                hasAttachment: false
            },
            {
                username: "test",
                todo: "Learn node",
                isDone: true,
                hasAttachment: false
            },
            {
                username: "test",
                todo: "Do the dishes",
                isDone: false,
                hasAttachment: false
            }
        ];
        Todos.create(starterTodos, (err, results) => {
            if (err) throw err
            res.send(results);
        });
    });
}