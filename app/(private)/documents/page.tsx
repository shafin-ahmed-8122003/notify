"use client";

import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/clerk-react";
import Image from "next/image";
import { toast } from "sonner";

const Documents = () => {
    const { user } = useUser();

    const handleCreateButtonTap = () => {
        toast("Alhamdulillah!");
    };

    return (
        <div className="h-full">
            <div className="w-full h-full flex flex-col justify-center items-center gap-4">
                <Image src="/empty.svg" alt="Empty Notes Image" width={200} height={200} />
                <div className="flex flex-col items-center">
                    <h1 className="text-xl font-bold">Peach be upon you, {user?.firstName}!</h1>
                    <p>You don{"'"}t have any notes yet</p>
                </div>
                <Button onClick={handleCreateButtonTap} variant="primary">
                    Create One
                </Button>
            </div>
        </div>
    );
};

export default Documents;
