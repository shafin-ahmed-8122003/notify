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
    args: { title: v.string(), body: v.string() },
    handler: async (ctx, args) => {
        const newNote = await ctx.db.insert("notes", {
            title: args.title ? args.title : "untitled",
            body: args.body,
        });
        console.log(newNote);
        return newNote;
    },
});

export const updateNote = mutation({
    args: { noteId: v.id("notes"), newNoteData: v.any() },
    handler: async (ctx, args) => {
        await ctx.db.patch(args.noteId, {
            title: args.newNoteData.title,
            body: args.newNoteData.body,
        });
    },
});

export const deleteNote = mutation({
    args: { noteId: v.id("notes") },
    handler: async (ctx, args) => {
        await ctx.db.delete(args.noteId);
    },
});
