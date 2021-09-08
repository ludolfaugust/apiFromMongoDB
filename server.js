require("dotenv").config();
require("colors");
const cors = require("cors");
const express = require("express");

const connectDB = require("./dbinit.js");
const recipes = require("./api/recipes.js");
const server = express();
const PORT = process.env.PORT || 5000;

connectDB();

server.use(cors());
server.use(express.json());
server.get("/", (req, res) => res.send("Welcome to Node with Postgres!"));
server.use("/recipes", recipes);

server.listen(PORT, () => console.log(`Server started on port ${PORT}`));
