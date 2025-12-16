import { cn } from "@/lib/utils";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid md:auto-rows-[22rem] grid-cols-1 md:grid-cols-3 gap-6 max-w-none w-full mx-auto ",
                className
            )}
        >
            {children}
        </div>
    );
};

import { DottedBadge } from "./dotted-badge";

export const BentoGridItem = ({
    className,
    title,
    description,
    header,
    icon,
    tags,
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
    tags?: string[];
}) => {
    return (
        <div
            className={cn(
                "row-span-1 rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4 border-black/10", // Added border-black/10 for visibility in light mode
                className
            )}
        >
            {header}
            <div className="group-hover/bento:translate-x-2 transition duration-200">
                {icon}
                <div className="font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
                    {title}
                </div>
                <div className="font-normal text-neutral-600 text-xs dark:text-neutral-300">
                    {description}
                </div>
                {tags && tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                        {tags.map((tag, i) => (
                            <DottedBadge key={i}>{tag}</DottedBadge>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};
