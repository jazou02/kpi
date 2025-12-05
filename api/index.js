// api/index.js
const express = require("express");
const app = express();

// Middlewares
app.use(express.json());

// Route principale
app.get("/", (req, res) => {
  res.send("👋 Hello from Express deployed on Vercel!");
});

// Autre exemple de route
app.get("/kpi", (req, res) => {
  res.json({
    message: "Simple KPI endpoint",
    value: 42
  });
});

// 🔑 IMPORTANT : NE PAS mettre app.listen() ici
// On exporte l'app pour que Vercel la gère
module.exports = app;
