"use client";

import { useConvexAuth } from "convex/react";
import { Loader } from "lucide-react";
import { redirect } from "next/navigation";

type Props = {
    children: React.ReactNode;
};

const PrivateLayout = ({ children }: Props) => {
    const { isAuthenticated, isLoading } = useConvexAuth();

    if (isLoading) {
        return (
            <main className="h-full flex justify-center items-center">
                <Loader className="stroke-primary animate-spin" />
            </main>
        );
    }

    if (!isAuthenticated) {
        return redirect("/");
    }

    return <>{children}</>;
};

export default PrivateLayout;
