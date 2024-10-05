import * as express from "express";
import { AnyZodObject, z } from "zod";
import { createLog } from "../service/log";

// ...

export const validate = (schema: AnyZodObject) =>
async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  try {
    schema.parseAsync({
      body: req.body,
      query: req.query,
      params: req.params,
    });
    return next();
  } catch (error) {
    createLog({ message: `Validation error: ${error}`, severity: "error" });
    return next(error);
  }
};
