"use client";

import { motion } from "framer-motion";
import { DottedBackground } from "@/components/ui/dotted-background";
import {
    SiPython, SiCplusplus, SiTypescript, SiHtml5, SiCss3, SiGnubash,
    SiPytorch, SiScikitlearn, SiPandas, SiNumpy, SiHuggingface, SiOpencv,
    SiReact, SiNextdotjs, SiExpress, SiMongodb, SiFastapi, SiTailwindcss,
    SiGit, SiPycharm, SiAutodesk, SiAdobecreativecloud,
    SiPostgresql, SiMysql, SiGraphql, SiDocker
} from "react-icons/si";
import { TbSql, TbBrain, TbChartDots, TbCpu } from "react-icons/tb";
import { VscCode } from "react-icons/vsc";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

// Mapping skills to icons
const getIcon = (name: string, className?: string) => {
    const props = { className: className || "w-10 h-10" };
    switch (name) {
        // Languages
        case "Python": return <SiPython {...props} />;
        case "C/C++": return <SiCplusplus {...props} />;
        case "TypeScript": return <SiTypescript {...props} />;
        case "HTML/CSS": return <div className="flex gap-1"><SiHtml5 {...props} /><SiCss3 {...props} /></div>;
        case "SQL": return <TbSql {...props} />;
        case "Bash": return <SiGnubash {...props} />;

        // ML / AI
        case "PyTorch": return <SiPytorch {...props} />;
        case "Scikit-learn": return <SiScikitlearn {...props} />;
        case "Pandas": return <SiPandas {...props} />;
        case "vLLM": return <TbCpu {...props} />; // Placeholder
        case "Matplotlib": return <TbChartDots {...props} />; // Placeholder
        case "HuggingFace": return <SiHuggingface {...props} />;
        case "OpenCV": return <SiOpencv {...props} />;

        // Web
        case "React": return <SiReact {...props} />;
        case "Next.js": return <SiNextdotjs {...props} />;
        case "Express.js": return <SiExpress {...props} />;
        case "MongoDB": return <SiMongodb {...props} />;
        case "FastAPI": return <SiFastapi {...props} />;
        case "Tailwind CSS": return <SiTailwindcss {...props} />;

        // Tools
        case "Git": return <SiGit {...props} />;
        case "VS Code": return <VscCode {...props} />;
        case "PyCharm": return <SiPycharm {...props} />;
        case "AutoCAD": return <SiAutodesk {...props} />;
        case "Ansys Workbench": return <TbBrain {...props} />; // Abstract
        case "Adobe CS": return <SiAdobecreativecloud {...props} />;

        default: return <SiTypescript {...props} />;
    }
};

// Mapping skills to brand colors
const skillColorMap: Record<string, string> = {
    "Python": "#3776AB",
    "C/C++": "#00599C",
    "TypeScript": "#3178C6",
    "HTML/CSS": "#E34F26", // HTML Orange
    "SQL": "#CC2927",
    "Bash": "#4EAA25",
    "PyTorch": "#EE4C2C",
    "Scikit-learn": "#F7931E",
    "Pandas": "#150458",
    "vLLM": "#8000FF", // Generic Purple
    "Matplotlib": "#11559C",
    "HuggingFace": "#FFD21E",
    "OpenCV": "#5C3EE8",
    "React": "#61DAFB",
    "Next.js": "#000000",
    "Express.js": "#000000",
    "MongoDB": "#47A248",
    "FastAPI": "#009688",
    "Tailwind CSS": "#06B6D4",
    "Git": "#F05032",
    "VS Code": "#007ACC",
    "PyCharm": "#21D789",
    "AutoCAD": "#E51C23",
    "Ansys Workbench": "#FFB71B",
    "Adobe CS": "#FF0000",
};

const skillCategories = [
    {
        name: "Languages",
        skills: ["Python", "C/C++", "TypeScript", "SQL", "HTML/CSS", "Bash"],
    },
    {
        name: "ML / AI",
        skills: ["PyTorch", "Scikit-learn", "Pandas", "vLLM", "Matplotlib", "HuggingFace", "OpenCV"],
    },
    {
        name: "Web Technologies",
        skills: ["React", "Next.js", "Express.js", "MongoDB", "FastAPI", "Tailwind CSS"],
    },
    {
        name: "Developer Tools",
        skills: ["Git", "VS Code", "PyCharm", "AutoCAD", "Ansys Workbench", "Adobe CS"],
    }
];

export function Skills() {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            <div className="container relative z-10 w-full max-w-none px-4 md:px-12">
                <motion.h2
                    className="text-4xl md:text-6xl font-black mb-20 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="bg-foreground text-background px-4 inline-block transform -rotate-1">Technical Skills</span>
                </motion.h2>

                <div className="flex flex-col gap-16 w-full">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="flex flex-col items-center w-full">
                            <h3 className="text-2xl font-black mb-10 border-b-4 border-black pb-1 uppercase tracking-tighter">
                                {category.name}
                            </h3>

                            <div className="flex flex-wrap gap-8 justify-center w-full">
                                {category.skills.map((skill, skillIndex) => {
                                    const color = skillColorMap[skill] || "#000000";
                                    return (
                                        <motion.div
                                            key={skill}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.3, delay: (index * 0.1) + (skillIndex * 0.05) }}
                                            viewport={{ once: true }}
                                            className="relative group"
                                            style={{ "--brand-color": color } as React.CSSProperties}
                                        >
                                            <div className="w-32 h-32 md:w-40 md:h-40 rounded-3xl border-2 border-black bg-white neo-shadow group-hover:neo-shadow-hover group-hover:border-[var(--brand-color)] transition-all duration-300 overflow-hidden relative">
                                                <DottedBackground
                                                    className="absolute inset-0 bg-white"
                                                    dotColor="#cbd5e1"
                                                    glowColor={color + "40"} // Hex + Alpha
                                                >
                                                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 z-10 pointer-events-none">
                                                        <div className="text-neutral-800 group-hover:scale-110 group-hover:-translate-y-2 group-hover:text-[var(--brand-color)] transition-all duration-300">
                                                            {getIcon(skill, "w-12 h-12 md:w-14 md:h-14")}
                                                        </div>

                                                        {/* Name Reveal */}
                                                        <div className="absolute bottom-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                                                            <span className="text-[10px] md:text-xs font-bold text-black bg-white/90 px-3 py-1 rounded-full border border-black/10 backdrop-blur-sm shadow-sm group-hover:text-[var(--brand-color)] group-hover:border-[var(--brand-color)]">
                                                                {skill}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </DottedBackground>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
