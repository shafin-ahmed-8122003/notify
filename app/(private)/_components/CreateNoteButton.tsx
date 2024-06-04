"use client";

import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { useMutation } from "convex/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const CreateNoteButton = ({
    title,
    size,
    className,
}: {
    title: string;
    size?: "default" | "sm" | "lg" | "icon" | null | undefined;
    className?: string;
}) => {
    const createNote = useMutation(api.notes.createNote);
    const router = useRouter();

    const handleClick = async () => {
        const newNote = await createNote();
        router.push(`/documents/${newNote}`);
        toast("New Note Created!");
    };

    return (
        <Button className={className} size={size} onClick={handleClick} variant="primary">
            {title}
        </Button>
    );
};

export default CreateNoteButton;
