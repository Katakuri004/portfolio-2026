"use client";

import { motion } from "framer-motion";
import { WorldMap } from "@/components/ui/world-map";
import { IconBrandGithub, IconBrandLinkedin, IconBrandTwitter, IconMail } from "@tabler/icons-react";

export function Contact() {
    return (
        <section className="relative w-full py-32 overflow-hidden bg-white" id="contact">
            {/* Background Map */}


            <div className="container relative z-10 w-full max-w-none px-4 md:px-12">
                <motion.h2
                    className="text-4xl md:text-6xl font-black mb-20 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="bg-black text-white px-4 inline-block transform rotate-1">Contact Me</span>
                </motion.h2>

                <div className="w-full max-w-none rounded-3xl border-2 border-black neo-shadow bg-neutral-950 relative overflow-hidden">
                    {/* Shared Background Map */}
                    <div className="absolute inset-0 z-0 opacity-100 pointer-events-none">
                        <WorldMap dotsColor="#4D96FF" glowColor="#4D96FF" fit="cover" />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 relative z-10">
                        {/* Left: Info */}
                        <div className="flex flex-col gap-8 p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-white/10 bg-black/10 backdrop-blur-[2px]">
                            <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tighter text-white">Let&apos;s Build Something Amazing.</h3>
                            <p className="text-lg text-neutral-400 font-medium">
                                I&apos;m currently available for freelance work and open source collaborations.
                                If you have a project that needs some creative coding touch, let&apos;s talk.
                            </p>

                            <div className="flex flex-col gap-4 mt-auto">
                                <a href="mailto:arpitkumar15583@gmail.com" className="flex items-center gap-4 text-xl md:text-2xl font-bold text-white hover:text-neo-blue transition-colors group">
                                    <div className="p-4 bg-white text-black rounded-full group-hover:bg-neo-blue group-hover:text-black transition-colors border-2 border-transparent">
                                        <IconMail size={28} />
                                    </div>
                                    <span className="break-all">arpitkumar15583@gmail.com</span>
                                </a>
                            </div>

                            <div className="flex gap-4 mt-8">
                                <SocialButton href="https://github.com" icon={<IconBrandGithub size={24} />} />
                                <SocialButton href="https://linkedin.com" icon={<IconBrandLinkedin size={24} />} />
                                <SocialButton href="https://twitter.com" icon={<IconBrandTwitter size={24} />} />
                            </div>
                        </div>

                        {/* Right: Form */}
                        <div className="p-8 md:p-12 flex flex-col gap-8 relative">
                            {/* Decorative Badge */}
                            <div className="absolute top-8 right-8 bg-white border-2 border-black px-4 py-2 rounded-full font-black transform rotate-6 neo-shadow text-sm z-20 hidden md:block">
                                SAY HELLO! 👋
                            </div>

                            <form className="flex flex-col gap-6 relative z-10">
                                <div className="flex flex-col gap-2">
                                    <label className="font-bold text-lg text-white">Name</label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full p-4 rounded-xl border-2 border-black bg-white focus:outline-none focus:neo-shadow transition-all"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="font-bold text-lg text-white">Email</label>
                                    <input
                                        type="email"
                                        placeholder="john@example.com"
                                        className="w-full p-4 rounded-xl border-2 border-black bg-white focus:outline-none focus:neo-shadow transition-all"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="font-bold text-lg text-white">Message</label>
                                    <textarea
                                        rows={4}
                                        placeholder="Tell me about your project..."
                                        className="w-full p-4 rounded-xl border-2 border-black bg-white focus:outline-none focus:neo-shadow transition-all resize-none"
                                    />
                                </div>

                                <button className="bg-neo-blue text-white text-xl font-bold py-4 rounded-xl border-2 border-black hover:bg-white hover:text-black hover:neo-shadow transition-all mt-4">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
const SocialButton = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
    <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="p-3 bg-white rounded-full border-2 border-black hover:neo-shadow hover:-translate-y-1 transition-all text-black"
    >
        {icon}
    </a>
)
