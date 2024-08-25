const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const RouterHandler = require("./routes/handler");

// Middleware
app.use(cors());
app.use(express.json());
app.use("/", RouterHandler);

// Exemple de route API
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from the backend!" });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
