import { Input } from "@/components/ui/input";
import { Edit3Icon } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

const NoteTitle = ({
    note,
    titleChangeHandler,
}: {
    note: any;
    titleChangeHandler: React.Dispatch<React.SetStateAction<any>>;
}) => {
    const [inputValue, setInputValue] = useState(note.title);
    const spanRef = useRef<HTMLSpanElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (spanRef.current && inputRef.current) {
            inputRef.current.style.width = `${spanRef.current.offsetWidth}px`;
        }
    }, [inputValue]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        titleChangeHandler({ ...note, title: e.target.value });
    };

    return (
        <label htmlFor="note-title" className="flex items-center gap-2">
            <div className="relative">
                <Input
                    id="note-title"
                    value={inputValue}
                    onChange={handleChange}
                    className="bg-transparent text-xl px-0 text-secondary-foreground"
                    ref={inputRef}
                    style={{ minWidth: "1ch" }} // Ensure there's always some width
                />
                <span
                    ref={spanRef}
                    className="absolute invisible h-0 overflow-hidden whitespace-nowrap"
                    aria-hidden="true"
                >
                    {inputValue}
                </span>
            </div>
            <Edit3Icon className="w-4 stroke-secondary-foreground" />
        </label>
    );
};

export default NoteTitle;
