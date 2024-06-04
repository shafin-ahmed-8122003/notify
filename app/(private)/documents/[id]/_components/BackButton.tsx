"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";
import { useRouter } from "next/navigation";

const BackButton = () => {
    const router = useRouter();

    const handleClick = () => {
        router.replace("/documents");
    };

    return (
        <Button
            variant="secondaryGhost"
            onClick={handleClick}
            className="[&>*]:stroke-secondary-foreground px-2 hover:bg-foreground/20"
        >
            <ArrowLeftIcon />
        </Button>
    );
};

export default BackButton;
