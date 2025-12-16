"use client";

import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FloatingDock } from "@/components/ui/floating-dock";
import { IconHome, IconUser, IconBriefcase, IconCode, IconMail } from "@tabler/icons-react";

import { useState, useEffect } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("Home");

  const navItems = [
    { title: "Home", icon: <IconHome className="h-full w-full " />, href: "#" },
    { title: "Experience", icon: <IconBriefcase className="h-full w-full " />, href: "#experience" },
    { title: "Projects", icon: <IconCode className="h-full w-full " />, href: "#projects" },
    { title: "Skills", icon: <IconUser className="h-full w-full " />, href: "#skills" },
    { title: "Contact", icon: <IconMail className="h-full w-full " />, href: "mailto:arpitkumar15583@gmail.com" },
  ];

  useEffect(() => {
    const sections = ["experience", "projects", "skills"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Capitalize first letter to match navItem title
            const id = entry.target.id;
            const title = id.charAt(0).toUpperCase() + id.slice(1);
            setActiveTab(title);
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of section is visible
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    // Special case for Home (top of page)
    const handleScroll = () => {
      if (window.scrollY < 100) setActiveTab("Home");
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="min-h-screen relative w-full overflow-hidden bg-background flex flex-col items-center justify-between pb-24">
      <div className="absolute inset-0 w-full h-full bg-background z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <div className="relative z-10 w-full">
        <div id="home"><Hero /></div>
        <div id="experience"><Experience /></div>
        <div id="projects"><Projects /></div>
        <div id="skills"><Skills /></div>
        <div id="contact"><Contact /></div>
        <Footer />
      </div>

      <div className="fixed bottom-10 inset-x-0 z-50 flex justify-center">
        <FloatingDock items={navItems} activeTab={activeTab} />
      </div>
    </main>
  );
}
