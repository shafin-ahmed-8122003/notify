"use client";

import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import DocsBox from "../_components/DocsBox";
import EmptyDoc from "../_components/EmptyDoc";

const Documents = () => {
    const docs = useQuery(api.documents.getDocs);

    return (
        <div className="h-full">
            {docs && docs.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-8">
                    {docs.map((doc) => (
                        <DocsBox doc={doc} />
                    ))}
                </div>
            ) : (
                <EmptyDoc />
            )}
        </div>
    );
};

export default Documents;
