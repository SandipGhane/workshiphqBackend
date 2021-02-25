const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

//Routes
const indexRouter = require('./routes/indexRoutes');
const todosRouter = require("./routes/todosRoutes");
app.listen(5000, () => {
    console.log("Server running on 3000");
})


const addMiddlewares = async () => {
    app.use(cors({ credentials: true, origin: true }));
    app.use(express.json({ limit: '50mb' }));
    app.use(express.urlencoded({ limit: '50mb', extended: false }));
    // app.use(express.static(__dirname, "public"));
}
const addRoutes = () => {
    app.use('/', indexRouter);
    app.use('/todo', todosRouter);
}
const addServices = async () => {
    mongoose
        .connect(
            'mongodb+srv://root:root@cluster0.jgrtp.mongodb.net/Todos?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
        )
        .then(() => console.log("Connected to MongoDB..."))
        .catch(err => console.error("Could not connect to MongoDB...", err));
}

const start = async () => {
    await addMiddlewares();
    await addServices();
    addRoutes();
}

start();