import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import "reflect-metadata";
import { AppDataSource } from "./data-source";
import { createLog } from "./service/log";


// import routes
import logRouter from "./views/log";
import healthcheckRouter from "./views/healthcheck";

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
    createLog({
      message: `Error initializing data source: ${err}`,
      severity: "error",
    });
  });

// setup routes
app.use(logRouter);
app.use(healthcheckRouter);

app.listen(process.env.PORT || 3000);
