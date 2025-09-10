const express = require("express");
const livereload = require("livereload");
const connectLivereload = require("connect-livereload");

const app = express();
const port = 3000;

// 🔄 Setup live reload server
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(__dirname + "/public");

liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});

// 🖥️ Middleware for livereload
app.use(connectLivereload());

// 📂 Serve static files
app.use(express.static("public"));

// 🚀 Start server
app.listen(port, () => {
  console.log(`Live server running at http://localhost:${port}`);
});
