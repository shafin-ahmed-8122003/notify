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
            name: "Shafin",
            wife: "Medha",
        });
    },
});
