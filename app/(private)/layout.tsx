"use client";

import LoadingIcon from "@/components/LoadingIcon";
import { cn } from "@/lib/utils";
import { useConvexAuth } from "convex/react";
import { redirect } from "next/navigation";
import { useState } from "react";
import Sidebar from "./_components/Sidebar";

type Props = {
    children: React.ReactNode;
};

const PrivateLayout = ({ children }: Props) => {
    const { isAuthenticated, isLoading } = useConvexAuth();
    const [sidebarCollapsed, setSidebarCollapsedState] = useState(true);

    const handleSidebarCollapsedStateChange = () => {
        setSidebarCollapsedState((prevState) => !prevState);
    };

    if (isLoading) {
        return (
            <main className="h-full flex justify-center items-center">
                <LoadingIcon />
            </main>
        );
    }

    if (!isAuthenticated) {
        return redirect("/");
    }

    return (
        <>
            <Sidebar
                sidebarCollapsed={sidebarCollapsed}
                handleSidebarCollapsedStateChange={handleSidebarCollapsedStateChange}
            />
            <main
                className={cn(
                    "py-4 pr-4 h-full",
                    sidebarCollapsed ? "pl-16" : "pl-64 max-sm:pl-16"
                )}
            >
                {children}
            </main>
        </>
    );
};

export default PrivateLayout;
