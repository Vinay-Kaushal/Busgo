import * as React from "react";
import { cn } from "@/lib/utils";

const Select = React.forwardRef<HTMLSelectElement, React.SelectHTMLAttributes<HTMLSelectElement>>(
    ({ className, children, ...props }, ref) => {
        return (
            <select
                className={cn(
                    "flex h-11 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white backdrop-blur-sm transition-all duration-300 focus:border-purple-500/50 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500/20 disabled:cursor-not-allowed disabled:opacity-50 appearance-none cursor-pointer",
                    className
                )}
                ref={ref}
                {...props}
            >
                {children}
            </select>
        );
    }
);
Select.displayName = "Select";

export { Select };
