"use client";

import Column from "@/components/Column";
import Row from "@/components/Row";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { UserButton, useUser } from "@clerk/clerk-react";
import { SearchIcon } from "lucide-react";
import FullScreenBtn from "./FullScreenBtn";
import List from "./List";
import ResizingBar from "./ResizingBar";
import SidebarCollapseBtn from "./SidebarCollapseBtn";

type Props = {
    sidebarOpen: boolean;
    handleSidebarOpen: () => void;
};

const Sidebar = ({ sidebarOpen, handleSidebarOpen }: Props) => {
    const { user } = useUser();

    return (
        <aside
            className={cn(
                "group/sidebar w-60 fixed top-0 left-0 bg-background brightness-95 h-full p-4 pr-10 transition-transform z-40 flex flex-col gap-4",
                sidebarOpen ? null : "-translate-x-48"
            )}
        >
            <Row className="gap-4">
                <UserButton
                    appearance={{ elements: { userButtonAvatarBox: "w-8 h-8 rounded-sm" } }}
                />
                <h1 className="text-2xl text-secondary font-bold">{user?.firstName}</h1>
            </Row>
            <Row className="h-10">
                <Input
                    autoFocus
                    className="h-full rounded-r-none border-secondary border-2 text-xs"
                    placeholder="Search your notes"
                />
                <Button
                    className="h-full px-3 border-0 rounded-l-none [&>*]:w-4"
                    variant="secondary"
                >
                    <SearchIcon />
                </Button>
            </Row>
            <Column className="w-10 h-full absolute top-0 right-0 gap-4 p-2 items-center">
                <SidebarCollapseBtn
                    sidebarOpen={sidebarOpen}
                    handleSidebarOpen={handleSidebarOpen}
                />
                <FullScreenBtn />
            </Column>
            <ResizingBar />
            <List />
        </aside>
    );
};

export default Sidebar;
