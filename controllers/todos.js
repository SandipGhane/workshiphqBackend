const ToDos = require("../models/db/schema/todoSchema");
const TodoSchema = require("../models/db/schema/todoSchema");

const addtodos = (params) => {
    const { name, email, todoStatus, tododata } = params;
    const Todo = new TodoSchema();
    Todo.userName = name;
    Todo.userEmail = email;
    Todo.todoStatus = todoStatus;
    Todo.todoData = tododata;
    return Todo.save();
}

const updateTodo = async (params) => {
    const { email, todoStatus, tododata } = params;
    const filter = { $and: [{ userEmail: email }, { todoData: tododata }] }
    const updates = { $set: { todoStatus: todoStatus } }
    const data = await TodoSchema.findOneAndUpdate(filter, updates)
    return data;
}
const getAll = async (email) => {
    const data = await TodoSchema.find({ userEmail: email });
    return data;
}
module.exports = {
    addtodos,
    updateTodo,
    getAll
}

