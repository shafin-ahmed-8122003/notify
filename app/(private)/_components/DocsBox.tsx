"use client";

import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { formatDate } from "@/lib/formatDate";
import { useMutation } from "convex/react";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";

const DocsBox = ({ doc }: { doc: any }) => {
    const deleteDoc = useMutation(api.documents.deleteDoc);
    const router = useRouter();

    const handelDelete = async () => {
        await deleteDoc({ docsId: doc._id });
    };

    const handleClick = () => {
        router.push(`/documents/${doc._id}`);
    };

    return (
        <div
            key={doc._id}
            className="w-60 h-60 relative bg-background shadow-xl border-secondary border rounded-md overflow-hidden"
        >
            <div
                role="button"
                onClick={handleClick}
                className="w-full h-40 [&>*]:hover:opacity-100 flex items-center justify-center"
            >
                <p className="opacity-0 text-secondary font-bold">Click to open</p>
            </div>
            <div className="group/docsbox w-full h-20 p-4 flex flex-col bg-secondary [&>*]:text-secondary-foreground absolute bottom-0">
                <h1 className="font-bold">{doc.title}</h1>
                <time className="text-xs">{formatDate(doc._creationTime)}</time>
                <Button
                    variant="secondaryGhost"
                    onClick={() => handelDelete()}
                    size="sm"
                    className="absolute right-0 bottom-0 opacity-0 group-hover/docsbox:opacity-100 [&>*]:stroke-secondary-foreground"
                >
                    <Trash2 className="w-4" />
                </Button>
            </div>
        </div>
    );
};

export default DocsBox;
