"use client";
import { cn } from "@/lib/utils";
import { useState } from "react";
import Sidebar from "../_components/Sidebar";

const page = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleSidebarOpen = () => {
        setSidebarOpen((prevState) => !prevState);
    };

    return (
        <main className={cn("py-4 pr-4", sidebarOpen ? "pl-64" : "pl-16")}>
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={handleSidebarOpen} />
            <h1>Shafin</h1>
        </main>
    );
};

export default page;
