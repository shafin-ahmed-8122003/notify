"use client";

import { useRouter } from "next/navigation";

const NotesPreviewBoxTop = ({ note }: { note: any }) => {
    const router = useRouter();

    const handleClick = () => {
        router.push(`/documents/${note._id}`);
    };

    return (
        <div
            role="button"
            onClick={handleClick}
            className="w-full h-40 [&>*]:hover:opacity-100 flex items-center justify-center"
        >
            <p className="opacity-0 text-secondary font-bold">Click to open</p>
        </div>
    );
};

export default NotesPreviewBoxTop;
