"use client";

import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { useUser } from "@clerk/clerk-react";
import { useMutation } from "convex/react";
import Image from "next/image";
import { toast } from "sonner";

const EmptyDoc = () => {
    const { user } = useUser();
    const createDoc = useMutation(api.documents.createDoc);

    const handleCreateButtonTap = async () => {
        await createDoc();
        toast("Alhamdulillah!");
    };

    return (
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
    );
};

export default EmptyDoc;