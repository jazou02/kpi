const express = require("express");
const app = express();
const PORT = 3000;

// Page d'accueil
app.get("/", (req, res) => {
  res.send("<h1>Bienvenue sur mon app Node.js + Express 👋</h1>");
});

// Route About
app.get("/about", (req, res) => {
  res.send("<h2>À propos : Ceci est une petite app Express simple.</h2>");
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`🚀 Serveur lancé sur http://localhost:${PORT}`);
});
