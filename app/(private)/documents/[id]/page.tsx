"use client";

import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import BackButton from "./_components/BackButton";

const NotePage = () => {
    const params = useParams();
    const notes = useQuery(api.notes.getNotes);
    const [note, setNote] = useState({
        _id: "",
        title: "",
        wife: "",
        _creationDate: 0,
    });

    useEffect(() => {
        if (notes) {
            notes.forEach((each_note) => {
                if (params["id"] == each_note._id) {
                    setNote(each_note);
                    console.log(each_note);
                }
            });
        }
    }, [notes]);

    return (
        <section>
            <nav className="h-16 pl-2 pr-4 rounded-lg flex items-center bg-secondary">
                <div className="flex items-center gap-2 font-bold text-xl">
                    <BackButton />
                    <h1 className="text-white">{note && note["title"]}</h1>
                </div>
            </nav>
        </section>
    );
};

export default NotePage;
