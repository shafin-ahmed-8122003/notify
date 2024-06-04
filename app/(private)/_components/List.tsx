"use client";

import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { cn } from "@/lib/utils";
import { useMutation, useQuery } from "convex/react";
import { EllipsisIcon, FileIcon, Trash2Icon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

const List = () => {
    const docs = useQuery(api.documents.getDocs);
    const deleteDoc = useMutation(api.documents.deleteDoc);
    const pathname = usePathname();

    const router = useRouter();

    const handleClick = (id: string) => {
        router.push(`/documents/${id}`);
    };

    const handelDelete = async ({ id }: { id: any }) => {
        await deleteDoc({ docsId: id });
    };

    return (
        <div className="w-full h-full flex flex-col overflow-y-auto">
            {docs?.map((doc) => (
                <Button
                    key={doc._id}
                    className={cn(
                        "group/document-btn flex justify-between items-center w-full px-0 pr-2 h-8",
                        pathname == `/documents/${doc._id}` ? "bg-zinc-700/5" : null
                    )}
                    variant={
                        pathname == `/documents/${doc._id}` ? "primaryGhost" : "secondaryGhost"
                    }
                    size="sm"
                >
                    <p
                        onClick={() => handleClick(doc._id)}
                        className={cn(
                            "flex items-center h-full flex-1 gap-1 [&>*]:stroke-secondary font-normal text-xs",
                            pathname == `/documents/${doc._id}`
                                ? "[&>*]:stroke-primary"
                                : "[&>*]:stroke-secondary"
                        )}
                    >
                        <FileIcon className="w-4" />
                        <span
                            className={
                                pathname == `/documents/${doc._id}`
                                    ? "text-primary"
                                    : "text-secondary"
                            }
                        >
                            {doc.title.length > 10 ? `${doc.title.slice(0, 10)}...` : doc.title}
                        </span>
                    </p>
                    <div className="sm:opacity-0 sm:group-hover/document-btn:opacity-100 w-8 h-full flex items-center justify-center gap-2">
                        <div className="flex h-full items-center justify-center">
                            <EllipsisIcon
                                className={cn(
                                    "w-4",
                                    pathname == `/documents/${doc._id}`
                                        ? "stroke-primary"
                                        : "stroke-secondary"
                                )}
                            />
                        </div>
                        <div
                            onClick={() => handelDelete({ id: doc._id })}
                            className="h-full flex items-center justify-center"
                        >
                            <Trash2Icon
                                className={cn(
                                    "w-4",
                                    pathname == `/documents/${doc._id}`
                                        ? "stroke-primary"
                                        : "stroke-secondary"
                                )}
                            />
                        </div>
                    </div>
                </Button>
            ))}
        </div>
    );
};

export default List;
