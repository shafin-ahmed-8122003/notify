import { cn } from "@/lib/utils";

const Column = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return <div className={cn("flex flex-col items-center", className)}>{children}</div>;
};

export default Column;
