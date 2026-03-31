import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pavan Kumar Kondeti | DevOps Engineer & Cloud Specialist",
  description: "DevOps Engineer specializing in AWS, Kubernetes, Docker, CI/CD pipelines, Terraform, and Infrastructure as Code. Building scalable cloud infrastructure and automating deployments.",
  keywords: ["DevOps Engineer", "AWS", "Kubernetes", "Docker", "CI/CD", "Terraform", "Ansible", "Jenkins", "Cloud Infrastructure", "Infrastructure as Code"],
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
