import Row from "@/components/Row";
import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/clerk-react";
import SidebarAllNotesSection from "../_sections/SidebarAllNotesSection";
import CreateNoteButton from "./CreateNoteButton";
import SearchBox from "./SearchBox";
import SidebarOptions from "./SidebarOptions";
import SidebarResizingBar from "./SidebarResizingBar";
import UserName from "./UserName";

type Props = {
    sidebarCollapsed: boolean;
    handleSidebarCollapsedStateChange: () => void;
};

const Sidebar = ({ sidebarCollapsed, handleSidebarCollapsedStateChange }: Props) => {
    return (
        <aside
            className={cn(
                "group/sidebar w-60 fixed top-0 left-0 bg-background brightness-95 h-full p-4 pr-12 transition-transform z-40 flex flex-col gap-4",
                sidebarCollapsed ? "-translate-x-48" : null
            )}
        >
            <SidebarResizingBar />
            <SidebarOptions
                sidebarCollapsed={sidebarCollapsed}
                handleSidebarCollapsedStateChange={handleSidebarCollapsedStateChange}
            />
            <Row className="gap-4">
                <UserButton
                    appearance={{ elements: { userButtonAvatarBox: "w-8 h-8 rounded-sm" } }}
                />
                <h1 className="text-2xl text-secondary font-bold">
                    <UserName />
                </h1>
            </Row>
            <SearchBox />
            <CreateNoteButton note={{ title: "", body: "" }} size="sm" title="New Note" />
            <SidebarAllNotesSection />
        </aside>
    );
};

export default Sidebar;
