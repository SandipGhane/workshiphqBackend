const { Schema, model } = require("mongoose");

const status = ["todo", "doing", "done"];

const TodoSchema = new Schema({
    todoID: {
        type: String,
    },
    userName: String,
    userEmail: String,
    todoData: String,
    todoStatus: {
        type: String,
        enum: status,
        default: status[0],
    }
}, {
    collation: 'ToDos'
});

const ToDos = model('ToDos', TodoSchema);

module.exports = ToDos;