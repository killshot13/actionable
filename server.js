const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const path = require('path');

const isDev = process.env.NODE_ENV !== 'production';

// Multi-process to utilize all CPU cores.
if (!isDev && cluster.isMaster) {
  console.error(`Node cluster master ${process.pid} is running`)

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork()
  }

  cluster.on('exit', (worker, code, signal) => {
    console.error(
      `Node cluster worker ${worker.process.pid} exited: code ${code}, signal ${signal}`
    )
  })

} else {

  const app = express();
  const PORT = process.env.PORT || 5000

  // Priority serve any static files.
  app.use(express.static(path.join(__dirname, './frontend/react.js')))

  // configure body parser for AJAX requests
  app.use(
    bodyParser.urlencoded({
      extended: false
    })
  );
  app.use(bodyParser.json());

  // DB Config
  const db = require("./config/keys").mongoURI;

  // Connect to MongoDB
  mongoose
    .connect(
      db, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    )
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));

  app.listen(PORT, function () {
    console.error(
      `Node ${
          isDev ? 'dev server' : 'cluster worker ' + process.pid
        }: listening on port ${PORT}`
    )
  })
}
