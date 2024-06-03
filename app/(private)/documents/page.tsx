"use client";

import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { formatDate } from "@/lib/formatDate";
import { useUser } from "@clerk/clerk-react";
import { useMutation, useQuery } from "convex/react";
import Image from "next/image";
import { toast } from "sonner";

const Documents = () => {
    const { user } = useUser();
    const docs = useQuery(api.documents.getDocs);
    const createDoc = useMutation(api.documents.createDoc);

    const handleCreateButtonTap = async () => {
        await createDoc();
        toast("Alhamdulillah!");
    };

    return (
        <div className="h-full">
            {docs && docs.length > 0 ? (
                <div className="grid max-sm:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-8">
                    {docs.map((doc) => (
                        <div className="w-60 h-60 relative bg-background shadow-xl border-secondary border rounded-md overflow-hidden">
                            <div className="w-full h-20 p-4 flex flex-col bg-secondary [&>*]:text-secondary-foreground absolute bottom-0">
                                <h1>{doc.title}</h1>
                                <time className="text-xs">{formatDate(doc._creationTime)}</time>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="w-full h-full flex flex-col justify-center items-center gap-4">
                    <Image src="/empty.svg" alt="Empty Notes Image" width={200} height={200} />
                    <div className="flex flex-col items-center">
                        <h1 className="text-xl font-bold">Peach be upon you, {user?.firstName}!</h1>
                        <p>You don{"'"}t have any notes yet!</p>
                    </div>
                    <Button onClick={handleCreateButtonTap} variant="primary">
                        Create One
                    </Button>
                </div>
            )}
        </div>
    );
};

export default Documents;
