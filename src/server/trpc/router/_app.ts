// src/server/router/_app.ts
import { router } from "../trpc";

import { russianWarshipRouter } from "./russianWarshipRouter";

export const appRouter = router({
  statistic: russianWarshipRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;