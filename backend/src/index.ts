import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import * as http from "http";
import * as socketIo from "socket.io";
import "reflect-metadata";
import { AppDataSource } from "./data-source";
import { createLog } from "./service/log";

// import routes
import logRouter from "./views/log";
import healthcheckRouter from "./views/healthcheck";

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Create an HTTP server and attach the Express app to it
const server = http.createServer(app);
const io = new socketIo.Server(server);
// initilize db
AppDataSource
  .initialize()
  .then(() => {
    createLog({ message: "Data Source initialized" });
  })
  .catch((err) => {
    createLog({
      message: `Error initializing data source: ${err}`,
      severity: "error",
    });
  });

// setup routes
app.use(logRouter);
app.use(healthcheckRouter);

// Listen for connections on the Socket.IO server
io.on("connection", (socket) => {
  createLog({ message: "Client connected" });
  socket.on("disconnect", () => {
    createLog({ message: "Client disconnected" });
  });
});

// start server
// Replace app.listen with server.listen
server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
