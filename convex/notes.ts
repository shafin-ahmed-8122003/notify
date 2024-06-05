import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const getNotes = query({
    args: {},
    handler: async (ctx, args) => {
        const identity = await ctx.auth.getUserIdentity();

        if (!identity) {
            throw new Error("Called storeUser without authentication present");
        }

        const user = await ctx.db
            .query("users")
            .filter((q) => q.eq(q.field("tokenIdentifier"), identity.tokenIdentifier))
            .unique();

        const notes = await ctx.db
            .query("notes")
            .filter((q) => q.eq(q.field("userId"), user?._id))
            .collect();

        return notes;
    },
});

export const createNote = mutation({
    args: { title: v.string(), body: v.string() },
    handler: async (ctx, args) => {
        const identity = await ctx.auth.getUserIdentity();

        if (!identity) {
            throw new Error("Called storeUser without authentication present");
        }

        const user = await ctx.db
            .query("users")
            .filter((q) => q.eq(q.field("tokenIdentifier"), identity.tokenIdentifier))
            .unique();

        const newNote = await ctx.db.insert("notes", {
            userId: user!._id,
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
        const identity = await ctx.auth.getUserIdentity();

        if (!identity) {
            throw new Error("Called storeUser without authentication present");
        }

        const user = await ctx.db
            .query("users")
            .filter((q) => q.eq(q.field("tokenIdentifier"), identity.tokenIdentifier))
            .unique();

        await ctx.db.patch(args.noteId, {
            userId: user?._id,
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
