"use client";

import { api } from "@/convex/_generated/api";
import { useMutation } from "convex/react";
import { Trash2Icon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

const DeleteNoteButton = ({ noteId, className }: { noteId: any; className?: string }) => {
    const deleteNote = useMutation(api.notes.deleteNote);
    const router = useRouter();
    const pathname = usePathname();

    const handelClick = async (noteId: any) => {
        await deleteNote({ noteId: noteId });
        if (pathname === `/documents/${noteId}`) {
            router.replace(`/documents`);
        }
    };

    return (
        <div
            onClick={() => handelClick(noteId)}
            className={`${className} flex items-center justify-center`}
        >
            <Trash2Icon className="w-4" />
        </div>
    );
};

export default DeleteNoteButton;
