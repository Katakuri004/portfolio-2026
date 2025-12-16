"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
    return (
        <footer className="py-12 border-t border-border/50 bg-background/50 backdrop-blur-sm">
            <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Arpit Kumar. All rights reserved.
                </div>

                <div className="flex items-center gap-4">
                    <Button variant="ghost" size="icon" asChild>
                        <a href="mailto:arpitkumar15583@gmail.com" aria-label="Email">
                            <Mail className="h-5 w-5" />
                        </a>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                        <a href="https://linkedin.com/in/arpit-kumar-kata" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                            <Linkedin className="h-5 w-5" />
                        </a>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                        <a href="https://github.com/arpitkumar-kata" target="_blank" rel="noreferrer" aria-label="GitHub">
                            <Github className="h-5 w-5" />
                        </a>
                    </Button>
                </div>
            </div>
        </footer>
    );
}
