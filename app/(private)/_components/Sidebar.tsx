"use client";

import { cn } from "@/lib/utils";
import { useUser } from "@clerk/clerk-react";
import { PanelLeftCloseIcon } from "lucide-react";

type Props = {
    sidebarOpen: boolean;
    setSidebarOpen: () => void;
};

const Sidebar = ({ sidebarOpen, setSidebarOpen }: Props) => {
    const { user } = useUser();

    return (
        <aside
            className={cn(
                "group/sidebar w-60 fixed top-0 left-0 bg-background brightness-95 h-full p-4 pr-12 transition-transform",
                sidebarOpen ? null : "-translate-x-48"
            )}
        >
            <h1 className="text-2xl font-bold">{user?.firstName}</h1>
            <div
                role="button"
                onClick={setSidebarOpen}
                className="w-12 h-12 absolute top-0 right-0 flex justify-center items-center"
            >
                <PanelLeftCloseIcon />
            </div>
            <div className="hidden w-1 h-full bg-foreground opacity-20 absolute right-0 group-hover/sidebar:block cursor-col-resize"></div>
        </aside>
    );
};

export default Sidebar;
