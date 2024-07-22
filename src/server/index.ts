import { publicProcedure, router } from "./trpc";

export const appRouter = router({
    getTodos: publicProcedure.query(() => {
        return [{ id: 1, text: "hello" }, { id: 2, text: "world" }]
    })
})

export type AppRouter = typeof appRouter