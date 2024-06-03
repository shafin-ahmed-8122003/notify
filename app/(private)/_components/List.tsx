"use client";

import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { useMutation, useQuery } from "convex/react";
import { EllipsisIcon, FileIcon, Trash2Icon } from "lucide-react";

const List = () => {
    const docs = useQuery(api.documents.getDocs);
    const deleteDoc = useMutation(api.documents.deleteDoc);

    const handelDelete = async ({ id }: { id: any }) => {
        await deleteDoc({ docsId: id });
    };

    return (
        <div className="w-full h-full flex flex-col overflow-y-auto">
            {docs?.map((doc) => (
                <Button
                    key={doc._id}
                    className="group/document-btn flex justify-between items-center w-full px-0 pr-2"
                    variant="secondaryGhost"
                    size="sm"
                >
                    <p className="flex items-center gap-1 [&>*]:stroke-secondary font-normal text-xs">
                        <FileIcon className="w-4" />
                        <span className="text-secondary">
                            {doc.name.length > 10 ? `${doc.name.slice(0, 10)}...` : doc.name}
                        </span>
                    </p>
                    <div className="sm:opacity-0 sm:group-hover/document-btn:opacity-100 w-8 h-full flex items-center justify-center gap-2">
                        <div className="flex h-full items-center justify-center">
                            <EllipsisIcon className="stroke-secondary w-4" />
                        </div>
                        <div
                            onClick={() => handelDelete({ id: doc._id })}
                            className="h-full flex items-center justify-center"
                        >
                            <Trash2Icon className="stroke-secondary w-4" />
                        </div>
                    </div>
                </Button>
            ))}
        </div>
    );
};

export default List;
