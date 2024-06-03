import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-md font-bold uppercase transition-all outline-none disabled:pointer-events-none disabled:opacity-50 active:scale-95 duration-100",
    {
        variants: {
            variant: {
                default: "bg-transparent text-primary hover:bg-zinc-200",
                primary:
                    "bg-primary border-b-4 border-b-secondary text-primary-foreground hover:brightness-[80%] active:border-b-2 [&>*]:stroke-primary-foreground",
                secondary:
                    "bg-secondary border-b-4 border-b-black/30 text-secondary-foreground hover:brightness-[80%] active:border-b-2 [&>*]:stroke-secondary-foreground",
                secondaryOutline:
                    "bg-transparent text-secondary border-secondary border-2 hover:bg-secondary hover:text-secondary-foreground [&>*]:stroke-secondary [&>*]:hover:stroke-secondary-foreground",
                secondaryGhost:
                    "bg-transparent text-secondary hover:bg-zinc-600/5 [&>*]:stroke-secondary",
            },
            size: {
                default: "h-11 p-4",
                sm: "h-10 rounded-md px-3 text-sm",
                lg: "h-11 rounded-md px-8",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };
