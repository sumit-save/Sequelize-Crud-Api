const express = require("express");
const bodyparser = require("body-parser");
const sequelize = require("./configs/sequelize");

const PORT = 8000;

const app = express();

// Middleware
app.use(bodyparser.json());

// Routes
const postsRoutes = require("./routes/posts");
app.use("/posts", postsRoutes);

// Create Database Connection Using Sequelize
(async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        console.log("MySql Database Connected Successfully");
        console.log("MySql Database And Tables Sync Successfully");
    } catch (error) {
        console.log("Unable To Connect MySql Database");
        console.log(error);
    }
})();

// Create Server On Localhost:8000
(async () => {
    try {
        app.listen(PORT);
        console.log(`Server Started On Localhost:${PORT}`);
    } catch (error) {
        console.log(`Unable To Create Server On Localhost:${PORT}`);
        console.log(error);
    }
})();