"use client";

import { cn } from "@/lib/utils";
import { FileIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import DeleteNoteButton from "./DeleteNoteButton";
import EditNoteButton from "./EditNoteButton";

const SidebarNoteItem = ({ note }: { note: any }) => {
    const pathname = usePathname();
    const router = useRouter();

    const handleClick = (id: string) => {
        router.push(`/documents/${id}`);
    };

    return (
        <div
            key={note._id}
            className={cn(
                "group/sidebar-note-item flex justify-between items-center w-full px-2 h-8",
                pathname == `/documents/${note._id}` ? "bg-zinc-700/5 rounded-md" : null
            )}
        >
            <p
                onClick={() => handleClick(note._id)}
                className="flex items-center h-full flex-1 gap-1 [&>*]:stroke-secondary [&>*]:text-secondary font-normal text-xs"
            >
                <FileIcon className="w-4 stroke-secondary" />
                <span>{note.title.length > 10 ? `${note.title.slice(0, 10)}...` : note.title}</span>
            </p>
            <div className="sm:opacity-0 sm:group-hover/sidebar-note-item:opacity-100 w-8 h-full flex items-center justify-center gap-2">
                <EditNoteButton
                    className="w-full h-full [&>*]:stroke-secondary"
                    noteId={note._id}
                />
                <DeleteNoteButton
                    className="w-full h-full [&>*]:stroke-secondary"
                    noteId={note._id}
                />
            </div>
        </div>
    );
};

export default SidebarNoteItem;
