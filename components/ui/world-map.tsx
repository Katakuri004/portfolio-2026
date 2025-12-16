"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface WorldMapProps {
    className?: string;
    dotsColor?: string;
    glowColor?: string;
    fit?: "contain" | "cover";
}

interface Point {
    x: number;
    y: number;
    baseAlpha: number;
}

export function WorldMap({ className, dotsColor = "#000", glowColor = "#ffffff", fit = "contain" }: WorldMapProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [points, setPoints] = useState<Point[]>([]);
    const pointsRef = useRef<Point[]>([]); // Ref to hold points for animation loop
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Load Image
        const img = new Image();
        img.src = "/world-map.png";

        img.onload = () => {
            const tempCanvas = document.createElement("canvas");
            const tempCtx = tempCanvas.getContext("2d");
            if (!tempCtx) return;

            // Set fixed aspect ratio for sampling
            const sampleWidth = 200;
            const aspect = img.height / img.width;
            const sampleHeight = Math.floor(sampleWidth * aspect);

            tempCanvas.width = sampleWidth;
            tempCanvas.height = sampleHeight;

            // Draw image to temp canvas
            tempCtx.drawImage(img, 0, 0, sampleWidth, sampleHeight);

            const imageData = tempCtx.getImageData(0, 0, sampleWidth, sampleHeight);
            const data = imageData.data;

            const newPoints: Point[] = [];

            // Scan pixels: if white (>128), add point
            for (let y = 0; y < sampleHeight; y++) {
                for (let x = 0; x < sampleWidth; x++) {
                    const index = (y * sampleWidth + x) * 4;
                    const r = data[index];
                    const g = data[index + 1];
                    const b = data[index + 2];
                    const brightness = (r + g + b) / 3;

                    if (brightness > 128) {
                        newPoints.push({
                            x: x / sampleWidth, // Normalized 0-1
                            y: y / sampleHeight,
                            baseAlpha: Math.random() * 0.5 + 0.3
                        });
                    }
                }
            }
            setPoints(newPoints);
            pointsRef.current = newPoints; // Update ref
        };

        const handleResize = () => {
            if (canvas.parentElement) {
                canvas.width = canvas.parentElement.offsetWidth;
                canvas.height = canvas.parentElement.offsetHeight;
                setDimensions({ width: canvas.width, height: canvas.height });
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);

    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationId: number;
        let time = 0;

        const render = () => {
            time += 0.02; // Slowed down from 0.05
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const mapAspect = 2; // Rough world map aspect
            const canvasAspect = canvas.width / canvas.height;

            let drawWidth, drawHeight, offsetX, offsetY;

            if (fit === "cover") {
                if (canvasAspect > mapAspect) {
                    drawWidth = canvas.width;
                    drawHeight = drawWidth / mapAspect;
                } else {
                    drawHeight = canvas.height;
                    drawWidth = drawHeight * mapAspect;
                }
                // Zoom in to cut off edges (more immersive)
                drawWidth *= 1.2;
                drawHeight *= 1.2;
            } else {
                if (canvasAspect > mapAspect) {
                    drawHeight = canvas.height * 0.8;
                    drawWidth = drawHeight * mapAspect;
                } else {
                    drawWidth = canvas.width * 0.9;
                    drawHeight = drawWidth / mapAspect;
                }
            }

            offsetX = (canvas.width - drawWidth) / 2;
            offsetY = (canvas.height - drawHeight) / 2;

            // Use pointsRef.current instead of points dependency
            const currentPoints = pointsRef.current;

            currentPoints.forEach(p => {
                const px = offsetX + p.x * drawWidth;
                const py = offsetY + p.y * drawHeight;

                // Glimmer effect
                const glimmer = Math.sin(time + p.x * 10 + p.y * 10) * 0.3 + 0.7; // 0.4 - 1.0

                ctx.fillStyle = dotsColor;
                ctx.globalAlpha = p.baseAlpha * glimmer;
                ctx.beginPath();
                ctx.arc(px, py, 2.5, 0, Math.PI * 2); // Increased dot size to 2.5
                ctx.fill();
            });
            ctx.globalAlpha = 1.0;

            animationId = requestAnimationFrame(render);
        };

        render();
        return () => cancelAnimationFrame(animationId);
    }, [dimensions, dotsColor, fit]); // REMOVED points from dependency array

    return (
        <div className={cn("relative w-full h-full", className)}>
            <canvas ref={canvasRef} className="absolute inset-0" />
        </div>
    );
}
