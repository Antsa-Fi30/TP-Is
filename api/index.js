const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const PersonsRoute = require("./routes/PersonsRoute");
const ItemsRoute = require("./routes/itemsRoute");
const UniteRoute = require("./routes/UniteRoute");

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(
  "mongodb+srv://antsa30:mongo123456789@cluster0.0wd4x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

//Route vers l'operation CRUD de Personne
app.use("/api", PersonsRoute);

//Route vers Item
app.use("/api", ItemsRoute);

//Route vers Unite
app.use("/api", UniteRoute);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
