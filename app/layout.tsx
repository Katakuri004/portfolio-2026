import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Changing to Inter for a cleaner SaaS look
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arpit Kumar | Multimodal Data Engineer",
  description: "Portfolio of Arpit Kumar, a Multimodal Data Engineer specializing in GenAI, LLMs, and Computer Vision.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "min-h-screen bg-background text-foreground antialiased selection:bg-primary/20 selection:text-primary")}>
        {children}
      </body>
    </html>
  );
}
