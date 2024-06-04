"use client";

import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import BackButton from "./_components/BackButton";
import NoteTitle from "./_components/NoteTitle";

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

    const handleSave = () => {};

    return (
        <section>
            <nav className="h-16 pl-2 pr-4 rounded-lg flex items-center justify-between bg-secondary">
                <div className="flex items-center gap-2 text-xl">
                    <BackButton />
                    <NoteTitle note={note && note} titleChangeHandler={setNote} />
                </div>
                <Button variant="primaryOutline">Save</Button>
            </nav>
            <div className="pt-4">{children}</div>
        </section>
    );
};

export default NotePageLayout;
