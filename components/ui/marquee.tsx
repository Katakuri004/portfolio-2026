"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const Marquee = ({
    items,
    images,
    direction = "left",
    speed = "fast",
    pauseOnHover = true,
    className,
}: {
    items?: {
        color: string;
        link?: string;
    }[];
    images?: string[];
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
    pauseOnHover?: boolean;
    className?: string;
}) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const scrollerRef = React.useRef<HTMLUListElement>(null);

    useEffect(() => {
        addAnimation();
    }, []);

    const [start, setStart] = useState(false);

    function addAnimation() {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem);
                }
            });

            getDirection();
            getSpeed();
            setStart(true);
        }
    }
    const getDirection = () => {
        if (containerRef.current) {
            if (direction === "left") {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "forwards"
                );
            } else {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "reverse"
                );
            }
        }
    };
    const getSpeed = () => {
        if (containerRef.current) {
            if (speed === "fast") {
                containerRef.current.style.setProperty("--animation-duration", "20s");
            } else if (speed === "normal") {
                containerRef.current.style.setProperty("--animation-duration", "40s");
            } else {
                containerRef.current.style.setProperty("--animation-duration", "80s");
            }
        }
    };
    return (
        <div
            ref={containerRef}
            className={cn(
                "scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
                className
            )}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
                    start && "animate-scroll ",
                    pauseOnHover && "hover:[animation-play-state:paused]"
                )}
            >
                {images && images.map((image, idx) => (
                    <li
                        key={idx}
                        className="w-[200px] h-[300px] relative rounded-2xl flex-shrink-0 md:w-[300px] shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden"
                    >
                        <img src={image} alt={`marquee-${idx}`} className="w-full h-full object-cover" />
                    </li>
                ))}
                {!images && items && items.map((item, idx) => (
                    <li
                        className="w-[280px] h-[160px] relative rounded-3xl flex-shrink-0 md:w-[400px] shadow-2xl bg-cover bg-center transition-all duration-300 hover:scale-105"
                        style={{
                            background: item.color,
                        }}
                        key={idx}
                    />
                ))}
            </ul>
        </div>
    );
};
