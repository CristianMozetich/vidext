import { publicProcedure, router } from "./trpc";
import { addTodo, getTodos, getTldraw, saveTldraw } from "./db";
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
    getTldraw: publicProcedure.input(z.string()).query(({ input }) => {
      return getTldraw(input);
    }),
    saveTldraw: publicProcedure
      .input(z.object({ id: z.string(), data: z.any() }))
      .mutation(({ input }) => {
        return saveTldraw(input.id, input.data);
      }),
});

export type AppRouter = typeof appRouter;
