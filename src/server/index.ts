import { publicProcedure, router } from "./trpc";

export const appRouter = router({
    getTodos: publicProcedure.query(() => {
        return {
            shapes: [
              { id: '1', type: 'rectangle', x: 100, y: 100, width: 200, height: 100 },
              // Otros elementos
            ],
          };
    })
})

export type AppRouter = typeof appRouter