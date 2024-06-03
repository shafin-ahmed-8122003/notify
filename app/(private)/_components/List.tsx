"use client";

import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { EllipsisIcon, FileIcon, Trash2Icon } from "lucide-react";

const List = () => {
    const users = useQuery(api.documents.getDocs);

    return (
        <div className="w-full h-full flex flex-col">
            {users?.map((user) => (
                <Button
                    className="group/document-btn flex justify-between items-center w-full px-0"
                    variant="secondaryGhost"
                    size="sm"
                >
                    <p className="flex items-center gap-1 [&>*]:stroke-secondary text-secondary font-normal text-xs">
                        <FileIcon className="w-4" /> {user.name} {user.wife}
                    </p>
                    <div className="sm:opacity-0 sm:group-hover/document-btn:opacity-100 w-8 h-full flex items-center justify-center gap-2">
                        <div className="flex h-full items-center justify-center">
                            <EllipsisIcon className="stroke-secondary w-4" />
                        </div>
                        <div className="h-full flex items-center justify-center">
                            <Trash2Icon className="stroke-secondary w-4" />
                        </div>
                    </div>
                </Button>
            ))}
        </div>
    );
};

export default List;
