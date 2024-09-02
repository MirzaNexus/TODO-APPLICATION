const express = require("express");
const connect_db = require("./config");
const server = express();
const port = process.env.PORT || "3000";
const database_path = process.env.DATABASE_URL;

connect_db(database_path);
server.listen(port, () => {
  console.log("Server Started at http://localhost:" + port);
});
