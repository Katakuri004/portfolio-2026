"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface DottedBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export const DottedBadge = ({ children, className, ...props }: DottedBadgeProps) => {
    return (
        <div
            className={cn(
                "group relative flex items-center justify-center overflow-hidden rounded-full border border-black/20 bg-neutral-100 px-3 py-1 font-medium text-black transition-all hover:scale-105 active:scale-95 dark:border-white/20 dark:bg-neutral-900 dark:text-white",
                className
            )}
            {...props}
        >
            {/* Dotted Pattern Background */}
            <div className="absolute inset-0 opacity-20 hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 h-full w-full bg-[radial-gradient(#404040_1px,transparent_1px)] [background-size:4px_4px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] dark:bg-[radial-gradient(#ffffff_1px,transparent_1px)]"></div>
            </div>

            {/* Glow Effect on Hover */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-blue-400/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:via-blue-500/20" />

            <span className="relative z-10 text-xs">{children}</span>
        </div>
    );
};
