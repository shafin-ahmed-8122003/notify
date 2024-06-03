import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const getDocs = query({
    args: {},
    handler: async (ctx, args) => {
        const docs = await ctx.db.query("docs").collect();
        return docs;
    },
});

export const createDoc = mutation({
    args: {},
    handler: async (ctx, args) => {
        await ctx.db.insert("docs", {
            title: "Shafin",
            wife: "Medha",
        });
    },
});

export const deleteDoc = mutation({
    args: { docsId: v.id("docs") },
    handler: async (ctx, args) => {
        await ctx.db.delete(args.docsId);
    },
});
