// index tRPC
import { publicProcedure, router } from "./trpc";
import { getTldraw, updateTldraw } from "./db";
import { z } from "zod";

export const appRouter = router({
  getTldraw: publicProcedure.query(() => {
    return getTldraw();
  }),
  updateTldraw: publicProcedure
    .input(z.object({ data: z.any() }))
    .mutation(({ input }) => {
      return updateTldraw({ data: input.data });
    }),
});

export type AppRouter = typeof appRouter;
