"use client";

import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { useMutation } from "convex/react";

const SaveButton = ({ note }: { note: any }) => {
    const updateNote = useMutation(api.notes.updateNote);

    const handleSave = async (note: any) => {
        await updateNote({ noteId: note._id, newNoteData: { title: note.title, body: note.body } });
    };

    return (
        <Button onClick={() => handleSave(note)} variant="primaryOutline">
            Save
        </Button>
    );
};

export default SaveButton;
