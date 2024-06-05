"use client";

import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import BackButton from "./_components/BackButton";
import NoteBody from "./_components/NoteBody";
import NoteTitle from "./_components/NoteTitle";
import SaveButton from "./_components/SaveButton";

const NotePageLayout = ({ children }: { children: React.ReactNode }) => {
    const params = useParams();
    const notes = useQuery(api.notes.getNotes);
    const [note, setNote] = useState({});

    useEffect(() => {
        if (notes) {
            notes.forEach((each_note) => {
                if (params["id"] == each_note._id) {
                    setNote(each_note);
                }
            });
        }
    }, [notes]);

    return (
        <section>
            <nav className="h-16 pl-2 pr-4 rounded-lg flex items-center justify-between bg-secondary">
                <div className="flex items-center gap-2 text-xl">
                    <BackButton />
                    {note && <NoteTitle note={note} titleChangeHandler={setNote} />}
                </div>
                {note && <SaveButton note={note} />}
            </nav>
            <div className="w-full h-full p-4">
                {note && <NoteBody note={note} bodyChangeHandler={setNote} />}
            </div>
        </section>
    );
};

export default NotePageLayout;
