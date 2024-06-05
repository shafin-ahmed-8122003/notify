"use client";

import ExpandableTextarea from "@/components/ExpandableTextarea";
import { useState } from "react";

const NotePage = () => {
    const [noteBody, setNoteBody] = useState("");

    const handleBodyChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNoteBody(event.target.value);
    };

    return (
        <div className="w-full h-full">
            <ExpandableTextarea
                value={noteBody}
                onChange={handleBodyChange}
                className="w-full h-full bg-transparent outline-none"
                placeholder="Type your note here..."
            />
        </div>
    );
};

export default NotePage;
