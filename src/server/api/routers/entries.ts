// src/server/api/routers/guestbook.ts

import { z } from "zod";
import { createTRPCRouter, protectedProcedure, publicProcedure  } from "../trpc";

export const entriesRouter = createTRPCRouter({
  postEntries: protectedProcedure
    .input(
      z.object({
        entry: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      try {
        await ctx.prisma.prayerEntry.create({
          data: {
            entry: input.entry,
          },
        });
      } catch (error) {
        console.log(error);
      }
    }),
    getAll: publicProcedure.query(async ({ ctx }) => {
        try {
          return await ctx.prisma.prayerEntry.findMany({
            select: {
              entry: true
            },
            orderBy: {
              createdAt: "desc",
            },
          });
        } catch (error) {
          console.log("error", error);
        }
      }),
});