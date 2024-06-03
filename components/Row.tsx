import { cn } from "@/lib/utils";

const Row = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return <div className={cn("flex items-center", className)}>{children}</div>;
};

export default Row;
