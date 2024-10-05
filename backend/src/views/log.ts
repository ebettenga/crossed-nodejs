import * as express from "express";
import { createLog, getLogs } from "../service/log";
import { AppDataSource } from "../data-source";
import { validate } from "../utils/validate";
const router = express.Router();

import { getLogsSchema } from "../schemas/log";

router.get("/logs", validate(getLogsSchema), async (req, res) => {
  try {
    const page = req.query.page ? parseInt(req.query.page) : 1;
    const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 10;
    const logs = await getLogs(
      page,
      pageSize,
    );
    res.send(logs);
  } catch (error) {
    createLog({ message: `Error fetching logs: ${error}`, severity: "error" });
    res.status(500).send("Error fetching logs");
  }
});

router.post("/log", async (req, res) => {
  try {
    let log = await createLog(req.body);
    log = await AppDataSource.manager.save(log);
    res.send(log);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error creating log");
  }
});

export default router;
