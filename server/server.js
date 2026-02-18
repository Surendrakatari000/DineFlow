require("dotenv").config();
const app = require("./src/app.js");
const { initDb } = require("./src/config/db");

async function start() {
  await initDb();

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
}

start().catch((err) => {
  console.error("Startup failed. Server not started.");
  console.error(err);
  process.exit(1);
});
