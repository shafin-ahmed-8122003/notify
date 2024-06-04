import Column from "@/components/Column";
import FullScreenButton from "@/components/FullScreenButton";
import SidebarCollapseButton from "./SidebarCollapseButton";

type Props = {
    sidebarCollapsed: boolean;
    handleSidebarCollapsedStateChange: () => void;
};

const SidebarOptions = ({ sidebarCollapsed, handleSidebarCollapsedStateChange }: Props) => {
    return (
        <Column className="w-12 h-full absolute top-0 right-0 gap-4 p-2 items-center">
            <SidebarCollapseButton
                sidebarCollapsed={sidebarCollapsed}
                handleSidebarCollapsedStateChange={handleSidebarCollapsedStateChange}
            />
            <FullScreenButton />
        </Column>
    );
};

export default SidebarOptions;
