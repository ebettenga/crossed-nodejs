import { z } from "zod";


export const getLogsSchema =  z.object({
    query: z.object({
        page: z.coerce.number({
            required_error: "Page is required",
        }),
        pageSize: z.coerce.number({
            required_error: "Page size is required",
        }),
    })
  });