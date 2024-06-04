import { PanelLeftCloseIcon, PanelRightCloseIcon } from "lucide-react";

type Props = {
    sidebarCollapsed: boolean;
    handleSidebarCollapsedStateChange: () => void;
};

const SidebarCollapseButton = ({ sidebarCollapsed, handleSidebarCollapsedStateChange }: Props) => {
    return (
        <div
            role="button"
            onClick={handleSidebarCollapsedStateChange}
            className="[&>*]:stroke-secondary"
        >
            {sidebarCollapsed ? <PanelRightCloseIcon /> : <PanelLeftCloseIcon />}
        </div>
    );
};

export default SidebarCollapseButton;
