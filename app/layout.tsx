import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pavan Kumar Kondeti | Full Stack Developer & DevOps Engineer",
  description: "Full Stack Developer and DevOps Engineer specializing in React, Node.js, NestJS, Python, AWS, Docker, Kubernetes, CI/CD, and cloud automation. Building scalable applications with AI/ML knowledge.",
  keywords: ["Full Stack Developer", "DevOps Engineer", "React", "Node.js", "NestJS", "Python", "AWS", "Docker", "Kubernetes", "CI/CD", "Terraform", "AI/ML", "Data Science"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} text-gray-800`}>{children}</body>
    </html>
  );
}
