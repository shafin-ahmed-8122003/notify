import { PanelLeftCloseIcon, PanelRightCloseIcon } from "lucide-react";

type Props = {
    sidebarOpen: boolean;
    handleSidebarOpen: () => void;
};

const SidebarCollapseBtn = ({ sidebarOpen, handleSidebarOpen }: Props) => {
    return (
        <div role="button" onClick={handleSidebarOpen} className="[&>*]:stroke-secondary">
            {sidebarOpen ? <PanelLeftCloseIcon /> : <PanelRightCloseIcon />}
        </div>
    );
};

export default SidebarCollapseBtn;
