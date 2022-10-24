import { router, publicProcedure } from "../trpc";
import { z } from "zod";

const zodResponse = z.object({
  message: z.string().nullish(),
  data: z.object({
    date: z.string(),
    day: z.number(),
    resource: z.string(),
    stats: z.object({
      personnel_units: z.number(),
      tanks: z.number(),
      armoured_fighting_vehicles: z.number(),
      artillery_systems: z.number(),
      mlrs: z.number(),
      aa_warfare_systems: z.number(),
      planes: z.number(),
      helicopters: z.number(),
      vehicles_fuel_tanks: z.number(),
      warships_cutters: z.number(),
      cruise_missiles: z.number(),
      uav_systems: z.number(),
      special_military_equip: z.number(),
      atgm_srbm_systems: z.number(),
    }),
    increase: z.object({
      personnel_units: z.number(),
      tanks: z.number(),
      armoured_fighting_vehicles: z.number(),
      artillery_systems: z.number(),
      mlrs: z.number(),
      aa_warfare_systems: z.number(),
      planes: z.number(),
      helicopters: z.number(),
      vehicles_fuel_tanks: z.number(),
      warships_cutters: z.number(),
      cruise_missiles: z.number(),
      uav_systems: z.number(),
      special_military_equip: z.number(),
      atgm_srbm_systems: z.number(),
    })
  }),
});

export const russianWarshipRouter = router({
  russianWarship: publicProcedure
    .input(z.object({ text: z.string().nullish() }).nullish())
    .output(zodResponse)
    .query(async ({ input }) => {
      const result = await fetch(
        "https://russianwarship.rip/api/v1/statistics/latest"
      );
      const json = await result.json();
      return json;
    }),
});
