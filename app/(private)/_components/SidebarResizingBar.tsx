const SidebarResizingBar = () => {
    return (
        <div className="hidden w-1 h-full bg-foreground opacity-20 absolute top-0 right-0 group-hover/sidebar:block cursor-col-resize" />
    );
};

export default SidebarResizingBar;
