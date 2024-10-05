import { z } from "zod";

export const getLogsSchema = {
  query: z.object({
    page: z.coerce.number({
      required_error: "Page is required",
    }).positive(),
    pageSize: z.coerce.number({
      required_error: "Page size is required",
    }),
  }),
};
