// api/index.local.js
const app = require("./index");
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`🚀 Local server running at http://localhost:${PORT}`);
});
