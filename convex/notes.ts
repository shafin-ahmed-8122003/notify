import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const getNotes = query({
    args: {},
    handler: async (ctx, args) => {
        const notes = await ctx.db.query("notes").collect();
        return notes;
    },
});

export const createNote = mutation({
    args: {},
    handler: async (ctx, args) => {
        const newNote = await ctx.db.insert("notes", {
            title: "Shafin",
            wife: "Medha",
        });
        console.log(newNote);
        return newNote;
    },
});

export const deleteNote = mutation({
    args: { noteId: v.id("notes") },
    handler: async (ctx, args) => {
        await ctx.db.delete(args.noteId);
    },
});
