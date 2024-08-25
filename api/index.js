// server.js
const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// Middleware pour servir des fichiers statiques
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.get("/", (res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});
