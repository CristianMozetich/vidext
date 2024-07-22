import { publicProcedure, router } from "./trpc";
import { addTodo, getTodos } from "./db";
import { z } from "zod";

export const appRouter = router({
  getTodos: publicProcedure.query(() => {
    return getTodos();
  }),
  createTodo: publicProcedure
    .input(z.object({ text: z.string() }))
    .mutation(({ input }) => {
      return addTodo({ text: input.text });
    }),
});

export type AppRouter = typeof appRouter;
