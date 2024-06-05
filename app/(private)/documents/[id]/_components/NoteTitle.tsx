import { Input } from "@/components/ui/input";
import { Edit3Icon } from "lucide-react";
import React from "react";

const NoteTitle = ({
    note,
    titleChangeHandler,
}: {
    note: any;
    titleChangeHandler: React.Dispatch<React.SetStateAction<any>>;
}) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        titleChangeHandler({
            ...note,
            title: e.target.value,
        });
    };

    return (
        <label htmlFor="note-title" className="flex items-center gap-2">
            <Edit3Icon className="w-4 stroke-secondary-foreground" />
            <Input
                id="note-title"
                value={note.title}
                onChange={handleChange}
                className="bg-transparent text-xl px-0 text-secondary-foreground"
            />
        </label>
    );
};

export default NoteTitle;
