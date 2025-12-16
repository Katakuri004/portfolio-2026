"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Code2, LayoutDashboard, BrainCircuit, Activity, Database, Terminal, Sparkles, Gamepad2, Linkedin, Package, Bookmark, Thermometer } from "lucide-react";
import { cn } from "@/lib/utils";
import { Tabs } from "@/components/ui/tabs";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";

const marqueeItems = [
    { color: "linear-gradient(135deg, #FF6B6B 0%, #FFD93D 100%)", link: "https://github.com/arpitkumar-kata" },
    { color: "linear-gradient(135deg, #4D96FF 0%, #6C5DD3 100%)", link: "https://github.com/arpitkumar-kata" },
    { color: "linear-gradient(135deg, #6BCB77 0%, #FFD93D 100%)", link: "https://github.com/arpitkumar-kata" },
    { color: "linear-gradient(135deg, #FF6B6B 0%, #6C5DD3 100%)", link: "https://github.com/arpitkumar-kata" },
    { color: "linear-gradient(135deg, #FFD93D 0%, #4D96FF 100%)", link: "https://github.com/arpitkumar-kata" },
];

const marqueeImages = [
    "https://assets.aceternity.com/cloudinary_bkp/3d-card.png",
    "https://assets.aceternity.com/animated-modal.png",
    "https://assets.aceternity.com/animated-testimonials.webp",
    "https://assets.aceternity.com/cloudinary_bkp/Tooltip_luwy44.png",
    "https://assets.aceternity.com/github-globe.png",
    "https://assets.aceternity.com/glare-card.png",
    "https://assets.aceternity.com/layout-grid.png",
    "https://assets.aceternity.com/flip-text.png",
    "https://assets.aceternity.com/hero-highlight.png",
    "https://assets.aceternity.com/carousel.webp",
    "https://assets.aceternity.com/placeholders-and-vanish-input.png",
    "https://assets.aceternity.com/shooting-stars-and-stars-background.png",
    "https://assets.aceternity.com/signup-form.png",
    "https://assets.aceternity.com/cloudinary_bkp/stars_sxle3d.png",
    "https://assets.aceternity.com/spotlight-new.webp",
    "https://assets.aceternity.com/cloudinary_bkp/Spotlight_ar5jpr.png",
    "https://assets.aceternity.com/cloudinary_bkp/Parallax_Scroll_pzlatw_anfkh7.png",
    "https://assets.aceternity.com/tabs.png",
    "https://assets.aceternity.com/cloudinary_bkp/Tracing_Beam_npujte.png",
    "https://assets.aceternity.com/cloudinary_bkp/typewriter-effect.png",
    "https://assets.aceternity.com/glowing-effect.webp",
    "https://assets.aceternity.com/hover-border-gradient.png",
    "https://assets.aceternity.com/cloudinary_bkp/Infinite_Moving_Cards_evhzur.png",
    "https://assets.aceternity.com/cloudinary_bkp/Lamp_hlq3ln.png",
    "https://assets.aceternity.com/macbook-scroll.png",
    "https://assets.aceternity.com/cloudinary_bkp/Meteors_fye3ys.png",
    "https://assets.aceternity.com/cloudinary_bkp/Moving_Border_yn78lv.png",
    "https://assets.aceternity.com/multi-step-loader.png",
    "https://assets.aceternity.com/vortex.png",
    "https://assets.aceternity.com/wobble-card.png",
    "https://assets.aceternity.com/world-map.webp",
    "https://assets.aceternity.com/cloudinary_bkp/3d-card.png",
    "https://assets.aceternity.com/animated-modal.png",
    "https://assets.aceternity.com/animated-testimonials.webp",
    "https://assets.aceternity.com/cloudinary_bkp/Tooltip_luwy44.png",
    "https://assets.aceternity.com/github-globe.png",
    "https://assets.aceternity.com/glare-card.png",
    "https://assets.aceternity.com/layout-grid.png",
    "https://assets.aceternity.com/flip-text.png",
    "https://assets.aceternity.com/hero-highlight.png",
    "https://assets.aceternity.com/carousel.webp",
    "https://assets.aceternity.com/placeholders-and-vanish-input.png",
    "https://assets.aceternity.com/shooting-stars-and-stars-background.png",
    "https://assets.aceternity.com/signup-form.png",
    "https://assets.aceternity.com/cloudinary_bkp/stars_sxle3d.png",
    "https://assets.aceternity.com/spotlight-new.webp",
    "https://assets.aceternity.com/cloudinary_bkp/Spotlight_ar5jpr.png",
    "https://assets.aceternity.com/cloudinary_bkp/Parallax_Scroll_pzlatw_anfkh7.png",
    "https://assets.aceternity.com/tabs.png",
    "https://assets.aceternity.com/cloudinary_bkp/Tracing_Beam_npujte.png",
    "https://assets.aceternity.com/cloudinary_bkp/typewriter-effect.png",
    "https://assets.aceternity.com/glowing-effect.webp",
    "https://assets.aceternity.com/hover-border-gradient.png",
    "https://assets.aceternity.com/cloudinary_bkp/Infinite_Moving_Cards_evhzur.png",
    "https://assets.aceternity.com/cloudinary_bkp/Lamp_hlq3ln.png",
    "https://assets.aceternity.com/macbook-scroll.png",
    "https://assets.aceternity.com/cloudinary_bkp/Meteors_fye3ys.png",
    "https://assets.aceternity.com/cloudinary_bkp/Moving_Border_yn78lv.png",
    "https://assets.aceternity.com/multi-step-loader.png",
    "https://assets.aceternity.com/vortex.png",
    "https://assets.aceternity.com/wobble-card.png",
    "https://assets.aceternity.com/world-map.webp",
    "https://assets.aceternity.com/cloudinary_bkp/3d-card.png",
    "https://assets.aceternity.com/animated-modal.png",
    "https://assets.aceternity.com/animated-testimonials.webp",
    "https://assets.aceternity.com/cloudinary_bkp/Tooltip_luwy44.png",
    "https://assets.aceternity.com/github-globe.png",
    "https://assets.aceternity.com/glare-card.png",
    "https://assets.aceternity.com/layout-grid.png",
    "https://assets.aceternity.com/flip-text.png",
    "https://assets.aceternity.com/hero-highlight.png",
    "https://assets.aceternity.com/carousel.webp",
    "https://assets.aceternity.com/placeholders-and-vanish-input.png",
    "https://assets.aceternity.com/shooting-stars-and-stars-background.png",
    "https://assets.aceternity.com/signup-form.png",
    "https://assets.aceternity.com/cloudinary_bkp/stars_sxle3d.png",
    "https://assets.aceternity.com/spotlight-new.webp",
    "https://assets.aceternity.com/cloudinary_bkp/Spotlight_ar5jpr.png",
    "https://assets.aceternity.com/cloudinary_bkp/Parallax_Scroll_pzlatw_anfkh7.png",
    "https://assets.aceternity.com/tabs.png",
    "https://assets.aceternity.com/cloudinary_bkp/Tracing_Beam_npujte.png",
    "https://assets.aceternity.com/cloudinary_bkp/typewriter-effect.png",
    "https://assets.aceternity.com/glowing-effect.webp",
    "https://assets.aceternity.com/hover-border-gradient.png",
    "https://assets.aceternity.com/cloudinary_bkp/Infinite_Moving_Cards_evhzur.png",
    "https://assets.aceternity.com/cloudinary_bkp/Lamp_hlq3ln.png",
    "https://assets.aceternity.com/macbook-scroll.png",
    "https://assets.aceternity.com/cloudinary_bkp/Meteors_fye3ys.png",
    "https://assets.aceternity.com/cloudinary_bkp/Moving_Border_yn78lv.png",
    "https://assets.aceternity.com/multi-step-loader.png",
    "https://assets.aceternity.com/vortex.png",
    "https://assets.aceternity.com/wobble-card.png",
    "https://assets.aceternity.com/world-map.webp",
];

const projects = [
    {
        title: "MM-LLM-eval-suite",
        description: "A comprehensive web-based dashboard and system for the lmms-eval benchmarking framework to orchestrate evaluations, visualize results, and compare model performance.",
        tags: ["Next.js", "Python", "Visualization"],
        github: "https://github.com/Katakuri004/MM-LLM-eval-suite",
        icon: <LayoutDashboard className="h-4 w-4 text-neutral-500" />
    },
    {
        title: "toonform - TOON NPM Package",
        description: "Intelligent TOON optimizer that cuts LLM token costs with smart analysis, true TOON text output, and framework/CLI integrations.",
        tags: ["NPM", "TypeScript", "Optimization"],
        github: "https://github.com/Katakuri004/toonform",
        icon: <Package className="h-4 w-4 text-neutral-500" />
    },
    {
        title: "Hybrid AI Framework",
        description: "Implementation of a novel hybrid deep learning architecture integrating LSTM, GNNs, and Deep RL for epidemiological forecasting and optimal intervention control.",
        tags: ["Python", "PyTorch", "GNN", "RL"],
        github: "https://github.com/Katakuri004/Epidemology-project",
        icon: <BrainCircuit className="h-4 w-4 text-neutral-500" />
    }
];

const minorProjects = [
    {
        title: "ThreeBoids",
        description: "Interactive flocking simulation bringing Craig Reynolds’ Boids algorithm to life with real-time controls. Built with Next.js and Canvas 2D API.",
        tags: ["React", "Canvas", "Algorithms"],
        icon: <Activity className="h-4 w-4 text-neutral-500" />
    },
    {
        title: "UMark",
        description: "Browser Extension to let you save and Bookmark Timestamp of any Youtube Video.",
        tags: ["Extension", "JavaScript", "Productivity"],
        icon: <Bookmark className="h-4 w-4 text-neutral-500" />
    },
    {
        title: "Psychro chart studio",
        description: "Interactive psychrometric chart experience for HVAC engineers. Built with Next.js, D3, Tailwind, framer-motion, and psychrolib.",
        tags: ["D3.js", "Next.js", "Engineering"],
        icon: <Thermometer className="h-4 w-4 text-neutral-500" />
    },
    {
        title: "IMDB-Sentiment-Analysis",
        description: "Comparing Feed-Forward, Bi-LSTM, and Regularized Networks for IMDB Sentiment Analysis.",
        tags: ["NLP", "Deep Learning", "Python"],
        icon: <Database className="h-4 w-4 text-neutral-500" />
    }
];

export function Projects() {
    const tabs = [
        {
            title: "GitHub",
            icon: <Github className="h-5 w-5" />,
            value: "github",
            content: (
                <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-2xl border-2 border-black neo-shadow bg-white">
                    <h2 className="relative z-20 mx-auto max-w-4xl text-center text-2xl font-bold text-balance text-black md:text-4xl lg:text-6xl">
                        Visit my{" "}
                        <span className="relative z-20 inline-block rounded-xl bg-neo-blue/40 px-4 py-1 text-black underline decoration-neo-blue decoration-[6px] underline-offset-[16px] backdrop-blur-sm">
                            GitHub Profile
                        </span>{" "}
                        and LinkedIn to check out my work.
                    </h2>

                    <div className="relative z-20 flex flex-wrap items-center justify-center gap-4 pt-12">
                        <a href="https://github.com/Katakuri004" target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-md bg-neo-blue border-2 border-black px-6 py-2.5 text-sm font-bold text-black transition-colors hover:bg-neo-blue/80 neo-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
                            <Github className="h-5 w-5" />
                            GitHub
                        </a>
                        <a href="https://www.linkedin.com/in/arpit-kumar-kata/" target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-md border-2 border-black bg-white px-6 py-2.5 text-sm font-bold text-black transition-colors hover:bg-neutral-100 neo-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
                            <Linkedin className="h-5 w-5" />
                            LinkedIn
                        </a>
                    </div>

                    {/* overlay */}
                    <div className="absolute inset-0 z-10 h-full w-full bg-white/60 pointer-events-none" />
                    <ThreeDMarquee
                        className="pointer-events-none absolute inset-0 h-full w-full opacity-40 mix-blend-multiply"
                        images={marqueeImages}
                    />
                </div>
            ),
        },
        {
            title: "Featured Projects",
            icon: <Sparkles className="h-5 w-5" />,
            value: "featured",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-6 text-xl md:text-2xl font-bold text-black bg-white border-2 border-black neo-shadow">
                    <p className="mb-8 text-center">Featured Work</p>
                    <BentoGrid className="w-full">
                        {projects.map((item, i) => (
                            <BentoGridItem
                                key={i}
                                title={item.title}
                                description={item.description}
                                header={
                                    <div className={`flex flex-1 w-full h-full min-h-[10rem] rounded-xl bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-900 dark:to-neutral-800 border border-transparent dark:border-white/[0.2]`} />
                                }
                                icon={item.icon}
                                tags={item.tags}
                                className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                            />
                        ))}
                    </BentoGrid>
                </div>
            ),
        },
        {
            title: "Minor / Fun",
            icon: <Gamepad2 className="h-5 w-5" />,
            value: "minor",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-6 text-xl md:text-2xl font-bold text-black bg-white border-2 border-black neo-shadow">
                    <p className="mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-500">Side Experiments</p>
                    <BentoGrid className="w-full">
                        {minorProjects.map((item, i) => (
                            <BentoGridItem
                                key={i}
                                title={item.title}
                                description={item.description}
                                header={
                                    <div className={`flex flex-1 w-full h-full min-h-[10rem] rounded-xl bg-gradient-to-br from-pink-100 to-yellow-100 border border-transparent`} />
                                }
                                icon={item.icon}
                                tags={item.tags}
                                className={i === 0 ? "md:col-span-2" : ""}
                            />
                        ))}
                    </BentoGrid>
                </div>
            ),
        },
    ];

    return (
        <section className="py-24 bg-background min-h-screen">
            <div className="w-full px-4 md:px-12 h-[60rem] md:h-[70rem] relative flex flex-col mx-auto items-center justify-start my-10">
                <motion.h2
                    className="text-4xl md:text-6xl font-black mb-12 text-center w-full underline decoration-neo-pink decoration-4 underline-offset-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Projects
                </motion.h2>
                <Tabs tabs={tabs} containerClassName="mb-12 w-full" />
            </div>
        </section>
    );
}
