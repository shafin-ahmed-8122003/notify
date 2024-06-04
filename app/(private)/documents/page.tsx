"use client";

import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import AllNotesSection from "./_sections/AllNotesSection";
import EmptyNotesSection from "./_sections/EmptyNotesSection";

const Documents = () => {
    const notes = useQuery(api.notes.getNotes);

    return (
        <div className="h-full">
            {notes && notes.length > 0 ? (
                <AllNotesSection allNotes={notes} />
            ) : (
                <EmptyNotesSection />
            )}
        </div>
    );
};

export default Documents;
