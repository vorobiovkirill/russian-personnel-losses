import { router, publicProcedure } from "../trpc";
import { z } from "zod";

export const russianWarshipRouter = router({
  russianWarship: publicProcedure
    .input(z.object({ text: z.string().nullish() }).nullish())
    .query( async ({ input }) => {
      const result = await fetch('https://russianwarship.rip/api/v1/statistics/latest')
      const json = await result.json();
      console.log('json', json)
      return json;
    }),
});
