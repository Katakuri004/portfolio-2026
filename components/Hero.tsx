"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, FileText } from "lucide-react";
import { FlipWords } from "@/components/ui/flip-words";

import Image from "next/image";

export function Hero() {
    return (
        <section className="relative flex min-h-[85vh] flex-col justify-center py-24 md:py-32 overflow-hidden">

            <div className="container relative z-10 grid md:grid-cols-2 gap-12 items-center">
                <div className="flex flex-col items-start text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Badge variant="outline" className="mb-6 text-sm font-bold px-4 py-2 border-2 bg-neo-yellow text-black neo-shadow">
                            Available for Opportunities
                        </Badge>
                    </motion.div>

                    <motion.h1
                        className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[1.1]"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        I'm <span className="inline-block bg-neo-pink text-black px-4 -rotate-2 transform">Arpit Kumar</span>, <br />
                        a <FlipWords words={["Developer", "Engineer", "Student", "Nerd"]} className="text-6xl md:text-8xl font-black text-black bg-neo-green -rotate-1 px-4 inline-block" /> <br />
                        from <span className="inline-block bg-neo-blue text-black px-4 rotate-1 transform">India</span>
                    </motion.h1>

                    <motion.p
                        className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-12 font-medium"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Specializing in <span className="text-foreground font-bold underline decoration-neo-purple decoration-4 underline-offset-4">GenAI</span>, <span className="text-foreground font-bold underline decoration-neo-green decoration-4 underline-offset-4">LLMs</span>, and <span className="text-foreground font-bold underline decoration-neo-yellow decoration-4 underline-offset-4">Computer Vision</span>.
                    </motion.p>

                    <motion.div
                        className="flex flex-wrap gap-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <Button variant="default" size="lg" className="h-14 px-10 text-lg rounded-full bg-foreground text-background font-bold border-2 border-transparent hover:border-transparent hover:bg-gradient-to-r hover:from-neo-blue hover:to-neo-purple hover:text-white transition-all duration-300" asChild>
                            <a href="mailto:arpitkumar15583@gmail.com">
                                <Mail className="mr-2 h-5 w-5" /> Get in touch
                            </a>
                        </Button>
                        <Button variant="outline" size="lg" className="h-14 px-10 text-lg rounded-full font-bold bg-transparent border-2 border-foreground hover:bg-gradient-to-r hover:from-neo-pink hover:to-neo-yellow hover:text-black hover:border-transparent transition-all duration-300" asChild>
                            <a href="#projects">
                                View Resume
                            </a>
                        </Button>
                    </motion.div>

                    {/* Social Links as simple text icons below */}
                    <motion.div
                        className="mt-12 flex gap-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        <a href="https://linkedin.com/in/arpit-kumar-kata" target="_blank" rel="noreferrer" className="p-3 border-2 border-foreground rounded-full hover:bg-neo-blue hover:text-black transition-colors">
                            <Linkedin className="h-6 w-6" />
                        </a>
                        <a href="https://github.com/arpitkumar-kata" target="_blank" rel="noreferrer" className="p-3 border-2 border-foreground rounded-full hover:bg-neo-purple hover:text-white transition-colors">
                            <Github className="h-6 w-6" />
                        </a>
                        <a href="/resume.pdf" target="_blank" rel="noreferrer" className="p-3 border-2 border-foreground rounded-full hover:bg-neo-pink hover:text-black transition-colors">
                            <FileText className="h-6 w-6" />
                        </a>
                    </motion.div>
                </div>

                <div className="flex justify-center md:justify-end relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="relative w-[350px] h-[350px] md:w-[550px] md:h-[550px] bg-neo-yellow rounded-3xl border-4 border-black neo-shadow overflow-hidden"
                    >
                        <Image
                            src="/hero-picture.jpg"
                            alt="Arpit Kumar Avatar"
                            fill
                            className="object-cover"
                            priority
                        />
                    </motion.div>
                </div>
            </div>

            {/* Geometric Decorative Elements */}
            <div className="absolute top-1/4 right-10 w-32 h-32 bg-neo-yellow rounded-full border-2 border-border opacity-20 md:opacity-100 hidden md:block animate-bounce delay-700" style={{ animationDuration: '3s' }} />
            <div className="absolute bottom-1/4 right-1/3 w-24 h-24 bg-neo-pink rotate-45 border-2 border-border opacity-20 md:opacity-100 hidden md:block" />
            <div className="absolute top-1/3 left-10 w-16 h-16 bg-neo-blue rounded-lg border-2 border-border opacity-20 md:opacity-100 hidden md:block animate-pulse" />

        </section>
    );
}
