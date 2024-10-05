import { AppDataSource } from "../data-source";
import { Log } from "../entity/Log";

async function createLog(data: Partial<Log>): Promise<Log> {
  console.log("log: ", data);
  return await AppDataSource.manager.create(Log, data);
}

async function getLogs(page: number, pageSize: number): Promise<Log[]> {
  const skip = (page - 1) * pageSize;
  return await AppDataSource.manager.find(Log, { skip, take: pageSize });
}

export { createLog, getLogs };
