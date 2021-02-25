// import TodoSchema from "../models/db/schema/todoSchema";

const { addtodos, updateTodo, getAll } = require("./todos");

const addTodos = (params) => addtodos(params);
const updateStatus = (params) => updateTodo(params);
const getAllTodos = (params) => getAll(params);
module.exports = {
    addTodos,
    updateStatus,
    getAllTodos
}