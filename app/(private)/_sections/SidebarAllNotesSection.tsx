"use client";

import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import SidebarNoteItem from "../_components/SidebarNoteItem";

const SidebarAllNotesSection = () => {
    const allNotes = useQuery(api.notes.getNotes);

    return (
        <section className="w-full h-full flex flex-col overflow-y-auto">
            {allNotes?.map((note) => <SidebarNoteItem key={note._id} note={note} />)}
        </section>
    );
};

export default SidebarAllNotesSection;
