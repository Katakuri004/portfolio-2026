"use client";

import React, { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface DottedBackgroundProps {
    children?: React.ReactNode;
    className?: string;
    dotSize?: number;
    gap?: number;
    glowColor?: string;
}

export const DottedBackground = ({
    children,
    className,
    dotSize = 1,
    gap = 20,
    glowColor = "rgba(255, 255, 255, 0.1)",
    dotColor = "rgba(100, 100, 100, 0.2)",
}: DottedBackgroundProps & { dotColor?: string }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;

        const drawDots = () => {
            if (!canvas || !ctx) return;

            // Clear canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw dots
            const cols = Math.floor(canvas.width / gap);
            const rows = Math.floor(canvas.height / gap);

            ctx.fillStyle = dotColor; // Base dot color

            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    const x = i * gap + gap / 2;
                    const y = j * gap + gap / 2;

                    ctx.beginPath();
                    ctx.arc(x, y, dotSize, 0, Math.PI * 2);
                    ctx.fill();
                }
            }

            // Draw Glow
            if (isHovered) {
                const gradient = ctx.createRadialGradient(
                    mousePosition.x,
                    mousePosition.y,
                    0,
                    mousePosition.x,
                    mousePosition.y,
                    150 // Glow radius
                );
                gradient.addColorStop(0, glowColor);
                gradient.addColorStop(1, "transparent");

                ctx.save();
                ctx.fillStyle = gradient;
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                ctx.restore();
            }
        };

        const resizeObserver = new ResizeObserver(() => {
            if (canvas.parentElement) {
                canvas.width = canvas.parentElement.offsetWidth;
                canvas.height = canvas.parentElement.offsetHeight;
                drawDots();
            }
        });

        if (canvas.parentElement) {
            resizeObserver.observe(canvas.parentElement);
        }

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            setMousePosition({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            });
            drawDots(); // Redraw on move
        };

        const handleMouseEnter = () => {
            setIsHovered(true);
            drawDots();
        };

        const handleMouseLeave = () => {
            setIsHovered(false);
            // Optional: reset mouse pos or keep last
            drawDots();
        };

        canvas.addEventListener("mousemove", handleMouseMove);
        canvas.addEventListener("mouseenter", handleMouseEnter);
        canvas.addEventListener("mouseleave", handleMouseLeave);

        drawDots();

        return () => {
            canvas.removeEventListener("mousemove", handleMouseMove);
            canvas.removeEventListener("mouseenter", handleMouseEnter);
            canvas.removeEventListener("mouseleave", handleMouseLeave);
            resizeObserver.disconnect();
        };
    }, [dotSize, gap, isHovered, mousePosition]);

    return (
        <div className={cn("relative w-full h-full overflow-hidden", className)}>
            <canvas
                ref={canvasRef}
                className="absolute inset-0 z-0"
            />
            <div className="relative z-10 w-full h-full pointer-events-none">
                {/* Pass pointer events through to children BUT we need canvas to catch them. 
                     So canvas needs to be on top? No, canvas provides background.
                     Actually, to track mouse, the container or canvas needs events.
                     We'll put pointer-events-none on content wrapper if it blocks canvas, or ensure canvas is below content but container tracks mouse.
                 */}
                {children}
            </div>
        </div>
    );
};
