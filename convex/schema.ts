import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    notes: defineTable({
        title: v.string(),
        body: v.string(),
        userId: v.id("users"),
    }),
    users: defineTable({
        name: v.string(),
        tokenIdentifier: v.string(),
    }),
});
