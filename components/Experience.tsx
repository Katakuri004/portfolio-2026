"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const experiences = [
    {
        company: "AI4Bharat, IIT Madras",
        role: "Multimodal Data Engineer-Intern",
        duration: "Oct 2024 – Present",
        location: "Chennai",
        items: [
            "Benchmark omni-model pipeline",
            "Experiment management dashboard",
            "Longitudinal tracking system"
        ]
    },
    // Added placeholder for visual balance if needed, but sticking to user data
];

export function Experience() {
    return (
        <section className="py-24 bg-neo-yellow/5">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4"
                >
                    <h2 className="text-4xl md:text-6xl font-black underline decoration-neo-blue decoration-4 underline-offset-8">
                        Experience
                    </h2>
                    <p className="text-xl font-medium text-muted-foreground max-w-sm text-right">
                        My professional journey and key achievements being a data engineer.
                    </p>
                </motion.div>

                <div className="grid gap-6">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className="bg-background border-2 border-foreground rounded-2xl p-6 md:p-8 hover:bg-foreground hover:text-background transition-colors duration-300 grid md:grid-cols-[1fr_2fr_auto] gap-6 items-center neo-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none">

                                {/* Date Badge */}
                                <div>
                                    <span className="inline-block px-4 py-2 rounded-full border-2 border-foreground font-bold text-sm bg-neo-yellow text-foreground group-hover:bg-background group-hover:text-foreground transition-colors">
                                        {exp.duration}
                                    </span>
                                </div>

                                {/* Role & Company */}
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold mb-2">{exp.role}</h3>
                                    <p className="text-lg font-medium opacity-80 mb-2">{exp.company}</p>
                                    <ul className="list-disc list-inside text-sm opacity-70">
                                        {exp.items.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Arrow Icon */}
                                <div className="hidden md:flex justify-end">
                                    <div className="h-12 w-12 rounded-full border-2 border-foreground flex items-center justify-center bg-background text-foreground group-hover:bg-neo-blue group-hover:text-foreground transition-colors">
                                        <ArrowUpRight className="h-6 w-6" />
                                    </div>
                                </div>

                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
