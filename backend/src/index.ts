import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import "reflect-metadata";
import { AppDataSource } from "./data-source";

import logRouter from "./views/log";
import { createLog } from "./service/log";


// setup app
const app = express();
app.use(bodyParser.json());
app.use(cors());

// initilize db
AppDataSource
  .initialize()
  .then(() => {
    createLog({ message: "Data Source initialized" });
  })
  .catch((err) => {
    createLog({ message: `Error initializing data source: ${err}`, severity: "error" });
  });


// healthcheck
app.get("/ping", (req, res) => {
  res.send("pong");
});

// routes
app.use(logRouter);

app.listen(process.env.PORT || 3000);
