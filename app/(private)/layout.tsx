"use client";

import { cn } from "@/lib/utils";
import { useConvexAuth } from "convex/react";
import { Loader } from "lucide-react";
import { redirect } from "next/navigation";
import { useState } from "react";
import Sidebar from "./_components/Sidebar";

type Props = {
    children: React.ReactNode;
};

const PrivateLayout = ({ children }: Props) => {
    const { isAuthenticated, isLoading } = useConvexAuth();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleSidebarOpen = () => {
        setSidebarOpen((prevState) => !prevState);
    };

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

    return (
        <>
            <Sidebar sidebarOpen={sidebarOpen} handleSidebarOpen={handleSidebarOpen} />
            <main className={cn("py-4 pr-4 h-full", sidebarOpen ? "pl-64" : "pl-16")}>
                {children}
            </main>
        </>
    );
};

export default PrivateLayout;
