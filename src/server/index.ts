import { publicProcedure, router } from "./trpc";
import { addTodo, getTodos, getTldraw, updateTldraw } from "./db";
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
  getTldraw: publicProcedure.query(() => {
    return getTldraw();
  }),
  updateTldraw: publicProcedure
    .input(z.object({ data: z.any() }))
    .mutation(({ input }) => {
      return updateTldraw(input.data);
    }),
});

export type AppRouter = typeof appRouter;
